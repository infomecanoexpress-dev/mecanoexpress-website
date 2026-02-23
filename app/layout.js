'use client'

import './globals.css'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
  <link rel="icon" href="https://customer-assets.emergentagent.com/job_search-bar-logo/artifacts/n94m2eds_Untitled-1-03.jpg" />
  <title>Mecano Express | Changement de Pneus à Domicile Montréal</title>
  <meta name="description" content="Service mobile de changement de pneus à domicile à Montréal, Laval, Rive-Nord et Rive-Sud. Pneus hiver, été, équilibrage, rotation. Appelez 514 649-7372"/>
  <meta name="keywords" content="changement pneus domicile Montréal, mécanicien mobile, pneus hiver Montréal, service pneus à domicile, Laval, Rive-Nord, Rive-Sud"/>
</head>
      <body className={`${montserrat.className} bg-black text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border-b border-orange-500/30 shadow-lg shadow-orange-500/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 transform hover:scale-110 transition-transform duration-300">
            <Image 
              src="https://customer-assets.emergentagent.com/job_tire-mobile-mtl/artifacts/8sfn157u_Untitled-1-03-Photoroom.png?v=2" 
              alt="Mecano Logo" 
              width={500} 
              height={150}
              className="h-28 w-auto object-contain drop-shadow-[0_0_35px_rgba(255,107,0,1)] animate-pulse-glow"
              unoptimized
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Accueil</Link>
            <Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Services</Link>
            <Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">À propos</Link>
            <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Contact</Link>
            <a href="tel:5146497372" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 font-semibold">📞 Appeler maintenant</a>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-lg py-2">Accueil</Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-lg py-2">Services</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-lg py-2">À propos</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-lg py-2">Contact</Link>
              <a href="tel:5146497372" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-center text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300">📞 514 649-7372</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image 
              src="https://customer-assets.emergentagent.com/job_tire-mobile-mtl/artifacts/8sfn157u_Untitled-1-03-Photoroom.png?v=2" 
              alt="Mecano Logo" 
              width={300} 
              height={90}
              className="h-20 w-auto object-contain mb-4 drop-shadow-[0_0_30px_rgba(255,107,0,1)] animate-pulse-glow"
              unoptimized
            />
            <p className="text-gray-400 text-sm">Service mobile de changement de pneus à domicile</p>
          </div>
          
          <div>
            <h3 className="text-orange-500 font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-orange-500 font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 <a href="tel:5146497372" className="hover:text-orange-500 transition-colors">514 649-7372</a></li>
              <li>✉️ <a href="mailto:info.mecanoexpress@gmail.com" className="hover:text-orange-500 transition-colors">info.mecanoexpress@gmail.com</a></li>
              <li>📍 Montréal, Laval, Rive-Nord/Sud</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-orange-500 font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61588603790373" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors transform hover:scale-110 duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/mecanoexpress_" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors transform hover:scale-110 duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@mecanoexpress_" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors transform hover:scale-110 duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Mecano Express. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
