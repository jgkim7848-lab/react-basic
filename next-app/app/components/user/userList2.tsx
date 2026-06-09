//userList2.tsx
import { useMemo, useRef, useState } from "react"
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


    // 토글 설정
    const onToggle = (id: number)=>{
        // 클릭한 유저의 id 값의 active를 자신의 값과 반대로 설정
        setUsers(
            users.map(user => user.id === id ? {...user, active: !user.active} : user)
        )
    }

    // 활성 사용자수 설정 : active가 true인 인원수
    const countActiveUser = ()=>{
        return users.filter(user => user.active).length;
    }



    const activeCount = useMemo(()=>countActiveUser(),[users]);
//users에 변화가 없으면 useMEmo에 저장되있는 값을 그대로 사용
//전체 화면에 변화가 있을때마다 불러오면 손해라서??? 맞나 이거. 
// 대충 이런 뉘앙스였
//뭐 누를때마다 새로고침되면 변수의 값이 매번 날아가서 push pop이 안되고
//데이터를 가둬두는게 힘든거고 그래서 states를 쓰는거고???
//그래서 states memo 이런걸 만든거임 (???)

    // 전체 인원수 설정
    const countUser = () => {
        return users.length;
    }

    const count = useMemo(()=> countUser(), [users]);


    return(
        <div>
            <hr className="m-5" />
            {/* user를 등록할 input => CreateUser 컴포넌트 생성 */}
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />

            {/* 출력에 필요한 컴포넌트 UserList1 생성 */}
            <UserList1 users={users} onRemove={onRemove} onToggle={onToggle} />

            <div>활성인원수 : {activeCount} / {count}명</div>  
        </div>
    )
}