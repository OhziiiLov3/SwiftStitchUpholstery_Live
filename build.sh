set -o errexit



pip3 install -r requirements.txt && python3 manage.py migrate --no-input
python3 manage.py collectstatic --no-input
if [[ $CREATE_SUPERUSER ]];
then
  python3 manage.py createsuperuser --no-input
fi

