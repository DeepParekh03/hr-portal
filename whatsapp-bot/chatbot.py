from twilio.rest import Client
import os
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
import asyncio

app = Flask(__name__)

account_sid = 'ACcb2b15fc2739763dec3ba07208e536e0'
auth_token = '7622c5b53c319f445a35163ed4cbfc06'
client = Client(account_sid, auth_token)

message = client.messages.create(
  from_='whatsapp:+14155238886',
  body='Please select your regional language',
  to='whatsapp:+919819628102'
)

@app.route("/whatsapp", methods=["POST"])
def whatsapp():
    # Get the incoming message
    incoming_message = request.form["Body"]

    # Create a Twilio MessagingResponse object
    response = MessagingResponse()
    
    # Add a message to the response
    response.message("You paid: " + incoming_message)
    
    # Send the response back to Twilio
    return str(response)


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(app.run(debug=True))

print(message)