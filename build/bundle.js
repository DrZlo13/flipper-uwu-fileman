var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function i(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t){e.appendChild(t)}function s(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function p(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}class w{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=u(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)s(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(l)}}let v;function g(e){v=e}function b(e){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.after_update.push(e)}const y=[],_=[],$=[],k=[],x=Promise.resolve();let A=!1;function E(e){$.push(e)}let T=!1;const j=new Set;function R(){if(!T){T=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];g(t),L(t.$$)}for(g(null),y.length=0;_.length;)_.pop()();for(let e=0;e<$.length;e+=1){const t=$[e];j.has(t)||(j.add(t),t())}$.length=0}while(y.length);for(;k.length;)k.pop()();A=!1,T=!1,j.clear()}}function L(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const O=new Set;function U(e,t){e&&e.i&&(O.delete(e),e.i(t))}function M(e,t,n,r){if(e&&e.o){if(O.has(e))return;O.add(e),undefined.c.push((()=>{O.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function S(e){e&&e.c()}function z(e,n,o,a){const{fragment:s,on_mount:l,on_destroy:c,after_update:u}=e.$$;s&&s.m(n,o),a||E((()=>{const n=l.map(t).filter(i);c?c.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(E)}function C(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function q(e,t){-1===e.$$.dirty[0]&&(y.push(e),A||(A=!0,x.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(t,i,o,a,s,c,u=[-1]){const d=v;g(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:i.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=o?o(t,i.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return f.ctx&&s(f.ctx[e],f.ctx[e]=i)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](i),p&&q(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);f.fragment&&f.fragment.l(e),e.forEach(l)}else f.fragment&&f.fragment.c();i.intro&&U(t.$$.fragment),z(t,i.target,i.anchor,i.customElement),R()}g(d)}class D{$destroy(){C(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var I,N=(function(e){var t="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:("object"==typeof H&&H.global,H);function n(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){a(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return t.status>=200&&t.status<=299}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o=t.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=t.saveAs||("object"!=typeof window||window!==t?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(e,o,a){var s=t.URL||t.webkitURL,l=document.createElement("a");o=o||e.name||"download",l.download=o,l.rel="noopener","string"==typeof e?(l.href=e,l.origin!==location.origin?r(l.href)?n(e,o,a):i(l,l.target="_blank"):i(l)):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,t,o){if(t=t||e.name||"download","string"==typeof e)if(r(e))n(e,t,o);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){i(a)}))}else navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}(e,o),t)}:function(e,r,i,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return n(e,r,i);var s="application/octet-stream"===e.type,l=/constructor/i.test(t.HTMLElement)||t.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||s&&l||o)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(e)}else{var d=t.URL||t.webkitURL,f=d.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});t.saveAs=a.saveAs=a,e.exports=a}(I={exports:{}},I.exports),I.exports);class P{constructor(){if(this.filter_flipper={usbVendorId:1155,usbProductId:22336},this.port=null,this.connect_callback=null,this.disconnect_callback=null,this.reader=null,this.writer=null,this.read_buffer=new Uint8Array(0),this.send_callback=null,this.receive_callback=null,this.is_supported()){let e=this;navigator.serial.onconnect=()=>{e.on_connect()},navigator.serial.ondisconnect=()=>{e.on_disconnect()}}}is_supported(){return"serial"in navigator}async try_to_connect(){if(this.is_supported()){let e=this;await this.request_port().then((async t=>{0!=t.length&&(e.port=t,e.port.onconnect=()=>{e.on_connect()},await e.connect(),null!=this.connect_callback&&this.connect_callback())}))}}async connect(){await this.port.open({baudRate:115200}),this.reader=this.port.readable.getReader(),this.writer=this.port.writable.getWriter()}async disconnect(){this.reader&&this.reader.cancel().then((()=>{this.port&&this.port.close()}))}async get_port(){return await navigator.serial.getPorts({filters:[this.filter_flipper]})}async request_port(){return await navigator.serial.requestPort({filters:[this.filter_flipper]})}async on_connect(){console.log("Serial connected"),await this.get_port().then((async e=>{null!==e&&Array.isArray(e)&&e.length>0&&(this.port=e[0],await this.connect(),null!=this.connect_callback&&this.connect_callback())}))}on_disconnect(){console.log("Serial disconnected"),this.disconnect().then((()=>{this.port=null,null!=this.disconnect_callback&&this.disconnect_callback()}))}async send(e){let t=(new TextEncoder).encode(e);await this.send_raw(t)}async send_raw(e){null!=this.send_callback&&await this.send_callback(e),await this.writer.write(e)}concatTypedArrays(e,t){var n=new e.constructor(e.length+t.length);return n.set(e,0),n.set(t,e.length),n}async read_count(e){let t=new Uint8Array(e),n=!1,r=0;for(;!n;)try{for(;!n;){const{value:i,done:o}=await this.reader.read();if(o)break;null!=this.receive_callback&&await this.receive_callback(i),this.read_buffer=this.concatTypedArrays(this.read_buffer,i);for(let o=0;o<i.length;o++,r++)if(t[r]=i[o],r>=e){n=!0;break}}}catch(e){console.error(e),n=!0}return t}async read_until(e="\n",t=!0){let n=!1,r=new Uint8Array(0),i=(new TextEncoder).encode(e);for(;!n;)try{for(;;){let e=this.read_buffer.findIndex(((e,t,n)=>{let r=!0;for(let e=0;e<i.length;e++)if(i[e]!=n[t+e]){r=!1;break}return r}));if(e>=0){n=!0,r=t?this.read_buffer.subarray(0,e):this.read_buffer.subarray(0,e+i.length),this.read_buffer=this.read_buffer.subarray(e+i.length);break}const{value:o,done:a}=await this.reader.read();if(a)break;null!=this.receive_callback&&await this.receive_callback(o),this.read_buffer=this.concatTypedArrays(this.read_buffer,o)}}catch(e){console.error(e),n=!0}return r}}function F(e,t,n){const r=e.slice();return r[5]=t[n],r}function V(e){let t,n,r,i=e[5]+"";return{c(){t=u("div"),r=f(),n=new w(r),h(t,"class","line svelte-b85nqy")},m(e,o){s(e,t,o),n.m(i,t),a(t,r)},p(e,t){2&t&&i!==(i=e[5]+"")&&n.p(i)},d(e){e&&l(t)}}}function W(t){let n,r,i=t[1],o=[];for(let e=0;e<i.length;e+=1)o[e]=V(F(t,i,e));return{c(){n=u("div"),r=u("div");for(let e=0;e<o.length;e+=1)o[e].c();h(r,"class","lines svelte-b85nqy"),h(n,"class","terminal svelte-b85nqy")},m(e,i){s(e,n,i),a(n,r);for(let e=0;e<o.length;e+=1)o[e].m(r,null);t[3](r)},p(e,[t]){if(2&t){let n;for(i=e[1],n=0;n<i.length;n+=1){const a=F(e,i,n);o[n]?o[n].p(a,t):(o[n]=V(a),o[n].c(),o[n].m(r,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=i.length}},i:e,o:e,d(e){e&&l(n),c(o,e),t[3](null)}}}function X(e,t,n){let r,i=[],o="";return b((()=>{r&&r.scrollTo(0,r.scrollHeight)})),[r,i,async function(e){for(o+=e,o=o.split("\n");o.length>1;){let e=o.shift();e=e.replaceAll("\t","&nbsp;&nbsp;"),e=e.replaceAll(" ","&nbsp;"),n(1,i=[...i,e])}o=o.join("")},function(e){_[e?"unshift":"push"]((()=>{r=e,n(0,r)}))}]}class G extends D{constructor(e){super(),B(this,e,X,W,o,{add_line:2})}get add_line(){return this.$$.ctx[2]}}function K(e,t,n){const r=e.slice();return r[26]=t[n],r}function J(e){let t,n,i,o,w,v,g,b,y,_,$,k,x,A,E,T,j,R,L,O,U,M,S,z,C;function q(e,t){return""!=e[2]?Z:Y}let B=q(e),D=B(e),H=e[3],I=[];for(let t=0;t<H.length;t+=1)I[t]=re(K(e,H,t));return{c(){t=u("div"),n=u("div"),i=f(),o=u("div"),w=d(e[2]),v=f(),g=u("div"),D.c(),b=f();for(let e=0;e<I.length;e+=1)I[e].c();y=f(),_=u("div"),$=u("div"),k=d("Load"),A=f(),E=u("div"),T=d("View"),R=f(),L=u("div"),O=d("Del"),M=f(),S=u("div"),S.textContent="MkDir",h(n,"class","border svelte-1s2pmmw"),h(o,"class","path svelte-1s2pmmw"),h(g,"class","file-list svelte-1s2pmmw"),h($,"class",x="command "+(e[4]==e[6].load?"active":"")+" svelte-1s2pmmw"),h(E,"class",j="command "+(e[4]==e[6].view?"active":"")+" svelte-1s2pmmw"),h(L,"class",U="command "+(e[4]==e[6].delete?"active":"")+" svelte-1s2pmmw"),h(S,"class","command svelte-1s2pmmw"),h(_,"class","command-list svelte-1s2pmmw"),h(t,"class","wrapper-list svelte-1s2pmmw")},m(r,l){s(r,t,l),a(t,n),a(t,i),a(t,o),a(o,w),a(t,v),a(t,g),D.m(g,null),a(g,b);for(let e=0;e<I.length;e+=1)I[e].m(g,null);a(t,y),a(t,_),a(_,$),a($,k),a(_,A),a(_,E),a(E,T),a(_,R),a(_,L),a(L,O),a(_,M),a(_,S),z||(C=[p($,"click",e[16]),p(E,"click",e[17]),p(L,"click",e[18]),p(t,"dragover",ce),p(t,"drop",e[11])],z=!0)},p(e,t){if(4&t&&m(w,e[2]),B===(B=q(e))&&D?D.p(e,t):(D.d(1),D=B(e),D&&(D.c(),D.m(g,b))),1320&t){let n;for(H=e[3],n=0;n<H.length;n+=1){const r=K(e,H,n);I[n]?I[n].p(r,t):(I[n]=re(r),I[n].c(),I[n].m(g,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=H.length}16&t&&x!==(x="command "+(e[4]==e[6].load?"active":"")+" svelte-1s2pmmw")&&h($,"class",x),16&t&&j!==(j="command "+(e[4]==e[6].view?"active":"")+" svelte-1s2pmmw")&&h(E,"class",j),16&t&&U!==(U="command "+(e[4]==e[6].delete?"active":"")+" svelte-1s2pmmw")&&h(L,"class",U)},d(e){e&&l(t),D.d(),c(I,e),z=!1,r(C)}}}function Q(t){let n,r,i,o;return{c(){n=u("div"),r=u("button"),r.textContent="Connect",h(r,"class","svelte-1s2pmmw"),h(n,"class","wrapper-button svelte-1s2pmmw")},m(e,l){s(e,n,l),a(n,r),i||(o=p(r,"click",t[7]),i=!0)},p:e,d(e){e&&l(n),i=!1,o()}}}function Y(t){let n;return{c(){n=u("div"),n.textContent=" ",h(n,"class","")},m(e,t){s(e,n,t)},p:e,d(e){e&&l(n)}}}function Z(t){let n,r,i;return{c(){n=u("div"),n.textContent="..",h(n,"class","file is-dir svelte-1s2pmmw")},m(e,o){s(e,n,o),r||(i=p(n,"click",t[13]),r=!0)},p:e,d(e){e&&l(n),r=!1,i()}}}function ee(e){let t,n,r,i=e[26].name+"";return{c(){t=u("div"),n=d(i),r=f(),h(t,"class","file is-error svelte-1s2pmmw")},m(e,i){s(e,t,i),a(t,n),a(t,r)},p(e,t){8&t&&i!==(i=e[26].name+"")&&m(n,i)},d(e){e&&l(t)}}}function te(e){let t,n,r,i,o,c,w,v,g,b=e[26].name+"",y=e[26].size+"";function _(){return e[15](e[26])}return{c(){t=u("div"),n=u("div"),r=d(b),i=f(),o=u("div"),c=d(y),w=f(),h(o,"class","file-size"),h(t,"class","file is-file svelte-1s2pmmw")},m(e,l){s(e,t,l),a(t,n),a(n,r),a(t,i),a(t,o),a(o,c),a(t,w),v||(g=p(t,"click",_),v=!0)},p(t,n){e=t,8&n&&b!==(b=e[26].name+"")&&m(r,b),8&n&&y!==(y=e[26].size+"")&&m(c,y)},d(e){e&&l(t),v=!1,g()}}}function ne(e){let t,n,r,i,o,c=e[26].name+"";function w(){return e[14](e[26])}return{c(){t=u("div"),n=d(c),r=f(),h(t,"class","file is-dir svelte-1s2pmmw")},m(e,l){s(e,t,l),a(t,n),a(t,r),i||(o=p(t,"click",w),i=!0)},p(t,r){e=t,8&r&&c!==(c=e[26].name+"")&&m(n,c)},d(e){e&&l(t),i=!1,o()}}}function re(e){let t;function n(e,t){return e[26].type==e[5].dir?ne:e[26].type==e[5].file?te:ee}let r=n(e),i=r(e);return{c(){i.c(),t=d("")},m(e,n){i.m(e,n),s(e,t,n)},p(e,o){r===(r=n(e))&&i?i.p(e,o):(i.d(1),i=r(e),i&&(i.c(),i.m(t.parentNode,t)))},d(e){i.d(e),e&&l(t)}}}function ie(e){let t,n,r,i,o,c;function d(e,t){return 0==e[1]?Q:J}let p=d(e),m=p(e);return o=new G({props:{}}),e[19](o),{c(){t=u("div"),n=u("div"),m.c(),r=f(),i=u("div"),S(o.$$.fragment),h(n,"class","wrapper svelte-1s2pmmw"),h(i,"class","wrapper svelte-1s2pmmw"),h(t,"class","screen svelte-1s2pmmw")},m(e,l){s(e,t,l),a(t,n),m.m(n,null),a(t,r),a(t,i),z(o,i,null),c=!0},p(e,[t]){p===(p=d(e))&&m?m.p(e,t):(m.d(1),m=p(e),m&&(m.c(),m.m(n,null)));o.$set({})},i(e){c||(U(o.$$.fragment,e),c=!0)},o(e){M(o.$$.fragment,e),c=!1},d(n){n&&l(t),m.d(),e[19](null),C(o)}}}const oe=">: ",ae="\r\n";function se(e){return(new TextDecoder).decode(e)}function le(e){}function ce(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}function ue(e,t,n){let r,i=new P;i.connect_callback=function(){n(1,o=!0),n(2,a="/"),i.send("device_info\r").then((()=>{i.read_until("hardware_model      :").then((()=>{i.read_until(oe).then((()=>{d(),n(1,o=!0)}))}))}))},i.disconnect_callback=function(){n(1,o=!1)},i.send_callback=le,i.receive_callback=function(e){r.add_line(se(e))};let o=!1,a="/";const s=Object.freeze({dir:1,file:2,error:3});let l=[];const c=Object.freeze({load:1,view:2,delete:3});let u=c.load;async function d(){await i.send('storage list "'+a+'"\r'),await i.read_until(ae),i.read_until(oe).then((e=>{let t=[],r=0,i=0;for(let n=0;n<e.length;n++)13==e[n]&&10==e[n+1]&&(i=n,t.push(e.slice(r,i)),r=n+2);n(3,l=[]),t.forEach((function(e){let t="";try{t=se(e)}catch(e){}if(t=t.trim(),t.length>0)if("Empty"==t);else{t=t.split(" ");let e=s.error,n=0,r="";"[D]"==t[0]?(e=s.dir,t.shift(),r=t.join(" "),l.push({type:e,name:r,size:n})):"[F]"==t[0]?(e=s.file,n=parseInt(t.at(-1).replace("b","")),t.pop(),t.shift(),r=t.join(" "),l.push({type:e,name:r,size:n})):(r=t.join(" "),l.push({type:e,name:r,size:n}))}})),l.sort((function(e,t){return e.type==s.dir&&t.type==s.dir||e.type==s.file&&t.type==s.file?e.name>t.name?1:e.name<t.name?-1:0:e.type==s.dir?-1:1}))}))}async function f(e){n(2,a+="/"+e),n(2,a=a.replace("//","/")),d()}async function p(){n(2,a=a.substring(0,a.lastIndexOf("/"))),n(2,a=a.replace("//","/")),0==a.length&&n(2,a="/"),d()}async function h(e){let t=a+"/"+e;await i.send('storage read_chunks "'+t+'" 512\r'),await i.read_until(ae),await i.read_until(ae).then((async n=>{n=se(n);let r=parseInt(n.split(": ")[1]);var o=new Uint8Array(r);let a=0;for(;a<r;){await i.read_until("Ready?\r\n"),await i.send("y");let e=Math.min(r-a,512);await i.read_count(e).then((e=>{for(let t=0;t<e.length;t++,a++)o[a]=e[t];console.log("Received ",a,e," from ",t)}))}if(u==c.load){var s=new Blob([o],{type:"application/octet-stream"});N.saveAs(s,e)}else u==c.view&&console.log(se(o));await i.read_until(oe),console.log("Readed")}))}function m(e){n(4,u=e)}!async function(){await i.on_connect()}();return[r,o,a,l,u,s,c,async function(){await i.try_to_connect()},f,p,h,async function(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.files,n=new FileReader;let r=t[0],o=r.name,s=r.size;n.readAsArrayBuffer(r),n.onload=async()=>{let e=new Uint8Array(n.result);console.log(o,s,e),await i.send('storage remove "'+a+"/"+o+'"\r'),await i.read_until(ae),await i.read_until(oe);const t=a+"/"+o;let r=0;for(;r<e.length;){let n=Math.min(e.length-r,512),o=e.slice(r,r+n);r+=n,console.log("Sending ",r,o," to ",t),await i.send('storage write_chunk "'+t+'" '+o.length+"\r"),await i.read_until(ae),await i.read_until(ae),await i.send_raw(o),await i.read_until(oe)}d()}},m,()=>p(),e=>f(e.name),e=>h(e.name),()=>{m(c.load)},()=>{m(c.view)},()=>{m(c.delete)},function(e){_[e?"unshift":"push"]((()=>{r=e,n(0,r)}))}]}class de extends D{constructor(e){super(),B(this,e,ue,ie,o,{})}}function fe(t){let n,r,i;return r=new de({}),{c(){n=u("main"),S(r.$$.fragment),h(n,"class","svelte-p5p60h")},m(e,t){s(e,n,t),z(r,n,null),i=!0},p:e,i(e){i||(U(r.$$.fragment,e),i=!0)},o(e){M(r.$$.fragment,e),i=!1},d(e){e&&l(n),C(r)}}}return new class extends D{constructor(e){super(),B(this,e,null,fe,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
