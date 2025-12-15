import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger } from
"@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/buzzklick_logo.png"
              alt="Buzzklick"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority />

          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-semibold">
                  About Buzzklick
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about-us"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                          <div className="text-sm font-semibold leading-none">About Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our mission and values
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/how-we-work"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                          <div className="text-sm font-semibold leading-none">How We Work</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our proven methodology
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/careers"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                          <div className="text-sm font-semibold leading-none">Careers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Join our growing team
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/guest-writing"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                          <div className="text-sm font-semibold leading-none">Guest Writing</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Contribute to our blog
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-semibold">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/blog"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                          <div className="text-sm font-semibold leading-none">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Industry insights and tips
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/newsletter"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                          <div className="text-sm font-semibold leading-none">Industry insights and tips</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Weekly marketing updates
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/case-studies"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                          <div className="text-sm font-semibold leading-none">Case Studies</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Real results from real clients
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/white-papers"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                          <div className="text-sm font-semibold leading-none">White Papers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            In-depth research and guides
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="text-base font-semibold px-4 py-2 hover:text-[var(--primary)]">
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/account">
              <Button variant="outline" className="font-semibold">
                Login
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen &&
      <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-6 space-y-4">
            <div>
              <p className="font-bold text-sm text-gray-500 mb-2">ABOUT BUZZKLICK</p>
              <div className="space-y-2 pl-2">
                <Link href="/about-us" className="block py-2 hover:text-[var(--primary)]">
                  About Us
                </Link>
                <Link href="/how-we-work" className="block py-2 hover:text-[var(--primary)]">
                  How We Work
                </Link>
                <Link href="/careers" className="block py-2 hover:text-[var(--primary)]">
                  Careers
                </Link>
                <Link href="/guest-writing" className="block py-2 hover:text-[var(--primary)]">
                  Guest Writing
                </Link>
              </div>
            </div>

            <div>
              <p className="font-bold text-sm text-gray-500 mb-2">RESOURCES</p>
              <div className="space-y-2 pl-2">
                <Link href="/blog" className="block py-2 hover:text-[var(--primary)]">
                  Blog
                </Link>
                <Link href="/newsletter" className="block py-2 hover:text-[var(--primary)]">
                  Newsletter
                </Link>
                <Link href="/case-studies" className="block py-2 hover:text-[var(--primary)]">
                  Case Studies
                </Link>
                <Link href="/white-papers" className="block py-2 hover:text-[var(--primary)]">
                  White Papers
                </Link>
              </div>
            </div>

            <Link href="/contact" className="block py-2 font-semibold hover:text-[var(--primary)]">
              Contact Us
            </Link>

            <div className="pt-4 space-y-3">
              <Link href="/account" className="block">
                <Button variant="outline" className="w-full font-semibold">
                  Login
                </Button>
              </Link>
              <Link href="/contact" className="block">
                <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      }
    </header>);

}