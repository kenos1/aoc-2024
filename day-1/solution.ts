// Because Math.abs only takes `number`s
function bigIntAbs(int: bigint): bigint {
  return int < 0 ? int * -1n : int;
}

function parseInput(input: string): [list1: bigint[], list2: bigint[]] {
  const lines = input.split("\n");

  const unorderedPairs = lines
    .filter((line) => line.trim() !== "")
    .map((line) =>
      line
        .split("   ")
        .map((element) => BigInt(parseInt(element)))
    );

  const list1 = unorderedPairs.map((pair) => pair[0]).sort((a, b) =>
    Number(a - b)
  );
  const list2 = unorderedPairs.map((pair) => pair[1]).sort((a, b) =>
    Number(a - b)
  );

  return [list1, list2]
}

export function solution(input: string): bigint {
  const [list1, list2] = parseInput(input)

  const result = list1
    .map((element, i) => bigIntAbs(element - list2[i]))
    .reduce((p, c) => p + c);

  return result;
}

export function simularityScore(input: string): bigint {
  const [list1, list2] = parseInput(input)

  const result = list1.map((element) =>
    element * BigInt(list2.filter((e) => e === element).length)
  ).reduce((p, c) => p + c);

  return result;
}
