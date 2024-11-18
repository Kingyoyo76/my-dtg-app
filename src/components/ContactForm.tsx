'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ContactFormProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ContactForm({ isVisible, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: ''
  })
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
    setErrors(prevState => ({
      ...prevState,
      [name]: ''
    }))
  }

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!me\.com)(?!outlook\.com)(?!aol\.com)(?!icloud\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    let newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      role: ''
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid professional email address'
    }
    if (!formData.role.trim()) {
      newErrors.role = 'Role is required'
    }

    setErrors(newErrors)

    if (Object.values(newErrors).every(error => error === '')) {
      console.log('Form submitted:', formData)
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-lg p-8 max-w-md w-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full" 
                />
                {errors.firstName && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      {errors.firstName}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full" 
                />
                {errors.lastName && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      {errors.lastName}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full" 
                />
                {errors.email && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      {errors.email}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Input 
                  type="text" 
                  id="role" 
                  name="role" 
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. Manager, Developer, etc."
                  className="mt-1 block w-full" 
                />
                {errors.role && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      {errors.role}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}