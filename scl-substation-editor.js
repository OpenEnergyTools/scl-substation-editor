/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window,e$5=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;class o$4{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$5&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}}const r$2=t=>new o$4("string"==typeof t?t:t+"",void 0,s$3),i$3=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$4(n,t,s$3)},S$1=(s,n)=>{e$5?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$4=window,r$1=e$4.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$3=e$4.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";class u$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$3||o$3({ReactiveElement:u$1}),(null!==(s$2=e$4.reactiveElementVersions)&&void 0!==s$2?s$2:e$4.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$2=window,s$1=i$2.trustedTypes,e$3=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$2="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$3?e$3.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$2+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$2)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$2).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$2.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$2=i$2.litHtmlVersions)&&void 0!==t$2?t$2:i$2.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o$1;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$2=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$1=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$1=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e$1(n,t,o):i$1(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(t){return n$1({...t,state:!0})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=e(class extends i{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$1 = i$3 `:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Icon = class Icon extends s {
    /** @soyTemplate */
    render() {
        return x `<span><slot></slot></span>`;
    }
};
Icon.styles = [styles$1];
Icon = __decorate([
    e$2('mwc-icon')
], Icon);

function closestTo(node, selector) {
    const closest = node.nodeType === Node.ELEMENT_NODE
        ? node.closest(selector)
        : null;
    if (closest)
        return closest;
    const root = node.getRootNode();
    if (root instanceof ShadowRoot)
        return closestTo(root.host, selector);
    return null;
}
/**
 * @slot action - May contain up to eight icon buttons.
 * @slot icon - If filled overrides the icon property.
 * @slot - The default slot will be rendered into the pane body in a single column.
 * @cssprop [--oscd-action-icon-theme-primary=--oscd-theme-primary] - Color for border on even levels.
 * @cssprop [--oscd-action-icon-theme-on-primary=--oscd-theme-on-primary] - Pane color for the uneven levels.
 * @cssprop [--oscd-action-icon-theme-secondary=--oscd-theme-secondary] - Color for border on uneven levels.
 * @cssprop [--oscd-action-pane-theme-surface=--oscd-theme-surface] - Pane color for the even levels.
 * @cssprop [--oscd-action-icon-theme-on-surface=--oscd-theme-on-surface] - Icon and label color.
 * @cssprop [--oscd-action-icon-theme-font=--oscd-theme-font] - Font for label.
 *
 * @summary A responsive container rendering actions in a header.
 * @tag oscd-action-pane
 */
class OscdActionPane extends s {
    constructor() {
        super(...arguments);
        /** color header with secondary theme color while focus is within */
        this.secondary = false;
        /** highlight pane with dotted outline */
        this.highlighted = false;
        /** nesting level, default (closest pane ancestor's level) + 1 */
        this.level = 1;
    }
    async firstUpdated() {
        this.tabIndex = 0;
        const parentPane = closestTo(this.parentNode, 'oscd-action-pane');
        if (parentPane)
            this.level = parentPane.level + 1;
        this.level = Math.floor(this.level);
    }
    renderHeader() {
        var _a;
        const content = x `<span
        ><slot name="icon"
          >${this.icon
            ? x `<mwc-icon>${this.icon}</mwc-icon>`
            : A}</slot
        ></span
      >
      ${(_a = this.label) !== null && _a !== void 0 ? _a : A}
      <nav><slot name="action"></slot></nav>`;
        const headingLevel = Math.floor(Math.max(this.level, 1));
        // Sometimes a TemplateResult is passed in as Label, not a string. So only when it's a string show a title.
        const title = typeof this.label === 'string' ? this.label : '';
        switch (headingLevel) {
            case 1:
                return x `<h1 title="${title}">${content}</h1>`;
            case 2:
                return x `<h2 title="${title}">${content}</h2>`;
            case 3:
                return x `<h3 title="${title}">${content}</h3>`;
            default:
                return x `<h4 title="${title}">${content}</h4>`;
        }
    }
    render() {
        return x `<section
      class="${o({
            secondary: this.secondary,
            highlighted: this.highlighted,
            contrasted: this.level % 2 === 0,
        })}"
    >
      ${this.renderHeader()}
      <div><slot></slot></div>
    </section>`;
    }
}
OscdActionPane.styles = i$3 `
    :host {
      outline: none;
    }

    :host(:focus-within) section {
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      outline-width: 4px;
      transition: all 250ms linear;
    }

    section {
      background-color: var(
        --oscd-action-pane-theme-surface,
        var(--oscd-theme-surface)
      );
      transition: all 200ms linear;
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      outline-color: var(
        --oscd-action-pane-theme-primary,
        var(--oscd-theme-primary)
      );
    }

    section.secondary {
      outline-color: var(
        --oscd-action-pane-theme-secondary,
        var(--oscd-theme-secondary)
      );
    }

    section > div {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 8px 12px 16px;
      clear: right;
    }

    .highlighted {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) .highlighted {
      outline-style: solid;
    }

    .contrasted {
      background-color: var(
        --oscd-action-pane-theme-on-primary,
        var(--oscd-theme-on-primary)
      );
    }

    h1,
    h2,
    h3,
    h4 {
      color: var(
        --oscd-action-pane-theme-on-surface,
        var(--oscd-theme-on-surface)
      );
      font-family: var(--oscd-action-pane-theme-font, var(--oscd-theme-font));
      font-weight: 300;
      overflow: clip visible;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 52px;
      padding-left: 0.3em;
    }

    nav {
      float: right;
    }

    mwc-icon {
      vertical-align: middle;
      position: relative;
      top: -0.1em;
      --mdc-icon-size: 1em;
    }

    ::slotted([slot='icon']) {
      vertical-align: middle;
      position: relative;
      top: -0.1em;
      --mdc-icon-size: 1em;
    }
  `;
__decorate([
    n$1({ type: String })
], OscdActionPane.prototype, "label", void 0);
__decorate([
    n$1({ type: String })
], OscdActionPane.prototype, "icon", void 0);
__decorate([
    n$1({ type: Boolean })
], OscdActionPane.prototype, "secondary", void 0);
__decorate([
    n$1({ type: Boolean })
], OscdActionPane.prototype, "highlighted", void 0);
__decorate([
    n$1({ type: Number })
], OscdActionPane.prototype, "level", void 0);

window.customElements.define('oscd-action-pane', OscdActionPane);

/**
 * @slot action - May contain up to eight icon buttons.
 * @slot icon - If filled overrides the icon property.
 * @slot - The default slot will be rendered into the pane body in a single column.
 * @cssprop [--oscd-action-icon-theme-primary=--oscd-theme-primary] - Border and hover color.
 * @cssprop [--oscd-action-icon-theme-on-primary=--oscd-theme-on-primary] - Font color inside hover field.
 * @cssprop [--oscd-action-icon-theme-secondary=--oscd-theme-secondary] - Secondary border and hover color.
 * @cssprop [--oscd-action-icon-theme-on-surface=--oscd-theme-on-surface] - Icon and label color.
 * @cssprop [--oscd-action-icon-theme-font=--oscd-theme-font] - Font for label and hover text.
 *
 * @summary A responsive container rendering actions in a header.
 * @tag oscd-action-icon
 */
class OscdActionIcon extends s {
    constructor() {
        super(...arguments);
        /** color header with secondary theme color while focus is within */
        this.secondary = false;
        /** highlight pane with dotted outline */
        this.highlighted = false;
        /** disables CSS adoption to action buttons */
        this.hideActions = false;
    }
    async firstUpdated() {
        this.tabIndex = 0;
    }
    renderIcon() {
        return x `<span>
      <slot name="icon"
        >${this.icon ? x `<mwc-icon>${this.icon}</mwc-icon>` : A}</slot
      ></span
    > `;
    }
    render() {
        return x `${this.label ? x `<header>${this.label}</header>` : A}
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      ${this.label ? x `<footer>${this.label}</footer>` : A}`;
    }
}
OscdActionIcon.styles = i$3 `
    :host {
      display: flex;
      flex-direction: column;
      outline: none;
    }

    section {
      align-self: center;
    }

    ::slotted([slot='icon']),
    mwc-icon {
      display: block;
      color: var(
        --oscd-action-icon-theme-on-surface,
        var(--oscd-theme-on-surface)
      );
      transition: transform 150ms linear, box-shadow 200ms linear;
      outline-color: var(
        --oscd-action-icon-theme-primary,
        var(--oscd-theme-primary)
      );
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      width: 64px;
      height: 64px;
      --mdc-icon-size: 64px;
    }

    :host([secondary]) ::slotted([slot='icon']),
    :host([secondary]) mwc-icon {
      outline-color: var(
        --oscd-action-icon-theme-secondary,
        var(--oscd-theme-secondary)
      );
    }

    :host([highlighted]) ::slotted([slot='icon']),
    :host([highlighted]) mwc-icon {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) ::slotted([slot='icon']),
    :host(:focus-within) mwc-icon {
      outline-style: solid;
      outline-width: 4px;
    }

    :host(:focus-within:not([hideActions])) ::slotted([slot='icon']),
    :host(:focus-within:not([hideActions])) mwc-icon {
      transform: scale(0.8);
      transition: all 250ms linear;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    }

    ::slotted([slot='icon']:hover),
    mwc-icon:hover {
      outline-style: dashed;
      outline-width: 2px;
      transition: transform 200ms linear, box-shadow 250ms linear;
    }

    ::slotted([slot='action']) {
      color: var(
        --oscd-action-icon-theme-on-surface,
        var(--oscd-theme-on-surface)
      );
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
      position: absolute;
      pointer-events: none;
      z-index: 1;
      opacity: 0;
      margin-top: -56px;
      margin-left: 8px;
    }

    :host(:focus-within) ::slotted([slot='action']) {
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
      pointer-events: auto;
      opacity: 1;
    }

    :host(:focus-within) ::slotted([slot='action']:nth-of-type(1)) {
      transform: translate(0px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(2)) {
      transform: translate(0px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(3)) {
      transform: translate(52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(4)) {
      transform: translate(-52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(5)) {
      transform: translate(52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(6)) {
      transform: translate(-52px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(7)) {
      transform: translate(-52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(8)) {
      transform: translate(52px, 52px);
    }

    footer {
      color: var(
        --oscd-action-icon-theme-on-surface,
        var(--oscd-theme-on-surface)
      );
      font-family: var(--oscd-action-icon-theme-font, var(--oscd-theme-font));
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      text-align: center;
      align-self: center;
      max-width: 100%;
      direction: rtl;
    }

    header {
      color: var(
        --oscd-action-icon-theme-on-primary,
        var(--oscd-theme-on-primary)
      );
      background-color: var(
        --oscd-action-icon-theme-primary,
        var(--oscd-theme-primary)
      );
      font-family: var(--oscd-action-icon-theme-font, var(--oscd-theme-font));
      font-weight: 500;
      font-size: 1.2em;
      position: absolute;
      text-align: center;
      align-self: center;
      max-width: 100vw;
      padding: 4px 8px;
      border-radius: 4px;
      opacity: 0;
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
    }

    :host([secondary]) header {
      background-color: var(
        --oscd-action-icon-theme-secondary,
        var(--oscd-theme-secondary)
      );
    }

    :host(:hover) header {
      position: absolute;
      opacity: 1;
      transform: translate(0, -40px);
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within) header {
      position: absolute;
      opacity: 1;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within:not([hideActions])) header {
      transform: translate(0, -80px);
    }

    :host(:focus-within[hideActions]) header {
      transform: translate(0, -40px);
    }
  `;
__decorate([
    n$1({ type: String })
], OscdActionIcon.prototype, "label", void 0);
__decorate([
    n$1({ type: String })
], OscdActionIcon.prototype, "icon", void 0);
__decorate([
    n$1({ type: Boolean })
], OscdActionIcon.prototype, "secondary", void 0);
__decorate([
    n$1({ type: Boolean })
], OscdActionIcon.prototype, "highlighted", void 0);
__decorate([
    n$1({ type: Boolean })
], OscdActionIcon.prototype, "hideActions", void 0);

window.customElements.define('oscd-action-icon', OscdActionIcon);

/** Pane rendering `LNode` element with its children */
let LNodeEditor = class LNodeEditor extends s {
    get header() {
        var _a;
        const prefix = (_a = this.element.getAttribute('prefix')) !== null && _a !== void 0 ? _a : '';
        const lnClass = this.element.getAttribute('lnClass');
        const lnInst = this.element.getAttribute('lnInst');
        const header = `${prefix} ${lnClass} ${lnInst}`;
        return typeof header === 'string' ? header : '';
    }
    get missingIedReference() {
        var _a;
        return (_a = this.element.getAttribute('iedName') === 'None') !== null && _a !== void 0 ? _a : false;
    }
    render() {
        return x `<oscd-action-icon
      label="${this.header}"
      ?secondary=${this.missingIedReference}
      ?highlighted=${this.missingIedReference}
    >
    </oscd-action-icon>`;
    }
};
__decorate([
    n$1({ attribute: false })
], LNodeEditor.prototype, "doc", void 0);
__decorate([
    n$1({ attribute: false })
], LNodeEditor.prototype, "element", void 0);
__decorate([
    t$1()
], LNodeEditor.prototype, "header", null);
__decorate([
    t$1()
], LNodeEditor.prototype, "missingIedReference", null);
__decorate([
    t$1()
], LNodeEditor.prototype, "render", null);
LNodeEditor = __decorate([
    e$2('l-node-editor')
], LNodeEditor);

function getChildElementsByTagName(element, tag) {
    if (!element || !tag)
        return [];
    return Array.from(element.children).filter(child => child.tagName === tag);
}
function renderGeneralEquipment(doc, element, showfunctions) {
    const generalEquipment = getChildElementsByTagName(element, 'GeneralEquipment');
    return generalEquipment.length
        ? x ` <div
        class="${o({
            content: true,
            actionicon: !showfunctions,
        })}"
      >
        ${generalEquipment.map(gEquipment => x `<general-equipment-editor
              .doc=${doc}
              .element=${gEquipment}
              ?showfunctions=${showfunctions}
            ></general-equipment-editor>`)}
      </div>`
        : x ``;
}
/** Common `CSS` styles used by substation subeditors */
const styles = i$3 `
  abbr {
    text-decoration: none;
    border-bottom: none;
  }

  .ptrContent.actionicon {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  .content.actionicon {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  #iedcontainer {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  .container.lnode {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  mwc-dialog {
    display: flex;
    flex-direction: column;
  }

  mwc-dialog > * {
    display: block;
    margin-top: 16px;
  }

  powertransformer-editor[showfunctions] {
    margin: 4px 8px 16px;
  }

  general-equipment-editor[showfunctions] {
    margin: 4px 8px 16px;
  }
`;
const powerTransformerTwoWindingIcon = x `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <line
    x1="12.5"
    y1="2"
    x2="12.5"
    y2="5"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="10"
    r="5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="15"
    r="5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="12.5"
    y1="20"
    x2="12.5"
    y2="23"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;
const generalConductingEquipmentIcon = x `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <circle
    cx="12.5"
    cy="12.5"
    r="11"
    stroke-width="1.5"
    stroke="currentColor"
    fill="transparent"
  />

  <path
    d=" M 7.5 17.5
    L 12 13
    Z"
    fill="transparent"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    stroke-linecap="round"
  />
  <path
    d="	M 11 7
      L 10 8
      C 5 13, 11 20, 17 15
      L 18 14
      Z"
    fill="currentColor"
    stroke="currentColor"
    stroke-linejoin="round"
  />
  <path
    d=" M 13 9
    L 16 6
    Z"
    fill="transparent"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    stroke-linecap="round"
  />
  <path
    d=" M 16 12
    L 19 9
    Z"
    fill="transparent"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    stroke-linecap="round"
  />
</svg>`;
const disconnectorIcon = x `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <path
    d="M 12.5 2 L 12.5 8"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d=" M 12.5 23 L 12.5 18"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="M 12.5 18 L 8 9"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="M 11.5 8 L 13.5 8"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;
const circuitBreakerIcon = x `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <line
    x1="12.5"
    y1="2"
    x2="12.5"
    y2="8"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="12.5"
    y1="23"
    x2="12.5"
    y2="18"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="12.5"
    y1="18"
    x2="8"
    y2="9"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="11.5"
    y1="7"
    x2="13.5"
    y2="9"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="11.5"
    y1="9"
    x2="13.5"
    y2="7"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;
const currentTransformerIcon = x `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <line
    x1="12.5"
    y1="2"
    x2="12.5"
    y2="23"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="12.5"
    r="7.5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;
const voltageTransformerIcon = x `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <line
    x1="12.5"
    y1="2"
    x2="12.5"
    y2="5"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="10"
    r="5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="15"
    r="5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="12.5"
    y1="20"
    x2="12.5"
    y2="23"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="11"
    y1="23"
    x2="14"
    y2="23"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;
const earthSwitchIcon = x `<svg
  viewBox="0 0 25 25"
  xmlns="http://www.w3.org/2000/svg"
>
  <line
    x1="12.5"
    x2="12.5"
    y1="19.2"
    y2="16.2"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
  <line
    x1="12.5"
    x2="12.5"
    y1="1.25"
    y2="6.25"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
  <line
    x1="12.5"
    x2="8"
    y1="16.2"
    y2="7.25"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
  <line
    x1="13.5"
    x2="11.5"
    y1="6.25"
    y2="6.25"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
  <line
    x1="17"
    x2="8"
    y1="19.2"
    y2="19.2"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
  <line
    x1="15.5"
    x2="9.5"
    y1="21.4"
    y2="21.4"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
  <line
    x1="14.5"
    x2="10.5"
    y1="23.5"
    y2="23.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
</svg>`;
const typeIcons = {
    CBR: circuitBreakerIcon,
    DIS: disconnectorIcon,
    CTR: currentTransformerIcon,
    VTR: voltageTransformerIcon,
    ERS: earthSwitchIcon,
};
function crossProduct(...arrays) {
    return arrays.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())), [[]]);
}
function getLogicalNodeInstance(lNode) {
    if (!lNode)
        return null;
    const [lnInst, lnClass, iedName, ldInst, prefix] = [
        'lnInst',
        'lnClass',
        'iedName',
        'ldInst',
        'prefix',
    ].map(attribute => lNode === null || lNode === void 0 ? void 0 : lNode.getAttribute(attribute));
    const iedSelector = [`IED[name="${iedName}"]`, 'IED'];
    const lDevicePath = ['AccessPoint > Server'];
    const lNSelector = [
        `LDevice[inst="${ldInst}"] > LN[inst="${lnInst}"][lnClass="${lnClass}"]`,
    ];
    const lNPrefixSelector = prefix && prefix !== ''
        ? [`[prefix="${prefix}"]`]
        : ['[prefix=""]', ':not(prefix)'];
    return lNode.ownerDocument.querySelector(crossProduct(iedSelector, [' > '], lDevicePath, [' > '], lNSelector, lNPrefixSelector)
        .map(strings => strings.join(''))
        .join(','));
}
function getSwitchTypeValueFromDTT(lNorlNode) {
    var _a;
    const rootNode = lNorlNode === null || lNorlNode === void 0 ? void 0 : lNorlNode.ownerDocument;
    const lNodeType = lNorlNode.getAttribute('lnType');
    const lnClass = lNorlNode.getAttribute('lnClass');
    const dObj = rootNode.querySelector(`DataTypeTemplates > LNodeType[id="${lNodeType}"][lnClass="${lnClass}"] > DO[name="SwTyp"]`);
    if (dObj) {
        const dORef = dObj.getAttribute('type');
        return (_a = rootNode
            .querySelector(`DataTypeTemplates > DOType[id="${dORef}"] > DA[name="stVal"] > Val`)) === null || _a === void 0 ? void 0 : _a.innerHTML.trim();
    }
    // definition missing
    return undefined;
}
function getSwitchTypeValue(lN) {
    var _a;
    const daInstantiated = lN.querySelector('DOI[name="SwTyp"] > DAI[name="stVal"]');
    // definition is on instantiated object
    if (daInstantiated) {
        return (_a = daInstantiated.querySelector('Val')) === null || _a === void 0 ? void 0 : _a.innerHTML.trim();
        // definition must be on the data object type
    }
    return getSwitchTypeValueFromDTT(lN);
}
function containsEarthSwitchDefinition(condEq) {
    const lNodeXSWI = condEq.querySelector('LNode[lnClass="XSWI"]');
    const lN = getLogicalNodeInstance(lNodeXSWI);
    let swTypVal;
    if (lN) {
        swTypVal = getSwitchTypeValue(lN);
    }
    else if (lNodeXSWI) {
        swTypVal = getSwitchTypeValueFromDTT(lNodeXSWI);
    }
    return swTypVal
        ? ['Earthing Switch', 'High Speed Earthing Switch'].includes(swTypVal)
        : false;
}
function containsGroundedTerminal(condEq) {
    return Array.from(condEq.querySelectorAll('Terminal')).some(t => t.getAttribute('cNodeName') === 'grounded');
}
function typeStr(condEq) {
    var _a;
    if (condEq.getAttribute('type') === 'DIS' &&
        (containsGroundedTerminal(condEq) || containsEarthSwitchDefinition(condEq))) {
        // these checks only carried out for a three phase system
        return 'ERS';
    }
    return (_a = condEq.getAttribute('type')) !== null && _a !== void 0 ? _a : '';
}
function getIcon(condEq) {
    var _a;
    return (_a = typeIcons[typeStr(condEq)]) !== null && _a !== void 0 ? _a : generalConductingEquipmentIcon;
}

/** Pane rendering `EqSubFunction` element with its children */
let EqSubFunctionEditor = class EqSubFunctionEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        this.showfunctions = false;
    }
    get header() {
        const name = this.element.getAttribute('name');
        const desc = this.element.getAttribute('desc');
        const type = this.element.getAttribute('type');
        return `${name}${desc ? ` - ${desc}` : ''}${type ? ` (${type})` : ''}`;
    }
    renderLNodes() {
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderEqSubFunctions() {
        const eqSubFunctions = getChildElementsByTagName(this.element, 'EqSubFunction');
        return x ` ${eqSubFunctions.map(eqSubFunction => x `<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${eqSubFunction}
        ></eq-sub-function-editor>`)}`;
    }
    render() {
        return x `<oscd-action-pane label="${this.header}" icon="functions" secondary>
      ${renderGeneralEquipment(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
    }
};
EqSubFunctionEditor.styles = i$3 `
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
__decorate([
    n$1({ attribute: false })
], EqSubFunctionEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], EqSubFunctionEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], EqSubFunctionEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: Boolean })
], EqSubFunctionEditor.prototype, "showfunctions", void 0);
__decorate([
    t$1()
], EqSubFunctionEditor.prototype, "header", null);
EqSubFunctionEditor = __decorate([
    e$2('eq-sub-function-editor')
], EqSubFunctionEditor);

