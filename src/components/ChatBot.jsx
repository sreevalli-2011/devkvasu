
import { useState, useRef, useEffect } from "react";
import "./chatbot.css";
import chatbot_1 from "../assets/images/chatbot_1.png";
import { getGeminiResponse } from "./GeminiAPI";

export default function ChatBot() {
  const [isTyping, setIsTyping] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi 👋 I am dev assistant. How can I help you?" }
  ]);

const messagesEndRef = useRef(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth"
  });
}, [messages, isTyping]);

const handleSend = async () => {

  if (!input.trim()) return;

  const currentInput = input;

  const userMessage = {
    type: "user",
    text: currentInput
  };

  setMessages(prev => [...prev, userMessage]);

  setInput("");

  setIsTyping(true);

  try {

    const aiReply = await getGeminiResponse(currentInput);

    setMessages(prev => [
      ...prev,
      {
        type: "bot",
        text: aiReply
      }
    ]);

  } catch (error) {

    console.error(error);

    setMessages(prev => [
      ...prev,
      {
        type: "bot",
        text: "Sorry, something went wrong."
      }
    ]);

  }

  setIsTyping(false);
};
  




  return (

 

    
    <div className="chatbot-wrapper">

      {/* Floating Button */}
      {!open && (
      
<div className="chat-girl" onClick={() => setOpen(true)}>
  <img
    src={chatbot_1}
    alt="chat" style={{ width: "150%", height: "150%", position: "fixed"}}
   
  />
</div>
      )}
      {/* Chat Window */}
      <div className={`chat-container ${open ? "show-chat" : ""}`}>

        {/* Header */}
        <div className="chat-header">
          <h3>devkvasu AI</h3>
          <button onClick={() => setOpen(false)}>✖</button>
        </div>

        {/* Body */}
        <div className="chat-body">

  {messages.map((msg, i) => (
    <div key={i} className={`message ${msg.type}`}>
      {msg.text}
    </div>
  ))}

  {isTyping && (
    <div className="message bot">
      devkvasu AI is typing...
    </div>
  )}

  <div ref={messagesEndRef}></div>

</div>

        {/* Footer */}
        <div className="chat-footer">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type message..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>

      </div>
    </div>
  );
}
