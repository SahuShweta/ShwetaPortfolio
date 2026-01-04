'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileImage from '../components/ProfileImage';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Portfolio() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 h-16 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">
            Shweta<span className="text-blue-600 dark:text-blue-400">.</span>
          </div>

          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 max-w-6xl mx-auto">

            <div className="flex-1 text-center md:text-left space-y-6">
              <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                Future Software Engineer
              </h2>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Shweta Sahu</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
                A Computer Science Engineering student passionate about building clean, efficient, and accessible web solutions.
                Focused on <span className="font-semibold text-gray-900 dark:text-gray-100">Python</span> and the <span className="font-semibold text-gray-900 dark:text-gray-100">MERN Stack</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-gray-300 dark:border-gray-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                <ProfileImage
                  src="/profile.jpg"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-center mt-20 opacity-50 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Main Content Components */}
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Shweta Sahu. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}
