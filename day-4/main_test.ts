import { assertEquals } from "@std/assert";
import { xmasCrossWord, XShapedMasCrossWord } from "./solution.ts";

Deno.test(function xmasCrossWordTest(){
  assertEquals(xmasCrossWord(`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`), 18)
  assertEquals(XShapedMasCrossWord(`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`), 9)
})
