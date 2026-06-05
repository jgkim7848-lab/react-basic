import User from "./User";



//받을때 이미 풀어서 받기를 많이 쓴다. 중괄호.
function UserList1({ users, onRemove, onToggle }) {
    return (
        <div> 
            {
                users.map(user => (
                    // <h3>{user.username} / {user.email}</h3>
                    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
                ))
            }
        </div>
    )
}

export default UserList1;