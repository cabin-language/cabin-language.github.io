// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	/**
	 * The build mode for the current session. This is `"dev"` if the website is currently
	 * running as a development server from `bun run dev`. If the website is running in production,
	 * this will be set to `"build"`.
	 *
	 * This is set in `/vite.config.ts` in the `define` field.
	 *
	 * This is used by `/src/components/Snippet.svelte`. The `<Snippet />` component creates a snippet
	 * of code. Sometimes, this code is colored and highlighted to make it easier to read. The highlighting
	 * is done with [treestter](https://tree-sitter.github.io/tree-sitter/), specifically, 
	 * [the wasm bindings](https://github.com/tree-sitter/tree-sitter/blob/master/lib/binding_web/README.md).
	 *
	 * Unfortunately, Tree-Sitter's WASM bindings seem really finicky, and it has trouble location the actual
	 * WASM file, and for some reason it seems to work differently in dev mode than release. So, we need to do
	 * some conditional checking based on the mode, hence this binding.
	 *
	 * For more information, check `/src/components/Snippet.svelte`.
	 */
	declare const VITE_MODE: "dev" | "build";
}

export { }; 
