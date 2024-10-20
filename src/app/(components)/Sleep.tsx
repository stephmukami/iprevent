import React from 'react'
import Link from 'next/link'


type Props = object

function Sleep({}: Props) {
  return (
    <>
    <div className="min-h-screen min-w-screen">
        
        <div className="flex image-container justify-center items-centerp-[20px] pt-[30px]">
          <img className=' w-[319px] h-[336px] ' src="./Moon.png" alt=" 3d image of sleeping moon" />
 
        </div>

        <div className=" text-container p-[20px] bg-black text-white  w-screen  ">
            <h3 className='text-2xl mb-4'>
              Continued Explainer 
            </h3>
            <p className='mb-6'>Mauris semper nisl et sagittis mattis  Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet iaculis</p>
            

            <h5 className='mb-4'>8. Sleep Quality  Suspendisse sed varius odio. Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet  (0-20)
            </h5>
              <div className="range flex space-x-4 p-3">
                <div>
                  <label htmlFor="range">Range</label>
                </div>
                <div className="mb-[60px] w-[200px]">
                  <input className="bg-white w-[90px] rounded-sm h-[22px]" type="email" />
                </div>
              </div>
            <div className="flex items-center justify-center ">
              <div className="nav-buttons flex justify-between pl-3 w-[650px] ">
                <Link href='/sleep'>
                <button className="w-[120px] h-[40px] text-white bg-black rounded-md border border-white">Back</button>
                </Link>

                <Link href='family-history'>
                <button className="w-[120px] h-[40px] text-white bg-brand-purple rounded-md">Next</button>

                </Link>

              </div>
            </div>

</div>

    </div>
    </>
  )
}

export default Sleep