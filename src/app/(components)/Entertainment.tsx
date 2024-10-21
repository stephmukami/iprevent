'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from '../context/FormContext';
import { useRouter } from "next/navigation"

type Props = object;

function Entertainment({}: Props) {
  const { updateFormData } = useForm();
  const router = useRouter();

  // Local state for smoking history and alcohol consumption
  const [smokingHistory, setSmokingHistory] = useState(0);
  const [alcoholConsumption, setAlcoholConsumption] = useState(0);

  const handleSmokingHistory = (value: number) => {
    setSmokingHistory(value);
    updateFormData('Smoking', value); // Update context with smoking histor
    console.log(smokingHistory);
  };

  const handleAlcoholConsumptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setAlcoholConsumption(value);
    updateFormData('AlcoholConsumption', value); // Update context with alcohol consumption
  };

  const handleNext = () => {
    router.push('/sports'); // Navigate to the next page
  };

  return (
    <div className="min-h-screen min-w-screen">
      <div className="flex image-container justify-center items-center -[20px] pt-[30px]">
        <img className='w-[319px] h-[336px]' src="./Champagne.png" alt="3D image of a champagne bottle" />
      </div>

      <div className="text-container p-[20px] bg-black text-white w-screen">
        <h3 className='text-2xl mb-4'>Do you indulge ?</h3>
        
        <div className="family-history-div mb-6 flex flex-col md:flex-row space-x-6 items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h5>4. Smoking can lead to higher blood sugar levels. Let us know if you smoke to better understand how it might affect your health.
            </h5>
          </div>
          <div className="binary-buttons flex space-x-4 items-center">
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-black"
              onClick={() => handleSmokingHistory(1)} // Set smoking history to 1 for Yes
            >
              Yes
            </button>
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]"
              onClick={() => handleSmokingHistory(0)} // Set smoking history to 0 for No
            >
              No
            </button>
          </div>
        </div>

        <h5 className='mb-4'>5. Your drinking habits play a role in your overall health and diabetes risk. Share this info to get a more accurate assessment. Range: (0-20)</h5>
        <div className="range flex space-x-4 p-3">
          <div>
            <label htmlFor="range">Range</label>
          </div>
          <div className="mb-[60px] w-[200px]">
            <input
              className="bg-white w-[90px] text-black rounded-sm h-[22px] text-black"
              type="number"
              value={alcoholConsumption}
              onChange={handleAlcoholConsumptionChange} // Update state on change
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="nav-buttons flex justify-between pl-3 w-[650px]">
            <Link href='/general'>
              <button className="w-[120px] h-[40px] text-white bg-black rounded-md border border-white">Back</button>
            </Link>
            <Link href='/sports'>
              <button
                className="w-[120px] h-[40px] text-white bg-brand-purple rounded-md"
                onClick={handleNext} // Call handleNext on button click
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entertainment;