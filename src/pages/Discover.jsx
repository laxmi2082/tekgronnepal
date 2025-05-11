import React from 'react'
import { LuPhone } from "react-icons/lu";

function Discover() {
  return (
    <>
    <section className='bg-white py-5 discover'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img className='rounded-2 img-100' src="https://tekgronepal.com.np/wp-content/uploads/2023/04/group-team-tekgro-nepal-1.jpg" alt="" />
                </div>
                <div className="col-lg-6">
                    <h6 className='text-blue fw-bold fs-5'>Discover TekGro</h6>
                    <h2 className='mt-2'>We tear down barriers and realise your maximum potential of your business</h2>
                    <p   className='text-light mt-4'>TekGro is a leading digital solutions provider designed to help businesses achieve their objectives. We take pride in our strong selling capabilities, allowing us to deliver exceptional client outcomes. National boundaries do not limit our expertise, as we serve clients from all over the world. We are proud to provide customized solutions that cater to each client’s unique requirements, regardless of their location.</p>
               <p className='my-4 text-light'>Our foreign clients, especially those from Australia, have come to recognise our commitment to excellence.</p>
              
                <div className='d-flex gap-3 align-items-center'>
                    <button className='btn btn-primary text-white'>Find Out More</button>
                    <LuPhone className='fs-4'/>
                    <div>
                    <h6 className='fw-bolder text-light'>Need Help? Speak to our Experts.</h6>
                    <h5 className='fw-bold'>977 9802330080</h5>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Discover