import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import app from "../firebase";

function ContactList() {
  // Map method => takes an array and returns a new modified array
  // const arr2 = [ 1,2,3,4,5]
  // function double(x) {
  //   return x * 2
  // }
  // let newarr = arr2.map( double )
// 1 name ==> function keyword => add arrows => remove return (optional) => remove call brackets (optional) 


const db = getFirestore(app);
const [arr ,setArr] = useState([])


async function getUsers(){
  const querySnapshot = await getDocs(collection(db, "users"));
  let temparr = [] ;
  querySnapshot.forEach((doc) => {
    temparr.push(doc.data())
  });
  setArr(temparr)
  }

  useEffect(()=>{
    getUsers();
  } , [])

  return (
    <div className=" bg-[#302f2f] w-1/5 m-2 overflow-y-scroll h-[84vh]  rounded-lg">
      {arr.map((x,y) => <ContactCard key={y} personName={x.name} personPhoto={x.img} />)}
    </div>
  );
}

export default ContactList;
