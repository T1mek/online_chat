import React from "react";
import Cam from '../image/cam.png'
import More from '../image/more.png'
import Add from '../image/add.png'
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="camera" />
          <img src={Add} alt="add" />
          <img src={More} alt="more" />
        </div>
        
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
