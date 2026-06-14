//UserList2.jsx
import { useMemo, useRef, useState } from "react";
import UserList1 from "./UserList1";
import CreateUser from "./CreateUser";

// users 객체에 [{},{},{}] (등록, 삭제, 리스트보기) 하기위한 컴포넌트
function UserList2(){

    // users의 객체를 등록, 수정, 삭제 하기 위해서 useState()로 관리
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

    // 컴포넌트 안에서 관리할 수 있는 변수 생성
    // useRef() : useRef()로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 재렌더링 되지 않음.
    const nextId = useRef(4);

    //CreateUser 값을 관리할 useState() 생성
    const [inputs, setInputs] = useState({
        username:'',
        email:''
    });

    // 구조분해
    const {username, email} = inputs;

    // onChange() 설정
    const onChange = (e)=>{
        const {name, value} = e.target; // name=>key / value=>value
        setInputs({
            ...inputs,  // 기존 inputs 복사
            [name] : value
        })
    }

    // onCreate() 설정 => 추가버튼
    // users에 추가할 객체를 생성 => users 배열에 추가
    const onCreate = ()=>{
        // 이미 onChange 에서 input에서 값을 변경해놓음.
        const user = {
            id: nextId.current,  // 현재 객체의 값
            username: username,  // key:value의 이름이 같으면 생략가능. username: username => username
            email: email,
            active: false
        }

        // react에서는 push /pop은 안씀. => 원본 데이터가 변경되는 값은 쓰지 않음.
        // setUsers([...users, user]); // 원래 users의 값 복사, user
        setUsers([...users].concat(user));  // 성능 개선이 됨. (내부적으로 더 효율적)

        // nextId 값을 1 증가
        nextId.current += 1;

        // 추가 후 inputs 객체를 초기화
        setInputs({
            username:'',
            email:''
        });
    }

    // onRemove() 설정 => 삭제
    const onRemove = (id)=>{
        console.log(id);
        // id : 파라미터의 값으로 가져온 값 (User => user.id)
        // 삭제 : user.id  != users.id 일치하지 않는 데이터만 추출
        // filter : 조건에 맞는 값만 추출하여 배열로 리턴
        setUsers(users.filter(user => user.id !== id));
    }

    // onToggle() 설정
    // user 값을 클릭하면 active == true / false로 토글
    // 클릭한 유저의 active를 자신의 값과 반대로 설정
    const onToggle = (id)=>{
        // 현재 클릭한 id의 active 값을 자신의 값과 반대로 설정
        setUsers(
            users.map(user=> user.id === id ? {...user, active: !user.active}: user)
        )
    }

    // 활성 사용자 수 : active: true 인 사용자 수 출력
    const countActiveUser = ()=>{
        return users.filter(user => user.active).length;
    }

    // const count = countActiveUser();
    
    // 활성 사용자수를 세는 건, users의 값이 변화가 있을 때만 세어야 하는데...
    // 계속 input 값이 바뀌거나, 컴포넌트가 재 렌더링 되거나.. 불필요하게 호출되어서
    // 자원이 낭비 됨.
    // useMemo 첫번째 파라미터로 함수를 넣어주고(어떻게 연산할지 정의하는 함수),
    // 두번째 파라미터는 deps 배열을 넣어주면 되는데...
    // 이 배열에 넣은 내용이 바뀌면, 등록한 함수를 호출해서 값은 연산해주고,
    // 만약 해당 배열의 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 됩니다.
    const count = useMemo(()=> countActiveUser(), [users]);


    return(
        <div>
            {/* 등록 컴포넌트 => CreateUser 
                => 해당 컴포넌트의 input 객체가 여기 있다고 생각하고 작업.
                => 만들어진 변수값을 props 전달
            */}
            <CreateUser 
                username={username} 
                email={email} 
                onChange={onChange} 
                onCreate={onCreate}
            />   

            {/* UserList 컴포넌트 => UserList1 users={users} */}
            <UserList1 users={users} onRemove={onRemove} onToggle={onToggle} />

            <div> 활성 사용자 수 : {count}명 </div>

        </div>
    )
}

