import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export interface MovieState {
    list: object;
    totals: number;
    flag:number;
}


const initialState : MovieState = {
    list:[],
    totals: 0,
    flag:-1
};

const getMovieListApi = ()=> fetch(
    'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48'
    ).then( res=>res.json() )

export const getMovieData = createAsyncThunk('movie/getMovie',
    async ()=>{
        const res = await getMovieListApi();
        return res;
    }
);

export const movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers:{
        loadDataEnd: (state,{payload}) =>{
            state.list = payload;
            state.totals = payload.length;
            state.flag=200;
        }
    },
    extraReducers(builder){
        builder
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .addCase(getMovieData.pending , (state)=>{
                state.flag = 503;
                console.log("still wait for response")
            })
            .addCase(getMovieData.fulfilled,(state,{payload})=>{
                state.flag=200;
                console.log("request if fulfilled")
                console.log(payload)
                state.list = payload.data.list
                state.totals = payload.data.list.length
            })
            .addCase(getMovieData.rejected,(state,err)=>{
                state.flag=500;
                console.log("request is rejected",err);
            })
    }
});

export const { loadDataEnd } = movieSlice.actions;
export default movieSlice.reducer;