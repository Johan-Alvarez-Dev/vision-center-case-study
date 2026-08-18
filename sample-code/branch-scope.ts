export type Role = "Administrator" | "Manager" | "Operator";
export type BranchDecision =
  | { allowed: true; branchId: number; reason: "SessionBranch" | "AdministratorOverride" }
  | { allowed: false; reason: "NoActiveBranch" | "CrossBranchDenied" | "InvalidBranch" };

export interface BranchContext {
  role: Role;
  sessionBranchId: number | null;
}

export function resolveBranchAccess(
  context: BranchContext,
  requestedBranchId?: number,
): BranchDecision {
  if (requestedBranchId !== undefined && (!Number.isInteger(requestedBranchId) || requestedBranchId <= 0))
    return { allowed: false, reason: "InvalidBranch" };

  if (context.role === "Administrator" && requestedBranchId !== undefined)
    return { allowed: true, branchId: requestedBranchId, reason: "AdministratorOverride" };

  if (context.sessionBranchId === null)
    return { allowed: false, reason: "NoActiveBranch" };

  if (requestedBranchId !== undefined && requestedBranchId !== context.sessionBranchId)
    return { allowed: false, reason: "CrossBranchDenied" };

  return { allowed: true, branchId: context.sessionBranchId, reason: "SessionBranch" };
}
