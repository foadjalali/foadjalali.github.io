"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X, GitlabIcon as GitHub, Linkedin, Twitter, Mail, Download } from "lucide-react"
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
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    })
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const educationTimeline = [
    {
      year: "2018 - 2022",
      title: "Master of IT Engineering",
      institution: "Pooyesh Institute of Higher Educations",
      description: "Specialized in E-Commerce with a focus on software systems, data security, and intelligent technologies."
    },
    {
      year: "2018 - 2021",
      title: "Bachelor of Software Engineering",
      institution: "Pooyesh Institute of Higher Educations",
      description: "Studied core principles of software design, algorithms, and backend development."
    },
  ]

  const workTimeline = [
    {
      year: "2024 - Present",
      title: "Software Engineer",
      institution: "InovativAI",
      description: "Designed scalable databases, built RESTful APIs, integrated Stripe payments, and developed admin dashboards using Laravel and Filament. Contributed to SEO optimization and server configuration on Ubuntu. Also collaborated on frontend tasks using Next.js for business-facing components.",
    },
    {
      year: "2020 - 2024",
      title: "Software Engineer",
      institution: "Agape",
      description: "Designed and implemented scalable databases, APIs (internal/external), real-time reporting, and multi-IPG payment services using Laravel, MySQL, MongoDB, RabbitMQ, and Ubuntu. Collaborated with partners like Digikala and Divar.",
    },
    {
      year: "2018 - 2020",
      title: "PHP Developer",
      institution: "Fanavari Saipa Ertebat (FASA)",
      description: "Developed enterprise dashboards, HR services, and integrations with Saipa Group systems (CRM, Emdaad Khodro, Saipa Yadak) using Laravel, PostgreSQL, Docker, and Ubuntu servers.",
    },
  ]

  const certifications = [
    {
      title: "Design Patterns",
      issuer: "University of Alberta",
      date: "2023",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Object-Oriented Design",
      issuer: "University of Alberta",
      date: "2023",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Advanced MySQL Topics",
      issuer: "Meta",
      date: "2023",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Database Structures and Management with MySQL",
      issuer: "Meta",
      date: "2023",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const projects = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
      title: "Agape",
      description: "A comprehensive dashboard for tracking fitness goals and progress.",
      image: "/projects/agape.png?height=300&width=400",
      tags: ["PHP 7.2", "Laravel 8", "Mysql", "OpenAI API", "Peyment Services", "Metabase"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "A fitness tracking application that helps users monitor their workout routines, nutrition, and progress. Features include customizable workout plans, progress visualization, goal setting, and achievement badges.",
      challenges: "Creating intuitive data visualizations that effectively communicate progress and motivate users.",
      solutions:
        "Designed custom Chart.js components with animations and interactive elements to make data engaging and meaningful.",
    },
    {
      id: 5,
      title: "Saipa Customer Mobile Application",
      description: "A property listing website with advanced search and filtering options.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "PostgreSQL", "Google Maps API", "Prisma"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "A comprehensive real estate platform that connects buyers, sellers, and agents. Features include property listings with detailed information, advanced search filters, interactive maps, virtual tours, and contact forms.",
      challenges:
        "Implementing efficient search functionality across multiple parameters while maintaining performance.",
      solutions:
        "Utilized database indexing, server-side filtering, and dynamic query building to create a responsive search experience.",
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-neutral-950 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tight">
            <span className="text-sky-600">Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-sky-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-white/80 hover:text-sky-600 transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/80 hover:text-sky-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("resume")}
              className="text-white/80 hover:text-sky-600 transition-colors"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-sky-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white/80" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-600/10 border-b border-gray-700">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/80 hover:text-sky-600 transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="text-white/80 hover:text-sky-600 transition-colors py-2"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white/80 hover:text-sky-600 transition-colors py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("resume")}
                className="text-white/80 hover:text-sky-600 transition-colors py-2"
              >
                Resume
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/80 hover:text-sky-600 transition-colors py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">

        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Hi, I'm <span className="text-sky-700">Foad Jalali</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-white/80 mb-6">Software Engineer</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto lg:mx-0 mb-8">
                Foad Jalali is a dedicated Software Engineer with strong experience in backend development, specializing in PHP and Laravel. He also has hands-on familiarity with Python, and working knowledge of React and Next.js, allowing him to contribute effectively to full-stack projects.
              </p>
              <p>
                He is always eager to take on new challenges to grow technically and professionally. With a collaborative mindset and strong communication skills, Foad excels in team settings and consistently contributes to shared goals through clean code and a problem-solving approach.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-8">
                <Button
                  onClick={() => scrollToSection("about")}
                  className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600/10 text-white rounded-lg transition-colors"
                >
                  About Me
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 bg-zinc-950 hover:bg-zinc-600/10 text-white rounded-lg transition-colors border border-gray-700"
                >
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-sky-600/20 shadow-2xl shadow-emerald-900/20">
                <Image
                  src="/avatar.png?height=320&width=320"
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-emerald-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </button>
          </div>
        </BackgroundLines>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-600/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" data-aos="fade-up">
            About <span className="text-sky-700">Me</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 bg-neutral-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </span>
                Education
              </h3>
              <div className="space-y-8">
                {educationTimeline.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    institution={item.institution}
                    description={item.description}
                  />
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 bg-neutral-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                Work Experience
              </h3>
              <div className="space-y-8">
                {workTimeline.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    institution={item.institution}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" data-aos="fade-up">
            My <span className="text-sky-600">Certifications</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <CertificationCard title={cert.title} issuer={cert.issuer} date={cert.date} image={cert.image} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-zinc-600/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" data-aos="fade-up">
            My <span className="text-sky-600">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <ProjectCard project={project} onClick={() => openProjectModal(project)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" data-aos="fade-up">
            My <span className="text-sky-600">Resume</span>
          </h2>

          <div
            className="bg-zinc-600/10 rounded-xl p-8 shadow-xl shadow-emerald-900/10 max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <div className="flex justify-between items-start mb-8 flex-col md:flex-row gap-4">
              <div>
                <h3 className="text-2xl font-bold">Foad Jalali</h3>
                <p className="text-sky-600 mt-2">Software Engineer</p>
              </div>
              <Button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors">
                <Download size={16} />
                Download CV
              </Button>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">Summary</h4>
                <p className="text-white/80">
                  Experienced Frontend Developer with 5+ years of expertise in building responsive web applications
                  using modern JavaScript frameworks. Passionate about creating intuitive user interfaces and optimizing
                  web performance. Strong background in collaborating with cross-functional teams to deliver
                  high-quality products.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">Skills</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">PHP</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">Laravel</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">Restful API</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">Mysql</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">PostgreSql</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">SOLID</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">Design Patterns</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">OOP</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">Jira</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">Agile</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">Scrum</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">Git/GitHub</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">Ubuntu/Linux</div>
                  <div className="bg-zinc-600/10 rounded-lg px-3 py-2">Docker</div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">Work Experience</h4>
                <div className="space-y-6">
                  {workTimeline.map((job, index) => (
                    <div key={index} className="border-l-2 border-emerald-500 pl-4">
                      <h5 className="font-semibold text-lg">{job.title}</h5>
                      <div className="flex justify-between text-sm text-white/80 mb-2">
                        <span>{job.institution}</span>
                        <span>{job.year}</span>
                      </div>
                      <p className="text-white/80">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">Education</h4>
                <div className="space-y-6">
                  {educationTimeline.map((edu, index) => (
                    <div key={index} className="border-l-2 border-emerald-500 pl-4">
                      <h5 className="font-semibold text-lg">{edu.title}</h5>
                      <div className="flex justify-between text-sm text-white/80 mb-2">
                        <span>{edu.institution}</span>
                        <span>{edu.year}</span>
                      </div>
                      <p className="text-white/80">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">Languages</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Persian</span>
                      <span>Native</span>
                    </div>
                    <div className="w-full bg-zinc-600/10 rounded-full h-2">
                      <div className="bg-neutral-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>English</span>
                      <span>Upper-Intermediate</span>
                    </div>
                    <div className="w-full bg-zinc-600/10 rounded-full h-2">
                      <div className="bg-neutral-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-600/10/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" data-aos="fade-up">
            Get In <span className="text-sky-600">Touch</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-white/80 mb-8">
                Feel free to reach out to me for collaboration, job opportunities, or just to say hello. I'm always open
                to discussing new projects and ideas.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-500/20 rounded-full flex items-center justify-center text-sky-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Email</p>
                    <p className="text-lg">jalali.foad96@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-500/20 rounded-full flex items-center justify-center text-sky-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
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
                  <a
                    href="#"
                    className="w-12 h-12 bg-zinc-600/10 hover:bg-gray-600 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  >
                    <GitHub size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-zinc-600/10 hover:bg-gray-600 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-zinc-600/10 hover:bg-gray-600 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  >
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
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Designed and built with Next.js, Tailwind CSS, and AOS</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeProjectModal} />}
    </div>
  )
}
