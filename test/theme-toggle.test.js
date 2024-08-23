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
  });

  describe('attributes - properties', () => {
    // no-storage
    it('reflects attribute "no-storage" to property "noStorage"', async () => {
      const el = await fixture(html`<theme-toggle no-storage></theme-toggle>`);
      expect(el.noStorage).to.be.true;
    });

    it('reflects property "noStorage" to attribute "no-storage"', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      el.noStorage = true;
      await elementUpdated(el);
      expect(el).to.have.attribute('no-storage');
      el.noStorage = false;
      await elementUpdated(el);
      expect(el).not.to.have.attribute('no-storage');
    });

    // storage-key
    it('reflects attribute "storage-key" to property "storageKey"', async () => {
      const el = await fixture(html`<theme-toggle storage-key="STORAGE_KEY"></theme-toggle>`);
      expect(el.storageKey).to.equal('STORAGE_KEY');
    });

    it('reflects property "storageKey" to attribute "storage-key"', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      el.storageKey = 'STORAGE_KEY';
      await elementUpdated(el);
      expect(el).to.have.attribute('storage-key', 'STORAGE_KEY');
    });

    // no-icon
    it('reflects attribute "no-icon" to property "noIcon"', async () => {
      const el = await fixture(html`<theme-toggle no-icon></theme-toggle>`);
      expect(el.noIcon).to.be.true;
    });

    it('reflects property "noIcon" to attribute "no-icon"', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      el.noIcon = true;
      await elementUpdated(el);
      expect(el).to.have.attribute('no-icon');
      el.noIcon = false;
      await elementUpdated(el);
      expect(el).not.to.have.attribute('no-icon');
    });

    // no-label
    it('reflects attribute "no-label" to property "noLabel"', async () => {
      const el = await fixture(html`<theme-toggle no-label></theme-toggle>`);
      expect(el.noLabel).to.be.true;
    });

    it('reflects property "noLabel" to attribute "no-label"', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      el.noLabel = true;
      await elementUpdated(el);
      expect(el).to.have.attribute('no-label');
      el.noLabel = false;
      await elementUpdated(el);
      expect(el).not.to.have.attribute('no-label');
    });
  });

  describe('Slots', () => {
    // System
    it('has "system" slot', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const slot = el.shadowRoot.querySelector('slot[name="system"]');
      expect(slot).to.exist;
    });

    it('overrides "system" slot content', async () => {
      const el = await fixture(html`
        <theme-toggle>
          <span slot="system">SYSTEM</span>
        </theme-toggle>
      `);
      const slot = el.shadowRoot.querySelector('slot[name="system"]');
      expect(slot.assignedNodes()[0].textContent).to.equal('SYSTEM');
    });

    it('has "icon-system" slot', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const slot = el.shadowRoot.querySelector('slot[name="icon-system"]');
      expect(slot).to.exist;
    });

    it('overrides "icon-system" slot content', async () => {
      const el = await fixture(html`
        <theme-toggle>
          <span slot="icon-system">SYSTEM</span>
        </theme-toggle>
      `);
      const slot = el.shadowRoot.querySelector('slot[name="icon-system"]');
      expect(slot.assignedNodes()[0].textContent).to.equal('SYSTEM');
    });

    it('has "label-system" slot', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const slot = el.shadowRoot.querySelector('slot[name="label-system"]');
      expect(slot).to.exist;
    });

    it('overrides "label-system" slot content', async () => {
      const el = await fixture(html`
        <theme-toggle>
          <span slot="label-system">SYSTEM</span>
        </theme-toggle>
      `);
      const slot = el.shadowRoot.querySelector('slot[name="label-system"]');
      expect(slot.assignedNodes()[0].textContent).to.equal('SYSTEM');
    });

    // Light
    it('has "light" slot', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const slot = el.shadowRoot.querySelector('slot[name="light"]');
      expect(slot).to.exist;
    });

    it('overrides "light" slot content', async () => {
      const el = await fixture(html`
        <theme-toggle>
          <span slot="light">LIGHT</span>
        </theme-toggle>
      `);
      const slot = el.shadowRoot.querySelector('slot[name="light"]');
      expect(slot.assignedNodes()[0].textContent).to.equal('LIGHT');
    });

    it('has "icon-light" slot', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const slot = el.shadowRoot.querySelector('slot[name="icon-light"]');
      expect(slot).to.exist;
    });

    it('overrides "icon-light" slot content', async () => {
      const el = await fixture(html`
        <theme-toggle>
          <span slot="icon-light">LIGHT</span>
        </theme-toggle>
      `);
      const slot = el.shadowRoot.querySelector('slot[name="icon-light"]');
      expect(slot.assignedNodes()[0].textContent).to.equal('LIGHT');
    });

    it('has "label-light" slot', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const slot = el.shadowRoot.querySelector('slot[name="label-light"]');
      expect(slot).to.exist;
    });

    it('overrides "label-light" slot content', async () => {
      const el = await fixture(html`
        <theme-toggle>
          <span slot="label-light">LIGHT</span>
        </theme-toggle>
      `);
      const slot = el.shadowRoot.querySelector('slot[name="label-light"]');
      expect(slot.assignedNodes()[0].textContent).to.equal('LIGHT');
    });

    // Dark
    it('has "dark" slot', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const slot = el.shadowRoot.querySelector('slot[name="dark"]');
      expect(slot).to.exist;
    });

    it('overrides "dark" slot content', async () => {
      const el = await fixture(html`
        <theme-toggle>
          <span slot="dark">DARK</span>
        </theme-toggle>
      `);
      const slot = el.shadowRoot.querySelector('slot[name="dark"]');
      expect(slot.assignedNodes()[0].textContent).to.equal('DARK');
    });

    it('has "icon-dark" slot', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const slot = el.shadowRoot.querySelector('slot[name="icon-dark"]');
      expect(slot).to.exist;
    });

    it('overrides "icon-dark" slot content', async () => {
      const el = await fixture(html`
        <theme-toggle>
          <span slot="icon-dark">DARK</span>
        </theme-toggle>
      `);
      const slot = el.shadowRoot.querySelector('slot[name="icon-dark"]');
      expect(slot.assignedNodes()[0].textContent).to.equal('DARK');
    });

    it('has "label-dark" slot', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const slot = el.shadowRoot.querySelector('slot[name="label-dark"]');
      expect(slot).to.exist;
    });

    it('overrides "label-dark" slot content', async () => {
      const el = await fixture(html`
        <theme-toggle>
          <span slot="label-dark">DARK</span>
        </theme-toggle>
      `);
      const slot = el.shadowRoot.querySelector('slot[name="label-dark"]');
      expect(slot.assignedNodes()[0].textContent).to.equal('DARK');
    });
  });

  describe('Events', () => {
    it('"tt-theme-change" event is fired when clicking the toggle button', async () => {
      const el = await fixture(html`<theme-toggle></theme-toggle>`);
      const button = el.shadowRoot.getElementById('theme-toggle');
      const listener1 = oneEvent(el, 'tt-theme-change');
      button.click(); // light
      expect((await listener1).detail).to.deep.equal({ theme: 'light' });
      const listener2 = oneEvent(el, 'tt-theme-change');
      button.click(); // dark
      const listener3 = oneEvent(el, 'tt-theme-change');
      expect((await listener2).detail).to.deep.equal({ theme: 'dark' });
      button.click(); // back to system
      expect((await listener3).detail).to.deep.equal({ theme: 'system' });
    });
  });

  describe('Basic functionality', () => {
    it("changes the button's content visibility on click", async () => {
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
});
