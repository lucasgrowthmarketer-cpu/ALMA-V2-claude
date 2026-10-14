# Mise en place du projet Claude « ALMA Machines-Outils »

> Pour toi, pas à déposer dans le projet.

## 1. Créer le projet (5 minutes)
1. Claude → Projets → Nouveau projet → nom : **ALMA Machines-Outils**. Description : « Tout ce qui concerne le client ALMA : site, emailings, LinkedIn, rapports, relation JB, facturation. »
2. Champ **Instructions** : coller le contenu de `00-INSTRUCTIONS-PROJET.md` (à partir du titre « 1. Ton rôle »).
3. **Connaissances** : déposer les 14 fichiers du kit (pas ce LISEZ-MOI) :
   - `00` à `09` (10 fichiers)
   - `annexes/A1` à `A4` (4 fichiers)
4. Ajouter tes documents (section 2).
5. Supprimer l'ancien `CONTEXTE-PROJET-ALMA.md` de tes habitudes : il est remplacé par `05-SITE-TECHNIQUE.md` (et le reste est réparti dans les autres fichiers).

## 2. Documents à ajouter de ton côté
Rien d'autre n'est obligatoire : le kit contient déjà le contenu de la facture de septembre, des catalogues et du rapport de campagne. Seulement si tu as de la place :
- la facture F2600022 (PDF), en référence ;
- le HTML Sellsy de référence (`ALMA-emailing-catalogue-SELLSY-corrige.html`).

**Ne pas déposer** : le zip du repo, les PDF des catalogues, les logos et photos. Tout ça vit dans GitHub.

## 3. La limite des 100 fichiers : GitHub devient l'archive
- **Le projet Claude** ne garde que les 14 fichiers .md du kit (texte léger, lu à chaque conversation).
- **Le repo GitHub `ALMA-V2-claude`** garde tout le reste : code, catalogues PDF, images, et une copie du kit dans `docs/projet-claude/` (incluse dans la livraison du 14/10). Le dossier `docs/` n'est pas servi par le site.
- **Pour me donner le code** : soit le zip du repo comme aujourd'hui, soit tu me demandes de connecter directement le repo GitHub à la conversation, et tu n'as plus rien à uploader.
- Les fichiers ponctuels (export Sellsy, photos d'installation) se joignent dans la conversation où on les traite, pas dans le projet.

## 4. Ce qu'il me manque encore
1. Les **projets clients** envoyés par JB (pour les 4 à 5 pages Installations récentes).
2. L'**export Sellsy** des 212 cliqueurs quand on attaque les relances.
3. Les **contacts** chez CMZ, HACO, Spaleck et Kaltenbach, si JB les a.

## 5. Entretien (2 minutes par semaine)
- À la fin de chaque production, Claude donne un bloc « À reporter dans le journal ». Tu le colles dans `09-JOURNAL-BACKLOG.md` et tu remplaces le fichier dans le projet.
- Si l'architecture du site change : mettre à jour `05`.
- Après chaque campagne : ajouter les résultats dans `06` §6.
- Une fois par mois (au moment de la facture) : relire `08` et `09`.

## 6. Exemples de demandes une fois le projet en place
- « Prépare la campagne 02 CMZ pour Sellsy. »
- « Écris les 10 premières relances de cliqueurs à partir de cet export. »
- « Mail à JB pour la facture d'octobre et le point sur les campagnes. »
- « Ajoute la marque Kasto au site » (avec le zip du repo joint).
- « On en est où ? Priorités de la semaine. »
