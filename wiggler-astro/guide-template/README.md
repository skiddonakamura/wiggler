# Wiggler guide template

Create a new guide from the `wiggler-astro/` directory:

```sh
npm run new-guide -- wilds charge_blade
```

Use one of `wilds`, `rise`, or `world`, then a lowercase weapon slug such as `switch_axe`, `charge_blade`, or `greatsword`.

The command creates a guide at:

```text
src/content/docs/<game>/weapons/<weapon>/
```

1. Replace every `TODO` value in `index.mdx`.
2. Write the guide in `guide.mdx`, `progression.mdx`, and `endgame.mdx`.
3. Put guide images in `public/guides/<game>/<weapon>/`, then link them as `/guides/<game>/<weapon>/filename.webp`.
4. Preview locally with `npm run dev`.
5. Run `npm run build` before submitting the guide.

These files are MDX: ordinary Markdown works everywhere, while the few angle-bracket blocks are reusable Wiggler components. Copy a component block as needed rather than changing its implementation.
