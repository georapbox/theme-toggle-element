[![npm version](https://img.shields.io/npm/v/@georapbox/theme-toggle-element.svg)](https://www.npmjs.com/package/@georapbox/theme-toggle-element)
[![npm license](https://img.shields.io/npm/l/@georapbox/theme-toggle-element.svg)](https://www.npmjs.com/package/@georapbox/theme-toggle-element)

[demo]: https://georapbox.github.io/theme-toggle-element/
[demo-example-5]: https://georapbox.github.io/theme-toggle-element#example-5
[license]: https://georapbox.mit-license.org/@2022
[changelog]: https://github.com/georapbox/theme-toggle-element/blob/main/CHANGELOG.md

# &lt;theme-toggle&gt;

A custom element that allows you to toggle between light, dark and system theme.

## How it works

By default, the component determines the theme from user's system preferences using the `prefers-color-scheme` media query. When the theme is changed, by clicking the toggle button, the selected theme is saved in `localStorage` if `noStorage` is `false` (default). A `data-theme` attibute is added to the root element of the document, with the appropriate value (light, dark, system). The default value is `system`, but if the user has previously selected a theme and the `noStorage` property is not set to `true`, the saved theme is used instead.

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
<theme-toggle storage-key="theme-preference"></theme-toggle>
```

### Style

The component comes with a bare minimum style, but you can override it by using the [CSS Parts](#css-parts) provided. A working example of styling the component can be found [here][demo-example-5]. Below are demonstrated some available parts for styling.

```css
theme-toggle:not(:defined) {
  display: none;
}

theme-toggle::part(base) {
  border: 1px solid #0d6efd;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  background-color: #0d6efd;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
}

@media (hover: hover) {
  theme-toggle::part(base):hover {
    border-color: #0a58ca;
    background-color: #0b5ed7;
  }
}
```

## API

### Properties

| Name | Reflects | Type | Required | Description |
| ---- | -------- | ---- | -------- |------------ |
| `noStorage`<br>*`no-storage`* | ✓ | Boolean | - | If `true`, the theme preference is not saved in `localStorage`. Any previously saved preference is ignored, but is not removed from `localStorage`. |
| `storageKey`<br>*`storage-key`* | ✓ | String | - | The key to be used in `localStorage` to save the theme preference. If omitted, the default value is `theme-toggle/theme-preference`. If `noStorage` is `true`, this property is ignored. |

### Slots

| Name | Description |
| ---- | ----------- |
| `light` | The content for the light theme (icon and label). |
| `icon-light` | The content for the light theme icon. |
| `label-light` | The content for the light theme label. |
| `dark` | The content for the dark theme (icon and label). |
| `icon-dark` | The content for the dark theme icon. |
| `label-dark` | The content for the dark theme label. |
| `system` | The content for the system theme (icon and label). |
| `icon-system` | The content for the system theme icon. |
| `label-system` | The content for the system theme label. |

### CSS Parts

| Name | Description |
| ---- | ----------- |
| `base` | The componen'ts base wrapper. In this case this is a native `<button>` element. |
| `icon` | The icon element, including the light, dark and system theme icons. |
| `icon-light` | The light theme icon. |
| `icon-dark` | The dark theme icon. |
| `icon-system` | The system theme icon. |
| `label` | The label element, including the light, dark and system theme labels. |
| `label-light` | The light theme label. |
| `label-dark` | The dark theme label. |
| `label-system` | The system theme label. |

### Events

| Name | Description | Event Detail |
| ---- | ----------- | ------------ |
| `theme-change` | Emitted when theme changes by user's interaction. | `{theme: 'light' \| 'dark' \| 'system'}` |


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

    theme-toggle::part(base) {
      border: 1px solid var(--body-color);
    }
  </style>

  <theme-toggle></theme-toggle>

  <script>
    import { ThemeToggle } from './node_modules/@georapbox/theme-toggle-element/dist/theme-toggle.js';

    ThemeToggle.defineCustomElement();

    documemt.addEventListener('theme-change', evt => {
      console.log('theme-change ->', evt.detail);
    });
  </script>
```

## Changelog

For API updates and breaking changes, check the [CHANGELOG][changelog].

## License

[The MIT License (MIT)][license]
