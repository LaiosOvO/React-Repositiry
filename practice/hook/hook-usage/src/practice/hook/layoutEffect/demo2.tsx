
// type define
import {useLayoutEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";

type Rect = {
    top: number;
    left: number;
    bottom: number;
    right: number;
}

interface ButtonWithTooltopProps {
    tooltipContent: React.ReactNode;
    containerRef: React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
}

interface TooltipProps {
    targetRect: Rect ;
    containerRect: Rect ;
    children: React.ReactNode;
}

// component

export default function HoverTooltip(){
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
        >
            <ButtonWithTooltip
                containerRef={containerRef}
                tooltipContent="This tooltip does not fit above the button. This is why it's displayed below instead!"
            >
                Hover over me (tooltip below)
            </ButtonWithTooltip>

            <ButtonWithTooltip
                containerRef={containerRef}
                tooltipContent="This tooltip fits above the button"
            >
                Hover over me (tooltip above)
            </ButtonWithTooltip>

            <ButtonWithTooltip
                containerRef={containerRef}
                tooltipContent="This tooltip fits above the button"
            >
                Hover over me (tooltip above)
            </ButtonWithTooltip>


        </div>
    )
}

const ButtonWithTooltip: React.FC<ButtonWithTooltopProps> = ({
    tooltipContent,
    containerRef,
    children
}) => {

    const [targetRect,setTargetRect] = useState<Rect | null>(null);
    const [containerRect,setContainerRect] = useState<Rect | null>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);


    return (
        <div>
            <button
               ref={buttonRef}

               onPointerEnter={ ()=>{
                   buttonRef.current &&
                       setTargetRect(buttonRef.current.getBoundingClientRect())

                   containerRef.current &&
                       setContainerRect( containerRef.current.getBoundingClientRect() )
               } }

               onPointerLeave={ ()=>{
                    setTargetRect(null);
                    setContainerRect(null);
               } }
            >
                {children}
            </button>
            <>
                {"condition expression to decide show the tooltip or not"}
            </>

            <Tooltip targetRect={targetRect} containerRect={containerRect} >
                {tooltipContent}
            </Tooltip>

        </div>
    )
}



// 通过两个ref出来的dom元素来计算 x和y然后动态的设置css的top和left
const Tooltip: React.FC<TooltipProps> = ({
    targetRect,
    containerRect,
    children
}) => {

    const ref = useRef<HTMLDivElement>(null);
    const [tooltipHeight,setTooltipHeight] = useState(0);

    // data wachter
    useLayoutEffect( ()=>{

        if(ref.current){
            const {height} = ref.current.getBoundingClientRect();
            setTooltipHeight( height );
        }

    },[children])


    const tooltipX = targetRect.left;
    const tooltipY = targetRect.top - containerRect.top - tooltipHeight <= 0
        ? targetRect.bottom
        : targetRect.top - tooltipHeight; // 默认在按钮上方

    return createPortal(
        <div
            ref={ref}
            style={{
                left: `${tooltipX}px` ,
                top: `${tooltipY}px`
            }}
        >
            {children}
        </div>
        ,
        document.body
    )
}
