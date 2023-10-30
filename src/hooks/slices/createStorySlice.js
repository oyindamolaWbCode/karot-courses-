import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const tokenGen = JSON.parse(localStorage.getItem("user"));
const token = 'tokenGen.data.token;'



const  createStorySlice = createSlice({
        name: "createstory",


        initialState:{
            loading: false,
            data: null,
            error: null,
        },

            reducers:{

                createstoryRequest:(state)=>{
                    state.loading = true;
                    state.data = null;
                    state.error = null
                },

                createstorySuccess:(state, action)=>{
                    state.loading = false;
                    state.data = action.payload;
                    state.error = null;
                },

                createstoryError:(state, action)=>{
                    state.loading = false;
                    state.data = null;
                    state.error = action.payload

                },

                createstoryReset:(state)=>{
                    state.loading =false;
                    state.data = null;
                    state.error = null
                },

            },

});


const {createstoryRequest, createstoryError, createstorySuccess, createstoryReset} = createStorySlice.actions


export const createstory =(payload)=> async(dispatch)=>{
    dispatch(createstoryRequest());

        try {

            const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `bearer ${token}`,
              },
              };
              const { data } = await axios.post(
                `https://ijapafxapi-c286b783112c.herokuapp.com/stories`,payload,
                config
              );
            
              dispatch(createstorySuccess(data))

              return data
        } catch (error) {
            dispatch(createstoryError(error))
        }
}

export default createStorySlice.reducer