# Design Engineering Portfolio

A premium, interactive portfolio showcasing design engineering, UI prototypes, and thought pieces. Built with a focus on high-fidelity aesthetics, fluid motion, and immersive content.

## Features

- **Next.js 16 App Router**: Leverages React Server Components and Turbopack for optimal performance.
- **MDX Integration**: Fully dynamic routing for blog and prototype case studies reading from local `.mdx` files.
- **Interactive Code Sandboxes**: Uses `@codesandbox/sandpack-react` to embed live, editable React code blocks inside MDX articles.
- **Motion & 3D**: Orchestrated with `framer-motion` for layout transitions and micro-interactions, alongside GSAP and `@react-three/fiber` for complex visualizations.
- **Design System Tailored**: Styled utilizing Tailwind CSS v4, combining a deep dark-mode aesthetic with custom glassmorphism utilities.
- **Strict Code Quality**: Pre-configured with Husky, lint-staged, ESLint (Airbnb Flat Config), and Prettier.

## Getting Started

First, ensure you have `pnpm` installed and run:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the portfolio.

## Folder Structure

- `/app/`: Next.js App Router paths separating `/projects`, `/prototypes`, and `/blog`.
- `/components/mdx/`: Custom mapper and components (like `SandpackWrapper`) tailored for MDX rendering.
- `/content/`: Contains all `.mdx` files for the dynamic segments.
- `/lib/`: Utilities for fetching and parsing local markdown with `gray-matter`.

## License

This is a personal portfolio repository intended as a showcase. Feel free to explore the source code for inspiration.
