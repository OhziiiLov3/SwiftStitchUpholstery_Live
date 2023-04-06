from django.shortcuts import render
import uuid
import boto3
import os
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from main_app.models import Product
from main_app.serializers import ProductSerializer

# Create your views here.



from rest_framework import status


@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get("keyword")
    print("query",query)
    if query == None:
        query = ''

    products = Product.objects.filter(name__icontains= query)

    page = request.query_params.get("page")
    paginator = Paginator(products,4)

    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)
    if page == None:
        page = 1 
    
    page = int(page)

    serializer = ProductSerializer(products, many=True)
    return Response({'products':serializer.data, 'page': page, 'pages': paginator.num_pages })


# @api_view(['GET'])
# def getTopProducts(request):
#     products = Product.objects.filter(name__icontains=query)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user
    product =Product.objects.create(
        user=user,
        name='Sample Name',
        price=0,
        make='Sample Make',
        model='Sample Model',
        countInStock=0,
        description=''

    )

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    data= request.data
    product = Product.objects.get(_id=pk)

    product.name = data['name']
    product.price = data['price']
    product.make = data['make']
    product.model = data['model']
    product.countInStock = data['countInStock']
    product.description= data['description']

    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request,pk):
    product = Product.objects.get(_id=pk)
    product.delete()
    return Response('Product Deleted')

@api_view(['POST'])
def uploadImage(request):
    data = request.data 
    message = ""
    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)

    image = request.FILES.get('image')
    if image:
        s3 = boto3.client('s3')
        key = uuid.uuid4().hex[:6] + image.name[image.name.rfind('.'):]
        try:
            bucket = os.environ['S3_BUCKET']
            s3.upload_fileobj(image, bucket, key)
            url = f"{os.environ['S3_BASE_URL']}{bucket}/{key}"
            product.image = url 
            product.save()
            message = "Image was uploaded"
        except Exception as e:
            message = "Image was not uploaded"
            print('An error occurred uploading file to S3')
            print(e)
    return Response(message)
