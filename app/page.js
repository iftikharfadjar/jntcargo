import Image from "next/image";
import { CardLg, CardMd } from "@/components/cards.js";

export default function Home() {
  return (
    <>
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
        </div> */}

      <MainPhoto />

      <CardHome />

      <div>
        <CardLg desc="ONGKIR TERMURAH" title="Ongkos Kirim"></CardLg>
      </div>
    </>
  );
}

const MainPhoto = () => {
  return (
    <div className="h-[50vh] w-full relative mb-12">
      <Image
        // className="rounded-xl"
        src="/asset/jtcargo-main-pict-01.jpg"
        alt="photo halaman depan"
        fill // required
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center  drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,255.8)]">
        <h1 className="text-7xl font-black ">
          Paket Besar?
          <br />
          Cari J&T Cargo!
        </h1>
        <p className="font-semibold">
          Pengalaman logistik terbaik dengan jangkauan layanan terluas di
          nusantara. Rasakan dan ceritakan!
        </p>
      </div>
    </div>
  );
};

const CardHome = () => {
  return (
    <div className="flex h-screen w-full bg-slate-50 flex-row justify-around">
      <div className="w-1/2 flex justify-center items-center">
        <CardLg
          title="Profesional, Akurat dan Efisien"
          desc="LAYANAN JNT CARGO KRAMAT JATI"
        >
          Ongkos kirim yang ekonomis dan prosedur operasional ber standar sangat
          tinggi. Pengiriman tepat waktu antar kota via darat dan udara, proses
          operasional yang efisien dan profesional, hotline eksklusif, tracking
          setiap saat, dan pengiriman dengan SLA terjamin. Kami memahami
          disiplin anda terhadap waktu, prioritas transit dan delivery,
          prioritas pengiriman, pengantaran barang hingga pintu ke pintu, tanpa
          ragu.
        </CardLg>
      </div>

      <div className="flex grow bg-slate-200 justify-around outline">
        <div className="flex flex-col justify-around">
          <div>
            <CardMd title="Pengiriman Cepat">
              Pengiriman melalui darat dan udara.
            </CardMd>
          </div>
          <div>
            <CardMd title="Kargo Besar">
              Barang dengan berat minimal 50 kg hingga 500 kg.
            </CardMd>
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div>
            <CardMd title="Kargo Kecil dan besar">
              Barang dengan berat minimal 11 kg.
            </CardMd>
          </div>
          <div>
            <CardMd title="Layanan Extra">
              Asuransi barang, kemasan aman, layanan warehouse, perwakilan
              penerimaan paket, pengembalian tanda terima, layanan gabungan
              warehouse dan distribusi, lengkap.
            </CardMd>
          </div>
        </div>
      </div>
    </div>
  );
};

// import Image from "next/image";
// import { CardLg, CardMd } from "@/components/cards.js";

// export default function Home() {
//   return (
//     <>
//       <main className="flex flex-col  gap-10 relative">
//         {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//           <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
//         </div> */}

//         <div className="h-[50vh] w-full relative mb-12">
//           <Image
//             // className="rounded-xl"
//             src="/asset/jtcargo-main-pict-01.jpg"
//             alt="photo halaman depan"
//             fill // required
//           />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center  drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,255.8)]">
//             <h1 className="text-7xl font-black ">
//               Paket Besar?
//               <br />
//               Cari J&T Cargo!
//             </h1>
//             <p className="font-semibold">
//               Pengalaman logistik terbaik dengan jangkauan layanan terluas di
//               nusantara. Rasakan dan ceritakan!
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-row justify-around">
//           <div className="place-content-center">
//             <CardLg
//               title="Profesional, Akurat dan Efisien"
//               desc="LAYANAN JNT CARGO KRAMAT JATI"
//             >
//               Ongkos kirim yang ekonomis dan prosedur operasional ber standar
//               sangat tinggi. Pengiriman tepat waktu antar kota via darat dan
//               udara, proses operasional yang efisien dan profesional, hotline
//               eksklusif, tracking setiap saat, dan pengiriman dengan SLA
//               terjamin. Kami memahami disiplin anda terhadap waktu, prioritas
//               transit dan delivery, prioritas pengiriman, pengantaran barang
//               hingga pintu ke pintu, tanpa ragu.
//             </CardLg>
//           </div>

//           <div className="flex flex-row gap-10">
//             <div className="flex flex-col gap-10">
//               <div>
//                 <CardMd title="Pengiriman Cepat">
//                   Pengiriman melalui darat dan udara.
//                 </CardMd>
//               </div>
//               <div>
//                 <CardMd title="Kargo Besar">
//                   Barang dengan berat minimal 50 kg hingga 500 kg.
//                 </CardMd>
//               </div>
//             </div>
//             <div className="flex flex-col gap-10">
//               <div className="h-8"></div>
//               <div>
//                 <CardMd title="Kargo Kecil dan besar">
//                   Barang dengan berat minimal 11 kg.
//                 </CardMd>
//               </div>
//               <div>
//                 <CardMd title="Layanan Extra">
//                   Asuransi barang, kemasan aman, layanan warehouse, perwakilan
//                   penerimaan paket, pengembalian tanda terima, layanan gabungan
//                   warehouse dan distribusi, lengkap.
//                 </CardMd>
//               </div>
//             </div>
//           </div>
//         </div>

//       </main>
//     </>
//   );
// }

// const cardsHomePage = () => {};
