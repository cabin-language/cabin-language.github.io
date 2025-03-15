import"../chunks/CWj6FrbW.js";import"../chunks/wPM4U2Nx.js";import{s as e,f as u,n as m}from"../chunks/ChQ8i3mT.js";import{t as f,a as h}from"../chunks/CwLvwI_u.js";import{S as t}from"../chunks/DCmLAtqY.js";import{T as b}from"../chunks/BuuoEnqP.js";var y=f(`<h1>System Interaction</h1> <h2 id="terminal-input-output">Terminal Input &amp; Output</h2> <p>We can print to the terminal with <code>builtin.system.terminal.print</code> from the Cabin builtins:</p> <!> <p>For convenience, the standard Cabin prelude automatically defines a global called <code>print</code> that's assigned to <code>builtin.system.terminal.print</code> . So, the above could simply be written as:</p> <!> <p>You may notice a warning when you run this&mdash;Don't worry about that for now, we'll talk
		about it in the next section.</p> <p><code>print</code> takes an optional second argument, which is a list of options. For example, to print without the
		trailing newline, set <code>newline = false</code> :</p> <!> <p>Don't worry too much about the <code>new</code> syntax here; It'll be discussed more in the section on groups.</p> <p>The spiritual mirror to <code>print</code> is <code>input</code> . <code>input</code> (fully qualified as <code>builtin.system.termial.input</code> ) reads a line of input from the system's standard input stream.</p> <!> <p>Similar to <code>print</code> , <code>input</code> takes an optional argument. In the case of <code>input</code> , the argument is a string to print before taking user input:</p> <!> <p>Some other useful terminal actions are <code>terminal.clear()</code> .</p> <h2 id="file-input-output">File Input &amp; Output</h2> <p>There are several useful file operations built into Cabin in <code>builtin.system.files</code> (aliased as <code>files</code> ). To read a file, we use <code>files.read</code> :</p> <!> <p>Similarly, you could guess what <code>files.write</code> does:</p> <!> <p>Other useful file actions are <code>files.delete</code> , <code>files.create</code> , <code>files.append</code> , <code>files.exists</code> , and <code>files.directory_contents</code> . For a full list of file operations, see <a href="/reference/standard-library/system" class="svelte-bdyy7t">the reference page for <code>builtin.system.files</code></a> .</p> <h2 id="other-system-interactions">Other System Interactions</h2> <p>Below are some other useful ways to interact with the system:</p> <ul><li><code>system.environment_variables</code> <ul><li><code>system.environment_variables.get</code></li> <li><code>system.environment_variables.set</code></li></ul></li></ul>`,1);function I(d){b(d,{page:"System Interaction",children:(c,g)=>{var o=y(),i=e(u(o),6);t(i,{language:"cabin",code:`
			builtin.system.terminal.print("Hello world!");
		`,output:"Hello world!"});var n=e(i,4);t(n,{language:"cabin",code:`
			print("Hello world!");
		`,output:"Hello world!"});var a=e(n,6);t(a,{language:"cabin",code:`
			print("Hello world! ", new { newline = false });
			print(":D");
		`,output:"Hello world! :D"});var l=e(a,6);t(l,{language:"cabin",code:`
			let name = input();
			print("Hello {name}!");
		`});var r=e(l,4);t(r,{language:"cabin",code:`
			let name = input("Enter your name: ");
			print("Hello {name}!");
		`});var s=e(r,8);t(s,{language:"cabin",code:`
			let contents = files.read("data.txt");
		`});var p=e(s,4);t(p,{language:"cabin",code:`
			files.write("data.txt", "some_data");
		`}),m(8),h(c,o)}})}export{I as component};
