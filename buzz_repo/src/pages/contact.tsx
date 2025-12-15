import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Let's discuss how Buzzklick can help accelerate your growth
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" style={{ backgroundColor: "#00000000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-2">
                <CardContent className="pt-8">
                  <h2 className="text-3xl font-black mb-8" style={{ color: "#000000" }}>Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">First Name *</label>
                        <Input placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Last Name *</label>
                        <Input placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email Address *</label>
                        <Input type="email" placeholder="john@company.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Phone Number</label>
                        <Input type="tel" placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Company Name *</label>
                      <Input placeholder="Your Company" required />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Company Website</label>
                      <Input placeholder="https://yourcompany.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">What are you interested in? *</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lead-generation">Lead Generation</SelectItem>
                          <SelectItem value="content-marketing">Content Marketing</SelectItem>
                          <SelectItem value="seo">SEO Services</SelectItem>
                          <SelectItem value="social-media">Social Media Marketing</SelectItem>
                          <SelectItem value="brand-management">Brand Management</SelectItem>
                          <SelectItem value="gtm-strategy">Go-to-Market Strategy</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Monthly Marketing Budget</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-plus">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Tell us about your project *</label>
                      <Textarea
                        placeholder="Describe your marketing goals, challenges, and what you're looking to achieve..."
                        rows={6}
                        required />

                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-bold text-lg h-12">Send Message


                    </Button>

                    <p className="text-sm text-gray-500 text-center">Quick Response Time

                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2" style={{ color: "#000000" }}>Send Us a Message</h3>
                      <p className="text-gray-600 text-sm mb-1">General inquiries:</p>
                      <a href="mailto:hello@buzzklick.com" className="text-[var(--primary)] hover:underline">buzzklick2022@gmail.com

                      </a>
                      <p className="text-gray-600 text-sm mt-3 mb-1">New business:</p>
                      <a href="mailto:sales@buzzklick.com" className="text-[var(--primary)] hover:underline">support@buzzklick.com

                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2" style={{ color: "#000000" }}>Contact Us</h3>
                      <p className="text-gray-600 text-sm mb-1">India</p>
                      <a href="tel:+15551234567" className="text-[var(--primary)] hover:underline">8073720740, 9582591123

                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2" style={{ color: "#000000" }}>Call Us</h3>
                      <p className="text-gray-600 text-sm">Monday - Friday</p>
                      <p className="text-gray-700 font-semibold">9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-[var(--primary)]/5">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-4" style={{ color: "#000000" }}>Business Hours</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}