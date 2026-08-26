import React, { useState } from 'react'
import logo from '../../../public/logo.jpg'
import upload from '../../assets/upload.png'
import assignment from '../../assets/assignment.png'
import reading from '../../assets/reading.png'
import { Link } from 'react-router'

const Sidenav = () => {


  return (
    <div className='w-full p-4'>
        <div className='flex flex-col gap-14'>
             <div className='flex flex-col item-center mx-auto'> 
                 <img className=' w-[80px] rounded-full' src={logo} alt='logo' />
                  <p className=''> Admin Portal</p>
             </div>

             <div className='flex flex-col gap-4'>

                 <Link to='/video-upload' className='flex gap-4 cursor-pointer'>
                    <img className='w-[30px]' src={upload} alt='upload' />
                     <button className=' font-bold cursor-pointer'> Video Upload</button>
                  </Link>

                 <Link to='/student-Mag' className='flex gap-4 cursor-pointer'>
                    <img className='w-[30px]' src={reading} alt='upload' />
                    <button className=' font-bold cursor-pointer'> Student Management</button>
                  </Link>

                  <Link to='/assignment' className='flex gap-4 cursor-pointer'>
                     <img className='w-[30px]' src={assignment} alt='upload' />
                     <button className='font-bold cursor-pointer'> Assignment</button>
                 </Link>

             </div>
        </div>
    </div>
  )
}

export default Sidenav