'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const [emailError, setEmailError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string

    // Email domain validation
    const domain = email.split('@')[1]
    const allowedDomains = ['com', 'org', 'net', 'edu', 'gov']
    const disallowedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com']

    if (disallowedDomains.includes(domain) || !allowedDomains.includes(domain.split('.')[1])) {
      setEmailError('Please use a professional email domain.')
      return
    }

    console.log('Form submitted')
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input type="text" id="firstName" name="firstName" required className="mt-1 block w-full" />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input type="text" id="lastName" name="lastName" required className="mt-1 block w-full" />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required className="mt-1 block w-full" />
        {emailError && (
          <Alert variant="destructive" className="mt-2">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{emailError}</AlertDescription>
          </Alert>
        )}
      </div>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" name="title" required className="mt-1 block w-full" />
      </div>
      <div>
        <Label htmlFor="message">How can DTG help you with AI?</Label>
        <Textarea id="message" name="message" required className="mt-1 block w-full" rows={4} />
      </div>
      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Send</Button>
      </div>
    </form>
  )
}