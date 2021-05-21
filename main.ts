import { config, logger } from "./deps.ts";

const { GREETING } = config();

async function main() {
  logger.warn("hello from Deno :)");
  logger.warn(GREETING);
}

await main();
