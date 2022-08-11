from .database import SessionLocal
import models
from datetime import datetime
import csv

def load_database():
    db = SessionLocal()

    with open("/app/backend/coffee.csv", "r") as f:
        csv_reader = csv.DictReader(f)
        for r in csv_reader:
            rec = models.Record(date=datetime.strptime(r["Date"], "%Y-%m-%d"), open=float(r["Open"]), close=float(r["Close"]), high=float(r["High"]), low=float(r["Low"]), volume=float(r["Volume"]))
            db.add(rec)
        
        db.commit()
    db.close()
    