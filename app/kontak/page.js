import Image from "next/image";
import ProfileForm from "@/presenter/formByWa.js";

export default function Page() {
    return (
      <>
      <div className="flex flex-col">
        <div className="h-[50vh] w-full relative mb-12 ">
          <Image
            // className="rounded-xl"
            src="/asset/insert-photo-here.jpg"
            alt="photo halaman depan"
            fill // required
          />
          <div class="absolute w-3/4 h-1/2 bg-slate-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70">
              <h1 className="text-5xl text-white ">JNT Cargo Kramat Jati</h1>
            </div>
        </div>
        <div>
          <h1>Tinggalkan kami pesan</h1>
          <p1>Salah satu dari tim kami akan segera menghubungi, karena kami begitu responsif. Jika ingin lebih instant lagi, klik tombol WHATSAPP di atas.</p1>

        </div>

        <div>
          <ProfileForm/>
        </div>
      </div>
      </>
    )
}