# Technical Decisions

## Branch from trusted session

Authorization derives scope from server-side session context, not freely supplied request parameters.

## Versioned SQL migrations

Structural changes have order and verification. Applied migration files are never rewritten.

## Logical deletion

Clinical and operational records are deactivated when traceability matters.

## Services between routes and SQL

HTTP routes remain thin and delegate validation/business behavior to reusable services.

## Reproducible performance claims

Percentages are not published without documented hardware, dataset, and measurement method.
