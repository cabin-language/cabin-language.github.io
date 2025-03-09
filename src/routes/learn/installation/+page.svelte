<script lang="ts">
	import Snippet from '../../../components/Snippet.svelte';
	import WarningIcon from '../../../components/icons/WarningIcon.svelte';
	import Tip from '../../../components/Tip.svelte';
	import ExternalLink from '../../../components/icons/ExternalLink.svelte';
	import TutorialDocument from '../TutorialDocument.svelte';
	import windowsIcon from '../../../assets/images/windows.png';
	import macIcon from '../../../assets/images/mac.png';
	import linuxIcon from '../../../assets/images/linux.png';
	import visualStudioSnippetIcon from '../../../assets/images/visual_studio_code.png';
	import neovimIcon from '../../../assets/images/neovim.png';
	import vimIcon from '../../../assets/images/vim.png';
	import zedIcon from '../../../assets/images/zed.png';
	import unknownIcon from '../../../assets/images/unknown.png';

	let os = $state('windows');

	function setOs(newOs: string) {
		return function () {
			os = newOs;
		};
	}

	function expandEditor(event: MouseEvent) {
		let header = event.target as HTMLElement;
		let style = (header.nextElementSibling as HTMLElement).style;
		style.display = style.display === 'flex' ? 'none' : 'flex';
	}
</script>

<svelte:head>
	<title>Installation • Cabin Docs</title>
</svelte:head>

<TutorialDocument page="Installation">
	<h1>Installation</h1>

	<span class="os-buttons">
		<button style:background={os === 'windows' ? '#28283d' : '#181825'} onclick={setOs('windows')}>
			<img src={windowsIcon} alt="Windows" />
			Windows
		</button>
		<button style:background={os === 'mac' ? '#28283d' : '#181825'} onclick={setOs('mac')}>
			<img src={macIcon} alt="MacOS" />
			Mac
		</button>
		<button style:background={os === 'linux' ? '#28283d' : '#181825'} onclick={setOs('linux')}>
			<img src={linuxIcon} alt="Linux" />
			Linux
		</button>
	</span>

	<p>
		Cabin can be installed through <code>cargo</code>
		:
	</p>
	<Snippet copyable>
		<pre><span style:color="#89b4fa">cargo</span> <span style:color="#89b4fa">install</span> <span
				style:color="#f38ba8">cabin-language</span></pre>
	</Snippet>

	<Tip>
		Don't have cargo? Install Rust with <a
			href="https://www.rust-lang.org/tools/install"
			target="_blank"
			rel="noopener noreferrer"
		>
			the instructions on the official Rust website
		</a>
		<ExternalLink stroke="#11111b" />
	</Tip>

	<h2 id="testing">Testing</h2>

	<p>
		Once Cabin is installed, you can test that it's working with the <code>cabin</code>
		command:
	</p>

	<Snippet copyable>
		<pre><span style:color="#89b4fa">cabin</span></pre>
	</Snippet>

	<p>If all goes well, you should see an output like this:</p>

	<Snippet>
		<pre>
The Cabin compiler.

<b>Usage:</b> <span style:color="#89b4fa">cabin</span> <span
				style:color="#89b4fa">&lt;COMMAND&gt;</span> <span
				style:color="#f38ba8">[ARGUMENTS]</span> <span style:color="#9399b2">[OPTIONS]</span>

<b>Commands:</b>
    <span style:color="#89b4fa">new</span>            Create a new Cabin project
    <span style:color="#89b4fa">run</span>            Run a Cabin project 
    <span
				style:color="#89b4fa">build</span>          Build a Cabin project into a native executable without running it
    <span
				style:color="#89b4fa">check</span>          Check a Cabin project for compile-time errors without building it
    <span style:color="#89b4fa">format</span>         Format a Cabin file or project
    <span style:color="#89b4fa">test</span>           Run tests in a Cabin project
    <span style:color="#89b4fa">set</span>            Configure a compiler flag
    <span style:color="#89b4fa">add</span>            Add an external library
    <span style:color="#89b4fa">remove</span>         Remove an external library
    <span style:color="#89b4fa">publish</span>        Publish a Cabin library

<b>Options: </b>
    <span style:color="#9399b2">-h, --help</span>     Print help
