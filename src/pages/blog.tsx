import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Search, Calendar, User, ArrowRight, TrendingUp, FileText, Target } from "lucide-react";

export default function BlogPage() {
  const categories = ["All", "SEO", "Content Marketing", "Social Media", "Lead Generation", "GTM Strategy", "Branding"];
  
  const featuredPost = {
    title: "The Complete Guide to B2B SaaS Marketing in 2025",
    excerpt: "Everything you need to know about building a successful B2B SaaS marketing strategy that drives sustainable growth.",
    author: "Sarah Chen",
    date: "December 10, 2025",
    category: "GTM Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    readTime: "12 min read"
  };

  const posts = [
    {
      title: "10 Proven Lead Generation Tactics for B2B SaaS",
      excerpt: "Discover the strategies top SaaS companies use to generate qualified leads consistently.",
      author: "Michael Rodriguez",
      date: "December 8, 2025",
      category: "Lead Generation",
      readTime: "8 min read"
    },
    {
      title: "SEO Strategy Guide for SaaS Startups",
      excerpt: "A comprehensive framework for building organic traffic from day one.",
      author: "Emily Thompson",
      date: "December 5, 2025",
      category: "SEO",
      readTime: "10 min read"
    },
    {
      title: "Content Marketing That Actually Converts",
      excerpt: "How to create content that drives real business results, not just traffic.",
      author: "David Kim",
      date: "December 3, 2025",
      category: "Content Marketing",
      readTime: "7 min read"
    },
    {
      title: "Building a Powerful Brand in B2B SaaS",
      excerpt: "Why brand matters more than ever in crowded markets and how to build one.",
      author: "Jessica Martinez",
      date: "November 30, 2025",
      category: "Branding",
      readTime: "9 min read"
    },
    {
      title: "Social Media Strategy for B2B Companies",
      excerpt: "Stop wasting time on social media. Focus on platforms and tactics that work for B2B.",
      author: "Alex Johnson",
      date: "November 28, 2025",
      category: "Social Media",
      readTime: "6 min read"
    },
    {
      title: "Measuring Marketing ROI: A Complete Framework",
      excerpt: "Track what matters and prove the value of your marketing investments.",
      author: "Sarah Chen",
      date: "November 25, 2025",
      category: "GTM Strategy",
      readTime: "11 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Buzzklick Blog</h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-8">
              Insights, strategies, and tactics for B2B SaaS marketing success
            </p>
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-12 h-14 text-lg bg-white text-black"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-[var(--primary)] hover:bg-[var(--primary-hover)]" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-black mb-8">Featured Article</h2>
            <Card className="overflow-hidden border-2 hover:border-[var(--primary)] transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gray-200">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full font-semibold">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-semibold">{featuredPost.author}</p>
                        <p className="text-xs text-gray-500">{featuredPost.date}</p>
                      </div>
                    </div>
                    <Button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)]">
                      Read Article <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-black mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="border-2 hover:border-[var(--primary)] transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl mb-3 hover:text-[var(--primary)] transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <span className="text-gray-400">•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-2">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Never Miss an Update</h2>
          <p className="text-xl mb-10 text-gray-300">
            Get the latest B2B marketing insights delivered to your inbox weekly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 bg-white text-black"
            />
            <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] h-12 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}