<script>
	import Document from '../../components/Document.svelte';
	import TutorialSidebar from './TutorialSidebar.svelte';

	let { page, children } = $props();
</script>

<Document {page} {children} Sidebar={TutorialSidebar} />
