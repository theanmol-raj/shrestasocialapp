import React from 'react'
import ChatWindow from './ChatWindow'
import ChatInput from './ChatInput'

function Chat(props) {
  return (
    <div className=' flex-grow flex flex-col relative bg-gray-800 rounded-lg '>
        <ChatWindow user={props.user} />
        <ChatInput user={props.user} />
    </div>
  )
}

export default Chat