import {useMemo, useState} from "react";

type User = {
    id: number;
    name: string
}


export function filterUsers( users: User[] , searchTerm:string ){

    const startTime = performance.now();

    while( performance.now() - startTime < 1000){
        continue
    }

    return users.filter( ite=>ite.name.includes(searchTerm) )
}


const Comparison2: React.FC =()=> {

    const [searchTerm,setSearchTerm] = useState("")
    const [isDark,setIsDark] = useState(false);


    const allUsers:User[] = useMemo( ()=>{

        const data = []
        for (let i = 0; i < 500; i++) {
            data.push({ id:i , name: `User ${i}` })
        }

        return data;
    },[] )


    const withoutUseMemoCurrentUsers = filterUsers(allUsers, searchTerm);

    return (
        <div>
            <input
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder={"search by name"}
            />

            <button
                onClick={()=>setIsDark(!isDark)}
            >
                {isDark? "dark mode": "light mode" }
            </button>

            <div>
                {withoutUseMemoCurrentUsers.map((ite) => (
                    <div key={ite.id}>
                        {ite.name}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Comparison2;