# Roadmap — SidePeek

> Sidebar fine au repos, étendue au hover — les tabs ne bougent jamais.
> Combo cible : Barres d'outils multiples + compact « masquer la barre d'outils ».

## File priorisée

- ⭐ **Fix 1 — Essentiels : cellule carrée à largeur FIXE** (~40px, indépendante de la sidebar — pas du % du conteneur) + icône centrée dans le bouton. Aujourd'hui : cellules en % (`minmax(23.7%, …)`) → sidebar 500 = boutons méga
- **Fix 3 — Extensions épinglées en bas** (`#zen-sidebar-foot-buttons`) : au repos le 1er item est rogné hors champ — suspect : conteneur dimensionné sur la largeur expanded + centré dedans → ancrer sur la largeur repos
- **Fix 2 — Paddings asymétriques** : ✅ cause racine trouvée (margin-right du #navigator-toolbox) — fixé dans **MyCss** par Impre (`margin-right: 2px`). Reste à l'œil : workspace indicator, top buttons si besoin
- Peaufinage en attente : rendu du clip à 56px (workspace indicator, boutons top), courbe de transition, délai anti-hover-accidentel (conditionnel)

## Leçons de plateforme

- La largeur de `#navigator-toolbox` vit en **inline style** (`width` + `--zen-sidebar-width` + `max-width: 500px` + `--zen-toolbox-min-width: 152px` — `ZenCustomizableUI.sys.mjs`) → tout override CSS exige `!important`.
- `--zen-sidebar-width` pilote la **géométrie interne des tabs** (essentiels en min/max-width `!important` — `vertical-tabs.css`) → la figer = tabs immobiles pendant que le conteneur respire.
- Le bloc compact qui rend la sidebar flottante est scopé `@media -moz-pref('hide-tabbar') or -moz-pref('use-single-toolbar')` → **inactif** en multiples + hide-toolbar : aucun conflit avec le combo cible.
- Le resizer natif reste actif mais écrit dans l'inline, écrasé par le mod → resize neutralisé visuellement, sans crash.

## Livré & poussé

| Version | Quoi | Validation | Hash |
|---|---|---|---|
| v0.1.0 | Squelette (push initial d'install — signalement protocolaire) | ✅ constaté : fonctionne (essentiels wrappent → fix) | `0112a59` |
| v0.1.1 | Fix anti-wrap essentiels : grille figée à la largeur étendue | ✅ constaté Impre 24/10 (« GG ») | `b3d77e3` |
| v0.2.0 | Tailles libres (champs Sine) — uc script relais prefs → vars CSS, observer live | ✅ constaté Impre 24/10 (« gg ») | `f1167a7` |
