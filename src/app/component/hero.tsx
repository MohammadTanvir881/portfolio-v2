"use client";

import Link from "next/link";
import {
  ArrowDown,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export default function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Physics Student",
        "Tech Enthusiast",
        "Problem Solver",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      id="home"
      className="container mx-auto px-6 py-20 md:py-32 gap-10 flex flex-col  md:flex-row items-center"
    >
      <div className="md:w-1/2 mb-12 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="gradient-text">Tanvir Rashid</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-6 text-slate-400">
          <span ref={typedRef} />
        </h2>
        <p className="text-lg mb-8 text-slate-400 max-w-lg">
          I build exceptional digital experiences with modern web technologies.
          Currently studying Physics at JUST while crafting beautiful,
          functional applications.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <Button
            asChild
            className="px-6 py-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            <Link href="#work">View My Work</Link>
          </Button>
          <Button
            className="px-6 py-6 border border-slate-600 bg-transparent rounded-lg font-semibold hover:bg-slate-800 transition-all"
            asChild
          >
            <Link
              href="https://drive.google.com/file/d/1NHTO-XGy358-889HXaIyn32htJa6mfXh/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-2"
            >
              <ArrowDown className="w-5 h-5" />
              View CV
            </Link>
          </Button>
        </div>
        <div className="flex space-x-6">
          <Link
            href="https://github.com/MohammadTanvir881"
            target="_blank"
            className="text-xl hover:text-blue-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tanvirrashid881/"
            target="_blank"
            className="text-xl hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.facebook.com/mohammad.tanvir.114"
            target="_blank"
            className="text-xl hover:text-blue-400 transition-colors"
          >
            <Facebook className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:tanvirrashid881@gmail.com"
            target="_blank"
            className="text-xl hover:text-blue-400 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-xl">
            <img
              src="https://i.ibb.co.com/4RZDX2Nj/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-slate-800 px-4 py-2 rounded-lg shadow-lg border border-slate-700">
            <span className="text-sm font-mono">MERN Stack</span>
          </div>
          <div className="absolute -top-5 -left-5 bg-slate-800 px-4 py-2 rounded-lg shadow-lg border border-slate-700">
            <span className="text-sm font-mono">Physics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
