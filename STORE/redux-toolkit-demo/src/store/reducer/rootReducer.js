import { combineReducers } from "@reduxjs/toolkit";

import todosReducer from "./todosSlice.js";
import filtersReducer from "./filtersSlice.js";

const rootReducer = combineReducers({
    todos: todosReducer ,
    filters: filtersReducer
})


export default rootReducer;