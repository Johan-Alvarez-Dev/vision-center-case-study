import assert from "node:assert/strict";
import test from "node:test";
import { resolveBranchAccess } from "../sample-code/branch-scope.ts";

test("operator inherits the branch stored in the session", () => {
  assert.deepEqual(
    resolveBranchAccess({ role: "Operator", sessionBranchId: 3 }),
    { allowed: true, branchId: 3, reason: "SessionBranch" },
  );
});

test("operator cannot switch branch through a request parameter", () => {
  assert.deepEqual(
    resolveBranchAccess({ role: "Operator", sessionBranchId: 3 }, 9),
    { allowed: false, reason: "CrossBranchDenied" },
  );
});

test("administrator may select an explicit valid branch", () => {
  assert.deepEqual(
    resolveBranchAccess({ role: "Administrator", sessionBranchId: 3 }, 9),
    { allowed: true, branchId: 9, reason: "AdministratorOverride" },
  );
});

test("invalid branch identifiers fail closed", () => {
  assert.deepEqual(
    resolveBranchAccess({ role: "Administrator", sessionBranchId: 3 }, 0),
    { allowed: false, reason: "InvalidBranch" },
  );
});
