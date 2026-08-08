import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MagicCard } from "@/components/ui/magic-card"

export interface TestimonialAuthor {
  name: string
  role: string      // e.g. "Sharma Clinic, Lucknow"
  initials: string  // e.g. "AS"
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  className?: string
}

export function TestimonialCard({ author, text, className }: TestimonialCardProps) {
  return (
    <MagicCard
      className={cn(
        "flex flex-col text-start p-6",
        "w-[320px] sm:w-[360px] shrink-0 select-none",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-11 w-11 border border-hairline">
          <AvatarFallback className="bg-hairline-soft text-ink font-semibold">
            {author.initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold leading-none text-ink">
            {author.name}
          </h3>
          <p className="text-xs text-mute mt-1">{author.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-body leading-relaxed">{text}</p>
    </MagicCard>
  )
}
