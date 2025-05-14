# Timer Application by Rory Doak

Built a simple timer app to practice vibe coding, understanding the merits and best use-cases for AI assisted coding.

The app itself is quite simple, scaffolded with Vite and it uses React and Typescript. I've built the testing on vitest.

When everything goes well, you should be met by a screen like this:

![timer user interface](image.png)

The site is live here: [timer.rorydoak](https://timer.rorydoak.com/)

## Getting started

To get up and running you'll need `pnpm`, which you can install with npm:

```
npm install -g pnpm
```

From here you just need to install the relevant dependences:

```
pnpm i
```

And start up the local environment

```
pnpm run dev
```

## Testing code

To run all of the tests:

```bash
pnpm test
```

To run only the UI tests:

```bash
pnpm test:ui
```

To run only the interaction tests:

```bash
pnpm test:interactions
```
