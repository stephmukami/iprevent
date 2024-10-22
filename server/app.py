from flask import Flask, request, jsonify
import joblib
import pandas as pd
from sklearn.preprocessing import OneHotEncoder, StandardScaler
import shap
from recommendations import generate_recommendations
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)
# Load the model
model = joblib.load('ada_rf_model.pkl')
X_cv = pd.read_csv('X_cv.csv')

# Define the scaler (assuming you've used StandardScaler)
scaler = StandardScaler().fit(X_cv)

@app.route('/predict', methods=['POST'])
def predict():
    if request.content_type != 'application/json':
        return jsonify({"error": "Unsupported Media Type"}), 415

    user_data = request.get_json()
    user_df = pd.DataFrame([user_data])

    # Preprocess user data
    user_df = preprocessing.encode_categorical_values(user_df)
    user_df = preprocessing.normalize_data(user_df)
    user_df = preprocessing.scale(user_df)

    # Make prediction
    prediction = int(model.predict(user_df)[0])
    prediction_proba = model.predict_proba(user_df)[0].tolist()

    # Calculate SHAP values
    explainer = shap.KernelExplainer(model.predict_proba, scaler.transform(X_cv))
    shap_values = explainer.shap_values(user_df)

    # Extract SHAP values for the positive class
    shap_values_class_1 = shap_values[0][:, 1]  

    # Create the DataFrame
    shap_df = pd.DataFrame([shap_values_class_1], columns=X_cv.columns) 


    # Calculate the absolute values of SHAP values
    shap_abs = shap_df.abs()

    # Get the top 3 features
    top_3_indices = shap_abs.iloc[0].nlargest(3).index
    top_3_features_df = shap_abs[top_3_indices]

    # Convert the top 3 SHAP values to percentages
    top_3_features_percentage = (top_3_features_df / top_3_features_df.sum(axis=1).values.reshape(-1, 1)) * 100

    #Generate recommendations
    top_3_features = top_3_features_df.columns
    recommendations = generate_recommendations(top_3_features, prediction)

    result = {
        'prediction':prediction,
        'prediction_proba': prediction_proba,
        'highest_class_proba': max(prediction_proba),
        'top_3_features': top_3_features_percentage.to_dict(orient='records')[0],
        'recommendations': recommendations
    }

    return jsonify(result)

class preprocessing:
    @staticmethod
    def encode_categorical_values(df, drop_first=True):
        categorical_columns = df.select_dtypes(include=['object']).columns
        encoder = OneHotEncoder(sparse_output=False, drop='first' if drop_first else None)
        encoded_columns = pd.DataFrame(encoder.fit_transform(df[categorical_columns]),
                                       columns=encoder.get_feature_names_out(categorical_columns),
                                       index=df.index)  # Ensure matching index

        # Drop original categorical columns and concatenate the encoded columns
        df = df.drop(categorical_columns, axis=1)
        df = pd.concat([df, encoded_columns], axis=1)
        return df

    @staticmethod
    def normalize_data(df):
        scaler = StandardScaler()
        numeric_columns = df.select_dtypes(include=['float64', 'int64']).columns
        df[numeric_columns] = scaler.fit_transform(df[numeric_columns])
        return df

    @staticmethod
    def scale(df):
        scaler = StandardScaler()
        df_scaled = scaler.fit_transform(df)
        df_scaled = pd.DataFrame(df_scaled, columns=df.columns)
        return df_scaled

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)