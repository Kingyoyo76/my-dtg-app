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
  Flame,
  Hotel,
  Heart
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

const impactStats = [
  { value: "40%", label: "Efficiency Increase" },
  { value: "50%", label: "Cost Savings" },
  { value: "3x", label: "Decision Speed" },
  { value: "100%", label: "Commitment to Your Success" },
]

const approachSteps = [
  { title: "IDENTIFY YOUR BATTLEFRONT", desc: "We pinpoint the obstacles holding you back and uncover new opportunities." },
  { title: "BUILD A TAILORED STRATEGY", desc: "Our AI roadmap aligns with your unique goals and business vision." },
  { title: "IMPLEMENT WITH FORCE", desc: "Our team deploys AI solutions with precision, focused on delivering measurable impact." },
  { title: "ELEVATE & OPTIMIZE", desc: "Our work doesn't end at implementation. We continually enhance your AI to push further." },
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
                  <div className="md:w-1/2 flex flex-col justify-between h-full">
                    <m.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-800">
                        <span className="block">STOP FALLING BEHIND.</span>
                        <span className="block text-blue-600">YOUR COMPETITION IS USING AI.</span>
                        <span className="block">TIME TO TAKE ACTION WITH DTG.</span>
                      </h1>
                      <ul className="space-y-4 mb-8">
                        {[
                          { icon: <Sparkles className="h-6 w-6 text-blue-600 inline mr-2" />, text: "TRANSFORM Your Business Before Your Competition Does" },
                          { icon: <Brain className="h-6 w-6 text-blue-600 inline mr-2" />, text: "NO MORE EXCUSES - AI Is Your Force Multiplier" },
                          { icon: <Cpu className="h-6 w-6 text-blue-600 inline mr-2" />, text: "DOMINATE Your Market with AI-Powered Efficiency" },
                          { icon: <Code className="h-6 w-6 text-blue-600 inline mr-2" />, text: "ZERO CODING Required - NO MORE BARRIERS" },
                          { icon: <Rocket className="h-6 w-6 text-blue-600 inline mr-2" />, text: "OUTWORK Your Competition with AI" }
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            {item.icon}
                            <span className="text-xl md:text-2xl font-bold text-gray-700">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 md:mt-16 flex justify-center">
                        <Button
                          size="lg"
                          className="bg-blue-600 hover:bg-blue-700 text-white text-2xl px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => setShowContactForm(true)}
                        >
                          TAKE CONTROL WITH AI NOW
                        </Button>
                      </div>
                    </m.div>
                  </div>
                  <m.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="relative h-full flex items-center">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yC7jaPSs9wkh0okwpKNng-b1GHwI52ytV94G3WnxoA7Na6oPYwV2.jpeg"
                        alt="AI-Powered Business Domination"
                        width={800}
                        height={800}
                        className="rounded-lg shadow-2xl object-cover w-full h-full"
                      />
                      <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-4 rounded-lg shadow-lg transform rotate-12">
                        <div className="flex items-center gap-2">
                          <Award className="h-6 w-6" />
                          <p className="text-sm font-medium">
                            Service-Disabled Veteran-Owned. We Know Discipline.
                          </p>
                        </div>
                      </div>
                    </div>
                  </m.div>
                </div>
              </div>
            </section>
          </Element>

          <Element name="solutions">
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <SectionHeader>DOMINATE WITH AI-POWERED SOLUTIONS</SectionHeader>
                <div className="text-xl text-center mb-12 text-gray-600 space-y-2">
                  <p className="text-2xl font-semibold">No More Excuses. Time to Crush It.</p>
                  <p>Our solutions integrate with military precision. Get ready to dominate.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {solutions.map((solution, index) => (
                    <FeatureCard key={index} icon={solution.icon} title={solution.title} description={solution.description} />
                  ))}
                </div>
                <div className="text-center mt-12">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setShowContactForm(true)}
                  >
                    SCHEDULE YOUR AI BATTLE PLAN SESSION
                  </Button>
                </div>
              </div>
            </section>
          </Element>

          <Element name="industries">
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <SectionHeader>CONQUER YOUR INDUSTRY WITH AI</SectionHeader>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {industries.map((industry, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        {industry.icon}
                        <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {industry.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </Element>

          <Element name="impact">
            <section className="py-16 bg-blue-600 text-white">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">THE IMPACT OF OUR AI SOLUTIONS</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-5xl font-bold mb-2">{stat.value}</p>
                      <p className="text-xl">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Element>

          <Element name="approach">
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <SectionHeader>OUR BATTLE-TESTED AI IMPLEMENTATION APPROACH</SectionHeader>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {approachSteps.map((step, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{index + 1}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </Element>

          <Element name="contact">
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">READY TO STOP TALKING AND START DOING?</h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                  Your competition isn't waiting. Every day you delay is another day they get ahead. Take action now.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setShowContactForm(true)}
                >
                  TAKE THE FIRST STEP NOW
                </Button>
              </div>
            </section>
          </Element>
        </main>

        <Footer />

        {showContactForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Take the First Step</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted! We'll be in touch soon. Stay hard!");
                setShowContactForm(false);
              }}>
                <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded" required />
                <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" required />
                <textarea placeholder="Message" className="w-full p-2 mb-4 border rounded" rows={4} required></textarea>
                <div className="flex justify-end">
                  <Button type="button" onClick={() => setShowContactForm(false)} className="mr-2">Not Ready</Button>
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </LazyMotion>
  )
}