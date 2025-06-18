"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Users, Coffee } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full Stack Expertise",
    description: "Proficient in MERN stack, Next.js, and modern web technologies",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Clear communication and collaborative approach to every project",
  },
  {
    icon: Coffee,
    title: "Always Learning",
    description: "Staying updated with the latest technologies and best practices",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Full Stack Developer </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with over 2 years of experience building modern web applications.
                I specialize in the MERN stack, Next.js, and have extensive knowledge in software development best
                practices.
              </p>
              <p>
                Currently available for freelance projects, I love working with clients to bring their ideas to life. My
                expertise spans across frontend development with React and Next.js, backend development with Node.js and
                Express, and database management with MongoDB, PostgreSQL, and MSSQL.
              </p>
              <p>
                I'm passionate about solving real-world problems through clean, efficient code and always stay updated
                with the latest technologies and industry trends. Whether you need a simple landing page or a complex
                full-stack application, I'm here to help.
              </p>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Currently Available For:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Freelance Projects</Badge>
                <Badge variant="secondary">Full Stack Development</Badge>
                <Badge variant="secondary">MERN Stack Apps</Badge>
                <Badge variant="secondary">Next.js Projects</Badge>
                <Badge variant="secondary">API Development</Badge>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <highlight.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{highlight.title}</h4>
                        <p className="text-muted-foreground text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
