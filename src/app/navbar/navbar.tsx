"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Sobre",
    path: "#sobre",
  },
  {
    title: "Projetos",
    path: "#projetos",
  },
  {
    title: "Contato",
    path: "#contato",
  },
];

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    document.getElementById("navbarscroll")?.classList.add("-translate-y-full");
  } else {
    document
      .getElementById("navbarscroll")
      ?.classList.remove("-translate-y-full");
  }

  lastScrollTop = currentScrollTop;
});

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      id="navbarscroll"
      className="fixed bg-background w-full flex top-0 items-center justify-between px-6 py-2 md:px-28 lg:py-4 lg:px-40 transition-transform transform"
    >
      <Link href={"/"}>
        <h1 className="font-semibold text-xl">ARIEL</h1>
      </Link>

      <Sheet>
        <SheetTrigger className="mobile-menu" asChild>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full p-2 md:hidden"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="text-lg font-semibold">Menu</SheetHeader>
          <div className="mt-8 flex flex-col gap-3">
            <Link href={"/"}>
              <Button
                variant="outline"
                className="active lg:text-xl w-full justify-center rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300"
              >
                Home
              </Button>
            </Link>
            <Link href={"#sobre"}>
              <Button
                variant="outline"
                className="active lg:text-xl w-full justify-center rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300"
              >
                Sobre
              </Button>
            </Link>

            <Link href="#projetos">
              <Button
                variant="outline"
                className="w-full justify-center rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300"
              >
                Projetos
              </Button>
            </Link>

            <Link href="#contato">
              <Button
                variant="outline"
                className="w-full justify-center rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300"
              >
                Contato
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <div className="menu hidden md:block md:w-auto" id="navbar">
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