</pre>
	</Snippet>

	<p>
		If you got an error instead, read on for troubleshooting tips. Otherwise, continue on to the
		documentation!
	</p>

	<h2 id="troubleshooting">Troubleshooting</h2>

	<p>
		So you got an error&mdash;Oh no! It's not your fault, and these cases are rare, but occasionally
		bugs in build scripts or installation scripts slip through the cracks. Let's work through it.
	</p>

	<p>
		If running <code>cabin</code>
		gives an error, make sure that the installation location is in your
		<code>PATH</code>
		environment variable. The following bash code will print the location of the Cabin executable on
		your system if it exists, and if it doesn't, will let you know*:
	</p>

	<Snippet
		language="bash"
		code={`(PATHS=($\{PATH//:/ }) ; IFS=$'\\n' ; echo "$\{PATHS[*]}") | grep \\\\bcabin\\\\b || echo "Cabin is not in PATH!"`}
	/>

	<Tip>
		Requires <a
			href="https://www.gnu.org/software/coreutils/"
			target="_blank"
			rel="noopener noreferrer"
		>
			GNU Coreutils
		</a>
		<ExternalLink stroke="#11111b" />
		(present on most Unix systems by default)
	</Tip>

	<p class="note"></p>

	<p>
		If you get an error here, it means that the Cabin compiler either doesn't exist on your
		computer, or it does but it's in a location somewhere that isnt in your <code>PATH</code>
		variable. If you know that you have the compiler and where it is (it'll just be a file called
		<code>cabin</code>
		), then add its parent directory to your
		<code>PATH</code>
		; i.e., if your Cabin compiler is located at
		<code>/home/user/.programs/cabin</code>
		, then in your
		<code>~/.bashrc</code>
		, you'd add:
	</p>

	<Snippet language="bash" code={`export PATH="$PATH:/home/user/.programs"`} />

	<p>
		Alternatively, if you're not sure whether the compiler is on your system, or you think it might
		be but you don't know where, consider trying the installation for your operating system above.
		Make sure the operating system selected matches your machine; The website will try to
		auto-detect it, but it doesn't hurt to double check, especially when it comes to Linux distros.
	</p>

	<p>
		If you're <i>still</i>
		having trouble with your installation, fear not! Two more options remain. For both, you need to have
		Rust installed. Check if Rust is installed by running
		<code>cargo</code>
		, and if it's not, install it with the instructions
		<a href="https://www.rust-lang.org/tools/install" style:color="dodgerblue">here</a>
		.
	</p>

	<p>
		The first option is to install the compiler through it's cargo crate. This may have already been
		the instructions for your operating system if no native solution exists. If not, you can try it
		like so:
	</p>

	<Snippet copyable>
		<pre><span style:color="#89b4fa">cargo</span> <span style:color="#89b4fa">install</span> <span
				style:color="#f38ba8">cabin-language</span></pre>
	</Snippet>

	<p>
		If that's causing you trouble, the last thing you can try is building the compiler from source.
		That'd look something like this:
	</p>

	<Snippet copyable>
		<pre><span style:color="#89b4fa">git</span> <span style:color="#89b4fa">clone</span> <span
				style:color="#f38ba8">https://github.com/cabin-language/cabin.git</span>
