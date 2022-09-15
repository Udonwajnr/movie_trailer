import React,{useEffect} from 'react'
import Discover from '../components/Discover'
import Latest from '../components/Latest'
import Trending from '../components/Trending'
import { useSelector,useDispatch } from 'react-redux'
import { getAuth,onAuthStateChanged} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { setUserLogin } from '../features/users/userSlice'

const Home = () => {
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
    <>
        <main className='bg-[#1a2230] '>
           <Discover/>
           <Latest/>
           <Trending/>
        </main>
    </>
  )
}

export default Home