import { elementUpdated, expect, fixture, fixtureCleanup, html, oneEvent } from '@open-wc/testing';
import { ThemeToggle } from '../src/theme-toggle.js';

ThemeToggle.defineCustomElement();

describe('theme-toggle', () => {
  afterEach(() => {
    fixtureCleanup();
  });

  describe('Accessibility', () => {
    it('passes accessibility test', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      await expect(el).to.be.accessible();
    });

    it('"aria-label" attribute on toggle button changes when clicking the the toggle button', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const button = el.shadowRoot.getElementById('theme-toggle');
      expect(button).to.have.attribute('aria-label', 'system');
      button.click(); // light
      expect(button).to.have.attribute('aria-label', 'light');
      button.click(); // dark
      expect(button).to.have.attribute('aria-label', 'dark');
      button.click(); // back to system
    });
  });

  describe('Properties reflect to attributes', () => {
    it('reflects property "toggleTitle" to attribute "toggle-title"', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      el.toggleTitle = 'TOGGLE_TITLE';
      await elementUpdated(el);
      expect(el).to.have.attribute('toggle-title', 'TOGGLE_TITLE');
    });

    it('reflects property "noStorage" to attribute "no-storage"', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      el.noStorage = true;
      await elementUpdated(el);
      expect(el).to.have.attribute('no-storage');
    });

    it('reflects property "storageKey" to attribute "storage-key"', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      el.storageKey = 'STORAGE_KEY';
      await elementUpdated(el);
      expect(el).to.have.attribute('storage-key', 'STORAGE_KEY');
    });
  });

  describe('Attributes reflect to properties', () => {
    it('reflects attribute "toggle-title" to property "toggleTitle"', async () => {
      const el = await fixture(html`<theme-toggle toggle-title="TOGGLE_TITLE"></theme-toggle>`);
      expect(el.toggleTitle).to.equal('TOGGLE_TITLE');
    });

    it('reflects attribute "no-storage" to property "noStorage"', async () => {
      const el = await fixture(html`<theme-toggle no-storage></theme-toggle>`);
      expect(el.noStorage).to.be.true;
    });

    it('reflects attribute "storage-key" to property "storageKey"', async () => {
      const el = await fixture(html`<theme-toggle storage-key="STORAGE_KEY"></theme-toggle>`);
      expect(el.storageKey).to.equal('STORAGE_KEY');
    });
  });

  describe('Slots', () => {
    it('has a slot for "system" theme', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const slot = el.shadowRoot.querySelector('slot[name="system"]');
      expect(slot).to.exist;
    });

    it('has a slot for "light" theme', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const slot = el.shadowRoot.querySelector('slot[name="light"]');
      expect(slot).to.exist;
    });

    it('has a slot for "dark" theme', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const slot = el.shadowRoot.querySelector('slot[name="dark"]');
      expect(slot).to.exist;
    });

    it('overrides the "system" theme slot content', async () => {
      const el = await fixture(html`
        <theme-toggle>
          <span slot="system">SYSTEM</span>
        </theme-toggle>
      `);
      const slot = el.shadowRoot.querySelector('slot[name="system"]');
      expect(slot.assignedNodes()[0].textContent).to.equal('SYSTEM');
    });

    it('overrides the "light" theme slot content', async () => {
      const el = await fixture(html`
        <theme-toggle>
          <span slot="light">LIGHT</span>
        </theme-toggle>
      `);
      const slot = el.shadowRoot.querySelector('slot[name="light"]');
      expect(slot.assignedNodes()[0].textContent).to.equal('LIGHT');
    });

    it('overrides the "dark" theme slot content', async () => {
      const el = await fixture(html`
        <theme-toggle>
          <span slot="dark">DARK</span>
        </theme-toggle>
      `);
      const slot = el.shadowRoot.querySelector('slot[name="dark"]');
      expect(slot.assignedNodes()[0].textContent).to.equal('DARK');
    });
  });

  describe('Adds "data-theme" to root element', () => {
    it('adds "data-theme" attribute to root element of document', async () => {
      await fixture(html`<theme-toggle></theme-toggle>`);
      expect(document.documentElement).to.have.attribute('data-theme');
    });

    it('"data-theme" attribute on root element changes when clicking the toggle button', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const button = el.shadowRoot.getElementById('theme-toggle');
      expect(document.documentElement).to.have.attribute('data-theme', 'system');
      button.click(); // light
      expect(document.documentElement).to.have.attribute('data-theme', 'light');
      button.click(); // dark
      expect(document.documentElement).to.have.attribute('data-theme', 'dark');
      button.click(); // back to system
    });
  });

  describe('Events', () => {
    it('"theme-toggle:change" event is fired when clicking the toggle button', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const button = el.shadowRoot.getElementById('theme-toggle');
      const listener1 = oneEvent(el, 'theme-toggle:change');
      button.click(); // light
      expect((await listener1).detail).to.deep.equal({ theme: 'light' });
      const listener2 = oneEvent(el, 'theme-toggle:change');
      button.click(); // dark
      const listener3 = oneEvent(el, 'theme-toggle:change');
      expect((await listener2).detail).to.deep.equal({ theme: 'dark' });
      button.click(); // back to system
      expect((await listener3).detail).to.deep.equal({ theme: 'system' });
    });
  });

  describe('Misc', () => {
    it('changes the button\'s content visibility on click', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const button = el.shadowRoot.getElementById('theme-toggle');
      const systemContentSlot = el.shadowRoot.querySelector('slot[name="system"]');
      const lightContentSlot = el.shadowRoot.querySelector('slot[name="light"]');
      const darkContentSlot = el.shadowRoot.querySelector('slot[name="dark"]');
      expect(systemContentSlot).not.to.have.class('hidden');
      expect(lightContentSlot).to.have.class('hidden');
      expect(darkContentSlot).to.have.class('hidden');
      button.click(); // light
      expect(systemContentSlot).to.have.class('hidden');
      expect(lightContentSlot).not.to.have.class('hidden');
      expect(darkContentSlot).to.have.class('hidden');
      button.click(); // dark
      expect(systemContentSlot).to.have.class('hidden');
      expect(lightContentSlot).to.have.class('hidden');
      expect(darkContentSlot).not.to.have.class('hidden');
      button.click(); // back to system
    });

    it('changes toggle button title', async () => {
      const el = await fixture(html`<theme-toggle toggle-title="Toggle theme"></theme-toggle>`);
      const button = el.shadowRoot.getElementById('theme-toggle');
      expect(button).to.have.attribute('title', 'Toggle theme');
    });
  });
});
