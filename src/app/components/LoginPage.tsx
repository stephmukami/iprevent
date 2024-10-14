import React from 'react'
import Link from 'next/link'


type Props = object

function LoginPage({}: Props) {
  return (
    <>
     <>
     <div className="flex-container flex flex-col lg:flex-row p-[60px] space-y-[20px] lg:space-x-[110px] min-h-screen min-w-screen">
        
        <div className="form-container lg:w-1/3 border border-red-500 p-[40px]">
            <h2 className='text-3xl mb-3'>Welcome back to iPrevent !</h2>
            <h4>Do not have an account? 
                <Link href="/register">
                <span className='font-bold mr-4'>Sign Up</span>
                </Link>
                </h4>
            <form action="" className='p-[20px] '>
                
                <div className='mb-4'>
                    <label htmlFor="last-name">Email Address </label>
                </div>

                <div className='mb-8 w-[200px]'>
                    <input  className="bg-input-grey w-[370px]  rounded-sm h-[32px]" type="email" />
                </div>

                <div className='mb-4'>
                    <label htmlFor="last-name">Password</label>
                </div>

                <div className='mb-6'>
                    <input  className="bg-input-grey w-[370px]  rounded-sm h-[32px]" type="password" />
                </div>
            <button className='bg-black text-white w-[140px] h-[36px] rounded-md'>Log in</button>
            </form>
        </div>

        <div className="image-container  border border-red-300 lg:w-2/3 ">
        <img className='w-full h-full' src="./iprevent-seven.jpg" alt="image of brocolli" />
        </div>
    </div>
    </>
    </>
  )
}

export default LoginPage