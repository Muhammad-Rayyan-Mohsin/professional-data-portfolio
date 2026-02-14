interface TechItem {
  name: string
  icon: string
  color: string
}

interface TechCarouselProps {
  techs: TechItem[]
}

function TechIcon({ tech }: { tech: TechItem }) {
  return (
    <div className="flex flex-col items-center gap-2 px-4 sm:px-6 md:px-8 shrink-0 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-500 cursor-pointer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tech.icon}
        alt={tech.name}
        width={40}
        height={40}
        className="w-8 h-8 sm:w-10 sm:h-10"
        loading="lazy"
      />
      <span className="text-[10px] sm:text-xs text-zinc-500 font-medium whitespace-nowrap">{tech.name}</span>
    </div>
  )
}

export function TechCarousel({ techs }: TechCarouselProps) {
  return (
    <div className="relative overflow-hidden group">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {/* First set */}
        <div className="flex shrink-0">
          {techs.map((tech, index) => (
            <TechIcon key={index} tech={tech} />
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0">
          {techs.map((tech, index) => (
            <TechIcon key={`dup-${index}`} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}
