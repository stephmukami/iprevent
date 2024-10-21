def generate_recommendations(top_3, prediction):
    
    recommendations_dict = {

        "GestationalDiabetes": {
            "High": (
                "You seem to be experiencing gestational diabetes. Here’s what you can do: Follow a meal plan that includes smaller, "
                "frequent meals balanced in carbohydrates, proteins, and fats. Engaging in regular physical activity, such as walking, "
                "can help manage your blood sugar levels effectively. It's crucial to monitor your blood sugar as advised by your "
                "healthcare provider and attend all prenatal appointments. If insulin is prescribed, make sure you feel comfortable "
                "administering it."
            ),
            "Low": (
                "You may not have gestational diabetes, but it’s still important to maintain a balanced diet rich in whole grains, "
                "lean proteins, fruits, and vegetables. Regular physical activity is vital, and attending prenatal check-ups will help "
                "monitor both your health and that of your baby."
            )
        },
        "PreviousPreDiabetes": {
            "High": (
                "Given your history of pre-diabetes, it’s essential to focus on lifestyle changes to prevent progression to diabetes. "
                "Consider adopting a Mediterranean-style diet that features healthy fats, lean proteins, and plenty of vegetables. "
                "You might also benefit from participating in a structured lifestyle change program with regular meetings with a lifestyle "
                "coach. Be sure to monitor your blood glucose levels as recommended by your healthcare provider."
            ),
            "Low": (
                "Even without a history of pre-diabetes, continue with healthy eating habits, regular exercise, and annual check-ups to "
                "monitor your blood glucose levels and other health markers."
            )
        },
        "Hypertension": {
            "High": (
                "It seems you have high blood pressure. Here’s what you can do: Adopt a DASH (Dietary Approaches to Stop Hypertension) "
                "diet rich in fruits, vegetables, whole grains, and low-fat dairy. Reducing sodium intake and avoiding high-sodium "
                "processed foods is crucial. Incorporate regular aerobic exercises like walking, cycling, or swimming. Limiting alcohol "
                "intake and quitting smoking will also help. Regularly monitor your blood pressure at home and keep up with your check-ups."
            ),
            "Low/Normal": (
                "If your blood pressure is low or normal, continue eating a balanced diet, maintain regular physical activity, and "
                "monitor your blood pressure as part of routine health checks. Staying hydrated and managing stress effectively is also advisable."
            )
        },
        "AntihypertensiveMedications": {
            "High": (
                "Since you are taking antihypertensive medications, it’s important to adhere strictly to your medication schedule and never skip doses. "
                "Discuss any side effects with your healthcare provider, as they might adjust your dosage or switch to a different medication if necessary. "
                "Combining your medication with lifestyle changes, such as reducing salt intake and exercising regularly, will be beneficial. "
                "Make sure to monitor your blood pressure at home and keep a log for your healthcare visits."
            ),
            "Low": (
                "If your blood pressure is in a healthy range, continue with preventive measures like a balanced diet, regular physical activity, "
                "and routine health checks."
            )
        },
        "AntidiabeticMedications": {
            "High": (
                "If you are currently taking antidiabetic medications, follow your medication regimen strictly. Make sure to regularly monitor "
                "your blood glucose levels to ensure the medications are effective. Discuss any side effects with your healthcare provider, and "
                "combine your medication with a balanced diet, regular exercise, and weight management. Don’t forget to attend regular check-ups and consider diabetes education programs to stay informed."
            ),
            "Low": (
                "If you are not taking medication, it’s important to maintain a diet low in refined sugars and carbohydrates. Regular physical "
                "activity and routine monitoring of your blood glucose levels are crucial. Keep regular healthcare appointments to track any changes in your health status."
            )
        },
        "FrequentUrination": {
            "High": (
                "You seem to be experiencing frequent urination. Here’s what you can do: Reduce your fluid intake before bedtime to avoid "
                "nighttime trips to the bathroom. Keep an eye out for signs of urinary tract infections or other health issues, and consult "
                "with a healthcare provider if your frequent urination is accompanied by pain, blood in urine, or any other significant changes. "
                "Managing your blood sugar levels can also help if this issue is related to diabetes."
            ),
            "Low": (
                "If you’re not experiencing frequent urination, ensure you keep up with regular health check-ups to catch any potential underlying conditions. "
                "Maintaining hydration while balancing your fluid intake throughout the day is important."
            )
        },
        "ExcessiveThirst": {
            "High": (
                "If you find yourself experiencing excessive thirst, it’s important to assess your fluid intake and dietary habits to ensure you’re staying hydrated. "
                "If this thirst persists, it could indicate an underlying condition like diabetes or kidney issues, so consulting a healthcare provider is advised. "
                "Make sure to monitor and manage your blood sugar levels if you have diabetes."
            ),
            "Low": (
                "If you’re not experiencing excessive thirst, maintain regular hydration and monitor for any sudden changes in your thirst, as they could indicate a health issue."
            )
        },
        "UnexplainedWeightLoss": {
            "High": (
                "If you’re experiencing unexplained weight loss, it’s crucial to seek medical advice to rule out underlying conditions such as hyperthyroidism, "
                "diabetes, or gastrointestinal issues. Focus on ensuring a nutrient-rich diet to prevent further weight loss, and consider incorporating high-calorie, "
                "nutrient-dense foods to maintain or gain weight. Regular monitoring and follow-up with a healthcare provider are essential."
            ),
            "Low": (
                "For those not experiencing unexplained weight loss, maintaining a balanced diet and monitoring your weight regularly is important. "
                "Be sure to report any unexpected changes to your healthcare provider promptly."
            )
        },
        "FatigueLevels": {
            "High": (
                "You seem to be experiencing some rather high fatigue levels. Here’s what you can do: Address lifestyle factors such as sleep hygiene, "
                "diet, and stress management. Ensure you’re getting adequate and quality sleep by maintaining a regular sleep schedule and creating a conducive sleep environment. "
                "It might be helpful to evaluate for underlying conditions like anemia, sleep apnea, or thyroid issues with your healthcare provider. "
                "Incorporating balanced meals and regular physical activity can also help boost your energy levels."
            ),
            "Low": (
                "If your fatigue levels are low or normal, continue with healthy habits that promote good sleep, balanced nutrition, and regular physical activity. "
                "Make sure to have regular health check-ups to monitor for any changes in your energy levels."
            )
        },
        "BlurredVision": {
            "High": (
                "If you’re experiencing blurred vision, it’s important to schedule an eye examination with an optometrist or ophthalmologist. "
                "Be sure to monitor your blood sugar levels closely if you’re diabetic, as high sugar levels can affect your vision. "
                "Follow prescribed eye care routines and manage any chronic conditions that might impact your vision."
            ),
            "Low": (
                "If you’re not experiencing blurred vision, regular eye exams are important to maintain your eye health and detect any issues early. "
                "Protect your eyes from excessive screen time and UV light exposure."
            )
        },
        "SlowHealingSores": {
            "High": (
                "If you have slow healing sores, consult a healthcare provider to check for underlying conditions like diabetes or circulatory issues. "
                "Make sure to maintain good hygiene and keep wounds clean and protected to prevent infection. If you’re diabetic, monitoring your blood sugar levels is essential. "
                "A diet rich in nutrients, especially those high in protein, vitamins A and C, and zinc, can aid in healing."
            ),
            "Low": (
                "If you’re not experiencing slow healing sores, it’s important to maintain a healthy lifestyle to support your body’s natural healing processes. "
                "Regular check-ups will help ensure no underlying issues develop."
            )
        },
        "TinglingHandsFeet": {
            "High": (
                "If you’re experiencing tingling in your hands or feet, it’s crucial to consult with a healthcare provider to determine the cause, which could range from neuropathy to vitamin deficiencies. "
                "Make sure to monitor and manage your blood sugar levels if you’re diabetic, and ensure you’re following a balanced diet rich in essential vitamins and minerals."
            ),
            "Low": {
                "Routine Monitoring": (
                    "Keep an eye out for any new symptoms of tingling or numbness, and report them to your healthcare provider promptly."
                ),
                "Balanced Nutrition": (
                    "Continue with a well-balanced diet to support your overall nerve health."
                ),
                "Ergonomic Practices": (
                    "Maintain good posture and ergonomic work practices to prevent nerve compression."
                ),
                "Regular Exercise": (
                    "Engage in activities that promote good circulation and overall nerve health, such as walking, swimming, or yoga."
                ),
                "Preventive Care": (
                    "Avoid habits that can harm nerve health, such as excessive alcohol consumption or smoking, and focus on a healthy lifestyle to support your overall well-being."
                )
            }
        },
        "Age": {
            "High": (
                "Since you’re at a higher age, regularly schedule comprehensive health check-ups, including screenings for age-related conditions. Incorporate joint-friendly exercises like swimming or yoga to maintain mobility. "
                "Following a balanced diet rich in antioxidants and fiber will support your overall health."
            ),
            "Low": (
                "For younger individuals, ensure a balanced diet rich in essential nutrients, particularly calcium and iron. Encourage participation in varied physical activities to build a strong foundation for lifelong health. "
                "Establishing healthy sleep routines is crucial to support growth and cognitive development."
            )
        },
        "Gender": {
            "Advice": (
                "Tailor your health advice to specific conditions based on your gender. For instance, ensure regular screenings for breast or prostate cancer, and educate yourself on gender-specific health risks and preventive measures."
            )
        },
        "SocioeconomicStatus": {
            "High": (
                "If you have a high socioeconomic status, utilize available resources to access premium healthcare services. Investing in preventive health measures, such as regular wellness checks and personalized fitness programs, is advisable."
            ),
            "Low": (
                "For those with lower socioeconomic status, seek assistance from community health programs that offer free or low-cost screenings and treatments. Focus on cost-effective healthy food options, such as bulk-buying whole grains and seasonal produce. "
                "Exploring support networks and financial aid programs can help alleviate economic stressors impacting your health."
            )
        },
        "BMI": {
            "High": (
                "If you have a high BMI, consulting a dietitian can help create a personalized meal plan focused on weight management. Incorporating regular cardiovascular and strength-training exercises will improve metabolic health. "
                "Monitor and adjust your lifestyle changes based on progress."
            ),
            "Low": (
                "For those with a low BMI, work with a nutritionist to ensure you're consuming enough calories and nutrients. Focus on nutrient-dense foods like avocados, nuts, and lean proteins, and include strength training exercises to build muscle mass and improve overall health."
            )
        },
        "Smoking": {
            "High": (
                "If you’re a smoker, engage in a smoking cessation program and consider nicotine replacement therapies. Exploring stress-reduction techniques such as meditation can help address the underlying causes of smoking. "
                "Regularly tracking your progress and seeking support from healthcare professionals and support groups will be beneficial."
            ),
            "Low": (
                "If you don’t smoke, maintain your smoke-free lifestyle by avoiding environments where smoking is prevalent. Educating others about the benefits of a smoke-free lifestyle can further reinforce your commitment."
            )
        },
        "AlcoholConsumption": {
            "High": (
                "If you consume alcohol at high levels, set clear goals to reduce your intake and avoid triggers that lead to excessive drinking. Consider professional counseling or support groups if needed, and explore non-alcoholic alternatives while engaging in social activities that don’t revolve around drinking."
            ),
            "Low": (
                "If your alcohol consumption is low or none, continue limiting your intake and educating yourself about the effects of alcohol to maintain healthy drinking habits."
            )
        },
        "PhysicalActivity": {
            "High": (
                "If you’re highly active, ensure variety in your workouts to prevent overuse injuries, including regular rest days. Monitor your performance and adjust intensity to avoid burnout, and engage in low-impact exercises like swimming or cycling."
            ),
            "Low": (
                "If your physical activity levels are low, gradually increase them starting with moderate exercises like brisk walking. Aim for at least 150 minutes of moderate aerobic activity weekly, along with muscle-strengthening activities on 2 or more days a week."
            )
        },
        "DietQuality": {
            "High": (
                "If your diet quality is high, maintain a balanced diet and consider consulting a nutritionist to ensure all your nutritional needs are met. Incorporate superfoods like berries, leafy greens, and lean proteins for added health benefits."
            ),
            "Low": (
                "For those with low diet quality, gradually introduce healthier food choices, reducing the intake of processed foods and sugary drinks. Planning meals ahead of time will help avoid unhealthy options, and educating yourself on portion control and nutrient-rich foods is beneficial."
            )
        },
        "SleepQuality": {
            "High": (
                "If you have high sleep quality, maintain consistent sleep patterns and a sleep-conducive environment. Limiting screen time before bed and engaging in relaxing pre-sleep activities like reading or meditation will help preserve your quality sleep."
            ),
            "Low": (
                "For those with low sleep quality, address underlying sleep issues such as stress or poor sleep hygiene. Establishing a regular bedtime routine and creating a comfortable sleep environment, along with limiting caffeine and heavy meals before bedtime, will promote better sleep."
            )
        },
        "FamilyHistoryDiabetes": {
            "High": (
                "Since you have a family history of diabetes, engage in regular health screenings and adopt a proactive approach to diet and exercise to lower your risk. Be aware of early signs of diabetes and maintain regular communication with your healthcare provider."
            ),
            "Low": (
                "If there's no family history of diabetes, continue regular health check-ups and maintain a balanced lifestyle to mitigate any unforeseen risks."
            )
        }
    }
   
    recommendations = []

    for feature in top_3:
        if prediction == 1:
          if feature in recommendations_dict:
            recommendations.append(recommendations_dict[feature]["High"])
        elif prediction == 0:
          if feature in recommendations_dict:
            recommendations.append(recommendations_dict[feature]["Low"])

    return recommendations
