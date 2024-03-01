import { Inter } from "next/font/google";
import CarForm from "@/lib/CarForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center align-center">
      <h1>Create a Car</h1>
      <CarForm/>
    </div>
    
  );
}
