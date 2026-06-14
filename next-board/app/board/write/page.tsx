"use client"
import { useState } from "react"

export default function Write(){

    // input, textarea 입력된 값을 객체로 생성
    // 비동기 => 서버 전송

    const [form, setForm] = useState({
        title:'',
        writer:'',
        contents:''
    });

    const {title, writer, contents} = form;

    const onChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    // 서버로 데이터 전송 (게시글 등록)
    const onSubmit = async () => {
        // title, writer, contents 값이 없으면 alert
        if(!title || !writer || !contents){
            alert('모든 항목을 입력해주세요.');
            return;
        }

        // 등록 => /api/board (POST)
        // fetch('url',config)
        // post config 정보를 만들어서 같이 전송 get을 제외한 method 작성
        // response (응답) => 서버에서 화면으로 보내는 객체
        // request (요청) => 화면이 서버로 보내는 객체
        const response = await fetch('/api/board', {
            method: 'POST',
            headers:{
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(form)
        });
        console.log(response);

        // 보낸다음에 가야하는 경로
        window.location.href = "/board";
    }

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-5xl flex-col py-15 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl text-bold mb-10">글쓰기 페이지</h1>
                <form 
                    className="flex flex-col space-y-4 mx-auto w-200 border 
                                border-gray-300 p-5 rounded">
                    <input className="p-2 border rounded"
                        type="text" 
                        name="title" 
                        value={title}
                        placeholder="title..."
                        onChange={onChange}
                    />
                    <input className="p-2 border rounded"
                        type="text" 
                        name="writer" 
                        value={writer}
                        placeholder="writer..."
                        onChange={onChange}
                    />
                    <textarea className="p-2 border rounded"
                        name="contents" 
                        value={contents}
                        cols={30} 
                        rows={10}
                        placeholder="contents..."
                        onChange={onChange}
                    ></textarea>
                    <div className="flex">
                        <button 
                            className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-700"
                            type="reset" 
                        >reset
                        </button>
                        <button 
                            className="bg-amber-500 text-white px-4 py-2 rounded m-2 hover:bg-amber-700"
                            type="button" 
                            onClick={onSubmit}
                        >create</button>
                    </div>
                </form>
            </main>
        </div>
    )
}