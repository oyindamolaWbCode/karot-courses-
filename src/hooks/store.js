import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import rootReducer, {RESET_STATE} from "./rootReducer";
const middleware =[...getDefaultMiddleware(), createLogger()]



const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: true
});

export const resetStateAction = ()=>({
    type: RESET_STATE
})

export default store