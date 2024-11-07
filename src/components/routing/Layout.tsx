import React from 'react'
import Navbar from '../home/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col w-full'>
        <Navbar></Navbar>
        <div className='w-full pt-12'>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Layout