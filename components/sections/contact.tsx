'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const socials = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/Preethi123455' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/obupreethi/' },
    { name: 'Leetcode', icon: '⚡', url: 'https://leetcode.com/u/OBUPREETHI_G_/' },
    { name: 'Email', icon: '✉️', url: 'mailto:preethiusha007@gmail.com' },
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {[ 
            { icon: '📧', title: 'Email', info: 'preethiusha007@gmail.com' },
            { icon: '📱', title: 'Phone', info: '+91 63796 77950' },
            { icon: '📍', title: 'Location', info: 'Salem, Tamil Nadu, India' },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 10 }}
              className="glass p-6 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-neutral-dark">{item.info}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col space-y-4"
        >
          <h3 className="font-semibold text-foreground mb-4 text-center lg:text-left">Follow Me</h3>
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-start gap-3 p-4 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-lg font-semibold transition-all"
            >
              <span className="text-2xl">{social.icon}</span>
              <span className="text-sm">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
