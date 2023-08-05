import numpy as np
from flask import Flask 
from flask import render_template, jsonify, request
import os 
import openai
os.environ["OPENAI_API_KEY"] = "plug api key here"
# or you can import it which is the way I recommend is to import it. 

# WE NEED TO ENSURE THAT THE RESTFUL API IS READY TO GO 
import json
# When we plug into GitHub make sure to replace the api key
app = Flask(__name__)
@app.route('/api/chatbot', methods =['POST']) # we are getting something
def chat():
    user_Message = request.json['message']
    # calling the chatbot openAPI this code stays the same, so keep this
    #openai.api_key = "plug here"
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


 









