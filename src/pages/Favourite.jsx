import React,{useEffect} from 'react'
import { app } from '../Firebase/firebase'
import { useSelector,useDispatch } from 'react-redux'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { setUserLogin } from '../features/users/userSlice'



const Favourite = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const userName = useSelector((state)=>state.user.name)
  const userEmail = useSelector((state)=>state.user.email)
  const userPicture = useSelector((state)=>state.user.picture)
  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        setUser(user)
        navigate('/favourites')
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
    <div>
      <h1 className='text-2xl text-slate-100'>You have no favorites</h1>
    </div>
  )
}

export default Favourite