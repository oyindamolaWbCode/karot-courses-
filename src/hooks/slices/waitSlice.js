import axios from 'axios'
import { createSlice } from "@reduxjs/toolkit"



const waitSlice = createSlice({
    name: "waitList",
    initialState:{
        loading: false,
        data: null,
        error: null

    },

    reducers:{

        waitRequest: (state)=>{
            state.loading = true;
            state.data = null;
            state.error = null
        },

        waitSuccess: (state, action) =>{
            state.loading = false;
            state.data = action.payload;
            state.error = null
        },

        waitError: (state, action)=>{
            state.loading = false;
            state.data = null;
            state.error = action.payload
        },

        waitReset: (state)=>{
            state.loading = false;
            state.data = null;
            state.error = null
        }

    }
})

export const {waitSuccess, waitRequest, waitError, waitReset} = waitSlice.actions

export const joinWaitList = (payload)=> async(dispatch)=>{
    dispatch(waitRequest())

    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
              },
        }

        const {data} = await axios.post("https://ijapafxapi-c286b783112c.herokuapp.com/wait-list", payload, config)

        // console.log("response: ", response)

        dispatch(waitSuccess(data))
        
    } catch (error) {
        dispatch(waitError(error))
    }

}


export default waitSlice.reducer