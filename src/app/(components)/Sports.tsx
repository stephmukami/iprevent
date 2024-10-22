
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from '../context/FormContext';
//import { useRouter } from "next/navigation"

type Props = object;

function Sports({}: Props) {
  const { updateFormData } = useForm(); // Access the context to update form data
  const [physicalActivity, setPhysicalActivity] = useState(0); // Local state for physical activity

  const handlePhysicalActivityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setPhysicalActivity(value);
    updateFormData('PhysicalActivity', value); // Update context with physical activity
  };

  return (
    <div className="min-h-screen min-w-screen">
      <div className="flex image-container justify-center items-center p-[20px] pt-[30px]">
        <img className='w-[319px] h-[336px]' src="./Sports.png" alt="3D image of sports balls" />
      </div>

      <div className="text-container p-[20px] bg-black text-white w-screen">
        <h3 className='text-2xl mb-4'>Physical Activity</h3>
        
        <h5 className='mb-4'>6. Being active keeps your blood sugar in check—input your activity levels so we can see how well you are managing your risk. Range(0-20)</h5>
        <div className="range flex space-x-4 p-3">
          <div>
            <label htmlFor="range">Range of Hours</label>
          </div>
          <div className="mb-[60px] w-[200px]">
            <input
              className="bg-white w-[90px] rounded-sm h-[22px] text-black"
              type="number" // Changed to number for physical activity
              value={physicalActivity} // Bind local state to input value
              onChange={handlePhysicalActivityChange} // Update state and context on change
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="nav-buttons flex justify-between pl-3 w-[650px]">
            <Link href='/indulgence'>
              <button className="w-[120px] h-[40px] text-white bg-black rounded-md border border-white">Back</button>
            </Link>
            <Link href='/diet'>
              <button className="w-[120px] h-[40px] text-white bg-brand-purple rounded-md">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;