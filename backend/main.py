from datetime import datetime
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from starlette.responses import RedirectResponse
import csv

from . import models, schemas

from .database import SessionLocal, engine, get_db

# import pickle
# from sklearn.linear_model import LinearRegression 

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

# model = pickle.load(open("model.pkl", "rb"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

def load_database():
    db = SessionLocal()

    with open("/app/./backend/coffee.csv", "r") as f:
        csv_reader = csv.DictReader(f)
        for r in csv_reader:
            rec = models.Record(date=datetime.strptime(r["Date"], "%Y-%m-%d"), open=float(r["Open"]), close=float(r["Close"]), high=float(r["High"]), low=float(r["Low"]), volume=float(r["Volume"]))
            db.add(rec)
        
        db.commit()
    db.close()
    
load_database()

@app.get("/")
async def root():
    return RedirectResponse(url="/docs/")

@app.post("/records/", response_model=schemas.RecordSchema)
async def post(db: Session = Depends(get_db)):
    rec = db.query(models.Record).first()
    return rec
