/* ============================================================
 * EXERCISE 4 — Conditional Types & infer
 * ============================================================
 * No `any`. Run `npm run typecheck`.
 * ============================================================ */

/* ---- 4a. Flatten<T> ----
 * If T is an array, Flatten<T> is its element type; otherwise it is T.
 */

export type Flatten<T> = T extends (infer U)[] ? U : T;

// Compile-time checks (these are type-level assertions):
export const f1: Flatten<string[]> = "hello";
export const f2: Flatten<number> = 42;

/* ---- 4b. UnwrapPromise<T> ----
 * If T is a Promise<U>, give U; otherwise T.
 */

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export const u1: UnwrapPromise<Promise<boolean>> = true;
export const u2: UnwrapPromise<string> = "x";

/* ---- 4c. NonNullableFields<T> ----
 * Given an object type, produce a version where every field has null
 * and undefined removed from its type.
 */

export type NonNullableFields<T> = {
  [K in keyof T]: Exclude<T[K], null | undefined>;
};

type Raw = { a: string | null; b: number | undefined };

export const clean: NonNullableFields<Raw> = {
  a: "ok",
  b: 5,
};

export const bad: NonNullableFields<Raw> = {
  a: "bad",
  b: 5,
};