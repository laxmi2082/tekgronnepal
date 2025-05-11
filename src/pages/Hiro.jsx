import React from 'react'

function Hiro() {
  return (
   <>
   <section className='py-5 bg-light-grey bg-hiro'>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
                <div className=' align-items-center  gap-2 d-flex '>
                    <div className='line'></div>
                <h5 className='fw-bold'>Modern Tech Solutions</h5>
                </div>
                <h1 className=''>With Our Cutting- <br />Edge Solutions, <br />Maximise Your <br /> Digital Potential.</h1>
                <p className='py-4'>Affordable, reliable, and tailored IT solutions designed to meet your business needs.</p>
                <div className='mt-4'>
                <a href="#" className='px-4 py-2 bg-blue text-white fw-bold'>Get Started</a>
                </div>
            </div>
            <div className="col-lg-6 relative  ">
              
             
                <img className='hiro-radius' src="https://tekgronepal.com.np/wp-content/uploads/2023/04/banner-tekgro-staff.jpg " alt="" />
              
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Hiro