import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { Link, Route,  Routes } from 'react-router-dom';
import Home from '../pages/Home';


function Header() {
  return (
    <>
     <header className='bg-blue py-2'>
        <div className="container d-flex align-items-center justify-content-center">
          <button className='px-2 fw-bold    bg-white border-0 rounded-2 out-line-none'>Hello</button>
          <h6 className='text-white ms-2'>We are currently updating our website !</h6>
        </div>
     </header>
     <nav className='py-4 bg-white'>
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-xl-2 col-6  col-sm-6">
         <Link to={'/'}><img className='logo' src="http://tekgronepal.com.np/wp-content/uploads/2023/04/logo.png" alt="" /></Link> 
          </div>
     
       <div className="col-xl-7 d-flex justify-content-end d-none d-xl-block ">
         <ul className='d-flex justify-content-end gap-4'>
          <li><a href="" className='text-black  fw-bolder '>Discover TekGro <IoMdArrowDropdown /></a></li>
          <li><a href="" className='text-black  fw-bolder'>Our Capabilities</a></li>
          <li><a href="" className='text-black  fw-bolder'>Portfolio Highlights</a></li>
          <li><a href="" className='text-black  fw-bolder'>Resources</a></li>
          <li><a href="" className='text-black fw-bolder'>Get In Touch</a></li>
         </ul>
       </div>
       <div className="col-xl-3 col-sm-6 col-6  d-flex  gap-2 justify-content-sm-end  align-items-center">
       <IoSearch className='fs-4 light-blue'/>
       <button className='px-sm-4 py-2  bg-green  border-0 rounded-3 text-white'>+977 980233008 <LuPhone  /></button>
       </div>
      </div>
      </div>
     </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default Header