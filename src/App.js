import './App.css';
import React,{useEffect} from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import LeftSidebar from './components/LeftSidebar';
import Movie from './pages/Movie';
import Details from './pages/Details';
import Navbar from './components/Navbar';
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import DashBoard from './components/Admin/DashBoard';
import CreateForm from './components/Admin/CreateForm';
import List from './components/Admin/List';
import UpdateForm from './components/Admin/UpdateForm';
import { setMovies } from './features/movies/movieSlice';
import { collection, getDocs} from 'firebase/firestore'
import { app,db } from './Firebase/firebase';
import { useDispatch } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  const [toggleSidebar,setToggleSidebar] = useState(false)
  const dispatch = useDispatch()

  const sidebarToggle = ( ) =>{
    setToggleSidebar(!toggleSidebar)
  }

 useEffect(()=>{
  const list = [] 
 const getAllData = async () =>{
   const querySnapshot = await getDocs(collection(db,'movies'))
   querySnapshot.forEach((doc)=>{
   list.push({...doc.data(), key:doc.id})
   })
   dispatch(setMovies(list))
  }
  getAllData()
},[])

  return (
    <>
    <Navbar sidebarToggle={sidebarToggle} toggleSidebar={toggleSidebar}/>
      <div className="App relative">
      {
        toggleSidebar && <LeftSidebar/>
      }
        <div className="navigation">
          <Routes>
            <Route  path='/' element={<LandingPage/>}/>
            <Route  path='/signup' element={<SignUp/>}/>
            <Route path='tt' element={<ProtectedRoutes/>}>
                <Route index element={<Home/>}/>
                <Route path='home' element={<Home/>}/>
                <Route  path='movies' element={<Movie/>}/>
                <Route  path='details/:title' element={<Details/>}/>
            </Route>

            <Route  path={'/admin'} element={<DashBoard/>}>
              {/* <Route index path={'dashboard'} element={<DashBoard/>} /> */}
              <Route path={'create'} element={<CreateForm/>} />
              <Route path={'update/:title'} element={<UpdateForm/>} />
              <Route path={'list'} element={<List/>} />
              <Route path={'*'} element={<DashBoard/>} />
           </Route>
            <Route  path='*' element={<LandingPage/>}/>

          
          </Routes>
        </div>
      </div>

    </>
  );
}

export default App;
