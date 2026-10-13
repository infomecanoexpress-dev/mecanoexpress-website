'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowIcon, PhoneIcon } from './icons'
import { saisonPneus } from './saison.mjs'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ZonesSection />
      <TestimonialsSection />
    </div>
  )
}

// Encoches de la bande de roulement : un seul tracé (léger au téléphone).
const ENCOCHES = Array.from({ length: 72 }, (_, i) => {
  const a = (i * 5 * Math.PI) / 180
  const r1 = i % 2 ? 266 : 260
  const p = (r) => `${(300 + r * Math.cos(a)).toFixed(1)} ${(300 + r * Math.sin(a)).toFixed(1)}`
  return `M${p(r1)}L${p(282)}`
}).join('')

const GOUJONS = [0, 72, 144, 216, 288].map((deg) => {
  const a = ((deg - 90) * Math.PI) / 180
  return { cx: (300 + 84 * Math.cos(a)).toFixed(1), cy: (300 + 84 * Math.sin(a)).toFixed(1) }
})

// La roue se dessine une seule fois par chargement de page, pas à chaque
// retour sur l’accueil.
let roueDejaTracee = false

function HeroSection() {
  const [saison, setSaison] = useState(null)
  const [tracer] = useState(() => !roueDejaTracee)
  useEffect(() => {
    setSaison(saisonPneus())
    roueDejaTracee = true
  }, [])

  return (
    <section className="hero">
      <div className="hero-grille" aria-hidden="true"></div>
      <p className="hero-bandeau">
        {/* Avant le calcul dans le navigateur : la règle seule, toujours vraie. */}
        <span className="hero-bandeau-long">
          {saison ? saison.texte : 'Pneus d’hiver obligatoires'}
          {(!saison || saison.dates) && ' · 1 déc. – 15 mars'}
          {saison && <> · <b>{saison.etat}</b></>}
        </span>
        <span className="hero-bandeau-court">
          <span>{saison ? saison.texteCourt : 'Pneus d’hiver obligatoires'}</span>
          <b>{saison ? saison.etatCourt : '1 déc. – 15 mars'}</b>
        </span>
        <span className="hero-zones">Montréal · Laval · Rive-Nord · Rive-Sud</span>
      </p>
      <div className="hero-corps">
        <div className="hero-texte">
          <h1 className="hero-titre">
            Changement de pneus <em>chez vous</em>, sans effort !
          </h1>
          <p className="hero-sous-titre">
            Service mobile professionnel à Montréal, Laval, <span className="sans-coupure">Rive-Nord</span> et <span className="sans-coupure">Rive-Sud</span>
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primaire">
              Prendre RDV
              <ArrowIcon />
            </Link>
            <a href="tel:5146497372" className="btn btn-contour">
              <PhoneIcon />
              <span className="chiffres">514 649-7372</span>
            </a>
          </div>
        </div>
        <div className={`hero-roue${tracer ? ' hero-roue--trace' : ''}`} aria-hidden="true">
          <svg viewBox="0 0 600 600">
            <defs>
              <path id="hero-flanc" d="M 300 300 m -243 0 a 243 243 0 1 1 486 0 a 243 243 0 1 1 -486 0" />
            </defs>
            <circle className="trait trace" pathLength="1" cx="300" cy="300" r="282" />
            <circle className="trait-fin trace t2" pathLength="1" cx="300" cy="300" r="258" />
            <circle className="trait-fin trace t2" pathLength="1" cx="300" cy="300" r="226" />
            <circle className="trait-accent trace t3" pathLength="1" cx="300" cy="300" r="170" />
            <circle className="trait-fin" cx="300" cy="300" r="150" />
            <circle className="trait-fin" cx="300" cy="300" r="46" />
            <circle className="trait-fin" cx="300" cy="300" r="16" />
            {GOUJONS.map((g) => <circle key={g.cx} className="trait-fin" cx={g.cx} cy={g.cy} r="9" />)}
            <path className="trait-fin" d={ENCOCHES} />
            <text className="flanc"><textPath href="#hero-flanc" startOffset="12%">225/65R17</textPath></text>
            <path className="cote" d="M 130 300 H 470" />
            <path className="trait-accent" d="M 130 290 V 310 M 470 290 V 310" />
            <text className="cote-texte" x="192" y="289" textAnchor="middle">17 PO</text>
            <path className="cote" d="M 300 130 V 18" />
            <path className="trait-accent" d="M 290 130 H 310 M 290 18 H 310" />
            <text className="cote-texte" x="316" y="80">FLANC 65 %</text>
          </svg>
        </div>
      </div>
      <div className="hero-legende">
        <p className="hero-legende-titre">Lire la taille sur le flanc · ex. 225/65R17</p>
        <dl>
          <dt>225</dt><dd>Largeur (mm)</dd>
          <dt>65</dt><dd>Flanc (% de la largeur)</dd>
          <dt>R</dt><dd>Radial</dd>
          <dt>17</dt><dd>Jante (po)</dd>
        </dl>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    { icon: '❄️', title: 'Pneus Hiver', description: "Installation complète de pneus d'hiver pour une conduite sécuritaire" },
    { icon: '☀️', title: 'Pneus Été', description: "Changement de pneus d'été pour une performance optimale" },
    { icon: '⚖️', title: 'Équilibrage', description: 'Équilibrage professionnel pour une conduite douce et stable' },
    { icon: '🔄', title: 'Rotation', description: 'Rotation des pneus pour prolonger leur durée de vie' },
    { icon: '🔧', title: 'Réparation Crevaison', description: 'Réparation rapide de crevaison sur place' },
    { icon: '🚗', title: 'Tous Véhicules', description: 'Service pour voitures de luxe et régulières' }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,107,0,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">Nos Services</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Des services complets de changement de pneus et d entretien, directement chez vous</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-700/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-gray-600 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-orange-500/10 text-4xl mb-5 group-hover:bg-orange-500/20 transition-colors duration-300">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-orange-400">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300">Voir tous les services →</Link>
        </div>
      </div>
    </section>
  )
}

