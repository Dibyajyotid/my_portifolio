import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50 py-12 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <Link href="#home" className="text-xl font-bold tracking-tight">
              Portfolio
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Creating beautiful digital experiences</p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/Dibyajyotid"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            {/* <Link
              href="#"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link> */}
            <Link
              href="www.linkedin.com/in/dibyajyoti-das-2332a5260"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:dibyajyotid358@gmail.com"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Dibyajyoti Das. All rights reserved. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
