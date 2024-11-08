'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link as ScrollLink, Element } from 'react-scroll'
import {
  Sparkles, Brain, Cpu, Code, Rocket, Menu, ExternalLink, Dumbbell, Flame
} from 'lucide-react'

// Simple Section Header
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

// Footer Section
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
            <li><a href="#" className="text-gray-300 hover:text-blue-300">AI Solutions</a></li>
            <li><a href="#" className="text-gray-300 hover:text-blue-300">Industries We Serve</a></li>
            <li><a href="#" className="text-gray-300 hover:text-blue-300">Case Studies</a></li>
            <li><a href="#" className="text-gray-300 hover:text-blue-300">Contact Us</a></li>
          </ul>
        </nav>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Connect With Us</h3>
        <p className="text-sm text-gray-300">Ready to revolutionize your business with AI? Get in touch.</p>
        <a 
          href="https://www.dtg.com" 
          className="text-blue-300 hover:text-blue-100 transition-colors duration-200 flex items-center gap-2"
        >
          Visit our website <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
    <div className="border-t border-blue-800 mt-8 pt-8 text-center">
      <p className="text-sm text-gray-400">© 2024 DTG. All rights reserved.</p>
    </div>
  </footer>
)

export default function Page() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-gray-900">
        <header className="bg-white shadow-sm fixed w-full z-50">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/public/logo-placeholder.png" // Replace this with your image URL if applicable
                alt="DTG Logo"
                width={200}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </div>
            <ul className="hidden md:flex space-x-6">
              {['Solutions', 'Industries', 'Contact'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-gray-600 hover:text-blue-600"
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
                {['Solutions', 'Industries', 'Contact'].map((item) => (
                  <li key={item}>
                    <ScrollLink
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="text-gray-600 hover:text-blue-600"
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
          <Element name="hero">
            <section className="py-16 bg-blue-50 text-center">
              <h1 className="text-5xl font-bold text-gray-800">Welcome to DTG AI Solutions</h1>
              <p className="mt-4 text-lg text-gray-700">Transforming businesses with AI-powered solutions.</p>
            </section>
          </Element>

          <Element name="solutions">
            <section className="py-16 bg-white">
              <SectionHeader>Our Solutions</SectionHeader>
              <div className="grid md:grid-cols-2 gap-8 px-4">
                <FeatureCard icon={<Sparkles className="h-10 w-10 text-blue-600" />} title="Innovative AI" description="Leading the industry with transformative AI solutions." />
                <FeatureCard icon={<Brain className="h-10 w-10 text-blue-600" />} title="Advanced Analytics" description="Unlock powerful insights and analytics." />
              </div>
            </section>
          </Element>

          <Element name="industries">
            <section className="py-16 bg-gray-50">
              <SectionHeader>Industries We Serve</SectionHeader>
              <div className="grid md:grid-cols-3 gap-8 px-4">
                <FeatureCard icon={<Cpu className="h-10 w-10 text-blue-600" />} title="Manufacturing" description="Optimizing manufacturing processes." />
                <FeatureCard icon={<Rocket className="h-10 w-10 text-blue-600" />} title="Healthcare" description="Revolutionizing healthcare with AI." />
                <FeatureCard icon={<Code className="h-10 w-10 text-blue-600" />} title="Finance" description="Enhancing financial operations with AI." />
              </div>
            </section>
          </Element>

          <Element name="contact">
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl mb-8">Ready to revolutionize your business with AI? Contact us today.</p>
              <Button className="bg-white text-blue-600 px-8 py-4 rounded-lg">Contact Us</Button>
            </section>
          </Element>
        </main>

        <Footer />
      </div>
    </LazyMotion>
  )
}
