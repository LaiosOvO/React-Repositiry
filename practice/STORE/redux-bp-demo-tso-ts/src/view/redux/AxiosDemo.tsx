import {refreshToken,mockget} from "../../api/demo";
import axios from "../../http/request";

const AxiosDemo:React.FC = ()=>{
    // let token:string|null=null;

    function handlemockget(){

        const data = mockget()
        console.log(data)
    }



    return (
        <div>
            <p>{}</p>
            <button onClick={handlemockget}>refresh token</button>
            <button onClick={()=>axios.get("/200")}>200 </button>
            <button onClick={()=>axios.get("/404")}>200 </button>
            <button onClick={()=>axios.get("/500")}>200 </button>
            <button onClick={()=>axios.get("/503")}>200 </button>
        </div>
    )
}

export default AxiosDemo;