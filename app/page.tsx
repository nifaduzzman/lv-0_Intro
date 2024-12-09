import Image from "next/image";

export default function Home() {
  return (
   <main className="flex text-6xl tracking-widest font-bold font-sans min-h-screen flex-col items-center justify-center p-24 text-white bg-slate-900 ">
    <div className="group relative">
      <div className="opacity-100 duration-300 ">
        N<span className="text-amber-500 italic">i</span>fad Uzzaman<div  className="bg-amber-500 h-2 w-2 rounded-sm inline-block"> </div>
      </div>
      <span className="text-xs  absolute -top-6 left-0 rounded-sm text-amber-500 py-1 px-3 tracking-normal  bg-slate-700  delay-200 duration-200 opacity-0 group-hover:opacity-100 ">Developer of this webpage.</span>
    </div>

   </main>
  );
}
