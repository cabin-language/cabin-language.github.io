<script>
	import Document from '../../components/Document.svelte';
	import CommunitySidebar from './CommunitySidebar.svelte';

	let { page, children } = $props();
</script>

<Document {page} {children} Sidebar={CommunitySidebar} />
