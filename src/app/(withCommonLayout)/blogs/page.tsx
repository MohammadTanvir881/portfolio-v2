// app/blog/page.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Building Your Own Refractor Telescope",
    description:
      "A step-by-step guide to constructing a professional-grade telescope at home with affordable materials.",
    category: "Astronomy",
    date: "June 15, 2023",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
    slug: "building-refractor-telescope",
  },
  {
    id: 2,
    title: "Advanced Arduino Projects for Astronomy",
    description:
      "Explore how to build automated telescope mounts, light pollution sensors, and more with Arduino.",
    category: "Electronics",
    date: "May 28, 2023",
    readTime: "12 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    slug: "arduino-astronomy-projects",
  },
  {
    id: 3,
    title: "Astrophotography on a Budget",
    description:
      "How to capture stunning images of the night sky without expensive professional equipment.",
    category: "Photography",
    date: "April 10, 2023",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1511&q=80",
    slug: "astrophotography-budget",
  },
];

const categoryColors = {
  Astronomy: "bg-blue-500/10 text-blue-400",
  Electronics: "bg-purple-500/10 text-purple-400",
  Photography: "bg-green-500/10 text-green-400",
};

export default function BlogPage() {
  return (
    <section className="container mx-auto px-6 py-20 bg-slate-900 text-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Latest Articles
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on astronomy, technology, and
            engineering.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group">
              <Card className="h-full bg-slate-800/70 text-gray-300 backdrop-blur-sm border border-slate-700 group-hover:border-blue-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                <CardHeader className="p-0 relative">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded ${
                          categoryColors[
                            post.category as keyof typeof categoryColors
                          ]
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-slate-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-3">{post.title}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {post.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/blogs/${post.id}`}>
                    {" "}
                    <Button
                      variant="link"
                      className="text-blue-400 hover:text-blue-300 p-0 h-auto"
                    >
                      Read Article <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-center mt-16">
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="border-slate-700 text-slate-400 hover:bg-slate-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <Button size="icon" className="bg-blue-500 hover:bg-blue-600">
              1
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-700 text-slate-400 hover:bg-slate-800"
            >
              2
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-700 text-slate-400 hover:bg-slate-800"
            >
              3
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-700 text-slate-400 hover:bg-slate-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