function ZonesSection() {
  const zones = [
    { name: 'Montréal', cities: ['Westmount', 'Outremont', 'Verdun', 'Rosemont', 'Villeray', 'Plateau', 'NDG', 'LaSalle'] },
    { name: 'Laval', cities: ['Chomedey', 'Fabreville', 'Vimont', 'Sainte-Rose', 'Pont-Viau', 'Laval-des-Rapides'] },
    { name: 'Rive-Nord', cities: ['Blainville', 'Terrebonne', 'Mirabel', 'Saint-Jérôme', 'Boisbriand', 'Rosemère'] },
    { name: 'Rive-Sud', cities: ['Brossard', 'Longueuil', 'Saint-Hubert', 'Boucherville', 'La Prairie', 'Candiac'] }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">Zones Couvertes</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Nous nous déplaçons dans toute la région métropolitaine de Montréal</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {zones.map((zone, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-700/80 to-gray-800/80 p-6 rounded-2xl border-2 border-gray-600 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10">
              <h3 className="text-2xl font-bold mb-4 text-orange-500 flex items-center">
                <span className="text-3xl mr-2">📍</span> {zone.name}
              </h3>
              <ul className="space-y-2">
                {zone.cities.map((city, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <span className="text-orange-500 mr-2 font-bold">✓</span> {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-2 border-orange-500/50 rounded-2xl p-8 text-center">
          <p className="text-xl text-gray-200">
            <span className="text-orange-500 font-bold">🚗 Zone pas listée?</span> Contactez-nous! Nous desservons plusieurs autres secteurs.
          </p>
          <a href="tel:5146497372" className="inline-block mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300">📞 514 649-7372</a>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    { name: 'Wahib Semlali', rating: 5, text: "Service absolument incroyable. Ils ont fait plusieurs véhicules pour les changements de pneus durant la tempête au début de l'hiver. Ils sont même venus à minuit pour terminer le dernier véhicule. Une équipe ultra professionnelle avec des équipements de qualité. Je recommande à 100 % et ils feront définitivement les pneus de nos véhicules pour très longtemps." },
    { name: 'Maryse Bergeron', rating: 5, text: "Service impeccable, aucun problème, rapide et efficace." },
    { name: 'Eric Bélanger', rating: 5, text: "Très bon service, très fiable, très poli." }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">Ce que nos clients disent</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">De vrais avis de nos clients sur Google</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold mr-4">{testimonial.name.charAt(0)}</div>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (<span key={i} className="text-orange-500 text-lg">★</span>))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://g.page/r/CdvmX_7mbx1qEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/10 border-2 border-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition-all duration-300"
          >
            Voir tous nos avis sur Google →
          </a>
        </div>
      </div>
    </section>
  )
}
