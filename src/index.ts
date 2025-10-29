import { defineTransformer } from "@nuxt/content";
import { parse } from "smol-toml";

export default defineTransformer({
	name: "Toml",
	extensions: [".toml"],
	parse: ({ id, body }) => {
		const parsed = parse(body);

		return {
			...parsed,
			id,
		};
	},
});
