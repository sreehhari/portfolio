"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Hey, I'm Sreehari and I am a computer science and engineering student passionate about software development, particularly in the areas of Linux, open-source software, and web development. Hate to put in any more buzzwords.. so yea this is my Website and feel free to look around. Also follow me on gitHub ;)
`;

export default function TextGenerateEffectDemo() {
  return (
    <>
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="max-w-screen-sm">
        <TextGenerateEffect words={words} />
        </div>



      </div>
    
    
    
    </>



  )
  
  
  
}
