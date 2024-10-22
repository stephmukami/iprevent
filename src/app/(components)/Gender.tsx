'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from '../context/FormContext';
import { useRouter } from "next/navigation"

type Props = object;

function Gender({}: Props) {
  const { updateFormData } = useForm();
  const router = useRouter();

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [socioeconomicStatus, setSocioeconomicStatus] = useState('');

  const handleNext = () => {
    updateFormData('BMI', weight / ((height / 100) ** 2)); 
    updateFormData('Age', age);
    updateFormData('SocioeconomicStatus', convertSocioeconomicStatus(socioeconomicStatus));
    router.push('indulgence')
  };

  const convertSocioeconomicStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case 'high':
        return 2;
      case 'medium':
        return 1;
      case 'low':
        return 0;
      default:
        return 0; 
    }
  };

  return (
    <>
      <div className="flex-container flex flex-col md:flex-row space-y-[20px] min-h-screen min-w-screen">
        <div className="flex flex-col md:flex-row image-container md:w-3/5 p-[20px] pt-[70px] h-screen">
          <img className='w-[519px] h-[436px]' src="./girl.png" alt="3D image of a girl" />
          <img className='w-[519px] h-[436px]' src="./boy.png" alt="3D image of a boy" />
        </div>

        <div className="p-[20px] bg-black text-white min-h-screen w-screen input-container md:w-2/5">
          <h3 className='text-2xl mb-4'>Let us get you assessed!</h3>
          <p className='mb-6'>
            Please input the following information as directed. You will then get a risk assessment of how likely you are to obtain diabetes and the factors that contribute to the result.
          </p>
          <h5 className='mb-3'>Enter your details here:</h5>

          <div className="input-flex flex flex-col md:flex-row mb-[60px]">
            <div className="weight flex space-x-4 mb-3 md:mb-0">
              <div>
                <label htmlFor="weight">1. Your Weight (kg)</label>
              </div>
              <div className="w-[200px]">
                <input
                  className="bg-white w-[90px] rounded-sm h-[22px] text-black"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="height flex space-x-4">
              <div>
                <label htmlFor="height">2. Your Height (cm)</label>
              </div>
              <div className="mb-2 w-[200px]">
                <input
                  className=" text-black bg-white w-[90px] rounded-sm h-[22px]"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          <div className="input-flex flex flex-col md:flex-row mb-[150px]">
            <div className="weight flex space-x-4 mb-3 md:mb-0">
              <div>
                <label htmlFor="age">3. Age (yrs)</label>
              </div>
              <div className="w-[200px]">
                <input
                  className="text-black bg-white w-[90px] rounded-sm h-[22px]"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="height flex space-x-4">
              <div>
                <label htmlFor="socioeconomicStatus">4. Socioeconomic status (High, Medium, Low)</label>
              </div>
              <div className="mb-8 w-[200px]">
                <input
                  className=" text-black bg-white w-[90px] rounded-sm h-[22px]"
                  type="text"
                  value={socioeconomicStatus}
                  onChange={(e) => setSocioeconomicStatus(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Link href='/indulgence'>
              <button
                className='w-[140px] h-[40px] text-white bg-brand-purple rounded-md'
                onClick={handleNext} // Call handleNext on button click
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gender;
