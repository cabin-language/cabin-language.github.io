<script>
	import discordIcon from '../../assets/images/discord.png';
	import githubIcon from '../../assets/images/github.jpg';
	import Community from '../../components/Community.svelte';
</script>

<svelte:head>
	<title>Community • Cabin</title>
</svelte:head>

<Community page="Community">
	<h1>Community</h1>

	<p>
		Welcome to the Cabin community! By being here, you're already one of us! We're called campers,
		and we're delighted to have you. Currently, the Cabin community is very small, but we hope to
		grow into a large and diverse group.
	</p>

	<p>
		Cabin has communities in a few places. Most general discussion and community building happens in
		the Cabin Discord server.
	</p>

	<h2 id="discord"><img src={discordIcon} />Discord</h2>

	<a href="https://discord.gg/ZcfC322pAb">https://discord.gg/ZcfC322pAb</a>

	<p>
		The Cabin Discord server is the best place for interacting with the community! Feel free to stop
		by and chat! The Discord server has channels for help with the language, general discussion,
		suggestions, updates, and more. It's a welcoming and friendly place for all campers!
	</p>

	<h2 id="github"><img src={githubIcon} />GitHub</h2>

	<a href="https://github.com/cabin-language">https://github.com/cabin-language</a>

	<p>
		The Cabin GitHub organization holds all of the source code behind the Cabin as a project. Even
		the code behind this very website is there! Specifically, the following projects are all open
		source:
	</p>

	<ul>
		<li
			><a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/cabin-language/cabin/tree/main/crates/cabin">The Cabin API</a
			></li
		>
		<li
			><a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/cabin-language/cabin/tree/main/crates/cabin-bin"
				>The Cabin compiler executable</a
			></li
		>
		<li
			><a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/cabin-language/cabin/tree/main/crates/tree-sitter-cabin"
				>The Cabin Tree-Sitter parser</a
			></li
		>
		<li
			><a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/cabin-language/cabin-language.github.io">The Cabin website</a
			></li
		>
		<li
			><a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/cabin-language/cabin.nvim">The Cabin Neovim plugin</a
			></li
		>
		<li
			><a
				href="https://github.com/cabin-language/vscode-cabin"
				target="_blank"
				rel="noopener noreferrer">The Cabin Visual Studio Code plugin</a
			></li
		>
	</ul>

	<p> The GitHub is a good place if you want to: </p>

	<ul>
		<li><a href="https://github.com/cabin-language/cabin/issues">File an issue or bug report</a></li
		>
		<li
			><a href="https://github.com/cabin-language/cabin/discussions"
				>Discuss potential changes or new features to the language</a
			></li
		>
		<li
			><a href="https://github.com/orgs/cabin-language/repositories"
				>View the source code for Cabin projects</a
			></li
		>
	</ul>

	<h2 id="help-wanted">Help Wanted!</h2>

	<p>
		Cabin is looking for contributors! There are a number of ways you can contribute to the project;
		Specifically, we're looking for:
	</p>

	<ul>
		<li>A logo</li>
		<li>Bug reports</li>
		<li>Documentation</li>
		<li>Language Suggestions</li>
	</ul>

	<p>
		...and anything else you have to offer! If you're interested in contributing, you can start
		immediately, depending on how you want to contribute. Bug reports can be filed immediately on
		the Cabin GitHub. Documentation contributions are welcome as pull requests in the Cabin GitHub
		as well. For branding contributions, such as creating a logo for Cabin, get in touch with me,
		Cabin's creator, Vi. You can find me in the Cabin Discord.
	</p>
</Community>

<style>
	a {
		color: dodgerblue;
	}

	h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		width: fit-content;
	}

	h2 img {
		width: 2rem;
		height: 2rem;
	}

	ul {
		margin-left: 3rem;
	}
</style>
