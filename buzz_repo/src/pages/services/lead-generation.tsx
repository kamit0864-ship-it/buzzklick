import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, TrendingUp, Users, BarChart3, Zap, CheckCircle2 } from "lucide-react";

export default function LeadGenerationPage() {
  const benefits = [
    "Qualified leads aligned with your ICP",
    "Multi-channel lead generation strategies",
    "Advanced targeting and segmentation",
    "Lead scoring and nurturing workflows",
    "CRM integration and management",
    "Real-time reporting and analytics"
  ];

  const process = [
    {
      icon: Target,
      title: "Define Your ICP",
      description: "Identify and profile your ideal customer to ensure targeting precision"
    },
    {
      icon: Users,
      title: "Multi-Channel Outreach",
      description: "Leverage email, social, content, and paid ads for maximum reach"
    },
    {
      icon: Zap,
      title: "Lead Qualification",
      description: "Score and qualify leads based on engagement and fit"
    },
    {
      icon: BarChart3,
      title: "Optimize & Scale",
      description: "Continuously refine campaigns for better conversion rates"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Lead Generation for B2B SaaS</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Drive qualified leads that convert into customers with our data-driven strategies
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
                B2B SaaS companies struggle with generating high-quality leads that actually convert. 
                Traditional lead generation tactics often result in low-quality contacts that waste sales resources.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You need a systematic approach that attracts the right prospects, nurtures them effectively, 
                and delivers sales-ready leads that close.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">Our Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We combine strategic targeting, compelling content, and advanced automation to build 
                a lead generation engine that consistently delivers results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From initial awareness to sales handoff, we optimize every touchpoint to maximize 
                conversion rates and ROI.
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Generate Quality Leads?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's build a lead generation strategy that drives real growth
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