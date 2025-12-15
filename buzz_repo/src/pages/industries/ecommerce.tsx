import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart, CheckCircle2, TrendingUp, Target, Zap } from "lucide-react";

export default function EcommercePage() {
  const services = [
    "Conversion rate optimization",
    "Product page SEO",
    "Shopping ads management",
    "Email marketing automation",
    "Social commerce strategies",
    "Customer retention campaigns"
  ];

  const challenges = [
    {
      title: "High Competition",
      solution: "Differentiated positioning and targeted audience segmentation"
    },
    {
      title: "Cart Abandonment",
      solution: "Strategic retargeting and email recovery campaigns"
    },
    {
      title: "Customer Acquisition Costs",
      solution: "Multi-channel strategies that maximize ROI and lifetime value"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart className="w-12 h-12" />
              <span className="text-xl font-bold">E-COMMERCE MARKETING</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Marketing for E-commerce Success</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Drive sales and build customer loyalty with conversion-focused e-commerce marketing strategies
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl font-black mb-6">The E-commerce Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                E-commerce is intensely competitive with thin margins and high customer acquisition costs. 
                Success requires optimizing every touchpoint in the customer journey.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You need strategies that not only drive traffic but convert visitors into customers and 
                turn one-time buyers into loyal advocates.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">Our E-commerce Expertise</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We've helped e-commerce brands scale from startup to seven figures through data-driven 
                marketing strategies focused on conversion and retention.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team specializes in performance marketing, conversion optimization, and customer 
                lifecycle management that drives sustainable growth.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 text-center">E-commerce Marketing Services</h2>
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
            <h2 className="text-4xl font-black mb-12 text-center">How We Solve E-commerce Challenges</h2>
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Scale Your E-commerce Business?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's create a marketing strategy that drives conversions and maximizes customer lifetime value
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