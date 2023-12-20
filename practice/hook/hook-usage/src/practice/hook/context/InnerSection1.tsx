import {useContext} from "react";

import {ThemeContext} from "./WrapperSection";

const InnerSection1 = ()=>{
    const context = useContext( ThemeContext )

    return (
        <div style={{backgroundColor:context.bgColor,color:context.fontColor}} >
            <h4>the head title to show color changing biz scenes</h4>
            <button style={{backgroundColor:context.bgColor}}> btn to show theme color </button>
        </div>
    )
}

export default InnerSection1;