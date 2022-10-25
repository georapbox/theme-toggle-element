const isLocalhost = window.location.href.includes('127.0.0.1') || window.location.href.includes('localhost');
const componentUrl = isLocalhost ? '../../src/theme-toggle.js' : 'https://unpkg.com/@georapbox/theme-toggle-element/dist/theme-toggle.min.js';

const htmlSrcEl = document.getElementById('html-source');

const sourceTemplate = (slot = '') => `&lt;theme-toggle&gt;${slot}&lt;/theme-toggle&gt;`;

htmlSrcEl.innerHTML = sourceTemplate();

import(componentUrl).then(res => {
  const { ThemeToggle } = res;
  const wc = document.querySelector('theme-toggle');

  document.addEventListener('theme-toggle:theme-change', evt => {
    console.log('theme-toggle:theme-change ->', evt.detail);
  });

  ThemeToggle.defineCustomElement();

  document.querySelectorAll('input[type="radio"]').forEach(el => {
    el.addEventListener('change', evt => {
      const value = evt.target.value;
      let slotTemplate = '';

      if (value === 'icon') {
        slotTemplate = `\n  &lt;span slot="text-light" class="visually-hidden"&gt;Light theme&lt;/span&gt;\n  &lt;span slot="text-dark" class="visually-hidden"&gt;Dark theme&lt;/span&gt;\n`;

        wc.innerHTML = `
          <span slot="text-light" class="visually-hidden">Light theme</span>
          <span slot="text-dark" class="visually-hidden">Dark theme</span>
        `;
      }

      if (value === 'text') {
        slotTemplate = `\n  &lt;span slot="icon-light" class="visually-hidden"&gt;&lt;/span&gt;\n  &lt;span slot="icon-dark" class="visually-hidden"&gt;&lt;/span&gt;\n`;

        wc.innerHTML = `
          <span slot="icon-light" class="visually-hidden"></span>
          <span slot="icon-dark" class="visually-hidden"></span>
        `;
      }

      if (value === 'icon+text') {
        slotTemplate = '';
        wc.innerHTML = '';
      }

      htmlSrcEl.innerHTML = sourceTemplate(slotTemplate);

      window.hljs.highlightElement(htmlSrcEl);
    });
  });
});
