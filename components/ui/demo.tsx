import { TextScramble } from "@/components/ui/text-scramble";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-20 bg-canvas px-6 text-ink">
      <div className="text-center space-y-3">
        <p className="text-[10px] uppercase tracking-[0.4em] text-mute font-mono">Hover to decode</p>
      </div>

      <div className="flex flex-col items-center gap-12">
        <TextScramble text="SEVIORA" />
      </div>

      <p className="text-xs text-mute font-mono tracking-wide">[ kinetic typography ]</p>
    </main>
  )
}
