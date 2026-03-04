"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-purple-800 text-white overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[120px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-800/50 rounded-full text-purple-300 text-sm mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for work
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Muhammad Usman</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
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

          <p className="text-gray-400 mb-8 text-lg max-w-xl">
            I build modern, responsive, and user-friendly web applications with cutting-edge technologies. Let's turn your ideas into reality!
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
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

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4">
            <motion.a
              href="https://github.com/Mrusman1234"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-usman-6444523b4/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:usman@example.com"
              whileHover={{ scale: 1.1, y: -5 }}
              className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Image Container with Glow Effect */}
            <div className="relative w-64 h-80 md:w-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-50"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-purple-500/30">
                <img
                  src="/project4.png"
                  alt="Muhammad Usman"
                  className="w-full h-full object-cover object-[center_top]"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=Muhammad+Usman&size=400&background=6b21a8&color=fff&font-size=0.3`
                  }}
                />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-2 md:-left-4 bg-gray-900 border border-purple-500/30 rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="text-2xl">🎯</div>
              <div>
                <p className="text-xs text-gray-400">Projects</p>
                <p className="text-lg font-bold text-purple-400">50+</p>
              </div>
            </motion.div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-3 -right-2 md:-right-4 bg-gray-900 border border-purple-500/30 rounded-xl px-4 py-2 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Pakistan</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-purple-500 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
