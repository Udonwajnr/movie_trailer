import React from 'react'
import {NavLink} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {BiMoviePlay} from 'react-icons/bi'


const LeftSidebar = () => {
  

  return (
    <>

        <div className='w-40 bg-[#263245] text-white h-screen fixed  z-40   '>
            <nav>
                <ul className='block'>
                    <li>
                        <NavLink
                        to={'tt/home'}
                        className={({isActive})=>isActive? 
                        'text-blue-500 border-l-blue-500 border-[#263245] border-l-4 bg-slate-700 justify-center flex items-center space-x-3 p-2 my-4':'text-center justify-center flex items-center space-x-3 p-2  hover:text-blue-500 hover:border-l-blue-500 hover:ease-in hover:bg-slate-700 transition duration-300 hover:duration-300 hover:transition border-[#263245] border-l-4  my-4'
                        }
                        >
                            <AiOutlineHome size={20}/>
                            <span className='text-sm'>Home</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                        to={'tt/movies'}
                        className={({isActive})=>isActive? 
                        'text-blue-500 border-l-blue-500 border-[#263245] border-l-4 bg-slate-700 justify-center flex items-center space-x-3 p-2 my-4':'text-center justify-center flex items-center space-x-3 p-2  hover:text-blue-500 hover:border-l-blue-500 hover:ease-in hover:bg-slate-700 transition duration-300 hover:duration-300 hover:transition border-[#263245] border-l-4  my-4'
                        }
                        >
                            <BiMoviePlay size={20}/>
                            <span className='text-sm'>Movie</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default LeftSidebar