/** Pane rendering `EqFunction` element with its children */
let EqFunctionEditor = class EqFunctionEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        this.showfunctions = false;
    }
    get header() {
        const name = this.element.getAttribute('name');
        const desc = this.element.getAttribute('desc');
        const type = this.element.getAttribute('type');
        return `${name}${desc ? ` - ${desc}` : ''}${type ? ` (${type})` : ''}`;
    }
    renderLNodes() {
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderEqSubFunctions() {
        const eqSubFunctions = getChildElementsByTagName(this.element, 'EqSubFunction');
        return x ` ${eqSubFunctions.map(eqSubFunction => x `<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${eqSubFunction}
          ?showfunctions=${this.showfunctions}
        ></eq-sub-function-editor>`)}`;
    }
    render() {
        return x `<oscd-action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
    >
      ${renderGeneralEquipment(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
    }
};
EqFunctionEditor.styles = i$3 `
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
__decorate([
    n$1({ attribute: false })
], EqFunctionEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], EqFunctionEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], EqFunctionEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: Boolean })
], EqFunctionEditor.prototype, "showfunctions", void 0);
__decorate([
    t$1()
], EqFunctionEditor.prototype, "header", null);
EqFunctionEditor = __decorate([
    e$2('eq-function-editor')
], EqFunctionEditor);

