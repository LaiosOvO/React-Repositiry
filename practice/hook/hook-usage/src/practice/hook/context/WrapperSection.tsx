import React, {useReducer} from "react";
import {ColorPicker} from "antd";
import {Color} from "antd/es/color-picker/color";


const themeReducer = (
    state:{bgColor:string,btnColor:string,fontColor:string,headColor:string},
    action:{type:string,payload:string}):
    { bgColor:  string; btnColor: string; headColor: string; fontColor: string } => {
    switch (action.type){
        case 'case1':{
            return {...state,bgColor:action.payload};
        }
        default:{
            return state;
        }
    }
}

const WrapperSection = ({children}:{ children:React.ReactNode } )=>{
    const [ theme , dispatch ] = useReducer( themeReducer , initThemeState )
    // @ts-ignore
    const handleChange = (color:Color,hex:string) => {
        dispatch( { type:'case1' , payload: hex } )
    }

    return (
        <ThemeContext.Provider value={{ ...theme }}>
            <ColorPicker onChange={(color,hex)=>handleChange(color,hex)} />
            {children}
        </ThemeContext.Provider>
    )
}

const defaultValue = { bgColor:'orange' , btnColor:"purple" ,fontColor: "yellow", headColor: "purple" }
const initThemeState = defaultValue;
export const ThemeContext = React.createContext( defaultValue )
export default WrapperSection;



// [普通用法]
// Context 对象是用来解决全局数据提供了 ==> 优化了对于这里面子组件之间嵌套的 值传递
// 1 这里作为父组件 对外暴露了 Context对象。
// 2 父组件具体提供什么值 - 由value来决定 , 这个value和reducer进行绑定即可可以动态变化
// 3 在子组件直接使用useContext即可

// [性能优化]
// 1. 数据细粒度化
// 2. 使用 useMemo() + useCallback() 优化value