# Cabin Website

The official website for the Cabin programming language, hosted at [cabin-language.org](cabin-language.org).

## Contributor Notes

The Cabin website is written with [Svelte](https://svelte.dev/), [SvelteKit](https://svelte.dev/docs/kit/introduction), and [TypeScript](https://www.typescriptlang.org/), and built with [bun](https://bun.sh).

To be able to build the website, you need to [install bun](https://bun.sh/).

To develop the project on your local machine, run the following:

```bash
git clone https://github.com/cabin-language/cabin-language.github.io.git
bun install
bun run dev --open
```

Note that there's currently a strange bug involving Vite and TreeStter that makes it so that if you manually fully reload a page that has a highlighted `<Snippet />` component, the dev server will crash.

The website can be automatically published and deployed with the `deploy` script:

```bash
./scripts/deploy
```

This will automatically build the project, push the changes, and update the `gh-pages` branch. Obviously, you can only do this if you have the permissions.
