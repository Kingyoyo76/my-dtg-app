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
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Code,
  Dumbbell,
  Flame,
  TrendingUp,
  Lightbulb,
  Shield,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Banknote,
  Film,
  Building2,
  Heart
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
    {children}
  </h2>
)

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl border border-blue-100"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
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
        <motion.div
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
        </motion.div>
      ))}
    </div>
  );
};

const features = [
  { icon: <Brain className="h-10 w-10 text-blue-600" />, title: "UNBREAKABLE AI SOLUTIONS", description: "Our AI isn&apos;t just smart—it&apos;s relentless. We equip your business to tackle its biggest challenges and thrive under pressure." },
  { icon: <Dumbbell className="h-10 w-10 text-blue-600" />, title: "STRENGTHEN YOUR OPERATIONS", description: "We build processes that don&apos;t just work; they endure. Take your efficiency and resilience to a new level." },
  { icon: <Flame className="h-10 w-10 text-blue-600" />, title: "FUEL FOR INNOVATION", description: "With DTG&apos;s AI, you don&apos;t follow trends—you set them. Ignite forward-thinking solutions that lead your industry." },
]

const solutions = [
  { icon: <Zap className="h-10 w-10 text-blue-600" />, title: "UNSTOPPABLE AUTOMATION", description: "Automate with power and precision, eliminating inefficiencies that slow your business down." },
  { icon: <Target className="h-10 w-10 text-blue-600" />, title: "LASER-FOCUSED INSIGHTS", description: "DTG&apos;s AI delivers insights that hit the mark, driving decisions that keep you ahead of the competition." },
]

const industries = [
  { icon: <GraduationCap className="h-10 w-10 text-blue-600 mb-4" />, title: "Education", items: ["Unlock student potential", "Maximize administrative efficiency", "Advance research initiatives"] },
  { icon: <Briefcase className="h-10 w-10 text-blue-600 mb-4" />, title: "Manufacturing", items: ["Optimized production", "Top-tier quality assurance", "Enhanced supply chain resilience"] },
  { icon: <Banknote className="h-10 w-10 text-blue-600 mb-4" />, title: "Financial Services", items: ["Risk reduction", "Proactive fraud detection", "Unparalleled customer experience"] },
  { icon: <Film className="h-10 w-10 text-blue-600 mb-4" />, title: "Media", items: ["Innovative content strategies", "Seamless video processing", "Precision audience targeting"] },
  { icon: <Building2 className="h-10 w-10 text-blue-600 mb-4" />, title: "Hospitality", items: ["Personalized guest experiences", "Efficient staff allocation", "Streamlined operations"] },
  { icon: <Heart className="h-10 w-10 text-blue-600 mb-4" />, title: "Healthcare", items: ["Enhanced patient care", "Optimized workflows", "Data security and compliance"] }
]

const advantages = [
  "AI Solutions That Defy Limits",
  "Seamless Integration for Maximum Impact",
  "24/7 Support and Reliability",
  "Results That Give You the Edge"
]

const approachSteps = [
  { title: "IDENTIFY YOUR BATTLEFRONT", desc: "We pinpoint the obstacles holding you back and uncover new opportunities." },
  { title: "BUILD A TAILORED STRATEGY", desc: "Our AI roadmap aligns with your unique goals and business vision." },
  { title: "IMPLEMENT WITH FORCE", desc: "Our team deploys AI solutions with precision, focused on delivering measurable impact." },
  { title: "ELEVATE & OPTIMIZE", desc: "Our work doesn&apos;t end at implementation. We continually enhance your AI to push further." },
]

const impactStats = [
  { value: "40%", label: "Efficiency Increase" },
  { value: "50%", label: "Cost Savings" },
  { value: "3x", label: "Decision Speed" },
  { value: "100%", label: "Commitment to Your Success" },
]

