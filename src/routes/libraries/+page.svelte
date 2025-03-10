<script lang="ts">
	import DownloadIcon from '../../components/icons/DownloadIcon.svelte';
	import Navbar from '../../components/Navbar.svelte';

	const libraries = [
		{
			name: 'color',
			description:
				'Color utilities for Cabin including converting between color formats, validating color representations, etc.',
			downloads: 14232423
		},
		{
			name: 'json',
			description: 'Serializing and deserializing JSON into Cabin data.',
			downloads: 14232423
		},
		{
			name: 'toml',
			description: 'Serializing and deseralizing TOML into Cabin data.',
			downloads: 14232423
		},
		{
			name: 'regex',
			description: 'Regular expression engine implemented in Cabin.',
			downloads: 14232423
		},
		{
			name: 'random',
			description: 'Seeded pseudo-random number generation in Cabin.',
			downloads: 14232423
		},
		{
			name: 'time',
			description: 'Time, date, and timezone utilities and calculations in Cabin.',
			downloads: 14232423
		},
		{
			name: 'style',
			description: 'Printing colored and formatted output to the terminal in Cabin.',
			downloads: 14232423
		},
		{
			name: 'base',
			description: 'Conversion between numeric bases in Cabin.',
			downloads: 14232423
		}
	];

	function formatNumber(number: number): string {
		if (number > 1_000_000) return `${Math.floor(number / 1_000_000)}M`;
		if (number > 1_000) return `${Math.floor(number / 1_000)}K`;

		return `${number}`;
	}
</script>

<Navbar />

<main>
	<h1>Cabin Libraries</h1>
	<input type="text" placeholder="Search for a library..." />

	<h2>Most Popular</h2>

	<div class="libraries">
		{#each libraries.slice(0, 9) as library}
			<button class="library">
				<span>
					<h3>{library.name}</h3>
					<span>
						{formatNumber(library.downloads)}
						<DownloadIcon stroke="#cdd4f6" style="width: 1rem;" />
					</span>
				</span>
				<p>{library.description}</p>
			</button>
		{/each}
	</div>
</main>

<style>
	.library {
		background-color: #28283d;
		padding: 1rem;
		border-radius: 0.5rem;
		width: 20rem;
		height: 10rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		box-shadow: 0px 0px 1rem rgba(0, 0, 0, 50%);
		transition: scale 0.2s;
		color: #cdd6f4;
		text-align: left;

		> span {
			display: flex;
			align-items: center;

			span {
				display: flex;
				align-items: center;
				gap: 0.5rem;
			}

			> *:last-child {
				margin-left: auto;
			}
		}

		&:hover {
			scale: 105%;
		}
	}

	.libraries {
		display: grid;
		grid-template-columns: auto auto auto;
		gap: 2rem;
	}

	main {
		display: flex;
		align-items: center;
		flex-direction: column;
		color: #cdd4f6;
		gap: 2rem;
		padding-top: 10rem;
		padding-bottom: 3rem;

		h1 {
			font-size: 3rem;
		}

		h2 {
			font-size: 2rem;
		}

		input {
			color: #cdd4f6;
			background-color: #28283d;
			font-size: 1.5rem;
			padding-left: 2rem;
			padding-right: 2rem;
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;
			border-radius: 100vmax;
			width: 50%;
			margin-bottom: 5rem;
		}
	}
</style>
