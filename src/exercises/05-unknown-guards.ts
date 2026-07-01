/* ============================================================
 * EXERCISE 5 — unknown & User-Defined Type Guards
 * ============================================================
 * The safe alternative to `any`. No `any`. Run `npm run typecheck`.
 * ============================================================ */

export interface User {
  id: number;
  email: string;
}

/* ---- 5a. Type guard ---- */

export function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "number" &&
    "email" in value &&
    typeof value.email === "string"
  );
}

/* ---- 5b. Safe parse ---- */

export function parseUser(value: unknown): User | null {
  return isUser(value) ? value : null;
}

/* ---- 5c. String | Number → Number ---- */

export function toInt(value: string | number): number {
  if (typeof value === "number") {
    return value;
  }

  const parsed = Number(value);

  if (Number.isNaN(parsed)) {
    throw new Error("Invalid number");
  }

  return parsed;
}

// These run in the test harness:
export const sample: unknown = { id: 1, email: "a@b.com" };