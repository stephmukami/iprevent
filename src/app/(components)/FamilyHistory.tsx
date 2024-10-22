/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from '../context/FormContext';
import { useRouter } from "next/navigation";

type Props = object;

function FamilyHistory({}: Props) {
  const { updateFormData } = useForm();
  const router = useRouter();

  // Local state for family history questions
  const [hypertension, setHypertension] = useState(0);
  const [familyHistory, setFamilyHistory] = useState(0);
  const [gestationalDiabetes, setGestationalDiabetes] = useState(0);
  const [previousHistory, setPreviousHistory] = useState(0);

  const handleHypertension = (value: number) => {
    setHypertension(value)
    updateFormData('Hypertension', value); 
    
  };

  const handleFamilyHistory = (value: number) => {
    setFamilyHistory(value);
    updateFormData('FamilyHistoryDiabetes', value); 
  };

  const handleGestationalDiabetes = (value: number) => {
    setGestationalDiabetes(value);
    updateFormData('GestationalDiabetes', value); 
  };

  const handlePreviousHistory = (value: number) => {
    setPreviousHistory(value);
    updateFormData('PreviousPreDiabetes', value); 
  };

  return (
    <div className="min-h-screen min-w-screen">
      <div className="flex image-container justify-center items-center p-[20px] pt-[30px]">
        <img className='w-[319px] h-[336px]' src="./nurse.png" alt="3D image of a nurse" />
      </div>

      <div className="text-container p-[20px] bg-black text-white w-screen">
        <h3 className='text-2xl mb-4'>Please provide a brief history</h3>

        <div className="family-history-div mb-6 flex flex-col md:flex-row space-x-6 items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h5>9. High blood pressure often comes hand-in-hand with diabetes. Input whether you have hypertension so we can assess the full picture.</h5>
          </div>
          <div className="binary-buttons flex space-x-4 items-center">
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleHypertension(1)} 
            >
              Yes
            </button>
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleHypertension(0)} 
            >
              No
            </button>
          </div>
        </div>

        <div className="gestational-diabetes-div mb-6 flex flex-col md:flex-row space-x-6 items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h5>10.  Diabetes can run in the family—if you have relatives with the condition, it’s crucial information for your risk profile.</h5>
          </div>
          <div className="binary-buttons flex space-x-4 items-center">
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-black hover:bg-button-grey"
              onClick={() => handleFamilyHistory(1)}
            >
              Yes
            </button>
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleFamilyHistory(0)} 
            >
              No
            </button>
          </div>
        </div>

        <div className="previous-history-div mb-6 flex flex-col md:flex-row space-x-6 items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h5>11. If you’ve had diabetes during pregnancy, your chances of developing it again are higher—let us factor that in.</h5>
          </div>
          <div className="binary-buttons flex space-x-4 items-center">
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleGestationalDiabetes(1)}
            >
              Yes
            </button>
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handleGestationalDiabetes(0)}
            >
              No
            </button>
          </div>
        </div>

        <div className="family-history-div mb-6 flex flex-col md:flex-row space-x-6 items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h5>12. Previous Pre-Diabetes: A pre-diabetes diagnosis is a warning sign—letting us know helps us measure your current risk.</h5>
          </div>
          <div className="binary-buttons flex space-x-4 items-center">
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handlePreviousHistory(1)} 
            >
              Yes
            </button>
            <button 
              className="bg-secondary-black text-white rounded-lg w-[95px] h-[26px] hover:bg-button-grey"
              onClick={() => handlePreviousHistory(0)} 
            >
              No
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="nav-buttons flex justify-between pl-3 w-[650px]">
            <Link href='/sleep'>
              <button className="w-[120px] h-[40px] text-white bg-black rounded-md border border-white">Back</button>
            </Link>
            <Link href='/previous-meds'> 
              <button className="w-[120px] h-[40px] text-white bg-brand-purple rounded-md" onClick={() => router.push('/previous-meds')}>
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyHistory;
