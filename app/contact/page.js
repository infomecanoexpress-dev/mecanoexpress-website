'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)

    if (!formData.phone.trim() && !formData.email.trim()) {
      setSubmitStatus('missing_contact')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', address: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-orange-500">Contactez-nous</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Prenez rendez-vous ou contactez-nous pour toute question</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-orange-500">Informations de Contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📞</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Téléphone</h3>
                      <a href="tel:5146497372" className="text-orange-500 text-2xl hover:text-orange-400 transition-colors">514 649-7372</a>
                      <p className="text-gray-400 text-sm mt-1">Disponible 7 jours sur 7</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">✉️</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                      <a href="mailto:info.mecanoexpress@gmail.com" className="text-orange-500 text-lg hover:text-orange-400 transition-colors">info.mecanoexpress@gmail.com</a>
                      <p className="text-gray-400 text-sm mt-1">Réponse sous 24h</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📍</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Zone de Service</h3>
                      <p className="text-gray-300">Montréal, Laval, Rive-Nord, Rive-Sud</p>
                      <p className="text-gray-400 text-sm mt-1">Service mobile - on vient à vous!</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">⏰</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Heures d ouverture</h3>
                      <p className="text-gray-300">Lundi - Dimanche</p>
                      <p className="text-gray-300">8h00 - 20h00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-orange-500">Besoin d aide rapidement?</h3>
                <p className="text-gray-300 mb-6">Pour les urgences et les rendez-vous le jour même, appelez-nous directement!</p>
                <a href="tel:5146497372" className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-full text-center text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300">📞 Appeler maintenant</a>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <Image
                  src="https://i.imgur.com/GnreRdD.png"
                  alt="MecanoExpress"
                  width={180}
                  height={46}
                  unoptimized
                  className="mx-auto mb-4"
                />
                <h2 className="text-3xl font-bold mb-2 text-center text-orange-500">Demande de service</h2>
                <p className="text-gray-300 text-center mb-6">Décrivez votre besoin, un technicien vous recontacte rapidement.</p>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6">
                    <p className="text-green-500 font-semibold">✓ Demande envoyée avec succès! Un technicien vous recontactera sous peu.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6">
                    <p className="text-red-500 font-semibold">✗ Erreur lors de l envoi. Veuillez réessayer ou nous appeler.</p>
                  </div>
                )}

                {submitStatus === 'missing_contact' && (
                  <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6">
                    <p className="text-red-500 font-semibold">✗ Merci d indiquer au moins un téléphone ou un courriel.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">Nom complet *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Votre nom" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">Téléphone <span className="text-gray-400 font-normal text-sm">(au moins un des deux : téléphone ou courriel)</span></label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="514-555-1234" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">Courriel <span className="text-gray-400 font-normal text-sm">(au moins un des deux)</span></label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="votre.email@exemple.com" />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-white font-semibold mb-2">Adresse <span className="text-gray-400 font-normal text-sm">(optionnel)</span></label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Votre adresse" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">Décrivez votre problème ou le service désiré *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="Ex: J'aimerais faire changer mes 4 pneus d'hiver."></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-500">Notre Zone de Service</h2>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-orange-500 mb-3">📍 Montréal</h3>
                  <ul className="text-gray-300 space-y-1"><li>• Westmount</li><li>• Outremont</li><li>• Verdun</li><li>• Rosemont</li><li>• Et tous les arrondissements</li></ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-500 mb-3">📍 Laval</h3>
                  <ul className="text-gray-300 space-y-1"><li>• Chomedey</li><li>• Fabreville</li><li>• Vimont</li><li>• Sainte-Rose</li><li>• Tous les secteurs</li></ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-500 mb-3">📍 Rive-Nord</h3>
                  <ul className="text-gray-300 space-y-1"><li>• Blainville</li><li>• Terrebonne</li><li>• Mirabel</li><li>• Saint-Jérôme</li><li>• Et environs</li></ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-500 mb-3">📍 Rive-Sud</h3>
                  <ul className="text-gray-300 space-y-1"><li>• Brossard</li><li>• Longueuil</li><li>• Saint-Hubert</li><li>• Boucherville</li><li>• Et plus encore</li></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
