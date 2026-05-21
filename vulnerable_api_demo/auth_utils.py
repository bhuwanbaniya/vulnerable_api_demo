import jwt

# CRITICAL: Hardcoded AWS Keys (SAST should catch this)
AWS_ACCESS_KEY = "AKIA1234567890EXAMPLE"
AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"

# CRITICAL: Hardcoded JWT Secret
JWT_SECRET = "super_secret_key_123"

def create_token(user_id):
    # VULNERABLE: Using a weak secret and potentially supporting 'none' alg
    return jwt.encode({"id": user_id}, JWT_SECRET, algorithm="HS256")

def verify_privileged_access(params):
    # VULNERABLE: Hidden parameter logic
    if params.get("is_admin") == "1":
        return True
    return False
