import React from 'react'
type Props = object

function HomeContent({}: Props) {
  return (
    <>
    <main className='p-8'>
      <div className="flex-col-two flex space-x-[80px] ">

      <div className="intro-text border border-gray-700 w-[450px]">
        <h1 className='font-bold text-3xl mb-[50px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing 
        </h1>
        <h3 className='font-light mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing 
        </h3>

        <div className="home-btns flex  space-x-6 font-bold mb-10">
          <button className='  w-[140px] h-[36px] bg-brand-green rounded-md'>How it Works</button>
          <button className='w-[140px] h-[36px] rounded-md bg-brand-grey'>Register</button>
        </div>
        <div className="extra-intro-links">

          <div className='flex items-center space-x-2'>
          <h3 className="">Lorem Ipsum Report</h3>
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right"/>
          </div>

          <div className='flex items-center space-x-2 '>
          <h3 className="">Lorem Ipsum Report</h3>
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right"/>
          </div>

          <div className='flex items-center space-x-2 '>
          <h3 className="">Lorem Ipsum Report</h3>
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right"/>
          </div>

        </div>

      </div>
      
      <div className="flex-col-two flex space-x-[120px]">

      <div className='hero-image'>
        
      <img className=" rounded-2xl w-[370px] h-[520px] mb-6" src="./iprevent-two.jpg" alt="pineapple berry spread" />
      <img className= "rounded-2xl w-[150px] h-[140px]" src="./iprevent-photo-one.webp " alt=" elderly women laughing" />
      </div>

      <div className="feature-image mt-[120px]">
        <img className=' mb-[30px] rounded-2xl w-[260px] h-[250px]' src="./iprevent-four.webp" alt="family picture" />
        <div className="secondary-intro">
          <h3>Lorem ipsum dolor Report</h3>
          <h3>Lorem ipsum dolor Report</h3>
          <h3>Lorem ipsum dolor Report</h3>

        </div>
      </div>
      </div>
    
      </div>

      <div className="extra-intro">
        
 
    

      </div>
    </main>
    </>
  )
}

export default HomeContent