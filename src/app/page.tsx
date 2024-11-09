import { GraduationCap, Briefcase, Banknote, Film, Hotel, Heart } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

// ... (previous imports and code)

const industries = [
  { icon: <GraduationCap className="h-10 w-10 text-blue-600 mb-4" />, title: "Education", items: ["Unlock student potential", "Maximize administrative efficiency", "Advance research initiatives"] },
  { icon: <Briefcase className="h-10 w-10 text-blue-600 mb-4" />, title: "Manufacturing", items: ["Optimized production", "Top-tier quality assurance", "Enhanced supply chain resilience"] },
  { icon: <Banknote className="h-10 w-10 text-blue-600 mb-4" />, title: "Financial Services", items: ["Risk reduction", "Proactive fraud detection", "Unparalleled customer experience"] },
  { icon: <Film className="h-10 w-10 text-blue-600 mb-4" />, title: "Media", items: ["Innovative content strategies", "Seamless video processing", "Precision audience targeting"] },
  { icon: <Hotel className="h-10 w-10 text-blue-600 mb-4" />, title: "Hospitality", items: ["Personalized guest experiences", "Efficient staff allocation", "Streamlined operations"] },
  { icon: <Heart className="h-10 w-10 text-blue-600 mb-4" />, title: "Healthcare", items: ["Enhanced patient care", "Optimized workflows", "Data security and compliance"] },
]

// ... (other component code)

export default function Component() {
  // ... (previous code)

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-gray-900">
        {/* ... (previous sections) */}

        <Element name="industries">
          <section className="py-16 bg-gray-50">
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
        </Element>

        {/* ... (remaining sections) */}
      </div>
    </LazyMotion>
  )
}