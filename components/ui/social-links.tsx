import { cn } from "@/lib/utils"

interface Social {
  name: string
  image: string
  url?: string
  color?: string
}

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  socials: Social[]
}

export function SocialLinks({ socials, className, ...props }: SocialLinksProps) {
  return (
    <div
      className={cn("flex items-center gap-6 sm:gap-8", className)}
      {...props}
    >
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-500 cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={social.image}
            alt={social.name}
            width={32}
            height={32}
            className="w-7 h-7 sm:w-8 sm:h-8"
            loading="eager"
          />
        </a>
      ))}
    </div>
  )
}
