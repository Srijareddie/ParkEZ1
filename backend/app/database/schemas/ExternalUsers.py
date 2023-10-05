from pydantic import BaseModel

class ExternalUserBase(BaseModel):
    name: str
    phone_no: str

class ExternalUserIn(ExternalUserBase):
    pass
    

class ExternalUserCreate(ExternalUserBase):
    email: str
    business_id: int
    

class ExternalUser(ExternalUserBase):
    id: int
    email: str
    business_id: int
    
    class Config:
        orm_mode = True