// import { Dispatch, Reducer, useEffect, useReducer } from 'react';
// import axios from 'axios';
//
// interface Action {
//     type: string;
//     payload?: string|number|object;
// }
//
// // 自己定义的回调函数类型
// interface ThunkFunction {
//     ( dispatch: Dispatch<Action> ) : void;
// }
//
// interface State{
//     data: object|number|string
// }
//
// const initialState: State = {
//     data: []
// }
//
// function reducer( state:State , action:Action ) : State{
//
//     switch (action.type){
//         case 'SET_DATA': {
//             return { ...state }
//         }
//
//         default:
//             return state;
//     }
//
// }
//
// /**
//  * 00
//  *  thunk+middleware 在redux里面是用来处理异步数据流的。
//  * 00
//  *
//  * 这个就是经典的包一层来增强逻辑
//  *  入参就是原来的 dispatch 回调函数
//  *  返回的是一个增强版的回调函数
//  * @param dispatch
//  */
// function thunkMiddleware( dispatch: Dispatch<Action> ) : (action: (Action | ThunkFunction)) => void{
//     // thunk
//     return function (action: Action | ThunkFunction) {
//
//         if (typeof action === 'function') {
//             // 如果action是函数 -- 则直接触发
//             action(dispatch);
//         } else {
//             // 如果action是事件 -- 默认之前的逻辑 直接分发事件 = dipatch(action)
//             dispatch(action);
//         }
//
//         // 中间件 log
//         console.log('action dispatched at: ', new Date().toISOString());
//     };
// }
//
//
//
//
// const ReducerDemo2:React.FC = ()=>{
//     function fetchData() {
//
//         return function (dispatch: Dispatch<Action>){
//             axios.get('/api/user')
//                 .then( res => {
//                     const data = res.data;
//                     // use enhancered dispator
//                     console.log("获取到 data ==> ",data)
//                     dispatch( { type: "SET_DATA", payload:data} )
//
//                 } ).catch(error => {
//                 console.error('Error get data',error)
//             })
//         }
//
//     }
//
//     // @ts-ignore
//     const [state,oriDispatch] = useReducer< Reducer<State,Action> >(
//         reducer,
//         initialState
//     )
//     const dispatch = thunkMiddleware( oriDispatch )
//
//     //
//     // useEffect( ()=>{
//     //     // watch the data changing
//     //     dispatch( fetchData() )
//     // } , [dispatch] )
//
//
//     return (
//         <div>
//             <button onClick={fetchData}>组件加载获取数据</button>
//         </div>
//     )
// }
//
// export default ReducerDemo2;
