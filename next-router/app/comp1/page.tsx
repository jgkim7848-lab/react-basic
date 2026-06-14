import Student from "../components/student";
import { student, students } from "../data/data";

export default function Comp1(){

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1 className="text-3xl text-bold m-5">comp1 page</h1>

            {/* data 폴더에 있는 student 객체 출력 */}
            {student.name}({student.age}) / {student.address} ({student.phone})

            {/* data 폴더에 있는 students 객체를 map으로 출력  Student 컴포넌트 생성해서 출력 */}
            {/* 배열로 존재 */}
            {
                // students.map(s => <Student std={s} key={s.id} />)
                // id 값이 없을 경우 index로 대체
                students.map((s, i) => <Student std={s} key={i} />)
            }

            </main>
        </div>
    )
}