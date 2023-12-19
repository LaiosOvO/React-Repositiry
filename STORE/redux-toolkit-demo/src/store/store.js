import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./reducer/todosSlice.js";
import filtersReducer,{changed} from "./reducer/filtersSlice.js";

const store = configureStore({
    reducer: {
        todos: todosReducer ,
        filters: filtersReducer
    }

})



store.dispatch( changed(12) )

export default store;