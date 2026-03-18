import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = defineConfig([
  ...compat.extends("airbnb", "airbnb/hooks"),
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "react/react-in-jsx-scope": "off", // Next.js doesn't need this
      "react/prop-types": "off",
      "no-console": "warn",
    }
  }
]);

export default eslintConfig;