let GeneralEquipmentEditor = class GeneralEquipmentEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        /** Whether `Function` and `SubFunction` are rendered */
        this.showfunctions = false;
    }
    get header() {
        var _a;
        const name = (_a = this.element.getAttribute('name')) !== null && _a !== void 0 ? _a : '';
        const desc = this.element.getAttribute('desc');
        if (!this.showfunctions)
            return `${name}`;
        return `${name} ${desc ? `—  ${desc}` : ''}`;
    }
    renderLNodes() {
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderEqFunctions() {
        const eFunctions = getChildElementsByTagName(this.element, 'EqFunction');
        return eFunctions.length
            ? x `${eFunctions.map(eFunction => x ` <eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${eFunction}
            ></eq-function-editor>`)}`
            : x ``;
    }
    render() {
        if (this.showfunctions)
            return x `<oscd-action-pane label=${this.header}>
        ${this.renderLNodes()} ${this.renderEqFunctions()}
      </oscd-action-pane>`;
        return x `<oscd-action-icon label=${this.header}>
      <mwc-icon slot="icon">${generalConductingEquipmentIcon}</mwc-icon>
    </oscd-action-icon>`;
    }
};
GeneralEquipmentEditor.styles = i$3 `
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
__decorate([
    n$1({ attribute: false })
], GeneralEquipmentEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], GeneralEquipmentEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], GeneralEquipmentEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: Boolean })
], GeneralEquipmentEditor.prototype, "showfunctions", void 0);
__decorate([
    t$1()
], GeneralEquipmentEditor.prototype, "header", null);
GeneralEquipmentEditor = __decorate([
    e$2('general-equipment-editor')
], GeneralEquipmentEditor);

/** Pane rendering `SubFunction` element with its children */
let SubFunctionEditor = class SubFunctionEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        this.showfunctions = false;
    }
    get header() {
        const name = this.element.getAttribute('name');
        const desc = this.element.getAttribute('desc');
        const type = this.element.getAttribute('type');
        return `${name}${desc ? ` - ${desc}` : ''}${type ? ` (${type})` : ''}`;
    }
    renderLNodes() {
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderSubFunctions() {
        const subfunctions = getChildElementsByTagName(this.element, 'SubFunction');
        return x ` ${subfunctions.map(subFunction => x `<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${subFunction}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`)}`;
    }
    render() {
        return x `<oscd-action-pane label="${this.header}" icon="functions" secondary>
      ${renderGeneralEquipment(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
    }
};
SubFunctionEditor.styles = i$3 `
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
__decorate([
    n$1({ attribute: false })
], SubFunctionEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], SubFunctionEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], SubFunctionEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: Boolean })
], SubFunctionEditor.prototype, "showfunctions", void 0);
__decorate([
    t$1()
], SubFunctionEditor.prototype, "header", null);
SubFunctionEditor = __decorate([
    e$2('sub-function-editor')
], SubFunctionEditor);

/** Pane rendering `Function` element with its children */
let FunctionEditor = class FunctionEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        this.showfunctions = false;
    }
    get header() {
        const name = this.element.getAttribute('name');
        const desc = this.element.getAttribute('desc');
        const type = this.element.getAttribute('type');
        return `${name}${desc ? ` - ${desc}` : ''}${type ? ` (${type})` : ''}`;
    }
    renderLNodes() {
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderSubFunctions() {
        const subfunctions = getChildElementsByTagName(this.element, 'SubFunction');
        return x ` ${subfunctions.map(subFunction => x `<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${subFunction}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`)}`;
    }
    render() {
        return x `<oscd-action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      >${renderGeneralEquipment(this.doc, this.element, this.showfunctions)}${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
    }
};
FunctionEditor.styles = i$3 `
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
__decorate([
    n$1({ attribute: false })
], FunctionEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], FunctionEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], FunctionEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: Boolean })
], FunctionEditor.prototype, "showfunctions", void 0);
__decorate([
    t$1()
], FunctionEditor.prototype, "header", null);
FunctionEditor = __decorate([
    e$2('function-editor')
], FunctionEditor);

/** [[`SubstationEditor`]] subeditor for a child-less `SubEquipment` element. */
let SubEquipmentEditor = class SubEquipmentEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
    }
    /** SubEquipment name attribute */
    get label() {
        const name = `${this.element.hasAttribute('name')
            ? `${this.element.getAttribute('name')}`
            : ''}`;
        const description = `${this.element.hasAttribute('desc')
            ? ` - ${this.element.getAttribute('desc')}`
            : ''}`;
        const phase = `${this.element.hasAttribute('phase')
            ? ` (${this.element.getAttribute('phase')})`
            : ''}`;
        return `${name}${description}${phase}`;
    }
    renderLNodes() {
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderEqFunctions() {
        const eqFunctions = getChildElementsByTagName(this.element, 'EqFunction');
        return eqFunctions.length
            ? x ` ${eqFunctions.map(eqFunction => x `<eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${eqFunction}
            ></eq-function-editor>`)}`
            : x ``;
    }
    render() {
        return x `<oscd-action-pane label="${this.label}">
      ${this.renderLNodes()} ${this.renderEqFunctions()}
    </oscd-action-pane> `;
    }
};
SubEquipmentEditor.styles = i$3 `
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
__decorate([
    n$1({ attribute: false })
], SubEquipmentEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], SubEquipmentEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], SubEquipmentEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: String })
], SubEquipmentEditor.prototype, "label", null);
SubEquipmentEditor = __decorate([
    e$2('sub-equipment-editor')
], SubEquipmentEditor);

