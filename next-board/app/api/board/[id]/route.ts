
// type gettypeProps = {
//     params: {id:string}
// }
// GET : id 에 해당하는 board 리턴 

import db from "@/app/lib/db";
import { boardType } from "@/app/type/boardType";
import { NextRequest, NextResponse } from "next/server";

// GET(request, param)
// _:NextRequest : (_) "사용하지 않는 변수" 명시적으로 표시
// _  또는 _req로 사용
export async function GET(_:NextRequest, {params}:{params : {id:string}}) {
    try {
        // select 조회의 리턴값은 반드시 배열
        // 리턴값이 하나라면 배열의 0번지 값을 빼서 사용
        const {id} = await params;
        const [rows] = await db.query('SELECT * FROM board WHERE id=?',[id]);
        // 게시글이 없을때 리턴
        if((rows as boardType[]).length === 0) {
            return NextResponse.json({message:'게시글 없음'},{status: 404})
        }

        return NextResponse.json((rows as boardType[])[0]);
        
    } catch (e:any) {
        console.log(e);
        return NextResponse.json({error:e.message},{status: 500})
    }
}

export async function PUT(req: NextRequest, {params}:{params: {id:string}}) {
    try {
        const {title, contents} = await req.json();
        const {id} = await params;

        await db.query('UPDATE board SET title=?, contents=? WHERE id=?',[title, contents, id]);

        return NextResponse.json({message:'게시글 수정 성공!!'},{status:200});
        
    } catch (e:any) {
        console.log(e);
        return NextResponse.json({error:e.message},{status: 500});
    }
    
}