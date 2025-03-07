<script>
	import Documentation from '../../../components/Documentation.svelte';
	import Snippet from '../../../components/Snippet.svelte';
</script>

<svelte:head>
	<title>Tags&nbsp;&nbsp;•&nbsp;&nbsp;Cabin Docs</title>
</svelte:head>

<Documentation page="Tags">
	<h1>Tags</h1>

	<p>
		<b>Tags</b>
		are a dead simple way to "mark" a value with another value
	</p>

	<h2 id="introduction">Introduction</h2>

	<p>
		A "tag" is just an object, and tags can be applied to values with the
		<code>#[]</code>
		syntax:
	</p>

	<Snippet>
		<pre>
let friend = new Object &lbrace;&rbrace;

#[friend]
let tucker = new Person &lbrace;
    first_name = "tucker",
    last_name = "foley"
&rbrace;;
</pre>
	</Snippet>

	<p>
		The only purpose of tagging an object is to later check if an object <i>has</i>
		a tag. All values have a
		<code>.has_tag()</code>
		action on them:
	</p>

	<Snippet>
		<pre>
let is_friend = tucker.has_tag(friend);
</pre>
	</Snippet>

	<p>
		Some tags, such as <code>#[editable]</code>
		and
		<code>#[visible]</code>
		, are checked by the compiler.
	</p>

	<h2 id="mutation">Mutation</h2>

	<p>
		Tags are applied to <i>values</i>
		, not
		<i>names</i>
		. This means that reassigning a name will
		<i>not</i>
		keep its tags. For example:
	</p>

	<Snippet>
		<pre>
let friend = new Object &lbrace;&rbrace;

#[editable, friend]
let person = new Person &lbrace;
    first_name = "tucker",
    last_name = "foley"
&rbrace;;

print(person.has_tag(friend)) # true

person = new Person &lbrace;
    first_name = "dash",
    last_name = "baxter"
&rbrace;;

print(person.has_tag(friend)) # false
</pre>
	</Snippet>

	<p>
		This is <i>almost</i>
		true, but there are some notable exceptions&mdash;The two built-in tags mentioned earlier get special
		handling. They're bound to
		<i>names</i>
		, not values. So, reassigning a name marked
		<code>#[visible]</code>
		or
		<code>#[editable]</code>
		will not remove those tags.
	</p>
</Documentation>
