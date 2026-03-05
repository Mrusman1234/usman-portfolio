"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "beingwithusman@gmail.com",
    href: "mailto:beingwithusman@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 318 1712487",
    href: "tel:+923181712487",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Vehari, Punjab, Pakistan",
    href: "#",
    color: "from-purple-500 to-pink-500",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Mrusman1234",
    color: "hover:bg-gray-800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-usman-6444523b4/",
    color: "hover:bg-blue-600",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com",
    color: "hover:bg-blue-500",
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    alert("Message sent successfully!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative py-16 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1.5 md:px-4 md:py-2 mb-3 md:mb-4 text-xs md:text-sm font-medium text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-2 md:px-0">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-3 md:space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div className={`p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${info.color} shadow-lg`}>
                    <info.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {info.label}
                    </p>
                    <p className="text-sm md:text-base text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-4 md:pt-6"
            >
              <p className="text-gray-400 mb-3 md:mb-4 text-sm">Find me on</p>
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 md:p-3 rounded-xl bg-white/10 border border-white/10 text-white transition-all ${social.color}`}
                  >
                    <social.icon className="w-4 h-4 md:w-6 md:h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 space-y-4 md:space-y-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send a Message</h3>

              <div className="space-y-3 md:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm text-gray-400 mb-1.5 md:mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm md:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm text-gray-400 mb-1.5 md:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm md:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm text-gray-400 mb-1.5 md:mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none text-sm md:text-base"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 md:py-4 px-4 md:px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
            <p className="text-gray-400 text-xs md:text-sm">
              © {new Date().getFullYear()} Muhammad Usman. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs md:text-sm">
              Built with{" "}
              <span className="text-cyan-400">Next.js</span> +{" "}
              <span className="text-purple-400">Tailwind</span> +{" "}
              <span className="text-pink-400">Framer Motion</span>
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
