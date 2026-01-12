# UnifiedHytale Documentation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The official documentation for [UnifiedHytale](https://unifiedhytale.com) - the ultimate platform for Hytale mods, maps, resource packs, and server listings.

**Live Site:** [docs.unifiedhytale.com](https://docs.unifiedhytale.com)

## Contributing

We welcome contributions from the community! Here's how you can help:

### Quick Edits

For small changes like typos or clarifications:

1. Click "Edit on GitHub" on any documentation page
2. Make your changes
3. Submit a pull request

### Larger Contributions

For new pages or significant changes:

1. Fork this repository
2. Create a new branch: `git checkout -b my-feature`
3. Make your changes
4. Test locally (see below)
5. Submit a pull request

### Writing Documentation

All documentation is written in [MDX](https://mdxjs.com/) format. Files are located in `content/docs/`.

#### Frontmatter

Each MDX file needs frontmatter:

```mdx
---
title: Page Title
description: A brief description of the page content.
---
```

#### Components

You can use these built-in components:

```mdx
<Callout type="info">
  Helpful information
</Callout>

<Callout type="warn">
  Warning message
</Callout>

<Cards>
  <Card title="Title" href="/docs/page">
    Description
  </Card>
</Cards>
```

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ or [Bun](https://bun.sh/)
- npm, yarn, pnpm, or bun

### Setup

```bash
# Clone the repository
git clone https://github.com/UnifiedHytale/docs.git
cd docs

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the docs.

### Building

```bash
npm run build
npm run start
```

## Project Structure

```
├── content/
│   └── docs/           # MDX documentation files
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app router
│   ├── components/     # React components
│   ├── lib/            # Utilities and config
│   └── styles/         # Global styles
├── source.config.ts    # Fumadocs MDX config
└── package.json
```

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Fumadocs](https://fumadocs.dev/) - Documentation framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [MDX](https://mdxjs.com/) - Markdown with React components

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- [UnifiedHytale](https://unifiedhytale.com)
- [Discord](https://unifiedhytale.com/discord)
- [Support](mailto:support@unifiedhytale.com)
