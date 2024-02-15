module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "@typescript-eslint/no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
   
    "import/order": [
      "warn",
      {
        "groups": [
          ["external", "builtin", "internal"],
          ["parent", "sibling"],
          ["object", "type"],
          "index",
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        
      },
    ],
  },
};
