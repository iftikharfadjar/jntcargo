import Image from "next/image";
import { CardDef } from "@/components/cards.js";
import { MyAccordion } from "@/components/accordion.js";

export default function Page() {
    return (
      <>
      
      <ServicePhoto />

      <div>
        <h1>Memberikan layanan yang profesional, akurat dan efisien.</h1>
        <p>Rasakan pengalaman layanan terbaik yang tidak pernah anda temukan sebelumnya. Personel terlatih kami mengerti bahwa kebutuhan anda sangat dinamis. Mulai dari layanan antar jemput untuk kebutuhan pribadi hingga komitmen regular jangka panjang B2B, JNT Cargo Malang berkomitmen untuk menyuguhkan layanan premium dengan harga selalu PROMO!</p>
      </div>

      <CardService />

      <div className="flex  w-full justify-around">
        <MyAccordion />
        <CardDef />
      </div>

      <div>
        <h1>
        Ongkos Kirim
        </h1>
        <p>Kirim paket besar dari Malang ke Surabaya? Ongkir mulai dari IDR 27.000 <br/>
          (Harga ongkir ditampilkan dalam ribu rupiah)</p>
        <CardPrice />
      </div>

      <CardDef />

      </>
    )
}

const ServicePhoto = () => {
  return (
    <div className="h-[50vh] w-full relative mb-12 ">
    <Image
      // className="rounded-xl"
      src="/asset/insert-photo-here.jpg"
      alt="photo halaman depan"
      fill // required
    />
  </div>
  )
}

const CardService = () => {
  return (
    <div className="grid grid-cols-3">
    <CardDef />
    <CardDef />
    <CardDef />
    <CardDef />
    <CardDef />
    <CardDef />
  </div>
  )
}

const CardPrice = () => {
  return (
    <div className="flex justify-around">
    <CardDef />
    <CardDef />
    <CardDef />
  </div>
  )
}