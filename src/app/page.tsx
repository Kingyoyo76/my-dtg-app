'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Target } from 'lucide-react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    console.log('Page component mounted')
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>
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
                <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-24">
        <section className="py-16 overflow-hidden">
          <div className="container mx-auto px-4">
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
            >
              UNLEASH AI POWER NOW
            </Button>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our AI Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Brain className="h-10 w-10 text-blue-600" />, title: "UNBREAKABLE AI SOLUTIONS", description: "Equip your business to tackle its biggest challenges and thrive under pressure." },
                { icon: <Zap className="h-10 w-10 text-blue-600" />, title: "UNSTOPPABLE AUTOMATION", description: "Automate with power and precision, eliminating inefficiencies that slow your business down." },
                { icon: <Target className="h-10 w-10 text-blue-600" />, title: "LASER-FOCUSED INSIGHTS", description: "Deliver insights that hit the mark, driving decisions that keep you ahead of the competition." },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">
            © 2024 DTG AI Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}