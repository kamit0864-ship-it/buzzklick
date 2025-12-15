import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Image
              src="/buzzklick_logo.png"
              alt="Buzzklick"
              width={180}
              height={50}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming B2B SaaS brands into powerful stories with data-driven marketing strategies that drive growth.
            </p>
            <div className="flex gap-4">
              <Link target="_blank" href={`https://www.linkedin.com/company/buzzklick/
`} className="hover:text-[var(--primary-hover)] transition-colors">
                <Linkedin size={24} />
              </Link>
             
              <Link target="_blank" href={`https://www.facebook.com/buzzklickOfficial/`} className="hover:text-[var(--primary-hover)] transition-colors">
                <Facebook size={24} />
              </Link>
              <Link target="_blank" href={`https://www.instagram.com/buzzklick_official/`} className="hover:text-[var(--primary-hover)] transition-colors">
                <Instagram size={24} />
              </Link>
              <Link target="_blank" href={`https://www.youtube.com/@Buzz_Klick_Official
`} className="hover:text-[var(--primary-hover)] transition-colors">
                <Youtube size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="text-gray-400 hover:text-white transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/lead-generation" className="text-gray-400 hover:text-white transition-colors">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services/content-marketing" className="text-gray-400 hover:text-white transition-colors">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/seo-services" className="text-gray-400 hover:text-white transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing" className="text-gray-400 hover:text-white transition-colors">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="/services/brand-management" className="text-gray-400 hover:text-white transition-colors">
                  Brand Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/white-papers" className="text-gray-400 hover:text-white transition-colors">
                  White Papers
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-gray-400 hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 Buzzklick. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}