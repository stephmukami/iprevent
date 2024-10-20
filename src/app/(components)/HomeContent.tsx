import React from 'react'
type Props = object

function HomeContent({}: Props) {
  return (
    <>
    <main className='md:p-8 p-2'>
      <div className="flex-container flex flex-col md:flex-row  space-x-[80px] ">

      <div className="flex-col-one  md:w-[450px] mb-4 md:mb-0 md:p-0 p-2">
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
        <div className="extra-intro-links ">

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
      
      <div className="flex-col-two flex flex-col md:flex-row space-x-0 md:space-x-[120px] items-center">
  <div className='hero-image flex flex-col items-center'>
    <img className="rounded-2xl w-[370px] h-[520px] mb-6 max-w-full" src="./iprevent-two.jpg" alt="pineapple berry spread" />
    <img className="rounded-2xl w-[150px] h-[140px] max-w-full" src="./iprevent-photo-one.webp" alt="elderly women laughing" />
  </div>

  <div className="feature-image mt-8 md:mt-[120px] flex flex-col items-center">
    <img className='mb-3 md:mb-[30px] rounded-2xl w-[260px] h-[250px] max-w-full' src="./iprevent-four.webp" alt="family picture" />
    <div className="secondary-intro text-center md:text-left">
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