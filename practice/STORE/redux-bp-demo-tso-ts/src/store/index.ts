import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'
import movieSlice from "./features/movieSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        movie:movieSlice
    }
})


export default store;