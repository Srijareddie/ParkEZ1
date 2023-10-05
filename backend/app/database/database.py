from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app import config


engine = create_engine(f"postgresql+psycopg2://{config.DATABASE_USERNAME}:{config.DATABASE_PASSWORD}@{config.DATABASE_HOSTNAME}")  

SessionLocal = sessionmaker(autoflush= False, autocommit= False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        
        yield db
    finally:
        db.close()