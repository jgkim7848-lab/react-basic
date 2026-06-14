"use client"
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-5xl flex-col py-15 px-16 bg-white dark:bg-black sm:items-start">
          {/* <h1 className="text-3xl text-bold">
            Next Board
          </h1> */}
          <img src="/vision-board-featured-image.png" alt="" />
      </main>
    </div>
  );
}
