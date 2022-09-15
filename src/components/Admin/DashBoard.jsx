import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const DashBoard = () => {
  return (
    <div className=' h-screen flex'>
          <Navbar/>
        <div className='w-full h-screen overflow-y-scroll bg-slate-100'>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashBoard