
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, ChevronRight } from 'lucide-react'

export default function WorkSection() {
  const projects = [
    {
      title: "Project Name",
      description: "A brief description of what this project is about and what technologies were used.",
      gradient: "from-blue-500 to-indigo-600",
      icon: "project-diagram",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Physics Simulation",
      description: "Interactive physics simulation combining web technologies with scientific computing.",
      gradient: "from-purple-500 to-pink-600",
      icon: "atom",
      tags: ["JavaScript", "Three.js", "Python"]
    }
  ]

  return (
    <section id="work" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="rounded-xl overflow-hidden border-slate-800 bg-slate-900/70 backdrop-blur-sm">
            <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
              <i className={`fas fa-${project.icon} text-6xl text-white opacity-30`}></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="link" className="text-blue-400 hover:text-blue-300 px-0">
                View Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="outline" className="border-slate-600 hover:bg-slate-800">
          View All Projects <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}