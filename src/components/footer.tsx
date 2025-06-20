import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">MTAPS</h2>
            <p className="text-gray-400 mt-2">Software Engineer & Cloud Computing Enthusiast</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/mhdthariq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/muhammad-thariq-arya-putra-sembiring"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:mthariqaryaputra1@gmail.com" className="hover:text-emerald-400 transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Muhammad Thariq Arya Putra Sembiring. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-sm text-gray-400 hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
