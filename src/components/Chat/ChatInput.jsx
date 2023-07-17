import React, { useState } from 'react'
import { addDoc, collection, doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore"; 
import app from '../../firebase';

function ChatInput(props) {
  const db = getFirestore(app)

  const schema = { 
    text : "" ,
    uid : props.user?.uid,  
    name: props.user?.displayName ,
    img : props.user?.photoURL
  }

  const [message ,setMessage] = useState(schema)


  function handleChange(e){
    const value = e.target.value ;
    setMessage({...message , text : value})
  }


  async function addMessage(){
    await addDoc(collection(db, "grpMessage"), {
      ...message ,
      time : serverTimestamp()
    });


    setMessage(schema)

  }



  return (
    <div className=' absolute  flex bg-white bottom-0 w-full rounded-lg '>
        <input value={message.text} onChange={handleChange} className=' w-full bg-transparent px-4' placeholder='Type your message ...' />
        <button onClick={addMessage} className=' p-3 px-8 bg-green-500 rounded-lg hover:bg-[#f7ab0a]'>Post</button>

    </div>
  )
}

export default ChatInput