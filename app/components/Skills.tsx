import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { icon: <FaReact className="w-12 h-12 mx-auto" />, name: 'React' },
    { icon: <SiNextdotjs className="w-12 h-12 mx-auto" />, name: 'Next.js' },
    { icon: <SiTypescript className="w-12 h-12 mx-auto" />, name: 'TypeScript' },
    { icon: <SiTailwindcss className="w-12 h-12 mx-auto" />, name: 'Tailwind' },
    { icon: <FaNodeJs className="w-12 h-12 mx-auto" />, name: 'Node.js' },
    { icon: <FaFigma className="w-12 h-12 mx-auto" />, name: 'Figma' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My <span className="text-indigo-500">Skills</span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              {skill.icon}
              <h3 className="mt-4 font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
