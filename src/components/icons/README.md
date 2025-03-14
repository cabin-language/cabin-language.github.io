# Cabin Website Icons

Most icons used in the Cabin website are SVG icons in Svelte files.

## Adding a New Icon

To add a new icon, first grab some SVG code. Most icons here are grabbed from [SVG Repo](https://www.svgrepo.com/). Generally, we like to use icons with a rounded and modern look. 

Search for an icon, go to "Edit Vector", and click "Copy SVG". Then, paste that SVG code into a new Svelte file in this `icons` folder. It's convention to call the file `<icon-name>Icon.svelte` (in PascalCase).

At the top of the Svelte file, paste this code:

```svelte
<script lang="ts">
	let { stroke, ...rest } = $props();
</script>
```

This will allow components that use this icon to pass the color and any additional properties (usually styles) they want to apply to the SVG. In the SVG code itself, add `{...rest}` to the beginning of the `<svg>` element, and replace any colors with `{stroke}`.

That's it! Icons in this folder can be used as regular svelte components, passing the color and any additional properties into the component.
