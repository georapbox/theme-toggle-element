# CHANGELOG

## v4.0.0 (2023-11-06)

> Documentation for `v3.0.0` can be found [here](https://www.npmjs.com/package/@georapbox/theme-toggle-element/v/3.0.0).

### Breaking Changes

- Remove `toggle-title` attribute. User can still use the `title` attribute to set the title of the component.
- Remove CSS custom properties.
- Rename CSS Part `button` to `base`.
- Add a default label next to the icon for each theme.
- Rename emitted event `theme-toggle:change` to `tt-theme-change`.

### Other Changes

- Add new slots for overriding the default content for icons and labels for each theme.
- Add new CSS Parts for customizing the icon and label for each theme.
- Add new attribute `no-icon` to hide the icon.
- Add new attribute `no-label` to hide the label.
- Generate types declarations for the component.

### Bug Fixes

- Fix changing the `storage-key` attribute or the equivalent property at runtime, not updating the theme appropriately.

## v3.0.0 (2023-03-02)

### Breaking Changes

Re-write the component to support three-state theme toggle (system, light, dark).

## v2.0.0 (2022-11-18)

- Replace rollup.js with parcel.js for bundling.
- Update dev dependencies.

### Breaking Changes

- Only minified production builds will be included in the `dist` folder from now on.

## v1.0.0 (2022-10-27)

- Initial release
