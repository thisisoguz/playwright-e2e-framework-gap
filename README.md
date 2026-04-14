# Playwright E2E Framework - GAP

A practical **Playwright + TypeScript** test automation project built for the GAP Turkey web application.

## Purpose

The purpose of this project is not only to automate UI flows, but also to build a test automation structure that reflects:

* maintainable framework design
* reusable page and component abstractions
* risk-based smoke coverage
* scalable regression direction
* debugging and synchronization awareness
* future UI and API validation within the same stack

## Current Scope

At its current stage, this repository mainly focuses on **UI automation** for critical user journeys.

Covered areas currently include:

* homepage navigation
* category-to-listing transition
* listing page rendering
* product visibility checks
* sorting interaction
* cookie banner handling

## Project Direction

This project is intentionally built in an incremental way, starting from smoke scenarios and evolving into a broader automation suite.

The intended direction includes:

* expanding smoke coverage for additional critical journeys
* building a larger regression suite on top of stable smoke scenarios
* adding API validation for key backend responses
* combining UI and API checks where meaningful
* improving tagging and suite separation for smoke and regression execution
* strengthening reporting and CI execution strategy

## Why Playwright

This project uses **Playwright** as the main automation tool because it supports both **UI** and **API** validation in the same stack.

This makes it possible to keep the automation approach:

* lean
* readable
* maintainable
* CI-friendly

## Tech Stack

* Playwright (UI & API automation)
* TypeScript
* Node.js
* dotenv (environment configuration)

## Design Approach

### Page Object Model

Page-specific behaviors are separated into page classes to improve readability and maintainability.

### Reusable Components

Shared UI parts such as the header and cookie banner are modeled as reusable components to reduce duplication.

### Risk-based coverage

The initial scenarios are selected based on business-critical user flows rather than trying to automate everything at once.

### Scalable structure

Although the current scope is UI-focused, the project structure is intended to support broader automation coverage over time.

## Example Focus Area

One important focus area in this repository is validating the transition from a main category to a listing page.

## Project Structure

```bash
.
├── components
│   ├── cookie-banner.component.ts
│   └── header.component.ts
├── pages
│   ├── home.page.ts
│   └── listing.page.ts
├── tests
│   └── ui
├── .github/workflows
├── playwright.config.ts
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
npm run test:ui
npm run test:debug
npm run test:headed
```

## Reporting

```bash
npm run report
```

## Why this repository matters

This repository reflects how I approach test automation:

* focusing on critical business flows first
* building maintainable and reusable test structures
* avoiding one-off test scripts
* preparing the system for both UI and API validation
* thinking in terms of scalability and long-term test strategy
