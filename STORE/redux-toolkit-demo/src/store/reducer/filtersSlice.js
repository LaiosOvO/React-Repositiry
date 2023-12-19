import { createSlice } from "@reduxjs/toolkit";


const preloadData = {
    status: 'All',
    colors: ['red']
}


const filtersSlice = createSlice({

    name:"filters",
    initialState: preloadData,
    reducers: {
        changed(state,action){
            console.log("**************")
            console.log(state.status)
            console.log(state.colors)
            console.log(action)
            console.log("**************")
        }
    }


})



export const { changed } = filtersSlice.actions
export default filtersSlice.reducer
