import {useRef} from "react";


const RefDemo1:React.FC = ()=>{

    const inputRef = useRef<HTMLInputElement>(null);

    function focusInput(){
        if(inputRef.current){
            inputRef.current.value='string content changed by ref' + Math.random();
        }
    }

    return (
        <div>
            <input  type={"text"} ref={inputRef} />
            <button onClick={focusInput}>click to invoke to manipulate dom</button>
        </div>
    )
}

export default RefDemo1;

