import { userType } from "@/app/type/user"
import User from "./user";

type userProps = {
    users: userType[];
    onRemove: (id:number)=> void;
}

export default function UserList1({users, onRemove}:userProps){
    return(
        <div>
            <h2 className="font-bold m-2">User List</h2>
            {
                users.map( user => (
                    <User user={user} key={user.id} onRemove={onRemove} />
                ))
            }
        </div>
    )
}