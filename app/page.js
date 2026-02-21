'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Changement de pneus chez vous, sans effort !
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Service mobile professionnel à Montréal, Laval, Rive-Nord et Rive-Sud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
              >
                Prendre RDV
              </Link>
              <a 
                href="tel:5146497372" 
                className="bg-white/10 backdrop-blur-md text-white border-2 border-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 transition-all duration-300"
              >
                📞 514 649-7372
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
              Nos Services
            </h2>
            <p className="text-gray-300 text-lg">
              Service complet de changement de pneus à domicile
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '❄️', title: 'Pneus Hiver', desc: 'Installation complète de pneus d\'hiver' },
              { icon: '☀️', title: 'Pneus Été', desc: 'Changement de pneus d\'été' },
              { icon: '⚖️', title: 'Équilibrage', desc: 'Équilibrage professionnel' },
              { icon: '🔄', title: 'Rotation', desc: 'Rotation des pneus' },
              { icon: '🔧', title: 'Réparation', desc: 'Réparation de crevaison' },
              { icon: '🚗', title: 'Tous Véhicules', desc: 'Service pour tous types de véhicules' }
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-700/80 to-gray-800/80 p-8 rounded-2xl border-2 border-gray-600 hover:border-orange-500 transition-all duration-300 hover:scale-105">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-orange-400">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-orange-500">Zones Couvertes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Montréal', 'Laval', 'Rive-Nord', 'Rive-Sud'].map((zone, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl border border-orange-500/30">
                <h3 className="text-xl font-bold text-orange-500">📍 {zone}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
