# ESLint config for Estudio Cactus's projects

A [TypeScript](https://www.typescriptlang.org/) and
[ESLint v8](https://eslint.org/docs/v8.x/) config for Sotecla's projects using
[Prettier](https://prettier.io/) for code formatting inside `eslintrc` file.

> [!NOTE]
> To format using Prettier, defined in `eslintrc` file, you need to default
> your formatter to use `eslint` in your editor.

## Install

> [!WARNING]
> This package is not published to npm yet.

> [!CAUTION]
> This package requires Node.js greater than or equal to 18.20.0.

### Local install

```bash
  git clone <repo-url>
  cd <repo-name>
  npm run build
```

```bash
cd <project-dir>
# use npm, yarn, pnpm
npm install --save-dev <path-to-js-linter-formatter-repo>
```

### Package install

```bash
# use npm, yarn, pnpm
npm install --save-dev eslint-config-sotecla
```

> [!NOTE]
> Yarn doesn't install peer dependencies, so you need to install them manually.
>
> ```bash
> yarn add --dev \
>   typescript@\* \
>   eslint@^8.0.1 \
>   eslint-config-sotecla
> ```

If you want to use the NextJS config, you need to install the following packages if they are not already installed:

```bash
# use npm, yarn, pnpm
npm install --save-dev @next/eslint-plugin-next
```

## Usage

Add this to your `.eslintrc.cjs` file:

```javascript
module.exports = {
  extends: ['@estudio-cactus/eslint-config'] // or '@estudio-cactus/eslint-config/nextjs' for NextJS projects
  // it can also be used as `'@estudio-cactus'` and `'@estudio-cactus/nextjs'` for NextJS projects
  // ...
}
```
