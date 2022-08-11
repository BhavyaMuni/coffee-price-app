from datetime import datetime
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from starlette.responses import RedirectResponse
import csv

from backend.load_database import load_database

from . import models, schemas

from .database import SessionLocal, engine, get_db

# import pickle
# from sklearn.linear_model import LinearRegression 

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

# model = pickle.load(open("model.pkl", "rb"))

load_database()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

@app.get("/")
async def root():
    return RedirectResponse(url="/docs/")

@app.get("/records/{date}", response_model=schemas.RecordSchema)
async def post(date: str, db: Session = Depends(get_db)):
    rec = db.query(models.Record).filter(models.Record.date == datetime.strptime(date, "%Y-%m-%d")).first()
    return rec
