import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Poster = () => {
    const settings = {
     className: "slider variable-width",
    //   centerMode: true,
      infinite: true,
    //   arrows:false,
      slidesToShow:4,
      slidesToScroll:1,
      speed: 500,
    //   autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    //   variableWidth: true,
      swipeToSlide: true,
      responsive:[
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };

  return (
    <div className='w-full md:px-2 px-6 py-2'>
        <h2 className=' text-2xl text-white'>Posters</h2>
        <div className='overflow-hidden mt-3' >
            <Slider {...settings}>
                <div className='rounded-md h-24'>
                    <img src="/img/poster/a.jpg" alt="greyman"  className='rounded-xl h-full w-full'/>
                </div>
                <div className='rounded-md h-24'>
                    <img src="/img/poster/b.jpg" alt="transformer"  className='rounded-xl h-full w-full'/>
                </div>
                <div className='rounded-md h-24'>
                    <img src="/img/poster/c.jpg" alt="aquaman"  className='rounded-xl h-full w-full'/>
                </div>
                <div className='rounded-md h-24'>
                    <img src="/img/poster/d.jpg" alt="greyman"  className='rounded-xl h-full w-full'/>
                </div>
                <div className='rounded-md h-24'>
                    <img src="/img/poster/E.jpg" alt="moneyheist"  className='rounded-xl h-full w-full'/>
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Poster