import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiTwotoneStar} from 'react-icons/ai'
import '../assets/css/Discover.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';


const Discover = () => {
  const allMovies = useSelector(state=>state.movie.movie)

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    if(allMovies.length === 0){
      setLoading(true)
    }else{
      setLoading(false)
    }
  },[allMovies])

    const settings = {
     className: "slider variable-width",
    //   centerMode: true,
      infinite: true,
      arrows:false,
      slidesToShow: 3,
      slidesToScroll:2,
      speed: 500,
      dots:true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    //   variableWidth: true,
      swipeToSlide: true,
      responsive:[
         {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
         {
          breakpoint: 1279,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            // dots: true
          }
        },
         {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            // dots: true
          }
        }
      ]
    };

  return (
    <div className='w-full md:px-2 px-8 py-2'>
        <h2 className='text-white font-extrabold text-2xl phone:text-xl'>Discovers</h2>
        {/* movie carousel */}
        <div className=' w-full mt-3'>
             {/* <Slider {...settings}> */}
              {loading?
              <Slider {...settings}>
                <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
              </Slider>
              :
              <Slider {...settings}>
              {
                  allMovies.slice(-6).map((movies)=>{
                  return (
                    <Link key={movies.key} to={`/tt/details/${movies.title}`}>
                      <div  className='rounded-x  relative md:h-52 h-72 cursor-pointer'>
                          <img src={movies.movieCarouselImage} className='h-full w-full  rounded-xl' alt="" />
                          <div className='detail absolute bottom-0 flex justify-between w-full'>
                              <article className='article text-white pl-3 '>
                                  <h3 className='capitalize'>{movies.title}</h3>
                                  <p className='text-xs'>{movies.category}</p>
                              </article>
                              <span className='pr-3  flex items-center gap-2 text-[#FFDF00]'>
                                  <AiTwotoneStar color={movies.rating>=5?'#FFDF00':'red'}/>
                                  {movies.rating}/10
                              </span>
                          </div>
                      </div>
                    </Link>
                  )
                
                })
              }  
              </Slider>


              }
        {/* </Slider> */}

        </div>
        {/* movie carousel ending*/}
    </div>
  )
}

export default Discover