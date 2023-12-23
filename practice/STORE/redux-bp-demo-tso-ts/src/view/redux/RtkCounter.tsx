
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement,incrementByAmount} from "../../store/features/counterSlice";
import {getMovieData} from "../../store/features/movieSlice";

const RtkCounter:React.FC = ()=>{

    const {value} = useSelector(( store )=>store.counter);
    const dispatch = useDispatch();

    const {total,list} = useSelector((store)=>store.movie);

    return (
        <div>
            <div>
                <p>current counter is use rtk</p>
                <h4>{value}</h4>
                <button onClick={ ()=>{ dispatch(increment()) } } > add 1</button>
                <button onClick={()=>{ dispatch(decrement()) } } >add -1</button>
                <button onClick={()=>{ dispatch(incrementByAmount({value:10})) } } >add by base 10</button>
            </div>


            <div>
                <p>movie component show the async data flow</p>
                <p>the number of movie = {total}</p>
                <button onClick={()=>console.log(list)}>show the data of iqy</button>
                <button onClick={()=>{dispatch(getMovieData())}}>获取数据</button>

                <ul>
                    {list.map( (ite)=><li key={ite.tvId}>{ite.name}</li> )}
                </ul>
            </div>


            <div>
                <p>test axios configuration</p>
                <button> axios1 </button>
            </div>
        </div>

    )

}

export default RtkCounter;