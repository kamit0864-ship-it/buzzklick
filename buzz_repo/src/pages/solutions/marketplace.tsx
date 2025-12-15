import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, CheckCircle2, Award, Shield, Clock, Zap } from "lucide-react";

export default function MarketplacePage() {
  const expertise = [
    {
      title: "Content Marketing",
      description: "SEO writers, copywriters, content strategists"
    },
    {
      title: "Performance Marketing",
      description: "PPC specialists, social media advertisers"
    },
    {
      title: "SEO Experts",
      description: "Technical SEO, link building, content optimization"
    },
    {
      title: "Design & Creative",
      description: "Brand designers, UI/UX experts, video producers"
    },
    {
      title: "Marketing Operations",
      description: "Marketing automation, analytics, CRM specialists"
    },
    {
      title: "Strategy Consultants",
      description: "GTM strategists, growth advisors, brand consultants"
    }
  ];

  const benefits = [
    "Access to pre-vetted marketing experts across all specialties",
    "Flexible engagement models (hourly, project-based, retainer)",
    "Quality assurance and project management support",
    "Fast matching (typically within 48-72 hours)",
    "Transparent pricing with no hidden fees",
    "Risk-free trial period to ensure the right fit"
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-12 h-12" />
              <span className="text-xl font-bold">MARKETPLACE MODEL</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Connect With Expert Marketing Talent</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Access our curated network of vetted marketing consultants and specialists. 
              Get the exact expertise you need, when you need it.
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
                Startups and growing companies that need specific marketing expertise without 
                long-term commitments or the overhead of traditional agencies.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Early-stage startups with specific project needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Companies looking to fill skill gaps in their marketing team</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Organizations needing specialized expertise for specific projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Teams wanting flexible, on-demand marketing support</span>
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
                    <h3 className="font-bold text-lg mb-2">Tell Us Your Needs</h3>
                    <p className="text-gray-600">Submit a detailed brief about your project, timeline, budget, and required expertise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Get Matched</h3>
                    <p className="text-gray-600">Our team reviews your requirements and matches you with 2-3 vetted consultants from our network.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Interview & Select</h3>
                    <p className="text-gray-600">Review profiles, conduct interviews, and choose the consultant that best fits your needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Launch & Support</h3>
                    <p className="text-gray-600">Start working with your consultant. We provide ongoing support and quality assurance throughout the engagement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 text-center">Available Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((area, index) => (
                <Card key={index} className="border-2 hover:border-[var(--primary)] transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 text-center">Our Vetting Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="text-center border-2">
                <CardContent className="pt-8">
                  <Award className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Experience Review</h3>
                  <p className="text-sm text-gray-600">Minimum 5+ years in B2B marketing with proven track record</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2">
                <CardContent className="pt-8">
                  <Shield className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Skills Assessment</h3>
                  <p className="text-sm text-gray-600">Technical evaluations and case study presentations</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2">
                <CardContent className="pt-8">
                  <Users className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Reference Checks</h3>
                  <p className="text-sm text-gray-600">Verified client testimonials and project outcomes</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2">
                <CardContent className="pt-8">
                  <Clock className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Trial Projects</h3>
                  <p className="text-sm text-gray-600">Initial test projects to ensure quality standards</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black mb-12 text-center">Why Choose Marketplace</h2>
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Hire Expert Talent?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Tell us about your project and get matched with the perfect consultant
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-bold text-lg px-10 py-6 h-auto">
              Find Your Consultant
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}