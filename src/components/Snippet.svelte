<script lang="ts">
	let { children, sharp_corner = false } = $props();
</script>

<pre style:border-top-left-radius={sharp_corner ? '0px' : '0.5rem'}><code>{@render children()}</code
	></pre>

<style>
	pre {
		background-color: #28283d;
		color: white;
		border-radius: 0.5rem;
		padding: 1rem;
	}
</style>
