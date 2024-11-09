'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
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
  ArrowRight
} from 'lucide-react'

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

  useEffect(() => {
    setIsLoaded(true)
    console.log('Page component mounted')
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  const ContactForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
        <form onSubmit={(e) => {
          e.preventDefault()
          alert("Form submitted! We'll be in touch soon.")
          setShowContactForm(false)
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
  )

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
                <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <Button className="md:hidden">Menu</Button>
        </nav>
      </header>

      <main className="pt-24">
        <section id="hero" className="py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
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
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI-Powered Business Transformation"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader>OUR AI SOLUTIONS</SectionHeader>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Brain className="h-10 w-10 text-blue-600" />, title: "UNBREAKABLE AI SOLUTIONS", description: "Equip your business to tackle its biggest challenges and thrive under pressure." },
                { icon: <Zap className="h-10 w-10 text-blue-600" />, title: "UNSTOPPABLE AUTOMATION", description: "Automate with power and precision, eliminating inefficiencies that slow your business down." },
                { icon: <Target className="h-10 w-10 text-blue-600" />, title: "LASER-FOCUSED INSIGHTS", description: "Deliver insights that hit the mark, driving decisions that keep you ahead of the competition." },
              ].map((feature, index) => (
                <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader>INDUSTRIES WE SERVE</SectionHeader>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Manufacturing", items: ["Optimized production", "Quality assurance", "Supply chain resilience"] },
                { title: "Finance", items: ["Risk management", "Fraud detection", "Personalized banking"] },
                { title: "Healthcare", items: ["Patient care optimization", "Drug discovery", "Medical imaging analysis"] },
                { title: "Retail", items: ["Inventory management", "Customer insights", "Personalized marketing"] },
                { title: "Energy", items: ["Grid optimization", "Predictive maintenance", "Renewable energy forecasting"] },
                { title: "Education", items: ["Personalized learning", "Administrative efficiency", "Student performance analysis"] },
              ].map((industry, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                    <ul className="list-disc list-inside">
                      {industry.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader>OUR APPROACH</SectionHeader>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Cpu className="h-10 w-10 text-blue-600" />, title: "Analyze", description: "We dive deep into your business processes to identify key areas for AI integration." },
                { icon: <BarChart className="h-10 w-10 text-blue-600" />, title: "Strategize", description: "Our experts develop a tailored AI strategy aligned with your business goals." },
                { icon: <Rocket className="h-10 w-10 text-blue-600" />, title: "Implement", description: "We deploy cutting-edge AI solutions seamlessly into your existing infrastructure." },
                { icon: <ArrowRight className="h-10 w-10 text-blue-600" />, title: "Optimize", description: "Continuous monitoring and refinement ensure maximum ROI from your AI investment." },
              ].map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {step.icon}
                      <h3 className="text-xl font-semibold ml-3">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">READY TO TRANSFORM YOUR BUSINESS?</h2>
            <p className="text-xl mb-8">
              Let's discuss how DTG's AI solutions can propel your company to new heights of success.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setShowContactForm(true)}
            >
              CONTACT US NOW
            </Button>
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
                <li><a href="#solutions" className="text-gray-400 hover:text-white">Solutions</a></li>
                <li><a href="#industries" className="text-gray-400 hover:text-white">Industries</a></li>
                <li><a href="#approach" className="text-gray-400 hover:text-white">Our Approach</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
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

      {showContactForm && <ContactForm />}
    </div>
  )
}