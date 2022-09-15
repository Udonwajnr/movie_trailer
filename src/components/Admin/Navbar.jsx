import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-slate-600 text-white flex flex-col w-1/12 sticky h-screen top-0 left-0'>
        <Link to={'/admin'}>Home</Link>
        <Link to={'create'}>Create</Link>
        <Link to={'list'}>list</Link>
    </div>
  )
}

export default Navbar