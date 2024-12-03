import { assertEquals } from "@std/assert";
import { mul, mul2 } from "./solution.ts";

const input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"

Deno.test(function mulTest(): void {
  assertEquals(mul(input), 161)
})

const input2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"

Deno.test(function mulTest2(): void {
  assertEquals(mul2(input2), 48)
})
