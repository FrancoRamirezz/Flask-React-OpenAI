import numpy as np
from flask import Flask 
from flask import render_template, jsonify, request
import os 
import openai
os.environ["OPENAI_API_KEY"] = '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'
# for future refferce we shall call the from flask import  Flask bc if u do lower flask u will 
#from flask_restful import Api, Resource, reqparse
#from flask_cors import CORS #comment this on deployment
#from api.HelloApiHandler import HelloApiHandler
# WE NEED TO ENSURE THAT THE RESTFUL API IS READY TO GO 
import json
# when we plug to github make sure to replace the the api key
#openai.api_key = "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"
app = Flask(__name__)
#@app.route('/')
#def index():
 #   return  render_template("App.html")
    # hopefully we can render to the new form

@app.route('/api/chatbot', methods =['POST']) # we are getting something
def chat():
    user_Message = request.json['message']
    # calling the chatbot openAPI this code stays the same, so keep this
    #openai.api_key = "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"
    chatbot_response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": inputMessage}
            ],
        max_tokens = 1000,
        temperture = 0.5, 
        stop = None,
        engine = model_engine,
        stream = True
    )
    bot_response = chatbot_response[0].message.content
    
    
    return jsonify({'response':  bot_response})
if __name__ == "__main__":
    app.run(debug=True, port = 5000)


 









