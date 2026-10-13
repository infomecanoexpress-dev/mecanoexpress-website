---
name: MecanoExpress — site public
description: Site graphite « futuriste sobre » à un seul accent (l’orange du logo), pour un service mobile de pneus et de mécanique à Montréal
colors:
  graphite-950: "#101215"
  graphite-900: "#121417"
  graphite-850: "#16191d"
  graphite-800: "#1c2025"
  graphite-700: "#262b31"
  ligne: "#2a2f36"
  ligne-forte: "#3a4048"
  ligne-contour: "#4b535c"
  encre: "#f4f5f7"
  encre-2: "#c9ced5"
  encre-3: "#a3abb5"
  accent: "#e0641c"
  accent-clair: "#f07a35"
  accent-fonce: "#d95c15"
  plaque: "#eceef1"
  grille: "rgba(255, 255, 255, 0.065)"
  trait-roue: "#48505a"
  trait-fin: "#343b43"
  cote: "#7d8691"
typography:
  display:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Sora, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
  body:
    fontFamily: "Sora, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Sora, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  lead:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(1.125rem, 1.7vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  data:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.06em"
  data-court:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  vif: "2px"
  precis: "4px"
spacing:
  section: "5rem"
  gutter: "1.25rem"
components:
  button-primary:
    backgroundColor: "linear-gradient(180deg, {colors.accent-clair}, {colors.accent-fonce})"
    textColor: "#111316"
    rounded: "{rounded.precis}"
    padding: "0 1.625rem"
    height: "3.5rem"
  button-outline:
    backgroundColor: "rgba(16, 18, 21, 0.7)"
    textColor: "{colors.encre}"
    rounded: "{rounded.precis}"
    padding: "0 1.625rem"
    height: "3.5rem"
  logo-plate:
    backgroundColor: "{colors.plaque}"
    rounded: "{rounded.vif}"
    padding: "0.375rem 0.625rem"
  panel:
    backgroundColor: "{colors.graphite-850}"
    rounded: "{rounded.precis}"
    padding: "1rem 1.25rem"
---

# Design System: MecanoExpress — site public

## Overview

**Creative North Star : « La fiche technique »**

Un site graphite, net comme un dessin de cotation d’atelier. Un seul orange, celui du logo, désigne ce qui compte : l’action principale, le mot « chez vous », une mesure. Le reste est fait de lignes fines, de grilles discrètes et de coins précis. Les données (téléphone, dates, tailles de pneus) sont écrites en monospace, comme sur une fiche ou un flanc de pneu. Futuriste mais sobre : crédible pour une entreprise de mécanique, jamais un jeu vidéo.

**Deux intensités :**
- **Premier écran de l’accueil : prononcé.** Grille marquée, bandeau de saison en haut, roue dessinée au trait (rappel du logo) avec le marquage 225/65R17 et ses cotes, légende « lire la taille sur le flanc ».
- **Tout le reste : moyen.** Grille fine ou fond uni, panneaux à filets, icônes au trait, monospace seulement pour les données.

