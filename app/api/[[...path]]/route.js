import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const url = new URL(request.url)
    const path = url.pathname

    if (path.includes('/api/contact')) {
      const body = await request.json()
      const { name, email, phone, message } = body

      if (!name || !email || !phone || !message) {
        return NextResponse.json({ error: 'Tous les champs requis doivent être remplis' }, { status: 400 })
      }

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer re_BXabeBgR_ABoaP941WwFXTZXuZjd79CiY',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Mecano Express <onboarding@resend.dev>',
          to: ['info.mecanoexpress@gmail.com'],
          subject: 'Nouveau message de contact - Mecano Express',
          html: `
            <h2>Nouveau message de contact</h2>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr>
            <p><small>Message envoyé depuis le site web Mecano Express</small></p>
          `
        })
      })

      if (resendResponse.ok) {
        return NextResponse.json({ success: true, message: 'Votre message a été envoyé avec succès!' }, { status: 200 })
      } else {
        console.error('Resend error:', await resendResponse.text())
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
