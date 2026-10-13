'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowIcon, CarIcon, DropIcon, ExternalIcon, PhoneIcon, PinIcon, StarIcon, TireIcon, TruckIcon, WrenchIcon } from './icons'
import { saisonPneus } from './saison.mjs'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FlotteSection />
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
            Changement de{'\u00a0'}pneus <em>chez vous</em>, sans{'\u00a0'}effort{'\u00a0'}!
          </h1>
          <p className="hero-sous-titre">
            Service mobile professionnel à Montréal, Laval, <span className="sans-coupure">Rive-Nord</span> et <span className="sans-coupure">Rive-Sud</span>
          </p>
          <div className="hero-actions" data-cta-premier-ecran>
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
    { Icone: TireIcon, titre: 'Pneus hiver et été', detail: 'Changement, équilibrage, rotation' },
    { Icone: PinIcon, titre: 'Réparation de crevaison', detail: 'Sur place, rapidement' },
    { Icone: DropIcon, titre: 'Changement d’huile', detail: 'Auto, pick-up, Sprinter, camion cube' },
    { Icone: WrenchIcon, titre: 'Mécanique générale', detail: 'Particuliers et flottes d’entreprise' },
    { Icone: CarIcon, titre: 'Tous véhicules', detail: 'Voitures de luxe et régulières' },
  ]

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 className="section-titre">Nos services</h2>
            <p className="section-intro">Des services complets de changement de pneus et d’entretien, directement chez vous.</p>
            <div className="mt-8">
              <Link href="/services" className="btn btn-contour">
                Voir tous les services
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="fiche">
            <span className="fiche-repere hg" aria-hidden="true"></span>
            <span className="fiche-repere hd" aria-hidden="true"></span>
            <span className="fiche-repere bg" aria-hidden="true"></span>
            <span className="fiche-repere bd" aria-hidden="true"></span>
            <p className="fiche-entete">On se déplace : chez vous ou au travail</p>
            <ul>
              {services.map(({ Icone, titre, detail }) => (
                <li key={titre} className="fiche-ligne">
                  <span className="fiche-icone" aria-hidden="true"><Icone /></span>
                  <span><strong>{titre}</strong><span className="fiche-detail">{detail}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function FlotteSection() {
  return (
    <section className="section relative overflow-hidden bg-graphite-950">
      <div className="grille-fine" aria-hidden="true"></div>
      <div className="container relative mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <h2 className="section-titre">Entreprises et flottes</h2>
            <p className="section-intro">Plusieurs véhicules à entretenir ? On se déplace à votre entreprise et on s’occupe des véhicules sur place.</p>
            <p className="mt-6 flex items-center gap-3 text-encre-3">
              <TruckIcon className="h-5 w-5 flex-none text-encre-2" />
              <span><span className="text-encre-2">Changement d’huile :</span> auto, pick-up, Sprinter, camion cube</span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#demande" className="btn btn-primaire">
                Prendre RDV
                <ArrowIcon />
              </Link>
              <a href="tel:5146497372" className="btn btn-contour">
                <PhoneIcon />
                <span className="chiffres">514 649-7372</span>
              </a>
            </div>
          </div>
          <figure className="fiche p-6 md:p-8">
            <span className="fiche-repere hg" aria-hidden="true"></span>
            <span className="fiche-repere bd" aria-hidden="true"></span>
            <blockquote className="text-lg leading-relaxed text-encre md:text-xl">
              « Ils ont fait plusieurs véhicules pour les changements de pneus durant la tempête au début de l’hiver. »
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 text-sm text-encre-3">
              <Etoiles />
              <span>Wahib Semlali · avis Google</span>
            </figcaption>
          </figure>
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
    <section className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-titre">Zones couvertes</h2>
        <p className="section-intro">Nous nous déplaçons dans toute la région métropolitaine de Montréal.</p>
        <div className="mt-10 grid grid-cols-1 divide-y divide-ligne border-y border-ligne sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {zones.map((zone) => (
            <div key={zone.name} className="py-6 sm:px-0 lg:px-6 lg:first:pl-0">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <PinIcon className="h-5 w-5 text-accent" />
                {zone.name}
              </h3>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-encre-2 lg:grid-cols-1">
                {zone.cities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="fiche mt-10 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-encre-2">
            <span className="font-semibold text-encre">Zone pas listée ?</span> Contactez-nous ! Nous desservons plusieurs autres secteurs.
          </p>
          <a href="tel:5146497372" className="btn btn-contour flex-none">
            <PhoneIcon />
            <span className="chiffres">514 649-7372</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// Note de 5 sur 5, dessinée (le nom accessible remplace les cinq étoiles).
function Etoiles() {
  return (
    <span role="img" aria-label="5 étoiles sur 5" className="flex gap-0.5 text-accent">
      {[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} />)}
    </span>
  )
}

function TestimonialsSection() {
  const testimonials = [
    { name: 'Wahib Semlali', rating: 5, text: "Service absolument incroyable. Ils ont fait plusieurs véhicules pour les changements de pneus durant la tempête au début de l'hiver. Ils sont même venus à minuit pour terminer le dernier véhicule. Une équipe ultra professionnelle avec des équipements de qualité. Je recommande à 100 % et ils feront définitivement les pneus de nos véhicules pour très longtemps." },
    { name: 'Maryse Bergeron', rating: 5, text: "Service impeccable, aucun problème, rapide et efficace." },
    { name: 'Eric Bélanger', rating: 5, text: "Très bon service, très fiable, très poli." }
  ]

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-titre">Ce que nos clients disent</h2>
        <p className="section-intro">De vrais avis de nos clients sur Google.</p>
        <div className="mt-10 grid grid-cols-1 divide-y divide-ligne border-y border-ligne md:grid-cols-3 md:divide-x md:divide-y-0">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col gap-5 py-8 md:px-8 md:first:pl-0 md:last:pr-0">
              <Etoiles />
              <blockquote className="flex-1 leading-relaxed text-encre-2">« {t.text} »</blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-precis border border-ligne-forte bg-graphite-800 font-semibold text-accent" aria-hidden="true">{t.name.charAt(0)}</span>
                <span className="font-semibold text-encre">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="https://g.page/r/CdvmX_7mbx1qEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-contour"
          >
            Voir tous nos avis sur Google
            <ExternalIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
