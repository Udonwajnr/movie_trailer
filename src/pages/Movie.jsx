import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import { getAuth,onAuthStateChanged} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setUserLogin } from '../features/users/userSlice'


const Movie = () => {
  const allMovies = useSelector(state=>state.movie.movie)
  const auth = getAuth()
  const navigate = useNavigate()
  const userName = useSelector((state)=>state.user.name)
  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        setUser(user)
        navigate('/tt/movies')
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
    <div className='bg-[#1a2230] h-screen'>
         <div className='w-full p-6 lg:px-2'>
        <h2 className='text-white font-extrabold text-3xl'>Popular Film</h2>
        <div className='overflow-hidden mt-3 max-w-fit grid m-auto phone:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid-cols-9 gap-4 '>
              {allMovies.map((movies)=>{
                return (
                <div key={movies.key} className='rounded-md h-52 cursor-pointer lg:h-44'>
                  <Link to={`/tt/details/${movies.title}`}>
                    <img src={movies.moviePoster} alt="greyman"  className='rounded-xl h-full w-full'/>
                  </Link>
                </div>
                )
              })}
        </div>
    </div>
    </div>
  )
}

export default Movie