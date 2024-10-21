import React from 'react'
import Link from 'next/link'


type Props = object

function Gender({}: Props) {
  return (
    <>
     <div className="flex-container flex flex-col md:flex-row  space-y-[20px]  min-h-screen min-w-screen ">
        
        <div className="flex flex-col md:flex-row image-container md:w-3/5  p-[20px] pt-[70px] h-screen ">
          <img className=' w-[519px] h-[436px]  ' src="./girl.png" alt=" 3d image of a girl" />
          <img className=' w-[519px] h-[436px] ' src="./boy.png" alt=" 3d image of a boy" />
 
        </div>

        <div className=" p-[20px] bg-black text-white min-h-screen w-screen input-container  md:w-2/5 ">
          <h3 className='text-2xl mb-4'>
            Let us get you assessed!
          </h3>
          <p className='mb-6'>Please input the following information as directed. The data you input will be the attributes that will feed the machine learning model that powers this app. You will then get an risk assessment of how 
            likely you are to obtain diabetes and the factors that contributes to the result.</p>
          <h5 className='mb-3'>Please input the following information </h5>

          <div className="input-flex flex flex-col md:flex-row mb-[60px]">

            <div className="weight flex space-x-4 mb-3 md:mb-0">
              <div>
                <label htmlFor="weight">1. Your Weight (kg)</label>
              </div>
              <div className="w-[200px]">
                <input className="bg-white w-[90px] rounded-sm h-[22px]" type="number" />
              </div>
            </div>
            <div className="height flex space-x-4">
              <div>
                <label htmlFor="height">2. Your Height (cm)</label>
              </div>
              <div className="mb-2 w-[200px]">
                <input className="bg-white w-[90px] rounded-sm h-[22px]" type="number" />
              </div>
            </div>

          </div>
          <div className="input-flex flex flex-col md:flex-row mb-[150px]">

<div className="weight flex space-x-4 mb-3 md:mb-0">
  <div>
    <label htmlFor="weight">3. Age (yrs)</label>
  </div>
  <div className="w-[200px]">
    <input className="bg-white w-[90px] rounded-sm h-[22px]" type="number" />
  </div>
</div>
<div className="height flex space-x-4">
  <div>
    <label htmlFor="height">4. Socio economic status (Hight, Medium,Low)</label>
  </div>
  <div className="mb-8 w-[200px]">
    <input className="bg-white w-[90px] rounded-sm h-[22px]" type="text" />
  </div>
</div>

</div>

          <div className="flex justify-center md:justify-end">
            <Link href= '/indulgence'>
            <button className='w-[140px] h-[40px]  text-white bg-brand-purple rounded-md'>Next</button>
            </Link>
          </div>
</div>

    </div>
    </>
  )
}

export default Gender