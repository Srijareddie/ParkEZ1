from sqlalchemy.orm import Session
from app.database.database import get_db
from fastapi import Depends, HTTPException, status
from app.database.Models.Models import Users, Employees, Business, ExternalUsers
from app.database.schemas import Services
from fastapi import HTTPException, status

def get_user(username: str, db: Session):
    user = db.query(Users).filter(Users.username == username).first()
    return user    
   
def get_user_type(username: str, user_type: str, db: Session):
    user = None
    if user_type == "BUSINESS" or user_type == "ADVERTISERS":
        user = db.query(Business).filter(Business.email == username).first()
        
        if not user:
            user = db.query(ExternalUsers).filter(ExternalUsers.email == username).first()
            
        if user:
            user = user.__dict__
            return user.get('type').value
        
        
    elif user_type == "EMPLOYEE":
        user = db.query(Employees).filter(Employees.email==username).first()
        
        if user:
            return user_type
        
    return None
            
    
def create_user(username: str, password: str, db: Session):
    user = Users(username= username, password= password)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def create_employee(employee: Services.EmployeeCreate, db: Session):
    employee = Employees(
        full_name=employee.full_name,
        email= employee.email,
        phone_no= employee.phone_no,
        address= employee.address
    )
    
    db.add(employee)
    db.commit()
    db.refresh(employee)
    return employee