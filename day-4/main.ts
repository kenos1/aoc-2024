import { getInput } from "../utils/mod.ts";
import { xmasCrossWord } from "./solution.ts";

const input = await getInput(import.meta.url);

console.log(xmasCrossWord(input.trim()))
