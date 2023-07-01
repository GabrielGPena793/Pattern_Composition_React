import { ReactNode } from "react"

interface NotificationRoot {
  children: ReactNode
}

export function NotificationRoot({ children }: NotificationRoot) {
  return (
    <div className="bg-zinc-200 rounded dark:bg-zinc-800 px-8 py-4 flex items-center gap-6 max-w-2xl">
      { children }
    </div>
  )
}