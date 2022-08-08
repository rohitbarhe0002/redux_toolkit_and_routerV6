import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    testing:null,
    error: false,
  },
  reducers: {
    testState: (state,action) => {
      console.log("comming in asddction from my side",action.payload);
      state.testing = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { testState } = userSlice.actions;
export default userSlice.reducer;
