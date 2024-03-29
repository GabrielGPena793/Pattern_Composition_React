import { ReactNode } from "react";

interface NotificationActions {
  children: ReactNode
}

export function NotificationActions({ children }: NotificationActions) {
  return (
    <div className="flex gap-2 self-center" >
      { children }
    </div>
  )
}