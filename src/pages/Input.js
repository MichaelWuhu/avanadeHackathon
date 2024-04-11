import "../styles/Input.css";
import { useState, useEffect } from "react";
import "../styles/Input.css";

import ChatCard from "../components/ChatCard";
import micButton from "../assets/micButton.png";

function Input() {
  const [messages, setMessages] = useState([]); // Add state for messages


  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    console.log("Messages in localStorage:", localStorage.getItem("messages"));
    console.log(storedMessages);
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages)); // this doesn't work for some reason
    }
    console.log("messages", messages)
  }, []);


  // UNCOMMENT THIS IF THE ABOVE USEEFFECT WORKS
  //
  // useEffect(() => {
  //   localStorage.setItem("messages", JSON.stringify(messages));
  //   console.log("Messages in localStorage:", localStorage.getItem("messages"));
  // }, [messages]);

  const handleUserInput = (event) => {
    if (event.keyCode === 13) {
      const value = event.target.value;
      setMessages((prevMessages) => [...prevMessages, value]); // Add value to messages array
      event.target.value = "";

      // Log localStorage after setting messages
      console.log(
        "Messages in localStorage:",
        localStorage.getItem("messages")
      );
    }
  };

  // const { G4F } = require("g4f");
  // const g4f = new G4F();
  // const messages = [
  //   {
  //     role: "system",
  //     content: "You're a therapist empowering maternal metnal health.",
  //   },
  // ];
  // g4f.chatCompletion(messages).then(console.log);

  return (
    <div className="input-page-container">
      <h1>Journal</h1>

      <div className="chat">
        <div className="chat-history">
          {messages.map((message, index) => (
            <ChatCard key={index} user={"NAME"} message={message} />
          ))}
        </div>
        <div className="inputs">
          <input
            className="user-input"
            type="text"
            onKeyDown={handleUserInput}
          ></input>
          <div className="micButtonContainer">
            <img className="micButton" src={micButton} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
