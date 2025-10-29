# nuxt-content-transformer-toml

[![NPM version](https://img.shields.io/npm/v/nuxt-content-transformer-toml?color=a1b858&label=)](https://www.npmjs.com/package/nuxt-content-transformer-toml)

TOML transformer for [Nuxt Content](https://content.nuxt.com), based on [smol-toml](https://github.com/squirrelchat/smol-toml).

## 📦 Installation

```bash
$ npm install nuxt-content-transformer-toml
$ yarn add nuxt-content-transformer-toml
$ pnpm add nuxt-content-transformer-toml
```

## 🚀 Usage

```ts
// nuxt.config.ts

export default defineNuxtConfig({
	content: {
		build: {
			transformers: ["nuxt-content-transformer-toml"],
		},
	},
});
```

## 📝 License

[MIT](./LICENSE). Made with ❤️ by [Ray](https://github.com/so1ve)
