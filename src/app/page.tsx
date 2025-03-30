'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChatBubbleLeftRightIcon, RocketLaunchIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const skills = [
  'Python',
  'JavaScript',
  'Next.js',
  'Hugging Face',
  'LangChain',
  'GPT',
  'TailwindCSS',
  'FastAPI',
  'Supabase',
  'Machine Learning',
  'React',
  'TypeScript'
]

const featuredProjects = [
  {
    title: 'AI-Powered Content Generator',
    description: 'A sophisticated content generation platform using GPT-4 and LangChain.',
    tags: ['Python', 'FastAPI', 'LangChain', 'React']
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Real-time data visualization platform processing millions of events daily.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'D3.js']
  },
  {
    title: 'Machine Learning Pipeline',
    description: 'Robust ML pipeline framework for production model deployment.',
    tags: ['Python', 'TensorFlow', 'Docker', 'MLflow']
  }
]

const featuredServices = [
  {
    title: 'AI Agent Development',
    description: 'Design and deploy intelligent agents powered by LLMs.',
    icon: RocketLaunchIcon,
    iconColor: 'text-emerald-500'
  },
  {
    title: 'AI Chatbot Integration',
    description: 'Custom AI chatbots for WhatsApp and web platforms.',
    icon: ChatBubbleLeftRightIcon,
    iconColor: 'text-blue-500'
  },
  {
    title: 'Workflow Automation',
    description: 'Replace repetitive tasks with intelligent automation.',
    icon: ArrowPathIcon,
    iconColor: 'text-purple-500'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl text-gray-700 dark:text-gray-300 mb-6">
              Software Engineer | AI & Web Developer
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10">
              I help businesses and startups build scalable, intelligent software — from AI agents to custom web applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 via-green-400 to-blue-500 hover:from-orange-600 hover:via-green-500 hover:to-blue-600 transition-all duration-200 glow-effect"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-200 glow-effect"
              >
                Let's Work Together
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Featured Projects
              </h2>
              <Link 
                href="/projects"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2"
              >
                View all projects →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Services
              </h2>
              <Link 
                href="/services"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2"
              >
                View all services →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor} mb-4`} />
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-12 text-gray-900 dark:text-gray-100">
              Technical Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 