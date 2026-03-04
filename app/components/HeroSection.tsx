"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-purple-800 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[120px] rounded-full bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-6"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Muhammad Usman
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 font-medium mb-8">
          <TypeAnimation
            sequence={[
              "Full Stack Developer 🚀",
              1500,
              "Next.js Specialist ⚡",
              1500,
              "React & Node.js Developer 💻",
              1500,
              "SEO & Digital Marketing Expert 📈",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 rounded-full font-semibold hover:scale-110 transition duration-300 shadow-lg shadow-purple-600/40"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-purple-500 rounded-full font-semibold hover:bg-purple-600 hover:scale-110 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  )
}