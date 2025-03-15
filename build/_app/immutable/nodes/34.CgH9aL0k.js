import"../chunks/CWj6FrbW.js";import{f as C,aa as h,ap as R,a1 as o,s,n as F,a2 as r,J as p}from"../chunks/ChQ8i3mT.js";import{f as T,t as B,a as O}from"../chunks/CwLvwI_u.js";import{i as c}from"../chunks/DTE6UjiL.js";import{N as D}from"../chunks/B9cGN4M3.js";import{S as m}from"../chunks/DCmLAtqY.js";const S=`program = { statement } ;

(* -------------------------- Statements --------------------------- *)

statement = (
	declaration |
	goto        |
	expression  |
) , ";" ;

declaration = [ taglist ] , "let" , identifier , [ ":" , expression ] , "=" , expression ;

goto = identifier , "is" , expression ;

(* -------------------------- Expressions --------------------------- *)

expression = 
	binary                 |
	"(" , expression , ")" |
	postfix                |
	literal
;

binary = expression , binop , expression ;
binop = "." | "+" | "-" | "*" | "/" | "^" | "<" | "<=" | ">" | ">=" | "==" | "!=" | "=" | "and" | "or" ;

postfix = functioncall | expression , ( "?" | "!" ) ;

functioncall = 
	expression , "<" , [ expression , { "," , expression } , [","] ] , ">" , [ "(" , [ expression , { "," , expression } , [","] ] , ")" ] |
	expression , "(" , [ ["let"] , expression , { "," , expression } , [","] ] , ")"
;

(* -------------------------- Literals --------------------------- *)

literal = 
	match           | 
	if              | 
	foreach         | 
	while           | 
	extension       |  
	either          | 
	action          | 
	run             | 
	constructor     | 
	block           | 
	identifier      |
	number          |
	formattedstring |
	rawstring       |
	number
;

run = "run", "(", expression, ")" ;

match = "match" , expression , "{" , [ matchbranch { "," , matchbranch } , [","] ] , "}" ;
matchbranch = expression , "=>" , expression ;

block = "{" , { statement } , "}" ;

foreach = "foreach" , identifier , "in" , expression , block ;

if = "if" , expression , block , { "otherwise" , "if" , expression , block } , [ "otherwise" , block ] ;

while = "while" , expression , block ;

constructor = "new" , [ identifier ] , "{" , [ objectvalue , { "," , objectvalue , [","] } ] , "}" ;
objectvalue = identifier , "=" , expression ;

extension = "extensionof" , expression , [ "tobe" , expression ] ,	
	"{" , [ objectvalue , { "," , objectvalue } , [","] ] , "}"
;

group = "group" , 
	[ "<" , [ expression , { "," , expression } , [","] ] , ">" ] ,       (* Compile-time parameters *)
	"{" , [ groupfield , { "," , groupfield } , [","] ] , "}"             (* Fields *)
;
groupfield = [ taglist ] , identifier , [ ":" , expression ] , [ "=" , expression ] ;

either = "either" , "{" , [ identifier , { "," , identifier } , [","] ]  , "}" ;

action = "action" , 
	[ "<", [ expression , { "," , expression }, [","] ] , ">" ] ,   (* Compile-time parameters *)
	[ "(", [ expression , { "," , expression }, [","] ] , ")" ] ,   (* runtime parameters *)
	[ ":" , expression ] ,                                          (* Return type *)
	[ block ]                                                       (* Body *)
;

taglist = "#" , "[" , [ expression , { "," , expression } , [","] ] , "]" ;

formattedstring = ? no-whitespace ? '"' , { "{" , expression , "}" | stringlit } , '"' ;
stringlit = ? anychar ? - "{" - '"' - "}" ;

rawstring = ? no-whitespace ? "\`" , ( ? anychar ? - "\`" ) , "\`" ;

(* -------------------------- Tokens --------------------------- *)

identifier = ? no-whitespace ? , alphabetic , { alphabetic | digit } ;
number = ? no-whitespace? , digit , { digit } , [ "." , digit , { digit } ] ;

alphabetic = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" |
             "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" ;
digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;

(*

Special Sequences
-----------------

In Extended Backus-Naur Form, the expression ? <text> ? is used to denote a special sequence that
has no predefined meaning. This grammar uses the following special sequences:

- ? anychar ? - Any character, including unicode and multi-byte characters.

- ? no-whitespace? - When a rule starts with this sequence, it indicates that the top-level tokens
in this rule cannot have whitespace between them.

*)
`,N=`<program> ::= <statement-list>

<statement-list> ::= <statement> <statement-list> | ε

<statement> ::= <statement-inner> ";"
<statement-inner> ::= <declaration> | <goto> | <expression>

<declaration> ::= "let" <identifier> <declaration-type> "=" <expression>
<declaration-type> ::= ":" <expression> | ε

<goto> ::= <identifier> is <expression>

<expression> ::= <block> | <foreach> | <if> | <while>

<block> ::= "{" <statement-list> "}"

<foreach> ::= "foreach" <identifier> "in" <expression> <block>

<while> ::= "while" <expression> <block>

<if> ::= "if" <expression> <otherwise-ifs> <otherwise>
<otherwise-ifs> ::= "otherwise" "if" <expression> <block> <otherwise-ifs> | ε
<otherwise> ::= "otherwise" <block> | ε
`,A=`/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
	name: "cabin",

	rules: {
		source_file: $ => repeat($.statement),

		expression: $ => choice(
			$.binary,
			seq("(", $.expression, ")"),
			$.postfix,
			$.literal,
		),

		postfix: $ => prec.left(6, choice(
			$.function_call,
			seq($.expression, "?"),
			seq($.expression, "!"),
		)),

		function_call: $ => prec.left(5, choice(
			seq(
				field("callee", $.expression),
				"<", field("compile_time_arguments", list($.type)), ">",
				optional(seq("(", field("arguments", list(seq(optional("let"), $.expression))), ")"))
			),
			seq(
				field("callee", $.expression),
				seq("(", field("arguments", list(seq(optional("let"), $.expression))), ")")
			),
		)),

		binary: $ => choice(
			prec.left(6, seq(field("left", $.expression), field("operator", choice(".", "::")), field("right", $.identifier))),
			prec.right(5, seq(field("left", $.expression), "^", field("right", $.expression))),
			prec.left(4, seq(field("left", $.expression), choice("*", "/"), field("right", $.expression))),
			prec.left(3, seq(field("left", $.expression), choice("+", "-"), field("right", $.expression))),
			prec.left(2, seq(field("left", $.expression), choice("==", "!=", "<=", ">=", "< ", " >"), field("right", $.expression))),
			prec.left(1, seq(field("left", $.expression), choice("and", "or"), field("right", $.expression)))
		),

		literal: $ => choice(
			$.function,
			$.string,
			$.raw_string,
			$.number,
			$.list,
			$.group,
			$.either,
			$.object_constructor,
			$.extend,
			$.foreach,
			$.if_expression,
			$.while_loop,
			$.match,
			$.block,
			$.run,
			$.identifier,
		),

		run: $ => seq(
			"run",
			"(",
			$.expression,
			")"
		),

		match: $ => seq(
			"match",
			field("source", $.expression),
			"{",
			listWithoutTrailingComma(seq($.expression, "=>", $.expression)),
			optional(seq(",", optional(seq("otherwise", "=>", $.expression, optional(","))))),
			"}"
		),

		if_expression: $ => seq(
			"if",
			field("condition", $.expression),
			field("body", $.block),
			repeat(seq("otherwise", "if", $.expression, $.block)),
			optional(seq("otherwise", $.block)),
		),

		foreach: $ => seq(
			"foreach",
			field("binding", $.identifier),
			"in",
			field("iterable", $.expression),
			$.block
		),

		while_loop: $ => seq(
			"while",
			field("condition", $.expression),
			field("body", $.block),
		),

		object_constructor: $ => seq(
			"new",
			optional(field("type", $.identifier)),
			optional(seq("<", field("compile_time_arguments", list($.type)), ">")),
			"{",
			list($.object_value),
			"}"
		),

		object_value: $ => seq(
			optional(field("tags", $.tag)),
			field("name", $.identifier),
			"=",
			field("value", $.expression)
		),

		extend: $ => seq(
			"extensionof",
			field("target", $.type),
			optional(seq("tobe", field("tobe", $.type))),
			"{",
			list($.object_value),
			"}"
		),

		pattern: $ => seq(
			$.expression
		),

		block: $ => seq("{", repeat($.statement), "}"),
		list: $ => seq("[", list($.expression), "]"),
		tag: $ => seq("#", "[", list($.expression), "]"),

		group: $ => seq(
			"group",
			optional(field("compile_time_parameters", seq("<", list($.group_parameter), ">"))),
			"{",
			field("fields", list($.group_field)),
			"}"
		),

		group_parameter: $ => seq(
			field("name", $.identifier),
			optional(seq(":", field("type", $.type)))
		),

		group_field: $ => seq(
			optional(field("tags", $.tag)),
			field("name", $.identifier),
			optional(seq(":", field("type", $.type))),
			optional(seq("=", field("value", $.expression))),
		),

		either: $ => seq(
			"either",
			optional(seq("<", field("compile_time_parameters", list($.group_parameter)), ">")),
			"{",
			field("variants", list($.either_variant)),
			"}"
		),

		type: $ => $.expression,

		either_variant: $ => seq(field("name", $.identifier), optional(seq(":", field("type", $.type)))),

		function: $ => prec.left(seq(
			"action",
			optional(field("compile_time_parameters", seq("<", list($.group_parameter), ">"))),
			optional(field("parameters", seq("(", list($.parameter), ")"))),
			optional(seq(":", field("return_type", $.type))),
			optional(field("body", $.block))
		)),

		statement: $ => seq(choice(
			$.declaration,
			$.goto,
			$.expression,
		), ";"),

		declaration: $ => seq(
			optional(field("tags", $.tag)),
			"let",
			field("name", $.identifier),
			optional(seq(":", field("type", $.type))),
			optional(seq("=", field("value", $.expression))),
		),

		goto: $ => seq(
			field("label", $.identifier),
			"is",
			field("value", $.expression),
		),

		// Tokens

		pascal_case_identifier: _$ => /[A-Z]\\w*/,
		other_identifier: _$ => /[a-z_]\\w*/,
		identifier: $ => choice($.pascal_case_identifier, $.other_identifier),

		raw_string: $ => /\`[^\`]*\`/,

		string: $ => seq(
			'"',
			repeat(choice(
				seq("{", $.expression, "}"),
				/[^"\\{\\}]+/
			)),
			'"',
		),

		number: _$ => /-?\\d+(\\.\\d+)?/,

		// Utilities

		parameter: $ => seq(
			field("name", $.identifier),
			":",
			field("type", $.type),
		),

		// Extra

		comment: _$ => seq('# ', /[^\\r\\n\\u2028\\u2029]*/),

	},

	extras: $ => [
		$.comment,
		/[\\s\\p{Zs}\\uFEFF\\u2028\\u2029\\u2060\\u200B]/u, // whitespace
	],
});

/**
 * A comma separated, possibly empty list, allowing trailing commas.
 *
 * @param {RuleOrLiteral} rule
 */
function list(rule) {
	return optional(seq(rule, repeat(seq(",", rule)), optional(",")));
}

/**
 * A comma separated, possibly empty list, allowing trailing commas.
 *
 * @param {RuleOrLiteral} rule
 */
function listWithoutTrailingComma(rule) {
	return optional(seq(rule, repeat(seq(",", rule))));
}

`;var G=(i,t)=>h(t,"bnf"),L=(i,t)=>h(t,"ebnf"),I=(i,t)=>h(t,"treesitter"),W=B(`<!> <main class="svelte-1xjjgmp"><section class="svelte-1xjjgmp"><h1 class="svelte-1xjjgmp">Cabin Syntax Reference</h1> <p class="svelte-1xjjgmp">Below is a comprehensive reference to the syntax specification for the Cabin programming
			language.</p> <h2 class="svelte-1xjjgmp">Keyword Reference</h2> <p class="svelte-1xjjgmp">Cabin only has 15 keywords. Here you'll find a complete list of them, as well as a brief
			description of their usage and a link to the documentation that explains them.</p> <table class="svelte-1xjjgmp"><thead class="svelte-1xjjgmp"><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp">Keyword</th><th class="svelte-1xjjgmp">Documentation</th><th class="svelte-1xjjgmp">Description</th></tr></thead><tbody class="svelte-1xjjgmp"><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">action</code></th><th class="svelte-1xjjgmp"><a href="/learn/actions" class="svelte-1xjjgmp">Actions</a></th><th class="svelte-1xjjgmp">Defines a callable sequence of statements.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">and</code></th><th class="svelte-1xjjgmp">TODO</th><th class="svelte-1xjjgmp">Returns whether both boolean operands are <code class="svelte-1xjjgmp">true</code> , lazily evaluating its operands and short-circuiting if necessary.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">either</code></th><th class="svelte-1xjjgmp"><a href="/learn/eithers" class="svelte-1xjjgmp">Eithers</a></th><th class="svelte-1xjjgmp">Creates a tagged union.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">extensionof</code></th><th class="svelte-1xjjgmp"><a href="/learn/extensions" class="svelte-1xjjgmp">Extensions</a></th><th class="svelte-1xjjgmp">Extends a type by adding additional properties onto it.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">if</code></th><th class="svelte-1xjjgmp"><a href="/learn/if-expressions" class="svelte-1xjjgmp">If Expressions</a></th><th class="svelte-1xjjgmp">Conditionally runs code if a boolean condition is true.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">is</code></th><th class="svelte-1xjjgmp"><a href="/learn/control-flow" class="svelte-1xjjgmp">Control Flow</a></th><th class="svelte-1xjjgmp">Jumps to a label, setting it to the given value.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">foreach</code></th><th class="svelte-1xjjgmp"><a href="/learn/loops" class="svelte-1xjjgmp">Loops</a></th><th class="svelte-1xjjgmp">Runs a block of code for each element in a list.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">group</code></th><th class="svelte-1xjjgmp"><a href="/learn/groups" class="svelte-1xjjgmp">Groups</a></th><th class="svelte-1xjjgmp">Creates an instantiable type representing a group of values.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">let</code></th><th class="svelte-1xjjgmp"><a href="/learn/declarations" class="svelte-1xjjgmp">Declarations</a></th><th class="svelte-1xjjgmp">Binds a name to a value</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">not</code></th><th class="svelte-1xjjgmp">TODO</th><th class="svelte-1xjjgmp">Negates a boolean value.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">or</code></th><th class="svelte-1xjjgmp">TODO</th><th class="svelte-1xjjgmp">Returns whether either of the boolean operands are <code class="svelte-1xjjgmp">true</code> , lazily evaluating its operands and short-circuiting if necessary.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">otherwise</code></th><th class="svelte-1xjjgmp"><a href="/learn/if-expressions" class="svelte-1xjjgmp">If Expressions</a></th><th class="svelte-1xjjgmp">Runs a block of code conditionally if a condition is not true.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">run</code></th><th class="svelte-1xjjgmp"><a href="/learn/runtime-evaluation" class="svelte-1xjjgmp">Runtime Evaluation</a></th><th class="svelte-1xjjgmp">Forces an expression to be evaluated at runtime.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">tobe</code></th><th class="svelte-1xjjgmp"><a href="/learn/extensions" class="svelte-1xjjgmp">Extensions</a></th><th class="svelte-1xjjgmp">Extends one type to be another.</th></tr><tr class="svelte-1xjjgmp"><th class="svelte-1xjjgmp"><code class="svelte-1xjjgmp">while</code></th><th class="svelte-1xjjgmp"><a href="/learn/loops" class="svelte-1xjjgmp">Loops</a></th><th class="svelte-1xjjgmp">Runs a block of code while a boolean condition is true.</th></tr></tbody></table> <h2 class="svelte-1xjjgmp">Formal Grammar</h2> <p class="svelte-1xjjgmp">Below is the formal grammar specification for the Cabin programming language, available in a
			variety of formats.</p> <span class="svelte-1xjjgmp"><button class="svelte-1xjjgmp">Backus-Naur Form</button> <button class="svelte-1xjjgmp">Extended Backus-Naur Form</button> <button class="svelte-1xjjgmp">Tree-Sitter</button> <button class="svelte-1xjjgmp">Pest</button></span> <!></section></main>`,1);function U(i){let t=R("ebnf");var x=W(),j=C(x);D(j,{});var f=s(j,2),g=o(f),a=s(o(g),14),d=o(a);d.__click=[G,t];var v=s(d,2);v.__click=[L,t];var u=s(v,2);u.__click=[I,t],F(2),r(a);var $=s(a,2);{var b=e=>{m(e,{language:"ebnf",code:S})},q=(e,_)=>{{var y=n=>{m(n,{language:"bnf",code:N})},w=(n,k)=>{{var E=l=>{m(l,{language:"javascript",code:A})};c(n,l=>{p(t)==="treesitter"&&l(E)},k)}};c(e,n=>{p(t)==="bnf"?n(y):n(w,!1)},_)}};c($,e=>{p(t)==="ebnf"?e(b):e(q,!1)})}r(g),r(f),O(i,x)}T(["click"]);export{U as component};
