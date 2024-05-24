const STATUS_CODES = {
    SUCCESS: 200,
    SUCCESS_CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    SERVER_ERROR: 500,
  };
  
const MESSAGES = {
    SUCCESS: "Success",
    INVALID_DATA: "Invalid data",
    ACCOUNT_EXISTS: "Account already exists. Please login.",
    ACCOUNT_CREATED: "Account created successfully",
    EMAIL_NOT_REGISTERED: "Email is not registered",
    INVALID_CREDENTIALS: "Invalid email or password",
    INVALID_PASSWORD: "Invalid password",
    LOGIN_SUCCESSFUL: "Logged in successfully",
    SERVER_ERROR: "Server error. Please try again later.",
    VALID_EMAIL:"Email must be provided",
    USER_NOT_EXSISTS:"User does not exsists"
  };
  
export {STATUS_CODES, MESSAGES}  