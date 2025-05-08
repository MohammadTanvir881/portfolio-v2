// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  imageUrl: string;
  galleryImages?: string[];
  liveUrl?: string;
  githubUrl?: string;
  techStack: {
    name: string;
    color: string;
  }[];
  features: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  lessonsLearned: string[];
};

const projects: Project[] = [
  {
    id: 1,
    slug: "tutor-connect-platform",
    title: "Tutor Connect - Online Tutor Marketplace",
    description:
      "A full-featured MERN-based platform connecting students with qualified tutors for personalized learning.",
    longDescription: [
      "Tutor Connect is an EdTech marketplace that enables students to discover and book sessions with verified tutors based on subject, rating, and availability.",
      "The platform features a robust filtering system, live chat, secure payments, and detailed tutor profiles to ensure a smooth and reliable learning experience.",
      "This project was designed to address accessibility gaps in education by connecting learners with skilled educators regardless of location.",
    ],
    imageUrl:
      "https://i.ibb.co/DD6Lk8zF/Screenshot-from-2025-05-01-00-51-41.png",

    galleryImages: [
      "https://i.ibb.co/Hf2bpjZW/Screenshot-from-2025-05-01-00-52-07.png",
      "https://i.ibb.co/CsnMzdfk/Screenshot-from-2025-05-01-00-52-46.png",
    ],
    liveUrl: "https://tution-media.vercel.app/",
    githubUrl: "https://github.com/MohammadTanvir881/TUTOR_LINK_FRONTEND",
    techStack: [
      { name: "MongoDB", color: "green" },
      { name: "Express.js", color: "yellow" },
      { name: "Next.js", color: "blue" },
      { name: "Node.js", color: "lime" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "TypeScript", color: "purple" },
    ],
    features: [
      "User authentication with role-based access",
      "Tutor search with filters (subject, rating, location)",
      "Real-time chat between students and tutors",
      "Secure Stripe payment integration",
      "Tutor application and admin approval workflow",
    ],
    challenges: [
      {
        challenge: "Dynamic filtering and pagination",
        solution:
          "Used MongoDB aggregation pipeline and client-side debounce for efficient filtering",
      },
      {
        challenge: "Payment flow integration",
        solution:
          "Integrated Stripe Checkout with custom success/failure redirection",
      },
    ],
    lessonsLearned: [
      "Gained practical experience designing scalable APIs with Express and MongoDB.",
      "Learned to structure large-scale React apps with reusable components and clean routing.",
      "Realized the importance of UX and onboarding flow for multi-role platforms.",
    ],
  },

  {
    id: 2,
    slug: "bookshop-platform",
    title: "BookShop - Online Bookstore",
    description:
      "A dynamic e-commerce platform for browsing, searching, and purchasing books with integrated cart and payment functionality.",
    longDescription: [
      "BookShop is a full-stack web application designed for book enthusiasts to discover, explore, and buy books from a wide catalog.",
      "The platform includes category-based browsing, real-time search, user authentication, cart management, and a secure checkout system.",
      "This project was built to simulate a professional-grade online bookstore with responsive design and performance optimization.",
    ],
    imageUrl:
      "https://i.ibb.co/JWwWvpRm/Screenshot-from-2025-05-01-01-21-32.png",
    galleryImages: [
      "https://i.ibb.co/GQWp6bWT/Screenshot-from-2025-05-01-01-22-07.png",
      "https://i.ibb.co/HLL5sCSf/Screenshot-from-2025-05-01-01-22-31.png",
    ],

    liveUrl: "https://bookshop-client-v2.vercel.app/",
    githubUrl: "https://github.com/MohammadTanvir881/book-shop-client",
    techStack: [
      { name: "Next.js", color: "blue" },
      { name: "MongoDB", color: "green" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "Stripe", color: "purple" },
      { name: "TypeScript", color: "indigo" },
    ],
    features: [
      "User authentication and profile management",
      "Real-time search and filter for books",
      "Cart system with quantity management",
      "Stripe-powered payment gateway",
      "Admin dashboard for product management",
    ],
    challenges: [
      {
        challenge: "Dynamic search optimization",
        solution: "Implemented debounced queries and MongoDB indexing",
      },
      {
        challenge: "Handling secure transactions",
        solution: "Integrated SSLCOMMERZ Checkout with webhook handling",
      },
    ],
    lessonsLearned: [
      "Learned to manage e-commerce states across components",
      "Gained experience with secure backend integrations and deployment",
    ],
  },
  {
    id: 3,
    slug: "alphabet-clash",
    title: "Alphabet Clash - Word Battle Game",
    description:
      "An engaging and interactive word battle game built using vanilla JavaScript, Tailwind CSS, and DOM manipulation.",
    longDescription: [
      "Alphabet Clash is a fun and challenging game where players compete to form words using a randomized set of letters within a time limit.",
      "Built with JavaScript, this game utilizes DOM manipulation to create a dynamic, responsive interface.",
      "Tailwind CSS was used to style the game for a clean and modern look, with a focus on responsive design for all devices.",
    ],
    imageUrl:
      "https://i.ibb.co/60SRyyJ8/Screenshot-from-2025-05-01-01-40-51.png", // Corrected screenshot URL
    galleryImages: [
      "https://i.ibb.co/m5czCv6Z/Screenshot-from-2025-05-01-01-41-00.png", // Corrected gallery image URL
      "https://i.ibb.co/MDQf0vTZ/Screenshot-from-2025-05-01-01-41-11.png", // Corrected gallery image URL
    ],

    liveUrl: "https://mohammadtanvir881.github.io/kdb-games/", // Replace with your live demo link
    githubUrl: "https://github.com/MohammadTanvir881/kdb-games", // Replace with your GitHub repo URL
    techStack: [
      { name: "JavaScript", color: "yellow" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "DOM Manipulation", color: "blue" },
    ],
    features: [
      "Real-time word formation with a time limit",
      "Score tracking and high score leaderboard",
      "Responsive design for mobile and desktop users",
      "Fun and engaging UI with interactive animations",
    ],
    challenges: [
      {
        challenge: "Handling dynamic DOM updates",
        solution:
          "Used event listeners and DOM manipulation to update the game state in real-time.",
      },
      {
        challenge: "Creating a responsive design",
        solution:
          "Leveraged Tailwind CSS's utility-first classes to ensure the game worked across different screen sizes.",
      },
    ],
    lessonsLearned: [
      "Enhanced my JavaScript skills by using DOM manipulation to create an interactive experience.",
      "Gained experience in building responsive UIs with Tailwind CSS.",
      "Learned to handle user interactions and real-time updates in games.",
    ],
  },
];

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectDetails: string }>;
}) => {
  // console.log(await params)
  const { projectDetails } = await params;
  console.log(projectDetails);
  const project = projects.find((p) => p.id === Number(projectDetails));
  //   console.log(project);
  if (!project) return notFound();

  return (
    <section className="container mx-auto px-6 py-20 bg-slate-900 text-gray-200">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-slate-400 text-lg mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 rounded-lg text-white font-medium transition flex items-center"
              >
                Live Demo
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-700 hover:bg-slate-800 rounded-lg font-medium transition flex items-center"
              >
                <Github className="mr-2 w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </div>

        <div className="rounded-xl overflow-hidden mb-12 aspect-video">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-800 pb-2">
              Project Overview
            </h2>
            <div className="space-y-4 text-slate-300">
              {project.longDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-800 pb-2">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 bg-${tech.color}-500/10 text-${tech.color}-400 rounded-full text-sm border border-${tech.color}-400/20`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-800 pb-2">
              Key Features
            </h2>
            <ul className="space-y-3 text-slate-300">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.galleryImages && project.galleryImages.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-800 pb-2">
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.galleryImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-800 pb-2">
              Challenges & Solutions
            </h2>
            <div className="space-y-8">
              {project.challenges.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-slate-300 mb-3">
                    Challenge: {item.challenge}
                  </h3>
                  <p className="text-slate-400">
                    <span className="text-blue-400">Solution:</span>{" "}
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-800 pb-2">
              Lessons Learned
            </h2>
            <div className="space-y-4 text-slate-300">
              {project.lessonsLearned.map((lesson, index) => (
                <p key={index}>{lesson}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// export async function generateStaticParams() {
//   return projects.map((project) => ({
//     id: project.id.toString(),
//   }));
// }

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const project = projects.find((p) => p.id === Number(params.id));
//   if (!project) {
//     return { title: "Project Not Found" };
//   }
//   return {
//     title: project.title,
//     description: project.description,
//     openGraph: {
//       title: project.title,
//       description: project.description,
//       images: [project.imageUrl],
//     },
//   };
// }

export default ProjectDetailsPage;
