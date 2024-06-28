import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import CommonSlice from '../slice/CommonSlice';





const store = configureStore({
  reducer: {
   
    CommonSlice:CommonSlice.reducer,

  },
});

export default store;
