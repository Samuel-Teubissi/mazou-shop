import '@/styles/globals.css'
import '@/styles/index.css'
import { Metadata, Viewport } from 'next'
import { Link } from '@heroui/link'
import clsx from 'clsx'

import { Providers } from './providers'

import { siteConfig } from '@/config/site'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar'
import { Modal } from '@/components/componentModal'
import Image from 'next/image'
import { MazouFooter } from '@/components/MazouFooter'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="fr">
      <head />
      <body
        className={clsx('min-h-screen text-foreground font-sans antialiased')}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar
              className="bg-white/30 backdrop-blur-xl text-brand-primary-400"
              position="static"
            >
              <NavbarBrand>
                <span className="mr-4">LOGO</span>
                <p className="font-bold hidden md:block">Mazou Shop</p>
              </NavbarBrand>
              <NavbarContent justify="end">
                <NavbarItem>
                  <Modal />
                </NavbarItem>
              </NavbarContent>
            </Navbar>
            <main className="lg:mt-16 flex-grow">{children}</main>
            <MazouFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}
