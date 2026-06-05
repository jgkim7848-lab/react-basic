// { }<< 이걸로 배열을 묶어서 보낸다는건
//이 배열을 분리시켜서 보내는거. 
//분리하지않으면 하나의 뭉탱이 즉 객체로 가기때문에 사용이 불가능해서????
 
const User = ({ user }) => {
    return (
        <div>
            <b>{user.id}. {user.username}</b> <span>({user.email})</span>
        </div>
    )
}


function UserList() {
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
    return (
        <div>
            {/* <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div> */}
            {/* 반복문을 통한 값 출력 => map */}
            {
                users.map(user => (
                    // <h3>{user.username} / {user.email}</h3>
                    <User user={user} key={user.id} />
                ))
            }
            {/* 만약 key로 사용할 값이 없다면... array index 사용 */}
            {
                users.map((user, index) => (
                    <User user={user} key={index} />
                ))
            }


        </div>
    )
}

export default UserList;