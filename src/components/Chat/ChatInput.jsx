import React from 'react'

function ChatInput() {
  return (
    <div className='  flex bg-white/90 rounded-lg '>
        <input className=' w-full bg-transparent px-4' placeholder='Type your message ...' />
        <button className=' p-3 px-8 bg-green-500 rounded-lg hover:bg-[#f7ab0a]'>Post</button>

    </div>
  )
}

export default ChatInput