var ie=Object.defineProperty;var oe=(s,e,t)=>e in s?ie(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var f=(s,e,t)=>oe(s,typeof e!="symbol"?e+"":e,t);import"./CWj6FrbW.js";import{t as hydrating,h as hydrate_next,aC as is_runes,y as block,aD as is_promise,a9 as UNINITIALIZED,Q as internal_set,U as source,T as mutable_source,C as queue_micro_task,av as set_active_effect,au as set_active_reaction,aE as set_component_context,v as component_context,N as resume_effect,r as branch,z as pause_effect,aq as flushSync,e as hydrate_node,a as get_next_sibling,k as hydration_mismatch,b as HYDRATION_ERROR,d as set_hydrate_node,g as get_first_child,I as destroy_effect,s as sibling,a1 as child,a2 as reset,a3 as template_effect,u as push,x as pop,J as get,ap as state,ag as derived,f as first_child,aa as set}from"./ChQ8i3mT.js";import{s as set_text}from"./ZH7Bqwyt.js";import{r as rest_props,a as proxy,i as if_block}from"./DTE6UjiL.js";import{c as assign_nodes,m as create_fragment_from_html,n as ns_template,a as append,f as delegate,t as template,d as comment,e as text}from"./CwLvwI_u.js";import{a as set_attributes,s as set_attribute,b as set_class}from"./BBBwdkJ2.js";import{s as set_style,P as PlayOutlineIcon,C as CloseIcon}from"./B9cGN4M3.js";import{_ as __vitePreload}from"./C1FmrZbK.js";const PENDING=0,THEN=1,CATCH=2;function await_block(s,e,t,r,n){hydrating&&hydrate_next();var a=s,o=is_runes(),l=component_context,_=UNINITIALIZED,u,d,m,h=(o?source:mutable_source)(void 0),g=(o?source:mutable_source)(void 0),y=!1;function w(b,c){y=!0,c&&(set_active_effect(E),set_active_reaction(E),set_component_context(l));try{b===THEN&&r&&(d?resume_effect(d):d=branch(()=>r(a,h))),b!==PENDING&&u&&pause_effect(u,()=>u=null),b!==THEN&&d&&pause_effect(d,()=>d=null),b!==CATCH&&m&&pause_effect(m,()=>m=null)}finally{c&&(set_component_context(null),set_active_reaction(null),set_active_effect(null),flushSync())}}var E=block(()=>{if(_!==(_=e())){if(is_promise(_)){var b=_;y=!1,b.then(c=>{b===_&&(internal_set(h,c),w(THEN,!0))},c=>{if(b===_)throw internal_set(g,c),w(CATCH,!0),g.v}),hydrating||queue_micro_task(()=>{y||w(PENDING,!0)})}else internal_set(h,_),w(THEN,!1);return()=>_=UNINITIALIZED}});hydrating&&(a=hydrate_node)}function html(s,e,t,r,n){var a=s,o="",l;block(()=>{if(o===(o=e()??"")){hydrating&&hydrate_next();return}l!==void 0&&(destroy_effect(l),l=void 0),o!==""&&(l=branch(()=>{if(hydrating){hydrate_node.data;for(var _=hydrate_next(),u=_;_!==null&&(_.nodeType!==8||_.data!=="");)u=_,_=get_next_sibling(_);if(_===null)throw hydration_mismatch(),HYDRATION_ERROR;assign_nodes(hydrate_node,u),a=set_hydrate_node(_);return}var d=o+"",m=create_fragment_from_html(d);assign_nodes(get_first_child(m),m.lastChild),a.before(m)}))})}var __defProp=Object.defineProperty,__name=(s,e)=>__defProp(s,"name",{value:e,configurable:!0}),__require=(s=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(s,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):s)(function(s){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+s+'" is not supported')}),SIZE_OF_SHORT=2,SIZE_OF_INT=4,SIZE_OF_CURSOR=4*SIZE_OF_INT,SIZE_OF_NODE=5*SIZE_OF_INT,SIZE_OF_POINT=2*SIZE_OF_INT,SIZE_OF_RANGE=2*SIZE_OF_INT+2*SIZE_OF_POINT,ZERO_POINT={row:0,column:0},INTERNAL=Symbol("INTERNAL");function assertInternal(s){if(s!==INTERNAL)throw new Error("Illegal constructor")}__name(assertInternal,"assertInternal");function isPoint(s){return!!s&&typeof s.row=="number"&&typeof s.column=="number"}__name(isPoint,"isPoint");function setModule(s){C=s}__name(setModule,"setModule");var C,Z,LookaheadIterator=(Z=class{constructor(e,t,r){f(this,0,0);f(this,"language");assertInternal(e),this[0]=t,this.language=r}get currentTypeId(){return C._ts_lookahead_iterator_current_symbol(this[0])}get currentType(){return this.language.types[this.currentTypeId]||"ERROR"}delete(){C._ts_lookahead_iterator_delete(this[0]),this[0]=0}reset(e,t){return C._ts_lookahead_iterator_reset(this[0],e[0],t)?(this.language=e,!0):!1}resetState(e){return!!C._ts_lookahead_iterator_reset_state(this[0],e)}[Symbol.iterator](){return{next:__name(()=>C._ts_lookahead_iterator_next(this[0])?{done:!1,value:this.currentType}:{done:!0,value:""},"next")}}},__name(Z,"LookaheadIterator"),Z);function getText(s,e,t,r){const n=t-e;let a=s.textCallback(e,r);if(a){for(e+=a.length;e<t;){const o=s.textCallback(e,r);if(o&&o.length>0)e+=o.length,a+=o;else break}e>t&&(a=a.slice(0,n))}return a??""}__name(getText,"getText");var D,Tree=(D=class{constructor(e,t,r,n){f(this,0,0);f(this,"textCallback");f(this,"language");assertInternal(e),this[0]=t,this.language=r,this.textCallback=n}copy(){const e=C._ts_tree_copy(this[0]);return new D(INTERNAL,e,this.language,this.textCallback)}delete(){C._ts_tree_delete(this[0]),this[0]=0}get rootNode(){return C._ts_tree_root_node_wasm(this[0]),unmarshalNode(this)}rootNodeWithOffset(e,t){const r=TRANSFER_BUFFER+SIZE_OF_NODE;return C.setValue(r,e,"i32"),marshalPoint(r+SIZE_OF_INT,t),C._ts_tree_root_node_with_offset_wasm(this[0]),unmarshalNode(this)}edit(e){marshalEdit(e),C._ts_tree_edit_wasm(this[0])}walk(){return this.rootNode.walk()}getChangedRanges(e){if(!(e instanceof D))throw new TypeError("Argument must be a Tree");C._ts_tree_get_changed_ranges_wasm(this[0],e[0]);const t=C.getValue(TRANSFER_BUFFER,"i32"),r=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),n=new Array(t);if(t>0){let a=r;for(let o=0;o<t;o++)n[o]=unmarshalRange(a),a+=SIZE_OF_RANGE;C._free(r)}return n}getIncludedRanges(){C._ts_tree_included_ranges_wasm(this[0]);const e=C.getValue(TRANSFER_BUFFER,"i32"),t=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),r=new Array(e);if(e>0){let n=t;for(let a=0;a<e;a++)r[a]=unmarshalRange(n),n+=SIZE_OF_RANGE;C._free(t)}return r}},__name(D,"Tree"),D),Q,TreeCursor=(Q=class{constructor(e,t){f(this,0,0);f(this,1,0);f(this,2,0);f(this,3,0);f(this,"tree");assertInternal(e),this.tree=t,unmarshalTreeCursor(this)}copy(){const e=new Q(INTERNAL,this.tree);return C._ts_tree_cursor_copy_wasm(this.tree[0]),unmarshalTreeCursor(e),e}delete(){marshalTreeCursor(this),C._ts_tree_cursor_delete_wasm(this.tree[0]),this[0]=this[1]=this[2]=0}get currentNode(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_wasm(this.tree[0]),unmarshalNode(this.tree)}get currentFieldId(){return marshalTreeCursor(this),C._ts_tree_cursor_current_field_id_wasm(this.tree[0])}get currentFieldName(){return this.tree.language.fields[this.currentFieldId]}get currentDepth(){return marshalTreeCursor(this),C._ts_tree_cursor_current_depth_wasm(this.tree[0])}get currentDescendantIndex(){return marshalTreeCursor(this),C._ts_tree_cursor_current_descendant_index_wasm(this.tree[0])}get nodeType(){return this.tree.language.types[this.nodeTypeId]||"ERROR"}get nodeTypeId(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_type_id_wasm(this.tree[0])}get nodeStateId(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_state_id_wasm(this.tree[0])}get nodeId(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_id_wasm(this.tree[0])}get nodeIsNamed(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_is_named_wasm(this.tree[0])===1}get nodeIsMissing(){return marshalTreeCursor(this),C._ts_tree_cursor_current_node_is_missing_wasm(this.tree[0])===1}get nodeText(){marshalTreeCursor(this);const e=C._ts_tree_cursor_start_index_wasm(this.tree[0]),t=C._ts_tree_cursor_end_index_wasm(this.tree[0]);C._ts_tree_cursor_start_position_wasm(this.tree[0]);const r=unmarshalPoint(TRANSFER_BUFFER);return getText(this.tree,e,t,r)}get startPosition(){return marshalTreeCursor(this),C._ts_tree_cursor_start_position_wasm(this.tree[0]),unmarshalPoint(TRANSFER_BUFFER)}get endPosition(){return marshalTreeCursor(this),C._ts_tree_cursor_end_position_wasm(this.tree[0]),unmarshalPoint(TRANSFER_BUFFER)}get startIndex(){return marshalTreeCursor(this),C._ts_tree_cursor_start_index_wasm(this.tree[0])}get endIndex(){return marshalTreeCursor(this),C._ts_tree_cursor_end_index_wasm(this.tree[0])}gotoFirstChild(){marshalTreeCursor(this);const e=C._ts_tree_cursor_goto_first_child_wasm(this.tree[0]);return unmarshalTreeCursor(this),e===1}gotoLastChild(){marshalTreeCursor(this);const e=C._ts_tree_cursor_goto_last_child_wasm(this.tree[0]);return unmarshalTreeCursor(this),e===1}gotoParent(){marshalTreeCursor(this);const e=C._ts_tree_cursor_goto_parent_wasm(this.tree[0]);return unmarshalTreeCursor(this),e===1}gotoNextSibling(){marshalTreeCursor(this);const e=C._ts_tree_cursor_goto_next_sibling_wasm(this.tree[0]);return unmarshalTreeCursor(this),e===1}gotoPreviousSibling(){marshalTreeCursor(this);const e=C._ts_tree_cursor_goto_previous_sibling_wasm(this.tree[0]);return unmarshalTreeCursor(this),e===1}gotoDescendant(e){marshalTreeCursor(this),C._ts_tree_cursor_goto_descendant_wasm(this.tree[0],e),unmarshalTreeCursor(this)}gotoFirstChildForIndex(e){marshalTreeCursor(this),C.setValue(TRANSFER_BUFFER+SIZE_OF_CURSOR,e,"i32");const t=C._ts_tree_cursor_goto_first_child_for_index_wasm(this.tree[0]);return unmarshalTreeCursor(this),t===1}gotoFirstChildForPosition(e){marshalTreeCursor(this),marshalPoint(TRANSFER_BUFFER+SIZE_OF_CURSOR,e);const t=C._ts_tree_cursor_goto_first_child_for_position_wasm(this.tree[0]);return unmarshalTreeCursor(this),t===1}reset(e){marshalNode(e),marshalTreeCursor(this,TRANSFER_BUFFER+SIZE_OF_NODE),C._ts_tree_cursor_reset_wasm(this.tree[0]),unmarshalTreeCursor(this)}resetTo(e){marshalTreeCursor(this,TRANSFER_BUFFER),marshalTreeCursor(e,TRANSFER_BUFFER+SIZE_OF_CURSOR),C._ts_tree_cursor_reset_to_wasm(this.tree[0],e.tree[0]),unmarshalTreeCursor(this)}},__name(Q,"TreeCursor"),Q),W,Node=(W=class{constructor(e,{id:t,tree:r,startIndex:n,startPosition:a,other:o}){f(this,0,0);f(this,"_children");f(this,"_namedChildren");f(this,"id");f(this,"startIndex");f(this,"startPosition");f(this,"tree");assertInternal(e),this[0]=o,this.id=t,this.tree=r,this.startIndex=n,this.startPosition=a}get typeId(){return marshalNode(this),C._ts_node_symbol_wasm(this.tree[0])}get grammarId(){return marshalNode(this),C._ts_node_grammar_symbol_wasm(this.tree[0])}get type(){return this.tree.language.types[this.typeId]||"ERROR"}get grammarType(){return this.tree.language.types[this.grammarId]||"ERROR"}get isNamed(){return marshalNode(this),C._ts_node_is_named_wasm(this.tree[0])===1}get isExtra(){return marshalNode(this),C._ts_node_is_extra_wasm(this.tree[0])===1}get isError(){return marshalNode(this),C._ts_node_is_error_wasm(this.tree[0])===1}get isMissing(){return marshalNode(this),C._ts_node_is_missing_wasm(this.tree[0])===1}get hasChanges(){return marshalNode(this),C._ts_node_has_changes_wasm(this.tree[0])===1}get hasError(){return marshalNode(this),C._ts_node_has_error_wasm(this.tree[0])===1}get endIndex(){return marshalNode(this),C._ts_node_end_index_wasm(this.tree[0])}get endPosition(){return marshalNode(this),C._ts_node_end_point_wasm(this.tree[0]),unmarshalPoint(TRANSFER_BUFFER)}get text(){return getText(this.tree,this.startIndex,this.endIndex,this.startPosition)}get parseState(){return marshalNode(this),C._ts_node_parse_state_wasm(this.tree[0])}get nextParseState(){return marshalNode(this),C._ts_node_next_parse_state_wasm(this.tree[0])}equals(e){return this.tree===e.tree&&this.id===e.id}child(e){return marshalNode(this),C._ts_node_child_wasm(this.tree[0],e),unmarshalNode(this.tree)}namedChild(e){return marshalNode(this),C._ts_node_named_child_wasm(this.tree[0],e),unmarshalNode(this.tree)}childForFieldId(e){return marshalNode(this),C._ts_node_child_by_field_id_wasm(this.tree[0],e),unmarshalNode(this.tree)}childForFieldName(e){const t=this.tree.language.fields.indexOf(e);return t!==-1?this.childForFieldId(t):null}fieldNameForChild(e){marshalNode(this);const t=C._ts_node_field_name_for_child_wasm(this.tree[0],e);return t?C.AsciiToString(t):null}fieldNameForNamedChild(e){marshalNode(this);const t=C._ts_node_field_name_for_named_child_wasm(this.tree[0],e);return t?C.AsciiToString(t):null}childrenForFieldName(e){const t=this.tree.language.fields.indexOf(e);return t!==-1&&t!==0?this.childrenForFieldId(t):[]}childrenForFieldId(e){marshalNode(this),C._ts_node_children_by_field_id_wasm(this.tree[0],e);const t=C.getValue(TRANSFER_BUFFER,"i32"),r=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),n=new Array(t);if(t>0){let a=r;for(let o=0;o<t;o++)n[o]=unmarshalNode(this.tree,a),a+=SIZE_OF_NODE;C._free(r)}return n}firstChildForIndex(e){marshalNode(this);const t=TRANSFER_BUFFER+SIZE_OF_NODE;return C.setValue(t,e,"i32"),C._ts_node_first_child_for_byte_wasm(this.tree[0]),unmarshalNode(this.tree)}firstNamedChildForIndex(e){marshalNode(this);const t=TRANSFER_BUFFER+SIZE_OF_NODE;return C.setValue(t,e,"i32"),C._ts_node_first_named_child_for_byte_wasm(this.tree[0]),unmarshalNode(this.tree)}get childCount(){return marshalNode(this),C._ts_node_child_count_wasm(this.tree[0])}get namedChildCount(){return marshalNode(this),C._ts_node_named_child_count_wasm(this.tree[0])}get firstChild(){return this.child(0)}get firstNamedChild(){return this.namedChild(0)}get lastChild(){return this.child(this.childCount-1)}get lastNamedChild(){return this.namedChild(this.namedChildCount-1)}get children(){if(!this._children){marshalNode(this),C._ts_node_children_wasm(this.tree[0]);const e=C.getValue(TRANSFER_BUFFER,"i32"),t=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32");if(this._children=new Array(e),e>0){let r=t;for(let n=0;n<e;n++)this._children[n]=unmarshalNode(this.tree,r),r+=SIZE_OF_NODE;C._free(t)}}return this._children}get namedChildren(){if(!this._namedChildren){marshalNode(this),C._ts_node_named_children_wasm(this.tree[0]);const e=C.getValue(TRANSFER_BUFFER,"i32"),t=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32");if(this._namedChildren=new Array(e),e>0){let r=t;for(let n=0;n<e;n++)this._namedChildren[n]=unmarshalNode(this.tree,r),r+=SIZE_OF_NODE;C._free(t)}}return this._namedChildren}descendantsOfType(e,t=ZERO_POINT,r=ZERO_POINT){Array.isArray(e)||(e=[e]);const n=[],a=this.tree.language.types;for(const d of e)d=="ERROR"&&n.push(65535);for(let d=0,m=a.length;d<m;d++)e.includes(a[d])&&n.push(d);const o=C._malloc(SIZE_OF_INT*n.length);for(let d=0,m=n.length;d<m;d++)C.setValue(o+d*SIZE_OF_INT,n[d],"i32");marshalNode(this),C._ts_node_descendants_of_type_wasm(this.tree[0],o,n.length,t.row,t.column,r.row,r.column);const l=C.getValue(TRANSFER_BUFFER,"i32"),_=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),u=new Array(l);if(l>0){let d=_;for(let m=0;m<l;m++)u[m]=unmarshalNode(this.tree,d),d+=SIZE_OF_NODE}return C._free(_),C._free(o),u}get nextSibling(){return marshalNode(this),C._ts_node_next_sibling_wasm(this.tree[0]),unmarshalNode(this.tree)}get previousSibling(){return marshalNode(this),C._ts_node_prev_sibling_wasm(this.tree[0]),unmarshalNode(this.tree)}get nextNamedSibling(){return marshalNode(this),C._ts_node_next_named_sibling_wasm(this.tree[0]),unmarshalNode(this.tree)}get previousNamedSibling(){return marshalNode(this),C._ts_node_prev_named_sibling_wasm(this.tree[0]),unmarshalNode(this.tree)}get descendantCount(){return marshalNode(this),C._ts_node_descendant_count_wasm(this.tree[0])}get parent(){return marshalNode(this),C._ts_node_parent_wasm(this.tree[0]),unmarshalNode(this.tree)}childWithDescendant(e){return marshalNode(this),marshalNode(e),C._ts_node_child_with_descendant_wasm(this.tree[0]),unmarshalNode(this.tree)}descendantForIndex(e,t=e){if(typeof e!="number"||typeof t!="number")throw new Error("Arguments must be numbers");marshalNode(this);const r=TRANSFER_BUFFER+SIZE_OF_NODE;return C.setValue(r,e,"i32"),C.setValue(r+SIZE_OF_INT,t,"i32"),C._ts_node_descendant_for_index_wasm(this.tree[0]),unmarshalNode(this.tree)}namedDescendantForIndex(e,t=e){if(typeof e!="number"||typeof t!="number")throw new Error("Arguments must be numbers");marshalNode(this);const r=TRANSFER_BUFFER+SIZE_OF_NODE;return C.setValue(r,e,"i32"),C.setValue(r+SIZE_OF_INT,t,"i32"),C._ts_node_named_descendant_for_index_wasm(this.tree[0]),unmarshalNode(this.tree)}descendantForPosition(e,t=e){if(!isPoint(e)||!isPoint(t))throw new Error("Arguments must be {row, column} objects");marshalNode(this);const r=TRANSFER_BUFFER+SIZE_OF_NODE;return marshalPoint(r,e),marshalPoint(r+SIZE_OF_POINT,t),C._ts_node_descendant_for_position_wasm(this.tree[0]),unmarshalNode(this.tree)}namedDescendantForPosition(e,t=e){if(!isPoint(e)||!isPoint(t))throw new Error("Arguments must be {row, column} objects");marshalNode(this);const r=TRANSFER_BUFFER+SIZE_OF_NODE;return marshalPoint(r,e),marshalPoint(r+SIZE_OF_POINT,t),C._ts_node_named_descendant_for_position_wasm(this.tree[0]),unmarshalNode(this.tree)}walk(){return marshalNode(this),C._ts_tree_cursor_new_wasm(this.tree[0]),new TreeCursor(INTERNAL,this.tree)}edit(e){if(this.startIndex>=e.oldEndIndex){this.startIndex=e.newEndIndex+(this.startIndex-e.oldEndIndex);let t,r;this.startPosition.row>e.oldEndPosition.row?(t=this.startPosition.row-e.oldEndPosition.row,r=this.startPosition.column):(t=0,r=this.startPosition.column,this.startPosition.column>=e.oldEndPosition.column&&(r=this.startPosition.column-e.oldEndPosition.column)),t>0?(this.startPosition.row+=t,this.startPosition.column=r):this.startPosition.column+=r}else this.startIndex>e.startIndex&&(this.startIndex=e.newEndIndex,this.startPosition.row=e.newEndPosition.row,this.startPosition.column=e.newEndPosition.column)}toString(){marshalNode(this);const e=C._ts_node_to_string_wasm(this.tree[0]),t=C.AsciiToString(e);return C._free(e),t}},__name(W,"Node"),W);function unmarshalCaptures(s,e,t,r,n){for(let a=0,o=n.length;a<o;a++){const l=C.getValue(t,"i32");t+=SIZE_OF_INT;const _=unmarshalNode(e,t);t+=SIZE_OF_NODE,n[a]={patternIndex:r,name:s.captureNames[l],node:_}}return t}__name(unmarshalCaptures,"unmarshalCaptures");function marshalNode(s){let e=TRANSFER_BUFFER;C.setValue(e,s.id,"i32"),e+=SIZE_OF_INT,C.setValue(e,s.startIndex,"i32"),e+=SIZE_OF_INT,C.setValue(e,s.startPosition.row,"i32"),e+=SIZE_OF_INT,C.setValue(e,s.startPosition.column,"i32"),e+=SIZE_OF_INT,C.setValue(e,s[0],"i32")}__name(marshalNode,"marshalNode");function unmarshalNode(s,e=TRANSFER_BUFFER){const t=C.getValue(e,"i32");if(e+=SIZE_OF_INT,t===0)return null;const r=C.getValue(e,"i32");e+=SIZE_OF_INT;const n=C.getValue(e,"i32");e+=SIZE_OF_INT;const a=C.getValue(e,"i32");e+=SIZE_OF_INT;const o=C.getValue(e,"i32");return new Node(INTERNAL,{id:t,tree:s,startIndex:r,startPosition:{row:n,column:a},other:o})}__name(unmarshalNode,"unmarshalNode");function marshalTreeCursor(s,e=TRANSFER_BUFFER){C.setValue(e+0*SIZE_OF_INT,s[0],"i32"),C.setValue(e+1*SIZE_OF_INT,s[1],"i32"),C.setValue(e+2*SIZE_OF_INT,s[2],"i32"),C.setValue(e+3*SIZE_OF_INT,s[3],"i32")}__name(marshalTreeCursor,"marshalTreeCursor");function unmarshalTreeCursor(s){s[0]=C.getValue(TRANSFER_BUFFER+0*SIZE_OF_INT,"i32"),s[1]=C.getValue(TRANSFER_BUFFER+1*SIZE_OF_INT,"i32"),s[2]=C.getValue(TRANSFER_BUFFER+2*SIZE_OF_INT,"i32"),s[3]=C.getValue(TRANSFER_BUFFER+3*SIZE_OF_INT,"i32")}__name(unmarshalTreeCursor,"unmarshalTreeCursor");function marshalPoint(s,e){C.setValue(s,e.row,"i32"),C.setValue(s+SIZE_OF_INT,e.column,"i32")}__name(marshalPoint,"marshalPoint");function unmarshalPoint(s){return{row:C.getValue(s,"i32")>>>0,column:C.getValue(s+SIZE_OF_INT,"i32")>>>0}}__name(unmarshalPoint,"unmarshalPoint");function marshalRange(s,e){marshalPoint(s,e.startPosition),s+=SIZE_OF_POINT,marshalPoint(s,e.endPosition),s+=SIZE_OF_POINT,C.setValue(s,e.startIndex,"i32"),s+=SIZE_OF_INT,C.setValue(s,e.endIndex,"i32"),s+=SIZE_OF_INT}__name(marshalRange,"marshalRange");function unmarshalRange(s){const e={};return e.startPosition=unmarshalPoint(s),s+=SIZE_OF_POINT,e.endPosition=unmarshalPoint(s),s+=SIZE_OF_POINT,e.startIndex=C.getValue(s,"i32")>>>0,s+=SIZE_OF_INT,e.endIndex=C.getValue(s,"i32")>>>0,e}__name(unmarshalRange,"unmarshalRange");function marshalEdit(s,e=TRANSFER_BUFFER){marshalPoint(e,s.startPosition),e+=SIZE_OF_POINT,marshalPoint(e,s.oldEndPosition),e+=SIZE_OF_POINT,marshalPoint(e,s.newEndPosition),e+=SIZE_OF_POINT,C.setValue(e,s.startIndex,"i32"),e+=SIZE_OF_INT,C.setValue(e,s.oldEndIndex,"i32"),e+=SIZE_OF_INT,C.setValue(e,s.newEndIndex,"i32"),e+=SIZE_OF_INT}__name(marshalEdit,"marshalEdit");function unmarshalLanguageMetadata(s){const e={};return e.major_version=C.getValue(s,"i32"),s+=SIZE_OF_INT,e.minor_version=C.getValue(s,"i32"),s+=SIZE_OF_INT,e.field_count=C.getValue(s,"i32"),e}__name(unmarshalLanguageMetadata,"unmarshalLanguageMetadata");var PREDICATE_STEP_TYPE_CAPTURE=1,PREDICATE_STEP_TYPE_STRING=2,QUERY_WORD_REGEX=/[\w-]+/g,isCaptureStep=__name(s=>s.type==="capture","isCaptureStep"),isStringStep=__name(s=>s.type==="string","isStringStep"),QueryErrorKind={Syntax:1,NodeName:2,FieldName:3,CaptureName:4,PatternStructure:5},L,QueryError=(L=class extends Error{constructor(e,t,r,n){super(L.formatMessage(e,t)),this.kind=e,this.info=t,this.index=r,this.length=n,this.name="QueryError"}static formatMessage(e,t){switch(e){case QueryErrorKind.NodeName:return`Bad node name '${t.word}'`;case QueryErrorKind.FieldName:return`Bad field name '${t.word}'`;case QueryErrorKind.CaptureName:return`Bad capture name @${t.word}`;case QueryErrorKind.PatternStructure:return`Bad pattern structure at offset ${t.suffix}`;case QueryErrorKind.Syntax:return`Bad syntax at offset ${t.suffix}`}}},__name(L,"QueryError"),L);function parseAnyPredicate(s,e,t,r){if(s.length!==3)throw new Error(`Wrong number of arguments to \`#${t}\` predicate. Expected 2, got ${s.length-1}`);if(!isCaptureStep(s[1]))throw new Error(`First argument of \`#${t}\` predicate must be a capture. Got "${s[1].value}"`);const n=t==="eq?"||t==="any-eq?",a=!t.startsWith("any-");if(isCaptureStep(s[2])){const o=s[1].name,l=s[2].name;r[e].push(_=>{const u=[],d=[];for(const h of _)h.name===o&&u.push(h.node),h.name===l&&d.push(h.node);const m=__name((h,g,y)=>y?h.text===g.text:h.text!==g.text,"compare");return a?u.every(h=>d.some(g=>m(h,g,n))):u.some(h=>d.some(g=>m(h,g,n)))})}else{const o=s[1].name,l=s[2].value,_=__name(d=>d.text===l,"matches"),u=__name(d=>d.text!==l,"doesNotMatch");r[e].push(d=>{const m=[];for(const g of d)g.name===o&&m.push(g.node);const h=n?_:u;return a?m.every(h):m.some(h)})}}__name(parseAnyPredicate,"parseAnyPredicate");function parseMatchPredicate(s,e,t,r){if(s.length!==3)throw new Error(`Wrong number of arguments to \`#${t}\` predicate. Expected 2, got ${s.length-1}.`);if(s[1].type!=="capture")throw new Error(`First argument of \`#${t}\` predicate must be a capture. Got "${s[1].value}".`);if(s[2].type!=="string")throw new Error(`Second argument of \`#${t}\` predicate must be a string. Got @${s[2].name}.`);const n=t==="match?"||t==="any-match?",a=!t.startsWith("any-"),o=s[1].name,l=new RegExp(s[2].value);r[e].push(_=>{const u=[];for(const m of _)m.name===o&&u.push(m.node.text);const d=__name((m,h)=>h?l.test(m):!l.test(m),"test");return u.length===0?!n:a?u.every(m=>d(m,n)):u.some(m=>d(m,n))})}__name(parseMatchPredicate,"parseMatchPredicate");function parseAnyOfPredicate(s,e,t,r){if(s.length<2)throw new Error(`Wrong number of arguments to \`#${t}\` predicate. Expected at least 1. Got ${s.length-1}.`);if(s[1].type!=="capture")throw new Error(`First argument of \`#${t}\` predicate must be a capture. Got "${s[1].value}".`);const n=t==="any-of?",a=s[1].name,o=s.slice(2);if(!o.every(isStringStep))throw new Error(`Arguments to \`#${t}\` predicate must be strings.".`);const l=o.map(_=>_.value);r[e].push(_=>{const u=[];for(const d of _)d.name===a&&u.push(d.node.text);return u.length===0?!n:u.every(d=>l.includes(d))===n})}__name(parseAnyOfPredicate,"parseAnyOfPredicate");function parseIsPredicate(s,e,t,r,n){var o;if(s.length<2||s.length>3)throw new Error(`Wrong number of arguments to \`#${t}\` predicate. Expected 1 or 2. Got ${s.length-1}.`);if(!s.every(isStringStep))throw new Error(`Arguments to \`#${t}\` predicate must be strings.".`);const a=t==="is?"?r:n;a[e]||(a[e]={}),a[e][s[1].value]=((o=s[2])==null?void 0:o.value)??null}__name(parseIsPredicate,"parseIsPredicate");function parseSetDirective(s,e,t){var r;if(s.length<2||s.length>3)throw new Error(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${s.length-1}.`);if(!s.every(isStringStep))throw new Error('Arguments to `#set!` predicate must be strings.".');t[e]||(t[e]={}),t[e][s[1].value]=((r=s[2])==null?void 0:r.value)??null}__name(parseSetDirective,"parseSetDirective");function parsePattern(s,e,t,r,n,a,o,l,_,u,d){if(e===PREDICATE_STEP_TYPE_CAPTURE){const m=r[t];a.push({type:"capture",name:m})}else if(e===PREDICATE_STEP_TYPE_STRING)a.push({type:"string",value:n[t]});else if(a.length>0){if(a[0].type!=="string")throw new Error("Predicates must begin with a literal value");const m=a[0].value;switch(m){case"any-not-eq?":case"not-eq?":case"any-eq?":case"eq?":parseAnyPredicate(a,s,m,o);break;case"any-not-match?":case"not-match?":case"any-match?":case"match?":parseMatchPredicate(a,s,m,o);break;case"not-any-of?":case"any-of?":parseAnyOfPredicate(a,s,m,o);break;case"is?":case"is-not?":parseIsPredicate(a,s,m,u,d);break;case"set!":parseSetDirective(a,s,_);break;default:l[s].push({operator:m,operands:a.slice(1)})}a.length=0}}__name(parsePattern,"parsePattern");var G,Query=(G=class{constructor(e,t){f(this,0,0);f(this,"exceededMatchLimit");f(this,"textPredicates");f(this,"captureNames");f(this,"captureQuantifiers");f(this,"predicates");f(this,"setProperties");f(this,"assertedProperties");f(this,"refutedProperties");f(this,"matchLimit");var b;const r=C.lengthBytesUTF8(t),n=C._malloc(r+1);C.stringToUTF8(t,n,r+1);const a=C._ts_query_new(e[0],n,r,TRANSFER_BUFFER,TRANSFER_BUFFER+SIZE_OF_INT);if(!a){const c=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),I=C.getValue(TRANSFER_BUFFER,"i32"),p=C.UTF8ToString(n,I).length,T=t.slice(p,p+100).split(`
`)[0],R=((b=T.match(QUERY_WORD_REGEX))==null?void 0:b[0])??"";switch(C._free(n),c){case QueryErrorKind.Syntax:throw new QueryError(QueryErrorKind.Syntax,{suffix:`${p}: '${T}'...`},p,0);case QueryErrorKind.NodeName:throw new QueryError(c,{word:R},p,R.length);case QueryErrorKind.FieldName:throw new QueryError(c,{word:R},p,R.length);case QueryErrorKind.CaptureName:throw new QueryError(c,{word:R},p,R.length);case QueryErrorKind.PatternStructure:throw new QueryError(c,{suffix:`${p}: '${T}'...`},p,0)}}const o=C._ts_query_string_count(a),l=C._ts_query_capture_count(a),_=C._ts_query_pattern_count(a),u=new Array(l),d=new Array(_),m=new Array(o);for(let c=0;c<l;c++){const I=C._ts_query_capture_name_for_id(a,c,TRANSFER_BUFFER),p=C.getValue(TRANSFER_BUFFER,"i32");u[c]=C.UTF8ToString(I,p)}for(let c=0;c<_;c++){const I=new Array(l);for(let p=0;p<l;p++){const T=C._ts_query_capture_quantifier_for_id(a,c,p);I[p]=T}d[c]=I}for(let c=0;c<o;c++){const I=C._ts_query_string_value_for_id(a,c,TRANSFER_BUFFER),p=C.getValue(TRANSFER_BUFFER,"i32");m[c]=C.UTF8ToString(I,p)}const h=new Array(_),g=new Array(_),y=new Array(_),w=new Array(_),E=new Array(_);for(let c=0;c<_;c++){const I=C._ts_query_predicates_for_pattern(a,c,TRANSFER_BUFFER),p=C.getValue(TRANSFER_BUFFER,"i32");w[c]=[],E[c]=[];const T=new Array;let R=I;for(let N=0;N<p;N++){const x=C.getValue(R,"i32");R+=SIZE_OF_INT;const j=C.getValue(R,"i32");R+=SIZE_OF_INT,parsePattern(c,x,j,u,m,T,E,w,h,g,y)}Object.freeze(E[c]),Object.freeze(w[c]),Object.freeze(h[c]),Object.freeze(g[c]),Object.freeze(y[c])}C._free(n),this[0]=a,this.captureNames=u,this.captureQuantifiers=d,this.textPredicates=E,this.predicates=w,this.setProperties=h,this.assertedProperties=g,this.refutedProperties=y,this.exceededMatchLimit=!1}delete(){C._ts_query_delete(this[0]),this[0]=0}matches(e,t={}){const r=t.startPosition??ZERO_POINT,n=t.endPosition??ZERO_POINT,a=t.startIndex??0,o=t.endIndex??0,l=t.matchLimit??4294967295,_=t.maxStartDepth??4294967295,u=t.timeoutMicros??0,d=t.progressCallback;if(typeof l!="number")throw new Error("Arguments must be numbers");if(this.matchLimit=l,o!==0&&a>o)throw new Error("`startIndex` cannot be greater than `endIndex`");if(n!==ZERO_POINT&&(r.row>n.row||r.row===n.row&&r.column>n.column))throw new Error("`startPosition` cannot be greater than `endPosition`");d&&(C.currentQueryProgressCallback=d),marshalNode(e),C._ts_query_matches_wasm(this[0],e.tree[0],r.row,r.column,n.row,n.column,a,o,l,_,u);const m=C.getValue(TRANSFER_BUFFER,"i32"),h=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),g=C.getValue(TRANSFER_BUFFER+2*SIZE_OF_INT,"i32"),y=new Array(m);this.exceededMatchLimit=!!g;let w=0,E=h;for(let b=0;b<m;b++){const c=C.getValue(E,"i32");E+=SIZE_OF_INT;const I=C.getValue(E,"i32");E+=SIZE_OF_INT;const p=new Array(I);if(E=unmarshalCaptures(this,e.tree,E,c,p),this.textPredicates[c].every(T=>T(p))){y[w]={pattern:c,patternIndex:c,captures:p};const T=this.setProperties[c];y[w].setProperties=T;const R=this.assertedProperties[c];y[w].assertedProperties=R;const N=this.refutedProperties[c];y[w].refutedProperties=N,w++}}return y.length=w,C._free(h),C.currentQueryProgressCallback=null,y}captures(e,t={}){const r=t.startPosition??ZERO_POINT,n=t.endPosition??ZERO_POINT,a=t.startIndex??0,o=t.endIndex??0,l=t.matchLimit??4294967295,_=t.maxStartDepth??4294967295,u=t.timeoutMicros??0,d=t.progressCallback;if(typeof l!="number")throw new Error("Arguments must be numbers");if(this.matchLimit=l,o!==0&&a>o)throw new Error("`startIndex` cannot be greater than `endIndex`");if(n!==ZERO_POINT&&(r.row>n.row||r.row===n.row&&r.column>n.column))throw new Error("`startPosition` cannot be greater than `endPosition`");d&&(C.currentQueryProgressCallback=d),marshalNode(e),C._ts_query_captures_wasm(this[0],e.tree[0],r.row,r.column,n.row,n.column,a,o,l,_,u);const m=C.getValue(TRANSFER_BUFFER,"i32"),h=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),g=C.getValue(TRANSFER_BUFFER+2*SIZE_OF_INT,"i32"),y=new Array;this.exceededMatchLimit=!!g;const w=new Array;let E=h;for(let b=0;b<m;b++){const c=C.getValue(E,"i32");E+=SIZE_OF_INT;const I=C.getValue(E,"i32");E+=SIZE_OF_INT;const p=C.getValue(E,"i32");if(E+=SIZE_OF_INT,w.length=I,E=unmarshalCaptures(this,e.tree,E,c,w),this.textPredicates[c].every(T=>T(w))){const T=w[p],R=this.setProperties[c];T.setProperties=R;const N=this.assertedProperties[c];T.assertedProperties=N;const x=this.refutedProperties[c];T.refutedProperties=x,y.push(T)}}return C._free(h),C.currentQueryProgressCallback=null,y}predicatesForPattern(e){return this.predicates[e]}disableCapture(e){const t=C.lengthBytesUTF8(e),r=C._malloc(t+1);C.stringToUTF8(e,r,t+1),C._ts_query_disable_capture(this[0],r,t),C._free(r)}disablePattern(e){if(e>=this.predicates.length)throw new Error(`Pattern index is ${e} but the pattern count is ${this.predicates.length}`);C._ts_query_disable_pattern(this[0],e)}didExceedMatchLimit(){return this.exceededMatchLimit}startIndexForPattern(e){if(e>=this.predicates.length)throw new Error(`Pattern index is ${e} but the pattern count is ${this.predicates.length}`);return C._ts_query_start_byte_for_pattern(this[0],e)}endIndexForPattern(e){if(e>=this.predicates.length)throw new Error(`Pattern index is ${e} but the pattern count is ${this.predicates.length}`);return C._ts_query_end_byte_for_pattern(this[0],e)}patternCount(){return C._ts_query_pattern_count(this[0])}captureIndexForName(e){return this.captureNames.indexOf(e)}isPatternRooted(e){return C._ts_query_is_pattern_rooted(this[0],e)===1}isPatternNonLocal(e){return C._ts_query_is_pattern_non_local(this[0],e)===1}isPatternGuaranteedAtStep(e){return C._ts_query_is_pattern_guaranteed_at_step(this[0],e)===1}},__name(G,"Query"),G),LANGUAGE_FUNCTION_REGEX=/^tree_sitter_\w+$/,V,Language=(V=class{constructor(e,t){f(this,0,0);f(this,"types");f(this,"fields");assertInternal(e),this[0]=t,this.types=new Array(C._ts_language_symbol_count(this[0]));for(let r=0,n=this.types.length;r<n;r++)C._ts_language_symbol_type(this[0],r)<2&&(this.types[r]=C.UTF8ToString(C._ts_language_symbol_name(this[0],r)));this.fields=new Array(C._ts_language_field_count(this[0])+1);for(let r=0,n=this.fields.length;r<n;r++){const a=C._ts_language_field_name_for_id(this[0],r);a!==0?this.fields[r]=C.UTF8ToString(a):this.fields[r]=null}}get name(){const e=C._ts_language_name(this[0]);return e===0?null:C.UTF8ToString(e)}get version(){return C._ts_language_version(this[0])}get abiVersion(){return C._ts_language_abi_version(this[0])}get metadata(){C._ts_language_metadata(this[0]);const e=C.getValue(TRANSFER_BUFFER,"i32"),t=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32");return e===0?null:unmarshalLanguageMetadata(t)}get fieldCount(){return this.fields.length-1}get stateCount(){return C._ts_language_state_count(this[0])}fieldIdForName(e){const t=this.fields.indexOf(e);return t!==-1?t:null}fieldNameForId(e){return this.fields[e]??null}idForNodeType(e,t){const r=C.lengthBytesUTF8(e),n=C._malloc(r+1);C.stringToUTF8(e,n,r+1);const a=C._ts_language_symbol_for_name(this[0],n,r,t?1:0);return C._free(n),a||null}get nodeTypeCount(){return C._ts_language_symbol_count(this[0])}nodeTypeForId(e){const t=C._ts_language_symbol_name(this[0],e);return t?C.UTF8ToString(t):null}nodeTypeIsNamed(e){return!!C._ts_language_type_is_named_wasm(this[0],e)}nodeTypeIsVisible(e){return!!C._ts_language_type_is_visible_wasm(this[0],e)}get supertypes(){C._ts_language_supertypes_wasm(this[0]);const e=C.getValue(TRANSFER_BUFFER,"i32"),t=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),r=new Array(e);if(e>0){let n=t;for(let a=0;a<e;a++)r[a]=C.getValue(n,"i16"),n+=SIZE_OF_SHORT}return r}subtypes(e){C._ts_language_subtypes_wasm(this[0],e);const t=C.getValue(TRANSFER_BUFFER,"i32"),r=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),n=new Array(t);if(t>0){let a=r;for(let o=0;o<t;o++)n[o]=C.getValue(a,"i16"),a+=SIZE_OF_SHORT}return n}nextState(e,t){return C._ts_language_next_state(this[0],e,t)}lookaheadIterator(e){const t=C._ts_lookahead_iterator_new(this[0],e);return t?new LookaheadIterator(INTERNAL,t,this):null}query(e){return console.warn("Language.query is deprecated. Use new Query(language, source) instead."),new Query(this,e)}static async load(e){var l;let t;e instanceof Uint8Array?t=Promise.resolve(e):(l=globalThis.process)!=null&&l.versions.node?t=__require("fs/promises").readFile(e):t=fetch(e).then(_=>_.arrayBuffer().then(u=>{if(_.ok)return new Uint8Array(u);{const d=new TextDecoder("utf-8").decode(u);throw new Error(`Language.load failed with status ${_.status}.

${d}`)}}));const r=await C.loadWebAssemblyModule(await t,{loadAsync:!0}),n=Object.keys(r),a=n.find(_=>LANGUAGE_FUNCTION_REGEX.test(_)&&!_.includes("external_scanner_"));if(!a)throw console.log(`Couldn't find language function in WASM file. Symbols:
${JSON.stringify(n,null,2)}`),new Error("Language.load failed: no language function found in WASM file");const o=r[a]();return new V(INTERNAL,o)}},__name(V,"Language"),V),Module2=(()=>{var _scriptName=import.meta.url;return async function(moduleArg={}){var moduleRtn,Module=moduleArg,readyPromiseResolve,readyPromiseReject,readyPromise=new Promise((e,t)=>{readyPromiseResolve=e,readyPromiseReject=t}),ENVIRONMENT_IS_WEB=typeof window=="object",ENVIRONMENT_IS_WORKER=typeof WorkerGlobalScope<"u",ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer";if(ENVIRONMENT_IS_NODE){const{createRequire:e}=await __vitePreload(async()=>{const{createRequire:t}=await import("./i_ja0YJ5.js").then(r=>r._);return{createRequire:t}},[],import.meta.url);var require=e("/")}Module.currentQueryProgressCallback=null,Module.currentProgressCallback=null,Module.currentLogCallback=null,Module.currentParseCallback=null;var moduleOverrides=Object.assign({},Module),arguments_=[],thisProgram="./this.program",quit_=__name((e,t)=>{throw t},"quit_"),scriptDirectory="";function locateFile(e){return Module.locateFile?Module.locateFile(e,scriptDirectory):scriptDirectory+e}__name(locateFile,"locateFile");var readAsync,readBinary;if(ENVIRONMENT_IS_NODE){var fs=require("fs"),nodePath=require("path");import.meta.url.startsWith("data:")||(scriptDirectory=nodePath.dirname(require("url").fileURLToPath(import.meta.url))+"/"),readBinary=__name(e=>{e=isFileURI(e)?new URL(e):e;var t=fs.readFileSync(e);return t},"readBinary"),readAsync=__name(async(e,t=!0)=>{e=isFileURI(e)?new URL(e):e;var r=fs.readFileSync(e,t?void 0:"utf8");return r},"readAsync"),!Module.thisProgram&&process.argv.length>1&&(thisProgram=process.argv[1].replace(/\\/g,"/")),arguments_=process.argv.slice(2),quit_=__name((e,t)=>{throw process.exitCode=e,t},"quit_")}else(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&(ENVIRONMENT_IS_WORKER?scriptDirectory=self.location.href:typeof document<"u"&&document.currentScript&&(scriptDirectory=document.currentScript.src),_scriptName&&(scriptDirectory=_scriptName),scriptDirectory.startsWith("blob:")?scriptDirectory="":scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1),ENVIRONMENT_IS_WORKER&&(readBinary=__name(e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)},"readBinary")),readAsync=__name(async e=>{if(isFileURI(e))return new Promise((r,n)=>{var a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="arraybuffer",a.onload=()=>{if(a.status==200||a.status==0&&a.response){r(a.response);return}n(a.status)},a.onerror=n,a.send(null)});var t=await fetch(e,{credentials:"same-origin"});if(t.ok)return t.arrayBuffer();throw new Error(t.status+" : "+t.url)},"readAsync"));var out=Module.print||console.log.bind(console),err=Module.printErr||console.error.bind(console);Object.assign(Module,moduleOverrides),moduleOverrides=null,Module.arguments&&(arguments_=Module.arguments),Module.thisProgram&&(thisProgram=Module.thisProgram);var dynamicLibraries=Module.dynamicLibraries||[],wasmBinary=Module.wasmBinary,wasmMemory,ABORT=!1,EXITSTATUS;function assert(e,t){e||abort(t)}__name(assert,"assert");var HEAP8,HEAPU8,HEAP64,HEAP_DATA_VIEW,runtimeInitialized=!1,dataURIPrefix="data:application/octet-stream;base64,",isDataURI=__name(e=>e.startsWith(dataURIPrefix),"isDataURI"),isFileURI=__name(e=>e.startsWith("file://"),"isFileURI");function updateMemoryViews(){var e=wasmMemory.buffer;Module.HEAP_DATA_VIEW=HEAP_DATA_VIEW=new DataView(e),Module.HEAP8=HEAP8=new Int8Array(e),Module.HEAP16=new Int16Array(e),Module.HEAPU8=HEAPU8=new Uint8Array(e),Module.HEAPU16=new Uint16Array(e),Module.HEAP32=new Int32Array(e),Module.HEAPU32=new Uint32Array(e),Module.HEAPF32=new Float32Array(e),Module.HEAPF64=new Float64Array(e),Module.HEAP64=HEAP64=new BigInt64Array(e),Module.HEAPU64=new BigUint64Array(e)}if(__name(updateMemoryViews,"updateMemoryViews"),Module.wasmMemory)wasmMemory=Module.wasmMemory;else{var INITIAL_MEMORY=Module.INITIAL_MEMORY||33554432;wasmMemory=new WebAssembly.Memory({initial:INITIAL_MEMORY/65536,maximum:32768})}updateMemoryViews();var __ATPRERUN__=[],__ATINIT__=[],__ATMAIN__=[],__ATPOSTRUN__=[],__RELOC_FUNCS__=[];function preRun(){if(Module.preRun)for(typeof Module.preRun=="function"&&(Module.preRun=[Module.preRun]);Module.preRun.length;)addOnPreRun(Module.preRun.shift());callRuntimeCallbacks(__ATPRERUN__)}__name(preRun,"preRun");function initRuntime(){runtimeInitialized=!0,callRuntimeCallbacks(__RELOC_FUNCS__),callRuntimeCallbacks(__ATINIT__)}__name(initRuntime,"initRuntime");function preMain(){callRuntimeCallbacks(__ATMAIN__)}__name(preMain,"preMain");function postRun(){if(Module.postRun)for(typeof Module.postRun=="function"&&(Module.postRun=[Module.postRun]);Module.postRun.length;)addOnPostRun(Module.postRun.shift());callRuntimeCallbacks(__ATPOSTRUN__)}__name(postRun,"postRun");function addOnPreRun(e){__ATPRERUN__.unshift(e)}__name(addOnPreRun,"addOnPreRun");function addOnInit(e){__ATINIT__.unshift(e)}__name(addOnInit,"addOnInit");function addOnPreMain(e){__ATMAIN__.unshift(e)}__name(addOnPreMain,"addOnPreMain");function addOnExit(e){}__name(addOnExit,"addOnExit");function addOnPostRun(e){__ATPOSTRUN__.unshift(e)}__name(addOnPostRun,"addOnPostRun");var runDependencies=0,dependenciesFulfilled=null;function getUniqueRunDependency(e){return e}__name(getUniqueRunDependency,"getUniqueRunDependency");function addRunDependency(e){var t;runDependencies++,(t=Module.monitorRunDependencies)==null||t.call(Module,runDependencies)}__name(addRunDependency,"addRunDependency");function removeRunDependency(e){var r;if(runDependencies--,(r=Module.monitorRunDependencies)==null||r.call(Module,runDependencies),runDependencies==0&&dependenciesFulfilled){var t=dependenciesFulfilled;dependenciesFulfilled=null,t()}}__name(removeRunDependency,"removeRunDependency");function abort(e){var r;(r=Module.onAbort)==null||r.call(Module,e),e="Aborted("+e+")",err(e),ABORT=!0,e+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(e);throw readyPromiseReject(t),t}__name(abort,"abort");var wasmBinaryFile;function findWasmBinary(){if(Module.locateFile){var e="tree-sitter.wasm";return isDataURI(e)?e:locateFile(e)}return new URL(""+new URL("../assets/tree-sitter.DJ2BG7o-.wasm",import.meta.url).href,import.meta.url).href}__name(findWasmBinary,"findWasmBinary");function getBinarySync(e){if(e==wasmBinaryFile&&wasmBinary)return new Uint8Array(wasmBinary);if(readBinary)return readBinary(e);throw"both async and sync fetching of the wasm failed"}__name(getBinarySync,"getBinarySync");async function getWasmBinary(e){if(!wasmBinary)try{var t=await readAsync(e);return new Uint8Array(t)}catch{}return getBinarySync(e)}__name(getWasmBinary,"getWasmBinary");async function instantiateArrayBuffer(e,t){try{var r=await getWasmBinary(e),n=await WebAssembly.instantiate(r,t);return n}catch(a){err(`failed to asynchronously prepare wasm: ${a}`),abort(a)}}__name(instantiateArrayBuffer,"instantiateArrayBuffer");async function instantiateAsync(e,t,r){if(!e&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(t)&&!isFileURI(t)&&!ENVIRONMENT_IS_NODE)try{var n=fetch(t,{credentials:"same-origin"}),a=await WebAssembly.instantiateStreaming(n,r);return a}catch(o){err(`wasm streaming compile failed: ${o}`),err("falling back to ArrayBuffer instantiation")}return instantiateArrayBuffer(t,r)}__name(instantiateAsync,"instantiateAsync");function getWasmImports(){return{env:wasmImports,wasi_snapshot_preview1:wasmImports,"GOT.mem":new Proxy(wasmImports,GOTHandler),"GOT.func":new Proxy(wasmImports,GOTHandler)}}__name(getWasmImports,"getWasmImports");async function createWasm(){function e(o,l){wasmExports=o.exports,wasmExports=relocateExports(wasmExports,1024);var _=getDylinkMetadata(l);return _.neededDynlibs&&(dynamicLibraries=_.neededDynlibs.concat(dynamicLibraries)),mergeLibSymbols(wasmExports,"main"),LDSO.init(),loadDylibs(),addOnInit(wasmExports.__wasm_call_ctors),__RELOC_FUNCS__.push(wasmExports.__wasm_apply_data_relocs),removeRunDependency(),wasmExports}__name(e,"receiveInstance"),addRunDependency();function t(o){return e(o.instance,o.module)}__name(t,"receiveInstantiationResult");var r=getWasmImports();if(Module.instantiateWasm)try{return Module.instantiateWasm(r,e)}catch(o){err(`Module.instantiateWasm callback failed with error: ${o}`),readyPromiseReject(o)}wasmBinaryFile??(wasmBinaryFile=findWasmBinary());try{var n=await instantiateAsync(wasmBinary,wasmBinaryFile,r),a=t(n);return a}catch(o){return readyPromiseReject(o),Promise.reject(o)}}__name(createWasm,"createWasm");const s=class s{constructor(t){f(this,"name","ExitStatus");this.message=`Program terminated with exit(${t})`,this.status=t}};__name(s,"ExitStatus");let ExitStatus=s;var GOT={},currentModuleWeakSymbols=new Set([]),GOTHandler={get(e,t){var r=GOT[t];return r||(r=GOT[t]=new WebAssembly.Global({value:"i32",mutable:!0})),currentModuleWeakSymbols.has(t)||(r.required=!0),r}},LE_HEAP_LOAD_F32=__name(e=>HEAP_DATA_VIEW.getFloat32(e,!0),"LE_HEAP_LOAD_F32"),LE_HEAP_LOAD_F64=__name(e=>HEAP_DATA_VIEW.getFloat64(e,!0),"LE_HEAP_LOAD_F64"),LE_HEAP_LOAD_I16=__name(e=>HEAP_DATA_VIEW.getInt16(e,!0),"LE_HEAP_LOAD_I16"),LE_HEAP_LOAD_I32=__name(e=>HEAP_DATA_VIEW.getInt32(e,!0),"LE_HEAP_LOAD_I32"),LE_HEAP_LOAD_U32=__name(e=>HEAP_DATA_VIEW.getUint32(e,!0),"LE_HEAP_LOAD_U32"),LE_HEAP_STORE_F32=__name((e,t)=>HEAP_DATA_VIEW.setFloat32(e,t,!0),"LE_HEAP_STORE_F32"),LE_HEAP_STORE_F64=__name((e,t)=>HEAP_DATA_VIEW.setFloat64(e,t,!0),"LE_HEAP_STORE_F64"),LE_HEAP_STORE_I16=__name((e,t)=>HEAP_DATA_VIEW.setInt16(e,t,!0),"LE_HEAP_STORE_I16"),LE_HEAP_STORE_I32=__name((e,t)=>HEAP_DATA_VIEW.setInt32(e,t,!0),"LE_HEAP_STORE_I32"),LE_HEAP_STORE_U32=__name((e,t)=>HEAP_DATA_VIEW.setUint32(e,t,!0),"LE_HEAP_STORE_U32"),callRuntimeCallbacks=__name(e=>{for(;e.length>0;)e.shift()(Module)},"callRuntimeCallbacks"),UTF8Decoder=typeof TextDecoder<"u"?new TextDecoder:void 0,UTF8ArrayToString=__name((e,t=0,r=NaN)=>{for(var n=t+r,a=t;e[a]&&!(a>=n);)++a;if(a-t>16&&e.buffer&&UTF8Decoder)return UTF8Decoder.decode(e.subarray(t,a));for(var o="";t<a;){var l=e[t++];if(!(l&128)){o+=String.fromCharCode(l);continue}var _=e[t++]&63;if((l&224)==192){o+=String.fromCharCode((l&31)<<6|_);continue}var u=e[t++]&63;if((l&240)==224?l=(l&15)<<12|_<<6|u:l=(l&7)<<18|_<<12|u<<6|e[t++]&63,l<65536)o+=String.fromCharCode(l);else{var d=l-65536;o+=String.fromCharCode(55296|d>>10,56320|d&1023)}}return o},"UTF8ArrayToString"),getDylinkMetadata=__name(e=>{var t=0,r=0;function n(){return e[t++]}__name(n,"getU8");function a(){for(var A=0,v=1;;){var M=e[t++];if(A+=(M&127)*v,v*=128,!(M&128))break}return A}__name(a,"getLEB");function o(){var A=a();return t+=A,UTF8ArrayToString(e,t-A,A)}__name(o,"getString");function l(A,v){if(A)throw new Error(v)}__name(l,"failIf");var _="dylink.0";if(e instanceof WebAssembly.Module){var u=WebAssembly.Module.customSections(e,_);u.length===0&&(_="dylink",u=WebAssembly.Module.customSections(e,_)),l(u.length===0,"need dylink section"),e=new Uint8Array(u[0]),r=e.length}else{var d=new Uint32Array(new Uint8Array(e.subarray(0,24)).buffer),m=d[0]==1836278016||d[0]==6386541;l(!m,"need to see wasm magic number"),l(e[8]!==0,"need the dylink section to be first"),t=9;var h=a();r=t+h,_=o()}var g={neededDynlibs:[],tlsExports:new Set,weakImports:new Set};if(_=="dylink"){g.memorySize=a(),g.memoryAlign=a(),g.tableSize=a(),g.tableAlign=a();for(var y=a(),w=0;w<y;++w){var E=o();g.neededDynlibs.push(E)}}else{l(_!=="dylink.0");for(var b=1,c=2,I=3,p=4,T=256,R=3,N=1;t<r;){var x=n(),j=a();if(x===b)g.memorySize=a(),g.memoryAlign=a(),g.tableSize=a(),g.tableAlign=a();else if(x===c)for(var y=a(),w=0;w<y;++w)E=o(),g.neededDynlibs.push(E);else if(x===I)for(var Y=a();Y--;){var J=o(),$=a();$&T&&g.tlsExports.add(J)}else if(x===p)for(var Y=a();Y--;){o();var J=o(),$=a();($&R)==N&&g.weakImports.add(J)}else t+=j}}return g},"getDylinkMetadata");function getValue(e,t="i8"){switch(t.endsWith("*")&&(t="*"),t){case"i1":return HEAP8[e];case"i8":return HEAP8[e];case"i16":return LE_HEAP_LOAD_I16((e>>1)*2);case"i32":return LE_HEAP_LOAD_I32((e>>2)*4);case"i64":return HEAP64[e>>3];case"float":return LE_HEAP_LOAD_F32((e>>2)*4);case"double":return LE_HEAP_LOAD_F64((e>>3)*8);case"*":return LE_HEAP_LOAD_U32((e>>2)*4);default:abort(`invalid type for getValue: ${t}`)}}__name(getValue,"getValue");var newDSO=__name((e,t,r)=>{var n={refcount:1/0,name:e,exports:r,global:!0};return LDSO.loadedLibsByName[e]=n,t!=null&&(LDSO.loadedLibsByHandle[t]=n),n},"newDSO"),LDSO={loadedLibsByName:{},loadedLibsByHandle:{},init(){newDSO("__main__",0,wasmImports)}},___heap_base=78224,alignMemory=__name((e,t)=>Math.ceil(e/t)*t,"alignMemory"),getMemory=__name(e=>{if(runtimeInitialized)return _calloc(e,1);var t=___heap_base,r=t+alignMemory(e,16);return ___heap_base=r,GOT.__heap_base.value=r,t},"getMemory"),isInternalSym=__name(e=>["__cpp_exception","__c_longjmp","__wasm_apply_data_relocs","__dso_handle","__tls_size","__tls_align","__set_stack_limits","_emscripten_tls_init","__wasm_init_tls","__wasm_call_ctors","__start_em_asm","__stop_em_asm","__start_em_js","__stop_em_js"].includes(e)||e.startsWith("__em_js__"),"isInternalSym"),uleb128Encode=__name((e,t)=>{e<128?t.push(e):t.push(e%128|128,e>>7)},"uleb128Encode"),sigToWasmTypes=__name(e=>{for(var t={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},r={parameters:[],results:e[0]=="v"?[]:[t[e[0]]]},n=1;n<e.length;++n)r.parameters.push(t[e[n]]);return r},"sigToWasmTypes"),generateFuncType=__name((e,t)=>{var r=e.slice(0,1),n=e.slice(1),a={i:127,p:127,j:126,f:125,d:124,e:111};t.push(96),uleb128Encode(n.length,t);for(var o=0;o<n.length;++o)t.push(a[n[o]]);r=="v"?t.push(0):t.push(1,a[r])},"generateFuncType"),convertJsFunctionToWasm=__name((e,t)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(sigToWasmTypes(t),e);var r=[1];generateFuncType(t,r);var n=[0,97,115,109,1,0,0,0,1];uleb128Encode(r.length,n),n.push(...r),n.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var a=new WebAssembly.Module(new Uint8Array(n)),o=new WebAssembly.Instance(a,{e:{f:e}}),l=o.exports.f;return l},"convertJsFunctionToWasm"),wasmTableMirror=[],wasmTable=new WebAssembly.Table({initial:31,element:"anyfunc"}),getWasmTableEntry=__name(e=>{var t=wasmTableMirror[e];return t||(e>=wasmTableMirror.length&&(wasmTableMirror.length=e+1),wasmTableMirror[e]=t=wasmTable.get(e)),t},"getWasmTableEntry"),updateTableMap=__name((e,t)=>{if(functionsInTableMap)for(var r=e;r<e+t;r++){var n=getWasmTableEntry(r);n&&functionsInTableMap.set(n,r)}},"updateTableMap"),functionsInTableMap,getFunctionAddress=__name(e=>(functionsInTableMap||(functionsInTableMap=new WeakMap,updateTableMap(0,wasmTable.length)),functionsInTableMap.get(e)||0),"getFunctionAddress"),freeTableIndexes=[],getEmptyTableSlot=__name(()=>{if(freeTableIndexes.length)return freeTableIndexes.pop();try{wasmTable.grow(1)}catch(e){throw e instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":e}return wasmTable.length-1},"getEmptyTableSlot"),setWasmTableEntry=__name((e,t)=>{wasmTable.set(e,t),wasmTableMirror[e]=wasmTable.get(e)},"setWasmTableEntry"),addFunction=__name((e,t)=>{var r=getFunctionAddress(e);if(r)return r;var n=getEmptyTableSlot();try{setWasmTableEntry(n,e)}catch(o){if(!(o instanceof TypeError))throw o;var a=convertJsFunctionToWasm(e,t);setWasmTableEntry(n,a)}return functionsInTableMap.set(e,n),n},"addFunction"),updateGOT=__name((e,t)=>{for(var r in e)if(!isInternalSym(r)){var n=e[r];GOT[r]||(GOT[r]=new WebAssembly.Global({value:"i32",mutable:!0})),(t||GOT[r].value==0)&&(typeof n=="function"?GOT[r].value=addFunction(n):typeof n=="number"?GOT[r].value=n:err(`unhandled export type for '${r}': ${typeof n}`))}},"updateGOT"),relocateExports=__name((e,t,r)=>{var n={};for(var a in e){var o=e[a];typeof o=="object"&&(o=o.value),typeof o=="number"&&(o+=t),n[a]=o}return updateGOT(n,r),n},"relocateExports"),isSymbolDefined=__name(e=>{var t=wasmImports[e];return!(!t||t.stub)},"isSymbolDefined"),dynCall=__name((e,t,r=[])=>{var n=getWasmTableEntry(t)(...r);return n},"dynCall"),stackSave=__name(()=>_emscripten_stack_get_current(),"stackSave"),stackRestore=__name(e=>__emscripten_stack_restore(e),"stackRestore"),createInvokeFunction=__name(e=>(t,...r)=>{var n=stackSave();try{return dynCall(e,t,r)}catch(a){if(stackRestore(n),a!==a+0)throw a;if(_setThrew(1,0),e[0]=="j")return 0n}},"createInvokeFunction"),resolveGlobalSymbol=__name((e,t=!1)=>{var r;return isSymbolDefined(e)?r=wasmImports[e]:e.startsWith("invoke_")&&(r=wasmImports[e]=createInvokeFunction(e.split("_")[1])),{sym:r,name:e}},"resolveGlobalSymbol"),UTF8ToString=__name((e,t)=>e?UTF8ArrayToString(HEAPU8,e,t):"","UTF8ToString"),loadWebAssemblyModule=__name((binary,flags,libName,localScope,handle)=>{var metadata=getDylinkMetadata(binary);currentModuleWeakSymbols=metadata.weakImports;function loadModule(){var firstLoad=!handle||!HEAP8[handle+8];if(firstLoad){var memAlign=Math.pow(2,metadata.memoryAlign),memoryBase=metadata.memorySize?alignMemory(getMemory(metadata.memorySize+memAlign),memAlign):0,tableBase=metadata.tableSize?wasmTable.length:0;handle&&(HEAP8[handle+8]=1,LE_HEAP_STORE_U32((handle+12>>2)*4,memoryBase),LE_HEAP_STORE_I32((handle+16>>2)*4,metadata.memorySize),LE_HEAP_STORE_U32((handle+20>>2)*4,tableBase),LE_HEAP_STORE_I32((handle+24>>2)*4,metadata.tableSize))}else memoryBase=LE_HEAP_LOAD_U32((handle+12>>2)*4),tableBase=LE_HEAP_LOAD_U32((handle+20>>2)*4);var tableGrowthNeeded=tableBase+metadata.tableSize-wasmTable.length;tableGrowthNeeded>0&&wasmTable.grow(tableGrowthNeeded);var moduleExports;function resolveSymbol(e){var t=resolveGlobalSymbol(e).sym;return!t&&localScope&&(t=localScope[e]),t||(t=moduleExports[e]),t}__name(resolveSymbol,"resolveSymbol");var proxyHandler={get(e,t){switch(t){case"__memory_base":return memoryBase;case"__table_base":return tableBase}if(t in wasmImports&&!wasmImports[t].stub)return wasmImports[t];if(!(t in e)){var r;e[t]=(...n)=>(r||(r=resolveSymbol(t)),r(...n))}return e[t]}},proxy=new Proxy({},proxyHandler),info={"GOT.mem":new Proxy({},GOTHandler),"GOT.func":new Proxy({},GOTHandler),env:proxy,wasi_snapshot_preview1:proxy};function postInstantiation(module,instance){updateTableMap(tableBase,metadata.tableSize),moduleExports=relocateExports(instance.exports,memoryBase),flags.allowUndefined||reportUndefinedSymbols();function addEmAsm(addr,body){for(var args=[],arity=0;arity<16&&body.indexOf("$"+arity)!=-1;arity++)args.push("$"+arity);args=args.join(",");var func=`(${args}) => { ${body} };`;eval(func)}if(__name(addEmAsm,"addEmAsm"),"__start_em_asm"in moduleExports)for(var start=moduleExports.__start_em_asm,stop=moduleExports.__stop_em_asm;start<stop;){var jsString=UTF8ToString(start);addEmAsm(start,jsString),start=HEAPU8.indexOf(0,start)+1}function addEmJs(name,cSig,body){var jsArgs=[];if(cSig=cSig.slice(1,-1),cSig!="void"){cSig=cSig.split(",");for(var i in cSig){var jsArg=cSig[i].split(" ").pop();jsArgs.push(jsArg.replace("*",""))}}var func=`(${jsArgs}) => ${body};`;moduleExports[name]=eval(func)}__name(addEmJs,"addEmJs");for(var name in moduleExports)if(name.startsWith("__em_js__")){var start=moduleExports[name],jsString=UTF8ToString(start),parts=jsString.split("<::>");addEmJs(name.replace("__em_js__",""),parts[0],parts[1]),delete moduleExports[name]}var applyRelocs=moduleExports.__wasm_apply_data_relocs;applyRelocs&&(runtimeInitialized?applyRelocs():__RELOC_FUNCS__.push(applyRelocs));var init=moduleExports.__wasm_call_ctors;return init&&(runtimeInitialized?init():__ATINIT__.push(init)),moduleExports}if(__name(postInstantiation,"postInstantiation"),flags.loadAsync){if(binary instanceof WebAssembly.Module){var instance=new WebAssembly.Instance(binary,info);return Promise.resolve(postInstantiation(binary,instance))}return WebAssembly.instantiate(binary,info).then(e=>postInstantiation(e.module,e.instance))}var module=binary instanceof WebAssembly.Module?binary:new WebAssembly.Module(binary),instance=new WebAssembly.Instance(module,info);return postInstantiation(module,instance)}return __name(loadModule,"loadModule"),flags.loadAsync?metadata.neededDynlibs.reduce((e,t)=>e.then(()=>loadDynamicLibrary(t,flags,localScope)),Promise.resolve()).then(loadModule):(metadata.neededDynlibs.forEach(e=>loadDynamicLibrary(e,flags,localScope)),loadModule())},"loadWebAssemblyModule"),mergeLibSymbols=__name((e,t)=>{for(var[r,n]of Object.entries(e)){const a=__name(l=>{isSymbolDefined(l)||(wasmImports[l]=n)},"setImport");a(r);const o="__main_argc_argv";r=="main"&&a(o),r==o&&a("main")}},"mergeLibSymbols"),asyncLoad=__name(async e=>{var t=await readAsync(e);return new Uint8Array(t)},"asyncLoad");function loadDynamicLibrary(e,t={global:!0,nodelete:!0},r,n){var a=LDSO.loadedLibsByName[e];if(a)return t.global?a.global||(a.global=!0,mergeLibSymbols(a.exports,e)):r&&Object.assign(r,a.exports),t.nodelete&&a.refcount!==1/0&&(a.refcount=1/0),a.refcount++,n&&(LDSO.loadedLibsByHandle[n]=a),t.loadAsync?Promise.resolve(!0):!0;a=newDSO(e,n,"loading"),a.refcount=t.nodelete?1/0:1,a.global=t.global;function o(){if(n){var u=LE_HEAP_LOAD_U32((n+28>>2)*4),d=LE_HEAP_LOAD_U32((n+32>>2)*4);if(u&&d){var m=HEAP8.slice(u,u+d);return t.loadAsync?Promise.resolve(m):m}}var h=locateFile(e);if(t.loadAsync)return asyncLoad(h);if(!readBinary)throw new Error(`${h}: file not found, and synchronous loading of external files is not available`);return readBinary(h)}__name(o,"loadLibData");function l(){return t.loadAsync?o().then(u=>loadWebAssemblyModule(u,t,e,r,n)):loadWebAssemblyModule(o(),t,e,r,n)}__name(l,"getExports");function _(u){a.global?mergeLibSymbols(u,e):r&&Object.assign(r,u),a.exports=u}return __name(_,"moduleLoaded"),t.loadAsync?l().then(u=>(_(u),!0)):(_(l()),!0)}__name(loadDynamicLibrary,"loadDynamicLibrary");var reportUndefinedSymbols=__name(()=>{for(var[e,t]of Object.entries(GOT))if(t.value==0){var r=resolveGlobalSymbol(e,!0).sym;if(!r&&!t.required)continue;if(typeof r=="function")t.value=addFunction(r,r.sig);else if(typeof r=="number")t.value=r;else throw new Error(`bad export type for '${e}': ${typeof r}`)}},"reportUndefinedSymbols"),loadDylibs=__name(()=>{if(!dynamicLibraries.length){reportUndefinedSymbols();return}addRunDependency(),dynamicLibraries.reduce((e,t)=>e.then(()=>loadDynamicLibrary(t,{loadAsync:!0,global:!0,nodelete:!0,allowUndefined:!0})),Promise.resolve()).then(()=>{reportUndefinedSymbols(),removeRunDependency()})},"loadDylibs"),noExitRuntime=Module.noExitRuntime||!0;function setValue(e,t,r="i8"){switch(r.endsWith("*")&&(r="*"),r){case"i1":HEAP8[e]=t;break;case"i8":HEAP8[e]=t;break;case"i16":LE_HEAP_STORE_I16((e>>1)*2,t);break;case"i32":LE_HEAP_STORE_I32((e>>2)*4,t);break;case"i64":HEAP64[e>>3]=BigInt(t);break;case"float":LE_HEAP_STORE_F32((e>>2)*4,t);break;case"double":LE_HEAP_STORE_F64((e>>3)*8,t);break;case"*":LE_HEAP_STORE_U32((e>>2)*4,t);break;default:abort(`invalid type for setValue: ${r}`)}}__name(setValue,"setValue");var ___memory_base=new WebAssembly.Global({value:"i32",mutable:!1},1024),___stack_pointer=new WebAssembly.Global({value:"i32",mutable:!0},78224),___table_base=new WebAssembly.Global({value:"i32",mutable:!1},1),__abort_js=__name(()=>abort(""),"__abort_js");__abort_js.sig="v";var _emscripten_get_now=__name(()=>performance.now(),"_emscripten_get_now");_emscripten_get_now.sig="d";var _emscripten_date_now=__name(()=>Date.now(),"_emscripten_date_now");_emscripten_date_now.sig="d";var checkWasiClock=__name(e=>e>=0&&e<=3,"checkWasiClock"),INT53_MAX=9007199254740992,INT53_MIN=-9007199254740992,bigintToI53Checked=__name(e=>e<INT53_MIN||e>INT53_MAX?NaN:Number(e),"bigintToI53Checked");function _clock_time_get(e,t,r){if(t=bigintToI53Checked(t),!checkWasiClock(e))return 28;var n;e===0?n=_emscripten_date_now():n=_emscripten_get_now();var a=Math.round(n*1e3*1e3);return HEAP64[r>>3]=BigInt(a),0}__name(_clock_time_get,"_clock_time_get"),_clock_time_get.sig="iijp";var getHeapMax=__name(()=>2147483648,"getHeapMax"),growMemory=__name(e=>{var t=wasmMemory.buffer,r=(e-t.byteLength+65535)/65536|0;try{return wasmMemory.grow(r),updateMemoryViews(),1}catch{}},"growMemory"),_emscripten_resize_heap=__name(e=>{var t=HEAPU8.length;e>>>=0;var r=getHeapMax();if(e>r)return!1;for(var n=1;n<=4;n*=2){var a=t*(1+.2/n);a=Math.min(a,e+100663296);var o=Math.min(r,alignMemory(Math.max(e,a),65536)),l=growMemory(o);if(l)return!0}return!1},"_emscripten_resize_heap");_emscripten_resize_heap.sig="ip";var _fd_close=__name(e=>52,"_fd_close");_fd_close.sig="ii";function _fd_seek(e,t,r,n){return t=bigintToI53Checked(t),70}__name(_fd_seek,"_fd_seek"),_fd_seek.sig="iijip";var printCharBuffers=[null,[],[]],printChar=__name((e,t)=>{var r=printCharBuffers[e];t===0||t===10?((e===1?out:err)(UTF8ArrayToString(r)),r.length=0):r.push(t)},"printChar"),_fd_write=__name((e,t,r,n)=>{for(var a=0,o=0;o<r;o++){var l=LE_HEAP_LOAD_U32((t>>2)*4),_=LE_HEAP_LOAD_U32((t+4>>2)*4);t+=8;for(var u=0;u<_;u++)printChar(e,HEAPU8[l+u]);a+=_}return LE_HEAP_STORE_U32((n>>2)*4,a),0},"_fd_write");_fd_write.sig="iippp";function _tree_sitter_log_callback(e,t){if(Module.currentLogCallback){const r=UTF8ToString(t);Module.currentLogCallback(r,e!==0)}}__name(_tree_sitter_log_callback,"_tree_sitter_log_callback");function _tree_sitter_parse_callback(e,t,r,n,a){const l=Module.currentParseCallback(t,{row:r,column:n});typeof l=="string"?(setValue(a,l.length,"i32"),stringToUTF16(l,e,10240)):setValue(a,0,"i32")}__name(_tree_sitter_parse_callback,"_tree_sitter_parse_callback");function _tree_sitter_progress_callback(e,t){return Module.currentProgressCallback?Module.currentProgressCallback({currentOffset:e,hasError:t}):!1}__name(_tree_sitter_progress_callback,"_tree_sitter_progress_callback");function _tree_sitter_query_progress_callback(e){return Module.currentQueryProgressCallback?Module.currentQueryProgressCallback({currentOffset:e}):!1}__name(_tree_sitter_query_progress_callback,"_tree_sitter_query_progress_callback");var keepRuntimeAlive=__name(()=>noExitRuntime,"keepRuntimeAlive"),_proc_exit=__name(e=>{var t;EXITSTATUS=e,keepRuntimeAlive()||((t=Module.onExit)==null||t.call(Module,e),ABORT=!0),quit_(e,new ExitStatus(e))},"_proc_exit");_proc_exit.sig="vi";var exitJS=__name((e,t)=>{EXITSTATUS=e,_proc_exit(e)},"exitJS"),handleException=__name(e=>{if(e instanceof ExitStatus||e=="unwind")return EXITSTATUS;quit_(1,e)},"handleException"),lengthBytesUTF8=__name(e=>{for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);n<=127?t++:n<=2047?t+=2:n>=55296&&n<=57343?(t+=4,++r):t+=3}return t},"lengthBytesUTF8"),stringToUTF8Array=__name((e,t,r,n)=>{if(!(n>0))return 0;for(var a=r,o=r+n-1,l=0;l<e.length;++l){var _=e.charCodeAt(l);if(_>=55296&&_<=57343){var u=e.charCodeAt(++l);_=65536+((_&1023)<<10)|u&1023}if(_<=127){if(r>=o)break;t[r++]=_}else if(_<=2047){if(r+1>=o)break;t[r++]=192|_>>6,t[r++]=128|_&63}else if(_<=65535){if(r+2>=o)break;t[r++]=224|_>>12,t[r++]=128|_>>6&63,t[r++]=128|_&63}else{if(r+3>=o)break;t[r++]=240|_>>18,t[r++]=128|_>>12&63,t[r++]=128|_>>6&63,t[r++]=128|_&63}}return t[r]=0,r-a},"stringToUTF8Array"),stringToUTF8=__name((e,t,r)=>stringToUTF8Array(e,HEAPU8,t,r),"stringToUTF8"),stackAlloc=__name(e=>__emscripten_stack_alloc(e),"stackAlloc"),stringToUTF8OnStack=__name(e=>{var t=lengthBytesUTF8(e)+1,r=stackAlloc(t);return stringToUTF8(e,r,t),r},"stringToUTF8OnStack"),AsciiToString=__name(e=>{for(var t="";;){var r=HEAPU8[e++];if(!r)return t;t+=String.fromCharCode(r)}},"AsciiToString"),stringToUTF16=__name((e,t,r)=>{if(r??(r=2147483647),r<2)return 0;r-=2;for(var n=t,a=r<e.length*2?r/2:e.length,o=0;o<a;++o){var l=e.charCodeAt(o);LE_HEAP_STORE_I16((t>>1)*2,l),t+=2}return LE_HEAP_STORE_I16((t>>1)*2,0),t-n},"stringToUTF16"),wasmImports={__heap_base:___heap_base,__indirect_function_table:wasmTable,__memory_base:___memory_base,__stack_pointer:___stack_pointer,__table_base:___table_base,_abort_js:__abort_js,clock_time_get:_clock_time_get,emscripten_resize_heap:_emscripten_resize_heap,fd_close:_fd_close,fd_seek:_fd_seek,fd_write:_fd_write,memory:wasmMemory,tree_sitter_log_callback:_tree_sitter_log_callback,tree_sitter_parse_callback:_tree_sitter_parse_callback,tree_sitter_progress_callback:_tree_sitter_progress_callback,tree_sitter_query_progress_callback:_tree_sitter_query_progress_callback},wasmExports=await createWasm();wasmExports.__wasm_call_ctors,Module._malloc=wasmExports.malloc;var _calloc=Module._calloc=wasmExports.calloc;Module._realloc=wasmExports.realloc,Module._free=wasmExports.free,Module._memcmp=wasmExports.memcmp,Module._ts_language_symbol_count=wasmExports.ts_language_symbol_count,Module._ts_language_state_count=wasmExports.ts_language_state_count,Module._ts_language_version=wasmExports.ts_language_version,Module._ts_language_abi_version=wasmExports.ts_language_abi_version,Module._ts_language_metadata=wasmExports.ts_language_metadata,Module._ts_language_name=wasmExports.ts_language_name,Module._ts_language_field_count=wasmExports.ts_language_field_count,Module._ts_language_next_state=wasmExports.ts_language_next_state,Module._ts_language_symbol_name=wasmExports.ts_language_symbol_name,Module._ts_language_symbol_for_name=wasmExports.ts_language_symbol_for_name,Module._strncmp=wasmExports.strncmp,Module._ts_language_symbol_type=wasmExports.ts_language_symbol_type,Module._ts_language_field_name_for_id=wasmExports.ts_language_field_name_for_id,Module._ts_lookahead_iterator_new=wasmExports.ts_lookahead_iterator_new,Module._ts_lookahead_iterator_delete=wasmExports.ts_lookahead_iterator_delete,Module._ts_lookahead_iterator_reset_state=wasmExports.ts_lookahead_iterator_reset_state,Module._ts_lookahead_iterator_reset=wasmExports.ts_lookahead_iterator_reset,Module._ts_lookahead_iterator_next=wasmExports.ts_lookahead_iterator_next,Module._ts_lookahead_iterator_current_symbol=wasmExports.ts_lookahead_iterator_current_symbol,Module._ts_parser_delete=wasmExports.ts_parser_delete,Module._ts_parser_reset=wasmExports.ts_parser_reset,Module._ts_parser_set_language=wasmExports.ts_parser_set_language,Module._ts_parser_timeout_micros=wasmExports.ts_parser_timeout_micros,Module._ts_parser_set_timeout_micros=wasmExports.ts_parser_set_timeout_micros,Module._ts_parser_set_included_ranges=wasmExports.ts_parser_set_included_ranges,Module._ts_query_new=wasmExports.ts_query_new,Module._ts_query_delete=wasmExports.ts_query_delete,Module._iswspace=wasmExports.iswspace,Module._iswalnum=wasmExports.iswalnum,Module._ts_query_pattern_count=wasmExports.ts_query_pattern_count,Module._ts_query_capture_count=wasmExports.ts_query_capture_count,Module._ts_query_string_count=wasmExports.ts_query_string_count,Module._ts_query_capture_name_for_id=wasmExports.ts_query_capture_name_for_id,Module._ts_query_capture_quantifier_for_id=wasmExports.ts_query_capture_quantifier_for_id,Module._ts_query_string_value_for_id=wasmExports.ts_query_string_value_for_id,Module._ts_query_predicates_for_pattern=wasmExports.ts_query_predicates_for_pattern,Module._ts_query_start_byte_for_pattern=wasmExports.ts_query_start_byte_for_pattern,Module._ts_query_end_byte_for_pattern=wasmExports.ts_query_end_byte_for_pattern,Module._ts_query_is_pattern_rooted=wasmExports.ts_query_is_pattern_rooted,Module._ts_query_is_pattern_non_local=wasmExports.ts_query_is_pattern_non_local,Module._ts_query_is_pattern_guaranteed_at_step=wasmExports.ts_query_is_pattern_guaranteed_at_step,Module._ts_query_disable_capture=wasmExports.ts_query_disable_capture,Module._ts_query_disable_pattern=wasmExports.ts_query_disable_pattern,Module._ts_tree_copy=wasmExports.ts_tree_copy,Module._ts_tree_delete=wasmExports.ts_tree_delete,Module._ts_init=wasmExports.ts_init,Module._ts_parser_new_wasm=wasmExports.ts_parser_new_wasm,Module._ts_parser_enable_logger_wasm=wasmExports.ts_parser_enable_logger_wasm,Module._ts_parser_parse_wasm=wasmExports.ts_parser_parse_wasm,Module._ts_parser_included_ranges_wasm=wasmExports.ts_parser_included_ranges_wasm,Module._ts_language_type_is_named_wasm=wasmExports.ts_language_type_is_named_wasm,Module._ts_language_type_is_visible_wasm=wasmExports.ts_language_type_is_visible_wasm,Module._ts_language_supertypes_wasm=wasmExports.ts_language_supertypes_wasm,Module._ts_language_subtypes_wasm=wasmExports.ts_language_subtypes_wasm,Module._ts_tree_root_node_wasm=wasmExports.ts_tree_root_node_wasm,Module._ts_tree_root_node_with_offset_wasm=wasmExports.ts_tree_root_node_with_offset_wasm,Module._ts_tree_edit_wasm=wasmExports.ts_tree_edit_wasm,Module._ts_tree_included_ranges_wasm=wasmExports.ts_tree_included_ranges_wasm,Module._ts_tree_get_changed_ranges_wasm=wasmExports.ts_tree_get_changed_ranges_wasm,Module._ts_tree_cursor_new_wasm=wasmExports.ts_tree_cursor_new_wasm,Module._ts_tree_cursor_copy_wasm=wasmExports.ts_tree_cursor_copy_wasm,Module._ts_tree_cursor_delete_wasm=wasmExports.ts_tree_cursor_delete_wasm,Module._ts_tree_cursor_reset_wasm=wasmExports.ts_tree_cursor_reset_wasm,Module._ts_tree_cursor_reset_to_wasm=wasmExports.ts_tree_cursor_reset_to_wasm,Module._ts_tree_cursor_goto_first_child_wasm=wasmExports.ts_tree_cursor_goto_first_child_wasm,Module._ts_tree_cursor_goto_last_child_wasm=wasmExports.ts_tree_cursor_goto_last_child_wasm,Module._ts_tree_cursor_goto_first_child_for_index_wasm=wasmExports.ts_tree_cursor_goto_first_child_for_index_wasm,Module._ts_tree_cursor_goto_first_child_for_position_wasm=wasmExports.ts_tree_cursor_goto_first_child_for_position_wasm,Module._ts_tree_cursor_goto_next_sibling_wasm=wasmExports.ts_tree_cursor_goto_next_sibling_wasm,Module._ts_tree_cursor_goto_previous_sibling_wasm=wasmExports.ts_tree_cursor_goto_previous_sibling_wasm,Module._ts_tree_cursor_goto_descendant_wasm=wasmExports.ts_tree_cursor_goto_descendant_wasm,Module._ts_tree_cursor_goto_parent_wasm=wasmExports.ts_tree_cursor_goto_parent_wasm,Module._ts_tree_cursor_current_node_type_id_wasm=wasmExports.ts_tree_cursor_current_node_type_id_wasm,Module._ts_tree_cursor_current_node_state_id_wasm=wasmExports.ts_tree_cursor_current_node_state_id_wasm,Module._ts_tree_cursor_current_node_is_named_wasm=wasmExports.ts_tree_cursor_current_node_is_named_wasm,Module._ts_tree_cursor_current_node_is_missing_wasm=wasmExports.ts_tree_cursor_current_node_is_missing_wasm,Module._ts_tree_cursor_current_node_id_wasm=wasmExports.ts_tree_cursor_current_node_id_wasm,Module._ts_tree_cursor_start_position_wasm=wasmExports.ts_tree_cursor_start_position_wasm,Module._ts_tree_cursor_end_position_wasm=wasmExports.ts_tree_cursor_end_position_wasm,Module._ts_tree_cursor_start_index_wasm=wasmExports.ts_tree_cursor_start_index_wasm,Module._ts_tree_cursor_end_index_wasm=wasmExports.ts_tree_cursor_end_index_wasm,Module._ts_tree_cursor_current_field_id_wasm=wasmExports.ts_tree_cursor_current_field_id_wasm,Module._ts_tree_cursor_current_depth_wasm=wasmExports.ts_tree_cursor_current_depth_wasm,Module._ts_tree_cursor_current_descendant_index_wasm=wasmExports.ts_tree_cursor_current_descendant_index_wasm,Module._ts_tree_cursor_current_node_wasm=wasmExports.ts_tree_cursor_current_node_wasm,Module._ts_node_symbol_wasm=wasmExports.ts_node_symbol_wasm,Module._ts_node_field_name_for_child_wasm=wasmExports.ts_node_field_name_for_child_wasm,Module._ts_node_field_name_for_named_child_wasm=wasmExports.ts_node_field_name_for_named_child_wasm,Module._ts_node_children_by_field_id_wasm=wasmExports.ts_node_children_by_field_id_wasm,Module._ts_node_first_child_for_byte_wasm=wasmExports.ts_node_first_child_for_byte_wasm,Module._ts_node_first_named_child_for_byte_wasm=wasmExports.ts_node_first_named_child_for_byte_wasm,Module._ts_node_grammar_symbol_wasm=wasmExports.ts_node_grammar_symbol_wasm,Module._ts_node_child_count_wasm=wasmExports.ts_node_child_count_wasm,Module._ts_node_named_child_count_wasm=wasmExports.ts_node_named_child_count_wasm,Module._ts_node_child_wasm=wasmExports.ts_node_child_wasm,Module._ts_node_named_child_wasm=wasmExports.ts_node_named_child_wasm,Module._ts_node_child_by_field_id_wasm=wasmExports.ts_node_child_by_field_id_wasm,Module._ts_node_next_sibling_wasm=wasmExports.ts_node_next_sibling_wasm,Module._ts_node_prev_sibling_wasm=wasmExports.ts_node_prev_sibling_wasm,Module._ts_node_next_named_sibling_wasm=wasmExports.ts_node_next_named_sibling_wasm,Module._ts_node_prev_named_sibling_wasm=wasmExports.ts_node_prev_named_sibling_wasm,Module._ts_node_descendant_count_wasm=wasmExports.ts_node_descendant_count_wasm,Module._ts_node_parent_wasm=wasmExports.ts_node_parent_wasm,Module._ts_node_child_with_descendant_wasm=wasmExports.ts_node_child_with_descendant_wasm,Module._ts_node_descendant_for_index_wasm=wasmExports.ts_node_descendant_for_index_wasm,Module._ts_node_named_descendant_for_index_wasm=wasmExports.ts_node_named_descendant_for_index_wasm,Module._ts_node_descendant_for_position_wasm=wasmExports.ts_node_descendant_for_position_wasm,Module._ts_node_named_descendant_for_position_wasm=wasmExports.ts_node_named_descendant_for_position_wasm,Module._ts_node_start_point_wasm=wasmExports.ts_node_start_point_wasm,Module._ts_node_end_point_wasm=wasmExports.ts_node_end_point_wasm,Module._ts_node_start_index_wasm=wasmExports.ts_node_start_index_wasm,Module._ts_node_end_index_wasm=wasmExports.ts_node_end_index_wasm,Module._ts_node_to_string_wasm=wasmExports.ts_node_to_string_wasm,Module._ts_node_children_wasm=wasmExports.ts_node_children_wasm,Module._ts_node_named_children_wasm=wasmExports.ts_node_named_children_wasm,Module._ts_node_descendants_of_type_wasm=wasmExports.ts_node_descendants_of_type_wasm,Module._ts_node_is_named_wasm=wasmExports.ts_node_is_named_wasm,Module._ts_node_has_changes_wasm=wasmExports.ts_node_has_changes_wasm,Module._ts_node_has_error_wasm=wasmExports.ts_node_has_error_wasm,Module._ts_node_is_error_wasm=wasmExports.ts_node_is_error_wasm,Module._ts_node_is_missing_wasm=wasmExports.ts_node_is_missing_wasm,Module._ts_node_is_extra_wasm=wasmExports.ts_node_is_extra_wasm,Module._ts_node_parse_state_wasm=wasmExports.ts_node_parse_state_wasm,Module._ts_node_next_parse_state_wasm=wasmExports.ts_node_next_parse_state_wasm,Module._ts_query_matches_wasm=wasmExports.ts_query_matches_wasm,Module._ts_query_captures_wasm=wasmExports.ts_query_captures_wasm,Module._memset=wasmExports.memset,Module._memcpy=wasmExports.memcpy,Module._memmove=wasmExports.memmove,Module._iswalpha=wasmExports.iswalpha,Module._iswblank=wasmExports.iswblank,Module._iswdigit=wasmExports.iswdigit,Module._iswlower=wasmExports.iswlower,Module._iswupper=wasmExports.iswupper,Module._iswxdigit=wasmExports.iswxdigit,Module._memchr=wasmExports.memchr,Module._strlen=wasmExports.strlen,Module._strcmp=wasmExports.strcmp,Module._strncat=wasmExports.strncat,Module._strncpy=wasmExports.strncpy,Module._towlower=wasmExports.towlower,Module._towupper=wasmExports.towupper;var _setThrew=wasmExports.setThrew,__emscripten_stack_restore=wasmExports._emscripten_stack_restore,__emscripten_stack_alloc=wasmExports._emscripten_stack_alloc,_emscripten_stack_get_current=wasmExports.emscripten_stack_get_current;wasmExports.__wasm_apply_data_relocs,Module.setValue=setValue,Module.getValue=getValue,Module.UTF8ToString=UTF8ToString,Module.stringToUTF8=stringToUTF8,Module.lengthBytesUTF8=lengthBytesUTF8,Module.AsciiToString=AsciiToString,Module.stringToUTF16=stringToUTF16,Module.loadWebAssemblyModule=loadWebAssemblyModule;function callMain(e=[]){var t=resolveGlobalSymbol("main").sym;if(t){e.unshift(thisProgram);var r=e.length,n=stackAlloc((r+1)*4),a=n;e.forEach(l=>{LE_HEAP_STORE_U32((a>>2)*4,stringToUTF8OnStack(l)),a+=4}),LE_HEAP_STORE_U32((a>>2)*4,0);try{var o=t(r,n);return exitJS(o,!0),o}catch(l){return handleException(l)}}}__name(callMain,"callMain");function run(e=arguments_){if(runDependencies>0){dependenciesFulfilled=run;return}if(preRun(),runDependencies>0){dependenciesFulfilled=run;return}function t(){var n;if(Module.calledRun=!0,!ABORT){initRuntime(),preMain(),readyPromiseResolve(Module),(n=Module.onRuntimeInitialized)==null||n.call(Module);var r=Module.noInitialRun;r||callMain(e),postRun()}}__name(t,"doRun"),Module.setStatus?(Module.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>Module.setStatus(""),1),t()},1)):t()}if(__name(run,"run"),Module.preInit)for(typeof Module.preInit=="function"&&(Module.preInit=[Module.preInit]);Module.preInit.length>0;)Module.preInit.pop()();return run(),moduleRtn=readyPromise,moduleRtn}})(),tree_sitter_default=Module2,Module3=null;async function initializeBinding(s){return Module3||(Module3=await tree_sitter_default(s)),Module3}__name(initializeBinding,"initializeBinding");function checkModule(){return!!Module3}__name(checkModule,"checkModule");var TRANSFER_BUFFER,LANGUAGE_VERSION,MIN_COMPATIBLE_VERSION,q,Parser=(q=class{constructor(){f(this,0,0);f(this,1,0);f(this,"logCallback",null);f(this,"language",null);this.initialize()}static async init(e){setModule(await initializeBinding(e)),TRANSFER_BUFFER=C._ts_init(),LANGUAGE_VERSION=C.getValue(TRANSFER_BUFFER,"i32"),MIN_COMPATIBLE_VERSION=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32")}initialize(){if(!checkModule())throw new Error("cannot construct a Parser before calling `init()`");C._ts_parser_new_wasm(),this[0]=C.getValue(TRANSFER_BUFFER,"i32"),this[1]=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32")}delete(){C._ts_parser_delete(this[0]),C._free(this[1]),this[0]=0,this[1]=0}setLanguage(e){let t;if(!e)t=0,this.language=null;else if(e.constructor===Language){t=e[0];const r=C._ts_language_version(t);if(r<MIN_COMPATIBLE_VERSION||LANGUAGE_VERSION<r)throw new Error(`Incompatible language version ${r}. Compatibility range ${MIN_COMPATIBLE_VERSION} through ${LANGUAGE_VERSION}.`);this.language=e}else throw new Error("Argument must be a Language");return C._ts_parser_set_language(this[0],t),this}parse(e,t,r){if(typeof e=="string")C.currentParseCallback=_=>e.slice(_);else if(typeof e=="function")C.currentParseCallback=e;else throw new Error("Argument must be a string or a function");r!=null&&r.progressCallback?C.currentProgressCallback=r.progressCallback:C.currentProgressCallback=null,this.logCallback?(C.currentLogCallback=this.logCallback,C._ts_parser_enable_logger_wasm(this[0],1)):(C.currentLogCallback=null,C._ts_parser_enable_logger_wasm(this[0],0));let n=0,a=0;if(r!=null&&r.includedRanges){n=r.includedRanges.length,a=C._calloc(n,SIZE_OF_RANGE);let _=a;for(let u=0;u<n;u++)marshalRange(_,r.includedRanges[u]),_+=SIZE_OF_RANGE}const o=C._ts_parser_parse_wasm(this[0],this[1],t?t[0]:0,a,n);if(!o)return C.currentParseCallback=null,C.currentLogCallback=null,C.currentProgressCallback=null,null;if(!this.language)throw new Error("Parser must have a language to parse");const l=new Tree(INTERNAL,o,this.language,C.currentParseCallback);return C.currentParseCallback=null,C.currentLogCallback=null,C.currentProgressCallback=null,l}reset(){C._ts_parser_reset(this[0])}getIncludedRanges(){C._ts_parser_included_ranges_wasm(this[0]);const e=C.getValue(TRANSFER_BUFFER,"i32"),t=C.getValue(TRANSFER_BUFFER+SIZE_OF_INT,"i32"),r=new Array(e);if(e>0){let n=t;for(let a=0;a<e;a++)r[a]=unmarshalRange(n),n+=SIZE_OF_RANGE;C._free(t)}return r}getTimeoutMicros(){return C._ts_parser_timeout_micros(this[0])}setTimeoutMicros(e){C._ts_parser_set_timeout_micros(this[0],0,e)}setLogger(e){if(!e)this.logCallback=null;else{if(typeof e!="function")throw new Error("Logger callback must be a function");this.logCallback=e}return this}getLogger(){return this.logCallback}},__name(q,"Parser"),q);const treeSitterWasm=""+new URL("../assets/tree-sitter.DJ2BG7o-.wasm",import.meta.url).href,treeSitterCabin=""+new URL("../assets/tree-sitter-cabin.Cf3bXaGE.wasm",import.meta.url).href,treeSitterCabinHighlights=`; Keywords
(declaration ["let"] @keyword)
(if_expression ["if" "otherwise"] @keyword)
(group ["group"] @keyword)
(either ["either"] @keyword)
(function ["action"] @keyword.function)
(object_constructor ["new"] @keyword)
(extend ["tobe" "extensionof"] @keyword)
(goto ["is"] @keyword)
(foreach ["foreach" "in"] @keyword)
(while_loop ["while"] @keyword)
(binary ["and" "or"] @keyword)
(match ["match" "otherwise"] @keyword)
(function_call ["let"] @keyword)
(run ["run"] @keyword)

; Semantics
(type (expression (literal (identifier))) @type)
(goto label: (identifier) @label)
(group_parameter name: (identifier) @type)
(function_call callee: (expression (literal (identifier))) @function.call)
(function_call
	callee: (expression (binary operator: "." right: (identifier) @function.call))
	(#set! "priority" 110)
)
(function_call
	callee: (expression (binary operator: "::" right: (identifier) @function.call))
	(#set! "priority" 110)
)
(binary operator: "." right: (identifier) @variable.member)
(binary operator: "::" right: (identifier) @variable.member)
(parameter name: (identifier) @variable.parameter)
(group_field name: (identifier) @variable.member)
(group_field
	name: (identifier) @function
	value: (expression (literal (function)))
)
(group_field
	name: (identifier) @function
	type: (type (expression (literal (function))))
)
(object_constructor type: (identifier) @type)
(object_value name: (identifier) @variable.member)
(object_value
	name: (identifier) @function
	value: (expression (literal (function)))
)
(declaration
	name: (identifier) @type
	value: (expression (literal (group)))
)
(declaration
	name: (identifier) @type
	value: (expression (literal (either)))
)
(declaration
	name: (identifier) @type
	value: (expression (literal (extend)))
)
(declaration
	name: (identifier) @function
	value: (expression (literal (function)))
)
(either_variant name: (identifier) @lsp.type.enumMember)

(expression (literal (identifier (other_identifier))) @boolean (#any-of? @boolean "true" "false"))
(expression (literal (identifier (other_identifier))) @constant.builtin (#any-of? @constant.builtin "nothing" "library"))
(expression (literal (identifier (other_identifier))) @variable (#not-any-of? @variable "true" "false" "nothing" "library"))

; Brackets
["(" ")" "[" "]" "{" "}" "<" ">"] @punctuation.bracket
[";" ":" "," "." "=>" "::"] @punctuation.delimiter
["+" "-" "*" "/" "^" "==" "!=" "<=" ">=" "< " " >" "="] @operator
(tag ["#"] @punctuation.special)

; Tokens
(number) @number
(string) @string
(raw_string) @string
(comment) @comment
(pascal_case_identifier) @type
`,treeSitterLua=""+new URL("../assets/tree-sitter-lua.C4ILXnwP.wasm",import.meta.url).href,treeSitterLuaHighlights=`;;; Highlighting for lua

;;; Builtins
;; Keywords

[(if_start)
 (if_then)
 (if_elseif)
 (if_else)
 (if_end)] @keyword.conditional

[(for_start)
 (for_in)
 (for_do)
 (for_end)] @keyword.repeat

[(while_start)
 (while_do)
 (while_end)] @keyword.repeat

[(repeat_start)
 (repeat_until)] @keyword.repeat

(break_statement) @keyword.repeat

[(return_statement)
 (module_return_statement)] @keyword.return

[(do_start)
 (do_end)] @keyword

; [
;  "goto"
; ] @keyword

;; Operators

; TODO: I think I've made a bunch of these nodes.
;   we might be able to just use those!

[
 "not"
 "and"
 "or"] @keyword.operator

["="
 "~="
 "=="
 "<="
 ">="
 "<"
 ">"
 "+"
 "-"
 "%"
 "/"
 "//"
 "*"
 "^"
 "&"
 "~"
 "|"
 ">>"
 "<<"
 ".."
 "#"] @operator



;; Punctuation
["," "."] @punctuation.delimiter

;; Brackets
[(left_paren)
 (right_paren)
 "["
 "]"
 "{"
 "}"] @punctuation.bracket

;; Variables
(identifier) @variable
(
  (identifier) @variable.builtin
  (#match? @variable.builtin "self"))

; (preproc_call
;   directive: (preproc_directive) @_u
;   argument: (_) @constant
;   (#eq? @_u "#undef"))

;; Constants
(boolean) @boolean
(nil) @constant.builtin
(ellipsis) @constant ;; "..."
(local) @keyword

;; Functions
(function_call_paren) @function.bracket

[
  (function_start)
  (function_end)] @keyword.function

(emmy_type) @type
(emmy_literal) @string
(emmy_parameter
 (identifier) @parameter
 description: (_)? @comment) @comment

(emmy_class) @comment
(emmy_field name: (_) @property) @comment
(emmy_function_parameter
  name: (_) @parameter) 

(emmy_type_dictionary_value key: (identifier) @property)

(emmy_note) @comment
(emmy_see) @comment

; TODO: Make the container so we can still highlight the beginning of the line
; (emmy_eval_container) @comment
; (_emmy_eval_container) @comment

(emmy_return) @comment

; TODO: returns

(emmy_header) @comment
(emmy_ignore) @comment
(documentation_brief) @comment

(documentation_command) @comment

(function_call
  [
    ((identifier)+ @identifier . (identifier) @function.call . (function_call_paren))
    ((identifier) @function.call.lua . (function_call_paren))])

(function_call
  prefix: (identifier) @function.call.lua
  args: (string_argument) @string)

(function_call
 prefix: (identifier) @function.call.lua
 args: (table_argument))

; (function [(function_name) (identifier)] @function)
; (function ["function" "end"] @keyword.function)
; (local_function [(function_name) (identifier)] @function)
; (local_function ["function" "end"] @keyword.function)
; (function_definition ["function" "end"] @keyword.function)

; TODO: Do I have replacements for these.
; (property_identifier) @property
; (method) @method

; (function_call (identifier) @function . (arguments))
; (function_call (field (property_identifier) @function) . (arguments))

;; Parameters
; (parameters (identifier) @parameter)

;; Nodes
; (table ["{" "}"] @constructor)
(comment) @comment
(string) @string
(number) @number
; (label_statement) @label

;; Error
(ERROR) @error
`,treeSitterBash=""+new URL("../assets/tree-sitter-bash.DO69BDzR.wasm",import.meta.url).href,treeSitterBashHighlights=`[
  (string)
  (raw_string)
  (heredoc_body)
  (heredoc_start)
] @string

(command_name) @function

(variable_name) @property

[
  "case"
  "do"
  "done"
  "elif"
  "else"
  "esac"
  "export"
  "fi"
  "for"
  "function"
  "if"
  "in"
  "select"
  "then"
  "unset"
  "until"
  "while"
] @keyword

(comment) @comment

(function_definition name: (word) @function)

(file_descriptor) @number

[
  (command_substitution)
  (process_substitution)
  (expansion)
]@embedded

[
  "$"
  "&&"
  ">"
  ">>"
  "<"
  "|"
] @operator

(
  (command (_) @constant)
  (#match? @constant "^-")
)
`,treeSitterEbnf=""+new URL("../assets/tree-sitter-ebnf.BwnQMpAj.wasm",import.meta.url).href,treeSitterEbnfHighlights=`;;;; Simple tokens ;;;;
(terminal) @string.grammar

(special_sequence) @string.special.grammar

(integer) @number

(comment) @comment.block

;;;; Identifiers ;;;;
(identifier) @symbol.grammar

; Allow different highlighting for specific casings
((identifier) @symbol.grammar.pascal
 (#match? @symbol.grammar.pascal "^[A-Z]"))

((identifier) @symbol.grammar.camel
 (#match? @symbol.grammar.camel "^[a-z]"))

((identifier) @symbol.grammar.upper
 (#match? @symbol.grammar.upper "^[A-Z][A-Z0-9_]+$"))

((identifier) @symbol.grammar.lower
 (#match? @symbol.grammar.lower "^[a-z][a-z0-9_]+$"))

;;; Punctuation ;;;;
[
 ";"
 ","
] @punctuation.delimiter

[
 "|"
 "*"
 "-"
] @operator

"=" @keyword.operator

[
 "("
 ")"
 "["
 "]"
 "{"
 "}"
] @punctuation.bracket
`,treeSitterJs=""+new URL("../assets/tree-sitter-javascript.Bff9toxj.wasm",import.meta.url).href,treeSitterJsHighlights=`; Variables
;----------

(identifier) @variable

; Properties
;-----------

(property_identifier) @property

; Function and method definitions
;--------------------------------

(function_expression
  name: (identifier) @function)
(function_declaration
  name: (identifier) @function)
(method_definition
  name: (property_identifier) @function.method)

(pair
  key: (property_identifier) @function.method
  value: [(function_expression) (arrow_function)])

(assignment_expression
  left: (member_expression
    property: (property_identifier) @function.method)
  right: [(function_expression) (arrow_function)])

(variable_declarator
  name: (identifier) @function
  value: [(function_expression) (arrow_function)])

(assignment_expression
  left: (identifier) @function
  right: [(function_expression) (arrow_function)])

; Function and method calls
;--------------------------

(call_expression
  function: (identifier) @function)

(call_expression
  function: (member_expression
    property: (property_identifier) @function.method))

; Special identifiers
;--------------------

((identifier) @constructor
 (#match? @constructor "^[A-Z]"))

([
    (identifier)
    (shorthand_property_identifier)
    (shorthand_property_identifier_pattern)
 ] @constant
 (#match? @constant "^[A-Z_][A-Z\\\\d_]+$"))

((identifier) @variable.builtin
 (#match? @variable.builtin "^(arguments|module|console|window|document)$")
 (#is-not? local))

((identifier) @function.builtin
 (#eq? @function.builtin "require")
 (#is-not? local))

; Literals
;---------

(this) @variable.builtin
(super) @variable.builtin

[
  (true)
  (false)
  (null)
  (undefined)
] @constant.builtin

(comment) @comment

[
  (string)
  (template_string)
] @string

(regex) @string.special
(number) @number

; Tokens
;-------

[
  ";"
  (optional_chain)
  "."
  ","
] @punctuation.delimiter

[
  "-"
  "--"
  "-="
  "+"
  "++"
  "+="
  "*"
  "*="
  "**"
  "**="
  "/"
  "/="
  "%"
  "%="
  "<"
  "<="
  "<<"
  "<<="
  "="
  "=="
  "==="
  "!"
  "!="
  "!=="
  "=>"
  ">"
  ">="
  ">>"
  ">>="
  ">>>"
  ">>>="
  "~"
  "^"
  "&"
  "|"
  "^="
  "&="
  "|="
  "&&"
  "||"
  "??"
  "&&="
  "||="
  "??="
] @operator

[
  "("
  ")"
  "["
  "]"
  "{"
  "}"
]  @punctuation.bracket

(template_substitution
  "\${" @punctuation.special
  "}" @punctuation.special) @embedded

[
  "as"
  "async"
  "await"
  "break"
  "case"
  "catch"
  "class"
  "const"
  "continue"
  "debugger"
  "default"
  "delete"
  "do"
  "else"
  "export"
  "extends"
  "finally"
  "for"
  "from"
  "function"
  "get"
  "if"
  "import"
  "in"
  "instanceof"
  "let"
  "new"
  "of"
  "return"
  "set"
  "static"
  "switch"
  "target"
  "throw"
  "try"
  "typeof"
  "var"
  "void"
  "while"
  "with"
  "yield"
] @keyword
`,treeSitterBnf="data:application/wasm;base64,AGFzbQEAAAAAEAhkeWxpbmsuMAEFvAoEAQABHAZgAABgAAF/YAJ/fwF/YAF/AX9gAX8AYAJ/fwACWgQDZW52DV9fbWVtb3J5X2Jhc2UDfwADZW52DF9fdGFibGVfYmFzZQN/AANlbnYGbWVtb3J5AgABA2VudhlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAXAAAQMFBAAAAQIHQgMRX193YXNtX2NhbGxfY3RvcnMAAA90cmVlX3NpdHRlcl9ibmYAAhhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAQkHAQAjAQsBAwwBAQqJBwQDAAELngMBAX8jAEH4CGojAEGgBGo2AgAjAEH8CGojADYCACMAQYAJaiMAQYABajYCACMAQYQJaiMAQZAGajYCACMAQYgJaiMAQYAKaiIANgIAIwBBmAlqIwBBoAFqNgIAIwBBnAlqIwBB0AFqNgIAIwBBoAlqIwBB7gFqNgIAIwBBpAlqIwBB8AFqNgIAIwBBqAlqIwBBgAJqNgIAIwBBrAlqIwE2AgAjAEHUCWojAEHgAmo2AgAjAEHYCWojAEGgA2o2AgAgACMAQcgDajYCACMAQYQKaiMAQcwDajYCACMAQYgKaiMAQf4CajYCACMAQYwKaiMAQaQDajYCACMAQZAKaiMAQYgEajYCACMAQZQKaiMAQdADajYCACMAQZgKaiMAQYADajYCACMAQZwKaiMAQbwDajYCACMAQaAKaiMAQYYDajYCACMAQaQKaiMAQbcDajYCACMAQagKaiMAQa4DajYCACMAQawKaiMAQZEDajYCACMAQbAKaiMAQZkDajYCACMAQbQKaiMAQfQDajYCACMAQbgKaiMAQd4DajYCAAsIACMAQdAIagvZAwEEfwNAIAAoAgAhAkECIQRBACEDIAAgACgCGBEDACEFAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCABQf//A3EODgABAgMEBQYLDA0HCAkKDgsgBQRAQQchAQwQCyACQSZMBEACQCACQQlrQQVJDQBBASEBIAJBIGsOAwAPEQ8LQQEhA0EAIQEMEAsCQAJAAkAgAkH7AEwEQAJAIAJBOmsOAwISAwALIAJBJ0cNEQwSCyACQfwARg0CIAJBtQdHDRBBDSEBDBILQQMhAQwRC0EGIQEMEAtBCSEBDA8LIAJBIkYEQEELIQEMDwsgAkUNDEEBIQEMDgsgAkEnRgRAQQwhAQwOCyACDQwMCwsgAkE6Rw0KQQQhAQwMCyACQT1HDQlBCCEBDAsLIAJBPkYEQEEKIQEMCwtBBSEBIAJBMGtBCkkNCiACQd8ARiACQV9xQcEAa0EaSXINCgwIC0EFIQEgAkHfAEYgAkFfcUHBAGtBGklyDQkMBwtBAyEEDAULQQQhBAwEC0EFIQQMAwtBBiEEDAILQQAhBAwBC0EBIQQLIAAgBDsBBCAAIAAoAgwRBABBASEDCyADDwtBAiEBCyAAIAMgACgCCBEFAAwACwALC8MKAQAjAAu8CgEAFwAGAAAAAgADAAQABQAGAAEAGQAGAAAAAgADAAQABQAGAAEAGwAGAAAAAgADAAQABQAGAAMABQABAAMAHQABAAAADAACAAgADQADAB8AAQAAACEAAQADAAwAAgAIAA0AAQAkAAEAAQABACYAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAASAAAAGwAAACYAAAAxAAAANQAAAAAAAAAAAQABAAABAAABAQAAAAAAAAABAQABAQABAQABAQABAQABAQABAQAAAAAAAAAAAAAAAAEAAgADAAQABQAGAAcACAAJAAoACwAMAA0ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAgADAAQABQAGAAcACAAJAAoACwAMAA0ADgB8AGVtcHR5AGRlZmluaXRpb24AbGl0ZXJhbABzdHJpbmcAYm5mAHJ1bGVfbmFtZQBjb21wb3VuZF9ydWxlAHNvdXJjZV9maWxlAGVuZAA6Oj0Ac3RyaW5nX3Rva2VuMgBjb21wb3VuZF9ydWxlX3JlcGVhdDEAc291cmNlX2ZpbGVfcmVwZWF0MQBzdHJpbmdfdG9rZW4xAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAFAAAAAAAAAA4ACwAAAAAAAAAAAAsAAAAHAAAABwAHAAcABwAHAAAAAAADAAoACgAIAAAABAAHAAAABwAHAAcABwAHAAAAAAADAAoACgAIAAAABAAJAAAACQAJAAkACQAJAAAAAAADAAoACgAIAAAABgAHAAAABwAHAAcABwAHAAAAAAADAAoACgAIAAAABAALAAAACwANABAAEAANAAAAAAADAAoACgAIAAAABgAAAAAAAAATABUAFQATAAAAAAACAAoACgAIAAAAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAAAAAABAQAAAAAAAAEABwAAAAAAAQEAAAAAAAAAAA0AAAAAAAEBAAAAAAAAAQEKAAAAAAABAQAAAAAAAAECCgAAAAAAAQEAAAAAAAABAg4AAAAAAAIBAAAAAAAAAQIOAAAAAAAAAAgAAAEAAAIBAAAAAAAAAQIOAAAAAAAAAAkAAAEAAAEBAAAAAAAAAAAIAAAAAAABAQAAAAAAAAAACQAAAAAAAQEAAAAAAAABAQsAAAAAAAEBAAAAAAAAAQEMAAAAAAABAQAAAAAAAAEBCQAAAAAAAQEAAAAAAAABAQcAAAAAAAEBAAAAAAAAAQINAAAAAAACAQAAAAAAAAECDQAAAAAAAAANAAABAAABAQAAAAAAAAAABwAAAAAAAQEAAAAAAAACAAAAAAAAAA8AAAAPAAAAAAAAAAcAAAAAAAAADwAAAAgAAAABAAAAAAAAAAMAAAAgAgAAAAAAAIAAAAAQAwAAAAUAAAAAAAAAAAAAAAAAAKAAAADQAAAA7gAAAPAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGABAACgAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAyAEAAMwBAAB+AQAApAEAAAgCAADQAQAAgAEAALwBAACGAQAAtwEAAK4BAACRAQAAmQEAAPQBAADeAQAA",treeSitterBnfHighlights=`(string) @string
(rule_name) @symbol.grammar
["|" "::="] @punctuation
`;var root$2=ns_template('<svg><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z"></path><path d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z"></path></g></svg>');function CopyIcon(s,e){let t=rest_props(e,["$$slots","$$events","$$legacy","stroke"]);var r=root$2();let n;var a=sibling(child(r),2),o=child(a),l=sibling(o);reset(a),reset(r),template_effect(()=>{n=set_attributes(r,n,{...t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",transform:"matrix(-1, 0, 0, 1, 0, 0)"},void 0,!0),set_attribute(o,"fill",e.stroke),set_attribute(l,"fill",e.stroke)}),append(s,r)}var root$1=ns_template('<svg><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>');function CheckIcon(s,e){let t=rest_props(e,["$$slots","$$events","$$legacy","stroke"]);var r=root$1();let n;var a=sibling(child(r),2),o=child(a);reset(a),reset(r),template_effect(()=>{n=set_attributes(r,n,{...t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},void 0,!0),set_attribute(o,"stroke",e.stroke)}),append(s,r)}function copy(s,e,t,r){e&&(window.navigator.clipboard.writeText(get(t)),set(r,!0),setTimeout(()=>set(r,!1),1500))}function run(s,e,t){e&&set(t,proxy(e))}var root_1=template("<pre><!></pre>"),root_6=template('<button style="width: 2rem; height: 2rem; z-index: 999; position: absolute; top: 0px; right: 1.5rem; padding: 0px;" title="click to run"><!></button>'),root_7=template('<button style="width: 2rem; height: 2rem; z-index: 999; position: absolute; top: 0px; right: 0px; padding: 0px;" title="click to copy"><!></button>'),on_click=(s,e)=>set(e,null),root_10=template('<p>Output:</p> <code class="block svelte-1tz0mg0"><pre></pre> <button style="width: 2rem; height: 2rem; z-index: 999; position: absolute; top: 0px; right: 0px; padding: 0px;" title="hide output"><!></button></code>',1),root=template('<div class="svelte-1tz0mg0"><code><!> <!> <!></code> <!></div>');function Snippet(s,e){push(e,!0);const t={lua:{wasm:treeSitterLua,highlights:treeSitterLuaHighlights},cabin:{wasm:treeSitterCabin,highlights:treeSitterCabinHighlights},bash:{wasm:treeSitterBash,highlights:treeSitterBashHighlights},ebnf:{wasm:treeSitterEbnf,highlights:treeSitterEbnfHighlights},bnf:{wasm:treeSitterBnf,highlights:treeSitterBnfHighlights},javascript:{wasm:treeSitterJs,highlights:treeSitterJsHighlights},js:{wasm:treeSitterJs,highlights:treeSitterJsHighlights}},r=e.children,n=proxy(e.code),a=proxy(e.language),o=e.inline,l=e.height,_=derived(()=>e.input),u=e.copyable??!!n,d=e.output?g(e.output):null,m=!!d;async function h(A,v){const M={variable:{highlight:"#cdd6f4"},"keyword.return":{highlight:"#cba6f7",child:0},"keyword.conditional":{highlight:"#cba6f7"},"keyword.function":{highlight:"#cba6f7"},keyword:{highlight:"#cba6f7"},"string.grammar":{highlight:"#cba6f7"},number:{highlight:"#fab387"},boolean:{highlight:"#fab387"},"lsp.type.enumMember":{highlight:"#fab387"},"constant.builtin":{highlight:"#fab387"},"function.call":{highlight:"#89b4fa"},"function.method":{highlight:"#89b4fa"},"function.call.lua":{highlight:"#89b4fa"},function:{highlight:"#89b4fa"},"variable.member":{highlight:"#b4befe"},property:{highlight:"#b4befe"},type:{highlight:"#f9e2af"},"symbol.grammar":{highlight:"#f9e2af"},"symbol.grammar.camel":{highlight:"#f9e2af"},"symbol.grammar.lower":{highlight:"#f9e2af"},string:{highlight:"#a6e3a1"},"variable.parameter":{highlight:"#eba0ac"},"variable.builtin":{highlight:"#f38ba8"},"punctuation.special":{highlight:"#f5c2e7"},"string.special":{highlight:"#f5c2e7"},"string.special.grammar":{highlight:"#f5c2e7"},label:{highlight:"#74c7ec"},"punctuation.bracket":{highlight:"#9399b2"},punctuation:{highlight:"#9399b2"},"punctuation.delimiter":{highlight:"#9399b2"},operator:{highlight:"#9399b2"},comment:{highlight:"#9399b2"},"keyword.operator":{highlight:"#9399b2"},"comment.block":{highlight:"#9399b2"}},P=t[v];if(P)try{await Parser.init({locateFile(){return`${import.meta.url.substring(0,import.meta.url.lastIndexOf("/")).replace(".svelte-kit/output/server/chunks","build")}${treeSitterWasm}`.replace(/.*chunkshttp/,"http")}});const S=new Parser,F=await Language.load(P.wasm);S.setLanguage(F);const k=S.parse(A,null);console.log(k.rootNode.toString());const z=[];new Query(F,P.highlights).matches(k.rootNode).forEach(B=>{B.captures.forEach(U=>{const K=U.node.startIndex,X=U.name,re=M[X];if(re){const{highlight:ae,child:ne}=re,se=ne!==void 0?U.node.children[ne].endIndex-1:U.node.endIndex-1;z.push({name:ae,start:K,end:se})}else console.warn(`No highlight group for ${X}`)})});let O="",H=null,ee=1;const _e=1;for(let B=0;B<A.length;B++){let U=z.find(X=>X.start==B);U&&(z.shift(),O+=`<span style="color: ${U.name};">`,H=U.end);const K=A.charAt(B);K==="<"?O+="&lt;":K===">"?O+="&gt;":O+=K,A.charAt(B)===`
`&&get(_)&&ee++,H!==null&&B===H&&(O+="</span>")}return O=O.replaceAll(/^(    )+/gm,B=>'<span style="color: #45475a;">│</span>   '.repeat(B.length/4)),O}catch(S){return console.error(S),A.replaceAll("<","&lt;").replaceAll(">","&gt;")}return A}function g(A){A=A.replace(/^[\r\n]+/g,"").replace(/[\r\n]+\s*$/g,"").replace(/\t/g,"    ");const v=/^[^ \n\r]/m.test(A)?0:Math.min(...[...A.match(/^ +/gm)??[]].map(M=>M.length));return A.replace(new RegExp(`^ {${v}}`,"gm"),"")}const y=derived(()=>n?g(n):null),w=derived(()=>a&&get(y)?h(get(y),a):null);let E=state(!1),b=state(null);var c=root(),I=child(c);set_class(I,1,"svelte-1tz0mg0",null,{},{block:!o}),set_style(I,"height",l);var p=child(I);{var T=A=>{var v=root_1(),M=child(v);{var P=F=>{var k=comment(),z=first_child(k);await_block(z,()=>get(w),null,(te,O)=>{var H=comment(),ee=first_child(H);html(ee,()=>get(O)),append(te,H)}),append(F,k)},S=F=>{var k=text();template_effect(()=>set_text(k,get(y))),append(F,k)};if_block(M,F=>{get(w)?F(P):F(S,!1)})}reset(v),append(A,v)},R=A=>{r(A)};if_block(p,A=>{n?A(T):A(R,!1)})}var N=sibling(p,2);{var x=A=>{var v=root_6();v.__click=[run,d,b];var M=child(v);PlayOutlineIcon(M,{stroke:"#7f849c",style:"width: 100%; height: 100%;"}),reset(v),append(A,v)};if_block(N,A=>{m&&A(x)})}var j=sibling(N,2);{var Y=A=>{var v=root_7();v.__click=[copy,u,y,E];var M=child(v);{var P=F=>{CheckIcon(F,{stroke:"#7f849c",style:"width: 100%; height: 100%;"})},S=F=>{CopyIcon(F,{stroke:"#7f849c",style:"width: 100%; height: 100%;"})};if_block(M,F=>{get(E)?F(P):F(S,!1)})}reset(v),append(A,v)};if_block(j,A=>{u&&A(Y)})}reset(I);var J=sibling(I,2);{var $=A=>{var v=root_10(),M=sibling(first_child(v),2),P=child(M);P.textContent=d;var S=sibling(P,2);S.__click=[on_click,b];var F=child(S);CloseIcon(F,{stroke:"#7f849c",style:"width: 100%; height: 100%;"}),reset(S),reset(M),append(A,v)};if_block(J,A=>{get(b)&&A($)})}reset(c),append(s,c),pop()}delegate(["click"]);export{Snippet as S,html as h};
