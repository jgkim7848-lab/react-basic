const User = ({user, onRemove, onToggle}) =>{
    return(
        <div>
            <b 
            style={{color: user.active ? 'red' : 'black'}}
            onClick={()=>{onToggle(user.id)}}>
                {user.id}. 
                {user.username}
            </b> 
            <span>
                ({user.email}) 
            </span>
            <button onClick={()=>{onRemove(user.id)}}>x</button>
        </div>
    )
}

export default User;