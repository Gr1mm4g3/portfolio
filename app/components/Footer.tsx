'use client';

import { motion, Variants } from 'framer-motion';
import { FaCode, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="py-6 text-center text-gray-600 dark:text-gray-400 text-sm relative overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50 dark:via-indigo-900/10 to-transparent opacity-0 dark:opacity-30"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: 'linear',
        }}
      />
      
      <div className="relative z-10">
        <motion.div className="flex items-center justify-center gap-2 flex-wrap">
          <motion.span variants={item}>
            © {currentYear}
          </motion.span>
          <motion.span variants={item}>•</motion.span>
          <motion.span 
            variants={item}
            className="font-medium hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            Made with
          </motion.span>
          <motion.span 
            variants={item}
            className="inline-block text-indigo-500"
            whileHover={{ scale: 1.3, color: 'var(--tw-gradient-to)' }}
            animate={{ 
              scale: [1, 1.2, 1],
              transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <FaCode className="mx-0.5" />
          </motion.span>
          <motion.span 
            variants={item}
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            and
          </motion.span>
          <motion.span 
            variants={item}
            className="inline-block text-pink-500"
            whileHover={{ scale: 1.3 }}
            animate={{ 
              scale: [1, 1.2, 1],
              transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <FaHeart className="mx-0.5" />
          </motion.span>
          <motion.span 
            variants={item}
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              textShadow: '0 0 10px rgba(99, 102, 241, 0.6)',
              color: 'var(--tw-gradient-to)'
            }}
          >
            by Gr1mm4g3
          </motion.span>
        </motion.div>
      </div>
    </motion.footer>
  );
}
