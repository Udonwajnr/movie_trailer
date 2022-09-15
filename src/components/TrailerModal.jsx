import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import ReactPlayer from 'react-player'

const TrailerModal = ({trailerModal, toggleTrailerModal,trailer}) => {
  return (
    <div className=' modal w-full h-screen  absolute flex justify-center items-center top-0  z-40'>
        <AiOutlineClose  onClick={toggleTrailerModal} color='#fff ' size={30} className='cursor-pointer absolute top-3 right-3'/>
        <ReactPlayer
         url={trailer}
         controls={true}
         />  
    </div>
  )
}

export default TrailerModal