// deno-lint-ignore-file explicit-function-return-type
import { assertEquals } from "@std/assert";
import { extNums, foldl, lines, reduceBool } from "./mod.ts";

Deno.test(function extNumTest() {
  assertEquals(extNums("u3r3948r349r3u4"), [3, 3948, 349, 3, 4]);
});

Deno.test(function linesTest() {
  assertEquals(
    lines(`
Hello
World
`),
    ["Hello", "World"],
  );
});

Deno.test(function reduceBoolTest() {
  assertEquals(reduceBool([true, false, true]), false);
  assertEquals(reduceBool([true, true, true, true]), true)
})

Deno.test(function foldlTest() {
  assertEquals(foldl([3, 4, 5], 2, (acc, val) => acc * val), 120);
})
