'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

interface AIRoadmapPopupProps {
  isVisible: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export default function AIRoadmapPopup({ isVisible, onClose, onDownload }: AIRoadmapPopupProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="w-full max-w-2xl overflow-hidden rounded-xl shadow-xl"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left side - Image */}
              <div className="relative md:w-1/2 h-[300px] md:h-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/airoadmap.png-lfbTBIApwtChAxm4G9mx9tE5z4bixn.webp"
                  alt="AI Transformation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold">Transform Your Business</h3>
                  <p className="text-white/90 text-sm">Harness the power of AI with our strategic roadmap</p>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="md:w-1/2 p-6 bg-[#1a1f2e] text-white">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Unlock Your AI Potential</h2>
                  <p className="text-gray-300">Get your personalized AI transformation roadmap</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "Custom AI Strategy Development",
                    "Implementation Timeline",
                    "ROI Projection Analysis"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-purple-600/20 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg font-semibold"
                    onClick={onDownload}
                  >
                    Get Your Free Roadmap
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full text-gray-300 hover:text-white hover:bg-white/10"
                    onClick={onClose}
                  >
                    Maybe Later
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}