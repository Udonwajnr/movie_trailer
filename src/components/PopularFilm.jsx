import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from 'react-redux';

import '../assets/css/Discover.css'

const PopularFilm = ({key,moviePoster}) => {
  const allMovies = useSelector(state=>state.movie.movie)

  return (

    <div className='w-full p-6'>
        <h2 className='text-white font-extrabold text-3xl'>Popular Film</h2>
        <div className='overflow-hidden mt-3 max-w-fit grid phone:grid-cols-2 md:grid-cols-4 grid-cols-9 gap-4'>
                     <div key={key} className='rounded-md h-52'>
                        <img src={moviePoster} alt="greyman"  className='rounded-xl h-full w-full'/>
                    </div>
                <div className='rounded-md max-h-60'>
                    <img src="/img/greyman.jpg" alt="greyman"  className='rounded-xl h-full w-full'/>
                </div>
                <div className='rounded-md h-60'>
                    <img src="/img/transformer.jpg" alt="transformer"  className='rounded-xl h-full w-full'/>
                </div>
                <div className='rounded-md h-60'>
                    <img src="/img/aquaman.jpg" alt="aquaman"  className='rounded-xl h-full w-full'/>
                </div>
                <div className='rounded-md h-60'>
                    <img src="/img/moneyheist.jpg" alt="greyman"  className='rounded-xl h-full w-full'/>
                </div>
                <div className='rounded-md h-60'>
                    <img src="/img/shangchi.jpg" alt="moneyheist"  className='rounded-xl h-full w-full'/>
                </div>
                <div className='rounded-md h-60'>
                    <img src="/img/bloodshot_xlg.jpg " alt="greyman"  className='rounded-xl  h-full w-full'/>
                </div>
                <div className='rounded-md h-60'>
                    <img src="/img/365days.jpg" alt="greyman"  className='rounded-xl h-full w-full'/>
                </div>
                <div className='rounded-md h-60'>
                    <img src="/img/6underground.jpg" alt="greyman"  className='rounded-xl h-full w-full'/>
                </div>
                <div className='rounded-md h-60'>
                    <img src="/img/i.jpg" alt="greyman"  className='rounded-xl h-full w-full'/>
                </div>
                <div className='rounded-md h-60'>
                    <img src="/img/oldguard.jpg" alt="greyman"  className='rounded-xl h-full w-full'/>
                </div>
        </div>
    </div>
  )
}

export default PopularFilm