# solid-vps-tailwind-starter

A project template with Solid, vite-plugin-ssr, Tailwind, and Expressjs.

## Usage

Those templates dependencies are maintained via [pnpm] via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production. See [vps's documentation][vps-deploy] for deployment options.

### `npm run start`

Start an [express] server that serves built app.

[pnpm]: https://pnpm.io
[vps-deploy]: https://vite-plugin-ssr.com/deploy
[express]: https://expressjs.com/
