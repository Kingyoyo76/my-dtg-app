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
  Award,
  Sparkles,
  Menu,
  ExternalLink,
  Rocket,
  Dumbbell,
  Flame,
  Heart,
} from 'lucide-react'
import { Link as ScrollLink, Element } from 'react-scroll'

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400">
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

export default function HomePage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-gray-900">
        <header className="bg-white shadow-sm fixed w-full z-50">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/dtg logo.png" // update with your logo path
                alt="DTG Logo"
                width={150}
                height={50}
                className="h-16 w-auto"
              />
            </div>
            <ul className="hidden md:flex space-x-6">
              {['Solutions', 'Industries', 'Impact', 'Approach', 'Contact'].map((item) => (
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
                {['Solutions', 'Industries', 'Impact', 'Approach', 'Contact'].map((item) => (
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
          <Element name="hero">
            <section className="py-16 overflow-hidden">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2">
                    <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">STOP FALLING BEHIND.</h1>
                      <p className="text-xl mb-6">Your competition is using AI. Time to take action with DTG.</p>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white text-2xl px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        TAKE CONTROL WITH AI NOW
                      </Button>
                    </m.div>
                  </div>
                  <m.div className="md:w-1/2" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <Image src="/ai-illustration.png" alt="AI-Powered Business Domination" width={400} height={400} className="rounded-lg shadow-2xl object-cover" />
                  </m.div>
                </div>
              </div>
            </section>
          </Element>

          <Element name="solutions">
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <SectionHeader>DOMINATE WITH AI-POWERED SOLUTIONS</SectionHeader>
                <div className="grid md:grid-cols-2 gap-8">
                  <FeatureCard icon={<Brain className="h-10 w-10 text-blue-600" />} title="UNBREAKABLE AI SOLUTIONS" description="Our AI isn't just smart—it's relentless." />
                  <FeatureCard icon={<Zap className="h-10 w-10 text-blue-600" />} title="UNSTOPPABLE AUTOMATION" description="Automate with power and precision." />
                </div>
              </div>
            </section>
          </Element>
        </main>

        <footer className="bg-blue-900 text-white mt-16 py-6 text-center">
          <p>© 2024 DTG. Pushing the Boundaries of AI Excellence. No Excuses.</p>
        </footer>
      </div>
    </LazyMotion>
  )
}
