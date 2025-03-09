<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
	<title>Home&nbsp;&nbsp;•&nbsp;&nbsp;Cabin</title>
</svelte:head>

<Navbar />
<main>
	<div>
		<h1>Cabin</h1>
		<p>A dead simple, super fast, and completely safe programming language.</p>
		<p>
			For the developer that wants to <span>Get Stuff Done&trade;</span>
		</p>
	</div>
	<a class="get-started" href="/learn">Get Started</a>
</main>

<style>
	main {
		background-image: linear-gradient(to bottom, #1e1e2e, #11111b);
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #cdd6f4;
		gap: 3rem;
		text-align: center;
		padding-left: 2rem;
		padding-right: 2rem;

		p > span {
			color: white;
			font-weight: bold;
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}

		h1 {
			font-size: 5rem;
			background-image: linear-gradient(to bottom right, #89dceb, #b4befe);
			color: transparent;
			background-clip: text;
		}
	}

	.get-started {
		background-image: linear-gradient(to bottom right, #89dceb, #b4befe);
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		border-radius: 0.5rem;
		border: 2px solid rgba(255, 255, 255, 40%);
		box-shadow: 0px 0px 1rem black;
		color: #11111b;
		font-weight: bold;
	}
</style>
