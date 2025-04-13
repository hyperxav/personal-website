'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpenIcon } from '@heroicons/react/24/outline'

const books = [
  {
    volume: 'Volume I',
    title: 'The Meaning of Lyfe',
    description: `This first volume lays the theoretical foundation. It presents life as a thermodynamic process — an emergent pattern that transforms energy into structure, memory, and complexity. Drawing from physics, biology, and systems theory, it formulates a central principle: life evolves by capturing more energy to store more information, and uses that information to access even greater energy in return.

The Meaning of Lyfe is both a scientific framework and a philosophical invitation — redefining evolution as a directional force toward intelligence, coherence, and higher-order goals.`
  },
  {
    volume: 'Volume II',
    title: 'The History of Lyfe',
    description: `The second book applies the energy–information lens to human history. It identifies key turning points — from the control of fire to the rise of artificial intelligence — as thermodynamic phase transitions, or singularities, that restructured the trajectory of civilization.

Each chapter explores one of these transformations, showing how new energy sources and new information systems shaped the human condition. The book blends historical insight, systems thinking, and poetic transitions to offer a new understanding of where we come from — and where we might be going.`
  },
  {
    volume: 'Volume III',
    title: 'Serving Lyfe',
    description: `The final volume turns toward action. In a world increasingly shaped by entropy — environmental collapse, mental fatigue, algorithmic chaos — Serving Lyfe offers a practical and philosophical path forward.

It introduces the figure of the Stellar Man: one who resists the degenerative pull of entropy by becoming a local source of order, beauty, and meaning. Through discipline, creativity, and a commitment to life's expansion, this final book proposes a new ethic — one rooted in extropy, care, and cosmic ambition.`
  }
]

export default function Books() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FFF5EB]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            className="neo-brutalist-red inline-block px-8 py-4 transform rotate-[-2deg] mb-8"
            whileHover={{ rotate: 2, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-black">
              SURVIVRE A LA MEGAMACHINE
            </h1>
          </motion.div>
          
          <div className="neo-brutalist-white p-8 max-w-3xl mx-auto">
            <p className="text-xl text-black">
              Survivre à la Mégamachine (SALAM) is a trilogy that explores the evolution of life, humanity, and intelligence through the lenses of thermodynamics, information theory, and philosophical inquiry. Across three volumes, it traces how energy and information shaped the cosmos — and how humans, as conscious agents, can respond to entropy with meaning, action, and transcendence.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="neo-brutalist-white p-8 h-full">
                <div className="neo-brutalist-yellow inline-flex items-center justify-center w-12 h-12 mb-6 transform rotate-[5deg]">
                  <BookOpenIcon className="w-8 h-8 text-black" />
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-gray-600 mb-2">
                      {book.volume}
                    </h3>
                    <h2 className="text-2xl font-black text-black">
                      {book.title}
                    </h2>
                  </div>
                  {book.volume === 'Volume I' && (
                    <div className="neo-brutalist-blue px-4 py-2 transform rotate-[2deg]">
                      <span className="text-sm font-black text-black whitespace-nowrap">
                        Release: June 2025
                      </span>
                    </div>
                  )}
                </div>

                <div className="prose prose-lg">
                  {book.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-600 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {book.volume === 'Volume I' && (
                  <div className="mt-6">
                    <button className="neo-brutalist-red w-full py-3 text-lg font-black text-black hover:scale-[1.02] transition-transform">
                      Pre-order Now →
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            className="neo-brutalist-red inline-block px-8 py-4 text-lg font-black uppercase text-black"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.2 }}
          >
            Get Notified on Release →
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
} 