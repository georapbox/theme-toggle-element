const isLocalhost = window.location.href.includes('127.0.0.1') || window.location.href.includes('localhost');
const componentUrl = isLocalhost ? '../../dist/theme-toggle-defined.js' : '../lib/theme-toggle-defined.js';
const consoleEl = document.getElementById('console');

import(componentUrl).then(() => {
  document.addEventListener('theme-toggle:change', evt => {
    console.log('theme-toggle:change ->', evt.detail);
    consoleEl.innerHTML = `theme-toggle:change -> ${JSON.stringify(evt.detail)}`;
  });
});
