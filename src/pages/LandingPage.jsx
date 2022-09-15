import React,{useEffect} from 'react'
import '../assets/css/Landing.css'
import { app } from '../Firebase/firebase'
import { useSelector,useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { setUserLogin } from '../features/users/userSlice'


const LandingPage = () => {
 const auth = getAuth()
  const navigate = useNavigate()
  const userName = useSelector((state)=>state.user.name)
  const dispatch = useDispatch()


  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        setUser(user)
        navigate('/tt/home')
      }
    })
    
  },[userName])

  const setUser=(user)=>{
  dispatch(
    setUserLogin({
      name:user.displayName,
      email:user.email,
      picture:user.photoURL,
    })
  )
}



  return (
    <div className='landing-page  flex justify-center items-center flex-col gap-3'>
        <h4 className='capitalize text-7xl text-slate-200 text-center'>Welcome to movie Time</h4>
        <p className='capitalize text-base text-slate-300 text-center'>the best Movie Trailer Experience </p>
    </div>
  )
}

export default LandingPage