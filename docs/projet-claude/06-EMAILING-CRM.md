# 06 · Emailing, CRM et base contacts

> Tout ce qui touche aux campagnes, aux listes et à la délivrabilité.
> Mis à jour le 14 octobre 2026.

## 1. Qui fait quoi
| Outil | Rôle | Compte |
|---|---|---|
| **Brevo** | Emails transactionnels du site (formulaires vers JB) + collecte des leads du site dans les listes #5 à #9 | compte ALMA, clé API en variable Railway |
| **Sellsy** (moteur d'envoi message-business) | Campagnes d'emailing vers la base contacts d'ALMA | compte Sellsy d'ALMA, environ 6 000 crédits d'envoi |
| **LinkedIn** | Posts depuis le profil de JB, repartagés par la page ALMA | JB publie lui-même |

Les leads collectés par le site arrivent dans Brevo, pas dans Sellsy. Une **séquence automatique Brevo** relance les leads catalogue à J+3 et J+10 (mise en place selon Lucas, à vérifier : automatisation active et emails effectivement envoyés). Avant chaque campagne, exporter les nouvelles listes Brevo et les importer dans Sellsy `[À CONFIRMER : process et fréquence de synchronisation]`.

## 2. Délivrabilité et DNS (domaine alma-machines-outils.fr, DNS chez OVH)
- **Domaine d'envoi Sellsy authentifié** (statut « Authentifié » dans Sellsy) avec sous-domaine de tracking.
- **SPF** : un seul enregistrement TXT `v=spf1` qui regroupe tous les émetteurs (OVH, Brevo, Sellsy). Jamais deux enregistrements SPF.
- **DKIM** : enregistrements CNAME fournis par Sellsy et par Brevo.
- **DMARC** : publié sur `_dmarc`. Politique en vigueur à relire dans OVH avant de la durcir.
- Les valeurs exactes sont dans l'interface Sellsy (domaines) et dans la zone DNS OVH. Ne pas les recopier de mémoire.
- **Régulation d'envoi** : 500 emails par heure dans Sellsy.
- Seuils d'alerte : taux de rebond dur au-dessus de 5 %, plainte au-dessus de 0,1 %. Au-delà, on nettoie avant le prochain envoi.

## 3. Hygiène de la base
- **356 adresses invalides** (rebonds durs de la campagne 01) : à retirer définitivement et à placer en liste repoussoir. **Statut : à faire.**
- **91 boîtes temporairement indisponibles** (rebonds doux) : on garde, on retire après 3 rebonds consécutifs.
- **5 désabonnés** : exclus de toutes les campagnes (géré par Sellsy).
- Ne jamais réimporter une ancienne extraction sans la croiser avec la liste repoussoir.

## 4. Règles HTML pour Sellsy (issues des corrections de septembre)
1. Tables imbriquées `role="presentation"`, largeur 620px, CSS inline, VML pour les boutons Outlook.
2. **Mode clair forcé** : `<meta name="color-scheme" content="light">` et `supported-color-schemes` = `light`. **Pas de bloc `@media (prefers-color-scheme: dark)`** (il provoquait l'inversion des couleurs sur mobile).
3. Boutons pleine largeur sur mobile avec `box-sizing: border-box` (sinon débordement à droite).
4. `word-break: break-word` sur les emails et URLs longs (sinon débordement mobile).
5. **Images** : PNG ou JPG, hébergées dans les fichiers Sellsy, appelées en **URL absolue** (`https://services.message-business.com/v3/Front/contents/3/618/70618/Files/<fichier>`). Jamais de chemin relatif `assets/...`. Images compressées (moins de 200 Ko chacune).
6. **Désinscription** : variable de désinscription **Sellsy**, insérée via l'éditeur Sellsy. Le tag Brevo `{{ unsubscribe }}` ne fonctionne pas dans Sellsy. Dans les fichiers de travail, le lien porte le repère `DESINSCRIPTION_SELLSY_A_REMPLACER`.
7. Poids HTML sous 100 Ko (Gmail tronque au-delà de 102 Ko).
8. Toujours envoyer un test vers Gmail mobile, Outlook et Apple Mail avant validation.

Fichier de référence validé : `ALMA-emailing-catalogue-SELLSY-corrige.html` (campagne 01).

## 5. Expéditeur et objets
- La campagne 01 est partie avec l'expéditeur « ALMA MACHINES-OUTILS ». Recommandation pour la suite : un expéditeur humain (« Jean-Baptiste · ALMA » ou « Jean-Baptiste Borron ») et une adresse de réponse lue par JB.
- Objets éditoriaux (voir `02` §4). Tester 2 objets sur 10 à 20 % de la base quand Sellsy le permet.

## 6. Campagne 01 · Catalogue 2026 (envoyée le mardi 16 septembre 2026 au matin)
| Indicateur | Valeur | Base |
|---|---|---|
| Contacts sélectionnés | 2 062 | |
| Emails envoyés | 1 961 | |
| Emails délivrés | 1 579 | 77,9 % des envois |
| Lecteurs uniques | 334 | 21,2 % des délivrés |
| Ouvertures cumulées | 923 | 2,8 par lecteur |
| Visiteurs sur le site (cliqueurs uniques) | 212 | 13,4 % des délivrés |
| Clics au total | 1 577 | 7,4 par visiteur |
| Réactivité (cliqueurs / lecteurs) | 63,5 % | |
| Adresses invalides | 356 | 18 % des envois |
| Rebonds doux | 91 | |
| Désabonnements | 5 | |
| Plaintes | 0 | |
| Score de réputation expéditeur | 90 / 100 | |
| Non-ouvreurs | 1 245 | |

Lecture : ouverture dans la norme B2B industrielle (repères habituels 20 à 25 %), clic très au-dessus (repères habituels 2 à 3 %). Le levier de progression est l'objet (ouverture), pas le contenu. Point faible : la qualité de la base.
Rapport livré : `ALMA-rapport-campagne-catalogue-2026.pdf`. Les chiffres pouvaient encore évoluer à la date du rapport : reprendre les chiffres à jour dans Sellsy avant toute nouvelle communication.

## 7. Segments à exploiter
| Segment | Taille | Action | Trame |
|---|---|---|---|
| Cliqueurs campagne 01 | 212 | Relance personnelle signée JB, par vagues, priorité aux sociétés cibles | `03` T9 |
| Lecteurs non cliqueurs | 122 | Inclure en priorité dans la campagne 02 | |
| Non-ouvreurs | 1 245 | Renvoi du même contenu avec un autre objet, 7 à 10 jours après | |
| Leads du site (Brevo #5 à #9) | variable | Traités par JB à réception + intégrés à la base Sellsy | |

Les 2 demandes de devis reçues via le site début octobre sont à suivre par JB `[À CONFIRMER : source exacte (formulaire) et suite donnée]`.

## 8. Calendrier des campagnes
| # | Sujet | Angle | Statut au 14/10 |
|---|---|---|---|
| 01 | Catalogue 2026 | Annonce du programme de vente + nouveau site | Envoyée le 16/09 |
| 02 | CMZ | « Et si on achetait des machines construites à côté de chez nous ? » Fabrication européenne, faits vérifiables sur l'outil industriel CMZ | Prompt prêt (annexe), HTML Sellsy à produire et valider |
| 03 | HACO · EASYBEND | « Et si une pièce correctement pliée commençait par un dessin ? » Programmation des presses plieuses, coût des pliages d'essai | Prompt prêt (annexe), HTML à produire |
| 04 | Arcane Group | Un réseau indépendant pour la proximité et la technicité | Prompt prêt (annexe), HTML à produire |

Rythme : une campagne par semaine, le mardi vers 7h30, en alternance avec les posts LinkedIn. Purge des 356 adresses obligatoire avant la campagne 02.

## 9. Prospection sortante ciblée (vendue en septembre)
- Cible : industriels de PACA et du Languedoc, segmentés par **code NAF** et par **gamme** (usinage ou chaudronnerie).
- Ce n'est pas de l'emailing de masse : cold emails courts, signés JB, envoyés depuis sa messagerie ou un outil de séquence, selon la doctrine de `02` §2.4.
- Livrables attendus : fichier de prospects (raison sociale, NAF, ville, dirigeant, email vérifié, gamme), séquence 3 emails (J0, J+3, J+7) par gamme, suivi des réponses.
- Ne jamais importer ces prospects dans la base Sellsy de campagne sans consentement.

## 10. KPI à suivre à chaque campagne
Délivrés, taux d'ouverture (sur délivrés), taux de clic (sur délivrés), réactivité (clics / ouvertures), rebonds durs, désabonnements, plaintes, demandes entrantes générées (formulaires et appels dans les 7 jours, à demander à JB).
