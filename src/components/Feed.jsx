import React from 'react'
import Post from './Post'

function Feed(props) {
  return (
    <div className=' flex-grow overflow-y-scroll h-[84vh] py-4 bg-[#1a1a1a] m-2 rounded-lg'>
      <div className=' bg-black p-4  max-w-2xl mx-auto'>
        <div className=' text-gray-200'>Upload Image</div> 
        <div className=' flex items-center bg-black space-x-4 p-4'>
        <img
            className=" h-10 aspect-square rounded-full object-cover"
            src={props.user.photoURL}
          />
        <div className=' border px-4 py-2 rounded-lg w-full flex'>
        <input placeholder='write Caption' className=' w-full bg-transparent'  />
        <button className='text-white'>Post</button>
        </div>
        </div>

        
      </div>

      <Post url='https://images.wallpaperscraft.com/image/single/couple_mountains_travel_125490_1024x768.jpg' />
      <Post url='https://images.wallpaperscraft.com/image/single/couple_mountains_travel_125490_1024x768.jpg' />
      <Post url='https://images.wallpaperscraft.com/image/single/couple_mountains_travel_125490_1024x768.jpg' />
      <Post url='https://images.wallpaperscraft.com/image/single/couple_mountains_travel_125490_1024x768.jpg' />

      <Post url='https://images.wallpaperscraft.com/image/single/couple_mountains_travel_125490_1024x768.jpg' />

    </div>
  )
}

export default Feed