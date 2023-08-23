import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function CardDef(props) {
  return (
      <div
         className={`${props.w} ${props.h} block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{props.children}.</p>
      </div>
  );
}

export function CardWithPhotoTop(props) {
    return (
        <div
            className={`${props.w} ${props.h} block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow`}>
                <Image
                    // className="rounded-xl"
                    src={props.src}
                    alt="photo halaman depan"
                    width={props.wp}
                    height={props.hp}
                />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{props.children}.</p>
        </div>
    );
}

export function CardWithDesc(props) {
  return (
      <div
          className={`${props.w} ${props.h}  block max-w-full p-6 bg-white border border-gray-100 rounded-lg shadow`}>
          <p className="mb-20 font-bold text-gray-700 dark:text-gray-400">{props.desc}.</p>
          <h5 className="mb-10 text-7xl font-bold tracking-tight text-gray-900">{props.title}</h5>
          <p className="font-normal text-gray-700">{props.children}.</p>
      </div>
  );
}
