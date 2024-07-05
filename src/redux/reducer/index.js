import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    // course: courseReducer,
    // cart: cartReducer,
    // viewCourse: viewCourseReducer,
    // sidebar: sidebarSlice,
})

export default rootReducer