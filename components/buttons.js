import Link from "next/link";
import { Button } from "@/components/ui/button";
export function NavBtn({ label, url }) {
  return (
    <Button variant="link">
      <Link
        className=" text-slate-500 text-xl  py-1 rounded hover:text-green-700 focus-within:text-green-700 outline-none font-black"
        href={url}
      >
        {label}
      </Link>
    </Button>
  );
}
