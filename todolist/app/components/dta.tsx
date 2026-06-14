

// app>components>dta.tsx
type TodoType = {
  id: number;
  work: string;
  date: string;
  active: boolean;
};

type TodoProps = {
  todo: TodoType;
};

function Todo({ todo }: TodoProps) {
  const { id, work, date, active } = todo;
  return (
    <div>
      {work} / {date} / {active ? "진행중" : "완료"} 
    </div>
  );
}

// 처음부터 표기되고 있기로 하고 만든 데이터
export default function Dta() {
  const todos: TodoType[] = [
    { id: 1, work: "오버워치", date: "2026-06-10", active: true },
    { id: 2, work: "유희왕 마스터듀얼", date: "2026-06-11", active: false },
    { id: 3, work: "치킨", date: "2026-06-12", active: true },
    { id: 4, work: "웹소설", date: "2026-06-13", active: false },
    { id: 5, work: "복습하기", date: "2026-06-14", active: true },
    { id: 6, work: "친구놈만나기", date: "2026-06-15", active: false },
  ];

  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))} 
    </div>
  );
}
