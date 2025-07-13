import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center"
    >
      <motion.div
        variants={fadeInUp}
        className="md:w-1/2 mb-12 md:mb-0"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-indigo-500">Your Name</span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Frontend Developer passionate about creating beautiful,
          interactive web experiences.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex space-x-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300 flex items-center"
          >
            Get in Touch <FiArrowRight className="ml-2" />
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        className="md:w-1/2 flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full overflow-hidden">
          {/* Replace with your image */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
            👨‍💻
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
