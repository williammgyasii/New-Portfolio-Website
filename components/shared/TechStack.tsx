import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiAwsamplify,
} from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
  { name: "React", icon: <FaReact className="w-6 h-6 text-sky-400" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-500" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-6 h-6 text-sky-700" />,
  },
  { name: "AWS", icon: <SiAwsamplify className="w-6 h-6 text-yellow-400" /> },
];

export default function TechStack({
  technologies,
}: {
  technologies?: { name: string; icon: React.ReactNode }[];
}) {
  return (
    <div className="flex flex-wrap gap-6 mt-8">
      {technologies!.map((tech) => (
        <div key={tech.name} className="flex items-center gap-2">
          {tech.icon}
          <span className="text-sm font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}
