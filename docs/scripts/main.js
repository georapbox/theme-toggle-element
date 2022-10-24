const isLocalhost = window.location.href.includes('127.0.0.1') || window.location.href.includes('localhost');
const componentUrl = isLocalhost ? '../../src/theme-toggle.js' : 'https://unpkg.com/@georapbox/theme-toggle-element/dist/theme-toggle.min.js';

import(componentUrl).then(res => {
  const { ThemeToggle } = res;

  document.addEventListener('theme-toggle:theme-change', evt => {
    console.log('theme-toggle:theme-change ->', evt.detail);
  });

  ThemeToggle.defineCustomElement();
});
