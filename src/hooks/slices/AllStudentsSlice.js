import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";



// console.log(payload);

const allstudentsSlice = createSlice({
  name: "allstudents",

  initialState: {
    loading: false,
    data: null,
    error: null,
  },

  reducers: {
    allstudentsRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },

    allstudentsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null; // Set error to null on success
    },

    allstudentsError: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    allstudentsReset: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const {
  allstudentsError,
  allstudentsRequest,
  allstudentsSuccess,
  allstudentsReset,
} = allstudentsSlice.actions;

export const getStudents = () => async (dispatch) => {
  const tokenGen = JSON.parse(localStorage.getItem("user"));
const payload = tokenGen.token;

  dispatch(allstudentsRequest());
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${payload}`,
      },
    };
    const { data } = await axios.get(
      "https://karotapi-7a5b7733fa41.herokuapp.com/api/student",
      // payload,
      config
    );

    dispatch(allstudentsSuccess(data));

    // console.log(data);

    return data; // Return the data as a resolved value
  } catch (error) {
    dispatch(allstudentsError(error));
    throw error; // Throw the error to be caught by the caller
  }
};

export default allstudentsSlice.reducer;
