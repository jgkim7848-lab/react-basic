"use client" // 상위폴더에서 관리
import Image from "next/image";
import Hello from "./components/Hello";
import Start from "./components/start";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import HelloProps from "./components/HelloProps";
import InputSample from "./components/inputSample";
import InputSample2 from "./components/inputSample2";
import UserList from "./components/user/userList";
//userList 로 작성시 오류. UserList 대문자로 시작할것.
import UserList2 from "./components/user/userList2";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold my-5">Hello Next.js World~!!</h1>

      <Hello />
      <Start />
      <Counter />
      <Counter2 num={100} />

      <HelloProps name={"홍길동"} age={20} />
      <hr />
      <InputSample />
      <InputSample2 />
      <UserList />
      <UserList2 />


      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}