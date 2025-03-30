'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              About Me
            </h1>
            
            <div className="space-y-8 text-lg text-gray-600 dark:text-gray-300">
              <p>
                I'm Xavier, a freelance software engineer focused on building clean, powerful applications 
                for clients across AI, automation, and fullstack development. I combine technical precision 
                with elegant UI to bring your product vision to life.
              </p>

              <p>
                With over a decade of experience in software development, I've helped numerous startups 
                and established companies implement cutting-edge technologies to solve complex business 
                challenges. My expertise spans artificial intelligence, machine learning, robotics and modern web 
                development.
              </p>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  I'm particularly passionate about:
                </h2>

                <ul className="list-disc list-outside space-y-3 ml-6">
                  <li>Building AI-powered applications that deliver real business value</li>
                  <li>Creating intuitive, responsive web applications with modern frameworks</li>
                  <li>Implementing scalable machine learning solutions</li>
                  <li>Optimizing development workflows and system architecture</li>
                </ul>
              </div>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or writing about software development on my blog.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Core Technologies
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    AI & Machine Learning
                  </h3>
                  <ul className="list-disc list-outside text-lg text-gray-600 dark:text-gray-300 space-y-2 ml-6">
                    <li>TensorFlow / PyTorch</li>
                    <li>Hugging Face</li>
                    <li>LangChain</li>
                    <li>OpenAI GPT</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Web Development
                  </h3>
                  <ul className="list-disc list-outside text-lg text-gray-600 dark:text-gray-300 space-y-2 ml-6">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>Python / FastAPI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                {/* Replace the src with your actual image */}
                <Image
                  src="/avatar-placeholder.jpg"
                  alt="Xavier - hyperxav"
                  fill
                  className="object-cover"
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