import React from 'react'

type Props = object

function Responsibility({}: Props) {
  return (
    <>
    <div className="top-row p-[80px]">
        <h3 className='text-2xl p-4'> In a world of AI we choose to be <span className='bg-black text-white p-3 w-[160px] px-[60px]'> responsible </span></h3>
    </div>

    <div className="bottom-row bg-black text-white flex p-[70px] space-x-[250px]">
        <div className='w-[450px]'>
        <p className='mb-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit voluptatibus quam tempora atque id aut culpa ducimus nihil ipsam! Sed ipsam iure dignissimos debitis possimus totam maiores perspiciatis perferendis expedita.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eaque sequi quis optio perspiciatis. Officia quo consequatur aut optio. Tempora voluptate, perspiciatis fugiat repellendus nisi quibusdam assumenda .</p>
        <p className='mb-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit voluptatibus quam tempora atque id aut culpa ducimus nihil ipsam! Sed ipsam iure dignissimos debitis possimus totam maiores perspiciatis perferendis expedita.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eaque sequi quis optio perspiciatis. Officia quo consequatur aut optio.</p>

        </div>

        <div>
            <img className="h-[650px] w-[500px]" src="./iprevent-eight.jpg" alt="robot arm" />
        </div>

    </div>
    </>
  )
}

export default Responsibility
