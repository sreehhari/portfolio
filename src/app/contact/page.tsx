"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Contact() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact me vro
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          {`I like memes, motorcycles and buddies who i can have chai with.. and maybe you're that buddy.. 
          so yea tell me what's wrong or what's not wrong..`}
        </p>
        <input 
          type="text"
          placeholder="yap here"
          className=" p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
