import React from "react";
// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock} from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Building Your Own Refractor Telescope",
    description:
      "A step-by-step guide to constructing a professional-grade telescope at home with affordable materials.",
    content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Why Build Your Own Telescope?</h2>
        <p class="mb-4 text-slate-300">Building a refractor telescope from scratch gives you unparalleled understanding of optical systems while saving hundreds compared to commercial models. This 8-step guide uses materials costing under $200.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Materials List</h2>
        <ul class="list-disc pl-6 mb-6 text-slate-300 space-y-2">
          <li>100mm diameter PVC pipe (36" length)</li>
          <li>Double convex lens (100mm diameter, 900mm focal length)</li>
          <li>Focuser mechanism (1.25" rack-and-pinion)</li>
          <li>Eyepiece set (25mm and 10mm Plossl)</li>
          <li>Lens mounting kit with retaining rings</li>
        </ul>
  
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Construction Timeline</h2>
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-blue-300 mb-2">Week 1: Tube Assembly</h3>
          <p class="text-slate-300">Cut and paint PVC tube, install lens cell</p>
          
          <h3 class="text-xl font-semibold text-blue-300 mb-2">Week 2: Mount Construction</h3>
          <p class="text-slate-300">Build alt-azimuth mount from plywood</p>
        </div>
      `,
    category: "Astronomy",
    date: "June 15, 2023",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
    slug: "building-refractor-telescope",
    relatedArticles: [2, 3], // Related to Arduino and Astrophotography
  },
  {
    id: 2,
    title: "Advanced Arduino Projects for Astronomy",
    description:
      "Build automated telescope mounts and light pollution sensors with these Arduino blueprints.",
    content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Essential Components</h2>
        <p class="mb-4 text-slate-300">All projects require Arduino Uno, stepper motors, and our astronomy shield kit. Total hardware cost under $50.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Project 1: Auto-Tracker</h2>
        <ul class="list-disc pl-6 mb-6 text-slate-300 space-y-2">
          <li>Tracks celestial objects using NEMA 17 steppers</li>
          <li>0.5° tracking accuracy</li>
          <li>Includes polar alignment routine</li>
        </ul>
  
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Project 2: Sky Quality Meter</h2>
        <div class="mb-6">
          <p class="text-slate-300">Measures night sky brightness with TSL2591 sensor:</p>
          <ul class="list-disc pl-6 mt-2 text-slate-300 space-y-2">
            <li>0-22 magnitude/arcsec² range</li>
            <li>Data logging to SD card</li>
            <li>Battery-powered for field use</li>
          </ul>
        </div>
      `,
    category: "Electronics",
    date: "May 28, 2023",
    readTime: "12 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    slug: "arduino-astronomy-projects",
    relatedArticles: [1, 3], // Related to Telescope and Astrophotography
  },
  {
    id: 3,
    title: "Astrophotography on a Budget",
    description:
      "Capture stunning deep sky images using equipment you already own with these professional techniques.",
    content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Essential Gear</h2>
        <p class="mb-4 text-slate-300">You can start with just a DSLR, kit lens, and basic tripod. We'll show you how to maximize results with minimal equipment.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Camera Settings</h2>
        <ul class="list-disc pl-6 mb-6 text-slate-300 space-y-2">
          <li>Manual mode: f/2.8 to f/4</li>
          <li>ISO 800-1600 (crop sensors) or 400-800 (full frame)</li>
          <li>30-second exposures (untracked)</li>
        </ul>
  
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Post-Processing</h2>
        <div class="mb-6">
          <p class="text-slate-300">Free software workflow:</p>
          <ol class="list-decimal pl-6 mt-2 text-slate-300 space-y-2">
            <li>Stack 50+ frames in Sequator</li>
            <li>Curves adjustment in GIMP</li>
            <li>Noise reduction with Darktable</li>
          </ol>
        </div>
      `,
    category: "Photography",
    date: "April 10, 2023",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1511&q=80",
    slug: "astrophotography-budget",
    relatedArticles: [1, 2], // Related to Telescope and Arduino
  },
];
const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogDetails: string }>;
}) => {
  const { blogDetails } = await params;
  console.log("blogDetails", blogDetails);

  const post = blogPosts.find((post) => post.id === Number(blogDetails));

  if (!post) {
    return notFound();
  }

  return (
    <section className="container mx-auto px-6 py-20 bg-slate-900 text-gray-200">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blogs"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <div className="mb-12">
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              post.category === "Astronomy"
                ? "bg-blue-500/10 text-blue-400 border border-blue-400/20"
                : post.category === "Electronics"
                ? "bg-purple-500/10 text-purple-400 border border-purple-400/20"
                : "bg-green-500/10 text-green-400 border border-green-400/20"
            }`}
          >
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {post.title}
          </h1>

          <div className="flex items-center text-slate-400 space-x-6">
            <div className="flex items-center">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden mb-12 aspect-video relative">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none mb-12">
          <div
            className="text-slate-300 space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Related Articles */}
        {/* <div className="mt-12 pt-8 border-t border-slate-800">
          <h2 className="text-xl font-bold mb-6 text-blue-400">
            More Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  key={relatedPost.id}
                  className="group"
                >
                  <div className="bg-slate-800/70 p-4 rounded-lg border border-slate-700 group-hover:border-blue-400 transition-all">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center text-sm text-slate-400 mb-2">
                      <span>{relatedPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {relatedPost.description}
                    </p>
                    <div className="mt-3 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="text-sm font-medium">Read Article</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div> */}

        {/* Back to Blog Button */}
        <div className="mt-16">
          <Button
            asChild
            // variant="outline"
            className="border-slate-700 bg-transparent hover:bg-slate-800"
          >
            <Link href="/blogs" className="text-blue-400 hover:text-blue-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
