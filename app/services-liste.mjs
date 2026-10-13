// Services du site : identifiant court (lien « Réserver ce service ») et nom affiché.
// Le formulaire de contact s'en sert pour préremplir le message.
export const SERVICES = [
  { slug: 'pneus', titre: 'Changement de pneus hiver et été' },
  { slug: 'equilibrage', titre: 'Équilibrage des roues' },
  { slug: 'rotation', titre: 'Rotation des pneus' },
  { slug: 'crevaison', titre: 'Réparation de crevaison' },
  { slug: 'huile', titre: 'Changement d’huile' },
  { slug: 'mecanique', titre: 'Mécanique générale' },
]

export function titreService(slug) {
  return SERVICES.find((s) => s.slug === slug)?.titre ?? null
}
