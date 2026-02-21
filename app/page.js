Parfait ! Voici les instructions étape par étape :

---

## 📝 ÉTAPE 1 : Mettre à jour la page d'accueil (`app/page.js`)

1. Allez sur votre repository GitHub : **mecanoexpress-website** (ou le nom de votre repo)
2. Naviguez vers le dossier `app`
3. Cliquez sur le fichier `page.js`
4. Cliquez sur l'icône **crayon** ✏️ (Edit this file)
5. **Supprimez TOUT le contenu** et collez ce code :
Action: file_editor view /app/app/page.js
Observation: /app/app/page.js:
1|'use client'
2|
3|import { useState } from 'react'
4|import Link from 'next/link'
5|import Image from 'next/image'
6|
7|export default function Home() {
8|  return (
9|    <div>
10|      <HeroSection />
11|      <ServicesSection />
12|      <ZonesSection />
13|      <TestimonialsSection />
14|    </div>
15|  )
16|}
17|
18|function HeroSection() {
19|  return (
20|    <section className="relative h-screen flex items-center justify-center overflow-hidden">
21|      <div className="absolute inset-0 z-0">
22|        <Image
23|          src="https://images.unsplash.com/photo-1643700973089-baa86a1ab9ee"
24|          alt="Professional mechanic service"
25|          fill
26|          className="object-cover opacity-50"
27|          priority
28|        />
29|        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/70 to-gray-900/90"></div>
30|        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
31|      </div>
32|      
33|      <div className="relative z-10 container mx-auto px-4 text-center">
34|        <div className="animate-fade-in-up">
35|          <Image
36|            src="https://customer-assets.emergentagent.com/job_tire-mobile-mtl/artifacts/8sfn157u_Untitled-1-03-Photoroom.png?v=2"
37|            alt="Mecano Logo"
38|            width={700}
39|            height={210}
40|            className="mx-auto mb-8 drop-shadow-[0_0_30px_rgba(255,107,0,0.8)] animate-glow"
41|            unoptimized
42|          />
43|          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,107,0,0.3)]">
44|            Changement de pneus chez vous, sans effort !
45|          </h1>
46|          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
47|            Service mobile professionnel à Montréal, Laval, Rive-Nord et Rive-Sud
48|          </p>
49|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
50|            <Link 
51|              href="/contact" 
52|              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-105"
53|            >
54|              Prendre RDV
55|            </Link>
56|            <a 
57|              href="tel:5146497372" 
58|              className="bg-white/10 backdrop-blur-md text-white border-2 border-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 transition-all duration-300 hover:scale-105"
59|            >
60|              📞 514 649-7372
61|            </a>
62|          </div>
63|        </div>
64|      </div>
65|      
66|      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
67|        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
68|          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
69|        </svg>
70|      </div>
71|    </section>
72|  )
73|}
74|
75|function ServicesSection() {
76|  const services = [
77|    {
78|      icon: '❄️',
79|      title: 'Pneus Hiver',
80|      description: 'Installation complète de pneus d\'hiver pour une conduite sécuritaire'
81|    },
82|    {
83|      icon: '☀️',
84|      title: 'Pneus Été',
85|      description: 'Changement de pneus d\'été pour une performance optimale'
86|    },
87|    {
88|      icon: '⚖️',
89|      title: 'Équilibrage',
90|      description: 'Équilibrage professionnel pour une conduite douce et stable'
91|    },
92|    {
93|      icon: '🔄',
94|      title: 'Rotation',
95|      description: 'Rotation des pneus pour prolonger leur durée de vie'
96|    },
97|    {
98|      icon: '🔧',
99|      title: 'Réparation Crevaison',
100|      description: 'Réparation rapide de crevaison sur place'
101|    },
102|    {
103|      icon: '🚗',
104|      title: 'Tous Véhicules',
105|      description: 'Service pour voitures de luxe et régulières'
106|    }
107|  ]
108|
109|  return (
110|    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
111|      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,0,0.1),transparent_50%)]"></div>
112|      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,107,0,0.1),transparent_50%)]"></div>
113|      <div className="container mx-auto px-4 relative z-10">
114|        <div className="text-center mb-16">
115|          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,107,0,0.3)]">
116|            Nos Services
117|          </h2>
118|          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
119|            Des services complets de changement de pneus et d'entretien, directement chez vous
120|          </p>
121|        </div>
122|        
123|        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
124|          {services.map((service, index) => (
125|            <div 
126|              key={index}
127|              className="group bg-gradient-to-br from-gray-700/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-gray-600 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-2"
128|            >
129|              <div className="text-6xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 filter drop-shadow-lg">{service.icon}</div>
130|              <h3 className="text-2xl font-bold mb-2 text-orange-400 group-hover:text-orange-300 transition-colors">{service.title}</h3>
131|              <p className="text-gray-300 group-hover:text-white transition-colors">{service.description}</p>
132|            </div>
133|          ))}
134|        </div>
135|        
136|        <div className="text-center mt-12">
137|          <Link 
138|            href="/services" 
139|            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
140|          >
141|            Voir tous les services →
142|          </Link>
143|        </div>
144|      </div>
145|    </section>
146|  )
147|}
148|
149|function ZonesSection() {
150|  const zones = [
151|    { name: 'Montréal', cities: ['Westmount', 'Outremont', 'Verdun', 'Rosemont', 'Villeray', 'Plateau', 'NDG', 'LaSalle'] },
152|    { name: 'Laval', cities: ['Chomedey', 'Fabreville', 'Vimont', 'Sainte-Rose', 'Pont-Viau', 'Laval-des-Rapides'] },
153|    { name: 'Rive-Nord', cities: ['Blainville', 'Terrebonne', 'Mirabel', 'Saint-Jérôme', 'Boisbriand', 'Rosemère'] },
154|    { name: 'Rive-Sud', cities: ['Brossard', 'Longueuil', 'Saint-Hubert', 'Boucherville', 'La Prairie', 'Candiac'] }
155|  ]
156|
157|  return (
158|    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
159|      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff6b0010_1px,transparent_1px),linear-gradient(to_bottom,#ff6b0010_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
160|      <div className="container mx-auto px-4 relative z-10">
161|        <div className="text-center mb-16">
162|          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,107,0,0.3)]">
163|            Zones Couvertes
164|          </h2>
165|          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
166|            Nous nous déplaçons dans toute la région métropolitaine de Montréal
167|          </p>
168|        </div>
169|        
170|        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
171|          {zones.map((zone, index) => (
172|            <div 
173|              key={index}
174|              className="group bg-gradient-to-br from-gray-700/80 to-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-gray-600 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30"
175|            >
176|              <h3 className="text-2xl font-bold mb-4 text-orange-500 flex items-center group-hover:text-orange-400 transition-colors">
177|                <span className="text-3xl mr-2">📍</span> {zone.name}
178|              </h3>
179|              <ul className="space-y-2">
180|                {zone.cities.map((city, idx) => (
181|                  <li key={idx} className="text-gray-300 flex items-center group-hover:text-white transition-colors">
182|                    <span className="text-orange-500 mr-2 font-bold">✓</span> {city}
183|                  </li>
184|                ))}
185|              </ul>
186|            </div>
187|          ))}
188|        </div>
189|        
190|        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-2 border-orange-500/50 rounded-2xl p-8 text-center hover:border-orange-500 transition-all duration-300">
191|          <p className="text-xl text-gray-200">
192|            <span className="text-orange-500 font-bold">🚗 Zone pas listée?</span> Contactez-nous! Nous desservons plusieurs autres secteurs.
193|          </p>
194|          <a href="tel:5146497372" className="inline-block mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
195|            📞 514 649-7372
196|          </a>
197|        </div>
198|      </div>
199|    </section>
200|  )
201|}
202|
203|function TestimonialsSection() {
204|  const testimonials = [
205|    {
206|      name: 'Marc Tremblay',
207|      location: 'Westmount',
208|      rating: 5,
209|      text: 'Service impeccable! Ils sont venus chez moi pour changer mes pneus d\'hiver. Rapide, professionnel et à un prix très compétitif. Je recommande à 100%!',
210|      image: 'https://images.unsplash.com/photo-1619642737579-a7474bee1044'
211|    },
212|    {
213|      name: 'Sophie Gagné',
214|      location: 'Laval',
215|      rating: 5,
216|      text: 'Enfin un service mobile de qualité! Plus besoin de perdre du temps au garage. L\'équipe est très professionnelle et sympathique. Mon auto roule comme neuve!',
217|      image: 'https://images.pexels.com/photos/8986119/pexels-photo-8986119.jpeg'
218|    },
219|    {
220|      name: 'Jean-François Leblanc',
221|      location: 'Brossard',
222|      rating: 5,
223|      text: 'J\'ai eu une crevaison et ils sont venus en moins d\'une heure! Service d\'urgence excellent. Merci Mecano Express!',
224|      image: 'https://images.unsplash.com/photo-1764015805414-df7de89d405b'
225|    }
226|  ]
227|
228|  return (
229|    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
230|      <div className="container mx-auto px-4">
231|        <div className="text-center mb-16">
232|          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
233|            Ce que nos clients disent
234|          </h2>
235|          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
236|            Des centaines de clients satisfaits dans toute la région
237|          </p>
238|        </div>
239|        
240|        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
241|          {testimonials.map((testimonial, index) => (
242|            <div 
243|              key={index}
244|              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105"
245|            >
246|              <div className="flex items-center mb-4">
247|                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold mr-4">
248|                  {testimonial.name.charAt(0)}
249|                </div>
250|                <div>
251|                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
252|                  <p className="text-gray-400 text-sm">📍 {testimonial.location}</p>
253|                </div>
254|              </div>
255|              
256|              <div className="flex mb-4">
257|                {[...Array(testimonial.rating)].map((_, i) => (
258|                  <span key={i} className="text-orange-500 text-xl">★</span>
259|                ))}
260|              </div>
261|              
262|              <p className="text-gray-300 italic">"{testimonial.text}"</p>
263|            </div>
264|          ))}
265|        </div>
266|      </div>
267|    </section>
268|  )
269|}
