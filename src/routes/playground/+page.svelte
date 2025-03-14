<script lang="ts">
	import Experimental from '../../components/notes/Experimental.svelte';
	import PlayIcon from '../../components/icons/PlayIcon.svelte';
	import StopIcon from '../../components/icons/StopIcon.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import Snippet from '../../components/Snippet.svelte';
	import init, { runCode, StyledString } from '../../wasm/cabin/cabin_web';
	import cabinWasm from '../../wasm/cabin/cabin_web_bg.wasm?url';

	let output = $state('Hello world!');
	let isRunning = $state(false);
	let initialized = false;

	async function run() {
		isRunning = !isRunning;

		if (isRunning) {
			if (!initialized) {
				console.log('initializing wasm');
				await init(cabinWasm);
				console.log('wasm initiaized');
				initialized = true;
			}
			console.log('Running');
			runCode(
				`print("Hello world")`,
				() => 'hello',
				(text: StyledString) => console.log(text.value),
				(text: StyledString) => console.log(text.value)
			);
			console.log('Done');
		}
	}
</script>

<svelte:head>
	<title>Playground&nbsp;&nbsp;•&nbsp;&nbsp;Cabin</title>
</svelte:head>

<Navbar />
<main>
	<section>
		<h1>Cabin Playground</h1>
		<Experimental />
		<p>
			The Cabin playground is an online tool for running Cabin code in the browser. Note that some
			system-level actions, such as reading/writing files and getting/setting environmemnt variables
			won't work.
		</p>
		<button
			onclick={run}
			style:background-image={isRunning
				? `linear-gradient(to bottom right, #f9e2af, #f38ba8)`
				: `linear-gradient(to bottom right, #89dceb, #b4befe)`}
		>
			{#if isRunning}
				<StopIcon stroke="#11111b" style="width: 1rem;" />
				Stop
			{:else}
				<PlayIcon stroke="#11111b" style="width: 1rem;" />
				Run
			{/if}
		</button>
		<Snippet input height="20rem" code={`run(print("Hello world!"));`} language="cabin" />

		<h2>Output</h2>

		<Snippet height="20rem">{output}</Snippet>
	</section>
</main>

<style>
	main {
		color: #cdd6f4;

		section {
			display: flex;
			justify-content: center;
			overflow-y: auto;
			padding-top: 2rem;
			padding-bottom: 2rem;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: max(20rem, 60%);
			margin-left: auto;
			margin-right: auto;
		}

		button {
			background-image: linear-gradient(to bottom right, #89dceb, #b4befe);
			width: fit-content;
			height: fit-content;
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;
			border-radius: 0.5rem;
			display: flex;
			gap: 0.5rem;
			width: 5rem;
			align-items: center;
			justify-content: center;
			margin-left: auto;
		}
	}
</style>
