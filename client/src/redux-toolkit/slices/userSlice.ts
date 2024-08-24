
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { destroyCookie, setCookie } from "nookies";
import { ErrorResponse, LoginData, LoginError, OTPData, userSliceData } from "../interfaces/interfaces";
import { IuserData } from "typescript/interface/auth.interface";
import axiosInstance from "api/axiosInstance";
import { ISignUp } from "interfaces/interfaces";

const initialState: userSliceData = {
  isLoggedIn: false,
  userData: null,
  status: "idle",
  singleUser:null


};

type SignupResponse = {
  data : any[],
  status:string,
  message:string
}

export const signup = createAsyncThunk(
  "auth/signup",
  async (data:ISignUp, { rejectWithValue }) => {
    try {
      const res:any = await axiosInstance.post<SignupResponse>("/users/signup", data);
      return res.data;
    } catch (err:any) {
      return rejectWithValue(err.response.data);
    }
  }
);



export const otpVerification = createAsyncThunk<any,OTPData,{rejectValue: ErrorResponse}
>(
  "auth/otp-verification",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/users/verify-otp", data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Login API calling
export const login = createAsyncThunk<any, { rejectValue: LoginError }>(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/users/login", data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const forgetPass = createAsyncThunk<any,{ rejectValue: any }>(
  "auth/forget_password",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/users/forgot-password", data);
      return res.data;
    } catch (err:any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const resetPass = createAsyncThunk<
  any, // Type of the returned data
  { id: any; data: any }, // Type of the argument passed to the thunk
  { rejectValue: any } // Type of the rejectWithValue payload
>(
  "auth/reset_password",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(`/users/reset-password/${id}`, data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const resendOtp = createAsyncThunk<any,{ rejectValue: any }>(
  "resendOtp",
  async (data ,{ rejectWithValue }:any) => {
    try {
      const res = await axiosInstance.post(`/users/resend-otp`,data);
      return res.data;
    } catch (err:any) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getSingleUser = createAsyncThunk<any,{ rejectValue: any }>(
  "single_user_details",
  async (id ,{ rejectWithValue }:any) => {
    try {
      const res = await axiosInstance.get(`/users/${id}`);
      return res.data;
    } catch (err:any) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const userSlice = createSlice({
  name: "userSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoginData: (state, { payload }: { payload: IuserData }) => {
      // state.email
      state.userData = payload;
      state.isLoggedIn = true;
    },
    checkLoggedInServer: (state, { payload }) => {
      state.isLoggedIn = payload?.hasToken;
      // state.userData = payload?.user;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;

      destroyCookie(null, "aperture_user", { path: "/" });
      destroyCookie(null, "aperture_token", { path: "/" });
      localStorage.removeItem("aperture_token");
      window.location.href = "/login";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = "loading";
     
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        if (payload?.status) {
          setCookie(null, "userId", payload?.data?.user?._id, {
            path: "/",
      
          });
        }
     
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";

      })

      .addCase(otpVerification.pending, (state) => {
        state.status = "loading";
  
      })
      .addCase(otpVerification.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        if (payload?.success) {
          state.isLoggedIn = payload?.hasToken;
          setCookie(null, "token", payload?.token, {
            path: "/",
            // secure: true, // Uncomment in production
            // httpOnly: true, // Uncomment if setting the cookie server-side
          });
          setCookie(null, "userId", payload?.user?._id, {
            path: "/",
      
          });
     
        }
      })
      .addCase(otpVerification.rejected, (state, action) => {
        state.status = "failed";
     
      })
            .addCase(login.pending, (state) => {
        state.status = "loading";

      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        if (payload?.status) {
          state.isLoggedIn = payload?.hasToken;
          setCookie(null, "token", payload?.token, {
            path: "/",
            // secure: true, // Uncomment in production
            // httpOnly: true, // Uncomment if setting the cookie server-side
          });
          setCookie(null, "userId", payload?.data?.user?._id, {
            path: "/",
      
          });
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
 
      })
 
       .addCase(getSingleUser.pending, (state) => {
        state.status = "loading";

      })
      .addCase(getSingleUser.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        if (payload?.status) {
          state.singleUser = payload?.data?.currentUser;
        
        }
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        state.status = "failed";
 
      })

  },
});

export const { setLoginData, checkLoggedInServer, logout } = userSlice.actions;

export default userSlice.reducer;
