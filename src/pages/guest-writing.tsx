import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, FileText, Users, TrendingUp, Award } from "lucide-react";

export default function GuestWritingPage() {
  const topics = [
    "B2B SaaS Marketing Strategies",
    "Content Marketing Best Practices",
    "SEO for SaaS Companies",
    "Lead Generation Tactics",
    "Social Media Marketing",
    "Brand Building & Positioning",
    "Marketing Automation",
    "Growth Hacking Strategies",
    "Customer Success Stories",
    "Industry Trends & Analysis"
  ];

  const benefits = [
    {
      icon: Users,
      title: "Reach Our Audience",
      description: "Access thousands of B2B marketing professionals and decision-makers"
    },
    {
      icon: TrendingUp,
      title: "Build Authority",
      description: "Establish yourself as a thought leader in the marketing space"
    },
    {
      icon: FileText,
      title: "Quality Backlinks",
      description: "Get high-quality dofollow backlinks to boost your SEO"
    },
    {
      icon: Award,
      title: "Portfolio Building",
      description: "Showcase your expertise with published content on a respected platform"
    }
  ];

  const guidelines = [
    "Original content only (not published elsewhere)",
    "Minimum 1,500 words",
    "Actionable insights and practical tips",
    "Data-driven with credible sources",
    "Professional tone suitable for B2B audience",
    "Proper formatting with headers and subheaders",
    "1-2 relevant images or graphics",
    "Author bio (50-75 words) with headshot"
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Guest Writing for Buzzklick</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Share your expertise with our community of B2B marketing professionals
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Why Write for Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of industry experts sharing valuable insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-2 hover:border-[var(--primary)] transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black mb-6">Topics We're Looking For</h2>
              <div className="space-y-3 mb-8">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-black mb-6 mt-12">Submission Guidelines</h2>
              <div className="space-y-3">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{guideline}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="border-2">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-black mb-6">Submit Your Pitch</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Your Name *</label>
                      <Input placeholder="John Doe" required />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Email Address *</label>
                      <Input type="email" placeholder="john@example.com" required />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">LinkedIn Profile URL</label>
                      <Input placeholder="https://linkedin.com/in/johndoe" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Article Title *</label>
                      <Input placeholder="e.g., 10 Proven Lead Generation Tactics for B2B SaaS" required />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Article Outline *</label>
                      <Textarea
                        placeholder="Brief outline of your article (key points, main sections, etc.)"
                        rows={6}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Why This Topic?</label>
                      <Textarea
                        placeholder="Tell us why you're the right person to write about this topic"
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-bold text-lg h-12"
                    >
                      Submit Your Pitch
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      We'll review your pitch and get back to you within 5-7 business days
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}