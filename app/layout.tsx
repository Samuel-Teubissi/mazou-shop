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
            <Navbar className="bg-white/30 backdrop-blur-xl" position="static">
              <NavbarBrand>
                <span className="mr-4">LOGO</span>
                <p className="font-bold text-inherit hidden md:block">
                  Mazou Shop
                </p>
              </NavbarBrand>
              <NavbarContent justify="end">
                <NavbarItem>
                  <Modal />
                </NavbarItem>
              </NavbarContent>
            </Navbar>
            <main className="lg:mt-16 flex-grow">{children}</main>
            <footer className="bg-[#111] text-white">
              <div className="max-w-7xl mx-auto w-full flex flex-col justify-center py-3 px-5 lg:px-20 pt-14 pb-28 gap-4">
                <div>
                  <Link
                    // isExternal
                    className="flex items-center gap-1 text-brand-primary-400"
                    href="/"
                    title="Mazou Homepage"
                  >
                    <span className="mr-4">LOGO</span>
                    <p className="font-bold hidden md:block">Mazou Shop</p>
                  </Link>
                  <div>MazouShop - La boutique en un click !</div>
                </div>
                <div className="mz_footer-links grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4">
                  <div className="space-y-1 md:col-span-2 lg:col-auto">
                    <div>Payez facilement avec les services locaux</div>
                    <div>
                      <img
                        src="/images/local_payments.png"
                        alt="Logos paiements locaux"
                      />
                    </div>
                    <Link className="flex items-center gap-1">
                      <img
                        src="/images/whatsapp-icon.svg"
                        alt="Logo Whatsapp"
                      />
                      677 677 054
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-brand-primary-400 mb-1">
                      Liens Utiles
                    </div>
                    <Link>Acceuil</Link>
                    <Link>Mon panier</Link>
                    <Link>Politique de confidentialité</Link>
                    <Link>Politique de remboursement</Link>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-brand-primary-400 mb-1">
                      Catégories
                    </div>
                    <Link>Sport</Link>
                    <Link>Bien-être et santé</Link>
                    <Link>Accessoires</Link>
                    <Link>électonique</Link>
                  </div>
                </div>
              </div>
              <div className="copyright w-full text-center py-3">
                Copyright © 2025
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
