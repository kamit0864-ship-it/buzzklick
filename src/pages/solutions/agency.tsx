import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, CheckCircle2, Users, Target, TrendingUp, Zap } from "lucide-react";

export default function AgencyPage() {
  const services = [
    {
      title: "Strategic Planning",
      description: "Comprehensive marketing strategy aligned with your business goals"
    },
    {
      title: "Campaign Execution",
      description: "Full-service implementation across all marketing channels"
    },
    {
      title: "Content Creation",
      description: "High-quality content that resonates with your audience"
    },
    {
      title: "Performance Marketing",
      description: "Data-driven campaigns that deliver measurable ROI"
    },
    {
      title: "Brand Development",
      description: "Build a powerful brand identity that stands out"
    },
    {
      title: "Sales Enablement",
      description: "Tools and materials that empower your sales team"
    }
  ];

  const benefits = [
    "Dedicated account team managing your entire marketing function",
    "Integrated strategy across all channels and touchpoints",
    "Access to diverse skill sets without hiring full-time",
    "Scalable solutions that grow with your business",
    "Regular strategy sessions and performance reviews",
    "Predictable monthly investment with transparent pricing"
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-12 h-12" />
              <span className="text-xl font-bold">AGENCY MODEL</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Your Full-Service Marketing Team</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Get a dedicated marketing department without the overhead. We become an extension of your team, 
              handling strategy, execution, and optimization.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl font-black mb-6">Who It's For</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                B2B SaaS companies that need comprehensive marketing support but don't want the cost 
                and complexity of building an in-house team.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Startups ready to scale their go-to-market efforts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Companies launching new products or entering new markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Organizations needing strategic leadership and hands-on execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Teams that want predictable costs and transparent results</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">How It Works</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Discovery & Onboarding</h3>
                    <p className="text-gray-600">We immerse ourselves in your business, conducting comprehensive discovery to understand your goals, challenges, and market position.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Strategic Planning</h3>
                    <p className="text-gray-600">Our team develops a comprehensive marketing strategy with clear objectives, KPIs, and tactical execution plans.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Execution & Optimization</h3>
                    <p className="text-gray-600">We implement campaigns, create content, manage channels, and continuously optimize based on performance data.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Reporting & Iteration</h3>
                    <p className="text-gray-600">Regular performance reviews, transparent reporting, and strategic recommendations to accelerate growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-[var(--primary)] transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black mb-12 text-center">Why Choose Agency Model</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-[var(--light-grey)] rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's discuss how our agency model can accelerate your growth
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-bold text-lg px-10 py-6 h-auto">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}