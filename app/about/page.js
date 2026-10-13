'use client'

import Link from 'next/link'
import { ArrowIcon, ClockIcon, GaugeIcon, MailIcon, PhoneIcon, PinIcon, ShieldIcon } from '../icons'

// Pas de photo de banque d'images : une vraie photo de l'entreprise prendra
// place ici quand elle sera fournie. En attendant, la fiche d'identité.
const FICHE = [
  { libelle: 'Activité', valeur: 'Mécanique mobile, chez vous ou au travail' },
  { libelle: 'Service principal', valeur: 'Pneus : changement hiver/été, équilibrage, rotation, crevaison' },
  { libelle: 'Aussi', valeur: 'Changement d’huile, mécanique générale' },
  { libelle: 'Clients', valeur: 'Particuliers et entreprises' },
  { libelle: 'Zone', valeur: 'Montréal, Laval, Rive-Nord, Rive-Sud' },
]

const VALEURS = [
  { Icone: ClockIcon, titre: 'Fiabilité', texte: 'Nous sommes toujours à l’heure et respectons nos engagements.' },
  { Icone: GaugeIcon, titre: 'Rapidité', texte: 'Service express sans compromis sur la qualité.' },
  { Icone: ShieldIcon, titre: 'Qualité', texte: 'Équipement moderne et techniques professionnelles.' },
]

const ZONES = [
  { nom: 'Montréal', detail: 'Tous les arrondissements incluant Westmount, Outremont, Verdun, Rosemont et plus' },
  { nom: 'Laval', detail: 'Toute la ville de Laval et ses secteurs' },
  { nom: 'Rive-Nord', detail: 'Blainville, Terrebonne, Mirabel, Saint-Jérôme et environs' },
  { nom: 'Rive-Sud', detail: 'Brossard, Longueuil, Saint-Hubert, Boucherville et plus' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-ligne bg-graphite-950 py-14 md:py-20">
        <div className="grille-fine" aria-hidden="true"></div>
        <div className="container relative mx-auto px-4">
          <h1 className="max-w-[18ch] text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em]">À propos de Mecano Express</h1>
          <p className="mt-5 max-w-[46ch] text-[clamp(1.125rem,1.7vw,1.3125rem)] leading-normal text-encre-2">
            Votre service mobile de confiance pour le changement de pneus à Montréal
          </p>
        </div>
      </section>

      <section className="section border-t-0">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <h2 className="section-titre">Notre histoire</h2>
              <div className="mt-6 max-w-[62ch] space-y-4 text-lg leading-relaxed text-encre-2">
                <p>
                  <strong className="font-semibold text-encre">Mecano Express</strong> est un service fiable et rapide de mécanique mobile à Montréal.
                </p>
                <p>
                  Nous avons créé Mecano Express avec une vision simple : rendre le changement de pneus aussi facile et pratique que possible. Plus besoin de perdre du temps dans les garages ou de prendre rendez-vous des semaines à l’avance.
                </p>
                <p>
                  Notre service mobile vous permet de faire changer vos pneus directement chez vous, à votre travail, ou n’importe où à Montréal et ses environs.
                </p>
              </div>
            </div>
            <div data-fiche-identite className="fiche self-start">
              <span className="fiche-repere hg" aria-hidden="true"></span>
              <span className="fiche-repere bd" aria-hidden="true"></span>
              <p className="fiche-entete">Fiche d’identité</p>
              <dl>
              {FICHE.map((f) => (
                <div key={f.libelle} className="grid gap-1 border-t border-[#23282e] px-5 py-4 first-of-type:border-t-0 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="font-mono text-[0.8125rem] uppercase tracking-[0.06em] text-encre-3">{f.libelle}</dt>
                  <dd className="text-encre">{f.valeur}</dd>
                </div>
              ))}
              <div className="grid gap-1 border-t border-[#23282e] px-5 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <dt className="font-mono text-[0.8125rem] uppercase tracking-[0.06em] text-encre-3">Téléphone</dt>
                <dd><a href="tel:5146497372" className="chiffres text-encre transition-colors hover:text-accent">514 649-7372</a></dd>
              </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="section-titre">Nos valeurs</h2>
          <div className="mt-10 grid grid-cols-1 divide-y divide-ligne border-y border-ligne md:grid-cols-3 md:divide-x md:divide-y-0">
            {VALEURS.map((v) => (
              <div key={v.titre} className="py-8 md:px-8 md:first:pl-0 md:last:pr-0">
                <span className="fiche-icone h-12 w-12" aria-hidden="true"><v.Icone /></span>
                <h3 className="mt-5 text-xl font-semibold">{v.titre}</h3>
                <p className="mt-2 text-encre-2">{v.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <h2 className="section-titre">Notre zone de service</h2>
              <p className="section-intro">Nous couvrons toute l’île de Montréal, Laval, la Rive-Nord et la Rive-Sud.</p>
            </div>
            <ul className="fiche">
              {ZONES.map((z) => (
                <li key={z.nom} className="fiche-ligne">
                  <span className="fiche-icone" aria-hidden="true"><PinIcon /></span>
                  <div>
                    <h3 className="text-[1.0625rem] font-semibold">{z.nom}</h3>
                    <span className="fiche-detail">{z.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-graphite-950">
        <div className="container mx-auto px-4">
          <h2 className="section-titre">Contactez-nous</h2>
          <div className="mt-10 grid grid-cols-1 divide-y divide-ligne border-y border-ligne md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex gap-4 py-6 md:px-6 md:first:pl-0">
              <span className="fiche-icone flex-none" aria-hidden="true"><PhoneIcon /></span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-encre-3">Téléphone</h3>
                <a href="tel:5146497372" className="chiffres mt-1 inline-block text-xl text-encre transition-colors hover:text-accent">514 649-7372</a>
              </div>
            </div>
            <div className="flex gap-4 py-6 md:px-6">
              <span className="fiche-icone flex-none" aria-hidden="true"><MailIcon /></span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-encre-3">Courriel</h3>
                <a href="mailto:info.mecanoexpress@gmail.com" className="mt-1 inline-block break-all text-lg text-encre transition-colors hover:text-accent">info.mecanoexpress@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-4 py-6 md:px-6">
              <span className="fiche-icone flex-none" aria-hidden="true"><PinIcon /></span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-encre-3">Service</h3>
                <p className="mt-1 text-lg text-encre">Montréal et environs</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/contact#demande" className="btn btn-primaire">
              Prendre rendez-vous
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
