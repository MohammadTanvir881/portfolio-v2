import { Card } from "@/components/ui/card"


export default function AboutSection() {
  const timelineItems = [
    {
      title: "Bachelor's in Physics",
      period: "Jordan University of Science and Technology | 2021-Present",
      description: "Studying fundamental physics principles while developing programming skills.",
      color: "bg-blue-500"
    },
    {
      title: "Full Stack Developer",
      period: "Freelance | 2020-Present",
      description: "Building web applications for clients using modern JavaScript frameworks.",
      color: "bg-indigo-500"
    },
    {
      title: "Tech Enthusiast",
      period: "Since Childhood",
      description: "Passionate about technology, programming, and solving complex problems.",
      color: "bg-purple-500"
    }
  ]

  return (
    <section id="about" className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
          About Me
        </h2>

        <Card className="rounded-2xl p-8 mb-12 border-slate-800 bg-slate-900/70 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://i.ibb.co.com/4RZDX2Nj/profile.jpg"
                alt="About me"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Who I Am</h3>
              <p className="text-slate-400 mb-4">
                I'm a passionate full-stack developer with a unique background
                in physics, bringing analytical thinking and problem-solving
                skills to every project I work on.
              </p>
              <p className="text-slate-400 mb-6">
                Currently pursuing my degree at Jordan University of Science and
                Technology, I balance my academic studies with building modern
                web applications using cutting-edge technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                  <span>MERN Stack Developer</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
                  <span>Physics Student</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="rounded-2xl p-8 border-slate-800 bg-slate-900/70 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-6 text-center">My Journey</h3>
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline-item relative pl-8">
                <div className={`absolute left-0 top-0 w-4 h-4 rounded-full ${item.color} border-4 border-slate-800`}></div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-slate-400 text-sm mb-1">
                  {item.period}
                </p>
                <p className="text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}