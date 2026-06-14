"use client"

import Link from "next/link"
import { useState } from "react";
import { students } from "../data/data";
import Student from "../components/student";

export default function Comp3(){

    // 컴포넌트에서 다른 컴포넌트로 이동 데이터를 전달하는 작업
    // html => html  / html => 서버 / 컴포넌트 => 컴포넌트 
    // 데이터 전달방식 2가지
    // 1. Path Variable  => /comp1/2/4  (https://n.news.naver.com/article/277/0005773767)
    // 2. Query String  => /comp1?id=1&page=3 (https://n.news.naver.com/article/417/0001146890?type=breakingnews)

    // path variable => params 객체로 접근 ([id] 동적폴더 사용)
    // query String => searchParams 객체로 접근 (?key=value&key=value)

    
    const id = '1234';

    // query String으로 param 으로 idName, age 전송
    // idName, age => input 
    const [inputs, setInputs] = useState({
        idName:'',
        age:''
    });

    const {idName, age} = inputs;

    const onChange= (e: any) =>{
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1 className="text-3xl text-bold mb-5">comp3 page</h1>

            <div className="flex flex-col items-center gap-3">
                {/* path variable 방식으로 param.tsx 컴포넌트 에 값을 전달 */}
                <Link href={`/param/${id}`}>path variable로 데이터 전달 </Link>

                {/* query string 방법으로 param2.tsx 전달 */}
                <Link href={`/param2?id=홍길동&nick=abcd`}>query String으로 데이터 전달</Link>
            </div>

            <div className="flex flex-col items-center gap-3">
                <input className="p-2 border border-gray-300 text-bold"
                    type="text" name="idName" value={idName} onChange={onChange} />
                <input className="p-2 border border-gray-300 text-bold"
                    type="text" name="age" value={age} onChange={onChange} />
                <Link href={`/param?idName=${idName}&age=${age}`}> 
                    <button className="bg-blue-500 text-white ml-3 px-4 py-2 rounded"
                    >전송</button>                
                </Link>
            </div>

            <div className="flex flex-col items-center gap-3">
                {/* students 데이터를 가져와서 출력 */}
                {/* students 데이터를 클릭하면 학생의 이름을 /param3/name 으로 전달*/}
                {/* 한 폴더안에 동적 폴더가 여러개면 error / 
                    한폴더(한경로)안에 page.tsx 여러개면 error */}
                    {
                        students.map(s => (
                            <Link href={`/param3/${s.name}`}> <Student std={s} key={s.id} /> </Link>
                        ))
                    }

            </div>
            </main>
        </div>
    )
}