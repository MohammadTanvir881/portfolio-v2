"use client";

import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold gradient-text">
        Tanvir Rashid
      </Link>

      <div className="hidden md:flex space-x-8">
        <Link href="#home" className="hover-underline-animation">
          Home
        </Link>
        <Link href="#work" className="hover-underline-animation">
          Work
        </Link>
        <Link href="#about" className="hover-underline-animation">
          About
        </Link>
        <Link href="#contact" className="hover-underline-animation">
          Contact
        </Link>
      </div>

      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-slate-900 border-slate-800">
          <div className="flex flex-col space-y-4 mt-8">
            <Link href="#home" className="text-lg">
              <Button
                variant={"ghost"}
                className="text-white  hover:bg-gray-800"
              >
                {" "}
                Home
              </Button>
            </Link>
            <Link href="#work" className="text-lg">
              <Button
                variant={"ghost"}
                className="text-white  hover:bg-gray-800"
              >
                {" "}
                Work
              </Button>
            </Link>
            <Link href="#about" className="text-lg">
              <Button
                variant={"ghost"}
                className="text-white hover:bg-gray-800"
              >
                {" "}
                About
              </Button>
            </Link>
            <Link href="#contact" className="text-lg">
              <Button
                variant={"ghost"}
                className="text-white  hover:bg-gray-800"
              >
                {" "}
                Contact
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
