import React,{useEffect} from 'react'
import { Outlet, useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import SignUp from '../pages/SignUp'
import { getAuth, onAuthStateChanged ,signOut} from "firebase/auth";
import { setUserLogin } from '../features/users/userSlice'



const ProtectedRoutes = () => {
 

    const isAuth = useSelector(state=>state.user.authentication)
    return (
          
        isAuth?

        <div>
          <Outlet/>
        </div>
        :
        <SignUp/>
    )
}

export default ProtectedRoutes