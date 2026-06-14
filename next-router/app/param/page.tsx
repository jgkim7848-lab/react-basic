"use client"

import { useSearchParams } from "next/navigation"

export default function Param3(){

    const search = useSearchParams();
    const idName = search.get('idName') ?? '없음';
    const age = search.get('age') ?? '없음';

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1 className="text-3xl text-bold mb-5">param page</h1>

            idName : {idName} / age: {age}

            {/* 학생명 띄우기 */}

            </main>
        </div>
    )
}