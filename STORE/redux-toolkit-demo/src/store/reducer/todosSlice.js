import { createSlice } from "@reduxjs/toolkit";

var initData = {
    data: [],
    status: null
}

const todosSlice = createSlice({

    name : 'todos',
    initialState: initData,

    reducers: {

        add(state,action){
            var todo = action.payload;
            state.data[todo.id] = todo
        },
        change(state,action){
            var id = action.payload;
            var todo = state.data[id]
            todo.completed = !todo.completed
        },
        sub(state,action){  },
        div(state,action){  }

    }

})

// action creator
export const { add , sub , div } = todosSlice.actions

// reducer
export default todosSlice.reducer


console.log( add(42) )
