import { mockget,mockpost,mockUser } from "../../api/demo";
import axios from "../../http/request";
import { getUser } from "../../api/users"
const AxiosDemo:React.FC = ()=>{
    // let token:string|null=null;

    function handlemockget(){
        mockget()
    }

    function handlemockpost(){
        mockpost({encryFlag:true})
    }
    function handlemockUser(){
        const res= getUser();

        console.log(res)
        // console.log(res.data)
    }

    return (
        <div>
            <p>{}</p>
            <button onClick={handlemockget}>get</button>
            <button onClick={handlemockpost}>post</button>
            <button onClick={handlemockUser}>get user</button>`
            <button onClick={()=>axios.get("/200")}>200 </button>
            <button onClick={()=>axios.get("/404")}>200 </button>
            <button onClick={()=>axios.get("/500")}>200 </button>
            <button onClick={()=>axios.get("/503")}>200 </button>
        </div>
    )
}

export default AxiosDemo;