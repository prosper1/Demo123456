web: gunicorn autotaxi.wsgi:application
worker: python manage.py runworker -v2
release: python manage.py makemigrations
release: python manage.py migrate