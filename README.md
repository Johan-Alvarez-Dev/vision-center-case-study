# Vision Center — Optical Clinic Management

### Multi-branch clinical and commercial workflows built with Next.js, TypeScript, and SQL Server

[![Next.js 15](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs)](https://nextjs.org/) [![React 19](https://img.shields.io/badge/React-19-149ECA?logo=react)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript)](https://www.typescriptlang.org/) [![SQL Server](https://img.shields.io/badge/SQL_Server-Azure-CC2927?logo=microsoftsqlserver)](https://www.microsoft.com/sql-server/)
[![Public sample CI](https://github.com/Johan-Alvarez-Dev/vision-center-case-study/actions/workflows/ci.yml/badge.svg)](https://github.com/Johan-Alvarez-Dev/vision-center-case-study/actions/workflows/ci.yml)

Vision Center connects patients, appointments, clinical records, optical prescriptions, inventory, billing, documents, and user management under a multi-branch authorization model.

> This project demonstrates my TypeScript/Next.js side. It does not claim to be a .NET application. Clinical data, SQL schema, documents, and production source remain private.

[Open the live demo](https://vision-center-app.vercel.app/) · [Product tour](./docs/product-tour.md) · [Architecture](./docs/architecture.md) · [Code samples](./sample-code) · [Video](#video-walkthrough)

<picture>
  <source media="(max-width: 900px)" srcset="./screenshots/vision-center-appointments-light-900.webp">
  <img src="./screenshots/vision-center-appointments-light-1600.webp" alt="Vision Center appointment calendar with an empty synthetic day" width="1600">
</picture>

## The problem

An optical clinic must connect clinical and commercial workflows without leaking records across branches. The application also needs to remain usable on constrained front-desk hardware.

## My role

I implemented the full-stack Next.js application: UI flows, API routes, TypeScript services, SQL Server integration, sessions/roles, Azure Blob Storage, multi-branch authorization, and performance-oriented loading/caching.

## Engineering highlights

- Next.js App Router and React 19.
- Typed API routes and service boundaries.
- Azure SQL / SQL Server stored procedures and versioned migrations.
- Persisted sessions, bcrypt password hashing, and role checks.
- Branch isolation across patients, inventory, and billing.
- Azure Blob Storage for documents.
- Lazy loading, bounded TTL/LRU caching, and device-aware UI behavior.
- Logical deletion and audit-friendly data handling.

## Architecture

```mermaid
flowchart LR
  UI["Next.js · React"] --> Routes["API routes"]
  Routes --> Services["Typed services"]
  Services --> SQL["Azure SQL"]
  Services --> Blob["Azure Blob Storage"]
  Session["Session · role · branch"] --> Routes
```

Read [architecture](./docs/architecture.md), [decisions](./docs/decisions.md), and [engineering evidence](./docs/engineering-evidence.md).

## Public code samples

| Sample | Demonstrates |
| --- | --- |
| `branch-scope.ts` | Fail-closed branch authorization |
| `ttl-lru-cache.ts` | Bounded caching with deterministic expiry |
| `patient-query.ts` | Normalized pagination/filter contracts |
| Node tests | Branch isolation, cache eviction, invalid input |

```bash
npm test
```

## Evidence standard

Private documentation records historical performance improvements, but this case study does not publish percentages until hardware, sample size, and reproduction steps are available. It demonstrates the underlying techniques instead.

## Challenges addressed

1. Deriving branch scope from trusted session state rather than request input.
2. Keeping clinical records and billing isolated by branch.
3. Managing SQL migrations without editing applied history.
4. Reducing initial work on constrained devices.
5. Separating route transport from reusable service logic.

## Demo and boundaries

[Open the live demo](https://vision-center-app.vercel.app/). Clinical data, documents, SQL schema, credentials, and production source remain private.

The [product tour](./docs/product-tour.md) intentionally includes only screens without patient-identifying or billing data.

## Video walkthrough

The 4-second preview demonstrates the administrative shell and data-dense clinical workflows. Record-level content is deliberately redacted because privacy is part of the engineering boundary, not a presentation afterthought.

<p align="center">
  <a href="./media/vision-center-walkthrough.gif">
    <img src="./media/vision-center-walkthrough.gif" alt="Vision Center clinical administration walkthrough with record-level data redacted" width="640">
  </a>
</p>

Open the privacy-safe animation at full size or review the [annotated product tour](./docs/product-tour.md).

## License

MIT applies only to the public samples.
