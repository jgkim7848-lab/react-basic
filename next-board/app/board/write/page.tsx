"use client"
import Link from "next/link";
import { useState } from "react";





export default function Sample() {


    //input textarea ㄹ입력된 값을 객체로 생성
    //비동기   >>>    서버 전송.
    const [form, setForm] = useState({
        title: '',
        writer: '',
        contents: ''
    })
    const { title, writer, contents } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //서버로 데이터 전송 (게시글 등록)
    const onSubmit = async () => {
        //title, writer, contents  값이 없으면 안들어오고 alert나 띄우면 좋겠도르
        if (!title || !writer || !contents) {
            alert('모든 항목을 입력해주세요');
            return;
        }


        //등록  /api/board post
        //fetch  config
        //post  config   정보를 만들어서 같이 전송때림.
        //get을 제외한 method 작성함.
        //response 응답 - 서버에서 화면으로 보내는 객체
        //request 요청   화면이 서버로 보내는 객체
        const response = await fetch('/api/board', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        
        //보낸 다음에 가야하는 경로
        window.location.href = "/board";
    }
    
    console.log(form);

    




    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-5xl flex-col py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl font-bold mb-8">글쓰기 페이지....???</h1>
                <form className="flex flex-col space-y-4 w-[200px] mx-auto">
                    <input
                        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        name="title"
                        value={title}
                        placeholder="title..."
                        onChange={onChange}
                    />
                    <input
                        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        name="writer"
                        value={writer}
                        placeholder="subtitle..."
                        onChange={onChange}
                    />
                    <textarea
                        name="contents"
                        placeholder="내용을 입력하세요..."
                        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        cols={30}
                        value={contents}
                        onChange={onChange}
                        rows={10}

                    ></textarea>

                    <div className="flex justify-center space-x-4 mt-6">
                        <Link href="/">
                            <button
                                type="reset"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                            >
                                reset
                            </button>
                        </Link>
                        <Link href="/">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                onClick={onSubmit}
                            >
                                create
                            </button>
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    )
}
