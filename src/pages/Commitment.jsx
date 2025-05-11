import React from 'react'
import { GiBank } from "react-icons/gi";
import { MdPermDataSetting } from "react-icons/md";

function Commitment() {
  return (
    <>
    <section className='py-5 commitment '>
        <div className="container">
         <div className="row">
            <div className="col ">
                <h5 className='fw-bold text-blue'>Commitment to Customer Satisfaction</h5>
                <h2>Assisting Your Business <br /> with Customized Tech <br /> Solutions</h2>
                <p className='py-5 text-light'>We deliver innovative and effective solutions to businesses and organizations of all sizes. Our team of experienced professionals is dedicated to helping our clients achieve their goals through customized technology solutions. We specialize in a wide range of services, including software development, web development, mobile app development, digital marketing, and IT consulting.</p>
              <div className="row gap-4 text-center">
                <div className="col shadow p py-5 px-4 rounded-2">
                  <GiBank  className='fs-1'/>
                  <h4 className='mt-3 fw-bold'>
                  Ensuring Your Data Safety</h4>
                </div>
                <div className="col shadow py-5 px-4  rounded-2">
               
                  <MdPermDataSetting  className='fs-1'/>
                  <h4 className='mt-3 fw-bold'>
                  Ensuring Your Data Safety</h4>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-end">
                <img className='hiro-radius' src="https://tekgronepal.com.np/wp-content/uploads/2023/04/tekgro-developing-team.jpg" alt="" />
            </div>
         </div>
        </div>
    </section>
    
    </>
  )
}

export default Commitment