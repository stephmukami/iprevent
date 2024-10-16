import React from 'react'

type Props = object

function Responsibility({}: Props) {
  return (
    <>
    <div className="top-row text-center md:p-[80px] p-[40px] title-flex-container flex md:flex-row flex-col items-center ">
        <h3 className='text-2xl p-4 md:mb-0 mb-3'> In a world of AI we choose to be </h3>
        <h3 className=' text-2xl bg-black text-white flex md:flex-row flex-col items-center p-4 '> responsible </h3>
    </div>

    <div className="bottom-row bg-black text-white  flex md:flex-row flex-col md:p-[70px] p-4 md:space-x-[250px]">
        <div className='md:w-[450px] border border-red w-screen p-6 md:p-0 '>
          <p className='mb-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit voluptatibus quam tempora atque id aut culpa ducimus nihil ipsam! Sed ipsam iure dignissimos debitis possimus totam maiores perspiciatis perferendis expedita.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eaque sequi quis optio perspiciatis. Officia quo consequatur aut optio. Tempora voluptate, perspiciatis fugiat repellendus nisi quibusdam assumenda .</p>
          <p className='mb-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit voluptatibus quam tempora atque id aut culpa ducimus nihil ipsam! Sed ipsam iure dignissimos debitis possimus totam maiores perspiciatis perferendis expedita.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eaque sequi quis optio perspiciatis. Officia quo consequatur aut optio.</p>

        </div>

        <div className='border border-red'>
            <img className="h-[650px] w-[500px]" src="./iprevent-eight.jpg" alt="robot arm" />
        </div>

    </div>
    </>
  )
}

export default Responsibility
