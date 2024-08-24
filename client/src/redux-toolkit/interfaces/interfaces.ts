import { IuserData } from "typescript/interface/auth.interface";

export interface userSliceData {
  isLoggedIn: boolean;
  userData: IuserData | null;
  status:string
  singleUser:null
}

export interface toggleSliceData {
  isToggle: boolean;

}


export interface OTPData {
  id: string;
  otp: string;
}

export interface ErrorResponse {
  message: string;
  // Add more properties if your error response contains more details
}

export interface LoginData {
  // Define the structure of your login data
  email: string;
  password: string;
}


export interface LoginError {
  message: string;
  // Add other properties if needed
}