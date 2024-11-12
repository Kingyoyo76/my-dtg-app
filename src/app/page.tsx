'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Sparkles, Brain, Cpu, Code, Rocket, Phone, Download, Award,
  Briefcase, GraduationCap, Banknote, Film, Building2, Heart,
  TrendingUp, Flame, Target, Zap, BarChart, Database, Shield, CheckCircle,
  ExternalLink, MapPin, Mail, Menu, X
} from 'lucide-react'

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted')
    setShowContactForm(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-placeholder-XTTqwo0HZdD1BWMqDaHJICXaAUEsro.png"
              alt="DTG Logo"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection('approach')} className="text-gray-600 hover:text-blue-600">Our Approach</button>
            <button onClick={() => scrollToSection('industries')} className="text-gray-600 hover:text-blue-600">Industries</button>
            <button onClick={() => scrollToSection('case-studies')} className="text-gray-600 hover:text-blue-600">Case Studies</button>
            <button onClick={() => scrollToSection('advantage')} className="text-gray-600 hover:text-blue-600">Our Advantage</button>
            <button onClick={() => setShowContactForm(true)} className="text-gray-600 hover:text-blue-600">Contact</button>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection('approach')} className="text-gray-600 hover:text-blue-600">Our Approach</button>
            <button onClick={() => scrollToSection('industries')} className="text-gray-600 hover:text-blue-600">Industries</button>
            <button onClick={() => scrollToSection('case-studies')} className="text-gray-600 hover:text-blue-600">Case Studies</button>
            <button onClick={() => scrollToSection('advantage')} className="text-gray-600 hover:text-blue-600">Our Advantage</button>
            <button onClick={() => setShowContactForm(true)} className="text-gray-600 hover:text-blue-600">Contact</button>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="py-16 md:py-24 overflow-hidden bg-white text-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                className="md:w-1/2 order-2 md:order-1"
                initial={{ opacity: 0, x: -100 }}
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
                  <div className="absolute top-[61%] left-[58%] w-[15%] h-auto aspect-square rounded-full overflow-hidden bg-white shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nKt2tH7WnchJCSdVokTgUfF11bts7L.png"
                      alt="SDVOSB Certification"
                      width={200}
                      height={200}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white text-blue-800 p-2 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-red-700" />
                      <p className="text-xs font-medium">
                        <span className="text-red-700">Service-Disabled</span>{" "}
                        <span className="text-blue-800">Veteran-Owned Business</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="md:w-1/2 flex flex-col justify-between h-full order-1 md:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-blue-800">
                    <span className="block mb-2 text-sky-400">BOOST EFFICIENCY!</span>
                    <span className="block mb-2">ACHIEVE MORE &amp; SAVE TIME!</span>
                    <span className="block mb-2 text-sky-400">SPEND LESS!</span>
                    <span className="block text-blue-600">WITH ENTERPRISE-LEVEL AI</span>
                    <span className="block">POWERED BY DTG AI EXPERTISE</span>
                  </h1>
                  <ul className="space-y-4 mb-8">
                    {[
                      { icon: <Sparkles className="h-5 w-5 text-blue-600 inline mr-2" />, text: "Revolutionize Operations with Proven AI" },
                      { icon: <Brain className="h-5 w-5 text-blue-600 inline mr-2" />, text: "Build AI Agents That Work for You" },
                      { icon: <Cpu className="h-5 w-5 text-blue-600 inline mr-2" />, text: "Optimize for Peak Performance" },
                      { icon: <Code className="h-5 w-5 text-blue-600 inline mr-2" />, text: "No-Code Solutions, Maximum Impact" },
                      { icon: <Rocket className="h-5 w-5 text-blue-600 inline mr-2" />, text: "Expert AI Strategies, Real Results" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        {item.icon}
                        <span className="text-lg md:text-xl font-semibold text-gray-700">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-start items-center gap-4">
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-base lg:text-lg px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                      onClick={() => setShowContactForm(true)}
                    >
                      <Phone className="mr-2 h-4 w-4" /> 
                      UNLEASH AI POWER NOW
                    </Button>
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white text-base lg:text-lg px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                      onClick={() => setShowContactForm(true)}
                    >
                      <Download className="mr-2 h-4 w-4" /> 
                      GET AI ROADMAP
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Strategy Section */}
        <section id="approach" className="py-16 bg-sky-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
                HOW YOUR AI DOMINATION STRATEGY WORKS
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
                  <Card className="h-full flex flex-col bg-white">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center mb-4">
                          <span className="text-3xl font-bold text-blue-600 mr-2">{step.number}:</span>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <div className="text-gray-600">
                          <p>{step.desc[0]}</p>
                          <p className="mt-2">{step.desc[1]}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expected Results Section */}
        <section className="py-16 bg-blue-50 text-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">EXPECTED RESULTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "40%", effect: "Efficiency Increase", description: "While Competitors Struggle, You Accelerate" },
                { value: "50%", effect: "Cost Savings", description: "Cut Expenses, Not Capabilities" },
                { value: "3x", effect: "Faster Decisions", description: "Outmaneuver the Market" },
                { value: "100%", effect: "Commitment", description: "Your AI Transformation, Our Relentless Execution" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-4xl md:text-5xl font-bold mb-2 text-blue-800">{stat.value}</p>
                  <p className="text-xl md:text-2xl font-semibold mb-1 text-blue-600">{stat.effect}</p>
                  <p className="text-lg md:text-xl text-gray-700">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section id="industries" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
              INDUSTRY-SPECIFIC <span className="text-red-600">AI</span> SOLUTIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: <GraduationCap className="h-12 w-12 text-blue-600" />, 
                  title: "Education", 
                  items: [
                "Transform Traditional Learning Barriers", 
                    "Streamline Administrative Processes", 
                    "Accelerate Research at Unprecedented Speeds"
                  ] },
                { 
                  icon: <Briefcase className="h-12 w-12 text-red-600" />, 
                  title: "Manufacturing", 
                  items: [
                    "Revolutionize Production Efficiency", 
                    "Implement Uncompromising Quality Control", 
                    "Create a Resilient Supply Chain"
                  ] 
                },
                { 
                  icon: <Banknote className="h-12 w-12 text-blue-600" />, 
                  title: "Financial Services", 
                  items: [
                    "Mitigate Risk with Predictive AI", 
                    "Deploy Advanced Fraud Detection", 
                    "Deliver Hyper-Personalized Customer Experiences"
                  ] 
                },
                { 
                  icon: <Film className="h-12 w-12 text-red-600" />, 
                  title: "Media", 
                  items: [
                    "Craft AI-Driven Content Strategies", 
                    "Implement Rapid Video Processing", 
                    "Execute Precise Audience Targeting"
                  ] 
                },
                { 
                  icon: <Building2 className="h-12 w-12 text-blue-600" />, 
                  title: "Hospitality", 
                  items: [
                    "Engineer Unforgettable Guest Experiences", 
                    "Optimize Staff Deployment", 
                    "Streamline Operations for Maximum Profitability"
                  ] 
                },
                { 
                  icon: <Heart className="h-12 w-12 text-red-600" />, 
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
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        {industry.icon}
                        <h3 className="text-xl font-semibold ml-4">{industry.title}</h3>
                      </div>
                      <ul className="list-none space-y-2 flex-grow">
                        {industry.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">AI TRANSFORMATION</span>{' '}
              <span className="text-red-600">SUCCESSES</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  company: "Global Manufacturing Corp",
                  industry: "Manufacturing",
                  icon: <Briefcase className="h-12 w-12 text-blue-600 mb-4" />,
                  challenge: "Struggling with inefficiencies, rising costs, and manual processing",
                  solution: "DTG implemented AI-powered Predictive Maintenance and Smart Inventory Management",
                  result: "Revolutionized production with real-time optimization and reduced downtime",
                  metrics: [
                    { icon: <TrendingUp className="h-5 w-5 text-green-500" />, label: "Efficiency Boost", value: "135%" },
                    { icon: <TrendingUp className="h-5 w-5 text-red-500 rotate-180" />, label: "Reduce Cost", value: "$5M" },
                  ],
                  details: [
                    { icon: <Cpu className="h-5 w-5 text-blue-500" />, text: "AI-driven predictive maintenance reduced equipment downtime by 78%" },
                    { icon: <BarChart className="h-5 w-5 text-green-500" />, text: "Smart inventory management cut carrying costs by 42%" }
                  ]
                },
                {
                  company: "TechEd Innovations",
                  industry: "Education",
                  icon: <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />,
                  challenge: "Outdated systems creating a gap between potential and performance",
                  solution: "DTG developed an AI-Powered Adaptive Learning Platform and Student Engagement Analyzer",
                  result: "Personalized learning experiences and data-driven student support",
                  metrics: [
                    { icon: <Flame className="h-5 w-5 text-yellow-500" />, label: "Student Engagement Surge", value: "+140%" },
                    { icon: <Target className="h-5 w-5 text-red-500" />, label: "Performance Improvement", value: "85%" },
                  ],
                  details: [
                    { icon: <Brain className="h-5 w-5 text-blue-500" />, text: "AI-driven content recommendations increased course completion rates by 62%" },
                    { icon: <Target className="h-5 w-5 text-green-500" />, text: "Predictive analytics helped identify at-risk students, reducing dropout rates by 35%" }
                  ]
                }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full">
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
                          <h4 className="font-semibold text-lg mb-2">DTG&apos;s AI Solution:</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">Transformation Achieved:</h4>
                          <p className="text-green-600 font-semibold">{study.result}</p>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold text-lg mb-4">Transformation Metrics:</h4>
                        <div className="flex justify-around mb-4">
                          {study.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center">
                              <div className="flex justify-center mb-2">{metric.icon}</div>
                              <p className="text-sm text-gray-600">{metric.label}</p>
                              <p className="text-lg font-bold text-blue-600">{metric.value}</p>
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
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dominate with AI Section */}
        <section className="bg-blue-900 text-white py-16">
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
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={() => setShowContactForm(true)}
            >
              Schedule Your Complimentary AI Consultation
            </motion.button>
          </div>
        </section>

        {/* DTG AI Advantage Section */}
        <section id="advantage" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              THE DTG <span className="text-red-600">AI</span> ADVANTAGE
            </motion.h2>
            <motion.p 
              className="text-xl text-center mb-12 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Partner with DTG to leverage AI for enhanced efficiency, cost savings, and unprecedented performance in your work.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "AI Solutions That Defy Limits",
                "Seamless Integration for Maximum Impact",
                "24/7 Support and Reliability",
                "Results That Give You the Edge"
              ].map((advantage, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-blue-50 rounded-lg shadow-sm p-6 flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="text-lg font-medium">{advantage}</span>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-12 bg-blue-50 rounded-lg shadow-sm p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-xl italic mb-4 text-center">
                &quot;DTG&apos;s AI solutions have completely transformed our operations. We&apos;ve experienced unprecedented improvements in efficiency and are now leading our industry in innovation. Their strategic, no-nonsense approach has been invaluable to our success.&quot;
              </p>
              <p className="font-semibold text-center">- CEO, Fortune 500 Company</p>
            </motion.div>
          </div>
        </section>

        {/* AI Revolution Solutions Section */}
        <section id="ai-solutions" className="py-16 bg-sky-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600">
              LEAD THE <span className="text-red-600">AI</span> REVOLUTION WITH POWERFUL SOLUTIONS
            </h2>
            <div className="max-w-4xl mx-auto text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-gray-700 mb-4"
              >
                Embrace the Future of AI
              </motion.div>
              <p className="text-xl text-gray-600">
                Our AI solutions are engineered to deliver immediate, measurable results with uncompromising integration for maximum impact.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Brain,
                  title: "Advanced AI Algorithms",
                  description: "Leverage cutting-edge machine learning models tailored to your industry's unique challenges for intelligent process automation."
                },
                {
                  icon: Zap,
                  title: "Real-time Processing & Analytics",
                  description: "Make split-second decisions with AI-powered real-time data analysis and predictive insights to forecast trends and identify opportunities."
                },
                {
                  icon: BarChart,
                  title: "AI-Powered Customer Insights",
                  description: "Understand and predict customer behavior to deliver personalized experiences, drive loyalty, and stay ahead of the competition."
                },
                {
                  icon: Database,
                  title: "Smart Data Integration",
                  description: "Seamlessly integrate and analyze vast amounts of data from multiple sources with AI-enhanced data management solutions."
                },
                {
                  icon: Rocket,
                  title: "Scalable AI-Driven Innovation",
                  description: "Accelerate product development and grow your AI capabilities alongside your business with our scalable infrastructure."
                },
                {
                  icon: Shield,
                  title: "Robust AI Security",
                  description: "Protect your data and AI models with state-of-the-art security measures, including AI-enhanced threat detection and response mechanisms."
                }
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <solution.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => setShowContactForm(true)}
              >
                <span className="whitespace-nowrap">SCHEDULE AI STRATEGY SESSION</span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About DTG</h3>
            <p className="text-sm text-gray-300">
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
                <li><button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Home</button></li>
                <li><button onClick={() => scrollToSection('approach')} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Our Approach</button></li>
                <li><button onClick={() => scrollToSection('industries')} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Industries We Serve</button></li>
                <li><button onClick={() => scrollToSection('case-studies')} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Case Studies</button></li>
                <li><button onClick={() => scrollToSection('advantage')} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Our Advantage</button></li>
                <li><button onClick={() => setShowContactForm(true)} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Contact Us</button></li>
              </ul>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect With Us</h3>
            <p className="text-sm text-gray-300">
              Ready to revolutionize your business with AI? Get in touch with our experts today.
            </p>
            <a 
              href="https://www.Dtg.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 transition-colors duration-200 flex items-center gap-2"
            >
              Visit our website
              <ExternalLink className="h-4 w-4" />
            </a>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>499 South Warren Street, Suite 501, Syracuse, NY 13202</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:1-585-347-2101" className="hover:text-blue-300 transition-colors duration-200">1-585-347-2101</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:customerservice@dtg.com" className="hover:text-blue-300 transition-colors duration-200">customerservice@dtg.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} DTG. All rights reserved. Pushing the boundaries of AI excellence.
          </p>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input type="text" id="name" name="name" required className="mt-1 block w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input type="email" id="email" name="email" required className="mt-1 block w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" name="message" required className="mt-1 block w-full" />
              </div>
              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={() => setShowContactForm(false)}>
                  Cancel
                </Button>
                <Button type="submit">Send</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}