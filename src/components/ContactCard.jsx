import React from 'react'

function ContactCard(props) {


  return (
    <div className=' w-full px-4 group hover:bg-[#f7ab0a] cursor-pointer transition transform duration-200 ease-in p-3 border-b border-gray-600 hover:border-none flex items-center space-x-4 font-bold rounded'>
        <img
            className=" h-10 aspect-square rounded-full object-cover"
            src={props.personPhoto}
          />
          <p className=' group-hover:text-black text-white'> {props.personName} </p>
    </div>
  )
}

export default ContactCard