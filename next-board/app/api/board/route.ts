// GET / POST / PUT / DELETE (화면이 대상)

import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

// GET : 화면으로 데이터를 가져오기 (화면에서 데이터 요청)
// POST : 화면에서 데이터 보내기 (화면에서 데이터 전송)
// PUT : 화면에서 만든 데이터 보내기 (DB 입장에서 수정)
// DELETE : 화면에서 삭제 요청 (DB에서 삭제)

// DB에서 데이터를 조회하여 화면으로 보내주는 역할 

// 1. 전체 게시글 조회
// /api/board 경로로 오는 GET 요청을 처리
export async function GET() {
    try {
        const [rows] = await db.query('SELECT * FROM board ORDER BY id DESC'); 
        return NextResponse.json(rows);
    } catch (e: any) {
        console.log(e);
        return NextResponse.json({error:e.message},{status: 500})
    }
}

// 2. 게시글 등록 POST
//  /api/board 경로로 오는 POST 요청을 처리
export async function POST(req: NextRequest) {
    try {
        const {title, writer, contents} = await req.json();
        const [result] = await db.query(
            'INSERT INTO board(title, writer, contents) VALUES(?,?,?)',
            [title, writer, contents]
        );
        console.log(result);
        return NextResponse.json({message:'게시글 등록 성공!!', result}, {status: 200})
        
    } catch (e : any) {
        return NextResponse.json({error:e.message},{status: 500})
    }
}

