import { combineReducers } from "redux";
import waitReducer from './slices/waitSlice'
import contactReducer from './slices/contactSlice'
import authReducer from './slices/authSlice'
import allcoursesReducer from "./slices/AllCoursesSlice";
import allstudentsReducer from './slices/AllStudentsSlice'
// import storydeleteReducer from './slices/storyDeleteSlice'
// import viewstoryReducer  from "./slices/viewStorySlice";
// import createstoryReducer from './slices/createStorySlice'
// import addpageReducer from './slices/addpage'

const rootReducer = combineReducers({
    waitList:waitReducer,
    contact: contactReducer,
    auth: authReducer,
    allcourses : allcoursesReducer,
    allstudents : allstudentsReducer

    // storydelete: storydeleteReducer,
    // viewstory: viewstoryReducer,
    // createstory: createstoryReducer,
    // addpage: addpageReducer
})

export const RESET_STATE = "RESET_STATE"

const rootResetReducer = (state, action)=>{
    if(action.type === RESET_STATE){
        return rootReducer(undefined, action)
    }
    return rootReducer(state, action)
}

export default rootReducer