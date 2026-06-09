import { useRef, useState } from "react"
import UserList1 from "./userList1";
import CreateUser from "./createUser";
import next from "next";

export default function UserList2(){
    // users의 변화를 주기 위해 (등록, 삭제, 수정) useState() 관리
    const [users, setUsers ] = useState([
        {
            id: 1,
            username: 'hong',
            email: 'publicHong@naver.com',
            active:true
        },
        {
            id: 2,
            username: 'kim',
            email: 'kim@naver.com',
            active: false
        },
        {
            id: 3,
            username: 'lee',
            email: 'leeTest@gmail.com',
            active: false
        },
    ]);

    // users 객체가 있는 위치에서 useState() 구성
    // user 객체를 생성 => users 추가

    // id 설정 
    const nextId = useRef(4); // user 값을 추가할 때 사용할 id

    // createUser 값을 관리 useState()
    const [inputs, setInputs] = useState({
        username:'',
        email:''
    });

    const {username, email} = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    // 등록을 위한 onCreate()
    const onCreate = ()=>{
        // onChange() 에서 입력받은 객체를 users 추가
        const user = {
            id: nextId.current,
            username : username,
            email: email,
            active: false
        }

        // 기존 users에 추가
        // push / pop 처럼 직접 객체에 영향을 주는 함수는 쓰지 않음. 
        setUsers([...users].concat(user));
        nextId.current += 1;

        // 추가 후 inputs 객체 초기화
        setInputs({
            username:'',
            email:''
        });
    }

    // 삭제 설정
    const onRemove = (id: number) =>{
        // users.id 값과 파라미터의 id이 일치하지 않는 요소만 추출하여 리턴
        // filter
        setUsers(users.filter(user => user.id !== id));
    }


    return(
        <div>
            <hr className="m-5" />
            {/* user를 등록할 input => CreateUser 컴포넌트 생성 */}
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />

            {/* 출력에 필요한 컴포넌트 UserList1 생성 */}
            <UserList1 users={users} onRemove={onRemove} />
        </div>
    )
}