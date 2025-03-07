<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<main>
	<div>
		<h1>Oh no!</h1>
		<p>The page you're looking for doesn't exist TwT</p>
		<p>This is awko taco 🌮...</p>
	</div>
	<a class="get-started" href="/">Go to homepage</a>
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
