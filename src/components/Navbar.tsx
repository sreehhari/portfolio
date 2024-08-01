'use client';

import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { isAscii } from "buffer";
import { Contact } from "@/app/contact/page";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <Link href='/contact'>
        <MenuItem setActive={setActive} active={active} item="Contact me">
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Projects">
        <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem 
              title="Gigaweather"
              href="https://gigaweather.vercel.app"
              src='/gigaweather.png'
              description="Its a weather app"

            
            />
            <ProductItem
            title="Austrian Painter"
            href="https://austrian-painter.vercel.app"
            src="/austrianpainter.png"
            description="just for fun project to learn the basics of webDev"
          />
          <ProductItem
          title="Portfolio"
          href="/"
          src="/thiswebsite.png"
          description="developer portfolio made in nextJS"
          
          
          ></ProductItem>

        </div>
        </MenuItem>

      </Menu>


    </div>
  )
}

export default Navbar
