import React from 'react'

function Post(props) {
  

  return (
    <div className=" max-w-2xl mx-auto my-2 font-raleway text-white">
      <div className=" flex justify-between items-center p-4 bg-black rounded-t-md">
        <div className=" flex items-center space-x-3">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1686591994951-41341a6a4088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            className=" p-[2px] bg-gradient-to-br from-yellow-500 to-purple-500  h-10  cursor-pointer aspect-square object-cover rounded-full"
          />
          <div>
            <div className=" flex space-x-1 items-center">
              <h1>Yash Bhargo </h1>
              <img
                className="h-5"
                src="https://img.icons8.com/color/48/verified-badge.png"
                alt="verified-badge"
              />
              <div className=" h-1 w-1 rounded-full bg-gray-500" />
              <p className=" text-gray-500 text-xs"> 14 Days ago</p>
            </div>
            <div>
              {/* Locattion   */}
              <p className=" text-xs text-gray-400 tracking-wider">
                Hyderabad | India
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className=" h-5"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/ellipsis.png"
            alt="ellipsis"
          />
        </div>
      </div>
      <div className=" relative">
      <img src={props.url} />
        <div className=" absolute -bottom-2 w-full bg-gradient-to-t from-black to-transparent flex justify-between items-center p-4">
          <div className=" flex items-center text-white space-x-3">
            <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/like--v1.png" alt="like--v1"/>
          </div>
        </div>
      </div>

      <div className=" p-2 py-4 bg-black">
        <p className=" w-[95%] truncate">
          @yash.BHargao10 <span className=" text-xs tracking-wide ">
          {`Microstrategy is doing great with its Bitcoin strategy... 😱👇
            "6 months ago, people we calling for MicroStrategy's #bitcoin position to possibly get liquidated.
                Today, the stock is up 160% YTD"
                What do you think? Genius move?
                .
                .
                .
                👉Follow my page @intelligentcryptocurrency for daily content, tips and updates
                📲DM me "VIP" if you want to join my private Discord with 2000+ VIP members to get my daily crypto updates, insights and trade ideas in real time!`}
        </span>
        </p>
        <p className=" text-sm pl-1 text-gray-400">more</p>
        <p className=" text-sm pl-1 text-gray-400 font-sans">View all 1,815 comments</p>
        <div className=" relative pt-2 flex border-b border-gray-400/40 mx-2">
            <textarea rows={2} placeholder="Write a comment" className=" resize-none text-sm w-full py-2 focus:outline-none bg-transparent" />
            <button className=" text-xs text-blue-400 capitalize">post</button>
        </div>
      </div>
    </div>
  )
}

export default Post