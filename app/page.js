import Image from "next/image";
import { CardMd } from "@/components/cards.js";

export default function Home() {
  return (
    <>
      <main className="flex flex-col  py-12 relative">
        {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
        </div> */}

        <div className="h-[50vh] w-full relative mb-12">
          <Image
            // className="rounded-xl"
            src="/asset/insert-photo-here.jpg"
            alt="photo halaman depan"
            fill // required
          />
        </div>

        <div className="flex flex-row justify-around">
          <div className="place-content-center">
            <CardMd />
          </div>

          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-10">
              <div>
                <CardMd />
              </div>
              <div>
                <CardMd />
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="h-8"></div>
              <div>
                <CardMd />
              </div>
              <div>
                <CardMd />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
