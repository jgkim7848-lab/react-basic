//user.tsx
import { userType } from "@/app/type/user"

type userProps = {
    user : userType;
    onRemove: (id: number)=>void;
    onToggle: (id: number)=>void;
}

export default function User({user, onRemove, onToggle}: userProps){
    return(
        <div className="m-2">
            <b  style={{color: user.active? 'green' : 'black'}}
                onClick={()=>{onToggle(user.id)}}
            >{user.id} . {user.username}</b>
            <span className="mx-3">{user.email}</span>
            <button className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-700"
                onClick={()=>{onRemove(user.id)}}
            >x</button>
        </div>
    )
} 