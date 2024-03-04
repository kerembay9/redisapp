import { Inter } from "next/font/google";
import CarForm from "@/lib/CarForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center align-center gap-10 bg-slate-700 text-black">
      <h1>Create a Car</h1>
        <div className="w-screen h-screen flex flex-col justify-center align-center gap-10">
        <CarForm/>
        </div>
    </div>
    
  );
}
