from sqlalchemy.orm import Session
from app.database.Models.Models import Business
from app.database.schemas.Business import  BusinessBase

 
def get_business_by_email(email: str, db: Session):
    business = db.query(Business).filter(Business.email == email).first()
    return business
   
def get_business_by_phone_number(phone_no: str, db: Session):
    business = db.query(Business).filter(Business.phone_no == phone_no).first()
    return business

def get_business_by_name(name: str, db:Session):
    business = db.query(Business).filter(Business.name == name).first()
    return business

    
def create_business(business: BusinessBase, db: Session):
   
    business_dict = Business(
        name= business.name,
        email= business.email,
        phone_no= business.phone_no,
        address= business.address,
        type= business.type
    )
    db.add(business_dict)
    db.commit()
    db.refresh(business_dict)
    

    
    return business_dict