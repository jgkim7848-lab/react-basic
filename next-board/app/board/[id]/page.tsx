"use client"

import { boardType } from "@/app/type/boardType";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function BoardDetail(){

    // /board/[id] => id 에 해당하는 리스트의 객체를 찾아오기
    // sample data 라면...  findIndex를 사용하여 id가 같은 배열의 번지를 리턴
    // boardList[index]

    const params = useParams(); // param의 변수명은 경로의 동적폴더 명 => [id]
    const idx = params.id;

    // idx 비동기로 서버에 idx에 해당하는 값을 찾아달라고 요청 => GET
    // 받아온 자료를 useEffect() 랜더링 할 때 => 출력

    // 받아온 자료 저장할 변수 useState() 생성
    const [board, setBoard ] = useState<boardType | null>(null);

    useEffect(()=>{
        const getFetchBoard = async ()=>{
            try {
                const response = await fetch(`/api/board/${idx}`);
                if(!response.ok) throw new Error('게시글을 불러오지 못했습니다.');
                
                const data = await response.json();
                setBoard(data);

            } catch (error) {
                console.log(error);
                setBoard(null);
            }
        }
        getFetchBoard();
    }, []);

    if(!board) return <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">Not found!!!</div>

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-5xl flex-col py-15 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-2xl text-bold mb-5">{idx}번 게시글</h1>

                <div className="w-4/5 my-10 bg-white shadow-lg rounded-lg border berder-bray-200">
                    <div className="p-15">
                        <h2 className="text-xl font-semibold mb-4">{board.id}. {board.title}</h2>
                        <p className="text-xs m-5"
                        >{board.reg_date.substring(0, board.reg_date.lastIndexOf("T"))} / {board.reg_date.substring(board.reg_date.indexOf('T')+1, board.reg_date.lastIndexOf('.'))}</p>
                        <textarea cols={30} rows={10} value={board.contents} readOnly className="w-full outline-none text-gray-800 text-base m-5"></textarea>
                    </div>
                    <div className="p-4 border-t text-sm text-gray-600">
                        create on {board.reg_date.substring(0, board.reg_date.lastIndexOf('T'))} by {board.writer}
                    </div>
                </div>
                <div className="text-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-700"
                    >
                        <Link href={"/board"}>list</Link>
                    </button>
                    <button className="bg-amber-500 text-white px-4 py-2 rounded m-2 hover:bg-amber-700"
                    >
                        <Link href={`/board/${board.id}/modify`}>modify</Link>
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded m-2 hover:bg-red-700"
                    >delete</button>

                </div>

            </main>
        </div>
    )
}