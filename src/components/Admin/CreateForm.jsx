import React from 'react'
import { app, db } from '../../Firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useState,useEffect } from 'react'
import { updateDoc,getDocs } from 'firebase/firestore'
import { useParams,useNavigate } from 'react-router-dom'



const initialState = {
  title:'',
  description:'',
  trailerUrl:'',
  duration:'',
  year:'',
  rating:'',
  category:'',
  backgroundImg:'',
  moviePoster:'',
  movieCarouselImage:'',
}

const CreateForm = () => {
  const {id} = useParams()
  const [state,setState] = useState(initialState)
  const [data,setData] = useState()
  const {title, description, trailerUrl,duration,year , rating, category, backgroundImg,moviePoster, movieCarouselImage} = state
  const navigate = useNavigate()
  // console.log(input.name)
  const handleInput = (e) =>{
    const {name ,value} = e.target
    setState({...state, [name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!title || !description || !trailerUrl || !duration || !year ){
      alert('please provide value in each input')
    }
    else{
      addDoc(collection(db,"movies"),
    {title:title,
      description:description,
      trailerUrl:trailerUrl,
      duration:duration,
      year:year,
      rating:rating,
      category:category,
      backgroundImg:backgroundImg,
      moviePoster:moviePoster,
      movieCarouselImage:movieCarouselImage,
    }

    ).then(()=>{
      alert('movie added successfully')
      navigate('/admin/list')
    }).catch(error=>alert(error.message1))
    }
  }

useEffect(()=>{
const list = [] 
const getAllData = async () =>{
   const querySnapshot = await getDocs(collection(db,'movies'))
   querySnapshot.forEach((doc)=>{
   list.push({...doc.data(), key:doc.id})
   })
   setData(list)
  }
  getAllData()

},[id])

return (

    <div className='flex justify-center items-center bg-slate-200 w-full gap-y-3 h-screen'>

      <form action="" className='flex flex-col gap-y-3' onSubmit={handleSubmit}>

          <div className='flex flex-col ' >
            <label htmlFor="">Title</label> 
            <input type="text" name='title' value={title ||''} className='border-green-600 border h-18' onChange={handleInput}/>
          </div>
          <div className='flex flex-col '>
            <label htmlFor="">Description</label>
            <textarea type="text" name='description' value={description || ''} className='border-green-600 border h-18' onChange={handleInput}/>
          </div>
          <div className='flex flex-col '>
            <label htmlFor="">Trailer Url</label>
            <input type={"url"} name='trailerUrl' value={trailerUrl || ''} className='border-green-600 border h-18' onChange={handleInput}/>
          </div>
          <div className='flex flex-col '>
            <label htmlFor="">Duration</label>
            <input type={'text'} name='duration' value={duration || ''} className='border-green-600 border h-18' onChange={handleInput}/>
          </div>
                
          <div className='flex flex-col '>
            <label htmlFor="">Year</label>
            <input type={'text'} name='year' value={year || ''} className='border-green-600 border h-18' onChange={handleInput}/>
          </div>

          <div className='flex flex-col '>
            <label htmlFor="">Category</label>
            <input type={'text'} name='category' className='border-green-600 border h-18' onChange={handleInput}/>
          </div>

          <div className='flex flex-col '>
            <label htmlFor="">Poster</label>
            <input type={'url'} name='moviePoster' className='border-green-600 border h-18' onChange={handleInput}/>
          </div>

          <div className='flex flex-col '>
            <label htmlFor="">Background img</label>
            <input type={'url'} name='backgroundImg' className='border-green-600 border h-18' onChange={handleInput}/>
          </div>        
  
          <div className='flex flex-col '>
            <label htmlFor="">Carousel image</label>
            <input type={'url'} name='movieCarouselImage' className='border-green-600 border h-18' onChange={handleInput}/>
          </div>        
  
          <div className='flex flex-col '>
            <label htmlFor="">Rating</label>
            <input type={'number'} name='rating' className='border-green-600 border h-18' onChange={handleInput}/>
          </div>        
        <button className='bg-green-400'>Create</button>
      </form>
    </div>
  )
}

export default CreateForm