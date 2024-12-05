import { lines } from "../utils/mod.ts";

function checkXmas(grid: ("X" | "M" | "A" | "S")[][] | string[][], x: number, y: number, dx: number, dy: number): boolean {
  try {
    const result = grid[y][x] === "X"
      && grid[y + dy][x + dx] === "M"
      && grid[y + 2*dy][x + 2*dx] === "A"
      && grid[y + 3*dy][x + 3*dx] === "S"

      return result;
  } catch(_e) {
    return false;
  }
}

export function xmasCrossWord(input: string): number {
  const grid = lines(input).map(line => line.split(""));
  let count = 0;
  for (let y = 0; y < grid.length; y++) {
    const line = grid[y];
    for (let x = 0; x < line.length; x++) {
      if (checkXmas(grid, x, y, 1, 0)) count++;
      if (checkXmas(grid, x, y, -1, 0)) count++;
      if (checkXmas(grid, x, y, 0, 1)) count++;
      if (checkXmas(grid, x, y, 0, -1)) count++;

      if (checkXmas(grid, x, y, 1, 1)) count++;
      if (checkXmas(grid, x, y, -1, 1)) count++;
      if (checkXmas(grid, x, y, 1, -1)) count++;
      if (checkXmas(grid, x, y, -1, -1)) count++;
    }
  }
  return count;
}

function checkXShape(grid: string[][], x: number, y: number): boolean {
  try {
    return grid[y][x] === "A"
      && ((grid[x - 1][y - 1] + grid[x - 1][y + 1] === "MM"))
  } catch(_e) {
    return false;
  }
}

export function XShapedMasCrossWord(input: string): number {
  const grid = lines(input).map(line => line.split(""));
  let count = 0;
  for (let y = 0; y < grid.length; y++) {
    const line = grid[y];
    for (let x = 0; x < line.length; x++) {
      if (checkXShape(grid, x, y)) {
        count++;
        console.log(x, y)
      }
    }
  }
  return count;
}
