import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export default function CareersPage() {
  const benefits = [
    "Competitive salary and equity options",
    "Health, dental, and vision insurance",
    "Flexible work arrangements",
    "Professional development budget",
    "Remote-first culture",
    "Unlimited PTO",
    "Latest tools and technology",
    "Regular team retreats"
  ];

  const openRoles = [
    {
      title: "Senior Content Strategist",
      department: "Content Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Lead content strategy for B2B SaaS clients, managing editorial calendars and content teams."
    },
    {
      title: "PPC Specialist",
      department: "Performance Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Manage and optimize paid advertising campaigns across Google Ads, LinkedIn, and other platforms."
    },
    {
      title: "SEO Manager",
      department: "SEO",
      location: "Remote",
      type: "Full-time",
      description: "Drive organic growth strategies for clients through technical SEO, content optimization, and link building."
    },
    {
      title: "Social Media Manager",
      department: "Social Media",
      location: "Remote",
      type: "Full-time",
      description: "Create and execute social media strategies that build communities and drive engagement."
    },
    {
      title: "Brand Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Craft visual identities and brand assets that resonate with B2B audiences."
    },
    {
      title: "Marketing Automation Specialist",
      department: "Marketing Operations",
      location: "Remote",
      type: "Full-time",
      description: "Build and optimize marketing automation workflows using HubSpot, Marketo, and other platforms."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Build your career at the forefront of B2B SaaS marketing innovation
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Why Buzzklick?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Buzzklick, we're building something special. We're a team of passionate marketers, 
                strategists, and creators who believe in the power of authentic storytelling.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We work with cutting-edge B2B SaaS companies, solving complex marketing challenges 
                and driving real business impact. Every day brings new opportunities to learn, grow, and innovate.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you're looking for a place where your work matters, your ideas are valued, 
                and your growth is prioritized, you've found it.
              </p>
            </div>
            <div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Benefits & Perks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[var(--primary)] mt-1">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">Open Positions</h2>
            <div className="space-y-6">
              {openRoles.map((role, index) => (
                <Card key={index} className="border-2 hover:border-[var(--primary)] transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{role.title}</CardTitle>
                        <CardDescription className="text-base">{role.description}</CardDescription>
                      </div>
                      <Button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-semibold whitespace-nowrap">
                        Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Briefcase className="w-4 h-4" />
                        {role.department}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {role.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {role.type}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--light-grey)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Don't See Your Role?</h2>
          <p className="text-xl text-gray-700 mb-10">
            We're always looking for exceptional talent. Send us your resume and tell us why you'd be a great fit.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-bold text-lg px-10 py-6 h-auto">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}