export default UserList2;
// import { useRef, useState } from "react";
// import UserList1 from "./UserList1";
// import CreateUser from "./CreateUser";


// function UserList2() {

//     const [users, setUsers] = useState([
//         {
//             id: 1,
//             username: 'hong',
//             email: 'publicHong@naver.com',
//             active: true
//         },
//         {
//             id: 2,
//             username: 'kim',
//             email: 'kim@naver.com',
//             active: false
//         },
//         {
//             id: 3,
//             username: 'lee',
//             email: 'leeTest@gmail.com',
//             active: false
//         },
//     ]);

//     const nextId = useRef(4);

//     const [inputs, setInputs] = useState({
//         username: '',
//         email: ''
//     });

//     const {username, email} = inputs;

//     //onchange설정
//     const onChange = (e) => {
//         const { name, value } = e.target;
//         setInputs({
//             ...inputs, //기존 input의 복사.
//             [name]: value
//         })
//     }



//     //onCreate  추가버튼이 해야되는 일
//     const onCreate = () =>{
//         //users에 추가할 객체를 생성한뒤 users 배열에 추가해주기
//         //이미 onChange에서 input ㄱ에서 값을 변경해놓음
//         const user = {
//             id: nextId.current,
//             username: username,
//             email: email,   //이렇게 key와 value의 이름값이 같으면 생략이 가능함. 그러니까 email:email 할 필요 없이 그냥 email만 적어놔도 됨.
//             active: false
//         }
//         //push, pop은 react에선 쓰지않는다.
//         // = 원본 데이터가 변경되는 값은 쓰지않는다는것
//         setUsers([...users].concat(user));
//         //원래 users값 복사 밑 user


//         nextId.current += 1;


//         setInputs({
//             username:'',
//             email:''
//         })

//     }



//     const onRemove = (id)=>{
//         console.log(id);

//         //삭제: user.id == users.id가 같은걸 추출해서 그거 빼고 나머지만 가져올거임.
//         //다 복사하는게 아니라 하나 빼고 나머질 가져오는 느낌적인 느낌.
//         //일치하지않는걸 가져오면 된다?? 아니 이게 뭐람.
//         //filter

//         setUsers(users.filter(user => user.id !== id));



//     }



//     //onToggle
//     //user값 ㅋ클릭하면 active에 대한 값이 true 혹은 false로 토글되게 하고싶도르.
//     const onToggle = (id) =>{
//         setUsers(
//             users.map(user=> user.id === id ? {...user, active: !user.active} : user)
//         )
//     }




//     const countActiveUser = () => {
//         return users.filter(user => user.active).length;
//     }

//     const count = useMemo(()=> countActiveUser(), [users]);
// //활성 사용자수를 세는건 usrs의 값이 변화가 있을때만 해야되는데
// //계속 input 값이 바뀌거나 컴포넌트가 재렌더링이 되거나 불필요하게 호출되서
// //자원이 낭비되게됨.
// //useMemo - 내가 실제 필요로 할때만 첫번째 파라미터로 함수를 넣어주고
// //어떻게 연산할지 정의하는 함수이다.


//     return (
//         <div>
//             {/* 등록 컴포넌트 => CreateUser 
//                 => 해당 컴포넌트의 input 객체가 여기 있다고 생각하고 작업하기.
                
            
//             */}
//             <CreateUser
//                 username={username}
//                 email={email}
//                 onChange={onChange}
//                 onCreate={onCreate}
//             />

//             {/* UserList 컴포넌트 => UserList1 users={users} */}
//             <UserList1 users={users} onRemove={onRemove} onToggle={onToggle} />
//                 <div>활성 사용자 수 : {count}명</div>

//         </div>
//     )
// }

// export default UserList2;