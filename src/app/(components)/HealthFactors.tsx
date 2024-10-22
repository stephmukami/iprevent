'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from '../context/FormContext';
import { useRouter } from "next/navigation";

type Props = object;

function HealthFactors({}: Props) {
  const { updateFormData, formData } = useForm(); 
  const router = useRouter();

  // Local state for health factors
  const [frequentUrination, setFrequentUrination] = useState(0);
  const [excessiveThirst, setExcessiveThirst] = useState(0);
  const [weightLoss, setWeightLoss] = useState(0);
  const [fatigueLevel, setFatigueLevel] = useState(0);

  // Function to handle button clicks for binary questions
  const handleBinaryAnswer = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(value);
  };

  // Handle prediction
  const handleGetPrediction = () => {
    // Update the context with the input values
    updateFormData('FrequentUrination', frequentUrination);
    updateFormData('ExcessiveThirst', excessiveThirst);
    updateFormData('UnexplainedWeightLoss', weightLoss);
    updateFormData('FatigueLevels', fatigueLevel);

    // Log the updated form data to the console
    console.log(formData);

    // Navigate to the prediction page
    router.push('/predicted');
  };

  return (
    <>
      <div className="min-h-screen min-w-screen">
        <div className="flex image-container justify-center items-center p-[20px] pt-[30px]">
          <img className='w-[319px] h-[336px]' src="./nurse.png" alt="3D image of a nurse" />
        </div>

        <div className="text-container p-[20px] bg-black text-white w-screen">
          <h3 className='text-2xl mb-4'>Just a few more questions</h3>

          <div className="health-factor-one mb-6 flex space-x-6 items-center">
            <div className="flex items-center">
              <h5>13. Frequently urination Suspendisse sed varius odio. Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet</h5>
            </div>
            <div className="binary-buttons flex space-x-4 items-center">
              <button
                className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]"
                onClick={() => handleBinaryAnswer(setFrequentUrination, 1)}
              >
                Yes
              </button>
              <button
                className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]"
                onClick={() => handleBinaryAnswer(setFrequentUrination, 0)}
              >
                No
              </button>
            </div>
          </div>

          <div className="health-factor-two mb-6 flex space-x-6 items-center">
            <div className="flex items-center">
              <h5>14. Excessive thirst Suspendisse sed varius odio. Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet</h5>
            </div>
            <div className="binary-buttons flex space-x-4 items-center">
              <button
                className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]"
                onClick={() => handleBinaryAnswer(setExcessiveThirst, 1)}
              >
                Yes
              </button>
              <button
                className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]"
                onClick={() => handleBinaryAnswer(setExcessiveThirst, 0)}
              >
                No
              </button>
            </div>
          </div>

          <div className="health-factor-three mb-6 flex space-x-6 items-center">
            <div className="flex items-center">
              <h5>15. Unexplained weight loss Suspendisse sed varius odio. Donec vel est fermentum justo iaculis fermentum. Nulla condimentum aliquet</h5>
            </div>
            <div className="binary-buttons flex space-x-4 items-center">
              <button
                className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]"
                onClick={() => handleBinaryAnswer(setWeightLoss, 1)}
              >
                Yes
              </button>
              <button
                className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px]"
                onClick={() => handleBinaryAnswer(setWeightLoss, 0)}
              >
                No
              </button>
            </div>
          </div>

          <h5 className='mb-4'>5. Fatigue levels (0-20)</h5>
          <div className="range flex space-x-4 p-3">
            <div>
              <label htmlFor="fatigueLevel">Range</label>
            </div>
            <div className="mb-[60px] w-[200px]">
              <input
                className="bg-white w-[90px] rounded-sm h-[22px] text-black"
                type="number"
                value={fatigueLevel}
                onChange={(e) => setFatigueLevel(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="nav-buttons flex justify-between pl-3 w-[650px]">
              <Link href='/family-history'>
                <button className="w-[120px] h-[40px] text-white bg-black rounded-md border border-white">Back</button>
              </Link>

              <button
                className="w-[120px] h-[40px] text-white bg-green-800 rounded-md"
                onClick={handleGetPrediction} // Call handleGetPrediction on button click
              >
                Get Prediction
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthFactors;