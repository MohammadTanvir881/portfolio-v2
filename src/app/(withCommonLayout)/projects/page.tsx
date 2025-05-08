"use client";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Tutor Connect - Online Tutor Marketplace",
    description:
      "A full-featured MERN-based platform connecting students with qualified tutors for personalized learning.",
    image: "https://i.ibb.co/DD6Lk8zF/Screenshot-from-2025-05-01-00-51-41.png",
    tags: ["Next.js", "MongoDB", "SSLCOMMERZ", "MERN"],
    links: {
      details: "/projects/1",
      code: "https://github.com/MohammadTanvir881/TUTOR_LINK_FRONTEND",
      demo: "https://tution-media.vercel.app/",
    },
  },

  {
    id: 2,
    title: "Online Bookshop Platform",
    description:
      "A full-featured MERN stack web application for browsing and purchasing books online.",
    image: "https://i.ibb.co/GQWp6bWT/Screenshot-from-2025-05-01-01-22-07.png",
    tags: ["React", "MongoDB", "E-commerce", "Node.js"],
    links: {
      details: "/projects/2",
      code: "https://github.com/MohammadTanvir881/book-shop-client",
      demo: "https://bookshop-client-v2.vercel.app/",
    },
  },
  {
    id: 3,
    title: "Alphabet Clash Game",
    description:
      "A word puzzle game where players need to match letters in the alphabet under a time limit.",
    image: "https://i.ibb.co/60SRyyJ8/Screenshot-from-2025-05-01-01-40-51.png",
    tags: ["HTML", "CSS", "JavaScript", "Game Development"],
    links: {
      details: "#",
      code: "https://github.com/MohammadTanvir881/kdb-games",
      demo: "https://mohammadtanvir881.github.io/kdb-games/",
    },
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-6 py-20 bg-slate-900 text-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Passionate MERN stack developer skilled in building dynamic,
            scalable web applications using MongoDB, Express, React, and Node.js
            to deliver high-quality user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-400/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link
                  href={`/projects/${project.id}`} // or your preferred URL structure
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
                >
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                {project.links.code && (
                  <a
                    href={project.links.code}
                    className="inline-flex items-center text-slate-400 hover:text-slate-300 transition"
                  >
                    <Github className="mr-1 h-4 w-4" /> Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* <div className="text-center mt-12">
          <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 text-slate-300 hover:text-white transition">
            Load More Projects
          </button>
        </div> */}
      </div>
    </section>
  );
}
