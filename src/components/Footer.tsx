'use client'

import React from 'react'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com/HyperXav',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    name: 'GitHub',
    href: 'https://github.com/hyperxav',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: 'Hugging Face',
    href: 'https://huggingface.co/hyperxav',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 5.5c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/hyperxav',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  }
]

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Link href="/" className="neo-brutalist-red inline-block px-4 py-2">
              <span className="text-2xl font-black text-black">
                hyperxav
              </span>
            </Link>
            <p className="mt-6 text-lg text-black max-w-md">
              Designing and building AI-powered applications, machine learning tools, and fullstack web platforms for forward-thinking clients. ✨
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <div className="neo-brutalist-blue inline-block px-6 py-2 mb-8">
              <h3 className="text-xl font-black text-black">
                Connect With Me 🤝
              </h3>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-brutalist-yellow p-3"
                  aria-label={link.name}
                >
                  <div className="text-black transform transition-transform duration-200">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t-2 border-black">
          <p className="text-center text-base font-bold text-black">
            © {new Date().getFullYear()} hyperxav. Made with <span className="text-[#FF6B6B]">❤️</span> in Cannes
          </p>
        </div>
      </div>
    </footer>
  )
} 