import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, CheckCircle2 } from "lucide-react";

export default function WhitePapersPage() {
  const whitePapers = [
    {
      title: "The Complete B2B SaaS Marketing Playbook 2025",
      description: "A comprehensive 50-page guide covering every aspect of B2B SaaS marketing, from strategy to execution.",
      pages: "50 pages",
      topics: ["GTM Strategy", "Lead Generation", "Content Marketing", "SEO", "Paid Acquisition"],
      downloadCount: "12,500+"
    },
    {
      title: "Lead Generation Framework for SaaS Startups",
      description: "Step-by-step methodology for building a predictable lead generation engine from scratch.",
      pages: "35 pages",
      topics: ["Lead Generation", "Demand Gen", "Sales Enablement", "Marketing Automation"],
      downloadCount: "8,200+"
    },
    {
      title: "Content Marketing ROI: Measurement Guide",
      description: "Data-driven framework for measuring and proving the ROI of your content marketing efforts.",
      pages: "28 pages",
      topics: ["Content Marketing", "Analytics", "ROI Measurement", "KPIs"],
      downloadCount: "6,800+"
    },
    {
      title: "SEO for B2B SaaS: Technical & Strategic Guide",
      description: "Advanced SEO strategies specifically designed for B2B SaaS companies and complex products.",
      pages: "45 pages",
      topics: ["SEO", "Technical SEO", "Content Strategy", "Link Building"],
      downloadCount: "9,400+"
    },
    {
      title: "Building a High-Performance Marketing Team",
      description: "Recruitment, structure, and management strategies for scaling your marketing organization.",
      pages: "32 pages",
      topics: ["Team Building", "Hiring", "Management", "Career Development"],
      downloadCount: "5,600+"
    },
    {
      title: "Account-Based Marketing Playbook",
      description: "Comprehensive guide to implementing ABM strategies that win enterprise deals.",
      pages: "38 pages",
      topics: ["ABM", "Enterprise Sales", "Personalization", "Multi-Channel"],
      downloadCount: "7,300+"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FileText className="w-16 h-16 mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6">White Papers & Guides</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              In-depth research, frameworks, and strategies for B2B SaaS marketing success
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Free Marketing Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive guides and start implementing proven strategies today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {whitePapers.map((paper, index) => (
              <Card key={index} className="border-2 hover:border-[var(--primary)] transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3">{paper.title}</CardTitle>
                      <CardDescription className="text-base mb-4">{paper.description}</CardDescription>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {paper.pages}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {paper.downloadCount} downloads
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {paper.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full font-semibold"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-semibold">
                    <Download className="mr-2 w-4 h-4" />
                    Download Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--light-grey)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2">
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black mb-4">Get Instant Access</h2>
                <p className="text-gray-600">
                  Enter your email to download any white paper. We'll also send you exclusive content and updates.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name *</label>
                    <Input placeholder="John" required className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name *</label>
                    <Input placeholder="Doe" required className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Work Email *</label>
                  <Input type="email" placeholder="john@company.com" required className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Company Name</label>
                  <Input placeholder="Your Company" className="h-12" />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-bold text-lg h-14"
                >
                  Download White Papers
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  By downloading, you agree to receive marketing emails from Buzzklick. Unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}