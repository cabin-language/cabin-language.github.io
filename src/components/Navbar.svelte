<script lang="ts">
	import logo from '../assets/images/logo.png';
</script>

<nav>
	<a href="/"><img src={logo} alt="Cabin" />Cabin</a>
	<a href="/docs">Documentation</a>
	<a href="/libraries">Libraries</a>
	<a href="/community">Community</a>
</nav>

<style>
	nav {
		display: flex;
		color: #cdd6f4;
		gap: 2rem;
		background-color: #11111b;
		padding-right: 1rem;

		> * {
			padding-left: 1rem;
			padding-right: 1rem;
			padding-top: 1rem;
			padding-bottom: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			gap: 0.5rem;

			img {
				width: 2rem;
			}
		}

		> *:first-child {
			font-weight: bold;
			font-size: 1.5rem;
			margin-right: auto;
		}
	}
</style>
