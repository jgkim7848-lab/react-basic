"use client"
import { useSearchParams } from "next/navigation"

export default function Param2(){

    // query string  => searchParams() (한글깨짐 없음)
    const search = useSearchParams();
    console.log(search);
    // get 함수 사용
    // ? 쿼리스트링 값이 없는 경우.
    const id = search.get('id') ?? '없음';
    const nick = search.get('nick') ?? '없음';

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1 className="text-3xl text-bold mb-5">param2 page</h1>

                id: {id}  / nick: {nick}

            </main>
        </div>
    )
}