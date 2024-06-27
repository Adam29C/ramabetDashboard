import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COMMON_GENERATE_TOKEN_API } from "../../Services/CommonServices";
import dataservice from "../../Config/DataService";


export const getGenerateToken = createAsyncThunk(
  "common/getGenerateToken",
  async (data) => {
  
    try {
      const res = await COMMON_GENERATE_TOKEN_API(data);

      return await res;
    } catch (err) {
      return err;
    }
  }
);



const CommonSlice = createSlice({
  name: "CommonSlice",
  initialState: {
    getGenrateTokenState: "",
  
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGenerateToken.pending, (state, action) => {
        return {
          ...state,
          getGenrateTokenState: [],

          // isLoading: true,
        };
      })
      .addCase(getGenerateToken.fulfilled, (state, action) => {

        return {
          ...state,
          getGenrateTokenState: action.payload?.data?.token,
          // isLoading: false,
        };
      })
      .addCase(getGenerateToken.rejected, (state, action) => {
        return {
          ...state,
          getGenrateTokenState: [],
          // isLoading: false,
        };
      })
      
  },
});

export default CommonSlice;
