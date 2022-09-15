import React from 'react'

const Actors = () => {
  return (
    <div className='w-full md:px-2 px-6 py-2'>
        <h2 className=' text-2xl text-white'>Actors</h2>
        <div className=' flex gap-2 items-center  relative text-white'>
            <div className='   flex-col justify-center items-center'>
                <img src="/img/actors/a.jpg" alt="" className='w-12 h-12 rounded-full' />
                <p className='text-xs  break-words'>Rachel McAdams</p>
            </div>
            
            <div className='  flex-col justify-center items-center text-white'>
                <img src="/img/actors/b.jpg" alt="" className='w-12 h-12 rounded-full' />
                <p className='text-xs  break-words'>John Krasinski</p>
            </div>
            
            <div className='  flex-col justify-center items-center text-white'>
                <img src="/img/actors/c.webp" className='w-12 h-12 rounded-full' alt="" />
                <p className='text-xs  break-words'>Benedict Cumberbatch</p>
            </div>
{/* 
            <div className='w-12 h-12  flex flex-col justify-center items-center text-white'>
                <img src="/img/actors/e.jpg" alt="" className='w-12 h-12 rounded-full' />
                <p className='text-xs text-center break-words'>Xochitl Gomez</p>
            </div> */}

              {/* <div className='w-12 h-12 absolute right-0  top-0  text-center bg-slate-400 flex justify-center items-center rounded-full'>
                change to link
                <a href="" className='text-xs text-white'>View all</a>
            </div> */}
        </div>
    </div>
  )
}

export default Actors