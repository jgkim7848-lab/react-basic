import { todoType } from "../type/todotype"
import TodoItem from "./todoitem";

type todoPrintProps = {
    todos: todoType[];
    onRemove: (id: number) => void
    onToggle: (id: number) => void
}

export default function TodoPrint({ todos, onRemove, onToggle }: todoPrintProps) {
    return (
        <div className="space-y-3 bg-neutral-900 p-6 border border-gray-700 shadow-lg">
            <ul className="divide-y divide-gray-700">
                {todos.map(item => (
                    <TodoItem
                        item={item}
                        key={item.id}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                ))}
            </ul>
        </div>

    )
}