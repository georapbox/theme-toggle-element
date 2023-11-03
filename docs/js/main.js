import '../lib/browser-window.js';
const isLocalhost = window.location.href.includes('127.0.0.1') || window.location.href.includes('localhost');
const componentUrl = isLocalhost ? '../../dist/theme-toggle.js' : '../lib/theme-toggle.js';

import(componentUrl).then((module) => {
  module.ThemeToggle.defineCustomElement();

  document.addEventListener('theme-change', evt => {
    console.log('theme-change ->', evt.detail);
  });
});
