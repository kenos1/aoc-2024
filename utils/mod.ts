const extNumsRegex = /\d+/gm;
export function extNums(input: string): number[] {
  return Array.from(input.matchAll(extNumsRegex).map(([str]) => parseInt(str)));
}

export function lines(input: string): string[] {
  return input.trim().split("\n");
}

export function reduceBool(input: boolean[]): boolean {
  return input.filter(b => b).length === input.length;
}

export async function getInput(base: string): Promise<string> {
  return await Deno.readTextFile(new URL("input.txt", base));
}

export function foldl<T, R>(input: T[], start: R, func: (acc: R, val: T) => R): R {
  let acc = start;
  for (const element of input) {
    acc = func(acc, element)
  }
  return acc;
}

export function foldr<T, R>(input: T[], start: R, func: (acc: R, val: T) => R): R {
  let acc = start;
  for (const element of input.toReversed()) {
    acc = func(acc, element)
  }
  return acc;
}
