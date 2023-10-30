import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",

  initialState: {
    loading: false,
    data: null,
    error: null,
  },

  reducers: {
    contactRequest : (state)=>{
        state.loading=true;
        state.data = null;
        state.error = null;
    },

    contactSuccess: (state, action)=>{
        state.loading = false;
        state.data = action.payload;
        state.error = null
    },

    contactError : (state, action)=>{
        state.loading = false;
        state.data = null;
        state.error = action.payload
    },

    contactReset: (state)=>{
        state.loading =false ;
        state.data = null;
        state.error = null
    }


  },
});

export const {contactError, contactRequest, contactReset, contactSuccess} =contactSlice.actions



export const contactUS = (payload)=> async(dispatch)=>{
    dispatch(contactRequest())

    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
              },
          
        }


        const {data} = await axios.post("https://ijapafxapi-c286b783112c.herokuapp.com/email-us", payload, config)

        dispatch(contactSuccess(data))
        
    } catch (error) {
        dispatch(contactError(error))
        
    }
}

export default contactSlice.reducer