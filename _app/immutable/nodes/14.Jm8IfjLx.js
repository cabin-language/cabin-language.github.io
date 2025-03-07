import"../chunks/CWj6FrbW.js";import{$ as aa,q as a,o as Y,v as i,g as d,y as oa,x as H,z as v,w as l,a as ea,b as ta}from"../chunks/DneM_Zg5.js";import{d as na,t as u,a as p}from"../chunks/Ke2h0E31.js";import{h as sa}from"../chunks/DhpMl-z_.js";import{s as R}from"../chunks/6RRCYBGn.js";import{s as o}from"../chunks/CRTJdYBT.js";import{a as ra}from"../chunks/Bo_ZAIiv.js";import{D as ia}from"../chunks/CbiU2ppx.js";import{S as h}from"../chunks/Dfsqygma.js";const la=""+new URL("../assets/windows.DRwY9kpx.png",import.meta.url).href,ca=""+new URL("../assets/mac.LENrtIPb.png",import.meta.url).href,pa=""+new URL("../assets/linux.UfK4sZQY.png",import.meta.url).href;var ua=u("<div><span>cargo</span> <span>install</span> <span>cabin-language</span></div>"),ha=u("<span>cabin</span>"),ba=u(`<pre>The Cabin compiler.

<b>Usage:</b> <span>cabin</span> <span>&lt;COMMAND&gt;</span> <span>[ARGUMENTS]</span> <span>[OPTIONS]</span>

<b>Commands:</b>
    <span>new</span>            Create a new Cabin project
    <span>run</span>            Run a Cabin project 
    <span>build</span>          Build a Cabin project into a native executable without running it
    <span>check</span>          Check a Cabin project for compile-time errors without building it
    <span>format</span>         Format a Cabin file or project
    <span>test</span>           Run tests in a Cabin project
    <span>set</span>            Configure a compiler flag
    <span>add</span>            Add an external library
    <span>remove</span>         Remove an external library
    <span>publish</span>        Publish a Cabin library

<b>Options: </b>
    <span>-h, --help</span>     Print help
</pre>`),da=u(`<pre>(PATHS=($&lbrace;PATH//:/ &rbrace;) ; IFS=$'\\n' ; echo "$&lbrace;PATHS[*]&rbrace;") | grep &bsol;&bsol;bcabin&bsol;&bsol;b || echo "Cabin is not in PATH!"
</pre>`),va=u('<pre>export PATH="$PATH:/home/user/.programs"</pre>'),ma=u("<div><span>cargo</span> <span>install</span> <span>cabin-language</span></div>"),fa=u("<div><span>git</span> <span>clone</span> <span>https://github.com/cabin-language/cabin.git</span></div> <div><span>cd</span> <span>cabin/crates/cabin-bin</span></div> <div><span>cargo</span> <span>build</span> <span>--release</span></div>",1),ga=u(`<h1>Installation</h1> <span class="os-buttons svelte-uv8j3t"><button class="svelte-uv8j3t"><img class="svelte-uv8j3t"> Windows</button> <button class="svelte-uv8j3t"><img class="svelte-uv8j3t"> Mac</button> <button class="svelte-uv8j3t"><img class="svelte-uv8j3t"> Linux</button></span> <p>Cabin can be installed through <code>cargo</code> :</p> <!> <h2 id="testing">Testing</h2> <p>Once Cabin is installed, you can test that it's working with the <code>cabin</code> command:</p> <!> <p>If all goes well, you should see an output like this:</p> <!> <p>If you got an error instead, read on for troubleshooting tips. Otherwise, continue on to the
		documentation!</p> <h2 id="troubleshooting">Troubleshooting</h2> <p>So you got an error&mdash;Oh no! It's not your fault, and these cases are rare, but occasionally
		bugs in build scripts or installation scripts slip through the cracks. Let's work through it.</p> <p>If running <code>cabin</code> gives an error, make sure that the installation location is in your <code>PATH</code> environment variable. The following bash code will print the location of the Cabin executable on
		your system if it exists, and if it doesn't, will let you know*:</p> <!> <p class="note svelte-uv8j3t">*Note: requires <a href="https://www.gnu.org/software/coreutils/" class="svelte-uv8j3t">GNU Coreutils</a> (present on most Unix systems by default)</p> <p>If you get an error here, it means that the Cabin compiler either doesn't exist on your
		computer, or it does but it's in a location somewhere that isnt in your <code>PATH</code> variable. If you know that you have the compiler and where it is (it'll just be a file called <code>cabin</code> ), then add its parent directory to your <code>PATH</code> ; i.e., if your Cabin compiler is located at <code>/home/user/.programs/cabin</code> , then in your <code>~/.bashrc</code> , you'd add:</p> <!> <p>Alternatively, if you're not sure whether the compiler is on your system, or you think it might
		be but you don't know where, consider trying the installation for your operating system above.
		Make sure the operating system selected matches your machine; The website will try to
		auto-detect it, but it doesn't hurt to double check, especially when it comes to Linux distros.</p> <p>If you're <i>still</i> having trouble with your installation, fear not! Two more options remain. For both, you need to have
		Rust installed. Check if Rust is installed by running <code>cargo</code> , and if it's not, install it with the instructions <a href="https://www.rust-lang.org/tools/install" class="svelte-uv8j3t">here</a> .</p> <p>The first option is to install the compiler through it's cargo crate. This may have already been
		the instructions for your operating system if no native solution exists. If not, you can try it
		like so:</p> <!> <p>If that's causing you trouble, the last thing you can try is building the compiler from source.
		That'd look something like this:</p> <!> <p>The compiler executable will be placed at <code>cabin/crates/cabin-bin/target/release/cabin</code> when the project finishes compiling. Place the file anywhere in your <code>PATH</code> , using the <code>PATH</code> instructions and debugging tips above if necessary.</p> <p>If you've gotten this far and are <i>still</i> having trouble getting the compiler working on your machine, first of all, congratulations for being
		the most incredibly unlucky person alive, and secondly, feel free to reach out to the Cabin community
		to get advice on your situation. You can <a href="https://github.com/cabin-language/cabin/issues" class="svelte-uv8j3t">submit an issue on the Cabin GitHub repository</a> , ask questions in <a href="/community" class="svelte-uv8j3t">the Cabin Discord server</a> , or <a href="/community" class="svelte-uv8j3t">reach out to the community in other ways</a> . Try to be descriptive about what you've tried that hasn't worked, what error messages (if any)
		you've received, and what you're confused on or struggling with.</p> <p>Good luck!</p>`,1);function Ia(E){let k=ea("windows");function x($){return function(){ta(k,ra($))}}sa($=>{aa.title="Installation • Cabin Docs"}),ia(E,{page:"Installation",children:($,ya)=>{var O=ga(),I=a(Y(O),2),m=i(I),z=H(()=>x("windows"));m.__click=function(...t){var n;(n=d(z))==null||n.apply(this,t)};var B=i(m);R(B,"src",la),v(),l(m);var f=a(m,2),K=H(()=>x("mac"));f.__click=function(...t){var n;(n=d(K))==null||n.apply(this,t)};var Q=i(f);R(Q,"src",ca),v(),l(f);var C=a(f,2),W=H(()=>x("linux"));C.__click=function(...t){var n;(n=d(W))==null||n.apply(this,t)};var Z=i(C);R(Z,"src",pa),v(),l(C),l(I);var S=a(I,4);h(S,{children:(t,n)=>{var e=ua(),s=i(e);o(s,"color","#89b4fa");var r=a(s,2);o(r,"color","#89b4fa");var c=a(r,2);o(c,"color","#f38ba8"),l(e),p(t,e)}});var U=a(S,6);h(U,{children:(t,n)=>{var e=ha();o(e,"color","#89b4fa"),p(t,e)}});var L=a(U,4);h(L,{children:(t,n)=>{var e=ba(),s=a(i(e),3);o(s,"color","#89b4fa");var r=a(s,2);o(r,"color","#89b4fa");var c=a(r,2);o(c,"color","#f38ba8");var P=a(c,2);o(P,"color","#9399b2");var b=a(P,4);o(b,"color","#89b4fa");var g=a(b,2);o(g,"color","#89b4fa");var T=a(g,2);o(T,"color","#89b4fa");var y=a(T,2);o(y,"color","#89b4fa");var _=a(y,2);o(_,"color","#89b4fa");var w=a(_,2);o(w,"color","#89b4fa");var j=a(w,2);o(j,"color","#89b4fa");var G=a(j,2);o(G,"color","#89b4fa");var q=a(G,2);o(q,"color","#89b4fa");var F=a(q,2);o(F,"color","#89b4fa");var X=a(F,4);o(X,"color","#9399b2"),v(),l(e),p(t,e)}});var D=a(L,10);h(D,{children:(t,n)=>{var e=da();p(t,e)}});var N=a(D,6);h(N,{children:(t,n)=>{var e=va();p(t,e)}});var A=a(N,4),J=a(i(A),5);o(J,"color","dodgerblue"),v(),l(A);var M=a(A,4);h(M,{children:(t,n)=>{var e=ma(),s=i(e);o(s,"color","#89b4fa");var r=a(s,2);o(r,"color","#89b4fa");var c=a(r,2);o(c,"color","#f38ba8"),l(e),p(t,e)}});var V=a(M,4);h(V,{children:(t,n)=>{var e=fa(),s=Y(e),r=i(s);o(r,"color","#89b4fa");var c=a(r,2);o(c,"color","#89b4fa");var P=a(c,2);o(P,"color","#f38ba8"),l(s);var b=a(s,2),g=i(b);o(g,"color","#89b4fa");var T=a(g,2);o(T,"color","#f38ba8"),l(b);var y=a(b,2),_=i(y);o(_,"color","#89b4fa");var w=a(_,2);o(w,"color","#89b4fa");var j=a(w,2);o(j,"color","#9399b2"),l(y),p(t,e)}}),v(6),oa(()=>{o(m,"background",d(k)==="windows"?"#28283d":"#181825"),o(f,"background",d(k)==="mac"?"#28283d":"#181825"),o(C,"background",d(k)==="linux"?"#28283d":"#181825")}),p($,O)},$$slots:{default:!0}})}na(["click"]);export{Ia as component};
