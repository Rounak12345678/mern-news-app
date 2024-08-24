
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { destroyCookie } from "nookies";
import { toggleSliceData} from "../interfaces/interfaces";
import { IuserData } from "typescript/interface/auth.interface";

const initialState: toggleSliceData = {
  isToggle: false
};



export const toggleSlice = createSlice({
  name: "userSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setToggleData: (state, { payload }: { payload: boolean }) => {
      state.isToggle = payload;
    },
  },
  extraReducers: {}
});

export const { setToggleData } = toggleSlice.actions;

export default toggleSlice.reducer;
