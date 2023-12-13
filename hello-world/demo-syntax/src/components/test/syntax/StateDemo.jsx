import {useState} from 'react'

import {mkUsers} from "../../../helper/data/makeData"

function StateDemo(){


    return (
        <>
            <h6>useState() hook demo</h6>
            <TodoDemo></TodoDemo>



        </>
    )
}

function TodoDemo(){
    const [formData,setFormData] = useState({id:1,name:"laios"})
    const [arrayData,setArrayData] = useState( [100,200] )
    const [userInfo,setUserInfo] = useState( mkUsers())


    var arrayCreate = (v)=>{
        setArrayData( data => [
            ...data,
            v
        ] )
    }

    var arrayRemove = (key,data)=>{

        setArrayData( arrayData.filter((value, index) => {
            return key != index;
        }) )

    }

    var arrayUpdate = (data,key)=>{

        setArrayData(
            arrayData.
            map( (value,index) => {
                return key == index? value + 100:value
            })
        )
    }


    return (
        <>
            <div style={{backgroundColor:"#363636",marginRight:"20px"}}>
                <h6>array update</h6>
                <input type="number" placeholder={1} onChange={(e)=>arrayCreate( Number(e.target.value) )} />
                {
                    arrayData.map((item,_) => (
                        <div key={_}>
                            <p>{item}</p>
                            <button onClick={()=>arrayRemove(_,item)}>remove</button>
                            <button onClick={()=>arrayUpdate(item,_)}>update</button>
                        </div>
                    ))
                }

            </div>

            <div style={{ backgroundColor:"#545454" }} >
                {/*对象的crud差不多 -- 就不展示了*/}
                <h6>object update</h6>
                {
                    <div>{formData.name}</div>
                }
                {/* update 对象 */}
                <input onChange={ (e)=>{setFormData({...formData,name:e.target.value})} } placeholder="default" />
            </div>


            <div style={{backgroundColor:"#123456"}}>
                {/*复杂的复合对象*/}
                <h6>array + object update</h6>
                <button onClick={ ()=>{ console.log(userInfo) } }> tmp </button>

                { userInfo.map( (ite,key)=>(
                    <div key={key} style={{display:"flex"}}>
                        <p>{ite.name}</p>
                        <p>{ite.idCard}</p>
                        <button onClick={ ()=>{ setUserInfo(userInfo.filter( (cur,_)=> ite.idCard!=cur.idCard )) } }>remove</button>
                    </div>
                    ) )
                }

            </div>


        </>
    )

}



export default StateDemo