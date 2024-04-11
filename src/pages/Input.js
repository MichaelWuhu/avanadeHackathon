import "../styles/Input.css";
import { useState } from "react";
import "../styles/Input.css";

import ChatCard from "../components/ChatCard";

function Input() {
  const [inputValue, setInputValue] = useState(); // Add state for inputValue

  const [messages, setMessages] = useState([]); // Add state for messages

  const handleUserInput = (event) => {
    if (event.keyCode === 13) {
      const value = event.target.value;
      setInputValue(value); // Update inputValue state
      setMessages((prevMessages) => [...prevMessages, value]); // Add value to messages array
      event.target.value = "";
    }
  };

  return (
    <div className="input-page-container">
      <h1>Chat</h1>

      <div className="chat">
        <div className="chat-history">
          {messages.map((message, index) => (
            <ChatCard key={index} user={"NAME"} message={message} />
          ))}
        </div>
        <input
          className="user-input"
          type="text"
          onKeyDown={handleUserInput}
        ></input>
      </div>
    </div>
  );
}

export default Input;
