'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from '../context/FormContext';

type Props = object;

function Sleep({}: Props) {
  const { updateFormData } = useForm(); // Access the context to update form data
  const [sleepQuality, setSleepQuality] = useState(0); // Local state for sleep quality

  const handleSleepQualityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setSleepQuality(value);
    updateFormData('SleepQuality', value); // Update context with sleep quality
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-between">

      <div className="flex image-container justify-center items-center p-[20px] pt-[30px]">
        <img className='w-[319px] h-[336px]' src="./Moon.png" alt="3D image of sleeping moon" />
      </div>

      <div className="text-container p-[20px] bg-black text-white w-screen">
        <h3 className='text-2xl mb-4'>Sleep Quality</h3>

        <h5 className='mb-4'>8. Good sleep helps your body regulate blood sugar—input your sleep habits to see how they influence your risk. Range(0-20)</h5>
        <div className="range flex space-x-4 p-3">
          <div>
            <label htmlFor="range">Range</label>
          </div>
          <div className="mb-[60px] w-[200px]">
            <input
              className="bg-white w-[90px] rounded-sm h-[22px] text-black "
              type="number" // Changed to number for sleep quality
              value={sleepQuality} // Bind local state to input value
              onChange={handleSleepQualityChange} // Update state and context on change
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="nav-buttons flex justify-between pl-3 w-[650px]">
            <Link href='/diet'>
              <button className="w-[120px] h-[40px] text-white bg-black rounded-md border border-white">Back</button>
            </Link>
            <Link href='/family-history'>
              <button className="w-[120px] h-[40px] text-white bg-brand-purple rounded-md">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sleep;
