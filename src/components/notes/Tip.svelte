<script>
	import LightbulbIcon from '../icons/LightbulbIcon.svelte';
	import Note from './Note.svelte';

	let { children } = $props();
</script>

<Note Icon={LightbulbIcon} {children} type="Tip" color="#89dceb" color2="#89b4fa" />
