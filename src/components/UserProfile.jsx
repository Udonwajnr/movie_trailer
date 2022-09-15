import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import {MdLogout} from 'react-icons/md'
import '../assets/css/UserProfile.css'
import {RiArrowDropDownLine} from 'react-icons/ri'



const UserProfile = ({logout}) => {
    const userPicture = useSelector((state)=>state.user.picture)

  return (
    <div className='relative group cursor-pointer'>
        <div className='flex items-center justify-center text-slate-200'>
            <img src="/img/3d.webp" alt="" className='w-10 h-10 rounded-full' />
            <RiArrowDropDownLine size={30}/>
        </div>

        <div className=' absolute text-slate-200 top-14 -left-4 transition duration-200 hover:transition-200 opacity-0  group-hover:opacity-100 '>
          <button onClick={logout} className='p-2 bg-[#263245] flex justify-center items-center text-sm'>
            <MdLogout/>
            <span>
              Logout
            </span>
          </button>
        </div>
    {/* signout */}
    {/* signout ending */}
    </div>
  )
}

export default UserProfile