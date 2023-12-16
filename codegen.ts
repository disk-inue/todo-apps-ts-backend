import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/schema/**/*.graphql",
  emitLegacyCommonJSImports: false,
  generates: {
    "src/schema": defineConfig(),
  },
};

export default config;
