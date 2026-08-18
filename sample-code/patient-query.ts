export interface PatientQuery { search?: string; page?: number; pageSize?: number }
export interface NormalizedPatientQuery { search: string; offset: number; limit: number }

export function normalizePatientQuery(query: PatientQuery): NormalizedPatientQuery {
  const page = query.page ?? 1;
  const pageSize = query.pageSize ?? 25;
  if (!Number.isInteger(page) || page < 1) throw new RangeError("page must be a positive integer");
  if (!Number.isInteger(pageSize) || pageSize < 1 || pageSize > 100)
    throw new RangeError("pageSize must be between 1 and 100");

  return {
    search: (query.search ?? "").trim().replace(/\s+/g, " ").slice(0, 100),
    offset: (page - 1) * pageSize,
    limit: pageSize,
  };
}
