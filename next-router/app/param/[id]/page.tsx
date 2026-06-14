"use client"
import { useParams } from "next/navigation"

export default function Param(){

    // /param/abcd
    // params => useParams()
    // 한글깨짐 현상 발생 => 한글깨짐 방지처리 decodeURIComponent
    const params = useParams();
    console.log(params.id);

    const id = decodeURIComponent(params.id as string | '');


    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1 className="text-3xl text-bold">param page / [id] </h1>
            <div className="text-3xl text-bold my-5">
                params : {id}
            </div>
            </main>
        </div>
    )
}