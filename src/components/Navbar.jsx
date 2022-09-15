import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/Navbar.css'
import {NavLink} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {BiMoviePlay} from 'react-icons/bi'
import {VscThreeBars} from 'react-icons/vsc'
import {AiOutlineClose} from 'react-icons/ai'
import UserProfile from './UserProfile'
import { useSelector,useDispatch } from 'react-redux'
import { app } from '../Firebase/firebase'
import { getAuth ,signOut} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { setUserLogout } from '../features/users/userSlice'


const Navbar = ({sidebarToggle,toggleSidebar}) => {
    const dispatch = useDispatch()
    const userName = useSelector((state)=>state.user.name)
    const auth = getAuth()
    const navigate = useNavigate()


    const logout =()=>{
    signOut(auth).then(() => {
        dispatch(setUserLogout())
        navigate('/signup')
      }).catch((error) => {
          console.log(error.message)
});
    
  }
  return (
    <div className='sticky top-0 z-40 navbar bg-[#263245] flex justify-between px-6 py-2 phone:px-2 items-center '>
        {
            userName &&
         <div className='md:contents hidden cursor-pointer' onClick={sidebarToggle}>
           {toggleSidebar ?
                <AiOutlineClose size={25} color={'#fff'} className='transition duration-200'/>
                :
                <VscThreeBars size={25} color={'#fff'} className='transition duration-200'/>
           }     
         </div>

        }

         
         <div className="logo py-2 text-3xl phone:text-2xl text-center font-extrabold">
            {
                <Link to={userName?'tt/home':'/'} className='text-white '>
                   <span className='text-blue-500 '>Trailer</span> Time
                </Link>
            }

            </div>
            {
                userName&&
            <nav className='md:hidden'>
                <ul className='flex text-white'>
                    <li>
                        <NavLink
                        to={'tt/home'}
                        className={({isActive})=>isActive? 
                        'text-blue-500 border-l-blue-500  bg-slate-700 justify-center flex items-center space-x-3 p-2 mx-2':'text-center justify-center flex items-center space-x-3 p-2  hover:text-blue-500 hover:border-l-blue-500 hover:ease-in hover:bg-slate-700 transition duration-300 hover:duration-300 hover:transition mx-2  '
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
                        'text-blue-500 border-l-blue-500  bg-slate-700 justify-center flex items-center space-x-3 p-2 mx-2':'text-center justify-center flex items-center space-x-3 p-2  hover:text-blue-500 hover:border-l-blue-500 hover:ease-in hover:bg-slate-700 transition duration-300 hover:duration-300 hover:transition  mx-2'
                        }
                        >
                            <BiMoviePlay size={20}/>
                            <span className='text-sm'>Movie</span>
                        </NavLink>
                    </li>
                
                    {/* <li>
                        <NavLink
                        to={'/favourites'}
                        className={({isActive})=>isActive? 
                        'text-blue-500 border-l-blue-500  bg-slate-700 justify-center flex items-center space-x-3 p-2 mx-2':'text-center justify-center flex items-center space-x-3 p-2  hover:text-blue-500 hover:border-l-blue-500 hover:ease-in hover:bg-slate-700 transition duration-300 hover:duration-300 hover:transition mx-2 '   
                        }
                        >
                            <BsBookmarkDash size={20}/>
                            <span className='text-sm'>Favorites</span>
                        </NavLink>
                    </li> */}
                
                    {/* <li>
                        <NavLink
                          to={'/wishlist'}
                          className={({isActive})=>isActive? 
                             'text-blue-500  bg-slate-700 justify-center flex items-center space-x-3 p-2 mx-2 ':'text-center justify-center flex items-center space-x-3 p-2  hover:text-blue-500 hover:border-l-blue-500 hover:ease-in transition hover:bg-slate-700 duration-300 hover:duration-300 hover:transition mx-2'   
                        }
                        >
                            <AiOutlineHeart size={20}/>
                            <span className='text-sm'>Wishlist</span>
                        </NavLink>
                    </li> */}
                </ul>
            </nav>}
            
        {/* login */}
        {
        userName?
         <UserProfile logout={logout}/> 
        :
         <div className='md:text-sm py-2 flex gap-4  text-center text-white items-center'>
                <Link to={'/signup'} className='bg-blue-500 hover:bg-blue-400 transition duration-200 hover:duration-200 py-1 px-2 rounded-lg'>Sign In</Link>
            </div>

        }
    </div>
  )
}

export default Navbar