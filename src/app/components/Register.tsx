import React from 'react'
import Link from 'next/link'

type Props = object

function Register({}: Props) {
  return (
    <>
        <div className="flex-container flex flex-col lg:flex-row p-[60px] space-y-[20px] md:space-x-[110px] md:min-h-screen md:min-w-screen justify-center items-center">
        
            <div className="form-container w-screen md:w-1/3 border border-red-500 p-[40px] ">
                <h2 className='text-3xl mb-3'>Sign Up to iPrevent</h2>
                <h4>Already have an account? 
                    <Link href="/login">
                        <span className='font-bold'>Log In</span>
                    </Link>
                    </h4>
                <form action="" className='p-[20px] '>
                    <div className='mb-4'>
                        <label htmlFor="first-name" >First Name</label>
                    </div>

                    <div className='mb-8 md:w-[370px]  border border-emerald-400'>
                        <input  className="bg-input-grey md:w-[370px] w-full  rounded-sm h-[32px]" type="text" />
                    </div>

                    <div className='mb-4' >
                        <label htmlFor="last-name">Last Name</label>
                    </div>

                    <div className='mb-8 md:w-[370px]  border border-emerald-400'>
                        <input  className="bg-input-grey md:w-[370px] w-full  rounded-sm h-[32px]" type="text" />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="last-name">Email Address </label>
                    </div>

                    <div className='mb-8 md:w-[370px]  border border-emerald-400'>
                        <input  className="bg-input-grey md:w-[370px] w-full  rounded-sm h-[32px]" type="text" />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="last-name">Password</label>
                    </div>

                    <div className='mb-8 md:w-[370px]  border border-emerald-400'>
                        <input  className="bg-input-grey md:w-[370px] w-full  rounded-sm h-[32px]" type="text" />
                    </div>
                    <button className='bg-black text-white w-[140px] h-[36px] rounded-md relative left-14'>Sign Up</button>
                </form>
            </div>

        <div className="image-container  border border-red-300 md:w-2/3 ">
            <img className='md:w-full md:h-full w-screen h-[300px]' src="./iprevent-five.avif" alt="image of a doctor" />
        </div>
    </div>
    </>
  )
}

export default Register