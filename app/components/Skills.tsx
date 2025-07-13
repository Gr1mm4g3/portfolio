import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma, FaServer, FaLaravel } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

type Skill = {
  icon: React.ReactNode;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'devops';
  description: string;
  color: string;
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const skills: Skill[] = [
    { 
      icon: <FaReact className="w-12 h-12 mx-auto" />, 
      name: 'React', 
      level: 90,
      category: 'frontend',
      description: 'Building interactive UIs with React hooks and context API',
      color: 'from-cyan-400 to-blue-500'
    },
    { 
      icon: <SiNextdotjs className="w-12 h-12 mx-auto" />, 
      name: 'Next.js', 
      level: 85,
      category: 'frontend',
      description: 'Server-side rendering and static site generation',
      color: 'from-gray-800 to-black dark:from-white dark:to-gray-300'
    },
    { 
      icon: <SiTypescript className="w-12 h-12 mx-auto" />, 
      name: 'TypeScript', 
      level: 88,
      category: 'frontend',
      description: 'Type-safe JavaScript development',
      color: 'from-blue-500 to-blue-700'
    },
    { 
      icon: <SiTailwindcss className="w-12 h-12 mx-auto" />, 
      name: 'Tailwind', 
      level: 92,
      category: 'frontend',
      description: 'Utility-first CSS framework for rapid UI development',
      color: 'from-teal-400 to-cyan-500'
    },
    { 
      icon: <FaNodeJs className="w-12 h-12 mx-auto" />, 
      name: 'Node.js', 
      level: 82,
      category: 'backend',
      description: 'Building scalable server-side applications',
      color: 'from-green-500 to-green-700'
    },
    { 
      icon: <FaServer className="w-12 h-12 mx-auto" />, 
      name: 'Express', 
      level: 80,
      category: 'backend',
      description: 'Minimalist web framework for Node.js',
      color: 'from-gray-400 to-gray-600'
    },
    { 
      icon: <FaLaravel className="w-12 h-12 mx-auto" />, 
      name: 'Laravel', 
      level: 85,
      category: 'backend',
      description: 'PHP web application framework',
      color: 'from-red-500 to-red-700'
    },
    { 
      icon: <FaFigma className="w-12 h-12 mx-auto" />, 
      name: 'Figma', 
      level: 85,
      category: 'design',
      description: 'UI/UX design and prototyping',
      color: 'from-purple-400 to-pink-500'
    },
  ];

  const categories = [
    { id: 'all', name: 'All', icon: <span>✨</span> },
    { id: 'frontend', name: 'Frontend', icon: <span>💻</span> },
    { id: 'backend', name: 'Backend', icon: <span>🔧</span> },
    { id: 'design', name: 'Design', icon: <span>🎨</span> },
    { id: 'devops', name: 'DevOps', icon: <span>🚀</span> },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with on a daily basis
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                  delay: Math.min(index * 0.05, 0.3)
                }}
                className="h-64 perspective-1000"
              >
                <motion.div
                  className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group"
                  whileHover={{ rotateY: 180 }}
                >
                  {/* Front of Card */}
                  <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center backface-hidden">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${skill.color} text-white mb-4`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                      <div 
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">{skill.level}%</span>
                  </div>
                  
                  {/* Back of Card */}
                  <div className="absolute w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180">
                    <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                    <p className="text-center text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {skill.description}
                    </p>
                    <div className="mt-auto w-full">
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Legend */}
        <motion.div 
          className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>Hover or tap on a card to see more details</p>
        </motion.div>
      </div>
    </section>
  );
}
