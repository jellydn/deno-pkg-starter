import { config, logger } from "./deps.ts";

const { GREETING } = config();

function main() {
  logger.warn("hello from Deno :)");
  logger.warn(GREETING);
}

main();
