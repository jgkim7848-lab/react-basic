"use client"

import { useState } from "react";

export default function Comp2(){
    // 1. count  + -  => 0 ~ 10   useState()
    const [count, setCount] = useState<number>(0);
    const onIncre = ()=>{
        setCount(n => (n<10)? n+1 : n);
    }
    const onDecre = ()=>{
        setCount(n => (n>0) ? n-1 : n);
    }

    // 2. input onChange  => useState()
    // input 글자 출력 : {text}
    const [text, setText ] = useState<string>('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value);
    }

    // 3. input onChange  => input type="color"
    // <h2> 글자입력... </h2>
    const [color, setColor] = useState<string>('');
    const style = {
        color : 'black',
        backgroundColor :color
    }


    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1 className="text-3xl text-bold">comp2 page</h1>

            {/* counter */}
            <div className="my-5">
                <h1 className="text-3xl text-bold">{count}</h1>
                <button className="bg-blue-500 text-white mr-3 px-4 py-2 rounded"
                    onClick={onIncre}
                >+</button>
                <button className="bg-blue-500 text-white mr-3 px-4 py-2 rounded"
                    onClick={onDecre}
                >-</button>
            </div>

            {/* input */}
            <div className="my-5">
                <input className="p-2 border border-gray-300 text-bold"
                    type="text" name="text" value={text} onChange={onChange} />
                <div>input 글자 : {text} </div>
            </div>

            {/* color */}
            <div className="my-5">
                <h2 style={style}>BackgroundColor</h2>
                <input type="color"  onChange={(e:any)=> setColor(e.target.value)} />
            </div>
            </main>
        </div>
    )
}