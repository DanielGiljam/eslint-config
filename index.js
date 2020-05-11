module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "standard",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "array-bracket-spacing": [1, "never"],
    "comma-dangle": [1, "always-multiline"],
    "func-names": [1, "always"],
    "func-name-matching": [1, "always", {considerPropertyDescriptor: true}],
    "func-style": [1, "expression"],
    "import/order": [
      1,
      {
        pathGroups: [
          {pattern: "react", group: "external", position: "before"},
          {pattern: "next{,/**}", group: "external", position: "before"},
          {
            pattern: "{,@}xstate{,/**}",
            group: "external",
            position: "before",
          },
          {
            pattern: "{,react-,next-}i18next",
            group: "external",
            position: "before",
          },
          {
            pattern:
              "@material-ui/{core,icons,lab,pickers}{,/!(styles|colors)*}",
            group: "external",
            position: "before",
          },
          {
            pattern: "@material-ui/{core/styles,styles}{,/*}",
            group: "external",
            position: "before",
          },
          {
            pattern: "@material-ui/core/colors{,/*}",
            group: "external",
            position: "before",
          },
          {
            pattern: "{color,clsx}",
            group: "external",
            position: "before",
          },
          {
            pattern: "isomorphic-unfetch",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["unknown"],
        "newlines-between": "always",
        alphabetize: {order: "asc"},
      },
    ],
    "object-curly-spacing": [1, "never"],
    "react/jsx-curly-brace-presence": [1, {props: "always", children: "never"}],
    "react/jsx-sort-props": [
      1,
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    "react/react-in-jsx-scope": 0,
    "sort-imports": [
      1,
      {
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
      },
    ],
    "space-before-function-paren": [
      1,
      {
        named: "never",
        asyncArrow: "always",
      },
    ],
    quotes: [1, "double"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