const caseStudies = [
  {
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    icon: <Briefcase className="h-12 w-12 text-blue-600 mb-4" />,
    challenge: "Inconsistent production and high costs",
    solution: "DTG&apos;s AI-driven process overhaul",
    result: "Streamlined production and significant savings",
    metrics: [
      { icon: <TrendingUp className="h-5 w-5 text-green-500" />, label: "Efficiency Boost", value: "135%" },
      { icon: <BarChart className="h-5 w-5 text-blue-500" />, label: "Cost Savings", value: "$5M" },
    ]
  },
  {
    company: "TechEd Innovations",
    industry: "Education",
    icon: <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />,
    challenge: "Outdated learning systems and disengaged students",
    solution: "DTG&apos;s adaptive AI learning platform",
    result: "Increased student engagement and improved outcomes",
    metrics: [
      { icon: <Flame className="h-5 w-5 text-yellow-500" />, label: "Student Engagement", value: "+140%" },
      { icon: <Target className="h-5 w-5 text-red-500" />, label: "Performance Improvement", value: "85%" },
    ]
  }
]

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

  return (
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
              <div className="md:w-1/2 flex flex-col justify-between h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-800">
                    <span className="block">DOMINATE YOUR INDUSTRY</span>
                    <span className="block text-blue-600">WITH AI-POWERED SOLUTIONS</span>
                    <span className="block">ENGINEERED BY DTG</span>
                  </h1>
                  <ul className="space-y-4 mb-8">
                    {[
                      { icon: <Sparkles className="h-6 w-6 text-blue-600 inline mr-2" />, text: "Revolutionize Your Operations with AI" },
                      { icon: <Brain className="h-6 w-6 text-blue-600 inline mr-2" />, text: "Harness Unbreakable AI Integration" },
                      { icon: <Cpu className="h-6 w-6 text-blue-600 inline mr-2" />, text: "Optimize for Peak Performance" },
                      { icon: <Code className="h-6 w-6 text-blue-600 inline mr-2" />, text: "Seamless Implementation, Tangible Results" },
                      { icon: <Rocket className="h-6 w-6 text-blue-600 inline mr-2" />, text: "Propel Your Business to New Heights" }
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
                      UNLEASH AI POWER NOW
                    </Button>
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-full flex items-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yC7jaPSs9wkh0okwpKNng-b1GHwI52ytV94G3WnxoA7Na6oPYwV2.jpeg"
                    alt="AI-Powered Business Transformation"
                    width={800}
                    height={800}
                    className="rounded-lg shadow-2xl object-cover w-full h-full"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-4 rounded-lg shadow-lg transform rotate-12">
                    <div className="flex items-center gap-2">
                      <Award className="h-6 w-6" />
                      <p className="text-sm font-medium">
                        Service-Disabled Veteran-Owned Business
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="ai-revolution" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader>LEAD THE AI REVOLUTION IN YOUR INDUSTRY</SectionHeader>
            <div className="max-w-4xl mx-auto text-center mb-4">
              <AnimatedText
                messages={[
                  "Embrace the Future of AI",
                  "Transform Your Business Landscape",
                  "Unlock Unprecedented Efficiency",
                  "Harness Data-Driven Insights",
                  "Stay Ahead of the Competition"
                ]}
                className="text-2xl md:text-3xl font-bold text-gray-700"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader>DOMINATE WITH AI-POWERED SOLUTIONS</SectionHeader>
            <div className="text-xl text-center mb-12 text-gray-600 space-y-2">
              <p className="text-2xl font-semibold">Uncompromising AI Integration for Maximum Impact</p>
              <p>Our solutions are engineered to deliver immediate, measurable results.</p>
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
                SCHEDULE YOUR AI STRATEGY SESSION
              </Button>
            </div>
          </div>
        </section>

        <section id="industries" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader>INDUSTRY-SPECIFIC AI SOLUTIONS</SectionHeader>
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

        <section id="case-studies" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader>AI SUCCESS STORIES</SectionHeader>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {study.icon}
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold">{study.company}</h3>
                        <p className="text-blue-600 font-semibold">{study.industry}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">DTG&apos;s Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Results:</h4>
                        <p className="text-green-600 font-semibold">{study.result}</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-lg mb-4">Key Metrics:</h4>
                      <div className="flex justify-around">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="flex justify-center mb-2">{metric.icon}</div>
                            <p className="text-sm text-gray-600">{metric.label}</p>
                            <p className="text-lg font-bold text-blue-600">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="advantage" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader>THE DTG AI ADVANTAGE</SectionHeader>
            <p className="text-xl text-center mb-12 text-gray-600">
              Partner with DTG to leverage AI for unparalleled growth and industry dominance.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center bg-blue-50 rounded-lg shadow p-4">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="text-lg font-semibold">{advantage}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-blue-50 rounded-lg shadow-lg p-6 text-center">
              <p className="text-xl italic mb-4">
                &quot;DTG&apos;s AI solutions have completely transformed our operations. We&apos;ve experienced unprecedented improvements in efficiency and are now leading our industry in innovation. Their strategic, no-nonsense approach has been invaluable to our success.&quot;
              </p>
              <p className="font-semibold">- CEO, Fortune 500 Company</p>
            </div>
          </div>
        </section>

        <section id="approach" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader>OUR AI IMPLEMENTATION APPROACH</SectionHeader>
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

        <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">READY TO DOMINATE YOUR INDUSTRY WITH AI?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don&apos;t just keep up with change – lead it. Partner with DTG&apos;s AI experts to unlock unprecedented levels of efficiency, innovation, and growth. Our battle-tested solutions are ready to elevate your business to industry-leading status.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setShowContactForm(true)}
            >
              START YOUR AI REVOLUTION WITH DTG
            </Button>
          </div>
        </section>
      </main>

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
                <li><button onClick={() => scrollToSection('solutions')} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">AI Solutions</button></li>
                <li><button onClick={() => scrollToSection('industries')} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Industries We Serve</button></li>
                <li><button onClick={() => scrollToSection('case-studies')} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Case Studies</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Contact Us</button></li>
              </ul>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect With Us</h3>
            <p className="text-sm text-gray-300">
              Ready to revolutionize your business with AI? Get in touch with our experts today.
            </p>
            <a 
              href="https://www.dtg.com" 
              className="text-blue-300 hover:text-blue-100 transition-colors duration-200 flex items-center gap-2"
            >
              Visit our website
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 DTG. All rights reserved. Pushing the boundaries of AI excellence.
          </p>
        </div>
      </footer>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  )
}