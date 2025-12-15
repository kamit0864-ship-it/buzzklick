import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DollarSign, CheckCircle2, Shield, TrendingUp, Lock } from "lucide-react";

export default function FintechPage() {
  const services = [
    "Regulatory-compliant marketing",
    "Financial product positioning",
    "Trust-building content strategy",
    "Fintech SEO and demand generation",
    "User acquisition campaigns",
    "Financial literacy content"
  ];

  const challenges = [
    {
      title: "Regulatory Compliance",
      solution: "Marketing strategies that meet financial regulations and compliance requirements"
    },
    {
      title: "Building Trust",
      solution: "Security-focused messaging and transparent communication"
    },
    {
      title: "User Education",
      solution: "Content that simplifies complex financial concepts"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-12 h-12" />
              <span className="text-xl font-bold">FINTECH MARKETING</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Marketing for Financial Technology</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Drive user acquisition and build trust with compliant, transparent fintech marketing strategies
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl font-black mb-6">The Fintech Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Marketing financial technology requires navigating strict regulations, building trust with 
                security-conscious users, and educating markets about innovative financial solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Success demands specialized knowledge of financial regulations, user psychology around money, 
                and proven strategies that drive adoption while maintaining compliance.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">Our Fintech Expertise</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We've partnered with digital banks, payment platforms, investment apps, and lending solutions 
                to navigate the complex fintech marketing landscape.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team understands financial regulations, security concerns, and the unique challenges of 
                marketing products that handle people's money.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 text-center">Fintech Marketing Services</h2>
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
            <h2 className="text-4xl font-black mb-12 text-center">How We Solve Fintech Challenges</h2>
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Transform Fintech Marketing?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's create compliant, trust-building marketing that drives user adoption and revenue growth
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