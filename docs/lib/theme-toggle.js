let t="theme-toggle/theme-preference",e=document.createElement("template");e.innerHTML=/* html */`
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

    .button {
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

    .icon--hidden {
      display: none !important;
    }

    .label--hidden {
      display: inline !important;
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }

    .icon__svg {
      min-width: 1.5em;
      width: 1.5em;
      height: 1.5em;
    }

    .system-path {
      transform: scale(0.4) translateY(-4px);
      transform-origin: center;
    }
  </style>

  <button type="button" part="base" id="theme-toggle" class="button">
    <slot name="light">
      <slot name="icon-light" part="icon icon-light" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="icon__svg" aria-hidden="true">
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>
        </svg>
      </slot>
      <slot name="label-light" part="label label-light" class="label">Light theme</slot>
    </slot>

    <slot name="dark">
      <slot name="icon-dark" part="icon icon-dark" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="icon__svg" aria-hidden="true">
          <path d="M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z"></path>
        </svg>
      </slot>
      <slot name="label-dark" part="label label-dark" class="label">Dark theme</slot>
    </slot>

    <slot name="system">
      <slot name="icon-system" part="icon icon-system" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="icon__svg" aria-hidden="true">
          <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"></path>
          <path class="system-path system-path--light" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>
          <path class="system-path system-path--dark" d="M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z"></path>
        </svg>
      </slot>
      <slot name="label-system" part="label label-system" class="label">System theme</slot>
    </slot>
  </button>
`;/**
 * @summary A custom element that allows the user to toggle between light, dark and system theme.
 * @extends HTMLElement
 *
 * @property {boolean} noStorage - Indicates whether the theme state should be persisted to local storage.
 * @property {string} storageKey - The key used to store the theme state in local storage.
 * @property {boolean} noIcon - Indicates whether the icon should be hidden.
 * @property {boolean} noLabel - Indicates whether the label should be visually hidden.
 *
 * @attribute no-storage {boolean} - Indicates whether the theme state should be persisted to local storage.
 * @attribute storage-key {string} - The key used to store the theme state in local storage.
 * @attribute no-icon {boolean} - Indicates whether the icon should be hidden.
 * @attribute no-label {boolean} - Indicates whether the label should be visually hidden.
 *
 * @slot light - The light theme slot.
 * @slot icon-light - The light theme icon slot.
 * @slot label-light - The light theme label slot.
 * @slot dark - The dark theme slot.
 * @slot icon-dark - The dark theme icon slot.
 * @slot label-dark - The dark theme label slot.
 * @slot system - The system theme slot.
 * @slot icon-system - The system theme icon slot.
 * @slot label-system - The system theme label slot.
 *
 * @csspart base - The base wrapper element.
 * @csspart icon - The icon's wrapper element (including the light, dark and system theme icons).
 * @csspart icon-light - The light theme icon's wrapper element.
 * @csspart icon-dark - The dark theme icon's wrapper element.
 * @csspart icon-system - The system theme icon's wrapper element.
 * @csspart label - The label's wrapper element (including the light, dark and system theme labels).
 * @csspart label-light - The light theme label's wrapper element.
 * @csspart label-dark - The dark theme label's wrapper element.
 * @csspart label-system - The system theme label's wrapper element.
 *
 * @fires tt-theme-change - Fired when the theme state changes.
 *
 * @tagname theme-toggle - This is the default tag name, unless overridden by the `defineCustomElement` method.
 */class s extends HTMLElement{/**
   * Holds the possible theme states.
   * @type {('light' | 'dark' | 'system')[]}
   */#t=["light","dark","system"];/**
   * The current theme state.
   * @type {'light' | 'dark' | 'system'}
   */#e="system";/**
   * The index of the currently selected theme state.
   * @type {number}
   */#s=0;/**
   * The theme toggle button.
   * @type {HTMLElement | null}
   */#o=null;constructor(){if(super(),!this.shadowRoot){/** @type {ShadowRoot} */let t=this.attachShadow({mode:"open",delegatesFocus:!0});t.appendChild(e.content.cloneNode(!0))}this.#o=this.shadowRoot?.getElementById("theme-toggle")||null}/**
   * The observed attributes.
   *
   * @returns {string[]}
   */static get observedAttributes(){return["storage-key","no-icon","no-label"]}/**
   * Lifecycle method that is called when attributes are changed, added, removed, or replaced.
   *
   * @param {string} name - The name of the attribute.
   * @param {string} oldValue - The old value of the attribute.
   * @param {string} newValue - The new value of the attribute.
   */attributeChangedCallback(t,e,s){"storage-key"===t&&e!==s&&(this.#e=this.#i(),this.#s=this.#t.indexOf(this.#e)||0,this.#n()),"no-icon"===t&&e!==s&&this.#o&&this.#o.querySelectorAll('slot[name^="icon"]').forEach(t=>{t.classList.toggle("icon--hidden",this.noIcon)}),"no-label"===t&&e!==s&&this.#o&&this.#o.querySelectorAll('slot[name^="label"]').forEach(t=>{t.classList.toggle("label--hidden",this.noLabel)})}/**
   * Indicates whether the theme state should be persisted to local storage.
   *
   * @type {boolean}
   * @default false
   * @attribute no-storage - Reflects the noStorage property.
   */get noStorage(){return this.hasAttribute("no-storage")}set noStorage(t){t?this.setAttribute("no-storage",""):this.removeAttribute("no-storage")}/**
   * The key used to store the theme state in local storage.
   *
   * @type {string | null}
   * @default 'theme-toggle/theme-preference'
   * @attribute storage-key - Reflects the storageKey property.
   */get storageKey(){return this.getAttribute("storage-key")}set storageKey(t){null!=t&&this.setAttribute("storage-key",t)}/**
   * Indicates whether the icon should be hidden.
   *
   * @type {boolean}
   * @default false
   * @attribute no-label - Reflects the noIcon property.
   */get noIcon(){return this.hasAttribute("no-icon")}set noIcon(t){t?this.setAttribute("no-icon",""):this.removeAttribute("no-icon")}/**
   * Indicates whether the label should be visually hidden.
   *
   * @type {boolean}
   * @default false
   * @attribute no-label - Reflects the noLabel property.
   */get noLabel(){return this.hasAttribute("no-label")}set noLabel(t){t?this.setAttribute("no-label",""):this.removeAttribute("no-label")}/**
   * Lifecycle method that is called when the element is added to the DOM.
   */connectedCallback(){this.#l("noStorage"),this.#l("storageKey"),this.#l("noIcon"),this.#l("noLabel"),this.#e=this.#i(),this.#s=this.#t.indexOf(this.#e)||0,this.#n(),this.#o?.addEventListener("click",this.#a),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.#h)}/**
   * Lifecycle method that is called when the element is removed from the DOM.
   */disconnectedCallback(){this.#o?.removeEventListener("click",this.#a),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.#h)}/**
   * Gets the current theme state from local storage.
   *
   * @returns {'light' | 'dark' | 'system'} Current theme state. Defaults to 'system' if no value is found.
   */#i(){if(this.noStorage)return"system";/** @type {string} */let e="";try{e=window.localStorage.getItem(this.storageKey||t)||""}catch{// Fail silently...
}return"light"===e||"dark"===e||"system"===e?e:"system"}/**
   * Save the current theme state to local storage.
   */#r(){if(!this.noStorage)try{window.localStorage.setItem(this.storageKey||t,this.#e)}catch{// Fail silently...
}}/**
   * Reflects the current theme state.
   * This method is called on initialization and when the theme state changes (e.g. via click event).
   */#n(){if(this.#o?.querySelectorAll('slot[name="light"], slot[name="dark"], slot[name="system"]').forEach(t=>{t.classList.toggle("hidden",!t.getAttribute("name")?.startsWith(this.#e))}),document.documentElement.setAttribute("data-theme",this.#e),"system"===this.#e){let t=window.matchMedia("(prefers-color-scheme: dark)").matches;this.#o?.querySelectorAll(".system-path").forEach(e=>{e.classList.toggle("hidden",t?e.classList.contains("system-path--light"):e.classList.contains("system-path--dark"))})}}/**
   * Gets the next theme state.
   *
   * @returns {'light' | 'dark' | 'system'} Next theme state.
   */#c(){return this.#s=(this.#s+1)%this.#t.length,this.#t[this.#s]}/**
   * Handles the click event.
   */#a=()=>{this.#e=this.#c(),this.#r(),this.#n(),this.dispatchEvent(new CustomEvent("tt-theme-change",{bubbles:!0,composed:!0,detail:{theme:this.#e}}))};/**
   * Handle media change event.
   * This is only relevant when the theme state is set to 'system'.
   */#h=()=>{this.#n()};/**
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and set a
   * value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would miss that
   * property and the instance property would prevent the class property setter from ever being called.
   *
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   *
   * @param {'noStorage' | 'storageKey' | 'noIcon' | 'noLabel'} prop - The property to upgrade.
   */#l(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}/**
   * Defines a custom element with the given name.
   * The name must contain a dash (-).
   *
   * @param {string} [elementName='theme-toggle']
   * @example
   * ThemeToggle.defineCustomElement('theme-changer');
   */static defineCustomElement(t="theme-toggle"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,s)}}export{s as ThemeToggle};
