import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Laptop, CheckCircle2, Code, Zap, Target } from "lucide-react";

export default function TechnologyPage() {
  const services = [
    "B2B SaaS marketing",
    "Product launch campaigns",
    "Developer marketing",
    "Technical content creation",
    "Thought leadership programs",
    "Partner ecosystem marketing"
  ];

  const challenges = [
    {
      title: "Complex Products",
      solution: "Clear, compelling messaging that simplifies technical concepts"
    },
    {
      title: "Long Sales Cycles",
      solution: "Multi-touch nurture campaigns and sales enablement"
    },
    {
      title: "Competitive Market",
      solution: "Differentiated positioning and category creation strategies"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Laptop className="w-12 h-12" />
              <span className="text-xl font-bold">TECHNOLOGY MARKETING</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Marketing for Technology Companies</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Drive adoption and growth with marketing strategies built for complex technology solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl font-black mb-6">The Technology Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Marketing technology products requires translating complex technical features into compelling 
                business value while navigating lengthy enterprise sales cycles.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Success demands understanding of both technical audiences and business decision-makers, 
                plus the ability to create content that resonates with both.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">Our Technology Expertise</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We specialize in B2B technology marketing, helping SaaS companies, platform providers, 
                and infrastructure solutions grow from early adopters to market leaders.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team combines technical understanding with marketing expertise to create strategies 
                that drive qualified pipeline and accelerate sales cycles.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 text-center">Technology Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-[var(--light-grey)] rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black mb-12 text-center">How We Solve Technology Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="border-2 hover:border-[var(--primary)] transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{challenge.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Accelerate Tech Growth?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's create a marketing strategy that drives enterprise adoption and revenue growth
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