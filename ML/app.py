import uvicorn
from fastapi import FastAPI
from PredictParameters import BankNote
import numpy as np
import pickle
import pandas as pd
# 2. Create the app object
app = FastAPI()
pickle_in = open("Regressor.pkl","rb")
Regressor=pickle.load(pickle_in)

# 3. Index route, opens automatically on http://127.0.0.1:8000
@app.get('/')
def index():
    return {'message': 'Hello, World'}

# 4. Route with a single parameter, returns the parameter within a message
#    Located at: http://127.0.0.1:8000/AnyNameHere
@app.get('/{name}')
def get_name(name: str):
    return {'Welcome to prediction': f'{name}'}

# 3. Expose the prediction functionality, make a prediction from the passed
#    JSON data and return the predicted Bank Note with the confidence
@app.post('/predict')
def predict_gold(data:BankNote):
    data = data.dict()
    Nifity=data['Nifity']
    usdtoinr=data['usdtoinr']
    
   # print(classifier.predict([[Nifity,usdtoinr,curtosis,entropy]]))
    prediction = Regressor.predict([[Nifity,usdtoinr]])
    'prediction': prediction
    

# 5. Run the API with uvicorn
#    Will run on http://127.0.0.1:8000
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
    
#uvicorn app:app --reload