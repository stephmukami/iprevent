"use client";
import React from 'react';
import { useSearchParams } from "next/navigation";

type Props = object;

function Prediction({}: Props) {
    const searchParams = useSearchParams();
    const prediction = searchParams.get("prediction");

    const parsedPrediction = prediction ? JSON.parse(prediction) : {};

    const convertPercentage = (probability: number) => {
        return (probability * 100).toFixed(1);
    };
    const getRiskLevel = (probability: number) => {
        if (probability >= 0.7) return "High Risk";
        if (probability >= 0.3) return "Moderate Risk";
        return "Low Risk";
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
            <div className="flex-container flex flex-col justify-center items-center w-screen  flex-grow">
                <div className="image-containermb-0 pb-0">
                    <img className="md:w-[400px] md:h-[400px] w-[300px] h-[300px]" src="./mental.png" alt="image of mind" />
                </div>

                <div className="text-container p-[40px] bg-black text-white text-center mb-0 pb-0">
                    <h2 className="text-3xl mb-3">Here is Your Predicted Diabetes Risk Assessment</h2>
                    <div className="text-center">
                        <h5 className="mb-3">{diabetesProbability(parsedPrediction.prediction)} with {convertPercentage(parsedPrediction.highest_class_proba)} % probability</h5>
                        <h5 className="mb-2">Here are the top 3 features and their probabilities that contributed to the result</h5>
                        <ul className="mb-2">
                            {parsedPrediction.top_3_features && Object.entries(parsedPrediction.top_3_features).map(([feature, value]) => (
                                <li key={feature}>{feature}: {value.toFixed(2)}%</li>
                            ))}
                        </ul>
                        <div className="text-justify p-4">
                            {parsedPrediction.recommendations && parsedPrediction.recommendations.map((recommendation, index) => (
                                <p className="mb-2" key={index}>{recommendation}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Prediction;
