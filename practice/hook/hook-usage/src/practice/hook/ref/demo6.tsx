import {useEffect, useRef} from "react";

const MovingBox: React.FC = () =>{

    const boxRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number|null>(null);

    const boxWidth = 100;

    useEffect( ()=>{
        const boxElem = boxRef.current;
        if(!boxElem) return ;

        let position=0;

        // animate callback function
        const animate = ()=>{

            position += 1;
            if( position > window.innerWidth ){
                position = -boxWidth;
            }

            boxElem.style.transform = `translateX(${position} px)`;
            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animationFrameRef.current = requestAnimationFrame(animate);

        return ()=>{
            if( animationFrameRef.current ){
                cancelAnimationFrame( animationFrameRef.current )
            }
        }

    } , [] )

    return (
        <div ref={boxRef} style={{width:200,height:200,backgroundColor:"white"}}></div>
    )
}

export default MovingBox;