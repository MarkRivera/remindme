# Generated by Django 3.1.5 on 2021-01-18 21:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_user_password'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='renew_date',
            new_name='reminder_date',
        ),
        migrations.RemoveField(
            model_name='user',
            name='subscribed',
        ),
    ]