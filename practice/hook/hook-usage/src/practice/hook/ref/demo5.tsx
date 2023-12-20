import {useRef} from "react";

type Props = {
    value:number
}

function DisplayValueError({value}:Props){
    const previousValue = useRef<number>(value);

    if( previousValue.current !== value ){
        previousValue.current = value;
    }

    return (
        <div>
            <h5> current value = {value} </h5>
            <h5> previous value = {} </h5>
        </div>
    )
}


export default DisplayValueError;