import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GraduationCap, CheckCircle2, Target, Users, TrendingUp } from "lucide-react";

export default function EdTechPage() {
  const services = [
    "Student acquisition campaigns",
    "Educational content marketing",
    "SEO for educational platforms",
    "Social media community building",
    "Brand positioning for ed-tech",
    "Product launch strategies"
  ];

  const challenges = [
    {
      title: "Long Sales Cycles",
      solution: "Nurture campaigns that educate and build trust over time"
    },
    {
      title: "Multiple Stakeholders",
      solution: "Targeted messaging for teachers, administrators, and parents"
    },
    {
      title: "Compliance & Privacy",
      solution: "FERPA and COPPA-compliant marketing strategies"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-12 h-12" />
              <span className="text-xl font-bold">EDTECH MARKETING</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Marketing for Educational Technology</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Drive student acquisition and educator adoption with marketing strategies built for the education sector
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl font-black mb-6">The EdTech Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Marketing educational technology requires understanding complex buyer journeys, regulatory compliance, 
                and the unique needs of schools, teachers, and students.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Success requires specialized knowledge of the education sector and proven strategies that navigate 
                long sales cycles and multiple decision-makers.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">Our EdTech Expertise</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We've helped dozens of ed-tech companies grow from early-stage startups to market leaders. 
                Our team understands the education landscape and what drives adoption.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From K-12 to higher education and corporate training, we create marketing strategies that 
                resonate with educators and drive measurable results.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 text-center">EdTech Marketing Services</h2>
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
            <h2 className="text-4xl font-black mb-12 text-center">How We Solve EdTech Challenges</h2>
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
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Grow Your EdTech Platform?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Let's create a marketing strategy that drives educator adoption and student success
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