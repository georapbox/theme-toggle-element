[![npm version](https://img.shields.io/npm/v/@georapbox/theme-toggle-element.svg)](https://www.npmjs.com/package/@georapbox/theme-toggle-element)
[![npm license](https://img.shields.io/npm/l/@georapbox/theme-toggle-element.svg)](https://www.npmjs.com/package/@georapbox/theme-toggle-element)

[demo]: https://georapbox.github.io/theme-toggle-element/
[license]: https://georapbox.mit-license.org/@2022
[changelog]: https://github.com/georapbox/theme-toggle-element/blob/main/CHANGELOG.md

# &lt;theme-toggle&gt;

A custom element that allows you to toggle between light, dark and system theme.

## How it works

By default, the component determines the theme from user's system preferences using the `prefers-color-scheme` media query. When the theme is changed, by clicking the toggle button, the selected theme is saved in `localStorage` to be used in the future. A `data-theme` attibute is added to the root element of the document, with the appropriate value (light, dark, system).

[API documentation](#api) &bull; [Demo][demo]

## Install

```sh
$ npm install --save @georapbox/theme-toggle-element
```

## Usage

### Script

```js
import { ThemeToggle } from './node_modules/@georapbox/theme-toggle-element/dist/theme-toggle.js';

// Manually define the element.
ThemeToggle.defineCustomElement();
```

Alternatively, you can import the automatically defined custom element.

```js
import './node_modules/@georapbox/theme-toggle-element/dist/theme-toggle-defined.js';
```

### Markup

```html
<theme-toggle toggle-title="Toggle theme"></theme-toggle>
```

### Style

The component comes with default styling, but you can override it by using the [CSS Cuspom Properties](#css-custom-properties) or by using the [CSS Parts](#css-parts).

## API

### Properties

| Name | Reflects | Type | Required | Description |
| ---- | -------- | ---- | -------- |----------- |
| `toggleTitle`<br>*`toggle-title`* | ✓ | String | - | The `title` attribute of the toggle button. If omitted, the button's title changes according to the selected theme. |

### Slots

| Name | Description |
| ---- | ----------- |
| `light` | Override the default content for the light theme. |
| `dark` | Override the default content for the dark theme. |
| `system` | Override the default content for the system theme. |

### CSS Parts

| Name | Description |
| ---- | ----------- |
| `button` | The toggle button. |
| `icon-light` | The light theme icon. |
| `icon-dark` | The dark theme icon. |
| `icon-system` | The system theme icon. |

### CSS Custom Properties

| Name | Default | Description |
| ---- | ------- | ----------- |
| `--icon-color` | `currentColor` | The color of the icon. |
| `--icon-size` | `24px` | The size of the icon (width & height). |

### Events

| Name | Description | Event Detail |
| ---- | ----------- | ------------ |
| `theme-toggle:change` | Emitted when theme changes by user's interaction. | `{theme: 'light' \| 'dark' \| 'system'}` |


### Usage example

```html
  <style>
    :root {
      --body-color: #000;
      --body-bg-color: #fff;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --body-color: #fff;
        --body-bg-color: #000;
      }
    }

    :root[data-theme="light"] {
      --body-color: #000;
      --body-bg-color: #fff;
    }

    :root[data-theme="dark"] {
      --body-color: #fff;
      --body-bg-color: #000;
    }

    theme-toggle:not(:defined) {
      display: none;
    }
    
    theme-toggle {
      --icon-size: 32px;
      --icon-color: currentColor;
    }

    theme-toggle::part(button) {
      padding: 0.5rem;
      border: 1px solid var(--body-color);
    }
  </style>

  <theme-toggle></theme-toggle>

  <script>
    import { ThemeToggle } from './node_modules/@georapbox/theme-toggle-element/dist/theme-toggle.js';

    ThemeToggle.defineCustomElement();

    documemt.addEventListener('theme-toggle:change', evt => {
      console.log('theme-toggle:change ->', evt.detail);
    });
  </script>
```

## Changelog

For API updates and breaking changes, check the [CHANGELOG][changelog].

## License

[The MIT License (MIT)][license]
