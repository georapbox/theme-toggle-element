import '../lib/browser-window.js';
const isLocalhost = window.location.href.includes('127.0.0.1') || window.location.href.includes('localhost');
const componentUrl = isLocalhost ? '../../dist/theme-toggle.js' : '../lib/theme-toggle.js';

import(componentUrl).then((module) => {
  module.ThemeToggle.defineCustomElement();

  document.querySelectorAll('theme-toggle').forEach(el => {
    el.setAttribute('storage-key', window.__THEME_TOGGLE_DEMO_STORAGE_KEY__);
  });

  document.addEventListener('tt-theme-change', evt => {
    console.log('tt-theme-change ->', evt.detail);

    if (evt.target.getAttribute('id') === 'theme-toggle-6') {
      document.getElementById('event-placeholder').textContent = JSON.stringify(evt.detail);
    }
  });
});
