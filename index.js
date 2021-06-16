module.exports = {
  root: true,
  extends: ["standard-with-typescript", "prettier"],
  rules: {
    "func-names": [1, "always"],
    "func-name-matching": [1, "always", {considerPropertyDescriptor: true}],
    "func-style": [1, "expression"],
    "import/order": [
      1,
      {
        pathGroupsExcludedImportTypes: ["unknown"],
        "newlines-between": "always",
        alphabetize: {order: "asc"},
      },
    ],
    "no-unused-vars": [2, {args: "all", argsIgnorePattern: "^_"}],
    quotes: [1, "double", {avoidEscape: true, allowTemplateLiterals: false}],
    "sort-imports": [
      1,
      {
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-namespace": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-unused-vars": [
          2,
          {args: "all", argsIgnorePattern: "^_"},
        ],
        "no-unused-vars": 0,
      },
    },
    {
      files: ["*.jsx", "*.tsx"],
      extends: ["standard-jsx", "prettier"],
      rules: {
        "react/jsx-curly-brace-presence": [
          1,
          {props: "always", children: "never"},
        ],
        "react/jsx-sort-props": [
          1,
          {
            callbacksLast: true,
            shorthandLast: true,
            ignoreCase: true,
            reservedFirst: true,
          },
        ],
        "react/react-in-jsx-scope": 1,
      },
    },
  ],
}
