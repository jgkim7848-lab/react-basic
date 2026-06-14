// "use client" => page.tsx에서 관리
import { useState } from "react"

// props로 count의 기본값을 받기
// 만약 값이 안들어온다면 { num=0 } 
// => undefined일 때만 기본값으로 처리, null은 그대로 적용

type CounterProps = {
    // ? optional : 없을수도 있음.
    num?: number;
}

export default function Counter2({ num=0 }:CounterProps){
    // useState
    // typeScript
    // ?? 널 병합 연산자 => num가 null이면 초기값에서 처리 불가능. 
    const [count, setCount] = useState<number>(num ?? 0);

    return(
        <div className="m-3">
            <h1 className="text-2xl m-2 text-center">{count}</h1>
            <button className="px-4 py-2 mr-3 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={()=>{setCount(count+1)}}
            >+</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={()=>{setCount(count-1)}}
            >-</button>
        </div>
    )
}