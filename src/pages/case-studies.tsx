import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp, Users, Target, BarChart3, ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      client: "TechFlow",
      industry: "B2B SaaS",
      challenge: "Low conversion rates and ineffective lead generation",
      solution: "Comprehensive GTM strategy with content marketing and paid campaigns",
      results: [
        { metric: "300%", label: "Increase in Qualified Leads" },
        { metric: "2.5x", label: "Conversion Rate Improvement" },
        { metric: "$2M", label: "Additional ARR Generated" }
      ],
      testimonial: "Buzzklick transformed our marketing strategy. The results speak for themselves.",
      author: "Sarah Chen, CMO"
    },
    {
      client: "CloudScale",
      industry: "Cloud Infrastructure",
      challenge: "Entering competitive market with limited brand awareness",
      solution: "Integrated brand positioning, thought leadership, and SEO strategy",
      results: [
        { metric: "450%", label: "Organic Traffic Growth" },
        { metric: "#1", label: "Ranking for Key Terms" },
        { metric: "85%", label: "Brand Awareness Increase" }
      ],
      testimonial: "Their expertise in B2B marketing helped us establish market leadership quickly.",
      author: "Michael Rodriguez, Founder & CEO"
    },
    {
      client: "DataStream",
      industry: "Analytics Platform",
      challenge: "Long sales cycles and complex product messaging",
      solution: "Educational content series, webinars, and nurture campaigns",
      results: [
        { metric: "40%", label: "Shorter Sales Cycle" },
        { metric: "4.2x", label: "Marketing ROI" },
        { metric: "120%", label: "Pipeline Growth" }
      ],
      testimonial: "Buzzklick helped us simplify our message and accelerate our sales velocity.",
      author: "Emily Thompson, VP of Marketing"
    },
    {
      client: "FinanceHub",
      industry: "Fintech",
      challenge: "Building trust in regulated financial services space",
      solution: "Compliance-focused content, customer success stories, security messaging",
      results: [
        { metric: "250%", label: "Lead Volume Increase" },
        { metric: "3.8x", label: "Customer Acquisition" },
        { metric: "92%", label: "Trust Score Improvement" }
      ],
      testimonial: "They understood our regulatory challenges and created compliant campaigns that converted.",
      author: "David Kim, CMO"
    },
    {
      client: "EduTech Pro",
      industry: "EdTech",
      challenge: "Reaching multiple stakeholders (teachers, admins, parents)",
      solution: "Multi-audience targeting strategy with personalized messaging",
      results: [
        { metric: "180%", label: "School Adoption Rate" },
        { metric: "350%", label: "User Engagement" },
        { metric: "$5M", label: "Revenue Growth" }
      ],
      testimonial: "Their understanding of the education sector was invaluable to our growth.",
      author: "Jessica Martinez, Founder"
    },
    {
      client: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "HIPAA compliance while driving patient acquisition",
      solution: "Privacy-focused campaigns with educational content and provider testimonials",
      results: [
        { metric: "400%", label: "Patient Acquisition" },
        { metric: "95%", label: "Provider Satisfaction" },
        { metric: "100%", label: "Compliance Maintained" }
      ],
      testimonial: "Buzzklick delivered results while maintaining our strict compliance requirements.",
      author: "Alex Johnson, CEO"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Case Studies</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Real results from real clients. See how we've helped B2B SaaS companies achieve exceptional growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to established players, we've driven measurable results across industries
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-2 hover:border-[var(--primary)] transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-3xl mb-2">{study.client}</CardTitle>
                      <p className="text-[var(--primary)] font-semibold">{study.industry}</p>
                    </div>
                    <Button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)]">
                      View Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-[var(--primary)]" />
                        The Challenge
                      </h3>
                      <p className="text-gray-700 mb-6">{study.challenge}</p>

                      <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-[var(--primary)]" />
                        Our Solution
                      </h3>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[var(--primary)]" />
                        The Results
                      </h3>
                      <div className="space-y-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="bg-[var(--light-grey)] p-4 rounded-lg">
                            <div className="text-3xl font-black text-[var(--primary)] mb-1">
                              {result.metric}
                            </div>
                            <div className="text-sm text-gray-700">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-[var(--primary)]" />
                        Client Testimonial
                      </h3>
                      <div className="bg-[var(--light-grey)] p-6 rounded-lg">
                        <p className="text-gray-700 italic mb-4 leading-relaxed">
                          "{study.testimonial}"
                        </p>
                        <p className="font-semibold text-sm">{study.author}</p>
                        <p className="text-xs text-gray-500">{study.client}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's discuss how we can help you achieve similar results
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-bold text-lg px-10 py-6 h-auto">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}