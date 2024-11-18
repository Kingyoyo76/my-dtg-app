'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sparkles, Brain, Cpu, Code, Rocket, Phone, Download, Menu, CheckCircle, ExternalLink, MapPin, Mail, GraduationCap, Briefcase, Banknote, Film, Building2, Heart, TrendingUp, BarChart, Flame, Target, Shield, DollarSign, Zap } from 'lucide-react'
import AIRoadmapPopup from '@/components/AIRoadmapPopup'
import ContactForm from '@/components/ContactForm'

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
      />
    </Sphere>
  )
}

const Background3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showRoadmapPopup, setShowRoadmapPopup] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)

    const popupTimer = setTimeout(() => {
      setShowRoadmapPopup(true)
    }, 45000) // 45 seconds

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(popupTimer)
    }
  }, [])

  const menuItems = [
    'Home',
    'Our Advantage',
    'Our Approach',
    'Expected Results',
    'Industries',
    'Case Studies',
    'Contact'
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleDownloadRoadmap = () => {
    setShowRoadmapPopup(false)
    setShowContactForm(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-indigo-100">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center rounded-full shadow-lg px-6 py-3 bg-white/90 backdrop-blur-sm">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Awia9XHGWcmIEnZU14CnvM8tkWhMN9.png"
                alt="DTG Logo"
                width={180}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </div>
            <nav className="hidden md:flex space-x-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => item === 'Contact' ? setShowContactForm(true) : scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-base font-medium px-4 py-2 rounded-full hover:bg-gray-100/50"
                >
                  {item}
                </button>
              ))}
            </nav>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 text-gray-700" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        item === 'Contact' ? setShowContactForm(true) : scrollToSection(item.toLowerCase().replace(' ', '-'))
                        setIsMenuOpen(false)
                      }}
                      className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200 text-lg font-medium"
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 relative">
        {typeof window !== 'undefined' && window.innerWidth > 768 ? (
          <Background3D />
        ) : (
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100 to-indigo-200 opacity-30" />
        )}
        
        {/* Hero Section */}
        <section id="hero" className="py-16 md:py-24 overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:pt-16">
              <motion.div
                className="md:w-1/2 order-2 md:order-1"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-full flex items-center bg-purple-100 rounded-lg p-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yC7jaPSs9wkh0okwpKNng-b1GHwI52ytV94G3WnxoA7Na6oPYwV2.jpeg"
                    alt="AI-Powered Business Transformation"
                    width={800}
                    height={800}
                    className="rounded-lg shadow-2xl object-cover w-full h-full"
                  />
                  <div className="absolute top-[61%] left-[58%] w-[15%] h-auto aspect-square rounded-full overflow-hidden bg-white shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nKt2tH7WnchJCSdVokTgUfF11bts7L.png"
                      alt="SDVOSB Certification"
                      width={200}
                      height={200}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  {/* Service-Disabled Veteran Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                    <p className="text-xs font-medium text-red-600">
                      Service-Disabled Veteran-Owned Business
                    </p>
                  </div>
                </div>
              </motion.div>
              <div className="md:w-1/2 flex flex-col justify-between h-full order-1 md:order-2 px-4 md:px-0 md:pl-24 mt-4 md:mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="md:-mt-2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
                  <span className="block">Conquer Your Work With</span>
                  <span className="block text-purple-600">Enterprise-Level AI Solutions</span>
                  <span className="block">Built For You by DTG AI Experts</span>
                </h1>
                <p className="text-2xl text-gray-700 font-semibold">
                  Boost Efficiency, Save Time, and Money with Generative AI
                </p>
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <ul className="space-y-4 my-8">
                  {[
                    { icon: <Sparkles className="h-6 w-6 text-purple-600" />, text: "Revolutionize Operations with Proven AI" },
                    { icon: <Brain className="h-6 w-6 text-purple-600" />, text: "Build AI Agents That Work for You" },
                    { icon: <Cpu className="h-6 w-6 text-purple-600" />, text: "Optimize for Peak Performance" },
                    { icon: <Code className="h-6 w-6 text-purple-600" />, text: "No-Code Solutions, Maximum Impact" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <span className="text-lg font-medium text-gray-700">{item.text}</span>
                    </li>
                  ))}
                    </ul>
                    <div className="mt-4 md:mt-8 flex flex-col sm:flex-row justify-start items-center gap-4">
                      <Button
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 text-white text-base lg:text-lg px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                        onClick={() => setShowContactForm(true)}
                      >
                        <Phone className="mr-2 h-5 w-5" /> 
                        UNLEASH AI POWER NOW
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/50 backdrop-blur-sm border-2 border-purple-600 text-purple-600 hover:bg-purple-100 text-base lg:text-lg px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                        onClick={() => setShowContactForm(true)}
                      >
                        <Download className="mr-2 h-5 w-5" /> 
                        GET AI ROADMAP
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Transform Your Enterprise Section */}
        <section id="our-advantage" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Enterprise with <span className="text-purple-600">Production-Ready AI</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The DTG GenAI Platform provides a comprehensive foundation for enterprise AI operations. 
              Build, deploy, and manage production-scale generative AI applications that drive business 
              process automation, enhance enterprise search, and deliver intelligent analytics.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Cpu className="h-6 w-6 text-purple-600" />, title: "Production-Ready Scale", description: "Build your entire AI infrastructure on our enterprise-grade platform" },
                { icon: <Zap className="h-6 w-6 text-purple-600" />, title: "Operational Excellence", description: "Streamline AI/MLOps with automated workflows" },
                { icon: <BarChart className="h-6 w-6 text-purple-600" />, title: "Business Transformation", description: "Enable intelligent automation across your enterprise" },
                { icon: <Shield className="h-6 w-6 text-purple-600" />, title: "Reduced Risk", description: "Enterprise-grade security and compliance features built-in" },
                { icon: <DollarSign className="h-6 w-6 text-purple-600" />, title: "Optimized Costs", description: "Compare and test models to find cost-effective solutions" },
                { icon: <CheckCircle className="h-6 w-6 text-purple-600" />, title: "Expert Support", description: "8+ years of AI, Cloud, and Security best practices" }
              ].map((advantage, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: 0.2 + index * 0.1}}
                  className="bg-gradient-to-br from-purple-50 to-white rounded-lg shadow-sm p-6 flex items-start space-x-4 border border-purple-100"
                >
                  <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-12 bg-purple-50 rounded-lg shadow-sm p-8 text-center"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.6}}
            >
              <p className="text-xl font-semibold mb-4 text-gray-900">
                Future-Proof Your AI Investment
              </p>
              <p className="text-gray-600">
                Stay current with evolving AI technologies through our continuous updates, 
                ensuring your enterprise remains at the forefront of innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI Strategy Section */}
        <section id="our-approach" className="py-16 bg-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                HOW DTG CRAFTS YOUR AI DOMINATION STRATEGY
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "1", title: "ASSESSMENT", desc: ["We Work With You &", "Identify Your Operational Challenges"] },
                { number: "2", title: "MAPPING", desc: ["We Strategically Map Out", "A Plan with a Tailored AI Strategy"] },
                { number: "3", title: "IMPLEMENTATION", desc: ["We Deploy & Test", "Adjust & Fine Tune"] },
                { number: "4", title: "EVOLUTION", desc: ["We Continuously Help You Evolve", "Your AI Capabilities"] },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="h-full flex flex-col bg-white text-gray-800 rounded-lg shadow-md">
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center mb-4">
                          <span className="text-3xl font-bold text-purple-600 mr-2">{step.number}:</span>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <div className="text-gray-600">
                          <p>{step.desc[0]}</p>
                          <p className="mt-2">{step.desc[1]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expected Results Section */}
        <section id="expected-results" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
              EXPECTED <span className="text-purple-600">RESULTS</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Efficiency Boost", value: "Up to 300%", description: "Streamline operations and automate repetitive tasks" },
                { title: "Cost Reduction", value: "20-40%", description: "Optimize resource allocation and reduce operational expenses" },
                { title: "Revenue Growth", value: "15-25%", description: "Unlock new opportunities and enhance customer experiences" },
                { title: "Time Savings", value: "1000+ hours/year", description: "Free up valuable time for strategic initiatives" },
                { title: "Error Reduction", value: "Up to 90%", description: "Minimize human errors and improve accuracy" },
                { title: "ROI", value: "5x-10x", description: "Achieve significant return on your AI investment" }
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-purple-50 rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{result.title}</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-4">{result.value}</p>
                  <p className="text-gray-600">{result.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section id="industries" className="py-16 bg-indigo-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
              INDUSTRY-SPECIFIC <span className="text-purple-600">AI</span> SOLUTIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: <GraduationCap className="h-12 w-12 text-purple-600" />, 
                  title: "Education", 
                  items: [
                    "Transform Traditional Learning Barriers", 
                    "Streamline Administrative Processes", 
                    "Accelerate Research at Unprecedented Speeds"
                  ] 
                },
                { 
                  icon: <Briefcase className="h-12 w-12 text-purple-600" />, 
                  title: "Manufacturing", 
                  items: [
                    "Revolutionize Production Efficiency", 
                    "Implement Uncompromising Quality Control", 
                    "Create a Resilient Supply Chain"
                  ] 
                },
                { 
                  icon: <Banknote className="h-12 w-12 text-purple-600" />, 
                  title: "Financial Services", 
                  items: [
                    "Mitigate Risk with Predictive AI", 
                    "Deploy Advanced Fraud Detection", 
                    "Deliver Hyper-Personalized Customer Experiences"
                  ] 
                },
                { 
                  icon: <Film className="h-12 w-12 text-purple-600" />, 
                  title: "Media", 
                  items: [
                    "Craft AI-Driven Content Strategies", 
                    "Implement Rapid Video Processing", 
                    "Execute Precise Audience Targeting"
                  ] 
                },
                { 
                  icon: <Building2 className="h-12 w-12 text-purple-600" />, 
                  title: "Hospitality", 
                  items: [
                    "Engineer Unforgettable Guest Experiences", 
                    "Optimize Staff Deployment", 
                    "Streamline Operations for Maximum Profitability"
                  ] 
                },
                { 
                  icon: <Heart className="h-12 w-12 text-purple-600" />, 
                  title: "Healthcare", 
                  items: [
                    "Revolutionize Patient Care Delivery", 
                    "Implement Optimized Workflows", 
                    "Ensure Robust Data Security and Compliance"
                  ] 
                }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="h-full flex flex-col bg-white text-gray-800 rounded-lg shadow-md">
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        {industry.icon}
                        <h3 className="text-xl font-semibold ml-4">{industry.title}</h3>
                      </div>
                      <ul className="list-none space-y-2 flex-grow">
                        {industry.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
              AI TRANSFORMATION <span className="text-purple-600">SUCCESSES</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  company: "Global Manufacturing Corp",
                  industry: "Manufacturing",
                  icon: <Briefcase className="h-12 w-12 text-purple-600 mb-4" />,
                  challenge: "Struggling with inefficiencies, rising costs, and manual processing",
                  solution: "DTG implemented AI-powered Predictive Maintenance and Smart Inventory Management",
                  result: "Revolutionized production with real-time optimization and reduced downtime",
                  metrics: [
                    { icon: <TrendingUp className="h-5 w-5 text-purple-600" />, label: "Efficiency Boost", value: "135%" },
                    { icon: <TrendingUp className="h-5 w-5 text-purple-600 rotate-180" />, label: "Reduce Cost", value: "$5M" },
                  ],
                  details: [
                    { icon: <Cpu className="h-5 w-5 text-purple-600" />, text: "AI-driven predictive maintenance reduced equipment downtime by 78%" },
                    { icon: <BarChart className="h-5 w-5 text-purple-600" />, text: "Smart inventory management cut carrying costs by 42%" }
                  ]
                },
                {
                  company: "TechEd Innovations",
                  industry: "Education",
                  icon: <GraduationCap className="h-12 w-12 text-purple-600 mb-4" />,
                  challenge: "Outdated systems creating a gap between potential and performance",
                  solution: "DTG developed an AI-Powered Adaptive Learning Platform and Student Engagement Analyzer",
                  result: "Personalized learning experiences and data-driven student support",
                  metrics: [
                    { icon: <Flame className="h-5 w-5 text-purple-600" />, label: "Student Engagement Surge", value: "+140%" },
                    { icon: <Target className="h-5 w-5 text-purple-600" />, label: "Performance Improvement", value: "85%" },
                  ],
                  details: [
                    { icon: <Brain className="h-5 w-5 text-purple-600" />, text: "AI-driven content recommendations increased course completion rates by 62%" },
                    { icon: <Target className="h-5 w-5 text-purple-600" />, text: "Predictive analytics helped identify at-risk students, reducing dropout rates by 35%" }
                  ]
                }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="overflow-hidden h-full bg-purple-50 text-gray-800 rounded-lg shadow-md">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        {study.icon}
                        <div className="ml-4">
                          <h3 className="text-2xl font-bold">{study.company}</h3>
                          <p className="text-purple-600 font-semibold">{study.industry}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-lg mb-2">Challenge:</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">DTG&apos;s AI Solution:</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">Transformation Achieved:</h4>
                          <p className="text-purple-600 font-semibold">{study.result}</p>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold text-lg mb-4">Transformation Metrics:</h4>
                        <div className="flex justify-around mb-4">
                          {study.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center">
                              <div className="flex justify-center mb-2">{metric.icon}</div>
                              <p className="text-sm text-gray-600">{metric.label}</p>
                              <p className="text-lg font-bold text-purple-600">{metric.value}</p>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {study.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="mr-2">{detail.icon}</div>
                              <p className="text-sm text-gray-600">{detail.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dominate with AI Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              LEVEL UP: CONQUER YOUR WORK WITH AI
            </motion.h2>
            <motion.p 
              className="text-xl mb-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              It&apos;s time to push past your limits. AI isn&apos;t just a tool, it&apos;s your secret weapon 
              to dominate your tasks, crush inefficiencies, and become the smartest performer in your field. 
            </motion.p>
            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Don&apos;t accept mediocrity – revolutionize your performance and leave everyone else behind.
            </motion.p>
            <motion.button 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={() => setShowContactForm(true)}
            >
              Schedule Your Complimentary AI Consultation
            </motion.button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About DTG</h3>
            <p className="text-sm text-white/80">
              Distributed Technology Group (DTG) - A service-disabled veteran-owned company committed to transforming businesses with no-nonsense, results-driven AI solutions.
            </p>
            <div className="flex justify-start items-center mt-4">
              <div className="rounded-full bg-white p-4 w-24 h-24 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hIUx4CNRHozMR1cztun5KaiEYSibkW.png"
                    alt="U.S. Veteran Owned Business"
                    fill
                    className="object-contain"
                    sizes="(max-width: 96px) 100vw, 96px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('hero')} className="text-white/80 hover:text-purple-400 transition-colors duration-200">Home</button></li>
                <li><button onClick={() => scrollToSection('our-advantage')} className="text-white/80 hover:text-purple-400 transition-colors duration-200">Our Advantage</button></li>
                <li><button onClick={() => scrollToSection('our-approach')} className="text-white/80 hover:text-purple-400 transition-colors duration-200">Our Approach</button></li>
                <li><button onClick={() => scrollToSection('expected-results')} className="text-white/80 hover:text-purple-400 transition-colors duration-200">Expected Results</button></li>
                <li><button onClick={() => scrollToSection('industries')} className="text-white/80 hover:text-purple-400 transition-colors duration-200">Industries We Serve</button></li>
                <li><button onClick={() => scrollToSection('case-studies')} className="text-white/80 hover:text-purple-400 transition-colors duration-200">Case Studies</button></li>
                <li><button onClick={() => setShowContactForm(true)} className="text-white/80 hover:text-purple-400 transition-colors duration-200">Contact Us</button></li>
              </ul>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect With Us</h3>
            <p className="text-sm text-white/80">
              Ready to revolutionize your business with AI? Get in touch with our experts today.
            </p>
            <a 
              href="https://www.Dtg.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              Visit our website
              <ExternalLink className="h-4 w-4" />
            </a>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>499 South Warren Street, Suite 501, Syracuse, NY 13202</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:1-585-347-2101" className="hover:text-purple-400 transition-colors duration-200">1-585-347-2101</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:customerservice@dtg.com" className="hover:text-purple-400 transition-colors duration-200">customerservice@dtg.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} DTG. All rights reserved. Pushing the boundaries of AI excellence.
          </p>
        </div>
      </footer>

      {/* Contact Form */}
      <ContactForm
        isVisible={showContactForm}
        onClose={() => setShowContactForm(false)}
      />

      {/* AI Roadmap Popup */}
      <AIRoadmapPopup
        isVisible={showRoadmapPopup}
        onClose={() => setShowRoadmapPopup(false)}
        onDownload={handleDownloadRoadmap}
      />
    </div>
  )
}