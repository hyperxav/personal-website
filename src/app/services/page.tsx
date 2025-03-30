'use client'

import { 
  ChatBubbleLeftRightIcon, 
  RocketLaunchIcon,
  ArrowPathIcon,
  CogIcon,
  CodeBracketIcon,
  WindowIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const services = [
  {
    title: "AI Agent Development",
    description: "Design and deploy intelligent agents powered by LLMs.",
    icon: RocketLaunchIcon,
    iconColor: "text-emerald-500",
    features: [
      "Task planning and execution with memory",
      "Tool usage (e.g., web search, API calls)"
    ]
  },
  {
    title: "AI Chatbot Integration",
    subtitle: "(Web & WhatsApp)",
    description: "Conversational assistants tailored to your business logic.",
    icon: ChatBubbleLeftRightIcon,
    iconColor: "text-green-500",
    features: [
      "Human-like conversation flow",
      "API and database integration",
      "Seamless fallback to human agents"
    ]
  },
  {
    title: "Workflow Automation",
    subtitle: "with AI",
    description: "Replace repetitive tasks with intelligent automation.",
    icon: ArrowPathIcon,
    iconColor: "text-blue-400",
    features: [
      "Email classification and routing",
      "Report generation and form parsing",
      "AI-enhanced data pipelines"
    ]
  },
  {
    title: "AI-Powered Internal Tools",
    description: "Custom web applications powered by LLMs.",
    icon: CogIcon,
    iconColor: "text-yellow-500",
    features: [
      "Text summarizers and generators",
      "Document processing and parsing"
    ]
  },
  {
    title: "AI MVP & SaaS Prototyping",
    description: "From idea to AI-powered MVP in days",
    icon: RocketLaunchIcon,
    iconColor: "text-blue-500",
    features: [
      "Full-stack product development",
      "Authentication, billing, and user dashboards"
    ]
  },
  {
    title: "Custom AI Interfaces",
    description: "Build intuitive frontends for AI-powered tools.",
    icon: CodeBracketIcon,
    iconColor: "text-indigo-500",
    features: [
      "React + Tailwind development",
      "State handling with API integration"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-24 px-6 sm:px-12 md:px-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Services
        </motion.h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <service.icon className={`w-12 h-12 ${service.iconColor}`} />
                <div>
                  <h2 className="text-xl font-bold">{service.title}</h2>
                  {service.subtitle && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{service.subtitle}</p>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <span className="text-sm">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 