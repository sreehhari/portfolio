"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { MarkGithubIcon } from "@primer/octicons-react";
export default function gitbutton() {
  return (
    <div className="fixed top-14 right-10 z-50 ">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <MarkGithubIcon size={16} />
        <span>GitHub</span>
      </HoverBorderGradient>
    </div>
  );
}


