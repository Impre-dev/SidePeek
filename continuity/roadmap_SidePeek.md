# Roadmap — SidePeek

> Sidebar fine au repos, étendue au hover — les tabs ne bougent jamais.
> Combo cible : Barres d'outils multiples + compact « masquer la barre d'outils ».

## File priorisée

- ⭐ **v0.1.0** : squelette écrit → push GitHub → install console → premier constat live d'Impre
- Réglages à l'œil post-constat : rendu du clip à 56px (workspace indicator, boutons top), durée de transition
- v0.2 (conditionnel) : délai d'ouverture si hovers accidentels constatés

## Leçons de plateforme

- La largeur de `#navigator-toolbox` vit en **inline style** (`width` + `--zen-sidebar-width` + `max-width: 500px` + `--zen-toolbox-min-width: 152px` — `ZenCustomizableUI.sys.mjs`) → tout override CSS exige `!important`.
- `--zen-sidebar-width` pilote la **géométrie interne des tabs** (essentiels en min/max-width `!important` — `vertical-tabs.css`) → la figer = tabs immobiles pendant que le conteneur respire.
- Le bloc compact qui rend la sidebar flottante est scopé `@media -moz-pref('hide-tabbar') or -moz-pref('use-single-toolbar')` → **inactif** en multiples + hide-toolbar : aucun conflit avec le combo cible.
- Le resizer natif reste actif mais écrit dans l'inline, écrasé par le mod → resize neutralisé visuellement, sans crash.

## Livré & poussé

| Version | Quoi | Validation | Hash |
|---|---|---|---|
