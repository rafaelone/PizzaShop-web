'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type NavLinkProps = LinkProps & {
  children: ReactNode
}

export function NavLink({ children, ...rest }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      data-current={pathname === rest.href}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...rest}
    >
      {children}
    </Link>
  )
}
