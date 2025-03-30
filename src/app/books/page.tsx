'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpenIcon } from '@heroicons/react/24/outline'

const books = [
  {
    title: 'The Meaning of Lyfe',
    volume: 'Volume I',
    description: `This first volume lays the theoretical foundation. It presents life as a thermodynamic process — an emergent pattern that transforms energy into structure, memory, and complexity. Drawing from physics, biology, and systems theory, it formulates a central principle: life evolves by capturing more energy to store more information, and uses that information to access even greater energy in return.

The Meaning of Lyfe is both a scientific framework and a philosophical invitation — redefining evolution as a directional force toward intelligence, coherence, and higher-order goals.`,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'A History of Singularities',
    volume: 'Volume II',
    description: `The second book applies the energy–information lens to human history. It identifies key turning points — from the control of fire to the rise of artificial intelligence — as thermodynamic phase transitions, or singularities, that restructured the trajectory of civilization.

Each chapter explores one of these transformations, showing how new energy sources and new information systems shaped the human condition. The book blends historical insight, systems thinking, and poetic transitions to offer a new understanding of where we come from — and where we might be going.`,
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Serving Lyfe',
    volume: 'Volume III',
    description: `The final volume turns toward action. In a world increasingly shaped by entropy — environmental collapse, mental fatigue, algorithmic chaos — Serving Lyfe offers a practical and philosophical path forward.

It introduces the figure of the Stellar Man: one who resists the degenerative pull of entropy by becoming a local source of order, beauty, and meaning. Through discipline, creativity, and a commitment to life's expansion, this final book proposes a new ethic — one rooted in extropy, care, and cosmic ambition.`,
    color: 'from-green-500 to-emerald-500'
  }
]

export default function Books() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            SALAM Trilogy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SALAM is a trilogy that explores the evolution of life, humanity, and intelligence through the lenses of thermodynamics, information theory, and philosophical inquiry. Across three volumes, it traces how energy and information shaped the cosmos — and how humans, as conscious agents, can respond to entropy with meaning, action, and transcendence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                />
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${book.color} mb-6`}>
                  <BookOpenIcon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {book.volume}
                </h3>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {book.title}
                </h2>
                <div className="prose prose-lg dark:prose-invert">
                  {book.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-300 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 via-green-400 to-blue-500 hover:from-orange-600 hover:via-green-500 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Notified on Release
          </a>
        </motion.div>
      </div>
    </div>
  )
} 