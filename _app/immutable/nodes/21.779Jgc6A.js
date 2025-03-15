import"../chunks/CWj6FrbW.js";import"../chunks/wPM4U2Nx.js";import{s as e,f as I,n}from"../chunks/ChQ8i3mT.js";import{t as P,e as r,a as i}from"../chunks/CwLvwI_u.js";import{s as R}from"../chunks/BBBwdkJ2.js";import{S as t}from"../chunks/DCmLAtqY.js";import{T as E}from"../chunks/BuuoEnqP.js";const H=""+new URL("../assets/RET_1.CV2u3p39.png",import.meta.url).href;var L=P(`<h1>Runtime Evaluation</h1> <p>Up until now, all of our code has been executing at <i>compile-time</i> . This is great because it allows us to catch errors early and keep our production code optimized
		and safe. However, our code currently doesn't <i>do</i> anything for the user, which is a bit silly. So, it's time to talk about <b>runtime evaluation</b> .</p> <h2 id="run-expressions"><code>run</code> expressions</h2> <p><code>run</code> expressions <b>force an expression to be evaluated at runtime</b> . For example, let's look at the following code:</p> <!> <p>This will print <code>Hello!</code> at compile-time, and will be reduced to nothing at runtime. But what if we want to print this to
		the user? That's where <code>run</code> comes in:</p> <!> <p>This time, our message will be printed at runtime instead of compile-time!</p> <p>It's important to note that <code>run</code> isn't an action, it's a special syntax. Unlike an action, the argument inside <code>run</code> is evaluated lazily, not eagerly. You can think of <code>run</code> as analgous to being a function-like macro. Additionally, with <code>run</code> being a special syntax, you can't do things like this:</p> <!> <p>The syntax is always <code>run(&lt;expression&gt;)</code> . . The parentheses are required to avoid ambiguity to the programmer.</p> <p>It's important to note that the <i>sub-expressions</i> to the expression passed to <code>run</code> <i>are</i> evaluated at compile-time. For example, let's look at this run expression:</p> <!> <p>The inner expression <code>2 + 3</code> will still be evaluated at compile-time, meaning at compile-time the above code will be transformed
		into:</p> <!> <p>To also force the sub-expressions to be evaluated at runtime, we can nest <code>run</code> expressions:</p> <!> <p>This might seem tedious, but you'll come to find that it's actually quite rare that you need to
		nest <code>run</code> expressions.</p> <h2 id="runtime-evaluation-tree">The Runtime-Evaluation Tree</h2> <p>Let's get a little more detailed about how runtime evaluation works. Cabin models runtime
		evaluation with what's called the <b>runtime evaluation tree</b> (RET). The idea is that expressions that depend on runtime values are themselves forced to be evaluated
		at runtime, and expressions that depend on <i>those</i> expressions are evaluated at runtime, and so on. Let's look at some examples.</p> <p>Consider this code that uses <code>run</code> expressions:</p> <!> <p>In this code, the definitions for <code>y</code> and <code>z</code> don't use <code>run</code> expressions, yet, they are still evaluated at runtime. Why? Because they <i>depend</i> on the value of <code>x</code> , which isn't known until runtime. In this example, the RET looks something like this:</p> <img alt="runtime expression tree"> <p>In this diagram, an arrow from a parent node P to a child node C means "the result of C depends
		on knowing the result of P, and P is only known at runtime, therefore C can only be known at
		runtime". For example, looking at the bottom-left-most node <code>c</code> , the diagram is showing that the value of <code>c</code> depends on its parent node <code>a + 2</code> , and <code>a + 2</code> is only known at runtime, so <code>c</code> can only be known at runtime.</p> <h2 id="command-line-arguments">Command-Line Arguments</h2> <p>In Cabin, there's a built-in action called <code>command_line_arguments()</code> that returns a list of arguments passed to the program. Like all actions, it can be called at compile-time.
		When calling <code>command_line_arguments()</code> at compile-time, it'll give the arguments passed to the compiler. For example:</p> <!> <p>When running with <code>cabin run -- some arg --flag -o</code> gives:</p> <!> <p>The <code>--</code> argument is used to tell the compiler that you're passing arguments to the program, not the compiler.</p> <p>But what about runtime arguments? Often we want users to be able to pass arguments to our
		programs. In this case, we simply call the action at runtime:</p> <!> <p>However, if we run this with the same command as above, an empty list will be printed. This is
		because the arguments after <code>--</code> are passed to the program at compile-time, not at runtime. To pass runtime arguments, we use an additional <code>--</code> that separates our compile-time arguments from runtime arguments:</p> <!> <p>At compile-time, this will output:</p> <!> <p>And at runtime:</p> <!> <p>So, to pass runtime arguments without any compile-time arguments, we can do:</p> <!> <p>The Cabin compiler has a shorthand for this, which is using the <code>---</code> argument:</p> <!> <p>This will pass the arguments as runtime arguments and pass no compile-time arguments, completely
		equivalent to using <code>-- --</code> .</p>`,1);function D(k){E(k,{page:"Runtime Evaluation",children:($,A)=>{var s=L(),l=e(I(s),8);t(l,{language:"cabin",code:`
			print("Hello!");
		`});var d=e(l,4);t(d,{language:"cabin",code:`
			run(print("Hello!"));
		`});var u=e(d,6);t(u,{language:"cabin",code:`
			let stored_run = run; # invalid
		`});var c=e(u,6);t(c,{language:"cabin",code:`
			run(print(2 + 3));
		`});var m=e(c,4);t(m,{language:"cabin",code:`
			run(print(5));
		`});var p=e(m,4);t(p,{language:"cabin",code:`
			run(print(run(2 + 3)));
		`});var h=e(p,10);t(h,{language:"cabin",code:`
			let a = run(10 + 10);
			let b = run(5 + 5);
			let c = a + 2;
			let d = a + b;
		`});var g=e(h,4);R(g,"src",H);var b=e(g,8);t(b,{language:"cabin",code:`
			let args = command_line_arguments();
			debug(args);
		`});var v=e(b,4);t(v,{children:(a,T)=>{n();var o=r('["some", "arg", "--flag", "-o"]');i(a,o)},$$slots:{default:!0}});var f=e(v,6);t(f,{language:"cabin",code:`
			let compile_time_args = command_line_arguments();
			debug(compile_time_args);

			let runtime_args = run(command_line_arguments());
			print(runtime_args);
		`});var w=e(f,4);t(w,{language:"bash",code:`
			cabin run -- some arg --flag -o -- some2 arg2 --flag2 -i
		`});var _=e(w,4);t(_,{children:(a,T)=>{n();var o=r('["some", "arg", "--flag", "-o"]');i(a,o)},$$slots:{default:!0}});var x=e(_,4);t(x,{children:(a,T)=>{n();var o=r('["some2", "arg2", "--flag2", "-i"]');i(a,o)},$$slots:{default:!0}});var y=e(x,4);t(y,{language:"bash",code:`
			cabin run -- -- some2 arg2 --flag2 -i
		`});var C=e(y,4);t(C,{language:"bash",code:`
			cabin run --- some2 arg2 --flag2 -i
		`}),n(2),i($,s)}})}export{D as component};
