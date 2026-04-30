# Refund System

Corporate reimbursement request application built for the second challenge of
the Rocketseat React 2025 learning track.

The project goal is to build a frontend application where users can create,
list, search, paginate, inspect, and delete refund requests. Each request must
support receipt upload and receipt display on the details page.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- BiomeJS
- Axios
- TanStack Query
- React Hook Form
- React Router 7
- nuqs
- Radix UI Slot
- Tailwind Variants
- Tailwind Merge
- Phosphor Icons
- Vite SVGR

## Requirements

- Node.js 22+
- pnpm 10+

## Getting Started

Install dependencies:

```sh
pnpm install
```

Create a local environment file:

```sh
cp .env.example .env
```

Set the API base URL:

```env
VITE_API_URL=https://api.example.com
```

Start the development server:

```sh
pnpm dev
```

## Scripts

```sh
pnpm dev
```

Starts the Vite development server.

```sh
pnpm build
```

Runs TypeScript checks and creates the production build.

```sh
pnpm preview
```

Serves the production build locally.

```sh
pnpm check
```

Runs Biome formatting and lint checks.

```sh
pnpm format
```

Formats the project with Biome.

```sh
pnpm lint
```

Runs Biome lint rules only.

## Project Structure

```txt
src/
  App.tsx                     App providers and route definitions
  main.tsx                    React bootstrap
  styles.css                  Tailwind theme tokens and global styles
  assets/images/              Source image and SVG assets
  components/                 Reusable UI primitives
  contexts/
    refunds/                  Refund search, hooks, and models
    receipts/                 Receipt models
  helpers/api.ts              Axios instance and fetcher helper
  layouts/main.layout.tsx     Shared app shell and navigation
  pages/                      Route-level pages
  types/api.ts                API response contracts
public/                       Static public assets
PROJECT_CONTEXT.md
AGENTS.md
```

Use the `~/*` alias for imports from `src`:

```ts
import { api } from "~/helpers/api";
```

## Current Routes

- `/` renders the refund requests page.
- `/new-refund` renders the new refund request page.

Routes are wrapped by `MainLayout`, `QueryClientProvider`, `NuqsAdapter`, and
`BrowserRouter`.

## Assets

SVG files can be imported as React components with SVGR:

```tsx
import Logo from "~/assets/images/logo.svg?react";
```

## Project Context

See [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) for the full product scope,
required features, API integration notes, and implementation expectations.
