import Link from "next/link";

export default function Header(){
    return(
        <div className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <div><Link href={"/"}> NEXT-BOARD </Link></div>
                <div className="space-x-5">
                    <Link href={"/board/write"}>글쓰기</Link>
                    <Link href={"/board"}>게시글보기</Link>
                </div>
            </nav>
        </div>
    )
}