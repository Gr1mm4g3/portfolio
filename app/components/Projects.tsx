import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "TaskFlow Pro",
      description: "A modern task management application with real-time collaboration",
      longDescription: "TaskFlow Pro helps teams organize their work with a clean, intuitive interface. Features include task assignments, due dates, priority levels, and real-time updates using WebSockets.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "WebSockets"],
      image: "/projects/taskflow-pro.jpg",
      demoUrl: "https://taskflow-pro.example.com",
      githubUrl: "https://github.com/username/taskflow-pro",
      featured: true
    },
    {
      id: 2,
      title: "EcoMarket",
      description: "E-commerce platform for sustainable and eco-friendly products",
      longDescription: "A full-stack e-commerce solution with product catalog, shopping cart, and secure checkout. Includes admin dashboard for inventory management and order processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
      image: "/projects/ecomarket.jpg",
      demoUrl: "https://ecomarket-demo.example.com",
      githubUrl: "https://github.com/username/ecomarket"
    },
    {
      id: 3,
      title: "FitTrack",
      description: "Fitness tracking application with personalized workout plans",
      longDescription: "Track your workouts, set fitness goals, and follow personalized training programs. Includes exercise library with video demonstrations and progress analytics.",
      technologies: ["React Native", "Expo", "Firebase", "Redux Toolkit", "Victory Native"],
      image: "/projects/fittrack.jpg",
      demoUrl: "https://fittrack-mobile.example.com",
      githubUrl: "https://github.com/username/fittrack"
    },
    {
      id: 4,
      title: "DevConnect",
      description: "Social platform for developers to connect and collaborate",
      longDescription: "A GitHub-integrated platform where developers can showcase their projects, find collaborators, and participate in coding challenges. Features include real-time chat, code review tools, and project management.",
      technologies: ["Next.js", "TypeScript", "GraphQL", "Apollo", "PostgreSQL", "Redis"],
      image: "/projects/devconnect.jpg",
      demoUrl: "https://devconnect.example.com",
      githubUrl: "https://github.com/username/devconnect"
    },
    {
      id: 5,
      title: "RecipeFinder",
      description: "Recipe discovery app with AI-powered recommendations",
      longDescription: "Find recipes based on ingredients you have, dietary restrictions, and cooking time. Uses machine learning to suggest personalized recommendations and learn your preferences over time.",
      technologies: ["Vue.js", "Python", "Flask", "TensorFlow", "PostgreSQL", "Docker"],
      image: "/projects/recipefinder.jpg",
      demoUrl: "https://recipefinder.example.com",
      githubUrl: "https://github.com/username/recipe-finder"
    },
    {
      id: 6,
      title: "EventSpot",
      description: "Event discovery and ticketing platform",
      longDescription: "Discover local events, purchase tickets, and get personalized recommendations. Event organizers can create and manage events, track attendance, and analyze engagement metrics.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
      image: "/projects/eventspot.jpg",
      demoUrl: "https://eventspot.example.com",
      githubUrl: "https://github.com/username/eventspot"
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.03,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.98 
    }
  };

  const techTagVariants = {
    hover: {
      y: -2,
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 10
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 0.1
              }
            }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve real-world problems and improve development workflows.
          </p>
        </motion.div>

        {/* Featured Project */}
        <AnimatePresence>
        {projects.filter(p => p.featured).map((project) => (
          <motion.div
            key={project.id}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 80,
                  damping: 15,
                  delay: 0.2
                }
              }
            }}
            whileHover="hover"
            variants={{
              ...itemVariants,
              hover: {
                y: -5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 15
                }
              }
            }}
            className="mb-20 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
          >
            <div className="md:flex">
              <motion.div 
                className="md:flex-shrink-0 md:w-1/2 h-80 relative overflow-hidden"
                variants={imageHoverVariants}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-90">
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
                  >
                    <motion.span 
                      className="text-white text-2xl font-medium"
                      initial={{ y: 20 }}
                      animate={isInView ? { y: 0 } : { y: 20 }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.title}
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
              <div className="p-8 md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">Featured Project</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.longDescription}
                </p>
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: 0.3 + (i * 0.05),
                            type: 'spring',
                            stiffness: 300,
                            damping: 15
                          }
                        }
                      }}
                      whileHover={techTagVariants.hover}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div 
                  className="flex space-x-4"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.5
                      }
                    }
                  }}
                >
                  {project.demoUrl && (
                    <motion.a
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg flex items-center shadow-lg shadow-indigo-500/20"
                    >
                      <motion.span>Live Demo</motion.span>
                      <motion.svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </motion.svg>
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center"
                    >
                      <motion.span>View Code</motion.span>
                      <motion.svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </motion.svg>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>

        {/* Other Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects
            .filter(p => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
                custom={index}
              >
                <motion.div 
                  className="h-48 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 relative overflow-hidden"
                  variants={imageHoverVariants}
                >
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.span 
                      className="text-white text-2xl font-medium"
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.title}
                    </motion.span>
                  </motion.div>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    variants={containerVariants}
                  >
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <motion.span
                        key={tech}
                        variants={{
                          hidden: { opacity: 0, y: 5 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              delay: 0.1 + (i * 0.05),
                              type: 'spring',
                              stiffness: 300,
                              damping: 15
                            }
                          }
                        }}
                        whileHover={techTagVariants.hover}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-200 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <motion.span 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
                        variants={{
                          hidden: { opacity: 0, y: 5 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              delay: 0.3,
                              type: 'spring',
                              stiffness: 300,
                              damping: 15
                            }
                          }
                        }}
                      >
                        +{project.technologies.length - 4}
                      </motion.span>
                    )}
                  </motion.div>
                  <motion.div 
                    className="flex space-x-3"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.2
                        }
                      }
                    }}
                  >
                    {project.demoUrl && (
                      <motion.a
                        variants={buttonHoverVariants}
                        whileHover="hover"
                        whileTap="tap"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 flex items-center"
                      >
                        <motion.span>Live Demo</motion.span>
                        <motion.svg 
                          className="w-3 h-3 ml-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </motion.svg>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        variants={buttonHoverVariants}
                        whileHover="hover"
                        whileTap="tap"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300 flex items-center"
                      >
                        <motion.span>View Code</motion.span>
                        <motion.svg 
                          className="w-3 h-3 ml-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </motion.svg>
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
