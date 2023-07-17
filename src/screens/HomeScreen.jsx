import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Branding from "../components/Branding";
import ContactList from "../components/ContactList";
import Feed from "../components/Feed";
import UserProfile from "../components/UserProfile";
import Chat from "../components/Chat/Chat";

function HomeScreen(props) {
  const [showFeed ,setShowFeed] = useState(true)




  return (
    <div className="flex flex-col h-full">
      <Navbar user={props.user} logout={props.logout} />

      <div className=" flex-grow flex w-screen bg-[#1a1a1a] ">
        <ContactList />
            {showFeed ? <Feed user={props.user} /> : <Chat />}           
        <UserProfile user={props.user} logout={props.logout} showFeed={showFeed} feedChanger={setShowFeed} />
      </div>

      <Branding />
    </div>
  );
}

export default HomeScreen;
