# Devarenne Plomberie Chauffage — Site V2

Site vitrine V2, original et mobile-first, pour Devarenne Plomberie Chauffage
(dépannage sanitaire à Montpellier et alentours). Conçu pour la clarté, la confiance
et la conversion (appel, devis).

## Règles du projet

Ce projet suit les règles définies dans [`CLAUDE.md`](./CLAUDE.md) et le brief
[`briefs/plombiermontpellier34-v2-brief.md`](./briefs/plombiermontpellier34-v2-brief.md) :

- Contenu et interface entièrement originaux (aucune reprise du site source analysé).
- Aucune donnée métier inventée (tarifs, délais, certifications, garanties,
  disponibilités, avis, coordonnées, zones) : tout ce qui n'est pas confirmé est
  affiché littéralement « À confirmer ».
- Conception mobile-first, adaptée ensuite aux écrans larges.

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [ESLint](https://eslint.org) (config Next.js)

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

Autres commandes utiles :

```bash
npm run build   # build de production
npm run lint    # vérification ESLint
```

## Arborescence du site

```
/                        Accueil
/urgences                Urgence plomberie
/depannage                Vue d'ensemble des services de dépannage
/depannage/[slug]         Débouchage, hydrocurage, inspection caméra, recherche de fuite
/installation              Installation (robinetterie, sanitaires, chauffe-eau)
/entretien                 Entretien préventif
/zone-intervention          Détail par commune desservie
/conseils                  Index des conseils pratiques
/conseils/[slug]            Articles de conseils (SEO local)
/devis                     Formulaire de demande de devis
/contact                   Coordonnées et zone d'intervention
/mentions-legales          Mentions légales
/confidentialite            RGPD / confidentialité
```

## Organisation du code

- `src/lib/content/` — modèle de données et contenu (business, zones, services, FAQ,
  conseils, navigation). Source unique de vérité pour le téléphone, les tarifs, les
  délais et les zones.
- `src/components/layout/` — Header, Footer, navigation mobile, barre d'appel fixe.
- `src/components/marketing/` — composants métier réutilisables (fiches service,
  déroulé d'intervention, facteurs de prix, FAQ en accordéon, zones, avis, etc.).
- `src/components/ui/` — primitives d'interface (CTA, titres de section, valeurs à
  confirmer).
- `src/components/seo/` — balisage schema.org (`LocalBusiness`).

## Informations à confirmer

Ces données métier ne sont pas encore confirmées et s'affichent comme telles sur le
site (composant `ConfirmableValue`) :

- E-mail
- Certifications / qualifications
- Garanties (nature, durée, conditions)
- Assurance (couverture RC pro / décennale réellement souscrite)
- Horaires et disponibilité (24/7, jours fériés) — les annuaires publics consultés
  se contredisent, aucune source ne peut être considérée comme fiable
- Politique de devis (gratuit ou payant, conditions)
- Mentions RGPD (consentement, durée de conservation)
- Source d'avis clients à connecter (le composant `ReviewsSection` reste désactivé
  tant qu'aucune source n'est branchée)

Sont confirmés : le téléphone, le tarif de départ (100 €, commun aux services de
dépannage), les délais (urgence ≤ 2h, standard ≤ 3 jours) et les zones d'intervention
(Montpellier, Carnon, Palavas-les-Flots, La Grande-Motte).

Sont également confirmés, via la fiche d'établissement publique (Google Maps) et le
registre public des entreprises (SIRENE) — croisés sur plusieurs sources
indépendantes : le nom commercial (« Devarenne Plomberie Chauffage »), l'exploitant
(Emilien Devarenne), la forme juridique (entreprise individuelle), le SIRET
(538 207 523 00035) et l'adresse du siège (6 Rue des Consuls, 34970 Lattes).

**Point à vérifier avec le client :** le siège est à Lattes, commune qui ne figure pas
dans la liste des zones desservies actuelle. Les annuaires publics affichent aussi des
numéros de téléphone différents du numéro déjà confirmé dans le projet (dont un numéro
explicitement identifié comme une ligne de mise en relation tierce, pas la ligne
directe) — le numéro du projet n'a pas été modifié tant que ce n'est pas tranché.

Le nom de domaine réel doit aussi remplacer le placeholder `https://example.com`
utilisé dans `src/app/sitemap.ts` et `src/app/robots.ts`.
