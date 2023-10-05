from pydantic import BaseModel
from enum import Enum

class UserType(str, Enum):
    EMPLOYEE = 'EMPLOYEE'
    ADVERTISERS = 'ADVERTISERS'
    BUSINESS = 'BUSINESS'

class LoginForm(BaseModel):
    username: str
    password: str
    user_type: UserType | str