// Pneus d’hiver au Québec : obligatoires du 1er décembre au 15 mars
// (Code de la sécurité routière). À appeler dans le navigateur, après le
// chargement : la page est générée au build, une date calculée là resterait
// figée jusqu’au déploiement suivant. Les dates sont celles de Montréal.
// texteCourt / etatCourt : version téléphone, 39 caractères au plus (une ligne dès 360 px).
export function saisonPneus(maintenant = new Date()) {
  const parties = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Toronto',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(maintenant)
  const val = (type) => Number(parties.find((p) => p.type === type).value)
  const an = val('year')
  const mois = val('month')
  const jour = val('day')

  // Du 1er décembre au 15 mars : l’obligation est en vigueur.
  if (mois === 12 || mois <= 2 || (mois === 3 && jour <= 15)) {
    return {
      periode: 'hiver', texte: 'Pneus d’hiver obligatoires', dates: false, etat: 'En vigueur jusqu’au 15 mars',
      texteCourt: 'Pneus d’hiver requis', etatCourt: 'Jusqu’au 15 mars',
    }
  }
  // Du 1er septembre au 30 novembre : compte à rebours, jamais sous 1 jour.
  if (mois >= 9) {
    const jours = Math.max(1, Math.round((Date.UTC(an, 11, 1) - Date.UTC(an, mois - 1, jour)) / 86400000))
    const etat = `Dans ${jours} jour${jours > 1 ? 's' : ''}`
    return { periode: 'automne', texte: 'Pneus d’hiver obligatoires', dates: true, etat, texteCourt: 'Pneus d’hiver obligatoires', etatCourt: etat }
  }
  // Du 16 mars au 31 août : plus d’obligation jusqu’au 1er décembre.
  return {
    periode: 'printemps', texte: 'Pneus d’hiver : obligation terminée le 15 mars', dates: false, etat: 'Place aux pneus d’été',
    texteCourt: 'Fin des pneus d’hiver', etatCourt: 'Place à l’été',
  }
}
