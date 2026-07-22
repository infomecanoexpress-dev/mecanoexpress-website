import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const url = new URL(request.url)
    const path = url.pathname

    if (path.includes('/api/contact')) {
      const body = await request.json()
      const { name, email, phone, message } = body

      const hasPhone = !!(phone && phone.trim())
      const hasEmail = !!(email && email.trim())

      if (!name || !message || (!hasPhone && !hasEmail)) {
        return NextResponse.json({ error: 'Nom, message, et au moins un téléphone ou courriel sont requis' }, { status: 400 })
      }

      const intakeResponse = await fetch('https://n8nprof.tech/webhook/mecanoexpress/intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          client_name: name,
          phone: hasPhone ? phone : undefined,
          email: hasEmail ? email : undefined,
          description: message
        })
      })

      if (intakeResponse.ok) {
        return NextResponse.json({ success: true, message: 'Votre message a été envoyé avec succès!' }, { status: 200 })
      } else {
        console.error('Erreur intake n8n:', await intakeResponse.text())
        return NextResponse.json({ error: 'Erreur lors de l envoi' }, { status: 500 })
      }
    }

    return NextResponse.json({ error: 'Route non trouvée' }, { status: 404 })
  } catch (error) {
    console.error('Erreur API:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function GET(request) {
  try {
    const url = new URL(request.url)
    const path = url.pathname

    if (path.includes('/api/health')) {
      return NextResponse.json({ status: 'ok', service: 'Mecano Express API' }, { status: 200 })
    }

    return NextResponse.json({ error: 'Route non trouvée' }, { status: 404 })
  } catch (error) {
    console.error('Erreur API:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
