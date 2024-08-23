[![npm version](https://img.shields.io/npm/v/@georapbox/theme-toggle-element.svg)](https://www.npmjs.com/package/@georapbox/theme-toggle-element)
[![npm license](https://img.shields.io/npm/l/@georapbox/theme-toggle-element.svg)](https://www.npmjs.com/package/@georapbox/theme-toggle-element)

[demo]: https://georapbox.github.io/theme-toggle-element/
[license]: https://github.com/georapbox/theme-toggle-element/blob/main/LICENSE
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

The component comes with a bare minimum style, but you can override it by using the [CSS Parts](#css-parts) provided. See the [usage example](#usage-example) for more details.

## API

### Properties

| Name | Reflects | Type | Required | Description |
| ---- | -------- | ---- | -------- |------------ |
| `noStorage`<br>*`no-storage`* | ✓ | Boolean | - | Indicates whether the theme state should be persisted to local storage. Any previously saved preference is ignored, but is not removed from local storage. |
| `storageKey`<br>*`storage-key`* | ✓ | String | - | The key to be used in local storage to save the theme preference. If omitted, the default value is `theme-toggle/theme-preference`. If `noStorage` is `true`, this property is ignored. |
| `noIcon`<br>*`no-icon`* | ✓ | Boolean | - | Indicates whether the icon should be displayed or not. |
| `noLabel`<br>*`no-label`* | ✓ | Boolean | - | Indicates whether the label should be displayed or not. For accessibility reasons, the label is only visually hidden, but still available to screen readers. |

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
| `icon` | The icon's wrapper element (including the light, dark and system theme icons). |
| `icon-light` | The light theme icon's wrapper element. |
| `icon-dark` | The dark theme icon's wrapper element. |
| `icon-system` | The system theme icon's wrapper element. |
| `label` | The label's wrapper element (including the light, dark and system theme labels). |
| `label-light` | The light theme label's wrapper element. |
| `label-dark` | The dark theme label's wrapper element. |
| `label-system` | The system theme label's wrapper element. |

### Methods

| Name | Type | Description | Arguments |
| ---- | ---- | ----------- | --------- |
| `defineCustomElement` | Static | Defines/registers the custom element with the name provided. If no name is provided, the default name is used. The method checks if the element is already defined, hence will skip trying to redefine it. | `elementName='theme-toggle'` |

### Events

| Name | Description | Event Detail |
| ---- | ----------- | ------------ |
| `tt-theme-change` | Emitted when theme changes by user's interaction. | `{theme: 'light' \| 'dark' \| 'system'}` |


### Usage example

#### HTML

```html
<theme-toggle></theme-toggle>
```

#### CSS

Customize the component's appearance by using CSS custom properties and CSS parts.

```css
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
```

#### JavaScript

```js
import { ThemeToggle } from './node_modules/@georapbox/theme-toggle-element/dist/theme-toggle.js';

ThemeToggle.defineCustomElement();

documemt.addEventListener('tt-theme-change', evt => {
  console.log('tt-theme-change ->', evt.detail);
});
```

## Changelog

For API updates and breaking changes, check the [CHANGELOG][changelog].

## Development setup

### Prerequisites

The project requires `Node.js` and `npm` to be installed on your environment. Preferrably, use [nvm](https://github.com/nvm-sh/nvm) Node Version Manager and use the version of Node.js specified in the `.nvmrc` file by running `nvm use`.

### Install dependencies

Install the project dependencies by running the following command.

```sh
npm install
```

### Build for development

Watch for changes and start a development server by running the following command.

```sh
npm start
```

### Linting

Lint the code by running the following command.

```sh
npm run lint
```

### Testing

Run the tests by running any of the following commands.

```sh
npm test
npm run test:watch # watch mode
```

### Build for production

Create a production build by running the following command.

```sh
npm run build
```

## License

[The MIT License (MIT)][license]
