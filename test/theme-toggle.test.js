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

    expect(el.fromStorage).to.be.false;
    expect(el.getAttribute('fromstorage')).to.be.null;

    expect(el.toggleTitle).to.be.null;
    expect(el.getAttribute('toggletitle')).to.be.null;
  });

  it('change default properties', async () => {
    // TODO
    const el = await fixture(html`<theme-toggle fromStorage toggletitle="Toggle theme"></theme-toggle>`);

    expect(el.fromStorage).to.be.true;
    expect(el.getAttribute('fromstorage')).to.equal('');

    expect(el.toggleTitle).to.equal('Toggle theme');
    expect(el.getAttribute('toggletitle')).to.equal('Toggle theme');
  });

  it('change properties programmatically', async () => {
    // TODO
    const el = await fixture(html`<theme-toggle></theme-toggle>`);

    el.fromStorage = true;
    el.toggleTitle = 'Toggle theme';

    await elementUpdated(el);

    expect(el.fromStorage).to.be.true;
    expect(el.getAttribute('fromstorage')).to.equal('');

    expect(el.toggleTitle).to.equal('Toggle theme');
    expect(el.getAttribute('toggletitle')).to.equal('Toggle theme');
  });

  afterEach(() => {
    fixtureCleanup();
  });
});
