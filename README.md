# @danielgiljam/eslint-config

The [ESLint] config I use.

## How To Use

Install [@danielgiljam/eslint-config] and its peer dependencies.

```bash
npm i @danielgiljam/eslint-config @typescript-eslint/eslint-plugin@^4.0.1 @typescript-eslint/parser@^4.0.0 eslint@^7.12.1 eslint-config-prettier@^8.3.0 eslint-config-standard-jsx@^10.0.0 eslint-config-standard-with-typescript@^21.0.1 eslint-plugin-import@^2.25.4 eslint-plugin-node@^11.1.0 eslint-plugin-promise@^5.0.0 eslint-plugin-react@^7.28.0 typescript@^4.5.5
```

Create a file called `.eslintrc.js`.

```bash
touch .eslintrc.js
```

Export an ESLint config from `.eslintrc.js` that extends [@danielgiljam/eslint-config].

```js
module.exports = {extends: "@danielgiljam"}
```

## Recommended Setup

The recommended way to use [@danielgiljam/eslint-config] is together with [@danielgiljam/prettierrc] and [Prettier].

[ESLint] catches/fixes potential bugs and problems and [Prettier] reprints the code to ensure the format is right and the style is consistent.

You can implement these tools into your development workflow however you like. However, my personal favorite ways of implementing them are the following:

### Fix and Format Code In Place With An NPM script

1. Modify your `package.json` to include the following NPM scripts:
   ```json
   {
     "scripts": {
       "fix": "eslint --fix .",
       "format": "prettier --write .",
       "ff": "npm run fix && npm run format"
     }
   }
   ```
2. Typing `npm run ff` in your terminal then applies [@danielgiljam/eslint-config] and [@danielgiljam/prettierrc] to your source code.

### Fix and Format On Save in Visual Studio Code

1. Install the following extensions:
   - [`vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [`prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [`format-code-action`](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action)
2. Make the following changes to your settings:
   ```json
   {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": false,
     "editor.codeActionsOnSave": [
       "source.fixAll.eslint",
       "source.fixAll.format"
     ]
   }
   ```
3. Now when you save a file, it will first be fixed and then formatted in place.

## Version History

View [changelog](https://github.com/DanielGiljam/eslint-config/blob/master/CHANGELOG.md).

[@danielgiljam/eslint-config]: https://www.npmjs.com/package/@danielgiljam/eslint-config
[@danielgiljam/prettierrc]: https://www.npmjs.com/package/@danielgiljam/prettierrc
[eslint]: (https://eslint.org/)
[prettier]: (https://prettier.io/)
