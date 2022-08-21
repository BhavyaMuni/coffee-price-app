from datetime import datetime, time, timedelta
from json import load
from sys import prefix
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import select, desc
from starlette.responses import RedirectResponse
from backend.load_database import load_database
from typing import List
from . import models, schemas

from .database import engine, get_db

import pickle
# from sklearn.linear_model import LinearRegression 

models.Base.metadata.create_all(bind=engine)
app = FastAPI(prefix="/api")

model = pickle.load(open("/code/backend/model.pkl", "rb"))

try:
    load_database()
except Exception:
    print("Error loading the database")

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

@app.get("/records/last30days")
async def get_last30days(db: Session = Depends(get_db)):
    q = db.query(models.Record).order_by(desc(models.Record.date)).limit(30)
    # q = await db.query(models.Record).filter(models.Record.date <= )
    return q.all()

@app.get("/records/{date}")
async def get_record(date: str, db: Session = Depends(get_db)):
    query_date = datetime.strptime(date, "%Y-%m-%d")
    rec = db.query(models.Record).filter(models.Record.date == query_date).first()
    rec2 = rec.__dict__
    rec2['predicted'] = model.predict([[rec.open, rec.high, rec.low]])[0][0]

    q = db.query(models.Record).filter(models.Record.date >= query_date - timedelta(10)).filter(models.Record.date < query_date).all()
    
    rec2['previous'] = q
    return rec2
