"use client"
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white text-center px-6">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Muhammad Usman
      </motion.h1>

     <motion.p
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="text-xl md:text-2xl mb-8 max-w-xl"
>
  <Typewriter
    words={[
      "Front-End Developer",
      "React & Next.js Developer",
      "SEO & Digital Growth Specialist",
      "Creator of Online Pizza Hub Vehari"
    ]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={2000}
  />
</motion.p>
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
  className="flex space-x-6"
>
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href="#projects"
    className="px-6 py-3 bg-purple-600 rounded-lg transition-all"
  >
    View Projects
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href="#contact"
    className="px-6 py-3 bg-transparent border border-white rounded-lg hover:bg-white hover:text-black transition-all"
  >
    Contact Me
  </motion.a>
</motion.div>
    </section>
  )
}