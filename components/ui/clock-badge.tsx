"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ClockBadge() {
  const [time, setTime] = useState("")
  const [isNight, setIsNight] = useState(true)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const pktTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      setTime(`${pktTime} PKT`)
      const hour = parseInt(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Karachi",
          hour: "numeric",
          hour12: false,
        })
      )
      setIsNight(hour < 6 || hour >= 18)
    }
    updateTime()
    const interval = setInterval(updateTime, 60_000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-400 mb-2 font-mono">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <span>{time}</span>
      {isNight ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
    </div>
  )
}
