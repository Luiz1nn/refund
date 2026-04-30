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
- React Router

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
  App.tsx        Application entry component
  main.tsx       React bootstrap
  styles.css     Tailwind CSS import and global styles
public/          Static public assets
PROJECT_CONTEXT.md
AGENTS.md
```

Use the `~/*` alias for imports from `src`:

```ts
import { api } from "~/lib/api";
```

## Project Context

See [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) for the full product scope,
required features, API integration notes, and implementation expectations.
