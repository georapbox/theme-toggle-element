import { elementUpdated, expect, fixture, fixtureCleanup, html } from '@open-wc/testing';
import { ThemeToggle } from '../src/theme-toggle.js';

ThemeToggle.defineCustomElement();

describe('<theme-toggle>', () => {
  it('passes accessibility test', async () => {
    // TODO
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    // TODO
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
  });

  it('change default properties', async () => {
    // TODO
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
  });

  it('change properties programmatically', async () => {
    // TODO
    const el = await fixture(html`<theme-toggle></theme-toggle>`);
    await elementUpdated(el);
  });

  afterEach(() => {
    fixtureCleanup();
  });
});
