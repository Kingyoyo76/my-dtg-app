'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  Zap,
  Cpu,
  FileText,
  Briefcase,
  GraduationCap,
  Banknote,
  Film,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  X,
  TrendingUp,
  Lightbulb,
  Target,
  BarChart,
  Award,
  Shield,
  Clock,
  LineChart,
  Users,
  Code,
  Sparkles,
  Menu,
  ExternalLink,
  Rocket,
  Dumbbell,
  Flame
} from 'lucide-react'
import { Link as ScrollLink, Element } from 'react-scroll'

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
    {children}
  </h2>
)

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <m.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl border border-blue-100"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </m.div>
)

const AnimatedText = ({ messages, className }: { messages: string[], className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className={`h-32 overflow-hidden ${className}`}>
      {messages.map((message, index) => (
        <m.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: index === currentIndex ? 1 : 0, y: index === currentIndex ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-center gap-3 mb-4 ${index === currentIndex ? 'block' : 'hidden'}`}
        >
          {index === 0 && <Dumbbell className="h-10 w-10 text-blue-600 flex-shrink-0" />}
          {index === 1 && <Flame className="h-10 w-10 text-blue-600 flex-shrink-0" />}
          {index === 2 && <Target className="h-10 w-10 text-blue-600 flex-shrink-0" />}
          {index === 3 && <Brain className="h-10 w-10 text-blue-600 flex-shrink-0" />}
          {index === 4 && <Rocket className="h-10 w-10 text-blue-600 flex-shrink-0" />}
          <p className="text-3xl font-bold">{message}</p>
        </m.div>
      ))}
    </div>
  );
};

// Define your content (features, solutions, etc.) here as in previous steps...

const Footer = () => (
  <footer className="bg-blue-900 text-white">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">About DTG</h3>
        <p className="text-sm text-gray-300">
          Distributed Technology Group (DTG) - A service-disabled veteran-owned company committed to transforming businesses with no-nonsense, results-driven AI solutions.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Quick Links</h3>
        <nav>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">AI Solutions</Link></li>
            <li><Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Industries We Serve</Link></li>
            <li><Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Case Studies</Link></li>
            <li><Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Connect With Us</h3>
        <p className="text-sm text-gray-300">
          Ready to revolutionize your business with AI? Get in touch with our experts today.
        </p>
        <Link 
          href="https://www.dtg.com" 
          className="text-blue-300 hover:text-blue-100 transition-colors duration-200 flex items-center gap-2"
        >
          Visit our website
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </div>
    <div className="border-t border-blue-800 mt-8 pt-8 text-center">
      <p className="text-sm text-gray-400">
        © 2024 DTG. All rights reserved. Pushing the boundaries of AI excellence.
      </p>
    </div>
  </footer>
)

export default function Component() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ContactForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted! We'll be in touch soon.");
          setShowContactForm(false);
        }}>
          <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded" required />
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" required />
          <textarea placeholder="Message" className="w-full p-2 mb-4 border rounded" rows={4} required></textarea>
          <div className="flex justify-end">
            <Button type="button" onClick={() => setShowContactForm(false)} className="mr-2">Cancel</Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-gray-900">
        <header className="bg-white shadow-sm fixed w-full z-50">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="https://your-logo-url.com" // Replace with your logo URL
                alt="DTG Logo"
                width={200}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </div>
            <ul className="hidden md:flex space-x-6">
              {['Solutions', 'Industries', 'Approach', 'Contact'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <Button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </nav>
          {mobileMenuOpen && (
            <div className="md:hidden bg-white py-2">
              <ul className="flex flex-col items-center space-y-2">
                {['Solutions', 'Industries', 'Approach', 'Contact'].map((item) => (
                  <li key={item}>
                    <ScrollLink
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        <main className="pt-24">
          {/* Sections (Hero, Features, Solutions, etc.) go here */}
          {/* Example */}
          <Element name="hero">
            <section className="py-16 bg-blue-50">
              <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold text-gray-800">Welcome to DTG AI Solutions</h1>
                <p className="mt-4 text-lg text-gray-700">Transforming businesses with innovative AI-powered solutions.</p>
              </div>
            </section>
          </Element>
          {/* Add other sections similarly */}
        </main>

        <Footer />

        {showContactForm && <ContactForm />}
      </div>
    </LazyMotion>
  )
}
