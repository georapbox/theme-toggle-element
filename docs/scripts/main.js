const isLocalhost = window.location.href.includes('127.0.0.1') || window.location.href.includes('localhost');
const componentUrl = isLocalhost ? '../../src/theme-toggle-defined.js' : 'https://unpkg.com/@georapbox/theme-toggle-element/dist/theme-toggle-defined.min.js';

const withStyleCheckbox = document.getElementById('with-style');
const radioEls = document.querySelectorAll('input[type="radio"]');
const htmlSrcEl = document.getElementById('html-source');

const sourceTemplate = (slot = '', classAttr = '') => `&lt;theme-toggle${classAttr}&gt;${slot}&lt;/theme-toggle&gt;`;

htmlSrcEl.innerHTML = sourceTemplate('', ' class="custom-styles"');

import(componentUrl).then(() => {
  const wc = document.querySelector('theme-toggle');

  document.addEventListener('theme-toggle:theme-change', evt => {
    console.log('theme-toggle:theme-change ->', evt.detail);
  });

  const renderElement = (contentToShow, withCustomStyles = true) => {
    let slotTemplate = '';

    if (contentToShow === 'icon') {
      slotTemplate = `\n  &lt;span slot="text-light" class="visually-hidden"&gt;Light theme&lt;/span&gt;\n  &lt;span slot="text-dark" class="visually-hidden"&gt;Dark theme&lt;/span&gt;\n`;

      wc.innerHTML = `
          <span slot="text-light" class="visually-hidden">Light theme</span>
          <span slot="text-dark" class="visually-hidden">Dark theme</span>
        `;
    }

    if (contentToShow === 'text') {
      slotTemplate = `\n  &lt;span slot="icon-light" class="visually-hidden"&gt;&lt;/span&gt;\n  &lt;span slot="icon-dark" class="visually-hidden"&gt;&lt;/span&gt;\n`;

      wc.innerHTML = `
          <span slot="icon-light" class="visually-hidden"></span>
          <span slot="icon-dark" class="visually-hidden"></span>
        `;
    }

    if (contentToShow === 'icon+text') {
      slotTemplate = '';
      wc.innerHTML = '';
    }

    wc.classList.toggle('custom-styles', withCustomStyles);

    htmlSrcEl.innerHTML = sourceTemplate(slotTemplate, withCustomStyles ? ' class="custom-styles"' : '');

    window.hljs.highlightElement(htmlSrcEl);
  };

  radioEls.forEach(el => {
    el.addEventListener('change', evt => {
      const radioValue = evt.target.value;
      const isCustomStylesChecked = withStyleCheckbox.checked;
      renderElement(radioValue, isCustomStylesChecked);
    });
  });

  withStyleCheckbox.addEventListener('change', evt => {
    const selectedRadio = [].find.call(radioEls, el => el.checked);
    const isCustomStylesChecked = evt.target.checked;
    renderElement(selectedRadio.value, isCustomStylesChecked);
  });
});

