import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useEffect, useRef } from 'react';

type TextRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const TextReveal = ({ children, delay = 0, className = '' }: TextRevealProps) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8, 
      delay,
      ease: [0.16, 1, 0.3, 1],
    }}
    className={`inline-block ${className}`}
  >
    {children}
  </motion.span>
);

const FloatingElements = () => {
  const elements = [
    { icon: <FiGithub className="w-6 h-6" />, color: 'from-purple-400 to-pink-500' },
    { icon: <FiLinkedin className="w-6 h-6" />, color: 'from-blue-400 to-cyan-500' },
    { icon: <FiMail className="w-6 h-6" />, color: 'from-amber-400 to-orange-500' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute w-12 h-12 rounded-full bg-gradient-to-br ${element.color} opacity-10`}
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            scale: 0.5 + Math.random() * 1.5,
          }}
          animate={{
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
          }}
          transition={{
            duration: 30 + Math.random() * 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const nameVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const name = "Your Name".split(' ');

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <FloatingElements />
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <motion.div
          style={{ y, opacity, scale }}
          className="flex flex-col md:flex-row items-center"
        >
          {/* Left Column - Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-2 text-indigo-500 font-mono"
            >
              <TextReveal>Hi, my name is</TextReveal>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              {name.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={nameVariants}
                  initial="hidden"
                  animate="visible"
                  className="block md:inline-block mr-2 relative"
                >
                  <span className="relative z-10">{word}</span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-20 blur-lg -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 0.3, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'loop',
                      delay: 0.5 + i * 0.3,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            >
              I craft exceptional digital experiences. Currently focused on building 
              <span className="text-indigo-500 dark:text-indigo-400"> modern web applications</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-indigo-500 text-white rounded-lg overflow-hidden hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center">
                  Get in Touch 
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
              >
                View My Work
              </a>
            </motion.div>
          </div>

          {/* Right Column - Avatar */}
          <div className="md:w-1/2 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative z-10 w-72 h-72 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('/avatar-placeholder.jpg')] bg-cover bg-center mix-blend-multiply opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-8xl md:text-9xl">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                    }}
                  >
                    👨‍💻
                  </motion.div>
                </div>
              </div>
              
              {/* Floating elements around avatar */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-indigo-400 rounded-full"
                  initial={{
                    scale: 0,
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    x: [0, Math.random() * 100 - 50, 0],
                    y: [0, Math.random() * 100 - 50, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 6,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                  style={{
                    top: '50%',
                    left: '50%',
                    opacity: 0.6,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-sm text-gray-500 mb-2">Scroll down</span>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-gray-500 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
