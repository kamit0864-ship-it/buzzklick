import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, CheckCircle2, MapPin, TrendingUp, Users } from "lucide-react";

export default function RealEstatePage() {
  const services = [
    "Property listing optimization",
    "Local SEO for real estate",
    "Virtual tour marketing",
    "Lead generation campaigns",
    "Social media for agents",
    "Real estate brand development"
  ];

  const challenges = [
    {
      title: "Local Competition",
      solution: "Hyper-local SEO and targeted geographic marketing strategies"
    },
    {
      title: "Lead Quality",
      solution: "Qualification systems that identify serious buyers and sellers"
    },
    {
      title: "Visual Marketing",
      solution: "Professional photography, video, and virtual tour strategies"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-12 h-12" />
              <span className="text-xl font-bold">REAL ESTATE MARKETING</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Marketing for Real Estate Technology</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Drive property sales and agent success with location-based, conversion-focused marketing
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl font-black mb-6">The Real Estate Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Real estate marketing is intensely local and highly competitive. Success requires standing 
                out in crowded markets and generating high-quality leads that convert.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You need strategies that leverage visual content, local SEO, and targeted advertising to 
                connect properties with the right buyers and sellers.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">Our Real Estate Expertise</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We've helped real estate platforms, property management companies, and technology providers 
                grow their market presence and generate quality leads.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team specializes in local search optimization, visual marketing, and lead generation 
                strategies that drive real estate success.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 text-center">Real Estate Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-[var(--light-grey)] rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black mb-12 text-center">How We Solve Real Estate Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="border-2 hover:border-[var(--primary)] transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{challenge.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Dominate Your Market?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's create a marketing strategy that drives property sales and agent success
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-bold text-lg px-10 py-6 h-auto">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}