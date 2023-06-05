import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  mobileMenuOpen: false,
  authStatus: "",
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    openMobileMenu: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    setSignInForm: (state) => {
      state.authStatus = "sign-in";
    },
    setSignUpForm: (state) => {
      state.authStatus = "sign-up";
    },
  },
});

// Action creators are generated for each case reducer function
export const { openMobileMenu, setSignInForm, setSignUpForm } =
  appSlice.actions;

export default appSlice.reducer;
