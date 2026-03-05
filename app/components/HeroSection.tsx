"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-purple-800 text-white overflow-hidden pt-16 md:pt-20">
      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600 opacity-20 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-pink-500 opacity-20 blur-[120px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-purple-800/50 rounded-full text-purple-300 text-xs md:text-sm mb-4 md:mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for work
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2 md:mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Muhammad Usman</span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mb-4 md:mb-6">
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

          <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-lg max-w-xl mx-auto md:mx-0">
            I build modern, responsive, and user-friendly web applications with cutting-edge technologies. Let's turn your ideas into reality!
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-6 md:mb-8">
            <a
              href="#projects"
              className="px-6 py-2.5 md:px-8 md:py-3 bg-purple-600 rounded-full font-semibold text-sm md:text-base hover:scale-110 transition duration-300 shadow-lg shadow-purple-600/40"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-2.5 md:px-8 md:py-3 border border-purple-500 rounded-full font-semibold text-sm md:text-base hover:bg-purple-600 hover:scale-110 transition duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-3 md:gap-4">
            <motion.a
              href="https://github.com/Mrusman1234"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="p-2.5 md:p-3 bg-gray-800/50 rounded-full hover:bg-purple-600 transition-colors"
            >
              <Github className="w-4 h-5 md:w-5 md:h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-usman-6444523b4/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="p-2.5 md:p-3 bg-gray-800/50 rounded-full hover:bg-purple-600 transition-colors"
            >
              <Linkedin className="w-4 h-5 md:w-5 md:h-5" />
            </motion.a>
            <motion.a
              href="mailto:usman@example.com"
              whileHover={{ scale: 1.1, y: -5 }}
              className="p-2.5 md:p-3 bg-gray-800/50 rounded-full hover:bg-purple-600 transition-colors"
            >
              <Mail className="w-4 h-5 md:w-5 md:h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative">
            {/* Image Container with Glow Effect */}
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-80 lg:w-80 lg:h-96">
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

            {/* Floating Badge - Hidden on small mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="hidden sm:flex absolute -bottom-3 -left-2 md:-left-4 bg-gray-900 border border-purple-500/30 rounded-xl px-3 py-2 md:px-4 md:py-3 items-center gap-2 md:gap-3"
            >
              <div className="text-lg md:text-2xl">🎯</div>
              <div>
                <p className="text-xs text-gray-400">Projects</p>
                <p className="text-sm md:text-lg font-bold text-purple-400">50+</p>
              </div>
            </motion.div>

            {/* Location Badge - Hidden on small mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="hidden sm:flex absolute -top-2 -right-2 md:-right-4 bg-gray-900 border border-purple-500/30 rounded-xl px-3 py-1.5 md:px-4 md:py-2 items-center gap-2"
            >
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
              <span className="text-xs md:text-sm text-gray-300">Pakistan</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
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
