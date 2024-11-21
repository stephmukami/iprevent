"use client";
import React from 'react';
import { useSearchParams } from "next/navigation";
import Link from 'next/link';

type Props = object;

type Top3Features = {
    [key: string]: number;
  };
  
  type PredictionData = {
    highest_class_proba: number;
    prediction: number;
    prediction_proba: number[];
    recommendations: string[];
    top_3_features: Top3Features;
  };

function Prediction({}: Props) {
    const searchParams = useSearchParams();
    const prediction = searchParams.get("prediction");

    const parsedPrediction: PredictionData = prediction 
    ? JSON.parse(prediction) 
    : {
      highest_class_proba: 0,
      prediction: 0,
      prediction_proba: [],
      recommendations: [],
      top_3_features: {}
    };
    const convertPercentage = (probability: number) => {
        return (probability * 100).toFixed(1);
    };


    const diabetesProbability = (predictedClass: number) => {
        if (predictedClass === 1) {
            return 'You are likely to get diabetes';
        } else {
            return 'You are not likely to get diabetes';
        }
    };


    return (
        <>
            <div className="flex-container flex flex-col justify-center items-center w-screen  ">
                <div className="image-containermb-0 pb-0">
                    <img className="md:w-[400px] md:h-[400px] w-[300px] h-[300px]" src="./mental.png" alt="image of mind" />
                </div>

                <div className="text-container p-[40px]  bg-secondary-grey text-black text-center mb-0 pb-0 w-screen">
                    <h2 className="text-3xl mb-6">Here is Your Predicted Diabetes Risk Assessment</h2>
                    <div className="text-center">
                        <h5 className="mb-6 text-xl font-bold">{diabetesProbability(parsedPrediction.prediction)} with {convertPercentage(parsedPrediction.highest_class_proba)} % probability</h5>
                        <h5 className="mb-4">Here are the top 3 features and their probabilities that contributed to the result</h5>
                        <ul className="mb-2 text-xl">
                            {parsedPrediction.top_3_features && Object.entries(parsedPrediction.top_3_features).map(([feature, value]) => (
                                <li key={feature}>{feature}: {value.toFixed(2)}%</li>
                            ))}
                        </ul>
                        <div className="text-justify p-4 ">
                            {parsedPrediction.recommendations && parsedPrediction.recommendations.map((recommendation, index) => (
                                <p className="mb-3" key={index}>{recommendation}</p>
                            ))}
                        </div>
                    </div>
                    <Link href='/general'>
              <button className="w-[120px] h-[40px] mb-4 text-white bg-brand-purple rounded-md">Predict Again</button>
            </Link>
                </div>
            </div>
        </>
    );
}

export default Prediction;
