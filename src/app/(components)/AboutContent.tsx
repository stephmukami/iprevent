import React from 'react'

type Props = object

function AboutContent({}: Props) {
  return (
    <>
    <div className="top-row bg-black text-center p-8 mb-4">
        <h3 className='text-white text-2xl mb-4'>What is iPrevent ?</h3>
        <p className='text-white mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ratione explicabo magni aut dolorum, illo voluptate tempora aliquam mollitia reprehenderit culpa possimus quo dignissimos omnis exercitationem alias in sunt. Repellat!</p>
        <div className="home-btns flex  space-x-6 font-bold  justify-center items-center">
          <button className='  w-[140px] h-[36px] bg-brand-green rounded-md'>Register</button>
          <button className='w-[140px] h-[36px] rounded-md bg-brand-grey'>Log In</button>
        </div>
    </div>

    <div className="second-row p-6">
    <h3 className='text-black text-2xl mb-4 text-center'>How it Works</h3>
        <div className="flex-container flex flex-col items-center md:justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-[120px] py-4">

        <div className='bg-brand-green w-[270px] h-[220px] rounded-xl p-4 text-center'>
          <h4 className='font-bold mb-4'>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error excepturi est nisi laboriosam eligendi!</p>
        </div>

        <div className='bg-brand-peach w-[270px] h-[220px] rounded-xl p-4 text-center'>
          <h4 className='font-bold mb-4'>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error excepturi est nisi laboriosam eligendi!</p>
        </div>

        <div className='bg-brand-blue w-[270px] h-[220px] rounded-xl p-4 text-center'>
          <h4 className='font-bold mb-4'>Lorem Ipsum</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error excepturi est nisi laboriosam eligendi!</p>
        </div>

    </div>


    </div>
    </>
  )
}

export default AboutContent