"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Layout, Palette, Server, Smartphone } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks.",
      icon: <Layout className="h-10 w-10 text-primary" />,
      technologies: ["React", "Next.js", "TypeScript", "HTML/CSS"],
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs to power web applications.",
      icon: <Server className="h-10 w-10 text-primary" />,
      technologies: ["Node.js", "Express", "Python", "Java"],
    },
    {
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user experiences that delight users.",
      icon: <Palette className="h-10 w-10 text-primary" />,
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database structures for efficient data storage and retrieval.",
      icon: <Database className="h-10 w-10 text-primary" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications with modern frameworks.",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      title: "DevOps",
      description: "Automating and optimizing the development and deployment process.",
      icon: <Code2 className="h-10 w-10 text-primary" />,
      technologies: ["Docker", "AWS", "CI/CD", "Kubernetes"],
    },
  ]

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Skills</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground">
            Here are some of the technologies and skills I've worked with
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {skill.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{skill.title}</h3>
                  <p className="mb-4 text-muted-foreground">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                        {tech}
                      </span>
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
