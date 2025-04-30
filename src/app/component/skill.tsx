import { Card } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";


export default function SkillsSection() {
  const skills = [
    { name: "React.js", icon: faReact, color: "text-blue-400" },
    { name: "Node.js", icon: faNodeJs, color: "text-green-400" },
    { name: "MongoDB", icon: faDatabase, color: "text-emerald-400" },
    { name: "JavaScript (ES6+)", icon: faJsSquare, color: "text-yellow-300" },
    { name: "Express.js", icon: faServer, color: "text-purple-400" },
    { name: "Next.js", icon: "nextjs", color: "text-white" },
  ];

  return (
    <section id="skills" className="container mx-auto px-6 py-12">
      <Card className="rounded-2xl p-8 md:p-12 bg-slate-900/70 backdrop-blur-sm border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-slate-800/60 p-6 rounded-xl border-none">
              <div className="flex justify-center">
                {skill.icon === "nextjs" ? (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                    alt="Next.js"
                    className="w-12 h-10 mb-3"
                  />
                ) : (
                  <div className="w-10 h-12 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={
                        typeof skill.icon !== "string"
                          ? skill.icon
                          : faReact /* fallback icon */
                      }
                      className={` mb-2 mt-5 ${skill.color}`}
                      fixedWidth
                    />
                  </div>
                )}
              </div>
              <h3 className="font-lg md:font-semibold text-gray-50">{skill.name}</h3>
            </Card>
          ))}
        </div>
      </Card>
    </section>
  );
}