let TapChangerEditor = class TapChangerEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        /** Whether `EqFunction` and `SubEquipment` are rendered */
        this.showfunctions = false;
    }
    get header() {
        var _a;
        const name = (_a = this.element.getAttribute('name')) !== null && _a !== void 0 ? _a : '';
        const desc = this.element.getAttribute('desc');
        return `${name} ${desc ? `—${desc}` : ''}`;
    }
    renderLNodes() {
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderEqFunctions() {
        if (!this.showfunctions)
            return x ``;
        const eqFunctions = getChildElementsByTagName(this.element, 'EqFunction');
        return x ` ${eqFunctions.map(eqFunction => x `<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${eqFunction}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`)}`;
    }
    renderSubEquipments() {
        if (!this.showfunctions)
            return x ``;
        const subEquipments = getChildElementsByTagName(this.element, 'SubEquipment');
        return x ` ${subEquipments.map(subEquipment => x `<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${subEquipment}
        ></sub-equipment-editor>`)}`;
    }
    render() {
        return x `<oscd-action-pane label=${this.header}>
      ${this.renderLNodes()} ${this.renderEqFunctions()}
      ${this.renderSubEquipments()}
    </oscd-action-pane>`;
    }
};
TapChangerEditor.styles = i$3 `
    ${styles}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
__decorate([
    n$1({ attribute: false })
], TapChangerEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], TapChangerEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], TapChangerEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: Boolean })
], TapChangerEditor.prototype, "showfunctions", void 0);
__decorate([
    t$1()
], TapChangerEditor.prototype, "header", null);
TapChangerEditor = __decorate([
    e$2('tapchanger-editor')
], TapChangerEditor);

let TransformerWindingEditor = class TransformerWindingEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        /** Whether `EqFunction` elements are rendered */
        this.showfunctions = false;
    }
    /** TransformerWinding name attribute */
    get label() {
        const name = `${this.element.hasAttribute('name')
            ? `${this.element.getAttribute('name')}`
            : ''}`;
        const description = `${this.element.hasAttribute('desc')
            ? ` - ${this.element.getAttribute('desc')}`
            : ''}`;
        return `${name}${description}`;
    }
    renderLNodes() {
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderEqFunctions() {
        if (!this.showfunctions)
            return x ``;
        const eqFunctions = getChildElementsByTagName(this.element, 'EqFunction');
        return eqFunctions.length
            ? x ` ${eqFunctions.map(eqFunction => x `<eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${eqFunction}
              ?showfunctions=${this.showfunctions}
            ></eq-function-editor>`)}`
            : x ``;
    }
    renderTapChanger() {
        if (!this.showfunctions)
            return x ``;
        const tapChangers = getChildElementsByTagName(this.element, 'TapChanger');
        return tapChangers.length
            ? x ` ${tapChangers.map(tapChanger => x `<tapchanger-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${tapChanger}
              ?showfunctions=${this.showfunctions}
            ></tapchanger-editor>`)}`
            : x ``;
    }
    render() {
        return x `<oscd-action-pane label="${this.label}">
      ${this.renderLNodes()} ${this.renderEqFunctions()}
      ${this.renderTapChanger()}
    </oscd-action-pane> `;
    }
};
TransformerWindingEditor.styles = i$3 `
    ${styles}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
