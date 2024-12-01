import { solution } from "./solution.ts";

const input = await Deno.readTextFile(new URL("input.txt", import.meta.url));

console.log(solution(input));
