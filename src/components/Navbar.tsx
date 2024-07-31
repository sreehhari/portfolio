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
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/web-dev">Weather App</HoveredLink>
          <HoveredLink href="/web-dev">Texticles</HoveredLink>
          <HoveredLink href="/web-dev">Arch Dot files</HoveredLink>


        </div>
        </MenuItem>

      </Menu>


    </div>
  )
}

export default Navbar
