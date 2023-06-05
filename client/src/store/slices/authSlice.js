import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  password: "",
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setSignUp: (state, action) => {
      state.username = action.payload;
      state.email = action.payload;
      state.payload = action.payload;
    },
    setSignIn: (state, action) => {
      state.email = action.payload;
      state.payload = action.payload;
    },
    setLogout: () => {
      localStorage.removeItem("token");
      window.location.reload();
    },
  },
});

export const { setSignIn, setSignUp } = authSlice.actions;
