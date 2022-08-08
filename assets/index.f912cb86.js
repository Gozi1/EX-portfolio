const zv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};zv();var Wo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Uv(n){if(n.__esModule)return n;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(n).forEach(function(t){var i=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:function(){return n[t]}})}),e}var Ht={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),Bv=Symbol.for("react.portal"),Hv=Symbol.for("react.fragment"),Vv=Symbol.for("react.strict_mode"),Gv=Symbol.for("react.profiler"),Wv=Symbol.for("react.provider"),jv=Symbol.for("react.context"),Xv=Symbol.for("react.forward_ref"),$v=Symbol.for("react.suspense"),qv=Symbol.for("react.memo"),Yv=Symbol.for("react.lazy"),Dd=Symbol.iterator;function Kv(n){return n===null||typeof n!="object"?null:(n=Dd&&n[Dd]||n["@@iterator"],typeof n=="function"?n:null)}var Lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rm=Object.assign,Pm={};function Ss(n,e,t){this.props=n,this.context=e,this.refs=Pm,this.updater=t||Lm}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ss.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Dm(){}Dm.prototype=Ss.prototype;function hf(n,e,t){this.props=n,this.context=e,this.refs=Pm,this.updater=t||Lm}var pf=hf.prototype=new Dm;pf.constructor=hf;Rm(pf,Ss.prototype);pf.isPureReactComponent=!0;var Id=Array.isArray,Im=Object.prototype.hasOwnProperty,mf={current:null},Nm={key:!0,ref:!0,__self:!0,__source:!0};function km(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Im.call(e,i)&&!Nm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Eo,type:n,key:s,ref:o,props:r,_owner:mf.current}}function Zv(n,e){return{$$typeof:Eo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function gf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Eo}function Qv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Nd=/\/+/g;function Jl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Qv(""+n.key):e.toString(36)}function Da(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Eo:case Bv:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Jl(o,0):i,Id(r)?(t="",n!=null&&(t=n.replace(Nd,"$&/")+"/"),Da(r,e,t,"",function(u){return u})):r!=null&&(gf(r)&&(r=Zv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Nd,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Id(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Jl(s,a);o+=Da(s,e,t,l,r)}else if(l=Kv(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Jl(s,a++),o+=Da(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function jo(n,e,t){if(n==null)return n;var i=[],r=0;return Da(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Jv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Nt={current:null},Ia={transition:null},e_={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:mf};Ce.Children={map:jo,forEach:function(n,e,t){jo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return jo(n,function(){e++}),e},toArray:function(n){return jo(n,function(e){return e})||[]},only:function(n){if(!gf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ce.Component=Ss;Ce.Fragment=Hv;Ce.Profiler=Gv;Ce.PureComponent=hf;Ce.StrictMode=Vv;Ce.Suspense=$v;Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e_;Ce.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Rm({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Im.call(e,l)&&!Nm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Eo,type:n.type,key:r,ref:s,props:i,_owner:o}};Ce.createContext=function(n){return n={$$typeof:jv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Wv,_context:n},n.Consumer=n};Ce.createElement=km;Ce.createFactory=function(n){var e=km.bind(null,n);return e.type=n,e};Ce.createRef=function(){return{current:null}};Ce.forwardRef=function(n){return{$$typeof:Xv,render:n}};Ce.isValidElement=gf;Ce.lazy=function(n){return{$$typeof:Yv,_payload:{_status:-1,_result:n},_init:Jv}};Ce.memo=function(n,e){return{$$typeof:qv,type:n,compare:e===void 0?null:e}};Ce.startTransition=function(n){var e=Ia.transition;Ia.transition={};try{n()}finally{Ia.transition=e}};Ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ce.useCallback=function(n,e){return Nt.current.useCallback(n,e)};Ce.useContext=function(n){return Nt.current.useContext(n)};Ce.useDebugValue=function(){};Ce.useDeferredValue=function(n){return Nt.current.useDeferredValue(n)};Ce.useEffect=function(n,e){return Nt.current.useEffect(n,e)};Ce.useId=function(){return Nt.current.useId()};Ce.useImperativeHandle=function(n,e,t){return Nt.current.useImperativeHandle(n,e,t)};Ce.useInsertionEffect=function(n,e){return Nt.current.useInsertionEffect(n,e)};Ce.useLayoutEffect=function(n,e){return Nt.current.useLayoutEffect(n,e)};Ce.useMemo=function(n,e){return Nt.current.useMemo(n,e)};Ce.useReducer=function(n,e,t){return Nt.current.useReducer(n,e,t)};Ce.useRef=function(n){return Nt.current.useRef(n)};Ce.useState=function(n){return Nt.current.useState(n)};Ce.useSyncExternalStore=function(n,e,t){return Nt.current.useSyncExternalStore(n,e,t)};Ce.useTransition=function(){return Nt.current.useTransition()};Ce.version="18.2.0";Ht.exports=Ce;var or=Ht.exports,uc={},vf={exports:{}},en={},Fm={exports:{}},Om={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(P,D){var F=P.length;P.push(D);e:for(;0<F;){var q=F-1>>>1,$=P[q];if(0<r($,D))P[q]=D,P[F]=$,F=q;else break e}}function t(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var D=P[0],F=P.pop();if(F!==D){P[0]=F;e:for(var q=0,$=P.length,J=$>>>1;q<J;){var ae=2*(q+1)-1,he=P[ae],V=ae+1,Xe=P[V];if(0>r(he,F))V<$&&0>r(Xe,he)?(P[q]=Xe,P[V]=F,q=V):(P[q]=he,P[ae]=F,q=ae);else if(V<$&&0>r(Xe,F))P[q]=Xe,P[V]=F,q=V;else break e}}return D}function r(P,D){var F=P.sortIndex-D.sortIndex;return F!==0?F:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,_=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var D=t(u);D!==null;){if(D.callback===null)i(u);else if(D.startTime<=P)i(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=t(u)}}function S(P){if(h=!1,y(P),!_)if(t(l)!==null)_=!0,U(M);else{var D=t(u);D!==null&&X(S,D.startTime-P)}}function M(P,D){_=!1,h&&(h=!1,m(x),x=-1),g=!0;var F=d;try{for(y(D),f=t(l);f!==null&&(!(f.expirationTime>D)||P&&!k());){var q=f.callback;if(typeof q=="function"){f.callback=null,d=f.priorityLevel;var $=q(f.expirationTime<=D);D=n.unstable_now(),typeof $=="function"?f.callback=$:f===t(l)&&i(l),y(D)}else i(l);f=t(l)}if(f!==null)var J=!0;else{var ae=t(u);ae!==null&&X(S,ae.startTime-D),J=!1}return J}finally{f=null,d=F,g=!1}}var T=!1,A=null,x=-1,C=5,R=-1;function k(){return!(n.unstable_now()-R<C)}function K(){if(A!==null){var P=n.unstable_now();R=P;var D=!0;try{D=A(!0,P)}finally{D?Z():(T=!1,A=null)}}else T=!1}var Z;if(typeof v=="function")Z=function(){v(K)};else if(typeof MessageChannel!="undefined"){var I=new MessageChannel,W=I.port2;I.port1.onmessage=K,Z=function(){W.postMessage(null)}}else Z=function(){p(K,0)};function U(P){A=P,T||(T=!0,Z())}function X(P,D){x=p(function(){P(n.unstable_now())},D)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_continueExecution=function(){_||g||(_=!0,U(M))},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(P){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var F=d;d=D;try{return P()}finally{d=F}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=d;d=P;try{return D()}finally{d=F}},n.unstable_scheduleCallback=function(P,D,F){var q=n.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?q+F:q):F=q,P){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=F+$,P={id:c++,callback:D,priorityLevel:P,startTime:F,expirationTime:$,sortIndex:-1},F>q?(P.sortIndex=F,e(u,P),t(l)===null&&P===t(u)&&(h?(m(x),x=-1):h=!0,X(S,F-q))):(P.sortIndex=$,e(l,P),_||g||(_=!0,U(M))),P},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(P){var D=d;return function(){var F=d;d=D;try{return P.apply(this,arguments)}finally{d=F}}}})(Om);Fm.exports=Om;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=Ht.exports,Jt=Fm.exports;function Q(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Um=new Set,ro={};function xr(n,e){us(n,e),us(n+"Capture",e)}function us(n,e){for(ro[n]=e,n=0;n<e.length;n++)Um.add(e[n])}var ri=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),cc=Object.prototype.hasOwnProperty,t_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kd={},Fd={};function n_(n){return cc.call(Fd,n)?!0:cc.call(kd,n)?!1:t_.test(n)?Fd[n]=!0:(kd[n]=!0,!1)}function i_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function r_(n,e,t,i){if(e===null||typeof e=="undefined"||i_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){xt[n]=new kt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];xt[e]=new kt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){xt[n]=new kt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){xt[n]=new kt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){xt[n]=new kt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){xt[n]=new kt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){xt[n]=new kt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){xt[n]=new kt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){xt[n]=new kt(n,5,!1,n.toLowerCase(),null,!1,!1)});var _f=/[\-:]([a-z])/g;function yf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(_f,yf);xt[e]=new kt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(_f,yf);xt[e]=new kt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(_f,yf);xt[e]=new kt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){xt[n]=new kt(n,1,!1,n.toLowerCase(),null,!1,!1)});xt.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){xt[n]=new kt(n,1,!1,n.toLowerCase(),null,!0,!0)});function xf(n,e,t,i){var r=xt.hasOwnProperty(e)?xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(r_(e,t,r,i)&&(t=null),i||r===null?n_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ui=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),Sf=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),Bm=Symbol.for("react.provider"),Hm=Symbol.for("react.context"),Mf=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),hc=Symbol.for("react.suspense_list"),wf=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),Vm=Symbol.for("react.offscreen"),Od=Symbol.iterator;function Rs(n){return n===null||typeof n!="object"?null:(n=Od&&n[Od]||n["@@iterator"],typeof n=="function"?n:null)}var Qe=Object.assign,eu;function Hs(n){if(eu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);eu=e&&e[1]||""}return`
`+eu+n}var tu=!1;function nu(n,e){if(!n||tu)return"";tu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{tu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Hs(n):""}function s_(n){switch(n.tag){case 5:return Hs(n.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 2:case 15:return n=nu(n.type,!1),n;case 11:return n=nu(n.type.render,!1),n;case 1:return n=nu(n.type,!0),n;default:return""}}function pc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Vr:return"Fragment";case Hr:return"Portal";case fc:return"Profiler";case Sf:return"StrictMode";case dc:return"Suspense";case hc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Hm:return(n.displayName||"Context")+".Consumer";case Bm:return(n._context.displayName||"Context")+".Provider";case Mf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case wf:return e=n.displayName||null,e!==null?e:pc(n.type)||"Memo";case wi:e=n._payload,n=n._init;try{return pc(n(e))}catch{}}return null}function o_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pc(e);case 8:return e===Sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ui(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Gm(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a_(n){var e=Gm(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function $o(n){n._valueTracker||(n._valueTracker=a_(n))}function Wm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Gm(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Xa(n){if(n=n||(typeof document!="undefined"?document:void 0),typeof n=="undefined")return null;try{return n.activeElement||n.body}catch{return n.body}}function mc(n,e){var t=e.checked;return Qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function zd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ui(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jm(n,e){e=e.checked,e!=null&&xf(n,"checked",e,!1)}function gc(n,e){jm(n,e);var t=Ui(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?vc(n,e.type,t):e.hasOwnProperty("defaultValue")&&vc(n,e.type,Ui(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ud(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function vc(n,e,t){(e!=="number"||Xa(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Vs=Array.isArray;function ts(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ui(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function _c(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return Qe({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Bd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Q(92));if(Vs(t)){if(1<t.length)throw Error(Q(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ui(t)}}function Xm(n,e){var t=Ui(e.value),i=Ui(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Hd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function $m(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?$m(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qo,qm=function(n){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function so(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var $s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l_=["Webkit","ms","Moz","O"];Object.keys($s).forEach(function(n){l_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),$s[e]=$s[n]})});function Ym(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||$s.hasOwnProperty(n)&&$s[n]?(""+e).trim():e+"px"}function Km(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Ym(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var u_=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xc(n,e){if(e){if(u_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function Sc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mc=null;function Ef(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var wc=null,ns=null,is=null;function Vd(n){if(n=Co(n)){if(typeof wc!="function")throw Error(Q(280));var e=n.stateNode;e&&(e=bl(e),wc(n.stateNode,n.type,e))}}function Zm(n){ns?is?is.push(n):is=[n]:ns=n}function Qm(){if(ns){var n=ns,e=is;if(is=ns=null,Vd(n),e)for(n=0;n<e.length;n++)Vd(e[n])}}function Jm(n,e){return n(e)}function eg(){}var iu=!1;function tg(n,e,t){if(iu)return n(e,t);iu=!0;try{return Jm(n,e,t)}finally{iu=!1,(ns!==null||is!==null)&&(eg(),Qm())}}function oo(n,e){var t=n.stateNode;if(t===null)return null;var i=bl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Q(231,e,typeof t));return t}var Ec=!1;if(ri)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Ec=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Ec=!1}function c_(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var qs=!1,$a=null,qa=!1,Tc=null,f_={onError:function(n){qs=!0,$a=n}};function d_(n,e,t,i,r,s,o,a,l){qs=!1,$a=null,c_.apply(f_,arguments)}function h_(n,e,t,i,r,s,o,a,l){if(d_.apply(this,arguments),qs){if(qs){var u=$a;qs=!1,$a=null}else throw Error(Q(198));qa||(qa=!0,Tc=u)}}function Sr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function ng(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Gd(n){if(Sr(n)!==n)throw Error(Q(188))}function p_(n){var e=n.alternate;if(!e){if(e=Sr(n),e===null)throw Error(Q(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Gd(r),n;if(s===i)return Gd(r),e;s=s.sibling}throw Error(Q(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Q(189))}}if(t.alternate!==i)throw Error(Q(190))}if(t.tag!==3)throw Error(Q(188));return t.stateNode.current===t?n:e}function ig(n){return n=p_(n),n!==null?rg(n):null}function rg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=rg(n);if(e!==null)return e;n=n.sibling}return null}var sg=Jt.unstable_scheduleCallback,Wd=Jt.unstable_cancelCallback,m_=Jt.unstable_shouldYield,g_=Jt.unstable_requestPaint,it=Jt.unstable_now,v_=Jt.unstable_getCurrentPriorityLevel,Tf=Jt.unstable_ImmediatePriority,og=Jt.unstable_UserBlockingPriority,Ya=Jt.unstable_NormalPriority,__=Jt.unstable_LowPriority,ag=Jt.unstable_IdlePriority,Ml=null,Un=null;function y_(n){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(Ml,n,void 0,(n.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:M_,x_=Math.log,S_=Math.LN2;function M_(n){return n>>>=0,n===0?32:31-(x_(n)/S_|0)|0}var Yo=64,Ko=4194304;function Gs(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ka(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Gs(a):(s&=o,s!==0&&(i=Gs(s)))}else o=t&~r,o!==0?i=Gs(o):s!==0&&(i=Gs(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Mn(e),r=1<<t,i|=n[t],e&=~r;return i}function w_(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E_(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Mn(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=w_(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function bc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function lg(){var n=Yo;return Yo<<=1,(Yo&4194240)===0&&(Yo=64),n}function ru(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function To(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Mn(e),n[e]=t}function T_(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Mn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function bf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Mn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ze=0;function ug(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var cg,Cf,fg,dg,hg,Cc=!1,Zo=[],Li=null,Ri=null,Pi=null,ao=new Map,lo=new Map,Ti=[],b_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jd(n,e){switch(n){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Ri=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function Ds(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Co(e),e!==null&&Cf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function C_(n,e,t,i,r){switch(e){case"focusin":return Li=Ds(Li,n,e,t,i,r),!0;case"dragenter":return Ri=Ds(Ri,n,e,t,i,r),!0;case"mouseover":return Pi=Ds(Pi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ao.set(s,Ds(ao.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,lo.set(s,Ds(lo.get(s)||null,n,e,t,i,r)),!0}return!1}function pg(n){var e=er(n.target);if(e!==null){var t=Sr(e);if(t!==null){if(e=t.tag,e===13){if(e=ng(t),e!==null){n.blockedOn=e,hg(n.priority,function(){fg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Na(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ac(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Mc=i,t.target.dispatchEvent(i),Mc=null}else return e=Co(t),e!==null&&Cf(e),n.blockedOn=t,!1;e.shift()}return!0}function Xd(n,e,t){Na(n)&&t.delete(e)}function A_(){Cc=!1,Li!==null&&Na(Li)&&(Li=null),Ri!==null&&Na(Ri)&&(Ri=null),Pi!==null&&Na(Pi)&&(Pi=null),ao.forEach(Xd),lo.forEach(Xd)}function Is(n,e){n.blockedOn===e&&(n.blockedOn=null,Cc||(Cc=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,A_)))}function uo(n){function e(r){return Is(r,n)}if(0<Zo.length){Is(Zo[0],n);for(var t=1;t<Zo.length;t++){var i=Zo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Li!==null&&Is(Li,n),Ri!==null&&Is(Ri,n),Pi!==null&&Is(Pi,n),ao.forEach(e),lo.forEach(e),t=0;t<Ti.length;t++)i=Ti[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ti.length&&(t=Ti[0],t.blockedOn===null);)pg(t),t.blockedOn===null&&Ti.shift()}var rs=ui.ReactCurrentBatchConfig,Za=!0;function L_(n,e,t,i){var r=ze,s=rs.transition;rs.transition=null;try{ze=1,Af(n,e,t,i)}finally{ze=r,rs.transition=s}}function R_(n,e,t,i){var r=ze,s=rs.transition;rs.transition=null;try{ze=4,Af(n,e,t,i)}finally{ze=r,rs.transition=s}}function Af(n,e,t,i){if(Za){var r=Ac(n,e,t,i);if(r===null)pu(n,e,i,Qa,t),jd(n,i);else if(C_(r,n,e,t,i))i.stopPropagation();else if(jd(n,i),e&4&&-1<b_.indexOf(n)){for(;r!==null;){var s=Co(r);if(s!==null&&cg(s),s=Ac(n,e,t,i),s===null&&pu(n,e,i,Qa,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else pu(n,e,i,null,t)}}var Qa=null;function Ac(n,e,t,i){if(Qa=null,n=Ef(i),n=er(n),n!==null)if(e=Sr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=ng(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Qa=n,null}function mg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v_()){case Tf:return 1;case og:return 4;case Ya:case __:return 16;case ag:return 536870912;default:return 16}default:return 16}}var Ci=null,Lf=null,ka=null;function gg(){if(ka)return ka;var n,e=Lf,t=e.length,i,r="value"in Ci?Ci.value:Ci.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ka=r.slice(n,1<i?1-i:void 0)}function Fa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Qo(){return!0}function $d(){return!1}function tn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qo:$d,this.isPropagationStopped=$d,this}return Qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rf=tn(Ms),bo=Qe({},Ms,{view:0,detail:0}),P_=tn(bo),su,ou,Ns,wl=Qe({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ns&&(Ns&&n.type==="mousemove"?(su=n.screenX-Ns.screenX,ou=n.screenY-Ns.screenY):ou=su=0,Ns=n),su)},movementY:function(n){return"movementY"in n?n.movementY:ou}}),qd=tn(wl),D_=Qe({},wl,{dataTransfer:0}),I_=tn(D_),N_=Qe({},bo,{relatedTarget:0}),au=tn(N_),k_=Qe({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),F_=tn(k_),O_=Qe({},Ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),z_=tn(O_),U_=Qe({},Ms,{data:0}),Yd=tn(U_),B_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G_(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=V_[n])?!!e[n]:!1}function Pf(){return G_}var W_=Qe({},bo,{key:function(n){if(n.key){var e=B_[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?H_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pf,charCode:function(n){return n.type==="keypress"?Fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),j_=tn(W_),X_=Qe({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=tn(X_),$_=Qe({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pf}),q_=tn($_),Y_=Qe({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),K_=tn(Y_),Z_=Qe({},wl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Q_=tn(Z_),J_=[9,13,27,32],Df=ri&&"CompositionEvent"in window,Ys=null;ri&&"documentMode"in document&&(Ys=document.documentMode);var ey=ri&&"TextEvent"in window&&!Ys,vg=ri&&(!Df||Ys&&8<Ys&&11>=Ys),Zd=String.fromCharCode(32),Qd=!1;function _g(n,e){switch(n){case"keyup":return J_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Gr=!1;function ty(n,e){switch(n){case"compositionend":return yg(e);case"keypress":return e.which!==32?null:(Qd=!0,Zd);case"textInput":return n=e.data,n===Zd&&Qd?null:n;default:return null}}function ny(n,e){if(Gr)return n==="compositionend"||!Df&&_g(n,e)?(n=gg(),ka=Lf=Ci=null,Gr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vg&&e.locale!=="ko"?null:e.data;default:return null}}var iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!iy[n.type]:e==="textarea"}function xg(n,e,t,i){Zm(i),e=Ja(e,"onChange"),0<e.length&&(t=new Rf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ks=null,co=null;function ry(n){Pg(n,0)}function El(n){var e=Xr(n);if(Wm(e))return n}function sy(n,e){if(n==="change")return e}var Sg=!1;if(ri){var lu;if(ri){var uu="oninput"in document;if(!uu){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),uu=typeof eh.oninput=="function"}lu=uu}else lu=!1;Sg=lu&&(!document.documentMode||9<document.documentMode)}function th(){Ks&&(Ks.detachEvent("onpropertychange",Mg),co=Ks=null)}function Mg(n){if(n.propertyName==="value"&&El(co)){var e=[];xg(e,co,n,Ef(n)),tg(ry,e)}}function oy(n,e,t){n==="focusin"?(th(),Ks=e,co=t,Ks.attachEvent("onpropertychange",Mg)):n==="focusout"&&th()}function ay(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return El(co)}function ly(n,e){if(n==="click")return El(e)}function uy(n,e){if(n==="input"||n==="change")return El(e)}function cy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Tn=typeof Object.is=="function"?Object.is:cy;function fo(n,e){if(Tn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!cc.call(e,r)||!Tn(n[r],e[r]))return!1}return!0}function nh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ih(n,e){var t=nh(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=nh(t)}}function wg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?wg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Eg(){for(var n=window,e=Xa();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Xa(n.document)}return e}function If(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function fy(n){var e=Eg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&wg(t.ownerDocument.documentElement,t)){if(i!==null&&If(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=ih(t,s);var o=ih(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var dy=ri&&"documentMode"in document&&11>=document.documentMode,Wr=null,Lc=null,Zs=null,Rc=!1;function rh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Rc||Wr==null||Wr!==Xa(i)||(i=Wr,"selectionStart"in i&&If(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zs&&fo(Zs,i)||(Zs=i,i=Ja(Lc,"onSelect"),0<i.length&&(e=new Rf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Wr)))}function Jo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var jr={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},cu={},Tg={};ri&&(Tg=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function Tl(n){if(cu[n])return cu[n];if(!jr[n])return n;var e=jr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Tg)return cu[n]=e[t];return n}var bg=Tl("animationend"),Cg=Tl("animationiteration"),Ag=Tl("animationstart"),Lg=Tl("transitionend"),Rg=new Map,sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hi(n,e){Rg.set(n,e),xr(e,[n])}for(var fu=0;fu<sh.length;fu++){var du=sh[fu],hy=du.toLowerCase(),py=du[0].toUpperCase()+du.slice(1);Hi(hy,"on"+py)}Hi(bg,"onAnimationEnd");Hi(Cg,"onAnimationIteration");Hi(Ag,"onAnimationStart");Hi("dblclick","onDoubleClick");Hi("focusin","onFocus");Hi("focusout","onBlur");Hi(Lg,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function oh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,h_(i,e,void 0,n),n.currentTarget=null}function Pg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;oh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;oh(r,a,u),s=l}}}if(qa)throw n=Tc,qa=!1,Tc=null,n}function Ge(n,e){var t=e[kc];t===void 0&&(t=e[kc]=new Set);var i=n+"__bubble";t.has(i)||(Dg(e,n,2,!1),t.add(i))}function hu(n,e,t){var i=0;e&&(i|=4),Dg(t,n,i,e)}var ea="_reactListening"+Math.random().toString(36).slice(2);function ho(n){if(!n[ea]){n[ea]=!0,Um.forEach(function(t){t!=="selectionchange"&&(my.has(t)||hu(t,!1,n),hu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ea]||(e[ea]=!0,hu("selectionchange",!1,e))}}function Dg(n,e,t,i){switch(mg(e)){case 1:var r=L_;break;case 4:r=R_;break;default:r=Af}t=r.bind(null,e,t,n),r=void 0,!Ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function pu(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}tg(function(){var u=s,c=Ef(t),f=[];e:{var d=Rg.get(n);if(d!==void 0){var g=Rf,_=n;switch(n){case"keypress":if(Fa(t)===0)break e;case"keydown":case"keyup":g=j_;break;case"focusin":_="focus",g=au;break;case"focusout":_="blur",g=au;break;case"beforeblur":case"afterblur":g=au;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=I_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=q_;break;case bg:case Cg:case Ag:g=F_;break;case Lg:g=K_;break;case"scroll":g=P_;break;case"wheel":g=Q_;break;case"copy":case"cut":case"paste":g=z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Kd}var h=(e&4)!==0,p=!h&&n==="scroll",m=h?d!==null?d+"Capture":null:d;h=[];for(var v=u,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,m!==null&&(S=oo(v,m),S!=null&&h.push(po(v,S,y)))),p)break;v=v.return}0<h.length&&(d=new g(d,_,null,t,c),f.push({event:d,listeners:h}))}}if((e&7)===0){e:{if(d=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",d&&t!==Mc&&(_=t.relatedTarget||t.fromElement)&&(er(_)||_[si]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=t.relatedTarget||t.toElement,g=u,_=_?er(_):null,_!==null&&(p=Sr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(h=qd,S="onMouseLeave",m="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(h=Kd,S="onPointerLeave",m="onPointerEnter",v="pointer"),p=g==null?d:Xr(g),y=_==null?d:Xr(_),d=new h(S,v+"leave",g,t,c),d.target=p,d.relatedTarget=y,S=null,er(c)===u&&(h=new h(m,v+"enter",_,t,c),h.target=y,h.relatedTarget=p,S=h),p=S,g&&_)t:{for(h=g,m=_,v=0,y=h;y;y=Tr(y))v++;for(y=0,S=m;S;S=Tr(S))y++;for(;0<v-y;)h=Tr(h),v--;for(;0<y-v;)m=Tr(m),y--;for(;v--;){if(h===m||m!==null&&h===m.alternate)break t;h=Tr(h),m=Tr(m)}h=null}else h=null;g!==null&&ah(f,d,g,h,!1),_!==null&&p!==null&&ah(f,p,_,h,!0)}}e:{if(d=u?Xr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var M=sy;else if(Jd(d))if(Sg)M=uy;else{M=ay;var T=oy}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=ly);if(M&&(M=M(n,u))){xg(f,M,t,c);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&vc(d,"number",d.value)}switch(T=u?Xr(u):window,n){case"focusin":(Jd(T)||T.contentEditable==="true")&&(Wr=T,Lc=u,Zs=null);break;case"focusout":Zs=Lc=Wr=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,rh(f,t,c);break;case"selectionchange":if(dy)break;case"keydown":case"keyup":rh(f,t,c)}var A;if(Df)e:{switch(n){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Gr?_g(n,t)&&(x="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(x="onCompositionStart");x&&(vg&&t.locale!=="ko"&&(Gr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Gr&&(A=gg()):(Ci=c,Lf="value"in Ci?Ci.value:Ci.textContent,Gr=!0)),T=Ja(u,x),0<T.length&&(x=new Yd(x,n,null,t,c),f.push({event:x,listeners:T}),A?x.data=A:(A=yg(t),A!==null&&(x.data=A)))),(A=ey?ty(n,t):ny(n,t))&&(u=Ja(u,"onBeforeInput"),0<u.length&&(c=new Yd("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=A))}Pg(f,e)})}function po(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ja(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=oo(n,t),s!=null&&i.unshift(po(n,s,r)),s=oo(n,e),s!=null&&i.push(po(n,s,r))),n=n.return}return i}function Tr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ah(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=oo(t,s),l!=null&&o.unshift(po(t,l,a))):r||(l=oo(t,s),l!=null&&o.push(po(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var gy=/\r\n?/g,vy=/\u0000|\uFFFD/g;function lh(n){return(typeof n=="string"?n:""+n).replace(gy,`
`).replace(vy,"")}function ta(n,e,t){if(e=lh(e),lh(n)!==e&&t)throw Error(Q(425))}function el(){}var Pc=null,Dc=null;function Ic(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,yy=typeof queueMicrotask=="function"?queueMicrotask:typeof uh!="undefined"?function(n){return uh.resolve(null).then(n).catch(xy)}:Nc;function xy(n){setTimeout(function(){throw n})}function mu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),uo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);uo(e)}function Di(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function ch(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Fn="__reactFiber$"+ws,mo="__reactProps$"+ws,si="__reactContainer$"+ws,kc="__reactEvents$"+ws,Sy="__reactListeners$"+ws,My="__reactHandles$"+ws;function er(n){var e=n[Fn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[si]||t[Fn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=ch(n);n!==null;){if(t=n[Fn])return t;n=ch(n)}return e}n=t,t=n.parentNode}return null}function Co(n){return n=n[Fn]||n[si],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Xr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Q(33))}function bl(n){return n[mo]||null}var Fc=[],$r=-1;function Vi(n){return{current:n}}function We(n){0>$r||(n.current=Fc[$r],Fc[$r]=null,$r--)}function Ve(n,e){$r++,Fc[$r]=n.current,n.current=e}var Bi={},Ct=Vi(Bi),Vt=Vi(!1),fr=Bi;function cs(n,e){var t=n.type.contextTypes;if(!t)return Bi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Gt(n){return n=n.childContextTypes,n!=null}function tl(){We(Vt),We(Ct)}function fh(n,e,t){if(Ct.current!==Bi)throw Error(Q(168));Ve(Ct,e),Ve(Vt,t)}function Ig(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,o_(n)||"Unknown",r));return Qe({},t,i)}function nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Bi,fr=Ct.current,Ve(Ct,n),Ve(Vt,Vt.current),!0}function dh(n,e,t){var i=n.stateNode;if(!i)throw Error(Q(169));t?(n=Ig(n,e,fr),i.__reactInternalMemoizedMergedChildContext=n,We(Vt),We(Ct),Ve(Ct,n)):We(Vt),Ve(Vt,t)}var Qn=null,Cl=!1,gu=!1;function Ng(n){Qn===null?Qn=[n]:Qn.push(n)}function wy(n){Cl=!0,Ng(n)}function Gi(){if(!gu&&Qn!==null){gu=!0;var n=0,e=ze;try{var t=Qn;for(ze=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Qn=null,Cl=!1}catch(r){throw Qn!==null&&(Qn=Qn.slice(n+1)),sg(Tf,Gi),r}finally{ze=e,gu=!1}}return null}var qr=[],Yr=0,il=null,rl=0,rn=[],sn=0,dr=null,ei=1,ti="";function Yi(n,e){qr[Yr++]=rl,qr[Yr++]=il,il=n,rl=e}function kg(n,e,t){rn[sn++]=ei,rn[sn++]=ti,rn[sn++]=dr,dr=n;var i=ei;n=ti;var r=32-Mn(i)-1;i&=~(1<<r),t+=1;var s=32-Mn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ei=1<<32-Mn(e)+r|t<<r|i,ti=s+n}else ei=1<<s|t<<r|i,ti=n}function Nf(n){n.return!==null&&(Yi(n,1),kg(n,1,0))}function kf(n){for(;n===il;)il=qr[--Yr],qr[Yr]=null,rl=qr[--Yr],qr[Yr]=null;for(;n===dr;)dr=rn[--sn],rn[sn]=null,ti=rn[--sn],rn[sn]=null,ei=rn[--sn],rn[sn]=null}var Zt=null,Kt=null,je=!1,xn=null;function Fg(n,e){var t=ln(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function hh(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Zt=n,Kt=Di(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Zt=n,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=dr!==null?{id:ei,overflow:ti}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ln(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Zt=n,Kt=null,!0):!1;default:return!1}}function Oc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zc(n){if(je){var e=Kt;if(e){var t=e;if(!hh(n,e)){if(Oc(n))throw Error(Q(418));e=Di(t.nextSibling);var i=Zt;e&&hh(n,e)?Fg(i,t):(n.flags=n.flags&-4097|2,je=!1,Zt=n)}}else{if(Oc(n))throw Error(Q(418));n.flags=n.flags&-4097|2,je=!1,Zt=n}}}function ph(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zt=n}function na(n){if(n!==Zt)return!1;if(!je)return ph(n),je=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ic(n.type,n.memoizedProps)),e&&(e=Kt)){if(Oc(n))throw Og(),Error(Q(418));for(;e;)Fg(n,e),e=Di(e.nextSibling)}if(ph(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Q(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Kt=Di(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Kt=null}}else Kt=Zt?Di(n.stateNode.nextSibling):null;return!0}function Og(){for(var n=Kt;n;)n=Di(n.nextSibling)}function fs(){Kt=Zt=null,je=!1}function Ff(n){xn===null?xn=[n]:xn.push(n)}var Ey=ui.ReactCurrentBatchConfig;function _n(n,e){if(n&&n.defaultProps){e=Qe({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var sl=Vi(null),ol=null,Kr=null,Of=null;function zf(){Of=Kr=ol=null}function Uf(n){var e=sl.current;We(sl),n._currentValue=e}function Uc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ss(n,e){ol=n,Of=Kr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Bt=!0),n.firstContext=null)}function fn(n){var e=n._currentValue;if(Of!==n)if(n={context:n,memoizedValue:e,next:null},Kr===null){if(ol===null)throw Error(Q(308));Kr=n,ol.dependencies={lanes:0,firstContext:n}}else Kr=Kr.next=n;return e}var tr=null;function Bf(n){tr===null?tr=[n]:tr.push(n)}function zg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Bf(e)):(t.next=r.next,r.next=t),e.interleaved=t,oi(n,i)}function oi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ei=!1;function Hf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ni(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ii(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Re&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,oi(n,t)}return r=i.interleaved,r===null?(e.next=e,Bf(i)):(e.next=r.next,r.next=e),i.interleaved=e,oi(n,t)}function Oa(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,bf(n,t)}}function mh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function al(n,e,t,i){var r=n.updateQueue;Ei=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,h=a;switch(d=e,g=t,h.tag){case 1:if(_=h.payload,typeof _=="function"){f=_.call(g,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=h.payload,d=typeof _=="function"?_.call(g,f,d):_,d==null)break e;f=Qe({},f,d);break e;case 2:Ei=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);pr|=o,n.lanes=o,n.memoizedState=f}}function gh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var Bg=new zm.Component().refs;function Bc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Qe({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Al={isMounted:function(n){return(n=n._reactInternals)?Sr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Pt(),r=ki(n),s=ni(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ii(n,s,r),e!==null&&(wn(e,n,r,i),Oa(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Pt(),r=ki(n),s=ni(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ii(n,s,r),e!==null&&(wn(e,n,r,i),Oa(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Pt(),i=ki(n),r=ni(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ii(n,r,i),e!==null&&(wn(e,n,i,t),Oa(e,n,i))}};function vh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!fo(t,i)||!fo(r,s):!0}function Hg(n,e,t){var i=!1,r=Bi,s=e.contextType;return typeof s=="object"&&s!==null?s=fn(s):(r=Gt(e)?fr:Ct.current,i=e.contextTypes,s=(i=i!=null)?cs(n,r):Bi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Al,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function _h(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Al.enqueueReplaceState(e,e.state,null)}function Hc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Bg,Hf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=fn(s):(s=Gt(e)?fr:Ct.current,r.context=cs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Al.enqueueReplaceState(r,r.state,null),al(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ks(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Q(309));var i=t.stateNode}if(!i)throw Error(Q(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Bg&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Q(284));if(!t._owner)throw Error(Q(290,n))}return n}function ia(n,e){throw n=Object.prototype.toString.call(e),Error(Q(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function yh(n){var e=n._init;return e(n._payload)}function Vg(n){function e(m,v){if(n){var y=m.deletions;y===null?(m.deletions=[v],m.flags|=16):y.push(v)}}function t(m,v){if(!n)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Fi(m,v),m.index=0,m.sibling=null,m}function s(m,v,y){return m.index=y,n?(y=m.alternate,y!==null?(y=y.index,y<v?(m.flags|=2,v):y):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return n&&m.alternate===null&&(m.flags|=2),m}function a(m,v,y,S){return v===null||v.tag!==6?(v=wu(y,m.mode,S),v.return=m,v):(v=r(v,y),v.return=m,v)}function l(m,v,y,S){var M=y.type;return M===Vr?c(m,v,y.props.children,S,y.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===wi&&yh(M)===v.type)?(S=r(v,y.props),S.ref=ks(m,v,y),S.return=m,S):(S=Ga(y.type,y.key,y.props,null,m.mode,S),S.ref=ks(m,v,y),S.return=m,S)}function u(m,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Eu(y,m.mode,S),v.return=m,v):(v=r(v,y.children||[]),v.return=m,v)}function c(m,v,y,S,M){return v===null||v.tag!==7?(v=lr(y,m.mode,S,M),v.return=m,v):(v=r(v,y),v.return=m,v)}function f(m,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=wu(""+v,m.mode,y),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xo:return y=Ga(v.type,v.key,v.props,null,m.mode,y),y.ref=ks(m,null,v),y.return=m,y;case Hr:return v=Eu(v,m.mode,y),v.return=m,v;case wi:var S=v._init;return f(m,S(v._payload),y)}if(Vs(v)||Rs(v))return v=lr(v,m.mode,y,null),v.return=m,v;ia(m,v)}return null}function d(m,v,y,S){var M=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return M!==null?null:a(m,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xo:return y.key===M?l(m,v,y,S):null;case Hr:return y.key===M?u(m,v,y,S):null;case wi:return M=y._init,d(m,v,M(y._payload),S)}if(Vs(y)||Rs(y))return M!==null?null:c(m,v,y,S,null);ia(m,y)}return null}function g(m,v,y,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(y)||null,a(v,m,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Xo:return m=m.get(S.key===null?y:S.key)||null,l(v,m,S,M);case Hr:return m=m.get(S.key===null?y:S.key)||null,u(v,m,S,M);case wi:var T=S._init;return g(m,v,y,T(S._payload),M)}if(Vs(S)||Rs(S))return m=m.get(y)||null,c(v,m,S,M,null);ia(v,S)}return null}function _(m,v,y,S){for(var M=null,T=null,A=v,x=v=0,C=null;A!==null&&x<y.length;x++){A.index>x?(C=A,A=null):C=A.sibling;var R=d(m,A,y[x],S);if(R===null){A===null&&(A=C);break}n&&A&&R.alternate===null&&e(m,A),v=s(R,v,x),T===null?M=R:T.sibling=R,T=R,A=C}if(x===y.length)return t(m,A),je&&Yi(m,x),M;if(A===null){for(;x<y.length;x++)A=f(m,y[x],S),A!==null&&(v=s(A,v,x),T===null?M=A:T.sibling=A,T=A);return je&&Yi(m,x),M}for(A=i(m,A);x<y.length;x++)C=g(A,m,x,y[x],S),C!==null&&(n&&C.alternate!==null&&A.delete(C.key===null?x:C.key),v=s(C,v,x),T===null?M=C:T.sibling=C,T=C);return n&&A.forEach(function(k){return e(m,k)}),je&&Yi(m,x),M}function h(m,v,y,S){var M=Rs(y);if(typeof M!="function")throw Error(Q(150));if(y=M.call(y),y==null)throw Error(Q(151));for(var T=M=null,A=v,x=v=0,C=null,R=y.next();A!==null&&!R.done;x++,R=y.next()){A.index>x?(C=A,A=null):C=A.sibling;var k=d(m,A,R.value,S);if(k===null){A===null&&(A=C);break}n&&A&&k.alternate===null&&e(m,A),v=s(k,v,x),T===null?M=k:T.sibling=k,T=k,A=C}if(R.done)return t(m,A),je&&Yi(m,x),M;if(A===null){for(;!R.done;x++,R=y.next())R=f(m,R.value,S),R!==null&&(v=s(R,v,x),T===null?M=R:T.sibling=R,T=R);return je&&Yi(m,x),M}for(A=i(m,A);!R.done;x++,R=y.next())R=g(A,m,x,R.value,S),R!==null&&(n&&R.alternate!==null&&A.delete(R.key===null?x:R.key),v=s(R,v,x),T===null?M=R:T.sibling=R,T=R);return n&&A.forEach(function(K){return e(m,K)}),je&&Yi(m,x),M}function p(m,v,y,S){if(typeof y=="object"&&y!==null&&y.type===Vr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Xo:e:{for(var M=y.key,T=v;T!==null;){if(T.key===M){if(M=y.type,M===Vr){if(T.tag===7){t(m,T.sibling),v=r(T,y.props.children),v.return=m,m=v;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===wi&&yh(M)===T.type){t(m,T.sibling),v=r(T,y.props),v.ref=ks(m,T,y),v.return=m,m=v;break e}t(m,T);break}else e(m,T);T=T.sibling}y.type===Vr?(v=lr(y.props.children,m.mode,S,y.key),v.return=m,m=v):(S=Ga(y.type,y.key,y.props,null,m.mode,S),S.ref=ks(m,v,y),S.return=m,m=S)}return o(m);case Hr:e:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(m,v.sibling),v=r(v,y.children||[]),v.return=m,m=v;break e}else{t(m,v);break}else e(m,v);v=v.sibling}v=Eu(y,m.mode,S),v.return=m,m=v}return o(m);case wi:return T=y._init,p(m,v,T(y._payload),S)}if(Vs(y))return _(m,v,y,S);if(Rs(y))return h(m,v,y,S);ia(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(m,v.sibling),v=r(v,y),v.return=m,m=v):(t(m,v),v=wu(y,m.mode,S),v.return=m,m=v),o(m)):t(m,v)}return p}var ds=Vg(!0),Gg=Vg(!1),Ao={},Bn=Vi(Ao),go=Vi(Ao),vo=Vi(Ao);function nr(n){if(n===Ao)throw Error(Q(174));return n}function Vf(n,e){switch(Ve(vo,e),Ve(go,n),Ve(Bn,Ao),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=yc(e,n)}We(Bn),Ve(Bn,e)}function hs(){We(Bn),We(go),We(vo)}function Wg(n){nr(vo.current);var e=nr(Bn.current),t=yc(e,n.type);e!==t&&(Ve(go,n),Ve(Bn,t))}function Gf(n){go.current===n&&(We(Bn),We(go))}var Ke=Vi(0);function ll(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vu=[];function Wf(){for(var n=0;n<vu.length;n++)vu[n]._workInProgressVersionPrimary=null;vu.length=0}var za=ui.ReactCurrentDispatcher,_u=ui.ReactCurrentBatchConfig,hr=0,Ze=null,ct=null,mt=null,ul=!1,Qs=!1,_o=0,Ty=0;function Mt(){throw Error(Q(321))}function jf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Tn(n[t],e[t]))return!1;return!0}function Xf(n,e,t,i,r,s){if(hr=s,Ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,za.current=n===null||n.memoizedState===null?Ly:Ry,n=t(i,r),Qs){s=0;do{if(Qs=!1,_o=0,25<=s)throw Error(Q(301));s+=1,mt=ct=null,e.updateQueue=null,za.current=Py,n=t(i,r)}while(Qs)}if(za.current=cl,e=ct!==null&&ct.next!==null,hr=0,mt=ct=Ze=null,ul=!1,e)throw Error(Q(300));return n}function $f(){var n=_o!==0;return _o=0,n}function In(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Ze.memoizedState=mt=n:mt=mt.next=n,mt}function dn(){if(ct===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var e=mt===null?Ze.memoizedState:mt.next;if(e!==null)mt=e,ct=n;else{if(n===null)throw Error(Q(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},mt===null?Ze.memoizedState=mt=n:mt=mt.next=n}return mt}function yo(n,e){return typeof e=="function"?e(n):e}function yu(n){var e=dn(),t=e.queue;if(t===null)throw Error(Q(311));t.lastRenderedReducer=n;var i=ct,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((hr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ze.lanes|=c,pr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Tn(i,e.memoizedState)||(Bt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ze.lanes|=s,pr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function xu(n){var e=dn(),t=e.queue;if(t===null)throw Error(Q(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Tn(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function jg(){}function Xg(n,e){var t=Ze,i=dn(),r=e(),s=!Tn(i.memoizedState,r);if(s&&(i.memoizedState=r,Bt=!0),i=i.queue,qf(Yg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||mt!==null&&mt.memoizedState.tag&1){if(t.flags|=2048,xo(9,qg.bind(null,t,i,r,e),void 0,null),gt===null)throw Error(Q(349));(hr&30)!==0||$g(t,e,r)}return r}function $g(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ze.updateQueue,e===null?(e={lastEffect:null,stores:null},Ze.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function qg(n,e,t,i){e.value=t,e.getSnapshot=i,Kg(e)&&Zg(n)}function Yg(n,e,t){return t(function(){Kg(e)&&Zg(n)})}function Kg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Tn(n,t)}catch{return!0}}function Zg(n){var e=oi(n,1);e!==null&&wn(e,n,1,-1)}function xh(n){var e=In();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:n},e.queue=n,n=n.dispatch=Ay.bind(null,Ze,n),[e.memoizedState,n]}function xo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ze.updateQueue,e===null?(e={lastEffect:null,stores:null},Ze.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Qg(){return dn().memoizedState}function Ua(n,e,t,i){var r=In();Ze.flags|=n,r.memoizedState=xo(1|e,t,void 0,i===void 0?null:i)}function Ll(n,e,t,i){var r=dn();i=i===void 0?null:i;var s=void 0;if(ct!==null){var o=ct.memoizedState;if(s=o.destroy,i!==null&&jf(i,o.deps)){r.memoizedState=xo(e,t,s,i);return}}Ze.flags|=n,r.memoizedState=xo(1|e,t,s,i)}function Sh(n,e){return Ua(8390656,8,n,e)}function qf(n,e){return Ll(2048,8,n,e)}function Jg(n,e){return Ll(4,2,n,e)}function e0(n,e){return Ll(4,4,n,e)}function t0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function n0(n,e,t){return t=t!=null?t.concat([n]):null,Ll(4,4,t0.bind(null,e,n),t)}function Yf(){}function i0(n,e){var t=dn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&jf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function r0(n,e){var t=dn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&jf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function s0(n,e,t){return(hr&21)===0?(n.baseState&&(n.baseState=!1,Bt=!0),n.memoizedState=t):(Tn(t,e)||(t=lg(),Ze.lanes|=t,pr|=t,n.baseState=!0),e)}function by(n,e){var t=ze;ze=t!==0&&4>t?t:4,n(!0);var i=_u.transition;_u.transition={};try{n(!1),e()}finally{ze=t,_u.transition=i}}function o0(){return dn().memoizedState}function Cy(n,e,t){var i=ki(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},a0(n))l0(e,t);else if(t=zg(n,e,t,i),t!==null){var r=Pt();wn(t,n,i,r),u0(t,e,i)}}function Ay(n,e,t){var i=ki(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(a0(n))l0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Tn(a,o)){var l=e.interleaved;l===null?(r.next=r,Bf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=zg(n,e,r,i),t!==null&&(r=Pt(),wn(t,n,i,r),u0(t,e,i))}}function a0(n){var e=n.alternate;return n===Ze||e!==null&&e===Ze}function l0(n,e){Qs=ul=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function u0(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,bf(n,t)}}var cl={readContext:fn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},Ly={readContext:fn,useCallback:function(n,e){return In().memoizedState=[n,e===void 0?null:e],n},useContext:fn,useEffect:Sh,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ua(4194308,4,t0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ua(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ua(4,2,n,e)},useMemo:function(n,e){var t=In();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=In();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Cy.bind(null,Ze,n),[i.memoizedState,n]},useRef:function(n){var e=In();return n={current:n},e.memoizedState=n},useState:xh,useDebugValue:Yf,useDeferredValue:function(n){return In().memoizedState=n},useTransition:function(){var n=xh(!1),e=n[0];return n=by.bind(null,n[1]),In().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ze,r=In();if(je){if(t===void 0)throw Error(Q(407));t=t()}else{if(t=e(),gt===null)throw Error(Q(349));(hr&30)!==0||$g(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Sh(Yg.bind(null,i,s,n),[n]),i.flags|=2048,xo(9,qg.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=In(),e=gt.identifierPrefix;if(je){var t=ti,i=ei;t=(i&~(1<<32-Mn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=_o++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Ty++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Ry={readContext:fn,useCallback:i0,useContext:fn,useEffect:qf,useImperativeHandle:n0,useInsertionEffect:Jg,useLayoutEffect:e0,useMemo:r0,useReducer:yu,useRef:Qg,useState:function(){return yu(yo)},useDebugValue:Yf,useDeferredValue:function(n){var e=dn();return s0(e,ct.memoizedState,n)},useTransition:function(){var n=yu(yo)[0],e=dn().memoizedState;return[n,e]},useMutableSource:jg,useSyncExternalStore:Xg,useId:o0,unstable_isNewReconciler:!1},Py={readContext:fn,useCallback:i0,useContext:fn,useEffect:qf,useImperativeHandle:n0,useInsertionEffect:Jg,useLayoutEffect:e0,useMemo:r0,useReducer:xu,useRef:Qg,useState:function(){return xu(yo)},useDebugValue:Yf,useDeferredValue:function(n){var e=dn();return ct===null?e.memoizedState=n:s0(e,ct.memoizedState,n)},useTransition:function(){var n=xu(yo)[0],e=dn().memoizedState;return[n,e]},useMutableSource:jg,useSyncExternalStore:Xg,useId:o0,unstable_isNewReconciler:!1};function ps(n,e){try{var t="",i=e;do t+=s_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Su(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function Vc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Dy=typeof WeakMap=="function"?WeakMap:Map;function c0(n,e,t){t=ni(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){dl||(dl=!0,Qc=i),Vc(n,e)},t}function f0(n,e,t){t=ni(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Vc(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Vc(n,e),typeof i!="function"&&(Ni===null?Ni=new Set([this]):Ni.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Mh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Dy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Xy.bind(null,n,e,t),e.then(n,n))}function wh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Eh(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ni(-1,1),e.tag=2,Ii(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var Iy=ui.ReactCurrentOwner,Bt=!1;function Rt(n,e,t,i){e.child=n===null?Gg(e,null,t,i):ds(e,n.child,t,i)}function Th(n,e,t,i,r){t=t.render;var s=e.ref;return ss(e,r),i=Xf(n,e,t,i,s,r),t=$f(),n!==null&&!Bt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ai(n,e,r)):(je&&t&&Nf(e),e.flags|=1,Rt(n,e,i,r),e.child)}function bh(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!id(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,d0(n,e,s,i,r)):(n=Ga(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:fo,t(o,i)&&n.ref===e.ref)return ai(n,e,r)}return e.flags|=1,n=Fi(s,i),n.ref=e.ref,n.return=e,e.child=n}function d0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(fo(s,i)&&n.ref===e.ref)if(Bt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Bt=!0);else return e.lanes=n.lanes,ai(n,e,r)}return Gc(n,e,t,i,r)}function h0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(Qr,Yt),Yt|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ve(Qr,Yt),Yt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ve(Qr,Yt),Yt|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ve(Qr,Yt),Yt|=i;return Rt(n,e,r,t),e.child}function p0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Gc(n,e,t,i,r){var s=Gt(t)?fr:Ct.current;return s=cs(e,s),ss(e,r),t=Xf(n,e,t,i,s,r),i=$f(),n!==null&&!Bt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ai(n,e,r)):(je&&i&&Nf(e),e.flags|=1,Rt(n,e,t,r),e.child)}function Ch(n,e,t,i,r){if(Gt(t)){var s=!0;nl(e)}else s=!1;if(ss(e,r),e.stateNode===null)Ba(n,e),Hg(e,t,i),Hc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=fn(u):(u=Gt(t)?fr:Ct.current,u=cs(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&_h(e,o,i,u),Ei=!1;var d=e.memoizedState;o.state=d,al(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Vt.current||Ei?(typeof c=="function"&&(Bc(e,t,c,i),l=e.memoizedState),(a=Ei||vh(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ug(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:_n(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=fn(l):(l=Gt(t)?fr:Ct.current,l=cs(e,l));var g=t.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&_h(e,o,i,l),Ei=!1,d=e.memoizedState,o.state=d,al(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||Vt.current||Ei?(typeof g=="function"&&(Bc(e,t,g,i),_=e.memoizedState),(u=Ei||vh(e,t,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Wc(n,e,t,i,s,r)}function Wc(n,e,t,i,r,s){p0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&dh(e,t,!1),ai(n,e,s);i=e.stateNode,Iy.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ds(e,n.child,null,s),e.child=ds(e,null,a,s)):Rt(n,e,a,s),e.memoizedState=i.state,r&&dh(e,t,!0),e.child}function m0(n){var e=n.stateNode;e.pendingContext?fh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&fh(n,e.context,!1),Vf(n,e.containerInfo)}function Ah(n,e,t,i,r){return fs(),Ff(r),e.flags|=256,Rt(n,e,t,i),e.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function Xc(n){return{baseLanes:n,cachePool:null,transitions:null}}function g0(n,e,t){var i=e.pendingProps,r=Ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ve(Ke,r&1),n===null)return zc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dl(o,i,0,null),n=lr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Xc(t),e.memoizedState=jc,n):Kf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ny(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Fi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Fi(a,s):(s=lr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Xc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=jc,i}return s=n.child,n=s.sibling,i=Fi(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Kf(n,e){return e=Dl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ra(n,e,t,i){return i!==null&&Ff(i),ds(e,n.child,null,t),n=Kf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Ny(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Su(Error(Q(422))),ra(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dl({mode:"visible",children:i.children},r,0,null),s=lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&ds(e,n.child,null,o),e.child.memoizedState=Xc(o),e.memoizedState=jc,s);if((e.mode&1)===0)return ra(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Q(419)),i=Su(s,i,void 0),ra(n,e,o,i)}if(a=(o&n.childLanes)!==0,Bt||a){if(i=gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,oi(n,r),wn(i,n,r,-1))}return nd(),i=Su(Error(Q(421))),ra(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=$y.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Kt=Di(r.nextSibling),Zt=e,je=!0,xn=null,n!==null&&(rn[sn++]=ei,rn[sn++]=ti,rn[sn++]=dr,ei=n.id,ti=n.overflow,dr=e),e=Kf(e,i.children),e.flags|=4096,e)}function Lh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Uc(n.return,e,t)}function Mu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function v0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Rt(n,e,i.children,t),i=Ke.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lh(n,t,e);else if(n.tag===19)Lh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ve(Ke,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ll(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Mu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ll(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Mu(e,!0,t,null,s);break;case"together":Mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ai(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),pr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(Q(153));if(e.child!==null){for(n=e.child,t=Fi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Fi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ky(n,e,t){switch(e.tag){case 3:m0(e),fs();break;case 5:Wg(e);break;case 1:Gt(e.type)&&nl(e);break;case 4:Vf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ve(sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ve(Ke,Ke.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?g0(n,e,t):(Ve(Ke,Ke.current&1),n=ai(n,e,t),n!==null?n.sibling:null);Ve(Ke,Ke.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return v0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ve(Ke,Ke.current),i)break;return null;case 22:case 23:return e.lanes=0,h0(n,e,t)}return ai(n,e,t)}var _0,$c,y0,x0;_0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};$c=function(){};y0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,nr(Bn.current);var s=null;switch(t){case"input":r=mc(n,r),i=mc(n,i),s=[];break;case"select":r=Qe({},r,{value:void 0}),i=Qe({},i,{value:void 0}),s=[];break;case"textarea":r=_c(n,r),i=_c(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=el)}xc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ro.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ro.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ge("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};x0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Fs(n,e){if(!je)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function wt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Fy(n,e,t){var i=e.pendingProps;switch(kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return Gt(e.type)&&tl(),wt(e),null;case 3:return i=e.stateNode,hs(),We(Vt),We(Ct),Wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(na(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,xn!==null&&(tf(xn),xn=null))),$c(n,e),wt(e),null;case 5:Gf(e);var r=nr(vo.current);if(t=e.type,n!==null&&e.stateNode!=null)y0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return wt(e),null}if(n=nr(Bn.current),na(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Fn]=e,i[mo]=s,n=(e.mode&1)!==0,t){case"dialog":Ge("cancel",i),Ge("close",i);break;case"iframe":case"object":case"embed":Ge("load",i);break;case"video":case"audio":for(r=0;r<Ws.length;r++)Ge(Ws[r],i);break;case"source":Ge("error",i);break;case"img":case"image":case"link":Ge("error",i),Ge("load",i);break;case"details":Ge("toggle",i);break;case"input":zd(i,s),Ge("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ge("invalid",i);break;case"textarea":Bd(i,s),Ge("invalid",i)}xc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ta(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ta(i.textContent,a,n),r=["children",""+a]):ro.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ge("scroll",i)}switch(t){case"input":$o(i),Ud(i,s,!0);break;case"textarea":$o(i),Hd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=el)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=$m(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Fn]=e,n[mo]=i,_0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Sc(t,i),t){case"dialog":Ge("cancel",n),Ge("close",n),r=i;break;case"iframe":case"object":case"embed":Ge("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ws.length;r++)Ge(Ws[r],n);r=i;break;case"source":Ge("error",n),r=i;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),r=i;break;case"details":Ge("toggle",n),r=i;break;case"input":zd(n,i),r=mc(n,i),Ge("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Qe({},i,{value:void 0}),Ge("invalid",n);break;case"textarea":Bd(n,i),r=_c(n,i),Ge("invalid",n);break;default:r=i}xc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Km(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qm(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&so(n,l):typeof l=="number"&&so(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ge("scroll",n):l!=null&&xf(n,s,l,o))}switch(t){case"input":$o(n),Ud(n,i,!1);break;case"textarea":$o(n),Hd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ui(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ts(n,!!i.multiple,s,!1):i.defaultValue!=null&&ts(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=el)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(n&&e.stateNode!=null)x0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(t=nr(vo.current),nr(Bn.current),na(e)){if(i=e.stateNode,t=e.memoizedProps,i[Fn]=e,(s=i.nodeValue!==t)&&(n=Zt,n!==null))switch(n.tag){case 3:ta(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ta(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Fn]=e,e.stateNode=i}return wt(e),null;case 13:if(We(Ke),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(je&&Kt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Og(),fs(),e.flags|=98560,s=!1;else if(s=na(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[Fn]=e}else fs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else xn!==null&&(tf(xn),xn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(Ke.current&1)!==0?ft===0&&(ft=3):nd())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return hs(),$c(n,e),n===null&&ho(e.stateNode.containerInfo),wt(e),null;case 10:return Uf(e.type._context),wt(e),null;case 17:return Gt(e.type)&&tl(),wt(e),null;case 19:if(We(Ke),s=e.memoizedState,s===null)return wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Fs(s,!1);else{if(ft!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=ll(n),o!==null){for(e.flags|=128,Fs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ve(Ke,Ke.current&1|2),e.child}n=n.sibling}s.tail!==null&&it()>ms&&(e.flags|=128,i=!0,Fs(s,!1),e.lanes=4194304)}else{if(!i)if(n=ll(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Fs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return wt(e),null}else 2*it()-s.renderingStartTime>ms&&t!==1073741824&&(e.flags|=128,i=!0,Fs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=it(),e.sibling=null,t=Ke.current,Ve(Ke,i?t&1|2:t&1),e):(wt(e),null);case 22:case 23:return td(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Yt&1073741824)!==0&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function Oy(n,e){switch(kf(e),e.tag){case 1:return Gt(e.type)&&tl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return hs(),We(Vt),We(Ct),Wf(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Gf(e),null;case 13:if(We(Ke),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));fs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return We(Ke),null;case 4:return hs(),null;case 10:return Uf(e.type._context),null;case 22:case 23:return td(),null;case 24:return null;default:return null}}var sa=!1,bt=!1,zy=typeof WeakSet=="function"?WeakSet:Set,le=null;function Zr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){nt(n,e,i)}else t.current=null}function qc(n,e,t){try{t()}catch(i){nt(n,e,i)}}var Rh=!1;function Uy(n,e){if(Pc=Za,n=Eg(),If(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var g;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Dc={focusedElem:n,selectionRange:t},Za=!1,le=e;le!==null;)if(e=le,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,le=n;else for(;le!==null;){e=le;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var h=_.memoizedProps,p=_.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?h:_n(e.type,h),p);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(S){nt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,le=n;break}le=e.return}return _=Rh,Rh=!1,_}function Js(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&qc(e,t,s)}r=r.next}while(r!==i)}}function Rl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Yc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function S0(n){var e=n.alternate;e!==null&&(n.alternate=null,S0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Fn],delete e[mo],delete e[kc],delete e[Sy],delete e[My])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function M0(n){return n.tag===5||n.tag===3||n.tag===4}function Ph(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||M0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=el));else if(i!==4&&(n=n.child,n!==null))for(Kc(n,e,t),n=n.sibling;n!==null;)Kc(n,e,t),n=n.sibling}function Zc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Zc(n,e,t),n=n.sibling;n!==null;)Zc(n,e,t),n=n.sibling}var _t=null,yn=!1;function hi(n,e,t){for(t=t.child;t!==null;)w0(n,e,t),t=t.sibling}function w0(n,e,t){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(Ml,t)}catch{}switch(t.tag){case 5:bt||Zr(t,e);case 6:var i=_t,r=yn;_t=null,hi(n,e,t),_t=i,yn=r,_t!==null&&(yn?(n=_t,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):_t.removeChild(t.stateNode));break;case 18:_t!==null&&(yn?(n=_t,t=t.stateNode,n.nodeType===8?mu(n.parentNode,t):n.nodeType===1&&mu(n,t),uo(n)):mu(_t,t.stateNode));break;case 4:i=_t,r=yn,_t=t.stateNode.containerInfo,yn=!0,hi(n,e,t),_t=i,yn=r;break;case 0:case 11:case 14:case 15:if(!bt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&qc(t,e,o),r=r.next}while(r!==i)}hi(n,e,t);break;case 1:if(!bt&&(Zr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){nt(t,e,a)}hi(n,e,t);break;case 21:hi(n,e,t);break;case 22:t.mode&1?(bt=(i=bt)||t.memoizedState!==null,hi(n,e,t),bt=i):hi(n,e,t);break;default:hi(n,e,t)}}function Dh(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new zy),e.forEach(function(i){var r=qy.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function hn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_t=a.stateNode,yn=!1;break e;case 3:_t=a.stateNode.containerInfo,yn=!0;break e;case 4:_t=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(_t===null)throw Error(Q(160));w0(s,o,r),_t=null,yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){nt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)E0(e,n),e=e.sibling}function E0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hn(e,n),Dn(n),i&4){try{Js(3,n,n.return),Rl(3,n)}catch(h){nt(n,n.return,h)}try{Js(5,n,n.return)}catch(h){nt(n,n.return,h)}}break;case 1:hn(e,n),Dn(n),i&512&&t!==null&&Zr(t,t.return);break;case 5:if(hn(e,n),Dn(n),i&512&&t!==null&&Zr(t,t.return),n.flags&32){var r=n.stateNode;try{so(r,"")}catch(h){nt(n,n.return,h)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&jm(r,s),Sc(a,o);var u=Sc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Km(r,f):c==="dangerouslySetInnerHTML"?qm(r,f):c==="children"?so(r,f):xf(r,c,f,u)}switch(a){case"input":gc(r,s);break;case"textarea":Xm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ts(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?ts(r,!!s.multiple,s.defaultValue,!0):ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[mo]=s}catch(h){nt(n,n.return,h)}}break;case 6:if(hn(e,n),Dn(n),i&4){if(n.stateNode===null)throw Error(Q(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(h){nt(n,n.return,h)}}break;case 3:if(hn(e,n),Dn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{uo(e.containerInfo)}catch(h){nt(n,n.return,h)}break;case 4:hn(e,n),Dn(n);break;case 13:hn(e,n),Dn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Jf=it())),i&4&&Dh(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(bt=(u=bt)||c,hn(e,n),bt=u):hn(e,n),Dn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&(n.mode&1)!==0)for(le=n,c=n.child;c!==null;){for(f=le=c;le!==null;){switch(d=le,g=d.child,d.tag){case 0:case 11:case 14:case 15:Js(4,d,d.return);break;case 1:Zr(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(h){nt(i,t,h)}}break;case 5:Zr(d,d.return);break;case 22:if(d.memoizedState!==null){Nh(f);continue}}g!==null?(g.return=d,le=g):Nh(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ym("display",o))}catch(h){nt(n,n.return,h)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(h){nt(n,n.return,h)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:hn(e,n),Dn(n),i&4&&Dh(n);break;case 21:break;default:hn(e,n),Dn(n)}}function Dn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(M0(t)){var i=t;break e}t=t.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(so(r,""),i.flags&=-33);var s=Ph(n);Zc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ph(n);Kc(n,a,o);break;default:throw Error(Q(161))}}catch(l){nt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function By(n,e,t){le=n,T0(n)}function T0(n,e,t){for(var i=(n.mode&1)!==0;le!==null;){var r=le,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||sa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||bt;a=sa;var u=bt;if(sa=o,(bt=l)&&!u)for(le=r;le!==null;)o=le,l=o.child,o.tag===22&&o.memoizedState!==null?kh(r):l!==null?(l.return=o,le=l):kh(r);for(;s!==null;)le=s,T0(s),s=s.sibling;le=r,sa=a,bt=u}Ih(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,le=s):Ih(n)}}function Ih(n){for(;le!==null;){var e=le;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:bt||Rl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!bt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:_n(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}gh(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&uo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}bt||e.flags&512&&Yc(e)}catch(d){nt(e,e.return,d)}}if(e===n){le=null;break}if(t=e.sibling,t!==null){t.return=e.return,le=t;break}le=e.return}}function Nh(n){for(;le!==null;){var e=le;if(e===n){le=null;break}var t=e.sibling;if(t!==null){t.return=e.return,le=t;break}le=e.return}}function kh(n){for(;le!==null;){var e=le;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Rl(4,e)}catch(l){nt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){nt(e,r,l)}}var s=e.return;try{Yc(e)}catch(l){nt(e,s,l)}break;case 5:var o=e.return;try{Yc(e)}catch(l){nt(e,o,l)}}}catch(l){nt(e,e.return,l)}if(e===n){le=null;break}var a=e.sibling;if(a!==null){a.return=e.return,le=a;break}le=e.return}}var Hy=Math.ceil,fl=ui.ReactCurrentDispatcher,Zf=ui.ReactCurrentOwner,cn=ui.ReactCurrentBatchConfig,Re=0,gt=null,at=null,yt=0,Yt=0,Qr=Vi(0),ft=0,So=null,pr=0,Pl=0,Qf=0,eo=null,Ot=null,Jf=0,ms=1/0,Kn=null,dl=!1,Qc=null,Ni=null,oa=!1,Ai=null,hl=0,to=0,Jc=null,Ha=-1,Va=0;function Pt(){return(Re&6)!==0?it():Ha!==-1?Ha:Ha=it()}function ki(n){return(n.mode&1)===0?1:(Re&2)!==0&&yt!==0?yt&-yt:Ey.transition!==null?(Va===0&&(Va=lg()),Va):(n=ze,n!==0||(n=window.event,n=n===void 0?16:mg(n.type)),n)}function wn(n,e,t,i){if(50<to)throw to=0,Jc=null,Error(Q(185));To(n,t,i),((Re&2)===0||n!==gt)&&(n===gt&&((Re&2)===0&&(Pl|=t),ft===4&&bi(n,yt)),Wt(n,i),t===1&&Re===0&&(e.mode&1)===0&&(ms=it()+500,Cl&&Gi()))}function Wt(n,e){var t=n.callbackNode;E_(n,e);var i=Ka(n,n===gt?yt:0);if(i===0)t!==null&&Wd(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Wd(t),e===1)n.tag===0?wy(Fh.bind(null,n)):Ng(Fh.bind(null,n)),yy(function(){(Re&6)===0&&Gi()}),t=null;else{switch(ug(i)){case 1:t=Tf;break;case 4:t=og;break;case 16:t=Ya;break;case 536870912:t=ag;break;default:t=Ya}t=I0(t,b0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function b0(n,e){if(Ha=-1,Va=0,(Re&6)!==0)throw Error(Q(327));var t=n.callbackNode;if(os()&&n.callbackNode!==t)return null;var i=Ka(n,n===gt?yt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=pl(n,i);else{e=i;var r=Re;Re|=2;var s=A0();(gt!==n||yt!==e)&&(Kn=null,ms=it()+500,ar(n,e));do try{Wy();break}catch(a){C0(n,a)}while(1);zf(),fl.current=s,Re=r,at!==null?e=0:(gt=null,yt=0,e=ft)}if(e!==0){if(e===2&&(r=bc(n),r!==0&&(i=r,e=ef(n,r))),e===1)throw t=So,ar(n,0),bi(n,i),Wt(n,it()),t;if(e===6)bi(n,i);else{if(r=n.current.alternate,(i&30)===0&&!Vy(r)&&(e=pl(n,i),e===2&&(s=bc(n),s!==0&&(i=s,e=ef(n,s))),e===1))throw t=So,ar(n,0),bi(n,i),Wt(n,it()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:Ki(n,Ot,Kn);break;case 3:if(bi(n,i),(i&130023424)===i&&(e=Jf+500-it(),10<e)){if(Ka(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Pt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Nc(Ki.bind(null,n,Ot,Kn),e);break}Ki(n,Ot,Kn);break;case 4:if(bi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Mn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=it()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Hy(i/1960))-i,10<i){n.timeoutHandle=Nc(Ki.bind(null,n,Ot,Kn),i);break}Ki(n,Ot,Kn);break;case 5:Ki(n,Ot,Kn);break;default:throw Error(Q(329))}}}return Wt(n,it()),n.callbackNode===t?b0.bind(null,n):null}function ef(n,e){var t=eo;return n.current.memoizedState.isDehydrated&&(ar(n,e).flags|=256),n=pl(n,e),n!==2&&(e=Ot,Ot=t,e!==null&&tf(e)),n}function tf(n){Ot===null?Ot=n:Ot.push.apply(Ot,n)}function Vy(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Tn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bi(n,e){for(e&=~Qf,e&=~Pl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Mn(e),i=1<<t;n[t]=-1,e&=~i}}function Fh(n){if((Re&6)!==0)throw Error(Q(327));os();var e=Ka(n,0);if((e&1)===0)return Wt(n,it()),null;var t=pl(n,e);if(n.tag!==0&&t===2){var i=bc(n);i!==0&&(e=i,t=ef(n,i))}if(t===1)throw t=So,ar(n,0),bi(n,e),Wt(n,it()),t;if(t===6)throw Error(Q(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ki(n,Ot,Kn),Wt(n,it()),null}function ed(n,e){var t=Re;Re|=1;try{return n(e)}finally{Re=t,Re===0&&(ms=it()+500,Cl&&Gi())}}function mr(n){Ai!==null&&Ai.tag===0&&(Re&6)===0&&os();var e=Re;Re|=1;var t=cn.transition,i=ze;try{if(cn.transition=null,ze=1,n)return n()}finally{ze=i,cn.transition=t,Re=e,(Re&6)===0&&Gi()}}function td(){Yt=Qr.current,We(Qr)}function ar(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,_y(t)),at!==null)for(t=at.return;t!==null;){var i=t;switch(kf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&tl();break;case 3:hs(),We(Vt),We(Ct),Wf();break;case 5:Gf(i);break;case 4:hs();break;case 13:We(Ke);break;case 19:We(Ke);break;case 10:Uf(i.type._context);break;case 22:case 23:td()}t=t.return}if(gt=n,at=n=Fi(n.current,null),yt=Yt=e,ft=0,So=null,Qf=Pl=pr=0,Ot=eo=null,tr!==null){for(e=0;e<tr.length;e++)if(t=tr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}tr=null}return n}function C0(n,e){do{var t=at;try{if(zf(),za.current=cl,ul){for(var i=Ze.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ul=!1}if(hr=0,mt=ct=Ze=null,Qs=!1,_o=0,Zf.current=null,t===null||t.return===null){ft=1,So=e,at=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=wh(o);if(g!==null){g.flags&=-257,Eh(g,o,a,s,e),g.mode&1&&Mh(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var h=new Set;h.add(l),e.updateQueue=h}else _.add(l);break e}else{if((e&1)===0){Mh(s,u,e),nd();break e}l=Error(Q(426))}}else if(je&&a.mode&1){var p=wh(o);if(p!==null){(p.flags&65536)===0&&(p.flags|=256),Eh(p,o,a,s,e),Ff(ps(l,a));break e}}s=l=ps(l,a),ft!==4&&(ft=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=c0(s,l,e);mh(s,m);break e;case 1:a=l;var v=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ni===null||!Ni.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=f0(s,a,e);mh(s,S);break e}}s=s.return}while(s!==null)}R0(t)}catch(M){e=M,at===t&&t!==null&&(at=t=t.return);continue}break}while(1)}function A0(){var n=fl.current;return fl.current=cl,n===null?cl:n}function nd(){(ft===0||ft===3||ft===2)&&(ft=4),gt===null||(pr&268435455)===0&&(Pl&268435455)===0||bi(gt,yt)}function pl(n,e){var t=Re;Re|=2;var i=A0();(gt!==n||yt!==e)&&(Kn=null,ar(n,e));do try{Gy();break}catch(r){C0(n,r)}while(1);if(zf(),Re=t,fl.current=i,at!==null)throw Error(Q(261));return gt=null,yt=0,ft}function Gy(){for(;at!==null;)L0(at)}function Wy(){for(;at!==null&&!m_();)L0(at)}function L0(n){var e=D0(n.alternate,n,Yt);n.memoizedProps=n.pendingProps,e===null?R0(n):at=e,Zf.current=null}function R0(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=Fy(t,e,Yt),t!==null){at=t;return}}else{if(t=Oy(t,e),t!==null){t.flags&=32767,at=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,at=null;return}}if(e=e.sibling,e!==null){at=e;return}at=e=n}while(e!==null);ft===0&&(ft=5)}function Ki(n,e,t){var i=ze,r=cn.transition;try{cn.transition=null,ze=1,jy(n,e,t,i)}finally{cn.transition=r,ze=i}return null}function jy(n,e,t,i){do os();while(Ai!==null);if((Re&6)!==0)throw Error(Q(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Q(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(T_(n,s),n===gt&&(at=gt=null,yt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||oa||(oa=!0,I0(Ya,function(){return os(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=cn.transition,cn.transition=null;var o=ze;ze=1;var a=Re;Re|=4,Zf.current=null,Uy(n,t),E0(t,n),fy(Dc),Za=!!Pc,Dc=Pc=null,n.current=t,By(t),g_(),Re=a,ze=o,cn.transition=s}else n.current=t;if(oa&&(oa=!1,Ai=n,hl=r),s=n.pendingLanes,s===0&&(Ni=null),y_(t.stateNode),Wt(n,it()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(dl)throw dl=!1,n=Qc,Qc=null,n;return(hl&1)!==0&&n.tag!==0&&os(),s=n.pendingLanes,(s&1)!==0?n===Jc?to++:(to=0,Jc=n):to=0,Gi(),null}function os(){if(Ai!==null){var n=ug(hl),e=cn.transition,t=ze;try{if(cn.transition=null,ze=16>n?16:n,Ai===null)var i=!1;else{if(n=Ai,Ai=null,hl=0,(Re&6)!==0)throw Error(Q(331));var r=Re;for(Re|=4,le=n.current;le!==null;){var s=le,o=s.child;if((le.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(le=u;le!==null;){var c=le;switch(c.tag){case 0:case 11:case 15:Js(8,c,s)}var f=c.child;if(f!==null)f.return=c,le=f;else for(;le!==null;){c=le;var d=c.sibling,g=c.return;if(S0(c),c===u){le=null;break}if(d!==null){d.return=g,le=d;break}le=g}}}var _=s.alternate;if(_!==null){var h=_.child;if(h!==null){_.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}le=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,le=o;else e:for(;le!==null;){if(s=le,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,le=m;break e}le=s.return}}var v=n.current;for(le=v;le!==null;){o=le;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,le=y;else e:for(o=v;le!==null;){if(a=le,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Rl(9,a)}}catch(M){nt(a,a.return,M)}if(a===o){le=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,le=S;break e}le=a.return}}if(Re=r,Gi(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(Ml,n)}catch{}i=!0}return i}finally{ze=t,cn.transition=e}}return!1}function Oh(n,e,t){e=ps(t,e),e=c0(n,e,1),n=Ii(n,e,1),e=Pt(),n!==null&&(To(n,1,e),Wt(n,e))}function nt(n,e,t){if(n.tag===3)Oh(n,n,t);else for(;e!==null;){if(e.tag===3){Oh(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ni===null||!Ni.has(i))){n=ps(t,n),n=f0(e,n,1),e=Ii(e,n,1),n=Pt(),e!==null&&(To(e,1,n),Wt(e,n));break}}e=e.return}}function Xy(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Pt(),n.pingedLanes|=n.suspendedLanes&t,gt===n&&(yt&t)===t&&(ft===4||ft===3&&(yt&130023424)===yt&&500>it()-Jf?ar(n,0):Qf|=t),Wt(n,e)}function P0(n,e){e===0&&((n.mode&1)===0?e=1:(e=Ko,Ko<<=1,(Ko&130023424)===0&&(Ko=4194304)));var t=Pt();n=oi(n,e),n!==null&&(To(n,e,t),Wt(n,t))}function $y(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),P0(n,t)}function qy(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),P0(n,t)}var D0;D0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Vt.current)Bt=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Bt=!1,ky(n,e,t);Bt=(n.flags&131072)!==0}else Bt=!1,je&&(e.flags&1048576)!==0&&kg(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ba(n,e),n=e.pendingProps;var r=cs(e,Ct.current);ss(e,t),r=Xf(null,e,i,n,r,t);var s=$f();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gt(i)?(s=!0,nl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hf(e),r.updater=Al,e.stateNode=r,r._reactInternals=e,Hc(e,i,n,t),e=Wc(null,e,i,!0,s,t)):(e.tag=0,je&&s&&Nf(e),Rt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ba(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ky(i),n=_n(i,n),r){case 0:e=Gc(null,e,i,n,t);break e;case 1:e=Ch(null,e,i,n,t);break e;case 11:e=Th(null,e,i,n,t);break e;case 14:e=bh(null,e,i,_n(i.type,n),t);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),Gc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),Ch(n,e,i,r,t);case 3:e:{if(m0(e),n===null)throw Error(Q(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ug(n,e),al(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ps(Error(Q(423)),e),e=Ah(n,e,i,t,r);break e}else if(i!==r){r=ps(Error(Q(424)),e),e=Ah(n,e,i,t,r);break e}else for(Kt=Di(e.stateNode.containerInfo.firstChild),Zt=e,je=!0,xn=null,t=Gg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(fs(),i===r){e=ai(n,e,t);break e}Rt(n,e,i,t)}e=e.child}return e;case 5:return Wg(e),n===null&&zc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Ic(i,r)?o=null:s!==null&&Ic(i,s)&&(e.flags|=32),p0(n,e),Rt(n,e,o,t),e.child;case 6:return n===null&&zc(e),null;case 13:return g0(n,e,t);case 4:return Vf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ds(e,null,i,t):Rt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),Th(n,e,i,r,t);case 7:return Rt(n,e,e.pendingProps,t),e.child;case 8:return Rt(n,e,e.pendingProps.children,t),e.child;case 12:return Rt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ve(sl,i._currentValue),i._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===r.children&&!Vt.current){e=ai(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ni(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Uc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Q(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Uc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ss(e,t),r=fn(r),i=i(r),e.flags|=1,Rt(n,e,i,t),e.child;case 14:return i=e.type,r=_n(i,e.pendingProps),r=_n(i.type,r),bh(n,e,i,r,t);case 15:return d0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),Ba(n,e),e.tag=1,Gt(i)?(n=!0,nl(e)):n=!1,ss(e,t),Hg(e,i,r),Hc(e,i,r,t),Wc(null,e,i,!0,n,t);case 19:return v0(n,e,t);case 22:return h0(n,e,t)}throw Error(Q(156,e.tag))};function I0(n,e){return sg(n,e)}function Yy(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(n,e,t,i){return new Yy(n,e,t,i)}function id(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ky(n){if(typeof n=="function")return id(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Mf)return 11;if(n===wf)return 14}return 2}function Fi(n,e){var t=n.alternate;return t===null?(t=ln(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ga(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")id(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Vr:return lr(t.children,r,s,e);case Sf:o=8,r|=8;break;case fc:return n=ln(12,t,e,r|2),n.elementType=fc,n.lanes=s,n;case dc:return n=ln(13,t,e,r),n.elementType=dc,n.lanes=s,n;case hc:return n=ln(19,t,e,r),n.elementType=hc,n.lanes=s,n;case Vm:return Dl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Bm:o=10;break e;case Hm:o=9;break e;case Mf:o=11;break e;case wf:o=14;break e;case wi:o=16,i=null;break e}throw Error(Q(130,n==null?n:typeof n,""))}return e=ln(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function lr(n,e,t,i){return n=ln(7,n,i,e),n.lanes=t,n}function Dl(n,e,t,i){return n=ln(22,n,i,e),n.elementType=Vm,n.lanes=t,n.stateNode={isHidden:!1},n}function wu(n,e,t){return n=ln(6,n,null,e),n.lanes=t,n}function Eu(n,e,t){return e=ln(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Zy(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ru(0),this.expirationTimes=ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rd(n,e,t,i,r,s,o,a,l){return n=new Zy(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ln(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(s),n}function Qy(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function N0(n){if(!n)return Bi;n=n._reactInternals;e:{if(Sr(n)!==n||n.tag!==1)throw Error(Q(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(n.tag===1){var t=n.type;if(Gt(t))return Ig(n,t,e)}return e}function k0(n,e,t,i,r,s,o,a,l){return n=rd(t,i,!0,n,r,s,o,a,l),n.context=N0(null),t=n.current,i=Pt(),r=ki(t),s=ni(i,r),s.callback=e!=null?e:null,Ii(t,s,r),n.current.lanes=r,To(n,r,i),Wt(n,i),n}function Il(n,e,t,i){var r=e.current,s=Pt(),o=ki(r);return t=N0(t),e.context===null?e.context=t:e.pendingContext=t,e=ni(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ii(r,e,o),n!==null&&(wn(n,r,o,s),Oa(n,r,o)),o}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function zh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function sd(n,e){zh(n,e),(n=n.alternate)&&zh(n,e)}function Jy(){return null}var F0=typeof reportError=="function"?reportError:function(n){console.error(n)};function od(n){this._internalRoot=n}Nl.prototype.render=od.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Q(409));Il(n,e,null,null)};Nl.prototype.unmount=od.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;mr(function(){Il(null,n,null,null)}),e[si]=null}};function Nl(n){this._internalRoot=n}Nl.prototype.unstable_scheduleHydration=function(n){if(n){var e=dg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ti.length&&e!==0&&e<Ti[t].priority;t++);Ti.splice(t,0,n),t===0&&pg(n)}};function ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function kl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Uh(){}function e1(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ml(o);s.call(u)}}var o=k0(e,i,n,0,null,!1,!1,"",Uh);return n._reactRootContainer=o,n[si]=o.current,ho(n.nodeType===8?n.parentNode:n),mr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ml(l);a.call(u)}}var l=rd(n,0,!1,null,null,!1,!1,"",Uh);return n._reactRootContainer=l,n[si]=l.current,ho(n.nodeType===8?n.parentNode:n),mr(function(){Il(e,l,t,i)}),l}function Fl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ml(o);a.call(l)}}Il(e,o,n,r)}else o=e1(t,e,n,r,i);return ml(o)}cg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Gs(e.pendingLanes);t!==0&&(bf(e,t|1),Wt(e,it()),(Re&6)===0&&(ms=it()+500,Gi()))}break;case 13:mr(function(){var i=oi(n,1);if(i!==null){var r=Pt();wn(i,n,1,r)}}),sd(n,1)}};Cf=function(n){if(n.tag===13){var e=oi(n,134217728);if(e!==null){var t=Pt();wn(e,n,134217728,t)}sd(n,134217728)}};fg=function(n){if(n.tag===13){var e=ki(n),t=oi(n,e);if(t!==null){var i=Pt();wn(t,n,e,i)}sd(n,e)}};dg=function(){return ze};hg=function(n,e){var t=ze;try{return ze=n,e()}finally{ze=t}};wc=function(n,e,t){switch(e){case"input":if(gc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=bl(i);if(!r)throw Error(Q(90));Wm(i),gc(i,r)}}}break;case"textarea":Xm(n,t);break;case"select":e=t.value,e!=null&&ts(n,!!t.multiple,e,!1)}};Jm=ed;eg=mr;var t1={usingClientEntryPoint:!1,Events:[Co,Xr,bl,Zm,Qm,ed]},Os={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},n1={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ig(n),n===null?null:n.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||Jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!aa.isDisabled&&aa.supportsFiber)try{Ml=aa.inject(n1),Un=aa}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t1;en.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(e))throw Error(Q(200));return Qy(n,e,null,t)};en.createRoot=function(n,e){if(!ad(n))throw Error(Q(299));var t=!1,i="",r=F0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rd(n,1,!1,null,null,t,!1,i,r),n[si]=e.current,ho(n.nodeType===8?n.parentNode:n),new od(e)};en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Q(188)):(n=Object.keys(n).join(","),Error(Q(268,n)));return n=ig(e),n=n===null?null:n.stateNode,n};en.flushSync=function(n){return mr(n)};en.hydrate=function(n,e,t){if(!kl(e))throw Error(Q(200));return Fl(null,n,e,!0,t)};en.hydrateRoot=function(n,e,t){if(!ad(n))throw Error(Q(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=F0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=k0(e,null,n,1,t!=null?t:null,r,!1,s,o),n[si]=e.current,ho(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Nl(e)};en.render=function(n,e,t){if(!kl(e))throw Error(Q(200));return Fl(null,n,e,!1,t)};en.unmountComponentAtNode=function(n){if(!kl(n))throw Error(Q(40));return n._reactRootContainer?(mr(function(){Fl(null,null,n,!1,function(){n._reactRootContainer=null,n[si]=null})}),!0):!1};en.unstable_batchedUpdates=ed;en.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!kl(t))throw Error(Q(200));if(n==null||n._reactInternals===void 0)throw Error(Q(38));return Fl(n,e,t,!1,i)};en.version="18.2.0-next-9e3b772b8-20220608";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(n){console.error(n)}}O0(),vf.exports=en;var Bh=vf.exports;uc.createRoot=Bh.createRoot,uc.hydrateRoot=Bh.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ld="142",i1=0,Hh=1,r1=2,z0=1,s1=2,js=3,Mo=0,En=1,gs=2,o1=1,Oi=0,as=1,Vh=2,Gh=3,Wh=4,a1=5,Br=100,l1=101,u1=102,jh=103,Xh=104,c1=200,f1=201,d1=202,h1=203,U0=204,B0=205,p1=206,m1=207,g1=208,v1=209,_1=210,y1=0,x1=1,S1=2,nf=3,M1=4,w1=5,E1=6,T1=7,ud=0,b1=1,C1=2,ii=0,A1=1,L1=2,R1=3,H0=4,P1=5,V0=300,vs=301,_s=302,rf=303,sf=304,Ol=306,of=1e3,Sn=1001,af=1002,zt=1003,$h=1004,qh=1005,on=1006,D1=1007,zl=1008,gr=1009,I1=1010,N1=1011,G0=1012,k1=1013,ir=1014,rr=1015,wo=1016,F1=1017,O1=1018,ls=1020,z1=1021,U1=1022,On=1023,B1=1024,H1=1025,ur=1026,ys=1027,V1=1028,G1=1029,W1=1030,j1=1031,X1=1033,Tu=33776,bu=33777,Cu=33778,Au=33779,Yh=35840,Kh=35841,Zh=35842,Qh=35843,$1=36196,Jh=37492,ep=37496,tp=37808,np=37809,ip=37810,rp=37811,sp=37812,op=37813,ap=37814,lp=37815,up=37816,cp=37817,fp=37818,dp=37819,hp=37820,pp=37821,mp=36492,gl=2300,vl=2301,Lu=2302,gp=2400,vp=2401,_p=2402;const q1=2501;const vr=3e3,Ye=3001,Y1=3200,K1=3201,W0=0,Z1=1,Zn="srgb",sr="srgb-linear",Ru=7680,Q1=519,yp=35044,xp="300 es",lf=1035;class Es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sp=1234567;const no=Math.PI/180,_l=180/Math.PI;function Ts(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function cd(n,e){return(n%e+e)%e}function J1(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ex(n,e,t){return n!==e?(t-n)/(e-n):0}function io(n,e,t){return(1-t)*n+t*e}function tx(n,e,t,i){return io(n,e,1-Math.exp(-t*i))}function nx(n,e=1){return e-Math.abs(cd(n,e*2)-e)}function ix(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function sx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ox(n,e){return n+Math.random()*(e-n)}function ax(n){return n*(.5-Math.random())}function lx(n){n!==void 0&&(Sp=n);let e=Sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ux(n){return n*no}function cx(n){return n*_l}function uf(n){return(n&n-1)===0&&n!==0}function fx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dx(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),g=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*d,a*u);break;case"YZY":n.set(l*d,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*d,a*c,a*u);break;case"XZX":n.set(a*c,l*_,l*g,a*u);break;case"YXY":n.set(l*g,a*c,l*_,a*u);break;case"ZYZ":n.set(l*_,l*g,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hx(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function px(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var mx=Object.freeze({__proto__:null,DEG2RAD:no,RAD2DEG:_l,generateUUID:Ts,clamp:Ut,euclideanModulo:cd,mapLinear:J1,inverseLerp:ex,lerp:io,damp:tx,pingpong:nx,smoothstep:ix,smootherstep:rx,randInt:sx,randFloat:ox,randFloatSpread:ax,seededRandom:lx,degToRad:ux,radToDeg:cx,isPowerOfTwo:uf,ceilPowerOfTwo:fx,floorPowerOfTwo:yl,setQuaternionFromProperEuler:dx,normalize:px,denormalize:hx});class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class un{constructor(){un.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],g=i[5],_=i[8],h=r[0],p=r[3],m=r[6],v=r[1],y=r[4],S=r[7],M=r[2],T=r[5],A=r[8];return s[0]=o*h+a*v+l*M,s[3]=o*p+a*y+l*T,s[6]=o*m+a*S+l*A,s[1]=u*h+c*v+f*M,s[4]=u*p+c*y+f*T,s[7]=u*m+c*S+f*A,s[2]=d*h+g*v+_*M,s[5]=d*p+g*y+_*T,s[8]=d*m+g*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,g=u*s-o*l,_=t*f+i*d+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/_;return e[0]=f*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=d*h,e[4]=(c*t-r*l)*h,e[5]=(r*s-a*t)*h,e[6]=g*h,e[7]=(i*l-u*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*c,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*c,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function j0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function xl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Pu={[Zn]:{[sr]:cr},[sr]:{[Zn]:Wa}},pn={legacyMode:!0,get workingColorSpace(){return sr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Pu[e]&&Pu[e][t]!==void 0){const i=Pu[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},X0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lt={r:0,g:0,b:0},mn={h:0,s:0,l:0},la={h:0,s:0,l:0};function Du(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ua(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=sr){return this.r=e,this.g=t,this.b=i,pn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=sr){if(e=cd(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Du(o,s,e+1/3),this.g=Du(o,s,e),this.b=Du(o,s,e-1/3)}return pn.toWorkingColorSpace(this,r),this}setStyle(e,t=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,pn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,pn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,pn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,pn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Zn){const i=X0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return pn.fromWorkingColorSpace(ua(this,lt),e),Ut(lt.r*255,0,255)<<16^Ut(lt.g*255,0,255)<<8^Ut(lt.b*255,0,255)<<0}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sr){pn.fromWorkingColorSpace(ua(this,lt),t);const i=lt.r,r=lt.g,s=lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=sr){return pn.fromWorkingColorSpace(ua(this,lt),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=Zn){return pn.fromWorkingColorSpace(ua(this,lt),e),e!==Zn?`color(${e} ${lt.r} ${lt.g} ${lt.b})`:`rgb(${lt.r*255|0},${lt.g*255|0},${lt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(mn),mn.h+=e,mn.s+=t,mn.l+=i,this.setHSL(mn.h,mn.s,mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(la);const i=io(mn.h,la.h,t),r=io(mn.s,la.s,t),s=io(mn.l,la.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Oe.NAMES=X0;let br;class $0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=xl("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=xl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class q0{constructor(e=null){this.isSource=!0,this.uuid=Ts(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Iu(r[o].image)):s.push(Iu(r[o]))}else s=Iu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Iu(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?$0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gx=0;class bn extends Es{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,i=Sn,r=Sn,s=on,o=zl,a=On,l=gr,u=1,c=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Ts(),this.name="",this.source=new q0(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new un,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case of:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case of:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=V0;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],g=l[5],_=l[9],h=l[2],p=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-h)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+h)<.1&&Math.abs(_+p)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,S=(g+1)/2,M=(m+1)/2,T=(c+d)/4,A=(f+h)/4,x=(_+p)/4;return y>S&&y>M?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=A/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=x/s),this.set(i,r,s,t),this}let v=Math.sqrt((p-_)*(p-_)+(f-h)*(f-h)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(f-h)/v,this.z=(d-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _r extends Es{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new bn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:on,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new q0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Y0 extends bn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vx extends bn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],g=s[o+1],_=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=_,e[t+3]=h;return}if(f!==h||l!==d||u!==g||c!==_){let p=1-a;const m=l*d+u*g+c*_+f*h,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const M=Math.sqrt(y),T=Math.atan2(M,m*v);p=Math.sin(p*T)/M,a=Math.sin(a*T)/M}const S=a*v;if(l=l*p+d*S,u=u*p+g*S,c=c*p+_*S,f=f*p+h*S,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],g=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*g-u*d,e[t+1]=l*_+c*d+u*f-a*g,e[t+2]=u*_+c*g+a*d-l*f,e[t+3]=c*_-a*f-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*g*_,this._y=u*g*f-d*c*_,this._z=u*c*_+d*g*f,this._w=u*c*f-d*g*_;break;case"YXZ":this._x=d*c*f+u*g*_,this._y=u*g*f-d*c*_,this._z=u*c*_-d*g*f,this._w=u*c*f+d*g*_;break;case"ZXY":this._x=d*c*f-u*g*_,this._y=u*g*f+d*c*_,this._z=u*c*_+d*g*f,this._w=u*c*f-d*g*_;break;case"ZYX":this._x=d*c*f-u*g*_,this._y=u*g*f+d*c*_,this._z=u*c*_-d*g*f,this._w=u*c*f+d*g*_;break;case"YZX":this._x=d*c*f+u*g*_,this._y=u*g*f+d*c*_,this._z=u*c*_-d*g*f,this._w=u*c*f-d*g*_;break;case"XZY":this._x=d*c*f-u*g*_,this._y=u*g*f-d*c*_,this._z=u*c*_+d*g*f,this._w=u*c*f+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Mp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,f=l*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nu.copy(this).projectOnVector(e),this.sub(Nu)}reflect(e){return this.sub(Nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nu=new N,Mp=new li;class Lo{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<t&&(t=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<t&&(t=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ji.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ji)}else i.boundingBox===null&&i.computeBoundingBox(),ku.copy(i.boundingBox),ku.applyMatrix4(e.matrixWorld),this.union(ku);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),ca.subVectors(this.max,zs),Cr.subVectors(e.a,zs),Ar.subVectors(e.b,zs),Lr.subVectors(e.c,zs),pi.subVectors(Ar,Cr),mi.subVectors(Lr,Ar),Xi.subVectors(Cr,Lr);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Xi.z,Xi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Xi.z,0,-Xi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Xi.y,Xi.x,0];return!Fu(t,Cr,Ar,Lr,ca)||(t=[1,0,0,0,1,0,0,0,1],!Fu(t,Cr,Ar,Lr,ca))?!1:(fa.crossVectors(pi,mi),t=[fa.x,fa.y,fa.z],Fu(t,Cr,Ar,Lr,ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ji.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new N,new N,new N,new N,new N,new N,new N,new N],ji=new N,ku=new Lo,Cr=new N,Ar=new N,Lr=new N,pi=new N,mi=new N,Xi=new N,zs=new N,ca=new N,fa=new N,$i=new N;function Fu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){$i.fromArray(n,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),u=t.dot($i),c=i.dot($i);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const _x=new Lo,wp=new N,da=new N,Ou=new N;class fd{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_x.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ou.subVectors(e,this.center);const t=Ou.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Ou.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?da.set(0,0,1).multiplyScalar(e.radius):da.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(wp.copy(e.center).add(da)),this.expandByPoint(wp.copy(e.center).sub(da)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new N,zu=new N,ha=new N,gi=new N,Uu=new N,pa=new N,Bu=new N;class yx{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.direction).multiplyScalar(t).add(this.origin),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zu.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(zu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ha),a=gi.dot(this.direction),l=-gi.dot(ha),u=gi.lengthSq(),c=Math.abs(1-o*o);let f,d,g,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const h=1/c;f*=h,d*=h,g=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(ha).multiplyScalar(d).add(zu),g}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,r,s){Uu.subVectors(t,e),pa.subVectors(i,e),Bu.crossVectors(Uu,pa);let o=this.direction.dot(Bu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(pa.crossVectors(gi,pa));if(l<0)return null;const u=a*this.direction.dot(Uu.cross(gi));if(u<0||l+u>o)return null;const c=-a*gi.dot(Bu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,u,c,f,d,g,_,h,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=d,m[3]=g,m[7]=_,m[11]=h,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,g=o*f,_=a*c,h=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=g+_*u,t[5]=d-h*u,t[9]=-a*l,t[2]=h-d*u,t[6]=_+g*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,g=l*f,_=u*c,h=u*f;t[0]=d+h*a,t[4]=_*a-g,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=g*a-_,t[6]=h+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,g=l*f,_=u*c,h=u*f;t[0]=d-h*a,t[4]=-o*f,t[8]=_+g*a,t[1]=g+_*a,t[5]=o*c,t[9]=h-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,g=o*f,_=a*c,h=a*f;t[0]=l*c,t[4]=_*u-g,t[8]=d*u+h,t[1]=l*f,t[5]=h*u+d,t[9]=g*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*u,_=a*l,h=a*u;t[0]=l*c,t[4]=h-d*f,t[8]=_*f+g,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=g*f+_,t[10]=d-h*f}else if(e.order==="XZY"){const d=o*l,g=o*u,_=a*l,h=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+h,t[5]=o*c,t[9]=g*f-_,t[2]=_*f-g,t[6]=a*c,t[10]=h*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xx,e,Sx)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),vi.crossVectors(i,$t),vi.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),vi.crossVectors(i,$t)),vi.normalize(),ma.crossVectors($t,vi),r[0]=vi.x,r[4]=ma.x,r[8]=$t.x,r[1]=vi.y,r[5]=ma.y,r[9]=$t.y,r[2]=vi.z,r[6]=ma.z,r[10]=$t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],g=i[13],_=i[2],h=i[6],p=i[10],m=i[14],v=i[3],y=i[7],S=i[11],M=i[15],T=r[0],A=r[4],x=r[8],C=r[12],R=r[1],k=r[5],K=r[9],Z=r[13],I=r[2],W=r[6],U=r[10],X=r[14],P=r[3],D=r[7],F=r[11],q=r[15];return s[0]=o*T+a*R+l*I+u*P,s[4]=o*A+a*k+l*W+u*D,s[8]=o*x+a*K+l*U+u*F,s[12]=o*C+a*Z+l*X+u*q,s[1]=c*T+f*R+d*I+g*P,s[5]=c*A+f*k+d*W+g*D,s[9]=c*x+f*K+d*U+g*F,s[13]=c*C+f*Z+d*X+g*q,s[2]=_*T+h*R+p*I+m*P,s[6]=_*A+h*k+p*W+m*D,s[10]=_*x+h*K+p*U+m*F,s[14]=_*C+h*Z+p*X+m*q,s[3]=v*T+y*R+S*I+M*P,s[7]=v*A+y*k+S*W+M*D,s[11]=v*x+y*K+S*U+M*F,s[15]=v*C+y*Z+S*X+M*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],g=e[14],_=e[3],h=e[7],p=e[11],m=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*g-i*l*g)+h*(+t*l*g-t*u*d+s*o*d-r*o*g+r*u*c-s*l*c)+p*(+t*u*f-t*a*g-s*o*f+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],g=e[11],_=e[12],h=e[13],p=e[14],m=e[15],v=f*p*u-h*d*u+h*l*g-a*p*g-f*l*m+a*d*m,y=_*d*u-c*p*u-_*l*g+o*p*g+c*l*m-o*d*m,S=c*h*u-_*f*u+_*a*g-o*h*g-c*a*m+o*f*m,M=_*f*l-c*h*l-_*a*d+o*h*d+c*a*p-o*f*p,T=t*v+i*y+r*S+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(h*d*s-f*p*s-h*r*g+i*p*g+f*r*m-i*d*m)*A,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*m+i*l*m)*A,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*g-i*l*g)*A,e[4]=y*A,e[5]=(c*p*s-_*d*s+_*r*g-t*p*g-c*r*m+t*d*m)*A,e[6]=(_*l*s-o*p*s-_*r*u+t*p*u+o*r*m-t*l*m)*A,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*g+t*l*g)*A,e[8]=S*A,e[9]=(_*f*s-c*h*s-_*i*g+t*h*g+c*i*m-t*f*m)*A,e[10]=(o*h*s-_*a*s+_*i*u-t*h*u-o*i*m+t*a*m)*A,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*g-t*a*g)*A,e[12]=M*A,e[13]=(c*h*r-_*f*r+_*i*d-t*h*d-c*i*p+t*f*p)*A,e[14]=(_*a*r-o*h*r-_*i*l+t*h*l+o*i*p-t*a*p)*A,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,g=s*c,_=s*f,h=o*c,p=o*f,m=a*f,v=l*u,y=l*c,S=l*f,M=i.x,T=i.y,A=i.z;return r[0]=(1-(h+m))*M,r[1]=(g+S)*M,r[2]=(_-y)*M,r[3]=0,r[4]=(g-S)*T,r[5]=(1-(d+m))*T,r[6]=(p+v)*T,r[7]=0,r[8]=(_+y)*A,r[9]=(p-v)*A,r[10]=(1-(d+h))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const u=1/s,c=1/o,f=1/a;return gn.elements[0]*=u,gn.elements[1]*=u,gn.elements[2]*=u,gn.elements[4]*=c,gn.elements[5]*=c,gn.elements[6]*=c,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,t.setFromRotationMatrix(gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),f=(t+e)*l,d=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Rr=new N,gn=new ht,xx=new N(0,0,0),Sx=new N(1,1,1),vi=new N,ma=new N,$t=new N,Ep=new ht,Tp=new li;class Ro{constructor(e=0,t=0,i=0,r=Ro.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tp.setFromEuler(this),this.setFromQuaternion(Tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ro.DefaultOrder="XYZ";Ro.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class K0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mx=0;const bp=new N,Pr=new li,$n=new ht,ga=new N,Us=new N,wx=new N,Ex=new li,Cp=new N(1,0,0),Ap=new N(0,1,0),Lp=new N(0,0,1),Tx={type:"added"},Rp={type:"removed"};class jt extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DefaultUp.clone();const e=new N,t=new Ro,i=new li,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new un}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=jt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new K0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Cp,e)}rotateY(e){return this.rotateOnAxis(Ap,e)}rotateZ(e){return this.rotateOnAxis(Lp,e)}translateOnAxis(e,t){return bp.copy(e).applyQuaternion(this.quaternion),this.position.add(bp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cp,e)}translateY(e){return this.translateOnAxis(Ap,e)}translateZ(e){return this.translateOnAxis(Lp,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ga.copy(e):ga.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Us,ga,this.up):$n.lookAt(ga,Us,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix($n),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Rp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DefaultUp=new N(0,1,0);jt.DefaultMatrixAutoUpdate=!0;const vn=new N,qn=new N,Hu=new N,Yn=new N,Dr=new N,Ir=new N,Pp=new N,Vu=new N,Gu=new N,Wu=new N;class Jn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),qn.subVectors(i,t),Hu.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(qn),l=vn.dot(Hu),u=qn.dot(qn),c=qn.dot(Hu),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,g=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-g-_,_,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yn),Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Yn),l.set(0,0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),qn.subVectors(e,t),vn.cross(qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),vn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Jn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Dr.subVectors(r,i),Ir.subVectors(s,i),Vu.subVectors(e,i);const l=Dr.dot(Vu),u=Ir.dot(Vu);if(l<=0&&u<=0)return t.copy(i);Gu.subVectors(e,r);const c=Dr.dot(Gu),f=Ir.dot(Gu);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Dr,o);Wu.subVectors(e,s);const g=Dr.dot(Wu),_=Ir.dot(Wu);if(_>=0&&g<=_)return t.copy(s);const h=g*u-l*_;if(h<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Ir,a);const p=c*_-g*f;if(p<=0&&f-c>=0&&g-_>=0)return Pp.subVectors(s,r),a=(f-c)/(f-c+(g-_)),t.copy(r).addScaledVector(Pp,a);const m=1/(p+h+d);return o=h*m,a=d*m,t.copy(i).addScaledVector(Dr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let bx=0;class Po extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=as,this.side=Mo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=U0,this.blendDst=B0,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ru,this.stencilZFail=Ru,this.stencilZPass=Ru,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===o1;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==Mo&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dd extends Po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new N,va=new De;class Hn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=yp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Oe),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new De),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new N),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new dt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Z0 extends Hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Q0 extends Hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends Hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cx=0;const nn=new ht,ju=new jt,Nr=new N,qt=new Lo,Bs=new Lo,pt=new N;class ci extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j0(e)?Q0:Z0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new un().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(qt.min,Bs.min),qt.expandByPoint(pt),pt.addVectors(qt.max,Bs.max),qt.expandByPoint(pt)):(qt.expandByPoint(Bs.min),qt.expandByPoint(Bs.max))}qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)pt.fromBufferAttribute(a,u),l&&(Nr.fromBufferAttribute(e,u),pt.add(Nr)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let R=0;R<a;R++)u[R]=new N,c[R]=new N;const f=new N,d=new N,g=new N,_=new De,h=new De,p=new De,m=new N,v=new N;function y(R,k,K){f.fromArray(r,R*3),d.fromArray(r,k*3),g.fromArray(r,K*3),_.fromArray(o,R*2),h.fromArray(o,k*2),p.fromArray(o,K*2),d.sub(f),g.sub(f),h.sub(_),p.sub(_);const Z=1/(h.x*p.y-p.x*h.y);!isFinite(Z)||(m.copy(d).multiplyScalar(p.y).addScaledVector(g,-h.y).multiplyScalar(Z),v.copy(g).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(Z),u[R].add(m),u[k].add(m),u[K].add(m),c[R].add(v),c[k].add(v),c[K].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let R=0,k=S.length;R<k;++R){const K=S[R],Z=K.start,I=K.count;for(let W=Z,U=Z+I;W<U;W+=3)y(i[W+0],i[W+1],i[W+2])}const M=new N,T=new N,A=new N,x=new N;function C(R){A.fromArray(s,R*3),x.copy(A);const k=u[R];M.copy(k),M.sub(A.multiplyScalar(A.dot(k))).normalize(),T.crossVectors(x,k);const Z=T.dot(c[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=Z}for(let R=0,k=S.length;R<k;++R){const K=S[R],Z=K.start,I=K.count;for(let W=Z,U=Z+I;W<U;W+=3)C(i[W+0]),C(i[W+1]),C(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,f=new N;if(e)for(let d=0,g=e.count;d<g;d+=3){const _=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*t,c=Math.min(l.length,o.length-u);for(let f=0,d=u;f<c;f++,d++)o[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let g=0,_=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?g=l[h]*a.data.stride+a.offset:g=l[h]*c;for(let m=0;m<c;m++)d[_++]=u[g++]}return new Hn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],g=e(d,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const g=u[f];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,g=f.length;d<g;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dp=new ht,kr=new yx,Xu=new fd,_i=new N,yi=new N,xi=new N,$u=new N,qu=new N,Yu=new N,_a=new N,ya=new N,xa=new N,Sa=new De,Ma=new De,wa=new De,Ku=new N,Ea=new N;class zn extends jt{constructor(e=new ci,t=new dd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Xu.copy(i.boundingSphere),Xu.applyMatrix4(s),e.ray.intersectsSphere(Xu)===!1)||(Dp.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Dp),i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,g=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let h=0,p=g.length;h<p;h++){const m=g[h],v=r[m.materialIndex],y=Math.max(m.start,_.start),S=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let M=y,T=S;M<T;M+=3){const A=a.getX(M),x=a.getX(M+1),C=a.getX(M+2);o=Ta(this,v,e,kr,l,u,c,f,d,A,x,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const h=Math.max(0,_.start),p=Math.min(a.count,_.start+_.count);for(let m=h,v=p;m<v;m+=3){const y=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);o=Ta(this,r,e,kr,l,u,c,f,d,y,S,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let h=0,p=g.length;h<p;h++){const m=g[h],v=r[m.materialIndex],y=Math.max(m.start,_.start),S=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let M=y,T=S;M<T;M+=3){const A=M,x=M+1,C=M+2;o=Ta(this,v,e,kr,l,u,c,f,d,A,x,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const h=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let m=h,v=p;m<v;m+=3){const y=m,S=m+1,M=m+2;o=Ta(this,r,e,kr,l,u,c,f,d,y,S,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Ax(n,e,t,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==gs,a),l===null)return null;Ea.copy(a),Ea.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ea);return u<t.near||u>t.far?null:{distance:u,point:Ea.clone(),object:n}}function Ta(n,e,t,i,r,s,o,a,l,u,c,f){_i.fromBufferAttribute(r,u),yi.fromBufferAttribute(r,c),xi.fromBufferAttribute(r,f);const d=n.morphTargetInfluences;if(s&&d){_a.set(0,0,0),ya.set(0,0,0),xa.set(0,0,0);for(let _=0,h=s.length;_<h;_++){const p=d[_],m=s[_];p!==0&&($u.fromBufferAttribute(m,u),qu.fromBufferAttribute(m,c),Yu.fromBufferAttribute(m,f),o?(_a.addScaledVector($u,p),ya.addScaledVector(qu,p),xa.addScaledVector(Yu,p)):(_a.addScaledVector($u.sub(_i),p),ya.addScaledVector(qu.sub(yi),p),xa.addScaledVector(Yu.sub(xi),p)))}_i.add(_a),yi.add(ya),xi.add(xa)}n.isSkinnedMesh&&(n.boneTransform(u,_i),n.boneTransform(c,yi),n.boneTransform(f,xi));const g=Ax(n,e,t,i,_i,yi,xi,Ku);if(g){a&&(Sa.fromBufferAttribute(a,u),Ma.fromBufferAttribute(a,c),wa.fromBufferAttribute(a,f),g.uv=Jn.getUV(Ku,_i,yi,xi,Sa,Ma,wa,new De)),l&&(Sa.fromBufferAttribute(l,u),Ma.fromBufferAttribute(l,c),wa.fromBufferAttribute(l,f),g.uv2=Jn.getUV(Ku,_i,yi,xi,Sa,Ma,wa,new De));const _={a:u,b:c,c:f,normal:new N,materialIndex:0};Jn.getNormal(_i,yi,xi,_.normal),g.face=_}return g}class Do extends ci{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,g=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(f,2));function _(h,p,m,v,y,S,M,T,A,x,C){const R=S/A,k=M/x,K=S/2,Z=M/2,I=T/2,W=A+1,U=x+1;let X=0,P=0;const D=new N;for(let F=0;F<U;F++){const q=F*k-Z;for(let $=0;$<W;$++){const J=$*R-K;D[h]=J*v,D[p]=q*y,D[m]=I,u.push(D.x,D.y,D.z),D[h]=0,D[p]=0,D[m]=T>0?1:-1,c.push(D.x,D.y,D.z),f.push($/A),f.push(1-F/x),X+=1}}for(let F=0;F<x;F++)for(let q=0;q<A;q++){const $=d+q+W*F,J=d+q+W*(F+1),ae=d+(q+1)+W*(F+1),he=d+(q+1)+W*F;l.push($,J,he),l.push(J,ae,he),P+=6}a.addGroup(g,P,C),g+=P,d+=X}}static fromJSON(e){return new Do(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=xs(n[t]);for(const r in i)e[r]=i[r]}return e}const Lx={clone:xs,merge:Tt};var Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Rx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class J0 extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends J0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_l*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fr=90,Or=1;class Dx extends jt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new an(Fr,Or,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new N(1,0,0)),this.add(r);const s=new an(Fr,Or,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(-1,0,0)),this.add(s);const o=new an(Fr,Or,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new N(0,1,0)),this.add(o);const a=new an(Fr,Or,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new N(0,-1,0)),this.add(a);const l=new an(Fr,Or,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,1)),this.add(l);const u=new an(Fr,Or,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new N(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=ii,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class ev extends bn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:vs,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ix extends _r{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ev(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Do(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Oi});s.uniforms.tEquirect.value=t;const o=new zn(r,s),a=t.minFilter;return t.minFilter===zl&&(t.minFilter=on),new Dx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Zu=new N,Nx=new N,kx=new un;class Zi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Zu.subVectors(i,t).cross(Nx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kx.getNormalMatrix(e),r=this.coplanarPoint(Zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new fd,ba=new N;class hd{constructor(e=new Zi,t=new Zi,i=new Zi,r=new Zi,s=new Zi,o=new Zi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],g=i[9],_=i[10],h=i[11],p=i[12],m=i[13],v=i[14],y=i[15];return t[0].setComponents(a-r,f-l,h-d,y-p).normalize(),t[1].setComponents(a+r,f+l,h+d,y+p).normalize(),t[2].setComponents(a+s,f+u,h+g,y+m).normalize(),t[3].setComponents(a-s,f-u,h-g,y-m).normalize(),t[4].setComponents(a-o,f-c,h-_,y-v).normalize(),t[5].setComponents(a+o,f+c,h+_,y+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Fx(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,g=c.updateRange;n.bindBuffer(f,u),g.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):n.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class pd extends ci{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,g=[],_=[],h=[],p=[];for(let m=0;m<c;m++){const v=m*d-o;for(let y=0;y<u;y++){const S=y*f-s;_.push(S,-v,0),h.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const y=v+u*m,S=v+u*(m+1),M=v+1+u*(m+1),T=v+1+u*m;g.push(y,S,T),g.push(S,M,T)}this.setIndex(g),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(p,2))}static fromJSON(e){return new pd(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ox=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gx="vec3 transformed = vec3( position );",Wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Xx=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,$x=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,iS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uS="gl_FragColor = linearToOutputTexel( gl_FragColor );",cS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,SS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,MS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wS=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,ES=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,bS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,AS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,RS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,PS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,kS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,US=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$S=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,YS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,KS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,tM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,iM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,rM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,aM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,gM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_M=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,yM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TM=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,bM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,CM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,AM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,LM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,RM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,PM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,DM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kM=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,WM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,cw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:Ox,alphamap_pars_fragment:zx,alphatest_fragment:Ux,alphatest_pars_fragment:Bx,aomap_fragment:Hx,aomap_pars_fragment:Vx,begin_vertex:Gx,beginnormal_vertex:Wx,bsdfs:jx,iridescence_fragment:Xx,bumpmap_pars_fragment:$x,clipping_planes_fragment:qx,clipping_planes_pars_fragment:Yx,clipping_planes_pars_vertex:Kx,clipping_planes_vertex:Zx,color_fragment:Qx,color_pars_fragment:Jx,color_pars_vertex:eS,color_vertex:tS,common:nS,cube_uv_reflection_fragment:iS,defaultnormal_vertex:rS,displacementmap_pars_vertex:sS,displacementmap_vertex:oS,emissivemap_fragment:aS,emissivemap_pars_fragment:lS,encodings_fragment:uS,encodings_pars_fragment:cS,envmap_fragment:fS,envmap_common_pars_fragment:dS,envmap_pars_fragment:hS,envmap_pars_vertex:pS,envmap_physical_pars_fragment:TS,envmap_vertex:mS,fog_vertex:gS,fog_pars_vertex:vS,fog_fragment:_S,fog_pars_fragment:yS,gradientmap_pars_fragment:xS,lightmap_fragment:SS,lightmap_pars_fragment:MS,lights_lambert_vertex:wS,lights_pars_begin:ES,lights_toon_fragment:bS,lights_toon_pars_fragment:CS,lights_phong_fragment:AS,lights_phong_pars_fragment:LS,lights_physical_fragment:RS,lights_physical_pars_fragment:PS,lights_fragment_begin:DS,lights_fragment_maps:IS,lights_fragment_end:NS,logdepthbuf_fragment:kS,logdepthbuf_pars_fragment:FS,logdepthbuf_pars_vertex:OS,logdepthbuf_vertex:zS,map_fragment:US,map_pars_fragment:BS,map_particle_fragment:HS,map_particle_pars_fragment:VS,metalnessmap_fragment:GS,metalnessmap_pars_fragment:WS,morphcolor_vertex:jS,morphnormal_vertex:XS,morphtarget_pars_vertex:$S,morphtarget_vertex:qS,normal_fragment_begin:YS,normal_fragment_maps:KS,normal_pars_fragment:ZS,normal_pars_vertex:QS,normal_vertex:JS,normalmap_pars_fragment:eM,clearcoat_normal_fragment_begin:tM,clearcoat_normal_fragment_maps:nM,clearcoat_pars_fragment:iM,iridescence_pars_fragment:rM,output_fragment:sM,packing:oM,premultiplied_alpha_fragment:aM,project_vertex:lM,dithering_fragment:uM,dithering_pars_fragment:cM,roughnessmap_fragment:fM,roughnessmap_pars_fragment:dM,shadowmap_pars_fragment:hM,shadowmap_pars_vertex:pM,shadowmap_vertex:mM,shadowmask_pars_fragment:gM,skinbase_vertex:vM,skinning_pars_vertex:_M,skinning_vertex:yM,skinnormal_vertex:xM,specularmap_fragment:SM,specularmap_pars_fragment:MM,tonemapping_fragment:wM,tonemapping_pars_fragment:EM,transmission_fragment:TM,transmission_pars_fragment:bM,uv_pars_fragment:CM,uv_pars_vertex:AM,uv_vertex:LM,uv2_pars_fragment:RM,uv2_pars_vertex:PM,uv2_vertex:DM,worldpos_vertex:IM,background_vert:NM,background_frag:kM,cube_vert:FM,cube_frag:OM,depth_vert:zM,depth_frag:UM,distanceRGBA_vert:BM,distanceRGBA_frag:HM,equirect_vert:VM,equirect_frag:GM,linedashed_vert:WM,linedashed_frag:jM,meshbasic_vert:XM,meshbasic_frag:$M,meshlambert_vert:qM,meshlambert_frag:YM,meshmatcap_vert:KM,meshmatcap_frag:ZM,meshnormal_vert:QM,meshnormal_frag:JM,meshphong_vert:ew,meshphong_frag:tw,meshphysical_vert:nw,meshphysical_frag:iw,meshtoon_vert:rw,meshtoon_frag:sw,points_vert:ow,points_frag:aw,shadow_vert:lw,shadow_frag:uw,sprite_vert:cw,sprite_frag:fw},se={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new un},uv2Transform:{value:new un},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new un}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new un}}},Nn={basic:{uniforms:Tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.fog,se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Tt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Tt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Tt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Tt([se.points,se.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Tt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Tt([se.common,se.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Tt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Tt([se.sprite,se.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new un},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},cube:{uniforms:Tt([se.envmap,{opacity:{value:1}}]),vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Tt([se.common,se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Tt([se.lights,se.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Nn.physical={uniforms:Tt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};function dw(n,e,t,i,r,s){const o=new Oe(0);let a=r===!0?0:1,l,u,c=null,f=0,d=null;function g(h,p){let m=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const y=n.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),m=!0),(n.autoClear||m)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ol)?(u===void 0&&(u=new zn(new Do(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:xs(Nn.cube.uniforms),vertexShader:Nn.cube.vertexShader,fragmentShader:Nn.cube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,c=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new zn(new pd(2,2),new yr({name:"BackgroundMaterial",uniforms:xs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Mo,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,d=n.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function _(h,p){t.buffers.color.setClear(h.r,h.g,h.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(h,p=1){o.set(h),a=p,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(h){a=h,_(o,a)},render:g}}function hw(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function f(I,W,U,X,P){let D=!1;if(o){const F=h(X,U,W);u!==F&&(u=F,g(u.object)),D=m(I,X,U,P),D&&v(I,X,U,P)}else{const F=W.wireframe===!0;(u.geometry!==X.id||u.program!==U.id||u.wireframe!==F)&&(u.geometry=X.id,u.program=U.id,u.wireframe=F,D=!0)}P!==null&&t.update(P,34963),(D||c)&&(c=!1,x(I,W,U,X),P!==null&&n.bindBuffer(34963,t.get(P).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function h(I,W,U){const X=U.wireframe===!0;let P=a[I.id];P===void 0&&(P={},a[I.id]=P);let D=P[W.id];D===void 0&&(D={},P[W.id]=D);let F=D[X];return F===void 0&&(F=p(d()),D[X]=F),F}function p(I){const W=[],U=[],X=[];for(let P=0;P<r;P++)W[P]=0,U[P]=0,X[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:U,attributeDivisors:X,object:I,attributes:{},index:null}}function m(I,W,U,X){const P=u.attributes,D=W.attributes;let F=0;const q=U.getAttributes();for(const $ in q)if(q[$].location>=0){const ae=P[$];let he=D[$];if(he===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),ae===void 0||ae.attribute!==he||he&&ae.data!==he.data)return!0;F++}return u.attributesNum!==F||u.index!==X}function v(I,W,U,X){const P={},D=W.attributes;let F=0;const q=U.getAttributes();for(const $ in q)if(q[$].location>=0){let ae=D[$];ae===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor));const he={};he.attribute=ae,ae&&ae.data&&(he.data=ae.data),P[$]=he,F++}u.attributes=P,u.attributesNum=F,u.index=X}function y(){const I=u.newAttributes;for(let W=0,U=I.length;W<U;W++)I[W]=0}function S(I){M(I,0)}function M(I,W){const U=u.newAttributes,X=u.enabledAttributes,P=u.attributeDivisors;U[I]=1,X[I]===0&&(n.enableVertexAttribArray(I),X[I]=1),P[I]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),P[I]=W)}function T(){const I=u.newAttributes,W=u.enabledAttributes;for(let U=0,X=W.length;U<X;U++)W[U]!==I[U]&&(n.disableVertexAttribArray(U),W[U]=0)}function A(I,W,U,X,P,D){i.isWebGL2===!0&&(U===5124||U===5125)?n.vertexAttribIPointer(I,W,U,P,D):n.vertexAttribPointer(I,W,U,X,P,D)}function x(I,W,U,X){if(i.isWebGL2===!1&&(I.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const P=X.attributes,D=U.getAttributes(),F=W.defaultAttributeValues;for(const q in D){const $=D[q];if($.location>=0){let J=P[q];if(J===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const ae=J.normalized,he=J.itemSize,V=t.get(J);if(V===void 0)continue;const Xe=V.buffer,be=V.type,Me=V.bytesPerElement;if(J.isInterleavedBufferAttribute){const ue=J.data,Ue=ue.stride,Ae=J.offset;if(ue.isInstancedInterleavedBuffer){for(let ge=0;ge<$.locationSize;ge++)M($.location+ge,ue.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<$.locationSize;ge++)S($.location+ge);n.bindBuffer(34962,Xe);for(let ge=0;ge<$.locationSize;ge++)A($.location+ge,he/$.locationSize,be,ae,Ue*Me,(Ae+he/$.locationSize*ge)*Me)}else{if(J.isInstancedBufferAttribute){for(let ue=0;ue<$.locationSize;ue++)M($.location+ue,J.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ue=0;ue<$.locationSize;ue++)S($.location+ue);n.bindBuffer(34962,Xe);for(let ue=0;ue<$.locationSize;ue++)A($.location+ue,he/$.locationSize,be,ae,he*Me,he/$.locationSize*ue*Me)}}else if(F!==void 0){const ae=F[q];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv($.location,ae);break;case 3:n.vertexAttrib3fv($.location,ae);break;case 4:n.vertexAttrib4fv($.location,ae);break;default:n.vertexAttrib1fv($.location,ae)}}}}T()}function C(){K();for(const I in a){const W=a[I];for(const U in W){const X=W[U];for(const P in X)_(X[P].object),delete X[P];delete W[U]}delete a[I]}}function R(I){if(a[I.id]===void 0)return;const W=a[I.id];for(const U in W){const X=W[U];for(const P in X)_(X[P].object),delete X[P];delete W[U]}delete a[I.id]}function k(I){for(const W in a){const U=a[W];if(U[I.id]===void 0)continue;const X=U[I.id];for(const P in X)_(X[P].object),delete X[P];delete U[I.id]}}function K(){Z(),c=!0,u!==l&&(u=l,g(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:K,resetDefaultState:Z,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:k,initAttributes:y,enableAttribute:S,disableUnusedAttributes:T}}function pw(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,g;if(r)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function mw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),d=n.getParameter(35660),g=n.getParameter(3379),_=n.getParameter(34076),h=n.getParameter(34921),p=n.getParameter(36347),m=n.getParameter(36348),v=n.getParameter(36349),y=d>0,S=o||e.has("OES_texture_float"),M=y&&S,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:T}}function gw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Zi,a=new un,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,g){const _=f.length!==0||d||i!==0||r;return r=d,t=c(f,g,0),i=f.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,g){const _=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?c(null):u();else{const v=s?0:i,y=v*4;let S=m.clippingState||null;l.value=S,S=c(_,d,y,g);for(let M=0;M!==y;++M)S[M]=t[M];m.clippingState=S,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,g,_){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,_!==!0||p===null){const m=g+h*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,S=g;y!==h;++y,S+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function vw(n){let e=new WeakMap;function t(o,a){return a===rf?o.mapping=vs:a===sf&&(o.mapping=_s),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===rf||a===sf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Ix(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class nv extends J0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jr=4,Ip=[.125,.215,.35,.446,.526,.582],Ji=20,Qu=new nv,Np=new Oe;let Ju=null;const Qi=(1+Math.sqrt(5))/2,Ur=1/Qi,kp=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Qi,Ur),new N(0,Qi,-Ur),new N(Ur,0,Qi),new N(-Ur,0,Qi),new N(Qi,Ur,0),new N(-Qi,Ur,0)];class Fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ju=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju),e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:wo,format:On,encoding:vr,depthBuffer:!1},r=Op(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_w(s)),this._blurMaterial=yw(s,e,t)}return r}_compileMaterial(e){const t=new zn(this._lodPlanes[0],e);this._renderer.compile(t,Qu)}_sceneToCubeUV(e,t,i,r){const a=new an(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Np),c.toneMapping=ii,c.autoClear=!1;const g=new dd({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),_=new zn(new Do,g);let h=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,h=!0):(g.color.copy(Np),h=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const y=this._cubeSize;Ca(r,v*y,m>2?y:0,y,y),c.setRenderTarget(r),h&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===vs||e.mapping===_s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ca(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kp[(r-1)%kp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new zn(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ji-1),h=s/_,p=isFinite(s)?1+Math.floor(c*h):Ji;p>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ji}`);const m=[];let v=0;for(let A=0;A<Ji;++A){const x=A/h,C=Math.exp(-x*x/2);m.push(C),A===0?v+=C:A<p&&(v+=2*C)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const S=this._sizeLods[r],M=3*S*(r>y-Jr?r-y+Jr:0),T=4*(this._cubeSize-S);Ca(t,M,T,3*S,2*S),l.setRenderTarget(t),l.render(f,Qu)}}function _w(n){const e=[],t=[],i=[];let r=n;const s=n-Jr+1+Ip.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Jr?l=Ip[o-n+Jr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],g=6,_=6,h=3,p=2,m=1,v=new Float32Array(h*_*g),y=new Float32Array(p*_*g),S=new Float32Array(m*_*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,x=T>2?0:-1,C=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];v.set(C,h*_*T),y.set(d,p*_*T);const R=[T,T,T,T,T,T];S.set(R,m*_*T)}const M=new ci;M.setAttribute("position",new Hn(v,h)),M.setAttribute("uv",new Hn(y,p)),M.setAttribute("faceIndex",new Hn(S,m)),e.push(M),r>Jr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Op(n,e,t){const i=new _r(n,e,t);return i.texture.mapping=Ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function yw(n,e,t){const i=new Float32Array(Ji),r=new N(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function zp(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Up(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===rf||l===sf,c=l===vs||l===_s;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Fp(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Fp(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Sw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Mw(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const g=f.morphAttributes;for(const _ in g){const h=g[_];for(let p=0,m=h.length;p<m;p++)e.update(h[p],34962)}}function u(f){const d=[],g=f.index,_=f.attributes.position;let h=0;if(g!==null){const v=g.array;h=g.version;for(let y=0,S=v.length;y<S;y+=3){const M=v[y+0],T=v[y+1],A=v[y+2];d.push(M,T,T,A,A,M)}}else{const v=_.array;h=_.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const M=y+0,T=y+1,A=y+2;d.push(M,T,T,A,A,M)}}const p=new(j0(d)?Q0:Z0)(d,1);p.version=h;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function c(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function ww(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,g){n.drawElements(s,g,a,d*l),t.update(g,s,1)}function f(d,g,_){if(_===0)return;let h,p;if(r)h=n,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,g,a,d*l,_),t.update(g,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function Ew(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Tw(n,e){return n[0]-e[0]}function bw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ec(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function Cw(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new dt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,d){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let m=s.get(c);if(m===void 0||m.count!==p){let U=function(){I.dispose(),s.delete(c),c.removeEventListener("dispose",U)};var _=U;m!==void 0&&m.texture.dispose();const S=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],x=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let R=0;S===!0&&(R=1),M===!0&&(R=2),T===!0&&(R=3);let k=c.attributes.position.count*R,K=1;k>e.maxTextureSize&&(K=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const Z=new Float32Array(k*K*4*p),I=new Y0(Z,k,K,p);I.type=rr,I.needsUpdate=!0;const W=R*4;for(let X=0;X<p;X++){const P=A[X],D=x[X],F=C[X],q=k*K*4*X;for(let $=0;$<P.count;$++){const J=$*W;S===!0&&(o.fromBufferAttribute(P,$),P.normalized===!0&&ec(o,P),Z[q+J+0]=o.x,Z[q+J+1]=o.y,Z[q+J+2]=o.z,Z[q+J+3]=0),M===!0&&(o.fromBufferAttribute(D,$),D.normalized===!0&&ec(o,D),Z[q+J+4]=o.x,Z[q+J+5]=o.y,Z[q+J+6]=o.z,Z[q+J+7]=0),T===!0&&(o.fromBufferAttribute(F,$),F.normalized===!0&&ec(o,F),Z[q+J+8]=o.x,Z[q+J+9]=o.y,Z[q+J+10]=o.z,Z[q+J+11]=F.itemSize===4?o.w:1)}}m={count:p,texture:I,size:new De(k,K)},s.set(c,m),c.addEventListener("dispose",U)}let v=0;for(let S=0;S<g.length;S++)v+=g[S];const y=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",g),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const h=g===void 0?0:g.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let M=0;M<h;M++)p[M]=[M,0];i[c.id]=p}for(let M=0;M<h;M++){const T=p[M];T[0]=M,T[1]=g[M]}p.sort(bw);for(let M=0;M<8;M++)M<h&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Tw);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const T=a[M],A=T[0],x=T[1];A!==Number.MAX_SAFE_INTEGER&&x?(m&&c.getAttribute("morphTarget"+M)!==m[A]&&c.setAttribute("morphTarget"+M,m[A]),v&&c.getAttribute("morphNormal"+M)!==v[A]&&c.setAttribute("morphNormal"+M,v[A]),r[M]=x,y+=x):(m&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),v&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const S=c.morphTargetsRelative?1:1-y;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Aw(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const iv=new bn,rv=new Y0,sv=new vx,ov=new ev,Bp=[],Hp=[],Vp=new Float32Array(16),Gp=new Float32Array(9),Wp=new Float32Array(4);function bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Bp[r];if(s===void 0&&(s=new Float32Array(r),Bp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ul(n,e){let t=Hp[e];t===void 0&&(t=new Int32Array(e),Hp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Lw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function Pw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function Dw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function Iw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Wp.set(i),n.uniformMatrix2fv(this.addr,!1,Wp),It(t,i)}}function Nw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Gp.set(i),n.uniformMatrix3fv(this.addr,!1,Gp),It(t,i)}}function kw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Vp.set(i),n.uniformMatrix4fv(this.addr,!1,Vp),It(t,i)}}function Fw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ow(n,e){const t=this.cache;Dt(t,e)||(n.uniform2iv(this.addr,e),It(t,e))}function zw(n,e){const t=this.cache;Dt(t,e)||(n.uniform3iv(this.addr,e),It(t,e))}function Uw(n,e){const t=this.cache;Dt(t,e)||(n.uniform4iv(this.addr,e),It(t,e))}function Bw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hw(n,e){const t=this.cache;Dt(t,e)||(n.uniform2uiv(this.addr,e),It(t,e))}function Vw(n,e){const t=this.cache;Dt(t,e)||(n.uniform3uiv(this.addr,e),It(t,e))}function Gw(n,e){const t=this.cache;Dt(t,e)||(n.uniform4uiv(this.addr,e),It(t,e))}function Ww(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||iv,r)}function jw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||sv,r)}function Xw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ov,r)}function $w(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||rv,r)}function qw(n){switch(n){case 5126:return Lw;case 35664:return Rw;case 35665:return Pw;case 35666:return Dw;case 35674:return Iw;case 35675:return Nw;case 35676:return kw;case 5124:case 35670:return Fw;case 35667:case 35671:return Ow;case 35668:case 35672:return zw;case 35669:case 35673:return Uw;case 5125:return Bw;case 36294:return Hw;case 36295:return Vw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return jw;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return $w}}function Yw(n,e){n.uniform1fv(this.addr,e)}function Kw(n,e){const t=bs(e,this.size,2);n.uniform2fv(this.addr,t)}function Zw(n,e){const t=bs(e,this.size,3);n.uniform3fv(this.addr,t)}function Qw(n,e){const t=bs(e,this.size,4);n.uniform4fv(this.addr,t)}function Jw(n,e){const t=bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function e2(n,e){const t=bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function t2(n,e){const t=bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function n2(n,e){n.uniform1iv(this.addr,e)}function i2(n,e){n.uniform2iv(this.addr,e)}function r2(n,e){n.uniform3iv(this.addr,e)}function s2(n,e){n.uniform4iv(this.addr,e)}function o2(n,e){n.uniform1uiv(this.addr,e)}function a2(n,e){n.uniform2uiv(this.addr,e)}function l2(n,e){n.uniform3uiv(this.addr,e)}function u2(n,e){n.uniform4uiv(this.addr,e)}function c2(n,e,t){const i=e.length,r=Ul(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||iv,r[s])}function f2(n,e,t){const i=e.length,r=Ul(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||sv,r[s])}function d2(n,e,t){const i=e.length,r=Ul(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||ov,r[s])}function h2(n,e,t){const i=e.length,r=Ul(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||rv,r[s])}function p2(n){switch(n){case 5126:return Yw;case 35664:return Kw;case 35665:return Zw;case 35666:return Qw;case 35674:return Jw;case 35675:return e2;case 35676:return t2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return r2;case 35669:case 35673:return s2;case 5125:return o2;case 36294:return a2;case 36295:return l2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return d2;case 36289:case 36303:case 36311:case 36292:return h2}}class m2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=qw(t.type)}}class g2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=p2(t.type)}}class v2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const tc=/(\w+)(\])?(\[|\.)?/g;function jp(n,e){n.seq.push(e),n.map[e.id]=e}function _2(n,e,t){const i=n.name,r=i.length;for(tc.lastIndex=0;;){const s=tc.exec(i),o=tc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){jp(t,u===void 0?new m2(a,n,e):new g2(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new v2(a),jp(t,f)),t=f}}}class ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_2(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Xp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let y2=0;function x2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function S2(n){switch(n){case vr:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function $p(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+x2(n.getShaderSource(e),o)}else return r}function M2(n,e){const t=S2(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function w2(n,e){let t;switch(e){case A1:t="Linear";break;case L1:t="Reinhard";break;case R1:t="OptimizedCineon";break;case H0:t="ACESFilmic";break;case P1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function E2(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function T2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function b2(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xs(n){return n!==""}function qp(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C2=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(n){return n.replace(C2,A2)}function A2(n,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return cf(t)}const L2=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,R2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(n){return n.replace(R2,av).replace(L2,P2)}function P2(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),av(n,e,t,i)}function av(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function D2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===z0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===s1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===js&&(e="SHADOWMAP_TYPE_VSM"),e}function I2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vs:case _s:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function k2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ud:e="ENVMAP_BLENDING_MULTIPLY";break;case b1:e="ENVMAP_BLENDING_MIX";break;case C1:e="ENVMAP_BLENDING_ADD";break}return e}function F2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function O2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=D2(t),u=I2(t),c=N2(t),f=k2(t),d=F2(t),g=t.isWebGL2?"":E2(t),_=T2(s),h=r.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(Xs).join(`
`),p.length>0&&(p+=`
`),m=[g,_].filter(Xs).join(`
`),m.length>0&&(m+=`
`)):(p=[Zp(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),m=[g,Zp(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Te.tonemapping_pars_fragment:"",t.toneMapping!==ii?w2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,M2("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=cf(o),o=qp(o,t),o=Yp(o,t),a=cf(a),a=qp(a,t),a=Yp(a,t),o=Kp(o),a=Kp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+p+o,S=v+m+a,M=Xp(r,35633,y),T=Xp(r,35632,S);if(r.attachShader(h,M),r.attachShader(h,T),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(h).trim(),R=r.getShaderInfoLog(M).trim(),k=r.getShaderInfoLog(T).trim();let K=!0,Z=!0;if(r.getProgramParameter(h,35714)===!1){K=!1;const I=$p(r,M,"vertex"),W=$p(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+C+`
`+I+`
`+W)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(R===""||k==="")&&(Z=!1);Z&&(this.diagnostics={runnable:K,programLog:C,vertexShader:{log:R,prefix:p},fragmentShader:{log:k,prefix:m}})}r.deleteShader(M),r.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new ja(r,h)),A};let x;return this.getAttributes=function(){return x===void 0&&(x=b2(r,h)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=y2++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=T,this}let z2=0;class U2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new B2(e);t.set(e,i)}return t.get(e)}}class B2{constructor(e){this.id=z2++,this.code=e,this.usedTimes=0}}function H2(n,e,t,i,r,s,o){const a=new K0,l=new U2,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x,C,R,k,K){const Z=k.fog,I=K.geometry,W=x.isMeshStandardMaterial?k.environment:null,U=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),X=!!U&&U.mapping===Ol?U.image.height:null,P=_[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const D=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,F=D!==void 0?D.length:0;let q=0;I.morphAttributes.position!==void 0&&(q=1),I.morphAttributes.normal!==void 0&&(q=2),I.morphAttributes.color!==void 0&&(q=3);let $,J,ae,he;if(P){const Ue=Nn[P];$=Ue.vertexShader,J=Ue.fragmentShader}else $=x.vertexShader,J=x.fragmentShader,l.update(x),ae=l.getVertexShaderID(x),he=l.getFragmentShaderID(x);const V=n.getRenderTarget(),Xe=x.alphaTest>0,be=x.clearcoat>0,Me=x.iridescence>0;return{isWebGL2:c,shaderID:P,shaderName:x.type,vertexShader:$,fragmentShader:J,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:d,outputEncoding:V===null?n.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:vr,map:!!x.map,matcap:!!x.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:X,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Z1,tangentSpaceNormalMap:x.normalMapType===W0,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ye,clearcoat:be,clearcoatMap:be&&!!x.clearcoatMap,clearcoatRoughnessMap:be&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:be&&!!x.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!x.iridescenceMap,iridescenceThicknessMap:Me&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===as,alphaMap:!!x.alphaMap,alphaTest:Xe,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!I.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!Z,useFog:x.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:ii,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gs,flipSided:x.side===En,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)C.push(R),C.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(C,x),v(C,x),C.push(n.outputEncoding)),C.push(x.customProgramCacheKey),C.join()}function m(x,C){x.push(C.precision),x.push(C.outputEncoding),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.combine),x.push(C.vertexUvs),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function v(x,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),C.fog&&a.enable(33),x.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.morphTargets&&a.enable(4),C.morphNormals&&a.enable(5),C.morphColors&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.useDepthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.opaque&&a.enable(23),x.push(a.mask)}function y(x){const C=_[x.type];let R;if(C){const k=Nn[C];R=Lx.clone(k.uniforms)}else R=x.uniforms;return R}function S(x,C){let R;for(let k=0,K=u.length;k<K;k++){const Z=u[k];if(Z.cacheKey===C){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new O2(n,C,x,s),u.push(R)),R}function M(x){if(--x.usedTimes===0){const C=u.indexOf(x);u[C]=u[u.length-1],u.pop(),x.destroy()}}function T(x){l.remove(x)}function A(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:A}}function V2(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function G2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,g,_,h,p){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:g,groupOrder:_,renderOrder:f.renderOrder,z:h,group:p},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=g,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=h,m.group=p),e++,m}function a(f,d,g,_,h,p){const m=o(f,d,g,_,h,p);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(f,d,g,_,h,p){const m=o(f,d,g,_,h,p);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,d){t.length>1&&t.sort(f||G2),i.length>1&&i.sort(d||Qp),r.length>1&&r.sort(d||Qp)}function c(){for(let f=e,d=n.length;f<d;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function W2(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Jp,n.set(i,[s])):r>=n.get(i).length?(s=new Jp,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function j2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Oe};break;case"SpotLight":t={position:new N,direction:new N,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function X2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $2=0;function q2(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function Y2(n,e){const t=new j2,i=X2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new N);const s=new N,o=new ht,a=new ht;function l(c,f){let d=0,g=0,_=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let h=0,p=0,m=0,v=0,y=0,S=0,M=0,T=0;c.sort(q2);const A=f!==!0?Math.PI:1;for(let C=0,R=c.length;C<R;C++){const k=c[C],K=k.color,Z=k.intensity,I=k.distance,W=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=K.r*Z*A,g+=K.g*Z*A,_+=K.b*Z*A;else if(k.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(k.sh.coefficients[U],Z);else if(k.isDirectionalLight){const U=t.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity*A),k.castShadow){const X=k.shadow,P=i.get(k);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,r.directionalShadow[h]=P,r.directionalShadowMap[h]=W,r.directionalShadowMatrix[h]=k.shadow.matrix,S++}r.directional[h]=U,h++}else if(k.isSpotLight){const U=t.get(k);if(U.position.setFromMatrixPosition(k.matrixWorld),U.color.copy(K).multiplyScalar(Z*A),U.distance=I,U.coneCos=Math.cos(k.angle),U.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),U.decay=k.decay,k.castShadow){const X=k.shadow,P=i.get(k);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,r.spotShadow[m]=P,r.spotShadowMap[m]=W,r.spotShadowMatrix[m]=k.shadow.matrix,T++}r.spot[m]=U,m++}else if(k.isRectAreaLight){const U=t.get(k);U.color.copy(K).multiplyScalar(Z),U.halfWidth.set(k.width*.5,0,0),U.halfHeight.set(0,k.height*.5,0),r.rectArea[v]=U,v++}else if(k.isPointLight){const U=t.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity*A),U.distance=k.distance,U.decay=k.decay,k.castShadow){const X=k.shadow,P=i.get(k);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,P.shadowCameraNear=X.camera.near,P.shadowCameraFar=X.camera.far,r.pointShadow[p]=P,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=k.shadow.matrix,M++}r.point[p]=U,p++}else if(k.isHemisphereLight){const U=t.get(k);U.skyColor.copy(k.color).multiplyScalar(Z*A),U.groundColor.copy(k.groundColor).multiplyScalar(Z*A),r.hemi[y]=U,y++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=_;const x=r.hash;(x.directionalLength!==h||x.pointLength!==p||x.spotLength!==m||x.rectAreaLength!==v||x.hemiLength!==y||x.numDirectionalShadows!==S||x.numPointShadows!==M||x.numSpotShadows!==T)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=v,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=T,x.directionalLength=h,x.pointLength=p,x.spotLength=m,x.rectAreaLength=v,x.hemiLength=y,x.numDirectionalShadows=S,x.numPointShadows=M,x.numSpotShadows=T,r.version=$2++)}function u(c,f){let d=0,g=0,_=0,h=0,p=0;const m=f.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const S=c[v];if(S.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(S.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),_++}else if(S.isRectAreaLight){const M=r.rectArea[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),h++}else if(S.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),g++}else if(S.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:r}}function em(n,e){const t=new Y2(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function K2(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new em(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new em(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class Z2 extends Po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q2 extends Po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const J2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function t3(n,e,t){let i=new hd;const r=new De,s=new De,o=new dt,a=new Z2({depthPacking:K1}),l=new Q2,u={},c=t.maxTextureSize,f={0:En,1:Mo,2:gs},d=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:J2,fragmentShader:e3}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new ci;_.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new zn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z0,this.render=function(S,M,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const A=n.getRenderTarget(),x=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Oi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let k=0,K=S.length;k<K;k++){const Z=S[k],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const W=I.getFrameExtents();if(r.multiply(W),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/W.x),r.x=s.x*W.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/W.y),r.y=s.y*W.y,I.mapSize.y=s.y)),I.map===null){const X=this.type!==js?{minFilter:zt,magFilter:zt}:{};I.map=new _r(r.x,r.y,X),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const U=I.getViewportCount();for(let X=0;X<U;X++){const P=I.getViewport(X);o.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),R.viewport(o),I.updateMatrices(Z,X),i=I.getFrustum(),y(M,T,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===js&&m(I,T),I.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(A,x,C)};function m(S,M){const T=e.update(h);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new _r(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(M,null,T,d,h,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(M,null,T,g,h,null)}function v(S,M,T,A,x,C){let R=null;const k=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(k!==void 0?R=k:R=T.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const K=R.uuid,Z=M.uuid;let I=u[K];I===void 0&&(I={},u[K]=I);let W=I[Z];W===void 0&&(W=R.clone(),I[Z]=W),R=W}return R.visible=M.visible,R.wireframe=M.wireframe,C===js?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:f[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(T.matrixWorld),R.nearDistance=A,R.farDistance=x),R}function y(S,M,T,A,x){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===js)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const k=e.update(S),K=S.material;if(Array.isArray(K)){const Z=k.groups;for(let I=0,W=Z.length;I<W;I++){const U=Z[I],X=K[U.materialIndex];if(X&&X.visible){const P=v(S,X,A,T.near,T.far,x);n.renderBufferDirect(T,null,k,P,S,U)}}}else if(K.visible){const Z=v(S,K,A,T.near,T.far,x);n.renderBufferDirect(T,null,k,Z,S,null)}}const R=S.children;for(let k=0,K=R.length;k<K;k++)y(R[k],M,T,A,x)}}function n3(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const re=new dt;let ie=null;const me=new dt(0,0,0,0);return{setMask:function(fe){ie!==fe&&!L&&(n.colorMask(fe,fe,fe,fe),ie=fe)},setLocked:function(fe){L=fe},setClear:function(fe,_e,te,ye,Ne){Ne===!0&&(fe*=ye,_e*=ye,te*=ye),re.set(fe,_e,te,ye),me.equals(re)===!1&&(n.clearColor(fe,_e,te,ye),me.copy(re))},reset:function(){L=!1,ie=null,me.set(-1,0,0,0)}}}function s(){let L=!1,re=null,ie=null,me=null;return{setTest:function(fe){fe?he(2929):V(2929)},setMask:function(fe){re!==fe&&!L&&(n.depthMask(fe),re=fe)},setFunc:function(fe){if(ie!==fe){if(fe)switch(fe){case y1:n.depthFunc(512);break;case x1:n.depthFunc(519);break;case S1:n.depthFunc(513);break;case nf:n.depthFunc(515);break;case M1:n.depthFunc(514);break;case w1:n.depthFunc(518);break;case E1:n.depthFunc(516);break;case T1:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);ie=fe}},setLocked:function(fe){L=fe},setClear:function(fe){me!==fe&&(n.clearDepth(fe),me=fe)},reset:function(){L=!1,re=null,ie=null,me=null}}}function o(){let L=!1,re=null,ie=null,me=null,fe=null,_e=null,te=null,ye=null,Ne=null;return{setTest:function(ke){L||(ke?he(2960):V(2960))},setMask:function(ke){re!==ke&&!L&&(n.stencilMask(ke),re=ke)},setFunc:function(ke,At,An){(ie!==ke||me!==At||fe!==An)&&(n.stencilFunc(ke,At,An),ie=ke,me=At,fe=An)},setOp:function(ke,At,An){(_e!==ke||te!==At||ye!==An)&&(n.stencilOp(ke,At,An),_e=ke,te=At,ye=An)},setLocked:function(ke){L=ke},setClear:function(ke){Ne!==ke&&(n.clearStencil(ke),Ne=ke)},reset:function(){L=!1,re=null,ie=null,me=null,fe=null,_e=null,te=null,ye=null,Ne=null}}}const a=new r,l=new s,u=new o;let c={},f={},d=new WeakMap,g=[],_=null,h=!1,p=null,m=null,v=null,y=null,S=null,M=null,T=null,A=!1,x=null,C=null,R=null,k=null,K=null;const Z=n.getParameter(35661);let I=!1,W=0;const U=n.getParameter(7938);U.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(U)[1]),I=W>=1):U.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),I=W>=2);let X=null,P={};const D=n.getParameter(3088),F=n.getParameter(2978),q=new dt().fromArray(D),$=new dt().fromArray(F);function J(L,re,ie){const me=new Uint8Array(4),fe=n.createTexture();n.bindTexture(L,fe),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let _e=0;_e<ie;_e++)n.texImage2D(re+_e,0,6408,1,1,0,6408,5121,me);return fe}const ae={};ae[3553]=J(3553,3553,1),ae[34067]=J(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),he(2929),l.setFunc(nf),St(!1),Ft(Hh),he(2884),Ae(Oi);function he(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function V(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Xe(L,re){return f[L]!==re?(n.bindFramebuffer(L,re),f[L]=re,i&&(L===36009&&(f[36160]=re),L===36160&&(f[36009]=re)),!0):!1}function be(L,re){let ie=g,me=!1;if(L)if(ie=d.get(re),ie===void 0&&(ie=[],d.set(re,ie)),L.isWebGLMultipleRenderTargets){const fe=L.texture;if(ie.length!==fe.length||ie[0]!==36064){for(let _e=0,te=fe.length;_e<te;_e++)ie[_e]=36064+_e;ie.length=fe.length,me=!0}}else ie[0]!==36064&&(ie[0]=36064,me=!0);else ie[0]!==1029&&(ie[0]=1029,me=!0);me&&(t.isWebGL2?n.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Me(L){return _!==L?(n.useProgram(L),_=L,!0):!1}const ue={[Br]:32774,[l1]:32778,[u1]:32779};if(i)ue[jh]=32775,ue[Xh]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(ue[jh]=L.MIN_EXT,ue[Xh]=L.MAX_EXT)}const Ue={[c1]:0,[f1]:1,[d1]:768,[U0]:770,[_1]:776,[g1]:774,[p1]:772,[h1]:769,[B0]:771,[v1]:775,[m1]:773};function Ae(L,re,ie,me,fe,_e,te,ye){if(L===Oi){h===!0&&(V(3042),h=!1);return}if(h===!1&&(he(3042),h=!0),L!==a1){if(L!==p||ye!==A){if((m!==Br||S!==Br)&&(n.blendEquation(32774),m=Br,S=Br),ye)switch(L){case as:n.blendFuncSeparate(1,771,1,771);break;case Vh:n.blendFunc(1,1);break;case Gh:n.blendFuncSeparate(0,769,0,1);break;case Wh:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case as:n.blendFuncSeparate(770,771,1,771);break;case Vh:n.blendFunc(770,1);break;case Gh:n.blendFuncSeparate(0,769,0,1);break;case Wh:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,M=null,T=null,p=L,A=ye}return}fe=fe||re,_e=_e||ie,te=te||me,(re!==m||fe!==S)&&(n.blendEquationSeparate(ue[re],ue[fe]),m=re,S=fe),(ie!==v||me!==y||_e!==M||te!==T)&&(n.blendFuncSeparate(Ue[ie],Ue[me],Ue[_e],Ue[te]),v=ie,y=me,M=_e,T=te),p=L,A=null}function ge(L,re){L.side===gs?V(2884):he(2884);let ie=L.side===En;re&&(ie=!ie),St(ie),L.blending===as&&L.transparent===!1?Ae(Oi):Ae(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const me=L.stencilWrite;u.setTest(me),me&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Cn(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?he(32926):V(32926)}function St(L){x!==L&&(L?n.frontFace(2304):n.frontFace(2305),x=L)}function Ft(L){L!==i1?(he(2884),L!==C&&(L===Hh?n.cullFace(1029):L===r1?n.cullFace(1028):n.cullFace(1032))):V(2884),C=L}function Xt(L){L!==R&&(I&&n.lineWidth(L),R=L)}function Cn(L,re,ie){L?(he(32823),(k!==re||K!==ie)&&(n.polygonOffset(re,ie),k=re,K=ie)):V(32823)}function vt(L){L?he(3089):V(3089)}function He(L){L===void 0&&(L=33984+Z-1),X!==L&&(n.activeTexture(L),X=L)}function Gn(L,re){X===null&&He();let ie=P[X];ie===void 0&&(ie={type:void 0,texture:void 0},P[X]=ie),(ie.type!==L||ie.texture!==re)&&(n.bindTexture(L,re||ae[L]),ie.type=L,ie.texture=re)}function Wn(){const L=P[X];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function w(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(L){q.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function de(L){$.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function ce(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,P={},f={},d=new WeakMap,g=[],_=null,h=!1,p=null,m=null,v=null,y=null,S=null,M=null,T=null,A=!1,x=null,C=null,R=null,k=null,K=null,q.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:he,disable:V,bindFramebuffer:Xe,drawBuffers:be,useProgram:Me,setBlending:Ae,setMaterial:ge,setFlipSided:St,setCullFace:Ft,setLineWidth:Xt,setPolygonOffset:Cn,setScissorTest:vt,activeTexture:He,bindTexture:Gn,unbindTexture:Wn,compressedTexImage2D:b,texImage2D:xe,texImage3D:H,texStorage2D:ne,texStorage3D:oe,texSubImage2D:w,texSubImage3D:G,compressedTexSubImage2D:ee,scissor:pe,viewport:de,reset:ce}}function i3(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,w){return m?new OffscreenCanvas(b,w):xl("canvas")}function y(b,w,G,ee){let ne=1;if((b.width>ee||b.height>ee)&&(ne=ee/Math.max(b.width,b.height)),ne<1||w===!0)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap){const oe=w?yl:Math.floor,xe=oe(ne*b.width),H=oe(ne*b.height);h===void 0&&(h=v(xe,H));const pe=G?v(xe,H):h;return pe.width=xe,pe.height=H,pe.getContext("2d").drawImage(b,0,0,xe,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+xe+"x"+H+")."),pe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return uf(b.width)&&uf(b.height)}function M(b){return a?!1:b.wrapS!==Sn||b.wrapT!==Sn||b.minFilter!==zt&&b.minFilter!==on}function T(b,w){return b.generateMipmaps&&w&&b.minFilter!==zt&&b.minFilter!==on}function A(b){n.generateMipmap(b)}function x(b,w,G,ee,ne=!1){if(a===!1)return w;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe=w;return w===6403&&(G===5126&&(oe=33326),G===5131&&(oe=33325),G===5121&&(oe=33321)),w===33319&&(G===5126&&(oe=33328),G===5131&&(oe=33327),G===5121&&(oe=33323)),w===6408&&(G===5126&&(oe=34836),G===5131&&(oe=34842),G===5121&&(oe=ee===Ye&&ne===!1?35907:32856),G===32819&&(oe=32854),G===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function C(b,w,G){return T(b,G)===!0||b.isFramebufferTexture&&b.minFilter!==zt&&b.minFilter!==on?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function R(b){return b===zt||b===$h||b===qh?9728:9729}function k(b){const w=b.target;w.removeEventListener("dispose",k),Z(w),w.isVideoTexture&&_.delete(w)}function K(b){const w=b.target;w.removeEventListener("dispose",K),W(w)}function Z(b){const w=i.get(b);if(w.__webglInit===void 0)return;const G=b.source,ee=p.get(G);if(ee){const ne=ee[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&I(b),Object.keys(ee).length===0&&p.delete(G)}i.remove(b)}function I(b){const w=i.get(b);n.deleteTexture(w.__webglTexture);const G=b.source,ee=p.get(G);delete ee[w.__cacheKey],o.memory.textures--}function W(b){const w=b.texture,G=i.get(b),ee=i.get(w);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)n.deleteFramebuffer(G.__webglFramebuffer[ne]),G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[ne]);else{if(n.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ne=0,oe=w.length;ne<oe;ne++){const xe=i.get(w[ne]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(w[ne])}i.remove(w),i.remove(b)}let U=0;function X(){U=0}function P(){const b=U;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),U+=1,b}function D(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.encoding),w.join()}function F(b,w){const G=i.get(b);if(b.isVideoTexture&&Gn(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(G,b,w);return}}t.activeTexture(33984+w),t.bindTexture(3553,G.__webglTexture)}function q(b,w){const G=i.get(b);if(b.version>0&&G.__version!==b.version){be(G,b,w);return}t.activeTexture(33984+w),t.bindTexture(35866,G.__webglTexture)}function $(b,w){const G=i.get(b);if(b.version>0&&G.__version!==b.version){be(G,b,w);return}t.activeTexture(33984+w),t.bindTexture(32879,G.__webglTexture)}function J(b,w){const G=i.get(b);if(b.version>0&&G.__version!==b.version){Me(G,b,w);return}t.activeTexture(33984+w),t.bindTexture(34067,G.__webglTexture)}const ae={[of]:10497,[Sn]:33071,[af]:33648},he={[zt]:9728,[$h]:9984,[qh]:9986,[on]:9729,[D1]:9985,[zl]:9987};function V(b,w,G){if(G?(n.texParameteri(b,10242,ae[w.wrapS]),n.texParameteri(b,10243,ae[w.wrapT]),(b===32879||b===35866)&&n.texParameteri(b,32882,ae[w.wrapR]),n.texParameteri(b,10240,he[w.magFilter]),n.texParameteri(b,10241,he[w.minFilter])):(n.texParameteri(b,10242,33071),n.texParameteri(b,10243,33071),(b===32879||b===35866)&&n.texParameteri(b,32882,33071),(w.wrapS!==Sn||w.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,10240,R(w.magFilter)),n.texParameteri(b,10241,R(w.minFilter)),w.minFilter!==zt&&w.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(w.type===rr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===wo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(b,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Xe(b,w){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",k));const ee=w.source;let ne=p.get(ee);ne===void 0&&(ne={},p.set(ee,ne));const oe=D(w);if(oe!==b.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[oe].usedTimes++;const xe=ne[b.__cacheKey];xe!==void 0&&(ne[b.__cacheKey].usedTimes--,xe.usedTimes===0&&I(w)),b.__cacheKey=oe,b.__webglTexture=ne[oe].texture}return G}function be(b,w,G){let ee=3553;w.isDataArrayTexture&&(ee=35866),w.isData3DTexture&&(ee=32879);const ne=Xe(b,w),oe=w.source;if(t.activeTexture(33984+G),t.bindTexture(ee,b.__webglTexture),oe.version!==oe.__currentVersion||ne===!0){n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const xe=M(w)&&S(w.image)===!1;let H=y(w.image,xe,!1,c);H=Wn(w,H);const pe=S(H)||a,de=s.convert(w.format,w.encoding);let ce=s.convert(w.type),L=x(w.internalFormat,de,ce,w.encoding,w.isVideoTexture);V(ee,w,pe);let re;const ie=w.mipmaps,me=a&&w.isVideoTexture!==!0,fe=oe.__currentVersion===void 0||ne===!0,_e=C(w,H,pe);if(w.isDepthTexture)L=6402,a?w.type===rr?L=36012:w.type===ir?L=33190:w.type===ls?L=35056:L=33189:w.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ur&&L===6402&&w.type!==G0&&w.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ir,ce=s.convert(w.type)),w.format===ys&&L===6402&&(L=34041,w.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ls,ce=s.convert(w.type))),fe&&(me?t.texStorage2D(3553,1,L,H.width,H.height):t.texImage2D(3553,0,L,H.width,H.height,0,de,ce,null));else if(w.isDataTexture)if(ie.length>0&&pe){me&&fe&&t.texStorage2D(3553,_e,L,ie[0].width,ie[0].height);for(let te=0,ye=ie.length;te<ye;te++)re=ie[te],me?t.texSubImage2D(3553,te,0,0,re.width,re.height,de,ce,re.data):t.texImage2D(3553,te,L,re.width,re.height,0,de,ce,re.data);w.generateMipmaps=!1}else me?(fe&&t.texStorage2D(3553,_e,L,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,de,ce,H.data)):t.texImage2D(3553,0,L,H.width,H.height,0,de,ce,H.data);else if(w.isCompressedTexture){me&&fe&&t.texStorage2D(3553,_e,L,ie[0].width,ie[0].height);for(let te=0,ye=ie.length;te<ye;te++)re=ie[te],w.format!==On?de!==null?me?t.compressedTexSubImage2D(3553,te,0,0,re.width,re.height,de,re.data):t.compressedTexImage2D(3553,te,L,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage2D(3553,te,0,0,re.width,re.height,de,ce,re.data):t.texImage2D(3553,te,L,re.width,re.height,0,de,ce,re.data)}else if(w.isDataArrayTexture)me?(fe&&t.texStorage3D(35866,_e,L,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,de,ce,H.data)):t.texImage3D(35866,0,L,H.width,H.height,H.depth,0,de,ce,H.data);else if(w.isData3DTexture)me?(fe&&t.texStorage3D(32879,_e,L,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,de,ce,H.data)):t.texImage3D(32879,0,L,H.width,H.height,H.depth,0,de,ce,H.data);else if(w.isFramebufferTexture){if(fe)if(me)t.texStorage2D(3553,_e,L,H.width,H.height);else{let te=H.width,ye=H.height;for(let Ne=0;Ne<_e;Ne++)t.texImage2D(3553,Ne,L,te,ye,0,de,ce,null),te>>=1,ye>>=1}}else if(ie.length>0&&pe){me&&fe&&t.texStorage2D(3553,_e,L,ie[0].width,ie[0].height);for(let te=0,ye=ie.length;te<ye;te++)re=ie[te],me?t.texSubImage2D(3553,te,0,0,de,ce,re):t.texImage2D(3553,te,L,de,ce,re);w.generateMipmaps=!1}else me?(fe&&t.texStorage2D(3553,_e,L,H.width,H.height),t.texSubImage2D(3553,0,0,0,de,ce,H)):t.texImage2D(3553,0,L,de,ce,H);T(w,pe)&&A(ee),oe.__currentVersion=oe.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Me(b,w,G){if(w.image.length!==6)return;const ee=Xe(b,w),ne=w.source;if(t.activeTexture(33984+G),t.bindTexture(34067,b.__webglTexture),ne.version!==ne.__currentVersion||ee===!0){n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const oe=w.isCompressedTexture||w.image[0].isCompressedTexture,xe=w.image[0]&&w.image[0].isDataTexture,H=[];for(let te=0;te<6;te++)!oe&&!xe?H[te]=y(w.image[te],!1,!0,u):H[te]=xe?w.image[te].image:w.image[te],H[te]=Wn(w,H[te]);const pe=H[0],de=S(pe)||a,ce=s.convert(w.format,w.encoding),L=s.convert(w.type),re=x(w.internalFormat,ce,L,w.encoding),ie=a&&w.isVideoTexture!==!0,me=ne.__currentVersion===void 0||ee===!0;let fe=C(w,pe,de);V(34067,w,de);let _e;if(oe){ie&&me&&t.texStorage2D(34067,fe,re,pe.width,pe.height);for(let te=0;te<6;te++){_e=H[te].mipmaps;for(let ye=0;ye<_e.length;ye++){const Ne=_e[ye];w.format!==On?ce!==null?ie?t.compressedTexSubImage2D(34069+te,ye,0,0,Ne.width,Ne.height,ce,Ne.data):t.compressedTexImage2D(34069+te,ye,re,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?t.texSubImage2D(34069+te,ye,0,0,Ne.width,Ne.height,ce,L,Ne.data):t.texImage2D(34069+te,ye,re,Ne.width,Ne.height,0,ce,L,Ne.data)}}}else{_e=w.mipmaps,ie&&me&&(_e.length>0&&fe++,t.texStorage2D(34067,fe,re,H[0].width,H[0].height));for(let te=0;te<6;te++)if(xe){ie?t.texSubImage2D(34069+te,0,0,0,H[te].width,H[te].height,ce,L,H[te].data):t.texImage2D(34069+te,0,re,H[te].width,H[te].height,0,ce,L,H[te].data);for(let ye=0;ye<_e.length;ye++){const ke=_e[ye].image[te].image;ie?t.texSubImage2D(34069+te,ye+1,0,0,ke.width,ke.height,ce,L,ke.data):t.texImage2D(34069+te,ye+1,re,ke.width,ke.height,0,ce,L,ke.data)}}else{ie?t.texSubImage2D(34069+te,0,0,0,ce,L,H[te]):t.texImage2D(34069+te,0,re,ce,L,H[te]);for(let ye=0;ye<_e.length;ye++){const Ne=_e[ye];ie?t.texSubImage2D(34069+te,ye+1,0,0,ce,L,Ne.image[te]):t.texImage2D(34069+te,ye+1,re,ce,L,Ne.image[te])}}}T(w,de)&&A(34067),ne.__currentVersion=ne.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function ue(b,w,G,ee,ne){const oe=s.convert(G.format,G.encoding),xe=s.convert(G.type),H=x(G.internalFormat,oe,xe,G.encoding);i.get(w).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,H,w.width,w.height,w.depth,0,oe,xe,null):t.texImage2D(ne,0,H,w.width,w.height,0,oe,xe,null)),t.bindFramebuffer(36160,b),He(w)?d.framebufferTexture2DMultisampleEXT(36160,ee,ne,i.get(G).__webglTexture,0,vt(w)):n.framebufferTexture2D(36160,ee,ne,i.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ue(b,w,G){if(n.bindRenderbuffer(36161,b),w.depthBuffer&&!w.stencilBuffer){let ee=33189;if(G||He(w)){const ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===rr?ee=36012:ne.type===ir&&(ee=33190));const oe=vt(w);He(w)?d.renderbufferStorageMultisampleEXT(36161,oe,ee,w.width,w.height):n.renderbufferStorageMultisample(36161,oe,ee,w.width,w.height)}else n.renderbufferStorage(36161,ee,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,b)}else if(w.depthBuffer&&w.stencilBuffer){const ee=vt(w);G&&He(w)===!1?n.renderbufferStorageMultisample(36161,ee,35056,w.width,w.height):He(w)?d.renderbufferStorageMultisampleEXT(36161,ee,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,b)}else{const ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0;ne<ee.length;ne++){const oe=ee[ne],xe=s.convert(oe.format,oe.encoding),H=s.convert(oe.type),pe=x(oe.internalFormat,xe,H,oe.encoding),de=vt(w);G&&He(w)===!1?n.renderbufferStorageMultisample(36161,de,pe,w.width,w.height):He(w)?d.renderbufferStorageMultisampleEXT(36161,de,pe,w.width,w.height):n.renderbufferStorage(36161,pe,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function Ae(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,ne=vt(w);if(w.depthTexture.format===ur)He(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ne):n.framebufferTexture2D(36160,36096,3553,ee,0);else if(w.depthTexture.format===ys)He(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ne):n.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ge(b){const w=i.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,b)}else if(G){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=n.createRenderbuffer(),Ue(w.__webglDepthbuffer[ee],b,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Ue(w.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function St(b,w,G){const ee=i.get(b);w!==void 0&&ue(ee.__webglFramebuffer,b,b.texture,36064,3553),G!==void 0&&ge(b)}function Ft(b){const w=b.texture,G=i.get(b),ee=i.get(w);b.addEventListener("dispose",K),b.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,o.memory.textures++);const ne=b.isWebGLCubeRenderTarget===!0,oe=b.isWebGLMultipleRenderTargets===!0,xe=S(b)||a;if(ne){G.__webglFramebuffer=[];for(let H=0;H<6;H++)G.__webglFramebuffer[H]=n.createFramebuffer()}else{if(G.__webglFramebuffer=n.createFramebuffer(),oe)if(r.drawBuffers){const H=b.texture;for(let pe=0,de=H.length;pe<de;pe++){const ce=i.get(H[pe]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&He(b)===!1){const H=oe?w:[w];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let pe=0;pe<H.length;pe++){const de=H[pe];G.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(36161,G.__webglColorRenderbuffer[pe]);const ce=s.convert(de.format,de.encoding),L=s.convert(de.type),re=x(de.internalFormat,ce,L,de.encoding),ie=vt(b);n.renderbufferStorageMultisample(36161,ie,re,b.width,b.height),n.framebufferRenderbuffer(36160,36064+pe,36161,G.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(36161,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(G.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,ee.__webglTexture),V(34067,w,xe);for(let H=0;H<6;H++)ue(G.__webglFramebuffer[H],b,w,36064,34069+H);T(w,xe)&&A(34067),t.unbindTexture()}else if(oe){const H=b.texture;for(let pe=0,de=H.length;pe<de;pe++){const ce=H[pe],L=i.get(ce);t.bindTexture(3553,L.__webglTexture),V(3553,ce,xe),ue(G.__webglFramebuffer,b,ce,36064+pe,3553),T(ce,xe)&&A(3553)}t.unbindTexture()}else{let H=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?H=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(H,ee.__webglTexture),V(H,w,xe),ue(G.__webglFramebuffer,b,w,36064,H),T(w,xe)&&A(H),t.unbindTexture()}b.depthBuffer&&ge(b)}function Xt(b){const w=S(b)||a,G=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0,ne=G.length;ee<ne;ee++){const oe=G[ee];if(T(oe,w)){const xe=b.isWebGLCubeRenderTarget?34067:3553,H=i.get(oe).__webglTexture;t.bindTexture(xe,H),A(xe),t.unbindTexture()}}}function Cn(b){if(a&&b.samples>0&&He(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],G=b.width,ee=b.height;let ne=16384;const oe=[],xe=b.stencilBuffer?33306:36096,H=i.get(b),pe=b.isWebGLMultipleRenderTargets===!0;if(pe)for(let de=0;de<w.length;de++)t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,H.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,H.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,H.__webglFramebuffer);for(let de=0;de<w.length;de++){oe.push(36064+de),b.depthBuffer&&oe.push(xe);const ce=H.__ignoreDepthValues!==void 0?H.__ignoreDepthValues:!1;if(ce===!1&&(b.depthBuffer&&(ne|=256),b.stencilBuffer&&(ne|=1024)),pe&&n.framebufferRenderbuffer(36008,36064,36161,H.__webglColorRenderbuffer[de]),ce===!0&&(n.invalidateFramebuffer(36008,[xe]),n.invalidateFramebuffer(36009,[xe])),pe){const L=i.get(w[de]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,L,0)}n.blitFramebuffer(0,0,G,ee,0,0,G,ee,ne,9728),g&&n.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),pe)for(let de=0;de<w.length;de++){t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,H.__webglColorRenderbuffer[de]);const ce=i.get(w[de]).__webglTexture;t.bindFramebuffer(36160,H.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,ce,0)}t.bindFramebuffer(36009,H.__webglMultisampledFramebuffer)}}function vt(b){return Math.min(f,b.samples)}function He(b){const w=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Gn(b){const w=o.render.frame;_.get(b)!==w&&(_.set(b,w),b.update())}function Wn(b,w){const G=b.encoding,ee=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===lf||G!==vr&&(G===Ye?a===!1?e.has("EXT_sRGB")===!0&&ee===On?(b.format=lf,b.minFilter=on,b.generateMipmaps=!1):w=$0.sRGBToLinear(w):(ee!==On||ne!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),w}this.allocateTextureUnit=P,this.resetTextureUnits=X,this.setTexture2D=F,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=J,this.rebindTextures=St,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=He}function r3(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===gr)return 5121;if(s===F1)return 32819;if(s===O1)return 32820;if(s===I1)return 5120;if(s===N1)return 5122;if(s===G0)return 5123;if(s===k1)return 5124;if(s===ir)return 5125;if(s===rr)return 5126;if(s===wo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===z1)return 6406;if(s===On)return 6408;if(s===B1)return 6409;if(s===H1)return 6410;if(s===ur)return 6402;if(s===ys)return 34041;if(s===V1)return 6403;if(s===U1)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===lf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===G1)return 36244;if(s===W1)return 33319;if(s===j1)return 33320;if(s===X1)return 36249;if(s===Tu||s===bu||s===Cu||s===Au)if(o===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Tu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Au)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Tu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Au)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yh||s===Kh||s===Zh||s===Qh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Yh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jh||s===ep)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jh)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ep)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tp||s===np||s===ip||s===rp||s===sp||s===op||s===ap||s===lp||s===up||s===cp||s===fp||s===dp||s===hp||s===pp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===tp)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===np)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ip)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rp)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sp)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===op)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ap)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lp)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===up)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cp)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fp)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dp)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hp)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pp)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===mp)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ls?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class s3 extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Aa extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o3={type:"move"};class nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,i);if(u.joints[h.jointName]===void 0){const v=new Aa;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[h.jointName]=v,u.add(v)}const m=u.joints[h.jointName];p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),g=.02,_=.005;u.inputState.pinching&&d>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class a3 extends bn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ur,c!==ur&&c!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ur&&(i=ir),i===void 0&&c===ys&&(i=ls),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1}}class l3 extends Es{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,d=null,g=null;const _=t.getContextAttributes();let h=null,p=null;const m=[],v=[],y=new an;y.layers.enable(1),y.viewport=new dt;const S=new an;S.layers.enable(2),S.viewport=new dt;const M=[y,S],T=new s3;T.layers.enable(1),T.layers.enable(2);let A=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let F=m[D];return F===void 0&&(F=new nc,m[D]=F),F.getTargetRaySpace()},this.getControllerGrip=function(D){let F=m[D];return F===void 0&&(F=new nc,m[D]=F),F.getGripSpace()},this.getHand=function(D){let F=m[D];return F===void 0&&(F=new nc,m[D]=F),F.getHandSpace()};function C(D){const F=v.indexOf(D.inputSource);if(F===-1)return;const q=m[F];q!==void 0&&q.dispatchEvent({type:D.type,data:D.inputSource})}function R(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",k);for(let D=0;D<m.length;D++){const F=v[D];F!==null&&(v[D]=null,m[D].disconnect(F))}A=null,x=null,e.setRenderTarget(h),d=null,f=null,c=null,r=null,p=null,P.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",R),r.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,F),r.updateRenderState({baseLayer:d}),p=new _r(d.framebufferWidth,d.framebufferHeight,{format:On,type:gr,encoding:e.outputEncoding})}else{let F=null,q=null,$=null;_.depth&&($=_.stencil?35056:33190,F=_.stencil?ys:ur,q=_.stencil?ls:ir);const J={colorFormat:32856,depthFormat:$,scaleFactor:s};c=new XRWebGLBinding(r,t),f=c.createProjectionLayer(J),r.updateRenderState({layers:[f]}),p=new _r(f.textureWidth,f.textureHeight,{format:On,type:gr,depthTexture:new a3(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ae=e.properties.get(p);ae.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),P.setContext(r),P.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(D){for(let F=0;F<D.removed.length;F++){const q=D.removed[F],$=v.indexOf(q);$>=0&&(v[$]=null,m[$].dispatchEvent({type:"disconnected",data:q}))}for(let F=0;F<D.added.length;F++){const q=D.added[F];let $=v.indexOf(q);if($===-1){for(let ae=0;ae<m.length;ae++)if(ae>=v.length){v.push(q),$=ae;break}else if(v[ae]===null){v[ae]=q,$=ae;break}if($===-1)break}const J=m[$];J&&J.dispatchEvent({type:"connected",data:q})}}const K=new N,Z=new N;function I(D,F,q){K.setFromMatrixPosition(F.matrixWorld),Z.setFromMatrixPosition(q.matrixWorld);const $=K.distanceTo(Z),J=F.projectionMatrix.elements,ae=q.projectionMatrix.elements,he=J[14]/(J[10]-1),V=J[14]/(J[10]+1),Xe=(J[9]+1)/J[5],be=(J[9]-1)/J[5],Me=(J[8]-1)/J[0],ue=(ae[8]+1)/ae[0],Ue=he*Me,Ae=he*ue,ge=$/(-Me+ue),St=ge*-Me;F.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(St),D.translateZ(ge),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Ft=he+ge,Xt=V+ge,Cn=Ue-St,vt=Ae+($-St),He=Xe*V/Xt*Ft,Gn=be*V/Xt*Ft;D.projectionMatrix.makePerspective(Cn,vt,He,Gn,Ft,Xt)}function W(D,F){F===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(F.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;T.near=S.near=y.near=D.near,T.far=S.far=y.far=D.far,(A!==T.near||x!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),A=T.near,x=T.far);const F=D.parent,q=T.cameras;W(T,F);for(let J=0;J<q.length;J++)W(q[J],F);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),D.position.copy(T.position),D.quaternion.copy(T.quaternion),D.scale.copy(T.scale),D.matrix.copy(T.matrix),D.matrixWorld.copy(T.matrixWorld);const $=D.children;for(let J=0,ae=$.length;J<ae;J++)$[J].updateMatrixWorld(!0);q.length===2?I(T,y,S):T.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(D){f!==null&&(f.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)};let U=null;function X(D,F){if(u=F.getViewerPose(l||o),g=F,u!==null){const q=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let $=!1;q.length!==T.cameras.length&&(T.cameras.length=0,$=!0);for(let J=0;J<q.length;J++){const ae=q[J];let he=null;if(d!==null)he=d.getViewport(ae);else{const Xe=c.getViewSubImage(f,ae);he=Xe.viewport,J===0&&(e.setRenderTargetTextures(p,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(p))}let V=M[J];V===void 0&&(V=new an,V.layers.enable(J),V.viewport=new dt,M[J]=V),V.matrix.fromArray(ae.transform.matrix),V.projectionMatrix.fromArray(ae.projectionMatrix),V.viewport.set(he.x,he.y,he.width,he.height),J===0&&T.matrix.copy(V.matrix),$===!0&&T.cameras.push(V)}}for(let q=0;q<m.length;q++){const $=v[q],J=m[q];$!==null&&J!==void 0&&J.update($,F,l||o)}U&&U(D,F),g=null}const P=new tv;P.setAnimationLoop(X),this.setAnimationLoop=function(D){U=D},this.dispose=function(){}}}function u3(n,e){function t(h,p){h.fogColor.value.copy(p.color),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,m,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,y)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),_(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,m,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===En&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===En&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const m=e.get(p).envMap;if(m&&(h.envMap.value=m,h.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),h.uv2Transform.value.copy(y.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,m,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*m,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),h.uvTransform.value.copy(y.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let m;p.map?m=p.map:p.alphaMap&&(m=p.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),h.uvTransform.value.copy(m.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,m){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===En&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function _(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function c3(){const n=xl("canvas");return n.style.display="block",n}function lv(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:c3(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let f=null,d=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vr,this.physicallyCorrectLights=!1,this.toneMapping=ii,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const h=this;let p=!1,m=0,v=0,y=null,S=-1,M=null;const T=new dt,A=new dt;let x=null,C=e.width,R=e.height,k=1,K=null,Z=null;const I=new dt(0,0,C,R),W=new dt(0,0,C,R);let U=!1;const X=new hd;let P=!1,D=!1,F=null;const q=new ht,$=new De,J=new N,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return y===null?k:1}let V=t;function Xe(E,O){for(let B=0;B<E.length;B++){const z=E[B],j=e.getContext(z,O);if(j!==null)return j}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ld}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",ie,!1),V===null){const O=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&O.shift(),V=Xe(O,E),V===null)throw Xe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let be,Me,ue,Ue,Ae,ge,St,Ft,Xt,Cn,vt,He,Gn,Wn,b,w,G,ee,ne,oe,xe,H,pe;function de(){be=new Sw(V),Me=new mw(V,be,n),be.init(Me),H=new r3(V,be,Me),ue=new n3(V,be,Me),Ue=new Ew,Ae=new V2,ge=new i3(V,be,ue,Ae,Me,H,Ue),St=new vw(h),Ft=new xw(h),Xt=new Fx(V,Me),pe=new hw(V,be,Xt,Me),Cn=new Mw(V,Xt,Ue,pe),vt=new Aw(V,Cn,Xt,Ue),ne=new Cw(V,Me,ge),w=new gw(Ae),He=new H2(h,St,Ft,be,Me,pe,w),Gn=new u3(h,Ae),Wn=new W2,b=new K2(be,Me),ee=new dw(h,St,ue,vt,c,o),G=new t3(h,vt,Me),oe=new pw(V,be,Ue,Me),xe=new ww(V,be,Ue,Me),Ue.programs=He.programs,h.capabilities=Me,h.extensions=be,h.properties=Ae,h.renderLists=Wn,h.shadowMap=G,h.state=ue,h.info=Ue}de();const ce=new l3(h,V);this.xr=ce,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const E=be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(C,R,!1))},this.getSize=function(E){return E.set(C,R)},this.setSize=function(E,O,B){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,R=O,e.width=Math.floor(E*k),e.height=Math.floor(O*k),B!==!1&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(C*k,R*k).floor()},this.setDrawingBufferSize=function(E,O,B){C=E,R=O,k=B,e.width=Math.floor(E*B),e.height=Math.floor(O*B),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,O,B,z){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,O,B,z),ue.viewport(T.copy(I).multiplyScalar(k).floor())},this.getScissor=function(E){return E.copy(W)},this.setScissor=function(E,O,B,z){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,O,B,z),ue.scissor(A.copy(W).multiplyScalar(k).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(E){ue.setScissorTest(U=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,O=!0,B=!0){let z=0;E&&(z|=16384),O&&(z|=256),B&&(z|=1024),V.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),Wn.dispose(),b.dispose(),Ae.dispose(),St.dispose(),Ft.dispose(),vt.dispose(),pe.dispose(),He.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ne),ce.removeEventListener("sessionend",ke),F&&(F.dispose(),F=null),At.stop()};function L(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Ue.autoReset,O=G.enabled,B=G.autoUpdate,z=G.needsUpdate,j=G.type;de(),Ue.autoReset=E,G.enabled=O,G.autoUpdate=B,G.needsUpdate=z,G.type=j}function ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function me(E){const O=E.target;O.removeEventListener("dispose",me),fe(O)}function fe(E){_e(E),Ae.remove(E)}function _e(E){const O=Ae.get(E).programs;O!==void 0&&(O.forEach(function(B){He.releaseProgram(B)}),E.isShaderMaterial&&He.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,B,z,j,ve){O===null&&(O=ae);const Se=j.isMesh&&j.matrixWorld.determinant()<0,Ee=kv(E,O,B,z,j);ue.setMaterial(z,Se);let we=B.index;const Fe=B.attributes.position;if(we===null){if(Fe===void 0||Fe.count===0)return}else if(we.count===0)return;let Le=1;z.wireframe===!0&&(we=Cn.getWireframeAttribute(B),Le=2),pe.setup(j,z,Ee,B,we);let Pe,Je=oe;we!==null&&(Pe=Xt.get(we),Je=xe,Je.setIndex(Pe));const Wi=we!==null?we.count:Fe.count,Mr=B.drawRange.start*Le,wr=B.drawRange.count*Le,Ln=ve!==null?ve.start*Le:0,Ie=ve!==null?ve.count*Le:1/0,Er=Math.max(Mr,Ln),st=Math.min(Wi,Mr+wr,Ln+Ie)-1,Rn=Math.max(0,st-Er+1);if(Rn!==0){if(j.isMesh)z.wireframe===!0?(ue.setLineWidth(z.wireframeLinewidth*he()),Je.setMode(1)):Je.setMode(4);else if(j.isLine){let di=z.linewidth;di===void 0&&(di=1),ue.setLineWidth(di*he()),j.isLineSegments?Je.setMode(1):j.isLineLoop?Je.setMode(2):Je.setMode(3)}else j.isPoints?Je.setMode(0):j.isSprite&&Je.setMode(4);if(j.isInstancedMesh)Je.renderInstances(Er,Rn,j.count);else if(B.isInstancedBufferGeometry){const di=Math.min(B.instanceCount,B._maxInstanceCount);Je.renderInstances(Er,Rn,di)}else Je.render(Er,Rn)}},this.compile=function(E,O){d=b.get(E),d.init(),_.push(d),E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights(h.physicallyCorrectLights),E.traverse(function(B){const z=B.material;if(z)if(Array.isArray(z))for(let j=0;j<z.length;j++){const ve=z[j];Kl(ve,E,B)}else Kl(z,E,B)}),_.pop(),d=null};let te=null;function ye(E){te&&te(E)}function Ne(){At.stop()}function ke(){At.start()}const At=new tv;At.setAnimationLoop(ye),typeof self!="undefined"&&At.setContext(self),this.setAnimationLoop=function(E){te=E,ce.setAnimationLoop(E),E===null?At.stop():At.start()},ce.addEventListener("sessionstart",Ne),ce.addEventListener("sessionend",ke),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,O,y),d=b.get(E,_.length),d.init(),_.push(d),q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(q),D=this.localClippingEnabled,P=w.init(this.clippingPlanes,D,O),f=Wn.get(E,g.length),f.init(),g.push(f),An(E,O,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(K,Z),P===!0&&w.beginShadows();const B=d.state.shadowsArray;if(G.render(B,E,O),P===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,E),d.setupLights(h.physicallyCorrectLights),O.isArrayCamera){const z=O.cameras;for(let j=0,ve=z.length;j<ve;j++){const Se=z[j];Rd(f,E,Se,Se.viewport)}}else Rd(f,E,O);y!==null&&(ge.updateMultisampleRenderTarget(y),ge.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(h,E,O),pe.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function An(E,O,B,z){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){z&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const Se=vt.update(E),Ee=E.material;Ee.visible&&f.push(E,Se,Ee,B,J.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ue.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ue.render.frame),!E.frustumCulled||X.intersectsObject(E))){z&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const Se=vt.update(E),Ee=E.material;if(Array.isArray(Ee)){const we=Se.groups;for(let Fe=0,Le=we.length;Fe<Le;Fe++){const Pe=we[Fe],Je=Ee[Pe.materialIndex];Je&&Je.visible&&f.push(E,Se,Je,B,J.z,Pe)}}else Ee.visible&&f.push(E,Se,Ee,B,J.z,null)}}const ve=E.children;for(let Se=0,Ee=ve.length;Se<Ee;Se++)An(ve[Se],O,B,z)}function Rd(E,O,B,z){const j=E.opaque,ve=E.transmissive,Se=E.transparent;d.setupLightsView(B),ve.length>0&&Iv(j,O,B),z&&ue.viewport(T.copy(z)),j.length>0&&Go(j,O,B),ve.length>0&&Go(ve,O,B),Se.length>0&&Go(Se,O,B),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Iv(E,O,B){const z=Me.isWebGL2;F===null&&(F=new _r(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?wo:gr,minFilter:zl,samples:z&&s===!0?4:0})),h.getDrawingBufferSize($),z?F.setSize($.x,$.y):F.setSize(yl($.x),yl($.y));const j=h.getRenderTarget();h.setRenderTarget(F),h.clear();const ve=h.toneMapping;h.toneMapping=ii,Go(E,O,B),h.toneMapping=ve,ge.updateMultisampleRenderTarget(F),ge.updateRenderTargetMipmap(F),h.setRenderTarget(j)}function Go(E,O,B){const z=O.isScene===!0?O.overrideMaterial:null;for(let j=0,ve=E.length;j<ve;j++){const Se=E[j],Ee=Se.object,we=Se.geometry,Fe=z===null?Se.material:z,Le=Se.group;Ee.layers.test(B.layers)&&Nv(Ee,O,B,we,Fe,Le)}}function Nv(E,O,B,z,j,ve){E.onBeforeRender(h,O,B,z,j,ve),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(h,O,B,z,E,ve),j.transparent===!0&&j.side===gs?(j.side=En,j.needsUpdate=!0,h.renderBufferDirect(B,O,z,j,E,ve),j.side=Mo,j.needsUpdate=!0,h.renderBufferDirect(B,O,z,j,E,ve),j.side=gs):h.renderBufferDirect(B,O,z,j,E,ve),E.onAfterRender(h,O,B,z,j,ve)}function Kl(E,O,B){O.isScene!==!0&&(O=ae);const z=Ae.get(E),j=d.state.lights,ve=d.state.shadowsArray,Se=j.state.version,Ee=He.getParameters(E,j.state,ve,O,B),we=He.getProgramCacheKey(Ee);let Fe=z.programs;z.environment=E.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(E.isMeshStandardMaterial?Ft:St).get(E.envMap||z.environment),Fe===void 0&&(E.addEventListener("dispose",me),Fe=new Map,z.programs=Fe);let Le=Fe.get(we);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===Se)return Pd(E,Ee),Le}else Ee.uniforms=He.getUniforms(E),E.onBuild(B,Ee,h),E.onBeforeCompile(Ee,h),Le=He.acquireProgram(Ee,we),Fe.set(we,Le),z.uniforms=Ee.uniforms;const Pe=z.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=w.uniform),Pd(E,Ee),z.needsLights=Ov(E),z.lightsStateVersion=Se,z.needsLights&&(Pe.ambientLightColor.value=j.state.ambient,Pe.lightProbe.value=j.state.probe,Pe.directionalLights.value=j.state.directional,Pe.directionalLightShadows.value=j.state.directionalShadow,Pe.spotLights.value=j.state.spot,Pe.spotLightShadows.value=j.state.spotShadow,Pe.rectAreaLights.value=j.state.rectArea,Pe.ltc_1.value=j.state.rectAreaLTC1,Pe.ltc_2.value=j.state.rectAreaLTC2,Pe.pointLights.value=j.state.point,Pe.pointLightShadows.value=j.state.pointShadow,Pe.hemisphereLights.value=j.state.hemi,Pe.directionalShadowMap.value=j.state.directionalShadowMap,Pe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pe.spotShadowMap.value=j.state.spotShadowMap,Pe.spotShadowMatrix.value=j.state.spotShadowMatrix,Pe.pointShadowMap.value=j.state.pointShadowMap,Pe.pointShadowMatrix.value=j.state.pointShadowMatrix);const Je=Le.getUniforms(),Wi=ja.seqWithValue(Je.seq,Pe);return z.currentProgram=Le,z.uniformsList=Wi,Le}function Pd(E,O){const B=Ae.get(E);B.outputEncoding=O.outputEncoding,B.instancing=O.instancing,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function kv(E,O,B,z,j){O.isScene!==!0&&(O=ae),ge.resetTextureUnits();const ve=O.fog,Se=z.isMeshStandardMaterial?O.environment:null,Ee=y===null?h.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:vr,we=(z.isMeshStandardMaterial?Ft:St).get(z.envMap||Se),Fe=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!z.normalMap&&!!B.attributes.tangent,Pe=!!B.morphAttributes.position,Je=!!B.morphAttributes.normal,Wi=!!B.morphAttributes.color,Mr=z.toneMapped?h.toneMapping:ii,wr=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ln=wr!==void 0?wr.length:0,Ie=Ae.get(z),Er=d.state.lights;if(P===!0&&(D===!0||E!==M)){const Pn=E===M&&z.id===S;w.setState(z,E,Pn)}let st=!1;z.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Er.state.version||Ie.outputEncoding!==Ee||j.isInstancedMesh&&Ie.instancing===!1||!j.isInstancedMesh&&Ie.instancing===!0||j.isSkinnedMesh&&Ie.skinning===!1||!j.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==we||z.fog===!0&&Ie.fog!==ve||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==w.numPlanes||Ie.numIntersection!==w.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==Le||Ie.morphTargets!==Pe||Ie.morphNormals!==Je||Ie.morphColors!==Wi||Ie.toneMapping!==Mr||Me.isWebGL2===!0&&Ie.morphTargetsCount!==Ln)&&(st=!0):(st=!0,Ie.__version=z.version);let Rn=Ie.currentProgram;st===!0&&(Rn=Kl(z,O,j));let di=!1,As=!1,Zl=!1;const Lt=Rn.getUniforms(),Ls=Ie.uniforms;if(ue.useProgram(Rn.program)&&(di=!0,As=!0,Zl=!0),z.id!==S&&(S=z.id,As=!0),di||M!==E){if(Lt.setValue(V,"projectionMatrix",E.projectionMatrix),Me.logarithmicDepthBuffer&&Lt.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,As=!0,Zl=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Pn=Lt.map.cameraPosition;Pn!==void 0&&Pn.setValue(V,J.setFromMatrixPosition(E.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Lt.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||j.isSkinnedMesh)&&Lt.setValue(V,"viewMatrix",E.matrixWorldInverse)}if(j.isSkinnedMesh){Lt.setOptional(V,j,"bindMatrix"),Lt.setOptional(V,j,"bindMatrixInverse");const Pn=j.skeleton;Pn&&(Me.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),Lt.setValue(V,"boneTexture",Pn.boneTexture,ge),Lt.setValue(V,"boneTextureSize",Pn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ql=B.morphAttributes;return(Ql.position!==void 0||Ql.normal!==void 0||Ql.color!==void 0&&Me.isWebGL2===!0)&&ne.update(j,B,z,Rn),(As||Ie.receiveShadow!==j.receiveShadow)&&(Ie.receiveShadow=j.receiveShadow,Lt.setValue(V,"receiveShadow",j.receiveShadow)),As&&(Lt.setValue(V,"toneMappingExposure",h.toneMappingExposure),Ie.needsLights&&Fv(Ls,Zl),ve&&z.fog===!0&&Gn.refreshFogUniforms(Ls,ve),Gn.refreshMaterialUniforms(Ls,z,k,R,F),ja.upload(V,Ie.uniformsList,Ls,ge)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ja.upload(V,Ie.uniformsList,Ls,ge),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Lt.setValue(V,"center",j.center),Lt.setValue(V,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(V,"normalMatrix",j.normalMatrix),Lt.setValue(V,"modelMatrix",j.matrixWorld),Rn}function Fv(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Ov(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,O,B){Ae.get(E.texture).__webglTexture=O,Ae.get(E.depthTexture).__webglTexture=B;const z=Ae.get(E);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const B=Ae.get(E);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,B=0){y=E,m=O,v=B;let z=!0;if(E){const we=Ae.get(E);we.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),z=!1):we.__webglFramebuffer===void 0?ge.setupRenderTarget(E):we.__hasExternalTextures&&ge.rebindTextures(E,Ae.get(E.texture).__webglTexture,Ae.get(E.depthTexture).__webglTexture)}let j=null,ve=!1,Se=!1;if(E){const we=E.texture;(we.isData3DTexture||we.isDataArrayTexture)&&(Se=!0);const Fe=Ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(j=Fe[O],ve=!0):Me.isWebGL2&&E.samples>0&&ge.useMultisampledRTT(E)===!1?j=Ae.get(E).__webglMultisampledFramebuffer:j=Fe,T.copy(E.viewport),A.copy(E.scissor),x=E.scissorTest}else T.copy(I).multiplyScalar(k).floor(),A.copy(W).multiplyScalar(k).floor(),x=U;if(ue.bindFramebuffer(36160,j)&&Me.drawBuffers&&z&&ue.drawBuffers(E,j),ue.viewport(T),ue.scissor(A),ue.setScissorTest(x),ve){const we=Ae.get(E.texture);V.framebufferTexture2D(36160,36064,34069+O,we.__webglTexture,B)}else if(Se){const we=Ae.get(E.texture),Fe=O||0;V.framebufferTextureLayer(36160,36064,we.__webglTexture,B||0,Fe)}S=-1},this.readRenderTargetPixels=function(E,O,B,z,j,ve,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){ue.bindFramebuffer(36160,Ee);try{const we=E.texture,Fe=we.format,Le=we.type;if(Fe!==On&&H.convert(Fe)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Le===wo&&(be.has("EXT_color_buffer_half_float")||Me.isWebGL2&&be.has("EXT_color_buffer_float"));if(Le!==gr&&H.convert(Le)!==V.getParameter(35738)&&!(Le===rr&&(Me.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-z&&B>=0&&B<=E.height-j&&V.readPixels(O,B,z,j,H.convert(Fe),H.convert(Le),ve)}finally{const we=y!==null?Ae.get(y).__webglFramebuffer:null;ue.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(E,O,B=0){const z=Math.pow(2,-B),j=Math.floor(O.image.width*z),ve=Math.floor(O.image.height*z);ge.setTexture2D(O,0),V.copyTexSubImage2D(3553,B,0,0,E.x,E.y,j,ve),ue.unbindTexture()},this.copyTextureToTexture=function(E,O,B,z=0){const j=O.image.width,ve=O.image.height,Se=H.convert(B.format),Ee=H.convert(B.type);ge.setTexture2D(B,0),V.pixelStorei(37440,B.flipY),V.pixelStorei(37441,B.premultiplyAlpha),V.pixelStorei(3317,B.unpackAlignment),O.isDataTexture?V.texSubImage2D(3553,z,E.x,E.y,j,ve,Se,Ee,O.image.data):O.isCompressedTexture?V.compressedTexSubImage2D(3553,z,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Se,O.mipmaps[0].data):V.texSubImage2D(3553,z,E.x,E.y,Se,Ee,O.image),z===0&&B.generateMipmaps&&V.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(E,O,B,z,j=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=E.max.x-E.min.x+1,Se=E.max.y-E.min.y+1,Ee=E.max.z-E.min.z+1,we=H.convert(z.format),Fe=H.convert(z.type);let Le;if(z.isData3DTexture)ge.setTexture3D(z,0),Le=32879;else if(z.isDataArrayTexture)ge.setTexture2DArray(z,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,z.flipY),V.pixelStorei(37441,z.premultiplyAlpha),V.pixelStorei(3317,z.unpackAlignment);const Pe=V.getParameter(3314),Je=V.getParameter(32878),Wi=V.getParameter(3316),Mr=V.getParameter(3315),wr=V.getParameter(32877),Ln=B.isCompressedTexture?B.mipmaps[0]:B.image;V.pixelStorei(3314,Ln.width),V.pixelStorei(32878,Ln.height),V.pixelStorei(3316,E.min.x),V.pixelStorei(3315,E.min.y),V.pixelStorei(32877,E.min.z),B.isDataTexture||B.isData3DTexture?V.texSubImage3D(Le,j,O.x,O.y,O.z,ve,Se,Ee,we,Fe,Ln.data):B.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Le,j,O.x,O.y,O.z,ve,Se,Ee,we,Ln.data)):V.texSubImage3D(Le,j,O.x,O.y,O.z,ve,Se,Ee,we,Fe,Ln),V.pixelStorei(3314,Pe),V.pixelStorei(32878,Je),V.pixelStorei(3316,Wi),V.pixelStorei(3315,Mr),V.pixelStorei(32877,wr),j===0&&z.generateMipmaps&&V.generateMipmap(Le),ue.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ge.setTextureCube(E,0):E.isData3DTexture?ge.setTexture3D(E,0):E.isDataArrayTexture?ge.setTexture2DArray(E,0):ge.setTexture2D(E,0),ue.unbindTexture()},this.resetState=function(){m=0,v=0,y=null,ue.reset(),pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class f3 extends lv{}f3.prototype.isWebGL1Renderer=!0;class d3 extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class gd extends ci{constructor(e=1,t=1,i=1,r=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],d=[],g=[];let _=0;const h=[],p=i/2;let m=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(g,2));function v(){const S=new N,M=new N;let T=0;const A=(t-e)/i;for(let x=0;x<=s;x++){const C=[],R=x/s,k=R*(t-e)+e;for(let K=0;K<=r;K++){const Z=K/r,I=Z*l+a,W=Math.sin(I),U=Math.cos(I);M.x=k*W,M.y=-R*i+p,M.z=k*U,f.push(M.x,M.y,M.z),S.set(W,A,U).normalize(),d.push(S.x,S.y,S.z),g.push(Z,1-R),C.push(_++)}h.push(C)}for(let x=0;x<r;x++)for(let C=0;C<s;C++){const R=h[C][x],k=h[C+1][x],K=h[C+1][x+1],Z=h[C][x+1];c.push(R,k,Z),c.push(k,K,Z),T+=6}u.addGroup(m,T,0),m+=T}function y(S){const M=_,T=new De,A=new N;let x=0;const C=S===!0?e:t,R=S===!0?1:-1;for(let K=1;K<=r;K++)f.push(0,p*R,0),d.push(0,R,0),g.push(.5,.5),_++;const k=_;for(let K=0;K<=r;K++){const I=K/r*l+a,W=Math.cos(I),U=Math.sin(I);A.x=C*U,A.y=p*R,A.z=C*W,f.push(A.x,A.y,A.z),d.push(0,R,0),T.x=W*.5+.5,T.y=U*.5*R+.5,g.push(T.x,T.y),_++}for(let K=0;K<r;K++){const Z=M+K,I=k+K;S===!0?c.push(I,I+1,Z):c.push(I+1,I,Z),x+=3}u.addGroup(m,x,S===!0?1:2),m+=x}}static fromJSON(e){return new gd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vd extends gd{constructor(e=1,t=1,i=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new vd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _d extends ci{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new N,d=new N,g=[],_=[],h=[],p=[];for(let m=0;m<=i;m++){const v=[],y=m/i;let S=0;m==0&&o==0?S=.5/t:m==i&&l==Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const T=M/t;f.x=-e*Math.cos(r+T*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+y*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),h.push(d.x,d.y,d.z),p.push(T+S,1-y),v.push(u++)}c.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){const y=c[m][v+1],S=c[m][v],M=c[m+1][v],T=c[m+1][v+1];(m!==0||o>0)&&g.push(y,S,T),(m!==i-1||l<Math.PI)&&g.push(S,M,T)}this.setIndex(g),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(p,2))}static fromJSON(e){return new _d(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class h3 extends Po{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Oe(16777215),this.specular=new Oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=W0,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ut={arraySlice:function(n,e,t){return ut.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){const s=n.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const u=s.tracks[l],c=u.getValueSize(),f=[],d=[];for(let g=0;g<u.times.length;++g){const _=u.times[g]*r;if(!(_<t||_>=i)){f.push(u.times[g]);for(let h=0;h<c;++h)d.push(u.values[g*c+h])}}f.length!==0&&(u.times=ut.convertArray(f,u.times.constructor),u.values=ut.convertArray(d,u.values.constructor),o.push(u))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);const r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const u=n.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(u===void 0)continue;let c=0;const f=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=f/3);let d=0;const g=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=g/3);const _=a.times.length-1;let h;if(s<=a.times[0]){const m=c,v=f-c;h=ut.arraySlice(a.values,m,v)}else if(s>=a.times[_]){const m=_*f+c,v=m+f-c;h=ut.arraySlice(a.values,m,v)}else{const m=a.createInterpolant(),v=c,y=f-c;m.evaluate(s),h=ut.arraySlice(m.resultBuffer,v,y)}l==="quaternion"&&new li().fromArray(h).normalize().conjugate().toArray(h);const p=u.times.length;for(let m=0;m<p;++m){const v=m*g+d;if(l==="quaternion")li.multiplyQuaternionsFlat(u.values,v,h,0,u.values,v);else{const y=g-d*2;for(let S=0;S<y;++S)u.values[v+S]-=h[S]}}}return n.blendMode=q1,n}};class Bl{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class p3 extends Bl{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gp,endingEnd:gp}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case vp:s=e,a=2*t-i;break;case _p:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vp:o=e,l=2*i-t;break;case _p:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=o*c}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,g=this._weightNext,_=(i-t)/(r-t),h=_*_,p=h*_,m=-d*p+2*d*h-d*_,v=(1+d)*p+(-1.5-2*d)*h+(-.5+d)*_+1,y=(-1-g)*p+(1.5+g)*h+.5*_,S=g*p-g*h;for(let M=0;M!==a;++M)s[M]=m*o[c+M]+v*o[u+M]+y*o[l+M]+S*o[f+M];return s}}class m3 extends Bl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,c=(i-t)/(r-t),f=1-c;for(let d=0;d!==a;++d)s[d]=o[u+d]*f+o[l+d]*c;return s}}class g3 extends Bl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class fi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ut.convertArray(t,this.TimeBufferType),this.values=ut.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ut.convertArray(e.times,Array),values:ut.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new g3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new m3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new p3(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gl:t=this.InterpolantFactoryMethodDiscrete;break;case vl:t=this.InterpolantFactoryMethodLinear;break;case Lu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gl;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return Lu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ut.arraySlice(i,s,o),this.values=ut.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&ut.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){const u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=ut.arraySlice(this.times),t=ut.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===Lu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const u=e[a],c=e[a+1];if(u!==c&&(a!==1||u!==e[0]))if(r)l=!0;else{const f=a*i,d=f-i,g=f+i;for(let _=0;_!==i;++_){const h=t[f+_];if(h!==t[d+_]||h!==t[g+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,d=o*i;for(let g=0;g!==i;++g)t[d+g]=t[f+g]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=ut.arraySlice(e,0,o),this.values=ut.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=ut.arraySlice(this.times,0),t=ut.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=vl;class Io extends fi{}Io.prototype.ValueTypeName="bool";Io.prototype.ValueBufferType=Array;Io.prototype.DefaultInterpolation=gl;Io.prototype.InterpolantFactoryMethodLinear=void 0;Io.prototype.InterpolantFactoryMethodSmooth=void 0;class v3 extends fi{}v3.prototype.ValueTypeName="color";class _3 extends fi{}_3.prototype.ValueTypeName="number";class y3 extends Bl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let u=e*a;for(let c=u+a;u!==c;u+=4)li.slerpFlat(s,0,o,u-a,o,u,l);return s}}class yd extends fi{InterpolantFactoryMethodLinear(e){return new y3(this.times,this.values,this.getValueSize(),e)}}yd.prototype.ValueTypeName="quaternion";yd.prototype.DefaultInterpolation=vl;yd.prototype.InterpolantFactoryMethodSmooth=void 0;class No extends fi{}No.prototype.ValueTypeName="string";No.prototype.ValueBufferType=Array;No.prototype.DefaultInterpolation=gl;No.prototype.InterpolantFactoryMethodLinear=void 0;No.prototype.InterpolantFactoryMethodSmooth=void 0;class x3 extends fi{}x3.prototype.ValueTypeName="vector";class S3{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const g=u[f],_=u[f+1];if(g.global&&(g.lastIndex=0),g.test(c))return _}return null}}}const ab=new S3;class uv extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const tm=new ht,nm=new N,im=new N;class M3{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hd,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nm.setFromMatrixPosition(e.matrixWorld),t.position.copy(nm),im.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(im),t.updateMatrixWorld(),tm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tm),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class w3 extends M3{constructor(){super(new nv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ic extends uv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DefaultUp),this.updateMatrix(),this.target=new jt,this.shadow=new w3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class E3 extends uv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const xd="\\[\\]\\.:\\/",T3=new RegExp("["+xd+"]","g"),Sd="[^"+xd+"]",b3="[^"+xd.replace("\\.","")+"]",C3=/((?:WC+[\/:])*)/.source.replace("WC",Sd),A3=/(WCOD+)?/.source.replace("WCOD",b3),L3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sd),R3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sd),P3=new RegExp("^"+C3+A3+L3+R3+"$"),D3=["material","materials","bones"];class I3{constructor(e,t,i){const r=i||Be.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Be{constructor(e,t,i){this.path=t,this.parsedPath=i||Be.parseTrackName(t),this.node=Be.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Be.Composite(e,t,i):new Be(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T3,"")}static parseTrackName(e){const t=P3.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);D3.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Be.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Be.Composite=I3;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);const lb=new li;var Hl={exports:{}},Vl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N3=Ht.exports,k3=Symbol.for("react.element"),F3=Symbol.for("react.fragment"),O3=Object.prototype.hasOwnProperty,z3=N3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U3={key:!0,ref:!0,__self:!0,__source:!0};function cv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)O3.call(e,i)&&!U3.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:k3,type:n,key:s,ref:o,props:r,_owner:z3.current}}Vl.Fragment=F3;Vl.jsx=cv;Vl.jsxs=cv;Hl.exports=Vl;const Y=Hl.exports.jsx,rt=Hl.exports.jsxs,B3=Hl.exports.Fragment;var H3=Object.freeze(Object.defineProperty({__proto__:null,jsx:Y,jsxs:rt,Fragment:B3},Symbol.toStringTag,{value:"Module"}));function V3(){return Ht.exports.useEffect(()=>{const n=new d3,e=new an(75,window.innerWidth/window.innerHeight,.1,1e3),t=new lv({canvas:document.querySelector("#bg"),alpha:!0,antialias:!0});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),t.outputEncoding=Ye,t.toneMapping=H0,t.toneMappingExposure=1.25,e.position.setZ(30),e.position.setX(-3),window.addEventListener("resize",i,!1);function i(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}t.render(n,e);function r(v,y){return Math.random()*(y-v)+v}const s=new _d(.2,6,5),o=new dd({color:16744703});o.transparent=!0,o.opacity=0;const a=new zn(s,o);n.background=new Oe(1644825);function l(){const[v,y,S]=Array(3).fill().map(()=>r(-15,60));return[v,y,S]}const u=new ic(15592158,1);u.position.set(l()[0],l()[1],l()[3]);const c=new ic(139,1);c.position.set(l()[0],l()[1],l()[3]);const f=new ic(3556687,1);f.position.set(l()[0],l()[1],l()[3]);const d=new E3(65535,1);a.add(d,u,c,f),console.log(1044481),n.add(a);const g=new vd(.3,2,5,14,3,!0),_=new h3({color:5507348,shininess:100,specular:12632256});let h=[];function p(){for(let v=0;v<600;v++){h[v]=new zn(g,_);const[y,S,M]=Array(3).fill().map(()=>mx.randFloatSpread(100));h[v].position.set(y,S,M),n.add(h[v])}}p();function m(){requestAnimationFrame(m),a.rotation.z+=.005;for(let v=0;v<600;v++)h[v].position.y<-40?h[v].position.y=50:h[v].position.y-=.15;t.render(n,e)}m()},[]),Y("div",{children:Y("canvas",{id:"bg"})})}var tt={},Md={},ko={},Fo={},fv="Expected a function",rm=0/0,G3="[object Symbol]",W3=/^\s+|\s+$/g,j3=/^[-+]0x[0-9a-f]+$/i,X3=/^0b[01]+$/i,$3=/^0o[0-7]+$/i,q3=parseInt,Y3=typeof Wo=="object"&&Wo&&Wo.Object===Object&&Wo,K3=typeof self=="object"&&self&&self.Object===Object&&self,Z3=Y3||K3||Function("return this")(),Q3=Object.prototype,J3=Q3.toString,eE=Math.max,tE=Math.min,rc=function(){return Z3.Date.now()};function nE(n,e,t){var i,r,s,o,a,l,u=0,c=!1,f=!1,d=!0;if(typeof n!="function")throw new TypeError(fv);e=sm(e)||0,Sl(t)&&(c=!!t.leading,f="maxWait"in t,s=f?eE(sm(t.maxWait)||0,e):s,d="trailing"in t?!!t.trailing:d);function g(T){var A=i,x=r;return i=r=void 0,u=T,o=n.apply(x,A),o}function _(T){return u=T,a=setTimeout(m,e),c?g(T):o}function h(T){var A=T-l,x=T-u,C=e-A;return f?tE(C,s-x):C}function p(T){var A=T-l,x=T-u;return l===void 0||A>=e||A<0||f&&x>=s}function m(){var T=rc();if(p(T))return v(T);a=setTimeout(m,h(T))}function v(T){return a=void 0,d&&i?g(T):(i=r=void 0,o)}function y(){a!==void 0&&clearTimeout(a),u=0,i=l=r=a=void 0}function S(){return a===void 0?o:v(rc())}function M(){var T=rc(),A=p(T);if(i=arguments,r=this,l=T,A){if(a===void 0)return _(l);if(f)return a=setTimeout(m,e),g(l)}return a===void 0&&(a=setTimeout(m,e)),o}return M.cancel=y,M.flush=S,M}function iE(n,e,t){var i=!0,r=!0;if(typeof n!="function")throw new TypeError(fv);return Sl(t)&&(i="leading"in t?!!t.leading:i,r="trailing"in t?!!t.trailing:r),nE(n,e,{leading:i,maxWait:e,trailing:r})}function Sl(n){var e=typeof n;return!!n&&(e=="object"||e=="function")}function rE(n){return!!n&&typeof n=="object"}function sE(n){return typeof n=="symbol"||rE(n)&&J3.call(n)==G3}function sm(n){if(typeof n=="number")return n;if(sE(n))return rm;if(Sl(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Sl(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=n.replace(W3,"");var t=X3.test(n);return t||$3.test(n)?q3(n.slice(2),t?2:8):j3.test(n)?rm:+n}var oE=iE,Oo={};Object.defineProperty(Oo,"__esModule",{value:!0});Oo.addPassiveEventListener=function(e,t,i){var r=function(){var s=!1;try{var o=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",null,o)}catch{}return s}();e.addEventListener(t,i,r?{passive:!0}:!1)};Oo.removePassiveEventListener=function(e,t,i){e.removeEventListener(t,i)};Object.defineProperty(Fo,"__esModule",{value:!0});var aE=oE,lE=cE(aE),uE=Oo;function cE(n){return n&&n.__esModule?n:{default:n}}var fE=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,lE.default)(e,t)},et={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,t){if(e){var i=fE(function(r){et.scrollHandler(e)},t);et.scrollSpyContainers.push(e),(0,uE.addPassiveEventListener)(e,"scroll",i)}},isMounted:function(e){return et.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var t=window.pageYOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return t?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return t?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var t=et.scrollSpyContainers[et.scrollSpyContainers.indexOf(e)].spyCallbacks||[];t.forEach(function(i){return i(et.currentPositionX(e),et.currentPositionY(e))})},addStateHandler:function(e){et.spySetState.push(e)},addSpyHandler:function(e,t){var i=et.scrollSpyContainers[et.scrollSpyContainers.indexOf(t)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e),e(et.currentPositionX(t),et.currentPositionY(t))},updateStates:function(){et.spySetState.forEach(function(e){return e()})},unmount:function(e,t){et.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(t),1)}),et.spySetState&&et.spySetState.length&&et.spySetState.splice(et.spySetState.indexOf(e),1),document.removeEventListener("scroll",et.scrollHandler)},update:function(){return et.scrollSpyContainers.forEach(function(e){return et.scrollHandler(e)})}};Fo.default=et;var Cs={},zo={};Object.defineProperty(zo,"__esModule",{value:!0});var dE=function(e,t){var i=e.indexOf("#")===0?e.substring(1):e,r=i?"#"+i:"",s=window&&window.location,o=r?s.pathname+s.search+r:s.pathname+s.search;t?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},hE=function(){return window.location.hash.replace(/^#/,"")},pE=function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(e.compareDocumentPosition(t)&16)}},mE=function(e){return getComputedStyle(e).position!=="static"},sc=function(e,t){for(var i=e.offsetTop,r=e.offsetParent;r&&!t(r);)i+=r.offsetTop,r=r.offsetParent;return{offsetTop:i,offsetParent:r}},gE=function(e,t,i){if(i)return e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?t.offsetLeft:t.offsetLeft-e.offsetLeft;if(e===document)return t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(mE(e)){if(t.offsetParent!==e){var r=function(c){return c===e||c===document},s=sc(t,r),o=s.offsetTop,a=s.offsetParent;if(a!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return t.offsetTop}if(t.offsetParent===e.offsetParent)return t.offsetTop-e.offsetTop;var l=function(c){return c===document};return sc(t,l).offsetTop-sc(e,l).offsetTop};zo.default={updateHash:dE,getHash:hE,filterElementInContainer:pE,scrollOffset:gE};var Gl={},wd={};Object.defineProperty(wd,"__esModule",{value:!0});wd.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var Ed={};Object.defineProperty(Ed,"__esModule",{value:!0});var vE=Oo,_E=["mousedown","mousewheel","touchmove","keydown"];Ed.default={subscribe:function(e){return typeof document!="undefined"&&_E.forEach(function(t){return(0,vE.addPassiveEventListener)(document,t,e)})}};var Uo={};Object.defineProperty(Uo,"__esModule",{value:!0});var ff={registered:{},scrollEvent:{register:function(e,t){ff.registered[e]=t},remove:function(e){ff.registered[e]=null}}};Uo.default=ff;Object.defineProperty(Gl,"__esModule",{value:!0});var yE=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},xE=zo;Wl(xE);var SE=wd,om=Wl(SE),ME=Ed,wE=Wl(ME),EE=Uo,kn=Wl(EE);function Wl(n){return n&&n.__esModule?n:{default:n}}var dv=function(e){return om.default[e.smooth]||om.default.defaultEasing},TE=function(e){return typeof e=="function"?e:function(){return e}},bE=function(){if(typeof window!="undefined")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},df=function(){return bE()||function(n,e,t){window.setTimeout(n,t||1e3/60,new Date().getTime())}}(),hv=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},pv=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},mv=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},CE=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var i=document.body,r=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},AE=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var i=document.body,r=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},LE=function n(e,t,i){var r=t.data;if(!t.ignoreCancelEvents&&r.cancel){kn.default.registered.end&&kn.default.registered.end(r.to,r.target,r.currentPositionY);return}if(r.delta=Math.round(r.targetPosition-r.startPosition),r.start===null&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?t.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:t.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var s=n.bind(null,e,t);df.call(window,s);return}kn.default.registered.end&&kn.default.registered.end(r.to,r.target,r.currentPosition)},Td=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},Bo=function(e,t,i,r){if(t.data=t.data||hv(),window.clearTimeout(t.data.delayTimeout),wE.default.subscribe(function(){t.data.cancel=!0}),Td(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?pv(t):mv(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition===t.data.targetPosition){kn.default.registered.end&&kn.default.registered.end(t.data.to,t.data.target,t.data.currentPosition);return}t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=TE(t.duration)(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=i,t.data.target=r;var s=dv(t),o=LE.bind(null,s,t);if(t&&t.delay>0){t.data.delayTimeout=window.setTimeout(function(){kn.default.registered.begin&&kn.default.registered.begin(t.data.to,t.data.target),df.call(window,o)},t.delay);return}kn.default.registered.begin&&kn.default.registered.begin(t.data.to,t.data.target),df.call(window,o)},jl=function(e){return e=yE({},e),e.data=e.data||hv(),e.absolute=!0,e},RE=function(e){Bo(0,jl(e))},PE=function(e,t){Bo(e,jl(t))},DE=function(e){e=jl(e),Td(e),Bo(e.horizontal?CE(e):AE(e),e)},IE=function(e,t){t=jl(t),Td(t);var i=t.horizontal?pv(t):mv(t);Bo(e+i,t)};Gl.default={animateTopScroll:Bo,getAnimationType:dv,scrollToTop:RE,scrollToBottom:DE,scrollTo:PE,scrollMore:IE};Object.defineProperty(Cs,"__esModule",{value:!0});var NE=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},kE=zo,FE=bd(kE),OE=Gl,zE=bd(OE),UE=Uo,La=bd(UE);function bd(n){return n&&n.__esModule?n:{default:n}}var Ra={},am=void 0;Cs.default={unmount:function(){Ra={}},register:function(e,t){Ra[e]=t},unregister:function(e){delete Ra[e]},get:function(e){return Ra[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return am=e},getActiveLink:function(){return am},scrollTo:function(e,t){var i=this.get(e);if(!i){console.warn("target Element not found");return}t=NE({},t,{absolute:!1});var r=t.containerId,s=t.container,o=void 0;r?o=document.getElementById(r):s&&s.nodeType?o=s:o=document,t.absolute=!0;var a=t.horizontal,l=FE.default.scrollOffset(o,i,a)+(t.offset||0);if(!t.smooth){La.default.registered.begin&&La.default.registered.begin(e,i),o===document?t.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):o.scrollTop=l,La.default.registered.end&&La.default.registered.end(e,i);return}zE.default.animateTopScroll(l,t,e,i)}};var Ho={exports:{}},BE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",HE=BE,VE=HE;function gv(){}function vv(){}vv.resetWarningCache=gv;var GE=function(){function n(i,r,s,o,a,l){if(l!==VE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:vv,resetWarningCache:gv};return t.PropTypes=t,t};Ho.exports=GE();var Xl={};Object.defineProperty(Xl,"__esModule",{value:!0});var WE=zo,oc=jE(WE);function jE(n){return n&&n.__esModule?n:{default:n}}var XE={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout(function(){e.scrollTo(t,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,t){var i=this.scroller,r=i.get(e);if(r&&(t||e!==i.getActiveLink())){var s=this.containers[e]||document;i.scrollTo(e,{container:s})}},getHash:function(){return oc.default.getHash()},changeHash:function(e,t){this.isInitialized()&&oc.default.getHash()!==e&&oc.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Xl.default=XE;Object.defineProperty(ko,"__esModule",{value:!0});var lm=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},$E=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),qE=Ht.exports,um=Vo(qE),YE=Fo,Pa=Vo(YE),KE=Cs,ZE=Vo(KE),QE=Ho.exports,$e=Vo(QE),JE=Xl,Si=Vo(JE);function Vo(n){return n&&n.__esModule?n:{default:n}}function eT(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function tT(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function nT(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var cm={to:$e.default.string.isRequired,containerId:$e.default.string,container:$e.default.object,activeClass:$e.default.string,spy:$e.default.bool,horizontal:$e.default.bool,smooth:$e.default.oneOfType([$e.default.bool,$e.default.string]),offset:$e.default.number,delay:$e.default.number,isDynamic:$e.default.bool,onClick:$e.default.func,duration:$e.default.oneOfType([$e.default.number,$e.default.func]),absolute:$e.default.bool,onSetActive:$e.default.func,onSetInactive:$e.default.func,ignoreCancelEvents:$e.default.bool,hashSpy:$e.default.bool,saveHashHistory:$e.default.bool,spyThrottle:$e.default.number};ko.default=function(n,e){var t=e||ZE.default,i=function(s){nT(o,s);function o(a){eT(this,o);var l=tT(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return r.call(l),l.state={active:!1},l}return $E(o,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();Pa.default.isMounted(l)||Pa.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(Si.default.isMounted()||Si.default.mount(t),Si.default.mapContainer(this.props.to,l)),Pa.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){Pa.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u=lm({},this.props);for(var c in cm)u.hasOwnProperty(c)&&delete u[c];return u.className=l,u.onClick=this.handleClick,um.default.createElement(n,u)}}]),o}(um.default.PureComponent),r=function(){var o=this;this.scrollTo=function(a,l){t.scrollTo(a,lm({},o.state,l))},this.handleClick=function(a){o.props.onClick&&o.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(a,l){var u=o.getScrollSpyContainer();if(!(Si.default.isMounted()&&!Si.default.isInitialized())){var c=o.props.horizontal,f=o.props.to,d=null,g=void 0,_=void 0;if(c){var h=0,p=0,m=0;if(u.getBoundingClientRect){var v=u.getBoundingClientRect();m=v.left}if(!d||o.props.isDynamic){if(d=t.get(f),!d)return;var y=d.getBoundingClientRect();h=y.left-m+a,p=h+y.width}var S=a-o.props.offset;g=S>=Math.floor(h)&&S<Math.floor(p),_=S<Math.floor(h)||S>=Math.floor(p)}else{var M=0,T=0,A=0;if(u.getBoundingClientRect){var x=u.getBoundingClientRect();A=x.top}if(!d||o.props.isDynamic){if(d=t.get(f),!d)return;var C=d.getBoundingClientRect();M=C.top-A+l,T=M+C.height}var R=l-o.props.offset;g=R>=Math.floor(M)&&R<Math.floor(T),_=R<Math.floor(M)||R>=Math.floor(T)}var k=t.getActiveLink();if(_){if(f===k&&t.setActiveLink(void 0),o.props.hashSpy&&Si.default.getHash()===f){var K=o.props.saveHashHistory,Z=K===void 0?!1:K;Si.default.changeHash("",Z)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(f,d))}if(g&&(k!==f||o.state.active===!1)){t.setActiveLink(f);var I=o.props.saveHashHistory,W=I===void 0?!1:I;o.props.hashSpy&&Si.default.changeHash(f,W),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(f,d))}}}};return i.propTypes=cm,i.defaultProps={offset:0},i};Object.defineProperty(Md,"__esModule",{value:!0});var iT=Ht.exports,fm=_v(iT),rT=ko,sT=_v(rT);function _v(n){return n&&n.__esModule?n:{default:n}}function oT(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function dm(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function aT(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var lT=function(n){aT(e,n);function e(){var t,i,r,s;oT(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(i=(r=dm(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),r),r.render=function(){return fm.default.createElement("a",r.props,r.props.children)},i),dm(r,s)}return e}(fm.default.Component);Md.default=(0,sT.default)(lT);var Cd={};Object.defineProperty(Cd,"__esModule",{value:!0});var uT=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),cT=Ht.exports,hm=yv(cT),fT=ko,dT=yv(fT);function yv(n){return n&&n.__esModule?n:{default:n}}function hT(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function pT(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function mT(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var gT=function(n){mT(e,n);function e(){return hT(this,e),pT(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return uT(e,[{key:"render",value:function(){return hm.default.createElement("input",this.props,this.props.children)}}]),e}(hm.default.Component);Cd.default=(0,dT.default)(gT);var Ad={},$l={};Object.defineProperty($l,"__esModule",{value:!0});var vT=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},_T=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),yT=Ht.exports,pm=ql(yT),xT=vf.exports;ql(xT);var ST=Cs,mm=ql(ST),MT=Ho.exports,gm=ql(MT);function ql(n){return n&&n.__esModule?n:{default:n}}function wT(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function ET(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function TT(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}$l.default=function(n){var e=function(t){TT(i,t);function i(r){wT(this,i);var s=ET(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return s.childBindings={domNode:null},s}return _T(i,[{key:"componentDidMount",value:function(){if(typeof window=="undefined")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window=="undefined")return!1;mm.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){mm.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return pm.default.createElement(n,vT({},this.props,{parentBindings:this.childBindings}))}}]),i}(pm.default.Component);return e.propTypes={name:gm.default.string,id:gm.default.string},e};Object.defineProperty(Ad,"__esModule",{value:!0});var vm=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},bT=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),CT=Ht.exports,_m=Ld(CT),AT=$l,LT=Ld(AT),RT=Ho.exports,ym=Ld(RT);function Ld(n){return n&&n.__esModule?n:{default:n}}function PT(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function DT(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function IT(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var xv=function(n){IT(e,n);function e(){return PT(this,e),DT(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return bT(e,[{key:"render",value:function(){var i=this,r=vm({},this.props);return r.parentBindings&&delete r.parentBindings,_m.default.createElement("div",vm({},r,{ref:function(o){i.props.parentBindings.domNode=o}}),this.props.children)}}]),e}(_m.default.Component);xv.propTypes={name:ym.default.string,id:ym.default.string};Ad.default=(0,LT.default)(xv);var NT=Uv(H3),xm=NT.jsx,Sm=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Mm=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();function wm(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Em(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function Tm(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var bm=Ht.exports,qi=Fo,ac=Cs,qe=Ho.exports,Mi=Xl,Cm={to:qe.string.isRequired,containerId:qe.string,container:qe.object,activeClass:qe.string,spy:qe.bool,smooth:qe.oneOfType([qe.bool,qe.string]),offset:qe.number,delay:qe.number,isDynamic:qe.bool,onClick:qe.func,duration:qe.oneOfType([qe.number,qe.func]),absolute:qe.bool,onSetActive:qe.func,onSetInactive:qe.func,ignoreCancelEvents:qe.bool,hashSpy:qe.bool,spyThrottle:qe.number},kT={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=t||ac,r=function(o){Tm(a,o);function a(l){wm(this,a);var u=Em(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return s.call(u),u.state={active:!1},u}return Mm(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();qi.isMounted(u)||qi.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Mi.isMounted()||Mi.mount(i),Mi.mapContainer(this.props.to,u)),this.props.spy&&qi.addStateHandler(this.stateHandler),qi.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){qi.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c=Sm({},this.props);for(var f in Cm)c.hasOwnProperty(f)&&delete c[f];return c.className=u,c.onClick=this.handleClick,xm(e,{...c})}}]),a}(bm.Component),s=function(){var a=this;this.scrollTo=function(l,u){i.scrollTo(l,Sm({},a.state,u))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){i.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(l){var u=a.getScrollSpyContainer();if(!(Mi.isMounted()&&!Mi.isInitialized())){var c=a.props.to,f=null,d=0,g=0,_=0;if(u.getBoundingClientRect){var h=u.getBoundingClientRect();_=h.top}if(!f||a.props.isDynamic){if(f=i.get(c),!f)return;var p=f.getBoundingClientRect();d=p.top-_+l,g=d+p.height}var m=l-a.props.offset,v=m>=Math.floor(d)&&m<Math.floor(g),y=m<Math.floor(d)||m>=Math.floor(g),S=i.getActiveLink();if(y)return c===S&&i.setActiveLink(void 0),a.props.hashSpy&&Mi.getHash()===c&&Mi.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),qi.updateStates();if(v&&S!==c)return i.setActiveLink(c),a.props.hashSpy&&Mi.changeHash(c),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(c)),qi.updateStates()}}};return r.propTypes=Cm,r.defaultProps={offset:0},r},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(i){Tm(r,i);function r(s){wm(this,r);var o=Em(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,s));return o.childBindings={domNode:null},o}return Mm(r,[{key:"componentDidMount",value:function(){if(typeof window=="undefined")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window=="undefined")return!1;ac.unregister(this.props.name)}},{key:"registerElems",value:function(o){ac.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return xm(e,{...this.props,parentBindings:this.childBindings})}}]),r}(bm.Component);return t.propTypes={name:qe.string,id:qe.string},t}},FT=kT;Object.defineProperty(tt,"__esModule",{value:!0});tt.Helpers=tt.ScrollElement=tt.ScrollLink=tt.animateScroll=tt.scrollSpy=tt.Events=tt.scroller=tt.Element=tt.Button=es=tt.Link=void 0;var OT=Md,Sv=Vn(OT),zT=Cd,Mv=Vn(zT),UT=Ad,wv=Vn(UT),BT=Cs,Ev=Vn(BT),HT=Uo,Tv=Vn(HT),VT=Fo,bv=Vn(VT),GT=Gl,Cv=Vn(GT),WT=ko,Av=Vn(WT),jT=$l,Lv=Vn(jT),XT=FT,Rv=Vn(XT);function Vn(n){return n&&n.__esModule?n:{default:n}}var es=tt.Link=Sv.default;tt.Button=Mv.default;tt.Element=wv.default;tt.scroller=Ev.default;tt.Events=Tv.default;tt.scrollSpy=bv.default;tt.animateScroll=Cv.default;tt.ScrollLink=Av.default;tt.ScrollElement=Lv.default;tt.Helpers=Rv.default;tt.default={Link:Sv.default,Button:Mv.default,Element:wv.default,scroller:Ev.default,Events:Tv.default,scrollSpy:bv.default,animateScroll:Cv.default,ScrollLink:Av.default,ScrollElement:Lv.default,Helpers:Rv.default};var Pv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Am=or.createContext&&or.createContext(Pv),zi=globalThis&&globalThis.__assign||function(){return zi=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},zi.apply(this,arguments)},$T=globalThis&&globalThis.__rest||function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t};function Dv(n){return n&&n.map(function(e,t){return or.createElement(e.tag,zi({key:t},e.attr),Dv(e.child))})}function Yl(n){return function(e){return or.createElement(qT,zi({attr:zi({},n.attr)},e),Dv(n.child))}}function qT(n){var e=function(t){var i=n.attr,r=n.size,s=n.title,o=$T(n,["attr","size","title"]),a=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),or.createElement("svg",zi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,o,{className:l,style:zi(zi({color:n.color||t.color},t.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&or.createElement("title",null,s),n.children)};return Am!==void 0?or.createElement(Am.Consumer,null,function(t){return e(t)}):e(Pv)}function YT(n){return Yl({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"}}]})(n)}function KT(n){return Yl({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z"}}]})(n)}function ZT(n){return Yl({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 6h2.767v1.418h0.040c0.385-0.691 1.327-1.418 2.732-1.418 2.921 0 3.461 1.818 3.461 4.183v4.817h-2.885v-4.27c0-1.018-0.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255v4.344h-2.883v-9z"}},{tag:"path",attr:{d:"M1 6h3v9h-3v-9z"}},{tag:"path",attr:{d:"M4 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"}}]})(n)}const QT=()=>{const[n,e]=Ht.exports.useState(""),[t,i]=Ht.exports.useState(!0);return console.log(t),Ht.exports.useEffect(()=>{var r=0;return console.log(screen.width),window.addEventListener("scroll",function(){var s=window.pageYOffset||document.documentElement.scrollTop;window.scrollY<185?e(""):s>r?(e("hidden"),i(!0)):e("navDisplay"),r=s<=0?0:s},!1),()=>window.removeEventListener("scroll",scroll)},[]),Y("div",{className:`${n} navClass  ${t&&"open"}`,children:Y("header",{children:rt("nav",{className:"black",children:[Y("div",{className:"logoClass",children:Y(es,{to:"home",activeClass:"",spy:!1,smooth:"easeInOutQuad",offset:-100,duration:400,children:rt("svg",{className:"logos",viewBox:"0 0 236 228",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Y("rect",{id:"Rectangle 1",x:"9",y:"114",width:"160",height:"160",transform:"rotate(-45 9 114)",fill:"#1A000E"}),Y("path",{id:"N",d:"M22.3535 178.736C18.5988 178.736 15.0575 178.224 11.7295 177.2C8.4015 176.261 5.7135 174.64 3.6655 172.336C1.6175 170.032 0.593498 166.917 0.593498 162.992C0.593498 161.627 0.721498 160.261 0.977497 158.896C0.977497 158.384 1.27616 158.128 1.8735 158.128C2.3855 158.128 2.6415 158.341 2.6415 158.768C2.6415 159.28 2.6415 159.749 2.6415 160.176C2.55616 160.603 2.5135 161.072 2.5135 161.584C2.5135 165.168 3.58016 168.112 5.7135 170.416C7.7615 172.72 10.4495 174.427 13.7775 175.536C17.1055 176.645 20.6042 177.2 24.2735 177.2C28.3695 177.2 32.3375 176.603 36.1775 175.408C40.2735 174.128 44.1988 172.208 47.9535 169.648C51.7082 167.173 55.2495 164.272 58.5775 160.944C53.1162 157.445 48.8922 152.624 45.9055 146.48C42.9188 140.336 41.4255 133.637 41.4255 126.384C41.4255 122.032 42.0228 117.381 43.2175 112.432C45.0095 105.776 47.8682 99.248 51.7935 92.848C55.8042 86.3627 61.2655 80.3467 68.1775 74.8C75.1748 69.2533 83.9642 64.4747 94.5455 60.464C105.212 56.4533 118.055 53.5093 133.074 51.632C135.036 51.376 137.383 51.1627 140.114 50.992C142.93 50.736 145.66 50.5227 148.306 50.352C150.951 50.096 153.042 49.968 154.578 49.968H154.706C155.132 49.968 155.431 50.1387 155.602 50.48C155.858 50.8213 155.986 51.2053 155.986 51.632C155.986 52.3147 155.687 52.656 155.09 52.656C152.018 52.4853 149.543 53.3813 147.666 55.344C145.788 57.3067 143.954 59.8667 142.162 63.024C140.455 66.0107 139.388 69.808 138.962 74.416C138.62 78.9387 138.45 83.5467 138.45 88.24V94.256C138.45 96.2187 138.407 98.1387 138.322 100.016C138.322 101.808 138.236 103.472 138.066 105.008C137.127 113.883 135.378 121.605 132.818 128.176C130.343 134.661 126.716 139.824 121.938 143.664C120.402 144.944 119.122 145.797 118.098 146.224C122.194 146.565 125.82 145.712 128.978 143.664C132.135 141.701 134.908 139.056 137.298 135.728C139.687 132.315 141.692 128.731 143.314 124.976C145.02 121.136 146.471 117.637 147.666 114.48C150.396 107.312 152.914 100.229 155.218 93.232C157.607 86.1493 160.338 79.408 163.41 73.008C166.482 66.5227 170.364 60.464 175.058 54.832C179.751 49.2 185.767 44.208 193.106 39.856C196.519 37.808 199.932 36.3147 203.346 35.376C206.759 34.4373 210.044 33.968 213.202 33.968C218.748 33.968 223.356 35.2907 227.026 37.936C230.78 40.5813 232.658 44.08 232.658 48.432C232.658 51.8453 231.292 55.6427 228.562 59.824C225.831 63.92 221.223 68.2293 214.738 72.752C214.226 73.1787 213.671 73.392 213.074 73.392C212.562 73.392 212.306 73.136 212.306 72.624C212.306 72.112 212.562 71.6853 213.074 71.344C219.815 67.0773 224.594 62.9813 227.41 59.056C230.311 55.1307 231.762 51.7173 231.762 48.816C231.762 45.9147 230.567 43.6107 228.178 41.904C225.874 40.1973 222.716 39.344 218.706 39.344C215.89 39.344 212.732 39.856 209.234 40.88C205.82 41.904 202.236 43.5253 198.482 45.744C195.239 47.7067 191.74 50.4373 187.986 53.936C184.316 57.3493 180.69 61.36 177.105 65.968C173.522 70.4907 170.236 75.44 167.25 80.816C164.348 86.0213 161.618 91.7387 159.058 97.968C156.583 104.112 154.279 109.957 152.146 115.504C150.951 118.832 149.372 122.373 147.41 126.128C145.532 129.883 143.228 133.424 140.498 136.752C137.852 140.08 134.823 142.811 131.41 144.944C127.996 147.077 124.156 148.144 119.89 148.144C119.036 148.144 118.14 148.101 117.201 148.016C116.263 147.931 115.324 147.76 114.386 147.504C113.959 147.504 113.746 147.291 113.746 146.864C113.49 146.693 113.447 146.565 113.618 146.48H113.746C113.746 145.797 114.13 145.541 114.898 145.712C117.97 143.493 120.402 140.549 122.194 136.88C124.071 133.211 125.479 129.157 126.418 124.72C127.442 120.197 128.21 115.589 128.722 110.896C129.234 106.117 129.618 101.509 129.874 97.072C130.215 92.5493 130.599 88.4533 131.026 84.784C131.538 81.0293 132.178 77.488 132.946 74.16C133.799 70.832 134.908 67.9733 136.274 65.584C137.554 63.3653 139.303 61.0613 141.522 58.672C143.826 56.1973 146.3 54.2773 148.946 52.912H148.178C148.092 52.9973 147.922 53.04 147.666 53.04C147.58 53.04 147.495 53.04 147.41 53.04C147.324 52.9547 147.196 52.912 147.026 52.912H142.93C139.858 53.68 136.615 55.728 133.202 59.056C129.788 62.2987 126.332 66.5653 122.834 71.856C119.335 77.1467 115.794 83.12 112.21 89.776C108.711 96.3467 105.298 103.344 101.97 110.768L100.178 114.736C103.164 117.637 105.426 121.051 106.962 124.976C108.583 128.901 109.394 132.955 109.394 137.136C109.394 142 108.284 146.651 106.066 151.088C103.847 155.611 100.476 159.28 95.9535 162.096C91.5162 164.997 85.7988 166.448 78.8015 166.448C76.0708 166.448 73.4255 166.192 70.8655 165.68C68.3908 165.253 66.0442 164.613 63.8255 163.76C59.2175 167.344 54.3108 170.331 49.1055 172.72C43.9855 175.195 38.5242 176.901 32.7215 177.84C31.1002 178.096 29.3935 178.309 27.6015 178.48C25.8095 178.651 24.0602 178.736 22.3535 178.736ZM59.7295 159.792C64.2522 155.184 68.4335 150.064 72.2735 144.432C76.1135 138.885 79.6548 133.253 82.8975 127.536C86.1402 121.819 89.1268 116.485 91.8575 111.536C88.7855 110 85.1162 109.232 80.8495 109.232C78.0335 109.232 75.2602 110.085 72.5295 111.792C69.8842 113.499 67.7082 115.717 66.0015 118.448C64.2948 121.179 63.4415 124.165 63.4415 127.408C63.4415 129.029 63.7828 130.693 64.4655 132.4C65.1482 134.107 66.0015 135.557 67.0255 136.752C68.1348 137.947 69.2868 138.544 70.4815 138.544C71.2495 138.544 71.6335 138.885 71.6335 139.568C71.6335 140.165 71.2922 140.464 70.6095 140.464C68.8175 140.464 67.2388 139.739 65.8735 138.288C64.5082 136.752 63.4415 134.96 62.6735 132.912C61.9055 130.864 61.5215 129.029 61.5215 127.408C61.5215 123.824 62.4602 120.539 64.3375 117.552C66.2148 114.48 68.6468 112.048 71.6335 110.256C74.6202 108.379 77.6922 107.44 80.8495 107.44C83.0682 107.44 85.1588 107.653 87.1215 108.08C89.1695 108.507 91.0468 109.104 92.7535 109.872L95.5695 104.752C102.908 91.3547 109.991 80.2187 116.818 71.344C123.73 62.384 130.215 56.368 136.274 53.296C128.679 53.8933 121.042 55.1307 113.362 57.008C105.682 58.8853 98.3002 61.4027 91.2175 64.56C84.1348 67.7173 77.6068 71.6 71.6335 76.208C65.6602 80.816 60.4975 86.192 56.1455 92.336C51.8788 98.3947 48.7215 105.307 46.6735 113.072C45.3935 118.021 44.7535 122.928 44.7535 127.792C44.7535 134.619 46.0335 140.848 48.5935 146.48C51.1535 152.112 54.8655 156.549 59.7295 159.792ZM78.1615 165.04C84.5615 165.04 89.8522 163.632 94.0335 160.816C98.3002 158.085 101.458 154.544 103.506 150.192C105.639 145.84 106.706 141.275 106.706 136.496C106.706 132.827 106.066 129.285 104.786 125.872C103.591 122.373 101.756 119.301 99.2815 116.656C95.1002 125.445 90.1508 133.851 84.4335 141.872C78.8015 149.893 72.3588 156.805 65.1055 162.608C67.0682 163.376 69.1162 163.973 71.2495 164.4C73.4682 164.827 75.7722 165.04 78.1615 165.04Z",fill:"#817F80"})]})})}),rt("div",{className:`links  ${t&&"open"}`,children:[Y(es,{to:"about",spy:!1,smooth:"easeInOutQuad",offset:0,duration:400,onClick:()=>i(!t),children:"About"}),Y(es,{to:"projects",spy:!1,smooth:"easeInOutQuad",offset:0,duration:400,onClick:()=>i(!t),children:"Projects"}),Y(es,{to:"contact",spy:!1,smooth:"easeInOutQuad",offset:0,duration:400,onClick:()=>i(!t),children:"Contact"}),Y("a",{href:"https://github.com/Gozi1/portfolio/blob/main/resume.pdf",target:"_blank",children:" Resume"}),rt("ul",{children:[Y("li",{children:Y("a",{href:"https://www.instagram.com/haimgod_/",children:Y(YT,{})})}),Y("li",{children:Y("a",{href:"https://www.linkedin.com/in/ngozi-nwabiani-13652a217/",children:Y(ZT,{})})}),Y("li",{children:Y("a",{href:"https://github.com/Gozi1",children:Y(KT,{})})})]})]}),Y("div",{className:`Nav-toggle ${!t&&"open"}`,onClick:()=>i(!t),children:Y("div",{className:"bar"})})]})})})},JT=({children:n})=>rt("div",{className:"layout",children:[rt("div",{className:"page-wrap",children:[Y(QT,{}),Y("main",{className:"main-container",children:n}),Y(V3,{})]}),Y("footer",{children:rt("p",{children:["\xA9 All Rights Reserved by ",Y(es,{to:"home",activeClass:"",spy:!1,smooth:"easeInOutQuad",offset:0,duration:400,children:"Ngozi"})]})})]});function eb(n){return Yl({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"}}]})(n)}function lc(n){return rt("div",{className:"Project-container",children:[Y("div",{className:"Img-side-1st",style:{backgroundImage:`url(${n.img})`},children:"      "}),rt("div",{className:"Text-side-1st",children:[Y("h1",{children:n.title}),Y("p",{children:n.text}),n.techList?Y("ul",{className:"Tech-list",children:n.techList}):null,n.gitLink?Y("a",{href:n.gitLink,className:"Git-link",children:Y(eb,{})}):null]})]})}const tb=()=>rt("div",{className:"project",id:"projects",children:[rt("div",{className:"name",children:[Y("h1",{className:"hoverHeader",children:"P"}),Y("h1",{className:"hoverHeader",children:"r"}),Y("h1",{className:"hoverHeader",children:"o"}),Y("h1",{className:"hoverHeader",children:"j"}),Y("h1",{className:"hoverHeader",children:"e"}),Y("h1",{className:"hoverHeader",children:"c"}),Y("h1",{className:"hoverHeader ",children:"t"}),Y("h1",{className:"hoverHeader",children:"s"})]}),Y("h3",{children:"Here are some things I\u2019ve worked :"}),rt("div",{className:"mobile-column",children:[Y(lc,{img:"Project_assets/cargif.webp",text:"This project was an Autonomous RC Car that is controlled by a radio transmitter. It could be controlled by the remote control or self driven ,its distinguishing feature is that it maps out the room its placed in .",title:"Mapping Robot",techList:[Y("li",{children:"Processing"}),Y("li",{children:"NRF24L01"}),Y("li",{children:"HC-SR04"})]}),Y(lc,{img:"Project_assets/e-commerce.gif",text:" The objective of this project was to learn about Sanity and build a scalable E-commerce site , Which I did through Next js framework ,I used Stripe to handle the payments system and sFirebase to load/manage user data",title:"E-commerce site",techList:[Y("li",{children:"Next.js"}),Y("li",{children:"Firebase"}),Y("li",{children:"Stripe"}),Y("li",{children:"Sanity"})],gitLink:"https://github.com/Gozi1/e-commerce-example"}),Y(lc,{img:"Project_assets/clone_css.gif",text:["This project was a learning experience to see if I could replicate the visuals of this ",Y("a",{href:"https://dribbble.com/shots/18896349-SkillUp-Online-Training-Platform",children:"site "})," .My objective was to improve my css skills without inspecting the page."],title:"Css-Clone Website",techList:[Y("li",{children:"Node.js"}),Y("li",{children:"Html"}),Y("li",{children:"Css"})],gitLink:"https://github.com/Gozi1/Website-clone"})]})]}),nb=()=>Y("div",{className:"home",id:"home",children:rt("main",{children:[Y("p",{children:"Hi my name is"}),rt("div",{className:"name",children:[Y("h1",{className:"hoverHeader",children:" N"}),Y("h1",{className:"hoverHeader",children:" g"}),Y("h1",{className:"hoverHeader",children:" o"}),Y("h1",{className:"hoverHeader",children:" z"}),Y("h1",{className:"hoverHeader",children:" i"})]}),Y("p",{children:"I love creating anything and everything and I mainly do it through code. "}),Y("p",{children:"I\u2019m a computer engineer aspiring to design and build exceptional digital experiences. "})]})}),ib=()=>rt("div",{className:"about",id:"about",children:[rt("div",{className:"name",children:[Y("h1",{className:"hoverHeader",children:"A"}),Y("h1",{className:"hoverHeader",children:"b"}),Y("h1",{className:"hoverHeader",children:"o"}),Y("h1",{className:"hoverHeader",children:"u"}),Y("h1",{className:"hoverHeader",children:"t"}),Y("h1",{style:{marginLeft:"30PX"},className:"hoverHeader ",children:"m"}),Y("h1",{className:"hoverHeader",children:"e"})]}),Y("p",{children:"Hello! the name's Ngozi and I love creating and re-imagining things that live on the internet. I have finished my degree in computer engineering and lately I have taken a serious passion for web design/development into a career. My main focus when working on projects is how can I make this user-friendly but also unique.    "}),Y("p",{children:"I'm well-organised ,a problem solver with high attention to detail. I absolutely love learning new things,I read manga mainly the psychological and Isekai kinds. I am very Interested in the entire frontend spectrum because I will get to working on ambitious projects with like minded individuals "})]}),rb=()=>rt("div",{className:"contact",id:"contact",children:[rt("div",{className:"name",children:[Y("h1",{className:"hoverHeader",children:"C"}),Y("h1",{className:"hoverHeader",children:"o"}),Y("h1",{className:"hoverHeader",children:"n"}),Y("h1",{className:"hoverHeader",children:"t"}),Y("h1",{className:"hoverHeader",children:"a"}),Y("h1",{className:"hoverHeader ",children:"c"}),Y("h1",{className:"hoverHeader",children:"t"})]}),Y("p",{children:"I\u2019m interested in freelance opportunities . However, if you have any other requests or questions, please don\u2019t hesitate to use the form."}),rt("form",{id:"form",action:"https://api.slapform.com/splVOl1Zv",method:"post",children:[Y("input",{name:"name",type:"text",placeholder:"NAME"}),Y("br",{}),Y("input",{type:"email",name:"slap_replyto",placeholder:"E-MAIL"}),Y("br",{}),Y("input",{type:"text",name:"slap_subject",placeholder:"SUBJECT"}),Y("br",{}),Y("textarea",{type:"text",name:"message",placeholder:"MESSAGE"}),Y("br",{}),Y("button",{children:"GO!"})]})]});function sb(){return rt("div",{className:"appDiv",children:[Y(nb,{}),Y(ib,{}),Y(tb,{}),Y(rb,{})]})}const ob=uc.createRoot(document.getElementById("root"));ob.render(Y(JT,{children:Y(sb,{})}));
