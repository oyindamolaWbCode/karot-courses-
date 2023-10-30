import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const tokenGen = JSON.parse(localStorage.getItem("user"));
const token = 'tokenGen.data.token;'

const addpageSlice = createSlice({
  name: "addpage",

  initialState: {
    loading: false,
    data: null,
    error: null,
  },

  reducers: {
    addpageRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },

    addpageSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },

    addpageError: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    addpageReset: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const { addpageError, addpageRequest, addpageReset, addpageSuccess } =
  addpageSlice.actions;

export const AddStoryPage = (payload, id) => async (dispatch) => {
  dispatch(addpageRequest());

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    };
    const { data } = await axios.patch(
      `https://ijapafxapi-c286b783112c.herokuapp.com/stories/${id}/pages`,
      payload,
      config
    );

    dispatch(addpageSuccess(data))
    return data
  } catch (error) {
    dispatch(addpageError(error))
  }
};

export default addpageSlice.reducer