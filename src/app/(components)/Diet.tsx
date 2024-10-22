'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from '../context/FormContext';

type Props = object;

function Diet({}: Props) {
  const { updateFormData } = useForm(); 
  const [dietQuality, setDietQuality] = useState(0); 

  const handleDietQualityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setDietQuality(value);
    updateFormData('DietQuality', value); 
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-between">

      <div className="flex image-container justify-center items-center p-[20px] pt-[30px]">
        <img className='w-[319px] h-[336px]' src="./Takeaway.png" alt="3D image of takeout food" />
      </div>

      <div className="text-container p-[20px] bg-black text-white w-screen">
        <h3 className='text-2xl mb-4'>What is the quality of  your diet ?</h3>
        
        <h5 className='mb-4'>7. What you eat matters! Let us know about your diet so we can factor in its impact on your diabetes risk. Range (0-20)</h5>
        <div className="range flex space-x-4 p-3">
          <div>
            <label htmlFor="range">Range</label>
          </div>
          <div className="mb-[60px] w-[200px]">
            <input
              className="bg-white w-[90px] rounded-sm h-[22px] text-black"
              type="number"
              value={dietQuality} 
              onChange={handleDietQualityChange} 
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="nav-buttons flex justify-between pl-3 w-[650px]">
            <Link href='/sports'>
              <button className="w-[120px] h-[40px] text-white bg-black rounded-md border border-white ">Back</button>
            </Link>
            <Link href='/sleep'>
              <button className="w-[120px] h-[40px] text-white bg-brand-purple rounded-md">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diet;
