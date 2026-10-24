# Session du 24/10

## État courant

SidePeek v0.2.7 — **stable et validé**. Le mod crée un 4e mode d'affichage Zen :
sidebar intégrée fine au repos (48-64px réglable) qui s'étend au survol (180-300px),
tabs immobiles (géométrie interne figée via --zen-sidebar-width), 11 prefs live en
4 sections UI. Combo cible : multiples + compact hide-toolbar.
**Push en attente** (~15 commits locaux, dernier GitHub = `b3d77e3`). Décision d'expédition à Impre.

## Journal

- [design] Brief validé par Impre : intégrée au flux, seule la width change, nom SidePeek
- [v0.1.0] `0112a59` squelette → constat : fonctionne, essentiels wrappent
- [leçon] Workflow : charger le skill sine-workflow AVANT toute manip de mod — rattrapé en régime v2 (repo dans l'install, atelier archivé)
- [v0.1.1] `b3d77e3` fix anti-wrap essentiels (grille figée) — validé
- [v0.2.0] `f1167a7` tailles libres : uc script relais prefs → vars CSS (pattern NavBtn)
- [v0.2.1→4] essentiels carrés fixes + foot flex-start + dossiers 2 lettres au repos + gaps/marges en prefs + UI regroupée en sections
- [fix2] Paddings asymétriques : cause = margin-right du #navigator-toolbox — d'abord fixé dans MyCss par Impre, puis migré au mod (repos uniquement, :not(:hover))
- [v0.2.5-6] `af5f56c` `cd0fa8c` marge groupe de dossiers (first/last-of-type, imbriqués exclus) + décalages verticaux liste/extensions (extensions = margin-bottom, levier devtool)
- [trace] Zen-Mods-Cascade.md créé (.md navigateur) : mécanique cascade + conflits réels + question « où vit chaque modif » en suspens
- [v0.2.7] navbar repliée compact 10px (gap top harmonisé) — piège du dépliage hover évité (:not sur zen-has-hover etc.) + fix scoping (navbar-wrapper ≠ descendant toolbox)
- [perf] Analyse : coût statique ≈ 0, seul pic = reflow transition width (borné, assumé)

## En suspens (prochaine session)

- Push (~15 commits) — décision Impre
- Nettoyage règles battues : Custom.css foot buttons (center/gap) + Utopia §6a column-gap — cf. Zen-Mods-Cascade.md
- Options peaufinage : courbe de transition fancy, délai anti-hover-accidentel, workspace indicator au repos
