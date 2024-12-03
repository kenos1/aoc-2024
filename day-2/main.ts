import { reactorSafety, reactorSafety2 } from "./solution.ts";

const input = (await Deno.readTextFile(new URL("./input.txt", import.meta.url)))
  .trim();

console.log(reactorSafety(input));
console.log(reactorSafety2(input));
