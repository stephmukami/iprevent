import React from 'react'
import Link from 'next/link'

type Props = object

function Navbar({}: Props) {
  return (
    <div>
        <nav className='border border-red-400 flex justify-center  items-center space-x-[240px] '>

        <div className='logo-section border border-green-950 relative right-2 '>
        <Link href="/">
        <div className="logo-section  flex justify-center items-center space-x-6 ">
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/square-90.png" alt="square-90"/>
            <h2 className='text-2xl'>iPrevent</h2>
        
        </div> 
        </Link>
        
        </div>

        <div className=' font-light text-lg text-section flex justify-center items-center space-x-20 border border-orange-950 p-2'>
            <Link href="/">
            <h3 className='border-b-2 border-transparent hover:border-b-2 hover:border-b-black transition ease-in'>Home</h3>
            </Link>

            <Link href="/about">
            <h3 className='border-b-2 border-transparent hover:border-b-2 hover:border-b-black transition ease-in'>How To Use iPrevent</h3>
            </Link>

            <Link href="/responsibility">
            <h3 className='border-b-2 border-transparent hover:border-b-2 hover:border-b-black transition ease-in'>iResponsibility</h3>
            </Link>

          
        <div className="auth-btns flex justify-center items-center  bg-secondary-grey rounded-3xl h-[50px] w-[190px] border border-emerald-500 space-x-4">
        <Link href="/register">
            <div>
            <h3 className='font-bold'>Register</h3>
            </div>
        </Link>
            
            <div>
            <Link href="/login">
            <div className='flex items-center justify-center bg-white rounded-2xl w-[80px] h-[30px]'>
                <h3>Log In</h3>
            </div>
            </Link>


            </div>

        </div>
        </div>

     

   
        </nav>

   


    </div>
  )
}

export default Navbar