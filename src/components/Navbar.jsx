import React from "react";

function Navbar(props) {
  return (
    <div className="w-screen bg-black">
      <div className=" max-w-7xl mx-auto py-6 flex items-center justify-between">
        <div className=" flex cursor-pointer">
          <img
            className=" h-10 w-10 "
            src="https://img.icons8.com/glyph-neue/200/f7ab0a/maple-leaf.png"
            alt="logo"
          />
          <h1 className=" text-white font-bold text-2xl">
            Socials<span className="text-[#f7ab0a]">App</span>
          </h1>
        </div>

        <div className=" text-white flex items-center space-x-4">
          <img
            className=" h-10"
            src="https://img.icons8.com/sf-black/64/FFFFFF/pencil.png"
            alt="pencil"
          />
          <button>
            <img
              className=" h-10"
              src="https://img.icons8.com/sf-black-filled/64/FFFFFF/conference-call.png"
              alt="conference-call"
            />
          </button>
          <img
            className=" h-10 aspect-square rounded-full object-cover"
            src={props.user.photoURL}
          />
          <img
          onClick={()=>props.logout()}
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/exit.png"
            alt="exit"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
