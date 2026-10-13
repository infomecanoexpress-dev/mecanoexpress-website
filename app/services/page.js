'use client'

import Link from 'next/link'
import { ArrowIcon, BalanceIcon, CheckIcon, DropIcon, FreinIcon, GaugeIcon, PhoneIcon, PinIcon, RotateIcon, TireIcon, WrenchIcon } from '../icons'
import { SERVICES as LISTE } from '../services-liste.mjs'

// Pas de photo de banque d'images : seulement de vraies photos de l'entreprise,
// quand il y en aura. En attendant, des fiches à filets et des icônes au trait.
// Les noms et l'ordre viennent de services-liste.mjs (la même liste que le formulaire) ;
// ici, seulement ce qui s'affiche sur cette page.
const DETAILS = {
  pneus: {
    Icone: TireIcon,
    description: 'Pose et permutation de vos pneus d’été et d’hiver. Balancement inclus. On se déplace chez vous à Montréal, Laval et les alentours : pas besoin d’aller au garage !',
    features: [
      'Installation complète des 4 pneus',
      'Serrage au couple recommandé',
      'Vérification de la pression',
      'Inspection visuelle des freins',
      'Service rapide (environ 45 minutes)'
    ],
  },
  equilibrage: {
    Icone: BalanceIcon,
    description: 'Équilibrage professionnel de vos roues pour éliminer les vibrations et prolonger la durée de vie de vos pneus.',
    features: [
      'Équilibrage électronique précis',
      'Correction des déséquilibres',
      'Test de conduite si nécessaire',
      'Ajustement des poids',
      'Garantie satisfaction'
    ],
  },
  rotation: {
    Icone: RotateIcon,
    description: 'Rotation régulière de vos pneus pour assurer une usure uniforme et maximiser leur durée de vie.',
    features: [
      'Rotation selon recommandations du fabricant',
      'Inspection de l\'usure',
      'Vérification de l\'alignement visuel',
      'Ajustement de la pression'
    ],
  },
  crevaison: {
    Icone: PinIcon,
    description: 'Service d\'urgence pour réparation de crevaison sur place. Nous venons à vous rapidement!',
    features: [
      'Intervention rapide',
      'Réparation professionnelle',
      'Installation de la roue de secours si nécessaire',
      'Vérification de tous les pneus',
      '7 jours sur 7 pendant la saison des pneus'
    ],
  },
  huile: {
    Icone: DropIcon,
    description: 'Changement d’huile et de filtre, avec inspection rapide des niveaux et des points d’usure. À domicile ou au travail, sans aller au garage.',
    features: [
      'Auto, pick-up, Sprinter et camion cube',
      'Particuliers et flottes d’entreprise',
      'Sur place, chez vous ou au travail'
    ],
  },
  mecanique: {
    Icone: WrenchIcon,
    description: 'On fait à peu près tout en mécanique, directement chez vous ou au travail. Décrivez votre besoin, on vous dit ce qu’on peut faire sur place.',
    // Textes fournis par MecanoExpress le 2026-10-13 (pneus et huile ont leur propre carte).
    travaux: [
      { Icone: GaugeIcon, titre: 'Diagnostic', description: 'Lecture des codes et diagnostic complet pour trouver la cause d’un voyant allumé ou d’un bruit suspect.' },
      { Icone: FreinIcon, titre: 'Freins', description: 'Inspection, remplacement des plaquettes, des disques et des étriers, et purge du liquide de frein.' },
    ],
    features: [
      'Sur place, chez vous ou au travail',
      'Particuliers et flottes d’entreprise'
    ],
  },
}

const SERVICES = LISTE.map((s) => ({ slug: s.slug, title: s.titre, travaux: [], ...DETAILS[s.slug] }))

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-ligne bg-graphite-950 py-14 md:py-20">
        <div className="grille-fine" aria-hidden="true"></div>
        <div className="container relative mx-auto px-4">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em]">Nos services</h1>
          <p className="mt-5 max-w-[46ch] text-[clamp(1.125rem,1.7vw,1.3125rem)] leading-normal text-encre-2">
            Service mobile de changement de pneus à domicile à Montréal, Laval et les alentours. Service impeccable pour chars de luxe ou réguliers.
          </p>
          <nav aria-label="Aller à un service" className="mt-8 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-precis border border-ligne-forte px-3.5 text-[0.9375rem] text-encre-2 transition-colors hover:border-accent hover:text-encre">
                <s.Icone className="h-4 w-4" />
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {SERVICES.map((service) => (
        <article key={service.slug} id={service.slug} data-service className="section scroll-mt-20 first-of-type:border-t-0">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
              <div>
                <span className="fiche-icone h-12 w-12" aria-hidden="true"><service.Icone /></span>
                <h2 className="mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">{service.title}</h2>
                <p className="mt-4 max-w-[52ch] text-lg leading-normal text-encre-2">{service.description}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href={`/contact?service=${service.slug}#demande`} className="btn btn-contour" aria-label={`Prendre RDV : ${service.title}`}>
                    Prendre RDV
                    <ArrowIcon />
                  </Link>
                  <a href="tel:5146497372" className="inline-flex min-h-[2.75rem] items-center gap-2 px-1 text-encre-2 transition-colors hover:text-encre">
                    <PhoneIcon />
                    <span className="chiffres">514 649-7372</span>
                  </a>
                </div>
              </div>
              <ul className="fiche self-start">
                {service.travaux.map((t) => (
                  <li key={t.titre} data-travail className="fiche-ligne items-start">
                    <span className="fiche-icone" aria-hidden="true"><t.Icone /></span>
                    <span><strong>{t.titre}</strong><span className="fiche-detail">{t.description}</span></span>
                  </li>
                ))}
                {service.features.map((feature) => (
                  <li key={feature} className="fiche-ligne">
                    <span className="fiche-icone" aria-hidden="true"><CheckIcon /></span>
                    <span className="text-encre">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}

      <section className="section bg-graphite-950">
        <div className="container mx-auto flex flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="section-titre">Un besoin pour votre véhicule ?</h2>
            <p className="section-intro">Décrivez-le, un technicien vous recontacte rapidement.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
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
      </section>
    </div>
  )
}
