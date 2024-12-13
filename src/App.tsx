import React, { useState } from 'react';
import { Terminal, Zap, Feather, Package, Menu, X } from 'lucide-react';
import { motion } from "motion/react"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white flex flex-col relative ">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute h-[20px] w-[20px] rounded-full bg-purple-500/20 blur-xl top-20 left-20 animate-float"/>
        <div className="absolute h-[30px] w-[30px] rounded-full bg-blue-500/20 blur-xl top-40 right-40 animate-float-delayed"/>
        <div className="absolute h-[25px] w-[25px] rounded-full bg-purple-500/20 blur-xl bottom-40 left-1/3 animate-float"/>
      </div>

      {/* Navigation */}
      <header className="z-40 p-6 border-b border-white/10 sticky top-0 backdrop-filter backdrop-blur-sm bg-opacity-25">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 md:mr-32">
            <Terminal className="h-8 w-8" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
              Echo
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex mx-auto space-x-8 font-medium text-lg">
              <li><a href="#features" className="hover:text-purple-300 transition-colors">Features</a></li>
              <li><a href="#install" className="hover:text-purple-300 transition-colors">Install</a></li>
              <li><a href="https://github.com/faizanr27" className="hover:text-purple-300 transition-colors">GitHub</a></li>
            </ul>
          </nav>
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 border border-purple-500 text-purple-300 hover:bg-purple-500/20 rounded">
              Documentation
            </button>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded">
              Get Started
            </button>
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="md:hidden fixed inset-0 z-20 bg-gray-900/95 backdrop-blur-sm">
          {/* <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen && <X size={24} className='absolute top-4 right-4' />}
          </button> */}
          
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col space-y-6 font-medium text-xl text-center">
              <li><a href="#features" className="hover:text-purple-300 transition-colors" onClick={toggleMenu}>Features</a></li>
              <li><a href="#install" className="hover:text-purple-300 transition-colors" onClick={toggleMenu}>Install</a></li>
              <li><a href="https://github.com/yourusername/echo" className="hover:text-purple-300 transition-colors" onClick={toggleMenu}>GitHub</a></li>
              <li>
                <button className="px-4 py-2 border border-purple-500 text-purple-300 hover:bg-purple-500/20 rounded w-full" onClick={toggleMenu}>
                  Documentation
                </button>
              </li>
              <li>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded w-full" onClick={toggleMenu}>
                  Get Started
                </button>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}

      {/* Hero Section */}
      <main className="flex-grow relative z-10 my-10">
        <section className="py-20 md:py-32">
          <div className="container mx-auto text-center px-4">
            <motion.h1
                 initial={{ opacity: 0, y:-100 }}
                 whileInView={{ opacity: 1, y:0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Explore the Power of
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Terminal HTTP Client
              </span>
            </motion.h1>
            <motion.p 
                             initial={{ opacity: 0, y:50 }}
                             whileInView={{ opacity: 1, y:0 }}
                             viewport={{ once: true }}
                             transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {">"}_ Echo is A fast, minimal, and lightweight HTTP client designed for developers who live in the terminal.
            </motion.p>
            <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                  whileHover={{ scale: 1.1}}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg rounded w-full sm:w-auto">
                Get Started
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-300 hover:bg-purple-500/20 text-lg rounded w-full sm:w-auto">
                View on GitHub
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Why Choose Echo?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Zap className="h-12 w-12 text-purple-400" />}
                title="Lightning Fast"
                description="Optimized for speed, Echo delivers rapid HTTP requests and responses with minimal latency."
              />
              <FeatureCard 
                icon={<Feather className="h-12 w-12 text-purple-400" />}
                title="Minimal Design"
                description="Clean, intuitive terminal interface with zero clutter. Just the essentials you need."
              />
              <FeatureCard 
                icon={<Package className="h-12 w-12 text-purple-400" />}
                title="Lightweight"
                description="Tiny footprint, easy to install, and runs smoothly on any system without heavy dependencies."
              />
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="install" className="py-20">
          <div className="container mx-auto text-center px-4">
            <motion.h2 
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="text-3xl md:text-4xl font-bold mb-12">Get Started in Seconds</motion.h2>
            <motion.div 
                        initial={{opacity:0, scale:0.5}}
                        whileInView={{opacity:1, scale:1}}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01]
                        }}
            className="bg-gray-900/50 p-6 rounded-lg inline-block backdrop-blur-sm border border-purple-500/20">
              <code className="text-purple-400 text-lg">npm install -g "Will update | it's a work in progress"</code>
            </motion.div>
            <p className="mt-6 text-gray-400">Requires Node.js 14+</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Echo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      whileHover={{ scale: 1.1}}
      // transition={{ duration: 0.3 }}
      className="bg-gray-900/30 backdrop-blur-sm border border-purple-500/20 p-8 rounded-xl text-center hover:bg-purple-500/10 transition-colors">
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-purple-300">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

export default App;

