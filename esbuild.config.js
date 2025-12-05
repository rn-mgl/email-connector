import { build } from "esbuild";
import path from "path";

build({
  entryPoints: ["src/server.ts"],
  outfile: "dist/server.js",
  bundle: true,
  platform: "node",
  target: "node18",
  format: "esm",

  alias: {
    "@": path.resolve(__dirname, "src"),
  },

  sourcemap: true,
}).catch(() => process.exit(1));
