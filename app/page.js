import Image from "next/image";
import {CardWithDesc, CardDef, CardWithPhotoTop} from "@/components/cards.js";

export default function Home() {
  return (
    <>
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
        </div> */}

      <MainPhoto />

      <div>
        <CardWithDesc desc="ONGKIR TERMURAH" title="Ongkos Kirim"></CardWithDesc>
      </div>

      <CardHome />


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
    <div className="mt-36 relative flex h-[80vh] w-full flex-row justify-around">
      <div className="w-1/2 flex justify-center items-center">
        <div className={"flex flex-row w-4/6 h-4/6 "}>
        <CardWithDesc
          w={"w-full"}
          h={"h-full"}
          title="Profesional, Akurat dan Efisien"
          desc="LAYANAN JNT CARGO KRAMAT JATI"
        >
          Ongkos kirim yang ekonomis dan prosedur operasional ber standar sangat
          tinggi. Pengiriman tepat waktu antar kota via darat dan udara, proses
          operasional yang efisien dan profesional, hotline eksklusif, tracking
          setiap saat, dan pengiriman dengan SLA terjamin.
          <br/>
          <br/>
          Kami memahami
          disiplin anda terhadap waktu, prioritas transit dan delivery,
          prioritas pengiriman, pengantaran barang hingga pintu ke pintu, tanpa
          ragu.
        </CardWithDesc>
        </div>
      </div>


      <div className="flex   justify-around ">
        <div className="flex  flex-col gap-20">
          <div className={"flex justify-center items-center h-[40%]"}>
            <CardWithPhotoTop src={"/asset/pengiriman-cepat.svg"} h="h-[90%]" w="w-[90%]" title="Pengiriman Cepat">
              Pengiriman melalui darat dan udara.
            </CardWithPhotoTop>
          </div>
          <div className={"flex justify-center items-center h-[40%] "}>
            <CardDef h="h-[90%]" w="w-[90%]"title="Kargo Besar">
              Barang dengan berat minimal 50 kg hingga 500 kg.
            </CardDef>
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className={"flex mt-20 flex-row justify-center items-center h-[40%] "}>
            <CardDef h="h-[90%]" w="w-[90%]"title="Kargo Kecil dan besar">
              Barang dengan berat minimal 11 kg.
            </CardDef>
          </div>
          <div className={"flex mt-20 justify-center items-center h-[40%]  "}>
            <CardDef h="h-[90%]" w="w-[90%]"  title="Layanan Extra">
              Asuransi barang, kemasan aman, layanan warehouse, perwakilan
              penerimaan paket, pengembalian tanda terima, layanan gabungan
              warehouse dan distribusi, lengkap.
            </CardDef>
          </div>
        </div>
      </div>
    </div>
  );
};

