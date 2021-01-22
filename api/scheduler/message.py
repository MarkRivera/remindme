from twilio.rest import Client
import os

def send(number, msg):
    account_sid = os.getenv("ACCOUNT_SID")
    auth_token = os.getenv("AUTH_TOKEN")
    twil_number = os.getenv("TWIL_NUMBER")
    
    client = Client(account_sid, auth_token)
    message = client.messages.create(
    to=f"+1{number}", 
    from_=twil_number,
    body=msg)

    print(message.sid)