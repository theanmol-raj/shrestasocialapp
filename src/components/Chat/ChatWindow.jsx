import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  getFirestore,
  orderBy,
} from "firebase/firestore";
import app from "../../firebase";

function ChatComp(props) {
  console.log(props.data)
  return (
    <div>
      { props.user?.uid === props.data.uid ? <div className="w-full flex justify-end">
        <div className=" bg-gray-200 rounded-full rounded-br-none max-w-max my-1 py-2 px-4">
          {props.data.text}
        </div>
      </div> :<div className="w-full flex justify-start items-center space-x-4">
        <img src={props.data.img} className=" h-10  rounded-full" />
        <div className=" bg-lime-400 max-w-max my-1 rounded-md rounded-bl-none  py-2 px-4">
          <p className=" font-bold">{props.data.name}</p>
          <p>{props.data.text}</p>
        </div>
      </div>}
    </div>
  );
}

function ChatWindow(props) {
  const db = getFirestore(app);

  const [messages, setMessages] = useState([]);

  async function getAllMessages() {
    const q = query(collection(db, "grpMessage"), orderBy("time" , "asc"));
    await onSnapshot(q, (querySnapshot) => {
      const temparr = [];
      querySnapshot.forEach((doc) => {
        temparr.push(doc.data());
      });
      setMessages(temparr)
    });
  }

  useEffect(()=>{
    getAllMessages()
   },[])



  return (
    <div className=" flex-grow max-h-[80vh] p-4">
      <p className=" text-white text-center text-3xl font-semibold">
        Welcome to Group Chat
      </p>
      <div className=" flex-grow max-h-[80vh] overflow-y-scroll px-8">
        {messages.map(message => <ChatComp user={props.user} data={message} />)}
      </div>
    </div>
  );
}

export default ChatWindow;
