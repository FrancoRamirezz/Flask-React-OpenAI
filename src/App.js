import './App.css';
import React, {useState} from "react";
import axios from "axios";

//import ai_image  from 'image';

//import 'App.html';

//import "./interface.js";

// make sure that the app is the same as the file name



function App() {
    const [userMessage, setUserMessage] = useState("");
    const [chatbotMessage, setChatbotMessage] = useState("");
  
    const handleUserMessageChange = (event) => {
      setUserMessage(event.target.value);
    };
    // this is where you change it
    
    const handleSendMessage = async () => {
      try {
        // Send user message to the Flask backend
        const response = await axios.post('/api/chatbot', { message: userMessage, api_key:"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" }
          );
        
        // Update chatbot message in the React state
        setChatbotMessage(response.data.response);
      } catch (error) {
        console.error("Error:", error);
      }
   
    };


    return (
      <div>
        <h1 className=".Chatbot-container">Franco's HiAi techbot</h1>
        <div>
        <p className='Chatbot-title'>This is Franco techbot, so how can I help you</p>
          <input type="text" value={userMessage} onChange={handleUserMessageChange} />
          <button onClick={handleSendMessage}>Send</button>
          </div>
      <div className='text-bubble'>
  
        </div > 
        
        <div>
        <input type = 'text'/>
        <button class="button-86" role="button">Chat message</button>
        <p> type your message here</p>
        </div> 
        <div>
          <p>User: {userMessage}</p>
          <p>Open AIChatbot: {chatbotMessage}</p>

        </div>
      <div>

      </div>


      </div>
    );
  }
  
  
  export default App;

;

















//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
         // Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        
       // </a>
      //<a>
        
      //</a>
      //</header>
    //</div>
  
  
  //);
//}

//export default App;
