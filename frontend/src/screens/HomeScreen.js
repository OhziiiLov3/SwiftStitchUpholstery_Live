import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  useLocation } from "react-router-dom";
import { Row, Col, Alert } from 'react-bootstrap'
import Product  from "../components/Product"
import Loader from "../components/Loader"
import Contact from '../components/Contact' 
import Hero from "../components/Hero"
import Paginate from "../components/Paginate"
import { listProducts } from '../actions/productActions';

import Video from '../components/Video' 
// import HomeBlog from '../components/HomeBlog' 
// import products from '../products'
// import blog from '../blog'




function HomeScreen() {
   const dispatch = useDispatch()
   const location = useLocation()
  
 
 
   const productList = useSelector(state => state.productList)
   const {error, loading, products, page, pages } = productList  

    let keyword = location.search
    console.log(keyword)

    useEffect(() => {
      dispatch(listProducts(keyword))

    }, [dispatch,keyword])

    

    return (
      <div>
        <Hero />
        <div className="my-3">
          <h1 className="mx-auto py-3 text-center">Feature Products</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : (
            <div>
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              <Paginate page={page} pages={pages} keyword={keyword} />
            </div>
          )}
          {/* <Services /> */}
          <Video />
          <Contact/>
        </div>
      </div>
    );
}

export default HomeScreen

