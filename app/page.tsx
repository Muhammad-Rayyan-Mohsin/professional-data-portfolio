import Image from "next/image"
import { ArrowRight, FileText, Download, Send } from "lucide-react"
import { SocialLinks } from "@/components/ui/social-links"
import { TechCarousel } from "@/components/ui/tech-carousel"
import { ClockBadge } from "@/components/ui/clock-badge"
import { NavDock } from "@/components/ui/nav-dock"
import { HorizontalScroll } from "@/components/ui/horizontal-scroll"

const socials = [
  {
    name: "GitHub",
    image: "https://api.iconify.design/simple-icons/github.svg?color=white",
    url: "https://github.com/Muhammad-Rayyan-Mohsin",
    color: "#ffffff"
  },
  {
    name: "LinkedIn",
    image: "https://api.iconify.design/simple-icons/linkedin.svg?color=%230A66C2",
    url: "https://www.linkedin.com/in/rayyan-mohsin-216713331/",
    color: "#0A66C2"
  },
  {
    name: "Email",
    image: "https://api.iconify.design/simple-icons/gmail.svg?color=%23EA4335",
    url: "mailto:mo.rayyan2002@gmail.com",
    color: "#EA4335"
  },
]

const techStack = [
  { name: "Python", icon: "https://api.iconify.design/simple-icons/python.svg?color=%233776AB", color: "#3776AB" },
  { name: "TensorFlow", icon: "https://api.iconify.design/simple-icons/tensorflow.svg?color=%23FF6F00", color: "#FF6F00" },
  { name: "PyTorch", icon: "https://api.iconify.design/simple-icons/pytorch.svg?color=%23EE4C2C", color: "#EE4C2C" },
  { name: "OpenAI", icon: "https://api.iconify.design/simple-icons/openai.svg?color=%23412991", color: "#412991" },
  { name: "React", icon: "https://api.iconify.design/simple-icons/react.svg?color=%2361DAFB", color: "#61DAFB" },
  { name: "Next.js", icon: "https://api.iconify.design/simple-icons/nextdotjs.svg?color=white", color: "#ffffff" },
  { name: "TypeScript", icon: "https://api.iconify.design/simple-icons/typescript.svg?color=%233178C6", color: "#3178C6" },
  { name: "Supabase", icon: "https://api.iconify.design/simple-icons/supabase.svg?color=%233ECF8E", color: "#3ECF8E" },
  { name: "Node.js", icon: "https://api.iconify.design/simple-icons/nodedotjs.svg?color=%23339933", color: "#339933" },
  { name: "Docker", icon: "https://api.iconify.design/simple-icons/docker.svg?color=%232496ED", color: "#2496ED" },
  { name: "PostgreSQL", icon: "https://api.iconify.design/simple-icons/postgresql.svg?color=%234169E1", color: "#4169E1" },
  { name: "Redis", icon: "https://api.iconify.design/simple-icons/redis.svg?color=%23DC382D", color: "#DC382D" },
  { name: "LangChain", icon: "https://api.iconify.design/simple-icons/langchain.svg?color=%231C3C3C", color: "#1C3C3C" },
  { name: "Vercel", icon: "https://api.iconify.design/simple-icons/vercel.svg?color=white", color: "#ffffff" },
]

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-cover opacity-[0.03] invert"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-24 mb-32">

        {/* Header / Hero */}
        <header className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <ClockBadge />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                  Hello, I&apos;m Rayyan.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 font-light">AI Engineer & Researcher</p>
            </div>
            <p className="text-zinc-400 leading-relaxed max-w-lg text-base md:text-lg">
              I build AI-powered products and intelligent automation systems. Currently engineering AI solutions at ClientAcquisition.io,
              serving 2,000+ clients across 13+ industries. Passionate about LLM agents, deep learning, and turning complex problems into elegant solutions.
            </p>

            {/* Social Links Component */}
            <div className="pt-2 flex justify-center md:justify-start">
              <SocialLinks socials={socials} className="justify-start" />
            </div>
          </div>

          <div className="relative w-36 sm:w-44 md:w-56 shrink-0 glitch-wrapper">
            <Image
              src="/IMG_1865.jpeg"
              alt="Profile Photo"
              width={224}
              height={224}
              priority
              className="glitch-img w-full h-auto object-contain"
              style={{
                opacity: 0.85,
                WebkitMaskImage: 'radial-gradient(ellipse at center 40%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.2) 65%, transparent 80%)',
                maskImage: 'radial-gradient(ellipse at center 40%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.2) 65%, transparent 80%)'
              }}
            />
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center 40%, transparent 10%, rgba(5,5,5,0.3) 40%, rgba(5,5,5,0.7) 65%, rgb(5,5,5) 90%)'
              }}
            ></div>
          </div>
        </header>

        {/* Stats Row */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 md:mb-24 py-8 border-y border-zinc-800/50">
          <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
            <div className="text-3xl font-bold text-white tabular-nums tracking-tight">2,000+</div>
            <div className="text-sm text-zinc-500 font-mono">
              Clients Impacted <span className="text-green-500 text-xs ml-1">(& growing)</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-green-500 w-3/4 animate-pulse"></div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
            <div className="text-3xl font-bold text-white tabular-nums tracking-tight">10+</div>
            <div className="text-sm text-zinc-500 font-mono">AI Products Built</div>
            <div className="flex gap-0.5 mt-2 justify-center sm:justify-start">
              {[40, 80, 100, 100, 100].map((opacity, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm`}
                  style={{ backgroundColor: `rgba(34, 197, 94, ${opacity / 100})` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
            <div className="text-3xl font-bold text-white tabular-nums tracking-tight">40+</div>
            <div className="text-sm text-zinc-500 font-mono">LLM Agent Tools</div>
            <div className="mt-2 text-xs text-zinc-600 font-mono">@Muhammad-Rayyan-Mohsin</div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="mb-16 md:mb-24 space-y-8 scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            <a
              href="https://github.com/Muhammad-Rayyan-Mohsin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group"
            >
              View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <HorizontalScroll className="grid grid-flow-col auto-cols-[100%] sm:grid-flow-row sm:grid-cols-2 sm:auto-cols-auto gap-4 md:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 scrollbar-hide">
            {[
              {
                logo: "https://api.iconify.design/simple-icons/meta.svg?color=%231877F2",
                title: "Meta Ads Manager",
                badge: "Active",
                stat: "40+ Tools",
                statLabel: "LLM agent",
                description: "Full-stack Facebook/Instagram ad management system powered by an LLM agent that autonomously creates campaigns, generates creatives, and optimizes performance via Meta Graph API.",
                tags: ["OAuth + Redis", "Real-time Analytics"],
                borderColor: "border-blue-500/20"
              },
              {
                logo: "https://api.iconify.design/simple-icons/maildotru.svg?color=%23FF6C37",
                title: "Cold Email Engine",
                stat: "177 Tests",
                statLabel: "automated",
                description: "Multi-step cold email campaign system with context-aware LLM agent, SMTP/OAuth sending, HMAC-signed tracking, IMAP reply detection with AI sentiment classification, and domain health verification.",
                tags: ["SPF/DKIM/DMARC", "7 Tables"],
                borderColor: "border-pink-500/20"
              },
              {
                logo: "https://api.iconify.design/simple-icons/langchain.svg?color=%231C3C3C",
                title: "CAIO Intelligence",
                stat: "Next.js 16",
                statLabel: "full-stack",
                description: "Full-stack intelligence dashboard with Mastra AI agents, LangChain/LangGraph, and BullMQ pipelines for support ticket analysis, client health assessment, and automated risk reporting.",
                tags: ["Mastra + LangGraph", "Turso DB"],
                borderColor: "border-indigo-500/20"
              },
              {
                logo: "https://api.iconify.design/simple-icons/openai.svg?color=%2310A37F",
                title: "Agent Memory",
                badge: "Live",
                stat: "Live Demo",
                statLabel: "deployed",
                link: "https://client-acquisition-assessment.vercel.app",
                description: "Agentic research platform with autonomous AI agents that scrape Reddit, YouTube, and web sources. Features RAG-powered semantic search with OpenAI vector embeddings across past research.",
                tags: ["GPT-4o-mini + RAG", "Supabase"],
                borderColor: "border-emerald-500/20"
              }
            ].map((project, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden h-full snap-start">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-xl glass-card-icon flex items-center justify-center border ${project.borderColor}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.logo} alt={project.title} width={32} height={32} className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-semibold text-sm hover:text-green-400 transition-colors"
                        >
                          {project.stat}
                        </a>
                      ) : (
                        <span className="text-white font-semibold text-sm">{project.stat}</span>
                      )}
                      <span className="text-xs text-zinc-400">{project.statLabel}</span>
                    </div>
                  </div>
                  <div className="flex-grow mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                      {project.title}
                      {project.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[10px] font-medium border border-green-500/20">
                          {project.badge}
                        </span>
                      )}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono border-t border-zinc-700/50 pt-4">
                    {project.tags.map((tag, j) => (
                      <span key={j}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </section>

        {/* Work Experience */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">Where I&apos;ve Built</h2>
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                {
                  name: "ClientAcquisition.io",
                  role: "AI Engineer",
                  period: "Nov 2025 - Present",
                  url: "https://www.clientacquisition.io",
                  logo: "/6453280f3a337d2e8717dd67_258465176_861794221061942_1837736609236976146_n.webp"
                },
                {
                  name: "Remoto Co.",
                  role: "AI Engineer",
                  period: "Apr - Nov 2025",
                  url: "https://remotoco.ai",
                  logo: "/remoto_co_logo.jpeg"
                },
                {
                  name: "LMKR",
                  role: "AI Intern",
                  period: "Jul - Sep 2024",
                  url: "https://www.lmkr.com",
                  logo: "/cropped-cropped-cropped-LMKR-Logo-1.png.webp"
                },
                {
                  name: "Bytewise",
                  role: "AI Research Fellow",
                  period: "Jun - Jul 2024",
                  url: "https://www.bytewiseltd.com",
                  logo: "/unnamed.jpg"
                }
              ].map((company, i) => (
                <a
                  key={i}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:border-zinc-600 transition-colors"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800/60 flex items-center justify-center border border-zinc-700/50 overflow-hidden shrink-0">
                    <Image src={company.logo} alt={company.name} width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-medium text-xs sm:text-sm truncate">{company.name}</div>
                    <div className="text-[10px] sm:text-xs text-zinc-500 truncate">{company.role} · {company.period}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">Tech Stack & Tools</h2>
          <TechCarousel techs={techStack} />
        </section>

        {/* CTA Section */}
        <section id="contact" className="border-t border-zinc-900 pt-12 pb-8 scroll-mt-24">
          <div className="flex flex-col items-center text-center gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Want to work together?</h2>
              <p className="text-zinc-400">I&apos;m currently building AI products and open to new opportunities.</p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-2.5 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors text-sm font-medium flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> Read CV
              </button>
              <a
                href="/cv.html"
                download="Muhammad_Rayyan_Mohsin_CV.html"
                className="w-full sm:w-auto px-8 py-2.5 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors text-sm font-medium flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
              <a
                href="mailto:mo.rayyan2002@gmail.com"
                className="w-full sm:w-auto px-8 py-2.5 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors text-sm font-medium flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Contact Me
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Navigation Dock */}
      <NavDock />
    </div>
  )
}
