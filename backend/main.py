from fastapi import FastAPI
import pickle
from sklearn.linear_model import LinearRegression 
app = FastAPI()
model = pickle.load(open("model.pkl", "rb"))


@app.get("/")
async def root():
    return {"message": "Hello, World! This is a req"}

@app.post("/post/")
async def post():
    return{}
