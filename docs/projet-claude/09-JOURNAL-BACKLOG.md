# 09 · Journal et backlog

> Le seul fichier qui change toutes les semaines. C'est l'état courant du compte ALMA.
> Dernière mise à jour : **14 octobre 2026**.
> Règle : à la fin de chaque production, Claude propose les lignes à ajouter ici ; l'utilisateur les colle et remplace le fichier dans le projet.

## 1. Backlog priorisé

Objectif d'octobre : solder les chantiers vendus sur la facture de septembre (voir `08` §3), puis émettre la facture d'octobre.

### P0 · Cette semaine
| # | Action | Qui | Statut |
|---|---|---|---|
| 1 | Déployer les **catalogues usinage et chaudronnerie** (livraison `alma-catalogues-2026-gammes.zip`, build validé) puis les envoyer à JB | Lucas | livraison prête, à pousser |
| 2 | Purger les **356 adresses invalides** dans Sellsy (liste repoussoir) | Lucas | à faire |
| 3 | **Backlinks constructeurs** CMZ, HACO, Spaleck, Kaltenbach : un mail HTML par marque, prêt à envoyer par JB (`03` T10) + tableau de suivi | Lucas prépare, JB envoie | à faire |
| 4 | Récupérer les **projets clients** envoyés par JB (nom, région, machine) pour la rubrique Installations récentes | Lucas | sur l'ancien PC, à retrouver |

### P1 · Octobre
| # | Action | Qui | Statut |
|---|---|---|---|
| 5 | **Rubrique « Installations récentes »** : module `/installations` + 4 à 5 pages (une par machine installée) + un post LinkedIn par installation (`03` T11) | Lucas / Ayoub | en attente des données JB |
| 6 | **Campagne 02 CMZ** via Sellsy (prompt A2), puis **03 HACO** et **04 Arcane**, une par semaine, le mardi vers 7h30 | Lucas | prompts prêts, HTML à produire |
| 7 | **Relancer les 212 cliqueurs** : export Sellsy, emails 1 à 1 signés JB par vagues (`03` T9) | Lucas prépare, JB envoie | à faire |
| 8 | **Fiche Google Business** : optimisation + campagne de collecte d'avis (mail et SMS type pour les clients de JB) | Lucas | à faire |
| 9 | **Prospection sortante ciblée** : fichier d'industriels PACA et Languedoc par code NAF et par gamme, séquence de cold emails | Lucas | à faire |
| 10 | Vérifier dans Brevo que la **séquence post-téléchargement J+3 / J+10** est active et part bien | Lucas | fait selon Lucas, à vérifier |
| 11 | Renvoi de la campagne 01 aux **1 245 non-ouvreurs** avec un autre objet | Lucas | à faire |

### Récurrent chaque mois (contrat)
1 page prioritaire + 1 contenu d'appui · 1 backlink · 1 post Google Business + routine avis · 4 posts LinkedIn (2 JB, 2 page) · reporting + call de 30 min. Process LinkedIn : envoyer à JB chaque post prêt à copier, avec un seul visuel et le créneau.

