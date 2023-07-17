import React from 'react'
import ChatWindow from './ChatWindow'
import ChatInput from './ChatInput'

function Chat() {
  return (
    <div className=' flex-grow flex flex-col bg-gray-800 rounded-lg '>
        <ChatWindow />
        <ChatInput/>
    </div>
  )
}

export default Chat