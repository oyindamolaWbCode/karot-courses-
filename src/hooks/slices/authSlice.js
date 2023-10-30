import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const userStorage = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const authSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    data: userStorage,
    error: null,
  },

  reducers: {
    authRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },

    authSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    },

    authError: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },

    authReset: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
    authLogout: (state) => {
      localStorage.removeItem("user");
      state.loading = true;
      state.data = null;
      state.error = null;
    },
  },
});

export const { authRequest, authError, authReset, authSuccess, authLogout } =
  authSlice.actions;

export const login = (payload) => async (dispatch) => {
  try {
    dispatch(authRequest());
    const config = {
      headers: { 
      "Content-Type": "application/json",
      "accept": "text/plain",

     },
    };

    const { data } = await axios.post(
      "https://karotapi-7a5b7733fa41.herokuapp.com/api/auth",
      payload, config
    );
    console.log("response data: ", data)
    dispatch(authSuccess(data));
  } catch (error) {
    dispatch(authError(error));
  }
};

export default authSlice.reducer;
