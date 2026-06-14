// //users.tsx
import { useEffect, useState } from "react";
import { userType } from "../type/type";
import axios from "axios";
import UserOne from "./userOne";

export default function Users(){

    // https://jsonplaceholder.typicode.com/users
    // 경로에서 데이터를 비동기로 가져오기
    // 컴포넌트가 랜더링 되는 과정 (생명주기 : lifeCycle)
    // 처음 컴포넌트가 나타날때 (마운트 됐을 때) / 컴포넌트가 사라질 때(언마운트)
    // 업데이트 될 때 (특정  props의 변화)
    // 생성 -> 업데이트 -> 제거
    // useEffect 훅(HOOK) -> 부수 효과를 실행 (랜더링 된 후) api 호출, 타이머
    // 의존성 배열 => 값이 변경되면 Effect 실행

    // users를 저장할 변수를 useState로 생성
    const [users, setUsers] = useState<userType[] | null>(null);
    // error 상태의 변수를 저장할 useState 생성
    const [error, setError] = useState<string | null>(null);
    // loading 상태의 변수를 저장할 useState 생성
    const [loading, setLoading] = useState<boolean>(false);

    // userOne에서 출력할 id 설정 useState 생성
    const [selectId, setSelectId] = useState<number | null>(null)

    // users 저장할 데이터를 가져오기 => useEffect 사용

    // useEffect에서 실행할 함수 생성
     const fetchUser = async ()=>{
        try {
            // 요청이 시작되기 전 error, loading, users 값을 세팅
            setError(null);
            setUsers(null);
            setLoading(true); // 로딩중...

            // 데이터 가져오기 <userType[]> body에서 가져오는 데이터 타입 정의
            // response.data => body의 값이 들어있음.
            const response = await axios.get<userType[]>("https://jsonplaceholder.typicode.com/users");
            console.log(response);
            setUsers(response.data);
            
        } catch (err: any) {
            // error 변수에 error 객체를 저장
            // any타입 : 모든 타입을 허용하는 타입
            // typeScript의 검사 기능을 끄는 것과 비슷
            setError(err);
        }
        // 로딩 끝
        setLoading(false);
     }

    // callbackFunction : 실행 => 랜더링 될때마다 실행
    // 의존성 배열 : 처음 랜더링 될때 한번만 실행 , [] 빈배열 추가
    // 의존성 배열에 값을 추가하면 => 해당 값이 변경될 때 실행
    useEffect(()=> {
        fetchUser();
    },[]);

    if(loading) return <div>loading...</div>
    if(error) return <div>error...</div>
    if(!users) return <div>null</div>

    return(
        <div>
            <h1 className="text-2xl text-bold my-5">user List axios</h1>
            <ul>
                {
                    users.map(user=> (
                        <li className="p-2 cursor-pointer"
                            key={user.id}
                            onClick={()=> setSelectId(user.id)}
                            style={{backgroundColor: selectId === user.id ? 'lightskyblue' :'transparent'}}
                        >
                            {user.username} ({user.name} / {user.phone})
                            <hr className="border border-gray-300" />
                        </li>
                    ))
                }
            </ul>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={fetchUser}>불러오기</button>
            </div>

            {/* user를 선택하면 해당 유저의 다른 정보를 component로 출력 */}
            {/* 선택한 유저의 id 값을 props로 전달 => UserOne 컴포넌트에서 axios */}
            {/* selectId 없으면 출력 X */}
            {/* 조건부 랜더링  && */}
            {/* 조건 && (....) : 조건이 null 또는 false가 아니라면 (...) 이 랜더링 */}

            {
                selectId !== null && (
                    <div>
                        <UserOne idx={selectId} />
                        <button className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={()=> setSelectId(null)}
                        >닫기</button>
                    </div>
                )
            }

        </div>
    )
}
// import { useEffect, useState } from "react";
// import { userType } from "../type/type";
// import axios from "axios";
// import UserOne from "./userOne";

