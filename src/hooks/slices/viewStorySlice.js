import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const tokenGen = JSON.parse(localStorage.getItem("user"));
const payload = 'tokenGen.data.token;'


const viewStorySlice = createSlice({
name: "viewstory",

    initialState : {
        loading : false,
        data: null,
        error: null,
    },

    reducers:{
        storyviewRequest:(state)=>{
            state.loading = true;
            state.data = null;
            state.error =null;
        },

        storyviewSuccess:(state, action)=> {
            state.loading = false;
            state.data = action.payload;
            state.error = null
        },

        storyviewError:(state, action)=>{
            state.loading = false;
            state.data = null;
            state.error = action.payload
        },
        storyviewReset:(state)=>{
            state.loading = false;
            state.data = null;
            state.error = null;
        },
    },

});


export const  { storyviewRequest, storyviewSuccess, storyviewReset, storyviewError} = viewStorySlice.actions

export const viewstory = (id)=> async(dispatch)=>{
    dispatch(storyviewRequest());

    try {

        const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${payload}`,
          },
          };
          const { data } = await axios.get(
            `https://ijapafxapi-c286b783112c.herokuapp.com/stories/${id}`,
            config
          );

          dispatch(storyviewSuccess(data));
        return data
    } catch (error) {
        dispatch(storyviewError(error))
    }
}

export default viewStorySlice.reducer