import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import '../assets/css/Login.css'
import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <div className='login flex justify-center items-center gap-3 flex-col'>
       <div className='logins block'>
         <h2 className='text-slate-100 text-3xl'>Welcome Back</h2>
            <div className='flex justify-center flex-col'>
                    <button className='mt-4 bg-blue-500 gap-5 py-2 px-4 flex justify-between items-center'>
                        <FcGoogle size={30}/>
                        <span className='text-slate-100 font-extrabold'>Sign in with Google</span>
                    </button>

                    <button className='text-center font-bold text-slate-100 mt-4 bg-blue-500 gap-5 py-2 px-4'>
                        Email and PassWord
                    </button>
            </div>
        <small className='text-sm text-slate-100 text-center'>Don't have an Account? Sign up <Link to={'/signup'} className='underline'>Here</Link>.</small>
       </div>
    </div>
  )
}

export default Login