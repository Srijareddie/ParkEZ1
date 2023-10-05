from pydantic import BaseModel
from datetime import datetime

class DepartmentBase(BaseModel):
    dept_name: str
    
class DepartmentCreate(DepartmentBase):
    pass

class Department(DepartmentBase):
    id: int
    class Config:
        orm_mode = True
        
class EmployeeBase(BaseModel):
    full_name: str
    phone_no: str
    address: str | None = None
    

class EmployeeCreate(EmployeeBase):
    email: str
    

class Employee(EmployeeBase):
    id: int
    email: str
    joining_date: datetime
    resign_date: datetime | None = None
    
    class Config:
        orm_mode = True