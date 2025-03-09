<script lang="ts">
	import Sidebar from '../../components/Sidebar.svelte';

	let { page } = $props();

	let sidebar: Sidebar;

	export function next() {
		return sidebar.next();
	}

	export function previous() {
		return sidebar.previous();
	}
</script>

<Sidebar {page} bind:this={sidebar}>
	<li><a href="/community#discord">Discord</a></li>
	<li><a href="/community#github">GitHub</a></li>
	<li><a href="/community#help-wanted">Help Wanted</a></li>
</Sidebar>