__decorate([
    n$1({ attribute: false })
], TransformerWindingEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], TransformerWindingEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], TransformerWindingEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: Boolean })
], TransformerWindingEditor.prototype, "showfunctions", void 0);
__decorate([
    n$1({ type: String })
], TransformerWindingEditor.prototype, "label", null);
TransformerWindingEditor = __decorate([
    e$2('transformer-winding-editor')
], TransformerWindingEditor);

/** [[`SubstationEditor`]] subeditor for a child-less `PowerTransformer` element. */
let PowerTransformerEditor = class PowerTransformerEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        /** Whether `EqFunction`, `SubEqFunction` and `SubEquipment` are rendered */
        this.showfunctions = false;
    }
    /** PowerTransformer name attribute */
    get name() {
        var _a;
        return (_a = this.element.getAttribute('name')) !== null && _a !== void 0 ? _a : 'UNDEFINED';
    }
    renderLNodes() {
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderEqFunctions() {
        if (!this.showfunctions)
            return x ``;
        const eqFunctions = getChildElementsByTagName(this.element, 'EqFunction');
        return x ` ${eqFunctions.map(eqFunction => x `<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${eqFunction}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`)}`;
    }
    renderSubEquipments() {
        if (!this.showfunctions)
            return x ``;
        const subEquipments = getChildElementsByTagName(this.element, 'SubEquipment');
        return x ` ${subEquipments.map(subEquipment => x `<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${subEquipment}
        ></sub-equipment-editor>`)}`;
    }
    // eslint-disable-next-line class-methods-use-this
    renderContentPane() {
        return x `<mwc-icon slot="icon" style="width:24px;height:24px"
      >${powerTransformerTwoWindingIcon}</mwc-icon
    > `;
    }
    renderTransformerWinding() {
        if (!this.showfunctions)
            return x ``;
        const transformerWindings = getChildElementsByTagName(this.element, 'TransformerWinding');
        return transformerWindings.length
            ? x `<div class="container">
          ${transformerWindings.map(transformerWinding => x `<transformer-winding-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${transformerWinding}
                ?showfunctions=${this.showfunctions}
              ></transformer-winding-editor>`)}
        </div>`
            : x ``;
    }
    // eslint-disable-next-line class-methods-use-this
    renderContentIcon() {
        return x `<mwc-icon slot="icon"
      >${powerTransformerTwoWindingIcon}</mwc-icon
    > `;
    }
    render() {
        if (this.showfunctions)
            return x `<oscd-action-pane label="${this.name}">
        ${this.renderContentPane()} ${this.renderLNodes()}
        ${this.renderEqFunctions()} ${this.renderSubEquipments()}
        ${this.renderTransformerWinding()}
      </oscd-action-pane> `;
        return x `<oscd-action-icon label="${this.name}"
      >${this.renderContentIcon()}</action-icon
    > `;
    }
};
PowerTransformerEditor.styles = i$3 `
    ${styles}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
__decorate([
    n$1({ attribute: false })
], PowerTransformerEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], PowerTransformerEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], PowerTransformerEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: String })
], PowerTransformerEditor.prototype, "name", null);
__decorate([
    n$1({ type: Boolean })
], PowerTransformerEditor.prototype, "showfunctions", void 0);
PowerTransformerEditor = __decorate([
    e$2('powertransformer-editor')
], PowerTransformerEditor);

/** [[`SubstationEditor`]] subeditor for a `ConductingEquipment` element. */
let ConductingEquipmentEditor = class ConductingEquipmentEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        /** Whether `EqFunction`, `SubEqFunction` and `SubEquipment` are rendered */
        this.showfunctions = false;
    }
    /** ConductingEquipment name attribute */
    get name() {
        var _a;
        return (_a = this.element.getAttribute('name')) !== null && _a !== void 0 ? _a : '';
    }
    renderLNodes() {
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderEqFunctions() {
        if (!this.showfunctions)
            return x ``;
        const eqFunctions = getChildElementsByTagName(this.element, 'EqFunction');
        return x ` ${eqFunctions.map(eqFunction => x `<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${eqFunction}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`)}`;
    }
    renderSubEquipments() {
        if (!this.showfunctions)
            return x ``;
        const subEquipments = getChildElementsByTagName(this.element, 'SubEquipment');
        return x ` ${subEquipments.map(subEquipment => x `<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${subEquipment}
        ></sub-equipment-editor>`)}`;
    }
    renderContentPane() {
        return x `<mwc-icon slot="icon" style="width:24px;height:24px"
      >${getIcon(this.element)}</mwc-icon
    > `;
    }
    renderContentIcon() {
        return x `<mwc-icon slot="icon">${getIcon(this.element)}</mwc-icon> `;
    }
    render() {
        if (this.showfunctions)
            return x `<oscd-action-pane label="${this.name}"
        >${this.renderContentPane()}${this.renderLNodes()}${this.renderEqFunctions()}${this.renderSubEquipments()}</action-pane
        ></action-pane
      >`;
        return x `<oscd-action-icon label="${this.name}"
      >${this.renderContentIcon()}</action-icon
    >`;
    }
};
ConductingEquipmentEditor.styles = i$3 `
    ${styles}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
