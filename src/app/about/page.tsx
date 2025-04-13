'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FFF5EB]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <div className="order-2 lg:order-1">
            <motion.div 
              className="neo-brutalist-red inline-block px-6 py-2 transform rotate-[-2deg] mb-8"
            >
              <h1 className="text-4xl font-black text-black">
                About Me
              </h1>
            </motion.div>
            
            <div className="space-y-8 text-lg text-black">
              <div className="neo-brutalist-white p-8">
                <p>
                  I'm Xavier, a freelance software engineer focused on building clean, powerful applications 
                  for clients across AI, automation, and fullstack development. I combine technical precision 
                  with elegant UI to bring your product vision to life.
                </p>

                <p className="mt-4">
                  With over a decade of experience in software development, I've helped numerous startups 
                  and established companies implement cutting-edge technologies to solve complex business 
                  challenges. My expertise spans artificial intelligence, machine learning, robotics and modern web 
                  development.
                </p>
              </div>

              <div className="neo-brutalist-blue p-8">
                <h2 className="text-2xl font-black text-black mb-4">
                  I'm particularly passionate about:
                </h2>

                <ul className="list-none space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF6B6B] font-bold">•</span>
                    <span>Building AI-powered applications that deliver real business value</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF6B6B] font-bold">•</span>
                    <span>Creating intuitive, responsive web applications with modern frameworks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF6B6B] font-bold">•</span>
                    <span>Implementing scalable machine learning solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF6B6B] font-bold">•</span>
                    <span>Optimizing development workflows and system architecture</span>
                  </li>
                </ul>
              </div>

              <div className="neo-brutalist-yellow p-8">
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or writing about software development on my blog.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <motion.div 
                className="neo-brutalist-green inline-block px-6 py-2 transform rotate-[1deg] mb-6"
              >
                <h2 className="text-2xl font-black text-black">
                  Core Technologies
                </h2>
              </motion.div>
              <div className="grid grid-cols-2 gap-8">
                <div className="neo-brutalist-white p-6">
                  <h3 className="text-xl font-black text-black mb-4">
                    AI & Machine Learning
                  </h3>
                  <ul className="space-y-2">
                    {['TensorFlow / PyTorch', 'Hugging Face', 'LangChain', 'OpenAI GPT'].map((tech) => (
                      <li key={tech} className="flex items-center gap-2 text-black">
                        <span className="text-[#FF6B6B] font-bold">•</span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="neo-brutalist-white p-6">
                  <h3 className="text-xl font-black text-black mb-4">
                    Web Development
                  </h3>
                  <ul className="space-y-2">
                    {['React / Next.js', 'TypeScript', 'Node.js', 'Python / FastAPI'].map((tech) => (
                      <li key={tech} className="flex items-center gap-2 text-black">
                        <span className="text-[#FF6B6B] font-bold">•</span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96">
              <div className="relative w-full h-full overflow-hidden neo-brutalist-white transform rotate-[2deg]">
                <Image
                  src="/pepe-wizard.png"
                  alt="Pepe Wizard - hyperxav"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 