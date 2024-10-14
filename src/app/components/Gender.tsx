import React from 'react'


type Props = object

function Gender({}: Props) {
  return (
    <>
     <div className="flex-container flex flex-col lg:flex-row p-[10px] space-y-[20px]  min-h-screen min-w-screen">
        
        <div className="flex image-container lg:w-3/5 border border-red-500 p-[20px] pt-[70px]">
          <img className=' w-[519px] h-[436px] border border-red-300' src="./girl.png" alt=" 3d image of a girl" />
          <img className=' w-[519px] h-[436px] border border-red-300' src="./boy.png" alt=" 3d image of a boy" />
 
        </div>

        <div className=" p-[20px] bg-black text-white min-h-screen w-screen input-container border border-red-300 lg:w-2/5 ">
  <h3 className='text-2xl mb-4'>
    Let us Feed our model!
  </h3>
  <p className='mb-6'>Mauris semper nisl et sagittis mattis  Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet iaculis</p>
  <h5 className='mb-3'>Please input the following information </h5>
  <div className="input-flex flex mb-[150px]">
    <div className="weight flex space-x-4">
      <div>
        <label htmlFor="weight">1. Your Weight (kg)</label>
      </div>
      <div className="w-[200px]">
        <input className="bg-white w-[90px] rounded-sm h-[22px]" type="email" />
      </div>
    </div>
    <div className="height flex space-x-4">
      <div>
        <label htmlFor="height">2. Your Height (cm)</label>
      </div>
      <div className="mb-8 w-[200px]">
        <input className="bg-white w-[90px] rounded-sm h-[22px]" type="email" />
      </div>
    </div>
  </div>
  <div className="flex justify-end">
  <button className='w-[140px] h-[40px]  text-white bg-brand-purple rounded-md'>Next</button>
  </div>
</div>

    </div>
    </>
  )
}

export default Gender