__decorate([
    n$1({ attribute: false })
], ConductingEquipmentEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], ConductingEquipmentEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], ConductingEquipmentEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: String })
], ConductingEquipmentEditor.prototype, "name", null);
__decorate([
    n$1({ type: Boolean })
], ConductingEquipmentEditor.prototype, "showfunctions", void 0);
ConductingEquipmentEditor = __decorate([
    e$2('conducting-equipment-editor')
], ConductingEquipmentEditor);

/** [[`SubstationEditor`]] subeditor for a `Bay` element. */
let BayEditor = class BayEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        /** Whether `Function` and `SubFunction` are rendered */
        this.showfunctions = false;
    }
    get header() {
        var _a;
        const name = (_a = this.element.getAttribute('name')) !== null && _a !== void 0 ? _a : '';
        const desc = this.element.getAttribute('desc');
        return `${name} ${desc ? `- ${desc}` : ''}`;
    }
    renderLNodes() {
        if (!this.showfunctions)
            return x ``;
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderFunctions() {
        if (!this.showfunctions)
            return x ``;
        const functions = getChildElementsByTagName(this.element, 'Function');
        return x ` ${functions.map(fUnction => x `<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${fUnction}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`)}`;
    }
    render() {
        return x `<oscd-action-pane label="${this.header}">
      ${renderGeneralEquipment(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderFunctions()}
      <div
        class="${o({
            content: true,
            actionicon: !this.showfunctions,
        })}"
      >
        ${Array.from(getChildElementsByTagName(this.element, 'PowerTransformer')).map(pwt => x `<powertransformer-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${pwt}
              ?showfunctions=${this.showfunctions}
            ></powertransformer-editor>`)}
        ${Array.from(getChildElementsByTagName(this.element, 'ConductingEquipment')).map(voltageLevel => x `<conducting-equipment-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${voltageLevel}
              ?showfunctions=${this.showfunctions}
            ></conducting-equipment-editor>`)}
      </div>
    </oscd-action-pane> `;
    }
};
BayEditor.styles = i$3 `
    ${styles}

    .content.actionicon {
      display: grid;
      grid-gap: 12px;
      padding: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }

    conducting-equipment-editor[showfunctions] {
      margin: 4px 8px 16px;
    }
  `;
