(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ov(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cp={exports:{}},El={},kp={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ws=Symbol.for("react.element"),lv=Symbol.for("react.portal"),av=Symbol.for("react.fragment"),uv=Symbol.for("react.strict_mode"),cv=Symbol.for("react.profiler"),dv=Symbol.for("react.provider"),hv=Symbol.for("react.context"),fv=Symbol.for("react.forward_ref"),pv=Symbol.for("react.suspense"),mv=Symbol.for("react.memo"),gv=Symbol.for("react.lazy"),Xd=Symbol.iterator;function _v(t){return t===null||typeof t!="object"?null:(t=Xd&&t[Xd]||t["@@iterator"],typeof t=="function"?t:null)}var Ip={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tp=Object.assign,Np={};function ri(t,e,n){this.props=t,this.context=e,this.refs=Np,this.updater=n||Ip}ri.prototype.isReactComponent={};ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xp(){}xp.prototype=ri.prototype;function lc(t,e,n){this.props=t,this.context=e,this.refs=Np,this.updater=n||Ip}var ac=lc.prototype=new xp;ac.constructor=lc;Tp(ac,ri.prototype);ac.isPureReactComponent=!0;var Jd=Array.isArray,Rp=Object.prototype.hasOwnProperty,uc={current:null},Pp={key:!0,ref:!0,__self:!0,__source:!0};function Ap(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rp.call(e,r)&&!Pp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ws,type:t,key:s,ref:o,props:i,_owner:uc.current}}function yv(t,e){return{$$typeof:ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cc(t){return typeof t=="object"&&t!==null&&t.$$typeof===ws}function vv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zd=/\/+/g;function ta(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vv(""+t.key):e.toString(36)}function uo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ws:case lv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ta(o,0):r,Jd(i)?(n="",t!=null&&(n=t.replace(Zd,"$&/")+"/"),uo(i,e,n,"",function(u){return u})):i!=null&&(cc(i)&&(i=yv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ta(s,l);o+=uo(s,e,n,a,i)}else if(a=_v(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ta(s,l++),o+=uo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $s(t,e,n){if(t==null)return t;var r=[],i=0;return uo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ue={current:null},co={transition:null},Ev={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:co,ReactCurrentOwner:uc};function Op(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:$s,forEach:function(t,e,n){$s(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $s(t,function(){e++}),e},toArray:function(t){return $s(t,function(e){return e})||[]},only:function(t){if(!cc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$.Component=ri;$.Fragment=av;$.Profiler=cv;$.PureComponent=lc;$.StrictMode=uv;$.Suspense=pv;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev;$.act=Op;$.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=uc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Rp.call(e,a)&&!Pp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ws,type:t.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(t){return t={$$typeof:hv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dv,_context:t},t.Consumer=t};$.createElement=Ap;$.createFactory=function(t){var e=Ap.bind(null,t);return e.type=t,e};$.createRef=function(){return{current:null}};$.forwardRef=function(t){return{$$typeof:fv,render:t}};$.isValidElement=cc;$.lazy=function(t){return{$$typeof:gv,_payload:{_status:-1,_result:t},_init:wv}};$.memo=function(t,e){return{$$typeof:mv,type:t,compare:e===void 0?null:e}};$.startTransition=function(t){var e=co.transition;co.transition={};try{t()}finally{co.transition=e}};$.unstable_act=Op;$.useCallback=function(t,e){return Ue.current.useCallback(t,e)};$.useContext=function(t){return Ue.current.useContext(t)};$.useDebugValue=function(){};$.useDeferredValue=function(t){return Ue.current.useDeferredValue(t)};$.useEffect=function(t,e){return Ue.current.useEffect(t,e)};$.useId=function(){return Ue.current.useId()};$.useImperativeHandle=function(t,e,n){return Ue.current.useImperativeHandle(t,e,n)};$.useInsertionEffect=function(t,e){return Ue.current.useInsertionEffect(t,e)};$.useLayoutEffect=function(t,e){return Ue.current.useLayoutEffect(t,e)};$.useMemo=function(t,e){return Ue.current.useMemo(t,e)};$.useReducer=function(t,e,n){return Ue.current.useReducer(t,e,n)};$.useRef=function(t){return Ue.current.useRef(t)};$.useState=function(t){return Ue.current.useState(t)};$.useSyncExternalStore=function(t,e,n){return Ue.current.useSyncExternalStore(t,e,n)};$.useTransition=function(){return Ue.current.useTransition()};$.version="18.3.1";kp.exports=$;var M=kp.exports;const Sv=ov(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv=M,kv=Symbol.for("react.element"),Iv=Symbol.for("react.fragment"),Tv=Object.prototype.hasOwnProperty,Nv=Cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xv={key:!0,ref:!0,__self:!0,__source:!0};function Dp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Tv.call(e,r)&&!xv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kv,type:t,key:s,ref:o,props:i,_owner:Nv.current}}El.Fragment=Iv;El.jsx=Dp;El.jsxs=Dp;Cp.exports=El;var E=Cp.exports,Va={},Lp={exports:{}},Je={},bp={exports:{}},Mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,A){var b=I.length;I.push(A);e:for(;0<b;){var U=b-1>>>1,re=I[U];if(0<i(re,A))I[U]=A,I[b]=re,b=U;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var A=I[0],b=I.pop();if(b!==A){I[0]=b;e:for(var U=0,re=I.length,Ke=re>>>1;U<Ke;){var Oe=2*(U+1)-1,fi=I[Oe],H=Oe+1,jn=I[H];if(0>i(fi,b))H<re&&0>i(jn,fi)?(I[U]=jn,I[H]=b,U=H):(I[U]=fi,I[Oe]=b,U=Oe);else if(H<re&&0>i(jn,b))I[U]=jn,I[H]=b,U=H;else break e}}return A}function i(I,A){var b=I.sortIndex-A.sortIndex;return b!==0?b:I.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,v=!1,O=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=I)r(u),A.sortIndex=A.expirationTime,e(a,A);else break;A=n(u)}}function w(I){if(v=!1,m(I),!_)if(n(a)!==null)_=!0,ut(T);else{var A=n(u);A!==null&&Zt(w,A.startTime-I)}}function T(I,A){_=!1,v&&(v=!1,p(k),k=-1),g=!0;var b=h;try{for(m(A),c=n(a);c!==null&&(!(c.expirationTime>A)||I&&!je());){var U=c.callback;if(typeof U=="function"){c.callback=null,h=c.priorityLevel;var re=U(c.expirationTime<=A);A=t.unstable_now(),typeof re=="function"?c.callback=re:c===n(a)&&r(a),m(A)}else r(a);c=n(a)}if(c!==null)var Ke=!0;else{var Oe=n(u);Oe!==null&&Zt(w,Oe.startTime-A),Ke=!1}return Ke}finally{c=null,h=b,g=!1}}var x=!1,R=null,k=-1,ee=5,F=-1;function je(){return!(t.unstable_now()-F<ee)}function Ot(){if(R!==null){var I=t.unstable_now();F=I;var A=!0;try{A=R(!0,I)}finally{A?Ne():(x=!1,R=null)}}else x=!1}var Ne;if(typeof f=="function")Ne=function(){f(Ot)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,zs=V.port2;V.port1.onmessage=Ot,Ne=function(){zs.postMessage(null)}}else Ne=function(){O(Ot,0)};function ut(I){R=I,x||(x=!0,Ne())}function Zt(I,A){k=O(function(){I(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,ut(T))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var b=h;h=A;try{return I()}finally{h=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,A){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var b=h;h=I;try{return A()}finally{h=b}},t.unstable_scheduleCallback=function(I,A,b){var U=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?U+b:U):b=U,I){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=b+re,I={id:d++,callback:A,priorityLevel:I,startTime:b,expirationTime:re,sortIndex:-1},b>U?(I.sortIndex=b,e(u,I),n(a)===null&&I===n(u)&&(v?(p(k),k=-1):v=!0,Zt(w,b-U))):(I.sortIndex=re,e(a,I),_||g||(_=!0,ut(T))),I},t.unstable_shouldYield=je,t.unstable_wrapCallback=function(I){var A=h;return function(){var b=h;h=A;try{return I.apply(this,arguments)}finally{h=b}}}})(Mp);bp.exports=Mp;var Rv=bp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv=M,Xe=Rv;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,Gi={};function cr(t,e){Br(t,e),Br(t+"Capture",e)}function Br(t,e){for(Gi[t]=e,t=0;t<e.length;t++)Fp.add(e[t])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ha=Object.prototype.hasOwnProperty,Av=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eh={},th={};function Ov(t){return Ha.call(th,t)?!0:Ha.call(eh,t)?!1:Av.test(t)?th[t]=!0:(eh[t]=!0,!1)}function Dv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Lv(t,e,n,r){if(e===null||typeof e>"u"||Dv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ze(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var dc=/[\-:]([a-z])/g;function hc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dc,hc);Ie[e]=new ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dc,hc);Ie[e]=new ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dc,hc);Ie[e]=new ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new ze(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function fc(t,e,n,r){var i=Ie.hasOwnProperty(e)?Ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Lv(e,n,i,r)&&(n=null),r||i===null?Ov(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xt=Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bs=Symbol.for("react.element"),yr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),Ga=Symbol.for("react.profiler"),Up=Symbol.for("react.provider"),zp=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),Ka=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),gc=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),jp=Symbol.for("react.offscreen"),nh=Symbol.iterator;function mi(t){return t===null||typeof t!="object"?null:(t=nh&&t[nh]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,na;function Ni(t){if(na===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);na=e&&e[1]||""}return`
`+na+t}var ra=!1;function ia(t,e){if(!t||ra)return"";ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ra=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ni(t):""}function bv(t){switch(t.tag){case 5:return Ni(t.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 2:case 15:return t=ia(t.type,!1),t;case 11:return t=ia(t.type.render,!1),t;case 1:return t=ia(t.type,!0),t;default:return""}}function Ya(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vr:return"Fragment";case yr:return"Portal";case Ga:return"Profiler";case pc:return"StrictMode";case Ka:return"Suspense";case Qa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zp:return(t.displayName||"Context")+".Consumer";case Up:return(t._context.displayName||"Context")+".Provider";case mc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gc:return e=t.displayName||null,e!==null?e:Ya(t.type)||"Memo";case sn:e=t._payload,t=t._init;try{return Ya(t(e))}catch{}}return null}function Mv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ya(e);case 8:return e===pc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fv(t){var e=Wp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vs(t){t._valueTracker||(t._valueTracker=Fv(t))}function $p(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qa(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bp(t,e){e=e.checked,e!=null&&fc(t,"checked",e,!1)}function Xa(t,e){Bp(t,e);var n=Pn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ja(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ja(t,e.type,Pn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ja(t,e,n){(e!=="number"||xo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xi=Array.isArray;function Or(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Za(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(xi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pn(n)}}function Vp(t,e){var n=Pn(e.value),r=Pn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function oh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hs,Gp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hs=Hs||document.createElement("div"),Hs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ki(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uv=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(t){Uv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ai[e]=Ai[t]})});function Kp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ai.hasOwnProperty(t)&&Ai[t]?(""+e).trim():e+"px"}function Qp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zv=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(t,e){if(e){if(zv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function nu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function _c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var iu=null,Dr=null,Lr=null;function lh(t){if(t=Cs(t)){if(typeof iu!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Tl(e),iu(t.stateNode,t.type,e))}}function Yp(t){Dr?Lr?Lr.push(t):Lr=[t]:Dr=t}function qp(){if(Dr){var t=Dr,e=Lr;if(Lr=Dr=null,lh(t),e)for(t=0;t<e.length;t++)lh(e[t])}}function Xp(t,e){return t(e)}function Jp(){}var sa=!1;function Zp(t,e,n){if(sa)return t(e,n);sa=!0;try{return Xp(t,e,n)}finally{sa=!1,(Dr!==null||Lr!==null)&&(Jp(),qp())}}function Qi(t,e){var n=t.stateNode;if(n===null)return null;var r=Tl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var su=!1;if(Bt)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){su=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{su=!1}function jv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Oi=!1,Ro=null,Po=!1,ou=null,Wv={onError:function(t){Oi=!0,Ro=t}};function $v(t,e,n,r,i,s,o,l,a){Oi=!1,Ro=null,jv.apply(Wv,arguments)}function Bv(t,e,n,r,i,s,o,l,a){if($v.apply(this,arguments),Oi){if(Oi){var u=Ro;Oi=!1,Ro=null}else throw Error(S(198));Po||(Po=!0,ou=u)}}function dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function em(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ah(t){if(dr(t)!==t)throw Error(S(188))}function Vv(t){var e=t.alternate;if(!e){if(e=dr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ah(i),t;if(s===r)return ah(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function tm(t){return t=Vv(t),t!==null?nm(t):null}function nm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=nm(t);if(e!==null)return e;t=t.sibling}return null}var rm=Xe.unstable_scheduleCallback,uh=Xe.unstable_cancelCallback,Hv=Xe.unstable_shouldYield,Gv=Xe.unstable_requestPaint,de=Xe.unstable_now,Kv=Xe.unstable_getCurrentPriorityLevel,yc=Xe.unstable_ImmediatePriority,im=Xe.unstable_UserBlockingPriority,Ao=Xe.unstable_NormalPriority,Qv=Xe.unstable_LowPriority,sm=Xe.unstable_IdlePriority,Sl=null,Nt=null;function Yv(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Jv,qv=Math.log,Xv=Math.LN2;function Jv(t){return t>>>=0,t===0?32:31-(qv(t)/Xv|0)|0}var Gs=64,Ks=4194304;function Ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ri(l):(s&=o,s!==0&&(r=Ri(s)))}else o=n&~i,o!==0?r=Ri(o):s!==0&&(r=Ri(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yt(e),i=1<<n,r|=t[n],e&=~i;return r}function Zv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ew(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Zv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function lu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function om(){var t=Gs;return Gs<<=1,!(Gs&4194240)&&(Gs=64),t}function oa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Es(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yt(e),t[e]=n}function tw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Q=0;function lm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var am,wc,um,cm,dm,au=!1,Qs=[],gn=null,_n=null,yn=null,Yi=new Map,qi=new Map,ln=[],nw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(t,e){switch(t){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":Yi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(e.pointerId)}}function _i(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Cs(e),e!==null&&wc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function rw(t,e,n,r,i){switch(e){case"focusin":return gn=_i(gn,t,e,n,r,i),!0;case"dragenter":return _n=_i(_n,t,e,n,r,i),!0;case"mouseover":return yn=_i(yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Yi.set(s,_i(Yi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qi.set(s,_i(qi.get(s)||null,t,e,n,r,i)),!0}return!1}function hm(t){var e=Gn(t.target);if(e!==null){var n=dr(e);if(n!==null){if(e=n.tag,e===13){if(e=em(n),e!==null){t.blockedOn=e,dm(t.priority,function(){um(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ho(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ru=r,n.target.dispatchEvent(r),ru=null}else return e=Cs(n),e!==null&&wc(e),t.blockedOn=n,!1;e.shift()}return!0}function dh(t,e,n){ho(t)&&n.delete(e)}function iw(){au=!1,gn!==null&&ho(gn)&&(gn=null),_n!==null&&ho(_n)&&(_n=null),yn!==null&&ho(yn)&&(yn=null),Yi.forEach(dh),qi.forEach(dh)}function yi(t,e){t.blockedOn===e&&(t.blockedOn=null,au||(au=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,iw)))}function Xi(t){function e(i){return yi(i,t)}if(0<Qs.length){yi(Qs[0],t);for(var n=1;n<Qs.length;n++){var r=Qs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gn!==null&&yi(gn,t),_n!==null&&yi(_n,t),yn!==null&&yi(yn,t),Yi.forEach(e),qi.forEach(e),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)hm(n),n.blockedOn===null&&ln.shift()}var br=Xt.ReactCurrentBatchConfig,Do=!0;function sw(t,e,n,r){var i=Q,s=br.transition;br.transition=null;try{Q=1,Ec(t,e,n,r)}finally{Q=i,br.transition=s}}function ow(t,e,n,r){var i=Q,s=br.transition;br.transition=null;try{Q=4,Ec(t,e,n,r)}finally{Q=i,br.transition=s}}function Ec(t,e,n,r){if(Do){var i=uu(t,e,n,r);if(i===null)ga(t,e,r,Lo,n),ch(t,r);else if(rw(i,t,e,n,r))r.stopPropagation();else if(ch(t,r),e&4&&-1<nw.indexOf(t)){for(;i!==null;){var s=Cs(i);if(s!==null&&am(s),s=uu(t,e,n,r),s===null&&ga(t,e,r,Lo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ga(t,e,r,null,n)}}var Lo=null;function uu(t,e,n,r){if(Lo=null,t=_c(r),t=Gn(t),t!==null)if(e=dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=em(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lo=t,null}function fm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kv()){case yc:return 1;case im:return 4;case Ao:case Qv:return 16;case sm:return 536870912;default:return 16}default:return 16}}var fn=null,Sc=null,fo=null;function pm(){if(fo)return fo;var t,e=Sc,n=e.length,r,i="value"in fn?fn.value:fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fo=i.slice(t,1<r?1-r:void 0)}function po(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ys(){return!0}function hh(){return!1}function Ze(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ys:hh,this.isPropagationStopped=hh,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),e}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=Ze(ii),Ss=le({},ii,{view:0,detail:0}),lw=Ze(Ss),la,aa,vi,Cl=le({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vi&&(vi&&t.type==="mousemove"?(la=t.screenX-vi.screenX,aa=t.screenY-vi.screenY):aa=la=0,vi=t),la)},movementY:function(t){return"movementY"in t?t.movementY:aa}}),fh=Ze(Cl),aw=le({},Cl,{dataTransfer:0}),uw=Ze(aw),cw=le({},Ss,{relatedTarget:0}),ua=Ze(cw),dw=le({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),hw=Ze(dw),fw=le({},ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pw=Ze(fw),mw=le({},ii,{data:0}),ph=Ze(mw),gw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_w={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yw[t])?!!e[t]:!1}function kc(){return vw}var ww=le({},Ss,{key:function(t){if(t.key){var e=gw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=po(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_w[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(t){return t.type==="keypress"?po(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?po(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ew=Ze(ww),Sw=le({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=Ze(Sw),Cw=le({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),kw=Ze(Cw),Iw=le({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tw=Ze(Iw),Nw=le({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xw=Ze(Nw),Rw=[9,13,27,32],Ic=Bt&&"CompositionEvent"in window,Di=null;Bt&&"documentMode"in document&&(Di=document.documentMode);var Pw=Bt&&"TextEvent"in window&&!Di,mm=Bt&&(!Ic||Di&&8<Di&&11>=Di),gh=" ",_h=!1;function gm(t,e){switch(t){case"keyup":return Rw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _m(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function Aw(t,e){switch(t){case"compositionend":return _m(e);case"keypress":return e.which!==32?null:(_h=!0,gh);case"textInput":return t=e.data,t===gh&&_h?null:t;default:return null}}function Ow(t,e){if(wr)return t==="compositionend"||!Ic&&gm(t,e)?(t=pm(),fo=Sc=fn=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mm&&e.locale!=="ko"?null:e.data;default:return null}}var Dw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Dw[t.type]:e==="textarea"}function ym(t,e,n,r){Yp(r),e=bo(e,"onChange"),0<e.length&&(n=new Cc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Li=null,Ji=null;function Lw(t){Rm(t,0)}function kl(t){var e=Cr(t);if($p(e))return t}function bw(t,e){if(t==="change")return e}var vm=!1;if(Bt){var ca;if(Bt){var da="oninput"in document;if(!da){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),da=typeof vh.oninput=="function"}ca=da}else ca=!1;vm=ca&&(!document.documentMode||9<document.documentMode)}function wh(){Li&&(Li.detachEvent("onpropertychange",wm),Ji=Li=null)}function wm(t){if(t.propertyName==="value"&&kl(Ji)){var e=[];ym(e,Ji,t,_c(t)),Zp(Lw,e)}}function Mw(t,e,n){t==="focusin"?(wh(),Li=e,Ji=n,Li.attachEvent("onpropertychange",wm)):t==="focusout"&&wh()}function Fw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(Ji)}function Uw(t,e){if(t==="click")return kl(e)}function zw(t,e){if(t==="input"||t==="change")return kl(e)}function jw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Et=typeof Object.is=="function"?Object.is:jw;function Zi(t,e){if(Et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ha.call(e,i)||!Et(t[i],e[i]))return!1}return!0}function Eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sh(t,e){var n=Eh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eh(n)}}function Em(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Em(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sm(){for(var t=window,e=xo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xo(t.document)}return e}function Tc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ww(t){var e=Sm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Em(n.ownerDocument.documentElement,n)){if(r!==null&&Tc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sh(n,s);var o=Sh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $w=Bt&&"documentMode"in document&&11>=document.documentMode,Er=null,cu=null,bi=null,du=!1;function Ch(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||Er==null||Er!==xo(r)||(r=Er,"selectionStart"in r&&Tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&Zi(bi,r)||(bi=r,r=bo(cu,"onSelect"),0<r.length&&(e=new Cc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Er)))}function qs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Sr={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionend:qs("Transition","TransitionEnd")},ha={},Cm={};Bt&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Il(t){if(ha[t])return ha[t];if(!Sr[t])return t;var e=Sr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cm)return ha[t]=e[n];return t}var km=Il("animationend"),Im=Il("animationiteration"),Tm=Il("animationstart"),Nm=Il("transitionend"),xm=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(t,e){xm.set(t,e),cr(e,[t])}for(var fa=0;fa<kh.length;fa++){var pa=kh[fa],Bw=pa.toLowerCase(),Vw=pa[0].toUpperCase()+pa.slice(1);Mn(Bw,"on"+Vw)}Mn(km,"onAnimationEnd");Mn(Im,"onAnimationIteration");Mn(Tm,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Nm,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));function Ih(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Bv(r,e,void 0,t),t.currentTarget=null}function Rm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Ih(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Ih(i,l,u),s=a}}}if(Po)throw t=ou,Po=!1,ou=null,t}function te(t,e){var n=e[gu];n===void 0&&(n=e[gu]=new Set);var r=t+"__bubble";n.has(r)||(Pm(e,t,2,!1),n.add(r))}function ma(t,e,n){var r=0;e&&(r|=4),Pm(n,t,r,e)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function es(t){if(!t[Xs]){t[Xs]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(Hw.has(n)||ma(n,!1,t),ma(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xs]||(e[Xs]=!0,ma("selectionchange",!1,e))}}function Pm(t,e,n,r){switch(fm(e)){case 1:var i=sw;break;case 4:i=ow;break;default:i=Ec}n=i.bind(null,e,n,t),i=void 0,!su||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ga(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Gn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Zp(function(){var u=s,d=_c(n),c=[];e:{var h=xm.get(t);if(h!==void 0){var g=Cc,_=t;switch(t){case"keypress":if(po(n)===0)break e;case"keydown":case"keyup":g=Ew;break;case"focusin":_="focus",g=ua;break;case"focusout":_="blur",g=ua;break;case"beforeblur":case"afterblur":g=ua;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=kw;break;case km:case Im:case Tm:g=hw;break;case Nm:g=Tw;break;case"scroll":g=lw;break;case"wheel":g=xw;break;case"copy":case"cut":case"paste":g=pw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=mh}var v=(e&4)!==0,O=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Qi(f,p),w!=null&&v.push(ts(f,w,m)))),O)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==ru&&(_=n.relatedTarget||n.fromElement)&&(Gn(_)||_[Vt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Gn(_):null,_!==null&&(O=dr(_),_!==O||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=fh,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=mh,w="onPointerLeave",p="onPointerEnter",f="pointer"),O=g==null?h:Cr(g),m=_==null?h:Cr(_),h=new v(w,f+"leave",g,n,d),h.target=O,h.relatedTarget=m,w=null,Gn(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=O,w=v),O=w,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=gr(m))f++;for(m=0,w=p;w;w=gr(w))m++;for(;0<f-m;)v=gr(v),f--;for(;0<m-f;)p=gr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=gr(v),p=gr(p)}v=null}else v=null;g!==null&&Th(c,h,g,v,!1),_!==null&&O!==null&&Th(c,O,_,v,!0)}}e:{if(h=u?Cr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=bw;else if(yh(h))if(vm)T=zw;else{T=Fw;var x=Mw}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Uw);if(T&&(T=T(t,u))){ym(c,T,n,d);break e}x&&x(t,h,u),t==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&Ja(h,"number",h.value)}switch(x=u?Cr(u):window,t){case"focusin":(yh(x)||x.contentEditable==="true")&&(Er=x,cu=u,bi=null);break;case"focusout":bi=cu=Er=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Ch(c,n,d);break;case"selectionchange":if($w)break;case"keydown":case"keyup":Ch(c,n,d)}var R;if(Ic)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else wr?gm(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(mm&&n.locale!=="ko"&&(wr||k!=="onCompositionStart"?k==="onCompositionEnd"&&wr&&(R=pm()):(fn=d,Sc="value"in fn?fn.value:fn.textContent,wr=!0)),x=bo(u,k),0<x.length&&(k=new ph(k,t,null,n,d),c.push({event:k,listeners:x}),R?k.data=R:(R=_m(n),R!==null&&(k.data=R)))),(R=Pw?Aw(t,n):Ow(t,n))&&(u=bo(u,"onBeforeInput"),0<u.length&&(d=new ph("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=R))}Rm(c,e)})}function ts(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qi(t,n),s!=null&&r.unshift(ts(t,s,i)),s=Qi(t,e),s!=null&&r.push(ts(t,s,i))),t=t.return}return r}function gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Th(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Qi(n,s),a!=null&&o.unshift(ts(n,a,l))):i||(a=Qi(n,s),a!=null&&o.push(ts(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Gw=/\r\n?/g,Kw=/\u0000|\uFFFD/g;function Nh(t){return(typeof t=="string"?t:""+t).replace(Gw,`
`).replace(Kw,"")}function Js(t,e,n){if(e=Nh(e),Nh(t)!==e&&n)throw Error(S(425))}function Mo(){}var hu=null,fu=null;function pu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,Qw=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,Yw=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(t){return xh.resolve(null).then(t).catch(qw)}:mu;function qw(t){setTimeout(function(){throw t})}function _a(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xi(e)}function vn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var si=Math.random().toString(36).slice(2),Tt="__reactFiber$"+si,ns="__reactProps$"+si,Vt="__reactContainer$"+si,gu="__reactEvents$"+si,Xw="__reactListeners$"+si,Jw="__reactHandles$"+si;function Gn(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vt]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rh(t);t!==null;){if(n=t[Tt])return n;t=Rh(t)}return e}t=n,n=t.parentNode}return null}function Cs(t){return t=t[Tt]||t[Vt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Tl(t){return t[ns]||null}var _u=[],kr=-1;function Fn(t){return{current:t}}function ne(t){0>kr||(t.current=_u[kr],_u[kr]=null,kr--)}function Z(t,e){kr++,_u[kr]=t.current,t.current=e}var An={},Ae=Fn(An),Ve=Fn(!1),Zn=An;function Vr(t,e){var n=t.type.contextTypes;if(!n)return An;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function He(t){return t=t.childContextTypes,t!=null}function Fo(){ne(Ve),ne(Ae)}function Ph(t,e,n){if(Ae.current!==An)throw Error(S(168));Z(Ae,e),Z(Ve,n)}function Am(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,Mv(t)||"Unknown",i));return le({},n,r)}function Uo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||An,Zn=Ae.current,Z(Ae,t),Z(Ve,Ve.current),!0}function Ah(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Am(t,e,Zn),r.__reactInternalMemoizedMergedChildContext=t,ne(Ve),ne(Ae),Z(Ae,t)):ne(Ve),Z(Ve,n)}var bt=null,Nl=!1,ya=!1;function Om(t){bt===null?bt=[t]:bt.push(t)}function Zw(t){Nl=!0,Om(t)}function Un(){if(!ya&&bt!==null){ya=!0;var t=0,e=Q;try{var n=bt;for(Q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bt=null,Nl=!1}catch(i){throw bt!==null&&(bt=bt.slice(t+1)),rm(yc,Un),i}finally{Q=e,ya=!1}}return null}var Ir=[],Tr=0,zo=null,jo=0,et=[],tt=0,er=null,Mt=1,Ft="";function $n(t,e){Ir[Tr++]=jo,Ir[Tr++]=zo,zo=t,jo=e}function Dm(t,e,n){et[tt++]=Mt,et[tt++]=Ft,et[tt++]=er,er=t;var r=Mt;t=Ft;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var s=32-yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mt=1<<32-yt(e)+i|n<<i|r,Ft=s+t}else Mt=1<<s|n<<i|r,Ft=t}function Nc(t){t.return!==null&&($n(t,1),Dm(t,1,0))}function xc(t){for(;t===zo;)zo=Ir[--Tr],Ir[Tr]=null,jo=Ir[--Tr],Ir[Tr]=null;for(;t===er;)er=et[--tt],et[tt]=null,Ft=et[--tt],et[tt]=null,Mt=et[--tt],et[tt]=null}var qe=null,Ye=null,ie=!1,ft=null;function Lm(t,e){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Oh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qe=t,Ye=vn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qe=t,Ye=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=er!==null?{id:Mt,overflow:Ft}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qe=t,Ye=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vu(t){if(ie){var e=Ye;if(e){var n=e;if(!Oh(t,e)){if(yu(t))throw Error(S(418));e=vn(n.nextSibling);var r=qe;e&&Oh(t,e)?Lm(r,n):(t.flags=t.flags&-4097|2,ie=!1,qe=t)}}else{if(yu(t))throw Error(S(418));t.flags=t.flags&-4097|2,ie=!1,qe=t}}}function Dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qe=t}function Zs(t){if(t!==qe)return!1;if(!ie)return Dh(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pu(t.type,t.memoizedProps)),e&&(e=Ye)){if(yu(t))throw bm(),Error(S(418));for(;e;)Lm(t,e),e=vn(e.nextSibling)}if(Dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ye=vn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ye=null}}else Ye=qe?vn(t.stateNode.nextSibling):null;return!0}function bm(){for(var t=Ye;t;)t=vn(t.nextSibling)}function Hr(){Ye=qe=null,ie=!1}function Rc(t){ft===null?ft=[t]:ft.push(t)}var eE=Xt.ReactCurrentBatchConfig;function wi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function eo(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lh(t){var e=t._init;return e(t._payload)}function Mm(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Cn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,w){return f===null||f.tag!==6?(f=Ia(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,w){var T=m.type;return T===vr?d(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sn&&Lh(T)===f.type)?(w=i(f,m.props),w.ref=wi(p,f,m),w.return=p,w):(w=Eo(m.type,m.key,m.props,null,p.mode,w),w.ref=wi(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ta(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,w,T){return f===null||f.tag!==7?(f=Xn(m,p.mode,w,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ia(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bs:return m=Eo(f.type,f.key,f.props,null,p.mode,m),m.ref=wi(p,null,f),m.return=p,m;case yr:return f=Ta(f,p.mode,m),f.return=p,f;case sn:var w=f._init;return c(p,w(f._payload),m)}if(xi(f)||mi(f))return f=Xn(f,p.mode,m,null),f.return=p,f;eo(p,f)}return null}function h(p,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:l(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bs:return m.key===T?a(p,f,m,w):null;case yr:return m.key===T?u(p,f,m,w):null;case sn:return T=m._init,h(p,f,T(m._payload),w)}if(xi(m)||mi(m))return T!==null?null:d(p,f,m,w,null);eo(p,m)}return null}function g(p,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,l(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Bs:return p=p.get(w.key===null?m:w.key)||null,a(f,p,w,T);case yr:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,T);case sn:var x=w._init;return g(p,f,m,x(w._payload),T)}if(xi(w)||mi(w))return p=p.get(m)||null,d(f,p,w,T,null);eo(f,w)}return null}function _(p,f,m,w){for(var T=null,x=null,R=f,k=f=0,ee=null;R!==null&&k<m.length;k++){R.index>k?(ee=R,R=null):ee=R.sibling;var F=h(p,R,m[k],w);if(F===null){R===null&&(R=ee);break}t&&R&&F.alternate===null&&e(p,R),f=s(F,f,k),x===null?T=F:x.sibling=F,x=F,R=ee}if(k===m.length)return n(p,R),ie&&$n(p,k),T;if(R===null){for(;k<m.length;k++)R=c(p,m[k],w),R!==null&&(f=s(R,f,k),x===null?T=R:x.sibling=R,x=R);return ie&&$n(p,k),T}for(R=r(p,R);k<m.length;k++)ee=g(R,p,k,m[k],w),ee!==null&&(t&&ee.alternate!==null&&R.delete(ee.key===null?k:ee.key),f=s(ee,f,k),x===null?T=ee:x.sibling=ee,x=ee);return t&&R.forEach(function(je){return e(p,je)}),ie&&$n(p,k),T}function v(p,f,m,w){var T=mi(m);if(typeof T!="function")throw Error(S(150));if(m=T.call(m),m==null)throw Error(S(151));for(var x=T=null,R=f,k=f=0,ee=null,F=m.next();R!==null&&!F.done;k++,F=m.next()){R.index>k?(ee=R,R=null):ee=R.sibling;var je=h(p,R,F.value,w);if(je===null){R===null&&(R=ee);break}t&&R&&je.alternate===null&&e(p,R),f=s(je,f,k),x===null?T=je:x.sibling=je,x=je,R=ee}if(F.done)return n(p,R),ie&&$n(p,k),T;if(R===null){for(;!F.done;k++,F=m.next())F=c(p,F.value,w),F!==null&&(f=s(F,f,k),x===null?T=F:x.sibling=F,x=F);return ie&&$n(p,k),T}for(R=r(p,R);!F.done;k++,F=m.next())F=g(R,p,k,F.value,w),F!==null&&(t&&F.alternate!==null&&R.delete(F.key===null?k:F.key),f=s(F,f,k),x===null?T=F:x.sibling=F,x=F);return t&&R.forEach(function(Ot){return e(p,Ot)}),ie&&$n(p,k),T}function O(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===vr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Bs:e:{for(var T=m.key,x=f;x!==null;){if(x.key===T){if(T=m.type,T===vr){if(x.tag===7){n(p,x.sibling),f=i(x,m.props.children),f.return=p,p=f;break e}}else if(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sn&&Lh(T)===x.type){n(p,x.sibling),f=i(x,m.props),f.ref=wi(p,x,m),f.return=p,p=f;break e}n(p,x);break}else e(p,x);x=x.sibling}m.type===vr?(f=Xn(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Eo(m.type,m.key,m.props,null,p.mode,w),w.ref=wi(p,f,m),w.return=p,p=w)}return o(p);case yr:e:{for(x=m.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Ta(m,p.mode,w),f.return=p,p=f}return o(p);case sn:return x=m._init,O(p,f,x(m._payload),w)}if(xi(m))return _(p,f,m,w);if(mi(m))return v(p,f,m,w);eo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Ia(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return O}var Gr=Mm(!0),Fm=Mm(!1),Wo=Fn(null),$o=null,Nr=null,Pc=null;function Ac(){Pc=Nr=$o=null}function Oc(t){var e=Wo.current;ne(Wo),t._currentValue=e}function wu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mr(t,e){$o=t,Pc=Nr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function st(t){var e=t._currentValue;if(Pc!==t)if(t={context:t,memoizedValue:e,next:null},Nr===null){if($o===null)throw Error(S(308));Nr=t,$o.dependencies={lanes:0,firstContext:t}}else Nr=Nr.next=t;return e}var Kn=null;function Dc(t){Kn===null?Kn=[t]:Kn.push(t)}function Um(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Dc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ht(t,r)}function Ht(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var on=!1;function Lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ht(t,n)}return i=r.interleaved,i===null?(e.next=e,Dc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ht(t,n)}function mo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vc(t,n)}}function bh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bo(t,e,n,r){var i=t.updateQueue;on=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=le({},c,h);break e;case 2:on=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);nr|=o,t.lanes=o,t.memoizedState=c}}function Mh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var ks={},xt=Fn(ks),rs=Fn(ks),is=Fn(ks);function Qn(t){if(t===ks)throw Error(S(174));return t}function bc(t,e){switch(Z(is,e),Z(rs,t),Z(xt,ks),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:eu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=eu(e,t)}ne(xt),Z(xt,e)}function Kr(){ne(xt),ne(rs),ne(is)}function jm(t){Qn(is.current);var e=Qn(xt.current),n=eu(e,t.type);e!==n&&(Z(rs,t),Z(xt,n))}function Mc(t){rs.current===t&&(ne(xt),ne(rs))}var se=Fn(0);function Vo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var va=[];function Fc(){for(var t=0;t<va.length;t++)va[t]._workInProgressVersionPrimary=null;va.length=0}var go=Xt.ReactCurrentDispatcher,wa=Xt.ReactCurrentBatchConfig,tr=0,oe=null,fe=null,ve=null,Ho=!1,Mi=!1,ss=0,tE=0;function xe(){throw Error(S(321))}function Uc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Et(t[n],e[n]))return!1;return!0}function zc(t,e,n,r,i,s){if(tr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,go.current=t===null||t.memoizedState===null?sE:oE,t=n(r,i),Mi){s=0;do{if(Mi=!1,ss=0,25<=s)throw Error(S(301));s+=1,ve=fe=null,e.updateQueue=null,go.current=lE,t=n(r,i)}while(Mi)}if(go.current=Go,e=fe!==null&&fe.next!==null,tr=0,ve=fe=oe=null,Ho=!1,e)throw Error(S(300));return t}function jc(){var t=ss!==0;return ss=0,t}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?oe.memoizedState=ve=t:ve=ve.next=t,ve}function ot(){if(fe===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=fe.next;var e=ve===null?oe.memoizedState:ve.next;if(e!==null)ve=e,fe=t;else{if(t===null)throw Error(S(310));fe=t,t={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ve===null?oe.memoizedState=ve=t:ve=ve.next=t}return ve}function os(t,e){return typeof e=="function"?e(t):e}function Ea(t){var e=ot(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((tr&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,oe.lanes|=d,nr|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Et(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,nr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sa(t){var e=ot(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Et(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Wm(){}function $m(t,e){var n=oe,r=ot(),i=e(),s=!Et(r.memoizedState,i);if(s&&(r.memoizedState=i,$e=!0),r=r.queue,Wc(Hm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,ls(9,Vm.bind(null,n,r,i,e),void 0,null),Ee===null)throw Error(S(349));tr&30||Bm(n,e,i)}return i}function Bm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vm(t,e,n,r){e.value=n,e.getSnapshot=r,Gm(e)&&Km(t)}function Hm(t,e,n){return n(function(){Gm(e)&&Km(t)})}function Gm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Et(t,n)}catch{return!0}}function Km(t){var e=Ht(t,1);e!==null&&vt(e,t,1,-1)}function Fh(t){var e=It();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},e.queue=t,t=t.dispatch=iE.bind(null,oe,t),[e.memoizedState,t]}function ls(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Qm(){return ot().memoizedState}function _o(t,e,n,r){var i=It();oe.flags|=t,i.memoizedState=ls(1|e,n,void 0,r===void 0?null:r)}function xl(t,e,n,r){var i=ot();r=r===void 0?null:r;var s=void 0;if(fe!==null){var o=fe.memoizedState;if(s=o.destroy,r!==null&&Uc(r,o.deps)){i.memoizedState=ls(e,n,s,r);return}}oe.flags|=t,i.memoizedState=ls(1|e,n,s,r)}function Uh(t,e){return _o(8390656,8,t,e)}function Wc(t,e){return xl(2048,8,t,e)}function Ym(t,e){return xl(4,2,t,e)}function qm(t,e){return xl(4,4,t,e)}function Xm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jm(t,e,n){return n=n!=null?n.concat([t]):null,xl(4,4,Xm.bind(null,e,t),n)}function $c(){}function Zm(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function eg(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tg(t,e,n){return tr&21?(Et(n,e)||(n=om(),oe.lanes|=n,nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function nE(t,e){var n=Q;Q=n!==0&&4>n?n:4,t(!0);var r=wa.transition;wa.transition={};try{t(!1),e()}finally{Q=n,wa.transition=r}}function ng(){return ot().memoizedState}function rE(t,e,n){var r=Sn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rg(t))ig(e,n);else if(n=Um(t,e,n,r),n!==null){var i=be();vt(n,t,r,i),sg(n,e,r)}}function iE(t,e,n){var r=Sn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rg(t))ig(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Et(l,o)){var a=e.interleaved;a===null?(i.next=i,Dc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Um(t,e,i,r),n!==null&&(i=be(),vt(n,t,r,i),sg(n,e,r))}}function rg(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function ig(t,e){Mi=Ho=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vc(t,n)}}var Go={readContext:st,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},sE={readContext:st,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:st,useEffect:Uh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_o(4194308,4,Xm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _o(4194308,4,t,e)},useInsertionEffect:function(t,e){return _o(4,2,t,e)},useMemo:function(t,e){var n=It();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=It();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=rE.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:Fh,useDebugValue:$c,useDeferredValue:function(t){return It().memoizedState=t},useTransition:function(){var t=Fh(!1),e=t[0];return t=nE.bind(null,t[1]),It().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=It();if(ie){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Ee===null)throw Error(S(349));tr&30||Bm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Uh(Hm.bind(null,r,s,t),[t]),r.flags|=2048,ls(9,Vm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=It(),e=Ee.identifierPrefix;if(ie){var n=Ft,r=Mt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ss++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oE={readContext:st,useCallback:Zm,useContext:st,useEffect:Wc,useImperativeHandle:Jm,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:eg,useReducer:Ea,useRef:Qm,useState:function(){return Ea(os)},useDebugValue:$c,useDeferredValue:function(t){var e=ot();return tg(e,fe.memoizedState,t)},useTransition:function(){var t=Ea(os)[0],e=ot().memoizedState;return[t,e]},useMutableSource:Wm,useSyncExternalStore:$m,useId:ng,unstable_isNewReconciler:!1},lE={readContext:st,useCallback:Zm,useContext:st,useEffect:Wc,useImperativeHandle:Jm,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:eg,useReducer:Sa,useRef:Qm,useState:function(){return Sa(os)},useDebugValue:$c,useDeferredValue:function(t){var e=ot();return fe===null?e.memoizedState=t:tg(e,fe.memoizedState,t)},useTransition:function(){var t=Sa(os)[0],e=ot().memoizedState;return[t,e]},useMutableSource:Wm,useSyncExternalStore:$m,useId:ng,unstable_isNewReconciler:!1};function dt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Eu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rl={isMounted:function(t){return(t=t._reactInternals)?dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=be(),i=Sn(t),s=Wt(r,i);s.payload=e,n!=null&&(s.callback=n),e=wn(t,s,i),e!==null&&(vt(e,t,i,r),mo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=be(),i=Sn(t),s=Wt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wn(t,s,i),e!==null&&(vt(e,t,i,r),mo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=be(),r=Sn(t),i=Wt(n,r);i.tag=2,e!=null&&(i.callback=e),e=wn(t,i,r),e!==null&&(vt(e,t,r,n),mo(e,t,r))}};function zh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zi(n,r)||!Zi(i,s):!0}function og(t,e,n){var r=!1,i=An,s=e.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=He(e)?Zn:Ae.current,r=e.contextTypes,s=(r=r!=null)?Vr(t,i):An),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Rl.enqueueReplaceState(e,e.state,null)}function Su(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Lc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=He(e)?Zn:Ae.current,i.context=Vr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Eu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Rl.enqueueReplaceState(i,i.state,null),Bo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qr(t,e){try{var n="",r=e;do n+=bv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ca(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aE=typeof WeakMap=="function"?WeakMap:Map;function lg(t,e,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Qo||(Qo=!0,Du=r),Cu(t,e)},n}function ag(t,e,n){n=Wt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Cu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cu(t,e),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=SE.bind(null,t,e,n),e.then(t,t))}function $h(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wt(-1,1),e.tag=2,wn(n,e,1))),n.lanes|=1),t)}var uE=Xt.ReactCurrentOwner,$e=!1;function De(t,e,n,r){e.child=t===null?Fm(e,null,n,r):Gr(e,t.child,n,r)}function Vh(t,e,n,r,i){n=n.render;var s=e.ref;return Mr(e,i),r=zc(t,e,n,r,s,i),n=jc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ie&&n&&Nc(e),e.flags|=1,De(t,e,r,i),e.child)}function Hh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!qc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ug(t,e,s,r,i)):(t=Eo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zi,n(o,r)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=Cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function ug(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Zi(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,Gt(t,e,i)}return ku(t,e,n,r,i)}function cg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Rr,Qe),Qe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(Rr,Qe),Qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Rr,Qe),Qe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(Rr,Qe),Qe|=r;return De(t,e,i,n),e.child}function dg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ku(t,e,n,r,i){var s=He(n)?Zn:Ae.current;return s=Vr(e,s),Mr(e,i),n=zc(t,e,n,r,s,i),r=jc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ie&&r&&Nc(e),e.flags|=1,De(t,e,n,i),e.child)}function Gh(t,e,n,r,i){if(He(n)){var s=!0;Uo(e)}else s=!1;if(Mr(e,i),e.stateNode===null)yo(t,e),og(e,n,r),Su(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=He(n)?Zn:Ae.current,u=Vr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&jh(e,o,r,u),on=!1;var h=e.memoizedState;o.state=h,Bo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Ve.current||on?(typeof d=="function"&&(Eu(e,n,d,r),a=e.memoizedState),(l=on||zh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:dt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=st(a):(a=He(n)?Zn:Ae.current,a=Vr(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&jh(e,o,r,a),on=!1,h=e.memoizedState,o.state=h,Bo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Ve.current||on?(typeof g=="function"&&(Eu(e,n,g,r),_=e.memoizedState),(u=on||zh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Iu(t,e,n,r,s,i)}function Iu(t,e,n,r,i,s){dg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ah(e,n,!1),Gt(t,e,s);r=e.stateNode,uE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gr(e,t.child,null,s),e.child=Gr(e,null,l,s)):De(t,e,l,s),e.memoizedState=r.state,i&&Ah(e,n,!0),e.child}function hg(t){var e=t.stateNode;e.pendingContext?Ph(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ph(t,e.context,!1),bc(t,e.containerInfo)}function Kh(t,e,n,r,i){return Hr(),Rc(i),e.flags|=256,De(t,e,n,r),e.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function Nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function fg(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(se,i&1),t===null)return vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ol(o,r,0,null),t=Xn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nu(n),e.memoizedState=Tu,t):Bc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return cE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Cn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Cn(l,s):(s=Xn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tu,r}return s=t.child,t=s.sibling,r=Cn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bc(t,e){return e=Ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function to(t,e,n,r){return r!==null&&Rc(r),Gr(e,t.child,null,n),t=Bc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ca(Error(S(422))),to(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ol({mode:"visible",children:r.children},i,0,null),s=Xn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gr(e,t.child,null,o),e.child.memoizedState=Nu(o),e.memoizedState=Tu,s);if(!(e.mode&1))return to(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=Ca(s,r,void 0),to(t,e,o,r)}if(l=(o&t.childLanes)!==0,$e||l){if(r=Ee,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ht(t,i),vt(r,t,i,-1))}return Yc(),r=Ca(Error(S(421))),to(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=CE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ye=vn(i.nextSibling),qe=e,ie=!0,ft=null,t!==null&&(et[tt++]=Mt,et[tt++]=Ft,et[tt++]=er,Mt=t.id,Ft=t.overflow,er=e),e=Bc(e,r.children),e.flags|=4096,e)}function Qh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wu(t.return,e,n)}function ka(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function pg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(De(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qh(t,n,e);else if(t.tag===19)Qh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ka(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ka(e,!0,n,null,s);break;case"together":ka(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dE(t,e,n){switch(e.tag){case 3:hg(e),Hr();break;case 5:jm(e);break;case 1:He(e.type)&&Uo(e);break;case 4:bc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(Wo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?fg(t,e,n):(Z(se,se.current&1),t=Gt(t,e,n),t!==null?t.sibling:null);Z(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return pg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,cg(t,e,n)}return Gt(t,e,n)}var mg,xu,gg,_g;mg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xu=function(){};gg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qn(xt.current);var s=null;switch(n){case"input":i=qa(t,i),r=qa(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Za(t,i),r=Za(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Mo)}tu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Gi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Gi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&te("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_g=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ei(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Re(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hE(t,e,n){var r=e.pendingProps;switch(xc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(e),null;case 1:return He(e.type)&&Fo(),Re(e),null;case 3:return r=e.stateNode,Kr(),ne(Ve),ne(Ae),Fc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ft!==null&&(Mu(ft),ft=null))),xu(t,e),Re(e),null;case 5:Mc(e);var i=Qn(is.current);if(n=e.type,t!==null&&e.stateNode!=null)gg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Re(e),null}if(t=Qn(xt.current),Zs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tt]=e,r[ns]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Pi.length;i++)te(Pi[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":rh(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":sh(r,s),te("invalid",r)}tu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Js(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Js(r.textContent,l,t),i=["children",""+l]):Gi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Vs(r),ih(r,s,!0);break;case"textarea":Vs(r),oh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Mo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[ns]=r,mg(t,e,!1,!1),e.stateNode=t;e:{switch(o=nu(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Pi.length;i++)te(Pi[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":rh(t,r),i=qa(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",t);break;case"textarea":sh(t,r),i=Za(t,r),te("invalid",t);break;default:i=r}tu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Qp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Gp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ki(t,a):typeof a=="number"&&Ki(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&te("scroll",t):a!=null&&fc(t,s,a,o))}switch(n){case"input":Vs(t),ih(t,r,!1);break;case"textarea":Vs(t),oh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Or(t,!!r.multiple,s,!1):r.defaultValue!=null&&Or(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Re(e),null;case 6:if(t&&e.stateNode!=null)_g(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Qn(is.current),Qn(xt.current),Zs(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(s=r.nodeValue!==n)&&(t=qe,t!==null))switch(t.tag){case 3:Js(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Js(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return Re(e),null;case 13:if(ne(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&Ye!==null&&e.mode&1&&!(e.flags&128))bm(),Hr(),e.flags|=98560,s=!1;else if(s=Zs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Tt]=e}else Hr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Re(e),s=!1}else ft!==null&&(Mu(ft),ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?ge===0&&(ge=3):Yc())),e.updateQueue!==null&&(e.flags|=4),Re(e),null);case 4:return Kr(),xu(t,e),t===null&&es(e.stateNode.containerInfo),Re(e),null;case 10:return Oc(e.type._context),Re(e),null;case 17:return He(e.type)&&Fo(),Re(e),null;case 19:if(ne(se),s=e.memoizedState,s===null)return Re(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ei(s,!1);else{if(ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vo(t),o!==null){for(e.flags|=128,Ei(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>Yr&&(e.flags|=128,r=!0,Ei(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ei(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Re(e),null}else 2*de()-s.renderingStartTime>Yr&&n!==1073741824&&(e.flags|=128,r=!0,Ei(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=se.current,Z(se,r?n&1|2:n&1),e):(Re(e),null);case 22:case 23:return Qc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Qe&1073741824&&(Re(e),e.subtreeFlags&6&&(e.flags|=8192)):Re(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function fE(t,e){switch(xc(e),e.tag){case 1:return He(e.type)&&Fo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Kr(),ne(Ve),ne(Ae),Fc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mc(e),null;case 13:if(ne(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Hr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(se),null;case 4:return Kr(),null;case 10:return Oc(e.type._context),null;case 22:case 23:return Qc(),null;case 24:return null;default:return null}}var no=!1,Pe=!1,pE=typeof WeakSet=="function"?WeakSet:Set,N=null;function xr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function Ru(t,e,n){try{n()}catch(r){ae(t,e,r)}}var Yh=!1;function mE(t,e){if(hu=Do,t=Sm(),Tc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(fu={focusedElem:t,selectionRange:n},Do=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,O=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:dt(e.type,v),O);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ae(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return _=Yh,Yh=!1,_}function Fi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ru(e,n,s)}i=i.next}while(i!==r)}}function Pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yg(t){var e=t.alternate;e!==null&&(t.alternate=null,yg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[ns],delete e[gu],delete e[Xw],delete e[Jw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vg(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mo));else if(r!==4&&(t=t.child,t!==null))for(Au(t,e,n),t=t.sibling;t!==null;)Au(t,e,n),t=t.sibling}function Ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ou(t,e,n),t=t.sibling;t!==null;)Ou(t,e,n),t=t.sibling}var Se=null,ht=!1;function nn(t,e,n){for(n=n.child;n!==null;)wg(t,e,n),n=n.sibling}function wg(t,e,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:Pe||xr(n,e);case 6:var r=Se,i=ht;Se=null,nn(t,e,n),Se=r,ht=i,Se!==null&&(ht?(t=Se,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ht?(t=Se,n=n.stateNode,t.nodeType===8?_a(t.parentNode,n):t.nodeType===1&&_a(t,n),Xi(t)):_a(Se,n.stateNode));break;case 4:r=Se,i=ht,Se=n.stateNode.containerInfo,ht=!0,nn(t,e,n),Se=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ru(n,e,o),i=i.next}while(i!==r)}nn(t,e,n);break;case 1:if(!Pe&&(xr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ae(n,e,l)}nn(t,e,n);break;case 21:nn(t,e,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,nn(t,e,n),Pe=r):nn(t,e,n);break;default:nn(t,e,n)}}function Xh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pE),e.forEach(function(r){var i=kE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ct(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,ht=!1;break e;case 3:Se=l.stateNode.containerInfo,ht=!0;break e;case 4:Se=l.stateNode.containerInfo,ht=!0;break e}l=l.return}if(Se===null)throw Error(S(160));wg(s,o,i),Se=null,ht=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Eg(e,t),e=e.sibling}function Eg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ct(e,t),Ct(t),r&4){try{Fi(3,t,t.return),Pl(3,t)}catch(v){ae(t,t.return,v)}try{Fi(5,t,t.return)}catch(v){ae(t,t.return,v)}}break;case 1:ct(e,t),Ct(t),r&512&&n!==null&&xr(n,n.return);break;case 5:if(ct(e,t),Ct(t),r&512&&n!==null&&xr(n,n.return),t.flags&32){var i=t.stateNode;try{Ki(i,"")}catch(v){ae(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Bp(i,s),nu(l,o);var u=nu(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Qp(i,c):d==="dangerouslySetInnerHTML"?Gp(i,c):d==="children"?Ki(i,c):fc(i,d,c,u)}switch(l){case"input":Xa(i,s);break;case"textarea":Vp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Or(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Or(i,!!s.multiple,s.defaultValue,!0):Or(i,!!s.multiple,s.multiple?[]:"",!1))}i[ns]=s}catch(v){ae(t,t.return,v)}}break;case 6:if(ct(e,t),Ct(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ae(t,t.return,v)}}break;case 3:if(ct(e,t),Ct(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xi(e.containerInfo)}catch(v){ae(t,t.return,v)}break;case 4:ct(e,t),Ct(t);break;case 13:ct(e,t),Ct(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gc=de())),r&4&&Xh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Pe=(u=Pe)||d,ct(e,t),Pe=u):ct(e,t),Ct(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(N=t,d=t.child;d!==null;){for(c=N=d;N!==null;){switch(h=N,g=h.child,h.tag){case 0:case 11:case 14:case 15:Fi(4,h,h.return);break;case 1:xr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:xr(h,h.return);break;case 22:if(h.memoizedState!==null){Zh(c);continue}}g!==null?(g.return=h,N=g):Zh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Kp("display",o))}catch(v){ae(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){ae(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ct(e,t),Ct(t),r&4&&Xh(t);break;case 21:break;default:ct(e,t),Ct(t)}}function Ct(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vg(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ki(i,""),r.flags&=-33);var s=qh(t);Ou(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=qh(t);Au(t,l,o);break;default:throw Error(S(161))}}catch(a){ae(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gE(t,e,n){N=t,Sg(t)}function Sg(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||no;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Pe;l=no;var u=Pe;if(no=o,(Pe=a)&&!u)for(N=i;N!==null;)o=N,a=o.child,o.tag===22&&o.memoizedState!==null?ef(i):a!==null?(a.return=o,N=a):ef(i);for(;s!==null;)N=s,Sg(s),s=s.sibling;N=i,no=l,Pe=u}Jh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Jh(t)}}function Jh(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pe||Pl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Xi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Pe||e.flags&512&&Pu(e)}catch(h){ae(e,e.return,h)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Zh(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function ef(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pl(4,e)}catch(a){ae(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ae(e,i,a)}}var s=e.return;try{Pu(e)}catch(a){ae(e,s,a)}break;case 5:var o=e.return;try{Pu(e)}catch(a){ae(e,o,a)}}}catch(a){ae(e,e.return,a)}if(e===t){N=null;break}var l=e.sibling;if(l!==null){l.return=e.return,N=l;break}N=e.return}}var _E=Math.ceil,Ko=Xt.ReactCurrentDispatcher,Vc=Xt.ReactCurrentOwner,it=Xt.ReactCurrentBatchConfig,G=0,Ee=null,he=null,ke=0,Qe=0,Rr=Fn(0),ge=0,as=null,nr=0,Al=0,Hc=0,Ui=null,We=null,Gc=0,Yr=1/0,Lt=null,Qo=!1,Du=null,En=null,ro=!1,pn=null,Yo=0,zi=0,Lu=null,vo=-1,wo=0;function be(){return G&6?de():vo!==-1?vo:vo=de()}function Sn(t){return t.mode&1?G&2&&ke!==0?ke&-ke:eE.transition!==null?(wo===0&&(wo=om()),wo):(t=Q,t!==0||(t=window.event,t=t===void 0?16:fm(t.type)),t):1}function vt(t,e,n,r){if(50<zi)throw zi=0,Lu=null,Error(S(185));Es(t,n,r),(!(G&2)||t!==Ee)&&(t===Ee&&(!(G&2)&&(Al|=n),ge===4&&an(t,ke)),Ge(t,r),n===1&&G===0&&!(e.mode&1)&&(Yr=de()+500,Nl&&Un()))}function Ge(t,e){var n=t.callbackNode;ew(t,e);var r=Oo(t,t===Ee?ke:0);if(r===0)n!==null&&uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&uh(n),e===1)t.tag===0?Zw(tf.bind(null,t)):Om(tf.bind(null,t)),Yw(function(){!(G&6)&&Un()}),n=null;else{switch(lm(r)){case 1:n=yc;break;case 4:n=im;break;case 16:n=Ao;break;case 536870912:n=sm;break;default:n=Ao}n=Pg(n,Cg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cg(t,e){if(vo=-1,wo=0,G&6)throw Error(S(327));var n=t.callbackNode;if(Fr()&&t.callbackNode!==n)return null;var r=Oo(t,t===Ee?ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qo(t,r);else{e=r;var i=G;G|=2;var s=Ig();(Ee!==t||ke!==e)&&(Lt=null,Yr=de()+500,qn(t,e));do try{wE();break}catch(l){kg(t,l)}while(!0);Ac(),Ko.current=s,G=i,he!==null?e=0:(Ee=null,ke=0,e=ge)}if(e!==0){if(e===2&&(i=lu(t),i!==0&&(r=i,e=bu(t,i))),e===1)throw n=as,qn(t,0),an(t,r),Ge(t,de()),n;if(e===6)an(t,r);else{if(i=t.current.alternate,!(r&30)&&!yE(i)&&(e=qo(t,r),e===2&&(s=lu(t),s!==0&&(r=s,e=bu(t,s))),e===1))throw n=as,qn(t,0),an(t,r),Ge(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Bn(t,We,Lt);break;case 3:if(an(t,r),(r&130023424)===r&&(e=Gc+500-de(),10<e)){if(Oo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mu(Bn.bind(null,t,We,Lt),e);break}Bn(t,We,Lt);break;case 4:if(an(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_E(r/1960))-r,10<r){t.timeoutHandle=mu(Bn.bind(null,t,We,Lt),r);break}Bn(t,We,Lt);break;case 5:Bn(t,We,Lt);break;default:throw Error(S(329))}}}return Ge(t,de()),t.callbackNode===n?Cg.bind(null,t):null}function bu(t,e){var n=Ui;return t.current.memoizedState.isDehydrated&&(qn(t,e).flags|=256),t=qo(t,e),t!==2&&(e=We,We=n,e!==null&&Mu(e)),t}function Mu(t){We===null?We=t:We.push.apply(We,t)}function yE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Et(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function an(t,e){for(e&=~Hc,e&=~Al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yt(e),r=1<<n;t[n]=-1,e&=~r}}function tf(t){if(G&6)throw Error(S(327));Fr();var e=Oo(t,0);if(!(e&1))return Ge(t,de()),null;var n=qo(t,e);if(t.tag!==0&&n===2){var r=lu(t);r!==0&&(e=r,n=bu(t,r))}if(n===1)throw n=as,qn(t,0),an(t,e),Ge(t,de()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bn(t,We,Lt),Ge(t,de()),null}function Kc(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(Yr=de()+500,Nl&&Un())}}function rr(t){pn!==null&&pn.tag===0&&!(G&6)&&Fr();var e=G;G|=1;var n=it.transition,r=Q;try{if(it.transition=null,Q=1,t)return t()}finally{Q=r,it.transition=n,G=e,!(G&6)&&Un()}}function Qc(){Qe=Rr.current,ne(Rr)}function qn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Qw(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fo();break;case 3:Kr(),ne(Ve),ne(Ae),Fc();break;case 5:Mc(r);break;case 4:Kr();break;case 13:ne(se);break;case 19:ne(se);break;case 10:Oc(r.type._context);break;case 22:case 23:Qc()}n=n.return}if(Ee=t,he=t=Cn(t.current,null),ke=Qe=e,ge=0,as=null,Hc=Al=nr=0,We=Ui=null,Kn!==null){for(e=0;e<Kn.length;e++)if(n=Kn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kn=null}return t}function kg(t,e){do{var n=he;try{if(Ac(),go.current=Go,Ho){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ho=!1}if(tr=0,ve=fe=oe=null,Mi=!1,ss=0,Vc.current=null,n===null||n.return===null){ge=1,as=e,he=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ke,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=$h(o);if(g!==null){g.flags&=-257,Bh(g,o,l,s,e),g.mode&1&&Wh(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){Wh(s,u,e),Yc();break e}a=Error(S(426))}}else if(ie&&l.mode&1){var O=$h(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Bh(O,o,l,s,e),Rc(Qr(a,l));break e}}s=a=Qr(a,l),ge!==4&&(ge=2),Ui===null?Ui=[s]:Ui.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=lg(s,a,e);bh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(En===null||!En.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=ag(s,l,e);bh(s,w);break e}}s=s.return}while(s!==null)}Ng(n)}catch(T){e=T,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function Ig(){var t=Ko.current;return Ko.current=Go,t===null?Go:t}function Yc(){(ge===0||ge===3||ge===2)&&(ge=4),Ee===null||!(nr&268435455)&&!(Al&268435455)||an(Ee,ke)}function qo(t,e){var n=G;G|=2;var r=Ig();(Ee!==t||ke!==e)&&(Lt=null,qn(t,e));do try{vE();break}catch(i){kg(t,i)}while(!0);if(Ac(),G=n,Ko.current=r,he!==null)throw Error(S(261));return Ee=null,ke=0,ge}function vE(){for(;he!==null;)Tg(he)}function wE(){for(;he!==null&&!Hv();)Tg(he)}function Tg(t){var e=Rg(t.alternate,t,Qe);t.memoizedProps=t.pendingProps,e===null?Ng(t):he=e,Vc.current=null}function Ng(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fE(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,he=null;return}}else if(n=hE(n,e,Qe),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);ge===0&&(ge=5)}function Bn(t,e,n){var r=Q,i=it.transition;try{it.transition=null,Q=1,EE(t,e,n,r)}finally{it.transition=i,Q=r}return null}function EE(t,e,n,r){do Fr();while(pn!==null);if(G&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tw(t,s),t===Ee&&(he=Ee=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,Pg(Ao,function(){return Fr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=it.transition,it.transition=null;var o=Q;Q=1;var l=G;G|=4,Vc.current=null,mE(t,n),Eg(n,t),Ww(fu),Do=!!hu,fu=hu=null,t.current=n,gE(n),Gv(),G=l,Q=o,it.transition=s}else t.current=n;if(ro&&(ro=!1,pn=t,Yo=i),s=t.pendingLanes,s===0&&(En=null),Yv(n.stateNode),Ge(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qo)throw Qo=!1,t=Du,Du=null,t;return Yo&1&&t.tag!==0&&Fr(),s=t.pendingLanes,s&1?t===Lu?zi++:(zi=0,Lu=t):zi=0,Un(),null}function Fr(){if(pn!==null){var t=lm(Yo),e=it.transition,n=Q;try{if(it.transition=null,Q=16>t?16:t,pn===null)var r=!1;else{if(t=pn,pn=null,Yo=0,G&6)throw Error(S(331));var i=G;for(G|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Fi(8,d,s)}var c=d.child;if(c!==null)c.return=d,N=c;else for(;N!==null;){d=N;var h=d.sibling,g=d.return;if(yg(d),d===u){N=null;break}if(h!==null){h.return=g,N=h;break}N=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var O=v.sibling;v.sibling=null,v=O}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,N=m;else e:for(o=f;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pl(9,l)}}catch(T){ae(l,l.return,T)}if(l===o){N=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,N=w;break e}N=l.return}}if(G=i,Un(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Sl,t)}catch{}r=!0}return r}finally{Q=n,it.transition=e}}return!1}function nf(t,e,n){e=Qr(n,e),e=lg(t,e,1),t=wn(t,e,1),e=be(),t!==null&&(Es(t,1,e),Ge(t,e))}function ae(t,e,n){if(t.tag===3)nf(t,t,n);else for(;e!==null;){if(e.tag===3){nf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){t=Qr(n,t),t=ag(e,t,1),e=wn(e,t,1),t=be(),e!==null&&(Es(e,1,t),Ge(e,t));break}}e=e.return}}function SE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=be(),t.pingedLanes|=t.suspendedLanes&n,Ee===t&&(ke&n)===n&&(ge===4||ge===3&&(ke&130023424)===ke&&500>de()-Gc?qn(t,0):Hc|=n),Ge(t,e)}function xg(t,e){e===0&&(t.mode&1?(e=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):e=1);var n=be();t=Ht(t,e),t!==null&&(Es(t,e,n),Ge(t,n))}function CE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xg(t,n)}function kE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),xg(t,n)}var Rg;Rg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ve.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,dE(t,e,n);$e=!!(t.flags&131072)}else $e=!1,ie&&e.flags&1048576&&Dm(e,jo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yo(t,e),t=e.pendingProps;var i=Vr(e,Ae.current);Mr(e,n),i=zc(null,e,r,t,i,n);var s=jc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,He(r)?(s=!0,Uo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lc(e),i.updater=Rl,e.stateNode=i,i._reactInternals=e,Su(e,r,t,n),e=Iu(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Nc(e),De(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TE(r),t=dt(r,t),i){case 0:e=ku(null,e,r,t,n);break e;case 1:e=Gh(null,e,r,t,n);break e;case 11:e=Vh(null,e,r,t,n);break e;case 14:e=Hh(null,e,r,dt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),ku(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),Gh(t,e,r,i,n);case 3:e:{if(hg(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,zm(t,e),Bo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qr(Error(S(423)),e),e=Kh(t,e,r,n,i);break e}else if(r!==i){i=Qr(Error(S(424)),e),e=Kh(t,e,r,n,i);break e}else for(Ye=vn(e.stateNode.containerInfo.firstChild),qe=e,ie=!0,ft=null,n=Fm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hr(),r===i){e=Gt(t,e,n);break e}De(t,e,r,n)}e=e.child}return e;case 5:return jm(e),t===null&&vu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pu(r,i)?o=null:s!==null&&pu(r,s)&&(e.flags|=32),dg(t,e),De(t,e,o,n),e.child;case 6:return t===null&&vu(e),null;case 13:return fg(t,e,n);case 4:return bc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gr(e,null,r,n):De(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),Vh(t,e,r,i,n);case 7:return De(t,e,e.pendingProps,n),e.child;case 8:return De(t,e,e.pendingProps.children,n),e.child;case 12:return De(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(Wo,r._currentValue),r._currentValue=o,s!==null)if(Et(s.value,o)){if(s.children===i.children&&!Ve.current){e=Gt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Wt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),wu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}De(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mr(e,n),i=st(i),r=r(i),e.flags|=1,De(t,e,r,n),e.child;case 14:return r=e.type,i=dt(r,e.pendingProps),i=dt(r.type,i),Hh(t,e,r,i,n);case 15:return ug(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),yo(t,e),e.tag=1,He(r)?(t=!0,Uo(e)):t=!1,Mr(e,n),og(e,r,i),Su(e,r,i,n),Iu(null,e,r,!0,t,n);case 19:return pg(t,e,n);case 22:return cg(t,e,n)}throw Error(S(156,e.tag))};function Pg(t,e){return rm(t,e)}function IE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(t,e,n,r){return new IE(t,e,n,r)}function qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TE(t){if(typeof t=="function")return qc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mc)return 11;if(t===gc)return 14}return 2}function Cn(t,e){var n=t.alternate;return n===null?(n=nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Eo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")qc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vr:return Xn(n.children,i,s,e);case pc:o=8,i|=8;break;case Ga:return t=nt(12,n,e,i|2),t.elementType=Ga,t.lanes=s,t;case Ka:return t=nt(13,n,e,i),t.elementType=Ka,t.lanes=s,t;case Qa:return t=nt(19,n,e,i),t.elementType=Qa,t.lanes=s,t;case jp:return Ol(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Up:o=10;break e;case zp:o=9;break e;case mc:o=11;break e;case gc:o=14;break e;case sn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xn(t,e,n,r){return t=nt(7,t,r,e),t.lanes=n,t}function Ol(t,e,n,r){return t=nt(22,t,r,e),t.elementType=jp,t.lanes=n,t.stateNode={isHidden:!1},t}function Ia(t,e,n){return t=nt(6,t,null,e),t.lanes=n,t}function Ta(t,e,n){return e=nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function NE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xc(t,e,n,r,i,s,o,l,a){return t=new NE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(s),t}function xE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ag(t){if(!t)return An;t=t._reactInternals;e:{if(dr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(He(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(He(n))return Am(t,n,e)}return e}function Og(t,e,n,r,i,s,o,l,a){return t=Xc(n,r,!0,t,i,s,o,l,a),t.context=Ag(null),n=t.current,r=be(),i=Sn(n),s=Wt(r,i),s.callback=e??null,wn(n,s,i),t.current.lanes=i,Es(t,i,r),Ge(t,r),t}function Dl(t,e,n,r){var i=e.current,s=be(),o=Sn(i);return n=Ag(n),e.context===null?e.context=n:e.pendingContext=n,e=Wt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wn(i,e,o),t!==null&&(vt(t,i,o,s),mo(t,i,o)),o}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jc(t,e){rf(t,e),(t=t.alternate)&&rf(t,e)}function RE(){return null}var Dg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zc(t){this._internalRoot=t}Ll.prototype.render=Zc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Dl(t,e,null,null)};Ll.prototype.unmount=Zc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rr(function(){Dl(null,t,null,null)}),e[Vt]=null}};function Ll(t){this._internalRoot=t}Ll.prototype.unstable_scheduleHydration=function(t){if(t){var e=cm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ln.length&&e!==0&&e<ln[n].priority;n++);ln.splice(n,0,t),n===0&&hm(t)}};function ed(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sf(){}function PE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Xo(o);s.call(u)}}var o=Og(e,r,t,0,null,!1,!1,"",sf);return t._reactRootContainer=o,t[Vt]=o.current,es(t.nodeType===8?t.parentNode:t),rr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Xo(a);l.call(u)}}var a=Xc(t,0,!1,null,null,!1,!1,"",sf);return t._reactRootContainer=a,t[Vt]=a.current,es(t.nodeType===8?t.parentNode:t),rr(function(){Dl(e,a,n,r)}),a}function Ml(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Xo(o);l.call(a)}}Dl(e,o,t,i)}else o=PE(n,e,t,i,r);return Xo(o)}am=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ri(e.pendingLanes);n!==0&&(vc(e,n|1),Ge(e,de()),!(G&6)&&(Yr=de()+500,Un()))}break;case 13:rr(function(){var r=Ht(t,1);if(r!==null){var i=be();vt(r,t,1,i)}}),Jc(t,1)}};wc=function(t){if(t.tag===13){var e=Ht(t,134217728);if(e!==null){var n=be();vt(e,t,134217728,n)}Jc(t,134217728)}};um=function(t){if(t.tag===13){var e=Sn(t),n=Ht(t,e);if(n!==null){var r=be();vt(n,t,e,r)}Jc(t,e)}};cm=function(){return Q};dm=function(t,e){var n=Q;try{return Q=t,e()}finally{Q=n}};iu=function(t,e,n){switch(e){case"input":if(Xa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Tl(r);if(!i)throw Error(S(90));$p(r),Xa(r,i)}}}break;case"textarea":Vp(t,n);break;case"select":e=n.value,e!=null&&Or(t,!!n.multiple,e,!1)}};Xp=Kc;Jp=rr;var AE={usingClientEntryPoint:!1,Events:[Cs,Cr,Tl,Yp,qp,Kc]},Si={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OE={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tm(t),t===null?null:t.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance||RE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{Sl=io.inject(OE),Nt=io}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AE;Je.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(e))throw Error(S(200));return xE(t,e,null,n)};Je.createRoot=function(t,e){if(!ed(t))throw Error(S(299));var n=!1,r="",i=Dg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xc(t,1,!1,null,null,n,!1,r,i),t[Vt]=e.current,es(t.nodeType===8?t.parentNode:t),new Zc(e)};Je.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=tm(e),t=t===null?null:t.stateNode,t};Je.flushSync=function(t){return rr(t)};Je.hydrate=function(t,e,n){if(!bl(e))throw Error(S(200));return Ml(null,t,e,!0,n)};Je.hydrateRoot=function(t,e,n){if(!ed(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Og(e,null,t,1,n??null,i,!1,s,o),t[Vt]=e.current,es(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ll(e)};Je.render=function(t,e,n){if(!bl(e))throw Error(S(200));return Ml(null,t,e,!1,n)};Je.unmountComponentAtNode=function(t){if(!bl(t))throw Error(S(40));return t._reactRootContainer?(rr(function(){Ml(null,null,t,!1,function(){t._reactRootContainer=null,t[Vt]=null})}),!0):!1};Je.unstable_batchedUpdates=Kc;Je.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Ml(t,e,n,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function Lg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lg)}catch(t){console.error(t)}}Lg(),Lp.exports=Je;var DE=Lp.exports,of=DE;Va.createRoot=of.createRoot,Va.hydrateRoot=of.hydrateRoot;const LE="modulepreload",bE=function(t){return"/"+t},lf={},ME=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(a=>{if(a=bE(a),a in lf)return;lf[a]=!0;const u=a.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${d}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":LE,u||(c.as="script"),c.crossOrigin="",c.href=a,l&&c.setAttribute("nonce",l),document.head.appendChild(c),u)return new Promise((h,g)=>{c.addEventListener("load",h),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};function FE(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t;let l,a;const u=async(c=!0)=>{await a};async function d(){if("serviceWorker"in navigator){if(l=await ME(async()=>{const{Workbox:c}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:c}},[]).then(({Workbox:c})=>new c("/sw.js",{scope:"/",type:"classic"})).catch(c=>{o==null||o(c)}),!l)return;l.addEventListener("activated",c=>{(c.isUpdate||c.isExternal)&&window.location.reload()}),l.addEventListener("installed",c=>{c.isUpdate||r==null||r()}),l.register({immediate:e}).then(c=>{s?s("/sw.js",c):i==null||i(c)}).catch(c=>{o==null||o(c)})}}return a=d(),u}const UE=["kalem","kitap","deniz","nehir","şehir","bulut","orman","sokak","vapur","bahçe","kıyı","fırın","pazar","simit","tabak","ankara","bardak","defter","balkon","kartal","kasaba","keskin","mevsim","kumsal","orkide","yıldız","zeytin","toprak","meydan","oyuncu","başarı","sevinç","renkli","yazlık","saatçi","vitrin","mutfak","günlük","kuşluk","ulaşım","koltuk","parlak","gömlek","yastık","akbaba","altlık","ananas","anıtlı","aralık","bahane","bakkal","balina","derman","dostça","elbise","fındık","futbol","gazete","görsel","halıcı","hatıra","hediye","kadife","kamera","karpız","market","memnun","morluk","otobüs","panjur","patika","peynir","piknik","rüzgar","salata","sandal","sürahi","taksit","tarife","tombul","trafik","uçurum","ulusal","umutlu","yaprak","yorgan","zekalı","zincir","çiçek","tezgah","salgın","adalet","yolculuk","gözlükçü","öğrenci","bilgisay","telefonu","karnaval","renkleri","başkent","kumanya","meraklı","mücadele","sürpriz","takvimli","fırsatlar","kıraathan","çalışkan","yazılımcı","mimarlık","arkadaş","girişim","oyuncak","evrensel","platform","çoraplı","çınarlı","çiçekli","şarkıcı","şofben","şanslı","kıymet","kışlık","güneşli","bahçeli","seramik","merdiv","dükkan","sandık","çatalı","bakırcı","sokakçı","köylük","köşeci","ormanlı","tezgah","tabure","pervaz","tulumcu","havlucu","simitçi","dolmuş","feneri"],zE=()=>{};var af={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw oi(e)},oi=function(t){return new Error("Firebase Database ("+bg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new WE;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class WE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fg=function(t){const e=Mg(t);return td.encodeByteArray(e,!0)},Jo=function(t){return Fg(t).replace(/\./g,"")},Zo=function(t){try{return td.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){return Ug(void 0,t)}function Ug(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!BE(n)||(t[n]=Ug(t[n],e[n]));return t}function BE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=()=>VE().__FIREBASE_DEFAULTS__,GE=()=>{if(typeof process>"u"||typeof af>"u")return;const t=af.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zo(t[1]);return e&&JSON.parse(e)},nd=()=>{try{return zE()||HE()||GE()||KE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zg=t=>{var e,n;return(n=(e=nd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},QE=t=>{const e=zg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jg=()=>{var t;return(t=nd())==null?void 0:t.config},Wg=t=>{var e;return(e=nd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Jo(JSON.stringify(n)),Jo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function qE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JE(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZE(){return bg.NODE_ADMIN===!0}function eS(){try{return typeof indexedDB=="object"}catch{return!1}}function tS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nS,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new zn(i,l,r)}}function rS(t,e){return t.replace(iS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=us(Zo(s[0])||""),n=us(Zo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},sS=function(t){const e=Bg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},oS=function(t){const e=Bg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function qr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function el(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(uf(s)&&uf(o)){if(!ir(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function aS(t,e){const n=new uS(t,e);return n.subscribe.bind(n)}class uS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Na),i.error===void 0&&(i.error=Na),i.complete===void 0&&(i.complete=Na);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Na(){}function Fl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ul=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vg(t){return(await fetch(t,{credentials:"include"})).ok}class sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Is;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pS(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fS(t){return t===Vn?void 0:t}function pS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const gS={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},_S=Y.INFO,yS={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},vS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=yS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class id{constructor(e){this.name=e,this._logLevel=_S,this._logHandler=vS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const wS=(t,e)=>e.some(n=>t instanceof n);let cf,df;function ES(){return cf||(cf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SS(){return df||(df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hg=new WeakMap,Uu=new WeakMap,Gg=new WeakMap,xa=new WeakMap,sd=new WeakMap;function CS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hg.set(n,t)}).catch(()=>{}),sd.set(e,t),e}function kS(t){if(Uu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Uu.set(t,e)}let zu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IS(t){zu=t(zu)}function TS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ra(this),e,...n);return Gg.set(r,e.sort?e.sort():[e]),kn(r)}:SS().includes(t)?function(...e){return t.apply(Ra(this),e),kn(Hg.get(this))}:function(...e){return kn(t.apply(Ra(this),e))}}function NS(t){return typeof t=="function"?TS(t):(t instanceof IDBTransaction&&kS(t),wS(t,ES())?new Proxy(t,zu):t)}function kn(t){if(t instanceof IDBRequest)return CS(t);if(xa.has(t))return xa.get(t);const e=NS(t);return e!==t&&(xa.set(t,e),sd.set(e,t)),e}const Ra=t=>sd.get(t);function xS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=kn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(kn(o.result),a.oldVersion,a.newVersion,kn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const RS=["get","getKey","getAll","getAllKeys","count"],PS=["put","add","delete","clear"],Pa=new Map;function hf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pa.get(e))return Pa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Pa.set(e,s),s}IS(t=>({...t,get:(e,n,r)=>hf(e,n)||t.get(e,n,r),has:(e,n)=>!!hf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ju="@firebase/app",ff="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new id("@firebase/app"),DS="@firebase/app-compat",LS="@firebase/analytics-compat",bS="@firebase/analytics",MS="@firebase/app-check-compat",FS="@firebase/app-check",US="@firebase/auth",zS="@firebase/auth-compat",jS="@firebase/database",WS="@firebase/data-connect",$S="@firebase/database-compat",BS="@firebase/functions",VS="@firebase/functions-compat",HS="@firebase/installations",GS="@firebase/installations-compat",KS="@firebase/messaging",QS="@firebase/messaging-compat",YS="@firebase/performance",qS="@firebase/performance-compat",XS="@firebase/remote-config",JS="@firebase/remote-config-compat",ZS="@firebase/storage",e0="@firebase/storage-compat",t0="@firebase/firestore",n0="@firebase/ai",r0="@firebase/firestore-compat",i0="firebase",s0="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="[DEFAULT]",o0={[ju]:"fire-core",[DS]:"fire-core-compat",[bS]:"fire-analytics",[LS]:"fire-analytics-compat",[FS]:"fire-app-check",[MS]:"fire-app-check-compat",[US]:"fire-auth",[zS]:"fire-auth-compat",[jS]:"fire-rtdb",[WS]:"fire-data-connect",[$S]:"fire-rtdb-compat",[BS]:"fire-fn",[VS]:"fire-fn-compat",[HS]:"fire-iid",[GS]:"fire-iid-compat",[KS]:"fire-fcm",[QS]:"fire-fcm-compat",[YS]:"fire-perf",[qS]:"fire-perf-compat",[XS]:"fire-rc",[JS]:"fire-rc-compat",[ZS]:"fire-gcs",[e0]:"fire-gcs-compat",[t0]:"fire-fst",[r0]:"fire-fst-compat",[n0]:"fire-vertex","fire-js":"fire-js",[i0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=new Map,l0=new Map,$u=new Map;function pf(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xr(t){const e=t.name;if($u.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;$u.set(e,t);for(const n of tl.values())pf(n,t);for(const n of l0.values())pf(n,t);return!0}function od(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},In=new Ts("app","Firebase",a0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=s0;function Kg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Wu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw In.create("bad-app-name",{appName:String(i)});if(n||(n=jg()),!n)throw In.create("no-options");const s=tl.get(i);if(s){if(ir(n,s.options)&&ir(r,s.config))return s;throw In.create("duplicate-app",{appName:i})}const o=new mS(i);for(const a of $u.values())o.addComponent(a);const l=new u0(n,r,o);return tl.set(i,l),l}function Qg(t=Wu){const e=tl.get(t);if(!e&&t===Wu&&jg())return Kg();if(!e)throw In.create("no-app",{appName:t});return e}function Tn(t,e,n){let r=o0[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(o.join(" "));return}Xr(new sr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="firebase-heartbeat-database",d0=1,cs="firebase-heartbeat-store";let Aa=null;function Yg(){return Aa||(Aa=xS(c0,d0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(cs)}catch(n){console.warn(n)}}}}).catch(t=>{throw In.create("idb-open",{originalErrorMessage:t.message})})),Aa}async function h0(t){try{const n=(await Yg()).transaction(cs),r=await n.objectStore(cs).get(qg(t));return await n.done,r}catch(e){if(e instanceof zn)Kt.warn(e.message);else{const n=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(n.message)}}}async function mf(t,e){try{const r=(await Yg()).transaction(cs,"readwrite");await r.objectStore(cs).put(e,qg(t)),await r.done}catch(n){if(n instanceof zn)Kt.warn(n.message);else{const r=In.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kt.warn(r.message)}}}function qg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=1024,p0=30;class m0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>p0){const o=y0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Kt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gf(),{heartbeatsToSend:r,unsentEntries:i}=g0(this._heartbeatsCache.heartbeats),s=Jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Kt.warn(n),""}}}function gf(){return new Date().toISOString().substring(0,10)}function g0(t,e=f0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_f(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_f(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eS()?tS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await h0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return mf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return mf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _f(t){return Jo(JSON.stringify({version:2,heartbeats:t})).length}function y0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){Xr(new sr("platform-logger",e=>new AS(e),"PRIVATE")),Xr(new sr("heartbeat",e=>new m0(e),"PRIVATE")),Tn(ju,ff,t),Tn(ju,ff,"esm2020"),Tn("fire-js","")}v0("");var w0="firebase",E0="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(w0,E0,"app");function Xg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S0=Xg,Jg=new Ts("auth","Firebase",Xg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new id("@firebase/auth");function C0(t,...e){nl.logLevel<=Y.WARN&&nl.warn(`Auth (${ai}): ${t}`,...e)}function So(t,...e){nl.logLevel<=Y.ERROR&&nl.error(`Auth (${ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw ld(t,...e)}function Rt(t,...e){return ld(t,...e)}function Zg(t,e,n){const r={...S0(),[e]:n};return new Ts("auth","Firebase",r).create(e,{appName:t.name})}function Nn(t){return Zg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ld(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jg.create(t,...e)}function L(t,e,...n){if(!t)throw ld(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw So(e),new Error(e)}function Yt(t,e){t||Ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function k0(){return yf()==="http:"||yf()==="https:"}function yf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(k0()||XE()||"connection"in navigator)?navigator.onLine:!0}function T0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=rd()||$g()}get(){return I0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],R0=new xs(3e4,6e4);function zl(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ui(t,e,n,r,i={}){return t_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=li({key:t.config.apiKey,...o}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:a,...s};return qE()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ns(t.emulatorConfig.host)&&(u.credentials="include"),e_.fetch()(await r_(t,t.config.apiHost,n,l),u)})}async function t_(t,e,n){t._canInitEmulator=!1;const r={...N0,...e};try{const i=new P0(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw so(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw so(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw so(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zg(t,d,u);Qt(t,d)}}catch(i){if(i instanceof zn)throw i;Qt(t,"network-request-failed",{message:String(i)})}}async function n_(t,e,n,r,i={}){const s=await ui(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function r_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?ad(t.config,i):`${t.config.apiScheme}://${i}`;return x0.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class P0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),R0.get())})}}function so(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A0(t,e){return ui(t,"POST","/v1/accounts:delete",e)}async function rl(t,e){return ui(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O0(t,e=!1){const n=at(t),r=await n.getIdToken(e),i=ud(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ji(Oa(i.auth_time)),issuedAtTime:ji(Oa(i.iat)),expirationTime:ji(Oa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Oa(t){return Number(t)*1e3}function ud(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zo(n);return i?JSON.parse(i):(So("Failed to decode base64 JWT payload"),null)}catch(i){return So("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vf(t){const e=ud(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&D0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function D0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){var c;const e=t.auth,n=await t.getIdToken(),r=await ds(t,rl(e,{idToken:n}));L(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(c=i.providerUserInfo)!=null&&c.length?i_(i.providerUserInfo):[],o=M0(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?a:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Vu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function b0(t){const e=at(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function i_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(t,e){const n=await t_(t,{},async()=>{const r=li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await r_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ns(t.emulatorConfig.host)&&(a.credentials="include"),e_.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function U0(t,e){return ui(t,"POST","/v2/accounts:revokeToken",zl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=vf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await F0(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ur;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ur,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new L0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ds(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return O0(this,e)}reload(){return b0(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await ds(this,A0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:c,emailVerified:h,isAnonymous:g,providerData:_,stsTokenManager:v}=n;L(c&&v,e,"internal-error");const O=Ur.fromJSON(this.name,v);L(typeof c=="string",e,"internal-error"),rn(r,e.name),rn(i,e.name),L(typeof h=="boolean",e,"internal-error"),L(typeof g=="boolean",e,"internal-error"),rn(s,e.name),rn(o,e.name),rn(l,e.name),rn(a,e.name),rn(u,e.name),rn(d,e.name);const p=new gt({uid:c,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:O,createdAt:u,lastLoginAt:d});return _&&Array.isArray(_)&&(p.providerData=_.map(f=>({...f}))),a&&(p._redirectEventId=a),p}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ur;i.updateFromServerResponse(n);const s=new gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await il(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?i_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ur;l.updateFromIdToken(r);const a=new gt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new Map;function zt(t){Yt(t instanceof Function,"Expected a class definition");let e=wf.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}s_.type="NONE";const Ef=s_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Co(this.userKey,i.apiKey,s),this.fullPersistenceKey=Co("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await rl(this.auth,{idToken:e}).catch(()=>{});return n?gt._fromGetAccountInfoResponse(this.auth,n,e):null}return gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(zt(Ef),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||zt(Ef);const o=Co(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let c;if(typeof d=="string"){const h=await rl(e,{idToken:d}).catch(()=>{});if(!h)break;c=await gt._fromGetAccountInfoResponse(e,h,d)}else c=gt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new zr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new zr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(u_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(o_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d_(e))return"Blackberry";if(h_(e))return"Webos";if(l_(e))return"Safari";if((e.includes("chrome/")||a_(e))&&!e.includes("edge/"))return"Chrome";if(c_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function o_(t=Fe()){return/firefox\//i.test(t)}function l_(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function a_(t=Fe()){return/crios\//i.test(t)}function u_(t=Fe()){return/iemobile/i.test(t)}function c_(t=Fe()){return/android/i.test(t)}function d_(t=Fe()){return/blackberry/i.test(t)}function h_(t=Fe()){return/webos/i.test(t)}function cd(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function z0(t=Fe()){var e;return cd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function j0(){return JE()&&document.documentMode===10}function f_(t=Fe()){return cd(t)||c_(t)||h_(t)||d_(t)||/windows phone/i.test(t)||u_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t,e=[]){let n;switch(t){case"Browser":n=Sf(Fe());break;case"Worker":n=`${Sf(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ai}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(t,e={}){return ui(t,"GET","/v2/passwordPolicy",zl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=6;class V0{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??B0,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cf(this),this.idTokenSubscription=new Cf(this),this.beforeStateQueue=new W0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rl(this,{idToken:e}),r=await gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(Nn(this));const n=e?at(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $0(this),n=new V0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await U0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=p_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&C0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function jl(t){return at(t)}class Cf{constructor(e){this.auth=e,this.observer=null,this.addObserver=aS(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function G0(t){dd=t}function K0(t){return dd.loadJS(t)}function Q0(){return dd.gapiScript}function Y0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t,e){const n=od(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ir(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function X0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function J0(t,e,n){const r=jl(t);L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=m_(e),{host:o,port:l}=Z0(e),a=l===null?"":`:${l}`,u={url:`${s}//${o}${a}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(ir(u,r.config.emulator)&&ir(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ns(o)?Vg(`${s}//${o}${a}`):eC()}function m_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Z0(t){const e=m_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kf(o)}}}function kf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t,e){return n_(t,"POST","/v1/accounts:signInWithIdp",zl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="http://localhost";class or extends g_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jr(e,n)}buildRequest(){const e={requestUri:tC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=li(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends __{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Rs{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return or._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Rs{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Rs{constructor(){super("twitter.com")}static credential(e,n){return or._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(t,e){return n_(t,"POST","/v1/accounts:signUp",zl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gt._fromIdTokenResponse(e,r,i),o=If(r);return new On({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=If(r);return new On({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function If(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(t){var i;if(pt(t.app))return Promise.reject(Nn(t));const e=jl(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new On({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await nC(e,{returnSecureToken:!0}),r=await On._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends zn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,sl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new sl(e,n,r,i)}}function y_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?sl._fromErrorAndOperation(t,s,e,r):s})}async function iC(t,e,n=!1){const r=await ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return On._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(t,e,n=!1){const{auth:r}=t;if(pt(r.app))return Promise.reject(Nn(r));const i="reauthenticate";try{const s=await ds(t,y_(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=ud(s.idToken);L(o,r,"internal-error");const{sub:l}=o;return L(t.uid===l,r,"user-mismatch"),On._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(t,e,n=!1){if(pt(t.app))return Promise.reject(Nn(t));const r="signIn",i=await y_(t,r,e),s=await On._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function lC(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function aC(t,e,n){return at(t).beforeAuthStateChanged(e,n)}const ol="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ol,"1"),this.storage.removeItem(ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=1e3,cC=10;class w_ extends v_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=f_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);j0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}w_.type="LOCAL";const dC=w_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_ extends v_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}E_.type="SESSION";const S_=E_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await hC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=hd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function pC(t){Pt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function mC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function _C(){return C_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="firebaseLocalStorageDb",yC=1,ll="firebaseLocalStorage",I_="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $l(t,e){return t.transaction([ll],e?"readwrite":"readonly").objectStore(ll)}function vC(){const t=indexedDB.deleteDatabase(k_);return new Ps(t).toPromise()}function Hu(){const t=indexedDB.open(k_,yC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ll,{keyPath:I_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ll)?e(r):(r.close(),await vC(),e(await Hu()))})})}async function Tf(t,e,n){const r=$l(t,!0).put({[I_]:e,value:n});return new Ps(r).toPromise()}async function wC(t,e){const n=$l(t,!1).get(e),r=await new Ps(n).toPromise();return r===void 0?null:r.value}function Nf(t,e){const n=$l(t,!0).delete(e);return new Ps(n).toPromise()}const EC=800,SC=3;class T_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wl._getInstance(_C()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await mC(),!this.activeServiceWorker)return;this.sender=new fC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hu();return await Tf(e,ol,"1"),await Nf(e,ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$l(i,!1).getAll();return new Ps(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}T_.type="LOCAL";const CC=T_;new xs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(t,e){return e?zt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends g_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IC(t){return oC(t.auth,new fd(t),t.bypassAuthState)}function TC(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),sC(n,new fd(t),t.bypassAuthState)}async function NC(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),iC(n,new fd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IC;case"linkViaPopup":case"linkViaRedirect":return NC;case"reauthViaPopup":case"reauthViaRedirect":return TC;default:Qt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=new xs(2e3,1e4);class Pr extends N_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xC.get())};e()}}Pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="pendingRedirect",ko=new Map;class PC extends N_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const r=await AC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AC(t,e){const n=LC(e),r=DC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OC(t,e){ko.set(t._key(),e)}function DC(t){return zt(t._redirectPersistence)}function LC(t){return Co(RC,t.config.apiKey,t.name)}async function bC(t,e,n=!1){if(pt(t.app))return Promise.reject(Nn(t));const r=jl(t),i=kC(r,e),o=await new PC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=10*60*1e3;class FC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!x_(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MC&&this.cachedEventUids.clear(),this.cachedEventUids.has(xf(e))}saveEventToCache(e){this.cachedEventUids.add(xf(e)),this.lastProcessedEventTime=Date.now()}}function xf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function x_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e={}){return ui(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WC=/^https?/;async function $C(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zC(t);for(const n of e)try{if(BC(n))return}catch{}Qt(t,"unauthorized-domain")}function BC(t){const e=Bu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!WC.test(n))return!1;if(jC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=new xs(3e4,6e4);function Rf(){const t=Pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HC(t){return new Promise((e,n)=>{var i,s,o;function r(){Rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rf(),n(Rt(t,"network-request-failed"))},timeout:VC.get()})}if((s=(i=Pt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Pt().gapi)!=null&&o.load)r();else{const l=Y0("iframefcb");return Pt()[l]=()=>{gapi.load?r():n(Rt(t,"network-request-failed"))},K0(`${Q0()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Io=null,e})}let Io=null;function GC(t){return Io=Io||HC(t),Io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=new xs(5e3,15e3),QC="__/auth/iframe",YC="emulator/auth/iframe",qC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JC(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ad(e,YC):`https://${t.config.authDomain}/${QC}`,r={apiKey:e.apiKey,appName:t.name,v:ai},i=XC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${li(r).slice(1)}`}async function ZC(t){const e=await GC(t),n=Pt().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:JC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),l=Pt().setTimeout(()=>{s(o)},KC.get());function a(){Pt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tk=500,nk=600,rk="_blank",ik="http://localhost";class Pf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sk(t,e,n,r=tk,i=nk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...ek,width:r.toString(),height:i.toString(),top:s,left:o},u=Fe().toLowerCase();n&&(l=a_(u)?rk:n),o_(u)&&(e=e||ik,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(z0(u)&&l!=="_self")return ok(e||"",l),new Pf(null);const c=window.open(e||"",l,d);L(c,t,"popup-blocked");try{c.focus()}catch{}return new Pf(c)}function ok(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="__/auth/handler",ak="emulator/auth/handler",uk=encodeURIComponent("fac");async function Af(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ai,eventId:i};if(e instanceof __){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof Rs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${uk}=${encodeURIComponent(a)}`:"";return`${ck(t)}?${li(l).slice(1)}${u}`}function ck({config:t}){return t.emulator?ad(t,ak):`https://${t.authDomain}/${lk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="webStorageSupport";class dk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=S_,this._completeRedirectFn=bC,this._overrideRedirectResult=OC}async _openPopup(e,n,r,i){var o;Yt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Af(e,n,r,Bu(),i);return sk(e,s,hd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Af(e,n,r,Bu(),i);return pC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZC(e),r=new FC(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Da,{type:Da},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Da];s!==void 0&&n(!!s),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$C(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return f_()||l_()||cd()}}const hk=dk;var Of="@firebase/auth",Df="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mk(t){Xr(new sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:p_(t)},u=new H0(r,i,s,a);return X0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new sr("auth-internal",e=>{const n=jl(e.getProvider("auth").getImmediate());return(r=>new fk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(Of,Df,pk(t)),Tn(Of,Df,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=5*60,_k=Wg("authIdTokenMaxAge")||gk;let Lf=null;const yk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_k)return;const i=n==null?void 0:n.token;Lf!==i&&(Lf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vk(t=Qg()){const e=od(t,"auth");if(e.isInitialized())return e.getImmediate();const n=q0(t,{popupRedirectResolver:hk,persistence:[CC,dC,S_]}),r=Wg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yk(s.toString());aC(n,o,()=>o(n.currentUser)),lC(n,l=>o(l))}}const i=zg("auth");return i&&J0(n,`http://${i}`),n}function wk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}G0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",wk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mk("Browser");var bf={};const Mf="@firebase/database",Ff="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R_="";function Ek(t){R_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:us(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return At(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Sk(e)}}catch{}return new Ck},Yn=P_("localStorage"),kk=P_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new id("@firebase/database"),Ik=function(){let t=1;return function(){return t++}}(),A_=function(t){const e=dS(t),n=new lS;n.update(e);const r=n.digest();return td.encodeByteArray(r)},As=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=As.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let Wi=null,Uf=!0;const Tk=function(t,e){C(!0,"Can't turn on custom loggers persistently."),Wr.logLevel=Y.VERBOSE,Wi=Wr.log.bind(Wr)},Ce=function(...t){if(Uf===!0&&(Uf=!1,Wi===null&&kk.get("logging_enabled")===!0&&Tk()),Wi){const e=As.apply(null,t);Wi(e)}},Os=function(t){return function(...e){Ce(t,...e)}},Gu=function(...t){const e="FIREBASE INTERNAL ERROR: "+As(...t);Wr.error(e)},qt=function(...t){const e=`FIREBASE FATAL ERROR: ${As(...t)}`;throw Wr.error(e),new Error(e)},Me=function(...t){const e="FIREBASE WARNING: "+As(...t);Wr.warn(e)},Nk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Jr="[MIN_NAME]",lr="[MAX_NAME]",hr=function(t,e){if(t===e)return 0;if(t===Jr||e===lr)return-1;if(e===Jr||t===lr)return 1;{const n=zf(t),r=zf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Rk=function(t,e){return t===e?0:t<e?-1:1},Ci=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},md=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=md(t[e[r]]);return n+="}",n},O_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const D_=function(t){C(!pd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},Pk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ak=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ok(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Dk=new RegExp("^-?(0*)\\d{1,10}$"),Lk=-2147483648,bk=2147483647,zf=function(t){if(Dk.test(t)){const e=Number(t);if(e>=Lk&&e<=bk)return e}return null},ci=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Me("Exception was thrown by user callback.",n),e},Math.floor(0))}},Mk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$i=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,pt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Me(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Me(e)}}class To{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}To.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="5",L_="v",b_="s",M_="r",F_="f",U_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,z_="ls",j_="p",Ku="ac",W_="websocket",$_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function zk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function V_(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===W_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===$_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zk(t)&&(n.ns=t.namespace);const i=[];return Te(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.counters_={}}incrementCounter(e,n=1){At(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $E(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La={},ba={};function _d(t){const e=t.toString();return La[e]||(La[e]=new jk),La[e]}function Wk(t,e){const n=t.toString();return ba[n]||(ba[n]=e()),ba[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ci(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="start",Bk="close",Vk="pLPCommand",Hk="pRTLPCB",H_="id",G_="pw",K_="ser",Gk="cb",Kk="seg",Qk="ts",Yk="d",qk="dframe",Q_=1870,Y_=30,Xk=Q_-Y_,Jk=25e3,Zk=3e4;class Ar{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Os(e),this.stats_=_d(n),this.urlFn=a=>(this.appCheckToken&&(a[Ku]=this.appCheckToken),V_(n,$_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $k(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Zk)),xk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jf)this.id=l,this.password=a;else if(o===Bk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[jf]="t",r[K_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Gk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[L_]=gd,this.transportSessionId&&(r[b_]=this.transportSessionId),this.lastSessionId&&(r[z_]=this.lastSessionId),this.applicationId&&(r[j_]=this.applicationId),this.appCheckToken&&(r[Ku]=this.appCheckToken),typeof location<"u"&&location.hostname&&U_.test(location.hostname)&&(r[M_]=F_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ar.forceAllow_=!0}static forceDisallow(){Ar.forceDisallow_=!0}static isAvailable(){return Ar.forceAllow_?!0:!Ar.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Pk()&&!Ak()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Fg(n),i=O_(r,Xk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[qk]="t",r[H_]=e,r[G_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ik(),window[Vk+this.uniqueCallbackIdentifier]=e,window[Hk+this.uniqueCallbackIdentifier]=n,this.myIFrame=yd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[H_]=this.myID,e[G_]=this.myPW,e[K_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Y_+r.length<=Q_;){const o=this.pendingSegs.shift();r=r+"&"+Kk+i+"="+o.seg+"&"+Qk+i+"="+o.ts+"&"+Yk+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Jk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=16384,tI=45e3;let al=null;typeof MozWebSocket<"u"?al=MozWebSocket:typeof WebSocket<"u"&&(al=WebSocket);class mt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Os(this.connId),this.stats_=_d(n),this.connURL=mt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[L_]=gd,typeof location<"u"&&location.hostname&&U_.test(location.hostname)&&(o[M_]=F_),n&&(o[b_]=n),r&&(o[z_]=r),i&&(o[Ku]=i),s&&(o[j_]=s),V_(e,W_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yn.set("previous_websocket_failure",!0);try{let r;ZE(),this.mySock=new al(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&al!==null&&!mt.forceDisallow_}static previouslyFailed(){return Yn.isInMemoryStorage||Yn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=us(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=O_(n,eI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{static get ALL_TRANSPORTS(){return[Ar,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=mt&&mt.isAvailable();let r=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||Me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mt];else{const i=this.transports_=[];for(const s of hs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);hs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=6e4,rI=5e3,iI=10*1024,sI=100*1024,Ma="t",Wf="d",oI="s",$f="r",lI="e",Bf="o",Vf="a",Hf="n",Gf="p",aI="h";class uI{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Os("c:"+this.id+":"),this.transportManager_=new hs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$i(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ma in e){const n=e[Ma];n===Vf?this.upgradeIfSecondaryHealthy_():n===$f?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Bf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ci("t",e),r=Ci("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ci("t",e),r=Ci("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ci(Ma,e);if(Wf in e){const r=e[Wf];if(n===aI){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Hf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oI?this.onConnectionShutdown_(r):n===$f?this.onReset_(r):n===lI?Gu("Server Error: "+r):n===Bf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gd!==r&&Me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),$i(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$i(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends X_{static getInstance(){return new ul}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=32,Qf=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new q("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dn(t){return t.pieces_.length-t.pieceNum_}function J(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function vd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function J_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return Le(J(t),J(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function dI(t,e){const n=fs(t,0),r=fs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=hr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function wd(t,e){if(Dn(t)!==Dn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function rt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Dn(t)>Dn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class hI{constructor(e,n){this.errorPrefix_=n,this.parts_=fs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ul(this.parts_[r]);Z_(this)}}function fI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ul(e),Z_(t)}function pI(t){const e=t.parts_.pop();t.byteLength_-=Ul(e),t.parts_.length>0&&(t.byteLength_-=1)}function Z_(t){if(t.byteLength_>Qf)throw new Error(t.errorPrefix_+"has a key path longer than "+Qf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Kf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kf+") or object contains a cycle "+Hn(t))}function Hn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends X_{static getInstance(){return new Ed}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=1e3,mI=60*5*1e3,Yf=30*1e3,gI=1.3,_I=3e4,yI="server_kill",qf=3;class $t extends q_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=$t.nextPersistentConnectionId_++,this.log_=Os("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ki,this.maxReconnectDelay_=mI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ed.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ul.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(me(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Is,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;$t.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&At(e,"w")){const r=qr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||oS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gu("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_I&&(this.reconnectDelay_=ki),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$t.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new uI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Me(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(yI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Me(c),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fu(this.interruptReasons_)&&(this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>md(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qf&&(this.reconnectDelay_=Yf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+R_.replace(/\./g,"-")]=1,rd()?e["framework.cordova"]=1:$g()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ul.getInstance().currentlyOnline();return Fu(this.interruptReasons_)&&e}}$t.nextPersistentConnectionId_=0;$t.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(Jr,e),i=new j(Jr,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo;class ey extends Bl{static get __EMPTY_NODE(){return oo}static set __EMPTY_NODE(e){oo=e}compare(e,n){return hr(e.name,n.name)}isDefinedOn(e){throw oi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(lr,oo)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,oo)}toString(){return".key"}}const $r=new ey;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??we.RED,this.left=i??Be.EMPTY_NODE,this.right=s??Be.EMPTY_NODE}copy(e,n,r,i,s){return new we(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Be.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class vI{copy(e,n,r,i,s){return this}insert(e,n,r){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Be{constructor(e,n=Be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new lo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new lo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new lo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new lo(this.root_,null,this.comparator_,!0,e)}}Be.EMPTY_NODE=new vI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t,e){return hr(t.name,e.name)}function Sd(t,e){return hr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu;function EI(t){Qu=t}const ty=function(t){return typeof t=="number"?"number:"+D_(t):"string:"+t},ny=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&At(e,".sv"),"Priority must be a string or number.")}else C(t===Qu||t.isEmpty(),"priority of unexpected type.");C(t===Qu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xf;class ye{static set __childrenNodeConstructor(e){Xf=e}static get __childrenNodeConstructor(){return Xf}constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ny(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:z(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||Dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(J(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ty(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=D_(this.value_):e+=this.value_,this.lazyHash_=A_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),s=ye.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ry,iy;function SI(t){ry=t}function CI(t){iy=t}class kI extends Bl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?hr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(lr,new ye("[PRIORITY-POST]",iy))}makePost(e,n){const r=ry(e);return new j(n,new ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const ce=new kI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=Math.log(2);class TI{constructor(e){const n=s=>parseInt(Math.log(s)/II,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cl=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new we(h,c.node,we.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],h=n?n(c):c,new we(h,c.node,we.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,v){const O=c-_,p=c;c-=_;const f=i(O+1,p),m=t[O],w=n?n(m):m;g(new we(w,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),O=Math.pow(2,a.count-(_+1));v?h(O,we.BLACK):(h(O,we.BLACK),h(O,we.RED))}return d},o=new TI(t.length),l=s(o);return new Be(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa;const _r={};class jt{static get Default(){return C(_r&&ce,"ChildrenNode.ts has not been loaded"),Fa=Fa||new jt({".priority":_r},{".priority":ce}),Fa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=qr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Be?n:null}hasIndex(e){return At(this.indexSet_,e.toString())}addIndex(e,n){C(e!==$r,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=cl(r,e.getCompare()):l=_r;const a=e.toString(),u={...this.indexSet_};u[a]=e;const d={...this.indexes_};return d[a]=l,new jt(d,u)}addToIndexes(e,n){const r=el(this.indexes_,(i,s)=>{const o=qr(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===_r)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),cl(l,o.getCompare())}else return _r;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new jt(r,this.indexSet_)}removeFromIndexes(e,n){const r=el(this.indexes_,i=>{if(i===_r)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new jt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii;class D{static get EMPTY_NODE(){return Ii||(Ii=new D(new Be(Sd),null,jt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ny(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ii}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ii:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(J(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ii:this.priorityNode_;return new D(i,o,s)}}updateChild(e,n){const r=z(e);if(r===null)return n;{C(z(e)!==".priority"||Dn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(J(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ce,(o,l)=>{n[o]=l.val(e),r++,s&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ty(this.getPriority().val())+":"),this.forEachChild(ce,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":A_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ds?-1:0}withIndex(e){if(e===$r||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$r||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ce),i=n.getIterator(ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$r?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class NI extends D{constructor(){super(new Be(Sd),D.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const Ds=new NI;Object.defineProperties(j,{MIN:{value:new j(Jr,D.EMPTY_NODE)},MAX:{value:new j(lr,Ds)}});ey.__EMPTY_NODE=D.EMPTY_NODE;ye.__childrenNodeConstructor=D;EI(Ds);CI(Ds);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=!0;function pe(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,pe(e))}if(!(t instanceof Array)&&xI){const n=[];let r=!1;if(Te(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=pe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return D.EMPTY_NODE;const s=cl(n,wI,o=>o.name,Sd);if(r){const o=cl(n,ce.getCompare());return new D(s,pe(e),new jt({".priority":o},{".priority":ce}))}else return new D(s,pe(e),jt.Default)}else{let n=D.EMPTY_NODE;return Te(t,(r,i)=>{if(At(t,r)&&r.substring(0,1)!=="."){const s=pe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(pe(e))}}SI(pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI extends Bl{constructor(e){super(),this.indexPath_=e,C(!W(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?hr(e.name,n.name):s}makePost(e,n){const r=pe(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,Ds);return new j(lr,e)}toString(){return fs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI extends Bl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?hr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=pe(e);return new j(n,r)}toString(){return".value"}}const AI=new PI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){return{type:"value",snapshotNode:t}}function Zr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ps(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ms(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function OI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ps(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Zr(n,r)):o.trackChildChange(ms(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ce,(i,s)=>{n.hasChild(i)||r.trackChildChange(ps(i,s))}),n.isLeafNode()||n.forEachChild(ce,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ms(i,s,o))}else r.trackChildChange(Zr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.indexedFilter_=new Cd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gs.getStartPost_(e),this.endPost_=gs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const s=this;return n.forEachChild(ce,(o,l)=>{s.matches(new j(o,l))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new gs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=D.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new j(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ms(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ps(n,c));const v=l.updateImmediateChild(n,D.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Zr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(ps(u.name,u.node)),s.trackChildChange(Zr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jr}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:lr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new kd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function LI(t){return t.loadsAllData()?new Cd(t.getIndex()):t.hasLimit()?new DI(t):new gs(t)}function Jf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ce?n="$priority":t.index_===AI?n="$value":t.index_===$r?n="$key":(C(t.index_ instanceof RI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Zf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends q_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Os("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=dl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Jf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),qr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=dl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Jf(e._queryParams),r=e._path.toString(),i=new Is;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+li(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=us(l.responseText)}catch{Me("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Me("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){return{value:null,children:new Map}}function oy(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,hl());const i=t.children.get(r);e=J(e),oy(i,e,n)}}function Yu(t,e,n){t.value!==null?n(e,t.value):MI(t,(r,i)=>{const s=new q(e.toString()+"/"+r);Yu(i,s,n)})}function MI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Te(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=10*1e3,UI=30*1e3,zI=5*60*1e3;class jI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FI(e);const r=ep+(UI-ep)*Math.random();$i(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Te(e,(i,s)=>{s>0&&At(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),$i(this.reportStats_.bind(this),Math.floor(Math.random()*2*zI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_t||(_t={}));function Id(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Td(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Nd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=_t.ACK_USER_WRITE,this.source=Id()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new fl(K(),n,this.revert)}}else return C(z(this.path)===e,"operationForChild called for unrelated child."),new fl(J(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.source=e,this.path=n,this.type=_t.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new _s(this.source,K()):new _s(this.source,J(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=_t.OVERWRITE}operationForChild(e){return W(this.path)?new ar(this.source,K(),this.snap.getImmediateChild(e)):new ar(this.source,J(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=_t.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new ar(this.source,K(),n.value):new ei(this.source,K(),n)}else return C(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ei(this.source,J(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $I(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(OI(o.childName,o.snapshotNode))}),Ti(t,i,"child_removed",e,r,n),Ti(t,i,"child_added",e,r,n),Ti(t,i,"child_moved",s,r,n),Ti(t,i,"child_changed",e,r,n),Ti(t,i,"value",e,r,n),i}function Ti(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>VI(t,l,a)),o.forEach(l=>{const a=BI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function BI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VI(t,e,n){if(e.childName==null||n.childName==null)throw oi("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e){return{eventCache:t,serverCache:e}}function Bi(t,e,n,r){return Vl(new Ln(e,n,r),t.serverCache)}function ly(t,e,n,r){return Vl(t.eventCache,new Ln(e,n,r))}function pl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ur(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua;const HI=()=>(Ua||(Ua=new Be(Rk)),Ua);class X{static fromObject(e){let n=new X(null);return Te(e,(r,i)=>{n=n.set(new q(r),i)}),n}constructor(e,n=HI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(W(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(J(e),n);return s!=null?{path:ue(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(J(e)):new X(null)}}set(e,n){if(W(e))return new X(n,this.children);{const r=z(e),s=(this.children.get(r)||new X(null)).set(J(e),n),o=this.children.insert(r,s);return new X(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(J(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new X(null):new X(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(J(e)):null}}setTree(e,n){if(W(e))return n;{const r=z(e),s=(this.children.get(r)||new X(null)).setTree(J(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new X(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=z(e),o=this.children.get(s);return o?o.findOnPath_(J(e),ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=z(e),s=this.children.get(i);return s?s.foreachOnPath_(J(e),ue(n,i),r):new X(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new X(null))}}function Vi(t,e,n){if(W(e))return new wt(new X(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Le(i,e);return s=s.updateChild(o,n),new wt(t.writeTree_.set(i,s))}else{const i=new X(n),s=t.writeTree_.setTree(e,i);return new wt(s)}}}function qu(t,e,n){let r=t;return Te(n,(i,s)=>{r=Vi(r,ue(e,i),s)}),r}function tp(t,e){if(W(e))return wt.empty();{const n=t.writeTree_.setTree(e,new X(null));return new wt(n)}}function Xu(t,e){return fr(t,e)!=null}function fr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function np(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function xn(t,e){if(W(e))return t;{const n=fr(t,e);return n!=null?new wt(new X(n)):new wt(t.writeTree_.subtree(e))}}function Ju(t){return t.writeTree_.isEmpty()}function ti(t,e){return ay(K(),t.writeTree_,e)}function ay(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ay(ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e){return hy(e,t)}function GI(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Vi(t.visibleWrites,e,n)),t.lastWriteId=r}function KI(t,e,n,r){C(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=qu(t.visibleWrites,e,n),t.lastWriteId=r}function QI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function YI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&qI(l,r.path)?i=!1:rt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return XI(t),!0;if(r.snap)t.visibleWrites=tp(t.visibleWrites,r.path);else{const l=r.children;Te(l,a=>{t.visibleWrites=tp(t.visibleWrites,ue(r.path,a))})}return!0}else return!1}function qI(t,e){if(t.snap)return rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rt(ue(t.path,n),e))return!0;return!1}function XI(t){t.visibleWrites=uy(t.allWrites,JI,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function JI(t){return t.visible}function uy(t,e,n){let r=wt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)rt(n,o)?(l=Le(n,o),r=Vi(r,l,s.snap)):rt(o,n)&&(l=Le(o,n),r=Vi(r,K(),s.snap.getChild(l)));else if(s.children){if(rt(n,o))l=Le(n,o),r=qu(r,l,s.children);else if(rt(o,n))if(l=Le(o,n),W(l))r=qu(r,K(),s.children);else{const a=qr(s.children,z(l));if(a){const u=a.getChild(J(l));r=Vi(r,K(),u)}}}else throw oi("WriteRecord should have .snap or .children")}}return r}function cy(t,e,n,r,i){if(!r&&!i){const s=fr(t.visibleWrites,e);if(s!=null)return s;{const o=xn(t.visibleWrites,e);if(Ju(o))return n;if(n==null&&!Xu(o,K()))return null;{const l=n||D.EMPTY_NODE;return ti(o,l)}}}else{const s=xn(t.visibleWrites,e);if(!i&&Ju(s))return n;if(!i&&n==null&&!Xu(s,K()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(rt(u.path,e)||rt(e,u.path))},l=uy(t.allWrites,o,e),a=n||D.EMPTY_NODE;return ti(l,a)}}}function ZI(t,e,n){let r=D.EMPTY_NODE;const i=fr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=xn(t.visibleWrites,e);return n.forEachChild(ce,(o,l)=>{const a=ti(xn(s,new q(o)),l);r=r.updateImmediateChild(o,a)}),np(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=xn(t.visibleWrites,e);return np(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function eT(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,n);if(Xu(t.visibleWrites,s))return null;{const o=xn(t.visibleWrites,s);return Ju(o)?i.getChild(n):ti(o,i.getChild(n))}}function tT(t,e,n,r){const i=ue(e,n),s=fr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=xn(t.visibleWrites,i);return ti(o,r.getNode().getImmediateChild(n))}else return null}function nT(t,e){return fr(t.visibleWrites,e)}function rT(t,e,n,r,i,s,o){let l;const a=xn(t.visibleWrites,e),u=fr(a,K());if(u!=null)l=u;else if(n!=null)l=ti(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function iT(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function ml(t,e,n,r){return cy(t.writeTree,t.treePath,e,n,r)}function xd(t,e){return ZI(t.writeTree,t.treePath,e)}function rp(t,e,n,r){return eT(t.writeTree,t.treePath,e,n,r)}function gl(t,e){return nT(t.writeTree,ue(t.treePath,e))}function sT(t,e,n,r,i,s){return rT(t.writeTree,t.treePath,e,n,r,i,s)}function Rd(t,e,n){return tT(t.writeTree,t.treePath,e,n)}function dy(t,e){return hy(ue(t.treePath,e),t.writeTree)}function hy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ms(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ps(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Zr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ms(r,e.snapshotNode,i.oldSnap));else throw oi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const fy=new lT;class Pd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ln(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Rd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ur(this.viewCache_),s=sT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t){return{filter:t}}function uT(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function cT(t,e,n,r,i){const s=new oT;let o,l;if(n.type===_t.OVERWRITE){const u=n;u.source.fromUser?o=Zu(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!W(u.path),o=_l(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===_t.MERGE){const u=n;u.source.fromUser?o=hT(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=ec(t,e,u.path,u.children,r,i,l,s))}else if(n.type===_t.ACK_USER_WRITE){const u=n;u.revert?o=mT(t,e,u.path,r,i,s):o=fT(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===_t.LISTEN_COMPLETE)o=pT(t,e,n.path,r,s);else throw oi("Unknown operation type: "+n.type);const a=s.getChanges();return dT(e,o,a),{viewCache:o,changes:a}}function dT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=pl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(sy(pl(e)))}}function py(t,e,n,r,i,s){const o=e.eventCache;if(gl(r,n)!=null)return e;{let l,a;if(W(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ur(e),d=u instanceof D?u:D.EMPTY_NODE,c=xd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=ml(r,ur(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=z(n);if(u===".priority"){C(Dn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=rp(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=J(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=rp(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Rd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Bi(e,l,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function _l(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(W(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=z(n);if(!a.isCompleteForPath(n)&&Dn(n)>1)return e;const _=J(n),O=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),O):u=d.updateChild(a.getNode(),g,O,_,fy,null)}const c=ly(e,u,a.isFullyInitialized()||W(n),d.filtersNodes()),h=new Pd(i,c,s);return py(t,c,n,i,h,l)}function Zu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Pd(i,e,s);if(W(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Bi(e,u,!0,t.filter.filtersNodes());else{const c=z(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Bi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=J(n),g=l.getNode().getImmediateChild(c);let _;if(W(h))_=r;else{const v=d.getCompleteChild(c);v!=null?vd(h)===".priority"&&v.getChild(J_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=D.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Bi(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ip(t,e){return t.eventCache.isCompleteForChild(e)}function hT(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=ue(n,a);ip(e,z(d))&&(l=Zu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=ue(n,a);ip(e,z(d))||(l=Zu(t,l,d,u,i,s,o))}),l}function sp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ec(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;W(n)?u=r:u=new X(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=sp(t,g,h);a=_l(t,a,new q(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=sp(t,_,h);a=_l(t,a,new q(c),v,i,s,o,l)}}),a}function fT(t,e,n,r,i,s,o){if(gl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(W(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return _l(t,e,n,a.getNode().getChild(n),i,s,l,o);if(W(n)){let u=new X(null);return a.getNode().forEachChild($r,(d,c)=>{u=u.set(new q(d),c)}),ec(t,e,n,u,i,s,l,o)}else return e}else{let u=new X(null);return r.foreach((d,c)=>{const h=ue(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),ec(t,e,n,u,i,s,l,o)}}function pT(t,e,n,r,i){const s=e.serverCache,o=ly(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return py(t,o,n,r,fy,i)}function mT(t,e,n,r,i,s){let o;if(gl(r,n)!=null)return e;{const l=new Pd(r,e,i),a=e.eventCache.getNode();let u;if(W(n)||z(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ml(r,ur(e));else{const c=e.serverCache.getNode();C(c instanceof D,"serverChildren would be complete if leaf node"),d=xd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=z(n);let c=Rd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,J(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,D.EMPTY_NODE,J(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ml(r,ur(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||gl(r,K())!=null,Bi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Cd(r.getIndex()),s=LI(r);this.processor_=aT(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(D.EMPTY_NODE,l.getNode(),null),d=new Ln(a,o.isFullyInitialized(),i.filtersNodes()),c=new Ln(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Vl(c,d),this.eventGenerator_=new WI(this.query_)}get query(){return this.query_}}function _T(t){return t.viewCache_.serverCache.getNode()}function yT(t){return pl(t.viewCache_)}function vT(t,e){const n=ur(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function op(t){return t.eventRegistrations_.length===0}function wT(t,e){t.eventRegistrations_.push(e)}function lp(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function ap(t,e,n,r){e.type===_t.MERGE&&e.source.queryId!==null&&(C(ur(t.viewCache_),"We should always have a full cache before handling merges"),C(pl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=cT(t.processor_,i,e,n,r);return uT(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,my(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ET(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ce,(s,o)=>{r.push(Zr(s,o))}),n.isFullyInitialized()&&r.push(sy(n.getNode())),my(t,r,n.getNode(),e)}function my(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return $I(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class gy{constructor(){this.views=new Map}}function ST(t){C(!yl,"__referenceConstructor has already been defined"),yl=t}function CT(){return C(yl,"Reference.ts has not been loaded"),yl}function kT(t){return t.views.size===0}function Ad(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),ap(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ap(o,e,n,r));return s}}function _y(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=ml(n,i?r:null),a=!1;l?a=!0:r instanceof D?(l=xd(n,r),a=!1):(l=D.EMPTY_NODE,a=!1);const u=Vl(new Ln(l,a,!1),new Ln(r,i,!1));return new gT(e,u)}return o}function IT(t,e,n,r,i,s){const o=_y(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),wT(o,n),ET(o,n)}function TT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=bn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(lp(u,n,r)),op(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(lp(a,n,r)),op(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!bn(t)&&s.push(new(CT())(e._repo,e._path)),{removed:s,events:o}}function yy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rn(t,e){let n=null;for(const r of t.views.values())n=n||vT(r,e);return n}function vy(t,e){if(e._queryParams.loadsAllData())return Gl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function wy(t,e){return vy(t,e)!=null}function bn(t){return Gl(t)!=null}function Gl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl;function NT(t){C(!vl,"__referenceConstructor has already been defined"),vl=t}function xT(){return C(vl,"Reference.ts has not been loaded"),vl}let RT=1;class up{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=iT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ey(t,e,n,r,i){return GI(t.pendingWriteTree_,e,n,r,i),i?di(t,new ar(Id(),e,n)):[]}function PT(t,e,n,r){KI(t.pendingWriteTree_,e,n,r);const i=X.fromObject(n);return di(t,new ei(Id(),e,i))}function mn(t,e,n=!1){const r=QI(t.pendingWriteTree_,e);if(YI(t.pendingWriteTree_,e)){let s=new X(null);return r.snap!=null?s=s.set(K(),!0):Te(r.children,o=>{s=s.set(new q(o),!0)}),di(t,new fl(r.path,s,n))}else return[]}function Ls(t,e,n){return di(t,new ar(Td(),e,n))}function AT(t,e,n){const r=X.fromObject(n);return di(t,new ei(Td(),e,r))}function OT(t,e){return di(t,new _s(Td(),e))}function DT(t,e,n){const r=Dd(t,n);if(r){const i=Ld(r),s=i.path,o=i.queryId,l=Le(s,e),a=new _s(Nd(o),l);return bd(t,s,a)}else return[]}function wl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||wy(o,e))){const a=TT(o,e,n,r);kT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>bn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=MT(h);for(let _=0;_<g.length;++_){const v=g[_],O=v.query,p=Iy(t,v);t.listenProvider_.startListening(Hi(O),ys(t,O),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Hi(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Kl(h));t.listenProvider_.stopListening(Hi(h),g)}))}FT(t,u)}return l}function Sy(t,e,n,r){const i=Dd(t,r);if(i!=null){const s=Ld(i),o=s.path,l=s.queryId,a=Le(o,e),u=new ar(Nd(l),a,n);return bd(t,o,u)}else return[]}function LT(t,e,n,r){const i=Dd(t,r);if(i){const s=Ld(i),o=s.path,l=s.queryId,a=Le(o,e),u=X.fromObject(n),d=new ei(Nd(l),a,u);return bd(t,o,d)}else return[]}function tc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Le(h,i);s=s||Rn(g,_),o=o||bn(g)});let l=t.syncPointTree_.get(i);l?(o=o||bn(l),s=s||Rn(l,K())):(l=new gy,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=Rn(_,K());v&&(s=s.updateImmediateChild(g,v))}));const u=wy(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Kl(e);C(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=UT();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Hl(t.pendingWriteTree_,i);let c=IT(l,e,n,d,s,a);if(!u&&!o&&!r){const h=vy(l,e);c=c.concat(zT(t,e,h))}return c}function Od(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Le(o,e),u=Rn(l,a);if(u)return u});return cy(i,e,s,n,!0)}function bT(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Le(u,n);r=r||Rn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Rn(i,K()):(i=new gy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ln(r,!0,!1):null,l=Hl(t.pendingWriteTree_,e._path),a=_y(i,e,l,s?o.getNode():D.EMPTY_NODE,s);return yT(a)}function di(t,e){return Cy(e,t.syncPointTree_,null,Hl(t.pendingWriteTree_,K()))}function Cy(t,e,n,r){if(W(t.path))return ky(t,e,n,r);{const i=e.get(K());n==null&&i!=null&&(n=Rn(i,K()));let s=[];const o=z(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=dy(r,o);s=s.concat(Cy(l,a,u,d))}return i&&(s=s.concat(Ad(i,t,r,n))),s}}function ky(t,e,n,r){const i=e.get(K());n==null&&i!=null&&(n=Rn(i,K()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=dy(r,o),d=t.operationForChild(o);d&&(s=s.concat(ky(d,l,a,u)))}),i&&(s=s.concat(Ad(i,t,r,n))),s}function Iy(t,e){const n=e.query,r=ys(t,n);return{hashFn:()=>(_T(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?DT(t,n._path,r):OT(t,n._path);{const s=Ok(i,n);return wl(t,n,null,s)}}}}function ys(t,e){const n=Kl(e);return t.queryToTagMap.get(n)}function Kl(t){return t._path.toString()+"$"+t._queryIdentifier}function Dd(t,e){return t.tagToQueryMap.get(e)}function Ld(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function bd(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=Hl(t.pendingWriteTree_,e);return Ad(r,n,i,null)}function MT(t){return t.fold((e,n,r)=>{if(n&&bn(n))return[Gl(n)];{let i=[];return n&&(i=yy(n)),Te(r,(s,o)=>{i=i.concat(o)}),i}})}function Hi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(xT())(t._repo,t._path):t}function FT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Kl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function UT(){return RT++}function zT(t,e,n){const r=e._path,i=ys(t,e),s=Iy(t,n),o=t.listenProvider_.startListening(Hi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!bn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!W(u)&&d&&bn(d))return[Gl(d).query];{let h=[];return d&&(h=h.concat(yy(d).map(g=>g.query))),Te(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Hi(d),ys(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Md(n)}node(){return this.node_}}class Fd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new Fd(this.syncTree_,n)}node(){return Od(this.syncTree_,this.path_)}}const jT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},cp=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return WT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $T(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},WT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},$T=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Ty=function(t,e,n,r){return Ud(e,new Fd(n,t),r)},Ny=function(t,e,n){return Ud(t,new Md(e),n)};function Ud(t,e,n){const r=t.getPriority().val(),i=cp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=cp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ye(l,pe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ye(i))),o.forEachChild(ce,(l,a)=>{const u=Ud(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function jd(t,e){let n=e instanceof q?e:new q(e),r=t,i=z(n);for(;i!==null;){const s=qr(r.node.children,i)||{children:{},childCount:0};r=new zd(i,r,s),n=J(n),i=z(n)}return r}function hi(t){return t.node.value}function xy(t,e){t.node.value=e,nc(t)}function Ry(t){return t.node.childCount>0}function BT(t){return hi(t)===void 0&&!Ry(t)}function Ql(t,e){Te(t.node.children,(n,r)=>{e(new zd(n,t,r))})}function Py(t,e,n,r){n&&e(t),Ql(t,i=>{Py(i,e,!0)})}function VT(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function bs(t){return new q(t.parent===null?t.name:bs(t.parent)+"/"+t.name)}function nc(t){t.parent!==null&&HT(t.parent,t.name,t)}function HT(t,e,n){const r=BT(n),i=At(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,nc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,nc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=/[\[\].#$\/\u0000-\u001F\u007F]/,KT=/[\[\].#$\u0000-\u001F\u007F]/,za=10*1024*1024,Wd=function(t){return typeof t=="string"&&t.length!==0&&!GT.test(t)},Ay=function(t){return typeof t=="string"&&t.length!==0&&!KT.test(t)},QT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ay(t)},YT=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!pd(t)||t&&typeof t=="object"&&At(t,".sv")},qT=function(t,e,n,r){Yl(Fl(t,"value"),e,n)},Yl=function(t,e,n){const r=n instanceof q?new hI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Hn(r)+" with contents = "+e.toString());if(pd(e))throw new Error(t+"contains "+e.toString()+" "+Hn(r));if(typeof e=="string"&&e.length>za/3&&Ul(e)>za)throw new Error(t+"contains a string greater than "+za+" utf8 bytes "+Hn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Te(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Wd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fI(r,o),Yl(t,l,r),pI(r)}),i&&s)throw new Error(t+' contains ".value" child '+Hn(r)+" in addition to actual children.")}},XT=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=fs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Wd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(dI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&rt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},JT=function(t,e,n,r){const i=Fl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Te(e,(o,l)=>{const a=new q(o);if(Yl(i,l,ue(n,a)),vd(a)===".priority"&&!YT(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),XT(i,s)},Oy=function(t,e,n,r){if(!Ay(n))throw new Error(Fl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Oy(t,e,n)},eN=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},tN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!QT(n))throw new Error(Fl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ql(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!wd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Dy(t,e,n){ql(t,n),Ly(t,r=>wd(r,e))}function lt(t,e,n){ql(t,n),Ly(t,r=>rt(r,e)||rt(e,r))}function Ly(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(rN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Wi&&Ce("event: "+n.toString()),ci(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN="repo_interrupt",sN=25;class oN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hl(),this.transactionQueueTree_=new zd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lN(t,e,n){if(t.stats_=_d(t.repoInfo_),t.forceRestClient_||Mk())t.server_=new dl(t.repoInfo_,(r,i,s,o)=>{dp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>hp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new $t(t.repoInfo_,e,(r,i,s,o)=>{dp(t,r,i,s,o)},r=>{hp(t,r)},r=>{uN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Wk(t.repoInfo_,()=>new jI(t.stats_,t.server_)),t.infoData_=new bI,t.infoSyncTree_=new up({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ls(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),$d(t,"connected",!1),t.serverSyncTree_=new up({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);lt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function aN(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Xl(t){return jT({timestamp:aN(t)})}function dp(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=el(n,u=>pe(u));o=LT(t.serverSyncTree_,s,a,i)}else{const a=pe(n);o=Sy(t.serverSyncTree_,s,a,i)}else if(r){const a=el(n,u=>pe(u));o=AT(t.serverSyncTree_,s,a)}else{const a=pe(n);o=Ls(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ni(t,s)),lt(t.eventQueue_,l,o)}function hp(t,e){$d(t,"connected",e),e===!1&&fN(t)}function uN(t,e){Te(e,(n,r)=>{$d(t,n,r)})}function $d(t,e,n){const r=new q("/.info/"+e),i=pe(n);t.infoData_.updateSnapshot(r,i);const s=Ls(t.infoSyncTree_,r,i);lt(t.eventQueue_,r,s)}function Bd(t){return t.nextWriteId_++}function cN(t,e,n){const r=bT(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=pe(i).withIndex(e._queryParams.getIndex());tc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ls(t.serverSyncTree_,e._path,s);else{const l=ys(t.serverSyncTree_,e);o=Sy(t.serverSyncTree_,e._path,s,l)}return lt(t.eventQueue_,e._path,o),wl(t.serverSyncTree_,e,n,null,!0),s},i=>(Ms(t,"get for query "+me(e)+" failed: "+i),Promise.reject(new Error(i))))}function dN(t,e,n,r,i){Ms(t,"set",{path:e.toString(),value:n,priority:r});const s=Xl(t),o=pe(n,r),l=Od(t.serverSyncTree_,e),a=Ny(o,l,s),u=Bd(t),d=Ey(t.serverSyncTree_,e,a,u,!0);ql(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Me("set at "+e+" failed: "+h);const v=mn(t.serverSyncTree_,u,!_);lt(t.eventQueue_,e,v),rc(t,i,h,g)});const c=Hd(t,e);ni(t,c),lt(t.eventQueue_,c,[])}function hN(t,e,n,r){Ms(t,"update",{path:e.toString(),value:n});let i=!0;const s=Xl(t),o={};if(Te(n,(l,a)=>{i=!1,o[l]=Ty(ue(e,l),pe(a),t.serverSyncTree_,s)}),i)Ce("update() called with empty data.  Don't do anything."),rc(t,r,"ok",void 0);else{const l=Bd(t),a=PT(t.serverSyncTree_,e,o,l);ql(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||Me("update at "+e+" failed: "+u);const h=mn(t.serverSyncTree_,l,!c),g=h.length>0?ni(t,e):e;lt(t.eventQueue_,g,h),rc(t,r,u,d)}),Te(n,u=>{const d=Hd(t,ue(e,u));ni(t,d)}),lt(t.eventQueue_,e,[])}}function fN(t){Ms(t,"onDisconnectEvents");const e=Xl(t),n=hl();Yu(t.onDisconnect_,K(),(i,s)=>{const o=Ty(i,s,t.serverSyncTree_,e);oy(n,i,o)});let r=[];Yu(n,K(),(i,s)=>{r=r.concat(Ls(t.serverSyncTree_,i,s));const o=Hd(t,i);ni(t,o)}),t.onDisconnect_=hl(),lt(t.eventQueue_,K(),r)}function pN(t,e,n){let r;z(e._path)===".info"?r=tc(t.infoSyncTree_,e,n):r=tc(t.serverSyncTree_,e,n),Dy(t.eventQueue_,e._path,r)}function by(t,e,n){let r;z(e._path)===".info"?r=wl(t.infoSyncTree_,e,n):r=wl(t.serverSyncTree_,e,n),Dy(t.eventQueue_,e._path,r)}function mN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(iN)}function Ms(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function rc(t,e,n,r){e&&ci(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function My(t,e,n){return Od(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function Vd(t,e=t.transactionQueueTree_){if(e||Jl(t,e),hi(e)){const n=Uy(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gN(t,bs(e),n)}else Ry(e)&&Ql(e,n=>{Vd(t,n)})}function gN(t,e,n){const r=n.map(u=>u.currentWriteId),i=My(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];C(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Le(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ms(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(mn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Jl(t,jd(t.transactionQueueTree_,e)),Vd(t,t.transactionQueueTree_),lt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ci(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Me("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}ni(t,e)}},o)}function ni(t,e){const n=Fy(t,e),r=bs(n),i=Uy(t,n);return _N(t,i,r),r}function _N(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Le(n,a.path);let d=!1,c;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(mn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=sN)d=!0,c="maxretry",i=i.concat(mn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=My(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){Yl("transaction failed: Data returned ",g,a.path);let _=pe(g);typeof g=="object"&&g!=null&&At(g,".priority")||(_=_.updatePriority(h.getPriority()));const O=a.currentWriteId,p=Xl(t),f=Ny(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=Bd(t),o.splice(o.indexOf(O),1),i=i.concat(Ey(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(mn(t.serverSyncTree_,O,!0))}else d=!0,c="nodata",i=i.concat(mn(t.serverSyncTree_,a.currentWriteId,!0))}lt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Jl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ci(r[l]);Vd(t,t.transactionQueueTree_)}function Fy(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&hi(r)===void 0;)r=jd(r,n),e=J(e),n=z(e);return r}function Uy(t,e){const n=[];return zy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function zy(t,e,n){const r=hi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ql(e,i=>{zy(t,i,n)})}function Jl(t,e){const n=hi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,xy(e,n.length>0?n:void 0)}Ql(e,r=>{Jl(t,r)})}function Hd(t,e){const n=bs(Fy(t,e)),r=jd(t.transactionQueueTree_,e);return VT(r,i=>{ja(t,i)}),ja(t,r),Py(r,i=>{ja(t,i)}),n}function ja(t,e){const n=hi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(mn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?xy(e,void 0):n.length=s+1,lt(t.eventQueue_,bs(e),i);for(let o=0;o<r.length;o++)ci(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Me(`Invalid query segment '${n}' in query '${t}'`)}return e}const fp=function(t,e){const n=wN(t),r=n.namespace;n.domain==="firebase.com"&&qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Nk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new B_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},wN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=yN(t.substring(d,c)));const h=vN(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class SN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:vd(this._path)}get ref(){return new Jt(this._repo,this._path)}get _queryIdentifier(){const e=Zf(this._queryParams),n=md(e);return n==="{}"?"default":n}get _queryObject(){return Zf(this._queryParams)}isEqual(e){if(e=at(e),!(e instanceof Kd))return!1;const n=this._repo===e._repo,r=wd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+cI(this._path)}}class Jt extends Kd{constructor(e,n){super(e,n,new kd,!1)}get parent(){const e=J_(this._path);return e===null?null:new Jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class vs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=ic(this.ref,e);return new vs(this._node.getChild(n),r,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new vs(i,ic(this.ref,r),ce)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jn(t,e){return t=at(t),t._checkNotDeleted("ref"),e!==void 0?ic(t._root,e):t._root}function ic(t,e){return t=at(t),z(t._path)===null?ZT("child","path",e):Oy("child","path",e),new Jt(t._repo,ue(t._path,e))}function pp(t,e){t=at(t),eN("set",t._path),qT("set",e,t._path);const n=new Is;return dN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function jy(t,e){JT("update",e,t._path);const n=new Is;return hN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Wy(t){t=at(t);const e=new Gd(()=>{}),n=new Fs(e);return cN(t._repo,t,n).then(r=>new vs(r,new Jt(t._repo,t._path),t._queryParams.getIndex()))}class Fs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new EN("value",this,new vs(e.snapshotNode,new Jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new SN(this,e,n):null}matches(e){return e instanceof Fs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function CN(t,e,n,r,i){const s=new Gd(n,void 0),o=new Fs(s);return pN(t._repo,t,o),()=>by(t._repo,t,o)}function kN(t,e,n,r){return CN(t,"value",e)}function IN(t,e,n){let r=null;const i=n?new Gd(n):null;r=new Fs(i),by(t._repo,t,r)}ST(Jt);NT(Jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN="FIREBASE_DATABASE_EMULATOR_HOST",sc={};let NN=!1;function xN(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Ns(s);t.repoInfo_=new B_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function RN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fp(s,i),l=o.repoInfo,a;typeof process<"u"&&bf&&(a=bf[TN]),a?(s=`http://${a}?ns=${l.namespace}`,o=fp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new Uk(t.name,t.options,e);tN("Invalid Firebase Database URL",o),W(o.path)||qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=AN(l,t,u,new Fk(t,n));return new ON(d,t)}function PN(t,e){const n=sc[e];(!n||n[t.key]!==t)&&qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mN(t),delete n[t.key]}function AN(t,e,n,r){let i=sc[e.name];i||(i={},sc[e.name]=i);let s=i[t.toURLString()];return s&&qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new oN(t,NN,n,r),i[t.toURLString()]=s,s}class ON{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jt(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qt("Cannot call "+e+" on a deleted database.")}}function DN(t=Qg(),e){const n=od(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=QE("database");r&&LN(n,...r)}return n}function LN(t,e,n,r={}){t=at(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ir(r,s.repoInfo_.emulatorOptions))return;qt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new To(To.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:YE(r.mockUserToken,t.app.options.projectId);o=new To(l)}Ns(e)&&Vg(e),xN(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){Ek(ai),Xr(new sr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return RN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Tn(Mf,Ff,t),Tn(Mf,Ff,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN={".sv":"timestamp"};function FN(){return MN}$t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bN();const $y={apiKey:"AIzaSyByzCEAfMObQqYNXMOlVXoQd00GMo3QX1M",authDomain:"kelime-oyunu-9a632.firebaseapp.com",databaseURL:"https://kelime-oyunu-9a632-default-rtdb.firebaseio.com",projectId:"kelime-oyunu-9a632",appId:"1:634682520854:web:04707f6bed348d5e61cc37"},By=Object.values($y).every(Boolean);let Wa=null,$a=null;function Us(){if(!By)throw new Error("Firebase yapılandırması eksik.");if(!Wa||!$a){const t=Kg($y);Wa=DN(t),$a=vk(t)}return{db:Wa,auth:$a}}async function Vy(){const{auth:t}=Us();return t.currentUser||await rC(t),t.currentUser.uid}function mp(){return Math.random().toString(36).slice(2,8).toUpperCase()}function UN(){return By}async function zN(t,e,n){const r=await Vy(),{db:i}=Us();let s=mp();for(let o=0;o<3;o+=1){const l=Jn(i,`rooms/${s}`);if(!(await Wy(l)).exists())break;s=mp()}return await pp(Jn(i,`rooms/${s}`),{createdAt:FN(),wordLength:t,targetWord:e,hostId:r}),await pp(Jn(i,`rooms/${s}/players/${r}`),{name:n,attempts:0,solved:!1,elapsedSeconds:0,updatedAt:Date.now()}),{code:s,uid:r,hostId:r}}async function jN(t,e){var l,a,u,d,c,h;const n=await Vy(),{db:r}=Us(),i=Jn(r,`rooms/${t}`),s=await Wy(i);if(!s.exists())return null;const o=s.val();return await jy(Jn(r,`rooms/${t}/players/${n}`),{name:e,attempts:((a=(l=o.players)==null?void 0:l[n])==null?void 0:a.attempts)??0,solved:((d=(u=o.players)==null?void 0:u[n])==null?void 0:d.solved)??!1,elapsedSeconds:((h=(c=o.players)==null?void 0:c[n])==null?void 0:h.elapsedSeconds)??0,updatedAt:Date.now()}),{code:t,uid:n,hostId:o.hostId??n,wordLength:o.wordLength,targetWord:o.targetWord}}function WN(t,e){const{db:n}=Us(),r=Jn(n,`rooms/${t}/players`),i=kN(r,s=>{const o=s.val()??{},l=Object.entries(o).map(([a,u])=>({id:a,...u}));l.sort((a,u)=>{const d=Number(a.attempts??0),c=Number(u.attempts??0),h=Number(a.elapsedSeconds??0),g=Number(u.elapsedSeconds??0);return d!==c?d-c:a.solved!==u.solved?a.solved?-1:1:h-g}),e(l)});return()=>IN(r,"value",i)}async function $N(t,e,n){const{db:r}=Us();await jy(Jn(r,`rooms/${t}/players/${e}`),{...n,updatedAt:Date.now()})}const oc=[5,6,7,8],kt=6,gp=UE.reduce((t,e)=>{const n=e.toLocaleUpperCase("tr-TR"),r=[...n].length;return oc.includes(r)&&(t[r]=t[r]??[],t[r].includes(n)||t[r].push(n)),t},{}),BN=[["E","R","T","Y","U","I","O","P","Ğ","Ü"],["A","S","D","F","G","H","J","K","L","Ş","İ"],["ENTER","Z","C","V","B","N","M","Ö","Ç","SİL"]],_p="wordle-tr6-stats",yp="wordle-tr6-theme",vp="wordle-tr6-keyboard-scale",wp=1,Ep=1.9,Sp=.08,VN=1.3,ao={played:0,wins:0,currentStreak:0,bestStreak:0,distribution:Array(kt).fill(0)};function HN(t){if(!t.length)return"KELIME";const e=Math.floor(Date.now()/864e5);return t[e%t.length]}function No(t){return t.trim().toLocaleUpperCase("tr-TR")}function GN(t){const e=new TextEncoder().encode(t);let n="";return e.forEach(r=>{n+=String.fromCharCode(r)}),btoa(n)}function KN(t){try{const e=atob(t),n=Uint8Array.from(e,r=>r.charCodeAt(0));return No(new TextDecoder().decode(n))}catch{return null}}function Ba(t,e){const n=Array(e.length).fill("absent"),r=e.split(""),i=t.split("");return i.forEach((s,o)=>{r[o]===s&&(n[o]="correct",r[o]="_",i[o]="*")}),i.forEach((s,o)=>{if(s==="*")return;const l=r.indexOf(s);l!==-1&&(n[o]="present",r[l]="_")}),n}function QN(){const[t,e]=M.useState(()=>{const y=localStorage.getItem(yp);return y==="dark"||y==="light"?y:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),[n,r]=M.useState(()=>{var P;const y=localStorage.getItem(_p);if(!y)return ao;try{const B=JSON.parse(y);return{...ao,...B,distribution:((P=B.distribution)==null?void 0:P.length)===kt?B.distribution:ao.distribution}}catch{return ao}}),[i,s]=M.useState(()=>{const y=localStorage.getItem(vp),P=y?Number(y):NaN;return!Number.isNaN(P)&&P>=wp&&P<=Ep?P:VN}),[o,l]=M.useState(!1),[a,u]=M.useState(!1),[d,c]=M.useState(!1),[h,g]=M.useState([]),[_,v]=M.useState(!1),[O,p]=M.useState(""),[f,m]=M.useState(""),[w,T]=M.useState(!1),[x,R]=M.useState(""),[k,ee]=M.useState(null),[F,je]=M.useState([]),Ot=UN(),Ne=M.useMemo(()=>{const P=new URLSearchParams(window.location.search).get("challenge");if(!P)return null;const B=KN(P);return!B||!oc.includes(B.length)?null:B},[]),[V,zs]=M.useState((Ne==null?void 0:Ne.length)??6),[ut,Zt]=M.useState(!!Ne),I=M.useMemo(()=>gp[V]??gp[6]??[],[V]),A=(k==null?void 0:k.targetWord)??Ne??HN(I),b=M.useMemo(()=>new Set([...I??[],A]),[I,A]),[U,re]=M.useState([]),[Ke,Oe]=M.useState(""),[fi,H]=M.useState(`${V} harfli kelimeyi bul.`),[jn,Hy]=M.useState(""),[js,pi]=M.useState(0),pr=M.useRef(!1),en=U.some(y=>y===A),Zl=U.length>=kt&&!en,St=en||Zl;M.useEffect(()=>{H(`${V} harfli kelimeyi bul.`),re([]),Oe(""),pi(0),c(!1),v(!1),g([]),pr.current=!1},[V,A]),M.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem(yp,t)},[t]),M.useEffect(()=>{localStorage.setItem(_p,JSON.stringify(n))},[n]),M.useEffect(()=>{localStorage.setItem(vp,i.toFixed(2))},[i]);const Gy=M.useMemo(()=>{const y=[...U];for(St||y.push(Ke);y.length<kt;)y.push("");return y},[U,Ke,St]),Ky=M.useMemo(()=>{const y=new Map;return U.forEach(P=>{const B=Ba(P,A);P.split("").forEach((_e,Dt)=>{const mr=B[Dt],tn=y.get(_e)??"unknown";tn!=="correct"&&(tn==="present"&&mr==="absent"||y.set(_e,mr))})}),y},[U,A]);M.useEffect(()=>{function y(P){const B=No(P.key);if(B==="ENTER"){qd();return}if(B==="BACKSPACE"){Yd();return}/^[A-ZÇĞİÖŞÜI]$/u.test(B)&&Qd(B)}return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)}),M.useEffect(()=>{if(!(!St||pr.current)){if(pr.current=!0,r(y=>{const P={...y,played:y.played+1,distribution:[...y.distribution]};if(en){const B=U.length-1;B>=0&&B<kt&&(P.distribution[B]+=1),P.wins+=1,P.currentStreak+=1,P.bestStreak=Math.max(P.bestStreak,P.currentStreak)}else P.currentStreak=0;return P}),en){const y=["#22c55e","#06b6d4","#facc15","#a855f7","#f43f5e","#3b82f6"],P=Array.from({length:72}).map((B,_e)=>({id:_e,left:Math.random()*100,color:y[_e%y.length],size:6+Math.random()*8,delay:Math.random()*.4,duration:1.8+Math.random()*1.4,rotate:Math.random()*360}));g(P),window.setTimeout(()=>g([]),3200);return}Zl&&c(!0)}},[St,en,Zl,U.length]),M.useEffect(()=>{if(!ut||St)return;const y=window.setInterval(()=>{pi(P=>P+1)},1e3);return()=>window.clearInterval(y)},[ut,St]),M.useEffect(()=>{if(k)return WN(k.code,je)},[k]),M.useEffect(()=>{!k||!ut||$N(k.code,k.uid,{attempts:U.length,solved:en,elapsedSeconds:js}).catch(()=>{})},[k,ut,U.length,en,js]);function Qd(y){St||Ke.length>=V||Oe(P=>P+y)}function Yd(){St||Oe(y=>y.slice(0,-1))}function qd(){if(St)return;if(Ke.length!==V){H(`Kelime ${V} harfli olmalı.`);return}if(!new RegExp(`^[A-ZÇĞİIÖŞÜ]{${V}}$`,"u").test(Ke)){H("Sadece harf kullanabilirsin.");return}const P=[...U,Ke];if(re(P),Oe(""),Ke===A){H("Tebrikler! Kelimeyi buldun.");return}if(P.length>=kt){H(`Bilemedin. Kelime: ${A}`);return}if(!b.has(Ke)){H("Kelime kabul edildi (geniş mod). Devam et.");return}H("Devam et, çok yakınsın.")}function Qy(y){if(y==="ENTER"){qd();return}if(y==="SİL"){Yd();return}Qd(y)}function Yy(){const y=en?U.findIndex(Wn=>Wn===A)+1:null,P=y??"X",B=Ne?`Kelime Oyunu Meydan ${V}H ${P}/${kt}`:`Kelime Oyunu Günlük ${V}H ${P}/${kt}`,_e=U.map(Wn=>Ba(Wn,A).map(Ws=>Ws==="correct"?"🟩":Ws==="present"?"🟨":"⬛").join("")).join(`
`),Dt=U.map((Wn,Ws)=>`${Ws+1}. ${Wn}`).join(`
`),mr=y?`Deneme: ${y}/${kt} | Süre: ${ea}`:`Deneme: ${U.length}/${kt} | Süre: ${ea}`,tn=`${B}
${mr}

Tahminler:
${Dt}

${_e}
${window.location.href}`;navigator.clipboard.writeText(tn).then(()=>{H("Sonuç panoya kopyalandı.")})}function qy(){const y=No(jn);if(y.length!==V){H(`${V} harfli bir kelime gir.`);return}const P=GN(y),B=`${window.location.origin}${window.location.pathname}?challenge=${P}`;navigator.clipboard.writeText(B).then(()=>{H("Meydan okuma linki panoya kopyalandı."),u(!1)})}function Xy(){re([]),Oe(""),pi(0),c(!1),g([]),pr.current=!1,H(`Yeni oyun basladi. ${V} harfli kelimeyi bul.`)}function Jy(y){Ne||k||zs(y)}function Zy(){s(y=>Math.min(Ep,Number((y+Sp).toFixed(2))))}function ev(){s(y=>Math.max(wp,Number((y-Sp).toFixed(2))))}function tv(){Zt(!0),re([]),Oe(""),pi(0),pr.current=!1,H(`${V} harfli kelimeyi bul.`)}async function nv(){if(!Ot){H("Canlı oda için Firebase ayarları eksik.");return}if(!O.trim()){H("Önce adını gir.");return}const y=No(x),P=new RegExp(`^[A-ZÇĞİIÖŞÜ]{${V}}$`,"u");if(w){if(y.length!==V){H(`Admin kelimesi ${V} harf olmalı.`);return}if(!P.test(y)){H("Admin kelimesi sadece harf içermeli.");return}}try{const B=w?y:A,_e=await zN(V,B,O.trim());ee({code:_e.code,uid:_e.uid,hostId:_e.hostId,wordLength:V,targetWord:B}),m(_e.code),Zt(!0),H(`Canlı oda açıldı: ${_e.code}`)}catch{H("Canlı oda oluşturulamadı.")}}async function rv(){if(!Ot){H("Canlı oda için Firebase ayarları eksik.");return}if(!O.trim()){H("Önce adını gir.");return}const y=f.trim().toUpperCase();if(y.length<4){H("Geçerli oda kodu gir.");return}try{const P=await jN(y,O.trim());if(!P){H("Oda bulunamadı.");return}ee({code:P.code,uid:P.uid,hostId:P.hostId,wordLength:P.wordLength,targetWord:P.targetWord}),zs(P.wordLength),Zt(!0),H(`Canlı odaya katıldın: ${P.code}`)}catch{H("Odaya katılınamadı.")}}function iv(){if(Ne){window.location.href=`${window.location.origin}${window.location.pathname}`;return}Zt(!1),u(!1),re([]),Oe(""),pi(0),ee(null),je([]),R(""),T(!1),c(!1),g([]),pr.current=!1,H(`${V} harfli kelimeyi bul.`)}const ea=`${String(Math.floor(js/60)).padStart(2,"0")}:${String(js%60).padStart(2,"0")}`,sv=n.played?Math.round(n.wins/n.played*100):0;return E.jsxs("main",{className:"mx-auto flex min-h-screen w-full max-w-md flex-col gap-4 bg-[hsl(var(--bg))] px-3 pb-[max(env(safe-area-inset-bottom),12px)] pt-4 text-[hsl(var(--text))] sm:px-4",children:[h.length>0&&E.jsx("div",{className:"pointer-events-none fixed inset-0 z-30 overflow-hidden",children:h.map(y=>E.jsx("span",{className:"confetti-piece",style:{left:`${y.left}%`,width:`${y.size}px`,height:`${y.size*1.6}px`,backgroundColor:y.color,animationDelay:`${y.delay}s`,animationDuration:`${y.duration}s`,transform:`rotate(${y.rotate}deg)`}},y.id))}),E.jsxs("header",{className:"-mx-3 bg-black px-3 py-3 sm:-mx-4 sm:px-4",children:[E.jsxs("div",{className:"mx-auto flex w-full max-w-md items-center justify-between gap-2",children:[ut?E.jsx("button",{type:"button",onClick:iv,className:"rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-100",children:"← Geri"}):E.jsx("button",{type:"button",onClick:()=>l(!0),className:"rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-100",children:"İstatistik"}),E.jsxs("h1",{className:"flex items-center gap-2 text-xl font-bold sm:text-2xl",children:[E.jsx("img",{src:"/logo.svg",alt:"Kelime Oyunu logosu",className:"h-7 w-7 rounded-md"}),"KELİME OYUNU"]}),E.jsx("button",{type:"button",onClick:()=>e(y=>y==="dark"?"light":"dark"),className:"rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-100",children:t==="dark"?"Light":"Dark"})]}),E.jsx("p",{className:"mx-auto mt-1 w-full max-w-md text-center text-xs text-zinc-400",children:k?`Canlı Oda: ${k.code}`:Ne?"Arkadaş meydan okuması":"Günün kelimesi modu"})]}),!ut&&!Ne&&E.jsxs(E.Fragment,{children:[E.jsxs("section",{className:"rounded-2xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-5 shadow-sm sm:p-6",children:[E.jsx("h2",{className:"mb-2 text-center text-xl font-bold sm:text-2xl",children:"Oyun Ayarı"}),E.jsx("p",{className:"mb-4 text-center text-sm text-[hsl(var(--muted))] sm:text-base",children:"Harf sayısını seç, sonra oyuna başla."}),E.jsx("div",{className:"mb-4 flex justify-center gap-2",children:oc.map(y=>E.jsxs("button",{type:"button",onClick:()=>Jy(y),className:`rounded-lg px-4 py-2 text-sm font-semibold sm:text-base ${V===y?"bg-cyan-700 text-white":"bg-[hsl(var(--surface2))] text-[hsl(var(--text))]"}`,children:[y," Harf"]},y))}),E.jsx("button",{type:"button",onClick:tv,className:"w-full rounded-lg bg-emerald-600 px-4 py-3 text-base font-semibold text-white sm:py-4 sm:text-lg",children:"Günün Kelimesi"}),E.jsx("button",{type:"button",onClick:()=>u(!0),className:"mt-3 w-full rounded-lg bg-cyan-700 px-4 py-3 text-base font-semibold text-white sm:py-4 sm:text-lg",children:"Arkadaşına Meydan Oku"})]}),E.jsxs("section",{className:"rounded-2xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-5 shadow-sm sm:p-6",children:[E.jsx("h3",{className:"mb-2 text-center text-lg font-bold sm:text-xl",children:"Canlı Oda (2-10 Kişi)"}),E.jsx("p",{className:"mb-3 text-center text-sm text-[hsl(var(--muted))]",children:"Adını gir, oda oluştur veya kodla katıl."}),E.jsx("input",{value:O,onChange:y=>p(y.target.value),placeholder:"Adın",className:"mb-2 w-full rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))] px-3 py-2 text-sm outline-none"}),E.jsxs("label",{className:"mb-2 flex items-center gap-2 text-xs text-[hsl(var(--muted))]",children:[E.jsx("input",{type:"checkbox",checked:w,onChange:y=>T(y.target.checked)}),"Kelimeyi sen belirle (oda sahibi/admin)"]}),w&&E.jsx("input",{value:x,onChange:y=>R(y.target.value),maxLength:V,placeholder:`Admin kelimesi (${V} harf)`,className:"mb-2 w-full rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))] px-3 py-2 text-sm uppercase outline-none"}),E.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[E.jsx("button",{type:"button",onClick:nv,className:"rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white",children:"Oda Oluştur"}),E.jsx("button",{type:"button",onClick:rv,className:"rounded-lg bg-sky-700 px-3 py-2 text-sm font-semibold text-white",children:"Odaya Katıl"})]}),E.jsx("input",{value:f,onChange:y=>m(y.target.value.toUpperCase()),placeholder:"Oda Kodu (ör. A1B2C3)",className:"mt-2 w-full rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))] px-3 py-2 text-sm uppercase outline-none"}),!Ot&&E.jsx("p",{className:"mt-2 text-xs text-amber-400",children:"Firebase ENV tanımlanınca canlı oda aktif olur."})]})]}),ut&&E.jsxs(E.Fragment,{children:[E.jsxs("section",{className:"rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-3 shadow-sm",children:[E.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[E.jsxs("span",{className:"flex items-center gap-1 rounded-full border border-cyan-500/40 bg-cyan-950/60 px-3 py-1 text-xs font-semibold text-cyan-300",children:[E.jsx("span",{"aria-hidden":"true",children:"⏳"}),ea]}),E.jsx("span",{className:"text-center text-sm text-emerald-500",children:fi}),E.jsx("span",{className:"w-[62px]"})]}),E.jsx("div",{className:"grid grid-rows-6 gap-2",children:Gy.map((y,P)=>{const B=y.length===V&&P<U.length?Ba(y,A):[];return E.jsx("div",{className:"grid gap-1.5",style:{gridTemplateColumns:`repeat(${V}, minmax(0, 1fr))`},children:Array.from({length:V}).map((_e,Dt)=>{const mr=y[Dt]??"",tn=B[Dt]??"unknown",Wn=tn==="correct"?"bg-green-600 border-green-500":tn==="present"?"bg-yellow-600 border-yellow-500":tn==="absent"?"bg-zinc-700 border-zinc-600":"border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))]";return E.jsx("div",{className:`flex aspect-square items-center justify-center rounded border text-lg font-bold uppercase sm:text-xl ${Wn}`,children:mr},`${P}-${Dt}`)})},P)})})]}),k&&E.jsxs("section",{className:"rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-3",children:[E.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[E.jsxs("h3",{className:"text-sm font-bold",children:["Canlı Oda: ",k.code]}),E.jsxs("span",{className:"text-xs text-[hsl(var(--muted))]",children:[F.length," oyuncu"]})]}),E.jsx("div",{className:"space-y-1",children:F.map(y=>E.jsxs("div",{className:"flex items-center justify-between rounded bg-[hsl(var(--surface2))] px-2 py-1 text-xs",children:[E.jsxs("span",{children:[y.name||"Oyuncu",y.id===k.hostId?" (Admin)":""]}),E.jsx("span",{className:"text-[hsl(var(--muted))]",children:y.solved?`Çözdü • ${y.elapsedSeconds}s`:`${y.attempts} deneme`})]},y.id))})]}),E.jsxs("section",{className:"sticky bottom-0 z-10 space-y-2 rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))]/95 p-3 backdrop-blur",children:[E.jsxs("div",{className:"mb-1 flex items-center justify-between text-xs",children:[E.jsx("span",{className:"text-[hsl(var(--muted))]",children:"Klavye Boyutu"}),E.jsxs("div",{className:"flex items-center gap-1",children:[E.jsx("button",{type:"button",onClick:ev,className:"rounded bg-[hsl(var(--surface2))] px-2 py-1 font-semibold",children:"-"}),E.jsxs("span",{className:"w-10 text-center",children:[Math.round(i*100),"%"]}),E.jsx("button",{type:"button",onClick:Zy,className:"rounded bg-[hsl(var(--surface2))] px-2 py-1 font-semibold",children:"+"})]})]}),BN.map((y,P)=>E.jsx("div",{className:"flex justify-center gap-1",children:y.map(B=>{const _e=Ky.get(B)??"unknown",Dt=_e==="correct"?"bg-green-600 text-white":_e==="present"?"bg-yellow-600 text-white":_e==="absent"?"bg-zinc-800 text-zinc-400":"bg-zinc-500 text-white";return E.jsx("button",{type:"button",onClick:()=>Qy(B),style:{minHeight:`${48*i}px`,minWidth:`${(B==="ENTER"||B==="SİL"?62:32)*i}px`,fontSize:`${13*i}px`,paddingInline:`${9*i}px`,paddingBlock:`${10*i}px`},className:`rounded font-semibold active:scale-95 ${Dt}`,children:B},B)})},P))]}),E.jsx("section",{className:"grid gap-2 rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-3",children:E.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[E.jsx("button",{type:"button",onClick:Yy,className:"rounded bg-emerald-600 px-4 py-3 text-sm font-semibold text-white disabled:opacity-50",disabled:!St,children:"Sonucu Paylaş"}),E.jsx("button",{type:"button",onClick:Xy,className:"rounded bg-indigo-600 px-4 py-3 text-sm font-semibold text-white",children:"Yeni Oyun"})]})})]}),o&&E.jsx("div",{className:"fixed inset-0 z-20 flex items-center justify-center bg-black/60 p-4",children:E.jsxs("div",{className:"w-full max-w-sm rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-4",children:[E.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[E.jsx("h2",{className:"text-lg font-bold",children:"İstatistikler"}),E.jsx("button",{type:"button",onClick:()=>l(!1),className:"rounded bg-[hsl(var(--surface2))] px-3 py-1 text-sm",children:"Kapat"})]}),E.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[E.jsxs("div",{className:"rounded bg-[hsl(var(--surface2))] p-2",children:["Oyun: ",n.played]}),E.jsxs("div",{className:"rounded bg-[hsl(var(--surface2))] p-2",children:["Kazanma: %",sv]}),E.jsxs("div",{className:"rounded bg-[hsl(var(--surface2))] p-2",children:["Seri: ",n.currentStreak]}),E.jsxs("div",{className:"rounded bg-[hsl(var(--surface2))] p-2",children:["En iyi: ",n.bestStreak]})]}),E.jsx("div",{className:"mt-3 space-y-1 text-xs",children:n.distribution.map((y,P)=>E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("span",{className:"w-4",children:P+1}),E.jsx("div",{className:"h-4 flex-1 rounded bg-[hsl(var(--surface2))]",children:E.jsx("div",{className:"h-4 rounded bg-emerald-600",style:{width:`${Math.min(100,y*15)}%`}})}),E.jsx("span",{className:"w-6 text-right",children:y})]},P))})]})}),a&&E.jsx("div",{className:"fixed inset-0 z-20 flex items-center justify-center bg-black/60 p-4",children:E.jsxs("div",{className:"w-full max-w-sm rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-4",children:[E.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[E.jsx("h2",{className:"text-lg font-bold",children:"Arkadaşına Meydan Oku"}),E.jsx("button",{type:"button",onClick:()=>u(!1),className:"rounded bg-[hsl(var(--surface2))] px-3 py-1 text-sm",children:"Kapat"})]}),E.jsxs("p",{className:"mb-3 text-xs text-[hsl(var(--muted))]",children:[V," harfli kelime gir. Link oluşunca arkadaşına gönder."]}),E.jsxs("div",{className:"flex gap-2",children:[E.jsx("input",{value:jn,onChange:y=>Hy(y.target.value),maxLength:V,placeholder:`${V} harfli kelime`,className:"w-full rounded border border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))] px-3 py-2 text-sm outline-none"}),E.jsx("button",{type:"button",onClick:qy,className:"rounded bg-cyan-700 px-4 py-2 text-sm font-semibold text-white",children:"Link Üret"})]})]})}),d&&E.jsx("div",{className:"fixed inset-0 z-30 flex items-center justify-center bg-black/70 p-4",children:E.jsxs("div",{className:"w-full max-w-sm rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-4 text-center",children:[E.jsx("h2",{className:"mb-2 text-2xl font-extrabold text-rose-400",children:"BİLEMEDİN!"}),E.jsxs("p",{className:"mb-3 text-sm text-[hsl(var(--muted))]",children:["Kelime: ",A]}),!_&&E.jsx("img",{src:"/bilemedin.png",alt:"Bilemedin",onError:()=>v(!0),className:"mx-auto mb-3 max-h-56 w-auto rounded-lg border border-[hsl(var(--stroke))]"}),E.jsx("button",{type:"button",onClick:()=>c(!1),className:"rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white",children:"Tamam"})]})})]})}FE({immediate:!0});Va.createRoot(document.getElementById("root")).render(E.jsx(Sv.StrictMode,{children:E.jsx(QN,{})}));
