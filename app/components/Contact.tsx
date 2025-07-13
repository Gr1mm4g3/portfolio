import { motion, useInView, Variants, Transition } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import { useRef } from 'react';

interface AnimationVariant {
  hidden: {
    opacity: number;
    y: number;
  };
  show: {
    opacity: number;
    y: number;
    transition: Transition;
  };
}

const contactMethods = [
  {
    icon: <FiMail className="w-6 h-6" />,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: <FiGithub className="w-6 h-6" />,
    label: 'GitHub',
    value: 'github.com/yourusername',
    href: 'https://github.com/yourusername',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: <FiLinkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    href: 'https://linkedin.com/in/yourusername',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const hoverEffect = {
    scale: 1.03,
    y: -5,
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 10,
    },
  };

  const tapEffect = {
    scale: 0.98,
  };
  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              opacity: 0.1,
            }}
            animate={{
              x: [
                Math.random() * 100 + 'vw',
                Math.random() * 100 + 'vw',
              ],
              y: [
                Math.random() * 100 + 'vh',
                Math.random() * 100 + 'vh',
              ],
              rotate: [0, 180],
            }}
            transition={{
              duration: 40 + Math.random() * 60,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={container}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={item} className="text-center mb-16">
            <motion.span 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-500 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <FiMessageSquare className="w-8 h-8" />
            </motion.span>
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={hoverEffect}
                whileTap={tapEffect}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${method.color} text-white`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{method.label}</h3>
                <p className="text-gray-600 dark:text-gray-300">{method.value}</p>
                <div className="mt-4 h-1 w-8 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            ))}
          </motion.div>

          <motion.form 
            variants={container}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <motion.h3 variants={item} className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Send me a message
            </motion.h3>
            
            <motion.div variants={item} className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
            </motion.div>

            <motion.div variants={item} className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </motion.div>

            <motion.div variants={item} className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Your message here..."
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={hoverEffect}
              whileTap={tapEffect}
              className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FiSend className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
