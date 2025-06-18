"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    name: "AI Chat Bot",
    description:
    "An intelligent chatbot powered by Gemini API with context awareness, conversation history, and customizable responses.",
    technologies: ["Next JS", "Supabase", "JWT", "Gemini Integration", "Typescript","Tailwind CSS"],
    liveUrl: "https://chat-bot-gemini-r60u.onrender.com/",
    githubUrl: "https://github.com/yashpatoliya14/chat-bot-gemini",
    imageUrl: "https://www.medianama.com/wp-content/uploads/2024/02/Bard_Gemini_Hero.width-1600.format-webp-copy.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "E-Commerce (Adaa-jaipur)",
    description:
      "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order processing.",
    technologies: ["Tailwind CSS", "Framer motion", "Redux", "MongoDB", "Node JS","Express JS","React JS"],
    liveUrl: "https://adaaecommerce-1.onrender.com/",
    githubUrl: "https://github.com/ombhut175/AdaaEcommerce/tree/main",
    imageUrl: "https://ewm.swiss/application/files/8216/1597/9679/E-commerce_web_design_EWM_SA_Digital_Agency_Geneva.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Soulmate hub",
    description:
      "A modern, responsive landing page for a restaurant with online menu, reservation system, and contact information.",
    technologies: ["Flutter", "Firebase", "Firestore", "Fire Auth","Cloudinary"],
    liveUrl: "https://soulmate-hub.netlify.app/",
    githubUrl: "https://github.com/yashpatoliya14/soulmate_hub_flutter_app",
    imageUrl: "https://github.com/yashpatoliya14/soulmate_hub_flutter_app/blob/main/assets/icon/app_icon.png?raw=true",
    featured: false,
  },
  {
    id: 4,
    name: "Blogging Site",
    description:
      "A full-stack blog website built using the MERN stack. Users can create, edit, delete, and view blog posts. The app includes user authentication (register/login), comment functionality, and a responsive UI.",
    technologies: ["Mongo DB", "Node JS", "React JS", "Express JS", "Tailwind CSS",],
    liveUrl: "https://blogging-site-1-78qb.onrender.com",
    githubUrl: "https://github.com/yashpatoliya14/blogging-site?tab=readme-ov-file",
    imageUrl: "https://i0.wp.com/www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg?w=1200&ssl=1",
    featured: false,
  },
  {
    id: 5,
    name: "URL Shortner",
    description:
      "Full Email OTP Verification: Secure sign-up and login process using email verification with OTP. Seamlessly convert long URLs into both Encoded.Track and manage user activity, including URL redirections via short links.",
    technologies: ["Node JS", "Express JS", "Mongo DB", "Java script", "React JS","Node mailer"],
    liveUrl: "https://url-shortner-554w-4xk10y053-yashpatoliyas-projects-03954e53.vercel.app/",
    githubUrl: "https://github.com/yashpatoliya14/url-shortner",
    imageUrl: "https://cms-assets.tutsplus.com/uploads/users/30/posts/108979/preview_image/url_thumb.jpg",
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and project demos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {project.featured && <Badge className="absolute top-4 left-4">Featured</Badge>}
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.name}</span>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <Button size="sm" variant="ghost" asChild>
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="ghost" asChild>
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
