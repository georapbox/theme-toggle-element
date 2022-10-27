import { elementUpdated, expect, fixture, fixtureCleanup, html } from '@open-wc/testing';
import { ThemeToggle } from '../src/theme-toggle.js';

ThemeToggle.defineCustomElement();

describe('<theme-toggle>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);

    expect(el.fromStorage).to.be.false;
    expect(el.getAttribute('fromstorage')).to.be.null;

    expect(el.toggleTitle).to.be.null;
    expect(el.getAttribute('toggletitle')).to.be.null;
  });

  it('change default properties', async () => {
    const el = await fixture(html`<theme-toggle fromStorage toggletitle="Toggle theme"></theme-toggle>`);

    expect(el.fromStorage).to.be.true;
    expect(el.getAttribute('fromstorage')).to.equal('');

    expect(el.toggleTitle).to.equal('Toggle theme');
    expect(el.getAttribute('toggletitle')).to.equal('Toggle theme');
  });

  it('change properties programmatically', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);

    el.fromStorage = true;
    el.toggleTitle = 'Toggle theme';

    await elementUpdated(el);

    expect(el.fromStorage).to.be.true;
    expect(el.getAttribute('fromstorage')).to.equal('');

    expect(el.toggleTitle).to.equal('Toggle theme');
    expect(el.getAttribute('toggletitle')).to.equal('Toggle theme');

    el.fromStorage = false;

    expect(el.fromStorage).to.be.false;
    expect(el.getAttribute('fromstorage')).to.be.null;
  });

  it('adds "data-theme" attribute to root element of document', async () => {
    await fixture(html`<theme-toggle></theme-toggle>`);

    expect(document.documentElement).to.have.attribute('data-theme');
  });

  it('"data-theme" attribute on root element changes when clicking the toggle button', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
    const button = el.shadowRoot.getElementById('theme-toggle');

    // Playwright test default color scheme is 'light'.
    // https://playwright.dev/docs/api/class-testoptions#test-options-color-scheme
    expect(document.documentElement).to.have.attribute('data-theme', 'light');

    button.click();

    expect(document.documentElement).to.have.attribute('data-theme', 'dark');
  });

  it('"aria-label" attribute on toggle button changes when clicking the the toggle button', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
    const button = el.shadowRoot.getElementById('theme-toggle');

    expect(button).to.have.attribute('aria-label', 'light');

    button.click();

    expect(button).to.have.attribute('aria-label', 'dark');
  });

  it('toggle button\'s content visibility changes when clicking the the toggle button', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
    const button = el.shadowRoot.getElementById('theme-toggle');
    const lightContentSlot = el.shadowRoot.querySelector('slot[name="content-light"]');
    const darkContentSlot = el.shadowRoot.querySelector('slot[name="content-dark"]');

    expect(lightContentSlot).not.to.have.attribute('hidden');
    expect(darkContentSlot).to.have.attribute('hidden');

    button.click();

    expect(lightContentSlot).to.have.attribute('hidden');
    expect(darkContentSlot).not.to.have.attribute('hidden');
  });

  it('changes toggle button title', async () => {
    const el = await fixture(html`<theme-toggle toggletitle="Toggle theme"></theme-toggle>`);
    const button = el.shadowRoot.getElementById('theme-toggle');

    expect(button).to.have.attribute('title', 'Toggle theme');
  });

  afterEach(() => {
    fixtureCleanup();
  });
});
