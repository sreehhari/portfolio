import React from 'react'
import { FlipWords } from "@/components/ui/flip-words";
function Hero() {
  const words = ["chai", "tea", "お茶", "hugs"];
  return (
    <>
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        had
        <FlipWords words={words} /> <br />
        
        <div className='text-red-700'>yet?</div>
      </div>
    </div>
    
    
    </>
  )
}

export default Hero