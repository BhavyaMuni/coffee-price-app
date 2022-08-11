from sqlalchemy import Column, Float, DateTime, func
from backend.database import Base

class Record(Base):
    __tablename__ = "coffee"
    __table_args__ = {'extend_existing': True} 

    date = Column(DateTime, primary_key=True, index=True)
    open = Column(Float)
    high = Column(Float)
    low = Column(Float)
    close = Column(Float)
    volume = Column(Float)