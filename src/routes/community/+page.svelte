<script>
	import discordIcon from '../../assets/images/discord.png';
	import githubIcon from '../../assets/images/github.jpg';
	import ExternalLink from '../../components/ExternalLink.svelte';
	import ExternalLinkIcon from '../../components/icons/ExternalLinkIcon.svelte';
	import CommunityDocument from './CommunityDocument.svelte';
</script>

<svelte:head>
	<title>Community • Cabin</title>
</svelte:head>

<CommunityDocument page="Community">
	<h1>Community</h1>

	<h2 id="github">
		<img src={githubIcon} alt="GitHub" />
		GitHub
	</h2>

	<ExternalLink href="https://github.com/cabin-language">
		https://github.com/cabin-language
	</ExternalLink>

	<p>
		The Cabin GitHub organization holds all of the source code behind the Cabin as a project. Even
		the code behind this very website is there! Specifically, the following projects are all open
		source:
	</p>

	<ul>
		<li>
			<ExternalLink href="https://github.com/cabin-language/cabin/tree/main/crates/cabin">
				The Cabin API
			</ExternalLink>
		</li>
		<li>
			<ExternalLink href="https://github.com/cabin-language/cabin/tree/main/crates/cabin-bin">
				The Cabin compiler executable
			</ExternalLink>
		</li>
		<li>
			<ExternalLink
				href="https://github.com/cabin-language/cabin/tree/main/crates/tree-sitter-cabin"
			>
				The Cabin Tree-Sitter parser
			</ExternalLink>
		</li>
		<li>
			<ExternalLink href="https://github.com/cabin-language/cabin-language.github.io">
				The Cabin website
			</ExternalLink>
		</li>
		<li>
			<ExternalLink href="https://github.com/cabin-language/cabin.nvim">
				The Cabin Neovim plugin
			</ExternalLink>
		</li>
		<li>
			<ExternalLink href="https://github.com/cabin-language/vscode-cabin">
				The Cabin Visual Studio Snippet plugin
			</ExternalLink>
		</li>
	</ul>

	<p>The GitHub is a good place if you want to:</p>

	<ul>
		<li>
			<ExternalLink href="https://github.com/cabin-language/cabin/issues">
				File an issue or bug report
			</ExternalLink>
		</li>
		<li>
			<ExternalLink href="https://github.com/cabin-language/cabin/discussions">
				Discuss potential changes or new features to the language
			</ExternalLink>
		</li>
		<li>
			<ExternalLink href="https://github.com/orgs/cabin-language/repositories">
				View the source code for Cabin projects
			</ExternalLink>
		</li>
	</ul>
</CommunityDocument>

<style>
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
