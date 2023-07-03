import Link from "next/link";
export function NavBtn({label, url}) {
  return (
    <Link
      className=" text-slate-500 text-xl px-2 py-1 rounded hover:text-green-700 focus-within:text-green-700 outline-none font-black"
      href={url}
    >
      {label}
    </Link>
  );
}