<span style:color="#89b4fa">cd</span> <span style:color="#f38ba8">cabin/crates/cabin-bin</span>
<span style:color="#89b4fa">cargo</span> <span style:color="#89b4fa">build</span> <span
				style:color="#9399b2">--release</span></pre>
	</Snippet>

	<p>
		The compiler executable will be placed at <code>
			cabin/crates/cabin-bin/target/release/cabin
		</code>
		when the project finishes compiling. Place the file anywhere in your
		<code>PATH</code>
		, using the
		<code>PATH</code>
		instructions and debugging tips above if necessary.
	</p>

	<p>
		If you've gotten this far and are <i>still</i>
		having trouble getting the compiler working on your machine, first of all, congratulations for being
		the most incredibly unlucky person alive, and secondly, feel free to reach out to the Cabin community
		to get advice on your situation. You can
		<a href="https://github.com/cabin-language/cabin/issues">
			submit an issue on the Cabin GitHub repository
		</a>
		, ask questions in
		<a href="/community">the Cabin Discord server</a>
		, or
		<a href="/community">reach out to the community in other ways</a>
		. Try to be descriptive about what you've tried that hasn't worked, what error messages (if any)
		you've received, and what you're confused on or struggling with.
	</p>

	<h2 id="editor-setup">Editor Setup</h2>

	<p>
		Cabin is supported in many popular text editors with extensions and plugins. Choose your editor
		below to get set up.
	</p>

	<h2 class="editor">
		<img src={visualStudioSnippetIcon} alt="Visual StudSnippetode" />
		Visual Studio Code
	</h2>

	<h2 class="editor">
		<img src={vimIcon} alt="Vim" />
		Vim
	</h2>

	<h2 class="editor" onclick={expandEditor}>
		<img src={neovimIcon} alt="Neovim" />
		Neovim
	</h2>

	<div>
		<p>
			Currently, the best support for Cabin in Neovim is provided through the <a
				href="https://github.com/cabin-language/cabin.nvim"
			>
				cabin.nvim
			</a>
			plugin. The plugin will automatically set up filetype detection, nerd font icons, install and set
			up the
			<a href="https://github.com/cabin-language/cabin/tree/main/crates/cabin-language-server">
				cabin language server
			</a>
			, as well as the
			<a href="https://github.com/cabin-language/cabin/tree/main/crates/cabin-language-server">
				cabin tree-sitter parser
			</a>
			for semantic highlighting.
		</p>

		<h3>Installation</h3>

		<b>💤 lazy.nvim</b>

		<Snippet
			language="lua"
			code={`
			{
				"cabin-language/cabin.nvim",
				dependencies = { "nvim-tree/nvim-web-devicons" }, -- optional
				opts = {}
			}
		`}
		/>

		<h3>
			<WarningIcon stroke="#f9e2af" style="width: 1.25rem;" />
			Future Deprecation Warning
		</h3>

		<p>This plugin may be deprecated in the future if the following criteria are met:</p>

		<ul>
			<li>
				<input type="checkbox" disabled />
				Cabin is registered as a
				<a
					href="https://neovim.io/doc/user/filetype.html#_3.-docs-for-the-default-filetype-plugins."
				>
					default filetype
				</a>
			</li>
			<li>
				<input type="checkbox" disabled />
				Cabin has an icon registered in
				<a href="https://github.com/nvim-tree/nvim-web-devicons">nvim-web-devicons</a>
			</li>
			<li>
				<input type="checkbox" disabled />
				The
				<a href="https://github.com/cabin-language/cabin/tree/main/crates/cabin-language-server">
					cabin language server
				</a>
				is available through
				<a href="https://github.com/williamboman/mason.nvim">mason.nvim</a>
			</li>
			<li>
				<input type="checkbox" disabled />
				The cabin tree-sitter parser is available through
				<a href="https://github.com/nvim-tree-sitter/nvim-tree-sitter">nvim-tree-sitter</a>
			</li>
		</ul>
	</div>

	<h2 class="editor" onclick={expandEditor}>
		<img src={zedIcon} alt="Neovim" />
		Zed
	</h2>

	<h2 class="editor" onclick={expandEditor}>
		<img src={unknownIcon} alt="Other" />
		Other
	</h2>

	<div>
		<p>
			If you're using an editor that isn't listed here, you can use the tools Cabin provides with
			your editor-specific setup.
		</p>

		<h3>Highlighting</h3>

		<p>Cabin offers a number of highlighting solutions depending on what your editor supports:</p>

		<ul>
			<li>
				<b>Tree-Sitter:</b>
				The Cabin Tree-Sitter grammar and parser, along with its accompanying highlight queries, can
				be used to highlight code in an editor that supports Tree-Sitter highlighting.
			</li>
			<li>
				<b>TextMate:</b>
				There also exists a Cabin TextMate grammar that can be used by editors that utilize TextMate
				grammars for syntax highlighting.
			</li>
		</ul>

		<h3>Diagnostics</h3>

		<p>
			There are multiple ways to get live diagnostics for your Cabin code in real-time in an editor:
		</p>

		<ul>
			<li>
				<b>Language Server Protocol:</b>
				Cabin has a language server that provides a server-side implementation of Microsoft's language
				server protocol. Many editors use this as a unified way to communicate with languages about diagnostics,
				among other features.
			</li>
			<li style:margin-top="1rem">
				<b>Compiler Invocation:</b>
				The Cabin compiler can check a program and output diagnostics in a number of formats; If you
				can invoke the compiler and parse the result from your editor, you can convert them into your
				editor-specific diagnostic format:
			</li>
		</ul>

		<Snippet>
			<pre>
Checks for diagnostics in a Cabin project.

<b>Usage:</b> <span style:color="#89b4fa">cabin check</span> <span
					style:color="#9399b2">[OPTIONS]</span>

<b>Options:</b>

    <span
					style:color="#9399b2"
					style:font-weight="bold">--format</span>: "readable" | "json" = "readable"

        The output format for the diagnostics. If the value is set to "readable" the outputs will 
        be pretty-printed with a code snippet showing the location of the diagnostic. If the value
        set to "json", a JSON array of diagnostics will be returned with the structure:

        &lbrace; diagnostics: &lbrace; file: string, line: int, column: int, message: string, severity: string &rbrace;[] &rbrace;

        For example, an example output is:

        &lbrace;"diagnostics":[&lbrace;"file":"/home/jazz/projects/example/src/main.cabin","line":10,"column":4,"message":"Type Mismatch: This value cannot be assigned to this type.","severity","error"&rbrace;]&rbrace;

        "severity" will always be either "error", "warning", "info", or "hint".
		</pre>
		</Snippet>
	</div>
</TutorialDocument>

<style>
	.os-buttons {
		display: flex;
	}

	a {
		color: dodgerblue;
	}

	.note {
		color: #f9e2af;
		font-size: 0.85rem;
		margin-top: -0.75rem;
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

	.editor {
		padding: 0px;
		align-items: center;
		cursor: pointer;

		img {
			height: 1.5rem;
		}

		&::after {
			content: '';
			width: 0.25rem;
			height: 0.25rem;
			rotate: 45deg;
			border-right: 2px solid white;
			border-top: 2px solid white;
		}

		& + div {
			display: none;
			flex-direction: column;
			gap: 1.5rem;
		}
	}
</style>
