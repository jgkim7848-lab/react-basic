import axios from "axios";
import { useEffect, useState } from "react";
import { userAllType } from "../type/type";

type userOneProps = {
    idx: number;
}
// {idx}: {idx: number;}

async function getUser(idx: number) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${idx}`);
        return response.data;    
    } catch (error) {
        console.log(error);
    }
}


export default function UserOne({idx}: userOneProps){

    // 1. useState() => idx 에 해당하는 한 사람의 정보
    // getUser  : 비동기 함수 => https://jsonplaceholder.typicode.com/users/idx
    // 출력 <ul> => <li>  userType의 데이터 출력

    // useEffect(()=>{}, [idx])

    const [user, setUser] = useState<userAllType | null>(null);

    useEffect(()=>{
        //setUser(getUser(idx));
        const fetchUser = async ()=> {
            const temp = await getUser(idx);
            setUser(temp);
        };
        fetchUser();
    },[idx]);

    if(!user) return <div> error... ! </div>

    return(
        <div>
            <ul className="m-5 border-2 p-4">
                <li><h2 className="text-2xl text-bold">{user.name}</h2></li>
                <li><b>username: {user.username}</b></li>
                <li><b>Email: {user.email}</b></li>
                <li><b>WebSite: {user.website}</b></li>
                <li><b>Phone: {user.phone}</b></li>
                <li><b>company: {user.company.name}</b></li>
                <li>{user.address.city}</li>
            </ul>
        </div>
    )
};