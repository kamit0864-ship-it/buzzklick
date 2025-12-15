import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, Target, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export default function ContentMarketingPage() {
  const benefits = [
    "Strategic content planning and calendar",
    "SEO-optimized blog posts and articles",
    "Lead magnets and gated content",
    "Thought leadership pieces",
    "Email marketing campaigns",
    "Content performance analytics"
  ];

  const process = [
    {
      icon: Target,
      title: "Content Strategy",
      description: "Define topics, keywords, and content pillars aligned with business goals"
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Produce high-quality, engaging content that resonates with your audience"
    },
    {
      icon: Users,
      title: "Distribution",
      description: "Amplify reach across multiple channels and platforms"
    },
    {
      icon: TrendingUp,
      title: "Optimize & Scale",
      description: "Analyze performance and refine strategy for maximum impact"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Content Marketing That Drives Growth</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Create compelling stories that engage your audience and establish thought leadership
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
                Creating consistent, high-quality content that cuts through the noise is challenging. 
                Many B2B companies produce content that doesn't resonate with their target audience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You need content that educates, engages, and converts while positioning your brand 
                as an industry authority.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">Our Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We develop data-driven content strategies that align with your buyer's journey and 
                business objectives, creating content that drives measurable results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From strategy to execution, we handle every aspect of your content marketing to 
                ensure consistency and quality.
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Build Your Content Engine?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's create content that resonates with your audience and drives conversions
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