'use client'

import './globals.css'
import { Sora, Azeret_Mono } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { CloseIcon, MailIcon, MenuIcon, PhoneIcon, PinIcon } from './icons'

// Sora pour le texte, Azeret Mono pour les données (téléphone, dates, tailles de pneus).
const sora = Sora({ subsets: ['latin'], display: 'swap', variable: '--font-sora' })
const azeret = Azeret_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-azeret' })

const LIENS = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${sora.variable} ${azeret.variable}`}>
<head>
    <meta name="google-site-verification" content="p2qNahnWtSfK0JUKCPZZxDaujsAY8W9-CK9UjUEHpdI" />
    <link rel="icon" href="https://customer-assets.emergentagent.com/job_search-bar-logo/artifacts/n94m2eds_Untitled-1-03.jpg" />
    <title>Mecano Express | Changement de Pneus à Domicile Montréal</title>
    <meta name="description" content="Service mobile de changement de pneus à domicile à Montréal, Laval, Rive-Nord et Rive-Sud. Pneus hiver, été, équilibrage, rotation. Appelez 514 649-7372" />
    <meta name="keywords" content="changement pneus domicile Montréal, mécanicien mobile, pneus hiver Montréal, service pneus à domicile, Laval, Rive-Nord, Rive-Sud" />
    <meta property="og:image" content="https://customer-assets.emergentagent.com/job_poke-branding-lab/artifacts/cbh692os_a1023b23-462a-462f-8eac-223f27f34b94.png" />
    <meta property="og:title" content="Mecano Express | Changement de Pneus à Domicile Montréal" />
    <meta property="og:description" content="Service mobile de changement de pneus à domicile à Montréal, Laval, Rive-Nord et Rive-Sud. Appelez 514 649-7372" />
</head>
      <body className="font-sans bg-graphite-900 text-encre pb-[calc(4.25rem+env(safe-area-inset-bottom))] md:pb-0">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BarreAppel />
      </body>
    </html>
  )
}

// Logo d’origine (orange et noir) sur une plaque claire : le noir reste lisible sur le graphite.
function LogoPlaque({ sizes, priority = false }) {
  return (
    <span className="logo-plaque">
      <Image src="/logo-mecanoexpress-original.png" alt="MecanoExpress" width={720} height={181} sizes={sizes} priority={priority} />
    </span>
  )
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const boutonMenu = useRef(null)

  // Le menu se ferme en changeant de page, et avec Échap (le focus revient au bouton).
  useEffect(() => setIsMenuOpen(false), [pathname])
  useEffect(() => {
    if (!isMenuOpen) return
    const surTouche = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        boutonMenu.current?.focus()
      }
    }
    document.addEventListener('keydown', surTouche)
    return () => document.removeEventListener('keydown', surTouche)
  }, [isMenuOpen])

  return (
    <nav className="sticky top-0 z-50 border-b border-ligne bg-graphite-950 shadow-[inset_0_2px_0_#e0641c]">
      <div className="container mx-auto px-4 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" aria-label="MecanoExpress, accueil" className="flex items-center">
            <LogoPlaque sizes="(min-width: 768px) 190px, 170px" priority />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {LIENS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? 'page' : undefined}
                className={`text-[0.9375rem] font-medium transition-colors duration-150 hover:text-encre ${pathname === l.href ? 'text-encre underline decoration-accent decoration-1 underline-offset-[10px]' : 'text-encre-2'}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primaire btn-petit btn-vif">Prendre RDV maintenant</Link>
          </div>

          <button
            ref={boutonMenu}
            type="button"
            className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center text-encre"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {isMenuOpen && (
          <div id="menu-mobile" className="menu-deroule md:hidden mt-2.5 border-t border-ligne pb-4">
            <div className="flex flex-col">
              {LIENS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={pathname === l.href ? 'page' : undefined}
                  className={`border-b border-ligne py-3.5 text-lg ${pathname === l.href ? 'text-encre' : 'text-encre-2'}`}
                >
                  {l.label}
                </Link>
              ))}
              <a href="tel:5146497372" className="btn btn-primaire btn-vif mt-4">
                <PhoneIcon />
                <span className="chiffres">514 649-7372</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Téléphone : appeler ou prendre RDV, toujours à portée de pouce. Sur l'accueil,
