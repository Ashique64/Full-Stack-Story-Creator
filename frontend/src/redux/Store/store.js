import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Authentication/AuthSlice"


const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})


export default store