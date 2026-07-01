/* ============================================================
 * EXERCISE 9 — Function Overloads
 * ============================================================
 * No `any`. Run `npm run typecheck` AND `npm test`.
 * ============================================================ */

/* ---- 9a. Overloaded `parseInput` ---- */

// overload 1: string -> string[]
export function parseInput(value: string): string[];

// overload 2: number -> number[]
export function parseInput(value: number): number[];

// implementation
export function parseInput(value: string | number): string[] | number[] {
  if (typeof value === "string") {
    return value.split(",");
  }

  return [value];
}

/* ---- 9b. Prove the overloads resolve ---- */
export const a = parseInput("x,y,z"); // string[]
export const b = parseInput(7);       // number[]

// @ts-expect-error boolean is not an accepted input
parseInput(true);