
// type define
import React, {memo, useMemo, useState} from "react";

type User = {
    id:number;
    name:string;
}

type UserListProps = {
    users: User[];
    searchTerm:string;
    isDark: boolean;
}

type ListProps = {
    users: User[];
}

const allUsers : User[] = [];
for (let i = 0; i < 100; i++) {
    allUsers.push({id:i,name: `User${i}`});
}

// auxilary function
export function filterUsers( users:User[] , searchTerm:string ) {
    return users.filter( ite=>ite.name.includes(searchTerm) )
}

// component define
// two cached component by memo
const ListComponent: React.FC<ListProps> = memo( ({users}) =>{

    return (
        <>
            {
                users.map( ite=>{
                    return <div key={ite.id}>{ite.name}</div>
                })
            }
        </>
    )
} )
ListComponent.displayName = "List";
const List = React.memo( ListComponent );


const UserListComponent: React.FC<UserListProps> = memo(
    ({ users,searchTerm,isDark })=>{
        const curUsers = useMemo(
            ()=> filterUsers(users,searchTerm),
            [users,searchTerm]
        )

        return (
            <div>
                {isDark}
                <List  users={curUsers} />
            </div>
        )
    }
)
UserListComponent.displayName = "UserList";
const UserList = React.memo( UserListComponent )

const Comparison3: React.FC = ()=>{
    const [searchTerm , setSearchTerm] = useState("");
    const [isDark,setIsDark] = useState(false);


    return (
        <div>
            <input
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder={"to search"}
            />
            <button onChange={()=>setIsDark(!isDark)}>{isDark}</button>

            <UserList  users={allUsers} searchTerm={searchTerm} isDark={isDark} />
        </div>
    )
}

export default Comparison3;