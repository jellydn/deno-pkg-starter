import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  test: false,
  shims: {
    // see JS docs for overview and more options
    deno: {
      test: "dev",
    },
  },
  scriptModule: false,
  package: {
    // package.json properties
    name: "just-sum",
    version: Deno.args[0],
    description: "Sum two numbers.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/jellydn/deno-starter.git",
    },
    bugs: {
      url: "https://github.com/jellydn/deno-starter/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("TEMPLATE.md", "npm/README.md");
