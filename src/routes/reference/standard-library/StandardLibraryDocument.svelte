<script>
	import StandardLibrarySidebar from './StandardLibrarySidebar.svelte';
	import Document from '../../../components/Document.svelte';

	let { page, children } = $props();
</script>

<Document {page} {children} Sidebar={StandardLibrarySidebar} />
