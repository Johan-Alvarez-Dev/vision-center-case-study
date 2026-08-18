import assert from "node:assert/strict";
import test from "node:test";
import { TtlLruCache } from "../sample-code/ttl-lru-cache.ts";

test("expires entries using an injected deterministic clock", () => {
  let now = 100;
  const cache = new TtlLruCache<string, number>(2, 50, { now: () => now });
  cache.set("patient:1", 1);
  now = 151;
  assert.equal(cache.get("patient:1"), undefined);
});

test("evicts the least recently used live entry", () => {
  const cache = new TtlLruCache<string, number>(2, 1000, { now: () => 0 });
  cache.set("a", 1); cache.set("b", 2);
  assert.equal(cache.get("a"), 1);
  cache.set("c", 3);
  assert.equal(cache.get("b"), undefined);
  assert.equal(cache.get("a"), 1);
});
