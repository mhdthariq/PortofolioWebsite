import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Muhammad Thariq Arya Putra Sembiring
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Software Engineer & Cloud Computing Enthusiast
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="#contact" className="flex items-center">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-square rounded-full bg-emerald-200/50 flex items-center justify-center overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Muhammad Thariq Arya Putra Sembiring"
                className="rounded-full border-4 border-white shadow-lg"
                width={400}
                height={400}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="font-medium text-emerald-600">
                Full-Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
