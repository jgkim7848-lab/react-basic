"use client"
import { boardType } from "@/app/type/boardType";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BoardModify(){

    // useParams() : [id] 파라미터 가져오기
    // 기존 내용을 불러온 뒤 수정할 부분만 수정 후 => 저장
    
        const params = useParams(); // param의 변수명은 경로의 동적폴더 명 => [id]
        const idx = params.id;
    
        // idx 비동기로 서버에 idx에 해당하는 값을 찾아달라고 요청 => GET
        // 받아온 자료를 useEffect() 랜더링 할 때 => 출력
    
        // 받아온 자료 저장할 변수 useState() 생성
        const [board, setBoard ] = useState<boardType | null>(null);

        // 수정할 객체 생성 title, content  => /api/board/[id] method PUT (POST와 같음)
        const [form , setForm] = useState({
            title:'',
            contents:''
        });

        const {title, contents} = form;
    
        useEffect(()=>{
            const getFetchBoard = async ()=>{
                try {
                    const response = await fetch(`/api/board/${idx}`);
                    if(!response.ok) throw new Error('게시글을 불러오지 못했습니다.');
                    
                    const data = await response.json();
                    setBoard(data);

                    // 수정할 form 객체에 셋팅
                    setForm(data);
    
                } catch (error) {
                    console.log(error);
                    setBoard(null);
                }
            }
            getFetchBoard();
        }, []);

        const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
            setForm({
                ...form,
                [e.target.name] : e.target.value
            })
        }

        // 수정 데이터 DB 등록 요청
        const onSubmit = async ()=>{
            const response = await fetch(`/api/board/${idx}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(form)
            });

            // 수정 후 이동 경로
            location.href=`/board/${idx}`;
        }
        



    
        if(!board) return <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">Not found!!!</div>
    

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-5xl flex-col py-15 px-16 bg-white dark:bg-black sm:items-start">
                {/* 수정에 적합하게 title => input / content => textarea */}
                <h1 className="text-2xl text-bold mb-5">{idx}번 게시글</h1>

                <div className="w-4/5 my-10 bg-white shadow-lg rounded-lg border berder-bray-200">
                    <div className="p-15">
                        <input className="text-xl w-full font-semibold mb-4 border border-gray-300 p-2 rounded outline-none" 
                            name="title"
                            value={title}
                            onChange={onChange}
                        />
                        <p className="text-xs m-5"
                        >{board.reg_date.substring(0, board.reg_date.lastIndexOf("T"))} / {board.reg_date.substring(board.reg_date.indexOf('T')+1, board.reg_date.lastIndexOf('.'))}</p>
                        <textarea className="w-full outline-none text-gray-800 text-base border border-gray-300 p-2 rounded"
                            cols={30} 
                            rows={10} 
                            name="contents"
                            value={contents} 
                            onChange={onChange}
                        ></textarea>
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
                        onClick={onSubmit}
                    >
                        modify
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-700"
                    >
                        <Link href={`/board/${board.id}`}>reset</Link>
                    </button>

                </div>
            </main>
        </div>
    )
}