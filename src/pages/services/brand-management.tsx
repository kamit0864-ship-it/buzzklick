import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Eye, Heart, Sparkles, CheckCircle2 } from "lucide-react";

export default function BrandManagementPage() {
  const benefits = [
    "Brand strategy and positioning",
    "Brand messaging and voice",
    "Visual identity guidelines",
    "Brand consistency across channels",
    "Reputation management",
    "Brand performance tracking"
  ];

  const process = [
    {
      icon: Eye,
      title: "Brand Discovery",
      description: "Understand your brand essence, values, and unique positioning"
    },
    {
      icon: Sparkles,
      title: "Strategy Development",
      description: "Create a comprehensive brand strategy that resonates"
    },
    {
      icon: Heart,
      title: "Implementation",
      description: "Roll out brand guidelines across all touchpoints"
    },
    {
      icon: Award,
      title: "Monitor & Evolve",
      description: "Track brand perception and refine as your business grows"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Brand Management That Builds Recognition</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Develop a powerful brand identity that resonates with your audience and drives loyalty
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl font-black mb-6">The Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many B2B SaaS companies struggle with brand consistency and differentiation. A weak 
                brand makes it harder to stand out in crowded markets.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You need a strong brand identity that clearly communicates your value, resonates with 
                your target audience, and builds long-term recognition.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">Our Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We develop comprehensive brand strategies that capture your unique essence and position 
                you as a leader in your space.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From messaging to visual identity, we ensure every brand touchpoint reinforces your 
                positioning and builds trust with your audience.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 text-center">What You Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-[var(--light-grey)] rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black mb-12 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="border-2 hover:border-[var(--primary)] transition-all">
                  <CardHeader>
                    <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-[var(--primary)]" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Build a Powerful Brand?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's create a brand that stands out and drives lasting recognition
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