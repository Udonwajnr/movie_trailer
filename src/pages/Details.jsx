import React,{useState,useEffect} from 'react'
import {AiTwotoneStar} from 'react-icons/ai'
import Actors from '../components/Actors'
// import MovieModal from '../components/MovieModal'
import PlayButton from '../components/PlayButton'
import Poster from '../components/Poster'
import TrailerModal from '../components/TrailerModal'
import { getAuth,onAuthStateChanged} from "firebase/auth";

import '../assets/css/TrailerModal.css'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setUserLogin } from '../features/users/userSlice'
import {useNavigate} from 'react-router-dom'



const Details = () => {
  const [trailerModal,setTrailerModal] = useState(false)

  // const [movieModal,setMovieModal] = useState(false)
  
  const toggleTrailerModal =()=>{
    setTrailerModal(!trailerModal)
  }
  const allMovies = useSelector(state=>state.movie.movie)
  const auth = getAuth()
  const navigate = useNavigate()
  const userName = useSelector((state)=>state.user.name)
  const dispatch = useDispatch()
  const {title} = useParams()

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        setUser(user)
        navigate(`/tt/details/${title}`)
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

  // const toggleMovieModal =()=>{
  //   setMovieModal(!movieModal)
  // }  

  return (
    
    <div className='relative flex guy'>
      <div className='relative lg:h-max h-screen'>
        {
          allMovies.filter(movies=>movies.title === title).map((movies)=>{
            return(
              <div className='relative h-screen' key={movies.key} >
                {/* /* background images  */}
                  <div className='phone:h-52 relative overflow-hidden '>
                    <img src={movies.backgroundImg} className=' h-full w-screen' alt="" />
                   <div className=' md:block  w-full h-full  background-overlay  absolute z-20 top-0'>
                </div>
                  </div>
                {/* background images ending  */}
                    {/* background overlay  */} 
            
                     {/* <div className='md:hidden w-full h-screen  background-overlay  absolute z-20 bottom-0'></div> */}
            
                    {/* background overlay ending */}
                  <div className=' w-full  '>
                        <div className='flex gap-3  md:flex-col'>
                          {/* detail writeup */}
                          <div className='lg:w-full md:px-2 w-7/12  flex flex-col px-6 py-2 '>
                            <h2 className='lg:text-2xl md:capitalize capitalize text-5xl  font-extrabold text-slate-300'>{movies.title}</h2>
                            <div className='lg:text-xs flex items-center  gap-3 mt-3 text-slate-300'>
                              <span className='md:gap-1 flex items-center  gap-5'>
                                <AiTwotoneStar color={movies.rating>=5?'#FFDF00':'red'}/>
                                  {movies.rating} | 10
                              </span>

                              <span className='md:gap-1 flex items-center gap-5 '>
                                {movies.duration}
                                <div className='w-2 h-2 rounded-full bg-slate-300'></div>
                                  {movies.category}
                                <div className='w-2 h-2 rounded-full bg-slate-300'></div>
                                  {movies.year}
                              </span>
                            </div>
                            <article className='md:mt-3 mt-auto  text-slate-300 md:text-sm'>
                              <p>{movies.description}</p>
                            </article>
                            <PlayButton  toggleTrailerModal={toggleTrailerModal}/>
                          </div>
                          {/* detail writeup ending */}

                          {/* poster and actor */}
                            {/* <div className='md:w-full w-6/12'>
                              <Poster />
                              <Actors/>
                            </div> */}
                          {/* poster and actor ending*/}
                        </div>
                  </div>
                {
                   trailerModal && <TrailerModal toggleTrailerModal={toggleTrailerModal}  trailer={movies.trailerUrl}/> 
                }
              </div>
            )
          })
        }
        
      </div>
    
    </div>
  )
}

export default Details