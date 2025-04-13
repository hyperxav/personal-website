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
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FFF5EB]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="neo-brutalist-red inline-block px-6 py-2 transform rotate-[-2deg] mb-8"
            >
              <h1 className="text-4xl font-black text-black">
                Featured Projects
              </h1>
            </motion.div>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my expertise in AI, machine learning, and web development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="neo-brutalist-white p-8"
              >
                <h2 className="text-2xl font-black text-black mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-sm font-black text-black uppercase tracking-wider mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="neo-brutalist-yellow px-3 py-1 text-sm font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-black text-black uppercase tracking-wider mb-3">
                    Impact
                  </h3>
                  <p className="text-gray-600">
                    {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-brutalist-red text-black text-sm font-black uppercase px-4 py-2"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-brutalist-blue text-black text-sm font-black uppercase px-4 py-2"
                  >
                    View on GitHub →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 