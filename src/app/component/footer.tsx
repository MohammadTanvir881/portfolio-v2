import Link from "next/link";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">
              Tanvir Rashid
            </div>
            <p className="text-slate-400">
              Full Stack Developer & Physics Enthusiast
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <Link
                href="https://github.com/MohammadTanvir881"
                target="_blank"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tanvirrashid881/"
                target="_blank"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.facebook.com/mohammad.tanvir.114"
                target="_blank"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:tanvirrashid881@gmail.com"
                target="_blank"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>

            <div className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Tanvir Rashid. All rights
              reserved.
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
          <p>Built with Next.js, TypeScript, and shadcn/ui</p>
        </div>
      </div>
    </footer>
  );
}
