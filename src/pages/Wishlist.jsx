import React,{useEffect} from 'react'
import { app } from '../Firebase/firebase'
import { useSelector,useDispatch } from 'react-redux'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { setUserLogin } from '../features/users/userSlice'


const Wishlist = () => {
  
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
        navigate('/wishlist')
      }
      else{
       signOut(auth).then(()=>{
          navigate('/login')
       })
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
    <div className='text-slate-200 text-2xl '>
      You have no wishlist
    </div>
  )
}

export default Wishlist