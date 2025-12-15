import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mic, Users, TrendingUp, Radio, CheckCircle2 } from "lucide-react";

export default function PodcastMarketingPage() {
  const benefits = [
    "Podcast strategy and positioning",
    "Guest booking and outreach",
    "Audio production and editing",
    "Show notes and transcription",
    "Distribution across all platforms",
    "Audience growth and monetization"
  ];

  const process = [
    {
      icon: Mic,
      title: "Concept Development",
      description: "Define your podcast theme, format, and target audience"
    },
    {
      icon: Users,
      title: "Production",
      description: "Record, edit, and produce professional-quality episodes"
    },
    {
      icon: Radio,
      title: "Distribution",
      description: "Publish and promote across all major podcast platforms"
    },
    {
      icon: TrendingUp,
      title: "Grow & Monetize",
      description: "Build audience and create revenue opportunities"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Podcast Marketing That Amplifies Your Voice</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Launch and grow your B2B podcast to reach new audiences and establish thought leadership
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
                Podcasting is booming in B2B, but standing out requires strategy, consistency, and 
                production quality. Many companies start podcasts but fail to build an audience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You need a comprehensive approach that covers everything from content strategy to 
                distribution and audience growth.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">Our Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We handle every aspect of podcast creation and marketing, from concept to distribution, 
                ensuring your show delivers value and builds authority.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team includes podcast strategists, producers, and marketers who know how to create 
                shows that resonate and grow.
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Launch Your Podcast?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's create a podcast strategy that builds your authority and grows your audience
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