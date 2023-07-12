import Image from "next/image";
import { CardMd } from "@/components/cards.js";

export default function Home() {
  return (
    <>
      <main className="flex flex-col  py-12 relative">
        {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
        </div> */}

       <MainPhoto  />

        <CardHome />
          
      </main>
    </>
  );
}


const MainPhoto = () => {
  return (
    <div className="h-[50vh] w-full relative mb-12">
    <Image
      // className="rounded-xl"
      src="/asset/insert-photo-here.jpg"
      alt="photo halaman depan"
      fill // required
    />
  </div>
  )
}

const CardHome = () => {
  return (
  <div className="flex h-screen w-full bg-slate-50 flex-row justify-around">
    <div className="w-1/2 flex justify-center items-center">
      <CardMd />
    </div>

    <div className="flex grow bg-slate-200 justify-around outline">
      <div className="flex flex-col justify-around">
        <div>
          <CardMd />
        </div>
        <div>
          <CardMd />
        </div>
      </div>
      <div className="flex flex-col justify-around">
        <div>
          <CardMd />
        </div>
        <div>
          <CardMd />
        </div>
      </div>
    </div>
  </div>
  )
}