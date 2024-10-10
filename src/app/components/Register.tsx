import React from 'react'

type Props = object

function Register({}: Props) {
  return (
    <>
    <div className="flex-container flex ">

        <div className="form-container">
            <h2 className='text-2xl mb-3'>Sign Up to iPrevent</h2>
            <h4>Already have an account? <span className='font-bold'>Log In</span></h4>
            <form action="">
                <div>
                    <label htmlFor="first-name">First Name</label>
                </div>
                <div>
                    <input  className="bg-brand-grey" type="text" />
                </div>

                <div>
                    <label htmlFor="last-name">Last Name</label>
                </div>
                <div>
                    <input  className="bg-brand-grey" type="text" />
                </div>

                <div>
                    <label htmlFor="last-name">Email Address </label>
                </div>
                <div>
                    <input  className="bg-brand-grey" type="email" />
                </div>

                <div>
                    <label htmlFor="last-name">Password</label>
                </div>
                <div>
                    <input  className="bg-brand-grey" type="password" />
                </div>
            
            </form>
        </div>

        <div className="image-container">
            <img src="./iprevent-five.avif" alt="doctors image" />
        </div>
    </div>
    </>
  )
}

export default Register