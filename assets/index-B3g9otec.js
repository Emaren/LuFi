(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function TR(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Jf={exports:{}},Cl={},Zf={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function IR(){if(jy)return Re;jy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function I(b){return b===null||typeof b!="object"?null:(b=w&&b[w]||b["@@iterator"],typeof b=="function"?b:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,W={};function B(b,q,le){this.props=b,this.context=q,this.refs=W,this.updater=le||N}B.prototype.isReactComponent={},B.prototype.setState=function(b,q){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,q,"setState")},B.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function pe(){}pe.prototype=B.prototype;function _e(b,q,le){this.props=b,this.context=q,this.refs=W,this.updater=le||N}var ye=_e.prototype=new pe;ye.constructor=_e,j(ye,B.prototype),ye.isPureReactComponent=!0;var Ie=Array.isArray,nt=Object.prototype.hasOwnProperty,ke={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function C(b,q,le){var Se,Ce={},Le=null,je=null;if(q!=null)for(Se in q.ref!==void 0&&(je=q.ref),q.key!==void 0&&(Le=""+q.key),q)nt.call(q,Se)&&!D.hasOwnProperty(Se)&&(Ce[Se]=q[Se]);var ze=arguments.length-2;if(ze===1)Ce.children=le;else if(1<ze){for(var Ke=Array(ze),Pt=0;Pt<ze;Pt++)Ke[Pt]=arguments[Pt+2];Ce.children=Ke}if(b&&b.defaultProps)for(Se in ze=b.defaultProps,ze)Ce[Se]===void 0&&(Ce[Se]=ze[Se]);return{$$typeof:n,type:b,key:Le,ref:je,props:Ce,_owner:ke.current}}function A(b,q){return{$$typeof:n,type:b.type,key:q,ref:b.ref,props:b.props,_owner:b._owner}}function k(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function O(b){var q={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(le){return q[le]})}var L=/\/+/g;function R(b,q){return typeof b=="object"&&b!==null&&b.key!=null?O(""+b.key):q.toString(36)}function dt(b,q,le,Se,Ce){var Le=typeof b;(Le==="undefined"||Le==="boolean")&&(b=null);var je=!1;if(b===null)je=!0;else switch(Le){case"string":case"number":je=!0;break;case"object":switch(b.$$typeof){case n:case e:je=!0}}if(je)return je=b,Ce=Ce(je),b=Se===""?"."+R(je,0):Se,Ie(Ce)?(le="",b!=null&&(le=b.replace(L,"$&/")+"/"),dt(Ce,q,le,"",function(Pt){return Pt})):Ce!=null&&(k(Ce)&&(Ce=A(Ce,le+(!Ce.key||je&&je.key===Ce.key?"":(""+Ce.key).replace(L,"$&/")+"/")+b)),q.push(Ce)),1;if(je=0,Se=Se===""?".":Se+":",Ie(b))for(var ze=0;ze<b.length;ze++){Le=b[ze];var Ke=Se+R(Le,ze);je+=dt(Le,q,le,Ke,Ce)}else if(Ke=I(b),typeof Ke=="function")for(b=Ke.call(b),ze=0;!(Le=b.next()).done;)Le=Le.value,Ke=Se+R(Le,ze++),je+=dt(Le,q,le,Ke,Ce);else if(Le==="object")throw q=String(b),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return je}function $t(b,q,le){if(b==null)return b;var Se=[],Ce=0;return dt(b,Se,"","",function(Le){return q.call(le,Le,Ce++)}),Se}function qt(b){if(b._status===-1){var q=b._result;q=q(),q.then(function(le){(b._status===0||b._status===-1)&&(b._status=1,b._result=le)},function(le){(b._status===0||b._status===-1)&&(b._status=2,b._result=le)}),b._status===-1&&(b._status=0,b._result=q)}if(b._status===1)return b._result.default;throw b._result}var qe={current:null},ee={transition:null},ce={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ke};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:$t,forEach:function(b,q,le){$t(b,function(){q.apply(this,arguments)},le)},count:function(b){var q=0;return $t(b,function(){q++}),q},toArray:function(b){return $t(b,function(q){return q})||[]},only:function(b){if(!k(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Re.Component=B,Re.Fragment=t,Re.Profiler=s,Re.PureComponent=_e,Re.StrictMode=r,Re.Suspense=f,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Re.act=ne,Re.cloneElement=function(b,q,le){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Se=j({},b.props),Ce=b.key,Le=b.ref,je=b._owner;if(q!=null){if(q.ref!==void 0&&(Le=q.ref,je=ke.current),q.key!==void 0&&(Ce=""+q.key),b.type&&b.type.defaultProps)var ze=b.type.defaultProps;for(Ke in q)nt.call(q,Ke)&&!D.hasOwnProperty(Ke)&&(Se[Ke]=q[Ke]===void 0&&ze!==void 0?ze[Ke]:q[Ke])}var Ke=arguments.length-2;if(Ke===1)Se.children=le;else if(1<Ke){ze=Array(Ke);for(var Pt=0;Pt<Ke;Pt++)ze[Pt]=arguments[Pt+2];Se.children=ze}return{$$typeof:n,type:b.type,key:Ce,ref:Le,props:Se,_owner:je}},Re.createContext=function(b){return b={$$typeof:u,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:a,_context:b},b.Consumer=b},Re.createElement=C,Re.createFactory=function(b){var q=C.bind(null,b);return q.type=b,q},Re.createRef=function(){return{current:null}},Re.forwardRef=function(b){return{$$typeof:d,render:b}},Re.isValidElement=k,Re.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:qt}},Re.memo=function(b,q){return{$$typeof:m,type:b,compare:q===void 0?null:q}},Re.startTransition=function(b){var q=ee.transition;ee.transition={};try{b()}finally{ee.transition=q}},Re.unstable_act=ne,Re.useCallback=function(b,q){return qe.current.useCallback(b,q)},Re.useContext=function(b){return qe.current.useContext(b)},Re.useDebugValue=function(){},Re.useDeferredValue=function(b){return qe.current.useDeferredValue(b)},Re.useEffect=function(b,q){return qe.current.useEffect(b,q)},Re.useId=function(){return qe.current.useId()},Re.useImperativeHandle=function(b,q,le){return qe.current.useImperativeHandle(b,q,le)},Re.useInsertionEffect=function(b,q){return qe.current.useInsertionEffect(b,q)},Re.useLayoutEffect=function(b,q){return qe.current.useLayoutEffect(b,q)},Re.useMemo=function(b,q){return qe.current.useMemo(b,q)},Re.useReducer=function(b,q,le){return qe.current.useReducer(b,q,le)},Re.useRef=function(b){return qe.current.useRef(b)},Re.useState=function(b){return qe.current.useState(b)},Re.useSyncExternalStore=function(b,q,le){return qe.current.useSyncExternalStore(b,q,le)},Re.useTransition=function(){return qe.current.useTransition()},Re.version="18.3.1",Re}var zy;function om(){return zy||(zy=1,Zf.exports=IR()),Zf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By;function SR(){if(By)return Cl;By=1;var n=om(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var v,w={},I=null,N=null;m!==void 0&&(I=""+m),f.key!==void 0&&(I=""+f.key),f.ref!==void 0&&(N=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(w[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)w[v]===void 0&&(w[v]=f[v]);return{$$typeof:e,type:d,key:I,ref:N,props:w,_owner:s.current}}return Cl.Fragment=t,Cl.jsx=u,Cl.jsxs=u,Cl}var Wy;function CR(){return Wy||(Wy=1,Jf.exports=SR()),Jf.exports}var X=CR(),Je=om();const Fs=TR(Je);var Wc={},ep={exports:{}},fn={},tp={exports:{}},np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $y;function RR(){return $y||($y=1,function(n){function e(ee,ce){var ne=ee.length;ee.push(ce);e:for(;0<ne;){var b=ne-1>>>1,q=ee[b];if(0<s(q,ce))ee[b]=ce,ee[ne]=q,ne=b;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var ce=ee[0],ne=ee.pop();if(ne!==ce){ee[0]=ne;e:for(var b=0,q=ee.length,le=q>>>1;b<le;){var Se=2*(b+1)-1,Ce=ee[Se],Le=Se+1,je=ee[Le];if(0>s(Ce,ne))Le<q&&0>s(je,Ce)?(ee[b]=je,ee[Le]=ne,b=Le):(ee[b]=Ce,ee[Se]=ne,b=Se);else if(Le<q&&0>s(je,ne))ee[b]=je,ee[Le]=ne,b=Le;else break e}}return ce}function s(ee,ce){var ne=ee.sortIndex-ce.sortIndex;return ne!==0?ne:ee.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],v=1,w=null,I=3,N=!1,j=!1,W=!1,B=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(ee){for(var ce=t(m);ce!==null;){if(ce.callback===null)r(m);else if(ce.startTime<=ee)r(m),ce.sortIndex=ce.expirationTime,e(f,ce);else break;ce=t(m)}}function Ie(ee){if(W=!1,ye(ee),!j)if(t(f)!==null)j=!0,qt(nt);else{var ce=t(m);ce!==null&&qe(Ie,ce.startTime-ee)}}function nt(ee,ce){j=!1,W&&(W=!1,pe(C),C=-1),N=!0;var ne=I;try{for(ye(ce),w=t(f);w!==null&&(!(w.expirationTime>ce)||ee&&!O());){var b=w.callback;if(typeof b=="function"){w.callback=null,I=w.priorityLevel;var q=b(w.expirationTime<=ce);ce=n.unstable_now(),typeof q=="function"?w.callback=q:w===t(f)&&r(f),ye(ce)}else r(f);w=t(f)}if(w!==null)var le=!0;else{var Se=t(m);Se!==null&&qe(Ie,Se.startTime-ce),le=!1}return le}finally{w=null,I=ne,N=!1}}var ke=!1,D=null,C=-1,A=5,k=-1;function O(){return!(n.unstable_now()-k<A)}function L(){if(D!==null){var ee=n.unstable_now();k=ee;var ce=!0;try{ce=D(!0,ee)}finally{ce?R():(ke=!1,D=null)}}else ke=!1}var R;if(typeof _e=="function")R=function(){_e(L)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,$t=dt.port2;dt.port1.onmessage=L,R=function(){$t.postMessage(null)}}else R=function(){B(L,0)};function qt(ee){D=ee,ke||(ke=!0,R())}function qe(ee,ce){C=B(function(){ee(n.unstable_now())},ce)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){j||N||(j=!0,qt(nt))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var ce=3;break;default:ce=I}var ne=I;I=ce;try{return ee()}finally{I=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,ce){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ne=I;I=ee;try{return ce()}finally{I=ne}},n.unstable_scheduleCallback=function(ee,ce,ne){var b=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?b+ne:b):ne=b,ee){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ne+q,ee={id:v++,callback:ce,priorityLevel:ee,startTime:ne,expirationTime:q,sortIndex:-1},ne>b?(ee.sortIndex=ne,e(m,ee),t(f)===null&&ee===t(m)&&(W?(pe(C),C=-1):W=!0,qe(Ie,ne-b))):(ee.sortIndex=q,e(f,ee),j||N||(j=!0,qt(nt))),ee},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ee){var ce=I;return function(){var ne=I;I=ce;try{return ee.apply(this,arguments)}finally{I=ne}}}}(np)),np}var qy;function AR(){return qy||(qy=1,tp.exports=RR()),tp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy;function PR(){if(Hy)return fn;Hy=1;var n=om(),e=AR();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function I(i){return f.call(w,i)?!0:f.call(v,i)?!1:m.test(i)?w[i]=!0:(v[i]=!0,!1)}function N(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function j(i,o,l,h){if(o===null||typeof o>"u"||N(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function W(i,o,l,h,p,_,E){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=E}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){B[i]=new W(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];B[o]=new W(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){B[i]=new W(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){B[i]=new W(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){B[i]=new W(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){B[i]=new W(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){B[i]=new W(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){B[i]=new W(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){B[i]=new W(i,5,!1,i.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function _e(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(pe,_e);B[o]=new W(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(pe,_e);B[o]=new W(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(pe,_e);B[o]=new W(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){B[i]=new W(i,1,!1,i.toLowerCase(),null,!1,!1)}),B.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){B[i]=new W(i,1,!1,i.toLowerCase(),null,!0,!0)});function ye(i,o,l,h){var p=B.hasOwnProperty(o)?B[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(j(o,l,p,h)&&(l=null),h||p===null?I(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var Ie=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nt=Symbol.for("react.element"),ke=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),dt=Symbol.for("react.suspense_list"),$t=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),qe=Symbol.for("react.offscreen"),ee=Symbol.iterator;function ce(i){return i===null||typeof i!="object"?null:(i=ee&&i[ee]||i["@@iterator"],typeof i=="function"?i:null)}var ne=Object.assign,b;function q(i){if(b===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);b=o&&o[1]||""}return`
`+b+i}var le=!1;function Se(i,o){if(!i||le)return"";le=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(U){var h=U}Reflect.construct(i,[],o)}else{try{o.call()}catch(U){h=U}i.call(o.prototype)}else{try{throw Error()}catch(U){h=U}i()}}catch(U){if(U&&h&&typeof U.stack=="string"){for(var p=U.stack.split(`
`),_=h.stack.split(`
`),E=p.length-1,S=_.length-1;1<=E&&0<=S&&p[E]!==_[S];)S--;for(;1<=E&&0<=S;E--,S--)if(p[E]!==_[S]){if(E!==1||S!==1)do if(E--,S--,0>S||p[E]!==_[S]){var P=`
`+p[E].replace(" at new "," at ");return i.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",i.displayName)),P}while(1<=E&&0<=S);break}}}finally{le=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?q(i):""}function Ce(i){switch(i.tag){case 5:return q(i.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return i=Se(i.type,!1),i;case 11:return i=Se(i.type.render,!1),i;case 1:return i=Se(i.type,!0),i;default:return""}}function Le(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case ke:return"Portal";case A:return"Profiler";case C:return"StrictMode";case R:return"Suspense";case dt:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case k:return(i._context.displayName||"Context")+".Provider";case L:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case $t:return o=i.displayName||null,o!==null?o:Le(i.type)||"Memo";case qt:o=i._payload,i=i._init;try{return Le(i(o))}catch{}}return null}function je(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(o);case 8:return o===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ze(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ke(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Pt(i){var o=Ke(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,_.call(this,E)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function xr(i){i._valueTracker||(i._valueTracker=Pt(i))}function to(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Ke(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function ui(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function is(i,o){var l=o.checked;return ne({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function no(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=ze(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function xa(i,o){o=o.checked,o!=null&&ye(i,"checked",o,!1)}function Da(i,o){xa(i,o);var l=ze(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?ro(i,o.type,l):o.hasOwnProperty("defaultValue")&&ro(i,o.type,ze(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Pu(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function ro(i,o,l){(o!=="number"||ui(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Dr=Array.isArray;function Or(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+ze(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Oa(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function io(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Dr(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:ze(l)}}function so(i,o){var l=ze(o.value),h=ze(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function ba(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function vt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Et(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?vt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var br,La=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=br.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function ci(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},os=["Webkit","ms","Moz","O"];Object.keys(ss).forEach(function(i){os.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ss[o]=ss[i]})});function Ma(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ss.hasOwnProperty(i)&&ss[i]?(""+o).trim():o+"px"}function Va(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Ma(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Fa=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ua(i,o){if(o){if(Fa[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function ja(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var as=null;function oo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ao=null,Nn=null,cr=null;function lo(i){if(i=cl(i)){if(typeof ao!="function")throw Error(t(280));var o=i.stateNode;o&&(o=ic(o),ao(i.stateNode,i.type,o))}}function hr(i){Nn?cr?cr.push(i):cr=[i]:Nn=i}function za(){if(Nn){var i=Nn,o=cr;if(cr=Nn=null,lo(i),o)for(i=0;i<o.length;i++)lo(o[i])}}function ls(i,o){return i(o)}function Ba(){}var Lr=!1;function Wa(i,o,l){if(Lr)return i(o,l);Lr=!0;try{return ls(i,o,l)}finally{Lr=!1,(Nn!==null||cr!==null)&&(Ba(),za())}}function ft(i,o){var l=i.stateNode;if(l===null)return null;var h=ic(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var uo=!1;if(d)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){uo=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{uo=!1}function us(i,o,l,h,p,_,E,S,P){var U=Array.prototype.slice.call(arguments,3);try{o.apply(l,U)}catch(G){this.onError(G)}}var cs=!1,co=null,Wn=!1,$a=null,Cd={onError:function(i){cs=!0,co=i}};function ho(i,o,l,h,p,_,E,S,P){cs=!1,co=null,us.apply(Cd,arguments)}function ku(i,o,l,h,p,_,E,S,P){if(ho.apply(this,arguments),cs){if(cs){var U=co;cs=!1,co=null}else throw Error(t(198));Wn||(Wn=!0,$a=U)}}function $n(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,o.flags&4098&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function hs(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function qn(i){if($n(i)!==i)throw Error(t(188))}function Nu(i){var o=i.alternate;if(!o){if(o=$n(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return qn(p),i;if(_===h)return qn(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var E=!1,S=p.child;S;){if(S===l){E=!0,l=p,h=_;break}if(S===h){E=!0,h=p,l=_;break}S=S.sibling}if(!E){for(S=_.child;S;){if(S===l){E=!0,l=_,h=p;break}if(S===h){E=!0,h=_,l=p;break}S=S.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function qa(i){return i=Nu(i),i!==null?fo(i):null}function fo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=fo(i);if(o!==null)return o;i=i.sibling}return null}var po=e.unstable_scheduleCallback,Ha=e.unstable_cancelCallback,xu=e.unstable_shouldYield,Rd=e.unstable_requestPaint,Qe=e.unstable_now,Du=e.unstable_getCurrentPriorityLevel,ds=e.unstable_ImmediatePriority,hi=e.unstable_UserBlockingPriority,xn=e.unstable_NormalPriority,Ga=e.unstable_LowPriority,Ou=e.unstable_IdlePriority,fs=null,En=null;function bu(i){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(fs,i,void 0,(i.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:Mu,Ka=Math.log,Lu=Math.LN2;function Mu(i){return i>>>=0,i===0?32:31-(Ka(i)/Lu|0)|0}var mo=64,go=4194304;function di(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function ps(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,E=l&268435455;if(E!==0){var S=E&~p;S!==0?h=di(S):(_&=E,_!==0&&(h=di(_)))}else E=l&~p,E!==0?h=di(E):_!==0&&(h=di(_));if(h===0)return 0;if(o!==0&&o!==h&&!(o&p)&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if(h&4&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-tn(o),p=1<<l,h|=i[l],o&=~p;return h}function Ad(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mr(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var E=31-tn(_),S=1<<E,P=p[E];P===-1?(!(S&l)||S&h)&&(p[E]=Ad(S,o)):P<=o&&(i.expiredLanes|=S),_&=~S}}function wn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function ms(){var i=mo;return mo<<=1,!(mo&4194240)&&(mo=64),i}function fi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function pi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-tn(o),i[o]=l}function He(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-tn(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function mi(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-tn(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var Oe=0;function gi(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Vu,_o,Fu,Uu,ju,Qa=!1,dr=[],Mt=null,Hn=null,Gn=null,_i=new Map,Dn=new Map,fr=[],Pd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zu(i,o){switch(i){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":_i.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(o.pointerId)}}function on(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=cl(o),o!==null&&_o(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function kd(i,o,l,h,p){switch(o){case"focusin":return Mt=on(Mt,i,o,l,h,p),!0;case"dragenter":return Hn=on(Hn,i,o,l,h,p),!0;case"mouseover":return Gn=on(Gn,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return _i.set(_,on(_i.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,Dn.set(_,on(Dn.get(_)||null,i,o,l,h,p)),!0}return!1}function Bu(i){var o=Es(i.target);if(o!==null){var l=$n(o);if(l!==null){if(o=l.tag,o===13){if(o=hs(l),o!==null){i.blockedOn=o,ju(i.priority,function(){Fu(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Vr(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=yo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);as=h,l.target.dispatchEvent(h),as=null}else return o=cl(l),o!==null&&_o(o),i.blockedOn=l,!1;o.shift()}return!0}function gs(i,o,l){Vr(i)&&l.delete(o)}function Wu(){Qa=!1,Mt!==null&&Vr(Mt)&&(Mt=null),Hn!==null&&Vr(Hn)&&(Hn=null),Gn!==null&&Vr(Gn)&&(Gn=null),_i.forEach(gs),Dn.forEach(gs)}function Kn(i,o){i.blockedOn===o&&(i.blockedOn=null,Qa||(Qa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wu)))}function Qn(i){function o(p){return Kn(p,i)}if(0<dr.length){Kn(dr[0],i);for(var l=1;l<dr.length;l++){var h=dr[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Mt!==null&&Kn(Mt,i),Hn!==null&&Kn(Hn,i),Gn!==null&&Kn(Gn,i),_i.forEach(o),Dn.forEach(o),l=0;l<fr.length;l++)h=fr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<fr.length&&(l=fr[0],l.blockedOn===null);)Bu(l),l.blockedOn===null&&fr.shift()}var Fr=Ie.ReactCurrentBatchConfig,yi=!0;function rt(i,o,l,h){var p=Oe,_=Fr.transition;Fr.transition=null;try{Oe=1,Ya(i,o,l,h)}finally{Oe=p,Fr.transition=_}}function Nd(i,o,l,h){var p=Oe,_=Fr.transition;Fr.transition=null;try{Oe=4,Ya(i,o,l,h)}finally{Oe=p,Fr.transition=_}}function Ya(i,o,l,h){if(yi){var p=yo(i,o,l,h);if(p===null)zd(i,o,h,_s,l),zu(i,h);else if(kd(p,i,o,l,h))h.stopPropagation();else if(zu(i,h),o&4&&-1<Pd.indexOf(i)){for(;p!==null;){var _=cl(p);if(_!==null&&Vu(_),_=yo(i,o,l,h),_===null&&zd(i,o,h,_s,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else zd(i,o,h,null,l)}}var _s=null;function yo(i,o,l,h){if(_s=null,i=oo(h),i=Es(i),i!==null)if(o=$n(i),o===null)i=null;else if(l=o.tag,l===13){if(i=hs(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return _s=i,null}function Xa(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Du()){case ds:return 1;case hi:return 4;case xn:case Ga:return 16;case Ou:return 536870912;default:return 16}default:return 16}}var Tn=null,vo=null,an=null;function Ja(){if(an)return an;var i,o=vo,l=o.length,h,p="value"in Tn?Tn.value:Tn.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var E=l-i;for(h=1;h<=E&&o[l-h]===p[_-h];h++);return an=p.slice(i,1<h?1-h:void 0)}function Eo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function pr(){return!0}function Za(){return!1}function Vt(i){function o(l,h,p,_,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(l=i[S],this[S]=l?l(_):_[S]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?pr:Za,this.isPropagationStopped=Za,this}return ne(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),o}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wo=Vt(Yn),mr=ne({},Yn,{view:0,detail:0}),xd=Vt(mr),To,Ur,vi,ys=ne({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==vi&&(vi&&i.type==="mousemove"?(To=i.screenX-vi.screenX,Ur=i.screenY-vi.screenY):Ur=To=0,vi=i),To)},movementY:function(i){return"movementY"in i?i.movementY:Ur}}),Io=Vt(ys),el=ne({},ys,{dataTransfer:0}),$u=Vt(el),So=ne({},mr,{relatedTarget:0}),Co=Vt(So),qu=ne({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),jr=Vt(qu),Hu=ne({},Yn,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Gu=Vt(Hu),Ku=ne({},Yn,{data:0}),tl=Vt(Ku),Ro={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yu(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=Qu[i])?!!o[i]:!1}function gr(){return Yu}var c=ne({},mr,{key:function(i){if(i.key){var o=Ro[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Eo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?nn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gr,charCode:function(i){return i.type==="keypress"?Eo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Eo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=Vt(c),y=ne({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Vt(y),M=ne({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gr}),z=Vt(M),Z=ne({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$e=Vt(Z),wt=ne({},ys,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=Vt(wt),kt=[9,13,27,32],gt=d&&"CompositionEvent"in window,On=null;d&&"documentMode"in document&&(On=document.documentMode);var In=d&&"TextEvent"in window&&!On,vs=d&&(!gt||On&&8<On&&11>=On),Ao=" ",bg=!1;function Lg(i,o){switch(i){case"keyup":return kt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Po=!1;function EC(i,o){switch(i){case"compositionend":return Mg(o);case"keypress":return o.which!==32?null:(bg=!0,Ao);case"textInput":return i=o.data,i===Ao&&bg?null:i;default:return null}}function wC(i,o){if(Po)return i==="compositionend"||!gt&&Lg(i,o)?(i=Ja(),an=vo=Tn=null,Po=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return vs&&o.locale!=="ko"?null:o.data;default:return null}}var TC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vg(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!TC[i.type]:o==="textarea"}function Fg(i,o,l,h){hr(h),o=tc(o,"onChange"),0<o.length&&(l=new wo("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var nl=null,rl=null;function IC(i){n_(i,0)}function Xu(i){var o=Oo(i);if(to(o))return i}function SC(i,o){if(i==="change")return o}var Ug=!1;if(d){var Dd;if(d){var Od="oninput"in document;if(!Od){var jg=document.createElement("div");jg.setAttribute("oninput","return;"),Od=typeof jg.oninput=="function"}Dd=Od}else Dd=!1;Ug=Dd&&(!document.documentMode||9<document.documentMode)}function zg(){nl&&(nl.detachEvent("onpropertychange",Bg),rl=nl=null)}function Bg(i){if(i.propertyName==="value"&&Xu(rl)){var o=[];Fg(o,rl,i,oo(i)),Wa(IC,o)}}function CC(i,o,l){i==="focusin"?(zg(),nl=o,rl=l,nl.attachEvent("onpropertychange",Bg)):i==="focusout"&&zg()}function RC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Xu(rl)}function AC(i,o){if(i==="click")return Xu(o)}function PC(i,o){if(i==="input"||i==="change")return Xu(o)}function kC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Xn=typeof Object.is=="function"?Object.is:kC;function il(i,o){if(Xn(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!Xn(i[p],o[p]))return!1}return!0}function Wg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function $g(i,o){var l=Wg(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Wg(l)}}function qg(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?qg(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Hg(){for(var i=window,o=ui();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=ui(i.document)}return o}function bd(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function NC(i){var o=Hg(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&qg(l.ownerDocument.documentElement,l)){if(h!==null&&bd(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=$g(l,_);var E=$g(l,h);p&&E&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(E.node,E.offset)):(o.setEnd(E.node,E.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var xC=d&&"documentMode"in document&&11>=document.documentMode,ko=null,Ld=null,sl=null,Md=!1;function Gg(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Md||ko==null||ko!==ui(h)||(h=ko,"selectionStart"in h&&bd(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),sl&&il(sl,h)||(sl=h,h=tc(Ld,"onSelect"),0<h.length&&(o=new wo("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=ko)))}function Ju(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var No={animationend:Ju("Animation","AnimationEnd"),animationiteration:Ju("Animation","AnimationIteration"),animationstart:Ju("Animation","AnimationStart"),transitionend:Ju("Transition","TransitionEnd")},Vd={},Kg={};d&&(Kg=document.createElement("div").style,"AnimationEvent"in window||(delete No.animationend.animation,delete No.animationiteration.animation,delete No.animationstart.animation),"TransitionEvent"in window||delete No.transitionend.transition);function Zu(i){if(Vd[i])return Vd[i];if(!No[i])return i;var o=No[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in Kg)return Vd[i]=o[l];return i}var Qg=Zu("animationend"),Yg=Zu("animationiteration"),Xg=Zu("animationstart"),Jg=Zu("transitionend"),Zg=new Map,e_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ei(i,o){Zg.set(i,o),a(o,[i])}for(var Fd=0;Fd<e_.length;Fd++){var Ud=e_[Fd],DC=Ud.toLowerCase(),OC=Ud[0].toUpperCase()+Ud.slice(1);Ei(DC,"on"+OC)}Ei(Qg,"onAnimationEnd"),Ei(Yg,"onAnimationIteration"),Ei(Xg,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Jg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ol));function t_(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,ku(h,o,void 0,i),i.currentTarget=null}function n_(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var E=h.length-1;0<=E;E--){var S=h[E],P=S.instance,U=S.currentTarget;if(S=S.listener,P!==_&&p.isPropagationStopped())break e;t_(p,S,U),_=P}else for(E=0;E<h.length;E++){if(S=h[E],P=S.instance,U=S.currentTarget,S=S.listener,P!==_&&p.isPropagationStopped())break e;t_(p,S,U),_=P}}}if(Wn)throw i=$a,Wn=!1,$a=null,i}function Ze(i,o){var l=o[Gd];l===void 0&&(l=o[Gd]=new Set);var h=i+"__bubble";l.has(h)||(r_(o,i,2,!1),l.add(h))}function jd(i,o,l){var h=0;o&&(h|=4),r_(l,i,h,o)}var ec="_reactListening"+Math.random().toString(36).slice(2);function al(i){if(!i[ec]){i[ec]=!0,r.forEach(function(l){l!=="selectionchange"&&(bC.has(l)||jd(l,!1,i),jd(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[ec]||(o[ec]=!0,jd("selectionchange",!1,o))}}function r_(i,o,l,h){switch(Xa(o)){case 1:var p=rt;break;case 4:p=Nd;break;default:p=Ya}l=p.bind(null,o,l,i),p=void 0,!uo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function zd(i,o,l,h,p){var _=h;if(!(o&1)&&!(o&2)&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var S=h.stateNode.containerInfo;if(S===p||S.nodeType===8&&S.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var P=E.tag;if((P===3||P===4)&&(P=E.stateNode.containerInfo,P===p||P.nodeType===8&&P.parentNode===p))return;E=E.return}for(;S!==null;){if(E=Es(S),E===null)return;if(P=E.tag,P===5||P===6){h=_=E;continue e}S=S.parentNode}}h=h.return}Wa(function(){var U=_,G=oo(l),Q=[];e:{var H=Zg.get(i);if(H!==void 0){var te=wo,se=i;switch(i){case"keypress":if(Eo(l)===0)break e;case"keydown":case"keyup":te=g;break;case"focusin":se="focus",te=Co;break;case"focusout":se="blur",te=Co;break;case"beforeblur":case"afterblur":te=Co;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Io;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=$u;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=z;break;case Qg:case Yg:case Xg:te=jr;break;case Jg:te=$e;break;case"scroll":te=xd;break;case"wheel":te=Me;break;case"copy":case"cut":case"paste":te=Gu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=T}var oe=(o&4)!==0,pt=!oe&&i==="scroll",V=oe?H!==null?H+"Capture":null:H;oe=[];for(var x=U,F;x!==null;){F=x;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,V!==null&&(Y=ft(x,V),Y!=null&&oe.push(ll(x,Y,F)))),pt)break;x=x.return}0<oe.length&&(H=new te(H,se,null,l,G),Q.push({event:H,listeners:oe}))}}if(!(o&7)){e:{if(H=i==="mouseover"||i==="pointerover",te=i==="mouseout"||i==="pointerout",H&&l!==as&&(se=l.relatedTarget||l.fromElement)&&(Es(se)||se[zr]))break e;if((te||H)&&(H=G.window===G?G:(H=G.ownerDocument)?H.defaultView||H.parentWindow:window,te?(se=l.relatedTarget||l.toElement,te=U,se=se?Es(se):null,se!==null&&(pt=$n(se),se!==pt||se.tag!==5&&se.tag!==6)&&(se=null)):(te=null,se=U),te!==se)){if(oe=Io,Y="onMouseLeave",V="onMouseEnter",x="mouse",(i==="pointerout"||i==="pointerover")&&(oe=T,Y="onPointerLeave",V="onPointerEnter",x="pointer"),pt=te==null?H:Oo(te),F=se==null?H:Oo(se),H=new oe(Y,x+"leave",te,l,G),H.target=pt,H.relatedTarget=F,Y=null,Es(G)===U&&(oe=new oe(V,x+"enter",se,l,G),oe.target=F,oe.relatedTarget=pt,Y=oe),pt=Y,te&&se)t:{for(oe=te,V=se,x=0,F=oe;F;F=xo(F))x++;for(F=0,Y=V;Y;Y=xo(Y))F++;for(;0<x-F;)oe=xo(oe),x--;for(;0<F-x;)V=xo(V),F--;for(;x--;){if(oe===V||V!==null&&oe===V.alternate)break t;oe=xo(oe),V=xo(V)}oe=null}else oe=null;te!==null&&i_(Q,H,te,oe,!1),se!==null&&pt!==null&&i_(Q,pt,se,oe,!0)}}e:{if(H=U?Oo(U):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var ae=SC;else if(Vg(H))if(Ug)ae=PC;else{ae=RC;var he=CC}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ae=AC);if(ae&&(ae=ae(i,U))){Fg(Q,ae,l,G);break e}he&&he(i,H,U),i==="focusout"&&(he=H._wrapperState)&&he.controlled&&H.type==="number"&&ro(H,"number",H.value)}switch(he=U?Oo(U):window,i){case"focusin":(Vg(he)||he.contentEditable==="true")&&(ko=he,Ld=U,sl=null);break;case"focusout":sl=Ld=ko=null;break;case"mousedown":Md=!0;break;case"contextmenu":case"mouseup":case"dragend":Md=!1,Gg(Q,l,G);break;case"selectionchange":if(xC)break;case"keydown":case"keyup":Gg(Q,l,G)}var de;if(gt)e:{switch(i){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Po?Lg(i,l)&&(ve="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ve="onCompositionStart");ve&&(vs&&l.locale!=="ko"&&(Po||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Po&&(de=Ja()):(Tn=G,vo="value"in Tn?Tn.value:Tn.textContent,Po=!0)),he=tc(U,ve),0<he.length&&(ve=new tl(ve,i,null,l,G),Q.push({event:ve,listeners:he}),de?ve.data=de:(de=Mg(l),de!==null&&(ve.data=de)))),(de=In?EC(i,l):wC(i,l))&&(U=tc(U,"onBeforeInput"),0<U.length&&(G=new tl("onBeforeInput","beforeinput",null,l,G),Q.push({event:G,listeners:U}),G.data=de))}n_(Q,o)})}function ll(i,o,l){return{instance:i,listener:o,currentTarget:l}}function tc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=ft(i,l),_!=null&&h.unshift(ll(i,_,p)),_=ft(i,o),_!=null&&h.push(ll(i,_,p))),i=i.return}return h}function xo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function i_(i,o,l,h,p){for(var _=o._reactName,E=[];l!==null&&l!==h;){var S=l,P=S.alternate,U=S.stateNode;if(P!==null&&P===h)break;S.tag===5&&U!==null&&(S=U,p?(P=ft(l,_),P!=null&&E.unshift(ll(l,P,S))):p||(P=ft(l,_),P!=null&&E.push(ll(l,P,S)))),l=l.return}E.length!==0&&i.push({event:o,listeners:E})}var LC=/\r\n?/g,MC=/\u0000|\uFFFD/g;function s_(i){return(typeof i=="string"?i:""+i).replace(LC,`
`).replace(MC,"")}function nc(i,o,l){if(o=s_(o),s_(i)!==o&&l)throw Error(t(425))}function rc(){}var Bd=null,Wd=null;function $d(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var qd=typeof setTimeout=="function"?setTimeout:void 0,VC=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,FC=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(i){return o_.resolve(null).then(i).catch(UC)}:qd;function UC(i){setTimeout(function(){throw i})}function Hd(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),Qn(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Qn(o)}function wi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function a_(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var Do=Math.random().toString(36).slice(2),_r="__reactFiber$"+Do,ul="__reactProps$"+Do,zr="__reactContainer$"+Do,Gd="__reactEvents$"+Do,jC="__reactListeners$"+Do,zC="__reactHandles$"+Do;function Es(i){var o=i[_r];if(o)return o;for(var l=i.parentNode;l;){if(o=l[zr]||l[_r]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=a_(i);i!==null;){if(l=i[_r])return l;i=a_(i)}return o}i=l,l=i.parentNode}return null}function cl(i){return i=i[_r]||i[zr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Oo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function ic(i){return i[ul]||null}var Kd=[],bo=-1;function Ti(i){return{current:i}}function et(i){0>bo||(i.current=Kd[bo],Kd[bo]=null,bo--)}function Ye(i,o){bo++,Kd[bo]=i.current,i.current=o}var Ii={},Ht=Ti(Ii),ln=Ti(!1),ws=Ii;function Lo(i,o){var l=i.type.contextTypes;if(!l)return Ii;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function un(i){return i=i.childContextTypes,i!=null}function sc(){et(ln),et(Ht)}function l_(i,o,l){if(Ht.current!==Ii)throw Error(t(168));Ye(Ht,o),Ye(ln,l)}function u_(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,je(i)||"Unknown",p));return ne({},l,h)}function oc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ii,ws=Ht.current,Ye(Ht,i),Ye(ln,ln.current),!0}function c_(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=u_(i,o,ws),h.__reactInternalMemoizedMergedChildContext=i,et(ln),et(Ht),Ye(Ht,i)):et(ln),Ye(ln,l)}var Br=null,ac=!1,Qd=!1;function h_(i){Br===null?Br=[i]:Br.push(i)}function BC(i){ac=!0,h_(i)}function Si(){if(!Qd&&Br!==null){Qd=!0;var i=0,o=Oe;try{var l=Br;for(Oe=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Br=null,ac=!1}catch(p){throw Br!==null&&(Br=Br.slice(i+1)),po(ds,Si),p}finally{Oe=o,Qd=!1}}return null}var Mo=[],Vo=0,lc=null,uc=0,bn=[],Ln=0,Ts=null,Wr=1,$r="";function Is(i,o){Mo[Vo++]=uc,Mo[Vo++]=lc,lc=i,uc=o}function d_(i,o,l){bn[Ln++]=Wr,bn[Ln++]=$r,bn[Ln++]=Ts,Ts=i;var h=Wr;i=$r;var p=32-tn(h)-1;h&=~(1<<p),l+=1;var _=32-tn(o)+p;if(30<_){var E=p-p%5;_=(h&(1<<E)-1).toString(32),h>>=E,p-=E,Wr=1<<32-tn(o)+p|l<<p|h,$r=_+i}else Wr=1<<_|l<<p|h,$r=i}function Yd(i){i.return!==null&&(Is(i,1),d_(i,1,0))}function Xd(i){for(;i===lc;)lc=Mo[--Vo],Mo[Vo]=null,uc=Mo[--Vo],Mo[Vo]=null;for(;i===Ts;)Ts=bn[--Ln],bn[Ln]=null,$r=bn[--Ln],bn[Ln]=null,Wr=bn[--Ln],bn[Ln]=null}var Sn=null,Cn=null,it=!1,Jn=null;function f_(i,o){var l=Un(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function p_(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Sn=i,Cn=wi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Sn=i,Cn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Ts!==null?{id:Wr,overflow:$r}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Un(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,Sn=i,Cn=null,!0):!1;default:return!1}}function Jd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Zd(i){if(it){var o=Cn;if(o){var l=o;if(!p_(i,o)){if(Jd(i))throw Error(t(418));o=wi(l.nextSibling);var h=Sn;o&&p_(i,o)?f_(h,l):(i.flags=i.flags&-4097|2,it=!1,Sn=i)}}else{if(Jd(i))throw Error(t(418));i.flags=i.flags&-4097|2,it=!1,Sn=i}}}function m_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Sn=i}function cc(i){if(i!==Sn)return!1;if(!it)return m_(i),it=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!$d(i.type,i.memoizedProps)),o&&(o=Cn)){if(Jd(i))throw g_(),Error(t(418));for(;o;)f_(i,o),o=wi(o.nextSibling)}if(m_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){Cn=wi(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}Cn=null}}else Cn=Sn?wi(i.stateNode.nextSibling):null;return!0}function g_(){for(var i=Cn;i;)i=wi(i.nextSibling)}function Fo(){Cn=Sn=null,it=!1}function ef(i){Jn===null?Jn=[i]:Jn.push(i)}var WC=Ie.ReactCurrentBatchConfig;function hl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(E){var S=p.refs;E===null?delete S[_]:S[_]=E},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function hc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function __(i){var o=i._init;return o(i._payload)}function y_(i){function o(V,x){if(i){var F=V.deletions;F===null?(V.deletions=[x],V.flags|=16):F.push(x)}}function l(V,x){if(!i)return null;for(;x!==null;)o(V,x),x=x.sibling;return null}function h(V,x){for(V=new Map;x!==null;)x.key!==null?V.set(x.key,x):V.set(x.index,x),x=x.sibling;return V}function p(V,x){return V=Di(V,x),V.index=0,V.sibling=null,V}function _(V,x,F){return V.index=F,i?(F=V.alternate,F!==null?(F=F.index,F<x?(V.flags|=2,x):F):(V.flags|=2,x)):(V.flags|=1048576,x)}function E(V){return i&&V.alternate===null&&(V.flags|=2),V}function S(V,x,F,Y){return x===null||x.tag!==6?(x=Hf(F,V.mode,Y),x.return=V,x):(x=p(x,F),x.return=V,x)}function P(V,x,F,Y){var ae=F.type;return ae===D?G(V,x,F.props.children,Y,F.key):x!==null&&(x.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===qt&&__(ae)===x.type)?(Y=p(x,F.props),Y.ref=hl(V,x,F),Y.return=V,Y):(Y=Lc(F.type,F.key,F.props,null,V.mode,Y),Y.ref=hl(V,x,F),Y.return=V,Y)}function U(V,x,F,Y){return x===null||x.tag!==4||x.stateNode.containerInfo!==F.containerInfo||x.stateNode.implementation!==F.implementation?(x=Gf(F,V.mode,Y),x.return=V,x):(x=p(x,F.children||[]),x.return=V,x)}function G(V,x,F,Y,ae){return x===null||x.tag!==7?(x=xs(F,V.mode,Y,ae),x.return=V,x):(x=p(x,F),x.return=V,x)}function Q(V,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Hf(""+x,V.mode,F),x.return=V,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case nt:return F=Lc(x.type,x.key,x.props,null,V.mode,F),F.ref=hl(V,null,x),F.return=V,F;case ke:return x=Gf(x,V.mode,F),x.return=V,x;case qt:var Y=x._init;return Q(V,Y(x._payload),F)}if(Dr(x)||ce(x))return x=xs(x,V.mode,F,null),x.return=V,x;hc(V,x)}return null}function H(V,x,F,Y){var ae=x!==null?x.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ae!==null?null:S(V,x,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case nt:return F.key===ae?P(V,x,F,Y):null;case ke:return F.key===ae?U(V,x,F,Y):null;case qt:return ae=F._init,H(V,x,ae(F._payload),Y)}if(Dr(F)||ce(F))return ae!==null?null:G(V,x,F,Y,null);hc(V,F)}return null}function te(V,x,F,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return V=V.get(F)||null,S(x,V,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case nt:return V=V.get(Y.key===null?F:Y.key)||null,P(x,V,Y,ae);case ke:return V=V.get(Y.key===null?F:Y.key)||null,U(x,V,Y,ae);case qt:var he=Y._init;return te(V,x,F,he(Y._payload),ae)}if(Dr(Y)||ce(Y))return V=V.get(F)||null,G(x,V,Y,ae,null);hc(x,Y)}return null}function se(V,x,F,Y){for(var ae=null,he=null,de=x,ve=x=0,Dt=null;de!==null&&ve<F.length;ve++){de.index>ve?(Dt=de,de=null):Dt=de.sibling;var Ue=H(V,de,F[ve],Y);if(Ue===null){de===null&&(de=Dt);break}i&&de&&Ue.alternate===null&&o(V,de),x=_(Ue,x,ve),he===null?ae=Ue:he.sibling=Ue,he=Ue,de=Dt}if(ve===F.length)return l(V,de),it&&Is(V,ve),ae;if(de===null){for(;ve<F.length;ve++)de=Q(V,F[ve],Y),de!==null&&(x=_(de,x,ve),he===null?ae=de:he.sibling=de,he=de);return it&&Is(V,ve),ae}for(de=h(V,de);ve<F.length;ve++)Dt=te(de,V,ve,F[ve],Y),Dt!==null&&(i&&Dt.alternate!==null&&de.delete(Dt.key===null?ve:Dt.key),x=_(Dt,x,ve),he===null?ae=Dt:he.sibling=Dt,he=Dt);return i&&de.forEach(function(Oi){return o(V,Oi)}),it&&Is(V,ve),ae}function oe(V,x,F,Y){var ae=ce(F);if(typeof ae!="function")throw Error(t(150));if(F=ae.call(F),F==null)throw Error(t(151));for(var he=ae=null,de=x,ve=x=0,Dt=null,Ue=F.next();de!==null&&!Ue.done;ve++,Ue=F.next()){de.index>ve?(Dt=de,de=null):Dt=de.sibling;var Oi=H(V,de,Ue.value,Y);if(Oi===null){de===null&&(de=Dt);break}i&&de&&Oi.alternate===null&&o(V,de),x=_(Oi,x,ve),he===null?ae=Oi:he.sibling=Oi,he=Oi,de=Dt}if(Ue.done)return l(V,de),it&&Is(V,ve),ae;if(de===null){for(;!Ue.done;ve++,Ue=F.next())Ue=Q(V,Ue.value,Y),Ue!==null&&(x=_(Ue,x,ve),he===null?ae=Ue:he.sibling=Ue,he=Ue);return it&&Is(V,ve),ae}for(de=h(V,de);!Ue.done;ve++,Ue=F.next())Ue=te(de,V,ve,Ue.value,Y),Ue!==null&&(i&&Ue.alternate!==null&&de.delete(Ue.key===null?ve:Ue.key),x=_(Ue,x,ve),he===null?ae=Ue:he.sibling=Ue,he=Ue);return i&&de.forEach(function(wR){return o(V,wR)}),it&&Is(V,ve),ae}function pt(V,x,F,Y){if(typeof F=="object"&&F!==null&&F.type===D&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case nt:e:{for(var ae=F.key,he=x;he!==null;){if(he.key===ae){if(ae=F.type,ae===D){if(he.tag===7){l(V,he.sibling),x=p(he,F.props.children),x.return=V,V=x;break e}}else if(he.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===qt&&__(ae)===he.type){l(V,he.sibling),x=p(he,F.props),x.ref=hl(V,he,F),x.return=V,V=x;break e}l(V,he);break}else o(V,he);he=he.sibling}F.type===D?(x=xs(F.props.children,V.mode,Y,F.key),x.return=V,V=x):(Y=Lc(F.type,F.key,F.props,null,V.mode,Y),Y.ref=hl(V,x,F),Y.return=V,V=Y)}return E(V);case ke:e:{for(he=F.key;x!==null;){if(x.key===he)if(x.tag===4&&x.stateNode.containerInfo===F.containerInfo&&x.stateNode.implementation===F.implementation){l(V,x.sibling),x=p(x,F.children||[]),x.return=V,V=x;break e}else{l(V,x);break}else o(V,x);x=x.sibling}x=Gf(F,V.mode,Y),x.return=V,V=x}return E(V);case qt:return he=F._init,pt(V,x,he(F._payload),Y)}if(Dr(F))return se(V,x,F,Y);if(ce(F))return oe(V,x,F,Y);hc(V,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,x!==null&&x.tag===6?(l(V,x.sibling),x=p(x,F),x.return=V,V=x):(l(V,x),x=Hf(F,V.mode,Y),x.return=V,V=x),E(V)):l(V,x)}return pt}var Uo=y_(!0),v_=y_(!1),dc=Ti(null),fc=null,jo=null,tf=null;function nf(){tf=jo=fc=null}function rf(i){var o=dc.current;et(dc),i._currentValue=o}function sf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function zo(i,o){fc=i,tf=jo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&o&&(cn=!0),i.firstContext=null)}function Mn(i){var o=i._currentValue;if(tf!==i)if(i={context:i,memoizedValue:o,next:null},jo===null){if(fc===null)throw Error(t(308));jo=i,fc.dependencies={lanes:0,firstContext:i}}else jo=jo.next=i;return o}var Ss=null;function of(i){Ss===null?Ss=[i]:Ss.push(i)}function E_(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,of(o)):(l.next=p.next,p.next=l),o.interleaved=l,qr(i,h)}function qr(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ci=!1;function af(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function w_(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Hr(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Ri(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,Fe&2){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,qr(i,l)}return p=h.interleaved,p===null?(o.next=o,of(h)):(o.next=p.next,p.next=o),h.interleaved=o,qr(i,l)}function pc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,mi(i,l)}}function T_(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=E:_=_.next=E,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function mc(i,o,l,h){var p=i.updateQueue;Ci=!1;var _=p.firstBaseUpdate,E=p.lastBaseUpdate,S=p.shared.pending;if(S!==null){p.shared.pending=null;var P=S,U=P.next;P.next=null,E===null?_=U:E.next=U,E=P;var G=i.alternate;G!==null&&(G=G.updateQueue,S=G.lastBaseUpdate,S!==E&&(S===null?G.firstBaseUpdate=U:S.next=U,G.lastBaseUpdate=P))}if(_!==null){var Q=p.baseState;E=0,G=U=P=null,S=_;do{var H=S.lane,te=S.eventTime;if((h&H)===H){G!==null&&(G=G.next={eventTime:te,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var se=i,oe=S;switch(H=o,te=l,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Q=se.call(te,Q,H);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,H=typeof se=="function"?se.call(te,Q,H):se,H==null)break e;Q=ne({},Q,H);break e;case 2:Ci=!0}}S.callback!==null&&S.lane!==0&&(i.flags|=64,H=p.effects,H===null?p.effects=[S]:H.push(S))}else te={eventTime:te,lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},G===null?(U=G=te,P=Q):G=G.next=te,E|=H;if(S=S.next,S===null){if(S=p.shared.pending,S===null)break;H=S,S=H.next,H.next=null,p.lastBaseUpdate=H,p.shared.pending=null}}while(!0);if(G===null&&(P=Q),p.baseState=P,p.firstBaseUpdate=U,p.lastBaseUpdate=G,o=p.shared.interleaved,o!==null){p=o;do E|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);As|=E,i.lanes=E,i.memoizedState=Q}}function I_(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var dl={},yr=Ti(dl),fl=Ti(dl),pl=Ti(dl);function Cs(i){if(i===dl)throw Error(t(174));return i}function lf(i,o){switch(Ye(pl,o),Ye(fl,i),Ye(yr,dl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Et(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Et(o,i)}et(yr),Ye(yr,o)}function Bo(){et(yr),et(fl),et(pl)}function S_(i){Cs(pl.current);var o=Cs(yr.current),l=Et(o,i.type);o!==l&&(Ye(fl,i),Ye(yr,l))}function uf(i){fl.current===i&&(et(yr),et(fl))}var ot=Ti(0);function gc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var cf=[];function hf(){for(var i=0;i<cf.length;i++)cf[i]._workInProgressVersionPrimary=null;cf.length=0}var _c=Ie.ReactCurrentDispatcher,df=Ie.ReactCurrentBatchConfig,Rs=0,at=null,Tt=null,Nt=null,yc=!1,ml=!1,gl=0,$C=0;function Gt(){throw Error(t(321))}function ff(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!Xn(i[l],o[l]))return!1;return!0}function pf(i,o,l,h,p,_){if(Rs=_,at=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,_c.current=i===null||i.memoizedState===null?KC:QC,i=l(h,p),ml){_=0;do{if(ml=!1,gl=0,25<=_)throw Error(t(301));_+=1,Nt=Tt=null,o.updateQueue=null,_c.current=YC,i=l(h,p)}while(ml)}if(_c.current=wc,o=Tt!==null&&Tt.next!==null,Rs=0,Nt=Tt=at=null,yc=!1,o)throw Error(t(300));return i}function mf(){var i=gl!==0;return gl=0,i}function vr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?at.memoizedState=Nt=i:Nt=Nt.next=i,Nt}function Vn(){if(Tt===null){var i=at.alternate;i=i!==null?i.memoizedState:null}else i=Tt.next;var o=Nt===null?at.memoizedState:Nt.next;if(o!==null)Nt=o,Tt=i;else{if(i===null)throw Error(t(310));Tt=i,i={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Nt===null?at.memoizedState=Nt=i:Nt=Nt.next=i}return Nt}function _l(i,o){return typeof o=="function"?o(i):o}function gf(i){var o=Vn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Tt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var E=p.next;p.next=_.next,_.next=E}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var S=E=null,P=null,U=_;do{var G=U.lane;if((Rs&G)===G)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),h=U.hasEagerState?U.eagerState:i(h,U.action);else{var Q={lane:G,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(S=P=Q,E=h):P=P.next=Q,at.lanes|=G,As|=G}U=U.next}while(U!==null&&U!==_);P===null?E=h:P.next=S,Xn(h,o.memoizedState)||(cn=!0),o.memoizedState=h,o.baseState=E,o.baseQueue=P,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,at.lanes|=_,As|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function _f(i){var o=Vn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do _=i(_,E.action),E=E.next;while(E!==p);Xn(_,o.memoizedState)||(cn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function C_(){}function R_(i,o){var l=at,h=Vn(),p=o(),_=!Xn(h.memoizedState,p);if(_&&(h.memoizedState=p,cn=!0),h=h.queue,yf(k_.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||Nt!==null&&Nt.memoizedState.tag&1){if(l.flags|=2048,yl(9,P_.bind(null,l,h,p,o),void 0,null),xt===null)throw Error(t(349));Rs&30||A_(l,o,p)}return p}function A_(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=at.updateQueue,o===null?(o={lastEffect:null,stores:null},at.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function P_(i,o,l,h){o.value=l,o.getSnapshot=h,N_(o)&&x_(i)}function k_(i,o,l){return l(function(){N_(o)&&x_(i)})}function N_(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!Xn(i,l)}catch{return!0}}function x_(i){var o=qr(i,1);o!==null&&nr(o,i,1,-1)}function D_(i){var o=vr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:i},o.queue=i,i=i.dispatch=GC.bind(null,at,i),[o.memoizedState,i]}function yl(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=at.updateQueue,o===null?(o={lastEffect:null,stores:null},at.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function O_(){return Vn().memoizedState}function vc(i,o,l,h){var p=vr();at.flags|=i,p.memoizedState=yl(1|o,l,void 0,h===void 0?null:h)}function Ec(i,o,l,h){var p=Vn();h=h===void 0?null:h;var _=void 0;if(Tt!==null){var E=Tt.memoizedState;if(_=E.destroy,h!==null&&ff(h,E.deps)){p.memoizedState=yl(o,l,_,h);return}}at.flags|=i,p.memoizedState=yl(1|o,l,_,h)}function b_(i,o){return vc(8390656,8,i,o)}function yf(i,o){return Ec(2048,8,i,o)}function L_(i,o){return Ec(4,2,i,o)}function M_(i,o){return Ec(4,4,i,o)}function V_(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function F_(i,o,l){return l=l!=null?l.concat([i]):null,Ec(4,4,V_.bind(null,o,i),l)}function vf(){}function U_(i,o){var l=Vn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&ff(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function j_(i,o){var l=Vn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&ff(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function z_(i,o,l){return Rs&21?(Xn(l,o)||(l=ms(),at.lanes|=l,As|=l,i.baseState=!0),o):(i.baseState&&(i.baseState=!1,cn=!0),i.memoizedState=l)}function qC(i,o){var l=Oe;Oe=l!==0&&4>l?l:4,i(!0);var h=df.transition;df.transition={};try{i(!1),o()}finally{Oe=l,df.transition=h}}function B_(){return Vn().memoizedState}function HC(i,o,l){var h=Ni(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},W_(i))$_(o,l);else if(l=E_(i,o,l,h),l!==null){var p=sn();nr(l,i,h,p),q_(l,o,h)}}function GC(i,o,l){var h=Ni(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(W_(i))$_(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var E=o.lastRenderedState,S=_(E,l);if(p.hasEagerState=!0,p.eagerState=S,Xn(S,E)){var P=o.interleaved;P===null?(p.next=p,of(o)):(p.next=P.next,P.next=p),o.interleaved=p;return}}catch{}finally{}l=E_(i,o,p,h),l!==null&&(p=sn(),nr(l,i,h,p),q_(l,o,h))}}function W_(i){var o=i.alternate;return i===at||o!==null&&o===at}function $_(i,o){ml=yc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function q_(i,o,l){if(l&4194240){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,mi(i,l)}}var wc={readContext:Mn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},KC={readContext:Mn,useCallback:function(i,o){return vr().memoizedState=[i,o===void 0?null:o],i},useContext:Mn,useEffect:b_,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,vc(4194308,4,V_.bind(null,o,i),l)},useLayoutEffect:function(i,o){return vc(4194308,4,i,o)},useInsertionEffect:function(i,o){return vc(4,2,i,o)},useMemo:function(i,o){var l=vr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=vr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=HC.bind(null,at,i),[h.memoizedState,i]},useRef:function(i){var o=vr();return i={current:i},o.memoizedState=i},useState:D_,useDebugValue:vf,useDeferredValue:function(i){return vr().memoizedState=i},useTransition:function(){var i=D_(!1),o=i[0];return i=qC.bind(null,i[1]),vr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=at,p=vr();if(it){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),xt===null)throw Error(t(349));Rs&30||A_(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,b_(k_.bind(null,h,_,i),[i]),h.flags|=2048,yl(9,P_.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=vr(),o=xt.identifierPrefix;if(it){var l=$r,h=Wr;l=(h&~(1<<32-tn(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=gl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=$C++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},QC={readContext:Mn,useCallback:U_,useContext:Mn,useEffect:yf,useImperativeHandle:F_,useInsertionEffect:L_,useLayoutEffect:M_,useMemo:j_,useReducer:gf,useRef:O_,useState:function(){return gf(_l)},useDebugValue:vf,useDeferredValue:function(i){var o=Vn();return z_(o,Tt.memoizedState,i)},useTransition:function(){var i=gf(_l)[0],o=Vn().memoizedState;return[i,o]},useMutableSource:C_,useSyncExternalStore:R_,useId:B_,unstable_isNewReconciler:!1},YC={readContext:Mn,useCallback:U_,useContext:Mn,useEffect:yf,useImperativeHandle:F_,useInsertionEffect:L_,useLayoutEffect:M_,useMemo:j_,useReducer:_f,useRef:O_,useState:function(){return _f(_l)},useDebugValue:vf,useDeferredValue:function(i){var o=Vn();return Tt===null?o.memoizedState=i:z_(o,Tt.memoizedState,i)},useTransition:function(){var i=_f(_l)[0],o=Vn().memoizedState;return[i,o]},useMutableSource:C_,useSyncExternalStore:R_,useId:B_,unstable_isNewReconciler:!1};function Zn(i,o){if(i&&i.defaultProps){o=ne({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function Ef(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:ne({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Tc={isMounted:function(i){return(i=i._reactInternals)?$n(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=sn(),p=Ni(i),_=Hr(h,p);_.payload=o,l!=null&&(_.callback=l),o=Ri(i,_,p),o!==null&&(nr(o,i,p,h),pc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=sn(),p=Ni(i),_=Hr(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=Ri(i,_,p),o!==null&&(nr(o,i,p,h),pc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=sn(),h=Ni(i),p=Hr(l,h);p.tag=2,o!=null&&(p.callback=o),o=Ri(i,p,h),o!==null&&(nr(o,i,h,l),pc(o,i,h))}};function H_(i,o,l,h,p,_,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,E):o.prototype&&o.prototype.isPureReactComponent?!il(l,h)||!il(p,_):!0}function G_(i,o,l){var h=!1,p=Ii,_=o.contextType;return typeof _=="object"&&_!==null?_=Mn(_):(p=un(o)?ws:Ht.current,h=o.contextTypes,_=(h=h!=null)?Lo(i,p):Ii),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Tc,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function K_(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&Tc.enqueueReplaceState(o,o.state,null)}function wf(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},af(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=Mn(_):(_=un(o)?ws:Ht.current,p.context=Lo(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(Ef(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&Tc.enqueueReplaceState(p,p.state,null),mc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Wo(i,o){try{var l="",h=o;do l+=Ce(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function Tf(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function If(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var XC=typeof WeakMap=="function"?WeakMap:Map;function Q_(i,o,l){l=Hr(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){kc||(kc=!0,Ff=h),If(i,o)},l}function Y_(i,o,l){l=Hr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){If(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){If(i,o),typeof h!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})}),l}function X_(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new XC;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=hR.bind(null,i,o,l),o.then(i,i))}function J_(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Z_(i,o,l,h,p){return i.mode&1?(i.flags|=65536,i.lanes=p,i):(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Hr(-1,1),o.tag=2,Ri(l,o,1))),l.lanes|=1),i)}var JC=Ie.ReactCurrentOwner,cn=!1;function rn(i,o,l,h){o.child=i===null?v_(o,null,l,h):Uo(o,i.child,l,h)}function ey(i,o,l,h,p){l=l.render;var _=o.ref;return zo(o,p),h=pf(i,o,l,h,_,p),l=mf(),i!==null&&!cn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Gr(i,o,p)):(it&&l&&Yd(o),o.flags|=1,rn(i,o,h,p),o.child)}function ty(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!qf(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,ny(i,o,_,h,p)):(i=Lc(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,!(i.lanes&p)){var E=_.memoizedProps;if(l=l.compare,l=l!==null?l:il,l(E,h)&&i.ref===o.ref)return Gr(i,o,p)}return o.flags|=1,i=Di(_,h),i.ref=o.ref,i.return=o,o.child=i}function ny(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(il(_,h)&&i.ref===o.ref)if(cn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)i.flags&131072&&(cn=!0);else return o.lanes=i.lanes,Gr(i,o,p)}return Sf(i,o,l,h,p)}function ry(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(qo,Rn),Rn|=l;else{if(!(l&1073741824))return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Ye(qo,Rn),Rn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,Ye(qo,Rn),Rn|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,Ye(qo,Rn),Rn|=h;return rn(i,o,p,l),o.child}function iy(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function Sf(i,o,l,h,p){var _=un(l)?ws:Ht.current;return _=Lo(o,_),zo(o,p),l=pf(i,o,l,h,_,p),h=mf(),i!==null&&!cn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Gr(i,o,p)):(it&&h&&Yd(o),o.flags|=1,rn(i,o,l,p),o.child)}function sy(i,o,l,h,p){if(un(l)){var _=!0;oc(o)}else _=!1;if(zo(o,p),o.stateNode===null)Sc(i,o),G_(o,l,h),wf(o,l,h,p),h=!0;else if(i===null){var E=o.stateNode,S=o.memoizedProps;E.props=S;var P=E.context,U=l.contextType;typeof U=="object"&&U!==null?U=Mn(U):(U=un(l)?ws:Ht.current,U=Lo(o,U));var G=l.getDerivedStateFromProps,Q=typeof G=="function"||typeof E.getSnapshotBeforeUpdate=="function";Q||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==h||P!==U)&&K_(o,E,h,U),Ci=!1;var H=o.memoizedState;E.state=H,mc(o,h,E,p),P=o.memoizedState,S!==h||H!==P||ln.current||Ci?(typeof G=="function"&&(Ef(o,l,G,h),P=o.memoizedState),(S=Ci||H_(o,l,S,h,H,P,U))?(Q||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(o.flags|=4194308)):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=P),E.props=h,E.state=P,E.context=U,h=S):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{E=o.stateNode,w_(i,o),S=o.memoizedProps,U=o.type===o.elementType?S:Zn(o.type,S),E.props=U,Q=o.pendingProps,H=E.context,P=l.contextType,typeof P=="object"&&P!==null?P=Mn(P):(P=un(l)?ws:Ht.current,P=Lo(o,P));var te=l.getDerivedStateFromProps;(G=typeof te=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==Q||H!==P)&&K_(o,E,h,P),Ci=!1,H=o.memoizedState,E.state=H,mc(o,h,E,p);var se=o.memoizedState;S!==Q||H!==se||ln.current||Ci?(typeof te=="function"&&(Ef(o,l,te,h),se=o.memoizedState),(U=Ci||H_(o,l,U,h,H,se,P)||!1)?(G||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,se,P),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,se,P)),typeof E.componentDidUpdate=="function"&&(o.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof E.componentDidUpdate!="function"||S===i.memoizedProps&&H===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&H===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=se),E.props=h,E.state=se,E.context=P,h=U):(typeof E.componentDidUpdate!="function"||S===i.memoizedProps&&H===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&H===i.memoizedState||(o.flags|=1024),h=!1)}return Cf(i,o,l,h,_,p)}function Cf(i,o,l,h,p,_){iy(i,o);var E=(o.flags&128)!==0;if(!h&&!E)return p&&c_(o,l,!1),Gr(i,o,_);h=o.stateNode,JC.current=o;var S=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&E?(o.child=Uo(o,i.child,null,_),o.child=Uo(o,null,S,_)):rn(i,o,S,_),o.memoizedState=h.state,p&&c_(o,l,!0),o.child}function oy(i){var o=i.stateNode;o.pendingContext?l_(i,o.pendingContext,o.pendingContext!==o.context):o.context&&l_(i,o.context,!1),lf(i,o.containerInfo)}function ay(i,o,l,h,p){return Fo(),ef(p),o.flags|=256,rn(i,o,l,h),o.child}var Rf={dehydrated:null,treeContext:null,retryLane:0};function Af(i){return{baseLanes:i,cachePool:null,transitions:null}}function ly(i,o,l){var h=o.pendingProps,p=ot.current,_=!1,E=(o.flags&128)!==0,S;if((S=E)||(S=i!==null&&i.memoizedState===null?!1:(p&2)!==0),S?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Ye(ot,p&1),i===null)return Zd(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(o.mode&1?i.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(E=h.children,i=h.fallback,_?(h=o.mode,_=o.child,E={mode:"hidden",children:E},!(h&1)&&_!==null?(_.childLanes=0,_.pendingProps=E):_=Mc(E,h,0,null),i=xs(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=Af(l),o.memoizedState=Rf,i):Pf(o,E));if(p=i.memoizedState,p!==null&&(S=p.dehydrated,S!==null))return ZC(i,o,E,h,S,p,l);if(_){_=h.fallback,E=o.mode,p=i.child,S=p.sibling;var P={mode:"hidden",children:h.children};return!(E&1)&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=P,o.deletions=null):(h=Di(p,P),h.subtreeFlags=p.subtreeFlags&14680064),S!==null?_=Di(S,_):(_=xs(_,E,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,E=i.child.memoizedState,E=E===null?Af(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},_.memoizedState=E,_.childLanes=i.childLanes&~l,o.memoizedState=Rf,h}return _=i.child,i=_.sibling,h=Di(_,{mode:"visible",children:h.children}),!(o.mode&1)&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function Pf(i,o){return o=Mc({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Ic(i,o,l,h){return h!==null&&ef(h),Uo(o,i.child,null,l),i=Pf(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function ZC(i,o,l,h,p,_,E){if(l)return o.flags&256?(o.flags&=-257,h=Tf(Error(t(422))),Ic(i,o,E,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=Mc({mode:"visible",children:h.children},p,0,null),_=xs(_,p,E,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,o.mode&1&&Uo(o,i.child,null,E),o.child.memoizedState=Af(E),o.memoizedState=Rf,_);if(!(o.mode&1))return Ic(i,o,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var S=h.dgst;return h=S,_=Error(t(419)),h=Tf(_,h,void 0),Ic(i,o,E,h)}if(S=(E&i.childLanes)!==0,cn||S){if(h=xt,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(h.suspendedLanes|E)?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,qr(i,p),nr(h,i,p,-1))}return $f(),h=Tf(Error(t(421))),Ic(i,o,E,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=dR.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,Cn=wi(p.nextSibling),Sn=o,it=!0,Jn=null,i!==null&&(bn[Ln++]=Wr,bn[Ln++]=$r,bn[Ln++]=Ts,Wr=i.id,$r=i.overflow,Ts=o),o=Pf(o,h.children),o.flags|=4096,o)}function uy(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),sf(i.return,o,l)}function kf(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function cy(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(rn(i,o,h.children,l),h=ot.current,h&2)h=h&1|2,o.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&uy(i,l,o);else if(i.tag===19)uy(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Ye(ot,h),!(o.mode&1))o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&gc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),kf(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&gc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}kf(o,!0,l,null,_);break;case"together":kf(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Sc(i,o){!(o.mode&1)&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Gr(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),As|=o.lanes,!(l&o.childLanes))return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Di(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Di(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function eR(i,o,l){switch(o.tag){case 3:oy(o),Fo();break;case 5:S_(o);break;case 1:un(o.type)&&oc(o);break;case 4:lf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;Ye(dc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(Ye(ot,ot.current&1),o.flags|=128,null):l&o.child.childLanes?ly(i,o,l):(Ye(ot,ot.current&1),i=Gr(i,o,l),i!==null?i.sibling:null);Ye(ot,ot.current&1);break;case 19:if(h=(l&o.childLanes)!==0,i.flags&128){if(h)return cy(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ye(ot,ot.current),h)break;return null;case 22:case 23:return o.lanes=0,ry(i,o,l)}return Gr(i,o,l)}var hy,Nf,dy,fy;hy=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Nf=function(){},dy=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,Cs(yr.current);var _=null;switch(l){case"input":p=is(i,p),h=is(i,h),_=[];break;case"select":p=ne({},p,{value:void 0}),h=ne({},h,{value:void 0}),_=[];break;case"textarea":p=Oa(i,p),h=Oa(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=rc)}Ua(l,h);var E;l=null;for(U in p)if(!h.hasOwnProperty(U)&&p.hasOwnProperty(U)&&p[U]!=null)if(U==="style"){var S=p[U];for(E in S)S.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(s.hasOwnProperty(U)?_||(_=[]):(_=_||[]).push(U,null));for(U in h){var P=h[U];if(S=p!=null?p[U]:void 0,h.hasOwnProperty(U)&&P!==S&&(P!=null||S!=null))if(U==="style")if(S){for(E in S)!S.hasOwnProperty(E)||P&&P.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in P)P.hasOwnProperty(E)&&S[E]!==P[E]&&(l||(l={}),l[E]=P[E])}else l||(_||(_=[]),_.push(U,l)),l=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(_=_||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(_=_||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(s.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&Ze("scroll",i),_||S===P||(_=[])):(_=_||[]).push(U,P))}l&&(_=_||[]).push("style",l);var U=_;(o.updateQueue=U)&&(o.flags|=4)}},fy=function(i,o,l,h){l!==h&&(o.flags|=4)};function vl(i,o){if(!it)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Kt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function tR(i,o,l){var h=o.pendingProps;switch(Xd(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(o),null;case 1:return un(o.type)&&sc(),Kt(o),null;case 3:return h=o.stateNode,Bo(),et(ln),et(Ht),hf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(cc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,Jn!==null&&(zf(Jn),Jn=null))),Nf(i,o),Kt(o),null;case 5:uf(o);var p=Cs(pl.current);if(l=o.type,i!==null&&o.stateNode!=null)dy(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Kt(o),null}if(i=Cs(yr.current),cc(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[_r]=o,h[ul]=_,i=(o.mode&1)!==0,l){case"dialog":Ze("cancel",h),Ze("close",h);break;case"iframe":case"object":case"embed":Ze("load",h);break;case"video":case"audio":for(p=0;p<ol.length;p++)Ze(ol[p],h);break;case"source":Ze("error",h);break;case"img":case"image":case"link":Ze("error",h),Ze("load",h);break;case"details":Ze("toggle",h);break;case"input":no(h,_),Ze("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},Ze("invalid",h);break;case"textarea":io(h,_),Ze("invalid",h)}Ua(l,_),p=null;for(var E in _)if(_.hasOwnProperty(E)){var S=_[E];E==="children"?typeof S=="string"?h.textContent!==S&&(_.suppressHydrationWarning!==!0&&nc(h.textContent,S,i),p=["children",S]):typeof S=="number"&&h.textContent!==""+S&&(_.suppressHydrationWarning!==!0&&nc(h.textContent,S,i),p=["children",""+S]):s.hasOwnProperty(E)&&S!=null&&E==="onScroll"&&Ze("scroll",h)}switch(l){case"input":xr(h),Pu(h,_,!0);break;case"textarea":xr(h),ba(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=rc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=vt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=E.createElement(l,{is:h.is}):(i=E.createElement(l),l==="select"&&(E=i,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):i=E.createElementNS(i,l),i[_r]=o,i[ul]=h,hy(i,o,!1,!1),o.stateNode=i;e:{switch(E=ja(l,h),l){case"dialog":Ze("cancel",i),Ze("close",i),p=h;break;case"iframe":case"object":case"embed":Ze("load",i),p=h;break;case"video":case"audio":for(p=0;p<ol.length;p++)Ze(ol[p],i);p=h;break;case"source":Ze("error",i),p=h;break;case"img":case"image":case"link":Ze("error",i),Ze("load",i),p=h;break;case"details":Ze("toggle",i),p=h;break;case"input":no(i,h),p=is(i,h),Ze("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ne({},h,{value:void 0}),Ze("invalid",i);break;case"textarea":io(i,h),p=Oa(i,h),Ze("invalid",i);break;default:p=h}Ua(l,p),S=p;for(_ in S)if(S.hasOwnProperty(_)){var P=S[_];_==="style"?Va(i,P):_==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&La(i,P)):_==="children"?typeof P=="string"?(l!=="textarea"||P!=="")&&ci(i,P):typeof P=="number"&&ci(i,""+P):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?P!=null&&_==="onScroll"&&Ze("scroll",i):P!=null&&ye(i,_,P,E))}switch(l){case"input":xr(i),Pu(i,h,!1);break;case"textarea":xr(i),ba(i);break;case"option":h.value!=null&&i.setAttribute("value",""+ze(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?Or(i,!!h.multiple,_,!1):h.defaultValue!=null&&Or(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=rc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Kt(o),null;case 6:if(i&&o.stateNode!=null)fy(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=Cs(pl.current),Cs(yr.current),cc(o)){if(h=o.stateNode,l=o.memoizedProps,h[_r]=o,(_=h.nodeValue!==l)&&(i=Sn,i!==null))switch(i.tag){case 3:nc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&nc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[_r]=o,o.stateNode=h}return Kt(o),null;case 13:if(et(ot),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(it&&Cn!==null&&o.mode&1&&!(o.flags&128))g_(),Fo(),o.flags|=98560,_=!1;else if(_=cc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[_r]=o}else Fo(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;Kt(o),_=!1}else Jn!==null&&(zf(Jn),Jn=null),_=!0;if(!_)return o.flags&65536?o:null}return o.flags&128?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,o.mode&1&&(i===null||ot.current&1?It===0&&(It=3):$f())),o.updateQueue!==null&&(o.flags|=4),Kt(o),null);case 4:return Bo(),Nf(i,o),i===null&&al(o.stateNode.containerInfo),Kt(o),null;case 10:return rf(o.type._context),Kt(o),null;case 17:return un(o.type)&&sc(),Kt(o),null;case 19:if(et(ot),_=o.memoizedState,_===null)return Kt(o),null;if(h=(o.flags&128)!==0,E=_.rendering,E===null)if(h)vl(_,!1);else{if(It!==0||i!==null&&i.flags&128)for(i=o.child;i!==null;){if(E=gc(i),E!==null){for(o.flags|=128,vl(_,!1),h=E.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,E=_.alternate,E===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=E.childLanes,_.lanes=E.lanes,_.child=E.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=E.memoizedProps,_.memoizedState=E.memoizedState,_.updateQueue=E.updateQueue,_.type=E.type,i=E.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ye(ot,ot.current&1|2),o.child}i=i.sibling}_.tail!==null&&Qe()>Ho&&(o.flags|=128,h=!0,vl(_,!1),o.lanes=4194304)}else{if(!h)if(i=gc(E),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),vl(_,!0),_.tail===null&&_.tailMode==="hidden"&&!E.alternate&&!it)return Kt(o),null}else 2*Qe()-_.renderingStartTime>Ho&&l!==1073741824&&(o.flags|=128,h=!0,vl(_,!1),o.lanes=4194304);_.isBackwards?(E.sibling=o.child,o.child=E):(l=_.last,l!==null?l.sibling=E:o.child=E,_.last=E)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=Qe(),o.sibling=null,l=ot.current,Ye(ot,h?l&1|2:l&1),o):(Kt(o),null);case 22:case 23:return Wf(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&o.mode&1?Rn&1073741824&&(Kt(o),o.subtreeFlags&6&&(o.flags|=8192)):Kt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function nR(i,o){switch(Xd(o),o.tag){case 1:return un(o.type)&&sc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Bo(),et(ln),et(Ht),hf(),i=o.flags,i&65536&&!(i&128)?(o.flags=i&-65537|128,o):null;case 5:return uf(o),null;case 13:if(et(ot),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Fo()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return et(ot),null;case 4:return Bo(),null;case 10:return rf(o.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var Cc=!1,Qt=!1,rR=typeof WeakSet=="function"?WeakSet:Set,ie=null;function $o(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){ut(i,o,h)}else l.current=null}function xf(i,o,l){try{l()}catch(h){ut(i,o,h)}}var py=!1;function iR(i,o){if(Bd=yi,i=Hg(),bd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var E=0,S=-1,P=-1,U=0,G=0,Q=i,H=null;t:for(;;){for(var te;Q!==l||p!==0&&Q.nodeType!==3||(S=E+p),Q!==_||h!==0&&Q.nodeType!==3||(P=E+h),Q.nodeType===3&&(E+=Q.nodeValue.length),(te=Q.firstChild)!==null;)H=Q,Q=te;for(;;){if(Q===i)break t;if(H===l&&++U===p&&(S=E),H===_&&++G===h&&(P=E),(te=Q.nextSibling)!==null)break;Q=H,H=Q.parentNode}Q=te}l=S===-1||P===-1?null:{start:S,end:P}}else l=null}l=l||{start:0,end:0}}else l=null;for(Wd={focusedElem:i,selectionRange:l},yi=!1,ie=o;ie!==null;)if(o=ie,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ie=i;else for(;ie!==null;){o=ie;try{var se=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,pt=se.memoizedState,V=o.stateNode,x=V.getSnapshotBeforeUpdate(o.elementType===o.type?oe:Zn(o.type,oe),pt);V.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var F=o.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){ut(o,o.return,Y)}if(i=o.sibling,i!==null){i.return=o.return,ie=i;break}ie=o.return}return se=py,py=!1,se}function El(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&xf(o,l,_)}p=p.next}while(p!==h)}}function Rc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Df(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function my(i){var o=i.alternate;o!==null&&(i.alternate=null,my(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[_r],delete o[ul],delete o[Gd],delete o[jC],delete o[zC])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function gy(i){return i.tag===5||i.tag===3||i.tag===4}function _y(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||gy(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Of(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=rc));else if(h!==4&&(i=i.child,i!==null))for(Of(i,o,l),i=i.sibling;i!==null;)Of(i,o,l),i=i.sibling}function bf(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(bf(i,o,l),i=i.sibling;i!==null;)bf(i,o,l),i=i.sibling}var Ft=null,er=!1;function Ai(i,o,l){for(l=l.child;l!==null;)yy(i,o,l),l=l.sibling}function yy(i,o,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(fs,l)}catch{}switch(l.tag){case 5:Qt||$o(l,o);case 6:var h=Ft,p=er;Ft=null,Ai(i,o,l),Ft=h,er=p,Ft!==null&&(er?(i=Ft,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Ft.removeChild(l.stateNode));break;case 18:Ft!==null&&(er?(i=Ft,l=l.stateNode,i.nodeType===8?Hd(i.parentNode,l):i.nodeType===1&&Hd(i,l),Qn(i)):Hd(Ft,l.stateNode));break;case 4:h=Ft,p=er,Ft=l.stateNode.containerInfo,er=!0,Ai(i,o,l),Ft=h,er=p;break;case 0:case 11:case 14:case 15:if(!Qt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,E=_.destroy;_=_.tag,E!==void 0&&(_&2||_&4)&&xf(l,o,E),p=p.next}while(p!==h)}Ai(i,o,l);break;case 1:if(!Qt&&($o(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(S){ut(l,o,S)}Ai(i,o,l);break;case 21:Ai(i,o,l);break;case 22:l.mode&1?(Qt=(h=Qt)||l.memoizedState!==null,Ai(i,o,l),Qt=h):Ai(i,o,l);break;default:Ai(i,o,l)}}function vy(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new rR),o.forEach(function(h){var p=fR.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function tr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,E=o,S=E;e:for(;S!==null;){switch(S.tag){case 5:Ft=S.stateNode,er=!1;break e;case 3:Ft=S.stateNode.containerInfo,er=!0;break e;case 4:Ft=S.stateNode.containerInfo,er=!0;break e}S=S.return}if(Ft===null)throw Error(t(160));yy(_,E,p),Ft=null,er=!1;var P=p.alternate;P!==null&&(P.return=null),p.return=null}catch(U){ut(p,o,U)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Ey(o,i),o=o.sibling}function Ey(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(tr(o,i),Er(i),h&4){try{El(3,i,i.return),Rc(3,i)}catch(oe){ut(i,i.return,oe)}try{El(5,i,i.return)}catch(oe){ut(i,i.return,oe)}}break;case 1:tr(o,i),Er(i),h&512&&l!==null&&$o(l,l.return);break;case 5:if(tr(o,i),Er(i),h&512&&l!==null&&$o(l,l.return),i.flags&32){var p=i.stateNode;try{ci(p,"")}catch(oe){ut(i,i.return,oe)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,E=l!==null?l.memoizedProps:_,S=i.type,P=i.updateQueue;if(i.updateQueue=null,P!==null)try{S==="input"&&_.type==="radio"&&_.name!=null&&xa(p,_),ja(S,E);var U=ja(S,_);for(E=0;E<P.length;E+=2){var G=P[E],Q=P[E+1];G==="style"?Va(p,Q):G==="dangerouslySetInnerHTML"?La(p,Q):G==="children"?ci(p,Q):ye(p,G,Q,U)}switch(S){case"input":Da(p,_);break;case"textarea":so(p,_);break;case"select":var H=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var te=_.value;te!=null?Or(p,!!_.multiple,te,!1):H!==!!_.multiple&&(_.defaultValue!=null?Or(p,!!_.multiple,_.defaultValue,!0):Or(p,!!_.multiple,_.multiple?[]:"",!1))}p[ul]=_}catch(oe){ut(i,i.return,oe)}}break;case 6:if(tr(o,i),Er(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(oe){ut(i,i.return,oe)}}break;case 3:if(tr(o,i),Er(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Qn(o.containerInfo)}catch(oe){ut(i,i.return,oe)}break;case 4:tr(o,i),Er(i);break;case 13:tr(o,i),Er(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Vf=Qe())),h&4&&vy(i);break;case 22:if(G=l!==null&&l.memoizedState!==null,i.mode&1?(Qt=(U=Qt)||G,tr(o,i),Qt=U):tr(o,i),Er(i),h&8192){if(U=i.memoizedState!==null,(i.stateNode.isHidden=U)&&!G&&i.mode&1)for(ie=i,G=i.child;G!==null;){for(Q=ie=G;ie!==null;){switch(H=ie,te=H.child,H.tag){case 0:case 11:case 14:case 15:El(4,H,H.return);break;case 1:$o(H,H.return);var se=H.stateNode;if(typeof se.componentWillUnmount=="function"){h=H,l=H.return;try{o=h,se.props=o.memoizedProps,se.state=o.memoizedState,se.componentWillUnmount()}catch(oe){ut(h,l,oe)}}break;case 5:$o(H,H.return);break;case 22:if(H.memoizedState!==null){Iy(Q);continue}}te!==null?(te.return=H,ie=te):Iy(Q)}G=G.sibling}e:for(G=null,Q=i;;){if(Q.tag===5){if(G===null){G=Q;try{p=Q.stateNode,U?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(S=Q.stateNode,P=Q.memoizedProps.style,E=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=Ma("display",E))}catch(oe){ut(i,i.return,oe)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=U?"":Q.memoizedProps}catch(oe){ut(i,i.return,oe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===i)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===i)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===i)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:tr(o,i),Er(i),h&4&&vy(i);break;case 21:break;default:tr(o,i),Er(i)}}function Er(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(gy(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ci(p,""),h.flags&=-33);var _=_y(i);bf(i,_,p);break;case 3:case 4:var E=h.stateNode.containerInfo,S=_y(i);Of(i,S,E);break;default:throw Error(t(161))}}catch(P){ut(i,i.return,P)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function sR(i,o,l){ie=i,wy(i)}function wy(i,o,l){for(var h=(i.mode&1)!==0;ie!==null;){var p=ie,_=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||Cc;if(!E){var S=p.alternate,P=S!==null&&S.memoizedState!==null||Qt;S=Cc;var U=Qt;if(Cc=E,(Qt=P)&&!U)for(ie=p;ie!==null;)E=ie,P=E.child,E.tag===22&&E.memoizedState!==null?Sy(p):P!==null?(P.return=E,ie=P):Sy(p);for(;_!==null;)ie=_,wy(_),_=_.sibling;ie=p,Cc=S,Qt=U}Ty(i)}else p.subtreeFlags&8772&&_!==null?(_.return=p,ie=_):Ty(i)}}function Ty(i){for(;ie!==null;){var o=ie;if(o.flags&8772){var l=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:Qt||Rc(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Qt)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:Zn(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&I_(o,_,h);break;case 3:var E=o.updateQueue;if(E!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}I_(o,E,l)}break;case 5:var S=o.stateNode;if(l===null&&o.flags&4){l=S;var P=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&l.focus();break;case"img":P.src&&(l.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var U=o.alternate;if(U!==null){var G=U.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&Qn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Qt||o.flags&512&&Df(o)}catch(H){ut(o,o.return,H)}}if(o===i){ie=null;break}if(l=o.sibling,l!==null){l.return=o.return,ie=l;break}ie=o.return}}function Iy(i){for(;ie!==null;){var o=ie;if(o===i){ie=null;break}var l=o.sibling;if(l!==null){l.return=o.return,ie=l;break}ie=o.return}}function Sy(i){for(;ie!==null;){var o=ie;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{Rc(4,o)}catch(P){ut(o,l,P)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(P){ut(o,p,P)}}var _=o.return;try{Df(o)}catch(P){ut(o,_,P)}break;case 5:var E=o.return;try{Df(o)}catch(P){ut(o,E,P)}}}catch(P){ut(o,o.return,P)}if(o===i){ie=null;break}var S=o.sibling;if(S!==null){S.return=o.return,ie=S;break}ie=o.return}}var oR=Math.ceil,Ac=Ie.ReactCurrentDispatcher,Lf=Ie.ReactCurrentOwner,Fn=Ie.ReactCurrentBatchConfig,Fe=0,xt=null,_t=null,Ut=0,Rn=0,qo=Ti(0),It=0,wl=null,As=0,Pc=0,Mf=0,Tl=null,hn=null,Vf=0,Ho=1/0,Kr=null,kc=!1,Ff=null,Pi=null,Nc=!1,ki=null,xc=0,Il=0,Uf=null,Dc=-1,Oc=0;function sn(){return Fe&6?Qe():Dc!==-1?Dc:Dc=Qe()}function Ni(i){return i.mode&1?Fe&2&&Ut!==0?Ut&-Ut:WC.transition!==null?(Oc===0&&(Oc=ms()),Oc):(i=Oe,i!==0||(i=window.event,i=i===void 0?16:Xa(i.type)),i):1}function nr(i,o,l,h){if(50<Il)throw Il=0,Uf=null,Error(t(185));pi(i,l,h),(!(Fe&2)||i!==xt)&&(i===xt&&(!(Fe&2)&&(Pc|=l),It===4&&xi(i,Ut)),dn(i,h),l===1&&Fe===0&&!(o.mode&1)&&(Ho=Qe()+500,ac&&Si()))}function dn(i,o){var l=i.callbackNode;Mr(i,o);var h=ps(i,i===xt?Ut:0);if(h===0)l!==null&&Ha(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&Ha(l),o===1)i.tag===0?BC(Ry.bind(null,i)):h_(Ry.bind(null,i)),FC(function(){!(Fe&6)&&Si()}),l=null;else{switch(gi(h)){case 1:l=ds;break;case 4:l=hi;break;case 16:l=xn;break;case 536870912:l=Ou;break;default:l=xn}l=by(l,Cy.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Cy(i,o){if(Dc=-1,Oc=0,Fe&6)throw Error(t(327));var l=i.callbackNode;if(Go()&&i.callbackNode!==l)return null;var h=ps(i,i===xt?Ut:0);if(h===0)return null;if(h&30||h&i.expiredLanes||o)o=bc(i,h);else{o=h;var p=Fe;Fe|=2;var _=Py();(xt!==i||Ut!==o)&&(Kr=null,Ho=Qe()+500,ks(i,o));do try{uR();break}catch(S){Ay(i,S)}while(!0);nf(),Ac.current=_,Fe=p,_t!==null?o=0:(xt=null,Ut=0,o=It)}if(o!==0){if(o===2&&(p=wn(i),p!==0&&(h=p,o=jf(i,p))),o===1)throw l=wl,ks(i,0),xi(i,h),dn(i,Qe()),l;if(o===6)xi(i,h);else{if(p=i.current.alternate,!(h&30)&&!aR(p)&&(o=bc(i,h),o===2&&(_=wn(i),_!==0&&(h=_,o=jf(i,_))),o===1))throw l=wl,ks(i,0),xi(i,h),dn(i,Qe()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Ns(i,hn,Kr);break;case 3:if(xi(i,h),(h&130023424)===h&&(o=Vf+500-Qe(),10<o)){if(ps(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){sn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=qd(Ns.bind(null,i,hn,Kr),o);break}Ns(i,hn,Kr);break;case 4:if(xi(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var E=31-tn(h);_=1<<E,E=o[E],E>p&&(p=E),h&=~_}if(h=p,h=Qe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*oR(h/1960))-h,10<h){i.timeoutHandle=qd(Ns.bind(null,i,hn,Kr),h);break}Ns(i,hn,Kr);break;case 5:Ns(i,hn,Kr);break;default:throw Error(t(329))}}}return dn(i,Qe()),i.callbackNode===l?Cy.bind(null,i):null}function jf(i,o){var l=Tl;return i.current.memoizedState.isDehydrated&&(ks(i,o).flags|=256),i=bc(i,o),i!==2&&(o=hn,hn=l,o!==null&&zf(o)),i}function zf(i){hn===null?hn=i:hn.push.apply(hn,i)}function aR(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!Xn(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function xi(i,o){for(o&=~Mf,o&=~Pc,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-tn(o),h=1<<l;i[l]=-1,o&=~h}}function Ry(i){if(Fe&6)throw Error(t(327));Go();var o=ps(i,0);if(!(o&1))return dn(i,Qe()),null;var l=bc(i,o);if(i.tag!==0&&l===2){var h=wn(i);h!==0&&(o=h,l=jf(i,h))}if(l===1)throw l=wl,ks(i,0),xi(i,o),dn(i,Qe()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Ns(i,hn,Kr),dn(i,Qe()),null}function Bf(i,o){var l=Fe;Fe|=1;try{return i(o)}finally{Fe=l,Fe===0&&(Ho=Qe()+500,ac&&Si())}}function Ps(i){ki!==null&&ki.tag===0&&!(Fe&6)&&Go();var o=Fe;Fe|=1;var l=Fn.transition,h=Oe;try{if(Fn.transition=null,Oe=1,i)return i()}finally{Oe=h,Fn.transition=l,Fe=o,!(Fe&6)&&Si()}}function Wf(){Rn=qo.current,et(qo)}function ks(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,VC(l)),_t!==null)for(l=_t.return;l!==null;){var h=l;switch(Xd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&sc();break;case 3:Bo(),et(ln),et(Ht),hf();break;case 5:uf(h);break;case 4:Bo();break;case 13:et(ot);break;case 19:et(ot);break;case 10:rf(h.type._context);break;case 22:case 23:Wf()}l=l.return}if(xt=i,_t=i=Di(i.current,null),Ut=Rn=o,It=0,wl=null,Mf=Pc=As=0,hn=Tl=null,Ss!==null){for(o=0;o<Ss.length;o++)if(l=Ss[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var E=_.next;_.next=p,h.next=E}l.pending=h}Ss=null}return i}function Ay(i,o){do{var l=_t;try{if(nf(),_c.current=wc,yc){for(var h=at.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}yc=!1}if(Rs=0,Nt=Tt=at=null,ml=!1,gl=0,Lf.current=null,l===null||l.return===null){It=1,wl=o,_t=null;break}e:{var _=i,E=l.return,S=l,P=o;if(o=Ut,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,G=S,Q=G.tag;if(!(G.mode&1)&&(Q===0||Q===11||Q===15)){var H=G.alternate;H?(G.updateQueue=H.updateQueue,G.memoizedState=H.memoizedState,G.lanes=H.lanes):(G.updateQueue=null,G.memoizedState=null)}var te=J_(E);if(te!==null){te.flags&=-257,Z_(te,E,S,_,o),te.mode&1&&X_(_,U,o),o=te,P=U;var se=o.updateQueue;if(se===null){var oe=new Set;oe.add(P),o.updateQueue=oe}else se.add(P);break e}else{if(!(o&1)){X_(_,U,o),$f();break e}P=Error(t(426))}}else if(it&&S.mode&1){var pt=J_(E);if(pt!==null){!(pt.flags&65536)&&(pt.flags|=256),Z_(pt,E,S,_,o),ef(Wo(P,S));break e}}_=P=Wo(P,S),It!==4&&(It=2),Tl===null?Tl=[_]:Tl.push(_),_=E;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var V=Q_(_,P,o);T_(_,V);break e;case 1:S=P;var x=_.type,F=_.stateNode;if(!(_.flags&128)&&(typeof x.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Pi===null||!Pi.has(F)))){_.flags|=65536,o&=-o,_.lanes|=o;var Y=Y_(_,S,o);T_(_,Y);break e}}_=_.return}while(_!==null)}Ny(l)}catch(ae){o=ae,_t===l&&l!==null&&(_t=l=l.return);continue}break}while(!0)}function Py(){var i=Ac.current;return Ac.current=wc,i===null?wc:i}function $f(){(It===0||It===3||It===2)&&(It=4),xt===null||!(As&268435455)&&!(Pc&268435455)||xi(xt,Ut)}function bc(i,o){var l=Fe;Fe|=2;var h=Py();(xt!==i||Ut!==o)&&(Kr=null,ks(i,o));do try{lR();break}catch(p){Ay(i,p)}while(!0);if(nf(),Fe=l,Ac.current=h,_t!==null)throw Error(t(261));return xt=null,Ut=0,It}function lR(){for(;_t!==null;)ky(_t)}function uR(){for(;_t!==null&&!xu();)ky(_t)}function ky(i){var o=Oy(i.alternate,i,Rn);i.memoizedProps=i.pendingProps,o===null?Ny(i):_t=o,Lf.current=null}function Ny(i){var o=i;do{var l=o.alternate;if(i=o.return,o.flags&32768){if(l=nR(l,o),l!==null){l.flags&=32767,_t=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{It=6,_t=null;return}}else if(l=tR(l,o,Rn),l!==null){_t=l;return}if(o=o.sibling,o!==null){_t=o;return}_t=o=i}while(o!==null);It===0&&(It=5)}function Ns(i,o,l){var h=Oe,p=Fn.transition;try{Fn.transition=null,Oe=1,cR(i,o,l,h)}finally{Fn.transition=p,Oe=h}return null}function cR(i,o,l,h){do Go();while(ki!==null);if(Fe&6)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(He(i,_),i===xt&&(_t=xt=null,Ut=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Nc||(Nc=!0,by(xn,function(){return Go(),null})),_=(l.flags&15990)!==0,l.subtreeFlags&15990||_){_=Fn.transition,Fn.transition=null;var E=Oe;Oe=1;var S=Fe;Fe|=4,Lf.current=null,iR(i,l),Ey(l,i),NC(Wd),yi=!!Bd,Wd=Bd=null,i.current=l,sR(l),Rd(),Fe=S,Oe=E,Fn.transition=_}else i.current=l;if(Nc&&(Nc=!1,ki=i,xc=p),_=i.pendingLanes,_===0&&(Pi=null),bu(l.stateNode),dn(i,Qe()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(kc)throw kc=!1,i=Ff,Ff=null,i;return xc&1&&i.tag!==0&&Go(),_=i.pendingLanes,_&1?i===Uf?Il++:(Il=0,Uf=i):Il=0,Si(),null}function Go(){if(ki!==null){var i=gi(xc),o=Fn.transition,l=Oe;try{if(Fn.transition=null,Oe=16>i?16:i,ki===null)var h=!1;else{if(i=ki,ki=null,xc=0,Fe&6)throw Error(t(331));var p=Fe;for(Fe|=4,ie=i.current;ie!==null;){var _=ie,E=_.child;if(ie.flags&16){var S=_.deletions;if(S!==null){for(var P=0;P<S.length;P++){var U=S[P];for(ie=U;ie!==null;){var G=ie;switch(G.tag){case 0:case 11:case 15:El(8,G,_)}var Q=G.child;if(Q!==null)Q.return=G,ie=Q;else for(;ie!==null;){G=ie;var H=G.sibling,te=G.return;if(my(G),G===U){ie=null;break}if(H!==null){H.return=te,ie=H;break}ie=te}}}var se=_.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var pt=oe.sibling;oe.sibling=null,oe=pt}while(oe!==null)}}ie=_}}if(_.subtreeFlags&2064&&E!==null)E.return=_,ie=E;else e:for(;ie!==null;){if(_=ie,_.flags&2048)switch(_.tag){case 0:case 11:case 15:El(9,_,_.return)}var V=_.sibling;if(V!==null){V.return=_.return,ie=V;break e}ie=_.return}}var x=i.current;for(ie=x;ie!==null;){E=ie;var F=E.child;if(E.subtreeFlags&2064&&F!==null)F.return=E,ie=F;else e:for(E=x;ie!==null;){if(S=ie,S.flags&2048)try{switch(S.tag){case 0:case 11:case 15:Rc(9,S)}}catch(ae){ut(S,S.return,ae)}if(S===E){ie=null;break e}var Y=S.sibling;if(Y!==null){Y.return=S.return,ie=Y;break e}ie=S.return}}if(Fe=p,Si(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(fs,i)}catch{}h=!0}return h}finally{Oe=l,Fn.transition=o}}return!1}function xy(i,o,l){o=Wo(l,o),o=Q_(i,o,1),i=Ri(i,o,1),o=sn(),i!==null&&(pi(i,1,o),dn(i,o))}function ut(i,o,l){if(i.tag===3)xy(i,i,l);else for(;o!==null;){if(o.tag===3){xy(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Pi===null||!Pi.has(h))){i=Wo(l,i),i=Y_(o,i,1),o=Ri(o,i,1),i=sn(),o!==null&&(pi(o,1,i),dn(o,i));break}}o=o.return}}function hR(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=sn(),i.pingedLanes|=i.suspendedLanes&l,xt===i&&(Ut&l)===l&&(It===4||It===3&&(Ut&130023424)===Ut&&500>Qe()-Vf?ks(i,0):Mf|=l),dn(i,o)}function Dy(i,o){o===0&&(i.mode&1?(o=go,go<<=1,!(go&130023424)&&(go=4194304)):o=1);var l=sn();i=qr(i,o),i!==null&&(pi(i,o,l),dn(i,l))}function dR(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),Dy(i,l)}function fR(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),Dy(i,l)}var Oy;Oy=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||ln.current)cn=!0;else{if(!(i.lanes&l)&&!(o.flags&128))return cn=!1,eR(i,o,l);cn=!!(i.flags&131072)}else cn=!1,it&&o.flags&1048576&&d_(o,uc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;Sc(i,o),i=o.pendingProps;var p=Lo(o,Ht.current);zo(o,l),p=pf(null,o,h,i,p,l);var _=mf();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,un(h)?(_=!0,oc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,af(o),p.updater=Tc,o.stateNode=p,p._reactInternals=o,wf(o,h,i,l),o=Cf(null,o,h,!0,_,l)):(o.tag=0,it&&_&&Yd(o),rn(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(Sc(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=mR(h),i=Zn(h,i),p){case 0:o=Sf(null,o,h,i,l);break e;case 1:o=sy(null,o,h,i,l);break e;case 11:o=ey(null,o,h,i,l);break e;case 14:o=ty(null,o,h,Zn(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Zn(h,p),Sf(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Zn(h,p),sy(i,o,h,p,l);case 3:e:{if(oy(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,w_(i,o),mc(o,h,null,l);var E=o.memoizedState;if(h=E.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=Wo(Error(t(423)),o),o=ay(i,o,h,l,p);break e}else if(h!==p){p=Wo(Error(t(424)),o),o=ay(i,o,h,l,p);break e}else for(Cn=wi(o.stateNode.containerInfo.firstChild),Sn=o,it=!0,Jn=null,l=v_(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Fo(),h===p){o=Gr(i,o,l);break e}rn(i,o,h,l)}o=o.child}return o;case 5:return S_(o),i===null&&Zd(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,E=p.children,$d(h,p)?E=null:_!==null&&$d(h,_)&&(o.flags|=32),iy(i,o),rn(i,o,E,l),o.child;case 6:return i===null&&Zd(o),null;case 13:return ly(i,o,l);case 4:return lf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=Uo(o,null,h,l):rn(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Zn(h,p),ey(i,o,h,p,l);case 7:return rn(i,o,o.pendingProps,l),o.child;case 8:return rn(i,o,o.pendingProps.children,l),o.child;case 12:return rn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,E=p.value,Ye(dc,h._currentValue),h._currentValue=E,_!==null)if(Xn(_.value,E)){if(_.children===p.children&&!ln.current){o=Gr(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var S=_.dependencies;if(S!==null){E=_.child;for(var P=S.firstContext;P!==null;){if(P.context===h){if(_.tag===1){P=Hr(-1,l&-l),P.tag=2;var U=_.updateQueue;if(U!==null){U=U.shared;var G=U.pending;G===null?P.next=P:(P.next=G.next,G.next=P),U.pending=P}}_.lanes|=l,P=_.alternate,P!==null&&(P.lanes|=l),sf(_.return,l,o),S.lanes|=l;break}P=P.next}}else if(_.tag===10)E=_.type===o.type?null:_.child;else if(_.tag===18){if(E=_.return,E===null)throw Error(t(341));E.lanes|=l,S=E.alternate,S!==null&&(S.lanes|=l),sf(E,l,o),E=_.sibling}else E=_.child;if(E!==null)E.return=_;else for(E=_;E!==null;){if(E===o){E=null;break}if(_=E.sibling,_!==null){_.return=E.return,E=_;break}E=E.return}_=E}rn(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,zo(o,l),p=Mn(p),h=h(p),o.flags|=1,rn(i,o,h,l),o.child;case 14:return h=o.type,p=Zn(h,o.pendingProps),p=Zn(h.type,p),ty(i,o,h,p,l);case 15:return ny(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Zn(h,p),Sc(i,o),o.tag=1,un(h)?(i=!0,oc(o)):i=!1,zo(o,l),G_(o,h,p),wf(o,h,p,l),Cf(null,o,h,!0,i,l);case 19:return cy(i,o,l);case 22:return ry(i,o,l)}throw Error(t(156,o.tag))};function by(i,o){return po(i,o)}function pR(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(i,o,l,h){return new pR(i,o,l,h)}function qf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function mR(i){if(typeof i=="function")return qf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===L)return 11;if(i===$t)return 14}return 2}function Di(i,o){var l=i.alternate;return l===null?(l=Un(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Lc(i,o,l,h,p,_){var E=2;if(h=i,typeof i=="function")qf(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case D:return xs(l.children,p,_,o);case C:E=8,p|=8;break;case A:return i=Un(12,l,o,p|2),i.elementType=A,i.lanes=_,i;case R:return i=Un(13,l,o,p),i.elementType=R,i.lanes=_,i;case dt:return i=Un(19,l,o,p),i.elementType=dt,i.lanes=_,i;case qe:return Mc(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case k:E=10;break e;case O:E=9;break e;case L:E=11;break e;case $t:E=14;break e;case qt:E=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Un(E,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function xs(i,o,l,h){return i=Un(7,i,h,o),i.lanes=l,i}function Mc(i,o,l,h){return i=Un(22,i,h,o),i.elementType=qe,i.lanes=l,i.stateNode={isHidden:!1},i}function Hf(i,o,l){return i=Un(6,i,null,o),i.lanes=l,i}function Gf(i,o,l){return o=Un(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function gR(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fi(0),this.expirationTimes=fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Kf(i,o,l,h,p,_,E,S,P){return i=new gR(i,o,l,S,P),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Un(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(_),i}function _R(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Ly(i){if(!i)return Ii;i=i._reactInternals;e:{if($n(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(un(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(un(l))return u_(i,l,o)}return o}function My(i,o,l,h,p,_,E,S,P){return i=Kf(l,h,!0,i,p,_,E,S,P),i.context=Ly(null),l=i.current,h=sn(),p=Ni(l),_=Hr(h,p),_.callback=o??null,Ri(l,_,p),i.current.lanes=p,pi(i,p,h),dn(i,h),i}function Vc(i,o,l,h){var p=o.current,_=sn(),E=Ni(p);return l=Ly(l),o.context===null?o.context=l:o.pendingContext=l,o=Hr(_,E),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Ri(p,o,E),i!==null&&(nr(i,p,E,_),pc(i,p,E)),E}function Fc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Vy(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Qf(i,o){Vy(i,o),(i=i.alternate)&&Vy(i,o)}var Fy=typeof reportError=="function"?reportError:function(i){console.error(i)};function Yf(i){this._internalRoot=i}Uc.prototype.render=Yf.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Vc(i,o,null,null)},Uc.prototype.unmount=Yf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Ps(function(){Vc(null,i,null,null)}),o[zr]=null}};function Uc(i){this._internalRoot=i}Uc.prototype.unstable_scheduleHydration=function(i){if(i){var o=Uu();i={blockedOn:null,target:i,priority:o};for(var l=0;l<fr.length&&o!==0&&o<fr[l].priority;l++);fr.splice(l,0,i),l===0&&Bu(i)}};function Xf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function jc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Uy(){}function yR(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var U=Fc(E);_.call(U)}}var E=My(o,h,i,0,null,!1,!1,"",Uy);return i._reactRootContainer=E,i[zr]=E.current,al(i.nodeType===8?i.parentNode:i),Ps(),E}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var S=h;h=function(){var U=Fc(P);S.call(U)}}var P=Kf(i,0,!1,null,null,!1,!1,"",Uy);return i._reactRootContainer=P,i[zr]=P.current,al(i.nodeType===8?i.parentNode:i),Ps(function(){Vc(o,P,l,h)}),P}function zc(i,o,l,h,p){var _=l._reactRootContainer;if(_){var E=_;if(typeof p=="function"){var S=p;p=function(){var P=Fc(E);S.call(P)}}Vc(o,E,i,p)}else E=yR(l,o,i,p,h);return Fc(E)}Vu=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=di(o.pendingLanes);l!==0&&(mi(o,l|1),dn(o,Qe()),!(Fe&6)&&(Ho=Qe()+500,Si()))}break;case 13:Ps(function(){var h=qr(i,1);if(h!==null){var p=sn();nr(h,i,1,p)}}),Qf(i,1)}},_o=function(i){if(i.tag===13){var o=qr(i,134217728);if(o!==null){var l=sn();nr(o,i,134217728,l)}Qf(i,134217728)}},Fu=function(i){if(i.tag===13){var o=Ni(i),l=qr(i,o);if(l!==null){var h=sn();nr(l,i,o,h)}Qf(i,o)}},Uu=function(){return Oe},ju=function(i,o){var l=Oe;try{return Oe=i,o()}finally{Oe=l}},ao=function(i,o,l){switch(o){case"input":if(Da(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=ic(h);if(!p)throw Error(t(90));to(h),Da(h,p)}}}break;case"textarea":so(i,l);break;case"select":o=l.value,o!=null&&Or(i,!!l.multiple,o,!1)}},ls=Bf,Ba=Ps;var vR={usingClientEntryPoint:!1,Events:[cl,Oo,ic,hr,za,Bf]},Sl={findFiberByHostInstance:Es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ER={bundleType:Sl.bundleType,version:Sl.version,rendererPackageName:Sl.rendererPackageName,rendererConfig:Sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=qa(i),i===null?null:i.stateNode},findFiberByHostInstance:Sl.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bc.isDisabled&&Bc.supportsFiber)try{fs=Bc.inject(ER),En=Bc}catch{}}return fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vR,fn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(o))throw Error(t(200));return _R(i,o,null,l)},fn.createRoot=function(i,o){if(!Xf(i))throw Error(t(299));var l=!1,h="",p=Fy;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Kf(i,1,!1,null,null,l,!1,h,p),i[zr]=o.current,al(i.nodeType===8?i.parentNode:i),new Yf(o)},fn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=qa(o),i=i===null?null:i.stateNode,i},fn.flushSync=function(i){return Ps(i)},fn.hydrate=function(i,o,l){if(!jc(o))throw Error(t(200));return zc(null,i,o,!0,l)},fn.hydrateRoot=function(i,o,l){if(!Xf(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",E=Fy;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),o=My(o,null,i,1,l??null,p,!1,_,E),i[zr]=o.current,al(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Uc(o)},fn.render=function(i,o,l){if(!jc(o))throw Error(t(200));return zc(null,i,o,!1,l)},fn.unmountComponentAtNode=function(i){if(!jc(i))throw Error(t(40));return i._reactRootContainer?(Ps(function(){zc(null,null,i,!1,function(){i._reactRootContainer=null,i[zr]=null})}),!0):!1},fn.unstable_batchedUpdates=Bf,fn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!jc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return zc(i,o,l,!1,h)},fn.version="18.3.1-next-f1338f8080-20240426",fn}var Gy;function kR(){if(Gy)return ep.exports;Gy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ep.exports=PR(),ep.exports}var Ky;function NR(){if(Ky)return Wc;Ky=1;var n=kR();return Wc.createRoot=n.createRoot,Wc.hydrateRoot=n.hydrateRoot,Wc}var xR=NR(),Qy={};/**
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
 */const sw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const J=function(n,e){if(!n)throw Ea(e)},Ea=function(n){return new Error("Firebase Database ("+sw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const ow=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},DR=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},am={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let I=(d&15)<<2|m>>6,N=m&63;f||(N=64,u||(I=64)),r.push(t[v],t[w],t[I],t[N])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ow(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):DR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||w==null)throw new OR;const I=a<<2|d>>4;if(r.push(I),m!==64){const N=d<<4&240|m>>2;if(r.push(N),w!==64){const j=m<<6&192|w;r.push(j)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class OR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aw=function(n){const e=ow(n);return am.encodeByteArray(e,!0)},ch=function(n){return aw(n).replace(/\./g,"")},hh=function(n){try{return am.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bR(n){return lw(void 0,n)}function lw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!LR(t)||(n[t]=lw(n[t],e[t]));return n}function LR(n){return n!=="__proto__"}/**
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
 */function MR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VR=()=>MR().__FIREBASE_DEFAULTS__,FR=()=>{if(typeof process>"u"||typeof Qy>"u")return;const n=Qy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},UR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hh(n[1]);return e&&JSON.parse(e)},qh=()=>{try{return VR()||FR()||UR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},uw=n=>{var e,t;return(t=(e=qh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cw=n=>{const e=uw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},hw=()=>{var n;return(n=qh())===null||n===void 0?void 0:n.config},dw=n=>{var e;return(e=qh())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Hh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function fw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ch(JSON.stringify(t)),ch(JSON.stringify(u)),""].join(".")}/**
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
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function jR(){var n;const e=(n=qh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BR(){const n=en();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function WR(){return sw.NODE_ADMIN===!0}function $R(){return!jR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gw(){try{return typeof indexedDB=="object"}catch{return!1}}function _w(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}function qR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const HR="FirebaseError";class ur extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=HR,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gs.prototype.create)}}class Gs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?GR(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new ur(s,d,r)}}function GR(n,e){return n.replace(KR,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const KR=/\{\$([^}]+)}/g;/**
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
 */function Ql(n){return JSON.parse(n)}function Lt(n){return JSON.stringify(n)}/**
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
 */const yw=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Ql(hh(a[0])||""),t=Ql(hh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},QR=function(n){const e=yw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},YR=function(n){const e=yw(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function li(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function aa(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Sp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Yl(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(Yy(a)&&Yy(u)){if(!Yl(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Yy(n){return n!==null&&typeof n=="object"}/**
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
 */function wa(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function Dl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class XR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)r[w]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let w=0;w<16;w++)r[w]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let w=16;w<80;w++){const I=r[w-3]^r[w-8]^r[w-14]^r[w-16];r[w]=(I<<1|I>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,v;for(let w=0;w<80;w++){w<40?w<20?(m=d^a&(u^d),v=1518500249):(m=a^u^d,v=1859775393):w<60?(m=a&u|d&(a|u),v=2400959708):(m=a^u^d,v=3395469782);const I=(s<<5|s>>>27)+m+f+v+r[w]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=I}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function JR(n,e){const t=new ZR(n,e);return t.subscribe.bind(t)}class ZR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");e0(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=rp),s.error===void 0&&(s.error=rp),s.complete===void 0&&(s.complete=rp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e0(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function rp(){}function um(n,e){return`${n} failed: ${e} argument `}/**
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
 */const t0=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,J(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Gh=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const n0=1e3,r0=2,i0=4*60*60*1e3,s0=.5;function Xy(n,e=n0,t=r0){const r=e*Math.pow(t,n),s=Math.round(s0*r*(Math.random()-.5)*2);return Math.min(i0,r+s)}/**
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
 */function ht(n){return n&&n._delegate?n._delegate:n}class zn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ds="[DEFAULT]";/**
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
 */class o0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Hh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l0(e))try{this.getOrInitializeService({instanceIdentifier:Ds})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ds){return this.instances.has(e)}getOptions(e=Ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:a0(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ds){return this.component?this.component.multipleInstances?e:Ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a0(n){return n===Ds?void 0:n}function l0(n){return n.instantiationMode==="EAGER"}/**
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
 */class u0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ne||(Ne={}));const c0={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},h0=Ne.INFO,d0={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},f0=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=d0[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pu{constructor(e){this.name=e,this._logLevel=h0,this._logHandler=f0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const p0=(n,e)=>e.some(t=>n instanceof t);let Jy,Zy;function m0(){return Jy||(Jy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g0(){return Zy||(Zy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vw=new WeakMap,Cp=new WeakMap,Ew=new WeakMap,ip=new WeakMap,cm=new WeakMap;function _0(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(ji(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&vw.set(t,n)}).catch(()=>{}),cm.set(e,n),e}function y0(n){if(Cp.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Cp.set(n,e)}let Rp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ew.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ji(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function v0(n){Rp=n(Rp)}function E0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(sp(this),e,...t);return Ew.set(r,e.sort?e.sort():[e]),ji(r)}:g0().includes(n)?function(...e){return n.apply(sp(this),e),ji(vw.get(this))}:function(...e){return ji(n.apply(sp(this),e))}}function w0(n){return typeof n=="function"?E0(n):(n instanceof IDBTransaction&&y0(n),p0(n,m0())?new Proxy(n,Rp):n)}function ji(n){if(n instanceof IDBRequest)return _0(n);if(ip.has(n))return ip.get(n);const e=w0(n);return e!==n&&(ip.set(n,e),cm.set(e,n)),e}const sp=n=>cm.get(n);function ww(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=ji(u);return r&&u.addEventListener("upgradeneeded",f=>{r(ji(u.result),f.oldVersion,f.newVersion,ji(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const T0=["get","getKey","getAll","getAllKeys","count"],I0=["put","add","delete","clear"],op=new Map;function ev(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(op.get(e))return op.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=I0.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||T0.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return op.set(e,a),a}v0(n=>({...n,get:(e,t,r)=>ev(e,t)||n.get(e,t,r),has:(e,t)=>!!ev(e,t)||n.has(e,t)}));/**
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
 */class S0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(C0(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function C0(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ap="@firebase/app",tv="0.10.18";/**
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
 */const ni=new pu("@firebase/app"),R0="@firebase/app-compat",A0="@firebase/analytics-compat",P0="@firebase/analytics",k0="@firebase/app-check-compat",N0="@firebase/app-check",x0="@firebase/auth",D0="@firebase/auth-compat",O0="@firebase/database",b0="@firebase/data-connect",L0="@firebase/database-compat",M0="@firebase/functions",V0="@firebase/functions-compat",F0="@firebase/installations",U0="@firebase/installations-compat",j0="@firebase/messaging",z0="@firebase/messaging-compat",B0="@firebase/performance",W0="@firebase/performance-compat",$0="@firebase/remote-config",q0="@firebase/remote-config-compat",H0="@firebase/storage",G0="@firebase/storage-compat",K0="@firebase/firestore",Q0="@firebase/vertexai",Y0="@firebase/firestore-compat",X0="firebase",J0="11.2.0";/**
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
 */const Pp="[DEFAULT]",Z0={[Ap]:"fire-core",[R0]:"fire-core-compat",[P0]:"fire-analytics",[A0]:"fire-analytics-compat",[N0]:"fire-app-check",[k0]:"fire-app-check-compat",[x0]:"fire-auth",[D0]:"fire-auth-compat",[O0]:"fire-rtdb",[b0]:"fire-data-connect",[L0]:"fire-rtdb-compat",[M0]:"fire-fn",[V0]:"fire-fn-compat",[F0]:"fire-iid",[U0]:"fire-iid-compat",[j0]:"fire-fcm",[z0]:"fire-fcm-compat",[B0]:"fire-perf",[W0]:"fire-perf-compat",[$0]:"fire-rc",[q0]:"fire-rc-compat",[H0]:"fire-gcs",[G0]:"fire-gcs-compat",[K0]:"fire-fst",[Y0]:"fire-fst-compat",[Q0]:"fire-vertex","fire-js":"fire-js",[X0]:"fire-js-all"};/**
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
 */const fh=new Map,eA=new Map,kp=new Map;function nv(n,e){try{n.container.addComponent(e)}catch(t){ni.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ar(n){const e=n.name;if(kp.has(e))return ni.debug(`There were multiple attempts to register component ${e}.`),!1;kp.set(e,n);for(const t of fh.values())nv(t,n);for(const t of eA.values())nv(t,n);return!0}function ts(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qr(n){return n.settings!==void 0}/**
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
 */const tA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zi=new Gs("app","Firebase",tA);/**
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
 */class nA{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ks=J0;function Tw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pp,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zi.create("bad-app-name",{appName:String(s)});if(t||(t=hw()),!t)throw zi.create("no-options");const a=fh.get(s);if(a){if(Yl(t,a.options)&&Yl(r,a.config))return a;throw zi.create("duplicate-app",{appName:s})}const u=new u0(s);for(const f of kp.values())u.addComponent(f);const d=new nA(t,r,u);return fh.set(s,d),d}function Kh(n=Pp){const e=fh.get(n);if(!e&&n===Pp&&hw())return Tw();if(!e)throw zi.create("no-app",{appName:n});return e}function gn(n,e,t){var r;let s=(r=Z0[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ni.warn(d.join(" "));return}ar(new zn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rA="firebase-heartbeat-database",iA=1,Xl="firebase-heartbeat-store";let ap=null;function Iw(){return ap||(ap=ww(rA,iA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xl)}catch(t){console.warn(t)}}}}).catch(n=>{throw zi.create("idb-open",{originalErrorMessage:n.message})})),ap}async function sA(n){try{const t=(await Iw()).transaction(Xl),r=await t.objectStore(Xl).get(Sw(n));return await t.done,r}catch(e){if(e instanceof ur)ni.warn(e.message);else{const t=zi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ni.warn(t.message)}}}async function rv(n,e){try{const r=(await Iw()).transaction(Xl,"readwrite");await r.objectStore(Xl).put(e,Sw(n)),await r.done}catch(t){if(t instanceof ur)ni.warn(t.message);else{const r=zi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ni.warn(r.message)}}}function Sw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const oA=1024,aA=30*24*60*60*1e3;class lA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cA(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=iv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const d=new Date(u.date).valueOf();return Date.now()-d<=aA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ni.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=iv(),{heartbeatsToSend:r,unsentEntries:s}=uA(this._heartbeatsCache.heartbeats),a=ch(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return ni.warn(t),""}}}function iv(){return new Date().toISOString().substring(0,10)}function uA(n,e=oA){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),sv(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),sv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class cA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gw()?_w().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sv(n){return ch(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function hA(n){ar(new zn("platform-logger",e=>new S0(e),"PRIVATE")),ar(new zn("heartbeat",e=>new lA(e),"PRIVATE")),gn(Ap,tv,n),gn(Ap,tv,"esm2017"),gn("fire-js","")}hA("");var dA="firebase",fA="11.2.0";/**
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
 */gn(dA,fA,"app");const Cw="@firebase/installations",hm="0.6.12";/**
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
 */const Rw=1e4,Aw=`w:${hm}`,Pw="FIS_v2",pA="https://firebaseinstallations.googleapis.com/v1",mA=60*60*1e3,gA="installations",_A="Installations";/**
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
 */const yA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Us=new Gs(gA,_A,yA);function kw(n){return n instanceof ur&&n.code.includes("request-failed")}/**
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
 */function Nw({projectId:n}){return`${pA}/projects/${n}/installations`}function xw(n){return{token:n.token,requestStatus:2,expiresIn:EA(n.expiresIn),creationTime:Date.now()}}async function Dw(n,e){const r=(await e.json()).error;return Us.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ow({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function vA(n,{refreshToken:e}){const t=Ow(n);return t.append("Authorization",wA(e)),t}async function bw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function EA(n){return Number(n.replace("s","000"))}function wA(n){return`${Pw} ${n}`}/**
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
 */async function TA({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Nw(n),s=Ow(n),a=e.getImmediate({optional:!0});if(a){const m=await a.getHeartbeatsHeader();m&&s.append("x-firebase-client",m)}const u={fid:t,authVersion:Pw,appId:n.appId,sdkVersion:Aw},d={method:"POST",headers:s,body:JSON.stringify(u)},f=await bw(()=>fetch(r,d));if(f.ok){const m=await f.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:xw(m.authToken)}}else throw await Dw("Create Installation",f)}/**
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
 */function Lw(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function IA(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const SA=/^[cdef][\w-]{21}$/,Np="";function CA(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=RA(n);return SA.test(t)?t:Np}catch{return Np}}function RA(n){return IA(n).substr(0,22)}/**
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
 */function Qh(n){return`${n.appName}!${n.appId}`}/**
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
 */const Mw=new Map;function Vw(n,e){const t=Qh(n);Fw(t,e),AA(t,e)}function Fw(n,e){const t=Mw.get(n);if(t)for(const r of t)r(e)}function AA(n,e){const t=PA();t&&t.postMessage({key:n,fid:e}),kA()}let bs=null;function PA(){return!bs&&"BroadcastChannel"in self&&(bs=new BroadcastChannel("[Firebase] FID Change"),bs.onmessage=n=>{Fw(n.data.key,n.data.fid)}),bs}function kA(){Mw.size===0&&bs&&(bs.close(),bs=null)}/**
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
 */const NA="firebase-installations-database",xA=1,js="firebase-installations-store";let lp=null;function dm(){return lp||(lp=ww(NA,xA,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(js)}}})),lp}async function ph(n,e){const t=Qh(n),s=(await dm()).transaction(js,"readwrite"),a=s.objectStore(js),u=await a.get(t);return await a.put(e,t),await s.done,(!u||u.fid!==e.fid)&&Vw(n,e.fid),e}async function Uw(n){const e=Qh(n),r=(await dm()).transaction(js,"readwrite");await r.objectStore(js).delete(e),await r.done}async function Yh(n,e){const t=Qh(n),s=(await dm()).transaction(js,"readwrite"),a=s.objectStore(js),u=await a.get(t),d=e(u);return d===void 0?await a.delete(t):await a.put(d,t),await s.done,d&&(!u||u.fid!==d.fid)&&Vw(n,d.fid),d}/**
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
 */async function fm(n){let e;const t=await Yh(n.appConfig,r=>{const s=DA(r),a=OA(n,s);return e=a.registrationPromise,a.installationEntry});return t.fid===Np?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function DA(n){const e=n||{fid:CA(),registrationStatus:0};return jw(e)}function OA(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Us.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=bA(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:LA(n)}:{installationEntry:e}}async function bA(n,e){try{const t=await TA(n,e);return ph(n.appConfig,t)}catch(t){throw kw(t)&&t.customData.serverCode===409?await Uw(n.appConfig):await ph(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function LA(n){let e=await ov(n.appConfig);for(;e.registrationStatus===1;)await Lw(100),e=await ov(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await fm(n);return r||t}return e}function ov(n){return Yh(n,e=>{if(!e)throw Us.create("installation-not-found");return jw(e)})}function jw(n){return MA(n)?{fid:n.fid,registrationStatus:0}:n}function MA(n){return n.registrationStatus===1&&n.registrationTime+Rw<Date.now()}/**
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
 */async function VA({appConfig:n,heartbeatServiceProvider:e},t){const r=FA(n,t),s=vA(n,t),a=e.getImmediate({optional:!0});if(a){const m=await a.getHeartbeatsHeader();m&&s.append("x-firebase-client",m)}const u={installation:{sdkVersion:Aw,appId:n.appId}},d={method:"POST",headers:s,body:JSON.stringify(u)},f=await bw(()=>fetch(r,d));if(f.ok){const m=await f.json();return xw(m)}else throw await Dw("Generate Auth Token",f)}function FA(n,{fid:e}){return`${Nw(n)}/${e}/authTokens:generate`}/**
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
 */async function pm(n,e=!1){let t;const r=await Yh(n.appConfig,a=>{if(!zw(a))throw Us.create("not-registered");const u=a.authToken;if(!e&&zA(u))return a;if(u.requestStatus===1)return t=UA(n,e),a;{if(!navigator.onLine)throw Us.create("app-offline");const d=WA(a);return t=jA(n,d),d}});return t?await t:r.authToken}async function UA(n,e){let t=await av(n.appConfig);for(;t.authToken.requestStatus===1;)await Lw(100),t=await av(n.appConfig);const r=t.authToken;return r.requestStatus===0?pm(n,e):r}function av(n){return Yh(n,e=>{if(!zw(e))throw Us.create("not-registered");const t=e.authToken;return $A(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function jA(n,e){try{const t=await VA(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ph(n.appConfig,r),t}catch(t){if(kw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Uw(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ph(n.appConfig,r)}throw t}}function zw(n){return n!==void 0&&n.registrationStatus===2}function zA(n){return n.requestStatus===2&&!BA(n)}function BA(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+mA}function WA(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function $A(n){return n.requestStatus===1&&n.requestTime+Rw<Date.now()}/**
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
 */async function qA(n){const e=n,{installationEntry:t,registrationPromise:r}=await fm(e);return r?r.catch(console.error):pm(e).catch(console.error),t.fid}/**
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
 */async function HA(n,e=!1){const t=n;return await GA(t),(await pm(t,e)).token}async function GA(n){const{registrationPromise:e}=await fm(n);e&&await e}/**
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
 */function KA(n){if(!n||!n.options)throw up("App Configuration");if(!n.name)throw up("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw up(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function up(n){return Us.create("missing-app-config-values",{valueName:n})}/**
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
 */const Bw="installations",QA="installations-internal",YA=n=>{const e=n.getProvider("app").getImmediate(),t=KA(e),r=ts(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},XA=n=>{const e=n.getProvider("app").getImmediate(),t=ts(e,Bw).getImmediate();return{getId:()=>qA(t),getToken:s=>HA(t,s)}};function JA(){ar(new zn(Bw,YA,"PUBLIC")),ar(new zn(QA,XA,"PRIVATE"))}JA();gn(Cw,hm);gn(Cw,hm,"esm2017");/**
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
 */const mh="analytics",ZA="firebase_id",eP="origin",tP=60*1e3,nP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",mm="https://www.googletagmanager.com/gtag/js";/**
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
 */const _n=new pu("@firebase/analytics");/**
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
 */const rP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Pn=new Gs("analytics","Analytics",rP);/**
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
 */function iP(n){if(!n.startsWith(mm)){const e=Pn.create("invalid-gtag-resource",{gtagURL:n});return _n.warn(e.message),""}return n}function Ww(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function sP(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function oP(n,e){const t=sP("firebase-js-sdk-policy",{createScriptURL:iP}),r=document.createElement("script"),s=`${mm}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function aP(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function lP(n,e,t,r,s,a){const u=r[s];try{if(u)await e[u];else{const f=(await Ww(t)).find(m=>m.measurementId===s);f&&await e[f.appId]}}catch(d){_n.error(d)}n("config",s,a)}async function uP(n,e,t,r,s){try{let a=[];if(s&&s.send_to){let u=s.send_to;Array.isArray(u)||(u=[u]);const d=await Ww(t);for(const f of u){const m=d.find(w=>w.measurementId===f),v=m&&e[m.appId];if(v)a.push(v);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),n("event",r,s||{})}catch(a){_n.error(a)}}function cP(n,e,t,r){async function s(a,...u){try{if(a==="event"){const[d,f]=u;await uP(n,e,t,d,f)}else if(a==="config"){const[d,f]=u;await lP(n,e,t,r,d,f)}else if(a==="consent"){const[d,f]=u;n("consent",d,f)}else if(a==="get"){const[d,f,m]=u;n("get",d,f,m)}else if(a==="set"){const[d]=u;n("set",d)}else n(a,...u)}catch(d){_n.error(d)}}return s}function hP(n,e,t,r,s){let a=function(...u){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(a=window[s]),window[s]=cP(a,n,e,t),{gtagCore:a,wrappedGtag:window[s]}}function dP(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(mm)&&t.src.includes(n))return t;return null}/**
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
 */const fP=30,pP=1e3;class mP{constructor(e={},t=pP){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $w=new mP;function gP(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function _P(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:gP(r)},a=nP.replace("{app-id}",t),u=await fetch(a,s);if(u.status!==200&&u.status!==304){let d="";try{const f=await u.json();!((e=f.error)===null||e===void 0)&&e.message&&(d=f.error.message)}catch{}throw Pn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:d})}return u.json()}async function yP(n,e=$w,t){const{appId:r,apiKey:s,measurementId:a}=n.options;if(!r)throw Pn.create("no-app-id");if(!s){if(a)return{measurementId:a,appId:r};throw Pn.create("no-api-key")}const u=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new wP;return setTimeout(async()=>{d.abort()},tP),qw({appId:r,apiKey:s,measurementId:a},u,d,e)}async function qw(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=$w){var a;const{appId:u,measurementId:d}=n;try{await vP(r,e)}catch(f){if(d)return _n.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:u,measurementId:d};throw f}try{const f=await _P(n);return s.deleteThrottleMetadata(u),f}catch(f){const m=f;if(!EP(m)){if(s.deleteThrottleMetadata(u),d)return _n.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:u,measurementId:d};throw f}const v=Number((a=m==null?void 0:m.customData)===null||a===void 0?void 0:a.httpStatus)===503?Xy(t,s.intervalMillis,fP):Xy(t,s.intervalMillis),w={throttleEndTimeMillis:Date.now()+v,backoffCount:t+1};return s.setThrottleMetadata(u,w),_n.debug(`Calling attemptFetch again in ${v} millis`),qw(n,w,r,s)}}function vP(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),a=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(a),r(Pn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function EP(n){if(!(n instanceof ur)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class wP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function TP(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const a=await e,u=Object.assign(Object.assign({},r),{send_to:a});n("event",t,u)}}/**
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
 */async function IP(){if(gw())try{await _w()}catch(n){return _n.warn(Pn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return _n.warn(Pn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function SP(n,e,t,r,s,a,u){var d;const f=yP(n);f.then(N=>{t[N.measurementId]=N.appId,n.options.measurementId&&N.measurementId!==n.options.measurementId&&_n.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>_n.error(N)),e.push(f);const m=IP().then(N=>{if(N)return r.getId()}),[v,w]=await Promise.all([f,m]);dP(a)||oP(a,v.measurementId),s("js",new Date);const I=(d=u==null?void 0:u.config)!==null&&d!==void 0?d:{};return I[eP]="firebase",I.update=!0,w!=null&&(I[ZA]=w),s("config",v.measurementId,I),v.measurementId}/**
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
 */class CP{constructor(e){this.app=e}_delete(){return delete Fl[this.app.options.appId],Promise.resolve()}}let Fl={},lv=[];const uv={};let cp="dataLayer",RP="gtag",cv,Hw,hv=!1;function AP(){const n=[];if(pw()&&n.push("This is a browser extension environment."),qR()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Pn.create("invalid-analytics-context",{errorInfo:e});_n.warn(t.message)}}function PP(n,e,t){AP();const r=n.options.appId;if(!r)throw Pn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)_n.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Pn.create("no-api-key");if(Fl[r]!=null)throw Pn.create("already-exists",{id:r});if(!hv){aP(cp);const{wrappedGtag:a,gtagCore:u}=hP(Fl,lv,uv,cp,RP);Hw=a,cv=u,hv=!0}return Fl[r]=SP(n,lv,uv,e,cv,cp,t),new CP(n)}function kP(n=Kh()){n=ht(n);const e=ts(n,mh);return e.isInitialized()?e.getImmediate():NP(n)}function NP(n,e={}){const t=ts(n,mh);if(t.isInitialized()){const s=t.getImmediate();if(Yl(e,t.getOptions()))return s;throw Pn.create("already-initialized")}return t.initialize({options:e})}function xP(n,e,t,r){n=ht(n),TP(Hw,Fl[n.app.options.appId],e,t,r).catch(s=>_n.error(s))}const dv="@firebase/analytics",fv="0.10.11";function DP(){ar(new zn(mh,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return PP(r,s,t)},"PUBLIC")),ar(new zn("analytics-internal",n,"PRIVATE")),gn(dv,fv),gn(dv,fv,"esm2017");function n(e){try{const t=e.getProvider(mh).getImmediate();return{logEvent:(r,s,a)=>xP(t,r,s,a)}}catch(t){throw Pn.create("interop-component-reg-failed",{reason:t})}}}DP();function gm(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Gw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OP=Gw,Kw=new Gs("auth","Firebase",Gw());/**
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
 */const gh=new pu("@firebase/auth");function bP(n,...e){gh.logLevel<=Ne.WARN&&gh.warn(`Auth (${Ks}): ${n}`,...e)}function Jc(n,...e){gh.logLevel<=Ne.ERROR&&gh.error(`Auth (${Ks}): ${n}`,...e)}/**
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
 */function lr(n,...e){throw _m(n,...e)}function Sr(n,...e){return _m(n,...e)}function Qw(n,e,t){const r=Object.assign(Object.assign({},OP()),{[e]:t});return new Gs("auth","Firebase",r).create(e,{appName:n.name})}function Bi(n){return Qw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _m(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kw.create(n,...e)}function me(n,e,...t){if(!n)throw _m(e,...t)}function Yr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Jc(e),new Error(e)}function ri(n,e){n||Yr(e)}/**
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
 */function xp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function LP(){return pv()==="http:"||pv()==="https:"}function pv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function MP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LP()||pw()||"connection"in navigator)?navigator.onLine:!0}function VP(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class mu{constructor(e,t){this.shortDelay=e,this.longDelay=t,ri(t>e,"Short delay should be less than long delay!"),this.isMobile=lm()||mw()}get(){return MP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ym(n,e){ri(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Yw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const UP=new mu(3e4,6e4);function Qs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ns(n,e,t,r,s={}){return Xw(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=wa(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return zR()||(m.referrerPolicy="no-referrer"),Yw.fetch()(Jw(n,n.config.apiHost,t,d),m)})}async function Xw(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},FP),e);try{const s=new zP(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw $c(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw $c(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw $c(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw $c(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Qw(n,v,m);lr(n,v)}}catch(s){if(s instanceof ur)throw s;lr(n,"network-request-failed",{message:String(s)})}}async function Xh(n,e,t,r,s={}){const a=await ns(n,e,t,r,s);return"mfaPendingCredential"in a&&lr(n,"multi-factor-auth-required",{_serverResponse:a}),a}function Jw(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?ym(n.config,s):`${n.config.apiScheme}://${s}`}function jP(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Sr(this.auth,"network-request-failed")),UP.get())})}}function $c(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Sr(n,e,r);return s.customData._tokenResponse=t,s}function mv(n){return n!==void 0&&n.enterprise!==void 0}class BP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jP(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function WP(n,e){return ns(n,"GET","/v2/recaptchaConfig",Qs(n,e))}/**
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
 */async function $P(n,e){return ns(n,"POST","/v1/accounts:delete",e)}async function Zw(n,e){return ns(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ul(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qP(n,e=!1){const t=ht(n),r=await t.getIdToken(e),s=vm(r);me(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Ul(hp(s.auth_time)),issuedAtTime:Ul(hp(s.iat)),expirationTime:Ul(hp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function hp(n){return Number(n)*1e3}function vm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Jc("JWT malformed, contained fewer than 3 sections"),null;try{const s=hh(t);return s?JSON.parse(s):(Jc("Failed to decode base64 JWT payload"),null)}catch(s){return Jc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function gv(n){const e=vm(n);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jl(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ur&&HP(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function HP({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class GP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ul(this.lastLoginAt),this.creationTime=Ul(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _h(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Jl(n,Zw(t,{idToken:r}));me(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?eT(a.providerUserInfo):[],d=QP(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?m:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Dp(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function KP(n){const e=ht(n);await _h(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QP(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function eT(n){return n.map(e=>{var{providerId:t}=e,r=gm(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function YP(n,e){const t=await Xw(n,{},async()=>{const r=wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=Jw(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Yw.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function XP(n,e){return ns(n,"POST","/v2/accounts:revokeToken",Qs(n,e))}/**
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
 */class ea{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){me(e.length!==0,"internal-error");const t=gv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await YP(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new ea;return r&&(me(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(me(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ea,this.toJSON())}_performRefresh(){return Yr("not implemented")}}/**
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
 */function bi(n,e){me(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=gm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Dp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Jl(this,this.stsTokenManager.getToken(this.auth,e));return me(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qP(this,e)}reload(){return KP(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _h(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qr(this.auth.app))return Promise.reject(Bi(this.auth));const e=await this.getIdToken();return await Jl(this,$P(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,v;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,N=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,j=(u=t.photoURL)!==null&&u!==void 0?u:void 0,W=(d=t.tenantId)!==null&&d!==void 0?d:void 0,B=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,pe=(m=t.createdAt)!==null&&m!==void 0?m:void 0,_e=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ye,emailVerified:Ie,isAnonymous:nt,providerData:ke,stsTokenManager:D}=t;me(ye&&D,e,"internal-error");const C=ea.fromJSON(this.name,D);me(typeof ye=="string",e,"internal-error"),bi(w,e.name),bi(I,e.name),me(typeof Ie=="boolean",e,"internal-error"),me(typeof nt=="boolean",e,"internal-error"),bi(N,e.name),bi(j,e.name),bi(W,e.name),bi(B,e.name),bi(pe,e.name),bi(_e,e.name);const A=new Xr({uid:ye,auth:e,email:I,emailVerified:Ie,displayName:w,isAnonymous:nt,photoURL:j,phoneNumber:N,tenantId:W,stsTokenManager:C,createdAt:pe,lastLoginAt:_e});return ke&&Array.isArray(ke)&&(A.providerData=ke.map(k=>Object.assign({},k))),B&&(A._redirectEventId=B),A}static async _fromIdTokenResponse(e,t,r=!1){const s=new ea;s.updateFromServerResponse(t);const a=new Xr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _h(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];me(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?eT(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new ea;d.updateFromIdToken(r);const f=new Xr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Dp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
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
 */const _v=new Map;function Jr(n){ri(n instanceof Function,"Expected a class definition");let e=_v.get(n);return e?(ri(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_v.set(n,e),e)}/**
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
 */class tT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tT.type="NONE";const yv=tT;/**
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
 */function Zc(n,e,t){return`firebase:${n}:${e}:${t}`}class ta{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Zc(this.userKey,s.apiKey,a),this.fullPersistenceKey=Zc("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ta(Jr(yv),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||Jr(yv);const u=Zc(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const v=await m._get(u);if(v){const w=Xr._fromJSON(e,v);m!==a&&(d=w),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new ta(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new ta(a,e,r))}}/**
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
 */function vv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aT(e))return"Blackberry";if(lT(e))return"Webos";if(rT(e))return"Safari";if((e.includes("chrome/")||iT(e))&&!e.includes("edge/"))return"Chrome";if(oT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nT(n=en()){return/firefox\//i.test(n)}function rT(n=en()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iT(n=en()){return/crios\//i.test(n)}function sT(n=en()){return/iemobile/i.test(n)}function oT(n=en()){return/android/i.test(n)}function aT(n=en()){return/blackberry/i.test(n)}function lT(n=en()){return/webos/i.test(n)}function Em(n=en()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function JP(n=en()){var e;return Em(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZP(){return BR()&&document.documentMode===10}function uT(n=en()){return Em(n)||oT(n)||lT(n)||aT(n)||/windows phone/i.test(n)||sT(n)}/**
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
 */function cT(n,e=[]){let t;switch(n){case"Browser":t=vv(en());break;case"Worker":t=`${vv(en())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ks}/${r}`}/**
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
 */class ek{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tk(n,e={}){return ns(n,"GET","/v2/passwordPolicy",Qs(n,e))}/**
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
 */const nk=6;class rk{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:nk,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class ik{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ev(this),this.idTokenSubscription=new Ev(this),this.beforeStateQueue=new ek(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jr(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ta.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zw(this,{idToken:e}),r=await Xr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qr(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _h(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qr(this.app))return Promise.reject(Bi(this));const t=e?ht(e):null;return t&&me(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qr(this.app)?Promise.reject(Bi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qr(this.app)?Promise.reject(Bi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tk(this),t=new rk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await XP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jr(e)||this._popupRedirectResolver;me(t,this,"argument-error"),this.redirectPersistenceManager=await ta.create(this,[Jr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bP(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ta(n){return ht(n)}class Ev{constructor(e){this.auth=e,this.observer=null,this.addObserver=JR(t=>this.observer=t)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sk(n){Jh=n}function hT(n){return Jh.loadJS(n)}function ok(){return Jh.recaptchaEnterpriseScript}function ak(){return Jh.gapiScript}function lk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class uk{constructor(){this.enterprise=new ck}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ck{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const hk="recaptcha-enterprise",dT="NO_RECAPTCHA";class dk{constructor(e){this.type=hk,this.auth=Ta(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{WP(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new BP(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;mv(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(dT)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uk().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&mv(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=ok();f.length!==0&&(f+=d),hT(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function wv(n,e,t,r=!1,s=!1){const a=new dk(n);let u;if(s)u=dT;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Tv(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await wv(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await wv(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
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
 */function fk(n,e){const t=ts(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Yl(a,e??{}))return s;lr(s,"already-initialized")}return t.initialize({options:e})}function pk(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Jr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mk(n,e,t){const r=Ta(n);me(r._canInitEmulator,r,"emulator-config-failed"),me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=fT(e),{host:u,port:d}=gk(e),f=d===null?"":`:${d}`;r.config.emulator={url:`${a}//${u}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),_k()}function fT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function gk(n){const e=fT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:Iv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Iv(u)}}}function Iv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _k(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class wm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yr("not implemented")}_getIdTokenResponse(e){return Yr("not implemented")}_linkToIdToken(e,t){return Yr("not implemented")}_getReauthenticationResolver(e){return Yr("not implemented")}}async function yk(n,e){return ns(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vk(n,e){return Xh(n,"POST","/v1/accounts:signInWithPassword",Qs(n,e))}/**
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
 */async function Ek(n,e){return Xh(n,"POST","/v1/accounts:signInWithEmailLink",Qs(n,e))}async function wk(n,e){return Xh(n,"POST","/v1/accounts:signInWithEmailLink",Qs(n,e))}/**
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
 */class Zl extends wm{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Zl(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Zl(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tv(e,t,"signInWithPassword",vk);case"emailLink":return Ek(e,{email:this._email,oobCode:this._password});default:lr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tv(e,r,"signUpPassword",yk);case"emailLink":return wk(e,{idToken:t,email:this._email,oobCode:this._password});default:lr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function na(n,e){return Xh(n,"POST","/v1/accounts:signInWithIdp",Qs(n,e))}/**
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
 */const Tk="http://localhost";class zs extends wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=gm(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new zs(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return na(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,na(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,na(e,t)}buildRequest(){const e={requestUri:Tk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wa(t)}return e}}/**
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
 */function Ik(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sk(n){const e=xl(Dl(n)).link,t=e?xl(Dl(e)).deep_link_id:null,r=xl(Dl(n)).deep_link_id;return(r?xl(Dl(r)).link:null)||r||t||e||n}class Tm{constructor(e){var t,r,s,a,u,d;const f=xl(Dl(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,w=Ik((s=f.mode)!==null&&s!==void 0?s:null);me(m&&v&&w,"argument-error"),this.apiKey=m,this.operation=w,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=Sk(e);try{return new Tm(t)}catch{return null}}}/**
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
 */class Ia{constructor(){this.providerId=Ia.PROVIDER_ID}static credential(e,t){return Zl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Tm.parseLink(t);return me(r,"argument-error"),Zl._fromEmailAndCode(e,r.code,r.tenantId)}}Ia.PROVIDER_ID="password";Ia.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ia.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gu extends pT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Li extends gu{constructor(){super("facebook.com")}static credential(e){return zs._fromParams({providerId:Li.PROVIDER_ID,signInMethod:Li.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Li.credentialFromTaggedObject(e)}static credentialFromError(e){return Li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Li.credential(e.oauthAccessToken)}catch{return null}}}Li.FACEBOOK_SIGN_IN_METHOD="facebook.com";Li.PROVIDER_ID="facebook.com";/**
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
 */class Mi extends gu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return zs._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Mi.credential(t,r)}catch{return null}}}Mi.GOOGLE_SIGN_IN_METHOD="google.com";Mi.PROVIDER_ID="google.com";/**
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
 */class Vi extends gu{constructor(){super("github.com")}static credential(e){return zs._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vi.credential(e.oauthAccessToken)}catch{return null}}}Vi.GITHUB_SIGN_IN_METHOD="github.com";Vi.PROVIDER_ID="github.com";/**
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
 */class Fi extends gu{constructor(){super("twitter.com")}static credential(e,t){return zs._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Fi.credential(t,r)}catch{return null}}}Fi.TWITTER_SIGN_IN_METHOD="twitter.com";Fi.PROVIDER_ID="twitter.com";/**
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
 */class la{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await Xr._fromIdTokenResponse(e,r,s),u=Sv(r);return new la({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Sv(r);return new la({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Sv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class yh extends ur{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new yh(e,t,r,s)}}function mT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?yh._fromErrorAndOperation(n,a,e,r):a})}async function Ck(n,e,t=!1){const r=await Jl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return la._forOperation(n,"link",r)}/**
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
 */async function Rk(n,e,t=!1){const{auth:r}=n;if(Qr(r.app))return Promise.reject(Bi(r));const s="reauthenticate";try{const a=await Jl(n,mT(r,s,e,n),t);me(a.idToken,r,"internal-error");const u=vm(a.idToken);me(u,r,"internal-error");const{sub:d}=u;return me(n.uid===d,r,"user-mismatch"),la._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&lr(r,"user-mismatch"),a}}/**
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
 */async function gT(n,e,t=!1){if(Qr(n.app))return Promise.reject(Bi(n));const r="signIn",s=await mT(n,r,e),a=await la._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function Ak(n,e){return gT(Ta(n),e)}/**
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
 */async function Pk(n){const e=Ta(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function kk(n,e,t){return Qr(n.app)?Promise.reject(Bi(n)):Ak(ht(n),Ia.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Pk(n),r})}function Nk(n,e,t,r){return ht(n).onIdTokenChanged(e,t,r)}function xk(n,e,t){return ht(n).beforeAuthStateChanged(e,t)}function Dk(n,e,t,r){return ht(n).onAuthStateChanged(e,t,r)}function _T(n){return ht(n).signOut()}const vh="__sak";/**
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
 */class yT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vh,"1"),this.storage.removeItem(vh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ok=1e3,bk=10;class vT extends yT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);ZP()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bk):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ok)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vT.type="LOCAL";const Lk=vT;/**
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
 */class ET extends yT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ET.type="SESSION";const wT=ET;/**
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
 */function Mk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Zh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Zh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await Mk(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zh.receivers=[];/**
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
 */function Im(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Vk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=Im("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const I=w;if(I.data.eventId===m)switch(I.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(I.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Cr(){return window}function Fk(n){Cr().location.href=n}/**
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
 */function TT(){return typeof Cr().WorkerGlobalScope<"u"&&typeof Cr().importScripts=="function"}async function Uk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function zk(){return TT()?self:null}/**
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
 */const IT="firebaseLocalStorageDb",Bk=1,Eh="firebaseLocalStorage",ST="fbase_key";class _u{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ed(n,e){return n.transaction([Eh],e?"readwrite":"readonly").objectStore(Eh)}function Wk(){const n=indexedDB.deleteDatabase(IT);return new _u(n).toPromise()}function Op(){const n=indexedDB.open(IT,Bk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Eh,{keyPath:ST})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Eh)?e(r):(r.close(),await Wk(),e(await Op()))})})}async function Cv(n,e,t){const r=ed(n,!0).put({[ST]:e,value:t});return new _u(r).toPromise()}async function $k(n,e){const t=ed(n,!1).get(e),r=await new _u(t).toPromise();return r===void 0?null:r.value}function Rv(n,e){const t=ed(n,!0).delete(e);return new _u(t).toPromise()}const qk=800,Hk=3;class CT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Op(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Hk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zh._getInstance(zk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Uk(),!this.activeServiceWorker)return;this.sender=new Vk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Op();return await Cv(e,vh,"1"),await Rv(e,vh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>$k(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Rv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=ed(s,!1).getAll();return new _u(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CT.type="LOCAL";const Gk=CT;new mu(3e4,6e4);/**
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
 */function Kk(n,e){return e?Jr(e):(me(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Sm extends wm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return na(e,this._buildIdpRequest())}_linkToIdToken(e,t){return na(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return na(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qk(n){return gT(n.auth,new Sm(n),n.bypassAuthState)}function Yk(n){const{auth:e,user:t}=n;return me(t,e,"internal-error"),Rk(t,new Sm(n),n.bypassAuthState)}async function Xk(n){const{auth:e,user:t}=n;return me(t,e,"internal-error"),Ck(t,new Sm(n),n.bypassAuthState)}/**
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
 */class RT{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qk;case"linkViaPopup":case"linkViaRedirect":return Xk;case"reauthViaPopup":case"reauthViaRedirect":return Yk;default:lr(this.auth,"internal-error")}}resolve(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jk=new mu(2e3,1e4);class Jo extends RT{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Jo.currentPopupAction&&Jo.currentPopupAction.cancel(),Jo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){ri(this.filter.length===1,"Popup operations only handle one event");const e=Im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jk.get())};e()}}Jo.currentPopupAction=null;/**
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
 */const Zk="pendingRedirect",eh=new Map;class eN extends RT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=eh.get(this.auth._key());if(!e){try{const r=await tN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}eh.set(this.auth._key(),e)}return this.bypassAuthState||eh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tN(n,e){const t=iN(e),r=rN(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function nN(n,e){eh.set(n._key(),e)}function rN(n){return Jr(n._redirectPersistence)}function iN(n){return Zc(Zk,n.config.apiKey,n.name)}async function sN(n,e,t=!1){if(Qr(n.app))return Promise.reject(Bi(n));const r=Ta(n),s=Kk(r,e),u=await new eN(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const oN=10*60*1e3;class aN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!AT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Sr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Av(e))}saveEventToCache(e){this.cachedEventUids.add(Av(e)),this.lastProcessedEventTime=Date.now()}}function Av(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function AT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lN(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AT(n);default:return!1}}/**
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
 */async function uN(n,e={}){return ns(n,"GET","/v1/projects",e)}/**
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
 */const cN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hN=/^https?/;async function dN(n){if(n.config.emulator)return;const{authorizedDomains:e}=await uN(n);for(const t of e)try{if(fN(t))return}catch{}lr(n,"unauthorized-domain")}function fN(n){const e=xp(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!hN.test(t))return!1;if(cN.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const pN=new mu(3e4,6e4);function Pv(){const n=Cr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function mN(n){return new Promise((e,t)=>{var r,s,a;function u(){Pv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pv(),t(Sr(n,"network-request-failed"))},timeout:pN.get()})}if(!((s=(r=Cr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Cr().gapi)===null||a===void 0)&&a.load)u();else{const d=lk("iframefcb");return Cr()[d]=()=>{gapi.load?u():t(Sr(n,"network-request-failed"))},hT(`${ak()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw th=null,e})}let th=null;function gN(n){return th=th||mN(n),th}/**
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
 */const _N=new mu(5e3,15e3),yN="__/auth/iframe",vN="emulator/auth/iframe",EN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TN(n){const e=n.config;me(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ym(e,vN):`https://${n.config.authDomain}/${yN}`,r={apiKey:e.apiKey,appName:n.name,v:Ks},s=wN.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${wa(r).slice(1)}`}async function IN(n){const e=await gN(n),t=Cr().gapi;return me(t,n,"internal-error"),e.open({where:document.body,url:TN(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EN,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Sr(n,"network-request-failed"),d=Cr().setTimeout(()=>{a(u)},_N.get());function f(){Cr().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const SN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CN=500,RN=600,AN="_blank",PN="http://localhost";class kv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kN(n,e,t,r=CN,s=RN){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},SN),{width:r.toString(),height:s.toString(),top:a,left:u}),m=en().toLowerCase();t&&(d=iT(m)?AN:t),nT(m)&&(e=e||PN,f.scrollbars="yes");const v=Object.entries(f).reduce((I,[N,j])=>`${I}${N}=${j},`,"");if(JP(m)&&d!=="_self")return NN(e||"",d),new kv(null);const w=window.open(e||"",d,v);me(w,n,"popup-blocked");try{w.focus()}catch{}return new kv(w)}function NN(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const xN="__/auth/handler",DN="emulator/auth/handler",ON=encodeURIComponent("fac");async function Nv(n,e,t,r,s,a){me(n.config.authDomain,n,"auth-domain-config-required"),me(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ks,eventId:s};if(e instanceof pT){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Sp(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))u[v]=w}if(e instanceof gu){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),m=f?`#${ON}=${encodeURIComponent(f)}`:"";return`${bN(n)}?${wa(d).slice(1)}${m}`}function bN({config:n}){return n.emulator?ym(n,DN):`https://${n.authDomain}/${xN}`}/**
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
 */const dp="webStorageSupport";class LN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wT,this._completeRedirectFn=sN,this._overrideRedirectResult=nN}async _openPopup(e,t,r,s){var a;ri((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await Nv(e,t,r,xp(),s);return kN(e,u,Im())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await Nv(e,t,r,xp(),s);return Fk(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(ri(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await IN(e),r=new aN(e);return t.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(dp,{type:dp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[dp];u!==void 0&&t(!!u),lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return uT()||rT()||Em()}}const MN=LN;var xv="@firebase/auth",Dv="1.8.2";/**
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
 */class VN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function FN(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UN(n){ar(new zn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;me(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cT(n)},m=new ik(r,s,a,f);return pk(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ar(new zn("auth-internal",e=>{const t=Ta(e.getProvider("auth").getImmediate());return(r=>new VN(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(xv,Dv,FN(n)),gn(xv,Dv,"esm2017")}/**
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
 */const jN=5*60,zN=dw("authIdTokenMaxAge")||jN;let Ov=null;const BN=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>zN)return;const s=t==null?void 0:t.token;Ov!==s&&(Ov=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function WN(n=Kh()){const e=ts(n,"auth");if(e.isInitialized())return e.getImmediate();const t=fk(n,{popupRedirectResolver:MN,persistence:[Gk,Lk,wT]}),r=dw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=BN(a.toString());xk(t,u,()=>u(t.currentUser)),Nk(t,d=>u(d))}}const s=uw("auth");return s&&mk(t,`http://${s}`),t}function $N(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}sk({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Sr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",$N().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UN("Browser");var bv={};const Lv="@firebase/database",Mv="1.0.11";/**
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
 */let PT="";function qN(n){PT=n}/**
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
 */class HN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Lt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ql(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class GN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return li(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const kT=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HN(e)}}catch{}return new GN},Ls=kT("localStorage"),KN=kT("sessionStorage");/**
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
 */const ra=new pu("@firebase/database"),QN=function(){let n=1;return function(){return n++}}(),NT=function(n){const e=t0(n),t=new XR;t.update(e);const r=t.digest();return am.encodeByteArray(r)},yu=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=yu.apply(null,r):typeof r=="object"?e+=Lt(r):e+=r,e+=" "}return e};let jl=null,Vv=!0;const YN=function(n,e){J(!0,"Can't turn on custom loggers persistently."),ra.logLevel=Ne.VERBOSE,jl=ra.log.bind(ra)},Jt=function(...n){if(Vv===!0&&(Vv=!1,jl===null&&KN.get("logging_enabled")===!0&&YN()),jl){const e=yu.apply(null,n);jl(e)}},vu=function(n){return function(...e){Jt(n,...e)}},bp=function(...n){const e="FIREBASE INTERNAL ERROR: "+yu(...n);ra.error(e)},ii=function(...n){const e=`FIREBASE FATAL ERROR: ${yu(...n)}`;throw ra.error(e),new Error(e)},yn=function(...n){const e="FIREBASE WARNING: "+yu(...n);ra.warn(e)},XN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xT=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},JN=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ua="[MIN_NAME]",Bs="[MAX_NAME]",Sa=function(n,e){if(n===e)return 0;if(n===ua||e===Bs)return-1;if(e===ua||n===Bs)return 1;{const t=Fv(n),r=Fv(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},ZN=function(n,e){return n===e?0:n<e?-1:1},Rl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Lt(e))},Cm=function(n){if(typeof n!="object"||n===null)return Lt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Lt(e[r]),t+=":",t+=Cm(n[e[r]]);return t+="}",t},DT=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function vn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const OT=function(n){J(!xT(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const v=m.join("");let w="";for(f=0;f<64;f+=8){let I=parseInt(v.substr(f,8),2).toString(16);I.length===1&&(I="0"+I),w=w+I}return w.toLowerCase()},e1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},t1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function n1(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const r1=new RegExp("^-?(0*)\\d{1,10}$"),i1=-2147483648,s1=2147483647,Fv=function(n){if(r1.test(n)){const e=Number(n);if(e>=i1&&e<=s1)return e}return null},Ca=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw yn("Exception was thrown by user callback.",t),e},Math.floor(0))}},o1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zl=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class a1{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){yn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class l1{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yn(e)}}class nh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nh.OWNER="owner";/**
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
 */const Rm="5",bT="v",LT="s",MT="r",VT="f",FT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,UT="ls",jT="p",Lp="ac",zT="websocket",BT="long_polling";/**
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
 */class WT{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ls.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ls.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function u1(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function $T(n,e,t){J(typeof e=="string","typeof type must == string"),J(typeof t=="object","typeof params must == object");let r;if(e===zT)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===BT)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);u1(n)&&(t.ns=n.namespace);const s=[];return vn(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
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
 */class c1{constructor(){this.counters_={}}incrementCounter(e,t=1){li(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return bR(this.counters_)}}/**
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
 */const fp={},pp={};function Am(n){const e=n.toString();return fp[e]||(fp[e]=new c1),fp[e]}function h1(n,e){const t=n.toString();return pp[t]||(pp[t]=e()),pp[t]}/**
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
 */class d1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ca(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Uv="start",f1="close",p1="pLPCommand",m1="pRTLPCB",qT="id",HT="pw",GT="ser",g1="cb",_1="seg",y1="ts",v1="d",E1="dframe",KT=1870,QT=30,w1=KT-QT,T1=25e3,I1=3e4;class Zo{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vu(e),this.stats_=Am(t),this.urlFn=f=>(this.appCheckToken&&(f[Lp]=this.appCheckToken),$T(t,BT,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new d1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(I1)),JN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pm((...a)=>{const[u,d,f,m,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Uv)this.id=d,this.password=f;else if(u===f1)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[Uv]="t",r[GT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[g1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[bT]=Rm,this.transportSessionId&&(r[LT]=this.transportSessionId),this.lastSessionId&&(r[UT]=this.lastSessionId),this.applicationId&&(r[jT]=this.applicationId),this.appCheckToken&&(r[Lp]=this.appCheckToken),typeof location<"u"&&location.hostname&&FT.test(location.hostname)&&(r[MT]=VT);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zo.forceAllow_=!0}static forceDisallow(){Zo.forceDisallow_=!0}static isAvailable(){return Zo.forceAllow_?!0:!Zo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!e1()&&!t1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Lt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=aw(t),s=DT(r,w1);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[E1]="t",r[qT]=e,r[HT]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Lt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Pm{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QN(),window[p1+this.uniqueCallbackIdentifier]=e,window[m1+this.uniqueCallbackIdentifier]=t,this.myIFrame=Pm.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Jt("frame writing exception"),d.stack&&Jt(d.stack),Jt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Jt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qT]=this.myID,e[HT]=this.myPW,e[GT]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+QT+r.length<=KT;){const u=this.pendingSegs.shift();r=r+"&"+_1+s+"="+u.seg+"&"+y1+s+"="+u.ts+"&"+v1+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(T1)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const S1=16384,C1=45e3;let wh=null;typeof MozWebSocket<"u"?wh=MozWebSocket:typeof WebSocket<"u"&&(wh=WebSocket);class Tr{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vu(this.connId),this.stats_=Am(t),this.connURL=Tr.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[bT]=Rm,typeof location<"u"&&location.hostname&&FT.test(location.hostname)&&(u[MT]=VT),t&&(u[LT]=t),r&&(u[UT]=r),s&&(u[Lp]=s),a&&(u[jT]=a),$T(e,zT,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ls.set("previous_websocket_failure",!0);try{let r;WR(),this.mySock=new wh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Tr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&wh!==null&&!Tr.forceDisallow_}static previouslyFailed(){return Ls.isInMemoryStorage||Ls.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ls.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Ql(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Lt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=DT(t,S1);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(C1))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tr.responsesRequiredToBeHealthy=2;Tr.healthyTimeout=3e4;/**
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
 */class eu{static get ALL_TRANSPORTS(){return[Zo,Tr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Tr.isAvailable();let r=t&&!Tr.previouslyFailed();if(e.webSocketOnly&&(t||yn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Tr];else{const s=this.transports_=[];for(const a of eu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);eu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}eu.globalTransportInitialized_=!1;/**
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
 */const R1=6e4,A1=5e3,P1=10*1024,k1=100*1024,mp="t",jv="d",N1="s",zv="r",x1="e",Bv="o",Wv="a",$v="n",qv="p",D1="h";class O1{constructor(e,t,r,s,a,u,d,f,m,v){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vu("c:"+this.id+":"),this.transportManager_=new eu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=zl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>k1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>P1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mp in e){const t=e[mp];t===Wv?this.upgradeIfSecondaryHealthy_():t===zv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Bv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Rl("t",e),r=Rl("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$v,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Rl("t",e),r=Rl("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Rl(mp,e);if(jv in e){const r=e[jv];if(t===D1){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===$v){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===N1?this.onConnectionShutdown_(r):t===zv?this.onReset_(r):t===x1?bp("Server Error: "+r):t===Bv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bp("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Rm!==r&&yn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),zl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(R1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(A1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class YT{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class XT{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){J(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Th extends XT{static getInstance(){return new Th}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!lm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Hv=32,Gv=768;class Ge{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Be(){return new Ge("")}function Ae(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Hi(n){return n.pieces_.length-n.pieceNum_}function Xe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ge(n.pieces_,e)}function JT(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function b1(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ZT(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function eI(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ge(e,0)}function St(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Ge)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new Ge(t,0)}function xe(n){return n.pieceNum_>=n.pieces_.length}function mn(n,e){const t=Ae(n),r=Ae(e);if(t===null)return e;if(t===r)return mn(Xe(n),Xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function km(n,e){if(Hi(n)!==Hi(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function rr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Hi(n)>Hi(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class L1{constructor(e,t){this.errorPrefix_=t,this.parts_=ZT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Gh(this.parts_[r]);tI(this)}}function M1(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Gh(e),tI(n)}function V1(n){const e=n.parts_.pop();n.byteLength_-=Gh(e),n.parts_.length>0&&(n.byteLength_-=1)}function tI(n){if(n.byteLength_>Gv)throw new Error(n.errorPrefix_+"has a key path longer than "+Gv+" bytes ("+n.byteLength_+").");if(n.parts_.length>Hv)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hv+") or object contains a cycle "+Os(n))}function Os(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Nm extends XT{static getInstance(){return new Nm}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Al=1e3,F1=60*5*1e3,Kv=30*1e3,U1=1.3,j1=3e4,z1="server_kill",Qv=3;class ei extends YT{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=ei.nextPersistentConnectionId_++,this.log_=vu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Al,this.maxReconnectDelay_=F1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Th.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Lt(a)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new Hh,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;ei.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&li(e,"w")){const r=aa(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();yn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||YR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=QR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Lt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):bp("Unrecognized action received from server: "+Lt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Al,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Al,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>j1&&(this.reconnectDelay_=Al),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*U1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ei.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(w){J(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(w)};this.realtime_={close:f,sendRequest:m};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,I]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);u?Jt("getToken() completed but was canceled"):(Jt("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=I&&I.token,d=new O1(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,N=>{yn(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(z1)},a))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&yn(w),f())}}}interrupt(e){Jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Sp(this.interruptReasons_)&&(this.reconnectDelay_=Al,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Cm(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new Ge(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Jt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qv&&(this.reconnectDelay_=Kv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Jt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+PT.replace(/\./g,"-")]=1,lm()?e["framework.cordova"]=1:mw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Th.getInstance().currentlyOnline();return Sp(this.interruptReasons_)&&e}}ei.nextPersistentConnectionId_=0;ei.nextConnectionId_=0;/**
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
 */class Pe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Pe(e,t)}}/**
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
 */class td{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Pe(ua,e),s=new Pe(ua,t);return this.compare(r,s)!==0}minPost(){return Pe.MIN}}/**
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
 */let qc;class nI extends td{static get __EMPTY_NODE(){return qc}static set __EMPTY_NODE(e){qc=e}compare(e,t){return Sa(e.name,t.name)}isDefinedOn(e){throw Ea("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Pe.MIN}maxPost(){return new Pe(Bs,qc)}makePost(e,t){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new Pe(e,qc)}toString(){return".key"}}const ia=new nI;/**
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
 */let Hc=class{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},An=class Ol{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Ol.RED,this.left=s??Ir.EMPTY_NODE,this.right=a??Ir.EMPTY_NODE}copy(e,t,r,s,a){return new Ol(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ir.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Ir.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ol.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ol.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};An.RED=!0;An.BLACK=!1;class B1{copy(e,t,r,s,a){return this}insert(e,t,r){return new An(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Ir=class rh{constructor(e,t=rh.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new rh(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,An.BLACK,null,null))}remove(e){return new rh(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,An.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Hc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Hc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Hc(this.root_,null,this.comparator_,!0,e)}};Ir.EMPTY_NODE=new B1;/**
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
 */function W1(n,e){return Sa(n.name,e.name)}function xm(n,e){return Sa(n,e)}/**
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
 */let Mp;function $1(n){Mp=n}const rI=function(n){return typeof n=="number"?"number:"+OT(n):"string:"+n},iI=function(n){if(n.isLeafNode()){const e=n.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&li(e,".sv"),"Priority must be a string or number.")}else J(n===Mp||n.isEmpty(),"priority of unexpected type.");J(n===Mp||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Yv;class Ot{static set __childrenNodeConstructor(e){Yv=e}static get __childrenNodeConstructor(){return Yv}constructor(e,t=Ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),iI(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return xe(e)?this:Ae(e)===".priority"?this.priorityNode_:Ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ae(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(J(r!==".priority"||Hi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(Xe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rI(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=OT(this.value_):e+=this.value_,this.lazyHash_=NT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ot.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Ot.VALUE_TYPE_ORDER.indexOf(t),a=Ot.VALUE_TYPE_ORDER.indexOf(r);return J(s>=0,"Unknown leaf type: "+t),J(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let sI,oI;function q1(n){sI=n}function H1(n){oI=n}class G1 extends td{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?Sa(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Pe.MIN}maxPost(){return new Pe(Bs,new Ot("[PRIORITY-POST]",oI))}makePost(e,t){const r=sI(e);return new Pe(t,new Ot("[PRIORITY-POST]",r))}toString(){return".priority"}}const ct=new G1;/**
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
 */const K1=Math.log(2);class Q1{constructor(e){const t=a=>parseInt(Math.log(a)/K1,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ih=function(n,e,t,r){n.sort(e);const s=function(f,m){const v=m-f;let w,I;if(v===0)return null;if(v===1)return w=n[f],I=t?t(w):w,new An(I,w.node,An.BLACK,null,null);{const N=parseInt(v/2,10)+f,j=s(f,N),W=s(N+1,m);return w=n[N],I=t?t(w):w,new An(I,w.node,An.BLACK,j,W)}},a=function(f){let m=null,v=null,w=n.length;const I=function(j,W){const B=w-j,pe=w;w-=j;const _e=s(B+1,pe),ye=n[B],Ie=t?t(ye):ye;N(new An(Ie,ye.node,W,null,_e))},N=function(j){m?(m.left=j,m=j):(v=j,m=j)};for(let j=0;j<f.count;++j){const W=f.nextBitIsOne(),B=Math.pow(2,f.count-(j+1));W?I(B,An.BLACK):(I(B,An.BLACK),I(B,An.RED))}return v},u=new Q1(n.length),d=a(u);return new Ir(r||e,d)};/**
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
 */let gp;const Pl={};class Zr{static get Default(){return J(ct,"ChildrenNode.ts has not been loaded"),gp=gp||new Zr({".priority":Pl},{".priority":ct}),gp}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=aa(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ir?t:null}hasIndex(e){return li(this.indexSet_,e.toString())}addIndex(e,t){J(e!==ia,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Pe.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=Ih(r,e.getCompare()):d=Pl;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const v=Object.assign({},this.indexes_);return v[f]=d,new Zr(v,m)}addToIndexes(e,t){const r=dh(this.indexes_,(s,a)=>{const u=aa(this.indexSet_,a);if(J(u,"Missing index implementation for "+a),s===Pl)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(Pe.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),Ih(d,u.getCompare())}else return Pl;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new Pe(e.name,d))),f.insert(e,e.node)}});return new Zr(r,this.indexSet_)}removeFromIndexes(e,t){const r=dh(this.indexes_,s=>{if(s===Pl)return s;{const a=t.get(e.name);return a?s.remove(new Pe(e.name,a)):s}});return new Zr(r,this.indexSet_)}}/**
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
 */let kl;class ge{static get EMPTY_NODE(){return kl||(kl=new ge(new Ir(xm),null,Zr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&iI(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||kl}updatePriority(e){return this.children_.isEmpty()?this:new ge(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?kl:t}}getChild(e){const t=Ae(e);return t===null?this:this.getImmediateChild(t).getChild(Xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(J(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Pe(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?kl:this.priorityNode_;return new ge(s,u,a)}}updateChild(e,t){const r=Ae(e);if(r===null)return t;{J(Ae(e)!==".priority"||Hi(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Xe(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(ct,(u,d)=>{t[u]=d.val(e),r++,a&&ge.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+rI(this.getPriority().val())+":"),this.forEachChild(ct,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":NT(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Pe(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Pe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Pe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Pe.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Pe.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Eu?-1:0}withIndex(e){if(e===ia||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ge(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ia||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ct),s=t.getIterator(ct);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===ia?null:this.indexMap_.get(e.toString())}}ge.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Y1 extends ge{constructor(){super(new Ir(xm),ge.EMPTY_NODE,Zr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ge.EMPTY_NODE}isEmpty(){return!1}}const Eu=new Y1;Object.defineProperties(Pe,{MIN:{value:new Pe(ua,ge.EMPTY_NODE)},MAX:{value:new Pe(Bs,Eu)}});nI.__EMPTY_NODE=ge.EMPTY_NODE;Ot.__childrenNodeConstructor=ge;$1(Eu);H1(Eu);/**
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
 */const X1=!0;function zt(n,e=null){if(n===null)return ge.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ot(t,zt(e))}if(!(n instanceof Array)&&X1){const t=[];let r=!1;if(vn(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=zt(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Pe(u,f)))}}),t.length===0)return ge.EMPTY_NODE;const a=Ih(t,W1,u=>u.name,xm);if(r){const u=Ih(t,ct.getCompare());return new ge(a,zt(e),new Zr({".priority":u},{".priority":ct}))}else return new ge(a,zt(e),Zr.Default)}else{let t=ge.EMPTY_NODE;return vn(n,(r,s)=>{if(li(n,r)&&r.substring(0,1)!=="."){const a=zt(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(zt(e))}}q1(zt);/**
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
 */class J1 extends td{constructor(e){super(),this.indexPath_=e,J(!xe(e)&&Ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?Sa(e.name,t.name):a}makePost(e,t){const r=zt(e),s=ge.EMPTY_NODE.updateChild(this.indexPath_,r);return new Pe(t,s)}maxPost(){const e=ge.EMPTY_NODE.updateChild(this.indexPath_,Eu);return new Pe(Bs,e)}toString(){return ZT(this.indexPath_,0).join("/")}}/**
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
 */class Z1 extends td{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Sa(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Pe.MIN}maxPost(){return Pe.MAX}makePost(e,t){const r=zt(e);return new Pe(t,r)}toString(){return".value"}}const ex=new Z1;/**
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
 */function aI(n){return{type:"value",snapshotNode:n}}function ca(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function tu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function nu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function tx(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Dm{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){J(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(tu(t,d)):J(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(ca(t,r)):u.trackChildChange(nu(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ct,(s,a)=>{t.hasChild(s)||r.trackChildChange(tu(s,a))}),t.isLeafNode()||t.forEachChild(ct,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(nu(s,a,u))}else r.trackChildChange(ca(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ge.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ru{constructor(e){this.indexedFilter_=new Dm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ru.getStartPost_(e),this.endPost_=ru.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new Pe(t,r))||(r=ge.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ge.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(ge.EMPTY_NODE);const a=this;return t.forEachChild(ct,(u,d)=>{a.matches(new Pe(u,d))||(s=s.updateImmediateChild(u,ge.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class nx{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ru(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new Pe(t,r))||(r=ge.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=ge.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=ge.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(ge.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,ge.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const w=this.index_.getCompare();u=(I,N)=>w(N,I)}else u=this.index_.getCompare();const d=e;J(d.numChildren()===this.limit_,"");const f=new Pe(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(f);if(d.hasChild(t)){const w=d.getImmediateChild(t);let I=s.getChildAfterChild(this.index_,m,this.reverse_);for(;I!=null&&(I.name===t||d.hasChild(I.name));)I=s.getChildAfterChild(this.index_,I,this.reverse_);const N=I==null?1:u(I,f);if(v&&!r.isEmpty()&&N>=0)return a!=null&&a.trackChildChange(nu(t,r,w)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(tu(t,w));const W=d.updateImmediateChild(t,ge.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(a!=null&&a.trackChildChange(ca(I.name,I.node)),W.updateImmediateChild(I.name,I.node)):W}}else return r.isEmpty()?e:v&&u(m,f)>=0?(a!=null&&(a.trackChildChange(tu(m.name,m.node)),a.trackChildChange(ca(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,ge.EMPTY_NODE)):e}}/**
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
 */class Om{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ct}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ua}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ct}copy(){const e=new Om;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rx(n){return n.loadsAllData()?new Dm(n.getIndex()):n.hasLimit()?new nx(n):new ru(n)}function Xv(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ct?t="$priority":n.index_===ex?t="$value":n.index_===ia?t="$key":(J(n.index_ instanceof J1,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Lt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Lt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Lt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Lt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Lt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Jv(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ct&&(e.i=n.index_.toString()),e}/**
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
 */class Sh extends YT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=vu("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=Sh.getListenId_(e,r),d={};this.listens_[u]=d;const f=Xv(e._queryParams);this.restRequest_(a+".json",f,(m,v)=>{let w=v;if(m===404&&(w=null,m=null),m===null&&this.onDataUpdate_(a,w,!1,r),aa(this.listens_,u)===d){let I;m?m===401?I="permission_denied":I="rest_error:"+m:I="ok",s(I,null)}})}unlisten(e,t){const r=Sh.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Xv(e._queryParams),r=e._path.toString(),s=new Hh;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wa(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=Ql(d.responseText)}catch{yn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&yn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
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
 */class ix{constructor(){this.rootNode_=ge.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ch(){return{value:null,children:new Map}}function lI(n,e,t){if(xe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ae(e);n.children.has(r)||n.children.set(r,Ch());const s=n.children.get(r);e=Xe(e),lI(s,e,t)}}function Vp(n,e,t){n.value!==null?t(e,n.value):sx(n,(r,s)=>{const a=new Ge(e.toString()+"/"+r);Vp(s,a,t)})}function sx(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class ox{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&vn(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
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
 */const Zv=10*1e3,ax=30*1e3,lx=5*60*1e3;class ux{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ox(e);const r=Zv+(ax-Zv)*Math.random();zl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;vn(e,(s,a)=>{a>0&&li(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),zl(this.reportStats_.bind(this),Math.floor(Math.random()*2*lx))}}/**
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
 */var ir;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ir||(ir={}));function uI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Lm(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Rh{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=ir.ACK_USER_WRITE,this.source=uI()}operationForChild(e){if(xe(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ge(e));return new Rh(Be(),t,this.revert)}}else return J(Ae(this.path)===e,"operationForChild called for unrelated child."),new Rh(Xe(this.path),this.affectedTree,this.revert)}}/**
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
 */class iu{constructor(e,t){this.source=e,this.path=t,this.type=ir.LISTEN_COMPLETE}operationForChild(e){return xe(this.path)?new iu(this.source,Be()):new iu(this.source,Xe(this.path))}}/**
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
 */class Ws{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=ir.OVERWRITE}operationForChild(e){return xe(this.path)?new Ws(this.source,Be(),this.snap.getImmediateChild(e)):new Ws(this.source,Xe(this.path),this.snap)}}/**
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
 */class su{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=ir.MERGE}operationForChild(e){if(xe(this.path)){const t=this.children.subtree(new Ge(e));return t.isEmpty()?null:t.value?new Ws(this.source,Be(),t.value):new su(this.source,Be(),t)}else return J(Ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new su(this.source,Xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $s{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(xe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ae(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class cx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hx(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(tx(u.childName,u.snapshotNode))}),Nl(n,s,"child_removed",e,r,t),Nl(n,s,"child_added",e,r,t),Nl(n,s,"child_moved",a,r,t),Nl(n,s,"child_changed",e,r,t),Nl(n,s,"value",e,r,t),s}function Nl(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>fx(n,d,f)),u.forEach(d=>{const f=dx(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function dx(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function fx(n,e,t){if(e.childName==null||t.childName==null)throw Ea("Should only compare child_ events.");const r=new Pe(e.childName,e.snapshotNode),s=new Pe(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
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
 */function nd(n,e){return{eventCache:n,serverCache:e}}function Bl(n,e,t,r){return nd(new $s(e,t,r),n.serverCache)}function cI(n,e,t,r){return nd(n.eventCache,new $s(e,t,r))}function Fp(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function qs(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let _p;const px=()=>(_p||(_p=new Ir(ZN)),_p);class tt{static fromObject(e){let t=new tt(null);return vn(e,(r,s)=>{t=t.set(new Ge(r),s)}),t}constructor(e,t=px()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Be(),value:this.value};if(xe(e))return null;{const r=Ae(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(Xe(e),t);return a!=null?{path:St(new Ge(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(xe(e))return this;{const t=Ae(e),r=this.children.get(t);return r!==null?r.subtree(Xe(e)):new tt(null)}}set(e,t){if(xe(e))return new tt(t,this.children);{const r=Ae(e),a=(this.children.get(r)||new tt(null)).set(Xe(e),t),u=this.children.insert(r,a);return new tt(this.value,u)}}remove(e){if(xe(e))return this.children.isEmpty()?new tt(null):new tt(null,this.children);{const t=Ae(e),r=this.children.get(t);if(r){const s=r.remove(Xe(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new tt(null):new tt(this.value,a)}else return this}}get(e){if(xe(e))return this.value;{const t=Ae(e),r=this.children.get(t);return r?r.get(Xe(e)):null}}setTree(e,t){if(xe(e))return t;{const r=Ae(e),a=(this.children.get(r)||new tt(null)).setTree(Xe(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new tt(this.value,u)}}fold(e){return this.fold_(Be(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(St(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Be(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(xe(e))return null;{const a=Ae(e),u=this.children.get(a);return u?u.findOnPath_(Xe(e),St(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Be(),t)}foreachOnPath_(e,t,r){if(xe(e))return this;{this.value&&r(t,this.value);const s=Ae(e),a=this.children.get(s);return a?a.foreachOnPath_(Xe(e),St(t,s),r):new tt(null)}}foreach(e){this.foreach_(Be(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(St(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class or{constructor(e){this.writeTree_=e}static empty(){return new or(new tt(null))}}function Wl(n,e,t){if(xe(e))return new or(new tt(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=mn(s,e);return a=a.updateChild(u,t),new or(n.writeTree_.set(s,a))}else{const s=new tt(t),a=n.writeTree_.setTree(e,s);return new or(a)}}}function eE(n,e,t){let r=n;return vn(t,(s,a)=>{r=Wl(r,St(e,s),a)}),r}function tE(n,e){if(xe(e))return or.empty();{const t=n.writeTree_.setTree(e,new tt(null));return new or(t)}}function Up(n,e){return Ys(n,e)!=null}function Ys(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(mn(t.path,e)):null}function nE(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ct,(r,s)=>{e.push(new Pe(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Pe(r,s.value))}),e}function Wi(n,e){if(xe(e))return n;{const t=Ys(n,e);return t!=null?new or(new tt(t)):new or(n.writeTree_.subtree(e))}}function jp(n){return n.writeTree_.isEmpty()}function ha(n,e){return hI(Be(),n.writeTree_,e)}function hI(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(J(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=hI(St(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(St(n,".priority"),r)),t}}/**
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
 */function Mm(n,e){return mI(e,n)}function mx(n,e,t,r,s){J(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Wl(n.visibleWrites,e,t)),n.lastWriteId=r}function gx(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function _x(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);J(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&yx(d,r.path)?s=!1:rr(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return vx(n),!0;if(r.snap)n.visibleWrites=tE(n.visibleWrites,r.path);else{const d=r.children;vn(d,f=>{n.visibleWrites=tE(n.visibleWrites,St(r.path,f))})}return!0}else return!1}function yx(n,e){if(n.snap)return rr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&rr(St(n.path,t),e))return!0;return!1}function vx(n){n.visibleWrites=dI(n.allWrites,Ex,Be()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Ex(n){return n.visible}function dI(n,e,t){let r=or.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)rr(t,u)?(d=mn(t,u),r=Wl(r,d,a.snap)):rr(u,t)&&(d=mn(u,t),r=Wl(r,Be(),a.snap.getChild(d)));else if(a.children){if(rr(t,u))d=mn(t,u),r=eE(r,d,a.children);else if(rr(u,t))if(d=mn(u,t),xe(d))r=eE(r,Be(),a.children);else{const f=aa(a.children,Ae(d));if(f){const m=f.getChild(Xe(d));r=Wl(r,Be(),m)}}}else throw Ea("WriteRecord should have .snap or .children")}}return r}function fI(n,e,t,r,s){if(!r&&!s){const a=Ys(n.visibleWrites,e);if(a!=null)return a;{const u=Wi(n.visibleWrites,e);if(jp(u))return t;if(t==null&&!Up(u,Be()))return null;{const d=t||ge.EMPTY_NODE;return ha(u,d)}}}else{const a=Wi(n.visibleWrites,e);if(!s&&jp(a))return t;if(!s&&t==null&&!Up(a,Be()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(rr(m.path,e)||rr(e,m.path))},d=dI(n.allWrites,u,e),f=t||ge.EMPTY_NODE;return ha(d,f)}}}function wx(n,e,t){let r=ge.EMPTY_NODE;const s=Ys(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ct,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Wi(n.visibleWrites,e);return t.forEachChild(ct,(u,d)=>{const f=ha(Wi(a,new Ge(u)),d);r=r.updateImmediateChild(u,f)}),nE(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Wi(n.visibleWrites,e);return nE(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function Tx(n,e,t,r,s){J(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=St(e,t);if(Up(n.visibleWrites,a))return null;{const u=Wi(n.visibleWrites,a);return jp(u)?s.getChild(t):ha(u,s.getChild(t))}}function Ix(n,e,t,r){const s=St(e,t),a=Ys(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Wi(n.visibleWrites,s);return ha(u,r.getNode().getImmediateChild(t))}else return null}function Sx(n,e){return Ys(n.visibleWrites,e)}function Cx(n,e,t,r,s,a,u){let d;const f=Wi(n.visibleWrites,e),m=Ys(f,Be());if(m!=null)d=m;else if(t!=null)d=ha(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const v=[],w=u.getCompare(),I=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let N=I.getNext();for(;N&&v.length<s;)w(N,r)!==0&&v.push(N),N=I.getNext();return v}else return[]}function Rx(){return{visibleWrites:or.empty(),allWrites:[],lastWriteId:-1}}function Ah(n,e,t,r){return fI(n.writeTree,n.treePath,e,t,r)}function Vm(n,e){return wx(n.writeTree,n.treePath,e)}function rE(n,e,t,r){return Tx(n.writeTree,n.treePath,e,t,r)}function Ph(n,e){return Sx(n.writeTree,St(n.treePath,e))}function Ax(n,e,t,r,s,a){return Cx(n.writeTree,n.treePath,e,t,r,s,a)}function Fm(n,e,t){return Ix(n.writeTree,n.treePath,e,t)}function pI(n,e){return mI(St(n.treePath,e),n.writeTree)}function mI(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Px{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;J(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),J(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,nu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,tu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,ca(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,nu(r,e.snapshotNode,s.oldSnap));else throw Ea("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class kx{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const gI=new kx;class Um{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $s(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fm(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qs(this.viewCache_),a=Ax(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
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
 */function Nx(n){return{filter:n}}function xx(n,e){J(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Dx(n,e,t,r,s){const a=new Px;let u,d;if(t.type===ir.OVERWRITE){const m=t;m.source.fromUser?u=zp(n,e,m.path,m.snap,r,s,a):(J(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!xe(m.path),u=kh(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===ir.MERGE){const m=t;m.source.fromUser?u=bx(n,e,m.path,m.children,r,s,a):(J(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=Bp(n,e,m.path,m.children,r,s,d,a))}else if(t.type===ir.ACK_USER_WRITE){const m=t;m.revert?u=Vx(n,e,m.path,r,s,a):u=Lx(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===ir.LISTEN_COMPLETE)u=Mx(n,e,t.path,r,a);else throw Ea("Unknown operation type: "+t.type);const f=a.getChanges();return Ox(e,u,f),{viewCache:u,changes:f}}function Ox(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Fp(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(aI(Fp(e)))}}function _I(n,e,t,r,s,a){const u=e.eventCache;if(Ph(r,t)!=null)return e;{let d,f;if(xe(t))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=qs(e),v=m instanceof ge?m:ge.EMPTY_NODE,w=Vm(r,v);d=n.filter.updateFullNode(e.eventCache.getNode(),w,a)}else{const m=Ah(r,qs(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Ae(t);if(m===".priority"){J(Hi(t)===1,"Can't have a priority with additional path components");const v=u.getNode();f=e.serverCache.getNode();const w=rE(r,t,v,f);w!=null?d=n.filter.updatePriority(v,w):d=u.getNode()}else{const v=Xe(t);let w;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const I=rE(r,t,u.getNode(),f);I!=null?w=u.getNode().getImmediateChild(m).updateChild(v,I):w=u.getNode().getImmediateChild(m)}else w=Fm(r,m,e.serverCache);w!=null?d=n.filter.updateChild(u.getNode(),m,w,v,s,a):d=u.getNode()}}return Bl(e,d,u.isFullyInitialized()||xe(t),n.filter.filtersNodes())}}function kh(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const v=u?n.filter:n.filter.getIndexedFilter();if(xe(t))m=v.updateFullNode(f.getNode(),r,null);else if(v.filtersNodes()&&!f.isFiltered()){const N=f.getNode().updateChild(t,r);m=v.updateFullNode(f.getNode(),N,null)}else{const N=Ae(t);if(!f.isCompleteForPath(t)&&Hi(t)>1)return e;const j=Xe(t),B=f.getNode().getImmediateChild(N).updateChild(j,r);N===".priority"?m=v.updatePriority(f.getNode(),B):m=v.updateChild(f.getNode(),N,B,j,gI,null)}const w=cI(e,m,f.isFullyInitialized()||xe(t),v.filtersNodes()),I=new Um(s,w,a);return _I(n,w,t,s,I,d)}function zp(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const v=new Um(s,e,a);if(xe(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=Bl(e,m,!0,n.filter.filtersNodes());else{const w=Ae(t);if(w===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=Bl(e,m,d.isFullyInitialized(),d.isFiltered());else{const I=Xe(t),N=d.getNode().getImmediateChild(w);let j;if(xe(I))j=r;else{const W=v.getCompleteChild(w);W!=null?JT(I)===".priority"&&W.getChild(eI(I)).isEmpty()?j=W:j=W.updateChild(I,r):j=ge.EMPTY_NODE}if(N.equals(j))f=e;else{const W=n.filter.updateChild(d.getNode(),w,j,I,v,u);f=Bl(e,W,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function iE(n,e){return n.eventCache.isCompleteForChild(e)}function bx(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const v=St(t,f);iE(e,Ae(v))&&(d=zp(n,d,v,m,s,a,u))}),r.foreach((f,m)=>{const v=St(t,f);iE(e,Ae(v))||(d=zp(n,d,v,m,s,a,u))}),d}function sE(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Bp(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;xe(t)?m=r:m=new tt(null).setTree(t,r);const v=e.serverCache.getNode();return m.children.inorderTraversal((w,I)=>{if(v.hasChild(w)){const N=e.serverCache.getNode().getImmediateChild(w),j=sE(n,N,I);f=kh(n,f,new Ge(w),j,s,a,u,d)}}),m.children.inorderTraversal((w,I)=>{const N=!e.serverCache.isCompleteForChild(w)&&I.value===null;if(!v.hasChild(w)&&!N){const j=e.serverCache.getNode().getImmediateChild(w),W=sE(n,j,I);f=kh(n,f,new Ge(w),W,s,a,u,d)}}),f}function Lx(n,e,t,r,s,a,u){if(Ph(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(xe(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return kh(n,e,t,f.getNode().getChild(t),s,a,d,u);if(xe(t)){let m=new tt(null);return f.getNode().forEachChild(ia,(v,w)=>{m=m.set(new Ge(v),w)}),Bp(n,e,t,m,s,a,d,u)}else return e}else{let m=new tt(null);return r.foreach((v,w)=>{const I=St(t,v);f.isCompleteForPath(I)&&(m=m.set(v,f.getNode().getChild(I)))}),Bp(n,e,t,m,s,a,d,u)}}function Mx(n,e,t,r,s){const a=e.serverCache,u=cI(e,a.getNode(),a.isFullyInitialized()||xe(t),a.isFiltered());return _I(n,u,t,r,gI,s)}function Vx(n,e,t,r,s,a){let u;if(Ph(r,t)!=null)return e;{const d=new Um(r,e,s),f=e.eventCache.getNode();let m;if(xe(t)||Ae(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Ah(r,qs(e));else{const w=e.serverCache.getNode();J(w instanceof ge,"serverChildren would be complete if leaf node"),v=Vm(r,w)}v=v,m=n.filter.updateFullNode(f,v,a)}else{const v=Ae(t);let w=Fm(r,v,e.serverCache);w==null&&e.serverCache.isCompleteForChild(v)&&(w=f.getImmediateChild(v)),w!=null?m=n.filter.updateChild(f,v,w,Xe(t),d,a):e.eventCache.getNode().hasChild(v)?m=n.filter.updateChild(f,v,ge.EMPTY_NODE,Xe(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Ah(r,qs(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||Ph(r,Be())!=null,Bl(e,m,u,n.filter.filtersNodes())}}/**
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
 */class Fx{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Dm(r.getIndex()),a=rx(r);this.processor_=Nx(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(ge.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(ge.EMPTY_NODE,d.getNode(),null),v=new $s(f,u.isFullyInitialized(),s.filtersNodes()),w=new $s(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=nd(w,v),this.eventGenerator_=new cx(this.query_)}get query(){return this.query_}}function Ux(n){return n.viewCache_.serverCache.getNode()}function jx(n,e){const t=qs(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!xe(e)&&!t.getImmediateChild(Ae(e)).isEmpty())?t.getChild(e):null}function oE(n){return n.eventRegistrations_.length===0}function zx(n,e){n.eventRegistrations_.push(e)}function aE(n,e,t){const r=[];if(t){J(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function lE(n,e,t,r){e.type===ir.MERGE&&e.source.queryId!==null&&(J(qs(n.viewCache_),"We should always have a full cache before handling merges"),J(Fp(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=Dx(n.processor_,s,e,t,r);return xx(n.processor_,a.viewCache),J(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,yI(n,a.changes,a.viewCache.eventCache.getNode(),null)}function Bx(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ct,(a,u)=>{r.push(ca(a,u))}),t.isFullyInitialized()&&r.push(aI(t.getNode())),yI(n,r,t.getNode(),e)}function yI(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return hx(n.eventGenerator_,e,t,s)}/**
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
 */let Nh;class Wx{constructor(){this.views=new Map}}function $x(n){J(!Nh,"__referenceConstructor has already been defined"),Nh=n}function qx(){return J(Nh,"Reference.ts has not been loaded"),Nh}function Hx(n){return n.views.size===0}function jm(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return J(a!=null,"SyncTree gave us an op for an invalid query."),lE(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(lE(u,e,t,r));return a}}function Gx(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=Ah(t,s?r:null),f=!1;d?f=!0:r instanceof ge?(d=Vm(t,r),f=!1):(d=ge.EMPTY_NODE,f=!1);const m=nd(new $s(d,f,!1),new $s(r,s,!1));return new Fx(e,m)}return u}function Kx(n,e,t,r,s,a){const u=Gx(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),zx(u,t),Bx(u,t)}function Qx(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=Gi(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(aE(m,t,r)),oE(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(aE(f,t,r)),oE(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!Gi(n)&&a.push(new(qx())(e._repo,e._path)),{removed:a,events:u}}function vI(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function sa(n,e){let t=null;for(const r of n.views.values())t=t||jx(r,e);return t}function EI(n,e){if(e._queryParams.loadsAllData())return rd(n);{const r=e._queryIdentifier;return n.views.get(r)}}function wI(n,e){return EI(n,e)!=null}function Gi(n){return rd(n)!=null}function rd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let xh;function Yx(n){J(!xh,"__referenceConstructor has already been defined"),xh=n}function Xx(){return J(xh,"Reference.ts has not been loaded"),xh}let Jx=1;class uE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tt(null),this.pendingWriteTree_=Rx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function TI(n,e,t,r,s){return mx(n.pendingWriteTree_,e,t,r,s),s?wu(n,new Ws(uI(),e,t)):[]}function Ms(n,e,t=!1){const r=gx(n.pendingWriteTree_,e);if(_x(n.pendingWriteTree_,e)){let a=new tt(null);return r.snap!=null?a=a.set(Be(),!0):vn(r.children,u=>{a=a.set(new Ge(u),!0)}),wu(n,new Rh(r.path,a,t))}else return[]}function id(n,e,t){return wu(n,new Ws(bm(),e,t))}function Zx(n,e,t){const r=tt.fromObject(t);return wu(n,new su(bm(),e,r))}function eD(n,e){return wu(n,new iu(bm(),e))}function tD(n,e,t){const r=Bm(n,t);if(r){const s=Wm(r),a=s.path,u=s.queryId,d=mn(a,e),f=new iu(Lm(u),d);return $m(n,a,f)}else return[]}function Wp(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||wI(u,e))){const f=Qx(u,e,t,r);Hx(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const v=m.findIndex(I=>I._queryParams.loadsAllData())!==-1,w=n.syncPointTree_.findOnPath(a,(I,N)=>Gi(N));if(v&&!w){const I=n.syncPointTree_.subtree(a);if(!I.isEmpty()){const N=iD(I);for(let j=0;j<N.length;++j){const W=N[j],B=W.query,pe=CI(n,W);n.listenProvider_.startListening($l(B),Dh(n,B),pe.hashFn,pe.onComplete)}}}!w&&m.length>0&&!r&&(v?n.listenProvider_.stopListening($l(e),null):m.forEach(I=>{const N=n.queryToTagMap.get(sd(I));n.listenProvider_.stopListening($l(I),N)}))}sD(n,m)}return d}function nD(n,e,t,r){const s=Bm(n,r);if(s!=null){const a=Wm(s),u=a.path,d=a.queryId,f=mn(u,e),m=new Ws(Lm(d),f,t);return $m(n,u,m)}else return[]}function rD(n,e,t,r){const s=Bm(n,r);if(s){const a=Wm(s),u=a.path,d=a.queryId,f=mn(u,e),m=tt.fromObject(t),v=new su(Lm(d),f,m);return $m(n,u,v)}else return[]}function cE(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(I,N)=>{const j=mn(I,s);a=a||sa(N,j),u=u||Gi(N)});let d=n.syncPointTree_.get(s);d?(u=u||Gi(d),a=a||sa(d,Be())):(d=new Wx,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=ge.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((N,j)=>{const W=sa(j,Be());W&&(a=a.updateImmediateChild(N,W))}));const m=wI(d,e);if(!m&&!e._queryParams.loadsAllData()){const I=sd(e);J(!n.queryToTagMap.has(I),"View does not exist, but we have a tag");const N=oD();n.queryToTagMap.set(I,N),n.tagToQueryMap.set(N,I)}const v=Mm(n.pendingWriteTree_,s);let w=Kx(d,e,t,v,a,f);if(!m&&!u&&!r){const I=EI(d,e);w=w.concat(aD(n,e,I))}return w}function zm(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=mn(u,e),m=sa(d,f);if(m)return m});return fI(s,e,a,t,!0)}function wu(n,e){return II(e,n.syncPointTree_,null,Mm(n.pendingWriteTree_,Be()))}function II(n,e,t,r){if(xe(n.path))return SI(n,e,t,r);{const s=e.get(Be());t==null&&s!=null&&(t=sa(s,Be()));let a=[];const u=Ae(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,v=pI(r,u);a=a.concat(II(d,f,m,v))}return s&&(a=a.concat(jm(s,n,r,t))),a}}function SI(n,e,t,r){const s=e.get(Be());t==null&&s!=null&&(t=sa(s,Be()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=pI(r,u),v=n.operationForChild(u);v&&(a=a.concat(SI(v,d,f,m)))}),s&&(a=a.concat(jm(s,n,r,t))),a}function CI(n,e){const t=e.query,r=Dh(n,t);return{hashFn:()=>(Ux(e)||ge.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?tD(n,t._path,r):eD(n,t._path);{const a=n1(s,t);return Wp(n,t,null,a)}}}}function Dh(n,e){const t=sd(e);return n.queryToTagMap.get(t)}function sd(n){return n._path.toString()+"$"+n._queryIdentifier}function Bm(n,e){return n.tagToQueryMap.get(e)}function Wm(n){const e=n.indexOf("$");return J(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ge(n.substr(0,e))}}function $m(n,e,t){const r=n.syncPointTree_.get(e);J(r,"Missing sync point for query tag that we're tracking");const s=Mm(n.pendingWriteTree_,e);return jm(r,t,s,null)}function iD(n){return n.fold((e,t,r)=>{if(t&&Gi(t))return[rd(t)];{let s=[];return t&&(s=vI(t)),vn(r,(a,u)=>{s=s.concat(u)}),s}})}function $l(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Xx())(n._repo,n._path):n}function sD(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=sd(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function oD(){return Jx++}function aD(n,e,t){const r=e._path,s=Dh(n,e),a=CI(n,t),u=n.listenProvider_.startListening($l(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)J(!Gi(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,v,w)=>{if(!xe(m)&&v&&Gi(v))return[rd(v).query];{let I=[];return v&&(I=I.concat(vI(v).map(N=>N.query))),vn(w,(N,j)=>{I=I.concat(j)}),I}});for(let m=0;m<f.length;++m){const v=f[m];n.listenProvider_.stopListening($l(v),Dh(n,v))}}return u}/**
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
 */class qm{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new qm(t)}node(){return this.node_}}class Hm{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=St(this.path_,e);return new Hm(this.syncTree_,t)}node(){return zm(this.syncTree_,this.path_)}}const lD=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},hE=function(n,e,t){if(!n||typeof n!="object")return n;if(J(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return uD(n[".sv"],e,t);if(typeof n[".sv"]=="object")return cD(n[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},uD=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:J(!1,"Unexpected server value: "+n)}},cD=function(n,e,t){n.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&J(!1,"Unexpected increment value: "+r);const s=e.node();if(J(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},hD=function(n,e,t,r){return Gm(e,new Hm(t,n),r)},RI=function(n,e,t){return Gm(n,new qm(e),t)};function Gm(n,e,t){const r=n.getPriority().val(),s=hE(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=hE(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new Ot(d,zt(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Ot(s))),u.forEachChild(ct,(d,f)=>{const m=Gm(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
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
 */class Km{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Qm(n,e){let t=e instanceof Ge?e:new Ge(e),r=n,s=Ae(t);for(;s!==null;){const a=aa(r.node.children,s)||{children:{},childCount:0};r=new Km(s,r,a),t=Xe(t),s=Ae(t)}return r}function Ra(n){return n.node.value}function AI(n,e){n.node.value=e,$p(n)}function PI(n){return n.node.childCount>0}function dD(n){return Ra(n)===void 0&&!PI(n)}function od(n,e){vn(n.node.children,(t,r)=>{e(new Km(t,n,r))})}function kI(n,e,t,r){t&&e(n),od(n,s=>{kI(s,e,!0)})}function fD(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Tu(n){return new Ge(n.parent===null?n.name:Tu(n.parent)+"/"+n.name)}function $p(n){n.parent!==null&&pD(n.parent,n.name,n)}function pD(n,e,t){const r=dD(t),s=li(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,$p(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,$p(n))}/**
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
 */const mD=/[\[\].#$\/\u0000-\u001F\u007F]/,gD=/[\[\].#$\u0000-\u001F\u007F]/,yp=10*1024*1024,NI=function(n){return typeof n=="string"&&n.length!==0&&!mD.test(n)},xI=function(n){return typeof n=="string"&&n.length!==0&&!gD.test(n)},_D=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xI(n)},DI=function(n,e,t,r){r&&e===void 0||Ym(um(n,"value"),e,t)},Ym=function(n,e,t){const r=t instanceof Ge?new L1(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Os(r));if(typeof e=="function")throw new Error(n+"contains a function "+Os(r)+" with contents = "+e.toString());if(xT(e))throw new Error(n+"contains "+e.toString()+" "+Os(r));if(typeof e=="string"&&e.length>yp/3&&Gh(e)>yp)throw new Error(n+"contains a string greater than "+yp+" utf8 bytes "+Os(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(vn(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!NI(u)))throw new Error(n+" contains an invalid key ("+u+") "+Os(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);M1(r,u),Ym(n,d,r),V1(r)}),s&&a)throw new Error(n+' contains ".value" child '+Os(r)+" in addition to actual children.")}},OI=function(n,e,t,r){if(!xI(t))throw new Error(um(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yD=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),OI(n,e,t)},bI=function(n,e){if(Ae(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},vD=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!NI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!_D(t))throw new Error(um(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ED{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xm(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!km(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function LI(n,e,t){Xm(n,t),MI(n,r=>km(r,e))}function si(n,e,t){Xm(n,t),MI(n,r=>rr(r,e)||rr(e,r))}function MI(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(wD(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function wD(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();jl&&Jt("event: "+t.toString()),Ca(r)}}}/**
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
 */const TD="repo_interrupt",ID=25;class SD{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ED,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ch(),this.transactionQueueTree_=new Km,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function CD(n,e,t){if(n.stats_=Am(n.repoInfo_),n.forceRestClient_||o1())n.server_=new Sh(n.repoInfo_,(r,s,a,u)=>{dE(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>fE(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Lt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new ei(n.repoInfo_,e,(r,s,a,u)=>{dE(n,r,s,a,u)},r=>{fE(n,r)},r=>{RD(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=h1(n.repoInfo_,()=>new ux(n.stats_,n.server_)),n.infoData_=new ix,n.infoSyncTree_=new uE({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=id(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),Zm(n,"connected",!1),n.serverSyncTree_=new uE({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);si(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function VI(n){const t=n.infoData_.getNode(new Ge(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Jm(n){return lD({timestamp:VI(n)})}function dE(n,e,t,r,s){n.dataUpdateCount++;const a=new Ge(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=dh(t,m=>zt(m));u=rD(n.serverSyncTree_,a,f,s)}else{const f=zt(t);u=nD(n.serverSyncTree_,a,f,s)}else if(r){const f=dh(t,m=>zt(m));u=Zx(n.serverSyncTree_,a,f)}else{const f=zt(t);u=id(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=ad(n,a)),si(n.eventQueue_,d,u)}function fE(n,e){Zm(n,"connected",e),e===!1&&PD(n)}function RD(n,e){vn(e,(t,r)=>{Zm(n,t,r)})}function Zm(n,e,t){const r=new Ge("/.info/"+e),s=zt(t);n.infoData_.updateSnapshot(r,s);const a=id(n.infoSyncTree_,r,s);si(n.eventQueue_,r,a)}function FI(n){return n.nextWriteId_++}function AD(n,e,t,r,s){eg(n,"set",{path:e.toString(),value:t,priority:r});const a=Jm(n),u=zt(t,r),d=zm(n.serverSyncTree_,e),f=RI(u,d,a),m=FI(n),v=TI(n.serverSyncTree_,e,f,m,!0);Xm(n.eventQueue_,v),n.server_.put(e.toString(),u.val(!0),(I,N)=>{const j=I==="ok";j||yn("set at "+e+" failed: "+I);const W=Ms(n.serverSyncTree_,m,!j);si(n.eventQueue_,e,W),DD(n,s,I,N)});const w=WI(n,e);ad(n,w),si(n.eventQueue_,w,[])}function PD(n){eg(n,"onDisconnectEvents");const e=Jm(n),t=Ch();Vp(n.onDisconnect_,Be(),(s,a)=>{const u=hD(s,a,n.serverSyncTree_,e);lI(t,s,u)});let r=[];Vp(t,Be(),(s,a)=>{r=r.concat(id(n.serverSyncTree_,s,a));const u=WI(n,s);ad(n,u)}),n.onDisconnect_=Ch(),si(n.eventQueue_,Be(),r)}function kD(n,e,t){let r;Ae(e._path)===".info"?r=cE(n.infoSyncTree_,e,t):r=cE(n.serverSyncTree_,e,t),LI(n.eventQueue_,e._path,r)}function ND(n,e,t){let r;Ae(e._path)===".info"?r=Wp(n.infoSyncTree_,e,t):r=Wp(n.serverSyncTree_,e,t),LI(n.eventQueue_,e._path,r)}function xD(n){n.persistentConnection_&&n.persistentConnection_.interrupt(TD)}function eg(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Jt(t,...e)}function DD(n,e,t,r){e&&Ca(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function UI(n,e,t){return zm(n.serverSyncTree_,e,t)||ge.EMPTY_NODE}function tg(n,e=n.transactionQueueTree_){if(e||ld(n,e),Ra(e)){const t=zI(n,e);J(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&OD(n,Tu(e),t)}else PI(e)&&od(e,t=>{tg(n,t)})}function OD(n,e,t){const r=t.map(m=>m.currentWriteId),s=UI(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const v=t[m];J(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const w=mn(e,v.path);a=a.updateChild(w,v.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{eg(n,"transaction put response",{path:f.toString(),status:m});let v=[];if(m==="ok"){const w=[];for(let I=0;I<t.length;I++)t[I].status=2,v=v.concat(Ms(n.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&w.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();ld(n,Qm(n.transactionQueueTree_,e)),tg(n,n.transactionQueueTree_),si(n.eventQueue_,e,v);for(let I=0;I<w.length;I++)Ca(w[I])}else{if(m==="datastale")for(let w=0;w<t.length;w++)t[w].status===3?t[w].status=4:t[w].status=0;else{yn("transaction at "+f.toString()+" failed: "+m);for(let w=0;w<t.length;w++)t[w].status=4,t[w].abortReason=m}ad(n,e)}},u)}function ad(n,e){const t=jI(n,e),r=Tu(t),s=zI(n,t);return bD(n,s,r),r}function bD(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=mn(t,f.path);let v=!1,w;if(J(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)v=!0,w=f.abortReason,s=s.concat(Ms(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=ID)v=!0,w="maxretry",s=s.concat(Ms(n.serverSyncTree_,f.currentWriteId,!0));else{const I=UI(n,f.path,u);f.currentInputSnapshot=I;const N=e[d].update(I.val());if(N!==void 0){Ym("transaction failed: Data returned ",N,f.path);let j=zt(N);typeof N=="object"&&N!=null&&li(N,".priority")||(j=j.updatePriority(I.getPriority()));const B=f.currentWriteId,pe=Jm(n),_e=RI(j,I,pe);f.currentOutputSnapshotRaw=j,f.currentOutputSnapshotResolved=_e,f.currentWriteId=FI(n),u.splice(u.indexOf(B),1),s=s.concat(TI(n.serverSyncTree_,f.path,_e,f.currentWriteId,f.applyLocally)),s=s.concat(Ms(n.serverSyncTree_,B,!0))}else v=!0,w="nodata",s=s.concat(Ms(n.serverSyncTree_,f.currentWriteId,!0))}si(n.eventQueue_,t,s),s=[],v&&(e[d].status=2,function(I){setTimeout(I,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(w==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(w),!1,null))))}ld(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)Ca(r[d]);tg(n,n.transactionQueueTree_)}function jI(n,e){let t,r=n.transactionQueueTree_;for(t=Ae(e);t!==null&&Ra(r)===void 0;)r=Qm(r,t),e=Xe(e),t=Ae(e);return r}function zI(n,e){const t=[];return BI(n,e,t),t.sort((r,s)=>r.order-s.order),t}function BI(n,e,t){const r=Ra(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);od(e,s=>{BI(n,s,t)})}function ld(n,e){const t=Ra(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,AI(e,t.length>0?t:void 0)}od(e,r=>{ld(n,r)})}function WI(n,e){const t=Tu(jI(n,e)),r=Qm(n.transactionQueueTree_,e);return fD(r,s=>{vp(n,s)}),vp(n,r),kI(r,s=>{vp(n,s)}),t}function vp(n,e){const t=Ra(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(J(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(J(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(Ms(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?AI(e,void 0):t.length=a+1,si(n.eventQueue_,Tu(e),s);for(let u=0;u<r.length;u++)Ca(r[u])}}/**
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
 */function LD(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function MD(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):yn(`Invalid query segment '${t}' in query '${n}'`)}return e}const pE=function(n,e){const t=VD(n),r=t.namespace;t.domain==="firebase.com"&&ii(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&ii("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||XN();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new WT(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new Ge(t.pathString)}},VD=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let v=n.indexOf("/");v===-1&&(v=n.length);let w=n.indexOf("?");w===-1&&(w=n.length),e=n.substring(0,Math.min(v,w)),v<w&&(s=LD(n.substring(v,w)));const I=MD(n.substring(Math.min(n.length,w)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const N=e.slice(0,m);if(N.toLowerCase()==="localhost")t="localhost";else if(N.split(".").length<=2)t=N;else{const j=e.indexOf(".");r=e.substring(0,j).toLowerCase(),t=e.substring(j+1),a=r}"ns"in I&&(a=I.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
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
 */const mE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",FD=function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let s;const a=new Array(8);for(s=7;s>=0;s--)a[s]=mE.charAt(t%64),t=Math.floor(t/64);J(t===0,"Cannot push at time == 0");let u=a.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)u+=mE.charAt(e[s]);return J(u.length===20,"nextPushId: Length should be 20."),u}}();/**
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
 */class UD{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Lt(this.snapshot.exportVal())}}class jD{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class zD{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return J(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ng{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return xe(this._path)?null:JT(this._path)}get ref(){return new rs(this._repo,this._path)}get _queryIdentifier(){const e=Jv(this._queryParams),t=Cm(e);return t==="{}"?"default":t}get _queryObject(){return Jv(this._queryParams)}isEqual(e){if(e=ht(e),!(e instanceof ng))return!1;const t=this._repo===e._repo,r=km(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+b1(this._path)}}class rs extends ng{constructor(e,t){super(e,t,new Om,!1)}get parent(){const e=eI(this._path);return e===null?null:new rs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Oh{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ge(e),r=ou(this.ref,e);return new Oh(this._node.getChild(t),r,ct)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Oh(s,ou(this.ref,r),ct)))}hasChild(e){const t=new Ge(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gE(n,e){return n=ht(n),n._checkNotDeleted("ref"),ou(n._root,e)}function ou(n,e){return n=ht(n),Ae(n._path)===null?yD("child","path",e):OI("child","path",e),new rs(n._repo,St(n._path,e))}function BD(n,e){n=ht(n),bI("push",n._path),DI("push",e,n._path,!0);const t=VI(n._repo),r=FD(t),s=ou(n,r),a=ou(n,r);let u;return e!=null?u=WD(a,e).then(()=>a):u=Promise.resolve(a),s.then=u.then.bind(u),s.catch=u.then.bind(u,void 0),s}function WD(n,e){n=ht(n),bI("set",n._path),DI("set",e,n._path,!1);const t=new Hh;return AD(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class rg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new UD("value",this,new Oh(e.snapshotNode,new rs(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new jD(this,e,t):null}matches(e){return e instanceof rg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function $D(n,e,t,r,s){const a=new zD(t,void 0),u=new rg(a);return kD(n._repo,n,u),()=>ND(n._repo,n,u)}function qD(n,e,t,r){return $D(n,"value",e)}$x(rs);Yx(rs);/**
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
 */const HD="FIREBASE_DATABASE_EMULATOR_HOST",qp={};let GD=!1;function KD(n,e,t,r){n.repoInfo_=new WT(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function QD(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||ii("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Jt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=pE(a,s),d=u.repoInfo,f;typeof process<"u"&&bv&&(f=bv[HD]),f?(a=`http://${f}?ns=${d.namespace}`,u=pE(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new l1(n.name,n.options,e);vD("Invalid Firebase Database URL",u),xe(u.path)||ii("Database URL must point to the root of a Firebase Database (not including a child path).");const v=XD(d,n,m,new a1(n.name,t));return new JD(v,n)}function YD(n,e){const t=qp[e];(!t||t[n.key]!==n)&&ii(`Database ${e}(${n.repoInfo_}) has already been deleted.`),xD(n),delete t[n.key]}function XD(n,e,t,r){let s=qp[e.name];s||(s={},qp[e.name]=s);let a=s[n.toURLString()];return a&&ii("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new SD(n,GD,t,r),s[n.toURLString()]=a,a}class JD{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(CD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rs(this._repo,Be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(YD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ii("Cannot call "+e+" on a deleted database.")}}function ZD(n=Kh(),e){const t=ts(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=cw("database");r&&eO(t,...r)}return t}function eO(n,e,t,r={}){n=ht(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&ii("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let a;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&ii('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new nh(nh.OWNER);else if(r.mockUserToken){const u=typeof r.mockUserToken=="string"?r.mockUserToken:fw(r.mockUserToken,n.app.options.projectId);a=new nh(u)}KD(s,e,t,a)}/**
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
 */function tO(n){qN(Ks),ar(new zn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return QD(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),gn(Lv,Mv,n),gn(Lv,Mv,"esm2017")}ei.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ei.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};tO();var _E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $i,$I;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,C){function A(){}A.prototype=C.prototype,D.D=C.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(k,O,L){for(var R=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)R[dt-2]=arguments[dt];return C.prototype[O].apply(k,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(D,C,A){A||(A=0);var k=Array(16);if(typeof C=="string")for(var O=0;16>O;++O)k[O]=C.charCodeAt(A++)|C.charCodeAt(A++)<<8|C.charCodeAt(A++)<<16|C.charCodeAt(A++)<<24;else for(O=0;16>O;++O)k[O]=C[A++]|C[A++]<<8|C[A++]<<16|C[A++]<<24;C=D.g[0],A=D.g[1],O=D.g[2];var L=D.g[3],R=C+(L^A&(O^L))+k[0]+3614090360&4294967295;C=A+(R<<7&4294967295|R>>>25),R=L+(O^C&(A^O))+k[1]+3905402710&4294967295,L=C+(R<<12&4294967295|R>>>20),R=O+(A^L&(C^A))+k[2]+606105819&4294967295,O=L+(R<<17&4294967295|R>>>15),R=A+(C^O&(L^C))+k[3]+3250441966&4294967295,A=O+(R<<22&4294967295|R>>>10),R=C+(L^A&(O^L))+k[4]+4118548399&4294967295,C=A+(R<<7&4294967295|R>>>25),R=L+(O^C&(A^O))+k[5]+1200080426&4294967295,L=C+(R<<12&4294967295|R>>>20),R=O+(A^L&(C^A))+k[6]+2821735955&4294967295,O=L+(R<<17&4294967295|R>>>15),R=A+(C^O&(L^C))+k[7]+4249261313&4294967295,A=O+(R<<22&4294967295|R>>>10),R=C+(L^A&(O^L))+k[8]+1770035416&4294967295,C=A+(R<<7&4294967295|R>>>25),R=L+(O^C&(A^O))+k[9]+2336552879&4294967295,L=C+(R<<12&4294967295|R>>>20),R=O+(A^L&(C^A))+k[10]+4294925233&4294967295,O=L+(R<<17&4294967295|R>>>15),R=A+(C^O&(L^C))+k[11]+2304563134&4294967295,A=O+(R<<22&4294967295|R>>>10),R=C+(L^A&(O^L))+k[12]+1804603682&4294967295,C=A+(R<<7&4294967295|R>>>25),R=L+(O^C&(A^O))+k[13]+4254626195&4294967295,L=C+(R<<12&4294967295|R>>>20),R=O+(A^L&(C^A))+k[14]+2792965006&4294967295,O=L+(R<<17&4294967295|R>>>15),R=A+(C^O&(L^C))+k[15]+1236535329&4294967295,A=O+(R<<22&4294967295|R>>>10),R=C+(O^L&(A^O))+k[1]+4129170786&4294967295,C=A+(R<<5&4294967295|R>>>27),R=L+(A^O&(C^A))+k[6]+3225465664&4294967295,L=C+(R<<9&4294967295|R>>>23),R=O+(C^A&(L^C))+k[11]+643717713&4294967295,O=L+(R<<14&4294967295|R>>>18),R=A+(L^C&(O^L))+k[0]+3921069994&4294967295,A=O+(R<<20&4294967295|R>>>12),R=C+(O^L&(A^O))+k[5]+3593408605&4294967295,C=A+(R<<5&4294967295|R>>>27),R=L+(A^O&(C^A))+k[10]+38016083&4294967295,L=C+(R<<9&4294967295|R>>>23),R=O+(C^A&(L^C))+k[15]+3634488961&4294967295,O=L+(R<<14&4294967295|R>>>18),R=A+(L^C&(O^L))+k[4]+3889429448&4294967295,A=O+(R<<20&4294967295|R>>>12),R=C+(O^L&(A^O))+k[9]+568446438&4294967295,C=A+(R<<5&4294967295|R>>>27),R=L+(A^O&(C^A))+k[14]+3275163606&4294967295,L=C+(R<<9&4294967295|R>>>23),R=O+(C^A&(L^C))+k[3]+4107603335&4294967295,O=L+(R<<14&4294967295|R>>>18),R=A+(L^C&(O^L))+k[8]+1163531501&4294967295,A=O+(R<<20&4294967295|R>>>12),R=C+(O^L&(A^O))+k[13]+2850285829&4294967295,C=A+(R<<5&4294967295|R>>>27),R=L+(A^O&(C^A))+k[2]+4243563512&4294967295,L=C+(R<<9&4294967295|R>>>23),R=O+(C^A&(L^C))+k[7]+1735328473&4294967295,O=L+(R<<14&4294967295|R>>>18),R=A+(L^C&(O^L))+k[12]+2368359562&4294967295,A=O+(R<<20&4294967295|R>>>12),R=C+(A^O^L)+k[5]+4294588738&4294967295,C=A+(R<<4&4294967295|R>>>28),R=L+(C^A^O)+k[8]+2272392833&4294967295,L=C+(R<<11&4294967295|R>>>21),R=O+(L^C^A)+k[11]+1839030562&4294967295,O=L+(R<<16&4294967295|R>>>16),R=A+(O^L^C)+k[14]+4259657740&4294967295,A=O+(R<<23&4294967295|R>>>9),R=C+(A^O^L)+k[1]+2763975236&4294967295,C=A+(R<<4&4294967295|R>>>28),R=L+(C^A^O)+k[4]+1272893353&4294967295,L=C+(R<<11&4294967295|R>>>21),R=O+(L^C^A)+k[7]+4139469664&4294967295,O=L+(R<<16&4294967295|R>>>16),R=A+(O^L^C)+k[10]+3200236656&4294967295,A=O+(R<<23&4294967295|R>>>9),R=C+(A^O^L)+k[13]+681279174&4294967295,C=A+(R<<4&4294967295|R>>>28),R=L+(C^A^O)+k[0]+3936430074&4294967295,L=C+(R<<11&4294967295|R>>>21),R=O+(L^C^A)+k[3]+3572445317&4294967295,O=L+(R<<16&4294967295|R>>>16),R=A+(O^L^C)+k[6]+76029189&4294967295,A=O+(R<<23&4294967295|R>>>9),R=C+(A^O^L)+k[9]+3654602809&4294967295,C=A+(R<<4&4294967295|R>>>28),R=L+(C^A^O)+k[12]+3873151461&4294967295,L=C+(R<<11&4294967295|R>>>21),R=O+(L^C^A)+k[15]+530742520&4294967295,O=L+(R<<16&4294967295|R>>>16),R=A+(O^L^C)+k[2]+3299628645&4294967295,A=O+(R<<23&4294967295|R>>>9),R=C+(O^(A|~L))+k[0]+4096336452&4294967295,C=A+(R<<6&4294967295|R>>>26),R=L+(A^(C|~O))+k[7]+1126891415&4294967295,L=C+(R<<10&4294967295|R>>>22),R=O+(C^(L|~A))+k[14]+2878612391&4294967295,O=L+(R<<15&4294967295|R>>>17),R=A+(L^(O|~C))+k[5]+4237533241&4294967295,A=O+(R<<21&4294967295|R>>>11),R=C+(O^(A|~L))+k[12]+1700485571&4294967295,C=A+(R<<6&4294967295|R>>>26),R=L+(A^(C|~O))+k[3]+2399980690&4294967295,L=C+(R<<10&4294967295|R>>>22),R=O+(C^(L|~A))+k[10]+4293915773&4294967295,O=L+(R<<15&4294967295|R>>>17),R=A+(L^(O|~C))+k[1]+2240044497&4294967295,A=O+(R<<21&4294967295|R>>>11),R=C+(O^(A|~L))+k[8]+1873313359&4294967295,C=A+(R<<6&4294967295|R>>>26),R=L+(A^(C|~O))+k[15]+4264355552&4294967295,L=C+(R<<10&4294967295|R>>>22),R=O+(C^(L|~A))+k[6]+2734768916&4294967295,O=L+(R<<15&4294967295|R>>>17),R=A+(L^(O|~C))+k[13]+1309151649&4294967295,A=O+(R<<21&4294967295|R>>>11),R=C+(O^(A|~L))+k[4]+4149444226&4294967295,C=A+(R<<6&4294967295|R>>>26),R=L+(A^(C|~O))+k[11]+3174756917&4294967295,L=C+(R<<10&4294967295|R>>>22),R=O+(C^(L|~A))+k[2]+718787259&4294967295,O=L+(R<<15&4294967295|R>>>17),R=A+(L^(O|~C))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+C&4294967295,D.g[1]=D.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,D.g[2]=D.g[2]+O&4294967295,D.g[3]=D.g[3]+L&4294967295}r.prototype.u=function(D,C){C===void 0&&(C=D.length);for(var A=C-this.blockSize,k=this.B,O=this.h,L=0;L<C;){if(O==0)for(;L<=A;)s(this,D,L),L+=this.blockSize;if(typeof D=="string"){for(;L<C;)if(k[O++]=D.charCodeAt(L++),O==this.blockSize){s(this,k),O=0;break}}else for(;L<C;)if(k[O++]=D[L++],O==this.blockSize){s(this,k),O=0;break}}this.h=O,this.o+=C},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var C=1;C<D.length-8;++C)D[C]=0;var A=8*this.o;for(C=D.length-8;C<D.length;++C)D[C]=A&255,A/=256;for(this.u(D),D=Array(16),C=A=0;4>C;++C)for(var k=0;32>k;k+=8)D[A++]=this.g[C]>>>k&255;return D};function a(D,C){var A=d;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=C(D)}function u(D,C){this.h=C;for(var A=[],k=!0,O=D.length-1;0<=O;O--){var L=D[O]|0;k&&L==C||(A[O]=L,k=!1)}this.g=A}var d={};function f(D){return-128<=D&&128>D?a(D,function(C){return new u([C|0],0>C?-1:0)}):new u([D|0],0>D?-1:0)}function m(D){if(isNaN(D)||!isFinite(D))return w;if(0>D)return B(m(-D));for(var C=[],A=1,k=0;D>=A;k++)C[k]=D/A|0,A*=4294967296;return new u(C,0)}function v(D,C){if(D.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(D.charAt(0)=="-")return B(v(D.substring(1),C));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(C,8)),k=w,O=0;O<D.length;O+=8){var L=Math.min(8,D.length-O),R=parseInt(D.substring(O,O+L),C);8>L?(L=m(Math.pow(C,L)),k=k.j(L).add(m(R))):(k=k.j(A),k=k.add(m(R)))}return k}var w=f(0),I=f(1),N=f(16777216);n=u.prototype,n.m=function(){if(W(this))return-B(this).m();for(var D=0,C=1,A=0;A<this.g.length;A++){var k=this.i(A);D+=(0<=k?k:4294967296+k)*C,C*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(j(this))return"0";if(W(this))return"-"+B(this).toString(D);for(var C=m(Math.pow(D,6)),A=this,k="";;){var O=Ie(A,C).g;A=pe(A,O.j(C));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=O,j(A))return L+k;for(;6>L.length;)L="0"+L;k=L+k}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function j(D){if(D.h!=0)return!1;for(var C=0;C<D.g.length;C++)if(D.g[C]!=0)return!1;return!0}function W(D){return D.h==-1}n.l=function(D){return D=pe(this,D),W(D)?-1:j(D)?0:1};function B(D){for(var C=D.g.length,A=[],k=0;k<C;k++)A[k]=~D.g[k];return new u(A,~D.h).add(I)}n.abs=function(){return W(this)?B(this):this},n.add=function(D){for(var C=Math.max(this.g.length,D.g.length),A=[],k=0,O=0;O<=C;O++){var L=k+(this.i(O)&65535)+(D.i(O)&65535),R=(L>>>16)+(this.i(O)>>>16)+(D.i(O)>>>16);k=R>>>16,L&=65535,R&=65535,A[O]=R<<16|L}return new u(A,A[A.length-1]&-2147483648?-1:0)};function pe(D,C){return D.add(B(C))}n.j=function(D){if(j(this)||j(D))return w;if(W(this))return W(D)?B(this).j(B(D)):B(B(this).j(D));if(W(D))return B(this.j(B(D)));if(0>this.l(N)&&0>D.l(N))return m(this.m()*D.m());for(var C=this.g.length+D.g.length,A=[],k=0;k<2*C;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var O=0;O<D.g.length;O++){var L=this.i(k)>>>16,R=this.i(k)&65535,dt=D.i(O)>>>16,$t=D.i(O)&65535;A[2*k+2*O]+=R*$t,_e(A,2*k+2*O),A[2*k+2*O+1]+=L*$t,_e(A,2*k+2*O+1),A[2*k+2*O+1]+=R*dt,_e(A,2*k+2*O+1),A[2*k+2*O+2]+=L*dt,_e(A,2*k+2*O+2)}for(k=0;k<C;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=C;k<2*C;k++)A[k]=0;return new u(A,0)};function _e(D,C){for(;(D[C]&65535)!=D[C];)D[C+1]+=D[C]>>>16,D[C]&=65535,C++}function ye(D,C){this.g=D,this.h=C}function Ie(D,C){if(j(C))throw Error("division by zero");if(j(D))return new ye(w,w);if(W(D))return C=Ie(B(D),C),new ye(B(C.g),B(C.h));if(W(C))return C=Ie(D,B(C)),new ye(B(C.g),C.h);if(30<D.g.length){if(W(D)||W(C))throw Error("slowDivide_ only works with positive integers.");for(var A=I,k=C;0>=k.l(D);)A=nt(A),k=nt(k);var O=ke(A,1),L=ke(k,1);for(k=ke(k,2),A=ke(A,2);!j(k);){var R=L.add(k);0>=R.l(D)&&(O=O.add(A),L=R),k=ke(k,1),A=ke(A,1)}return C=pe(D,O.j(C)),new ye(O,C)}for(O=w;0<=D.l(C);){for(A=Math.max(1,Math.floor(D.m()/C.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),L=m(A),R=L.j(C);W(R)||0<R.l(D);)A-=k,L=m(A),R=L.j(C);j(L)&&(L=I),O=O.add(L),D=pe(D,R)}return new ye(O,D)}n.A=function(D){return Ie(this,D).h},n.and=function(D){for(var C=Math.max(this.g.length,D.g.length),A=[],k=0;k<C;k++)A[k]=this.i(k)&D.i(k);return new u(A,this.h&D.h)},n.or=function(D){for(var C=Math.max(this.g.length,D.g.length),A=[],k=0;k<C;k++)A[k]=this.i(k)|D.i(k);return new u(A,this.h|D.h)},n.xor=function(D){for(var C=Math.max(this.g.length,D.g.length),A=[],k=0;k<C;k++)A[k]=this.i(k)^D.i(k);return new u(A,this.h^D.h)};function nt(D){for(var C=D.g.length+1,A=[],k=0;k<C;k++)A[k]=D.i(k)<<1|D.i(k-1)>>>31;return new u(A,D.h)}function ke(D,C){var A=C>>5;C%=32;for(var k=D.g.length-A,O=[],L=0;L<k;L++)O[L]=0<C?D.i(L+A)>>>C|D.i(L+A+1)<<32-C:D.i(L+A);return new u(O,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$I=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=v,$i=u}).apply(typeof _E<"u"?_E:typeof self<"u"?self:typeof window<"u"?window:{});var Gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qI,bl,HI,ih,Hp,GI,KI,QI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,y){return c==Array.prototype||c==Object.prototype||(c[g]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gc=="object"&&Gc];for(var g=0;g<c.length;++g){var y=c[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var y=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var M=c[T];if(!(M in y))break e;y=y[M]}c=c[c.length-1],T=y[c],g=g(T),g!=T&&g!=null&&e(y,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var y=0,T=!1,M={next:function(){if(!T&&y<c.length){var z=y++;return{value:g(z,c[z]),done:!1}}return T=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function v(c,g,y){return c.call.apply(c.bind,arguments)}function w(c,g,y){if(!c)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,T),c.apply(g,M)}}return function(){return c.apply(g,arguments)}}function I(c,g,y){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,I.apply(null,arguments)}function N(c,g){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function j(c,g){function y(){}y.prototype=g.prototype,c.aa=g.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(T,M,z){for(var Z=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)Z[$e-2]=arguments[$e];return g.prototype[M].apply(T,Z)}}function W(c){const g=c.length;if(0<g){const y=Array(g);for(let T=0;T<g;T++)y[T]=c[T];return y}return[]}function B(c,g){for(let y=1;y<arguments.length;y++){const T=arguments[y];if(f(T)){const M=c.length||0,z=T.length||0;c.length=M+z;for(let Z=0;Z<z;Z++)c[M+Z]=T[Z]}else c.push(T)}}class pe{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function _e(c){return/^[\s\xa0]*$/.test(c)}function ye(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function Ie(c){return Ie[" "](c),c}Ie[" "]=function(){};var nt=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function ke(c,g,y){for(const T in c)g.call(y,c[T],T,c)}function D(c,g){for(const y in c)g.call(void 0,c[y],y,c)}function C(c){const g={};for(const y in c)g[y]=c[y];return g}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(c,g){let y,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(y in T)c[y]=T[y];for(let z=0;z<A.length;z++)y=A[z],Object.prototype.hasOwnProperty.call(T,y)&&(c[y]=T[y])}}function O(c){var g=1;c=c.split(":");const y=[];for(;0<g&&c.length;)y.push(c.shift()),g--;return c.length&&y.push(c.join(":")),y}function L(c){d.setTimeout(()=>{throw c},0)}function R(){var c=ce;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class dt{constructor(){this.h=this.g=null}add(g,y){const T=$t.get();T.set(g,y),this.h?this.h.next=T:this.g=T,this.h=T}}var $t=new pe(()=>new qt,c=>c.reset());class qt{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,ee=!1,ce=new dt,ne=()=>{const c=d.Promise.resolve(void 0);qe=()=>{c.then(b)}};var b=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(y){L(y)}var g=$t;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ee=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,g),d.removeEventListener("test",y,g)}catch{}return c}();function Ce(c,g){if(le.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(nt){e:{try{Ie(g.nodeName);var M=!0;break e}catch{}M=!1}M||(g=null)}}else y=="mouseover"?g=c.fromElement:y=="mouseout"&&(g=c.toElement);this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Le[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ce.aa.h.call(this)}}j(Ce,le);var Le={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),ze=0;function Ke(c,g,y,T,M){this.listener=c,this.proxy=null,this.src=g,this.type=y,this.capture=!!T,this.ha=M,this.key=++ze,this.da=this.fa=!1}function Pt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function xr(c){this.src=c,this.g={},this.h=0}xr.prototype.add=function(c,g,y,T,M){var z=c.toString();c=this.g[z],c||(c=this.g[z]=[],this.h++);var Z=ui(c,g,T,M);return-1<Z?(g=c[Z],y||(g.fa=!1)):(g=new Ke(g,this.src,z,!!T,M),g.fa=y,c.push(g)),g};function to(c,g){var y=g.type;if(y in c.g){var T=c.g[y],M=Array.prototype.indexOf.call(T,g,void 0),z;(z=0<=M)&&Array.prototype.splice.call(T,M,1),z&&(Pt(g),c.g[y].length==0&&(delete c.g[y],c.h--))}}function ui(c,g,y,T){for(var M=0;M<c.length;++M){var z=c[M];if(!z.da&&z.listener==g&&z.capture==!!y&&z.ha==T)return M}return-1}var is="closure_lm_"+(1e6*Math.random()|0),no={};function xa(c,g,y,T,M){if(Array.isArray(g)){for(var z=0;z<g.length;z++)xa(c,g[z],y,T,M);return null}return y=ba(y),c&&c[je]?c.K(g,y,m(T)?!!T.capture:!1,M):Da(c,g,y,!1,T,M)}function Da(c,g,y,T,M,z){if(!g)throw Error("Invalid event type");var Z=m(M)?!!M.capture:!!M,$e=io(c);if($e||(c[is]=$e=new xr(c)),y=$e.add(g,y,T,Z,z),y.proxy)return y;if(T=Pu(),y.proxy=T,T.src=c,T.listener=y,c.addEventListener)Se||(M=Z),M===void 0&&(M=!1),c.addEventListener(g.toString(),T,M);else if(c.attachEvent)c.attachEvent(Or(g.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Pu(){function c(y){return g.call(c.src,c.listener,y)}const g=Oa;return c}function ro(c,g,y,T,M){if(Array.isArray(g))for(var z=0;z<g.length;z++)ro(c,g[z],y,T,M);else T=m(T)?!!T.capture:!!T,y=ba(y),c&&c[je]?(c=c.i,g=String(g).toString(),g in c.g&&(z=c.g[g],y=ui(z,y,T,M),-1<y&&(Pt(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete c.g[g],c.h--)))):c&&(c=io(c))&&(g=c.g[g.toString()],c=-1,g&&(c=ui(g,y,T,M)),(y=-1<c?g[c]:null)&&Dr(y))}function Dr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[je])to(g.i,c);else{var y=c.type,T=c.proxy;g.removeEventListener?g.removeEventListener(y,T,c.capture):g.detachEvent?g.detachEvent(Or(y),T):g.addListener&&g.removeListener&&g.removeListener(T),(y=io(g))?(to(y,c),y.h==0&&(y.src=null,g[is]=null)):Pt(c)}}}function Or(c){return c in no?no[c]:no[c]="on"+c}function Oa(c,g){if(c.da)c=!0;else{g=new Ce(g,this);var y=c.listener,T=c.ha||c.src;c.fa&&Dr(c),c=y.call(T,g)}return c}function io(c){return c=c[is],c instanceof xr?c:null}var so="__closure_events_fn_"+(1e9*Math.random()>>>0);function ba(c){return typeof c=="function"?c:(c[so]||(c[so]=function(g){return c.handleEvent(g)}),c[so])}function vt(){q.call(this),this.i=new xr(this),this.M=this,this.F=null}j(vt,q),vt.prototype[je]=!0,vt.prototype.removeEventListener=function(c,g,y,T){ro(this,c,g,y,T)};function Et(c,g){var y,T=c.F;if(T)for(y=[];T;T=T.F)y.push(T);if(c=c.M,T=g.type||g,typeof g=="string")g=new le(g,c);else if(g instanceof le)g.target=g.target||c;else{var M=g;g=new le(T,c),k(g,M)}if(M=!0,y)for(var z=y.length-1;0<=z;z--){var Z=g.g=y[z];M=br(Z,T,!0,g)&&M}if(Z=g.g=c,M=br(Z,T,!0,g)&&M,M=br(Z,T,!1,g)&&M,y)for(z=0;z<y.length;z++)Z=g.g=y[z],M=br(Z,T,!1,g)&&M}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var y=c.g[g],T=0;T<y.length;T++)Pt(y[T]);delete c.g[g],c.h--}}this.F=null},vt.prototype.K=function(c,g,y,T){return this.i.add(String(c),g,!1,y,T)},vt.prototype.L=function(c,g,y,T){return this.i.add(String(c),g,!0,y,T)};function br(c,g,y,T){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var M=!0,z=0;z<g.length;++z){var Z=g[z];if(Z&&!Z.da&&Z.capture==y){var $e=Z.listener,wt=Z.ha||Z.src;Z.fa&&to(c.i,Z),M=$e.call(wt,T)!==!1&&M}}return M&&!T.defaultPrevented}function La(c,g,y){if(typeof c=="function")y&&(c=I(c,y));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function ci(c){c.g=La(()=>{c.g=null,c.i&&(c.i=!1,ci(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ss extends q{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:ci(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function os(c){q.call(this),this.h=c,this.g={}}j(os,q);var Ma=[];function Va(c){ke(c.g,function(g,y){this.g.hasOwnProperty(y)&&Dr(g)},c),c.g={}}os.prototype.N=function(){os.aa.N.call(this),Va(this)},os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fa=d.JSON.stringify,Ua=d.JSON.parse,ja=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function as(){}as.prototype.h=null;function oo(c){return c.h||(c.h=c.i())}function ao(){}var Nn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cr(){le.call(this,"d")}j(cr,le);function lo(){le.call(this,"c")}j(lo,le);var hr={},za=null;function ls(){return za=za||new vt}hr.La="serverreachability";function Ba(c){le.call(this,hr.La,c)}j(Ba,le);function Lr(c){const g=ls();Et(g,new Ba(g))}hr.STAT_EVENT="statevent";function Wa(c,g){le.call(this,hr.STAT_EVENT,c),this.stat=g}j(Wa,le);function ft(c){const g=ls();Et(g,new Wa(g,c))}hr.Ma="timingevent";function uo(c,g){le.call(this,hr.Ma,c),this.size=g}j(uo,le);function Bn(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function us(){this.g=!0}us.prototype.xa=function(){this.g=!1};function cs(c,g,y,T,M,z){c.info(function(){if(c.g)if(z)for(var Z="",$e=z.split("&"),wt=0;wt<$e.length;wt++){var Me=$e[wt].split("=");if(1<Me.length){var kt=Me[0];Me=Me[1];var gt=kt.split("_");Z=2<=gt.length&&gt[1]=="type"?Z+(kt+"="+Me+"&"):Z+(kt+"=redacted&")}}else Z=null;else Z=z;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+g+`
`+y+`
`+Z})}function co(c,g,y,T,M,z,Z){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+g+`
`+y+`
`+z+" "+Z})}function Wn(c,g,y,T){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Cd(c,y)+(T?" "+T:"")})}function $a(c,g){c.info(function(){return"TIMEOUT: "+g})}us.prototype.info=function(){};function Cd(c,g){if(!c.g)return g;if(!g)return null;try{var y=JSON.parse(g);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var T=y[c];if(!(2>T.length)){var M=T[1];if(Array.isArray(M)&&!(1>M.length)){var z=M[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Z=1;Z<M.length;Z++)M[Z]=""}}}}return Fa(y)}catch{return g}}var ho={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ku={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$n;function hs(){}j(hs,as),hs.prototype.g=function(){return new XMLHttpRequest},hs.prototype.i=function(){return{}},$n=new hs;function qn(c,g,y,T){this.j=c,this.i=g,this.l=y,this.R=T||1,this.U=new os(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nu}function Nu(){this.i=null,this.g="",this.h=!1}var qa={},fo={};function po(c,g,y){c.L=1,c.v=mi(wn(g)),c.m=y,c.P=!0,Ha(c,null)}function Ha(c,g){c.F=Date.now(),Qe(c),c.A=wn(c.v);var y=c.A,T=c.R;Array.isArray(T)||(T=[String(T)]),_i(y.i,"t",T),c.C=0,y=c.j.J,c.h=new Nu,c.g=Ku(c.j,y?g:null,!c.m),0<c.O&&(c.M=new ss(I(c.Y,c,c.g),c.O)),g=c.U,y=c.g,T=c.ca;var M="readystatechange";Array.isArray(M)||(M&&(Ma[0]=M.toString()),M=Ma);for(var z=0;z<M.length;z++){var Z=xa(y,M[z],T||g.handleEvent,!1,g.h||g);if(!Z)break;g.g[Z.key]=Z}g=c.H?C(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Lr(),cs(c.i,c.u,c.A,c.l,c.R,c.m)}qn.prototype.ca=function(c){c=c.target;const g=this.M;g&&an(c)==3?g.j():this.Y(c)},qn.prototype.Y=function(c){try{if(c==this.g)e:{const gt=an(this.g);var g=this.g.Ba();const On=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Ja(this.g)))){this.J||gt!=4||g==7||(g==8||0>=On?Lr(3):Lr(2)),ds(this);var y=this.g.Z();this.X=y;t:if(xu(this)){var T=Ja(this.g);c="";var M=T.length,z=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xn(this),hi(this);var Z="";break t}this.h.i=new d.TextDecoder}for(g=0;g<M;g++)this.h.h=!0,c+=this.h.i.decode(T[g],{stream:!(z&&g==M-1)});T.length=0,this.h.g+=c,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,co(this.i,this.u,this.A,this.l,this.R,gt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,wt=this.g;if(($e=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_e($e)){var Me=$e;break t}}Me=null}if(y=Me)Wn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ga(this,y);else{this.o=!1,this.s=3,ft(12),xn(this),hi(this);break e}}if(this.P){y=!0;let In;for(;!this.J&&this.C<Z.length;)if(In=Rd(this,Z),In==fo){gt==4&&(this.s=4,ft(14),y=!1),Wn(this.i,this.l,null,"[Incomplete Response]");break}else if(In==qa){this.s=4,ft(15),Wn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else Wn(this.i,this.l,In,null),Ga(this,In);if(xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||Z.length!=0||this.h.h||(this.s=1,ft(16),y=!1),this.o=this.o&&y,!y)Wn(this.i,this.l,Z,"[Invalid Chunked Response]"),xn(this),hi(this);else if(0<Z.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),el(kt),kt.M=!0,ft(11))}}else Wn(this.i,this.l,Z,null),Ga(this,Z);gt==4&&xn(this),this.o&&!this.J&&(gt==4?Co(this.j,this):(this.o=!1,Qe(this)))}else Eo(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),xn(this),hi(this)}}}catch{}finally{}};function xu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Rd(c,g){var y=c.C,T=g.indexOf(`
`,y);return T==-1?fo:(y=Number(g.substring(y,T)),isNaN(y)?qa:(T+=1,T+y>g.length?fo:(g=g.slice(T,T+y),c.C=T+y,g)))}qn.prototype.cancel=function(){this.J=!0,xn(this)};function Qe(c){c.S=Date.now()+c.I,Du(c,c.I)}function Du(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Bn(I(c.ba,c),g)}function ds(c){c.B&&(d.clearTimeout(c.B),c.B=null)}qn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?($a(this.i,this.A),this.L!=2&&(Lr(),ft(17)),xn(this),this.s=2,hi(this)):Du(this,this.S-c)};function hi(c){c.j.G==0||c.J||Co(c.j,c)}function xn(c){ds(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Va(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Ga(c,g){try{var y=c.j;if(y.G!=0&&(y.g==c||tn(y.h,c))){if(!c.K&&tn(y.h,c)&&y.G==3){try{var T=y.Da.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)So(y),Yn(y);else break e;Io(y),ft(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=Bn(I(y.Za,y),6e3));if(1>=bu(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else jr(y,11)}else if((c.K||y.g==c)&&So(y),!_e(g))for(M=y.Da.g.parse(g),g=0;g<M.length;g++){let Me=M[g];if(y.T=Me[0],Me=Me[1],y.G==2)if(Me[0]=="c"){y.K=Me[1],y.ia=Me[2];const kt=Me[3];kt!=null&&(y.la=kt,y.j.info("VER="+y.la));const gt=Me[4];gt!=null&&(y.Aa=gt,y.j.info("SVER="+y.Aa));const On=Me[5];On!=null&&typeof On=="number"&&0<On&&(T=1.5*On,y.L=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const In=c.g;if(In){const vs=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vs){var z=T.h;z.g||vs.indexOf("spdy")==-1&&vs.indexOf("quic")==-1&&vs.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Ka(z,z.h),z.h=null))}if(T.D){const Ao=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;Ao&&(T.ya=Ao,He(T.I,T.D,Ao))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),T=y;var Z=c;if(T.qa=Gu(T,T.J?T.ia:null,T.W),Z.K){Lu(T.h,Z);var $e=Z,wt=T.L;wt&&($e.I=wt),$e.B&&(ds($e),Qe($e)),T.g=Z}else ys(T);0<y.i.length&&mr(y)}else Me[0]!="stop"&&Me[0]!="close"||jr(y,7);else y.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?jr(y,7):Vt(y):Me[0]!="noop"&&y.l&&y.l.ta(Me),y.v=0)}}Lr(4)}catch{}}var Ou=class{constructor(c,g){this.g=c,this.map=g}};function fs(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function En(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function bu(c){return c.h?1:c.g?c.g.size:0}function tn(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Ka(c,g){c.g?c.g.add(g):c.h=g}function Lu(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}fs.prototype.cancel=function(){if(this.i=Mu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Mu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const y of c.g.values())g=g.concat(y.D);return g}return W(c.i)}function mo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],y=c.length,T=0;T<y;T++)g.push(c[T]);return g}g=[],y=0;for(T in c)g[y++]=c[T];return g}function go(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var y=0;y<c;y++)g.push(y);return g}g=[],y=0;for(const T in c)g[y++]=T;return g}}}function di(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var y=go(c),T=mo(c),M=T.length,z=0;z<M;z++)g.call(void 0,T[z],y&&y[z],c)}var ps=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ad(c,g){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var T=c[y].indexOf("="),M=null;if(0<=T){var z=c[y].substring(0,T);M=c[y].substring(T+1)}else z=c[y];g(z,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Mr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Mr){this.h=c.h,ms(this,c.j),this.o=c.o,this.g=c.g,fi(this,c.s),this.l=c.l;var g=c.i,y=new dr;y.i=g.i,g.g&&(y.g=new Map(g.g),y.h=g.h),pi(this,y),this.m=c.m}else c&&(g=String(c).match(ps))?(this.h=!1,ms(this,g[1]||"",!0),this.o=Oe(g[2]||""),this.g=Oe(g[3]||"",!0),fi(this,g[4]),this.l=Oe(g[5]||"",!0),pi(this,g[6]||"",!0),this.m=Oe(g[7]||"")):(this.h=!1,this.i=new dr(null,this.h))}Mr.prototype.toString=function(){var c=[],g=this.j;g&&c.push(gi(g,_o,!0),":");var y=this.g;return(y||g=="file")&&(c.push("//"),(g=this.o)&&c.push(gi(g,_o,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(gi(y,y.charAt(0)=="/"?Uu:Fu,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",gi(y,Qa)),c.join("")};function wn(c){return new Mr(c)}function ms(c,g,y){c.j=y?Oe(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function fi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function pi(c,g,y){g instanceof dr?(c.i=g,fr(c.i,c.h)):(y||(g=gi(g,ju)),c.i=new dr(g,c.h))}function He(c,g,y){c.i.set(g,y)}function mi(c){return He(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Oe(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function gi(c,g,y){return typeof c=="string"?(c=encodeURI(c).replace(g,Vu),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Vu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var _o=/[#\/\?@]/g,Fu=/[#\?:]/g,Uu=/[#\?]/g,ju=/[#\?@]/g,Qa=/#/g;function dr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Mt(c){c.g||(c.g=new Map,c.h=0,c.i&&Ad(c.i,function(g,y){c.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}n=dr.prototype,n.add=function(c,g){Mt(this),this.i=null,c=Dn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(g),this.h+=1,this};function Hn(c,g){Mt(c),g=Dn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Gn(c,g){return Mt(c),g=Dn(c,g),c.g.has(g)}n.forEach=function(c,g){Mt(this),this.g.forEach(function(y,T){y.forEach(function(M){c.call(g,M,T,this)},this)},this)},n.na=function(){Mt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),y=[];for(let T=0;T<g.length;T++){const M=c[T];for(let z=0;z<M.length;z++)y.push(g[T])}return y},n.V=function(c){Mt(this);let g=[];if(typeof c=="string")Gn(this,c)&&(g=g.concat(this.g.get(Dn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)g=g.concat(c[y])}return g},n.set=function(c,g){return Mt(this),this.i=null,c=Dn(this,c),Gn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function _i(c,g,y){Hn(c,g),0<y.length&&(c.i=null,c.g.set(Dn(c,g),W(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var y=0;y<g.length;y++){var T=g[y];const z=encodeURIComponent(String(T)),Z=this.V(T);for(T=0;T<Z.length;T++){var M=z;Z[T]!==""&&(M+="="+encodeURIComponent(String(Z[T]))),c.push(M)}}return this.i=c.join("&")};function Dn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function fr(c,g){g&&!c.j&&(Mt(c),c.i=null,c.g.forEach(function(y,T){var M=T.toLowerCase();T!=M&&(Hn(this,T),_i(this,M,y))},c)),c.j=g}function Pd(c,g){const y=new us;if(d.Image){const T=new Image;T.onload=N(on,y,"TestLoadImage: loaded",!0,g,T),T.onerror=N(on,y,"TestLoadImage: error",!1,g,T),T.onabort=N(on,y,"TestLoadImage: abort",!1,g,T),T.ontimeout=N(on,y,"TestLoadImage: timeout",!1,g,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else g(!1)}function zu(c,g){const y=new us,T=new AbortController,M=setTimeout(()=>{T.abort(),on(y,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:T.signal}).then(z=>{clearTimeout(M),z.ok?on(y,"TestPingServer: ok",!0,g):on(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(M),on(y,"TestPingServer: error",!1,g)})}function on(c,g,y,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(y)}catch{}}function kd(){this.g=new ja}function Bu(c,g,y){const T=y||"";try{di(c,function(M,z){let Z=M;m(M)&&(Z=Fa(M)),g.push(T+z+"="+encodeURIComponent(Z))})}catch(M){throw g.push(T+"type="+encodeURIComponent("_badmap")),M}}function Vr(c){this.l=c.Ub||null,this.j=c.eb||!1}j(Vr,as),Vr.prototype.g=function(){return new gs(this.l,this.j)},Vr.prototype.i=function(c){return function(){return c}}({});function gs(c,g){vt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(gs,vt),n=gs.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,Qn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wu(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wu(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Kn(this):Qn(this),this.readyState==3&&Wu(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Kn(this))},n.Qa=function(c){this.g&&(this.response=c,Kn(this))},n.ga=function(){this.g&&Kn(this)};function Kn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Qn(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=g.next();return c.join(`\r
`)};function Qn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Fr(c){let g="";return ke(c,function(y,T){g+=T,g+=":",g+=y,g+=`\r
`}),g}function yi(c,g,y){e:{for(T in y){var T=!1;break e}T=!0}T||(y=Fr(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):He(c,g,y))}function rt(c){vt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(rt,vt);var Nd=/^https?$/i,Ya=["POST","PUT"];n=rt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$n.g(),this.v=this.o?oo(this.o):oo($n),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(z){_s(this,z);return}if(c=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)y.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const z of T.keys())y.set(z,T.get(z));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),M=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ya,g,void 0))||T||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of y)this.g.setRequestHeader(z,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vo(this),this.u=!0,this.g.send(c),this.u=!1}catch(z){_s(this,z)}};function _s(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,yo(c),Tn(c)}function yo(c){c.A||(c.A=!0,Et(c,"complete"),Et(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Et(this,"complete"),Et(this,"abort"),Tn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tn(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xa(this):this.bb())},n.bb=function(){Xa(this)};function Xa(c){if(c.h&&typeof u<"u"&&(!c.v[1]||an(c)!=4||c.Z()!=2)){if(c.u&&an(c)==4)La(c.Ea,0,c);else if(Et(c,"readystatechange"),an(c)==4){c.h=!1;try{const Z=c.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var T;if(T=Z===0){var M=String(c.D).match(ps)[1]||null;!M&&d.self&&d.self.location&&(M=d.self.location.protocol.slice(0,-1)),T=!Nd.test(M?M.toLowerCase():"")}y=T}if(y)Et(c,"complete"),Et(c,"success");else{c.m=6;try{var z=2<an(c)?c.g.statusText:""}catch{z=""}c.l=z+" ["+c.Z()+"]",yo(c)}}finally{Tn(c)}}}}function Tn(c,g){if(c.g){vo(c);const y=c.g,T=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Et(c,"ready");try{y.onreadystatechange=T}catch{}}}function vo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function an(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Ua(g)}};function Ja(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Eo(c){const g={};c=(c.g&&2<=an(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(_e(c[T]))continue;var y=O(c[T]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=g[M]||[];g[M]=z,z.push(y)}D(g,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function pr(c,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||g}function Za(c){this.Aa=0,this.i=[],this.j=new us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pr("baseRetryDelayMs",5e3,c),this.cb=pr("retryDelaySeedMs",1e4,c),this.Wa=pr("forwardChannelMaxRetries",2,c),this.wa=pr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new fs(c&&c.concurrentRequestLimit),this.Da=new kd,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Za.prototype,n.la=8,n.G=1,n.connect=function(c,g,y,T){ft(0),this.W=c,this.H=g||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.I=Gu(this,null,this.W),mr(this)};function Vt(c){if(wo(c),c.G==3){var g=c.U++,y=wn(c.I);if(He(y,"SID",c.K),He(y,"RID",g),He(y,"TYPE","terminate"),Ur(c,y),g=new qn(c,c.j,g),g.L=2,g.v=mi(wn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=g.v,y=!0),y||(g.g=Ku(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Qe(g)}Hu(c)}function Yn(c){c.g&&(el(c),c.g.cancel(),c.g=null)}function wo(c){Yn(c),c.u&&(d.clearTimeout(c.u),c.u=null),So(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function mr(c){if(!En(c.h)&&!c.s){c.s=!0;var g=c.Ga;qe||ne(),ee||(qe(),ee=!0),ce.add(g,c),c.B=0}}function xd(c,g){return bu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Bn(I(c.Ga,c,g),qu(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const M=new qn(this,this.j,c);let z=this.o;if(this.S&&(z?(z=C(z),k(z,this.S)):z=this.S),this.m!==null||this.O||(M.H=z,z=null),this.P)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(g+=T,4096<g){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=vi(this,M,g),y=wn(this.I),He(y,"RID",c),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),Ur(this,y),z&&(this.O?g="headers="+encodeURIComponent(String(Fr(z)))+"&"+g:this.m&&yi(y,this.m,z)),Ka(this.h,M),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",g),He(y,"SID","null"),M.T=!0,po(M,y,null)):po(M,y,g),this.G=2}}else this.G==3&&(c?To(this,c):this.i.length==0||En(this.h)||To(this))};function To(c,g){var y;g?y=g.l:y=c.U++;const T=wn(c.I);He(T,"SID",c.K),He(T,"RID",y),He(T,"AID",c.T),Ur(c,T),c.m&&c.o&&yi(T,c.m,c.o),y=new qn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),g&&(c.i=g.D.concat(c.i)),g=vi(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ka(c.h,y),po(y,T,g)}function Ur(c,g){c.H&&ke(c.H,function(y,T){He(g,T,y)}),c.l&&di({},function(y,T){He(g,T,y)})}function vi(c,g,y){y=Math.min(c.i.length,y);var T=c.l?I(c.l.Na,c.l,c):null;e:{var M=c.i;let z=-1;for(;;){const Z=["count="+y];z==-1?0<y?(z=M[0].g,Z.push("ofs="+z)):z=0:Z.push("ofs="+z);let $e=!0;for(let wt=0;wt<y;wt++){let Me=M[wt].g;const kt=M[wt].map;if(Me-=z,0>Me)z=Math.max(0,M[wt].g-100),$e=!1;else try{Bu(kt,Z,"req"+Me+"_")}catch{T&&T(kt)}}if($e){T=Z.join("&");break e}}}return c=c.i.splice(0,y),g.D=c,T}function ys(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;qe||ne(),ee||(qe(),ee=!0),ce.add(g,c),c.v=0}}function Io(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Bn(I(c.Fa,c),qu(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,$u(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Bn(I(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Yn(this),$u(this))};function el(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function $u(c){c.g=new qn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=wn(c.qa);He(g,"RID","rpc"),He(g,"SID",c.K),He(g,"AID",c.T),He(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&He(g,"TO",c.ja),He(g,"TYPE","xmlhttp"),Ur(c,g),c.m&&c.o&&yi(g,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=mi(wn(g)),y.m=null,y.P=!0,Ha(y,c)}n.Za=function(){this.C!=null&&(this.C=null,Yn(this),Io(this),ft(19))};function So(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Co(c,g){var y=null;if(c.g==g){So(c),el(c),c.g=null;var T=2}else if(tn(c.h,g))y=g.D,Lu(c.h,g),T=1;else return;if(c.G!=0){if(g.o)if(T==1){y=g.m?g.m.length:0,g=Date.now()-g.F;var M=c.B;T=ls(),Et(T,new uo(T,y)),mr(c)}else ys(c);else if(M=g.s,M==3||M==0&&0<g.X||!(T==1&&xd(c,g)||T==2&&Io(c)))switch(y&&0<y.length&&(g=c.h,g.i=g.i.concat(y)),M){case 1:jr(c,5);break;case 4:jr(c,10);break;case 3:jr(c,6);break;default:jr(c,2)}}}function qu(c,g){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*g}function jr(c,g){if(c.j.info("Error code "+g),g==2){var y=I(c.fb,c),T=c.Xa;const M=!T;T=new Mr(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ms(T,"https"),mi(T),M?Pd(T.toString(),y):zu(T.toString(),y)}else ft(2);c.G=0,c.l&&c.l.sa(g),Hu(c),wo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Hu(c){if(c.G=0,c.ka=[],c.l){const g=Mu(c.h);(g.length!=0||c.i.length!=0)&&(B(c.ka,g),B(c.ka,c.i),c.h.i.length=0,W(c.i),c.i.length=0),c.l.ra()}}function Gu(c,g,y){var T=y instanceof Mr?wn(y):new Mr(y);if(T.g!="")g&&(T.g=g+"."+T.g),fi(T,T.s);else{var M=d.location;T=M.protocol,g=g?g+"."+M.hostname:M.hostname,M=+M.port;var z=new Mr(null);T&&ms(z,T),g&&(z.g=g),M&&fi(z,M),y&&(z.l=y),T=z}return y=c.D,g=c.ya,y&&g&&He(T,y,g),He(T,"VER",c.la),Ur(c,T),T}function Ku(c,g,y){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new rt(new Vr({eb:y})):new rt(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function tl(){}n=tl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ro(){}Ro.prototype.g=function(c,g){return new nn(c,g)};function nn(c,g){vt.call(this),this.g=new Za(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!_e(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!_e(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new gr(this)}j(nn,vt),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){Vt(this.g)},nn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=Fa(c),c=y);g.i.push(new Ou(g.Ya++,c)),g.G==3&&mr(g)},nn.prototype.N=function(){this.g.l=null,delete this.j,Vt(this.g),delete this.g,nn.aa.N.call(this)};function Qu(c){cr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const y in g){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}j(Qu,cr);function Yu(){lo.call(this),this.status=1}j(Yu,lo);function gr(c){this.g=c}j(gr,tl),gr.prototype.ua=function(){Et(this.g,"a")},gr.prototype.ta=function(c){Et(this.g,new Qu(c))},gr.prototype.sa=function(c){Et(this.g,new Yu)},gr.prototype.ra=function(){Et(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,QI=function(){return new Ro},KI=function(){return ls()},GI=hr,Hp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ho.NO_ERROR=0,ho.TIMEOUT=8,ho.HTTP_ERROR=6,ih=ho,ku.COMPLETE="complete",HI=ku,ao.EventType=Nn,Nn.OPEN="a",Nn.CLOSE="b",Nn.ERROR="c",Nn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,bl=ao,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,qI=rt}).apply(typeof Gc<"u"?Gc:typeof self<"u"?self:typeof window<"u"?window:{});const yE="@firebase/firestore";/**
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
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
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
 */let Aa="11.2.0";/**
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
 */const Hs=new pu("@firebase/firestore");function Ko(){return Hs.logLevel}function re(n,...e){if(Hs.logLevel<=Ne.DEBUG){const t=e.map(ig);Hs.debug(`Firestore (${Aa}): ${n}`,...t)}}function oi(n,...e){if(Hs.logLevel<=Ne.ERROR){const t=e.map(ig);Hs.error(`Firestore (${Aa}): ${n}`,...t)}}function da(n,...e){if(Hs.logLevel<=Ne.WARN){const t=e.map(ig);Hs.warn(`Firestore (${Aa}): ${n}`,...t)}}function ig(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Ee(n="Unexpected state"){const e=`FIRESTORE (${Aa}) INTERNAL ASSERTION FAILED: `+n;throw oi(e),new Error(e)}function We(n,e){n||Ee()}function Te(n,e){return n}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends ur{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ti{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class YI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xt.UNAUTHENTICATED))}shutdown(){}}class rO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class iO{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){We(this.o===void 0);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new ti,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},d=f=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new ti)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string"),new YI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new Xt(e)}}class sO{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class oO{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new sO(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){We(this.o===void 0);const r=a=>{a.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,re("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const s=a=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(We(typeof t.token=="string"),this.R=t.token,new aO(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function uO(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class XI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=uO(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%e.length))}return r}}function be(n,e){return n<e?-1:n>e?1:0}function fa(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Rt{static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Rt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ue(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Rt(0,0))}static max(){return new we(new Rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class wr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ee(),r===void 0?r=e.length-t:r>e.length-t&&Ee(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return wr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=wr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=wr.isNumericId(e),s=wr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?wr.extractNumericId(e).compare(wr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $i.fromString(e.substring(4,e.length-2))}}class st extends wr{construct(e,t,r){return new st(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ue(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new st(t)}static emptyPath(){return new st([])}}const cO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bt extends wr{construct(e,t,r){return new Bt(e,t,r)}static isValidIdentifier(e){return cO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Bt(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new ue(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new ue(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ue(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new ue(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Bt(t)}static emptyPath(){return new Bt([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(st.fromString(e))}static fromName(e){return new fe(st.fromString(e).popFirst(5))}static empty(){return new fe(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return st.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new st(e.slice()))}}function hO(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=we.fromTimestamp(r===1e9?new Rt(t+1,0):new Rt(t,r));return new Ki(s,fe.empty(),e)}function dO(n){return new Ki(n.readTime,n.key,-1)}class Ki{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ki(we.min(),fe.empty(),-1)}static max(){return new Ki(we.max(),fe.empty(),-1)}}function fO(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
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
 */const pO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Pa(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==pO)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,r)=>{t(e)})}static reject(e){return new $((t,r)=>{r(e)})}static waitFor(e){return new $((t,r)=>{let s=0,a=0,u=!1;e.forEach(d=>{++s,d.next(()=>{++a,u&&a===s&&t()},f=>r(f))}),u=!0,a===s&&t()})}static or(e){let t=$.resolve(!1);for(const r of e)t=t.next(s=>s?$.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,a)=>{r.push(t.call(this,s,a))}),this.waitFor(r)}static mapArray(e,t){return new $((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next(v=>{u[m]=v,++d,d===a&&r(u)},v=>s(v))}})}static doWhile(e,t){return new $((r,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):r()};a()})}}function gO(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ka(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ud{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ud.oe=-1;function cd(n){return n==null}function bh(n){return n===0&&1/n==-1/0}function _O(n){return typeof n=="number"&&Number.isInteger(n)&&!bh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function yO(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=vE(e)),e=vO(n.get(t),e);return vE(e)}function vO(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case"":t+="";break;default:t+=a}}return t}function vE(n){return n+""}/**
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
 */function EE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Xs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function JI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class lt{constructor(e,t){this.comparator=e,this.root=t||jt.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kc(this.root,e,this.comparator,!0)}}class Kc{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class jt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??jt.RED,this.left=s??jt.EMPTY,this.right=a??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new jt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return jt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,t,r,s,a){return this}insert(e,t,r){return new jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class At{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wE(this.data.getIterator())}getIteratorFrom(e){return new wE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new At(this.comparator);return t.data=e,t}}class wE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class sr{constructor(e){this.fields=e,e.sort(Bt.comparator)}static empty(){return new sr([])}unionWith(e){let t=new At(Bt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new sr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fa(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class ZI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new ZI("Invalid base64 string: "+a):a}}(e);return new Wt(t)}static fromUint8Array(e){const t=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(e);return new Wt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const EO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qi(n){if(We(!!n),typeof n=="string"){let e=0;const t=EO.exec(n);if(We(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yi(n){return typeof n=="string"?Wt.fromBase64String(n):Wt.fromUint8Array(n)}/**
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
 */function sg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function hd(n){const e=n.mapValue.fields.__previous_value__;return sg(e)?hd(e):e}function au(n){const e=Qi(n.mapValue.fields.__local_write_time__.timestampValue);return new Rt(e.seconds,e.nanos)}/**
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
 */class wO{constructor(e,t,r,s,a,u,d,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m}}class lu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new lu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Qc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sg(n)?4:IO(n)?9007199254740991:TO(n)?10:11:Ee()}function kr(n,e){if(n===e)return!0;const t=Xi(n);if(t!==Xi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return au(n).isEqual(au(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Qi(s.timestampValue),d=Qi(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return Yi(s.bytesValue).isEqual(Yi(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return mt(s.geoPointValue.latitude)===mt(a.geoPointValue.latitude)&&mt(s.geoPointValue.longitude)===mt(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return mt(s.integerValue)===mt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=mt(s.doubleValue),d=mt(a.doubleValue);return u===d?bh(u)===bh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return fa(n.arrayValue.values||[],e.arrayValue.values||[],kr);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(EE(u)!==EE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!kr(u[f],d[f])))return!1;return!0}(n,e);default:return Ee()}}function uu(n,e){return(n.values||[]).find(t=>kr(t,e))!==void 0}function pa(n,e){if(n===e)return 0;const t=Xi(n),r=Xi(e);if(t!==r)return be(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return function(a,u){const d=mt(a.integerValue||a.doubleValue),f=mt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(n,e);case 3:return TE(n.timestampValue,e.timestampValue);case 4:return TE(au(n),au(e));case 5:return be(n.stringValue,e.stringValue);case 6:return function(a,u){const d=Yi(a),f=Yi(u);return d.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const v=be(d[m],f[m]);if(v!==0)return v}return be(d.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,u){const d=be(mt(a.latitude),mt(u.latitude));return d!==0?d:be(mt(a.longitude),mt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return IE(n.arrayValue,e.arrayValue);case 10:return function(a,u){var d,f,m,v;const w=a.fields||{},I=u.fields||{},N=(d=w.value)===null||d===void 0?void 0:d.arrayValue,j=(f=I.value)===null||f===void 0?void 0:f.arrayValue,W=be(((m=N==null?void 0:N.values)===null||m===void 0?void 0:m.length)||0,((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0);return W!==0?W:IE(N,j)}(n.mapValue,e.mapValue);case 11:return function(a,u){if(a===Qc.mapValue&&u===Qc.mapValue)return 0;if(a===Qc.mapValue)return 1;if(u===Qc.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},v=Object.keys(m);f.sort(),v.sort();for(let w=0;w<f.length&&w<v.length;++w){const I=be(f[w],v[w]);if(I!==0)return I;const N=pa(d[f[w]],m[v[w]]);if(N!==0)return N}return be(f.length,v.length)}(n.mapValue,e.mapValue);default:throw Ee()}}function TE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=Qi(n),r=Qi(e),s=be(t.seconds,r.seconds);return s!==0?s:be(t.nanos,r.nanos)}function IE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=pa(t[s],r[s]);if(a)return a}return be(t.length,r.length)}function ma(n){return Gp(n)}function Gp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Qi(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return fe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Gp(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Gp(t.fields[u])}`;return s+"}"}(n.mapValue):Ee()}function sh(n){switch(Xi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hd(n);return e?16+sh(e):16;case 5:return 2*n.stringValue.length;case 6:return Yi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,a)=>s+sh(a),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Xs(r.fields,(a,u)=>{s+=a.length+sh(u)}),s}(n.mapValue);default:throw Ee()}}function Kp(n){return!!n&&"integerValue"in n}function og(n){return!!n&&"arrayValue"in n}function SE(n){return!!n&&"nullValue"in n}function CE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function oh(n){return!!n&&"mapValue"in n}function TO(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ql(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Xs(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ql(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ql(n.arrayValue.values[t]);return e}return Object.assign({},n)}function IO(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jn{constructor(e){this.value=e}static empty(){return new jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!oh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ql(t)}setAll(e){let t=Bt.emptyPath(),r={},s=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=ql(u):s.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());oh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return kr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];oh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Xs(t,(s,a)=>e[s]=a);for(const s of r)delete e[s]}clone(){return new jn(ql(this.value))}}function eS(n){const e=[];return Xs(n.fields,(t,r)=>{const s=new Bt([t]);if(oh(r)){const a=eS(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)}),new sr(e)}/**
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
 */class Zt{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new Zt(e,0,we.min(),we.min(),we.min(),jn.empty(),0)}static newFoundDocument(e,t,r,s){return new Zt(e,1,t,we.min(),r,s,0)}static newNoDocument(e,t){return new Zt(e,2,t,we.min(),we.min(),jn.empty(),0)}static newUnknownDocument(e,t){return new Zt(e,3,t,we.min(),we.min(),jn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lh{constructor(e,t){this.position=e,this.inclusive=t}}function RE(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=fe.comparator(fe.fromName(u.referenceValue),t.key):r=pa(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function AE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!kr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Mh{constructor(e,t="asc"){this.field=e,this.dir=t}}function SO(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class tS{}class Ct extends tS{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new RO(e,t,r):t==="array-contains"?new kO(e,r):t==="in"?new NO(e,r):t==="not-in"?new xO(e,r):t==="array-contains-any"?new DO(e,r):new Ct(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new AO(e,r):new PO(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(pa(t,this.value)):t!==null&&Xi(this.value)===Xi(t)&&this.matchesComparison(pa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nr extends tS{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Nr(e,t)}matches(e){return nS(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nS(n){return n.op==="and"}function rS(n){return CO(n)&&nS(n)}function CO(n){for(const e of n.filters)if(e instanceof Nr)return!1;return!0}function Qp(n){if(n instanceof Ct)return n.field.canonicalString()+n.op.toString()+ma(n.value);if(rS(n))return n.filters.map(e=>Qp(e)).join(",");{const e=n.filters.map(t=>Qp(t)).join(",");return`${n.op}(${e})`}}function iS(n,e){return n instanceof Ct?function(r,s){return s instanceof Ct&&r.op===s.op&&r.field.isEqual(s.field)&&kr(r.value,s.value)}(n,e):n instanceof Nr?function(r,s){return s instanceof Nr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,u,d)=>a&&iS(u,s.filters[d]),!0):!1}(n,e):void Ee()}function sS(n){return n instanceof Ct?function(t){return`${t.field.canonicalString()} ${t.op} ${ma(t.value)}`}(n):n instanceof Nr?function(t){return t.op.toString()+" {"+t.getFilters().map(sS).join(" ,")+"}"}(n):"Filter"}class RO extends Ct{constructor(e,t,r){super(e,t,r),this.key=fe.fromName(r.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class AO extends Ct{constructor(e,t){super(e,"in",t),this.keys=oS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class PO extends Ct{constructor(e,t){super(e,"not-in",t),this.keys=oS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>fe.fromName(r.referenceValue))}class kO extends Ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return og(t)&&uu(t.arrayValue,this.value)}}class NO extends Ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&uu(this.value.arrayValue,t)}}class xO extends Ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(uu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!uu(this.value.arrayValue,t)}}class DO extends Ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!og(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>uu(this.value.arrayValue,r))}}/**
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
 */class OO{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.ue=null}}function PE(n,e=null,t=[],r=[],s=null,a=null,u=null){return new OO(n,e,t,r,s,a,u)}function ag(n){const e=Te(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Qp(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),cd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ma(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ma(r)).join(",")),e.ue=t}return e.ue}function lg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!SO(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!iS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!AE(n.startAt,e.startAt)&&AE(n.endAt,e.endAt)}function Yp(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class dd{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bO(n,e,t,r,s,a,u,d){return new dd(n,e,t,r,s,a,u,d)}function ug(n){return new dd(n)}function kE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function LO(n){return n.collectionGroup!==null}function Hl(n){const e=Te(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new At(Bt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new Mh(a,r))}),t.has(Bt.keyField().canonicalString())||e.ce.push(new Mh(Bt.keyField(),r))}return e.ce}function Rr(n){const e=Te(n);return e.le||(e.le=MO(e,Hl(n))),e.le}function MO(n,e){if(n.limitType==="F")return PE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new Mh(s.field,a)});const t=n.endAt?new Lh(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Lh(n.startAt.position,n.startAt.inclusive):null;return PE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Xp(n,e,t){return new dd(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fd(n,e){return lg(Rr(n),Rr(e))&&n.limitType===e.limitType}function aS(n){return`${ag(Rr(n))}|lt:${n.limitType}`}function Qo(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>sS(s)).join(", ")}]`),cd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ma(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ma(s)).join(",")),`Target(${r})`}(Rr(n))}; limitType=${n.limitType})`}function pd(n,e){return e.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):fe.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,s){for(const a of Hl(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(u,d,f){const m=RE(u,d,f);return u.inclusive?m<=0:m<0}(r.startAt,Hl(r),s)||r.endAt&&!function(u,d,f){const m=RE(u,d,f);return u.inclusive?m>=0:m>0}(r.endAt,Hl(r),s))}(n,e)}function VO(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lS(n){return(e,t)=>{let r=!1;for(const s of Hl(n)){const a=FO(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function FO(n,e,t){const r=n.field.isKeyField()?fe.comparator(e.key,t.key):function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?pa(f,m):Ee()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ee()}}/**
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
 */class Js{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(t,r)=>{for(const[s,a]of r)e(s,a)})}isEmpty(){return JI(this.inner)}size(){return this.innerSize}}/**
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
 */const UO=new lt(fe.comparator);function ai(){return UO}const uS=new lt(fe.comparator);function Ll(...n){let e=uS;for(const t of n)e=e.insert(t.key,t);return e}function cS(n){let e=uS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Vs(){return Gl()}function hS(){return Gl()}function Gl(){return new Js(n=>n.toString(),(n,e)=>n.isEqual(e))}const jO=new lt(fe.comparator),zO=new At(fe.comparator);function De(...n){let e=zO;for(const t of n)e=e.add(t);return e}const BO=new At(be);function WO(){return BO}/**
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
 */function cg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bh(e)?"-0":e}}function dS(n){return{integerValue:""+n}}function $O(n,e){return _O(e)?dS(e):cg(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class md{constructor(){this._=void 0}}function qO(n,e,t){return n instanceof cu?function(s,a){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&sg(a)&&(a=hd(a)),a&&(u.fields.__previous_value__=a),{mapValue:u}}(t,e):n instanceof hu?pS(n,e):n instanceof du?mS(n,e):function(s,a){const u=fS(s,a),d=NE(u)+NE(s.Pe);return Kp(u)&&Kp(s.Pe)?dS(d):cg(s.serializer,d)}(n,e)}function HO(n,e,t){return n instanceof hu?pS(n,e):n instanceof du?mS(n,e):t}function fS(n,e){return n instanceof Vh?function(r){return Kp(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class cu extends md{}class hu extends md{constructor(e){super(),this.elements=e}}function pS(n,e){const t=gS(e);for(const r of n.elements)t.some(s=>kr(s,r))||t.push(r);return{arrayValue:{values:t}}}class du extends md{constructor(e){super(),this.elements=e}}function mS(n,e){let t=gS(e);for(const r of n.elements)t=t.filter(s=>!kr(s,r));return{arrayValue:{values:t}}}class Vh extends md{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function NE(n){return mt(n.integerValue||n.doubleValue)}function gS(n){return og(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class GO{constructor(e,t){this.field=e,this.transform=t}}function KO(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof hu&&s instanceof hu||r instanceof du&&s instanceof du?fa(r.elements,s.elements,kr):r instanceof Vh&&s instanceof Vh?kr(r.Pe,s.Pe):r instanceof cu&&s instanceof cu}(n.transform,e.transform)}class QO{constructor(e,t){this.version=e,this.transformResults=t}}class Ar{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ar}static exists(e){return new Ar(void 0,e)}static updateTime(e){return new Ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ah(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class gd{}function _S(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new vS(n.key,Ar.none()):new Iu(n.key,n.data,Ar.none());{const t=n.data,r=jn.empty();let s=new At(Bt.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new Zs(n.key,r,new sr(s.toArray()),Ar.none())}}function YO(n,e,t){n instanceof Iu?function(s,a,u){const d=s.value.clone(),f=DE(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Zs?function(s,a,u){if(!ah(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=DE(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(yS(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,e,t):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Kl(n,e,t,r){return n instanceof Iu?function(a,u,d,f){if(!ah(a.precondition,u))return d;const m=a.value.clone(),v=OE(a.fieldTransforms,f,u);return m.setAll(v),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof Zs?function(a,u,d,f){if(!ah(a.precondition,u))return d;const m=OE(a.fieldTransforms,f,u),v=u.data;return v.setAll(yS(a)),v.setAll(m),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(n,e,t,r):function(a,u,d){return ah(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function XO(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=fS(r.transform,s||null);a!=null&&(t===null&&(t=jn.empty()),t.set(r.field,a))}return t||null}function xE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fa(r,s,(a,u)=>KO(a,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Iu extends gd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zs extends gd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function yS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function DE(n,e,t){const r=new Map;We(n.length===t.length);for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,HO(u,d,t[s]))}return r}function OE(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,qO(a,u,e))}return r}class vS extends gd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JO extends gd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ZO{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&YO(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Kl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Kl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=hS();return this.mutations.forEach(s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=_S(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(we.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),De())}isEqual(e){return this.batchId===e.batchId&&fa(this.mutations,e.mutations,(t,r)=>xE(t,r))&&fa(this.baseMutations,e.baseMutations,(t,r)=>xE(t,r))}}class hg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){We(e.mutations.length===r.length);let s=function(){return jO}();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new hg(e,t,r,s)}}/**
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
 */class eb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class tb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var yt,Ve;function nb(n){switch(n){default:return Ee();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0}}function ES(n){if(n===void 0)return oi("GRPC error has no .code"),K.UNKNOWN;switch(n){case yt.OK:return K.OK;case yt.CANCELLED:return K.CANCELLED;case yt.UNKNOWN:return K.UNKNOWN;case yt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case yt.INTERNAL:return K.INTERNAL;case yt.UNAVAILABLE:return K.UNAVAILABLE;case yt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case yt.NOT_FOUND:return K.NOT_FOUND;case yt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case yt.ABORTED:return K.ABORTED;case yt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case yt.DATA_LOSS:return K.DATA_LOSS;default:return Ee()}}(Ve=yt||(yt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rb(){return new TextEncoder}/**
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
 */const ib=new $i([4294967295,4294967295],0);function bE(n){const e=rb().encode(n),t=new $I;return t.update(e),new Uint8Array(t.digest())}function LE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new $i([t,r],0),new $i([s,a],0)]}class dg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ml(`Invalid padding: ${t}`);if(r<0)throw new Ml(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ml(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ml(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=$i.fromNumber(this.Te)}de(e,t,r){let s=e.add(t.multiply($i.fromNumber(r)));return s.compare(ib)===1&&(s=new $i([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=bE(e),[r,s]=LE(t);for(let a=0;a<this.hashCount;a++){const u=this.de(r,s,a);if(!this.Ee(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new dg(a,s,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.Te===0)return;const t=bE(e),[r,s]=LE(t);for(let a=0;a<this.hashCount;a++){const u=this.de(r,s,a);this.Ae(u)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ml extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _d{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Su.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new _d(we.min(),s,new lt(be),ai(),De())}}class Su{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Su(r,t,De(),De(),De())}}/**
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
 */class lh{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class wS{constructor(e,t){this.targetId=e,this.me=t}}class TS{constructor(e,t,r=Wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ME{constructor(){this.fe=0,this.ge=VE(),this.pe=Wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=De(),t=De(),r=De();return this.ge.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Ee()}}),new Su(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=VE()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,We(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sb{constructor(e){this.Be=e,this.Le=new Map,this.ke=ai(),this.qe=Yc(),this.Qe=Yc(),this.Ke=new lt(be)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:Ee()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const a=s.target;if(Yp(a))if(r===0){const u=new fe(a.path);this.We(t,u,Zt.newNoDocument(u,we.min()))}else We(r===1);else{const u=this.Ze(t);if(u!==r){const d=this.Xe(e),f=d?this.et(d,e,u):1;if(f!==0){this.He(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,m)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=Yi(r).toUint8Array()}catch(f){if(f instanceof ZI)return da("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new dg(u,s,a)}catch(f){return da(f instanceof Ml?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.Te===0?null:d}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Be.getRemoteKeysForTarget(t);let s=0;return r.forEach(a=>{const u=this.Be.nt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.We(t,a,null),s++)}),s}it(e){const t=new Map;this.Le.forEach((a,u)=>{const d=this.Ye(u);if(d){if(a.current&&Yp(d.target)){const f=new fe(d.target.path);this.st(f).has(u)||this.ot(u,f)||this.We(u,f,Zt.newNoDocument(f,e))}a.be&&(t.set(u,a.ve()),a.Ce())}});let r=De();this.Qe.forEach((a,u)=>{let d=!0;u.forEachWhile(f=>{const m=this.Ye(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(a))}),this.ke.forEach((a,u)=>u.setReadTime(e));const s=new _d(e,t,this.Ke,this.ke,r);return this.ke=ai(),this.qe=Yc(),this.Qe=Yc(),this.Ke=new lt(be),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new ME,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new At(be),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new At(be),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new ME),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Yc(){return new lt(fe.comparator)}function VE(){return new lt(fe.comparator)}const ob={asc:"ASCENDING",desc:"DESCENDING"},ab={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lb={and:"AND",or:"OR"};class ub{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Jp(n,e){return n.useProto3Json||cd(e)?e:{value:e}}function Fh(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function cb(n,e){return Fh(n,e.toTimestamp())}function Pr(n){return We(!!n),we.fromTimestamp(function(t){const r=Qi(t);return new Rt(r.seconds,r.nanos)}(n))}function fg(n,e){return Zp(n,e).canonicalString()}function Zp(n,e){const t=function(s){return new st(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function SS(n){const e=st.fromString(n);return We(kS(e)),e}function em(n,e){return fg(n.databaseId,e.path)}function Ep(n,e){const t=SS(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new fe(RS(t))}function CS(n,e){return fg(n.databaseId,e)}function hb(n){const e=SS(n);return e.length===4?st.emptyPath():RS(e)}function tm(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function RS(n){return We(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function FE(n,e,t){return{name:em(n,e),fields:t.value.mapValue.fields}}function db(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(m,v){return m.useProto3Json?(We(v===void 0||typeof v=="string"),Wt.fromBase64String(v||"")):(We(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Wt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const v=m.code===void 0?K.UNKNOWN:ES(m.code);return new ue(v,m.message||"")}(u);t=new TS(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ep(n,r.document.name),a=Pr(r.document.updateTime),u=r.document.createTime?Pr(r.document.createTime):we.min(),d=new jn({mapValue:{fields:r.document.fields}}),f=Zt.newFoundDocument(s,a,u,d),m=r.targetIds||[],v=r.removedTargetIds||[];t=new lh(m,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ep(n,r.document),a=r.readTime?Pr(r.readTime):we.min(),u=Zt.newNoDocument(s,a),d=r.removedTargetIds||[];t=new lh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ep(n,r.document),a=r.removedTargetIds||[];t=new lh([],a,s,null)}else{if(!("filter"in e))return Ee();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new tb(s,a),d=r.targetId;t=new wS(d,u)}}return t}function fb(n,e){let t;if(e instanceof Iu)t={update:FE(n,e.key,e.value)};else if(e instanceof vS)t={delete:em(n,e.key)};else if(e instanceof Zs)t={update:FE(n,e.key,e.data),updateMask:Tb(e.fieldMask)};else{if(!(e instanceof JO))return Ee();t={verify:em(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,u){const d=u.transform;if(d instanceof cu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof hu)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof du)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Vh)return{fieldPath:u.field.canonicalString(),increment:d.Pe};throw Ee()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:cb(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ee()}(n,e.precondition)),t}function pb(n,e){return n&&n.length>0?(We(e!==void 0),n.map(t=>function(s,a){let u=s.updateTime?Pr(s.updateTime):Pr(a);return u.isEqual(we.min())&&(u=Pr(a)),new QO(u,s.transformResults||[])}(t,e))):[]}function mb(n,e){return{documents:[CS(n,e.path)]}}function gb(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=CS(n,s);const a=function(m){if(m.length!==0)return PS(Nr.create(m,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const u=function(m){if(m.length!==0)return m.map(v=>function(I){return{field:Yo(I.field),direction:vb(I.dir)}}(v))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Jp(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ct:t,parent:s}}function _b(n){let e=hb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){We(r===1);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=function(w){const I=AS(w);return I instanceof Nr&&rS(I)?I.getFilters():[I]}(t.where));let u=[];t.orderBy&&(u=function(w){return w.map(I=>function(j){return new Mh(Xo(j.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(j.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(w){let I;return I=typeof w=="object"?w.value:w,cd(I)?null:I}(t.limit));let f=null;t.startAt&&(f=function(w){const I=!!w.before,N=w.values||[];return new Lh(N,I)}(t.startAt));let m=null;return t.endAt&&(m=function(w){const I=!w.before,N=w.values||[];return new Lh(N,I)}(t.endAt)),bO(e,s,u,a,d,"F",f,m)}function yb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function AS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xo(t.unaryFilter.field);return Ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xo(t.unaryFilter.field);return Ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Xo(t.unaryFilter.field);return Ct.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Xo(t.unaryFilter.field);return Ct.create(u,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(n):n.fieldFilter!==void 0?function(t){return Ct.create(Xo(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Nr.create(t.compositeFilter.filters.map(r=>AS(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ee()}}(t.compositeFilter.op))}(n):Ee()}function vb(n){return ob[n]}function Eb(n){return ab[n]}function wb(n){return lb[n]}function Yo(n){return{fieldPath:n.canonicalString()}}function Xo(n){return Bt.fromServerFormat(n.fieldPath)}function PS(n){return n instanceof Ct?function(t){if(t.op==="=="){if(CE(t.value))return{unaryFilter:{field:Yo(t.field),op:"IS_NAN"}};if(SE(t.value))return{unaryFilter:{field:Yo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(CE(t.value))return{unaryFilter:{field:Yo(t.field),op:"IS_NOT_NAN"}};if(SE(t.value))return{unaryFilter:{field:Yo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yo(t.field),op:Eb(t.op),value:t.value}}}(n):n instanceof Nr?function(t){const r=t.getFilters().map(s=>PS(s));return r.length===1?r[0]:{compositeFilter:{op:wb(t.op),filters:r}}}(n):Ee()}function Tb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ui{constructor(e,t,r,s,a=we.min(),u=we.min(),d=Wt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Ui(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ui(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ib{constructor(e){this.ht=e}}function Sb(n){const e=_b({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xp(e,e.limit,"L"):e}/**
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
 */class Cb{constructor(){this.ln=new Rb}addToCollectionParentIndex(e,t){return this.ln.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Ki.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Ki.min())}updateCollectionGroup(e,t,r){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class Rb{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new At(st.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new At(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const UE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class pn{static withCacheSize(e){return new pn(e,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */pn.DEFAULT_COLLECTION_PERCENTILE=10,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pn.DEFAULT=new pn(41943040,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pn.DISABLED=new pn(-1,0,0);/**
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
 */class ga{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ga(0)}static Qn(){return new ga(-1)}}/**
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
 */function jE([n,e],[t,r]){const s=be(n,t);return s===0?be(e,r):s}class Ab{constructor(e){this.Gn=e,this.buffer=new At(jE),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();jE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Pb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){re("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ka(t)?re("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Pa(t)}await this.Yn(3e5)})}}class kb{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return $.resolve(ud.oe);const r=new Ab(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(UE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),UE):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,a,u,d,f,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(e,s))).next(w=>(r=w,d=Date.now(),this.removeTargets(e,r,t))).next(w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(w=>(m=Date.now(),Ko()<=Ne.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(m-f)+`ms
Total Duration: ${m-v}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w})))}}function Nb(n,e){return new kb(n,e)}/**
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
 */class xb{constructor(){this.changes=new Js(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?$.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Db{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ob{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Kl(r.mutation,s,sr.empty(),Rt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,De()).next(()=>r))}getLocalViewOfDocuments(e,t,r=De()){const s=Vs();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(a=>{let u=Ll();return a.forEach((d,f)=>{u=u.insert(d,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=Vs();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,De()))}populateOverlays(e,t,r){const s=[];return r.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,s){let a=ai();const u=Gl(),d=function(){return Gl()}();return t.forEach((f,m)=>{const v=r.get(m.key);s.has(m.key)&&(v===void 0||v.mutation instanceof Zs)?a=a.insert(m.key,m):v!==void 0?(u.set(m.key,v.mutation.getFieldMask()),Kl(v.mutation,m,v.mutation.getFieldMask(),Rt.now())):u.set(m.key,sr.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((m,v)=>u.set(m,v)),t.forEach((m,v)=>{var w;return d.set(m,new Db(v,(w=u.get(m))!==null&&w!==void 0?w:null))}),d))}recalculateAndSaveOverlays(e,t){const r=Gl();let s=new lt((u,d)=>u-d),a=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(f=>{const m=t.get(f);if(m===null)return;let v=r.get(f)||sr.empty();v=d.applyToLocalView(m,v),r.set(f,v);const w=(s.get(d.batchId)||De()).add(f);s=s.insert(d.batchId,w)})}).next(()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,v=f.value,w=hS();v.forEach(I=>{if(!a.has(I)){const N=_S(t.get(I),r.get(I));N!==null&&w.set(I,N),a=a.add(I)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,w))}return $.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(u){return fe.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):LO(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):$.resolve(Vs());let d=-1,f=a;return u.next(m=>$.forEach(m,(v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?$.resolve():this.remoteDocumentCache.getEntry(e,v).next(I=>{f=f.insert(v,I)}))).next(()=>this.populateOverlays(e,m,a)).next(()=>this.computeViews(e,f,m,De())).next(v=>({batchId:d,changes:cS(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next(r=>{let s=Ll();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=Ll();return this.indexManager.getCollectionParents(e,a).next(d=>$.forEach(d,f=>{const m=function(w,I){return new dd(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next(v=>{v.forEach((w,I)=>{u=u.insert(w,I)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s))).next(u=>{a.forEach((f,m)=>{const v=m.getKey();u.get(v)===null&&(u=u.insert(v,Zt.newInvalidDocument(v)))});let d=Ll();return u.forEach((f,m)=>{const v=a.get(f);v!==void 0&&Kl(v.mutation,m,sr.empty(),Rt.now()),pd(t,m)&&(d=d.insert(f,m))}),d})}}/**
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
 */class bb{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return $.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Pr(s.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:Sb(s.bundledQuery),readTime:Pr(s.readTime)}}(t)),$.resolve()}}/**
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
 */class Lb{constructor(){this.overlays=new lt(fe.comparator),this.dr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Vs();return $.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,a)=>{this.Tt(e,t,a)}),$.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.dr.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.dr.delete(r)),$.resolve()}getOverlaysForCollection(e,t,r){const s=Vs(),a=t.length+1,u=new fe(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return $.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new lt((m,v)=>m-v);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let v=a.get(m.largestBatchId);v===null&&(v=Vs(),a=a.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const d=Vs(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,v)=>d.set(m,v)),!(d.size()>=s)););return $.resolve(d)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.dr.get(s.largestBatchId).delete(r.key);this.dr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new eb(t,r));let a=this.dr.get(t);a===void 0&&(a=De(),this.dr.set(t,a)),this.dr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Mb{constructor(){this.sessionToken=Wt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class pg{constructor(){this.Er=new At(bt.Ar),this.Rr=new At(bt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const r=new bt(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new bt(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new fe(new st([])),r=new bt(t,e),s=new bt(t,e+1),a=[];return this.Rr.forEachInRange([r,s],u=>{this.gr(u),a.push(u.key)}),a}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new fe(new st([])),r=new bt(t,e),s=new bt(t,e+1);let a=De();return this.Rr.forEachInRange([r,s],u=>{a=a.add(u.key)}),a}containsKey(e){const t=new bt(e,0),r=this.Er.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class bt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return fe.comparator(e.key,t.key)||be(e.br,t.br)}static Vr(e,t){return be(e.br,t.br)||fe.comparator(e.key,t.key)}}/**
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
 */class Vb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new At(bt.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new ZO(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.vr=this.vr.add(new bt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return $.resolve(u)}lookupMutationBatch(e,t){return $.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),a=s<0?0:s;return $.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new bt(t,0),s=new bt(t,Number.POSITIVE_INFINITY),a=[];return this.vr.forEachInRange([r,s],u=>{const d=this.Cr(u.br);a.push(d)}),$.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new At(be);return t.forEach(s=>{const a=new bt(s,0),u=new bt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([a,u],d=>{r=r.add(d.br)})}),$.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;fe.isDocumentKey(a)||(a=a.child(""));const u=new bt(new fe(a),0);let d=new At(be);return this.vr.forEachWhile(f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.br)),!0)},u),$.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){We(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return $.forEach(t.mutations,s=>{const a=new bt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){const r=new bt(t,0),s=this.vr.firstAfterOrEqual(r);return $.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Fb{constructor(e){this.Nr=e,this.docs=function(){return new lt(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return $.resolve(r?r.document.mutableCopy():Zt.newInvalidDocument(t))}getEntries(e,t){let r=ai();return t.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():Zt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=ai();const u=t.path,d=new fe(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:v}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||fO(dO(v),r)<=0||(s.has(v.key)||pd(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return $.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Ee()}Br(e,t){return $.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Ub(this)}getSize(e){return $.resolve(this.size)}}class Ub extends xb{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),$.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class jb{constructor(e){this.persistence=e,this.Lr=new Js(t=>ag(t),lg),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.kr=0,this.qr=new pg,this.targetCount=0,this.Qr=ga.qn()}forEachTarget(e,t){return this.Lr.forEach((r,s)=>t(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),$.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ga(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Un(t),$.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.Lr.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.Lr.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),$.waitFor(a).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const r=this.Lr.get(t)||null;return $.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),$.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(u=>{a.push(s.markPotentiallyOrphaned(e,u))}),$.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return $.resolve(r)}containsKey(e,t){return $.resolve(this.qr.containsKey(t))}}/**
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
 */class NS{constructor(e,t){this.Kr={},this.overlays={},this.$r=new ud(0),this.Ur=!1,this.Ur=!0,this.Wr=new Mb,this.referenceDelegate=e(this),this.Gr=new jb(this),this.indexManager=new Cb,this.remoteDocumentCache=function(s){return new Fb(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Ib(t),this.jr=new bb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Lb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new Vb(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const s=new zb(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(a=>this.referenceDelegate.Jr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Yr(e,t){return $.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class zb extends mO{constructor(e){super(),this.currentSequenceNumber=e}}class mg{constructor(e){this.persistence=e,this.Zr=new pg,this.Xr=null}static ei(e){return new mg(e)}get ti(){if(this.Xr)return this.Xr;throw Ee()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),$.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),$.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.ti.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,r=>{const s=fe.fromPath(r);return this.ni(e,s).next(a=>{a||t.removeEntry(s,we.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return $.or([()=>$.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Uh{constructor(e,t){this.persistence=e,this.ri=new Js(r=>yO(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Nb(this,t)}static ei(e,t){return new Uh(e,t)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return $.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(a=>a?$.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.Br(e,u=>this.ir(e,u,t).next(d=>{d||(r++,a.removeEntry(u,we.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=sh(e.data.value)),t}ir(e,t,r){return $.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class gg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=De(),s=De();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new gg(e,t.fromCache,r,s)}}/**
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
 */class Bb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Wb{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return $R()?8:gO(en())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.Xi(e,t).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.es(e,t,s,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new Bb;return this.ts(e,t,u).next(d=>{if(a.result=d,this.Hi)return this.ns(e,t,u,d.size)})}).next(()=>a.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(Ko()<=Ne.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Qo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(Ko()<=Ne.DEBUG&&re("QueryEngine","Query:",Qo(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Ko()<=Ne.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Qo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rr(t))):$.resolve())}Xi(e,t){if(kE(t))return $.resolve(null);let r=Rr(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Xp(t,null,"F"),r=Rr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const u=De(...a);return this.Zi.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(f=>{const m=this.rs(t,d);return this.ss(t,m,u,f.readTime)?this.Xi(e,Xp(t,null,"F")):this.os(e,m,t,f)}))})))}es(e,t,r,s){return kE(t)||s.isEqual(we.min())?$.resolve(null):this.Zi.getDocuments(e,r).next(a=>{const u=this.rs(t,a);return this.ss(t,u,r,s)?$.resolve(null):(Ko()<=Ne.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qo(t)),this.os(e,u,t,hO(s,-1)).next(d=>d))})}rs(e,t){let r=new At(lS(e));return t.forEach((s,a)=>{pd(e,a)&&(r=r.add(a))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ts(e,t,r){return Ko()<=Ne.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Qo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ki.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(a=>(t.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
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
 */class $b{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new lt(be),this.cs=new Js(a=>ag(a),lg),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ob(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function qb(n,e,t,r){return new $b(n,e,t,r)}async function xS(n,e){const t=Te(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],d=[];let f=De();for(const m of s){u.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}for(const m of a){d.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next(m=>({Ts:m,removedBatchIds:u,addedBatchIds:d}))})})}function Hb(n,e){const t=Te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),a=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,f,m,v){const w=m.batch,I=w.keys();let N=$.resolve();return I.forEach(j=>{N=N.next(()=>v.getEntry(f,j)).next(W=>{const B=m.docVersions.get(j);We(B!==null),W.version.compareTo(B)<0&&(w.applyToRemoteDocument(W,m),W.isValidDocument()&&(W.setReadTime(m.commitVersion),v.addEntry(W)))})}),N.next(()=>d.mutationQueue.removeMutationBatch(f,w))}(t,r,e,a).next(()=>a.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let f=De();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function DS(n){const e=Te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function Gb(n,e){const t=Te(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const d=[];e.targetChanges.forEach((v,w)=>{const I=s.get(w);if(!I)return;d.push(t.Gr.removeMatchingKeys(a,v.removedDocuments,w).next(()=>t.Gr.addMatchingKeys(a,v.addedDocuments,w)));let N=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?N=N.withResumeToken(Wt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):v.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(v.resumeToken,r)),s=s.insert(w,N),function(W,B,pe){return W.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=3e8?!0:pe.addedDocuments.size+pe.modifiedDocuments.size+pe.removedDocuments.size>0}(I,N,v)&&d.push(t.Gr.updateTargetData(a,N))});let f=ai(),m=De();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))}),d.push(Kb(a,u,e.documentUpdates).next(v=>{f=v.Is,m=v.ds})),!r.isEqual(we.min())){const v=t.Gr.getLastRemoteSnapshotVersion(a).next(w=>t.Gr.setTargetsMetadata(a,a.currentSequenceNumber,r));d.push(v)}return $.waitFor(d).next(()=>u.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,m)).next(()=>f)}).then(a=>(t.us=s,a))}function Kb(n,e,t){let r=De(),s=De();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let u=ai();return t.forEach((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(we.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):re("LocalStore","Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)}),{Is:u,ds:s}})}function Qb(n,e){const t=Te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Yb(n,e){const t=Te(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(a=>a?(s=a,$.resolve(s)):t.Gr.allocateTargetId(r).next(u=>(s=new Ui(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function nm(n,e,t){const r=Te(n),s=r.us.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!ka(u))throw u;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${u}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function zE(n,e,t){const r=Te(n);let s=we.min(),a=De();return r.persistence.runTransaction("Execute query","readwrite",u=>function(f,m,v){const w=Te(f),I=w.cs.get(v);return I!==void 0?$.resolve(w.us.get(I)):w.Gr.getTargetData(m,v)}(r,u,Rr(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(u,d.targetId).next(f=>{a=f})}).next(()=>r._s.getDocumentsMatchingQuery(u,e,t?s:we.min(),t?a:De())).next(d=>(Xb(r,VO(e),d),{documents:d,Es:a})))}function Xb(n,e,t){let r=n.ls.get(e)||we.min();t.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.ls.set(e,r)}class BE{constructor(){this.activeTargetIds=WO()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jb{constructor(){this._o=new BE,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new BE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Zb{uo(e){}shutdown(){}}/**
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
 */class WE{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xc=null;function wp(){return Xc===null?Xc=function(){return 268435456+Math.round(2147483648*Math.random())}():Xc++,"0x"+Xc.toString(16)}/**
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
 */const eL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tL{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Yt="WebChannelConnection";class nL extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${a}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Oo(t,r,s,a,u){const d=wp(),f=this.No(t,r.toUriEncodedString());re("RestConnection",`Sending RPC '${t}' ${d}:`,f,s);const m={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(m,a,u),this.Lo(t,f,m,s).then(v=>(re("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw da("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",f,"request:",s),v})}ko(t,r,s,a,u,d){return this.Oo(t,r,s,a,u)}Bo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Aa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((a,u)=>t[u]=a),s&&s.headers.forEach((a,u)=>t[u]=a)}No(t,r){const s=eL[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,s){const a=wp();return new Promise((u,d)=>{const f=new qI;f.setWithCredentials(!0),f.listenOnce(HI.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case ih.NO_ERROR:const v=f.getResponseJson();re(Yt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),u(v);break;case ih.TIMEOUT:re(Yt,`RPC '${e}' ${a} timed out`),d(new ue(K.DEADLINE_EXCEEDED,"Request time out"));break;case ih.HTTP_ERROR:const w=f.getStatus();if(re(Yt,`RPC '${e}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let I=f.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I==null?void 0:I.error;if(N&&N.status&&N.message){const j=function(B){const pe=B.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(pe)>=0?pe:K.UNKNOWN}(N.status);d(new ue(j,N.message))}else d(new ue(K.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new ue(K.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{re(Yt,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);re(Yt,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",m,r,15)})}qo(e,t,r){const s=wp(),a=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=QI(),d=KI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Bo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");re(Yt,`Creating RPC '${e}' stream ${s}: ${v}`,f);const w=u.createWebChannel(v,f);let I=!1,N=!1;const j=new tL({Eo:B=>{N?re(Yt,`Not sending because RPC '${e}' stream ${s} is closed:`,B):(I||(re(Yt,`Opening RPC '${e}' stream ${s} transport.`),w.open(),I=!0),re(Yt,`RPC '${e}' stream ${s} sending:`,B),w.send(B))},Ao:()=>w.close()}),W=(B,pe,_e)=>{B.listen(pe,ye=>{try{_e(ye)}catch(Ie){setTimeout(()=>{throw Ie},0)}})};return W(w,bl.EventType.OPEN,()=>{N||(re(Yt,`RPC '${e}' stream ${s} transport opened.`),j.So())}),W(w,bl.EventType.CLOSE,()=>{N||(N=!0,re(Yt,`RPC '${e}' stream ${s} transport closed`),j.Do())}),W(w,bl.EventType.ERROR,B=>{N||(N=!0,da(Yt,`RPC '${e}' stream ${s} transport errored:`,B),j.Do(new ue(K.UNAVAILABLE,"The operation could not be completed")))}),W(w,bl.EventType.MESSAGE,B=>{var pe;if(!N){const _e=B.data[0];We(!!_e);const ye=_e,Ie=(ye==null?void 0:ye.error)||((pe=ye[0])===null||pe===void 0?void 0:pe.error);if(Ie){re(Yt,`RPC '${e}' stream ${s} received error:`,Ie);const nt=Ie.status;let ke=function(A){const k=yt[A];if(k!==void 0)return ES(k)}(nt),D=Ie.message;ke===void 0&&(ke=K.INTERNAL,D="Unknown error status: "+nt+" with message "+Ie.message),N=!0,j.Do(new ue(ke,D)),w.close()}else re(Yt,`RPC '${e}' stream ${s} received:`,_e),j.vo(_e)}}),W(d,GI.STAT_EVENT,B=>{B.stat===Hp.PROXY?re(Yt,`RPC '${e}' stream ${s} detected buffering proxy`):B.stat===Hp.NOPROXY&&re(Yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{j.bo()},0),j}}function Tp(){return typeof document<"u"?document:null}/**
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
 */function yd(n){return new ub(n,!0)}/**
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
 */class OS{constructor(e,t,r=1e3,s=1.5,a=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=a,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class bS{constructor(e,t,r,s,a,u,d,f){this.li=e,this.Yo=r,this.Zo=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new OS(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(oi(t.toString()),oi("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new ue(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.d_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rL extends bS{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=db(this.serializer,e),r=function(a){if(!("targetChange"in a))return we.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?we.min():u.readTime?Pr(u.readTime):we.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=tm(this.serializer),t.addTarget=function(a,u){let d;const f=u.target;if(d=Yp(f)?{documents:mb(a,f)}:{query:gb(a,f).ct},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=IS(a,u.resumeToken);const m=Jp(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(we.min())>0){d.readTime=Fh(a,u.snapshotVersion.toTimestamp());const m=Jp(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const r=yb(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=tm(this.serializer),t.removeTarget=e,this.c_(t)}}class iL extends bS{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return We(!!e.streamToken),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=pb(e.writeResults,e.commitTime),r=Pr(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=tm(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>fb(this.serializer,r))};this.c_(t)}}/**
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
 */class sL extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ue(K.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Oo(e,Zp(t,r),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ue(K.UNKNOWN,a.toString())})}ko(e,t,r,s,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.ko(e,Zp(t,r),s,u,d,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ue(K.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class oL{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(oi(t),this.C_=!1):re("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class aL{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=a,this.Q_.uo(u=>{r.enqueueAndForget(async()=>{eo(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(f){const m=Te(f);m.k_.add(4),await Cu(m),m.K_.set("Unknown"),m.k_.delete(4),await vd(m)}(this))})}),this.K_=new oL(r,s)}}async function vd(n){if(eo(n))for(const e of n.q_)await e(!0)}async function Cu(n){for(const e of n.q_)await e(!1)}function LS(n,e){const t=Te(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Eg(t)?vg(t):Na(t).s_()&&yg(t,e))}function _g(n,e){const t=Te(n),r=Na(t);t.L_.delete(e),r.s_()&&MS(t,e),t.L_.size===0&&(r.s_()?r.a_():eo(t)&&t.K_.set("Unknown"))}function yg(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Na(n).V_(e)}function MS(n,e){n.U_.xe(e),Na(n).m_(e)}function vg(n){n.U_=new sb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Na(n).start(),n.K_.F_()}function Eg(n){return eo(n)&&!Na(n).i_()&&n.L_.size>0}function eo(n){return Te(n).k_.size===0}function VS(n){n.U_=void 0}async function lL(n){n.K_.set("Online")}async function uL(n){n.L_.forEach((e,t)=>{yg(n,e)})}async function cL(n,e){VS(n),Eg(n)?(n.K_.O_(e),vg(n)):n.K_.set("Unknown")}async function hL(n,e,t){if(n.K_.set("Online"),e instanceof TS&&e.state===2&&e.cause)try{await async function(s,a){const u=a.cause;for(const d of a.targetIds)s.L_.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.L_.delete(d),s.U_.removeTarget(d))}(n,e)}catch(r){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jh(n,r)}else if(e instanceof lh?n.U_.$e(e):e instanceof wS?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(we.min()))try{const r=await DS(n.localStore);t.compareTo(r)>=0&&await function(a,u){const d=a.U_.it(u);return d.targetChanges.forEach((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.L_.get(m);v&&a.L_.set(m,v.withResumeToken(f.resumeToken,u))}}),d.targetMismatches.forEach((f,m)=>{const v=a.L_.get(f);if(!v)return;a.L_.set(f,v.withResumeToken(Wt.EMPTY_BYTE_STRING,v.snapshotVersion)),MS(a,f);const w=new Ui(v.target,f,m,v.sequenceNumber);yg(a,w)}),a.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){re("RemoteStore","Failed to raise snapshot:",r),await jh(n,r)}}async function jh(n,e,t){if(!ka(e))throw e;n.k_.add(1),await Cu(n),n.K_.set("Offline"),t||(t=()=>DS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await vd(n)})}function FS(n,e){return e().catch(t=>jh(n,t,e))}async function Ed(n){const e=Te(n),t=Ji(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;dL(e);)try{const s=await Qb(e.localStore,r);if(s===null){e.B_.length===0&&t.a_();break}r=s.batchId,fL(e,s)}catch(s){await jh(e,s)}US(e)&&jS(e)}function dL(n){return eo(n)&&n.B_.length<10}function fL(n,e){n.B_.push(e);const t=Ji(n);t.s_()&&t.f_&&t.g_(e.mutations)}function US(n){return eo(n)&&!Ji(n).i_()&&n.B_.length>0}function jS(n){Ji(n).start()}async function pL(n){Ji(n).w_()}async function mL(n){const e=Ji(n);for(const t of n.B_)e.g_(t.mutations)}async function gL(n,e,t){const r=n.B_.shift(),s=hg.from(r,e,t);await FS(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ed(n)}async function _L(n,e){e&&Ji(n).f_&&await async function(r,s){if(function(u){return nb(u)&&u!==K.ABORTED}(s.code)){const a=r.B_.shift();Ji(r).__(),await FS(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await Ed(r)}}(n,e),US(n)&&jS(n)}async function $E(n,e){const t=Te(n);t.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=eo(t);t.k_.add(3),await Cu(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await vd(t)}async function yL(n,e){const t=Te(n);e?(t.k_.delete(2),await vd(t)):e||(t.k_.add(2),await Cu(t),t.K_.set("Unknown"))}function Na(n){return n.W_||(n.W_=function(t,r,s){const a=Te(t);return a.b_(),new rL(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Ro:lL.bind(null,n),mo:uL.bind(null,n),po:cL.bind(null,n),R_:hL.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Eg(n)?vg(n):n.K_.set("Unknown")):(await n.W_.stop(),VS(n))})),n.W_}function Ji(n){return n.G_||(n.G_=function(t,r,s){const a=Te(t);return a.b_(),new iL(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:pL.bind(null,n),po:_L.bind(null,n),p_:mL.bind(null,n),y_:gL.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Ed(n)):(await n.G_.stop(),n.B_.length>0&&(re("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
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
 */class wg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new wg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tg(n,e){if(oi("AsyncQueue",`${e}: ${n}`),ka(n))return new ue(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class oa{static emptySet(e){return new oa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||fe.comparator(t.key,r.key):(t,r)=>fe.comparator(t.key,r.key),this.keyedMap=Ll(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new oa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class qE{constructor(){this.z_=new lt(fe.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Ee():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class _a{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new _a(e,t,oa.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class vL{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class EL{constructor(){this.queries=HE(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=Te(t),a=s.queries;s.queries=HE(),a.forEach((u,d)=>{for(const f of d.J_)f.onError(r)})})(this,new ue(K.ABORTED,"Firestore shutting down"))}}function HE(){return new Js(n=>aS(n),fd)}async function zS(n,e){const t=Te(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Y_()&&e.Z_()&&(r=2):(a=new vL,r=e.Z_()?0:1);try{switch(r){case 0:a.H_=await t.onListen(s,!0);break;case 1:a.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Tg(u,`Initialization of query '${Qo(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.J_.push(e),e.ea(t.onlineState),a.H_&&e.ta(a.H_)&&Ig(t)}async function BS(n,e){const t=Te(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.J_.indexOf(e);u>=0&&(a.J_.splice(u,1),a.J_.length===0?s=e.Z_()?0:1:!a.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function wL(n,e){const t=Te(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.J_)d.ta(s)&&(r=!0);u.H_=s}}r&&Ig(t)}function TL(n,e,t){const r=Te(n),s=r.queries.get(e);if(s)for(const a of s.J_)a.onError(t);r.queries.delete(e)}function Ig(n){n.X_.forEach(e=>{e.next()})}var rm,GE;(GE=rm||(rm={})).na="default",GE.Cache="cache";class WS{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _a(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=_a.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==rm.Cache}}/**
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
 */class $S{constructor(e){this.key=e}}class qS{constructor(e){this.key=e}}class IL{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=De(),this.mutatedKeys=De(),this.Va=lS(e),this.ma=new oa(this.Va)}get fa(){return this.Ea}ga(e,t){const r=t?t.pa:new qE,s=t?t.ma:this.ma;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((v,w)=>{const I=s.get(v),N=pd(this.query,w)?w:null,j=!!I&&this.mutatedKeys.has(I.key),W=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let B=!1;I&&N?I.data.isEqual(N.data)?j!==W&&(r.track({type:3,doc:N}),B=!0):this.ya(I,N)||(r.track({type:2,doc:N}),B=!0,(f&&this.Va(N,f)>0||m&&this.Va(N,m)<0)&&(d=!0)):!I&&N?(r.track({type:0,doc:N}),B=!0):I&&!N&&(r.track({type:1,doc:I}),B=!0,(f||m)&&(d=!0)),B&&(N?(u=u.add(N),a=W?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{ma:u,pa:r,ss:d,mutatedKeys:a}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const u=e.pa.j_();u.sort((v,w)=>function(N,j){const W=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return W(N)-W(j)}(v.type,w.type)||this.Va(v.doc,w.doc)),this.wa(r),s=s!=null&&s;const d=t&&!s?this.Sa():[],f=this.Ra.size===0&&this.current&&!s?1:0,m=f!==this.Aa;return this.Aa=f,u.length!==0||m?{snapshot:new _a(this.query,e.ma,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new qE,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=De(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new qS(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new $S(r))}),t}va(e){this.Ea=e.Es,this.Ra=De();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return _a.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class SL{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class CL{constructor(e){this.key=e,this.Fa=!1}}class RL{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new Js(d=>aS(d),fd),this.Oa=new Map,this.Na=new Set,this.Ba=new lt(fe.comparator),this.La=new Map,this.ka=new pg,this.qa={},this.Qa=new Map,this.Ka=ga.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function AL(n,e,t=!0){const r=XS(n);let s;const a=r.xa.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Ca()):s=await HS(r,e,t,!0),s}async function PL(n,e){const t=XS(n);await HS(t,e,!0,!1)}async function HS(n,e,t,r){const s=await Yb(n.localStore,Rr(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await kL(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&LS(n.remoteStore,s),d}async function kL(n,e,t,r,s){n.Ua=(w,I,N)=>async function(W,B,pe,_e){let ye=B.view.ga(pe);ye.ss&&(ye=await zE(W.localStore,B.query,!1).then(({documents:D})=>B.view.ga(D,ye)));const Ie=_e&&_e.targetChanges.get(B.targetId),nt=_e&&_e.targetMismatches.get(B.targetId)!=null,ke=B.view.applyChanges(ye,W.isPrimaryClient,Ie,nt);return QE(W,B.targetId,ke.ba),ke.snapshot}(n,w,I,N);const a=await zE(n.localStore,e,!0),u=new IL(e,a.Es),d=u.ga(a.documents),f=Su.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);QE(n,t,m.ba);const v=new SL(e,t,u);return n.xa.set(e,v),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),m.snapshot}async function NL(n,e,t){const r=Te(n),s=r.xa.get(e),a=r.Oa.get(s.targetId);if(a.length>1)return r.Oa.set(s.targetId,a.filter(u=>!fd(u,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await nm(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&_g(r.remoteStore,s.targetId),im(r,s.targetId)}).catch(Pa)):(im(r,s.targetId),await nm(r.localStore,s.targetId,!0))}async function xL(n,e){const t=Te(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),_g(t.remoteStore,r.targetId))}async function DL(n,e,t){const r=UL(n);try{const s=await function(u,d){const f=Te(u),m=Rt.now(),v=d.reduce((N,j)=>N.add(j.key),De());let w,I;return f.persistence.runTransaction("Locally write mutations","readwrite",N=>{let j=ai(),W=De();return f.hs.getEntries(N,v).next(B=>{j=B,j.forEach((pe,_e)=>{_e.isValidDocument()||(W=W.add(pe))})}).next(()=>f.localDocuments.getOverlayedDocuments(N,j)).next(B=>{w=B;const pe=[];for(const _e of d){const ye=XO(_e,w.get(_e.key).overlayedDocument);ye!=null&&pe.push(new Zs(_e.key,ye,eS(ye.value.mapValue),Ar.exists(!0)))}return f.mutationQueue.addMutationBatch(N,m,pe,d)}).next(B=>{I=B;const pe=B.applyToLocalDocumentSet(w,W);return f.documentOverlayCache.saveOverlays(N,B.batchId,pe)})}).then(()=>({batchId:I.batchId,changes:cS(w)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(u,d,f){let m=u.qa[u.currentUser.toKey()];m||(m=new lt(be)),m=m.insert(d,f),u.qa[u.currentUser.toKey()]=m}(r,s.batchId,t),await Ru(r,s.changes),await Ed(r.remoteStore)}catch(s){const a=Tg(s,"Failed to persist write");t.reject(a)}}async function GS(n,e){const t=Te(n);try{const r=await Gb(t.localStore,e);e.targetChanges.forEach((s,a)=>{const u=t.La.get(a);u&&(We(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.Fa=!0:s.modifiedDocuments.size>0?We(u.Fa):s.removedDocuments.size>0&&(We(u.Fa),u.Fa=!1))}),await Ru(t,r,e)}catch(r){await Pa(r)}}function KE(n,e,t){const r=Te(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((a,u)=>{const d=u.view.ea(e);d.snapshot&&s.push(d.snapshot)}),function(u,d){const f=Te(u);f.onlineState=d;let m=!1;f.queries.forEach((v,w)=>{for(const I of w.J_)I.ea(d)&&(m=!0)}),m&&Ig(f)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OL(n,e,t){const r=Te(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.La.get(e),a=s&&s.key;if(a){let u=new lt(fe.comparator);u=u.insert(a,Zt.newNoDocument(a,we.min()));const d=De().add(a),f=new _d(we.min(),new Map,new lt(be),u,d);await GS(r,f),r.Ba=r.Ba.remove(a),r.La.delete(e),Sg(r)}else await nm(r.localStore,e,!1).then(()=>im(r,e,t)).catch(Pa)}async function bL(n,e){const t=Te(n),r=e.batch.batchId;try{const s=await Hb(t.localStore,e);QS(t,r,null),KS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ru(t,s)}catch(s){await Pa(s)}}async function LL(n,e,t){const r=Te(n);try{const s=await function(u,d){const f=Te(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let v;return f.mutationQueue.lookupMutationBatch(m,d).next(w=>(We(w!==null),v=w.keys(),f.mutationQueue.removeMutationBatch(m,w))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,v,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v)).next(()=>f.localDocuments.getDocuments(m,v))})}(r.localStore,e);QS(r,e,t),KS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ru(r,s)}catch(s){await Pa(s)}}function KS(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function QS(n,e,t){const r=Te(n);let s=r.qa[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function im(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||YS(n,r)})}function YS(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(_g(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),Sg(n))}function QE(n,e,t){for(const r of t)r instanceof $S?(n.ka.addReference(r.key,e),ML(n,r)):r instanceof qS?(re("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||YS(n,r.key)):Ee()}function ML(n,e){const t=e.key,r=t.path.canonicalString();n.Ba.get(t)||n.Na.has(r)||(re("SyncEngine","New document in limbo: "+t),n.Na.add(r),Sg(n))}function Sg(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new fe(st.fromString(e)),r=n.Ka.next();n.La.set(r,new CL(t)),n.Ba=n.Ba.insert(t,r),LS(n.remoteStore,new Ui(Rr(ug(t.path)),r,"TargetPurposeLimboResolution",ud.oe))}}async function Ru(n,e,t){const r=Te(n),s=[],a=[],u=[];r.xa.isEmpty()||(r.xa.forEach((d,f)=>{u.push(r.Ua(f,e,t).then(m=>{var v;if((m||t)&&r.isPrimaryClient){const w=m?!m.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(m){s.push(m);const w=gg.zi(f.targetId,m);a.push(w)}}))}),await Promise.all(u),r.Ma.R_(s),await async function(f,m){const v=Te(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>$.forEach(m,I=>$.forEach(I.Wi,N=>v.persistence.referenceDelegate.addReference(w,I.targetId,N)).next(()=>$.forEach(I.Gi,N=>v.persistence.referenceDelegate.removeReference(w,I.targetId,N)))))}catch(w){if(!ka(w))throw w;re("LocalStore","Failed to update sequence numbers: "+w)}for(const w of m){const I=w.targetId;if(!w.fromCache){const N=v.us.get(I),j=N.snapshotVersion,W=N.withLastLimboFreeSnapshotVersion(j);v.us=v.us.insert(I,W)}}}(r.localStore,a))}async function VL(n,e){const t=Te(n);if(!t.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await xS(t.localStore,e);t.currentUser=e,function(a,u){a.Qa.forEach(d=>{d.forEach(f=>{f.reject(new ue(K.CANCELLED,u))})}),a.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ru(t,r.Ts)}}function FL(n,e){const t=Te(n),r=t.La.get(e);if(r&&r.Fa)return De().add(r.key);{let s=De();const a=t.Oa.get(e);if(!a)return s;for(const u of a){const d=t.xa.get(u);s=s.unionWith(d.view.fa)}return s}}function XS(n){const e=Te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=GS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OL.bind(null,e),e.Ma.R_=wL.bind(null,e.eventManager),e.Ma.Wa=TL.bind(null,e.eventManager),e}function UL(n){const e=Te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LL.bind(null,e),e}class zh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yd(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return qb(this.persistence,new Wb,e.initialUser,this.serializer)}ja(e){return new NS(mg.ei,this.serializer)}za(e){return new Jb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zh.provider={build:()=>new zh};class jL extends zh{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){We(this.persistence.referenceDelegate instanceof Uh);const r=this.persistence.referenceDelegate.garbageCollector;return new Pb(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?pn.withCacheSize(this.cacheSizeBytes):pn.DEFAULT;return new NS(r=>Uh.ei(r,t),this.serializer)}}class sm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>KE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VL.bind(null,this.syncEngine),await yL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new EL}()}createDatastore(e){const t=yd(e.databaseInfo.databaseId),r=function(a){return new nL(a)}(e.databaseInfo);return function(a,u,d,f){return new sL(a,u,d,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,a,u,d){return new aL(r,s,a,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>KE(this.syncEngine,t,0),function(){return WE.p()?new WE:new Zb}())}createSyncEngine(e,t){return function(s,a,u,d,f,m,v){const w=new RL(s,a,u,d,f,m);return v&&(w.$a=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const a=Te(s);re("RemoteStore","RemoteStore shutting down."),a.k_.add(5),await Cu(a),a.Q_.shutdown(),a.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}sm.provider={build:()=>new sm};/**
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
 *//**
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
 */class JS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):oi("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class zL{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Xt.UNAUTHENTICATED,this.clientId=XI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{re("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(re("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Tg(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ip(n,e){n.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await xS(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function YE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await BL(n);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>$E(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>$E(e.remoteStore,s)),n._onlineComponents=e}async function BL(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ip(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===K.FAILED_PRECONDITION||s.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;da("Error using user provided cache. Falling back to memory cache: "+t),await Ip(n,new zh)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await Ip(n,new jL(void 0));return n._offlineComponents}async function ZS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await YE(n,n._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await YE(n,new sm))),n._onlineComponents}function WL(n){return ZS(n).then(e=>e.syncEngine)}async function eC(n){const e=await ZS(n),t=e.eventManager;return t.onListen=AL.bind(null,e.syncEngine),t.onUnlisten=NL.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=PL.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xL.bind(null,e.syncEngine),t}function $L(n,e,t={}){const r=new ti;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,d,f,m){const v=new JS({next:I=>{v.eu(),u.enqueueAndForget(()=>BS(a,w));const N=I.docs.has(d);!N&&I.fromCache?m.reject(new ue(K.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&I.fromCache&&f&&f.source==="server"?m.reject(new ue(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(I)},error:I=>m.reject(I)}),w=new WS(ug(d.path),v,{includeMetadataChanges:!0,ua:!0});return zS(a,w)}(await eC(n),n.asyncQueue,e,t,r)),r.promise}function qL(n,e,t={}){const r=new ti;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,d,f,m){const v=new JS({next:I=>{v.eu(),u.enqueueAndForget(()=>BS(a,w)),I.fromCache&&f.source==="server"?m.reject(new ue(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(I)},error:I=>m.reject(I)}),w=new WS(d,v,{includeMetadataChanges:!0,ua:!0});return zS(a,w)}(await eC(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function tC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const XE=new Map;/**
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
 */function nC(n,e,t){if(!t)throw new ue(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function HL(n,e,t,r){if(e===!0&&r===!0)throw new ue(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function JE(n){if(!fe.isDocumentKey(n))throw new ue(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ZE(n){if(fe.isDocumentKey(n))throw new ue(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Cg(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee()}function Zi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Cg(n);throw new ue(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class ew{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ue(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ue(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ue(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ew({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ew(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nO;switch(r.type){case"firstParty":return new oO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ue(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=XE.get(t);r&&(re("ComponentProvider","Removing Datastore"),XE.delete(t),r.terminate())}(this),Promise.resolve()}}function GL(n,e,t,r={}){var s;const a=(n=Zi(n,wd))._getSettings(),u=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==u&&da("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:u,ssl:!1})),r.mockUserToken){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Xt.MOCK_USER;else{d=fw(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ue(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Xt(m)}n._authCredentials=new rO(new YI(d,f))}}/**
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
 */class Td{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Td(this.firestore,e,this._query)}}class kn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kn(this.firestore,e,this._key)}}class qi extends Td{constructor(e,t,r){super(e,t,ug(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kn(this.firestore,null,new fe(e))}withConverter(e){return new qi(this.firestore,e,this._path)}}function rC(n,e,...t){if(n=ht(n),nC("collection","path",e),n instanceof wd){const r=st.fromString(e,...t);return ZE(r),new qi(n,null,r)}{if(!(n instanceof kn||n instanceof qi))throw new ue(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(st.fromString(e,...t));return ZE(r),new qi(n.firestore,null,r)}}function fu(n,e,...t){if(n=ht(n),arguments.length===1&&(e=XI.newId()),nC("doc","path",e),n instanceof wd){const r=st.fromString(e,...t);return JE(r),new kn(n,null,new fe(r))}{if(!(n instanceof kn||n instanceof qi))throw new ue(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(st.fromString(e,...t));return JE(r),new kn(n.firestore,n instanceof qi?n.converter:null,new fe(r))}}/**
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
 */class tw{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new OS(this,"async_queue_retry"),this.fu=()=>{const r=Tp();r&&re("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Tp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Tp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new ti;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ka(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(r);throw oi("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=wg.createAndSchedule(this,e,t,r,a=>this.Su(a));return this.Eu.push(s),s}pu(){this.Au&&Ee()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class Au extends wd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new tw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tw(e),this._firestoreClient=void 0,await e}}}function KL(n,e){const t=typeof n=="object"?n:Kh(),r=typeof n=="string"?n:"(default)",s=ts(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=cw("firestore");a&&GL(s,...a)}return s}function Rg(n){if(n._terminated)throw new ue(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||QL(n),n._firestoreClient}function QL(n){var e,t,r;const s=n._freezeSettings(),a=function(d,f,m,v){return new wO(d,f,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,tC(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new zL(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class ya{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ya(Wt.fromBase64String(e))}catch(t){throw new ue(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ya(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ag{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pg{constructor(e){this._methodName=e}}/**
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
 */class kg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ng{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
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
 */const YL=/^__.*__$/;class XL{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Zs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Iu(e,this.data,t,this.fieldTransforms)}}function iC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class xg{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Fu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new xg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Bu(e),s}Lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Bh(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(iC(this.Mu)&&YL.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class JL{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||yd(e)}$u(e,t,r,s=!1){return new xg({Mu:e,methodName:t,Ku:r,path:Bt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sC(n){const e=n._freezeSettings(),t=yd(n._databaseId);return new JL(n._databaseId,!!e.ignoreUndefinedProperties,t)}function oC(n,e,t,r,s,a={}){const u=n.$u(a.merge||a.mergeFields?2:0,e,t,s);cC("Data must be an object, but it was:",u,r);const d=lC(r,u);let f,m;if(a.merge)f=new sr(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const w of a.mergeFields){const I=ZL(e,w,t);if(!u.contains(I))throw new ue(K.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);tM(v,I)||v.push(I)}f=new sr(v),m=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,m=u.fieldTransforms;return new XL(new jn(d),f,m)}class Dg extends Pg{_toFieldTransform(e){return new GO(e.path,new cu)}isEqual(e){return e instanceof Dg}}function aC(n,e){if(uC(n=ht(n)))return cC("Unsupported field value:",e,n),lC(n,e);if(n instanceof Pg)return function(r,s){if(!iC(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const a=[];let u=0;for(const d of r){let f=aC(d,s.ku(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(n,e)}return function(r,s){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $O(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Rt.fromDate(r);return{timestampValue:Fh(s.serializer,a)}}if(r instanceof Rt){const a=new Rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fh(s.serializer,a)}}if(r instanceof kg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ya)return{bytesValue:IS(s.serializer,r._byteString)};if(r instanceof kn){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:fg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ng)return function(u,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw d.qu("VectorValues must only contain numeric values.");return cg(d.serializer,f)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Cg(r)}`)}(n,e)}function lC(n,e){const t={};return JI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(n,(r,s)=>{const a=aC(s,e.Ou(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function uC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Rt||n instanceof kg||n instanceof ya||n instanceof kn||n instanceof Pg||n instanceof Ng)}function cC(n,e,t){if(!uC(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Cg(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function ZL(n,e,t){if((e=ht(e))instanceof Ag)return e._internalPath;if(typeof e=="string")return hC(n,e);throw Bh("Field path arguments must be of type string or ",n,!1,void 0,t)}const eM=new RegExp("[~\\*/\\[\\]]");function hC(n,e,t){if(e.search(eM)>=0)throw Bh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ag(...e.split("."))._internalPath}catch{throw Bh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bh(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new ue(K.INVALID_ARGUMENT,d+n+f)}function tM(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class dC{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new kn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fC("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nM extends dC{data(){return super.data()}}function fC(n,e){return typeof e=="string"?hC(n,e):e instanceof Ag?e._internalPath:e._delegate._internalPath}/**
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
 */function rM(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iM{convertValue(e,t="none"){switch(Xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Xs(e,(s,a)=>{r[s]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(u=>mt(u.doubleValue));return new Ng(a)}convertGeoPoint(e){return new kg(mt(e.latitude),mt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=hd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(au(e));default:return null}}convertTimestamp(e){const t=Qi(e);return new Rt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=st.fromString(e);We(kS(r));const s=new lu(r.get(1),r.get(3)),a=new fe(r.popFirst(5));return s.isEqual(t)||oi(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function pC(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Vl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mC extends dC{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new uh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(fC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class uh extends mC{data(e={}){return super.data(e)}}class sM{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Vl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new uh(this._firestore,this._userDataWriter,r.key,r,new Vl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(d=>{const f=new uh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Vl(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const f=new uh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Vl(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,v=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:oM(d.type),doc:f,oldIndex:m,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function oM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee()}}/**
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
 */function Og(n){n=Zi(n,kn);const e=Zi(n.firestore,Au);return $L(Rg(e),n._key).then(t=>cM(e,n,t))}class gC extends iM{constructor(e){super(),this.firestore=e}convertBytes(e){return new ya(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new kn(this.firestore,null,t)}}function aM(n){n=Zi(n,Td);const e=Zi(n.firestore,Au),t=Rg(e),r=new gC(e);return rM(n._query),qL(t,n._query).then(s=>new sM(e,r,n,s))}function lM(n,e,t){n=Zi(n,kn);const r=Zi(n.firestore,Au),s=pC(n.converter,e);return _C(r,[oC(sC(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ar.none())])}function uM(n,e){const t=Zi(n.firestore,Au),r=fu(n),s=pC(n.converter,e);return _C(t,[oC(sC(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ar.exists(!1))]).then(()=>r)}function _C(n,e){return function(r,s){const a=new ti;return r.asyncQueue.enqueueAndForget(async()=>DL(await WL(r),s,a)),a.promise}(Rg(n),e)}function cM(n,e,t){const r=t.docs.get(e._key),s=new gC(n);return new mC(n,s,e._key,r,new Vl(t.hasPendingWrites,t.fromCache),e.converter)}function hM(){return new Dg("serverTimestamp")}(function(e,t=!0){(function(s){Aa=s})(Ks),ar(new zn("firestore",(r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Au(new iO(r.getProvider("auth-internal")),new lO(r.getProvider("app-check-internal")),function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new ue(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lu(m.options.projectId,v)}(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),gn(yE,"4.7.6",e),gn(yE,"4.7.6","esm2017")})();const dM={apiKey:"AIzaSyCJbpNARrIxdUTCGm2xgcQ_lUwZuZkURCQ",authDomain:"lufi-6bcbc.firebaseapp.com",databaseURL:"https://lufi-6bcbc-default-rtdb.firebaseio.com",projectId:"lufi-6bcbc",storageBucket:"lufi-6bcbc.appspot.com",messagingSenderId:"883059154331",appId:"1:883059154331:web:d05835d66525e26cf0553e",measurementId:"G-0S3E6V8ZT5"},Id=Tw(dM);kP(Id);const es=WN(Id),nw=ZD(Id),va=KL(Id),fM=({onLoginSuccess:n,goToSignup:e})=>{const[t,r]=Je.useState(""),[s,a]=Je.useState(""),[u,d]=Je.useState(""),f=async m=>{m.preventDefault();try{await kk(es,t,s),n()}catch{d("Invalid email or password. Please try again.")}};return X.jsxs("div",{className:"login-container",children:[X.jsx("h1",{children:"Login"}),X.jsxs("form",{onSubmit:f,children:[X.jsxs("div",{className:"form-group",children:[X.jsx("h2",{children:"Email"}),X.jsx("label",{htmlFor:"email",children:"Enter your email:"}),X.jsx("input",{id:"email",type:"email",value:t,onChange:m=>r(m.target.value),required:!0})]}),X.jsxs("div",{className:"form-group",children:[X.jsx("h2",{children:"Password"}),X.jsx("label",{htmlFor:"password",children:"Enter your password:"}),X.jsx("input",{id:"password",type:"password",value:s,onChange:m=>a(m.target.value),required:!0})]}),u&&X.jsx("p",{className:"error",children:u}),X.jsx("button",{type:"submit",className:"login-button",children:"Login"})]}),X.jsx("button",{className:"signup-button",onClick:e,children:"Go To Sign Up Page"})]})},pM=({onSignupComplete:n,goToLogin:e})=>{const[t,r]=Je.useState(Array(10).fill("")),s=Je.useRef(null),a=(f,m)=>{if(/^\d?$/.test(m)){const v=[...t];v[f]=m,r(v)}},u=f=>{const m=f.target.value.replace(/\D/g,"");if(m.length>=10){const v=m.slice(-10).split("");r(v)}},d=async()=>{const f=`(${t.slice(0,3).join("")}) ${t.slice(3,6).join("")}-${t.slice(6).join("")}`;if(t.every(m=>m!==""))try{await uM(rC(va,"subscribers"),{phoneNumber:f}),alert(`Phone number ${f} has been submitted!`),n()}catch(m){console.error("Error saving phone number:",m.message),alert("Failed to save phone number. Please try again.")}else alert("Please complete the phone number.")};return X.jsxs("div",{className:"signup-container",children:[X.jsx("h1",{children:"Lucidus Fidelis Alerts"}),X.jsx("p",{children:"Enter your phone number to receive new updates and daily deals:"}),X.jsx("input",{type:"tel",className:"hidden-phone-input",ref:s,autoComplete:"tel",onInput:u,placeholder:"Enter phone number"}),X.jsxs("div",{className:"phone-number-container",children:[X.jsxs("div",{className:"area-code-container",children:[X.jsx("label",{className:"area-code-label",children:"Area Code"}),X.jsxs("div",{className:"area-code-input",children:[X.jsx("span",{className:"phone-area-code",children:"("}),t.slice(0,3).map((f,m)=>X.jsx("input",{className:"phone-box",type:"text",value:f||"",maxLength:1,onChange:v=>a(m,v.target.value),onFocus:()=>s.current.focus()},m)),X.jsx("span",{className:"phone-area-code",children:")"})]})]}),X.jsxs("div",{className:"rest-of-number-container",children:[t.slice(3,6).map((f,m)=>X.jsx("input",{className:"phone-box",type:"text",value:f||"",maxLength:1,onChange:v=>a(m+3,v.target.value),onFocus:()=>s.current.focus()},m+3)),X.jsx("span",{className:"phone-hyphen",children:"-"}),t.slice(6).map((f,m)=>X.jsx("input",{className:"phone-box",type:"text",value:f||"",maxLength:1,onChange:v=>a(m+6,v.target.value),onFocus:()=>s.current.focus()},m+6))]})]}),X.jsx("button",{className:"signup-button",onClick:d,children:"Sign Up"}),X.jsx("div",{className:"link-container",children:X.jsx("button",{className:"login-link",onClick:e,children:"Go to Login Page"})})]})};var yC={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rw=Fs.createContext&&Fs.createContext(yC),mM=["attr","size","title"];function gM(n,e){if(n==null)return{};var t=_M(n,e),r,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function _M(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function Wh(){return Wh=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Wh.apply(this,arguments)}function iw(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function $h(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?iw(Object(t),!0).forEach(function(r){yM(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):iw(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function yM(n,e,t){return e=vM(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function vM(n){var e=EM(n,"string");return typeof e=="symbol"?e:e+""}function EM(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function vC(n){return n&&n.map((e,t)=>Fs.createElement(e.tag,$h({key:t},e.attr),vC(e.child)))}function Sd(n){return e=>Fs.createElement(wM,Wh({attr:$h({},n.attr)},e),vC(n.child))}function wM(n){var e=t=>{var{attr:r,size:s,title:a}=n,u=gM(n,mM),d=s||t.size||"1em",f;return t.className&&(f=t.className),n.className&&(f=(f?f+" ":"")+n.className),Fs.createElement("svg",Wh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:f,style:$h($h({color:n.color||t.color},t.style),n.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&Fs.createElement("title",null,a),n.children)};return rw!==void 0?Fs.createElement(rw.Consumer,null,t=>e(t)):e(yC)}function TM(n){return Sd({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function IM(n){return Sd({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(n)}function SM(n){return Sd({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(n)}function CM(n){return Sd({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(n)}const RM=({goToProfile:n,goToChat:e,onLogout:t,goToSignup:r})=>{const[s,a]=Je.useState(""),[u,d]=Je.useState([]);Je.useEffect(()=>{(async()=>{const v=es.currentUser;if(v)try{const w=await Og(fu(va,"users",v.uid));if(w.exists()){const I=w.data();a(I.firstName||"User")}else a(v.displayName||"User")}catch(w){console.error("Error fetching user data:",w.message),a("User")}})()},[]),Je.useEffect(()=>{(async()=>{try{const w=(await aM(rC(va,"subscribers"))).docs.map(I=>I.data().phoneNumber);d(w)}catch(v){console.error("Error fetching subscribers:",v.message)}})()},[]);const f=()=>{_T(es).then(()=>{console.log("User logged out successfully."),t()}).catch(m=>{console.error("Error during logout:",m.message)})};return X.jsxs("div",{className:"main-container",children:[X.jsxs("div",{className:"user-info",children:[X.jsxs("p",{children:["Welcome, ",s,"!"]}),X.jsx(CM,{className:"profile-icon",onClick:n,title:"Go to Profile"})]}),X.jsxs("div",{className:"composer-section",children:[X.jsx("h1",{children:"Admin Page: Lucidus Fidelis"}),X.jsx("textarea",{className:"message-box",placeholder:"Write your message here..."}),X.jsx("button",{className:"send-button",children:"Send Message"})]}),X.jsxs("div",{className:"dummy-numbers-section",children:[X.jsx("h2",{children:"Subscribers"}),X.jsx("ul",{className:"dummy-numbers",children:u.length>0?u.map((m,v)=>X.jsx("li",{children:m},v)):X.jsx("p",{children:"No subscribers yet."})})]}),X.jsxs("div",{className:"chat-link-container",children:[X.jsx("button",{className:"chat-link",onClick:e,children:"Chat"}),X.jsx("button",{className:"logout-button",onClick:f,children:"Logout"}),X.jsx("button",{className:"signup-button",onClick:r,children:"Go To Sign Up Page"})]})]})},AM=({goToAdmin:n})=>{const[e,t]=Je.useState([]),[r,s]=Je.useState(""),[a,u]=Je.useState({}),[d,f]=Je.useState(null);Je.useEffect(()=>{(async()=>{const I=es.currentUser;if(I)try{const N=await Og(fu(va,"users",I.uid));if(N.exists()){const j=N.data();u({uid:I.uid,name:j.firstName||I.email})}else u({uid:I.uid,name:I.email})}catch(N){console.error("Error fetching user data:",N.message)}})()},[]),Je.useEffect(()=>{const w=gE(nw,"messages");qD(w,I=>{const N=I.val(),j=N?Object.entries(N).map(([W,B])=>({id:W,...B})):[];t(j)})},[]);const m=()=>{if(r.trim()||d){const w=gE(nw,"messages");BD(w,{text:r||"File attached",fileUrl:d||null,timestamp:Date.now(),sender:a.name}),s(""),f(null)}},v=w=>{const I=w.target.files[0];I&&f(I.name)};return X.jsxs("div",{className:"chat-container",children:[X.jsx(TM,{className:"back-icon",onClick:n}),X.jsx("div",{className:"chat-box",children:e.length>0?e.map(w=>X.jsxs("div",{className:`chat-message ${w.sender===a.name?"own-message":""}`,children:[X.jsx("p",{className:"sender-name",children:w.sender||"Anonymous"}),X.jsx("p",{className:"message-text",children:w.text}),w.fileUrl&&X.jsx("p",{className:"file-attachment",children:X.jsx("a",{href:w.fileUrl,target:"_blank",rel:"noopener noreferrer",children:"View attachment"})})]},w.id)):X.jsx("p",{className:"no-messages",children:"No messages yet. Start chatting!"})}),X.jsx("div",{className:"chat-footer",children:X.jsxs("div",{className:"chat-input-container",children:[X.jsx("label",{htmlFor:"file-upload",className:"upload-icon",children:X.jsx(SM,{})}),X.jsx("input",{id:"file-upload",type:"file",style:{display:"none"},onChange:v}),X.jsx("input",{type:"text",className:"chat-input",placeholder:"Type a message...",value:r,onChange:w=>s(w.target.value),onKeyPress:w=>w.key==="Enter"&&m()}),X.jsx(IM,{className:"send-icon",onClick:m})]})})]})},PM=({goToMainScreen:n})=>{const[e,t]=Je.useState(""),[r,s]=Je.useState(""),[a,u]=Je.useState(""),[d,f]=Je.useState(""),[m,v]=Je.useState("");Je.useEffect(()=>{(async()=>{const N=es.currentUser;if(N)try{const j=await Og(fu(va,"users",N.uid));if(j.exists()){const W=j.data();t(W.firstName||""),s(W.lastName||""),u(N.email||"")}else console.log("No user data found in Firestore.")}catch(j){console.error("Error fetching user data:",j.message)}})()},[]);const w=async()=>{const I=es.currentUser;if(I)try{await lM(fu(va,"users",I.uid),{firstName:e,lastName:r,email:a,createdAt:hM()}),f("Profile updated successfully!"),v("")}catch(N){v("Failed to update profile: "+N.message),f("")}else v("No user is logged in.")};return X.jsxs("div",{style:{padding:"20px"},children:[X.jsx("h1",{children:"Profile Page"}),X.jsxs("div",{children:[X.jsx("label",{children:"First Name:"}),X.jsx("input",{type:"text",value:e,onChange:I=>t(I.target.value),style:{marginBottom:"10px",padding:"10px",width:"100%",backgroundColor:"#f9f9f9",border:"1px solid #ccc",color:"#000"}})]}),X.jsxs("div",{children:[X.jsx("label",{children:"Last Name:"}),X.jsx("input",{type:"text",value:r,onChange:I=>s(I.target.value),style:{marginBottom:"10px",padding:"10px",width:"100%",backgroundColor:"#f9f9f9",border:"1px solid #ccc",color:"#000"}})]}),X.jsxs("div",{children:[X.jsx("label",{children:"Email:"}),X.jsx("input",{type:"email",value:a,readOnly:!0,style:{marginBottom:"20px",padding:"10px",width:"100%",backgroundColor:"#e9ecef",border:"1px solid #ccc",color:"#000"}})]}),X.jsx("button",{onClick:w,style:{padding:"10px 20px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",marginRight:"10px"},children:"Save"}),X.jsx("button",{onClick:n,style:{padding:"10px 20px",backgroundColor:"#6c757d",color:"white",border:"none",borderRadius:"5px"},children:"Back to Main Screen"}),d&&X.jsx("p",{style:{color:"green"},children:d}),m&&X.jsx("p",{style:{color:"red"},children:m})]})},kM=()=>{const[n,e]=Je.useState(!1),[t,r]=Je.useState("signup");Je.useEffect(()=>{const a=Dk(es,u=>{u?(e(!0),r("admin")):(e(!1),r("signup"))});return()=>a()},[]);const s=()=>{_T(es).then(()=>{e(!1),r("login")})};return X.jsxs(X.Fragment,{children:[t==="login"&&X.jsx(fM,{onLoginSuccess:()=>r("admin"),goToSignup:()=>r("signup")}),t==="signup"&&X.jsx(pM,{onSignupComplete:()=>r("admin"),goToAdmin:()=>r("admin"),goToLogin:()=>r("login")}),t==="admin"&&X.jsx(RM,{goToChat:()=>r("chat"),goToProfile:()=>r("profile"),onLogout:s,goToSignup:()=>r("signup")}),t==="chat"&&X.jsx(AM,{goToAdmin:()=>r("admin")}),t==="profile"&&X.jsx(PM,{goToMainScreen:()=>r("admin"),goToSignupPage:()=>r("signup")})]})};xR.createRoot(document.getElementById("root")).render(X.jsx(Je.StrictMode,{children:X.jsx(kM,{})}));
