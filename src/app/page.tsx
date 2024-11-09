'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  Zap,
  Cpu,
  Target,
  BarChart,
  CheckCircle,
  Award,
  Rocket,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
    {children}
  </h2>
)

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
)

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    console.log('Page component mounted')
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-white shadow-sm fixed w-full z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=60&width=200"
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
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <Button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <ul className="flex flex-col items-center space-y-2">
              {['Solutions', 'Industries', 'Approach', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="pt-24">
        <section id="hero" className="py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                className="md:w-1/2"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-800">
                  <span className="block">DOMINATE YOUR INDUSTRY</span>
                  <span className="block text-blue-600">WITH AI-POWERED SOLUTIONS</span>
                  <span className="block">ENGINEERED BY DTG</span>
                </h1>
                <p className="text-xl mb-8">
                  Revolutionize your operations with unbreakable AI integration and optimize for peak performance.
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setShowContactForm(true)}
                >
                  UNLEASH AI POWER NOW
                </Button>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI-Powered Business Transformation"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="solutions" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader>OUR AI SOLUTIONS</SectionHeader>
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[
                { icon: <Brain className="h-10 w-10 text-blue-600" />, title: "UNBREAKABLE AI SOLUTIONS", description: "Equip your business to tackle its biggest challenges and thrive under pressure." },
                { icon: <Zap className="h-10 w-10 text-blue-600" />, title: "UNSTOPPABLE AUTOMATION", description: "Automate with power and precision, eliminating inefficiencies that slow your business down." },
                { icon: <Target className="h-10 w-10 text-blue-600" />, title: "LASER-FOCUSED INSIGHTS", description: "Deliver insights that hit the mark, driving decisions that keep you ahead of the competition." },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="industries" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader>INDUSTRIES WE SERVE</SectionHeader>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[
                { title: "Manufacturing", items: ["Optimized production", "Quality assurance", "Supply chain resilience"] },
                { title: "Finance", items: ["Risk management", "Fraud detection", "Personalized banking"] },
                { title: "Healthcare", items: ["Patient care optimization", "Drug discovery", "Medical imaging analysis"] },
                { title: "Retail", items: ["Inventory management", "Customer insights", "Personalized marketing"] },
                { title: "Energy", items: ["Grid optimization", "Predictive maintenance", "Renewable energy forecasting"] },
                { title: "Education", items: ["Personalized learning", "Administrative efficiency", "Student performance analysis"] },
              ].map((industry, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                      <ul className="list-disc list-inside">
                        {industry.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600">{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="approach" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader>OUR APPROACH</SectionHeader>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[
                { icon: <Cpu className="h-10 w-10 text-blue-600" />, title: "Analyze", description: "We dive deep into your business processes to identify key areas for AI integration." },
                { icon: <BarChart className="h-10 w-10 text-blue-600" />, title: "Strategize", description: "Our experts develop a tailored AI strategy aligned with your business goals." },
                { icon: <Rocket className="h-10 w-10 text-blue-600" />, title: "Implement", description: "We deploy cutting-edge AI solutions seamlessly into your existing infrastructure." },
                { icon: <ArrowRight className="h-10 w-10 text-blue-600" />, title: "Optimize", description: "Continuous monitoring and refinement ensure maximum ROI from your AI investment." },
              ].map((step, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {step.icon}
                        <h3 className="text-xl font-semibold ml-3">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6">READY TO TRANSFORM YOUR BUSINESS?</h2>
              <p className="text-xl mb-8">
                Let&apos;s discuss how DTG&apos;s AI solutions can propel your company to new heights of success.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setShowContactForm(true)}
              >
                CONTACT US NOW
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About DTG</h3>
              <p className="text-gray-400">
                DTG AI Solutions is a leading provider of cutting-edge artificial intelligence solutions for businesses across various industries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('solutions')} className="text-gray-400 hover:text-white">Solutions</button></li>
                <li><button onClick={() => scrollToSection('industries')} className="text-gray-400 hover:text-white">Industries</button></li>
                <li><button onClick={() => scrollToSection('approach')} className="text-gray-400 hover:text-white">Our Approach</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 AI Street, Tech City, TC 12345</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: info@dtgai.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2024 DTG AI Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  )
}