'use client'

import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI-Powered Content Generator',
    description: 'Developed a sophisticated content generation platform using GPT-4 and LangChain, enabling businesses to create high-quality, contextually relevant content at scale.',
    techStack: ['Python', 'FastAPI', 'LangChain', 'GPT-4', 'React', 'TypeScript'],
    impact: 'Reduced content creation time by 75% while maintaining high quality standards for enterprise clients.',
    demoUrl: 'https://demo.hyperxav.com/ai-content',
    githubUrl: 'https://github.com/hyperxav/ai-content-gen'
  },
  {
    title: 'Machine Learning Pipeline Framework',
    description: 'Built a robust ML pipeline framework that streamlines the deployment and monitoring of machine learning models in production environments.',
    techStack: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'MLflow'],
    impact: 'Successfully deployed 20+ ML models with 99.9% uptime and reduced deployment time from days to hours.',
    demoUrl: 'https://demo.hyperxav.com/ml-pipeline',
    githubUrl: 'https://github.com/hyperxav/ml-pipeline'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Created a real-time analytics platform that processes and visualizes data from multiple sources with sub-second latency.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'WebSocket', 'D3.js'],
    impact: 'Enabled real-time decision making for a fintech client, processing over 1M events per day.',
    demoUrl: 'https://demo.hyperxav.com/analytics',
    githubUrl: 'https://github.com/hyperxav/realtime-analytics'
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">Featured Projects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my expertise in AI, machine learning, and web development.
          </p>

          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-3">
                      Impact
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-orange-500 via-green-400 to-blue-500 hover:from-orange-600 hover:via-green-500 hover:to-blue-600 transition-all duration-200"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 