import {useEffect, useRef, useState} from "react";


type Props = {
    value: number;
};

function DisplayValue( { value } : Props ) :React.ReactElement {
    const [preValue , setPreValue] = useState<number|null>(null);
    const currentRef = useRef<number>(value)

    useEffect( ()=>{
        setPreValue(currentRef.current)
        currentRef.current = value
    } , [value] )

    return (
        <div>
            <h5> Current value  == {value} </h5>
            <h5> Previous value == {preValue} </h5>
        </div>
    )
}


export default DisplayValue;