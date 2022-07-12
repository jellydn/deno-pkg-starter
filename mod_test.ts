// url_test.ts
import { assertEquals } from "https://deno.land/std@0.147.0/testing/asserts.ts";
import { sum } from "./mod.ts";

Deno.test("sum test", () => {
  assertEquals(sum(1, 2), 3);
});
