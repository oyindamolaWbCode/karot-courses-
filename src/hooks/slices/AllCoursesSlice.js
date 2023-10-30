import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";



// const fetchToken =()=>{
//   const tokenGen = JSON.parse(localStorage.getItem("user"));
//   const payload = tokenGen.token
//   const expire = tokenGen.expiration
//   localStorage.setItem('token', payload)
//   localStorage.setItem('tokenExpiration', expire)

//   console.log(payload, expire)
// }


const allcoursesSlice = createSlice({
  name: "allcourses",

  initialState: {
    loading: false,
    data: null,
    error: null,
  },

  reducers: {
    allcoursesRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },

    allcoursesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null; // Set error to null on success
    },

    allcoursesError: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    allcoursesReset: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const {
  allcoursesError,
  allcoursesRequest,
  allcoursesSuccess,
  allcoursesReset,
} = allcoursesSlice.actions;

export const getCourses = () => async (dispatch) => {
  const tokenGen = JSON.parse(localStorage.getItem("user"));
  const payload = tokenGen.token
  const expire = tokenGen.expiration
  localStorage.setItem('token', payload)
  localStorage.setItem('tokenExpiration', expire)

  console.log(payload, expire)


  dispatch(allcoursesRequest());
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${payload}`,
    },
    };
    const { data } = await axios.get(
      "https://karotapi-7a5b7733fa41.herokuapp.com/api/courses",
      // payload,
      config
    );

    dispatch(allcoursesSuccess(data));

    // console.log(data);

    return data; // Return the data as a resolved value
  } catch (error) {
    dispatch(allcoursesError(error));
    throw error; // Throw the error to be caught by the caller
  }
};

export default allcoursesSlice.reducer;
