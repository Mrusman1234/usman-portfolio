"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [target])

  return <span>{count}</span>
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md p-10 rounded-xl"
        >
          <h3 className="text-5xl font-bold text-purple-500">
            <Counter target={25} />+
          </h3>
          <p className="mt-3 text-gray-400">Projects Completed</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md p-10 rounded-xl"
        >
          <h3 className="text-5xl font-bold text-purple-500">
            <Counter target={10} />+
          </h3>
          <p className="mt-3 text-gray-400">Happy Clients</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md p-10 rounded-xl"
        >
          <h3 className="text-5xl font-bold text-purple-500">
            <Counter target={3} />+
          </h3>
          <p className="mt-3 text-gray-400">Years Experience</p>
        </motion.div>

      </div>
    </section>
  )
}
