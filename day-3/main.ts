import { mul, mul2 } from "./solution.ts";

const input = await Deno.readTextFile(new URL("input.txt", import.meta.url));

console.log(mul(input))
console.log(mul2(input))
