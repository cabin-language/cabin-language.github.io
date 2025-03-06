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

<svelte:head>
	<title>Installation • Cabin Docs</title>
</svelte:head>

<Documentation page="Installation">
	<h1>Installation</h1>

	<span class="os-buttons">
		<button style:background={os === 'windows' ? '#28283d' : '#181825'} onclick={setOs('windows')}
			><img src={windowsIcon} />Windows</button
		>
		<button style:background={os === 'mac' ? '#28283d' : '#181825'} onclick={setOs('mac')}
			><img src={macIcon} />Mac</button
		>
		<button style:background={os === 'linux' ? '#28283d' : '#181825'} onclick={setOs('linux')}>
			<img src={linuxIcon} />
			Linux
		</button>
	</span>

	<p>Cabin can be installed through <code>cargo</code>:</p>
	<Snippet>
		<div>
			<span style:color="#89b4fa">cargo</span>
			<span style:color="#89b4fa">install</span>
			<span style:color="#f38ba8">cabin-language</span>
		</div>
	</Snippet>

	<h2 id="testing">Testing</h2>

	<p>
		Once Cabin is installed, you can test that it's working with the <code>cabin</code> command:
	</p>

	<Snippet>
		<span style:color="#89b4fa">cabin</span>
	</Snippet>

	<p> If all goes well, you should see an output like this: </p>

	<Snippet>
		<pre>
The Cabin compiler.

<b>Usage:</b> <span style:color="#89b4fa">cabin</span> <span style:color="#89b4fa"
				>&lt;COMMAND&gt;</span
			> <span style:color="#f38ba8">[ARGUMENTS]</span> <span style:color="#9399b2">[OPTIONS]</span>

<b>Commands:</b>
    <span style:color="#89b4fa">new</span>            Create a new Cabin project
    <span style:color="#89b4fa">run</span>            Run a Cabin project 
    <span style:color="#89b4fa">build</span
			>          Build a Cabin project into a native executable without running it
    <span style:color="#89b4fa">check</span
			>          Check a Cabin project for compile-time errors without building it
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
		If running <code>cabin</code> gives an error, make sure that the installation location is in
		your <code>PATH</code> environment variable. The following bash code will print the location of the
		Cabin executable on your system if it exists, and if it doesn't, will let you know*:
	</p>

	<Snippet>
		(PATHS=($&lbrace;PATH//:/ &rbrace;) ; IFS=$'\n' ; echo "$&lbrace;PATHS[*]&rbrace;") | grep
		&bsol;&bsol;bcabin&bsol;&bsol;b || echo "Cabin is not in PATH!"
	</Snippet>

	<p class="note"
		>*Note: requires <a href="https://www.gnu.org/software/coreutils/">GNU Coreutils</a> (present on
		most Unix systems by default)</p
	>

	<p>
		If you get an error here, it means that the Cabin compiler either doesn't exist on your
		computer, or it does but it's in a location somewhere that isnt in your <code>PATH</code>
		variable. If you know that you have the compiler and where it is (it'll just be a file called
		<code>cabin</code>), then add its parent directory to your <code>PATH</code>; i.e., if your
		Cabin compiler is located at <code>/home/user/.programs/cabin</code>, then in your
		<code>~/.bashrc</code>, you'd add:
	</p>

	<Snippet>export PATH="$PATH:/home/user/.programs"</Snippet>

	<p>
		Alternatively, if you're not sure whether the compiler is on your system, or you think it might
		be but you don't know where, consider trying the installation for your operating system above.
		Make sure the operating system selected matches your machine; The website will try to
		auto-detect it, but it doesn't hurt to double check, especially when it comes to Linux distros.
	</p>

	<p>
		If you're <i>still</i> having trouble with your installation, fear not! Two more options remain.
		For both, you need to have Rust installed. Check if Rust is installed by running
		<code>cargo</code>, and if it's not, install it with the instructions
		<a href="https://www.rust-lang.org/tools/install" style:color="dodgerblue">here</a>.
	</p>

	<p>
		The first option is to install the compiler through it's cargo crate. This may have already been
		the instructions for your operating system if no native solution exists. If not, you can try it
		like so:
	</p>

	<Snippet>
		<div>
			<span style:color="#89b4fa">cargo</span>
			<span style:color="#89b4fa">install</span>
			<span style:color="#f38ba8">cabin-language</span>
		</div>
	</Snippet>

	<p>
		If that's causing you trouble, the last thing you can try is building the compiler from source.
		That'd look something like this:
	</p>

	<Snippet>
		<div>
			<span style:color="#89b4fa">git</span>
			<span style:color="#89b4fa">clone</span>
			<span style:color="#f38ba8">https://github.com/cabin-language/cabin.git</span>
		</div>

		<div>
			<span style:color="#89b4fa">cd</span>
			<span style:color="#f38ba8">cabin/crates/cabin-bin</span>
		</div>
		<div>
			<span style:color="#89b4fa">cargo</span>
			<span style:color="#89b4fa">build</span>
			<span style:color="#9399b2">--release</span>
		</div>
	</Snippet>

	<p>
		The compiler executable will be placed at <code
			>cabin/crates/cabin-bin/target/release/cabin</code
		>
		when the project finishes compiling. Place the file anywhere in your <code>PATH</code>, using
		the <code>PATH</code>instructions and debugging tips above if necessary.
	</p>

	<p>
		If you've gotten this far and are <i>still</i> having trouble getting the compiler working on
		your machine, first of all, congratulations for being the most incredibly unlucky person alive,
		and secondly, feel free to reach out to the Cabin community to get advice on your situation. You
		can
		<a href="https://github.com/cabin-language/cabin/issues"
			>submit an issue on the Cabin GitHub repository</a
		>, ask questions in
		<a href="/community">the Cabin Discord server</a>, or
		<a href="/community">reach out to the community in other ways</a>. Try to be descriptive about
		what you've tried that hasn't worked, what error messages (if any) you've received, and what
		you're confused on or struggling with.
	</p>

	<p>Good luck!</p>
</Documentation>

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
</style>
