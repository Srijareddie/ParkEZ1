from fastapi import APIRouter, Depends, HTTPException, status
from app.database.database import get_db
from app.database.Models.Models import EmployeeDepartment, Department, Employees, Users as AuthUser
from app.database.schemas import Services, Users
from app.database.Queries import user_query
from sqlalchemy.orm import Session
from app import utils
router = APIRouter(
    prefix="/service",
    tags=["service"],
)

@router.post("/create-department", response_model=Services.Department)
async def create_department(dept_name: Services.DepartmentCreate, db: Session = Depends(get_db)):
    
    exception = HTTPException(
        status_code=status.HTTP_409_CONFLICT,
        detail="Department already exists"
    )
    
    utils.user_exits(table=Department, column=Department.dept_name, check_value=dept_name.dept_name, exception=exception, db=db)
    
    dept = Department(
        dept_name=dept_name.dept_name
    )
    
    db.add(dept)
    db.commit()
    db.refresh(dept)
    return dept


@router.post("/add-employee", response_model=Services.Employee)
async def add_employee(employee_details: Services.EmployeeBase, db: Session = Depends(get_db)):
    
    exception = HTTPException(
        status_code=status.HTTP_409_CONFLICT,
        detail="Employee already exists",
    )
    
    email, password = utils.generate_employee_email_password(full_name = employee_details.full_name, phone_no=employee_details.phone_no)
    
    
    
    utils.user_exits(table=AuthUser, column=AuthUser.username, check_value=email, exception=exception, db=db)
    
    utils.user_exits(table=Employees, column=Employees.phone_no, check_value=employee_details.phone_no, exception=exception, db=db)
    
    auth_user = Users.UserCreate(username=email, password=password)
    
    user_dict = utils.create_user_auth(user=auth_user, db=db)
    
    employee = Services.EmployeeCreate(**employee_details.__dict__, email=email)
    employee = user_query.create_employee(employee=employee, db=db)
    return employee