// export default function Users() {
//     //데이터를 비동기로 가져오기 할거임.
//     //https://jsonplaceholder.typicode.com/users
//     //컴포넌트가 랜더링 되는 과정    생명주기
//     //처음 컴포넌트가 나타날때 (마운트됬을때) / 컴포넌트가 사라질때   언마운트
//     //업데이트 될때 (특정 props의 변화)
//     //생명주기?   생성 업데이트 제거의 순서
//     //useEffect 훅 (hook)이 관리함?   이거의 목적은 부수 효과의 실행.   랜더링 된 후에 실행됨.
//     //의존성 배열을 가지고있으며 값이 변경되면 Effect를 실행함.
//     //의존성

//     //users를 저장할 변수를 useState로 생성
//     const [users, setUsers] = useState<userType[] | null>(null);

//     //error의 상태의 변수를 저장할 useState
//     const [error, setError] = useState<string | null>(null);

//     //loading 상태의 변수를 저장할 useState
//     const [loading, setLoading] = useState<boolean>(false);

//     //userOne에서 출력할 id 설정 useState 설정
//     const [selectId, setSelectId] = useState<number | null>(null);


//     //usrs에 저장할 데이터 가져오기 > useEffect 사용

//     //useEffect에서 실행할 함수 생성
//    const fetchUser = async ()=>{
//         try {
//             // 요청이 시작되기 전 error, loading, users 값을 세팅
//             setError(null);
//             setUsers(null);
//             setLoading(true); // 로딩중...

//             // 데이터 가져오기 <userType[]> body에서 가져오는 데이터 타입 정의
//             // response.data => body의 값이 들어있음.
//             const response = await axios.get<userType[]>("https://jsonplaceholder.typicode.com/users");
//             console.log(response);
//             setUsers(response.data);
            
//         } catch (err: any) {
//             // error 변수에 error 객체를 저장
//             // any타입 : 모든 타입을 허용하는 타입
//             // typeScript의 검사 기능을 끄는 것과 비슷
//             setError(err);
//         }
//         // 로딩 끝
//         setLoading(false);
//      }


//     //callbackFunction   > 렌더링 될때마다 실행함.
//     useEffect(() => {
//         fetchUser();
//     }, []);
//     //빈 배열을 추가한다는건 처음에 랜더링 될때 딱 한번만 실행.
//     //의존성 배열.

//     if (loading) return <div>loading...</div>
//     if (error) return <div>error...</div>
//     if (!users) return <div>null</div>

//     return(
//         <div>
//             <h1 className="text-2xl text-bold my-5">user List axios</h1>
//             <ul>
//                 {
//                     users.map(user=> (
//                         <li className="p-2 cursor-pointer"
//                             key={user.id}
//                             onClick={()=> setSelectId(user.id)}
//                             style={{backgroundColor: selectId === user.id ? 'lightskyblue' :'transparent'}}
//                         >
//                             {user.username} ({user.name} / {user.phone})
//                             <hr className="border border-gray-300" />
//                         </li>
//                     ))
//                 }
//             </ul>
//             <div>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded"
//                     onClick={fetchUser}>불러오기</button>
//             </div>

//             {/* user를 선택하면 해당 유저의 다른 정보를 component로 출력 */}
//             {/* 선택한 유저의 id 값을 props로 전달 => UserOne 컴포넌트에서 axios */}
//             {/* selectId 없으면 출력 X */}
//             {/* 조건부 랜더링  && */}
//             {/* 조건 && (....) : 조건이 null 또는 false가 아니라면 (...) 이 랜더링 */}

//             {
//                 selectId !== null && (
//                     <div>
//                         <UserOne idx={selectId} />
//                         <button className="bg-red-500 text-white px-4 py-2 rounded"
//                         onClick={()=>setSelectId(null)}>닫기</button>
//                     </div>
//                 )
//             }

//         </div>
//     )

// }