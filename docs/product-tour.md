# Vision Center product tour

This public gallery is intentionally limited to views without patient-identifying or billing data. Open the [live demo](https://vision-center-demo-guide.vercel.app/demo) to explore the guided, privacy-safe experience.

## Privacy-safe walkthrough

The silent preview demonstrates the administrative shell and data-dense workflows while deliberately redacting all record-level content.

<p align="center">
  <a href="../media/vision-center-walkthrough.gif">
    <img src="../media/vision-center-walkthrough.gif" alt="Vision Center clinical administration walkthrough with record-level data redacted" width="640">
  </a>
</p>

## Appointment workflow

The schedule combines calendar navigation, daily appointments, search, and completion summaries while keeping branch context at the server boundary.

<picture>
  <source media="(max-width: 900px)" srcset="../screenshots/vision-center-appointments-light-900.webp">
  <img src="../screenshots/vision-center-appointments-light-1600.webp" alt="Vision Center appointment calendar with an empty synthetic day" width="1600">
</picture>

## Authentication

Clinical and commercial workflows remain behind a dedicated authentication boundary.

<picture>
  <source media="(max-width: 900px)" srcset="../screenshots/vision-center-login-light-900.webp">
  <img src="../screenshots/vision-center-login-light-1600.webp" alt="Vision Center clinic-management sign-in screen" width="1600">
</picture>

Additional operational screenshots are intentionally omitted from this public repository when they contain names, document numbers, phone numbers, or other record-level data.

Return to the [case study](../README.md) or review the [architecture](./architecture.md).
