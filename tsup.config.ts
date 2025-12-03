import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/server.ts"], // or your entry point
  format: ["esm"], // or 'cjs' depending on your setup
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  // Add this to resolve path aliases
  tsconfig: "./tsconfig.json",
});
