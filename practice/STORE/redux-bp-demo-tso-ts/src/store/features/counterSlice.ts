import {createSlice} from "@reduxjs/toolkit";


type ExtMap = {
    name?:string;
    val?:number;
    info?:string;
}

type CounterState = {
    name:string;
    value:number;
    isDark:boolean;
    extMap?:ExtMap;
}

const extMap:ExtMap = {}
const initState:CounterState ={
    name:'laios',
    value:100,
    isDark:false,
    extMap:extMap
}


const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        increment: state => {
            state.value ++;
        },
        decrement: state => {
            state.value--;
        },
        incrementByAmount: (state,{payload})=>{
            state.value += payload.value;
        }

    }
})


export const { increment , decrement , incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer