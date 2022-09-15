import React,{useEffect} from 'react'
import '../assets/css/Login.css'
import {FcGoogle} from 'react-icons/fc'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut} from "firebase/auth";
import { useSelector,useDispatch } from 'react-redux'
import { setUserLogin } from '../features/users/userSlice'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const userName = useSelector((state)=>state.user.name)
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch()

  const auth = getAuth()
  const navigate = useNavigate()

  const signUpWithGoogle=()=>{
    if(!userName){
      signInWithPopup(auth,provider)
      .then((result)=>{
        // This gives you a Google Access Token. You can use it to access Google APIs.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user)
        navigate('/tt/home')
      })
      .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorCode)
        navigate('/signup')
    });
    }
    else if(userName){
      signOut(auth).then(() => {
        navigate('/signup')
      }).catch((error) => {
          console.log(error.message)
}
);
    }
  }

//   const logout =()=>{
//     signOut(auth).then(() => {
//         navigate('/signup')
//       }).catch((error) => {
//           console.log(error.message)
// });
    
//   }

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

// console.log(userName)

  return (
    <div className='login flex justify-center items-center gap-3 flex-col'>
       <div className='logins  block'>
       <h2 className='text-slate-100 text-3xl'>Sign Into Your Account</h2>
       <div className='flex justify-center'>
                    <button onClick={signUpWithGoogle} className='mt-4 bg-blue-500 hover:bg-blue-400 gap-5 py-2 px-4 flex justify-between items-center'>
                        <FcGoogle size={30}/>
                        <span className='text-slate-100 font-extrabold'>Sign Up with Google</span>
                    </button>
            </div>
       </div>
    </div>
  )
}

export default SignUp