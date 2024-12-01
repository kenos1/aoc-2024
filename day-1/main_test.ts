import { assertEquals } from "@std/assert";
import { simularityScore, solution } from "./solution.ts";

const input = `3   4
4   3
2   5
1   3
3   9
3   3`;

Deno.test(function test() {
  assertEquals(solution(input), 11n);
});

Deno.test(function simularityScoreTest() {
  assertEquals(simularityScore(input), 31n);
});
