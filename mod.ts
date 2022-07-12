import { logger, add } from "./deps.ts";

logger.warn("hello from Deno :)");

export function sum(firstNumber: number, secondNumber: number) {
  return add(firstNumber, secondNumber);
}
