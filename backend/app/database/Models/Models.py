from sqlalchemy import Column, String, Integer, Boolean, DateTime, ForeignKey, Enum, Date, UniqueConstraint
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database.database import Base
import enum



class Users(Base):
    __tablename__ = "users"
    username = Column(String,primary_key=True, index=True)
    password = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow())
    is_active = Column(Boolean, default=False)
    
# This can be temporary, but it is necessary for
# entitlement testing this week / next week
class TypesOfEmployees(enum.Enum):
    CUSTOMER_SUPPORT = "CUSTOMER_SUPPORT"
    LOT_SPECIALIST = "LOT_SPECIALIST"
    ADVERTISING_SPECIALIST = "ADVERTISING_SPECIALIST"
    ACCOUNTANT = "ACCOUNTANT"
    
class Employees(Base):
    __tablename__ = "employees"
    id = Column(Integer, primary_key=True, index=True)
    type = Column(Enum(TypesOfEmployees))
    full_name = Column(String)
    phone_no = Column(String)
    email = Column(String, ForeignKey("users.username"), unique=True)
    address =Column(String, nullable=True)
    joining_date = Column(DateTime, default=datetime.utcnow())
    resign_date = Column(DateTime, nullable=True)
    
class Department(Base):
    __tablename__ = "department"
    id = Column(Integer, primary_key=True, index=True)
    dept_name = Column(String, index=True, unique=True)
    
    
class EmployeeDepartment(Base):
    __tablename__ = "employee_department"
    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employees.id"))
    department_id = Column(Integer, ForeignKey("department.id"))
    employee = relationship("Employees", primaryjoin="Employees.id == EmployeeDepartment.employee_id")
    department = relationship("Department", primaryjoin="Department.id == EmployeeDepartment.department_id")
    UniqueConstraint( employee_id, department_id)
    
class TypesOfBusiness(enum.Enum):
    ADVERTISERS = "ADVERTISERS"
    BUSINESS = "BUSINESS"

          
class Business(Base):
    __tablename__ = "business"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, ForeignKey("users.username"), unique=True)
    name = Column(String, unique=True)
    address = Column(String)
    phone_no = Column(String, unique=True, index=True)
    date_joined = Column(DateTime, default=datetime.utcnow())
    is_active = Column(Boolean, default=True)
    type = Column(Enum(TypesOfBusiness))
    business_user = relationship("Users", primaryjoin="Users.username == Business.email")
    user = relationship("ExternalUsers", back_populates="business")


class ExternalUsers(Base):
    __tablename__ = "external_users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, ForeignKey("users.username"), unique=True)
    phone_no = Column(String, unique=True, index=True)
    business_id = Column(Integer, ForeignKey("business.id"))
    business = relationship("Business", back_populates="user")
    user = relationship("Users", primaryjoin="Users.username == ExternalUsers.email")
