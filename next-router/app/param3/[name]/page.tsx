"use client"

import { useParams } from "next/navigation"

export default function Param4(){
    const params = useParams();

    const name = decodeURIComponent(params.name as string);

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl text-bold mb-5">student name print page</h1>

                    params : {name}

            </main>
        </div>
    )
}