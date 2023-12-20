// /**
//  * useContext + useReducer ==> 主题切换 = 使用context全局变量给子组件
//  * @constructor
//  */
// import React, {useContext, useReducer, useState} from "react";
// import {ColorPicker} from "antd";
//
// type ThemeContext = {
//     theme:string ,
//     toggleTheme: ()=>void
// }
//
// const ThemeContext = React.createContext({ theme:'blue' , toggleTheme: ()=>{} ,color:""});
// const initialState = { theme: 'blue' , color: 'orange' }
//
// function themeReducer( state: { theme:string , color:string } , action: {type:string,payload:object | string} ) : { theme:string } {
//     switch ( action.type ) {
//
//         case 'TOGGLE_THEME':
//             return { theme: state.theme === 'blue' ? 'dark' : 'blue' , color: action.payload }
//
//         default:
//             return state;
//     }
// }
//
// function ThemeProvider( {children} : { children:React.ReactNode } ) : React.ReactElement {
//     const [state,dispatch] = useReducer( themeReducer , initialState )
//     const [color,setColor] = useState()
//
//     return (
//         <ThemeContext.Provider
//             value={{
//                 color: {color},
//                 theme: state.theme,
//                 toggleTheme: () => dispatch({ type: "TOGGLE_THEME",payload: {color} }),
//             }}>
//             <ColorPicker value={color} onChange={(e)=> {
//                 setColor(e.toRgbString())
//             } } />
//             {children}
//         </ThemeContext.Provider>
//     );
// }
//
// function ThemeButton(){
//     const { color,theme , toggleTheme } = useContext(ThemeContext);
//
//     return (
//         <div style={{ backgroundColor: color }} >
//             <button style={{ backgroundColor: theme === 'blue'? 'red' : 'blue' }}
//                     onClick={toggleTheme} >Toggle Theme</button>
//             <h4>color will change when the color is change by parent.</h4>
//             <h4>the value is from  Context obj from parent component.</h4>
//             <h4>the color is controlled in the parent components by useState().</h4>
//         </div>
//     )
// }
//
// const ReducerDemo3:React.FC = ()=>{
//
//     return (
//         <ThemeProvider>
//             <ThemeButton></ThemeButton>
//         </ThemeProvider>
//     )
// }
//
// export default ReducerDemo3;