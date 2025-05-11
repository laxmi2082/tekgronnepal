import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
 <>
 <section className='py-5 bg-blue  text-white'>
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <h4 className='fw-bold'>TekGro Nepal</h4>
        <div className='mt-4'>
        <p>TekGro prides on delivering exceptional service and support to its customers, ensuring their success in today’s rapidly evolving digital landscape</p>
        <ul className=''>
           <li className='mb-2'><a href="" className='text-white'>Shantinagar, SanuKharinot, New-Baneshwor, Kathmandu</a></li>
           <li className='mb-2'><a href="" className='text-white'>support@tekgronepal.com.np</a></li>
           <li className='mb-2'><a href="" className='text-white'>+977 9802330080</a></li>
           
        </ul>
        </div>
      </div>
      <div className="col-lg-3">
        <h4 className='fw-bold'>Capabilities</h4>
        <ul className='mt-4'>
          <li className='mb-2'><a href="" className='text-white'>Mobile App Development</a></li>
          <li className='mb-2'><a href="" className='text-white'>Design & Development</a></li>
          <li className='mb-2'><a href="" className='text-white'>UX/UI Strategy</a></li>
          <li className='mb-2'><a href="" className='text-white'>Digital Marketing</a></li>
          <li className='mb-2' ><a href="" className='text-white'>IT Consulting</a></li>
          <li className='mb-2'><a href="" className='text-white'>Tech Support</a></li>
        </ul>
      </div>
      <div className="col-lg-3">
        <h4 className='fw-bold'>Support​</h4>
        <ul className='mt-4'>
          <li className='mb-2'><a href="" className='text-white'>Privacy Policy</a></li>
          <li className='mb-2'><a href="" className='text-white'>Get In Touch</a></li>
           <li className='mb-2'><a href="" className='text-white'>Direct Call</a></li>
        </ul>
      </div>
      <div className="col-lg-3">
        <h4 className='fw-bold'>Newsletter</h4>
       <div className='my-4'>
        <p>Subscribe to our premium services now and take your business to the next level.</p>
        <div className='py-3 border-bottom d-flex justify-content-between align-items-center  '>
        <MdOutlineMail className='fs-3 text-green' />
          <div>
          <input type="email" placeholder='support@email' className='focus:outline-none  rounded-2 ps-2 py-1  border-0 outline-none box-shadow-0' />
          </div>
          <button className=' bg-white py-1  rounded-2 fw-bold border-0 '>Sign Up</button>
        </div>
         
       </div>
       <h5 className='fw-bold'>Follow Us</h5>
       <ul className='d-flex gap-2'>
        <li><FaFacebookF className='fs-5 text-green'/></li>
        <li><FiTwitter className='fs-5 text-green'/></li>
        <li><FaInstagram className='fs-5 text-green'/></li>
        <li><FaLinkedinIn className='fs-5 text-green'/></li>
       </ul>
      </div>

    </div>
  </div>
 </section>

 {/* copy-right */}
  <section className='py-3 light-black text-white'>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
         <ul className='d-flex gap-2'>
          <li>Upvivid Pty Ltd Trading as TekGro Nepal
          </li>|
          <li>PAN No. 609869194</li>
         </ul>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <p>© 2023 TekGro. All rights reserved.</p>
        </div>
      </div>
    </div>
  </section>
 </>
  )
}

export default Footer