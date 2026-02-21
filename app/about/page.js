'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              À propos de Mecano Express
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Votre service mobile de confiance pour le changement de pneus à Montréal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1619642737579-a7474bee1044"
                alt="Professional mechanic"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6 text-orange-500">Notre Histoire</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  <strong className="text-white">Mecano Express</strong> est un service fiable et rapide de mécanique mobile à Montréal.
                </p>
                <p>
                  Nous avons créé Mecano Express avec une vision simple : rendre le changement de pneus aussi facile et pratique que possible. Plus besoin de perdre du temps dans les garages ou de prendre rendez-vous des semaines à l avance.
                </p>
                <p>
                  Notre service mobile vous permet de faire changer vos pneus directement chez vous, à votre travail, ou n importe où à Montréal et ses environs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-2xl border border-gray-700 mb-20">
            <h2 className="text-4xl font-bold mb-8 text-center text-orange-500">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-3">Fiabilité</h3>
                <p className="text-gray-300">Nous sommes toujours à l heure et respectons nos engagements.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-3">Rapidité</h3>
                <p className="text-gray-300">Service express sans compromis sur la qualité.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-white mb-3">Qualité</h3>
                <p className="text-gray-300">Équipement moderne et techniques professionnelles.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-orange-500">Notre Zone de Service</h2>
              <p className="text-gray-300 text-lg mb-6">Nous couvrons toute l île de Montréal, Laval, la Rive-Nord et la Rive-Sud.</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-orange-500 text-2xl mr-4">📍</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Montréal</h3>
                    <p className="text-gray-400">Tous les arrondissements incluant Westmount, Outremont, Verdun, Rosemont et plus</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 text-2xl mr-4">📍</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Laval</h3>
                    <p className="text-gray-400">Toute la ville de Laval et ses secteurs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 text-2xl mr-4">📍</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Rive-Nord</h3>
                    <p className="text-gray-400">Blainville, Terrebonne, Mirabel, Saint-Jérôme et environs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 text-2xl mr-4">📍</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Rive-Sud</h3>
                    <p className="text-gray-400">Brossard, Longueuil, Saint-Hubert, Boucherville et plus</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
                alt="Service area"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-2 border-orange-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Contactez-nous</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl mb-3">📞</div>
                <h3 className="text-xl font-bold text-orange-500 mb-2">Téléphone</h3>
                <a href="tel:5146497372" className="text-white text-2xl hover:text-orange-300 transition-colors">514 649-7372</a>
              </div>
              <div>
                <div className="text-4xl mb-3">✉️</div>
                <h3 className="text-xl font-bold text-orange-500 mb-2">Email</h3>
                <a href="mailto:info.mecanoexpress@gmail.com" className="text-white text-xl hover:text-orange-300 transition-colors">info.mecanoexpress@gmail.com</a>
              </div>
              <div>
                <div className="text-4xl mb-3">📍</div>
                <h3 className="text-xl font-bold text-orange-500 mb-2">Service</h3>
                <p className="text-white text-xl">Montréal et environs</p>
              </div>
            </div>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
