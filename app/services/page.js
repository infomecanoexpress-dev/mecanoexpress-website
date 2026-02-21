'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Changement de Pneus Hiver/Été',
      description: 'Service mobile de changement de pneus à domicile à Montréal, Laval et les alentours. On se déplace chez vous pour tes pneus hiver ou été – pas besoin d\'aller au garage !',
      features: [
        'Installation complète des 4 pneus',
        'Serrage au couple recommandé',
        'Vérification de la pression',
        'Inspection visuelle des freins',
        'Service rapide (30-45 minutes)'
      ],
      image: 'https://images.unsplash.com/photo-1764015805414-df7de89d405b'
    },
    {
      title: 'Équilibrage des Roues',
      description: 'Équilibrage professionnel de vos roues pour éliminer les vibrations et prolonger la durée de vie de vos pneus.',
      features: [
        'Équilibrage électronique précis',
        'Correction des déséquilibres',
        'Test de conduite si nécessaire',
        'Ajustement des poids',
        'Garantie satisfaction'
      ],
      image: 'https://images.pexels.com/photos/8986119/pexels-photo-8986119.jpeg'
    },
    {
      title: 'Rotation des Pneus',
      description: 'Rotation régulière de vos pneus pour assurer une usure uniforme et maximiser leur durée de vie.',
      features: [
        'Rotation selon recommandations du fabricant',
        'Inspection de l\'usure',
        'Vérification de l\'alignement visuel',
        'Ajustement de la pression',
        'Rapport d\'inspection inclus'
      ],
      image: 'https://images.pexels.com/photos/8985923/pexels-photo-8985923.jpeg'
    },
    {
      title: 'Réparation de Crevaison',
      description: 'Service d\'urgence pour réparation de crevaison sur place. Nous venons à vous rapidement!',
      features: [
        'Intervention rapide',
        'Réparation professionnelle',
        'Installation de la roue de secours si nécessaire',
        'Vérification de tous les pneus',
        'Disponible 7 jours sur 7'
      ],
      image: 'https://images.pexels.com/photos/8986132/pexels-photo-8986132.jpeg'
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-orange-500">
              Nos Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Service mobile de changement de pneus à domicile à Montréal, Laval et les alentours. Service impeccable pour chars de luxe ou réguliers.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                    <h2 className="text-3xl font-bold mb-4 text-orange-500">{service.title}</h2>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="text-orange-500 mr-3 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 flex gap-4">
                      <Link 
                        href="/contact" 
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                      >
                        Réserver ce service
                      </Link>
                      <a 
                        href="tel:5146497372" 
                        className="bg-white/10 text-white border-2 border-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition-all duration-300"
                      >
                        📞 Appeler
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
