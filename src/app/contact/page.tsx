'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const socialLinks = [
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com/HyperXav',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    name: 'GitHub',
    href: 'https://github.com/hyperxav',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: 'Hugging Face',
    href: 'https://huggingface.co/hyperxav',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 5.5c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/hyperxav',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  }
]

interface FormStatus {
  submitting: boolean;
  submitted: boolean;
  error: string | null;
}

export default function Contact() {
  useEffect(() => {
    emailjs.init("PPt4TbSLIKlLE4nfR")
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      await emailjs.send(
        'service_s99h7wv',
        'template_rh7foud',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'xavier.sassi@gmail.com'
        },
        'PPt4TbSLIKlLE4nfR'
      )

      setStatus({ submitting: false, submitted: true, error: null })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to send email:', error)
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FFF5EB]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="neo-brutalist-red inline-block px-8 py-4 transform rotate-[-2deg] mb-8"
            >
              <h1 className="text-4xl font-black text-black">
                Let's Build Something Great
              </h1>
            </motion.div>
            
            <div className="neo-brutalist-white p-8 max-w-3xl mx-auto">
              <p className="text-xl text-black">
                Have a project in mind? Let's discuss how we can work together to bring your vision to life.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="neo-brutalist-white p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-black text-black uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] bg-white"
                    disabled={status.submitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-black text-black uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] bg-white"
                    disabled={status.submitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-black text-black uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] bg-white"
                    disabled={status.submitting}
                  />
                </div>

                {status.error && (
                  <div className="neo-brutalist-red p-4">
                    <p className="text-black font-bold">{status.error}</p>
                  </div>
                )}

                {status.submitted && (
                  <div className="neo-brutalist-green p-4">
                    <p className="text-black font-bold">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="neo-brutalist-red w-full text-black text-lg font-black px-8 py-4 disabled:opacity-50"
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-8">
                <div className="neo-brutalist-blue p-8">
                  <h2 className="text-2xl font-black text-black mb-4">
                    Connect With Me
                  </h2>
                  <p className="text-black">
                    Feel free to reach out through any of these platforms:
                  </p>
                </div>

                <div className="neo-brutalist-white p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-brutalist-yellow p-4 flex items-center justify-center transform transition-transform duration-200 hover:rotate-2"
                      >
                        <span className="text-black">
                          {link.icon}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="neo-brutalist-green p-8">
                  <h2 className="text-2xl font-black text-black mb-4">
                    Location
                  </h2>
                  <p className="text-black">
                    Based in Cannes, France<br />
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 