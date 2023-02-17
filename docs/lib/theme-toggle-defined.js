var t,e,n,o;function i(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function l(t,e){return e.get?e.get.call(t):e.value}function a(t,e){return l(t,i(t,e,"get"))}function s(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function h(t,e,n){s(t,e),e.set(t,n)}function r(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}function g(t,e,n){return r(t,i(t,e,"set"),n),n}function c(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function m(t,e){s(t,e),e.add(t)}t={},e="ThemeToggle",n=function(){return x},Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0});const d=document.createElement("template");d.innerHTML='\n  <style>\n    :host {\n      --icon-light-color: currentColor;\n      --icon-dark-color: currentColor;\n      --text-light-color: currentColor;\n      --text-dark-color: currentColor;\n\n      box-sizing: border-box;\n    }\n\n    :host *,\n    :host *:after,\n    :host *:before {\n      box-sizing: inherit;\n    }\n\n    :host([hidden]),\n    [hidden] {\n      display: none !important;\n    }\n\n    .theme-toggle {\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      gap: 0.5rem;\n    }\n\n    .theme-toggle__text--light {\n      color: var(--text-light-color);\n    }\n\n    .theme-toggle__text--dark {\n      color: var(--text-dark-color);\n    }\n  </style>\n\n  <button type="button" part="theme-toggle" class="theme-toggle" id="theme-toggle" title="Toggles theme between light & dark" aria-label="auto" aria-live="polite">\n    <slot name="content-light">\n      <slot name="icon-light">\n        <svg part="theme-toggle__icon theme-toggle__icon--light" class="theme-toggle__icon theme-toggle__icon--light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--icon-light-color)" viewBox="0 0 16 16">\n          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>\n        </svg>\n      </slot>\n\n      <slot name="text-light">\n        <span part="theme-toggle__text theme-toggle__text--light" class="theme-toggle__text theme-toggle__text--light">Light theme</span>\n      </slot>\n    </slot>\n\n    <slot name="content-dark">\n      <slot name="icon-dark">\n        <svg part="theme-toggle__icon theme-toggle__icon--dark" class="theme-toggle__icon theme-toggle__icon--dark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--icon-dark-color)" viewBox="0 0 16 16">\n          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>\n        </svg>\n      </slot>\n\n      <slot name="text-dark">\n        <span part="theme-toggle__text theme-toggle__text--dark" class="theme-toggle__text theme-toggle__text--dark">Dark theme</span>\n      </slot>\n    </slot>\n  </button>\n';var u=new WeakMap,w=new WeakSet,p=new WeakSet,f=new WeakSet,v=new WeakSet,b=new WeakMap,_=new WeakMap,k=new WeakSet;class x extends HTMLElement{static get observedAttributes(){return["toggle-title"]}attributeChangedCallback(t,e,n){"toggle-title"===t&&e!==n&&(this.shadowRoot.getElementById("theme-toggle").title=this.toggleTitle)}get fromStorage(){return this.hasAttribute("from-storage")}set fromStorage(t){t?this.setAttribute("from-storage",""):this.removeAttribute("from-storage")}get toggleTitle(){return this.getAttribute("toggle-title")}set toggleTitle(t){this.setAttribute("toggle-title",t)}connectedCallback(){c(this,k,C).call(this,"fromStorage"),c(this,k,C).call(this,"toggleTitle"),g(this,u,c(this,w,y).call(this)),c(this,f,T).call(this),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a(this,_)),this.shadowRoot.getElementById("theme-toggle").addEventListener("click",a(this,b))}disconnectedCallback(){window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",a(this,_)),this.shadowRoot.getElementById("theme-toggle").removeEventListener("click",a(this,b))}static defineCustomElement(t="theme-toggle"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,x)}constructor(){super(),m(this,w),m(this,p),m(this,f),m(this,v),m(this,k),h(this,u,{writable:!0,value:void 0}),h(this,b,{writable:!0,value:()=>{g(this,u,"light"===a(this,u)?"dark":"light"),c(this,p,E).call(this),c(this,f,T).call(this),c(this,v,A).call(this)}}),h(this,_,{writable:!0,value:t=>{g(this,u,t.matches?"dark":"light"),c(this,p,E).call(this),c(this,f,T).call(this),c(this,v,A).call(this)}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(d.content.cloneNode(!0)))}}function y(){let t;try{this.fromStorage&&(t=window.localStorage.getItem("theme-toggle/theme-preference"))}catch{}return t||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}function E(){try{window.localStorage.setItem("theme-toggle/theme-preference",a(this,u))}catch{}}function T(){const t=this.shadowRoot.getElementById("theme-toggle");t.setAttribute("aria-label",a(this,u)),t.querySelectorAll('slot[name="content-light"], slot[name="content-dark"]').forEach((t=>{t.hidden=!t.name.includes(a(this,u))})),document.documentElement.setAttribute("data-theme",a(this,u))}function A(){this.dispatchEvent(new CustomEvent("theme-toggle:theme-change",{bubbles:!0,composed:!0,detail:{theme:a(this,u)}}))}function C(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}x.defineCustomElement();export{x as ThemeToggle};
//# sourceMappingURL=theme-toggle-defined.js.map