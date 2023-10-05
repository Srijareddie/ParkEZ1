from sqlalchemy.orm import Session
from app.database.schemas.ExternalUsers import ExternalUser
from app.database.Models.Models import ExternalUsers
from app.database.schemas.ExternalUsers import ExternalUserCreate
def get_user_by_phone_no(phone_no: str, db: Session):
    user = db.query(ExternalUsers).filter(ExternalUsers.phone_no == phone_no).first()
    return user

def create_user(user: ExternalUserCreate, db: Session):
    user_dict = ExternalUsers(
        name= user.name,
        email= user.email,
        phone_no= user.phone_no,
        business_id = user.business_id
    )
    
    db.add(user_dict)
    db.commit()
    db.refresh(user_dict)
    
    return user_dict