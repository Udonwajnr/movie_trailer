import React,{useState} from 'react'
import { app,db } from '../../Firebase/firebase'
import { collection, getDocs,doc ,deleteDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import { updateDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './css/Table.css'

const List = () => {
 const [data,setData] = useState([])
  
useEffect(()=>{
  const list = [] 
 const getAllData = async () =>{
   const querySnapshot = await getDocs(collection(db,'movies'))
   querySnapshot.forEach((doc)=>{
   list.push({...doc.data(), key:doc.id})
   })
   setData(list)
   console.log(list)
  }


  getAllData()
},[])

console.log(data)
const onDelete = async(id) =>{
 await deleteDoc(doc(db, "movies", id))
 .then(()=>alert('Deleted successfully')
 )
}

  return (
    <div>
    <table className='w-full border border-spacing-4 border-separate'>
      <thead>
      <tr>
        <th>No.</th>
        <th>Title</th>
        <th>Description</th>
        <th>Trailer Url</th>
        <th>Duration</th>
        <th>Year</th>
        <th>Category</th>
        <th>Poster</th>
        <th>BackgroundImg</th>
        <th>Rating</th>
      </tr>

      </thead>

      <tbody>
        {
          data?.map((item,index)=>{
            return(      
            <tr className='overflow-scroll w-full'>
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td>{item.description.length > 20? `${item.description.slice(0,20)} ...`:item.description }</td>
              <td>{item.trailerUrl}</td>
              <td>{item.duration}</td>
              <td>{item.year}</td>
              <td>{item.category}</td>
              <td>{item.moviePoster}</td>
              <td>{item.backgroundImg}</td>
              <td>{item.rating}</td>
              <td><Link to={`/admin/update/${item.key}`} className='bg-blue-300 p-1 rounded text-white'>Edit</Link></td>
              <td><button className='bg-red-500 p-1 rounded text-white' onClick={()=>onDelete(item?.id)}>Delete</button></td>
            </tr>
            )
          })
        }
      </tbody>
    </table>
    </div>
  )
}

export default List