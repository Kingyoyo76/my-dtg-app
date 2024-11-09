import React from 'react'
import { Button } from "@/components/ui/button"

interface ContactFormProps {
  onClose: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        alert("Form submitted! We'll be in touch soon.")
        onClose()
      }}>
        <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded" required />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" required />
        <textarea placeholder="Message" className="w-full p-2 mb-4 border rounded" rows={4} required></textarea>
        <div className="flex justify-end">
          <Button type="button" onClick={onClose} className="mr-2">Cancel</Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  </div>
)

export default ContactForm