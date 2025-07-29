"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="relative bg-muted/50 py-24 dark:bg-muted/10 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-square overflow-hidden rounded-2xl"
          >
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Profile"
              width={600}
              height={600}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Passionate Developer & Designer</h3>
            <p className="text-muted-foreground">
              I'm a full-stack & backend developer with a passion for creating beautiful, functional, and user-friendly web
              experiences. I've worked on a variety of projects from
              small business websites to large enterprise applications.
            </p>
            <p className="text-muted-foreground">
              My expertise includes React, Next.js, Node.js, and modern UI frameworks like Tailwind CSS. I'm constantly
              learning and exploring new technologies to stay at the forefront of web development.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <h4 className="text-4xl font-bold text-primary">0</h4>
                  <p className="mt-2 text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <h4 className="text-4xl font-bold text-primary">10+</h4>
                  <p className="mt-2 text-sm text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
