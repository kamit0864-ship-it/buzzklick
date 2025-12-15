import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

export default function NewsletterPage() {
  const benefits = [
  "Weekly B2B marketing insights and strategies",
  "Case studies from successful SaaS companies",
  "Exclusive tips not shared on the blog",
  "Early access to new resources and playbooks",
  "Industry trends and analysis",
  "No spam, unsubscribe anytime"];


  const topics = [
  { id: "seo", label: "SEO & Organic Growth" },
  { id: "content", label: "Content Marketing" },
  { id: "social", label: "Social Media Marketing" },
  { id: "leads", label: "Lead Generation" },
  { id: "gtm", label: "Go-To-Market Strategy" },
  { id: "branding", label: "Brand Building" }];


  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6">Buzzklick Newsletter</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Join 10,000+ B2B marketers getting weekly insights on growing their SaaS businesses
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-black mb-6">What You'll Get</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every week, we send curated insights, actionable strategies, and real-world case studies 
                directly to your inbox. No fluff, just practical advice you can implement immediately.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) =>
                <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <Card className="border-2 sticky top-24">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-black mb-6">Subscribe Now</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email Address *</label>
                      <Input type="email" placeholder="you@company.com" required className="h-12" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">First Name *</label>
                      <Input placeholder="John" required className="h-12" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Company (Optional)</label>
                      <Input placeholder="Your Company" className="h-12" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3">Topics You're Interested In:</label>
                      <div className="space-y-3">
                        {topics.map((topic) =>
                        <div key={topic.id} className="flex items-center gap-2">
                            <Checkbox id={topic.id} />
                            <label htmlFor={topic.id} className="text-sm cursor-pointer">
                              {topic.label}
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-bold text-lg h-14">

                      Subscribe to Newsletter
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By subscribing, you agree to receive marketing emails from Buzzklick. 
                      You can unsubscribe at any time.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2">
              <CardContent className="pt-8">
                <TrendingUp className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ color: "#000000" }}>Actionable Insights</h3>
                <p className="text-gray-600">
                  Strategies you can implement immediately to drive growth
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="pt-8">
                <Users className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ color: "#000000" }}>Actionable Insights</h3>
                <p className="text-gray-600">
                  Learn from successful B2B SaaS marketing campaigns
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="pt-8">
                <Zap className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ color: "#000000" }}>Real Case Studies</h3>
                <p className="text-gray-600">
                  Fresh insights every Thursday morning in your inbox
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}