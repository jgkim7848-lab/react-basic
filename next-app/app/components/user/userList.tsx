//userList.tsx
type UserType = {
    id: number,
    username: string,
    email: string
}

type UserProps = {
    user : UserType
}

function User({user}:UserProps){

    const { id, username, email } = user;
    return(
        <div>
            <div> {id}. {username} / {email} </div>
        </div>
    )
}

export default function UserList(){

    const users = [
        {
            id: 1,
            username: 'hong',
            email: 'publicHong@naver.com'
        },
        {
            id: 2,
            username: 'kim',
            email: 'kim@naver.com'
        },
        {
            id: 3,
            username: 'lee',
            email: 'leeTest@gmail.com'
        },
    ];


    return(
        <div>
            {
                users.map((user) =>(
                    <User user={user} key={user.id} />
                ))
            }
        </div>
    )
}





//ai는 이렇게 해줬음.
// // app/components/UserList.tsx

// // 1. User 타입 정의 (파일 상단에 작성)
// type User = {
//   id: number
//   username: string
//   email: string
// }

// // 2. UserItem 컴포넌트 분리
// type UserItemProps = {
//   user: User
// }

// function UserItem({ user }: UserItemProps) {
//   return (
//     <div>
//       {user.id}. {user.username} / {user.email}
//     </div>
//   )
// }

// // 3. UserList 컴포넌트
// export default function UserList() {
//   const users: User[] = [
//     { id: 1, username: "hong", email: "publicHong@naver.com" },
//     { id: 2, username: "kim", email: "kim@naver.com" },
//     { id: 3, username: "lee", email: "leeTest@gmail.com" },
//   ]

//   return (
//     <div>
//       {users.map((user) => (
//         <UserItem key={user.id} user={user} />
//       ))}
//     </div>
//   )
// }








// export default function UserList() {
//     const users = [
//         {
//             id: 1,
//             username: 'hong',
//             email: 'publicHong@naver.com'
//         },
//         {
//             id: 2,
//             username: 'kim',
//             email: 'kim@naver.com'
//         },
//         {
//             id: 3,
//             username: 'lee',
//             email: 'leeTest@gmail.com'
//         },
//     ];
//     return (
//         <div>{
//             users.map((user) => (
//                 <div>{user.id}. {user.username} / {user.email}</div>
//             ))


//         }

//         </div>
//     )
// }