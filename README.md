# SidePeek

Sidebar fine au repos qui s'étend au survol — **les tabs ne bougent jamais**.

## Le concept

Un mix entre « Barres d'outils multiples » et « Barre d'outils réduite », en mieux :

- Au repos, la sidebar est rognée à **56px** (icônes visibles).
- Au survol, elle s'étend à **212px** — le clip se lève.
- Le layout interne des tabs est **figé** à la largeur étendue (`--zen-sidebar-width`) : aucun redimensionnement, aucun repositionnement, jamais.
- La sidebar reste **intégrée au flux** (pas de flottant) : le web se pousse naturellement au survol.

## Compatibilité

Conçu pour le combo : **Barres d'outils multiples** + mode compact **« Masquer la barre d'outils »**.

Le mod se coupe proprement (et en live) si tu quittes ce contexte : autre layout, sidebar réduite native, ou compact « masquer la sidebar ».

## Installation

Console Zen (`Ctrl+Shift+J`) :

```js
const m = ChromeUtils.importESModule('chrome://userscripts/content/core/manager.sys.mjs');
m.default.installMod('Impre-dev/SidePeek', null, true)
```

## Préférences

| Pref | Défaut | Valeurs |
|---|---|---|
| Largeur au repos | 56px | 48 / 56 / 64 |
| Largeur au survol | 212px | 180 / 200 / 212 / 240 / 260 / 300 |
| Durée de transition | 250ms | 150 / 250 / 400 |

## Limites connues

- Le **resize natif** (drag du bord de sidebar) est neutralisé : Zen écrit la largeur en inline style, que le mod écrase. Les largeurs se règlent via les préférences du mod.
