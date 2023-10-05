from fastapi import HTTPException, status

business_already_exists = HTTPException(
        status_code=status.HTTP_409_CONFLICT,
        detail="Business already exists"
    )

business_type_not_valid = HTTPException(
    status_code=status.HTTP_406_NOT_ACCEPTABLE,
    detail="Business type not valid"
)

business_user_already_exists = HTTPException(
    status_code=status.HTTP_409_CONFLICT,
    detail="Business user already exists"
)