import { useState } from "react"

type todoFormType = {
    onCreate: (
        todo: string,
        date: string
    ) => void;

}
export default function TodoForm({ onCreate }: todoFormType) {

    const [todoInputs, setTodos] = useState({
        todo: '',
        date: ''
    });

    const { todo, date } = todoInputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodos({
            ...todoInputs,
            [e.target.name]: e.target.value
        })
        console.log(todoInputs)
    }

    const onSubmit = () => {
        if (!todo.trim()) return;
        onCreate(todo, date);
        setTodos({
            todo: '',
            date: ''
        })
    }

    return (
        <div className="flex gap-4 mb-8 p-6 border border-gray-700 bg-neutral-900 shadow-lg">
            <input
                className="flex-1 border border-gray-600 bg-neutral-950 text-gray-100 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                type="text"
                name="todo"
                value={todo}
                placeholder="할 일을 입력하세요"
                onChange={onChange}
            />
            <input
                className="border border-gray-600 bg-neutral-950 text-gray-100 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                type="date"
                name="date"
                value={date}
                onChange={onChange}
            />
            <button
                className="bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-2 font-semibold shadow-md"
                onClick={onSubmit}
            >
                ADD
            </button>
        </div>

    )
}