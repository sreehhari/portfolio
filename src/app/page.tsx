import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "./hero/page";
import Intro from "@/components/Intro";
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Intro />
    </>
  );
}
