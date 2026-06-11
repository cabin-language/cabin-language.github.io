import"../chunks/CWj6FrbW.js";import{f as R,aa as h,ap as j,a1 as o,s,n as F,a2 as r,J as c}from"../chunks/ChQ8i3mT.js";import{f as T,t as B,a as O}from"../chunks/CwLvwI_u.js";import{i as p}from"../chunks/DTE6UjiL.js";import{N as D}from"../chunks/CLBVz75M.js";import{S as v}from"../chunks/7Ikl-ixd.js";const S=`program = { statement } ;

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

`;var G=(a,t)=>h(t,"bnf"),L=(a,t)=>h(t,"ebnf"),I=(a,t)=>h(t,"treesitter"),W=B(`<!> <main class="svelte-11av4n1"><section class="svelte-11av4n1"><h1 class="svelte-11av4n1">Cabin Syntax Reference</h1> <p class="svelte-11av4n1">Below is a comprehensive reference to the syntax specification for the Cabin programming
			language.</p> <h2 class="svelte-11av4n1">Keyword Reference</h2> <p class="svelte-11av4n1">Cabin only has 15 keywords. Here you'll find a complete list of them, as well as a brief
			description of their usage and a link to the documentation that explains them.</p> <table class="svelte-11av4n1"><thead class="svelte-11av4n1"><tr class="svelte-11av4n1"><th class="svelte-11av4n1">Keyword</th><th class="svelte-11av4n1">Documentation</th><th class="svelte-11av4n1">Description</th></tr></thead><tbody class="svelte-11av4n1"><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">action</code></th><th class="svelte-11av4n1"><a href="/learn/actions" class="svelte-11av4n1">Actions</a></th><th class="svelte-11av4n1">Defines a callable sequence of statements.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">and</code></th><th class="svelte-11av4n1">TODO</th><th class="svelte-11av4n1">Returns whether both boolean operands are <code class="svelte-11av4n1">true</code> , lazily evaluating its operands and short-circuiting if necessary.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">either</code></th><th class="svelte-11av4n1"><a href="/learn/eithers" class="svelte-11av4n1">Eithers</a></th><th class="svelte-11av4n1">Creates a tagged union.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">extensionof</code></th><th class="svelte-11av4n1"><a href="/learn/extensions" class="svelte-11av4n1">Extensions</a></th><th class="svelte-11av4n1">Extends a type by adding additional properties onto it.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">if</code></th><th class="svelte-11av4n1"><a href="/learn/if-expressions" class="svelte-11av4n1">If Expressions</a></th><th class="svelte-11av4n1">Conditionally runs code if a boolean condition is true.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">is</code></th><th class="svelte-11av4n1"><a href="/learn/control-flow" class="svelte-11av4n1">Control Flow</a></th><th class="svelte-11av4n1">Jumps to a label, setting it to the given value.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">foreach</code></th><th class="svelte-11av4n1"><a href="/learn/loops" class="svelte-11av4n1">Loops</a></th><th class="svelte-11av4n1">Runs a block of code for each element in a list.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">group</code></th><th class="svelte-11av4n1"><a href="/learn/groups" class="svelte-11av4n1">Groups</a></th><th class="svelte-11av4n1">Creates an instantiable type representing a group of values.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">let</code></th><th class="svelte-11av4n1"><a href="/learn/declarations" class="svelte-11av4n1">Declarations</a></th><th class="svelte-11av4n1">Binds a name to a value</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">not</code></th><th class="svelte-11av4n1">TODO</th><th class="svelte-11av4n1">Negates a boolean value.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">or</code></th><th class="svelte-11av4n1">TODO</th><th class="svelte-11av4n1">Returns whether either of the boolean operands are <code class="svelte-11av4n1">true</code> , lazily evaluating its operands and short-circuiting if necessary.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">otherwise</code></th><th class="svelte-11av4n1"><a href="/learn/if-expressions" class="svelte-11av4n1">If Expressions</a></th><th class="svelte-11av4n1">Runs a block of code conditionally if a condition is not true.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">run</code></th><th class="svelte-11av4n1"><a href="/learn/runtime-evaluation" class="svelte-11av4n1">Runtime Evaluation</a></th><th class="svelte-11av4n1">Forces an expression to be evaluated at runtime.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">tobe</code></th><th class="svelte-11av4n1"><a href="/learn/extensions" class="svelte-11av4n1">Extensions</a></th><th class="svelte-11av4n1">Extends one type to be another.</th></tr><tr class="svelte-11av4n1"><th class="svelte-11av4n1"><code class="svelte-11av4n1">while</code></th><th class="svelte-11av4n1"><a href="/learn/loops" class="svelte-11av4n1">Loops</a></th><th class="svelte-11av4n1">Runs a block of code while a boolean condition is true.</th></tr></tbody></table> <h2 class="svelte-11av4n1">Formal Grammar</h2> <p class="svelte-11av4n1">Below is the formal grammar specification for the Cabin programming language, available in a
			variety of formats.</p> <span class="svelte-11av4n1"><button class="svelte-11av4n1">Backus-Naur Form</button> <button class="svelte-11av4n1">Extended Backus-Naur Form</button> <button class="svelte-11av4n1">Tree-Sitter</button> <button class="svelte-11av4n1">Pest</button></span> <!></section></main>`,1);function U(a){let t=j("ebnf");var f=W(),d=R(f);D(d,{});var u=s(d,2),m=o(u),i=s(o(m),14),$=o(i);$.__click=[G,t];var x=s($,2);x.__click=[L,t];var b=s(x,2);b.__click=[I,t],F(2),r(i);var g=s(i,2);{var q=e=>{v(e,{language:"ebnf",code:S})},_=(e,y)=>{{var w=n=>{v(n,{language:"bnf",code:N})},k=(n,E)=>{{var C=l=>{v(l,{language:"javascript",code:A})};p(n,l=>{c(t)==="treesitter"&&l(C)},E)}};p(e,n=>{c(t)==="bnf"?n(w):n(k,!1)},y)}};p(g,e=>{c(t)==="ebnf"?e(q):e(_,!1)})}r(m),r(u),O(a,f)}T(["click"]);export{U as component};
