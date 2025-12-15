import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Lightbulb, Rocket, LineChart, RefreshCw } from "lucide-react";

export default function HowWeWorkPage() {
  const process = [
    {
      icon: Search,
      phase: "01",
      title: "Discovery",
      duration: "1-2 weeks",
      description: "We dive deep into understanding your business, target audience, market position, and growth objectives.",
      activities: [
        "Stakeholder interviews",
        "Competitor analysis",
        "Market research",
        "Audience profiling",
        "Goal setting & KPI definition"
      ]
    },
    {
      icon: Lightbulb,
      phase: "02",
      title: "Strategy",
      duration: "2-3 weeks",
      description: "Based on insights, we craft a comprehensive marketing strategy tailored to your unique needs and goals.",
      activities: [
        "Channel selection",
        "Content strategy development",
        "Campaign planning",
        "Budget allocation",
        "Timeline & milestone mapping"
      ]
    },
    {
      icon: Rocket,
      phase: "03",
      title: "Execution",
      duration: "Ongoing",
      description: "Our expert team brings the strategy to life with precision, creativity, and attention to detail.",
      activities: [
        "Campaign launch",
        "Content creation & distribution",
        "Ad management",
        "Social media engagement",
        "Lead nurturing"
      ]
    },
    {
      icon: LineChart,
      phase: "04",
      title: "Optimization",
      duration: "Continuous",
      description: "We constantly monitor performance and make data-driven adjustments to maximize your ROI.",
      activities: [
        "A/B testing",
        "Performance analysis",
        "Conversion rate optimization",
        "Budget reallocation",
        "Tactic refinement"
      ]
    },
    {
      icon: RefreshCw,
      phase: "05",
      title: "Reporting",
      duration: "Weekly/Monthly",
      description: "Complete transparency with detailed reports showing progress, insights, and actionable recommendations.",
      activities: [
        "Performance dashboards",
        "ROI analysis",
        "Strategy sessions",
        "Insights & recommendations",
        "Next steps planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">How We Work</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Our proven 5-phase methodology that drives consistent results for B2B SaaS companies
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach refined through hundreds of successful campaigns
            </p>
          </div>

          <div className="space-y-12">
            {process.map((step, index) => (
              <Card key={index} className="border-2 hover:border-[var(--primary)] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center">
                        <step.icon className="w-10 h-10 text-[var(--primary)]" />
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-4xl font-black text-[var(--primary)]">{step.phase}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <CardTitle className="text-3xl">{step.title}</CardTitle>
                        <span className="text-sm bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full font-semibold">
                          {step.duration}
                        </span>
                      </div>
                      <CardDescription className="text-base mb-6">{step.description}</CardDescription>
                      <div>
                        <h4 className="font-bold text-sm text-gray-500 mb-3">KEY ACTIVITIES:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {step.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[var(--primary)] mt-1">•</span>
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--light-grey)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 hover:border-[var(--primary)] transition-all">
              <CardContent className="pt-6">
                <div className="text-5xl font-black text-[var(--primary)] mb-3">100+</div>
                <h3 className="text-xl font-bold mb-2">Successful Campaigns</h3>
                <p className="text-gray-600">Delivered across multiple industries</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-[var(--primary)] transition-all">
              <CardContent className="pt-6">
                <div className="text-5xl font-black text-[var(--primary)] mb-3">3.5x</div>
                <h3 className="text-xl font-bold mb-2">Average ROI</h3>
                <p className="text-gray-600">Return on marketing investment</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-[var(--primary)] transition-all">
              <CardContent className="pt-6">
                <div className="text-5xl font-black text-[var(--primary)] mb-3">98%</div>
                <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
                <p className="text-gray-600">Would recommend Buzzklick</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Experience Our Process</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's discuss how our proven methodology can accelerate your growth
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-bold text-lg px-10 py-6 h-auto">
              Schedule a Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}