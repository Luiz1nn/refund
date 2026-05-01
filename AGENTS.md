# Repository Guidelines

## Project Structure & Module Organization

This is a React + Vite + TypeScript frontend for the Refund System challenge.

- `src/main.tsx` bootstraps the React application.
- `src/App.tsx` configures React Query, nuqs, React Router, and app routes.
- `src/layouts/` contains route shells such as `MainLayout`.
- `src/pages/` contains route-level pages, currently `/` and `/new-refund`.
- `src/components/` contains shared UI primitives such as buttons, inputs,
  selects, file inputs, pagination, and skeleton states.
- `src/contexts/` groups feature code by domain, such as refunds and receipts,
  including hooks, models, schemas, and feature components.
- `src/helpers/api.ts` contains the Axios instance and shared fetcher.
- `src/styles.css` imports Tailwind CSS and defines project theme tokens.
- `src/assets/` stores source images and SVGs.
- `public/` stores files served directly by Vite, such as `favicon.svg`.
- `PROJECT_CONTEXT.md` documents the product scope and expected features.

Use the `~/*` import alias for modules inside `src`, for example:

```ts
import { api } from "~/helpers/api";
```

SVG assets may be imported as React components with `?react`:

```tsx
import Logo from "~/assets/images/logo.svg?react";
```

## Build, Test, and Development Commands

Use `pnpm` for all package operations.

- `pnpm install` installs dependencies from `pnpm-lock.yaml`.
- `pnpm dev` starts the Vite development server.
- `pnpm build` runs TypeScript build checks and creates a production bundle.
- `pnpm preview` serves the production build locally.
- `pnpm check` runs Biome formatting and lint checks.
- `pnpm format` formats files with Biome.
- `pnpm lint` runs Biome lint rules only.

## Coding Style & Naming Conventions

Code is formatted and linted with Biome. Use 2-space indentation, double quotes,
semicolons, and trailing commas where Biome applies them.

Prefer descriptive English names. Use PascalCase for React components, camelCase
for variables and functions, and kebab-case for non-component asset filenames.
Use `*.page.tsx` for route pages and `*.layout.tsx` for layout components.
Prefer `tailwind-variants` for component variants and `tailwind-merge` when
combining conditional Tailwind classes.
Use Zod schemas for form validation and keep user-facing validation messages in
the same language as the current UI.

## Testing Guidelines

No test framework is configured yet. When tests are added, prefer colocated test
files such as `Component.test.tsx` or `use-feature.test.ts`. Add focused tests
for API hooks, form validation, and user workflows before broad snapshot tests.

Until a test script exists, validate changes with:

```sh
pnpm check
pnpm build
```

## Commit & Pull Request Guidelines

This repository does not have commit history yet. Use concise, imperative commit
messages, for example `Add refund creation modal` or `Configure API client`.

Pull requests should include a short summary, validation steps, linked issues
when available, and screenshots or screen recordings for UI changes. Keep PRs
focused and avoid mixing unrelated refactors with feature work.

## Security & Configuration Tips

Use `.env` for local configuration and keep secrets out of Git. Start from
`.env.example` and define `VITE_API_URL` for the Rocketseat API base URL.
