"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="See Projects">
            <div className="flex flex-col space-y-4">
              <HoveredLink href="/courses"></HoveredLink>
              <HoveredLink href="/courses">Frontend</HoveredLink>
              <HoveredLink href="/courses">Backend</HoveredLink>
              <HoveredLink href="/courses">Full-Stack</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href="/contactus">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
