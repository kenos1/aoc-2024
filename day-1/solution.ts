// Because Math.abs only takes `number`s
function bigIntAbs(int: bigint): bigint {
  return int < 0 ? int * -1n : int;
}

export function solution(input: string): bigint {
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

  const result = list1
    .map((element, i) => bigIntAbs(element - list2[i]))
    .reduce((p, c) => p + c);

  return result;
}
