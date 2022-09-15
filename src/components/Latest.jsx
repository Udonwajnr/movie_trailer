import React,{useState,useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import NextArrow from './NextArrow';
import PreviousArrow from './PreviousArrow';



const Latest = () => {

  const allMovies = useSelector(state=>state.movie.movie)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    if(allMovies.length === 0){
      setLoading(true)
    }else{
      setLoading(false)
    }
  },[allMovies])

  const year  = 2022
  const settings = {
     className: "slider variable-width",
    //   centerMode: true,
      infinite: false,
      arrows:true,
      slidesToShow:9,
      slidesToScroll:1,
      speed: 500,
      prevArrow: <PreviousArrow />,
      nextArrow:<NextArrow/>,
    //   autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    //   variableWidth: true,
      // swipeToSlide: true,
      PreviousArrow:<PreviousArrow/>,
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4.5,
            slidesToScroll: 2,
            arrows:false,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 540,
          settings: {
            // centerMode: true,
            slidesToShow: 3.5,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },

        {
          breakpoint: 340,
          settings: {
            // centerMode: true,
            slidesToShow: 3.3,
            arrows:false,
            slidesToScroll: 3
          }
        }
      ]
    };

  return (
   <div className='w-full md:px-2 px-8 py-2'>
    
        <h2 className='text-white font-extrabold text-2xl phone:text-xl'>Latest</h2>
        <div className=' mt-3 md:overflow-hidden' >
              {
                loading?
                <Slider {...settings}>
                  <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                  <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                  <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                  <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                  <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                  <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                  <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                  <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                  <Skeleton variant="rectangular" width={210} height={200} animation="wave" />
                </Slider>
              :
                <Slider {...settings}>
               
               { allMovies.filter((movies)=>{
                return  parseInt(movies.year) > 2021
                }).map((movies)=>{
                return (
                  <div key={movies.key} className='rounded-md h-52 phone:h-36'>
                      <Link  to={`/tt/details/${movies.title}`}>
                        <img src={movies.moviePoster} alt={movies.title}  className='rounded-xl h-full w-full'/>
                      </Link>
                    </div>     
                )
              })
                }
                </Slider>

              }
        </div>
    </div>
  )
}

export default Latest