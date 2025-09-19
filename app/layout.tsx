import '@/styles/globals.css'
import '@/styles/index.css'
import { Metadata, Viewport } from 'next'
import { Link } from '@heroui/link'
import clsx from 'clsx'

import { Providers } from './providers'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar'
import { Modal } from '@/components/modal'

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
        className={clsx(
          'min-h-screen text-foreground font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar className="bg-white/30 backdrop-blur-xl">
              <NavbarBrand>
                <span className="mr-4">LOGO</span>
                <p className="font-bold text-inherit">Mazou Shop</p>
              </NavbarBrand>
              <NavbarContent justify="end">
                <NavbarItem>
                  <Modal />
                </NavbarItem>
              </NavbarContent>
            </Navbar>
            <main className="mt-16 flex-grow">{children}</main>
            <footer className="w-full flex items-center justify-center py-3 bg-gray-700">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">HeroUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
