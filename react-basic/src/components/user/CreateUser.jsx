//CreateUser.jsx
function CreateUser({username, email, onChange, onCreate}){
    return(
        <div>
            <input 
                type="text" 
                name="username" 
                value={username}
                placeholder="username..." 
                onChange={onChange}
            />
            <input 
                type="text" 
                name="email" 
                value={email}
                placeholder="email..." 
                onChange={onChange}
            />
            <button onClick={onCreate}>추가</button>
        </div>
    )   
}

export default CreateUser;