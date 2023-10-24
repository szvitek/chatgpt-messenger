'use client'
import type { Session } from 'next-auth'
import { SessionProvider as Provider } from 'next-auth/react'
import type { ReactNode } from 'react'

type SessionProviderProps = {
  children: ReactNode;
  session: Session | null
}

function SessionProvider({ children, session }: SessionProviderProps) {
  return (
    <Provider session={session}>
      {children}
    </Provider>
  )
}

export default SessionProvider