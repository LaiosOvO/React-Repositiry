import {useEffect, useRef} from "react";

function WindowSize() : React.ReactElement{
    const widthRef = useRef(window.innerWidth);

    useEffect( ()=>{

        const handleResize = ()=> {
            widthRef.current = window.innerWidth;

            console.log('Width')
        }

        window.addEventListener( "resize" , handleResize )

        return ()=>window.removeEventListener( "resize" , handleResize );
    },[] )

    return (
        <div>

        </div>
    )
}


export default WindowSize;
