import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Rocket, Target, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export default function GTMStrategyPage() {
  const benefits = [
    "Comprehensive market analysis",
    "Competitive positioning strategy",
    "Pricing and packaging recommendations",
    "Launch campaign planning",
    "Sales enablement materials",
    "Performance tracking and optimization"
  ];

  const process = [
    {
      icon: Target,
      title: "Market Research",
      description: "Analyze market dynamics, competitors, and target audience"
    },
    {
      icon: Users,
      title: "Strategy Development",
      description: "Create positioning, messaging, and go-to-market plan"
    },
    {
      icon: Rocket,
      title: "Launch Execution",
      description: "Execute multi-channel launch campaigns"
    },
    {
      icon: TrendingUp,
      title: "Scale & Optimize",
      description: "Monitor performance and refine for sustainable growth"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Go-To-Market Strategy That Drives Success</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Launch and scale your product with proven strategies that accelerate market penetration
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
                Launching a product without a clear GTM strategy leads to missed opportunities and 
                wasted resources. Many SaaS companies struggle to gain traction.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You need a comprehensive strategy that identifies your ideal customers, positions you 
                against competitors, and executes a coordinated launch.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">Our Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We develop data-driven GTM strategies based on deep market research and proven 
                frameworks that accelerate product adoption.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From positioning to pricing to launch execution, we guide you through every step 
                to ensure a successful market entry and sustained growth.
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Launch Successfully?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's build a GTM strategy that accelerates your market entry and growth
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