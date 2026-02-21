import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const url = new URL(request.url)
    const path = url.pathname

    if (path.includes('/api/contact')) {
      const body = await request.json()
      const { name, email, phone, message } = body

      if (!name || !email || !phone || !message) {
        return NextResponse.json(
          { error: 'Tous les champs requis doivent être remplis' },
          { status: 400 }
        )
      }

      console.log('Nouveau message de contact:', { name, email, phone, message })

      return NextResponse.json(
        { success: true, message: 'Message envoyé avec succès!' },
        { status: 200 }
      )
    }

    return NextResponse.json({ error: 'Route non trouvée' }, { status: 404 })
  } catch (error) {
    console.error('Erreur API:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function GET(request) {
  return NextResponse.json({ status: 'ok', service: 'Mecano Express API' })
}
