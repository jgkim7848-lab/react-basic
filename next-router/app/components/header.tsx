import Link from "next/link";

export default function Header(){
    // link 연결
    // <Link href="/path">text</Link>
    return(
        <div className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <div><Link href={"/"}> Next.js </Link></div>
                <div className="space-x-5">
                    <Link href={"/comp1"}>Comp1</Link>
                    <Link href={"/comp2"}>Comp2</Link>
                    <Link href={"/comp3"}>Comp3</Link>
                </div>
            </nav>
        </div>
    )
}