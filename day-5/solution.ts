import { extNums, lines } from "../utils/mod.ts";

export function solution1(input: string): number {
  const [rules, update] = input.split("\n\n");
  const ruleNumbers = lines(rules).map((line) => extNums(line))
    .map((rule) => ({
      value: rule[0],
      after: rule[1],
    }));

  const correctRules = ruleNumbers.filter((rule, i, arr) =>
    arr.findIndex((r) => r.value === rule.value) === i
  ).map((rule) => ({
    value: rule.value,
    before: ruleNumbers.filter((r) => r.after === rule.value).map((r) =>
      r.value
    ),
    after: ruleNumbers.filter((r) => r.value === rule.value).map((r) =>
      r.after
    ),
  }));

  const updates = lines(update).map((line) => extNums(line));
  const validUpdates = updates
    .map((update) =>
      update.map((value) => correctRules.find((v) => v.value === value))
        .filter((v) => v !== undefined)
        .map(
          (value, i) => {
            const before = update.slice(0, i);
            const after = update.slice(i + 1);

            return (before.length === 0
              ? true
              : before.map((v) => value.before.includes(v)).reduce((a, b) =>
                !b ? false : a
              )) &&
              (after.length === 0
                ? true
                : after.map((v) => value.after.includes(v)).reduce((a, b) =>
                  !b ? false : a
                ));
          },
        ).reduce((a, b) => !b ? false : a)
    ).map((v, i) => {
      if (!v) return 0;
      const update = updates[i];
      return update[Math.floor(update.length / 2)];
    });

  return validUpdates.reduce((a, b) => a + b);
}

export function solution2(input: string): number {
  const [rules, update] = input.split("\n\n");
  const ruleNumbers = lines(rules).map((line) => extNums(line))
    .map((rule) => ({
      value: rule[0],
      after: rule[1],
    }));

  const correctRules = ruleNumbers.filter((rule, i, arr) =>
    arr.findIndex((r) => r.value === rule.value) === i
  ).map((rule) => ({
    value: rule.value,
    before: ruleNumbers.filter((r) => r.after === rule.value).map((r) =>
      r.value
    ),
    after: ruleNumbers.filter((r) => r.value === rule.value).map((r) =>
      r.after
    ),
  }));

  const updates = lines(update).map((line) => extNums(line));
  const correctUpdates = updates
    .map((update) =>
      update.map((value) =>
        correctRules.find((v) => v.value === value) ??
          { value, before: [], after: [] }
      )
    )
    .map((update) =>
      update.sort((a, b) => a.before.length - b.before.length).map((u) =>
        u.value
      )
    )
    .map((update) => update[Math.floor(update.length / 2)]);

  return correctUpdates.reduce((a, b) => a + b);
}
