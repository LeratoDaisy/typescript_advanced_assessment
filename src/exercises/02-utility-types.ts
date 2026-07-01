/* ============================================================
 * EXERCISE 2 — Utility Types (Partial, Pick, Omit, Record)
 * ============================================================
 * No `any`. Run `npm run typecheck`.
 * ============================================================ */

import type { Product } from "./01-generic-constraints.ts";

/* ---- 2a. Partial for updates ----
 * `updateProduct` takes a product and a set of changes where EVERY
 * field is optional, and returns the merged product. Use Partial. */

export function updateProduct(
  product: Product,
  changes: Partial<Product>
): Product {
  return {
    ...product,
    ...changes,
  };
}

/* ---- 2b. Pick ----
 * `ProductPreview` is just the id and name of a Product. */

export type ProductPreview = Pick<Product, "id" | "name">;

export const preview: ProductPreview = {
  id: 1,
  name: "Mug",
};

/* ---- 2c. Omit ----
 * `NewProduct` is a Product WITHOUT the id. */

export type NewProduct = Omit<Product, "id">;

export const draft: NewProduct = {
  name: "Pen",
  price: 15,
  inStock: true,
};

/* ---- 2d. Record ----
 * `priceList` maps a product name to its price.
 */

export type PriceList = Record<string, number>;

export function buildPriceList(items: Product[]): PriceList {
  const priceList: PriceList = {};

  for (const item of items) {
    priceList[item.name] = item.price;
  }

  return priceList;
}

export const badDraft: NewProduct = {
  name: "Pen",
  price: 15,
  inStock: true,
};