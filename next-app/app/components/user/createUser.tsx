type CreateUserProps = {
    username:string;
    email:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCreate: () => void;
}

export default function CreateUser({username, email, onChange, onCreate}: CreateUserProps){
    return(
        <div>
            <input className="border border-gray-300 p-2 mr-2"
                type="text" 
                name="username" 
                value={username}
                placeholder="username..."
                onChange={onChange}
            />
            <input className="border border-gray-300 p-2 mr-2"
                type="text" 
                name="email" 
                value={email}
                placeholder="email..."
                onChange={onChange}
            />
            <button className="px-2 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-700"
                onClick={onCreate}
            >create</button>
        </div>
    )
}