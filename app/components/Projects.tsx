import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
};

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of the project and the technologies used.",
      technologies: ["React", "Next.js", "Tailwind"]
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of the project and the technologies used.",
      technologies: ["React", "TypeScript", "Node.js"]
    },
    {
      id: 3,
      title: "Project 3",
      description: "A brief description of the project and the technologies used.",
      technologies: ["Next.js", "Tailwind", "Framer Motion"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured <span className="text-indigo-500">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-indigo-400 to-pink-400 flex items-center justify-center">
                <span className="text-white text-4xl">Project {project.id}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
