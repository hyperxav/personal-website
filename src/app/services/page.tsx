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
import Link from 'next/link';

const services = [
  {
    title: "AI Agent Development",
    description: "Design and deploy intelligent agents powered by LLMs.",
    icon: RocketLaunchIcon,
    iconBg: "neo-brutalist-yellow",
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
    iconBg: "neo-brutalist-blue",
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
    iconBg: "neo-brutalist-green",
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
    iconBg: "neo-brutalist-red",
    features: [
      "Text summarizers and generators",
      "Document processing and parsing"
    ]
  },
  {
    title: "AI MVP & SaaS Prototyping",
    description: "From idea to AI-powered MVP in days",
    icon: RocketLaunchIcon,
    iconBg: "neo-brutalist-yellow",
    features: [
      "Full-stack product development",
      "Authentication, billing, and user dashboards"
    ]
  },
  {
    title: "Custom AI Interfaces",
    description: "Build intuitive frontends for AI-powered tools.",
    icon: CodeBracketIcon,
    iconBg: "neo-brutalist-blue",
    features: [
      "React + Tailwind development",
      "State handling with API integration"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-24 px-6 sm:px-12 md:px-24 bg-[#FFF5EB]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="neo-brutalist-red inline-block px-8 py-3 mb-12 transform rotate-[-2deg]"
        >
          <h1 className="text-4xl sm:text-5xl font-black text-black">
            Services
          </h1>
        </motion.div>
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
              className="neo-brutalist-white p-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`${service.iconBg} p-3 transform rotate-[5deg]`}>
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-black">{service.title}</h2>
                  {service.subtitle && (
                    <p className="text-gray-600 text-sm">{service.subtitle}</p>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-black">
                    <span className="text-[#FF6B6B] font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="neo-brutalist-button bg-[#B4C7FF] hover:scale-[1.02] transition-transform"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 