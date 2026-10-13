// Tests du message de saison des pneus d’hiver (lancer : npm test).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { saisonPneus } from '../app/saison.mjs'

// texteCourt / etatCourt : version téléphone, sur une seule ligne.
const AUTOMNE = { periode: 'automne', texte: 'Pneus d’hiver obligatoires', dates: true, texteCourt: 'Pneus d’hiver obligatoires' }
const HIVER = { periode: 'hiver', texte: 'Pneus d’hiver obligatoires', dates: false, etat: 'En vigueur jusqu’au 15 mars', texteCourt: 'Pneus d’hiver requis', etatCourt: 'Jusqu’au 15 mars' }
const PRINTEMPS = { periode: 'printemps', texte: 'Pneus d’hiver : obligation terminée le 15 mars', dates: false, etat: 'Place aux pneus d’été', texteCourt: 'Fin des pneus d’hiver', etatCourt: 'Place à l’été' }

test('automne : compte à rebours jusqu’au 1er décembre', () => {
  assert.deepEqual(saisonPneus(new Date('2026-10-13T09:30:00-04:00')), { ...AUTOMNE, etat: 'Dans 49 jours', etatCourt: 'Dans 49 jours' })
})

test('1er septembre : début du compte à rebours', () => {
  assert.deepEqual(saisonPneus(new Date('2026-09-01T08:00:00-04:00')), { ...AUTOMNE, etat: 'Dans 91 jours', etatCourt: 'Dans 91 jours' })
})

test('30 novembre : « Dans 1 jour », au singulier', () => {
  assert.deepEqual(saisonPneus(new Date('2026-11-30T23:59:00-05:00')), { ...AUTOMNE, etat: 'Dans 1 jour', etatCourt: 'Dans 1 jour' })
})

test('fuseau de Montréal : 1er déc. 2 h UTC, c’est encore le 30 novembre au Québec', () => {
  assert.deepEqual(saisonPneus(new Date('2026-12-01T02:00:00Z')), { ...AUTOMNE, etat: 'Dans 1 jour', etatCourt: 'Dans 1 jour' })
})

test('1er décembre à minuit : l’obligation est en vigueur', () => {
  assert.deepEqual(saisonPneus(new Date('2026-12-01T00:00:00-05:00')), HIVER)
})

test('janvier : en vigueur', () => {
  assert.deepEqual(saisonPneus(new Date('2027-01-20T12:00:00-05:00')), HIVER)
})

test('15 mars à 23 h 59 : encore en vigueur', () => {
  assert.deepEqual(saisonPneus(new Date('2027-03-15T23:59:00-04:00')), HIVER)
})

test('16 mars : obligation terminée, place aux pneus d’été', () => {
  assert.deepEqual(saisonPneus(new Date('2027-03-16T00:00:00-04:00')), PRINTEMPS)
})

test('31 août : toujours la période sans obligation', () => {
  assert.deepEqual(saisonPneus(new Date('2027-08-31T12:00:00-04:00')), PRINTEMPS)
})

test('version téléphone : 39 caractères au plus (une ligne dès 360 px), toute l’année', () => {
  for (let t = Date.UTC(2026, 0, 1, 17); t < Date.UTC(2028, 0, 1); t += 86400000) {
    const { texteCourt, etatCourt } = saisonPneus(new Date(t))
    assert.ok(texteCourt.length + etatCourt.length <= 39, `${new Date(t).toISOString()} → ${texteCourt} ${etatCourt}`)
  }
})

test('jamais de nombre négatif ni nul, tous les jours sur deux ans', () => {
  for (let t = Date.UTC(2026, 0, 1, 17); t < Date.UTC(2028, 0, 1); t += 86400000) {
    const { etat } = saisonPneus(new Date(t))
    const n = etat.match(/-?\d+/)
    if (n && !/15 mars/.test(etat)) assert.ok(Number(n[0]) >= 1, `${new Date(t).toISOString()} → ${etat}`)
  }
})
