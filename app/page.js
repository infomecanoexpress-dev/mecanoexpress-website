'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1643700973089-baa86a1ab9ee"
          alt="Professional mechanic service"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/70 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <Image
            src="https://customer-assets.emergentagent.com/job_tire-mobile-mtl/artifacts/8sfn157u_Untitled-1-03-Photoroom.png?v=2"
            alt="Mecano Logo"
            width={700}
            height={210}
            className="mx-auto mb-8 drop-shadow-[0_0_30px_rgba(255,107,0,0.8)] animate-glow"
            unoptimized
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,107,0,0.3)]">
            Changement de pneus chez vous, sans effort !
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Service mobile professionnel à Montréal, Laval, Rive-Nord et Rive-Sud
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-105"
            >
              Prendre RDV
            </Link>
            <a 
              href="tel:5146497372" 
              className="bg-white/10 backdrop-blur-md text-white border-2 border-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 transition-all duration-300 hover:scale-105"
            >
              📞 514 649-7372
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Nos Services</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Des services complets de changement de pneus et d entretien, directement chez vous</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-700/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-gray-600 hover:border-orange-500 transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4">{service.icon}</div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Zones Couvertes</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Nous nous déplaçons dans toute la région métropolitaine de Montréal</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {zones.map((zone, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-700/80 to-gray-800/80 p-6 rounded-2xl border-2 border-gray-600 hover:border-orange-500 transition-all duration-300 hover:scale-105">
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
    { name: 'Marc Tremblay', location: 'Westmount', rating: 5, text: "Service impeccable! Ils sont venus chez moi pour changer mes pneus d'hiver. Rapide, professionnel et à un prix très compétitif. Je recommande à 100%!" },
    { name: 'Sophie Gagné', location: 'Laval', rating: 5, text: "Enfin un service mobile de qualité! Plus besoin de perdre du temps au garage. L'équipe est très professionnelle et sympathique." },
    { name: 'Jean-François Leblanc', location: 'Brossard', rating: 5, text: "J'ai eu une crevaison et ils sont venus en moins d'une heure! Service d'urgence excellent. Merci Mecano Express!" }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Ce que nos clients disent</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Des centaines de clients satisfaits dans toute la région</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold mr-4">{testimonial.name.charAt(0)}</div>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">📍 {testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (<span key={i} className="text-orange-500 text-xl">★</span>))}
              </div>
              <p className="text-gray-300 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
