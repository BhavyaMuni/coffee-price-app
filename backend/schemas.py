from pydantic import BaseModel
import datetime

class RecordSchema(BaseModel):
    date : datetime.datetime
    open : float
    high : float
    low : float
    close : float
    volume : float

    class Config:
        orm_mode = True