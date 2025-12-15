import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, Smartphone, Zap, Code, CheckCircle2 } from "lucide-react";

export default function WebDesignPage() {
  const benefits = [
    "Custom responsive web design",
    "Conversion-optimized layouts",
    "Fast loading and performance",
    "SEO-friendly architecture",
    "Mobile-first approach",
    "Ongoing maintenance and support"
  ];

  const process = [
    {
      icon: Globe,
      title: "Discovery & Strategy",
      description: "Understand your brand, goals, and target audience"
    },
    {
      icon: Code,
      title: "Design & Development",
      description: "Create beautiful, functional websites built on modern tech"
    },
    {
      icon: Smartphone,
      title: "Testing & QA",
      description: "Ensure flawless performance across all devices and browsers"
    },
    {
      icon: Zap,
      title: "Launch & Optimize",
      description: "Deploy and continuously improve based on user data"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Web Design That Converts</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Beautiful, high-performing websites that turn visitors into customers
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
                Your website is often the first impression potential customers have of your brand. 
                An outdated or poorly designed website can cost you leads and credibility.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You need a website that not only looks professional but also guides visitors toward 
                conversion with strategic design and clear messaging.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">Our Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We design websites that combine aesthetics with conversion psychology, creating 
                experiences that engage visitors and drive them to take action.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Built on modern frameworks, optimized for speed and SEO, our websites are designed 
                to grow with your business.
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Transform Your Online Presence?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's build a website that drives results for your business
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