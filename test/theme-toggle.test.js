import { elementUpdated, expect, fixture, fixtureCleanup, html } from '@open-wc/testing';
import { ThemeToggle } from '../src/theme-toggle.js';

ThemeToggle.defineCustomElement();

describe('<theme-toggle>', () => {
  afterEach(() => {
    fixtureCleanup();
  });

  it('passes accessibility test', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
    expect(el.toggleTitle).to.be.null;
    expect(el.getAttribute('toggle-title')).to.be.null;
  });

  it('change default properties', async () => {
    const el = await fixture(html`<theme-toggle toggle-title="Toggle theme"></theme-toggle>`);
    expect(el.toggleTitle).to.equal('Toggle theme');
    expect(el.getAttribute('toggle-title')).to.equal('Toggle theme');
  });

  it('change properties programmatically', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
    el.toggleTitle = 'Toggle theme';
    await elementUpdated(el);
    expect(el.toggleTitle).to.equal('Toggle theme');
    expect(el.getAttribute('toggle-title')).to.equal('Toggle theme');
  });

  it('adds "data-theme" attribute to root element of document', async () => {
    await fixture(html`<theme-toggle></theme-toggle>`);
    expect(document.documentElement).to.have.attribute('data-theme');
  });

  it('"data-theme" attribute on root element changes when clicking the toggle button', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
    const button = el.shadowRoot.getElementById('theme-toggle');
    expect(document.documentElement).to.have.attribute('data-theme', 'system');
    button.click();
    expect(document.documentElement).to.have.attribute('data-theme', 'light');
    button.click();
    expect(document.documentElement).to.have.attribute('data-theme', 'dark');
    button.click(); // back to system
  });

  it('"aria-label" attribute on toggle button changes when clicking the the toggle button', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
    const button = el.shadowRoot.getElementById('theme-toggle');
    expect(button).to.have.attribute('aria-label', 'system');
    button.click();
    expect(button).to.have.attribute('aria-label', 'light');
    button.click();
    expect(button).to.have.attribute('aria-label', 'dark');
    button.click(); // back to system
  });

  it('toggle button\'s content visibility changes when clicking the the toggle button', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
    const button = el.shadowRoot.getElementById('theme-toggle');
    const systemContentSlot = el.shadowRoot.querySelector('slot[name="system"]');
    const lightContentSlot = el.shadowRoot.querySelector('slot[name="light"]');
    const darkContentSlot = el.shadowRoot.querySelector('slot[name="dark"]');
    expect(systemContentSlot).not.to.have.class('hidden');
    expect(lightContentSlot).to.have.class('hidden');
    expect(darkContentSlot).to.have.class('hidden');
    button.click();
    expect(systemContentSlot).to.have.class('hidden');
    expect(lightContentSlot).not.to.have.class('hidden');
    expect(darkContentSlot).to.have.class('hidden');
    button.click();
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
