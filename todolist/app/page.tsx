"use client"
import TodoList from "./components/todoList";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-neutral-950 font-sans text-gray-100">
      <main className="flex flex-col w-full max-w-3xl py-20 px-12 bg-neutral-900 border border-gray-800 shadow-xl">
        <h1 className="text-4xl font-extrabold text-center mb-12 tracking-wide text-gray-200">
          TODOLIST
        </h1>
        <TodoList />
      </main>
    </div>

  );
}
