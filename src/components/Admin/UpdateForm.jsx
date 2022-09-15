import React from 'react'
import { useParams } from 'react-router-dom'
import { app, db } from '../../Firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useState,useEffect } from 'react'
import { updateDoc,getDocs,doc } from 'firebase/firestore'


const initialState = {
title:'',
description:'',
trailerUrl:'',
duration:'',
year:''
}

const UpdateForm = () => {
   const arrays = ['hello', 'hii']
   console.log(arrays['hello'])


  const [data,setData] = useState()
  const {id} = useParams()
  console.log(id)
  const [state,setState] = useState(initialState)
  const {title,description,trailerUrl,duration,year} = state
  const [key,setKey] = useState()

  
useEffect(()=>{
  const list = [] 
  const newData = []
  const getAllData = async () =>{
   const querySnapshot = await getDocs(collection(db,'movies'))
   querySnapshot.forEach((doc)=>{
   list.push({...doc.data(), key:doc.id})
   })

  list.filter((data,index)=>{
    data.key === id?setState({...data}):console.log('false') 
    console.log(data)
  })

  setData(list)
}
  console.log(state)

  getAllData()

},[id])


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
      updateDoc(doc(db,"movies",id),
    {title: title,
      description:description,
      trailerUrl:trailerUrl,
      duration:duration,
      year:year,
    }
    ).then(()=>{
      alert('updated added successfully')
    }).catch(error=>alert(error.message1))
    }
  }

  

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

          {/* <div className='flex flex-col '>
            <label htmlFor="">Category</label>
            <input type={'text'} name='year' className='border-green-600 border h-18' onChange={handleInput}/>
          </div>

          <div className='flex flex-col '>
            <label htmlFor="">Poster</label>
            <input type={'url'} name='year' className='border-green-600 border h-18' onChange={handleInput}/>
          </div>

          <div className='flex flex-col '>
            <label htmlFor="">Background img</label>
            <input type={'url'} name='year' className='border-green-600 border h-18' onChange={handleInput}/>
          </div>         */}
        <button className='bg-green-400'>Update</button>
      </form>
    </div>
  )
}

export default UpdateForm