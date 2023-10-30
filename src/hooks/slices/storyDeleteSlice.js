import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";


const tokenGen = JSON.parse(localStorage.getItem("user"));
const token = 'tokenGen.data.token;'




const storyDeleteSlice = createSlice({
  name: "storydelete",

  initialState: {
    loading: false,
    data: null,
    error: null,
  },

  reducers: {
    storydeleteRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },

    storydeleteSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },

    storydeleteError: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },

    storydeleteReset: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

export const {
  storydeleteError,
  storydeleteRequest,
  storydeleteSuccess,
  storydeleteReset,
} = storyDeleteSlice.actions;


export const deleteStory =(id)=> async (dispatch)=>{
    try {
        dispatch(storydeleteRequest());

        const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${token}`,
          },
          };


       const {data} = await axios.delete(`https://ijapafxapi-c286b783112c.herokuapp.com/stories/${id}`,
            config
          );

          dispatch(storydeleteSuccess(data))
          return data
        
    } catch (error) {
        dispatch(storydeleteError(error))
    }
}


export default storyDeleteSlice.reducer