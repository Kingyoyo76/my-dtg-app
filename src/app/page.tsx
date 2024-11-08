'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain, Zap, Cpu, Briefcase, GraduationCap, Banknote, Film, 
  Target, Rocket, Dumbbell, Flame, Hotel, Heart, Sparkles, 
  Menu, ExternalLink, Award
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

const features = [
  { icon: <Brain className="h-10 w-10 text-blue-600" />, title: "UNBREAKABLE AI SOLUTIONS", description: "Our AI isn't just smart—it's relentless. We equip your business to tackle its biggest challenges and thrive under pressure." },
  { icon: <Dumbbell className="h-10 w-10 text-blue-600" />, title: "STRENGTHEN YOUR OPERATIONS", description: "We build processes that don't just work; they endure. Take your efficiency and resilience to a new level." },
  { icon: <Flame className="h-10 w-10 text-blue-600" />, title: "FUEL FOR INNOVATION", description: "With DTG's AI, you don't follow trends—you set them. Ignite forward-thinking solutions that lead your industry." },
]

const solutions = [
  { icon: <Zap className="h-10 w-10 text-blue-600" />, title: "UNSTOPPABLE AUTOMATION", description: "Automate with power and precision, eliminating inefficiencies that slow your business down." },
  { icon: <Target className="h-10 w-10 text-blue-600" />, title: "LASER-FOCUSED INSIGHTS", description: "DTG's AI delivers insights that hit the mark, driving decisions that keep you ahead of the competition." },
]

const industries = [
  { icon: <GraduationCap className="h-10 w-10 text-blue-600 mb-4" />, title: "Education", items: ["Unlock student potential", "Maximize administrative efficiency", "Advance research initiatives"] },
  { icon: <Briefcase className="h-10 w-10 text-blue-600 mb-4" />, title: "Manufacturing", items: ["Optimized production", "Top-tier quality assurance", "Enhanced supply chain resilience"] },
  { icon: <Banknote className="h-10 w-10 text-blue-600 mb-4" />, title: "Financial Services", items: ["Risk reduction", "Proactive fraud detection", "Unparalleled customer experience"] },
  { icon: <Film className="h-10 w-10 text-blue-600 mb-4" />, title: "Media", items: ["Innovative content strategies", "Seamless video processing", "Precision audience targeting"] },
  { icon: <Hotel className="h-10 w-10 text-blue-600 mb-4" />, title: "Hospitality", items: ["Personalized guest experiences", "Efficient staff allocation", "Streamlined operations"] },
  { icon: <Heart className="h-10 w-10 text-blue-600 mb-4" />, title: "Healthcare", items: ["Enhanced patient care", "Optimized workflows", "Data security and compliance"] },
]

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
            <li>
              <Link 
                href="#" 
                className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
              >
                AI Solutions
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
              >
                Industries We Serve
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Connect With Us</h3>
        <p className="text-sm text-gray-300">
          Ready to dominate your industry with AI? Get in touch with our experts today.
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
    <div className="mt-12 pt-8 border-t border-blue-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          © 2024 DTG. Pushing the Boundaries of AI Excellence. No Excuses.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-gray-400 hover:text-blue-300">Privacy Policy</Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-blue-300">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
)

export default function Component() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-gray-900">
        <header className="bg-white shadow-sm fixed w-full z-50">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-25%20171623-QBQnvTq6phEC2AsFTXjmLoRqfjxxlv.png"
                alt="DTG Logo"
                width={200}
                height={60}
                className="h-16 w-auto"
                priority
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
        </header>

        <main className="pt-24">
          <Element name="hero">
            <section className="py-16 overflow-hidden">
              <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold text-blue-800">Your AI Transformation Starts Here</h1>
              </div>
            </section>
          </Element>

          <Footer />
        </main>
      </div>
    </LazyMotion>
  )
}
