export function mul(input: string): number {
  const calls = input.matchAll(/mul\([0-9]+,[0-9]+\)/g);

  return calls.map(call => {
    const [string] = call;
    const [a, b] = string.slice("mul(".length, -1).split(",").map(n => parseInt(n))
    return a * b
  }).reduce((a, b) => a + b);
}

export function mul2(input: string): number {
  const calls = input.matchAll(/(mul\([0-9]+,[0-9]+\))|(do\(\))|(don't\(\))/g);

  let result;
  result = 0;

  let on;
  on = true;

  for (const call of calls) {
    const [string] = call;

    if (string === "do()") on = true;
    else if (string === "don't()") on = false;
    else {
      if (!on) continue;
      const [a, b] = string.slice("mul(".length, -1).split(",").map(n => parseInt(n))
      result += a * b;
    }
  }

  return result;
}
