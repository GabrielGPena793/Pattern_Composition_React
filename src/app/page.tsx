'use client'

import { Notification } from "@/components/Notification";
import { ArrowRight, Check, Rocket, X } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <Notification.Root>
        <Notification.Icon icon={Rocket} />
        <Notification.Content text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid iusto, sit libero illum, dolor saepe commodi aperiam maiores quas pariatur ipsum? Sed quam provident iure, officia adipisci nostrum laborum." />
        <Notification.Actions>
          <Notification.Action icon={X} onClick={() => { console.log("entrou") }} />
          <Notification.Action
            icon={Check}
            className="bg-violet-500 hover:bg-violet-400 dark:bg-violet-500 dark:hover:bg-violet-400"
          />
        </Notification.Actions>
      </Notification.Root>

      <Notification.Root>
        <Notification.Icon icon={Rocket} />
        <Notification.Content text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid iusto, sit libero illum, dolor saepe commodi aperiam maiores quas pariatur ipsum? Sed quam provident iure, officia adipisci nostrum laborum." />
      </Notification.Root>

      <Notification.Root>
        <Notification.Content text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid iusto, sit libero illum, dolor saepe commodi aperiam maiores quas pariatur ipsum? Sed quam provident iure, officia adipisci nostrum laborum." />
        <Notification.Actions>
          <Notification.Action icon={ArrowRight}  className="bg-emerald-500 hover:bg-emerald-400 dark:bg-emerald-500 dark:hover:bg-emerald-400" />
        </Notification.Actions>
      </Notification.Root>

      <Notification.Root>
        <Notification.Content text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid iusto, sit libero illum, dolor saepe commodi aperiam maiores quas pariatur ipsum? Sed quam provident iure, officia adipisci nostrum laborum." />
      </Notification.Root>
    </main>
  )
}
