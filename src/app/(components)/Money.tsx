import React from 'react'

type Props = object

function Money({}: Props) {
  return (
    <>
       <div className="top-row text-center md:p-[80px] p-[40px] title-flex-container flex md:flex-row flex-col items-center justify-center ">
        <h3 className='text-3xl p-4 md:mb-0 mb-3 md:text-center'> You can support us <strong> anywhere, any time</strong> </h3>
    </div>
    <div className="mid-row bg-black text-white   flex md:flex-row flex-col md:p-[70px] p-4 md:space-x-[130px] justify-center ">
        <div className="white-box bg-white text-black  rounded-lg w-[470px] h-[250px] p-8">
            <h4 className="text-2xl font-light mb-4"> 1000 Ksh per Month</h4>
            <p className='mb-2'>Boost your brand with us!</p>
            <p className='mb-2'>
             Advertise your health-related products on our platform and reach a targeted audience committed to wellness. 
            </p>
            <p className='mb-3 '>Join us today!</p>
                <button className=' relative left-[270px] w-[120px] h-[30px] rounded-md bg-black text-white'>Get in Touch</button>
        </div>
        <div className="pricing-explainer ">
            <h3 className='text-2xl mb-4'>A plan that always fits </h3>
             <p> For an affordable fee , grow your customer base in a thriving health-conscious community</p>
        </div>
    </div>

    <div className="bottom-row  bg-black text-white   flex md:flex-row flex-col md:p-[70px] p-[30px] md:space-x-[130px] justify-center">
        <div className="mpesa">
            <h3 className="text-2xl font-light mb-4">Get More Insights</h3>
             <ul className='border border-white p-6 rounded-lg w-[250px]'>
                <li className='mb-2'>iPrevent gives a risk assessment but also so much more.</li>
                <li className='mb-2'>Sign up for more information on your well-being</li>
                <li className='mb-2'>Get a personalized plan on how to improve your health</li>
                <li className='mb-2'>Contact +245(797645137) for more information</li>

             </ul>

        </div>

        <div className="mpesa">
            <h3 className="text-2xl font-light mb-4">Donate Via M-Pesa</h3>
             <ul className='border border-white p-6 rounded-lg w-[250px]'>
                <li className='mb-2'>On your M-Pesa phone menu go to 'Lipa na Mpesa'.</li>
                <li className='mb-2'>Select Send Money</li>
                <li className='mb-2'>Enter the number: 0797645137</li>
                <li className='mb-2'>Enter your contribution</li>
                <li className='mb-2'>After payment the name on the M-Pesa message will be 'iPrevent.io'</li>
             </ul>

        </div>

        <div className="sponsor">
            <h3 className="text-2xl font-light mb-4">Sponsor the Cause</h3>
             <ul className='border border-white p-6 rounded-lg w-[250px]'>
                <li className='mb-2'> Pledges for corporates or organizations</li>
                <li className='mb-2'>Diamond Package: 500,000 Ksh</li>
                <li className='mb-2'>Gold Package: 250,000 Ksh</li>
                <li className='mb-2'>Silver Package: 100,000Ksh</li>
                <li className='mb-2'>Contact +245(797645137) for more information</li>
             </ul>

        </div>
        
    </div>

  
    </>
  )
}

export default Money