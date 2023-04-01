import React, { useState } from 'react';
import { io } from "socket.io-client";

function chat(props) {
const socket = io("http://localhost:5000/");
const [message,setMessage] = useState()

const handleClick = (e)=>{
  e.preventDefault();
  console.log(socket )
  socket.emit('chat',{message})
  socket.on('chat',(load)=>{
    console.log( load)
  })


}
  return (
    <div >
      
      this is chat page with soket io <br />

      <input onChange={(e)=>setMessage(e.target.value) } type="text" name='message' placeholder='massage...' />
      <button onClick={handleClick}> Send </button>

    </div>
  );
}

export default chat;