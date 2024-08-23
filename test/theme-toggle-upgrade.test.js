import { elementUpdated, expect, fixture, fixtureCleanup, html } from '@open-wc/testing';
import { ThemeToggle } from '../src/theme-toggle.js';

describe('theme-toggle upgrading', () => {
  it('default properties', async () => {
    const el = await fixture(html`<theme-toggle></theme-toggle>`);

    // Update properties before upgrading
    el.noStorage = true;
    el.storageKey = 'STORAGE_KEY';
    el.noIcon = true;
    el.noLabel = true;

    // Upgrade custom element
    ThemeToggle.defineCustomElement();

    await elementUpdated(el);

    expect(el.getAttribute('no-storage')).to.equal('');
    expect(el.getAttribute('storage-key')).to.equal('STORAGE_KEY');
    expect(el.getAttribute('no-icon')).to.equal('');
    expect(el.getAttribute('no-label')).to.equal('');
  });

  afterEach(() => {
    fixtureCleanup();
  });
});
