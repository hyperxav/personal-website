'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
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
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative bg-[#FFF5EB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl sm:text-7xl font-black leading-none text-black">
                AI APPS DEVELOPMENT
              </h1>
              
              <div className="inline-block">
                <div className="bg-[#FFD93D] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] px-8 py-3">
                  <p className="text-xl sm:text-2xl font-bold">
                    Building the future with AI magic & web wizardry
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <Link
                  href="/projects"
                  className="neo-brutalist-red text-black text-lg font-bold px-8 py-4"
                >
                  View My Work →
                </Link>
                <Link
                  href="/contact"
                  className="neo-brutalist-green text-black text-lg font-bold px-8 py-4"
                >
                  Let's Work Together
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-[500px] mx-auto">
                <div className="absolute top-0 right-0 w-24 h-24 neo-brutalist-blue transform rotate-12 z-10">
                  <RocketLaunchIcon className="w-12 h-12 m-6 text-black" />
                </div>
                
                <div className="absolute -top-4 right-[20%] neo-brutalist-red px-6 py-3 transform -rotate-6 z-20">
                  <span className="text-2xl font-black text-black">Xavier</span>
                </div>

                <div className="relative w-full h-full neo-brutalist-white p-4">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/pepe-wizard.png"
                      alt="Xavier - AI Developer"
                      fill
                      className="object-cover spin-hover"
                      priority
                    />
                  </div>
                </div>

                <div className="absolute bottom-4 -left-4 neo-brutalist-green p-4 transform rotate-6 z-10">
                  <ChatBubbleLeftRightIcon className="w-12 h-12 text-black" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-center mb-12">
              <motion.div
                initial={{ rotate: -2 }}
                animate={{ rotate: -2 }}
                className="neo-brutalist-red inline-block px-6 py-2 transform"
              >
                <h2 className="text-3xl font-black">
                  Featured Projects
                </h2>
              </motion.div>
              <Link 
                href="/projects"
                className="neo-brutalist-button bg-[#B4C7FF]"
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
                  className="neo-brutalist-card bg-white p-8"
                >
                  <h3 className="text-xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-[#FFD93D] border-2 border-black text-sm font-bold"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF5EB] relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-center mb-12">
              <motion.div
                initial={{ rotate: 2 }}
                animate={{ rotate: 2 }}
                className="neo-brutalist-green inline-block px-6 py-2 transform"
              >
                <h2 className="text-3xl font-black">
                  Services
                </h2>
              </motion.div>
              <Link 
                href="/services"
                className="neo-brutalist-button bg-[#7FE0AA]"
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
                  className="neo-brutalist-card bg-white p-8"
                >
                  <service.icon className="w-12 h-12 mb-6" />
                  <h3 className="text-xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              initial={{ rotate: -1 }}
              animate={{ rotate: -1 }}
              className="neo-brutalist-blue inline-block px-6 py-2 transform mb-12"
            >
              <h3 className="text-3xl font-black">
                Technical Powers
              </h3>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="neo-brutalist-card bg-[#FFD93D] px-6 py-3"
                >
                  <span className="font-bold">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 