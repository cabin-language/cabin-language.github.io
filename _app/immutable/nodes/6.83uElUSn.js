import"../chunks/CWj6FrbW.js";import"../chunks/DTuzj3NS.js";import{$ as v,s as i,f as w}from"../chunks/D2R92oOg.js";import{h as _}from"../chunks/ChMeJBU0.js";import{t as r,a as t}from"../chunks/hktnC11W.js";import{D as $}from"../chunks/DPlR9Xj5.js";import{S as n}from"../chunks/Dbf8J8IC.js";var y=r(`<pre>let length_in_cm = if units == "inches" &lbrace;
    length_in_cm is length * 2.54;
&rbrace; otherwise &lbrace;
    length_in_cm is length;
&rbrace;;
</pre>`),T=r(`<pre>let danny = foreach person in people &lbrace;
    if person.first_name == "danny" &lbrace;
        it is danny;
    &rbrace;;
&rbrace;;
</pre>`),x=r(`<pre>let divide = action(a: Number, b: Number) &lbrace;
    if b == 0 &lbrace;
        return is 0;
    &rbrace;

    return is a / b;
&rbrace;;
</pre>`),k=r(`<pre>let divide = action(a: Number, b: Number) &lbrace;
    if b == 0 &lbrace;
        divide is 0;
    &rbrace;

    divide is a / b;
&rbrace;;
</pre>`),C=r(`<pre>let danny = foreach person in people &lbrace;
    if person.first_name == "danny" &lbrace;
        loop is danny;
    &rbrace;;
&rbrace;;
</pre>`),P=r(`<pre>foreach person in people &lbrace;
    print(person.first_name);
    if person.first_name == "danny" &lbrace;
        loop is nothing;
    &rbrace;;
&rbrace;;
</pre>`),I=r(`<pre>foreach person in people &lbrace;
    print(person.first_name);
    if person.first_name == "danny" &lbrace;
        loop is done;
    &rbrace;;
&rbrace;;
</pre>`),L=r(`<pre>foreach person in people &lbrace;

    // skip danny and continue
    if person.first_name == "danny" &lbrace;
        iteration is done;
    &rbrace;;

    print(person.first_name);
&rbrace;;
</pre>`),S=r(`<h1>Control Flow</h1> <p>Control flow in Cabin is mostly handled through labels and <code>is</code> statements. An <code>is</code> statement is like a <code>goto</code> that jumps to a label.</p> <h2 id="labels">Labels &amp; <code>is</code> Statements</h2> <p>When you assign bind a name with a <code>let</code> declaration, the value of the binding is labelled
		with the name. This might sound a little confusing, but it's super straightforward once you see it:</p> <!> <p>In this example, when we do <code>length_in_cm is</code>, that interrupts the current control
		flow to "goto" the name binding, assigning the value of the <code>is</code> statement.</p> <h2 id="reserved-labels">Reserved Labels</h2> <p>For convenience, Cabin provides a number of reserved labels. These aren't necessary at all, but
		they're often helpful.</p> <h3 id="it">The <code>it</code> Label</h3> <p>The first reserved label is one we've see before: <code>it</code>. <code>it</code> will break to
		the "most inner binding". It will traverse up the scope tree until the result of the current expression
		is being used for a binding. Consider this example from before:</p> <!> <p>So <code>it</code> works its way up the scope tree. In this case, it first checks the <code>if</code> expression. Since the result of the <code>if</code> expression isn't being bound
		to anything, it goes up one more level to the <code>foreach</code> loop. The <code>foreach</code> loop <i>is</i> being bound to a name (<code>danny</code>), so <code>it</code> is going to break to this level.</p> <h3 id="return">The <code>return</code> Label</h3> <p>The next reserved label is <code>return</code>. That's right, in Cabin, <code>return</code> isn't a keyword with it's own syntax; It's just a built-in identifier. <code>return</code> refers to the current (innermost) action. We haven't talked about <code>actions</code> yet, but if
		you're familiar with other languages, they're like functions. Here's an example of an early return:</p> <!> <p>This is exactly equivalent to doing this:</p> <!> <p><code>return</code> always just expands to the current (innermost) action name.</p> <h3 id="loop">The <code>loop</code> Label</h3> <p>There is a built-in label called <code>loop</code>. <code>loop</code> is similar to <code>return</code>, but it refers to the innermost loop instead. So, our previous example could
		also be written like this:</p> <!> <p>However, this is not the most idiomatic way to use <code>loop</code>; This example is better fit
		for <code>it</code> or just <code>danny</code>; Using <code>loop</code> here actually gives a
		warning. Instead, <code>loop</code> is useful when we aren't binding the result of the loop:</p> <!> <p>In this case, we want to break out of the loop as soon as we find a person with the first name <code>"danny"</code>.</p> <h3 id="done">The <code>done</code> Value</h3> <p>This is <i>almost</i> idiomatic, except we don't like to use <code>nothing</code> for this use
		case, because it's a little confusing that we are just trying to break out of the loop, and
		using <code>nothing</code> for this will also give a warning. Instead, we have a built-in alias
		for <code>nothing</code> called <code>done</code> that's designed for this exact use case:</p> <!> <p>This provides much more clear intent, and finally we have no warnings; This is the idiomatic way
		to break out of a loop that isn't binding a value. By the way, using <code>done</code> instead
		of <code>nothing</code> in any other situation will result in a warning.</p> <h3 id="iteration">The <code>iteration</code> Label</h3> <p>Finally, the <code>iteration</code> label refers to the end of the current loop body, i.e.,
		using <code>iteration is done;</code> is equivalent to a <code>continue</code> in most languages:</p> <!>`,1);function B(m){_(s=>{v.title="Control Flow • Cabin Docs"}),$(m,{page:"Control Flow",children:(s,j)=>{var d=S(),l=i(w(d),8);n(l,{children:(e,a)=>{var o=y();t(e,o)},$$slots:{default:!0}});var c=i(l,12);n(c,{children:(e,a)=>{var o=T();t(e,o)},$$slots:{default:!0}});var p=i(c,8);n(p,{children:(e,a)=>{var o=x();t(e,o)},$$slots:{default:!0}});var h=i(p,4);n(h,{children:(e,a)=>{var o=k();t(e,o)},$$slots:{default:!0}});var u=i(h,8);n(u,{children:(e,a)=>{var o=C();t(e,o)},$$slots:{default:!0}});var b=i(u,4);n(b,{children:(e,a)=>{var o=P();t(e,o)},$$slots:{default:!0}});var f=i(b,8);n(f,{children:(e,a)=>{var o=I();t(e,o)},$$slots:{default:!0}});var g=i(f,8);n(g,{children:(e,a)=>{var o=L();t(e,o)},$$slots:{default:!0}}),t(s,d)},$$slots:{default:!0}})}export{B as component};
