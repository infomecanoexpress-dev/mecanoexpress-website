'use client'

import { useState, useRef, useEffect } from 'react'
import { CheckIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon } from '../icons'
import { titreService } from '../services-liste.mjs'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    client_type: 'residentiel',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [addressSuggestions, setAddressSuggestions] = useState([])
  const addressDebounce = useRef(null)
  const addressWrapperRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    if (e.target.name === 'address') {
      const q = e.target.value.trim()
      clearTimeout(addressDebounce.current)
      if (q.length < 4) {
        setAddressSuggestions([])
        return
      }
      addressDebounce.current = setTimeout(async () => {
        try {
          const url = 'https://photon.komoot.io/api/?q=' + encodeURIComponent(q) + '&limit=5&lon=-73.5673&lat=45.5017&lang=fr'
          const res = await fetch(url)
          const data = await res.json()
          const feats = (data.features || []).filter(f => f.properties.countrycode === 'CA')
          setAddressSuggestions(feats.map(f => {
            const p = f.properties
            return [p.housenumber, p.street || p.name, p.city, p.state].filter(Boolean).join(', ')
          }))
        } catch (err) {
          setAddressSuggestions([])
        }
      }, 300)
    }
  }

  const selectAddress = (label) => {
    setFormData(prev => ({ ...prev, address: label }))
    setAddressSuggestions([])
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (addressWrapperRef.current && !addressWrapperRef.current.contains(e.target)) {
        setAddressSuggestions([])
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)

    if (!formData.phone.trim()) {
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
        setFormData({ name: '', phone: '', address: '', client_type: 'residentiel', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Service choisi sur la page Services (?service=huile) : prérempli dans le message.
  // Lu dans le navigateur (la page est statique) ; un identifiant inconnu est ignoré.
  useEffect(() => {
    const titre = titreService(new URLSearchParams(window.location.search).get('service'))
    if (titre) setFormData((prev) => (prev.message ? prev : { ...prev, message: `Service souhaité : ${titre}\n` }))
  }, [])

  // Après l'envoi, le message de résultat est amené sous la barre du haut.
  const statusRef = useRef(null)
  useEffect(() => {
    if (!submitStatus || !statusRef.current) return
    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    statusRef.current.scrollIntoView({ block: 'start', behavior: reduit ? 'auto' : 'smooth' })
  }, [submitStatus])

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-ligne bg-graphite-950 py-12 md:py-16">
        <div className="grille-fine" aria-hidden="true"></div>
        <div className="container relative mx-auto px-4">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em]">Contactez-nous</h1>
          <p className="mt-4 max-w-[46ch] text-[clamp(1.125rem,1.7vw,1.3125rem)] leading-normal text-encre-2">Prenez rendez-vous ou contactez-nous pour toute question</p>
        </div>
      </section>

      <section className="section border-t-0 pt-10 md:pt-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
            <div id="demande" className="fiche p-5 sm:p-8">
              <span className="fiche-repere hg" aria-hidden="true"></span>
              <span className="fiche-repere bd" aria-hidden="true"></span>
              <h2 className="text-2xl font-bold tracking-[-0.02em] md:text-3xl">Demande de service</h2>
              <p className="mt-2 text-encre-2">Décrivez votre besoin, un technicien vous recontacte rapidement.</p>

              <div ref={statusRef} className="scroll-mt-24">
                {submitStatus === 'success' && (
                  <div role="status" className="apparition mt-6 rounded-precis border border-accent bg-graphite-800 p-4">
                    <p className="flex items-start gap-3 font-semibold text-encre">
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-accent" />
                      Demande envoyée. Un technicien vous rappelle rapidement au numéro indiqué.
                    </p>
                    <p className="mt-2 pl-8 text-encre-2">
                      C’est urgent ? Appelez le <a href="tel:5146497372" className="chiffres whitespace-nowrap text-encre underline decoration-accent underline-offset-4">514 649-7372</a>.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div role="alert" className="apparition mt-6 rounded-precis border border-[#e5484d] bg-graphite-800 p-4">
                    <p className="font-semibold text-encre">La demande n’a pas pu partir.</p>
                    <p className="mt-1 text-encre-2">
                      Réessayez, ou appelez-nous au <a href="tel:5146497372" className="chiffres whitespace-nowrap text-encre underline decoration-accent underline-offset-4">514 649-7372</a>.
                    </p>
                  </div>
                )}

                {submitStatus === 'missing_contact' && (
                  <div role="alert" className="apparition mt-6 rounded-precis border border-[#e5484d] bg-graphite-800 p-4">
                    <p className="font-semibold text-encre">Indiquez votre téléphone pour qu’on puisse vous rappeler.</p>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="etiquette">Nom complet *</label>
                  <input type="text" id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required className="champ" placeholder="Votre nom" />
                </div>

                <div>
                  <label htmlFor="phone" className="etiquette">Téléphone *</label>
                  <input type="tel" id="phone" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} required className="champ" placeholder="514-555-1234" />
                </div>

                <div className="relative" ref={addressWrapperRef}>
                  <label htmlFor="address" className="etiquette">Adresse *</label>
                  <input type="text" id="address" name="address" autoComplete="street-address" value={formData.address} onChange={handleChange} required className="champ" placeholder="Votre adresse" />
                  {addressSuggestions.length > 0 && (
                    <div data-suggestions className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-precis border border-ligne-contour bg-graphite-800 shadow-[0_16px_32px_-12px_rgba(0,0,0,0.6)]">
                      {addressSuggestions.map((label, i) => (
                        <button key={i} type="button" onClick={() => selectAddress(label)} className="block min-h-[2.75rem] w-full border-t border-ligne px-4 py-2.5 text-left text-[0.9375rem] text-encre first:border-t-0 hover:bg-graphite-700 focus-visible:bg-graphite-700">
                          {label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="client_type" className="etiquette">Type de client</label>
                  <select id="client_type" name="client_type" value={formData.client_type} onChange={handleChange} className="champ">
                    <option value="residentiel">Résidentiel</option>
                    <option value="business">Business / Entreprise</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="etiquette">Décrivez votre problème ou le service désiré *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="champ resize-none" placeholder="Ex: J'aimerais faire changer mes 4 pneus d'hiver."></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="btn btn-primaire w-full disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
                </button>
                <p className="text-sm text-encre-3">* Champs obligatoires</p>
              </form>
            </div>

            <div data-infos-contact className="self-start">
              <h2 className="text-2xl font-bold tracking-[-0.02em] md:text-3xl">Informations de contact</h2>
              <ul className="fiche mt-6">
                <li className="fiche-ligne">
                  <span className="fiche-icone" aria-hidden="true"><PhoneIcon /></span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-encre-3">Téléphone</h3>
                    <a href="tel:5146497372" className="chiffres text-xl text-encre transition-colors hover:text-accent">514 649-7372</a>
                    <p className="text-sm text-encre-3">Disponible 7 jours sur 7</p>
                  </div>
                </li>
                <li className="fiche-ligne">
                  <span className="fiche-icone" aria-hidden="true"><MailIcon /></span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-encre-3">Courriel</h3>
                    <a href="mailto:info.mecanoexpress@gmail.com" className="break-all text-lg text-encre transition-colors hover:text-accent">info.mecanoexpress@gmail.com</a>
                    <p className="text-sm text-encre-3">Réponse sous 24h</p>
                  </div>
                </li>
                <li className="fiche-ligne">
                  <span className="fiche-icone" aria-hidden="true"><PinIcon /></span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-encre-3">Zone de service</h3>
                    <p className="text-encre">Montréal, Laval, Rive-Nord, Rive-Sud</p>
                    <p className="text-sm text-encre-3">Service mobile - on vient à vous!</p>
                  </div>
                </li>
                <li className="fiche-ligne">
                  <span className="fiche-icone" aria-hidden="true"><ClockIcon /></span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-encre-3">Heures d’ouverture</h3>
                    <p className="text-encre">Lundi - Dimanche</p>
                    <p className="chiffres text-encre">8h00 - 20h00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="section-titre">Notre zone de service</h2>
          <div className="mt-10 grid grid-cols-1 divide-y divide-ligne border-y border-ligne sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {ZONES.map((zone) => (
              <div key={zone.nom} className="py-6 lg:px-6 lg:first:pl-0">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <PinIcon className="h-5 w-5 text-accent" />
                  {zone.nom}
                </h3>
                <ul className="mt-3 space-y-1.5 text-encre-2">
                  {zone.villes.map((v) => <li key={v}>{v}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const ZONES = [
  { nom: 'Montréal', villes: ['Westmount', 'Outremont', 'Verdun', 'Rosemont', 'Et tous les arrondissements'] },
  { nom: 'Laval', villes: ['Chomedey', 'Fabreville', 'Vimont', 'Sainte-Rose', 'Tous les secteurs'] },
  { nom: 'Rive-Nord', villes: ['Blainville', 'Terrebonne', 'Mirabel', 'Saint-Jérôme', 'Et environs'] },
  { nom: 'Rive-Sud', villes: ['Brossard', 'Longueuil', 'Saint-Hubert', 'Boucherville', 'Et plus encore'] },
]
