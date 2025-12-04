import { build } from "esbuild";
import path from "path";

build({
  entryPoints: ["src/server.ts"],
  outfile: "dist/server.js",
  bundle: true,
  platform: "node",
  target: "node18",
  sourcemap: true,
  format: "esm",
  external: [],

  alias: {
    "@": path.resolve(process.cwd(), "src"),
  },
});
