def generate_email(full_name: str, phone_no: str, business_name: str) -> str:
    full_name = full_name.lower().split()
    first_name, last_name = full_name[0], full_name[1]
    phone_no = phone_no[0: 5]
    business_name = "_".join(business_name.lower().split())
    
    email = f"{first_name}.{last_name}_{phone_no}@{business_name}_parkEz.com"
    
    return email

def generate_password(full_name: str, business_name: str):
    full_name = "_".join(full_name.lower().split())
    business_name = "_".join(business_name.lower().split())
    
    return f"{full_name}@{business_name}_password"
