"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Menu, X, Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import ProjectModal from "@/components/project-modal"
import ContactForm from "@/components/contact-form"
import TimelineItem from "@/components/timeline-item"
import CertificationCard from "@/components/certification-card"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { BackgroundLines } from "@/components/ui/background-lines"


export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true })
  }, [])

  const toggleMenu = () => setIsMenuOpen((s) => !s)

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false)
    }
  }, [])

  const openProjectModal = (project) => setSelectedProject(project)
  const closeProjectModal = () => setSelectedProject(null)

  const educationTimeline = [
    {
      year: "2018 - 2022",
      title: "Master of IT Engineering",
      institution: "Pooyesh Institute of Higher Educations",
      description:
        "Specialized in E-Commerce with a focus on software systems, data security, and intelligent technologies.",
    },
    {
      year: "2018 - 2021",
      title: "Bachelor of Software Engineering",
      institution: "Pooyesh Institute of Higher Educations",
      description:
        "Studied core principles of software design, algorithms, and backend development.",
    },
  ]

  const workTimeline = [
    {
      year: "2024 - Present",
      title: "Software Engineer",
      institution: "InovativAI",
      description:
        "Designed scalable databases, built RESTful APIs, integrated Stripe payments, and developed admin dashboards using Laravel and Filament. Contributed to SEO optimization and server configuration on Ubuntu. Also collaborated on frontend tasks using Next.js for business-facing components.",
    },
    {
      year: "2020 - 2024",
      title: "Software Engineer",
      institution: "Agape",
      description:
        "Designed and implemented scalable databases, APIs (internal/external), real-time reporting, and multi-IPG payment services using Laravel, MySQL, MongoDB, RabbitMQ, and Ubuntu. Collaborated with partners like Digikala and Divar.",
    },
    {
      year: "2018 - 2020",
      title: "PHP Developer",
      institution: "Fanavari Saipa Ertebat (FASA)",
      description:
        "Developed enterprise dashboards, HR services, and integrations with Saipa Group systems (CRM, Emdaad Khodro, Saipa Yadak) using Laravel, PostgreSQL, Docker, and Ubuntu servers.",
    },
  ]

  const certifications = [
    {
      title: "Design Patterns",
      issuer: "University of Alberta",
      date: "2023",
      image: "/alberta.png",
    },
    {
      title: "Object-Oriented Design",
      issuer: "University of Alberta",
      date: "2023",
      image: "/alberta.png",
    },
    {
      title: "Advanced MySQL Topics",
      issuer: "Meta",
      date: "2023",
      image: "/meta.png",
    },
    {
      title: "Database Structures and Management with MySQL",
      issuer: "Meta",
      date: "2023",
      image: "/meta.png",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "IFE AI Assistant",
      description: "A full-featured online store with cart, checkout, and payment integration.",
      image: "Nexora Logo.svg?height=300&width=400",
      tags: ["Python", "Django", "Stripe", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "A comprehensive e-commerce solution built with Next.js and MongoDB. Features include product catalog, user authentication, shopping cart, secure checkout with Stripe, order management, and admin dashboard.",
      challenges:
        "Implementing a seamless checkout experience while ensuring security and performance optimization for large product catalogs.",
      solutions:
        "Utilized server-side rendering for improved SEO, implemented efficient data fetching patterns, and created a robust state management system.",
    },
    {
      id: 2,
      title: "RS Spaces",
      description: "A full-featured online store with cart, checkout, and payment integration.",
      image: "/projects/rsspaces.png?height=300&width=400",
      tags: ["PHP 8", "Laravel 11", "Stripe", "Mysql", "Fedex", "Filament"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "A comprehensive e-commerce solution built with Next.js and MongoDB. Features include product catalog, user authentication, shopping cart, secure checkout with Stripe, order management, and admin dashboard.",
      challenges:
        "Implementing a seamless checkout experience while ensuring security and performance optimization for large product catalogs.",
      solutions:
        "Utilized server-side rendering for improved SEO, implemented efficient data fetching patterns, and created a robust state management system.",
    },
    {
      id: 3,
      title: "InovativAI",
      description: "A collaborative task management tool with real-time updates.",
      image: "/projects/inovativai.png?height=300&width=400",
      tags: ["React", "Next.js", "Tailwind CSS", "Vercel AI"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "A real-time task management application that allows teams to collaborate efficiently. Features include task creation, assignment, status tracking, due dates, comments, and notifications.",
      challenges:
        "Ensuring real-time synchronization across multiple users and devices while maintaining a responsive interface.",
      solutions:
        "Implemented Firebase Realtime Database for instant data synchronization and optimized React rendering with memoization techniques.",
    },
    {
      id: 4,
      title: "Quantum",
      description: "An AI-powered tool that generates marketing content based on prompts.",
      image: "/projects/quantum.png?height=300&width=400",
      tags: ["React", "Next.js", "Tailwind CSS", "Vercel AI"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "An innovative content generation tool powered by OpenAI's GPT models. Users can generate blog posts, social media content, and marketing copy by providing simple prompts and parameters.",
      challenges:
        "Optimizing API usage to balance cost and performance while ensuring high-quality content generation.",
      solutions:
        "Implemented streaming responses, efficient prompt engineering, and caching strategies to reduce API calls.",
    },
    {
      id: 5,
      title: "Agape",
      description: "A comprehensive dashboard for tracking fitness goals and progress.",
      image: "/projects/agape.png?height=300&width=400",
      tags: ["PHP 7.2", "Laravel 8", "Mysql", "OpenAI API", "Peyment Services", "Metabase"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "A fitness tracking application that helps users monitor their workout routines, nutrition, and progress. Features include customizable workout plans, progress visualization, goal setting, and achievement badges.",
      challenges:
        "Creating intuitive data visualizations that effectively communicate progress and motivate users.",
      solutions:
        "Designed custom Chart.js components with animations and interactive elements to make data engaging and meaningful.",
    },
    {
      id: 6,
      title: "Saipa Customer Mobile Application",
      description: "A property listing website with advanced search and filtering options.",
      image: "/projects/fasa.png",
      tags: ["Next.js", "PostgreSQL", "Google Maps API", "Prisma"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "A comprehensive real estate platform that connects buyers, sellers, and agents. Features include property listings with detailed information, advanced search filters, interactive maps, virtual tours, and contact forms.",
      challenges:
        "Implementing efficient search functionality across multiple parameters while maintaining performance.",
      solutions:
        "Utilized database indexing, server-side filtering, and dynamic query building to create a responsive search experience.",
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100">
      {/* Header/Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight"
              aria-label="Portfolio Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 280 80"
                className="h-8 w-auto block"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-hidden="true"
              >
                <text
                  x="12"
                  y="50%"
                  dominantBaseline="middle"
                  fontFamily="JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
                  fontSize="42"
                  fill="#38bdf8"
                >
                  &lt;
                </text>

                <text
                  x="58"
                  y="50%"
                  dominantBaseline="middle"
                  fontFamily="Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
                  fontSize="42"
                  fill="#ffffff"
                >
                  Foad.Dev
                </text>
                <text
                  x="248"
                  y="50%"
                  dominantBaseline="middle"
                  fontFamily="JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
                  fontSize="42"
                  fill="#38bdf8"
                >
                  /&gt;
                </text>
              </svg>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { id: "about", label: "About" },
                { id: "certifications", label: "Certifications" },
                { id: "projects", label: "Projects" },
                { id: "resume", label: "Resume" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-sky-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-neutral-900/90 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-2">
              {[
                { id: "about", label: "About" },
                { id: "certifications", label: "Certifications" },
                { id: "projects", label: "Projects" },
                { id: "resume", label: "Resume" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full rounded-lg px-3 py-2 text-left text-white/90 hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative isolate scroll-mt-24 min-h-[calc(100svh-64px)] pt-24 flex items-center">
        {/* Decorative background UNDER content */}
        <BackgroundLines
          className="pointer-events-none absolute inset-0 -z-10 opacity-40
               [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Text first (mobile), left (desktop) */}
            <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4">
                Hi, I'm <span className="text-sky-700">Foad Jalali</span>
              </h1>

              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-4 sm:mb-6">
                Software Engineer
              </h2>

              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-prose mx-auto lg:mx-0 mb-3 sm:mb-4">
                Foad Jalali is a dedicated Software Engineer with strong experience in backend development,
                specializing in PHP and Laravel. He also has hands-on familiarity with Python, and working knowledge
                of React and Next.js, allowing him to contribute effectively to full-stack projects.
              </p>

              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
                He is always eager to take on new challenges to grow technically and professionally. With a collaborative
                mindset and strong communication skills, Foad excels in team settings and consistently contributes to
                shared goals through clean code and a problem-solving approach.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-6 sm:pt-8">
                <Button
                  onClick={() => scrollToSection("about")}
                  className="px-5 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg"
                >
                  About Me
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="px-5 py-3 bg-neutral-950 hover:bg-zinc-700 text-white rounded-lg border border-white/10"
                >
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Avatar second (mobile), right (desktop) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left">
              <div className="relative size-44 sm:size-56 md:size-64 lg:size-80 rounded-full overflow-hidden border-4 border-sky-600/20 shadow-2xl shadow-emerald-900/20">
                <Image
                  src="/avatar.png?height=320&width=320"
                  alt="Profile Photo"
                  fill
                  sizes="(max-width: 1024px) 70vw, 32rem"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="pointer-events-none absolute bottom-[max(16px,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="pointer-events-auto text-white/80 hover:text-emerald-400 transition-colors"
            aria-label="Scroll to about"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </button>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="scroll-mt-24 py-16 sm:py-20 bg-zinc-600/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center" data-aos="fade-up">
            About <span className="text-sky-700">Me</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="mr-3 inline-flex size-8 items-center justify-center rounded-full bg-neutral-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </span>
                Education
              </h3>
              <div className="space-y-8">
                {educationTimeline.map((item, index) => (
                  <TimelineItem key={index} year={item.year} title={item.title} institution={item.institution} description={item.description} />
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="mr-3 inline-flex size-8 items-center justify-center rounded-full bg-neutral-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                Work Experience
              </h3>
              <div className="space-y-8">
                {workTimeline.map((item, index) => (
                  <TimelineItem key={index} year={item.year} title={item.title} institution={item.institution} description={item.description} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center"
            data-aos="fade-up"
          >
            My <span className="text-sky-600">Certifications</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const hasLink = Boolean(cert.url); // اختیاری: اگر لینک داری
              const Wrapper = hasLink ? "a" : "div";
              return (
                <Wrapper
                  key={index}
                  {...(hasLink
                    ? {
                      href: cert.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `Open certificate ${cert.title}`,
                    }
                    : { "aria-label": cert.title })}
                  className={[
                    "group relative block rounded-xl border border-white/10 bg-zinc-900/40 p-4",
                    hasLink
                      ? "hover:bg-zinc-900/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                      : "hover:bg-zinc-900/50",
                  ].join(" ")}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  title={cert.title} // برای نمایش کامل اسم با hover
                >
                  <div className="flex items-center gap-4">
                    {/* لوگو مربع ثابت */}
                    <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-zinc-800 border border-white/10">
                      {/* اگر Next/Image می‌خوای: */}
                      {/* <Image src={cert.image} alt={cert.title} fill className="object-contain p-2" /> */}
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-contain p-2" />
                    </div>

                    {/* متن */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className="text-base sm:text-lg font-semibold leading-snug line-clamp-2 group-hover:text-white"
                      >
                        {cert.title}
                      </h3>

                      {/* سال زیر عنوان */}
                      <p className="text-sm text-white/70 mt-0.5">{cert.date}</p>

                      {/* ناشر خط سوم */}
                      <p className="text-xs text-white/50 mt-0.5 line-clamp-1">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* اگر لینک دارد، آیکون اشاره‌گر ظریف */}
                  {hasLink && (
                    <span className="pointer-events-none absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity text-white/50">
                      ↗
                    </span>
                  )}
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24 py-16 sm:py-20 bg-zinc-600/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center" data-aos="fade-up">
            My <span className="text-sky-600">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <ProjectCard project={project} onClick={() => openProjectModal(project)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      {/* ===== Resume Section (ATS-friendly, 2-column layout) ===== */}
      <section id="resume" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center"
            data-aos="fade-up"
          >
            My <span className="text-sky-600">Resume</span>
          </h2>

          {/* Wrapper */}
          <div
            className="mx-auto max-w-5xl rounded-xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8 shadow-xl shadow-emerald-900/10"
            data-aos="fade-up"
          >
            {/* ===== Section 1: Identity / Contacts ===== */}
            <header className="mb-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="identity">
                  <div className="text-2xl sm:text-3xl font-extrabold leading-tight">
                    Foad Jalali
                  </div>
                  <div className="text-sky-400 mt-1">
                    Software Engineer | Back-End Developer
                  </div>

                  {/* Contacts */}
                  <div
                    className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-white/80"
                    aria-label="Contact details"
                  >
                    <div className="contact">Tehran, Iran</div>
                    <div className="contact">
                      <a href="tel:+989372281262" className="hover:text-white underline-offset-2 hover:underline">
                        +98 937 228 12 62
                      </a>
                    </div>
                    <div className="contact">
                      <a href="mailto:Jalali.foad96@gmail.com" className="hover:text-white underline-offset-2 hover:underline">
                        Jalali.foad96@gmail.com
                      </a>
                    </div>
                    <div className="contact">
                      <a
                        href="https://www.linkedin.com/in/foad-jalali/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white underline-offset-2 hover:underline break-all"
                      >
                        linkedin.com/in/foad-jalali
                      </a>
                    </div>
                  </div>
                </div>

                {/* Optional: Download button */}
                <Button asChild className="inline-flex items-center gap-2 self-start rounded-lg bg-neutral-100 px-4 py-2 text-neutral-900 hover:bg-neutral-200">
                  <a
                    href="foad_resume.pdf"
                    download
                    aria-label="Download CV (PDF)"
                  >
                    <Download size={16} />
                    Download CV
                  </a>
                </Button>

              </div>
            </header>

            {/* ===== Grid: Main column + Sidebar (ATS-friendly) ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* ===== MAIN COLUMN (col-span-2) ===== */}
              <div className="lg:col-span-2">
                {/* Summary */}
                <section id="summary" className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Professional Summary</h3>
                  <p className="text-white/80">
                    Foad Jalali is a skilled Software Engineer specializing in backend development with PHP and Laravel, and has
                    experience with Python, React, and Next.js. Known for a problem-solving mindset and clean code, he thrives
                    in team environments and is eager to take on new technical and professional challenges.
                  </p>
                </section>

                <div className="border-t border-white/10 my-6" />

                {/* Experience */}
                <section id="experience" className="space-y-8">
                  <h3 className="text-xl font-semibold">Experience</h3>

                  {/* InovativAI */}
                  <article className="item">
                    <h4 className="font-semibold text-lg">Software Engineer — InovativAI</h4>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                      <span>Edmonton, AB, Canada</span>
                      <span className="before:content-['•'] before:mx-2">2024 – Present</span>
                      <span className="before:content-['•'] before:mx-2">Full-time</span>
                    </div>
                    <div className="text-sm mt-1">
                      <a
                        href="https://inovativai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-white"
                      >
                        inovativai.com
                      </a>
                    </div>
                    <p className="text-white/80 mt-3">
                      InovativAI is a Canadian company building intelligent, scalable automation solutions and AI infrastructure
                      for the aviation industry. I contributed to initiatives focused on enhancing passenger experiences,
                      enabling connected operations, and unlocking efficiencies for airlines.
                    </p>

                    <h5 className="mt-4 font-semibold">Key Projects</h5>

                    {/* IFE */}
                    <div className="mt-2">
                      <h6 className="font-medium">AI-powered In-Flight Entertainment (IFE) Assistant</h6>
                      <div className="text-sm">
                        <a
                          href="https://ife.inovativai.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-white"
                        >
                          ife.inovativai.com
                        </a>
                      </div>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-white/85">
                        <li>Designed schemas for passenger profiles, <strong className="font-semibold">Stripe</strong> payments, service requests, and in-flight orders.</li>
                        <li>Developed RESTful APIs used by frontend & design teams for in-flight features.</li>
                        <li>Partnered with UI/UX and frontend to ensure smooth integration & usability.</li>
                        <li>Contributed to GitLab CI/CD pipelines for reliable staging/production releases.</li>
                      </ul>
                      <p className="text-white/70 text-sm mt-2">Tech: Django, PostgreSQL, Redis, Docker, GitLab CI, Stripe</p>
                    </div>

                    {/* Corporate site */}
                    <div className="mt-4">
                      <h6 className="font-medium">InovativAI Corporate Website</h6>
                      <div className="text-sm">
                        <a
                          href="https://inovativai.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-white"
                        >
                          inovativai.com
                        </a>
                      </div>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-white/85">
                        <li>Implemented frontend with <strong className="font-semibold">Next.js 15</strong>, bootstrapped with <strong className="font-semibold">v0.dev</strong> and refactored for accessibility.</li>
                        <li>Integrated <strong className="font-semibold">AOS</strong> animations while preserving performance.</li>
                        <li>Translated Figma specs to responsive layouts with consistent branding.</li>
                        <li>Applied on-page SEO and <strong className="font-semibold">SSR</strong>; deployed on Vercel.</li>
                      </ul>
                      <p className="text-white/70 text-sm mt-2">Tech: Next.js 15, React, Tailwind, shadcn/ui, v0.dev, AOS, SEO, Vercel (SSR)</p>
                    </div>

                    {/* Quantum */}
                    <div className="mt-4">
                      <h6 className="font-medium">Quantum Corporate Platform</h6>
                      <div className="text-sm">
                        <a
                          href="https://quantumints.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-white"
                        >
                          quantumints.com
                        </a>
                      </div>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-white/85">
                        <li>Built reusable component library & custom hooks in <strong className="font-semibold">Next.js 15</strong> (prototyped some with v0.dev).</li>
                        <li>Added analytics tagging & schema.org for better insights and SEO.</li>
                        <li>Optimized with <strong className="font-semibold">SSR/ISR on Vercel</strong> to improve Core Web Vitals.</li>
                        <li>Iterated UI states, error boundaries, and responsiveness across breakpoints.</li>
                      </ul>
                      <p className="text-white/70 text-sm mt-2">Tech: Next.js 15, React, Tailwind, shadcn/ui, v0.dev, Analytics, SEO, Vercel (SSR/ISR)</p>
                    </div>

                    {/* RS Spaces */}
                    <div className="mt-4">
                      <h6 className="font-medium">RS Spaces E-commerce Platform</h6>
                      <div className="text-sm">
                        <a
                          href="https://rsspaces.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-white"
                        >
                          rsspaces.com
                        </a>
                      </div>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-white/85">
                        <li>Designed relational schemas & APIs for geodesic dome catalog and custom ordering.</li>
                        <li>Integrated <strong className="font-semibold">Stripe</strong> checkout + <strong className="font-semibold">PostGrid/FedEx</strong> for address validation & shipping.</li>
                        <li>Built admin with <strong className="font-semibold">Filament</strong> for products, orders, reporting.</li>
                        <li>Collaborated on responsive UI & SEO for seamless shopping experience.</li>
                      </ul>
                      <p className="text-white/70 text-sm mt-2">Tech: Laravel, MySQL, Filament, Stripe, PostGrid API, FedEx API</p>
                    </div>
                  </article>

                  <div className="border-t border-white/10 my-6" />

                  {/* Agape */}
                  <article className="item">
                    <h4 className="font-semibold text-lg">Software Engineer — Agape Charity Platform</h4>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                      <span>Tehran, Iran</span>
                      <span className="before:content-['•'] before:mx-2">2020 – 2024</span>
                    </div>
                    <div className="text-sm mt-1">
                      <a
                        href="https://agapengo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-white"
                      >
                        agapengo.com
                      </a>
                    </div>
                    <p className="text-white/80 mt-3">
                      Agape (Mehr Hooshmand) is the first large-scale charity platform in Iran with 11,000+ institutions,
                      enabling transparent donations and improving trust between supporters and organizations.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-white/85">
                      <li>Designed relational schemas & REST APIs for core platform features.</li>
                      <li>Integrated partners (e.g., Digikala, Divar) for seamless data exchange.</li>
                      <li>Implemented multiple IPGs and financial validation for secure transactions.</li>
                      <li>Built async & sync reporting services for real-time insights.</li>
                      <li>Maintained email/SMS notifications to boost engagement.</li>
                    </ul>
                    <p className="text-white/70 text-sm mt-2">Tech: Laravel, MySQL, MongoDB, Redis, Ubuntu</p>
                  </article>

                  <div className="border-t border-white/10 my-6" />

                  {/* FASA */}
                  <article className="item">
                    <h4 className="font-semibold text-lg">PHP Developer — FASA (Saipa Group)</h4>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                      <span>Tehran, Iran</span>
                      <span className="before:content-['•'] before:mx-2">2018 – 2020</span>
                    </div>
                    <div className="text-sm mt-1">
                      <a
                        href="https://fasatech.ir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-white"
                      >
                        fasatech.ir
                      </a>
                    </div>
                    <p className="text-white/80 mt-3">
                      FASA is a technology subsidiary of the Saipa Automotive Group, serving as the software development and
                      hardware services arm of the organization.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-white/85">
                      <li>Designed & implemented schemas and REST APIs for core enterprise modules.</li>
                      <li>Collaborated with frontend & design teams for user-friendly internal systems.</li>
                      <li>Integrated & unified services across multiple business units.</li>
                      <li>Handled deployments & ensured stability and business continuity.</li>
                    </ul>
                    <p className="text-white/70 text-sm mt-2">Tech: Laravel, PostgreSQL, Docker, Ubuntu</p>
                  </article>

                  <div className="border-t border-white/10 my-6" />

                  {/* Education (compact) */}
                  <section id="education">
                    <h3 className="text-xl font-semibold mb-3">Education</h3>
                    <article className="item">
                      <h4 className="font-medium">MSc — IT Engineering</h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                        <span>Pooyesh Institute of Higher Educations</span>
                        <span className="before:content-['•'] before:mx-2">2018 – 2022</span>
                        <span className="before:content-['•'] before:mx-2">Qom, Iran</span>
                      </div>
                    </article>
                    <article className="item mt-3">
                      <h4 className="font-medium">BSc — Software Engineering</h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                        <span>Pooyesh Institute of Higher Educations</span>
                        <span className="before:content-['•'] before:mx-2">2014 – 2022</span>
                        <span className="before:content-['•'] before:mx-2">Qom, Iran</span>
                      </div>
                    </article>
                  </section>
                </section>
              </div>

              {/* ===== SIDEBAR ===== */}
              <aside className="lg:col-span-1">
                {/* Skills */}
                <section id="skills">
                  <h3 className="text-xl font-semibold mb-3">Skills</h3>

                  <div className="item">
                    <h4 className="font-medium">Core</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[
                        "PHP", "Laravel", "Python", "Django", "DRF", "REST APIs",
                        "PostgreSQL", "MySQL", "Docker", "Git", "Ubuntu",
                      ].map((p) => (
                        <span key={p} className="rounded-full bg-zinc-700/40 px-3 py-1 text-sm">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 my-6" />

                  <div className="item">
                    <h4 className="font-medium">Practices & Methods</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[
                        "SOLID", "OOP", "Design Patterns", "Agile / Scrum", "CI/CD", "Unit / API Testing",
                      ].map((p) => (
                        <span key={p} className="rounded-full bg-zinc-700/40 px-3 py-1 text-sm">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>

                <div className="border-t border-white/10 my-6" />

                {/* Strengths */}
                <section id="strengths">
                  <h3 className="text-xl font-semibold mb-3">Strengths</h3>
                  <ul className="list-disc pl-5 space-y-1 text-white/85">
                    <li>Analytical problem solving in distributed systems.</li>
                    <li>Clear communication with product & stakeholders.</li>
                    <li>Mentorship and code review discipline.</li>
                    <li>Adaptability and continuous learning.</li>
                  </ul>
                </section>

                <div className="border-t border-white/10 my-6" />

                {/* Certifications */}
                <section id="certifications">
                  <h3 className="text-xl font-semibold mb-3">Certifications</h3>
                  <ul className="list-disc pl-5 space-y-1 text-white/85">
                    <li>Design Patterns — University of Alberta (2023)</li>
                    <li>Object-Oriented Design — University of Alberta (2023)</li>
                    <li>Advanced MySQL Topics — Meta (2023)</li>
                    <li>Database Structures & Management with MySQL — Meta (2023)</li>
                  </ul>
                </section>

                <div className="border-t border-white/10 my-6" />

                {/* Languages */}
                <section id="languages">
                  <h3 className="text-xl font-semibold mb-3">Languages</h3>
                  <ul className="list-disc pl-5 space-y-1 text-white/85">
                    <li>English — Upper Intermediate (B2)</li>
                    <li>Persian (Farsi) — Native</li>
                  </ul>
                </section>
              </aside>
            </div>

            {/* Keywords line (ATS-safe) */}
            <section aria-label="Keyword line for ATS" className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Keywords</h3>
              <p className="text-sm text-white/60">
                Laravel, PHP, Django, Python, REST, API, PostgreSQL, MySQL, Docker, CI/CD, Redis,
                Microservices, Git, Linux, Agile, Scrum
              </p>
            </section>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 py-16 sm:py-20 bg-zinc-600/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center" data-aos="fade-up">
            Get In <span className="text-sky-600">Touch</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-white/80 mb-8">
                Feel free to reach out to me for collaboration, job opportunities, or just to say hello. I'm always open to discussing new projects and ideas.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-neutral-500/20 text-sky-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Email</p>
                    <p className="text-lg break-all">jalali.foad96@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-neutral-500/20 text-sky-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Location</p>
                    <p className="text-lg">Tehran, IR</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a href="#" className="flex size-12 items-center justify-center rounded-full bg-zinc-600/10 hover:bg-white/10 text-white/80 hover:text-white transition-colors" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="#" className="flex size-12 items-center justify-center rounded-full bg-zinc-600/10 hover:bg-white/10 text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="flex size-12 items-center justify-center rounded-full bg-zinc-600/10 hover:bg-white/10 text-white/80 hover:text-white transition-colors" aria-label="Twitter/X">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80">&copy; {new Date().getFullYear()} Foad Jalali. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Designed and built with Next.js, Tailwind CSS, and AOS</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeProjectModal} />}
    </div>
  )
}
