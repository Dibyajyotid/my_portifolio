"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-muted/50 py-24 dark:bg-muted/10 md:py-32"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
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
              src="/profile/avatar.png"
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
            <h3 className="text-2xl font-bold">
              Passionate Developer & Designer
            </h3>
            <p className="text-muted-foreground">
              I am a passionate backend developer with a strong foundation in
              building scalable and efficient web applications. I have hands-on
              experience with Node.js, Express, MongoDB, and PostgreSQL, and I
              enjoy creating clean and maintainable code. As a recent graduate,
              I am eager to contribute to projects where I can learn, grow, and
              make a meaningful impact in backend development.
            </p>
            <p className="text-muted-foreground">
              I am a fresher passionate about web development. I have experience
              with React, Next.js, Node.js, and modern UI frameworks like
              Tailwind CSS. I enjoy building clean and functional applications
              and am always eager to learn and explore new technologies to grow
              as a developer.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <h4 className="text-4xl font-bold text-primary">0.5</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Years Experience
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <h4 className="text-4xl font-bold text-primary">4</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Projects Completed
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
