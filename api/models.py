from django.db import models

# Create your models here.
class User(models.Model):
  email = models.EmailField(max_length=100, unique=True)
  phone_number = models.BigIntegerField()
  reminder_date = models.DateField()
  expiration_date = models.DateField()