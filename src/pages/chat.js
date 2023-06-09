import Private from '@/private/private.route';
import React, { useState , useEffect } from 'react';
import axios from  '../../hooks/hook.axios'

function chat(props) {
  
  useEffect(()=>{
    axios.get('/login',).then(res=>{
      console.log("data =>" , res.data)
    })
  })


  return (
    // <Private> 
    <div>

          <button className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              className="feather feather-send">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>

        </div>
     
  // </Private>
  );
}

export default chat;