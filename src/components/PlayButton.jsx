import React from 'react'
import {FaPlay} from 'react-icons/fa'

const PlayButton = ({toggleMovieModal, toggleTrailerModal,trailerModal,movieModal}) => {
  return (
    <div className='flex gap-4 items-center mt-auto md:mt-4'>
        {/* <button onClick={toggleMovieModal} className=' md:text-sm flex  font-medium items-center gap-2 hover:bg-blue-400 transition duration-200 bg-blue-500 text-white rounded-md w-40 justify-center py-2'>
            <FaPlay/>
            PLAY NOW
        </button > */}
        <button onClick={toggleTrailerModal} className='md:text-sm font-medium bg-slate-500 hover:bg-slate-400 transition duration-200 text-white rounded-md w-40 text-center py-2'>
            TRAILER
        </button>
    </div>
  )
}

export default PlayButton