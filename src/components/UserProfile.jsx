import React from 'react'

function UserProfile(props) {

  return (
    <div className=' w-1/5'>
        <div className=' bg-gradient-to-br from-purple-600 via-rose-600 to-yellow-500 rounded-3xl cursor-pointer shadow-2xl hover:shadow-white m-4 py-20 flex flex-col justify-between items-center'>
        <img
            className=" p-2 bg-black h-40 w-40 items-center mx-auto aspect-square rounded-full object-cover"
            src={props.user.photoURL}
          />

          <p className=' text-white bg-black/20 px-4 font-semibold text-3xl  font-mono my-2 py-2'>{props.user.displayName}</p>
          <button onClick={()=>props.logout()} className=' bg-black px-6 py-2 text-white rounded-full'>Signout</button>
        </div>

        <div className=' flex flex-col'>
        <button onClick={() => props.feedChanger(true)} className=' bg-white py-3 my-2 mx-4 font-bold hover:bg-[#f7ab0a] rounded-xl hover:scale-105 transform transition duration-300 ease-in-out'> Feed </button>
        <button onClick={() => props.feedChanger(false)} className=' bg-white py-3 my-2 mx-4 font-bold hover:bg-[#f7ab0a] rounded-xl hover:scale-105 transform transition duration-300 ease-in-out'>Group Chats</button>
        </div>
    </div>
  )
}

export default UserProfile