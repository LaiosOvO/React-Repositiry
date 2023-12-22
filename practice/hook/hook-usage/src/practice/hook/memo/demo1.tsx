import {useMemo, useState} from "react";

type User = {
    id:number;
    name:string;
}


export function filterUsers(data:User[],searchTerm:string){

    const startTime = performance.now()

    while( performance.now() - startTime < 1000 ){
        continue
    }

    return data.filter( ite=>ite.name.includes(searchTerm) )
}

const Comparison1: React.FC = ()=>{

    const [seachTerm,setSeachTerm] = useState("")
    const [isDark,setIsDark] = useState(false)

    const allUsers = useMemo( ()=>{

        const data = []

        for (let i = 0; i < 500; i++) {
            data.push({id:i,name:`User${i}`})
        }

        return data;
    }, [])

    const userWithMemo = useMemo( ()=>{
        return filterUsers(allUsers,seachTerm)
        }, [allUsers,seachTerm] )

    return (
        <div>
            <input
                value={seachTerm}
                onChange={(e)=>setSeachTerm(e.target.value)}
            />

            <button onClick={()=>setIsDark(!isDark)}>
                {isDark?'dark mode':'light mode'}
            </button>

            <div>
                <h2>with memo</h2>
                <div>
                    {userWithMemo.map((item) => (
                        <div key={item.id}>
                            item.name
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Comparison1;