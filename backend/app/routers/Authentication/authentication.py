from fastapi import APIRouter, Depends, HTTPException, status, Response, Cookie
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from app.database.schemas import Users, Token, Auth
from app.auth.OAuth2 import hash_password, authenticate_user, create_access_token, validate_token, get_current_user
from app.database.Queries import user_query
from app.database.Models import Models

from app.database.database import get_db
from sqlalchemy.orm import Session
from sqlalchemy.orm.exc import NoResultFound
from typing import Annotated
from fastapi.security import OAuth2PasswordRequestForm
from datetime import datetime, timedelta
from app import config, utils


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)

@router.post("/create-user", response_model=Users.User)
async def create_user(user: Users.UserCreate, db: Session = Depends(get_db)):
    """
    Create a new user
    Check first if user already exists or not, if user does not exist then create the password and then create the user.

    Args:
        user (Users.UserCreate): pydantic User model which will contain username and password
        db (Session, optional): connection pool dependency for database.

    Returns:
        Pydantic User model: it will share user data from user table except for password
    """
    
    user_dict = user_query.get_user(username=user.username, db=db)
    
    
    if user_dict:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="User already exists"
        )
    
    user = Users.UserCreate(username= user.username, password=user.password)
    
    user_dict = utils.create_user_auth(user=user, db=db)
    return user_dict



@router.post("/login", response_model= Users.User)
async def login(form_data: Auth.LoginForm, db: Session = Depends(get_db)):
    print("form_data:", form_data)
    print("db:", db)
    user = authenticate_user(username=form_data.username, password=form_data.password,user_type=form_data.user_type.value, db=db)
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password"
        )
    
    access_token_expires = timedelta(minutes=config.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username},
        expires_delta= access_token_expires
    )

    user = jsonable_encoder(user)
    del user['password']
    response = JSONResponse(content=user)
    
    response.set_cookie(
        key="access_token", 
        value=access_token, 
        httponly=True,
        # samesite="None",  # Only uncomment on localhost. Comment out before uploading or cookies won't load
    )
    return response

@router.post("/logout")
async def logout(access_token: str = Depends(get_current_user)):
    response = Response()
    print(response)
    response.delete_cookie("access_token")
    return response

# will ad response model later
@router.get("/me")
async def get_current_authenticated_user(current_user: Users.User = Depends(get_current_user), db: Session = Depends(get_db)):
    user_data = jsonable_encoder(current_user)

    # Check if the user is associated with the Employees table
    try:
        employee = db.query(Models.Employees).filter(Models.Employees.email == user_data["username"]).one()
        entitlement_category = employee.type  # From the Employees table
    except NoResultFound:
        entitlement_category = None

    # If not found in Employees, check in the Business table
    if not entitlement_category:
        try:
            business = db.query(Models.Business).filter(Models.Business.email == user_data["username"]).one()
            entitlement_category = business.type  # From the Business table
        except NoResultFound:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="User not associated with any entitlement category"
            )

    # Add the entitlement category to the response
    user_data["entitlement_category"] = entitlement_category.value  # Assuming you want the string value
    user_data.pop("password", None)
    return user_data

