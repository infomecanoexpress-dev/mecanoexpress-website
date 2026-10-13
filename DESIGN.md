---
name: MecanoExpress — site public
description: Site vitrine sombre à accent orange, pour un service mobile de pneus et de mécanique à Montréal
colors:
  orange: "#f97316"
  orange-light: "#fb923c"
  orange-deep: "#ea580c"
  night: "#111827"
  slate: "#1f2937"
  charcoal: "#1a1a1a"
  black: "#000000"
  text-soft: "#d1d5db"
  text-muted: "#9ca3af"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(3rem, 7vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
  title:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
  body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
rounded:
  card: "1rem"
  panel: "1rem"
  pill: "9999px"
spacing:
  section: "5rem"
  gutter: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 2rem"
  button-ghost-outline:
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "1rem 2rem"
  card-service:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.text-soft}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
---

# Design System: MecanoExpress — site public

## Overview

**Creative North Star: "Le gyrophare"**

Un site de nuit, éclairé par un seul orange vif, comme le gyrophare d'un véhicule de service sur le bord de la route. Les fonds passent du presque-noir au gris anthracite en dégradés. L'orange porte les titres (souvent en dégradé de texte), les boutons et les bordures lumineuses. Le texte courant est gris clair. Une photo de mécanicien assombrie occupe le haut de la page d'accueil.

La page est construite en grandes sections empilées (hero plein écran, services, zones, avis, pied de page), avec des grilles de cartes et beaucoup d'air. Le ton visuel est énergique et un peu « garage » : lueurs orange (`drop-shadow`), pilules arrondies, emojis comme icônes de services.

**Key Characteristics:**
- Fond sombre en dégradés (gris 900 → 800 → noir).
- Un orange unique (orange 500), décliné du 400 au 600, pour les titres, les boutons et les lueurs.
- Montserrat partout, titres en gras (700).
- Boutons en pilule, cartes à coins de 1rem avec bordure translucide.
- Mise en page centrée, en sections de 5rem de hauteur de marge.

## Colors

Une nuit anthracite traversée par un seul orange.

### Primary
- **Orange gyrophare** (#f97316) : boutons d'action (« Prendre RDV maintenant »), titres de section, coches des listes, anneaux de bordure.
- **Orange clair** (#fb923c) et **orange profond** (#ea580c) : extrémités des dégradés de texte et de bouton, survols.

### Neutral
- **Nuit** (#111827) et **Ardoise** (#1f2937) : fonds de section en dégradé, cartes.
- **Charbon** (#1a1a1a) et **Noir** (#000000) : fond du corps de page, bas de page.
- **Gris doux** (#d1d5db) : texte courant.
- **Gris muet** (#9ca3af) : texte secondaire, liens du pied de page.
- **Blanc** : texte sur orange, contours de boutons secondaires.

### Named Rules
**The Single Beacon Rule.** L'orange est la seule couleur vive du site. Les autres teintes sont des gris.

## Typography

**Display Font:** Montserrat (avec sans-serif)
**Body Font:** Montserrat

**Character:** une géométrique ronde et solide, lisible de loin, qui sonne « service » plus que « luxe ».

### Hierarchy
- **Display** (700, 3rem en mobile → 4.5rem en ordinateur, 1.1) : titre du hero, en dégradé orange.
- **Headline** (700, 2.25rem → 3rem) : titres de section (« Nos Services », « Zones Couvertes »), en orange plein.
- **Title** (700, 1.5rem) : titres de cartes (services, zones), en orange clair.
- **Body** (400, 1.125rem à 1.25rem, 1.6) : sous-titres et paragraphes, en gris doux.
- **Label** (600, 0.875rem) : boutons, liens de navigation.

## Layout

Conteneur centré (largeur `container`, marges de 1rem). Sections empilées avec 5rem de marge verticale. Grilles de cartes à 1 colonne en mobile, 2 en tablette, 3 ou 4 en ordinateur. Le hero occupe toute la hauteur de l'écran (`h-screen`), avec une photo de fond et un voile sombre. La barre de navigation est collante en haut. Au téléphone, les liens passent dans un menu hamburger.

## Elevation & Depth

La profondeur vient de la lumière plus que des ombres : lueurs orange (`drop-shadow` orange à 25-45 %) sous le logo et les titres, ombres colorées orange sous les boutons au survol, voiles en dégradé sur la photo. Les cartes sont posées sur le fond avec une bordure translucide et un fond légèrement plus clair.

### Named Rules
**The Glow Not Shadow Rule.** Ce qui doit ressortir s'éclaire en orange. On n'ajoute pas d'ombres noires portées.

## Shapes

Pilules complètes pour tous les boutons et appels à l'action. Cartes et encadrés à coins de 1rem (`rounded-2xl`), icônes de service dans des carrés à coins de 0.75rem. Pas d'angles vifs.

## Components

### Buttons
- **Shape :** pilule (rayon complet).
- **Primary :** dégradé orange 500 → 600, texte blanc, gras. Au survol, dégradé plus foncé, lueur orange et léger grossissement.
- **Secondary (hero) :** fond blanc translucide flouté, contour orange de 2px, texte blanc ; au survol, fond orange plein.

### Cards / Containers
- **Corner Style :** 1rem.
- **Background :** dégradé gris 800 → 900, translucide.
- **Border :** fine, gris ou orange translucide (orange au survol).
- **Internal Padding :** 1.5rem à 2rem.

### Inputs / Fields (page Contact)
- **Style :** champs sombres sur fond gris, bordure grise, coins arrondis.
- **Focus :** bordure orange.

### Navigation
- **Style :** barre collante en dégradé gris 900 → 800, bordure basse orange translucide. Liens gris clair qui passent à l'orange au survol. Bouton pilule orange « Prendre RDV maintenant » à droite.
- **Mobile :** logo à gauche, hamburger à droite, menu déroulant plein écran.

## Do's and Don'ts

### Do:
- **Do** garder l'orange comme seule couleur vive, du 400 au 600.
- **Do** utiliser des pilules pour toute action et des cartes à coins de 1rem.
- **Do** écrire les titres en Montserrat 700, et le texte courant en gris doux sur fond sombre.

### Don't:
- **Don't** introduire une deuxième couleur d'accent.
- **Don't** utiliser d'ombres noires lourdes : la profondeur passe par la lueur orange et les dégradés.
- **Don't** mettre du texte noir ou très foncé sur le fond sombre (le mot « EXPRESS » du logo y est presque invisible).
