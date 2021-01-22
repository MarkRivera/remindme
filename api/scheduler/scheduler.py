from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore, register_events
from django.utils import timezone
from django_apscheduler.models import DjangoJobExecution

from api.models import User
from api.serializers import UserSerializer
from datetime import date

from .helper import get_date_in_format, get_users, delete_users
from .message import send
import sys

# This is the function you want to schedule - add as many as you want and then register them in the start() function below
def user_stuff():
    # get accounts, expire them, etc.
    users = get_users()
    if len(users) > 0:
        for user in users:
            number = user['phone_number']
            expiration_date = user['expiration_date']
            msg = f"Hey, your license is about to expire on {expiration_date}. Don't forget!"
            # Send text to each account retrieved
            send(number, msg)

    # # Delete all accounts that were contacted
    delete_users()



def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(user_stuff, 'cron', hour=9)
    scheduler.start()
    print("Scheduler started...", file=sys.stdout)