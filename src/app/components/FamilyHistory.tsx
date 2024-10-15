import React from 'react'

type Props = object

function FamilyHistory({}: Props) {
  return (
    <>
    <div className="min-h-screen min-w-screen">
        
        <div className="flex image-container justify-center items-center border border-red-500 p-[20px] pt-[30px]">
          <img className=' w-[319px] h-[336px] border border-red-300' src="./nurse.png" alt=" 3d image of a nurse" />
 
        </div>

        <div className=" text-container p-[20px] bg-black text-white  w-screen  border border-red-300  ">
            <h3 className='text-2xl mb-4'>
              Continued Explainer 
            </h3>
            <p className='mb-6'>Mauris semper nisl et sagittis mattis  Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet iaculis</p>
            
            <div className="family-history-div mb-6 flex space-x-6 items-center border border-red-300">
              <div className="flex items-center">
                <h5 >9. Hypertension history Suspendisse sed varius odio. Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet</h5>
              </div>
              <div className="binary-buttons flex space-x-4 items-center">
                <button className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]">Yes</button>
                <button className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]">No</button>
              </div>
            </div>

                        
            <div className="gestational-diabetes-div mb-6 flex space-x-6 items-center border border-red-300">
              <div className="flex items-center">
                <h5 >10. Family history Suspendisse sed varius odio. Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet</h5>
              </div>
              <div className="binary-buttons flex space-x-4 items-center">
                <button className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]">Yes</button>
                <button className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]">No</button>
              </div>
            </div>

                        
            <div className="previous-history-div mb-6 flex space-x-6 items-center border border-red-300">
              <div className="flex items-center">
                <h5 >11. Gestational Diabetes  Suspendisse sed varius odio. Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet</h5>
              </div>
              <div className="binary-buttons flex space-x-4 items-center">
                <button className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]">Yes</button>
                <button className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]">No</button>
              </div>
            </div>
            
            <div className="family-history-div mb-6 flex space-x-6 items-center border border-red-300">
              <div className="flex items-center">
                <h5 >12. Previous  history Suspendisse sed varius odio. Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet</h5>
              </div>
              <div className="binary-buttons flex space-x-4 items-center">
                <button className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]">Yes</button>
                <button className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]">No</button>
              </div>
            </div>
         
            <div className="flex items-center justify-center ">
              <div className="nav-buttons flex justify-between pl-3 w-[650px] ">
                <button className="w-[120px] h-[40px] text-white bg-black rounded-md border border-white">Back</button>
                <button className="w-[120px] h-[40px] text-white bg-brand-purple rounded-md">Next</button>
              </div>
            </div>

</div>

    </div>
    </>
  )
}

export default FamilyHistory