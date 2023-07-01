import { ButtonHTMLAttributes, ElementType } from "react";
import { twMerge } from 'tailwind-merge'

interface NotificationAction extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}


export function NotificationAction({ icon: Icon, ...rest }: NotificationAction) {
  return (
    <button
      className={twMerge("w-8 h-8 flex rounded items-center justify-center transition-colors bg-zinc-500 hover:bg-zinc-400", rest.className)}
    >
      <Icon className="w-3 h-3 text-zinc-50 " />
    </button>
  )
}