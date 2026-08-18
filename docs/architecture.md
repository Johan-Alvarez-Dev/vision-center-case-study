# Public Architecture

Vision Center uses Next.js as the UI and HTTP boundary. API routes delegate to typed services; SQL Server owns durable data operations; Azure Blob Storage owns binary documents.

## Security context

The session resolves user, role, and active branch. Services receive authorized context and never trust a body/query `branchId` as the only access proof. Administrators switch branch through an explicit audited flow.

## Modules

Patients, appointments, clinical records, prescriptions, inventory, billing, configuration, and users share TypeScript contracts and error conventions.

## Performance

Heavy modules load on demand. Cache entries have both TTL and bounded capacity. Loading/error/empty states are part of the feature contract, especially on constrained devices.
