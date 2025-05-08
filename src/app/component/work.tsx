"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FaChalkboardTeacher, FaBook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function WorkSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Tutors Connect",
      description:
        "Tutors Connect is a web platform designed to bridge the gap between students and qualified tutors. It allows users to browse and filter tutors based on subjects, location, availability, and ratings. Built with the MERN stack (MongoDB, Express.js, React, Node.js), the platform includes user authentication, and a responsive design to ensure a smooth experience across devices",
      gradient: "from-blue-500 to-indigo-600",
      icon: FaChalkboardTeacher,
      tags: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
      link: "https://tution-media.vercel.app/",
    },
    {
      title: "Book Shop",
      description:
        "Book Haven is a modern online bookstore that allows users to browse, search, and purchase books across various genres. Built with the MERN stack, it features a responsive design, dynamic filtering, user authentication, and a secure checkout system. Admins can manage inventory and orders through a dedicated dashboard.",
      gradient: "from-purple-500 to-pink-600",
      icon: FaBook,
      tags: ["TypeScript", "Node.js", "React.js", "MongoDB"],
      link: "https://bookshop-client-v2.vercel.app/",
    },
  ];

  return (
    <section
      id="work"
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="container mx-auto px-6 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="rounded-xl overflow-hidden border-slate-800 text-gray-100 bg-slate-900/70 backdrop-blur-sm"
          >
            <div
              className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}
            >
              <project.icon className="text-6xl text-white opacity-30" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-800 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <Link href={project.link} target="_blank">
                  <Button
                    variant="link"
                    className="text-blue-400 hover:text-blue-300 px-0"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </Card>
        ))}
      </div>
      {/* <div className="text-center mt-12">
        <Button
          variant="outline"
          className="border-slate-600 hover:bg-slate-800"
        >
          View All Projects <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div> */}
    </section>
  );
}