// elle attend que les boutons du premier écran soient passés : une seule action
// lumineuse à la fois.
function BarreAppel() {
  const pathname = usePathname()
  const [cachee, setCachee] = useState(false)
  useEffect(() => {
    const cible = document.querySelector('[data-cta-premier-ecran]')
    if (!cible || !('IntersectionObserver' in window)) {
      setCachee(false)
      return
    }
    const obs = new IntersectionObserver(([e]) => setCachee(e.isIntersecting), { threshold: 0 })
    obs.observe(cible)
    return () => obs.disconnect()
  }, [pathname])

  return (
    <div
      data-barre-appel
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ligne bg-graphite-950/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] transition-[transform,visibility] duration-200 ease-out motion-reduce:transition-none md:hidden ${cachee ? 'invisible translate-y-full' : 'visible translate-y-0'}`}
    >
      <div className="grid grid-cols-[auto_1fr] gap-2">
        <a href="tel:5146497372" className="btn btn-contour btn-vif btn-barre">
          <PhoneIcon />
          Appeler
        </a>
        <Link href="/contact#demande" className="btn btn-primaire btn-vif btn-barre">Prendre RDV</Link>
      </div>
    </div>
  )
}

function Footer() {
  // Année calculée dans le navigateur : la page est générée au build.
  const [annee, setAnnee] = useState(2026)
  useEffect(() => setAnnee(new Date().getFullYear()), [])

  return (
    <footer className="border-t border-ligne bg-graphite-950">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <LogoPlaque sizes="190px" />
            <p className="mt-4 text-sm text-encre-3">Service mobile de changement de pneus à domicile</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-encre">Navigation</h3>
            <ul className="space-y-2.5">
              {LIENS.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-encre-3 transition-colors hover:text-encre">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-encre">Contact</h3>
            <ul className="space-y-3 text-encre-3">
              <li className="flex items-center gap-2.5"><PhoneIcon className="h-4 w-4 flex-none text-encre-2" /><a href="tel:5146497372" className="chiffres transition-colors hover:text-encre">514 649-7372</a></li>
              <li className="flex items-center gap-2.5"><MailIcon className="h-4 w-4 flex-none text-encre-2" /><a href="mailto:info.mecanoexpress@gmail.com" className="transition-colors hover:text-encre">info.mecanoexpress<wbr />@gmail.com</a></li>
              <li className="flex items-center gap-2.5"><PinIcon className="h-4 w-4 flex-none text-encre-2" />Montréal, Laval, Rive-Nord/Sud</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-encre">Suivez-nous</h3>
            <div className="flex gap-2">
              <a href="https://www.facebook.com/profile.php?id=61588603790373" target="_blank" rel="noopener noreferrer" aria-label="Facebook de MecanoExpress" className="flex h-11 w-11 items-center justify-center rounded-precis border border-ligne text-encre-2 transition-colors hover:border-accent hover:text-encre">
              <svg className="h-5 w-5" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/mecanoexpress_" target="_blank" rel="noopener noreferrer" aria-label="Instagram de MecanoExpress" className="flex h-11 w-11 items-center justify-center rounded-precis border border-ligne text-encre-2 transition-colors hover:border-accent hover:text-encre">
              <svg className="h-5 w-5" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@mecanoexpress_" target="_blank" rel="noopener noreferrer" aria-label="TikTok de MecanoExpress" className="flex h-11 w-11 items-center justify-center rounded-precis border border-ligne text-encre-2 transition-colors hover:border-accent hover:text-encre">
              <svg className="h-5 w-5" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-ligne pt-6 text-sm text-encre-3">
          <p>© {annee} Mecano Express. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
