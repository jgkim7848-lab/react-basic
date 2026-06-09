import User from "./User";

function UserList1({users, onRemove, onToggle}){
    // props 객체로 묶어서 옴. (값이 하나든, 여러개든...)
    // props.users  => 제일 잘 안씀
    // const {users} = props;  => 가끔 사용
    // 받을 때 이미 풀어서 받기 => 가장 많이 사용

    return(
        <div>
            {
                users.map(user => (
                    <User 
                        user={user} 
                        key={user.id} 
                        onRemove={onRemove} 
                        onToggle={onToggle} 
                    />
                ))
            }
        </div>
    )
}

export default UserList1;
// import User from "./User";



// //받을때 이미 풀어서 받기를 많이 쓴다. 중괄호.
// function UserList1({ users, onRemove, onToggle }) {
//     return (
//         <div> 
//             {
//                 users.map(user => (
//                     // <h3>{user.username} / {user.email}</h3>
//                     <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
//                 ))
//             }
//         </div>
//     )
// }

// export default UserList1;