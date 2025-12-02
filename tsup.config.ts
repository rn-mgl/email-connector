import { defineConfig } from "tsup";
import { resolve } from "path";

export default defineConfig({
  entry: ["src/server.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  target: "es2024",
  bundle: true,
  skipNodeModulesBundle: true,
  esbuildOptions(options) {
    options.alias = {
      "@": resolve("./src"),
    };
  },
});
