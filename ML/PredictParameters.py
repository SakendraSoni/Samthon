from pydantic import BaseModel
# 2. Class which describes Bank Notes measurements
class PredictParameters(BaseModel):
    Nifity: float 
    usdtoinr: float 
    