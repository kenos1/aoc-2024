import { getInput } from "../utils/mod.ts";
import { solution1 } from "./solution.ts";

const input = await getInput(import.meta.url);

console.log(solution1(input.trim()))
