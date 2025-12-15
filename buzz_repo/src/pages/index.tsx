import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DiscountPopup } from "@/components/DiscountPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Target,
  Palette,
  FileText,
  Globe,
  Search,
  Share2,
  Award,
  TrendingUp,
  Mic,
  Sparkles,
  Building2,
  GraduationCap,
  Heart,
  ShoppingCart,
  Laptop,
  DollarSign,
  Home,
  Users,
  BookOpen,
  Rocket,
  ArrowRight,
  CheckCircle2 } from
"lucide-react";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
  {
    icon: Target,
    title: "Lead Generation",
    description: "Drive qualified leads through strategic campaigns and data-driven targeting",
    link: "/services/lead-generation"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create intuitive, conversion-focused designs that delight users",
    link: "/services/ui-ux-design"
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Compelling stories that engage your audience and drive action",
    link: "/services/content-marketing"
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Beautiful, responsive websites that convert visitors into customers",
    link: "/services/web-design"
  },
  {
    icon: Search,
    title: "SEO",
    description: "Dominate search rankings and increase organic traffic",
    link: "/services/seo-services"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build community and drive engagement across all platforms",
    link: "/services/social-media-marketing"
  },
  {
    icon: Award,
    title: "Brand Management",
    description: "Develop a powerful brand identity that resonates with your audience",
    link: "/services/brand-management"
  },
  {
    icon: TrendingUp,
    title: "GTM Strategy",
    description: "Launch and scale your product with proven go-to-market strategies",
    link: "/services/go-to-market-strategy"
  },
  {
    icon: Mic,
    title: "Podcast Marketing",
    description: "Amplify your voice and reach new audiences through audio content",
    link: "/services/podcast-marketing"
  },
  {
    icon: Sparkles,
    title: "Brand Design",
    description: "Visual identity that captures your brand essence and drives recognition",
    link: "/services/brand-design"
  }];


  const industries = [
  { icon: GraduationCap, name: "EdTech", link: "/industries/edtech" },
  { icon: Heart, name: "Healthcare", link: "/industries/healthcare" },
  { icon: ShoppingCart, name: "E-commerce", link: "/industries/ecommerce" },
  { icon: Laptop, name: "Technology", link: "/industries/technology" },
  { icon: DollarSign, name: "Fintech", link: "/industries/fintech" },
  { icon: Home, name: "Real Estate", link: "/industries/real-estate" }];


  const growthModels = [
  {
    icon: Building2,
    title: "Agency",
    description:
    "Full-service marketing team leading strategy & execution including product marketing, sales enablement, and design",
    features: [
    "Dedicated account team",
    "End-to-end campaign management",
    "Strategic planning & execution",
    "Regular performance reporting"],

    cta: "See Our Services",
    link: "/solutions/agency"
  },
  {
    icon: Users,
    title: "Marketplace",
    description:
    "Connect startups with vetted marketing consultants and support the engagement end-to-end",
    features: [
    "Pre-vetted expert marketers",
    "Flexible engagement models",
    "Project management support",
    "Quality assurance"],

    cta: "Hire Freelancers",
    link: "/solutions/marketplace"
  },
  {
    icon: BookOpen,
    title: "Playbook",
    description: "Training programs and guided playbooks for internal marketing teams",
    features: [
    "Step-by-step frameworks",
    "Expert-led training",
    "Customizable templates",
    "Ongoing support"],

    cta: "Explore Playbooks",
    link: "/solutions/playbook"
  }];


  const testimonials = [
  {
    quote:
    "Buzzklick transformed our marketing strategy. We saw a 300% increase in qualified leads within 6 months.",
    author: "Sarah Chen",
    role: "CMO at TechFlow",
    company: "B2B SaaS"
  },
  {
    quote:
    "Their team's expertise in B2B marketing is unmatched. The ROI has been phenomenal.",
    author: "Michael Rodriguez",
    role: "Founder & CEO",
    company: "CloudScale"
  },
  {
    quote:
    "From strategy to execution, Buzzklick delivered beyond our expectations. Highly recommended!",
    author: "Emily Thompson",
    role: "VP of Marketing",
    company: "DataStream"
  }];


  return (
    <div className="min-h-screen">
      <Header />
      <DiscountPopup />

      {/* Hero Section with Dark Grid Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a1f]">
        {/* Animated Grid Background with Parallax */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}>

          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 0, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}>
          </div>
          
          {/* Red Gradient Glow at Bottom with Parallax */}
          <div
            className="absolute bottom-0 left-0 right-0 h-96"
            style={{
              background: 'radial-gradient(ellipse at center bottom, rgba(139, 0, 0, 0.4) 0%, rgba(88, 28, 135, 0.2) 30%, transparent 70%)',
              transform: `translateY(${scrollY * 0.3}px)`
            }}>
          </div>
          
          {/* Floating Particles/Stars with Parallax */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "transparent", backgroundImage: "radial-gradient(circle, rgb(14, 13, 13) 0%, #800000 100%)", boxShadow: "0 6px 12px 0 rgb(0 0 0 / 0.12)" }}>

            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20" style={{ backgroundColor: "#00000000" }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 animate-fade-in" style={{ boxShadow: "none" }}>
            <Sparkles className="w-5 h-5 text-white" style={{ backgroundColor: "#00000000", backgroundImage: "none", boxShadow: "0 6px 12px 0 rgb(0 0 0 / 0.12)", opacity: "1" }} />
            <span className="text-white/90 font-medium">Your B2B Marketing Partner</span>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-white" style={{ color: "#ffffff" }}>AI Digital Marketing</span>
            




            <br />
            <span className="text-white">That Drives Growth</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">SaaS Digital Marketing That Drives Growth

          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-[var(--primary)] hover:from-purple-700 hover:to-[var(--primary-hover)] text-white font-bold text-lg px-10 py-7 h-auto rounded-full shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:scale-105" style={{ backgroundImage: "linear-gradient(0deg, rgb(128, 0, 0) 0%, rgb(161, 18, 18) 100%)", boxShadow: "0 6px 12px 0 rgb(0 0 0 / 0.12)" }}>

                Get Started Free <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 font-bold text-lg px-10 py-7 h-auto rounded-full transition-all duration-300">

                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#000000" }}>Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth for B2B SaaS companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) =>
            <Link key={index} href={service.link}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-[var(--primary)]">
                  <CardHeader>
                    <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-[var(--primary)]" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-[var(--light-grey)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#000000" }}>Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across key B2B sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) =>
            <Link key={index} href={industry.link}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer text-center p-8 border-2 hover:border-[var(--primary)]">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                      <industry.icon className="w-8 h-8 text-[var(--primary)]" />
                    </div>
                    <h3 className="font-bold text-lg">{industry.name}</h3>
                  </div>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Three Ways to Grow Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#000000" }}>Three Ways We Help You Grow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the engagement model that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {growthModels.map((model, index) =>
            <Card key={index} className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-[var(--primary)]">
                <CardHeader>
                  <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                    <model.icon className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{model.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {model.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {model.features.map((feature, idx) =>
                  <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                  )}
                  </ul>
                  <Link href={model.link}>
                    <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-semibold">
                      {model.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#ffffff" }}>What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading B2B SaaS companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) =>
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-[var(--primary)] transition-all duration-300">
                <CardContent className="pt-6">
                  <p className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-[var(--primary)]">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: "#ffffff" }}>Ready to Transform Your Marketing?</h2>
          <p className="text-xl mb-10 text-gray-100">
            Let's discuss how Buzzklick can help you achieve your growth goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[var(--primary)] hover:bg-gray-100 font-bold text-lg px-10 py-6 h-auto">

                Schedule a Consultation
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] font-bold text-lg px-10 py-6 h-auto">

                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}