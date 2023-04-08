from twilio.rest import Client
import os
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
import asyncio
from googletrans import Translator

translator = Translator()
app = Flask(__name__)


account_sid = 'ACcb2b15fc2739763dec3ba07208e536e0'
auth_token = '7622c5b53c319f445a35163ed4cbfc06'
client = Client(account_sid, auth_token)

message = client.messages.create(
  from_='whatsapp:+14155238886',
  body='Please select your regional language',
  to='whatsapp:+919819628102'
)
@app.route("/", methods=["POST"])
def hello_world():
    return("Hello, World!")

@app.route("/whatsapp", methods=["POST"])
def whatsapp():
    # Get the incoming message
    print(request)
    incoming_message = request.form["Body"]
    media_content_type = request.values.get('MediaContentType0')
    # Create a Twilio MessagingResponse object
    response = MessagingResponse()
    
    # Add a message to the response
    # if(incoming_message == "gujurati"):
    #     translator.translate('Please enter your name', dest='gu')
    print(incoming_message)
    incoming_message = request.form["Body"]
    # Add a message to the response
    
    if(incoming_message=="hindi"):
        response.message("अपना नाम दर्ज करें")
    elif(incoming_message=="ishaan"):
        response.message("आधार कार्ड भेजें")
    elif(media_content_type and media_content_type.startswith('image/')):
        response.message("आपने कितने साल काम किया है")
    elif(incoming_message=="5"):
        response.message("हमारे साथ पंजीकरण करने के लिए धन्यवाद ❤️")
    
    
    # Send the response back to Twilio
    return str(response)
    


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(app.run(debug=True))
