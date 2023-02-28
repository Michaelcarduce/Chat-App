// import React from "react";
import React, { useEffect, useState } from "react";

import axios from "axios";

const ChatPage = () => {
  // chats variable use to display the data, setChats variable use to change the value of chats variable
  const [chats, setChats] = useState([]);

  //fetching api using axios
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat"); //api endpoint get request from server.js

    //this (data) will go to the setChats variable
    setChats(data);
  };

  //calling fetchChats
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    // chats variable mapping
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
