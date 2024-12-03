import { assertEquals } from "@std/assert";
import { reactorSafety, reactorSafety2 } from "./solution.ts";

const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

Deno.test(function reactorSafetyTest() {
  assertEquals(reactorSafety(input), 2);
});
Deno.test(function reactorSafetyTest2() {
  assertEquals(reactorSafety2(input), 4);
});
