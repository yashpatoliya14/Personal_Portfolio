"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Yash Patoliya</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer specializing in modern web technologies. Available for freelance projects worldwide.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/yashpatoliya14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yash-patoliya-b810632b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="yashpatoliya14@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#home" className="block text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#skills" className="block text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <div className="text-muted-foreground text-sm space-y-1">
              <p>Built with Next.js 14</p>
              <p>Styled with Tailwind CSS</p>
              <p>Animated with Framer Motion</p>
              <p>Database: MongoDB + Prisma</p>
              <p>Deployed on Vercel</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
