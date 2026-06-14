import { todoType } from "../type/todotype"

type todoItemProps = {
    item : todoType;
    onRemove: (id: number) => void
    onToggle: (id: number) => void
}
export default function TodoItem({item, onRemove, onToggle} : todoItemProps){
    

    return(
        <div >
            <div className="flex items-center justify-between m-5">
                <input type="checkbox"  checked={item.completed} onChange={()=> onToggle(item.id)} />
                <div className={`w-70 ${item.completed ? "line-through text-gray-400" : ""}`}>
                    {item.todo}
                </div>
                <div>{item.date}</div>
                <button className="bg-pink-400 text-white px-2 rounded"
                    onClick={()=> onRemove(item.id)}
                >x</button>
                {/* <button className="bg-blue-400 text-white px-2 rounded"
                    onClick={}
                >✔</button> */}
            </div>
             
        </div>
    )

}