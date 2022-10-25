const storagePrefix = 'theme-toggle/';
const storageKey = `${storagePrefix}theme-preference`;

const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    :host {
      --icon-light-color: currentColor;
      --icon-dark-color: currentColor;
      --text-light-color: currentColor;
      --text-dark-color: currentColor;

      box-sizing: border-box;
    }

    :host *,
    :host *:after,
    :host *:before {
      box-sizing: inherit;
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }

    .theme-toggle {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }

    .theme-toggle__text--light {
      color: var(--text-light-color);
    }

    .theme-toggle__text--dark {
      color: var(--text-dark-color);
    }
  </style>

  <button type="button" part="theme-toggle" class="theme-toggle" id="theme-toggle" title="Toggles theme between light & dark" aria-label="auto" aria-live="polite">
    <slot name="content-light">
      <slot name="icon-light">
        <svg part="theme-toggle__icon theme-toggle__icon--light" class="theme-toggle__icon theme-toggle__icon--light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--icon-light-color)" viewBox="0 0 16 16">
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>
      </slot>

      <slot name="text-light">
        <span part="theme-toggle__text theme-toggle__text--light" class="theme-toggle__text theme-toggle__text--light">Light theme</span>
      </slot>
    </slot>

    <slot name="content-dark">
      <slot name="icon-dark">
        <svg part="theme-toggle__icon theme-toggle__icon--dark" class="theme-toggle__icon theme-toggle__icon--dark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--icon-dark-color)" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>
      </slot>

      <slot name="text-dark">
        <span part="theme-toggle__text theme-toggle__text--dark" class="theme-toggle__text theme-toggle__text--dark">Dark theme</span>
      </slot>
    </slot>
  </button>
`;

class ThemeToggle extends HTMLElement {
  #theme;

  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  static get observedAttributes() {
    return ['toggletitle'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'toggletitle' && oldValue !== newValue) {
      console.log(this.shadowRoot.getElementById('theme-toggle'));
      this.shadowRoot.getElementById('theme-toggle').title = this.toggleTitle;
    }
  }

  get fromStorage() {
    return this.hasAttribute('fromstorage');
  }

  set fromStorage(value) {
    if (value) {
      this.setAttribute('fromstorage', value);
    } else {
      this.removeAttribute('fromstorage');
    }
  }

  get toggleTitle() {
    return this.getAttribute('toggletitle');
  }

  set toggleTitle(value) {
    this.setAttribute('toggletitle', value);
  }

  connectedCallback() {
    this.#theme = this.#getThemePreference();
    this.#reflectThemePreference();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.#onMatchMediaChange);
    this.shadowRoot.getElementById('theme-toggle').addEventListener('click', this.#onToggleClick);

    this.#upgradeProperty('fromStorage');
    this.#upgradeProperty('toggleTitle');
  }

  disconnectedCallback() {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', this.#onMatchMediaChange);
    this.shadowRoot.getElementById('theme-toggle').removeEventListener('click', this.#onToggleClick);
  }

  #getThemePreference() {
    let valueFromStorage;

    try {
      if (this.fromStorage) {
        valueFromStorage = window.localStorage.getItem(storageKey);
      }
    } catch {
      // Fail silently...
    }

    return valueFromStorage || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  #setThemePreference() {
    try {
      window.localStorage.setItem(storageKey, this.#theme);
    } catch {
      // Fail silently...
    }
  }

  #reflectThemePreference() {
    const toggleBtn = this.shadowRoot.getElementById('theme-toggle');

    document.documentElement.setAttribute('data-theme', this.#theme);

    toggleBtn.setAttribute('aria-label', this.#theme);

    toggleBtn.querySelectorAll('slot[name="content-light"], slot[name="content-dark"]').forEach(el => {
      el.hidden = !el.name.includes(this.#theme);
    });
  }

  #dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent('theme-toggle:theme-change', {
      bubbles: true,
      composed: true,
      detail: {
        theme: this.#theme
      }
    }));
  }

  #onToggleClick = () => {
    this.#theme = this.#theme === 'light' ? 'dark' : 'light';
    this.#setThemePreference();
    this.#reflectThemePreference();
    this.#dispatchChangeEvent();
  };

  #onMatchMediaChange = mqList => {
    this.#theme = mqList.matches ? 'dark' : 'light';
    this.#setThemePreference();
    this.#reflectThemePreference();
    this.#dispatchChangeEvent();
  };

  #upgradeProperty(prop) {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  static defineCustomElement(elementName = 'theme-toggle') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, ThemeToggle);
    }
  }
}

export { ThemeToggle };
