from api.models import User
from api.serializers import UserSerializer
from datetime import date

def get_date_in_format():
  return date.today().strftime("%Y-%m-%d")

today = get_date_in_format()


def get_users():
  try:
    users = User.objects.filter(reminder_date=today)
    serializer = UserSerializer(users, many=True)
  except User.DoesNotExist:
    print(serializer.errors)
  
  return serializer.data

def delete_users():
  try:
    users = User.objects.filter(reminder_date=today)
    serializer = UserSerializer(users, many=True)
  except User.DoesNotExist:
    print(serializer.errors)
  return users.delete()