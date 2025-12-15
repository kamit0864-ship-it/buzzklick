import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, CheckCircle2, Target, FileText, Video, Award } from "lucide-react";

export default function PlaybookPage() {
  const playbooks = [
    {
      title: "B2B SaaS GTM Playbook",
      description: "Complete go-to-market framework for product launches",
      modules: 8,
      duration: "4 weeks"
    },
    {
      title: "Content Marketing Playbook",
      description: "Build and execute a content strategy that drives results",
      modules: 6,
      duration: "3 weeks"
    },
    {
      title: "Lead Generation Playbook",
      description: "Systematic approach to generating qualified B2B leads",
      modules: 7,
      duration: "3 weeks"
    },
    {
      title: "SEO Optimization Playbook",
      description: "Technical and content SEO strategies for SaaS companies",
      modules: 6,
      duration: "4 weeks"
    },
    {
      title: "Brand Building Playbook",
      description: "Develop a powerful brand identity from scratch",
      modules: 5,
      duration: "2 weeks"
    },
    {
      title: "Social Media Strategy Playbook",
      description: "Create engaging social presence across all platforms",
      modules: 6,
      duration: "3 weeks"
    }
  ];

  const benefits = [
    "Step-by-step frameworks used by successful B2B companies",
    "Customizable templates and worksheets",
    "Video tutorials and expert guidance",
    "Real-world examples and case studies",
    "Access to private community for peer support",
    "Certificate of completion",
    "Lifetime access to updates and new content",
    "Money-back guarantee if not satisfied"
  ];

  const includes = [
    {
      icon: FileText,
      title: "Comprehensive Guides",
      description: "Detailed documentation covering every aspect of the strategy"
    },
    {
      icon: Video,
      title: "Video Training",
      description: "Expert-led video tutorials walking through each step"
    },
    {
      icon: Target,
      title: "Templates & Tools",
      description: "Ready-to-use templates, checklists, and frameworks"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn a certificate to showcase your expertise"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-12 h-12" />
              <span className="text-xl font-bold">PLAYBOOK MODEL</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Master B2B Marketing With Expert Playbooks</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Comprehensive training programs and guided frameworks that empower your internal 
              team to execute world-class marketing strategies.
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
                Marketing teams that want to level up their skills and implement proven strategies 
                without hiring agencies or consultants.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Internal marketing teams ready to upskill</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Founders and entrepreneurs bootstrapping their marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Companies wanting repeatable marketing processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Organizations looking for cost-effective marketing education</span>
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
                    <h3 className="font-bold text-lg mb-2">Choose Your Playbook</h3>
                    <p className="text-gray-600">Select the playbook that matches your current marketing priorities and challenges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Learn at Your Pace</h3>
                    <p className="text-gray-600">Access comprehensive training materials, video tutorials, and expert insights on-demand.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Implement with Confidence</h3>
                    <p className="text-gray-600">Use provided templates, checklists, and frameworks to execute strategies immediately.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Get Support</h3>
                    <p className="text-gray-600">Join our community, ask questions, and get guidance from experts and peers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 text-center">Available Playbooks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {playbooks.map((playbook, index) => (
                <Card key={index} className="border-2 hover:border-[var(--primary)] transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{playbook.title}</CardTitle>
                    <p className="text-sm text-gray-600">{playbook.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>{playbook.modules} modules</span>
                      <span>{playbook.duration}</span>
                    </div>
                    <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-semibold">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {includes.map((item, index) => (
                <Card key={index} className="text-center border-2 hover:border-[var(--primary)] transition-all">
                  <CardContent className="pt-8">
                    <item.icon className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black mb-12 text-center">Why Choose Playbooks</h2>
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Start Learning Today</h2>
          <p className="text-xl mb-10 text-gray-300">
            Explore our playbooks and empower your team with proven marketing strategies
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-bold text-lg px-10 py-6 h-auto">
              Browse Playbooks
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}