__decorate([
    n$1({ attribute: false })
], BayEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], BayEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], BayEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: Boolean })
], BayEditor.prototype, "showfunctions", void 0);
__decorate([
    n$1({ type: String })
], BayEditor.prototype, "header", null);
BayEditor = __decorate([
    e$2('bay-editor')
], BayEditor);

/** [[`Substation`]] subeditor for a `VoltageLevel` element. */
let VoltageLevelEditor = class VoltageLevelEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        /** Whether `Function` and `SubFunction` are rendered */
        this.showfunctions = false;
    }
    get voltage() {
        var _a;
        const V = this.element.querySelector(`VoltageLevel > Voltage`);
        if (V === null)
            return null;
        const v = (_a = V.textContent) !== null && _a !== void 0 ? _a : '';
        const m = V.getAttribute('multiplier');
        const u = m === null ? 'V' : ` ${m}V`;
        return v ? v + u : null;
    }
    get header() {
        var _a;
        const name = (_a = this.element.getAttribute('name')) !== null && _a !== void 0 ? _a : '';
        const desc = this.element.getAttribute('desc');
        return `${name} ${desc ? `- ${desc}` : ''}
    ${this.voltage === null ? '' : `(${this.voltage})`}`;
    }
    renderLNodes() {
        if (!this.showfunctions)
            return x ``;
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderFunctions() {
        if (!this.showfunctions)
            return x ``;
        const functions = getChildElementsByTagName(this.element, 'Function');
        return x ` ${functions.map(fUnction => x `<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${fUnction}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`)}`;
    }
    renderPowerTransformerContainer() {
        var _a, _b;
        const pwts = Array.from((_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelectorAll('VoltageLevel > PowerTransformer')) !== null && _b !== void 0 ? _b : []);
        return (pwts === null || pwts === void 0 ? void 0 : pwts.length)
            ? x `<div
          class="${o({
                ptrContent: true,
                actionicon: !this.showfunctions,
            })}"
        >
          ${pwts.map(pwt => x `<powertransformer-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${pwt}
                ?showfunctions=${this.showfunctions}
              ></powertransformer-editor>`)}
        </div>`
            : x ``;
    }
    render() {
        var _a, _b;
        return x `<oscd-action-pane label="${this.header}">
      ${renderGeneralEquipment(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderFunctions()}
      ${this.renderPowerTransformerContainer()}
      <div id="bayContainer">
        ${Array.from((_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelectorAll('Bay')) !== null && _b !== void 0 ? _b : []).map(bay => x `<bay-editor
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${bay}
            ?showfunctions=${this.showfunctions}
          ></bay-editor>`)}
      </div>
    </oscd-action-pane>`;
    }
};
VoltageLevelEditor.styles = i$3 `
    ${styles}

    #bayContainer {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #bayContainer {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
__decorate([
    n$1({ attribute: false })
], VoltageLevelEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], VoltageLevelEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], VoltageLevelEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: Boolean })
], VoltageLevelEditor.prototype, "showfunctions", void 0);
__decorate([
    n$1()
], VoltageLevelEditor.prototype, "voltage", null);
__decorate([
    n$1({ type: String })
], VoltageLevelEditor.prototype, "header", null);
VoltageLevelEditor = __decorate([
    e$2('voltage-level-editor')
], VoltageLevelEditor);

/** [[`Substation`]] plugin subeditor for editing `Substation` sections. */
let SubstationEditor = class SubstationEditor extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        /** Whether `Function` and `SubFunction` are rendered */
        this.showfunctions = false;
    }
    get header() {
        var _a;
        const name = (_a = this.element.getAttribute('name')) !== null && _a !== void 0 ? _a : '';
        const desc = this.element.getAttribute('desc');
        return `${name} ${desc ? `- ${desc}` : ''}`;
    }
    renderLNodes() {
        if (!this.showfunctions)
            return x ``;
        const lNodes = getChildElementsByTagName(this.element, 'LNode');
        return lNodes.length
            ? x `<div class="container lnode">
          ${lNodes.map(lNode => x `<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${lNode}
              ></l-node-editor>`)}
        </div>`
            : x ``;
    }
    renderFunctions() {
        if (!this.showfunctions)
            return x ``;
        const functions = getChildElementsByTagName(this.element, 'Function');
        return x ` ${functions.map(fUnction => x `<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${fUnction}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`)}`;
    }
    renderPowerTransformerContainer() {
        var _a, _b;
        const pwts = Array.from((_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelectorAll('Substation > PowerTransformer')) !== null && _b !== void 0 ? _b : []);
        return (pwts === null || pwts === void 0 ? void 0 : pwts.length)
            ? x `<div
          class="${o({
                ptrContent: true,
                actionicon: !this.showfunctions,
            })}"
        >
          ${pwts.map(pwt => x `<powertransformer-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${pwt}
                ?showfunctions=${this.showfunctions}
              ></powertransformer-editor>`)}
        </div>`
            : x ``;
    }
    render() {
        return x `<oscd-action-pane label="${this.header}">
      ${renderGeneralEquipment(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderFunctions()}
      ${this.renderPowerTransformerContainer()}
      ${Array.from(this.element.querySelectorAll('VoltageLevel')).map(voltageLevel => x `<voltage-level-editor
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${voltageLevel}
            ?showfunctions=${this.showfunctions}
          ></voltage-level-editor>`)}</action-pane
    >`;
    }
};
SubstationEditor.styles = i$3 `
    ${styles}
  `;
__decorate([
    n$1({ attribute: false })
], SubstationEditor.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], SubstationEditor.prototype, "editCount", void 0);
__decorate([
    n$1({ attribute: false })
], SubstationEditor.prototype, "element", void 0);
__decorate([
    n$1({ type: Boolean })
], SubstationEditor.prototype, "showfunctions", void 0);
__decorate([
    n$1({ type: String })
], SubstationEditor.prototype, "header", null);
SubstationEditor = __decorate([
    e$2('substation-editor')
], SubstationEditor);

function shouldShowFunctions() {
    return localStorage.getItem('showfunctions') === 'on';
}
/** [[`Zeroline`]] pane for displaying `Substation` and/or `IED` sections. */
let ZerolinePane = class ZerolinePane extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
    }
    renderSubstation() {
        var _a, _b, _c;
        // eslint-disable-next-line no-nested-ternary
        return ((_a = this.doc) === null || _a === void 0 ? void 0 : _a.querySelector(':root > Substation'))
            ? x `<section>
          ${Array.from((_b = this.doc.querySelectorAll(':root > Substation')) !== null && _b !== void 0 ? _b : []).map(substation => x `<substation-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${substation}
                ?showfunctions=${shouldShowFunctions()}
              ></substation-editor>`)}
        </section>`
            : !((_c = this.doc) === null || _c === void 0 ? void 0 : _c.querySelector(':root > Line, :root > Process'))
                ? x `<h1>
          <span style="color: var(--oscd-base1)">Substation Missing</span>
        </h1>`
                : x ``;
    }
    renderLines() {
        var _a, _b;
        return ((_a = this.doc) === null || _a === void 0 ? void 0 : _a.querySelector(':root > Line'))
            ? x `<section>
          ${Array.from((_b = this.doc.querySelectorAll('Line')) !== null && _b !== void 0 ? _b : []).map(line => x `<line-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${line}
                ?showfunctions=${shouldShowFunctions()}
              ></line-editor>`)}
        </section>`
            : x ``;
    }
    renderProcesses() {
        var _a, _b;
        return ((_a = this.doc) === null || _a === void 0 ? void 0 : _a.querySelector(':root > Process'))
            ? x `<section>
          ${Array.from((_b = this.doc.querySelectorAll(':root > Process')) !== null && _b !== void 0 ? _b : []).map(process => x `<process-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${process}
                ?showfunctions=${shouldShowFunctions()}
              ></process-editor>`)}
        </section>`
            : x ``;
    }
    /**
    render(): TemplateResult {
      return html`${this.renderSubstation()}${this.renderLines()}${this.renderProcesses()}`;
    } */
    render() {
        return x `${this.renderSubstation()}`;
    }
};
ZerolinePane.styles = i$3 `
    section {
      padding: 8px 12px 16px;
      display: grid;
      gap: 12px;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
__decorate([
    n$1({ attribute: false })
], ZerolinePane.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], ZerolinePane.prototype, "editCount", void 0);
ZerolinePane = __decorate([
    e$2('zeroline-pane')
], ZerolinePane);

/** An editor [[`plugin`]] for editing the `Substation` section. */
class SubstationEditorPlugin extends s {
    constructor() {
        super(...arguments);
        this.editCount = -1;
    }
    render() {
        return x `
      <zeroline-pane
        .editCount=${this.editCount}
        .doc=${this.doc}
      ></zeroline-pane>
    `;
    }
}
SubstationEditorPlugin.styles = i$3 `
    :host {
      width: 100vw;
    }
  `;
__decorate([
    n$1()
], SubstationEditorPlugin.prototype, "doc", void 0);
__decorate([
    n$1({ type: Number })
], SubstationEditorPlugin.prototype, "editCount", void 0);

export { SubstationEditorPlugin as default };
//# sourceMappingURL=scl-substation-editor.js.map
