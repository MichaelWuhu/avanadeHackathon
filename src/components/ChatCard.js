import React from 'react';

import "../styles/ChatCard.css";

const ChatCard = ({ message }) => {
    return (
        <div className="chat-card">
            <div className="user">You</div>
            <div className="message">{message}</div>
        </div>
    );
};

export default ChatCard;