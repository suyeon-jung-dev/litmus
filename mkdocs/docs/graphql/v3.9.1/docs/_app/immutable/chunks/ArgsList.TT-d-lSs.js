import{s as I,q as E,l as b,n as ie,d as _,t as O,j as P,o as W,E as oe,v as ne,e as q,b as C,f as F,g as Q,c as V,k as B,z as T,y as se,m as U,A as R,F as ae,G as fe,H as ue,r as Se,u as ce,a1 as De,w as Le,x as X,D as Ae,a2 as we,L as Ee,a3 as Oe}from"./scheduler.Cv5B47c7.js";import{S as G,i as J,t as u,b as m,c as N,a as S,m as D,d as L,g as K,e as z}from"./index.vZbmHwdQ.js";import{i as Pe,s as je,m as Re,u as Z,n as x,o as Ue,K as M,q as ee,r as pe,t as Be,v as Ce,w as Ve,x as Ie,y as Ge,_ as Je}from"./pages.KzsM3_cV.js";import{T as te,S as Me,a as qe,b as Fe,c as Ke,C as ze}from"./PreviousNextPage.CJhryh0_.js";import{L as He}from"./ChevronDown.BBOhIkAu.js";function Qe(i){let t=(i[0]??"-")+"",l;return{c(){l=O(t)},l(e){l=P(e,t)},m(e,n){b(e,l,n)},p(e,n){n&1&&t!==(t=(e[0]??"-")+"")&&W(l,t)},d(e){e&&_(l)}}}function We(i){let t=JSON.stringify(i[0],null,2)+"",l;return{c(){l=O(t)},l(e){l=P(e,t)},m(e,n){b(e,l,n)},p(e,n){n&1&&t!==(t=JSON.stringify(e[0],null,2)+"")&&W(l,t)},d(e){e&&_(l)}}}function Xe(i){let t,l,e;return{c(){t=O('"'),l=O(i[0]),e=O('"')},l(n){t=P(n,'"'),l=P(n,i[0]),e=P(n,'"')},m(n,r){b(n,t,r),b(n,l,r),b(n,e,r)},p(n,r){r&1&&W(l,n[0])},d(n){n&&(_(t),_(l),_(e))}}}function Ye(i){let t;function l(r,o){return typeof r[0]=="string"?Xe:typeof r[0]=="object"?We:Qe}let e=l(i),n=e(i);return{c(){n.c(),t=E()},l(r){n.l(r),t=E()},m(r,o){n.m(r,o),b(r,t,o)},p(r,[o]){e===(e=l(r))&&n?n.p(r,o):(n.d(1),n=e(r),n&&(n.c(),n.m(t.parentNode,t)))},i:ie,o:ie,d(r){r&&_(t),n.d(r)}}}function Ze(i,t,l){let{value:e}=t;return i.$$set=n=>{"value"in n&&l(0,e=n.value)},[e]}class xe extends G{constructor(t){super(),J(this,t,Ze,Ye,I,{value:0})}}const et=i=>({}),me=i=>({});function tt(i){let t;return{c(){t=O(i[2])},l(l){t=P(l,i[2])},m(l,e){b(l,t,e)},p(l,e){e&4&&W(t,l[2])},d(l){l&&_(t)}}}function nt(i){let t,l,e,n,r,o,s;const a=i[10].default,f=oe(a,i,i[9],null),w=i[10].tooltip,p=oe(w,i,i[9],me),$=p||tt(i);let A=[i[8]],j={};for(let c=0;c<A.length;c+=1)j=ne(j,A[c]);return{c(){t=q("span"),l=q("button"),f&&f.c(),e=C(),n=q("div"),$&&$.c(),this.h()},l(c){t=F(c,"SPAN",{});var h=Q(t);l=F(h,"BUTTON",{type:!0,"aria-describedby":!0});var k=Q(l);f&&f.l(k),k.forEach(_),e=V(h),n=F(h,"DIV",{role:!0,id:!0});var y=Q(n);$&&$.l(y),y.forEach(_),h.forEach(_),this.h()},h(){B(l,"type","button"),B(l,"aria-describedby",i[5]),T(l,"bx--tooltip--a11y",!0),T(l,"bx--tooltip__trigger",!0),T(l,"bx--tooltip__trigger--definition",!0),T(l,"bx--tooltip--hidden",!i[0]),T(l,"bx--tooltip--visible",i[0]),T(l,"bx--tooltip--top",i[4]==="top"),T(l,"bx--tooltip--bottom",i[4]==="bottom"),T(l,"bx--tooltip--align-start",i[3]==="start"),T(l,"bx--tooltip--align-center",i[3]==="center"),T(l,"bx--tooltip--align-end",i[3]==="end"),B(n,"role","tooltip"),B(n,"id",i[5]),T(n,"bx--assistive-text",!0),se(t,j),T(t,"bx--tooltip--definition",!0),T(t,"bx--tooltip--a11y",!0)},m(c,h){b(c,t,h),U(t,l),f&&f.m(l,null),i[17](l),U(t,e),U(t,n),$&&$.m(n,null),r=!0,o||(s=[R(window,"keydown",i[16]),R(l,"click",i[11]),R(l,"mouseover",i[12]),R(l,"mouseenter",i[13]),R(l,"mouseleave",i[14]),R(l,"focus",i[15]),R(l,"focus",i[7]),R(l,"blur",i[6]),R(t,"mouseenter",i[7]),R(t,"mouseleave",i[6])],o=!0)},p(c,[h]){f&&f.p&&(!r||h&512)&&ae(f,a,c,c[9],r?ue(a,c[9],h,null):fe(c[9]),null),(!r||h&32)&&B(l,"aria-describedby",c[5]),(!r||h&1)&&T(l,"bx--tooltip--hidden",!c[0]),(!r||h&1)&&T(l,"bx--tooltip--visible",c[0]),(!r||h&16)&&T(l,"bx--tooltip--top",c[4]==="top"),(!r||h&16)&&T(l,"bx--tooltip--bottom",c[4]==="bottom"),(!r||h&8)&&T(l,"bx--tooltip--align-start",c[3]==="start"),(!r||h&8)&&T(l,"bx--tooltip--align-center",c[3]==="center"),(!r||h&8)&&T(l,"bx--tooltip--align-end",c[3]==="end"),p?p.p&&(!r||h&512)&&ae(p,w,c,c[9],r?ue(w,c[9],h,et):fe(c[9]),me):$&&$.p&&(!r||h&4)&&$.p(c,r?h:-1),(!r||h&32)&&B(n,"id",c[5]),se(t,j=Pe(A,[h&256&&c[8]])),T(t,"bx--tooltip--definition",!0),T(t,"bx--tooltip--a11y",!0)},i(c){r||(u(f,c),u($,c),r=!0)},o(c){m(f,c),m($,c),r=!1},d(c){c&&_(t),f&&f.d(c),i[17](null),$&&$.d(c),o=!1,Se(s)}}}function lt(i,t,l){const e=["tooltipText","open","align","direction","id","ref"];let n=ce(t,e),{$$slots:r={},$$scope:o}=t,{tooltipText:s=""}=t,{open:a=!1}=t,{align:f="center"}=t,{direction:w="bottom"}=t,{id:p="ccs-"+Math.random().toString(36)}=t,{ref:$=null}=t;const A=De(),j=()=>l(0,a=!1),c=()=>l(0,a=!0);function h(g){X.call(this,i,g)}function k(g){X.call(this,i,g)}function y(g){X.call(this,i,g)}function d(g){X.call(this,i,g)}function v(g){X.call(this,i,g)}const H=({key:g})=>{g==="Escape"&&j()};function Y(g){Ae[g?"unshift":"push"](()=>{$=g,l(1,$)})}return i.$$set=g=>{t=ne(ne({},t),Le(g)),l(8,n=ce(t,e)),"tooltipText"in g&&l(2,s=g.tooltipText),"open"in g&&l(0,a=g.open),"align"in g&&l(3,f=g.align),"direction"in g&&l(4,w=g.direction),"id"in g&&l(5,p=g.id),"ref"in g&&l(1,$=g.ref),"$$scope"in g&&l(9,o=g.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&A(a?"open":"close")},[a,$,s,f,w,p,j,c,n,o,r,h,k,y,d,v,H,Y]}class Ne extends G{constructor(t){super(),J(this,t,lt,nt,I,{tooltipText:2,open:0,align:3,direction:4,id:5,ref:1})}}function rt(i){let t,l;return t=new te({props:{type:"blue",$$slots:{default:[ot]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},p(e,n){const r={};n&67&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function it(i){let t,l=i[0].name.value+"",e;return{c(){t=O("@"),e=O(l)},l(n){t=P(n,"@"),e=P(n,l)},m(n,r){b(n,t,r),b(n,e,r)},p(n,r){r&1&&l!==(l=n[0].name.value+"")&&W(e,l)},d(n){n&&(_(t),_(e))}}}function ot(i){let t,l,e,n;return l=new Ne({props:{tooltipText:i[1],direction:"top",align:"center",$$slots:{default:[it]},$$scope:{ctx:i}}}),{c(){t=q("a"),N(l.$$.fragment),this.h()},l(r){t=F(r,"A",{href:!0,class:!0});var o=Q(t);S(l.$$.fragment,o),o.forEach(_),this.h()},h(){B(t,"href",e=Z.joinUrlPaths(x(),`/directives/${i[0].name.value}`)),B(t,"class","override-tooltip-width svelte-a6h330")},m(r,o){b(r,t,o),D(l,t,null),n=!0},p(r,o){const s={};o&2&&(s.tooltipText=r[1]),o&65&&(s.$$scope={dirty:o,ctx:r}),l.$set(s),(!n||o&1&&e!==(e=Z.joinUrlPaths(x(),`/directives/${r[0].name.value}`)))&&B(t,"href",e)},i(r){n||(u(l.$$.fragment,r),n=!0)},o(r){m(l.$$.fragment,r),n=!1},d(r){r&&_(t),L(l)}}}function st(i){let t=i[2](),l,e,n=t&&rt(i);return{c(){n&&n.c(),l=E()},l(r){n&&n.l(r),l=E()},m(r,o){n&&n.m(r,o),b(r,l,o),e=!0},p(r,[o]){t&&n.p(r,o)},i(r){e||(u(n),e=!0)},o(r){m(n),e=!1},d(r){r&&_(l),n&&n.d(r)}}}function at(i,t,l){let{directive:e}=t,n,r;function o(f){switch(f.kind){case M.INT:case M.BOOLEAN:case M.FLOAT:return String(f.value);case M.STRING:case M.ENUM:return`"${f.value}"`;case M.NULL:return"null";case M.LIST:return`[${f.values.map(o).join(", ")}]`;case M.OBJECT:return`{${f.fields.map(w=>`${w.name.value}: ${o(w.value)}`).join(", ")}}`}}function s(){return!!n&&Ue(n)}function a(f,w){const p=w.find($=>$.name.value===f.name);return p?o(p.value):JSON.stringify(f.defaultValue)}return i.$$set=f=>{"directive"in f&&l(0,e=f.directive)},i.$$.update=()=>{if(i.$$.dirty&1&&l(3,n=je.getDirective(e.name.value)),i.$$.dirty&9){let f=`@${e.name.value}`;const w=n?Re(n):[];w.length>0&&(f+=`(${w.map(p=>`${p.name}: ${a(p,e.arguments||[])}`).join(", ")})`),l(1,r=f.trim())}},[e,r,s,n]}class ft extends G{constructor(t){super(),J(this,t,at,st,I,{directive:0})}}function _e(i,t,l){const e=i.slice();return e[1]=t[l],e}function $e(i){let t,l,e=ee(i[0]),n=[];for(let o=0;o<e.length;o+=1)n[o]=de(_e(i,e,o));const r=o=>m(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();t=E()},l(o){for(let s=0;s<n.length;s+=1)n[s].l(o);t=E()},m(o,s){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(o,s);b(o,t,s),l=!0},p(o,s){if(s&1){e=ee(o[0]);let a;for(a=0;a<e.length;a+=1){const f=_e(o,e,a);n[a]?(n[a].p(f,s),u(n[a],1)):(n[a]=de(f),n[a].c(),u(n[a],1),n[a].m(t.parentNode,t))}for(K(),a=e.length;a<n.length;a+=1)r(a);z()}},i(o){if(!l){for(let s=0;s<e.length;s+=1)u(n[s]);l=!0}},o(o){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)m(n[s]);l=!1},d(o){o&&_(t),we(n,o)}}}function de(i){let t,l;return t=new ft({props:{directive:i[1]}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},p(e,n){const r={};n&1&&(r.directive=e[1]),t.$set(r)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function ut(i){let t,l,e=i[0]&&$e(i);return{c(){e&&e.c(),t=E()},l(n){e&&e.l(n),t=E()},m(n,r){e&&e.m(n,r),b(n,t,r),l=!0},p(n,[r]){n[0]?e?(e.p(n,r),r&1&&u(e,1)):(e=$e(n),e.c(),u(e,1),e.m(t.parentNode,t)):e&&(K(),m(e,1,1,()=>{e=null}),z())},i(n){l||(u(e),l=!0)},o(n){m(e),l=!1},d(n){n&&_(t),e&&e.d(n)}}}function ct(i,t,l){let{directives:e}=t;return i.$$set=n=>{"directives"in n&&l(0,e=n.directives)},[e]}class pt extends G{constructor(t){super(),J(this,t,ct,ut,I,{directives:0})}}function ge(i){let t,l;return t=new te({props:{type:"red",$$slots:{default:[_t]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},p(e,n){const r={};n&3&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function mt(i){let t;return{c(){t=O("Deprecated")},l(l){t=P(l,"Deprecated")},m(l,e){b(l,t,e)},d(l){l&&_(t)}}}function _t(i){let t,l;return t=new Ne({props:{tooltipText:i[0],$$slots:{default:[mt]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},p(e,n){const r={};n&1&&(r.tooltipText=e[0]),n&2&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function $t(i){let t,l,e=i[0]&&ge(i);return{c(){e&&e.c(),t=E()},l(n){e&&e.l(n),t=E()},m(n,r){e&&e.m(n,r),b(n,t,r),l=!0},p(n,[r]){n[0]?e?(e.p(n,r),r&1&&u(e,1)):(e=ge(n),e.c(),u(e,1),e.m(t.parentNode,t)):e&&(K(),m(e,1,1,()=>{e=null}),z())},i(n){l||(u(e),l=!0)},o(n){m(e),l=!1},d(n){n&&_(t),e&&e.d(n)}}}function dt(i,t,l){let{reason:e}=t;return i.$$set=n=>{"reason"in n&&l(0,e=n.reason)},[e]}class gt extends G{constructor(t){super(),J(this,t,dt,$t,I,{reason:0})}}function he(i){let t,l;return t=new te({props:{type:"purple",$$slots:{default:[ht]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function ht(i){let t;return{c(){t=O("Non-null")},l(l){t=P(l,"Non-null")},m(l,e){b(l,t,e)},d(l){l&&_(t)}}}function bt(i){let t=!pe(i[0]),l,e,n=t&&he(i);return{c(){n&&n.c(),l=E()},l(r){n&&n.l(r),l=E()},m(r,o){n&&n.m(r,o),b(r,l,o),e=!0},p(r,[o]){o&1&&(t=!pe(r[0])),t?n?o&1&&u(n,1):(n=he(r),n.c(),u(n,1),n.m(l.parentNode,l)):n&&(K(),m(n,1,1,()=>{n=null}),z())},i(r){e||(u(n),e=!0)},o(r){m(n),e=!1},d(r){r&&_(l),n&&n.d(r)}}}function vt(i,t,l){let{type:e}=t;return i.$$set=n=>{"type"in n&&l(0,e=n.type)},[e]}class kt extends G{constructor(t){super(),J(this,t,vt,bt,I,{type:0})}}function yt(i){let t,l;return t=new He({props:{href:Z.joinUrlPaths(x(),"types",String(i[0].name)),$$slots:{default:[Nt]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},p(e,n){const r={};n&1&&(r.href=Z.joinUrlPaths(x(),"types",String(e[0].name))),n&3&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function Tt(i){let t,l,e;return t=new le({props:{type:i[0].ofType}}),{c(){N(t.$$.fragment),l=O("!")},l(n){S(t.$$.fragment,n),l=P(n,"!")},m(n,r){D(t,n,r),b(n,l,r),e=!0},p(n,r){const o={};r&1&&(o.type=n[0].ofType),t.$set(o)},i(n){e||(u(t.$$.fragment,n),e=!0)},o(n){m(t.$$.fragment,n),e=!1},d(n){n&&_(l),L(t,n)}}}function wt(i){let t,l,e,n;return l=new le({props:{type:i[0].ofType}}),{c(){t=O("["),N(l.$$.fragment),e=O("]")},l(r){t=P(r,"["),S(l.$$.fragment,r),e=P(r,"]")},m(r,o){b(r,t,o),D(l,r,o),b(r,e,o),n=!0},p(r,o){const s={};o&1&&(s.type=r[0].ofType),l.$set(s)},i(r){n||(u(l.$$.fragment,r),n=!0)},o(r){m(l.$$.fragment,r),n=!1},d(r){r&&(_(t),_(e)),L(l,r)}}}function Nt(i){let t=i[0].name+"",l;return{c(){l=O(t)},l(e){l=P(e,t)},m(e,n){b(e,l,n)},p(e,n){n&1&&t!==(t=e[0].name+"")&&W(l,t)},d(e){e&&_(l)}}}function St(i){let t,l,e,n,r,o,s;const a=[wt,Tt,yt],f=[];function w(p,$){return $&1&&(t=null),$&1&&(l=null),$&1&&(e=null),t==null&&(t=!!Be(p[0])),t?0:(l==null&&(l=!!Ce(p[0])),l?1:(e==null&&(e=!!Ve(p[0])),e?2:-1))}return~(n=w(i,-1))&&(r=f[n]=a[n](i)),{c(){r&&r.c(),o=E()},l(p){r&&r.l(p),o=E()},m(p,$){~n&&f[n].m(p,$),b(p,o,$),s=!0},p(p,[$]){let A=n;n=w(p,$),n===A?~n&&f[n].p(p,$):(r&&(K(),m(f[A],1,1,()=>{f[A]=null}),z()),~n?(r=f[n],r?r.p(p,$):(r=f[n]=a[n](p),r.c()),u(r,1),r.m(o.parentNode,o)):r=null)},i(p){s||(u(r),s=!0)},o(p){m(r),s=!1},d(p){p&&_(o),~n&&f[n].d(p)}}}function Dt(i,t,l){let{type:e}=t;return i.$$set=n=>{"type"in n&&l(0,e=n.type)},[e]}class le extends G{constructor(t){super(),J(this,t,Dt,St,I,{type:0})}}function Lt(i){let t,l;return t=new le({props:{type:i[0]}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},p(e,n){const r={};n&1&&(r.type=e[0]),t.$set(r)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function At(i){let t,l;return t=new te({props:{type:"blue",$$slots:{default:[Lt]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},p(e,[n]){const r={};n&3&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function Et(i,t,l){let{type:e}=t;return i.$$set=n=>{"type"in n&&l(0,e=n.type)},[e]}class Ot extends G{constructor(t){super(),J(this,t,Et,At,I,{type:0})}}function be(i,t,l){const e=i.slice();return e[3]=t[l],e}function ve(i){let t,l="=",e,n,r,o;return r=new xe({props:{value:i[3].default}}),{c(){t=q("span"),t.textContent=l,e=C(),n=q("span"),N(r.$$.fragment)},l(s){t=F(s,"SPAN",{"data-svelte-h":!0}),Oe(t)!=="svelte-u057kv"&&(t.textContent=l),e=V(s),n=F(s,"SPAN",{});var a=Q(n);S(r.$$.fragment,a),a.forEach(_)},m(s,a){b(s,t,a),b(s,e,a),b(s,n,a),D(r,n,null),o=!0},p(s,a){const f={};a&1&&(f.value=s[3].default),r.$set(f)},i(s){o||(u(r.$$.fragment,s),o=!0)},o(s){m(r.$$.fragment,s),o=!1},d(s){s&&(_(t),_(e),_(n)),L(r)}}}function ke(i){let t,l;return t=new ze({props:{source:i[3].description}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},p(e,n){const r={};n&1&&(r.source=e[3].description),t.$set(r)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function Pt(i){let t,l,e=i[3].name+"",n,r,o,s,a,f,w,p,$,A,j,c,h,k=i[3].default&&ve(i);s=new Ot({props:{type:i[3].type}}),f=new gt({props:{reason:i[3].deprecationReason}}),p=new kt({props:{type:i[3].type}}),A=new pt({props:{directives:i[3].directives}});let y=i[3].description&&ke(i);return{c(){t=q("p"),l=q("span"),n=O(e),r=C(),k&&k.c(),o=C(),N(s.$$.fragment),a=C(),N(f.$$.fragment),w=C(),N(p.$$.fragment),$=C(),N(A.$$.fragment),j=C(),y&&y.c(),c=E(),this.h()},l(d){t=F(d,"P",{class:!0});var v=Q(t);l=F(v,"SPAN",{style:!0});var H=Q(l);n=P(H,e),H.forEach(_),r=V(v),k&&k.l(v),o=V(v),S(s.$$.fragment,v),a=V(v),S(f.$$.fragment,v),w=V(v),S(p.$$.fragment,v),$=V(v),S(A.$$.fragment,v),v.forEach(_),j=V(d),y&&y.l(d),c=E(),this.h()},h(){Ee(l,"font-weight","bold"),B(t,"class","arg-name-section svelte-9cf7d2")},m(d,v){b(d,t,v),U(t,l),U(l,n),U(t,r),k&&k.m(t,null),U(t,o),D(s,t,null),U(t,a),D(f,t,null),U(t,w),D(p,t,null),U(t,$),D(A,t,null),b(d,j,v),y&&y.m(d,v),b(d,c,v),h=!0},p(d,v){(!h||v&1)&&e!==(e=d[3].name+"")&&W(n,e),d[3].default?k?(k.p(d,v),v&1&&u(k,1)):(k=ve(d),k.c(),u(k,1),k.m(t,o)):k&&(K(),m(k,1,1,()=>{k=null}),z());const H={};v&1&&(H.type=d[3].type),s.$set(H);const Y={};v&1&&(Y.reason=d[3].deprecationReason),f.$set(Y);const g={};v&1&&(g.type=d[3].type),p.$set(g);const re={};v&1&&(re.directives=d[3].directives),A.$set(re),d[3].description?y?(y.p(d,v),v&1&&u(y,1)):(y=ke(d),y.c(),u(y,1),y.m(c.parentNode,c)):y&&(K(),m(y,1,1,()=>{y=null}),z())},i(d){h||(u(k),u(s.$$.fragment,d),u(f.$$.fragment,d),u(p.$$.fragment,d),u(A.$$.fragment,d),u(y),h=!0)},o(d){m(k),m(s.$$.fragment,d),m(f.$$.fragment,d),m(p.$$.fragment,d),m(A.$$.fragment,d),m(y),h=!1},d(d){d&&(_(t),_(j),_(c)),k&&k.d(),L(s),L(f),L(p),L(A),y&&y.d(d)}}}function jt(i){let t,l,e;return t=new Ke({props:{$$slots:{default:[Pt]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment),l=C()},l(n){S(t.$$.fragment,n),l=V(n)},m(n,r){D(t,n,r),b(n,l,r),e=!0},p(n,r){const o={};r&65&&(o.$$scope={dirty:r,ctx:n}),t.$set(o)},i(n){e||(u(t.$$.fragment,n),e=!0)},o(n){m(t.$$.fragment,n),e=!1},d(n){n&&_(l),L(t,n)}}}function ye(i){let t,l;return t=new Fe({props:{$$slots:{default:[jt]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},p(e,n){const r={};n&65&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function Rt(i){let t,l,e=ee(i[0]),n=[];for(let o=0;o<e.length;o+=1)n[o]=ye(be(i,e,o));const r=o=>m(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();t=E()},l(o){for(let s=0;s<n.length;s+=1)n[s].l(o);t=E()},m(o,s){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(o,s);b(o,t,s),l=!0},p(o,s){if(s&1){e=ee(o[0]);let a;for(a=0;a<e.length;a+=1){const f=be(o,e,a);n[a]?(n[a].p(f,s),u(n[a],1)):(n[a]=ye(f),n[a].c(),u(n[a],1),n[a].m(t.parentNode,t))}for(K(),a=e.length;a<n.length;a+=1)r(a);z()}},i(o){if(!l){for(let s=0;s<e.length;s+=1)u(n[s]);l=!0}},o(o){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)m(n[s]);l=!1},d(o){o&&_(t),we(n,o)}}}function Ut(i){let t,l;return t=new qe({props:{$$slots:{default:[Rt]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},p(e,n){const r={};n&65&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function Bt(i){let t,l;return t=new Me({props:{condensed:!0,$$slots:{default:[Ut]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){D(t,e,n),l=!0},p(e,[n]){const r={};n&65&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function Te(i){return i.map(t=>{var l;return{id:t.name,deprecationReason:t.deprecationReason,name:t.name,description:t.description,default:t.defaultValue,type:t.type,directives:((l=t.astNode)==null?void 0:l.directives)||[]}})}function Ct(i,t,l){let{data:e}=t;const n=Ie(Ge.ARGUMENTS_SORTING,"default");let r;return i.$$set=o=>{"data"in o&&l(1,e=o.data)},i.$$.update=()=>{i.$$.dirty&2&&(n==="alphabetical"?l(0,r=Je.sortBy(Te(e),o=>o.name)):l(0,r=Te(e)))},[r,e]}class qt extends G{constructor(t){super(),J(this,t,Ct,Bt,I,{data:1})}}export{qt as A,pt as D,kt as N,Ot as T,gt as a,xe as b,le as c};
