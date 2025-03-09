import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{$ as u,s as e,f}from"../chunks/CoInYexW.js";import{h as b}from"../chunks/eUedGi1i.js";import{t as g,a as m}from"../chunks/CZgyuwJY.js";import{S as o}from"../chunks/DOGuWRaC.js";import{T as w}from"../chunks/BAhHPTym.js";var v=g(`<h1>Control Flow</h1> <p>Control flow in Cabin is mostly handled through labels and <code>is</code> statements. An <code>is</code> statement is like a <code>goto</code> that jumps to a label.</p> <h2 id="labels">Labels &amp; <code>is</code> Statements</h2> <p>When you assign bind a name with a <code>let</code> declaration, the value of the binding is labelled with the name. This might sound a little confusing,
		but it's super straightforward once you see it:</p> <!> <p>In this example, when we do <code>length_in_cm is</code> , that interrupts the current control flow to "goto" the name binding, assigning the value of the <code>is</code> statement.</p> <h2 id="reserved-labels">Reserved Labels</h2> <p>For convenience, Cabin provides a number of reserved labels. These aren't necessary at all, but
		they're often helpful.</p> <h3 id="it">The <code>it</code> Label</h3> <p>The first reserved label is one we've see before: <code>it</code> . <code>it</code> will break to the "most inner binding". It will traverse up the scope tree until the result of the
		current expression is being used for a binding. Consider this example from before:</p> <!> <p>So <code>it</code> works its way up the scope tree. In this case, it first checks the <code>if</code> expression. Since the result of the <code>if</code> expression isn't being bound to anything, it goes up one more level to the <code>foreach</code> loop. The <code>foreach</code> loop <i>is</i> being bound to a name ( <code>danny</code> ), so <code>it</code> is going to break to this level.</p> <h3 id="return">The <code>return</code> Label</h3> <p>The next reserved label is <code>return</code> . That's right, in Cabin, <code>return</code> isn't a keyword with it's own syntax; It's just a built-in identifier. <code>return</code> refers to the current (innermost) action. We haven't talked about <code>actions</code> yet, but if you're familiar with other languages, they're like functions. Here's an example of an
		early return:</p> <!> <p>This is exactly equivalent to doing this:</p> <!> <p><code>return</code> always just expands to the current (innermost) action name.</p> <h3 id="loop">The <code>loop</code> Label</h3> <p>There is a built-in label called <code>loop</code> . <code>loop</code> is similar to <code>return</code> , but it refers to the innermost loop instead. So, our previous example could also be written like
		this:</p> <!> <p>However, this is not the most idiomatic way to use <code>loop</code> ; This example is better fit for <code>it</code> or just <code>danny</code> ; Using <code>loop</code> here actually gives a warning. Instead, <code>loop</code> is useful when we aren't binding the result of the loop:</p> <!> <p>In this case, we want to break out of the loop as soon as we find a person with the first name <code>"danny"</code> .</p> <h3 id="done">The <code>done</code> Value</h3> <p>This is <i>almost</i> idiomatic, except we don't like to use <code>nothing</code> for this use case, because it's a little confusing that we are just trying to break out of the loop,
		and using <code>nothing</code> for this will also give a warning. Instead, we have a built-in alias for <code>nothing</code> called <code>done</code> that's designed for this exact use case:</p> <!> <p>This provides much more clear intent, and finally we have no warnings; This is the idiomatic way
		to break out of a loop that isn't binding a value. By the way, using <code>done</code> instead of <code>nothing</code> in any other situation will result in a warning.</p> <h3 id="iteration">The <code>iteration</code> Label</h3> <p>Finally, the <code>iteration</code> label refers to the end of the current loop body, i.e., using <code>iteration is done;</code> is equivalent to a <code>continue</code> in most languages:</p> <!>`,1);function S(h){b(n=>{u.title="Control Flow • Cabin Docs"}),w(h,{page:"Control Flow",children:(n,y)=>{var t=v(),i=e(f(t),8);o(i,{language:"cabin",code:`
			let length_in_cm = if units == "inches" {
				length_in_cm is length * 2.54;
			} otherwise {
				length_in_cm is length;
			};
		`});var a=e(i,12);o(a,{language:"cabin",code:`
			let danny = foreach person in people {
				if person.first_name == "danny" {
					it is danny;
				};
			};
		`});var s=e(a,8);o(s,{language:"cabin",code:`
			let divide = action(a: Number, b: Number): Number {
				if b == 0 {
					return is 0;
				};

				return is a / b;
			};
		`});var r=e(s,4);o(r,{language:"cabin",code:`
			let divide = action(a: Number, b: Number) {
				if b == 0 {
					divide is 0;
				};

				divide is a / b;
			}; 
		`});var d=e(r,8);o(d,{language:"cabin",code:`
			let danny = foreach person in people {
				if person.first_name == "danny" {
					loop is danny;
				};
			};
		`});var c=e(d,4);o(c,{language:"cabin",code:`
			foreach person in people {
				print(person.first_name);
				if person.first_name == "danny" {
					loop is nothing;
				};
			};
		`});var l=e(c,8);o(l,{language:"cabin",code:`
			foreach person in people {
				print(person.first_name);
				if person.first_name == "danny" {
					loop is done;
				};
			};
		`});var p=e(l,8);o(p,{language:"cabin",code:`
			foreach person in people {

				# skip danny and continue
				if person.first_name == "danny" {
					iteration is done;
				};

				print(person.first_name);
			};
		`}),m(n,t)}})}export{S as component};
