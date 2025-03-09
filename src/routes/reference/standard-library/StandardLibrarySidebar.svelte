<script lang="ts">
	import Sidebar from '../../../components/Sidebar.svelte';

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
	<li>
		<a href="/reference/standard-library/list">Action</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">Addable</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">Anything</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">Attempt</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">Boolean</a>
	</li>
	<li>
		<a href="/reference/standard-library/map">Compareable</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">default</a>
	</li>
	<li>
		<a href="/reference/standard-library/map">Divideable</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">editable</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">Either</a>
	</li>
	<li>
		<a href="/reference/standard-library/map">Exponentiable</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">Extension</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">Group</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">input</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">List</a>
	</li>
	<li>
		<a href="/reference/standard-library/map">Map</a>
	</li>
	<li>
		<a href="/reference/standard-library/map">Multipliable</a>
	</li>
	<li>
		<a href="/reference/standard-library/number">Number</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">Object</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">Optional</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">print</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">Subtractable</a>
	</li>
	<li>
		<a href="/reference/standard-library/list">system</a>
	</li>
	<li>
		<a href="/reference/standard-library/text">Text</a>
		<ul>
			<li>
				<a href="/reference/standard-library/text#properties">Properties</a>
				<ul>
					<li><a href="/reference/standard-library/text#bytes">bytes</a></li>
					<li><a href="/reference/standard-library/text#ends_with">ends_with</a></li>
					<li><a href="/reference/standard-library/text#length">length</a></li>
					<li><a href="/reference/standard-library/text#lines">lines</a></li>
					<li><a href="/reference/standard-library/text#replace">replace</a></li>
					<li><a href="/reference/standard-library/text#split">split</a></li>
					<li><a href="/reference/standard-library/text#split_any">split_any</a></li>
					<li><a href="/reference/standard-library/text#starts_with">starts_with</a></li>
					<li><a href="/reference/standard-library/text#trim">trim</a></li>
					<li><a href="/reference/standard-library/text#trim_end">trim_end</a></li>
					<li><a href="/reference/standard-library/text#trim_start">trim_start</a></li>
				</ul>
			</li>
			<li>
				<a href="/reference/standard-library/text#extensions">Extensions</a>
				<ul>
					<li>
						<a href="/reference/standard-library/text#extensions">
							extensionof Text tobe List&lt;Letter&gt;
						</a>
					</li>
					<li>
						<a href="/reference/standard-library/text#extensions">extensionof Text tobe Addable</a>
					</li>
				</ul>
			</li>
		</ul>
	</li>
	<li>
		<a href="/reference/standard-library/list">visible</a>
	</li>
</Sidebar>
