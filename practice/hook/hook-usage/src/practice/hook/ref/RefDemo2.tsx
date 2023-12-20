import {ForwardedRef, forwardRef, useEffect, useRef} from "react";

const MyInput = forwardRef( (props, ref:ForwardedRef<HTMLInputElement>)=>{

    return <input {...props} ref={ref} />
} )

const RefDemo2:React.FC = ()=>{

    const inputRef = useRef<HTMLInputElement>(null);

    function focusInput(){
        if(inputRef.current){
            inputRef.current.value='dom2 content ' + Math.random();
        }
    }

    return (
        <div>
            <MyInput ref={inputRef} />
            <button onClick={focusInput}>manipulate dom2</button>

            <Timer />
        </div>
    )
}

//////////////////////////
// 保存状态但不出发渲染
// 值保存并一直更新但是这个值没有被ui更新渲染
function Timer(){
    const count = useRef(0);

    useEffect( ()=>{

        const intervalId = setInterval( ()=>{
            count.current += 1;
            console.log( `Elapsed time ==> ${count.current} seconds` )
        } , 1000 )


        return ()=>clearInterval(intervalId);
    } ,[] )

    return <div>Check the console to see the elasped time!</div>
}
///////////////////////////
// 保存上一次的值 - props或state



export default RefDemo2;
// 可以在父组件直接获取到子组件的dom并进行更新数据
// 保存状态但不出发渲染
// 保存上一次的 props 或 state