/* ============================================================
 * EXERCISE 7 — Async Typing & a Result<T, E> wrapper
 * ============================================================
 * No `any`. Run `npm run typecheck` AND `npm test`.
 * ============================================================ */

/* ---- 7a. Result type ---- */

export type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

// Helpers:
export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

export function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

/* ---- 7b. Safe division returning a Result ---- */

export function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return err("division by zero");
  }

  return ok(a / b);
}

/* ---- 7c. Async: typed fetch simulation ---- */

export async function loadOrder(
  id: number
): Promise<Result<{ id: number; total: number }, string>> {
  if (id > 0) {
    return ok({
      id,
      total: id * 10,
    });
  }

  return err("invalid id");
}