// ==UserScript==
// @name           SidePeek — tailles libres
// @version        0.1.0
// @description    Relais des préférences (largeurs, transition) vers les variables CSS — valeurs libres, changement live
// @author         Impre
// @include        main
// ==/UserScript==

(function () {
  'use strict';

  if (window.__sidePeekPatched) return;
  window.__sidePeekPatched = true;

  // PREFS (pattern NavBtn) : MCM écrit des STRING — parseInt ici, avec
  // fallback getIntPref pour une pref int posée à la main en about:config.
  const int = (name, fallback) => {
    try {
      if (!Services.prefs.prefHasUserValue(name)) return fallback;
      const n = parseInt(Services.prefs.getStringPref(name, ''), 10);
      if (Number.isFinite(n)) return n;
      return Services.prefs.getIntPref(name);
    } catch (e) {
      return fallback;
    }
  };

  // Pose les variables sur :root — le CSS du mod les consomme telles quelles.
  // L'inline style gagne sur les défauts de chrome.css (pas de !important dessus).
  function apply() {
    const root = document.documentElement;
    root.style.setProperty('--peek-collapsed', int('sidepeek.collapsed-width', 56) + 'px');
    root.style.setProperty('--peek-expanded', int('sidepeek.expanded-width', 212) + 'px');
    root.style.setProperty('--peek-transition', int('sidepeek.transition-duration', 250) + 'ms');
    root.style.setProperty('--peek-essential-size', int('sidepeek.essential-size', 40) + 'px');
  }

  // Changement live depuis l'UI Sine — observer de pref = event-driven
  const obs = { observe: () => apply() };
  ['sidepeek.collapsed-width', 'sidepeek.expanded-width', 'sidepeek.transition-duration', 'sidepeek.essential-size']
    .forEach(name => Services.prefs.addObserver(name, obs));

  apply();
  console.log('[SidePeek] tailles appliquées');
})();