**Key Characteristics :**
- Fonds graphite (#101215 à #1c2025), jamais de dégradé de fond ni de photo de banque d’images.
- Un seul accent vif : l’orange du logo (#e0641c), avec un dégradé et une lueur **seulement** sur le bouton d’action principal.
- Sora pour le texte, Azeret Mono pour les données.
- Filets de 1 px, coins de 2 px (premier écran, barre du haut) ou 4 px (reste du site).
- Contraste lisible au soleil sur un téléphone : texte courant à 11.7:1, texte discret à 7.9:1, texte des boutons orange à 5.3:1.

## Colors

Un graphite froid, traversé par un seul orange.

### Primary
- **Orange du logo** (#e0641c) : mots clés du titre, chiffres et états dans les données, filets d’accent, soulignement de la page active, focus.
- **Orange clair → orange foncé** (#f07a35 → #d95c15) : dégradé du bouton d’action principal, et lui seul.

### Neutral
- **Graphite 950** (#101215) : premier écran, barre du haut, pied de page.
- **Graphite 900** (#121417) : fond des pages.
- **Graphite 850 / 800** (#16191d / #1c2025) : panneaux et zones surélevées.
- **Lignes** (#2a2f36, #3a4048, #4b535c) : filets, séparateurs, contours de boutons.
- **Encre** (#f4f5f7) : titres et texte important.
- **Encre 2** (#c9ced5) : texte courant, liens de navigation.
- **Encre 3** (#a3abb5) : texte discret (jamais plus pâle).
- **Plaque** (#eceef1) : fond clair du logo d’origine.
- **Dessin de la roue** (premier écran seulement) : grille rgba(255, 255, 255, 0.065), traits #48505a et #343b43, cotes en tirets #7d8691. Couleurs de dessin, jamais pour du texte.

### Named Rules
**La règle du seul orange.** L’orange du logo est la seule couleur vive. Pas de deuxième accent, pas de néon, pas de dégradé violet-bleu.

**La règle de la lueur unique.** Dégradé et lueur colorée : seulement sur le bouton d’action principal (« Prendre RDV »). Nulle part ailleurs.

**La règle du soleil.** Aucun texte sous 4.5:1. Le texte discret ne descend pas sous Encre 3 (7.9:1 sur Graphite 900). Sur les boutons orange, le texte est graphite (#111316), jamais blanc (3.5:1 seulement).

## Typography

**Texte :** Sora (géométrique, nette), servie par `next/font`.
**Données :** Azeret Mono, servie par `next/font`.

**Character :** une géométrique précise pour tout le texte. La monospace ne sert qu’aux données et aux mesures : téléphone, dates, compte à rebours, tailles de pneus. Jamais aux titres ni aux liens.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 7vw, 5.75rem)`, interligne 0.98, -0.04em) : titre du premier écran. Un ou deux mots en orange, sans dégradé.
- **Headline** (700, `clamp(2rem, 4vw, 3rem)`, -0.03em) : titres de section, en encre.
- **Title** (600, 1.0625rem) : titres de lignes et de panneaux.
- **Lead** (400, `clamp(1.125rem, 1.7vw, 1.3125rem)`, interligne 1.5) : sous-titre du premier écran et des en-têtes de page.
- **Body** (400, 1.125rem, interligne 1.5) : texte courant, en Encre 2, 34 à 70 caractères par ligne.
- **Label** (600, 0.9375rem) : boutons et navigation.
- **Data** (Azeret Mono 500, 0.8125rem, majuscules, +0.06em) : bandeau de saison, légendes, cotes. Le téléphone en monospace dans les boutons.
- **Data court** (Azeret Mono 500, 0.75rem, +0.02em) : version téléphone du bandeau de saison. Jamais plus petit.

## Layout

Conteneur centré (jusqu’à 84rem au premier écran, `container` Tailwind ailleurs), marges de 1.25rem au téléphone. Sections empilées avec 5rem de marge verticale. Lecture de gauche à droite, titre aligné à gauche au premier écran. La barre du haut est collante. Au téléphone, les liens passent dans un menu.

Le premier écran tient en `min-height: calc(100svh - 4rem)`. Le titre et les deux boutons y sont visibles au téléphone (375 × 812) comme à l’ordinateur (1440 × 900).

## Elevation & Depth

La profondeur vient des filets et des fonds graphite étagés (950 → 900 → 850 → 800), pas des ombres. Seule exception : la lueur décalée (offset vertical, flou doux) sous le bouton d’action principal.

### Named Rules
**La règle du filet.** Ce qui doit se détacher reçoit un filet de 1 px ou un fond un cran plus clair, pas une ombre portée.

## Shapes

- **Coins vifs (2 px) :** premier écran, barre du haut, plaque du logo.
- **Coins précis (4 px) :** boutons, panneaux et champs du reste du site.
- Jamais de pilule ni de coins de 1rem.
- Repères d’angle (petits L de 10 px en orange) sur les panneaux de type « fiche » : facultatif, avec retenue.

## Components

### Buttons
- **Principal** (`.btn .btn-primaire`) : dégradé orange clair → foncé, texte graphite, lueur décalée, hauteur 3.5rem (2.75rem pour `.btn-petit`). Survol (souris seulement) : un peu plus lumineux. Appui : `scale(0.97)` en 120 ms.
- **Contour** (`.btn .btn-contour`) : fond graphite translucide, filet #4b535c, texte encre. Survol : filet orange.
- **Focus :** anneau orange de 2 px, décalé de 3 px.

### Logo
Le logo d’origine, orange et noir (`public/logo-mecanoexpress-original.png`), est **toujours posé sur la plaque claire** (`.logo-plaque`). Le noir du logo disparaîtrait directement sur le graphite. La version claire (EXPRESS en blanc) n’est plus utilisée sur le site.

### Navigation
Barre graphite 950, liseré orange de 2 px en haut, filet bas. Liens en Encre 2 ; la page active est en encre, soulignée d’un filet orange. Bouton « Prendre RDV maintenant » à droite. Au téléphone : plaque du logo à gauche, bouton menu de 44 px à droite (`aria-expanded`, `aria-label`).

### Premier écran (accueil)
- Bandeau de saison en Azeret Mono. Il se calcule **dans le navigateur** (fuseau de Montréal), jamais au build, avec un message vrai pour chaque période : compte à rebours du 1er septembre au 30 novembre, « en vigueur » du 1er décembre au 15 mars, « place aux pneus d’été » du 16 mars au 31 août. Au téléphone, une version courte tient sur une ligne.
- Roue dessinée au trait (SVG, un seul tracé pour les encoches). Elle se trace une fois par chargement, en 1.1 s. Avec « mouvement réduit », elle s’affiche directement.

### Panneaux (« fiche »)
Fond Graphite 850, filet #2c3238, coins de 4 px. En-tête facultatif en Azeret Mono majuscule. Lignes séparées par des filets, avec une icône au trait dans un carré à filet.

### Icons
Dessinées au trait, 1.5 px, viewBox 24 (`app/icons.js`). Jamais d’emoji ni de glyphe Unicode comme icône. Les logos des réseaux sociaux restent pleins, comme les marques les fournissent.

## Motion

Rapide et utile (méthode d’Emil Kowalski) :
- appui sur les boutons : 120 ms ;
- couleurs et filets : 150 à 200 ms ;
- tracé de la roue : une seule fois.

Rien ne bouge en boucle. Pas de fond animé. Avec `prefers-reduced-motion`, on garde les changements de couleur et on retire les déplacements et le tracé.

## Do's and Don'ts

### Do:
- **Do** garder l’orange du logo comme seul accent, et le dégradé et la lueur pour le seul bouton principal.
- **Do** poser le logo d’origine sur la plaque claire.
- **Do** écrire les données en Azeret Mono, et tout le reste en Sora.
- **Do** utiliser des filets de 1 px et des coins de 2 ou 4 px.
- **Do** n’utiliser que de vraies photos de l’entreprise. Sans photo, une illustration au trait ou rien.

### Don't:
- **Don't** utiliser de photo de banque d’images (Unsplash, Pexels…).
- **Don't** mettre du néon, des dégradés violet-bleu « style IA », des effets glitch ou une police sci-fi.
- **Don't** animer un fond, ni faire rebondir quoi que ce soit en boucle.
- **Don't** écrire en blanc sur l’orange, ni du texte sous 4.5:1.
- **Don't** utiliser de texte en dégradé, de pilules ou d’emojis comme icônes.
- **Don't** calculer une date ou un compte à rebours au build : la page est statique.
