//db에서 데이터를 조회하여 화면으로 보내주는 역할을 해내야함. 아ㅣㅣㅣㅏ이아ㅣㅏㅣ
//모든건 화면. 즉 사용자 중심.
//화면이 값을 받아와야하면 get    
//화면에서 데이터를 만들어서 db에 등록하는건 post
// 화면에서 수정 put   화면에서 삭제는 delete
//
//
//

import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

//   /api/board 경로로 오는 get요청을 처리하는 메서드.

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