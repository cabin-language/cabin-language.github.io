<script lang="ts">
	import Documentation from '../../../components/Documentation.svelte';
	import Snippet from '../../../components/Snippet.svelte';
	import windowsIcon from '../../../assets/images/windows.png';
	import macIcon from '../../../assets/images/mac.png';
	import linuxIcon from '../../../assets/images/linux.png';

	let os = $state('windows');

	function setOs(newOs: string) {
		return function () {
			os = newOs;
		};
	}
</script>

<Documentation page="Installation">
	<h1>Installation</h1>

	<span class="os-buttons">
		<button style:background={os === 'windows' ? '#28283d' : '#181825'} onclick={setOs('windows')}
			><img src={windowsIcon} />Windows</button
		>
		<button style:background={os === 'mac' ? '#28283d' : '#181825'} onclick={setOs('mac')}
			><img src={macIcon} />Mac</button
		>
		<button style:background={os === 'linux' ? '#28283d' : '#181825'} onclick={setOs('linux')}
			><img src={linuxIcon} />Linux</button
		>
	</span>

	<p>Cabin can be installed through <code>cargo</code>:</p>
	<Snippet>cargo install cabin-language</Snippet>

	<h2>Testing</h2>

	<p>
		Once Cabin is installed, you can test that it's working with the <code>cabin</code> command:
	</p>

	<Snippet>cabin</Snippet>

	<h2>Troubleshooting</h2>

	<p>
		If running <code>cabin</code> gives an error, make sure that the installation location is in
		your <code>PATH</code> environment variable.
	</p>
</Documentation>

<style>
	.os-buttons {
		display: flex;
	}

	.os-buttons > * {
		width: 10rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		> img {
			width: 1rem;
			height: 1rem;
		}
	}
</style>
