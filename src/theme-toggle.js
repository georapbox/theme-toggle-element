const DEFAULT_STORAGE_KEY = 'theme-toggle/theme-preference';
const ROOT_ATTR = 'data-theme';
const template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    :host {
      display: inline-block;
      box-sizing: border-box;
    }

    :host *,
    :host *:after,
    :host *:before {
      box-sizing: inherit;
    }

    .hidden {
      display: none !important;
    }

    button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 0.375rem;
      border: none;
      background-color: transparent;
      color: inherit;
      cursor: pointer;
      font-family: inherit;
      font-size: inherit;
    }

    .default-icon {
      min-width: 1.5em;
      width: 1.5em;
      height: 1.5em;
    }

    .system {
      transform: scale(0.4) translateY(-4px);
      transform-origin: center;
    }
  </style>

  <button type="button" part="base" id="theme-toggle">
    <slot name="light">
      <slot name="icon-light" part="icon icon-light">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="default-icon">
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>
        </svg>
      </slot>
      <slot name="label-light" part="label label-light">Light theme</slot>
    </slot>

    <slot name="dark">
      <slot name="icon-dark" part="icon icon-dark">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="default-icon">
          <path d="M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z"></path>
        </svg>
      </slot>
      <slot name="label-dark" part="label label-dark">Dark theme</slot>
    </slot>

    <slot name="system">
      <slot name="icon-system" part="icon icon-system">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="default-icon">
          <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"></path>
          <path class="system system--light" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>
          <path class="system system--dark" d="M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z"></path>
        </svg>
      </slot>
      <slot name="label-system" part="label label-system">System theme</slot>
    </slot>
  </button>
`;

class ThemeToggle extends HTMLElement {
  /** @type {('light' | 'dark' | 'system')[]} */
  #states = ['light', 'dark', 'system'];

  /** @type {string} */
  #theme;

  /** @type {number} */
  #selectedThemeIndex;

  constructor() {
    super();

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  get noStorage() {
    return this.hasAttribute('no-storage');
  }

  set noStorage(value) {
    if (value) {
      this.setAttribute('no-storage', '');
    } else {
      this.removeAttribute('no-storage');
    }
  }

  get storageKey() {
    return this.getAttribute('storage-key');
  }

  set storageKey(value) {
    this.setAttribute('storage-key', value);
  }

  connectedCallback() {
    this.#upgradeProperty('noStorage');
    this.#upgradeProperty('storageKey');

    this.#theme = this.#getThemePreference();
    this.#selectedThemeIndex = this.#states.indexOf(this.#theme) || 0;
    this.#reflectThemePreference();

    this.shadowRoot.getElementById('theme-toggle').addEventListener('click', this.#onClick);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.#onMediaChange);
  }

  disconnectedCallback() {
    this.shadowRoot.getElementById('theme-toggle').removeEventListener('click', this.#onClick);
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', this.#onMediaChange);
  }

  /**
   * Get the current theme state from local storage.
   * @returns {string} Current theme state. Defaults to 'system' if no value is found.
   */
  #getThemePreference() {
    if (this.noStorage) {
      return 'system';
    }

    let valueFromStorage;

    try {
      valueFromStorage = window.localStorage.getItem(this.storageKey || DEFAULT_STORAGE_KEY);
    } catch {
      // Fail silently...
    }

    return this.#states.includes(valueFromStorage) ? valueFromStorage : 'system';
  }

  /**
   * Save the current theme state to local storage.
   */
  #setThemePreference() {
    if (this.noStorage) {
      return;
    }

    try {
      window.localStorage.setItem(this.storageKey || DEFAULT_STORAGE_KEY, this.#theme);
    } catch {
      // Fail silently...
    }
  }

  /**
   * Reflect the current theme state.
   * This method is called on initialization and when the theme state changes (e.g. via click event).
   */
  #reflectThemePreference() {
    const toggleBtn = this.shadowRoot.getElementById('theme-toggle');

    toggleBtn.querySelectorAll(`slot[name="light"], slot[name="dark"], slot[name="system"]`).forEach(el => {
      el.classList.toggle('hidden', !el.name.startsWith(this.#theme));
    });

    document.documentElement.setAttribute(ROOT_ATTR, this.#theme);

    if (this.#theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      toggleBtn.querySelectorAll('.system').forEach(el => {
        el.classList.toggle('hidden', prefersDark ? el.classList.contains('system--light') : el.classList.contains('system--dark'));
      });
    }
  }

  /**
   * Get the next theme state.
   * @returns {string} Next theme state.
   */
  #nextTheme() {
    this.#selectedThemeIndex = (this.#selectedThemeIndex + 1) % this.#states.length;
    return this.#states[this.#selectedThemeIndex];
  }

  /**
   * Handle click event.
   */
  #onClick = () => {
    this.#theme = this.#nextTheme();

    this.#setThemePreference();
    this.#reflectThemePreference();

    this.dispatchEvent(new CustomEvent('theme-change', {
      bubbles: true,
      composed: true,
      detail: {
        theme: this.#theme
      }
    }));
  };

  /**
   * Handle media change event.
   * This is only relevant when the theme state is set to 'system'.
   */
  #onMediaChange = () => {
    this.#reflectThemePreference();
  };

  /**
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and set a
   * value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would miss that
   * property and the instance property would prevent the class property setter from ever being called.
   */
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