### P2 · Site et contenus
| # | Action | Qui | Statut |
|---|---|---|---|
| 12 | Supprimer la gamme vide **tôlerie** avec redirection 301 vers `/gamme/chaudronnerie` (touche la grille de l'accueil et la page Marques). Menuiserie conservée : ALMA la propose « sur demande » | Ayoub | à faire |
| 13 | Ajouter au site les marques du catalogue absentes (**Kent, Kasto, Garboli, Zopf, Thoman**) | Ayoub, données JB | en attente des données |
| 14 | Remplacer aussi le catalogue général du site (version WeasyPrint de 22 pages) par la version finale de 10 pages ? | décision Lucas / JB | à trancher |
| 15 | Obtenir une **photo HD de JB** | JB | à demander |
| 16 | Clarifier la mention d'origine de **Spaleck** | JB | à demander |

## 2. Questions ouvertes pour JB (au call mensuel, questions fermées)
- Les 2 demandes de devis d'octobre : devis envoyé oui / non ? signé oui / non ?
- Les 4 à 5 installations à mettre en avant : accord des clients pour être cités, photos disponibles ?
- Expéditeur humain pour les campagnes (« Jean-Baptiste · ALMA ») : d'accord ?
- Contacts chez CMZ, HACO, Spaleck et Kaltenbach pour les backlinks ?
- Liste de clients à solliciter pour les avis Google ?
- Données des marques Kent, Kasto, Garboli, Zopf, Thoman ? Photo HD récente ? Origine à afficher pour Spaleck ?

## 3. Journal (du plus récent au plus ancien)
- **15/10/2026 (v2 installations)** · Pages installations transformées en landing pages : bouton « Être rappelé » dès le haut de page, formulaire « projet similaire » après la section 02 (passe par `/api/contact`, catégorie « Projet similaire · [installation] », email JB + BCC Lucas + liste Brevo #6, événement GA4 `generate_lead`), barre de rappel fixe en bas d'écran après la section 02, section 03 renommée « Ce que ça change pour vous », fonds sombres alignés sur le gris du footer, menu déroulant « Installations récentes » dans le footer. Railway ne déployait plus depuis mi-septembre (application GitHub de Railway sans accès au repo) : corrigé.
- **15/10/2026 (suite)** · Installations 2 à 5 intégrées : Petras (Pourrières, 83, Hartford LG1000, angle SAV Arcane / Ernault), Études et Réalisation Industrielle (Vallauris, 06, rectifieuse GER SRA-40/20 neuve plutôt qu'un rétrofit), découpe laser HACO (Marseille, nouveau bâtiment, client non nommé), LASIT CompactMark G9 (réception usine en Italie, client non nommé). Thoman (client Régis, 83) en attente d'infos.
- **15/10/2026** · Module « Installations récentes » construit (`/installations` + `/installations/[slug]`, données dans `src/data/installations.js`, lien footer, sitemap). Installation 1/5 : **Technidrill, Carros (06)**, 3 tours CNC CMZ choisis ensemble + reprise d'une machine robotisée (2 photos). Livraison groupée prévue à la fin (catalogues + installations + mails constructeurs).
- **14/10/2026** · Facture de septembre (F2600022) réglée ; octobre volontairement non émise tant que les chantiers de septembre ne sont pas avancés. Catalogues usinage (8 p.) et chaudronnerie (6 p.) reproduits et intégrés au site (livraison prête, build validé). Brochures et lead-gate passés sur `submitForm`. 3 fiches machines réécrites (vocabulaire d'occasion retiré). Photo du hero confirmée dans le repo. Création du projet Claude ALMA.
- **06/10/2026** · 2 demandes de devis reçues via le site. JB a publié les posts LinkedIn, mais en regroupant les visuels orange dans un seul post avec un texte réduit.
- **16/09/2026** · Campagne 01 « Catalogue 2026 » envoyée via Sellsy : 1 579 délivrés, 21,2 % d'ouverture, 13,4 % de clic, 212 cliqueurs, 356 adresses invalides, 0 plainte. Rapport PDF + mail d'accompagnement livrés.
- **Septembre 2026** · Configuration Sellsy : domaine d'envoi authentifié, SPF unique fusionné, DKIM, DMARC, sous-domaine de tracking (DNS OVH). HTML de l'emailing corrigé pour Sellsy (mode clair forcé, débordements mobiles, images en URL absolue, désinscription Sellsy).
- **Fin août / septembre 2026** · Hero d'accueil : vidéo remplacée par une photo (déploiement à vérifier).
- **Août 2026** · Emailing catalogue 2026 (design via prompt pour IA externe), 5 mockups du site en 2 séries, 5 posts LinkedIn + PDF, prompts des emailings CMZ, HACO et Arcane. Pack de validation envoyé à JB avec la facture d'août (payée).
- **23/07/2026** · Footer (4 icônes sociales, mention Industrial Decision), curseur custom crosshair orange, 9 logos HD (CMZ, RoboJob, Kaltenbach en SVG), logo Geminis mis à jour.
- **Mi-juillet 2026** · Correction critique des formulaires (proxy `/api`, double `/api` Occasion, toast d'erreur au lieu du `mailto`). Listes Brevo séparées #5 à #9, attributs SOCIETE / TELEPHONE / SOURCE, BCC Lucas. Domaine authentifié dans Brevo, restriction d'IP désactivée.
- **Juillet 2026** · Lead-gate sur les téléchargements de catalogues, endpoint `/api/catalogue-lead`.
- **Juin / juillet 2026** · Module Services (hub + 4 pages), page Ernault Services, header et footer.
- **Juin 2026** · Catalogues téléchargeables (24 marques + 3 plaquettes), catalogue et article Spaleck, filtres de gamme rétractables, carte Arcane Group.
- **Mars / avril 2026** · Migration CRA vers Next.js 15 SSR. SEO de 8 à environ 72/100.
