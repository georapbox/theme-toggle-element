[![npm version](https://img.shields.io/npm/v/@georapbox/theme-toggle-element.svg)](https://www.npmjs.com/package/@georapbox/theme-toggle-element)
[![npm license](https://img.shields.io/npm/l/@georapbox/theme-toggle-element.svg)](https://www.npmjs.com/package/@georapbox/theme-toggle-element)

[demo]: https://georapbox.github.io/theme-toggle-element/
[license]: https://georapbox.mit-license.org/@2022
[changelog]: https://github.com/georapbox/theme-toggle-element/blob/main/CHANGELOG.md

# &lt;theme-toggle&gt;

A custom element that allows you to toggle between dark and light theme.

## How it works

By default, if no specific theme is set, it determines the theme from user's system preferences using the `prefers-color-scheme` media query and registers to listen for changes. When the theme is changed, either by setting the `theme` attribute to the component or by changing the user's system preferences, the selected theme is saved in `localStorage` to be remembered in the future. A `data-theme` attibute is added to the `html` element of the document, with the appropriate value (light or dark). The attribute's name can be overriden by setting the `global-attr` attribute to the component.

[API documentation](#api) &bull; [Demo][demo]

## Install

```sh
$ npm install --save @georapbox/theme-toggle-element
```

## Usage

### Script

```js
import { ThemeToggle } from './node_modules/@georapbox/theme-toggle-element/dist/theme-toggle.min.js';

// Manually define the element.
ThemeToggle.defineCustomElement();
```

Alternatively, you can import the automatically defined custom element.

```js
import './node_modules/@georapbox/theme-toggle-element/dist/theme-toggle-defined.min.js';
```

### Markup

```html
<theme-toggle></theme-toggle>
```

### Style

The component comes with bare minimum styling by default to give more flexibility for styling customization. Check the [demo][demo] for examples.

## API

### Properties

| Name | Reflects | Type | Description |
| ---- | -------- | ---- | ----------- |
| `theme` | ✓ | String | Optional. The theme value to be set. Valid values are "light" or "dark". If omitted, it will be set according to system preferences. |
| `toggleTitle`<br>*`toggle-title`* | ✓ | String | Optional. The `title` attribute of the the toggle button. If omitted, the button's title is "Toggles theme between light & dark". |
| `globalAttr`<br>*`global-attr`* | ✓ | String | Optional. The attribute to be set to the `html` element of the document. If omitted, the attibute added is "data-theme". |

All of the above properties reflect their values as HTML attributes to keep the element's DOM representation in sync with its JavaScript state.

### Slots

| Name | Description |
| ---- | ----------- |
| `content-light` | The whole section of light content (icon & text). |
| `icon-light` | The icon for light theme. |
| `text-light` | The text for light theme. |
| `content-dark` | The whole section of dark content (icon & text). |
| `icon-dark` | The icon for dark theme. |
| `text-dark` | The text for dark theme. |

### CSS Parts

| Name | Description |
| ---- | ----------- |
| `theme-toggle` | The toggle button. |
| `theme-toggle__icon` | Both icons, light and dark. |
| `theme-toggle__icon--light` | The light icon. |
| `theme-toggle__icon--dark` | The dark icon. |
| `theme-toggle__text` | Both texts, light and dark. |
| `theme-toggle__text--light` | The light text. |
| `theme-toggle__text--dark` | The dark text. |

### CSS Custom Properties

| Name | Description |
| ---- | ----------- |
| `--icon-light-color` | The color of the icon when theme is light. |
| `--icon-dark-color` | The color of the icon when theme is dark. |
| `--text-light-color` | The color of the text when theme is light. |
| `--text-dark-color` | The color of the text when theme is dark. |

### Events

| Name | Description | Event Detail |
| ---- | ----------- | ------------ |
| `theme-toggle:theme-change` | Emitted when theme changes either by user's interaction or when system preferences change. | `{theme: 'light' \| 'dark'}` |

## Changelog

For API updates and breaking changes, check the [CHANGELOG][changelog].

## License

[The MIT License (MIT)][license]
