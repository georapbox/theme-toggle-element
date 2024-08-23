/*!
 * @georapbox/theme-toggle-element
 * A custom element that allows you to toggle between dark and light theme.
 *
 * @version 4.0.2
 * @homepage https://github.com/georapbox/theme-toggle-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */
var o="theme-toggle/theme-preference",r="data-theme",a=document.createElement("template"),h=`
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
`;a.innerHTML=`
  <style>${h}</style>

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
`;var n=class l extends HTMLElement{#i=["light","dark","system"];#t="system";#s=0;#e=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(a.content.cloneNode(!0)),this.#e=this.shadowRoot?.getElementById("theme-toggle")||null}static get observedAttributes(){return["storage-key","no-icon","no-label"]}attributeChangedCallback(t,e,s){t==="storage-key"&&e!==s&&(this.#t=this.#a(),this.#s=this.#i.indexOf(this.#t)||0,this.#o()),t==="no-icon"&&e!==s&&this.#e&&this.#e.querySelectorAll('slot[name^="icon"]').forEach(i=>{i.classList.toggle("icon--hidden",this.noIcon)}),t==="no-label"&&e!==s&&this.#e&&this.#e.querySelectorAll('slot[name^="label"]').forEach(i=>{i.classList.toggle("label--hidden",this.noLabel)})}get noStorage(){return this.hasAttribute("no-storage")}set noStorage(t){t?this.setAttribute("no-storage",""):this.removeAttribute("no-storage")}get storageKey(){return this.getAttribute("storage-key")}set storageKey(t){t!=null&&this.setAttribute("storage-key",t)}get noIcon(){return this.hasAttribute("no-icon")}set noIcon(t){t?this.setAttribute("no-icon",""):this.removeAttribute("no-icon")}get noLabel(){return this.hasAttribute("no-label")}set noLabel(t){t?this.setAttribute("no-label",""):this.removeAttribute("no-label")}connectedCallback(){this.#n("noStorage"),this.#n("storageKey"),this.#n("noIcon"),this.#n("noLabel"),this.#t=this.#a(),this.#s=this.#i.indexOf(this.#t)||0,this.#o(),this.#e?.addEventListener("click",this.#l),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.#r)}disconnectedCallback(){this.#e?.removeEventListener("click",this.#l),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.#r)}#a(){if(this.noStorage)return"system";let t="";try{t=window.localStorage.getItem(this.storageKey||o)||""}catch{}return t==="light"||t==="dark"||t==="system"?t:"system"}#h(){if(!this.noStorage)try{window.localStorage.setItem(this.storageKey||o,this.#t)}catch{}}#o(){if(this.#e?.querySelectorAll('slot[name="light"], slot[name="dark"], slot[name="system"]').forEach(t=>{t.classList.toggle("hidden",!t.getAttribute("name")?.startsWith(this.#t))}),document.documentElement.setAttribute(r,this.#t),this.#t==="system"){let t=window.matchMedia("(prefers-color-scheme: dark)").matches;this.#e?.querySelectorAll(".system-path").forEach(e=>{e.classList.toggle("hidden",t?e.classList.contains("system-path--light"):e.classList.contains("system-path--dark"))})}}#c(){return this.#s=(this.#s+1)%this.#i.length,this.#i[this.#s]}#l=()=>{this.#t=this.#c(),this.#h(),this.#o(),this.dispatchEvent(new CustomEvent("tt-theme-change",{bubbles:!0,composed:!0,detail:{theme:this.#t}}))};#r=()=>{this.#o()};#n(t){let e=this;if(Object.prototype.hasOwnProperty.call(e,t)){let s=e[t];delete e[t],e[t]=s}}static defineCustomElement(t="theme-toggle"){typeof window<"u"&&!window.customElements.get(t)&&window.customElements.define(t,l)}};export{n as ThemeToggle};
