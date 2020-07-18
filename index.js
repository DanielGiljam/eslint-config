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
      extends: "prettier/@typescript-eslint",
    },
    {
      files: ["*.jsx", "*.tsx"],
      extends: ["standard-jsx", "prettier/react"],
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
      },
    },
  ],
}
