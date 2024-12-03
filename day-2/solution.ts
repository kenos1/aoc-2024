export function reactorSafety(input: string): number {
  return input
    .split("\n")
    .map((line) => line.split(" ").map((n) => parseInt(n)))
    .map((reports) =>
      reports.map((e, i, arr) => i === 0 ? arr[1] - arr[0] : e - arr[i - 1])
    )
    .map((report) =>
      report.map((e, i, arr) => {
        if (i == 0) return true;
        const l = arr[i - 1];
        if (e > 0 && l < 0) return false;
        if (e < 0 && l > 0) return false;
        if (Math.abs(e) < 1 || Math.abs(e) > 3) return false;
        return true;
      })
    )
    .filter((report) => report.filter((e) => e).length === report.length)
    .length;
}

export function reactorSafety2(input: string): number {
  return input
    .split("\n")
    .map((line) => line.split(" ").map((n) => parseInt(n)))
    .map((report) => {
      const buffer = [report];

      for (let i = 0; i < report.length; i++) {
        buffer.push(report.filter((_, j) => j !== i));
      }

      return buffer;
    })
    .map((reports) =>
      reports.map((r) =>
        r.map((e, i, arr) => i === 0 ? arr[1] - arr[0] : e - arr[i - 1])
      )
    )
    .map((reports) =>
      reports.map((r) =>
        r.map((e, i, arr) => {
          if (i == 0) return true;
          const l = arr[i - 1];
          if (e > 0 && l < 0) return false;
          if (e < 0 && l > 0) return false;
          if (Math.abs(e) < 1 || Math.abs(e) > 3) return false;
          return true;
        })
      )
    )
    .map((reports) =>
      reports.map((r) => r.filter((e) => e).length === r.length)
    )
    .filter((reports) => reports.find((e) => e)).length;
}
