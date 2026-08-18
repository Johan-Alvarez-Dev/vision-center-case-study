import assert from "node:assert/strict";
import test from "node:test";
import { normalizePatientQuery } from "../sample-code/patient-query.ts";

test("normalizes whitespace and calculates a safe offset", () => {
  assert.deepEqual(normalizePatientQuery({ search: "  Ana   Diaz ", page: 3, pageSize: 20 }),
    { search: "Ana Diaz", offset: 40, limit: 20 });
});

test("rejects unbounded page sizes", () => {
  assert.throws(() => normalizePatientQuery({ pageSize: 500 }), RangeError);
});
