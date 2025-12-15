import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, CheckCircle2, Shield, Users, Activity } from "lucide-react";

export default function HealthcarePage() {
  const services = [
    "HIPAA-compliant marketing campaigns",
    "Patient acquisition strategies",
    "Healthcare SEO and content marketing",
    "Telemedicine platform promotion",
    "Medical device marketing",
    "Healthcare brand management"
  ];

  const challenges = [
    {
      title: "Regulatory Compliance",
      solution: "HIPAA and FDA-compliant marketing strategies and messaging"
    },
    {
      title: "Building Trust",
      solution: "Evidence-based content and transparent communication"
    },
    {
      title: "Complex Products",
      solution: "Simplified messaging that educates and engages stakeholders"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-12 h-12" />
              <span className="text-xl font-bold">HEALTHCARE MARKETING</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Marketing for Healthcare Technology</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Drive patient acquisition and provider adoption with compliant, trust-building marketing strategies
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl font-black mb-6">The Healthcare Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Marketing healthcare technology requires navigating strict regulations, building trust with 
                medical professionals, and communicating complex benefits clearly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Success demands specialized knowledge of healthcare compliance, patient privacy, and proven 
                strategies that resonate with both providers and patients.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">Our Healthcare Expertise</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We've partnered with telemedicine platforms, medical device companies, and healthcare SaaS 
                providers to navigate the complex healthcare marketing landscape.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team understands HIPAA compliance, healthcare buyer psychology, and the unique challenges 
                of marketing in this highly regulated industry.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 text-center">Healthcare Marketing Services</h2>
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
            <h2 className="text-4xl font-black mb-12 text-center">How We Solve Healthcare Challenges</h2>
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Transform Healthcare Marketing?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's create compliant, effective marketing that drives patient and provider adoption
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