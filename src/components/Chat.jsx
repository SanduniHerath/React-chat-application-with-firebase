import React from 'react'
import Cam from "../img/r.png";
import Add from "../img/a.png";
import More from "../img/m1.png";
import Messages from "./Messages";
import Input from "./Input";


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
