import {Link, Outlet} from "react-router-dom";

var Nest = ()=>{
    return (
        <>
            <h1>nest page</h1>

            <button><Link to="/nest/menu1">menu1</Link></button>
            <button><Link to="/nest/menu2">menu2</Link></button>

            <Outlet ></Outlet>
        </>
    )
}
export default Nest