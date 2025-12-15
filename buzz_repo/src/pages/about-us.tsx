import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, Users, Zap, Award, TrendingUp, Heart } from "lucide-react";

export default function AboutUsPage() {
  const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by your growth metrics, not vanity numbers"
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Your success is our success. We work as an extension of your team"
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Staying ahead of marketing trends to give you a competitive edge"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering world-class marketing strategies and execution"
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    description: "Every decision backed by analytics and real-world performance"
  },
  {
    icon: Heart,
    title: "Authentic",
    description: "Building genuine connections between brands and audiences"
  }];


  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">About Buzzklick</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              We're not just another marketing agency. We're your growth partner in the B2B SaaS space.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Buzzklick exists to empower B2B SaaS companies to tell their stories authentically and strategically. 
                We believe that every SaaS brand has a unique value proposition that deserves to be heard.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to transform complex technical solutions into compelling narratives that resonate with 
                decision-makers and drive measurable business growth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/5 p-12 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[var(--primary)] rounded-full mt-2"></div>
                  <p className="text-lg text-gray-800">Founded with a vision to revolutionize B2B marketing</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[var(--primary)] rounded-full mt-2"></div>
                  <p className="text-lg text-gray-800">Specialized expertise in SaaS growth strategies</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[var(--primary)] rounded-full mt-2"></div>
                  <p className="text-lg text-gray-800">Proven track record with 100+ successful campaigns</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[var(--primary)] rounded-full mt-2"></div>
                  <p className="text-lg text-gray-800">Global team of marketing experts and strategists</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-center">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
              To become the most trusted marketing partner for B2B SaaS companies worldwide, 
              known for driving sustainable growth through innovative strategies and exceptional execution.
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) =>
              <Card key={index} className="border-2 hover:border-[var(--primary)] transition-all duration-300 hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-[var(--primary)]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: "#ffffff" }}>Ready to Grow Together?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Join hundreds of B2B SaaS companies that trust Buzzklick with their marketing
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-bold text-lg px-10 py-6 h-auto">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>);

}