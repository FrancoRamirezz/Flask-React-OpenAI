 # Personal portfolio project 🚀

Building a Chatbot project using React for the interface and FastAPI for the backend

## Table of Contents 🤖
- [Installation](#installation)
- [Scripts](#Scripts)
- [Features](#features)
- [Contributing](#contributing)


## Installation
Step 1: Create two folders one named Client and Server

Step 2: Create a new subdirectory for the Client folder
Commands needed for MAC: Pwd == Present working directory,
                        cd == Change Directory to the Client folder

Step 3: Create a new subdirectory for the Server folder. Use the same commands as the one before

## Scripts

### Server:
Go into terminal and type this "pip install FastAPI"

Note: the typical port for Flask is 5000 or 5500 

Open http://localhost:5000 to view it in the browser.

### Client:
Go into terminal and type this "npm install"

Then run "npm start" in the terminal and all the following dependencies will follow

Open http://localhost:3000 to view it in the browser.


## Features 
-  Feature 1: To ensure ports do connect go into
-  "package.json" and use the following code

 "private": true,
"proxy": "http://local-host:5000"

- Feature 2: Implement OpenAI api key. Best practice is to make another file and then import it to the "APP.py"

## Contributing

For the future, the plan is to incorporate a easier usability for the interface and develop more routes for the backend 





