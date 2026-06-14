import { useRef, useState } from "react"
import { todoType } from "../type/todotype";
import { todoList } from "../data/tododata";
import TodoForm from "./todoForm";
import TodoPrint from "./todoPrint";

export default function TodoList(){
    const [todos, setTodos] = useState<todoType[]>(todoList);

    const nextId = useRef<number>(3);

    const onCreate = (todo:string, date:string)=>{
        const newTodo: todoType = {
            id: nextId.current,
            todo: todo,
            date: date,
            completed: false
        }

        setTodos([...todos].concat(newTodo));
        nextId.current += 1;
    }
    
    const onRemove = (id: number)=>{
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const onToggle = (id: number)=>{
        setTodos(
            todos.map(todo => todo.id === id ? 
                {...todo, completed: !todo.completed} : todo)
        )
    }
    console.log(todos);

    return(
        <div>
            
            <TodoForm onCreate={onCreate} />
            <TodoPrint 
                todos={todos} 
                onRemove={onRemove} 
                onToggle={onToggle} 
            />
        </div>
    )
}