export interface Clock { now(): number }

interface Entry<T> { value: T; expiresAt: number }

export class TtlLruCache<K, V> {
  readonly #entries = new Map<K, Entry<V>>();
  readonly capacity: number;
  readonly ttlMs: number;
  readonly clock: Clock;

  constructor(
    capacity: number,
    ttlMs: number,
    clock: Clock = { now: () => Date.now() },
  ) {
    if (!Number.isInteger(capacity) || capacity <= 0) throw new RangeError("capacity must be positive");
    if (!Number.isFinite(ttlMs) || ttlMs <= 0) throw new RangeError("ttlMs must be positive");
    this.capacity = capacity;
    this.ttlMs = ttlMs;
    this.clock = clock;
  }

  get size(): number {
    this.#removeExpired();
    return this.#entries.size;
  }

  get(key: K): V | undefined {
    const entry = this.#entries.get(key);
    if (!entry) return undefined;
    if (entry.expiresAt <= this.clock.now()) {
      this.#entries.delete(key);
      return undefined;
    }
    this.#entries.delete(key);
    this.#entries.set(key, entry);
    return entry.value;
  }

  set(key: K, value: V): void {
    this.#removeExpired();
    this.#entries.delete(key);
    this.#entries.set(key, { value, expiresAt: this.clock.now() + this.ttlMs });
    while (this.#entries.size > this.capacity) {
      const oldest = this.#entries.keys().next().value as K | undefined;
      if (oldest === undefined) break;
      this.#entries.delete(oldest);
    }
  }

  #removeExpired(): void {
    const now = this.clock.now();
    for (const [key, entry] of this.#entries) if (entry.expiresAt <= now) this.#entries.delete(key);
  }
}
