import { useRef, useState } from "react";
import UserList1 from "./UserList1";
import CreateUser from "./CreateUser";


function UserList2() {

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'hong',
            email: 'publicHong@naver.com',
            active: true
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

    const nextId = useRef(4);

    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    const {username, email} = inputs;

    //onchange설정
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs, //기존 input의 복사.
            [name]: value
        })
    }



    //onCreate  추가버튼이 해야되는 일
    const onCreate = () =>{
        //users에 추가할 객체를 생성한뒤 users 배열에 추가해주기
        //이미 onChange에서 input ㄱ에서 값을 변경해놓음
        const user = {
            id: nextId.current,
            username: username,
            email: email,   //이렇게 key와 value의 이름값이 같으면 생략이 가능함. 그러니까 email:email 할 필요 없이 그냥 email만 적어놔도 됨.
            active: false
        }
        //push, pop은 react에선 쓰지않는다.
        // = 원본 데이터가 변경되는 값은 쓰지않는다는것
        setUsers([...users].concat(user));
        //원래 users값 복사 밑 user


        nextId.current += 1;


        setInputs({
            username:'',
            email:''
        })

    }



    const onRemove = (id)=>{
        console.log(id);

        //삭제: user.id == users.id가 같은걸 추출해서 그거 빼고 나머지만 가져올거임.
        //다 복사하는게 아니라 하나 빼고 나머질 가져오는 느낌적인 느낌.
        //일치하지않는걸 가져오면 된다?? 아니 이게 뭐람.
        //filter

        setUsers(users.filter(user => user.id !== id));



    }



    //onToggle
    //user값 ㅋ클릭하면 active에 대한 값이 true 혹은 false로 토글되게 하고싶도르.
    const onToggle = (id) =>{
        setUsers(
            users.map(user=> user.id === id ? {...user, active: !user.active} : user)
        )
    }




    const countActiveUser = () => {
        return users.filter(user => user.active).length;
    }

    const count = useMemo(()=> countActiveUser(), [users]);
//활성 사용자수를 세는건 usrs의 값이 변화가 있을때만 해야되는데
//계속 input 값이 바뀌거나 컴포넌트가 재렌더링이 되거나 불필요하게 호출되서
//자원이 낭비되게됨.
//useMemo - 내가 실제 필요로 할때만 첫번째 파라미터로 함수를 넣어주고
//어떻게 연산할지 정의하는 함수이다.


    return (
        <div>
            {/* 등록 컴포넌트 => CreateUser 
                => 해당 컴포넌트의 input 객체가 여기 있다고 생각하고 작업하기.
                
            
            */}
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />

            {/* UserList 컴포넌트 => UserList1 users={users} */}
            <UserList1 users={users} onRemove={onRemove} onToggle={onToggle} />
                <div>활성 사용자 수 : {count}명</div>

        </div>
    )
}

export default UserList2;