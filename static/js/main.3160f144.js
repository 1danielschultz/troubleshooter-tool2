/*! For license information please see main.3160f144.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),o=n(43),i=n(950);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(l(e)!==e)throw Error(a(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var p=Object.assign,f=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),T=Symbol.for("react.lazy");Symbol.for("react.scope");var j=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var A=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var _=Symbol.iterator;function P(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=_&&e[_]||e["@@iterator"])?e:null}var N=Symbol.for("react.client.reference");function R(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===N?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case y:return"Profiler";case v:return"StrictMode";case S:return"Suspense";case C:return"SuspenseList";case j:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case E:return null!==(t=e.displayName||null)?t:R(e.type)||"Memo";case T:t=e._payload,e=e._init;try{return R(e(t))}catch(n){}}return null}var O=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},F=[],L=-1;function B(e){return{current:e}}function q(e){0>L||(e.current=F[L],F[L]=null,L--)}function U(e,t){L++,F[L]=e.current,e.current=t}var $=B(null),M=B(null),Q=B(null),H=B(null);function W(e,t){switch(U(Q,t),U(M,e),U($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?od(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=id(t=od(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q($),U($,e)}function K(){q($),q(M),q(Q)}function V(e){null!==e.memoizedState&&U(H,e);var t=$.current,n=id(t,e.type);t!==n&&(U(M,e),U($,n))}function Y(e){M.current===e&&(q($),q(M)),H.current===e&&(q(H),Vd._currentValue=z)}var G=Object.prototype.hasOwnProperty,J=r.unstable_scheduleCallback,X=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,oe=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,ae=r.unstable_LowPriority,se=r.unstable_IdlePriority,le=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function pe(e){if("function"===typeof le&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var fe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(he(e)/me|0)|0},he=Math.log,me=Math.LN2;var ge=256,ve=4194304;function ye(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function be(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~i)?o=ye(r):0!==(a&=s)?o=ye(a):n||0!==(n=s&~e)&&(o=ye(n)):0!==(s=r&~i)?o=ye(s):0!==a?o=ye(a):n||0!==(n=r&~e)&&(o=ye(n)),0===o?0:0!==t&&t!==o&&0===(t&i)&&((i=o&-o)>=(n=t&-t)||32===i&&0!==(4194048&n))?t:o}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ke(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function Se(){var e=ve;return 0===(62914560&(ve<<=1))&&(ve=4194304),e}function Ce(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ee(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Te(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-fe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function je(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-fe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function Ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _e(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Pe(){var e=I.p;return 0!==e?e:void 0===(e=window.event)?32:cp(e.type)}var Ne=Math.random().toString(36).slice(2),Re="__reactFiber$"+Ne,Oe="__reactProps$"+Ne,De="__reactContainer$"+Ne,Ie="__reactEvents$"+Ne,ze="__reactListeners$"+Ne,Fe="__reactHandles$"+Ne,Le="__reactResources$"+Ne,Be="__reactMarker$"+Ne;function qe(e){delete e[Re],delete e[Oe],delete e[Ie],delete e[ze],delete e[Fe]}function Ue(e){var t=e[Re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[De]||n[Re]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=bd(e);null!==e;){if(n=e[Re])return n;e=bd(e)}return t}n=(e=n).parentNode}return null}function $e(e){if(e=e[Re]||e[De]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Me(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(a(33))}function Qe(e){var t=e[Le];return t||(t=e[Le]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[Be]=!0}var We=new Set,Ke={};function Ve(e,t){Ye(e,t),Ye(e+"Capture",t)}function Ye(e,t){for(Ke[e]=t,e=0;e<t.length;e++)We.add(t[e])}var Ge,Je,Xe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(o=t,G.call(et,o)||!G.call(Ze,o)&&(Xe.test(o)?et[o]=!0:(Ze[o]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var o}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ot(e){if(void 0===Ge)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ge=t&&t[1]||"",Je=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Ge+e+Je}var it=!1;function at(e,t){if(!e||it)return"";it=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(o){var r=o}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(a){r=a}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),a=i[0],s=i[1];if(a&&s){var l=a.split("\n"),c=s.split("\n");for(o=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;o<c.length&&!c[o].includes("DetermineComponentFrameRoot");)o++;if(r===l.length||o===c.length)for(r=l.length-1,o=c.length-1;1<=r&&0<=o&&l[r]!==c[o];)o--;for(;1<=r&&0<=o;r--,o--)if(l[r]!==c[o]){if(1!==r||1!==o)do{if(r--,0>--o||l[r]!==c[o]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=o);break}}}finally{it=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ot(n):""}function st(e){switch(e.tag){case 26:case 27:case 5:return ot(e.type);case 16:return ot("Lazy");case 13:return ot("Suspense");case 19:return ot("SuspenseList");case 0:case 15:return at(e.type,!1);case 11:return at(e.type.render,!1);case 1:return at(e.type,!0);case 31:return ot("Activity");default:return""}}function lt(e){try{var t="";do{t+=st(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ft(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function mt(e){return e.replace(ht,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,r,o,i,a,s){e.name="",null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a?e.type=a:e.removeAttribute("type"),null!=t?"number"===a?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==a&&"reset"!==a||e.removeAttribute("value"),null!=t?yt(e,a,ct(t)):null!=n?yt(e,a,ct(n)):null!=r&&e.removeAttribute("value"),null==o&&null!=i&&(e.defaultChecked=!!i),null!=o&&(e.checked=o&&"function"!==typeof o&&"symbol"!==typeof o),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ct(s):e.removeAttribute("name")}function vt(e,t,n,r,o,i,a,s){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:o)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.name=a)}function yt(e,t,n){"number"===t&&ft(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(a(92));if(O(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ct(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||St.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Et(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(a(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&Ct(e,o,r)}else for(var i in t)t.hasOwnProperty(i)&&Ct(e,i,t[i])}function Tt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),At=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _t(e){return At.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Pt=null;function Nt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Rt=null,Ot=null;function Dt(e){var t=$e(e);if(t&&(e=t.stateNode)){var n=e[Oe]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[Oe]||null;if(!o)throw Error(a(90));gt(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&pt(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var It=!1;function zt(e,t,n){if(It)return e(t,n);It=!0;try{return e(t)}finally{if(It=!1,(null!==Rt||null!==Ot)&&(Uc(),Rt&&(t=Rt,e=Ot,Ot=Rt=null,Dt(t),e)))for(t=0;t<e.length;t++)Dt(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Oe]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Lt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Bt=!1;if(Lt)try{var qt={};Object.defineProperty(qt,"passive",{get:function(){Bt=!0}}),window.addEventListener("test",qt,qt),window.removeEventListener("test",qt,qt)}catch(Op){Bt=!1}var Ut=null,$t=null,Mt=null;function Qt(){if(Mt)return Mt;var e,t,n=$t,r=n.length,o="value"in Ut?Ut.value:Ut.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Mt=o.slice(e,1<t?1-t:void 0)}function Ht(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Wt(){return!0}function Kt(){return!1}function Vt(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?Wt:Kt,this.isPropagationStopped=Kt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Wt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Wt)},persist:function(){},isPersistent:Wt}),t}var Yt,Gt,Jt,Xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Vt(Xt),en=p({},Xt,{view:0,detail:0}),tn=Vt(en),nn=p({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jt&&(Jt&&"mousemove"===e.type?(Yt=e.screenX-Jt.screenX,Gt=e.screenY-Jt.screenY):Gt=Yt=0,Jt=e),Yt)},movementY:function(e){return"movementY"in e?e.movementY:Gt}}),rn=Vt(nn),on=Vt(p({},nn,{dataTransfer:0})),an=Vt(p({},en,{relatedTarget:0})),sn=Vt(p({},Xt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=Vt(p({},Xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=Vt(p({},Xt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=pn[e])&&!!t[e]}function hn(){return fn}var mn=Vt(p({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Ht(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hn,charCode:function(e){return"keypress"===e.type?Ht(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Ht(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=Vt(p({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),vn=Vt(p({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hn})),yn=Vt(p({},Xt,{propertyName:0,elapsedTime:0,pseudoElement:0})),bn=Vt(p({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=Vt(p({},Xt,{newState:0,oldState:0})),wn=[9,13,27,32],kn=Lt&&"CompositionEvent"in window,Sn=null;Lt&&"documentMode"in document&&(Sn=document.documentMode);var Cn=Lt&&"TextEvent"in window&&!Sn,En=Lt&&(!kn||Sn&&8<Sn&&11>=Sn),Tn=String.fromCharCode(32),jn=!1;function An(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _n(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Pn=!1;var Nn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Nn[e.type]:"textarea"===t}function On(e,t,n,r){Rt?Ot?Ot.push(r):Ot=[r]:Rt=r,0<(t=Qu(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,In=null;function zn(e){zu(e,0)}function Fn(e){if(pt(Me(e)))return e}function Ln(e,t){if("change"===e)return t}var Bn=!1;if(Lt){var qn;if(Lt){var Un="oninput"in document;if(!Un){var $n=document.createElement("div");$n.setAttribute("oninput","return;"),Un="function"===typeof $n.oninput}qn=Un}else qn=!1;Bn=qn&&(!document.documentMode||9<document.documentMode)}function Mn(){Dn&&(Dn.detachEvent("onpropertychange",Qn),In=Dn=null)}function Qn(e){if("value"===e.propertyName&&Fn(In)){var t=[];On(t,In,e,Nt(e)),zt(zn,t)}}function Hn(e,t,n){"focusin"===e?(Mn(),In=n,(Dn=t).attachEvent("onpropertychange",Qn)):"focusout"===e&&Mn()}function Wn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(In)}function Kn(e,t){if("click"===e)return Fn(t)}function Vn(e,t){if("input"===e||"change"===e)return Fn(t)}var Yn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Gn(e,t){if(Yn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!G.call(t,o)||!Yn(e[o],t[o]))return!1}return!0}function Jn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xn(e,t){var n,r=Jn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Jn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=ft((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ft((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Lt&&"documentMode"in document&&11>=document.documentMode,rr=null,or=null,ir=null,ar=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ar||null==rr||rr!==ft(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ir&&Gn(ir,r)||(ir=r,0<(r=Qu(or,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},ur={},dr={};function pr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}Lt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var fr=pr("animationend"),hr=pr("animationiteration"),mr=pr("animationstart"),gr=pr("transitionrun"),vr=pr("transitionstart"),yr=pr("transitioncancel"),br=pr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){xr.set(e,t),Ve(t,[e])}wr.push("scrollEnd");var Sr=new WeakMap;function Cr(e,t){if("object"===typeof e&&null!==e){var n=Sr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:lt(t)},Sr.set(e,t),t)}return{value:e,source:t,stack:lt(t)}}var Er=[],Tr=0,jr=0;function Ar(){for(var e=Tr,t=jr=Tr=0;t<e;){var n=Er[t];Er[t++]=null;var r=Er[t];Er[t++]=null;var o=Er[t];Er[t++]=null;var i=Er[t];if(Er[t++]=null,null!==r&&null!==o){var a=r.pending;null===a?o.next=o:(o.next=a.next,a.next=o),r.pending=o}0!==i&&Rr(n,o,i)}}function _r(e,t,n,r){Er[Tr++]=e,Er[Tr++]=t,Er[Tr++]=n,Er[Tr++]=r,jr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Pr(e,t,n,r){return _r(e,t,n,r),Or(e)}function Nr(e,t){return _r(e,null,null,t),Or(e)}function Rr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var o=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(o=!0)),e=i,i=i.return;return 3===e.tag?(i=e.stateNode,o&&null!==t&&(o=31-fe(n),null===(r=(e=i.hiddenUpdates)[o])?e[o]=[t]:r.push(t),t.lane=536870912|n),i):null}function Or(e){if(50<Rc)throw Rc=0,Oc=null,Error(a(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Dr={};function Ir(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zr(e,t,n,r){return new Ir(e,t,n,r)}function Fr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lr(e,t){var n=e.alternate;return null===n?((n=zr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Br(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function qr(e,t,n,r,o,i){var s=0;if(r=e,"function"===typeof e)Fr(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,$.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case j:return(e=zr(31,n,t,o)).elementType=j,e.lanes=i,e;case g:return Ur(n.children,o,i,t);case v:s=8,o|=24;break;case y:return(e=zr(12,n,t,2|o)).elementType=y,e.lanes=i,e;case S:return(e=zr(13,n,t,o)).elementType=S,e.lanes=i,e;case C:return(e=zr(19,n,t,o)).elementType=C,e.lanes=i,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case b:case w:s=10;break e;case x:s=9;break e;case k:s=11;break e;case E:s=14;break e;case T:s=16,r=null;break e}s=29,n=Error(a(130,null===e?"null":typeof e,"")),r=null}return(t=zr(s,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Ur(e,t,n,r){return(e=zr(7,e,r,t)).lanes=n,e}function $r(e,t,n){return(e=zr(6,e,null,t)).lanes=n,e}function Mr(e,t,n){return(t=zr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qr=[],Hr=0,Wr=null,Kr=0,Vr=[],Yr=0,Gr=null,Jr=1,Xr="";function Zr(e,t){Qr[Hr++]=Kr,Qr[Hr++]=Wr,Wr=e,Kr=t}function eo(e,t,n){Vr[Yr++]=Jr,Vr[Yr++]=Xr,Vr[Yr++]=Gr,Gr=e;var r=Jr;e=Xr;var o=32-fe(r)-1;r&=~(1<<o),n+=1;var i=32-fe(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Jr=1<<32-fe(t)+o|n<<o|r,Xr=i+e}else Jr=1<<i|n<<o|r,Xr=e}function to(e){null!==e.return&&(Zr(e,1),eo(e,1,0))}function no(e){for(;e===Wr;)Wr=Qr[--Hr],Qr[Hr]=null,Kr=Qr[--Hr],Qr[Hr]=null;for(;e===Gr;)Gr=Vr[--Yr],Vr[Yr]=null,Xr=Vr[--Yr],Vr[Yr]=null,Jr=Vr[--Yr],Vr[Yr]=null}var ro=null,oo=null,io=!1,ao=null,so=!1,lo=Error(a(519));function co(e){throw go(Cr(Error(a(418,"")),e)),lo}function uo(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Re]=e,t[Oe]=r,n){case"dialog":Fu("cancel",t),Fu("close",t);break;case"iframe":case"object":case"embed":Fu("load",t);break;case"video":case"audio":for(n=0;n<Du.length;n++)Fu(Du[n],t);break;case"source":Fu("error",t);break;case"img":case"image":case"link":Fu("error",t),Fu("load",t);break;case"details":Fu("toggle",t);break;case"input":Fu("invalid",t),vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Fu("invalid",t);break;case"textarea":Fu("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Gu(t.textContent,n)?(null!=r.popover&&(Fu("beforetoggle",t),Fu("toggle",t)),null!=r.onScroll&&Fu("scroll",t),null!=r.onScrollEnd&&Fu("scrollend",t),null!=r.onClick&&(t.onclick=Ju),t=!0):t=!1,t||co(e)}function po(e){for(ro=e.return;ro;)switch(ro.tag){case 5:case 13:return void(so=!1);case 27:case 3:return void(so=!0);default:ro=ro.return}}function fo(e){if(e!==ro)return!1;if(!io)return po(e),io=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||ad(e.type,e.memoizedProps)),t=!t),t&&oo&&co(e),po(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){oo=vd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}oo=null}}else 27===n?(n=oo,fd(e.type)?(e=yd,yd=null,oo=e):oo=n):oo=ro?vd(e.stateNode.nextSibling):null;return!0}function ho(){oo=ro=null,io=!1}function mo(){var e=ao;return null!==e&&(null===bc?bc=e:bc.push.apply(bc,e),ao=null),e}function go(e){null===ao?ao=[e]:ao.push(e)}var vo=B(null),yo=null,bo=null;function xo(e,t,n){U(vo,t._currentValue),t._currentValue=n}function wo(e){e._currentValue=vo.current,q(vo)}function ko(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function So(e,t,n,r){var o=e.child;for(null!==o&&(o.return=e);null!==o;){var i=o.dependencies;if(null!==i){var s=o.child;i=i.firstContext;e:for(;null!==i;){var l=i;i=o;for(var c=0;c<t.length;c++)if(l.context===t[c]){i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),ko(i.return,n,e),r||(s=null);break e}i=l.next}}else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=n,null!==(i=s.alternate)&&(i.lanes|=n),ko(s,n,e),s=null}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===e){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}}function Co(e,t,n,r){e=null;for(var o=t,i=!1;null!==o;){if(!i)if(0!==(524288&o.flags))i=!0;else if(0!==(262144&o.flags))break;if(10===o.tag){var s=o.alternate;if(null===s)throw Error(a(387));if(null!==(s=s.memoizedProps)){var l=o.type;Yn(o.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(o===H.current){if(null===(s=o.alternate))throw Error(a(387));s.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(null!==e?e.push(Vd):e=[Vd])}o=o.return}null!==e&&So(t,e,n,r),t.flags|=262144}function Eo(e){for(e=e.firstContext;null!==e;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function To(e){yo=e,bo=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function jo(e){return _o(yo,e)}function Ao(e,t){return null===yo&&To(e),_o(e,t)}function _o(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===bo){if(null===e)throw Error(a(308));bo=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else bo=bo.next=t;return n}var Po="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},No=r.unstable_scheduleCallback,Ro=r.unstable_NormalPriority,Oo={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Do(){return{controller:new Po,data:new Map,refCount:0}}function Io(e){e.refCount--,0===e.refCount&&No(Ro,(function(){e.controller.abort()}))}var zo=null,Fo=0,Lo=0,Bo=null;function qo(){if(0===--Fo&&null!==zo){null!==Bo&&(Bo.status="fulfilled");var e=zo;zo=null,Lo=0,Bo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Uo=D.S;D.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===zo){var n=zo=[];Fo=0,Lo=_u(),Bo={status:"pending",value:void 0,then:function(e){n.push(e)}}}Fo++,t.then(qo,qo)}(0,t),null!==Uo&&Uo(e,t)};var $o=B(null);function Mo(){var e=$o.current;return null!==e?e:rc.pooledCache}function Qo(e,t){U($o,null===t?$o.current:t.pool)}function Ho(){var e=Mo();return null===e?null:{parent:Oo._currentValue,pool:e}}var Wo=Error(a(460)),Ko=Error(a(474)),Vo=Error(a(542)),Yo={then:function(){}};function Go(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Jo(){}function Xo(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Jo,Jo),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ti(e=t.reason),e;default:if("string"===typeof t.status)t.then(Jo,Jo);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(a(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ti(e=t.reason),e}throw Zo=t,Wo}}var Zo=null;function ei(){if(null===Zo)throw Error(a(459));var e=Zo;return Zo=null,e}function ti(e){if(e===Wo||e===Vo)throw Error(a(483))}var ni=!1;function ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ii(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ai(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,t=Or(e),Rr(e,null,n),t}return _r(e,r,t,n),Or(e)}function si(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,je(e,n)}}function li(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ci=!1;function ui(){if(ci){if(null!==Bo)throw Bo}}function di(e,t,n,r){ci=!1;var o=e.updateQueue;ni=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?i=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==i){var d=o.baseState;for(a=0,u=c=l=null,s=i;;){var f=-536870913&s.lane,h=f!==s.lane;if(h?(ic&f)===f:(r&f)===f){0!==f&&f===Lo&&(ci=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var m=e,g=s;f=t;var v=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(v,d,f);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(f="function"===typeof(m=g.payload)?m.call(v,d,f):m)||void 0===f)break e;d=p({},d,f);break e;case 2:ni=!0}}null!==(f=s.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=o.callbacks)?o.callbacks=[f]:h.push(f))}else h={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,a|=f;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(h=s).next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}null===u&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null===i&&(o.shared.lanes=0),fc|=a,e.lanes=a,e.memoizedState=d}}function pi(e,t){if("function"!==typeof e)throw Error(a(191,e));e.call(t)}function fi(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)pi(n[e],t)}var hi=B(null),mi=B(0);function gi(e,t){U(mi,e=dc),U(hi,t),dc=e|t.baseLanes}function vi(){U(mi,dc),U(hi,hi.current)}function yi(){dc=mi.current,q(hi),q(mi)}var bi=0,xi=null,wi=null,ki=null,Si=!1,Ci=!1,Ei=!1,Ti=0,ji=0,Ai=null,_i=0;function Pi(){throw Error(a(321))}function Ni(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yn(e[n],t[n]))return!1;return!0}function Ri(e,t,n,r,o,i){return bi=i,xi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=null===e||null===e.memoizedState?Wa:Ka,Ei=!1,i=n(r,o),Ei=!1,Ci&&(i=Di(t,n,r,o)),Oi(e),i}function Oi(e){D.H=Ha;var t=null!==wi&&null!==wi.next;if(bi=0,ki=wi=xi=null,Si=!1,ji=0,Ai=null,t)throw Error(a(300));null===e||js||null!==(e=e.dependencies)&&Eo(e)&&(js=!0)}function Di(e,t,n,r){xi=e;var o=0;do{if(Ci&&(Ai=null),ji=0,Ci=!1,25<=o)throw Error(a(301));if(o+=1,ki=wi=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}D.H=Va,i=t(n,r)}while(Ci);return i}function Ii(){var e=D.H,t=e.useState()[0];return t="function"===typeof t.then?Ui(t):t,e=e.useState()[0],(null!==wi?wi.memoizedState:null)!==e&&(xi.flags|=1024),t}function zi(){var e=0!==Ti;return Ti=0,e}function Fi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Li(e){if(Si){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Si=!1}bi=0,ki=wi=xi=null,Ci=!1,ji=Ti=0,Ai=null}function Bi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ki?xi.memoizedState=ki=e:ki=ki.next=e,ki}function qi(){if(null===wi){var e=xi.alternate;e=null!==e?e.memoizedState:null}else e=wi.next;var t=null===ki?xi.memoizedState:ki.next;if(null!==t)ki=t,wi=e;else{if(null===e){if(null===xi.alternate)throw Error(a(467));throw Error(a(310))}e={memoizedState:(wi=e).memoizedState,baseState:wi.baseState,baseQueue:wi.baseQueue,queue:wi.queue,next:null},null===ki?xi.memoizedState=ki=e:ki=ki.next=e}return ki}function Ui(e){var t=ji;return ji+=1,null===Ai&&(Ai=[]),e=Xo(Ai,e,t),t=xi,null===(null===ki?t.memoizedState:ki.next)&&(t=t.alternate,D.H=null===t||null===t.memoizedState?Wa:Ka),e}function $i(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Ui(e);if(e.$$typeof===w)return jo(e)}throw Error(a(438,String(e)))}function Mi(e){var t=null,n=xi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=xi.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function Qi(e,t){return"function"===typeof t?t(e):t}function Hi(e){return Wi(qi(),wi,e)}function Wi(e,t,n){var r=e.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=n;var o=e.baseQueue,i=r.pending;if(null!==i){if(null!==o){var s=o.next;o.next=i.next,i.next=s}t.baseQueue=o=i,r.pending=null}if(i=e.baseState,null===o)e.memoizedState=i;else{var l=s=null,c=null,u=t=o.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(ic&p)===p:(bi&p)===p){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Lo&&(d=!0);else{if((bi&f)===f){u=u.next,f===Lo&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,s=i):c=c.next=p,xi.lanes|=f,fc|=f}p=u.action,Ei&&n(i,p),i=u.hasEagerState?u.eagerState:n(i,p)}else f={lane:p,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=f,s=i):c=c.next=f,xi.lanes|=p,fc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?s=i:c.next=l,!Yn(i,e.memoizedState)&&(js=!0,d&&null!==(n=Bo)))throw n;e.memoizedState=i,e.baseState=s,e.baseQueue=c,r.lastRenderedState=i}return null===o&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ki(e){var t=qi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var s=o=o.next;do{i=e(i,s.action),s=s.next}while(s!==o);Yn(i,t.memoizedState)||(js=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Vi(e,t,n){var r=xi,o=qi(),i=io;if(i){if(void 0===n)throw Error(a(407));n=n()}else n=t();var s=!Yn((wi||o).memoizedState,n);if(s&&(o.memoizedState=n,js=!0),o=o.queue,va(2048,8,Ji.bind(null,r,o,e),[e]),o.getSnapshot!==t||s||null!==ki&&1&ki.memoizedState.tag){if(r.flags|=2048,ha(9,{destroy:void 0,resource:void 0},Gi.bind(null,r,o,n,t),null),null===rc)throw Error(a(349));i||0!==(124&bi)||Yi(r,t,n)}return n}function Yi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Gi(e,t,n,r){t.value=n,t.getSnapshot=r,Xi(t)&&Zi(e)}function Ji(e,t,n){return n((function(){Xi(t)&&Zi(e)}))}function Xi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yn(e,n)}catch(r){return!0}}function Zi(e){var t=Nr(e,2);null!==t&&zc(t,e,2)}function ea(e){var t=Bi();if("function"===typeof e){var n=e;if(e=n(),Ei){pe(!0);try{n()}finally{pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},t}function ta(e,t,n,r){return e.baseState=n,Wi(e,wi,"function"===typeof r?r:Qi)}function na(e,t,n,r,o){if($a(e))throw Error(a(485));if(null!==(e=t.action)){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==D.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,ra(t,i)):(i.next=n.next,t.pending=n.next=i)}}function ra(e,t){var n=t.action,r=t.payload,o=e.state;if(t.isTransition){var i=D.T,a={};D.T=a;try{var s=n(o,r),l=D.S;null!==l&&l(a,s),oa(e,t,s)}catch(c){aa(e,t,c)}finally{D.T=i}}else try{oa(e,t,i=n(o,r))}catch(u){aa(e,t,u)}}function oa(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){ia(e,t,n)}),(function(n){return aa(e,t,n)})):ia(e,t,n)}function ia(e,t,n){t.status="fulfilled",t.value=n,sa(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ra(e,n)))}function aa(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,sa(t),t=t.next}while(t!==r)}e.action=null}function sa(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function la(e,t){return t}function ca(e,t){if(io){var n=rc.formState;if(null!==n){e:{var r=xi;if(io){if(oo){t:{for(var o=oo,i=so;8!==o.nodeType;){if(!i){o=null;break t}if(null===(o=vd(o.nextSibling))){o=null;break t}}o="F!"===(i=o.data)||"F"===i?o:null}if(o){oo=vd(o.nextSibling),r="F!"===o.data;break e}}co(r)}r=!1}r&&(t=n[0])}}return(n=Bi()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n.queue=r,n=Ba.bind(null,xi,r),r.dispatch=n,r=ea(!1),i=Ua.bind(null,xi,!1,r.queue),o={state:t,dispatch:null,action:e,pending:null},(r=Bi()).queue=o,n=na.bind(null,xi,o,i,n),o.dispatch=n,r.memoizedState=e,[t,n,!1]}function ua(e){return da(qi(),wi,e)}function da(e,t,n){if(t=Wi(e,t,la)[0],e=Hi(Qi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Ui(t)}catch(a){if(a===Wo)throw Vo;throw a}else r=t;var o=(t=qi()).queue,i=o.dispatch;return n!==t.memoizedState&&(xi.flags|=2048,ha(9,{destroy:void 0,resource:void 0},pa.bind(null,o,n),null)),[r,i,e]}function pa(e,t){e.action=t}function fa(e){var t=qi(),n=wi;if(null!==n)return da(t,n,e);qi(),t=t.memoizedState;var r=(n=qi()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ha(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=xi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ma(){return qi().memoizedState}function ga(e,t,n,r){var o=Bi();r=void 0===r?null:r,xi.flags|=e,o.memoizedState=ha(1|t,{destroy:void 0,resource:void 0},n,r)}function va(e,t,n,r){var o=qi();r=void 0===r?null:r;var i=o.memoizedState.inst;null!==wi&&null!==r&&Ni(r,wi.memoizedState.deps)?o.memoizedState=ha(t,i,n,r):(xi.flags|=e,o.memoizedState=ha(1|t,i,n,r))}function ya(e,t){ga(8390656,8,e,t)}function ba(e,t){va(2048,8,e,t)}function xa(e,t){return va(4,2,e,t)}function wa(e,t){return va(4,4,e,t)}function ka(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Sa(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,va(4,4,ka.bind(null,t,e),n)}function Ca(){}function Ea(e,t){var n=qi();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Ni(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ta(e,t){var n=qi();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Ni(t,r[1]))return r[0];if(r=e(),Ei){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r}function ja(e,t,n){return void 0===n||0!==(1073741824&bi)?e.memoizedState=t:(e.memoizedState=n,e=Ic(),xi.lanes|=e,fc|=e,n)}function Aa(e,t,n,r){return Yn(n,t)?n:null!==hi.current?(e=ja(e,n,r),Yn(e,t)||(js=!0),e):0===(42&bi)?(js=!0,e.memoizedState=n):(e=Ic(),xi.lanes|=e,fc|=e,t)}function _a(e,t,n,r,o){var i=I.p;I.p=0!==i&&8>i?i:8;var a=D.T,s={};D.T=s,Ua(e,!1,t,n);try{var l=o(),c=D.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)qa(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(l,r),Dc());else qa(e,t,r,Dc())}catch(u){qa(e,t,{then:function(){},status:"rejected",reason:u},Dc())}finally{I.p=i,D.T=a}}function Pa(){}function Na(e,t,n,r){if(5!==e.tag)throw Error(a(476));var o=Ra(e).queue;_a(e,o,t,z,null===n?Pa:function(){return Oa(e),n(r)})}function Ra(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:z},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Oa(e){qa(e,Ra(e).next.queue,{},Dc())}function Da(){return jo(Vd)}function Ia(){return qi().memoizedState}function za(){return qi().memoizedState}function Fa(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Dc(),r=ai(t,e=ii(n),n);return null!==r&&(zc(r,t,n),si(r,t,n)),t={cache:Do()},void(e.payload=t)}t=t.return}}function La(e,t,n){var r=Dc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},$a(e)?Ma(t,n):null!==(n=Pr(e,t,n,r))&&(zc(n,e,r),Qa(n,t,r))}function Ba(e,t,n){qa(e,t,n,Dc())}function qa(e,t,n,r){var o={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if($a(e))Ma(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Yn(s,a))return _r(e,t,o,0),null===rc&&Ar(),!1}catch(l){}if(null!==(n=Pr(e,t,o,r)))return zc(n,e,r),Qa(n,t,r),!0}return!1}function Ua(e,t,n,r){if(r={lane:2,revertLane:_u(),action:r,hasEagerState:!1,eagerState:null,next:null},$a(e)){if(t)throw Error(a(479))}else null!==(t=Pr(e,n,r,2))&&zc(t,e,2)}function $a(e){var t=e.alternate;return e===xi||null!==t&&t===xi}function Ma(e,t){Ci=Si=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qa(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,je(e,n)}}var Ha={readContext:jo,use:$i,useCallback:Pi,useContext:Pi,useEffect:Pi,useImperativeHandle:Pi,useLayoutEffect:Pi,useInsertionEffect:Pi,useMemo:Pi,useReducer:Pi,useRef:Pi,useState:Pi,useDebugValue:Pi,useDeferredValue:Pi,useTransition:Pi,useSyncExternalStore:Pi,useId:Pi,useHostTransitionStatus:Pi,useFormState:Pi,useActionState:Pi,useOptimistic:Pi,useMemoCache:Pi,useCacheRefresh:Pi},Wa={readContext:jo,use:$i,useCallback:function(e,t){return Bi().memoizedState=[e,void 0===t?null:t],e},useContext:jo,useEffect:ya,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,ga(4194308,4,ka.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ga(4194308,4,e,t)},useInsertionEffect:function(e,t){ga(4,2,e,t)},useMemo:function(e,t){var n=Bi();t=void 0===t?null:t;var r=e();if(Ei){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Bi();if(void 0!==n){var o=n(t);if(Ei){pe(!0);try{n(t)}finally{pe(!1)}}}else o=t;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=La.bind(null,xi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Bi().memoizedState=e},useState:function(e){var t=(e=ea(e)).queue,n=Ba.bind(null,xi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ca,useDeferredValue:function(e,t){return ja(Bi(),e,t)},useTransition:function(){var e=ea(!1);return e=_a.bind(null,xi,e.queue,!0,!1),Bi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=xi,o=Bi();if(io){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===rc)throw Error(a(349));0!==(124&ic)||Yi(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ya(Ji.bind(null,r,i,e),[e]),r.flags|=2048,ha(9,{destroy:void 0,resource:void 0},Gi.bind(null,r,i,n,t),null),n},useId:function(){var e=Bi(),t=rc.identifierPrefix;if(io){var n=Xr;t="\xab"+t+"R"+(n=(Jr&~(1<<32-fe(Jr)-1)).toString(32)+n),0<(n=Ti++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=_i++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Da,useFormState:ca,useActionState:ca,useOptimistic:function(e){var t=Bi();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ua.bind(null,xi,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mi,useCacheRefresh:function(){return Bi().memoizedState=Fa.bind(null,xi)}},Ka={readContext:jo,use:$i,useCallback:Ea,useContext:jo,useEffect:ba,useImperativeHandle:Sa,useInsertionEffect:xa,useLayoutEffect:wa,useMemo:Ta,useReducer:Hi,useRef:ma,useState:function(){return Hi(Qi)},useDebugValue:Ca,useDeferredValue:function(e,t){return Aa(qi(),wi.memoizedState,e,t)},useTransition:function(){var e=Hi(Qi)[0],t=qi().memoizedState;return["boolean"===typeof e?e:Ui(e),t]},useSyncExternalStore:Vi,useId:Ia,useHostTransitionStatus:Da,useFormState:ua,useActionState:ua,useOptimistic:function(e,t){return ta(qi(),0,e,t)},useMemoCache:Mi,useCacheRefresh:za},Va={readContext:jo,use:$i,useCallback:Ea,useContext:jo,useEffect:ba,useImperativeHandle:Sa,useInsertionEffect:xa,useLayoutEffect:wa,useMemo:Ta,useReducer:Ki,useRef:ma,useState:function(){return Ki(Qi)},useDebugValue:Ca,useDeferredValue:function(e,t){var n=qi();return null===wi?ja(n,e,t):Aa(n,wi.memoizedState,e,t)},useTransition:function(){var e=Ki(Qi)[0],t=qi().memoizedState;return["boolean"===typeof e?e:Ui(e),t]},useSyncExternalStore:Vi,useId:Ia,useHostTransitionStatus:Da,useFormState:fa,useActionState:fa,useOptimistic:function(e,t){var n=qi();return null!==wi?ta(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Mi,useCacheRefresh:za},Ya=null,Ga=0;function Ja(e){var t=Ga;return Ga+=1,null===Ya&&(Ya=[]),Xo(Ya,e,t)}function Xa(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Za(e,t){if(t.$$typeof===f)throw Error(a(525));throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){return(0,e._init)(e._payload)}function ts(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function o(e,t){return(e=Lr(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=$r(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===T&&es(i)===t.type)?(Xa(t=o(t,n.props),n),t.return=e,t):(Xa(t=qr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mr(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Ur(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=$r(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return Xa(n=qr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Mr(t,e.mode,n)).return=e,t;case T:return p(e,t=(0,t._init)(t._payload),n)}if(O(t)||P(t))return(t=Ur(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,Ja(t),n);if(t.$$typeof===w)return p(e,Ao(e,t),n);Za(e,t)}return null}function f(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==o?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===o?c(e,t,n,r):null;case m:return n.key===o?u(e,t,n,r):null;case T:return f(e,t,n=(o=n._init)(n._payload),r)}if(O(n)||P(n))return null!==o?null:d(e,t,n,r,null);if("function"===typeof n.then)return f(e,t,Ja(n),r);if(n.$$typeof===w)return f(e,t,Ao(e,n),r);Za(e,n)}return null}function v(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case h:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case m:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case T:return v(e,t,n,r=(0,r._init)(r._payload),o)}if(O(r)||P(r))return d(t,e=e.get(n)||null,r,o,null);if("function"===typeof r.then)return v(e,t,n,Ja(r),o);if(r.$$typeof===w)return v(e,t,n,Ao(t,r),o);Za(t,r)}return null}function y(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case h:e:{for(var b=u.key;null!==c;){if(c.key===b){if((b=u.type)===g){if(7===c.tag){n(l,c.sibling),(d=o(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===T&&es(b)===c.type){n(l,c.sibling),Xa(d=o(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===g?((d=Ur(u.props.children,l.mode,d,u.key)).return=l,l=d):(Xa(d=qr(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case m:e:{for(b=u.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=o(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Mr(u,l.mode,d)).return=l,l=d}return s(l);case T:return y(l,c,u=(b=u._init)(u._payload),d)}if(O(u))return function(o,a,s,l){for(var c=null,u=null,d=a,h=a=0,m=null;null!==d&&h<s.length;h++){d.index>h?(m=d,d=null):m=d.sibling;var g=f(o,d,s[h],l);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(o,d),a=i(g,a,h),null===u?c=g:u.sibling=g,u=g,d=m}if(h===s.length)return n(o,d),io&&Zr(o,h),c;if(null===d){for(;h<s.length;h++)null!==(d=p(o,s[h],l))&&(a=i(d,a,h),null===u?c=d:u.sibling=d,u=d);return io&&Zr(o,h),c}for(d=r(d);h<s.length;h++)null!==(m=v(d,o,h,s[h],l))&&(e&&null!==m.alternate&&d.delete(null===m.key?h:m.key),a=i(m,a,h),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach((function(e){return t(o,e)})),io&&Zr(o,h),c}(l,c,u,d);if(P(u)){if("function"!==typeof(b=P(u)))throw Error(a(150));return function(o,s,l,c){if(null==l)throw Error(a(151));for(var u=null,d=null,h=s,m=s=0,g=null,y=l.next();null!==h&&!y.done;m++,y=l.next()){h.index>m?(g=h,h=null):g=h.sibling;var b=f(o,h,y.value,c);if(null===b){null===h&&(h=g);break}e&&h&&null===b.alternate&&t(o,h),s=i(b,s,m),null===d?u=b:d.sibling=b,d=b,h=g}if(y.done)return n(o,h),io&&Zr(o,m),u;if(null===h){for(;!y.done;m++,y=l.next())null!==(y=p(o,y.value,c))&&(s=i(y,s,m),null===d?u=y:d.sibling=y,d=y);return io&&Zr(o,m),u}for(h=r(h);!y.done;m++,y=l.next())null!==(y=v(h,o,m,y.value,c))&&(e&&null!==y.alternate&&h.delete(null===y.key?m:y.key),s=i(y,s,m),null===d?u=y:d.sibling=y,d=y);return e&&h.forEach((function(e){return t(o,e)})),io&&Zr(o,m),u}(l,c,u=b.call(u),d)}if("function"===typeof u.then)return y(l,c,Ja(u),d);if(u.$$typeof===w)return y(l,c,Ao(l,u),d);Za(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=o(c,u)).return=l,l=d):(n(l,c),(d=$r(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,r){try{Ga=0;var o=y(e,t,n,r);return Ya=null,o}catch(a){if(a===Wo||a===Vo)throw a;var i=zr(29,a,null,e.mode);return i.lanes=r,i.return=e,i}}}var ns=ts(!0),rs=ts(!1),os=B(null),is=null;function as(e){var t=e.alternate;U(us,1&us.current),U(os,e),null===is&&(null===t||null!==hi.current||null!==t.memoizedState)&&(is=e)}function ss(e){if(22===e.tag){if(U(us,us.current),U(os,e),null===is){var t=e.alternate;null!==t&&null!==t.memoizedState&&(is=e)}}else ls()}function ls(){U(us,us.current),U(os,os.current)}function cs(e){q(os),is===e&&(is=null),q(us)}var us=B(0);function ds(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ps(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var fs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Dc(),o=ii(r);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=ai(e,o,r))&&(zc(t,e,r),si(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Dc(),o=ii(r);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=ai(e,o,r))&&(zc(t,e,r),si(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dc(),r=ii(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=ai(e,r,n))&&(zc(t,e,n),si(t,e,n))}};function hs(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!Gn(n,r)||!Gn(o,i))}function ms(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fs.enqueueReplaceState(t,t.state,null)}function gs(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var o in n===t&&(n=p({},n)),e)void 0===n[o]&&(n[o]=e[o]);return n}var vs="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function ys(e){vs(e)}function bs(e){console.error(e)}function xs(e){vs(e)}function ws(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function ks(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function Ss(e,t,n){return(n=ii(n)).tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function Cs(e){return(e=ii(e)).tag=3,e}function Es(e,t,n,r){var o=n.type.getDerivedStateFromError;if("function"===typeof o){var i=r.value;e.payload=function(){return o(i)},e.callback=function(){ks(t,n,r)}}var a=n.stateNode;null!==a&&"function"===typeof a.componentDidCatch&&(e.callback=function(){ks(t,n,r),"function"!==typeof o&&(null===Cc?Cc=new Set([this]):Cc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ts=Error(a(461)),js=!1;function As(e,t,n,r){t.child=null===e?rs(t,null,n,r):ns(t,e.child,n,r)}function _s(e,t,n,r,o){n=n.render;var i=t.ref;if("ref"in r){var a={};for(var s in r)"ref"!==s&&(a[s]=r[s])}else a=r;return To(t),r=Ri(e,t,n,a,i,o),s=zi(),null===e||js?(io&&s&&to(t),t.flags|=1,As(e,t,r,o),t.child):(Fi(e,t,o),Ys(e,t,o))}function Ps(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Fr(i)||void 0!==i.defaultProps||null!==n.compare?((e=qr(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ns(e,t,i,r,o))}if(i=e.child,!Gs(e,o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:Gn)(a,r)&&e.ref===t.ref)return Ys(e,t,o)}return t.flags|=1,(e=Lr(i,r)).ref=t.ref,e.return=t,t.child=e}function Ns(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(Gn(i,r)&&e.ref===t.ref){if(js=!1,t.pendingProps=r=i,!Gs(e,o))return t.lanes=e.lanes,Ys(e,t,o);0!==(131072&e.flags)&&(js=!0)}}return Is(e,t,n,r,o)}function Rs(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==i?i.baseLanes|n:n,null!==e){for(o=t.child=e.child,i=0;null!==o;)i=i|o.lanes|o.childLanes,o=o.sibling;t.childLanes=i&~r}else t.childLanes=0,t.child=null;return Os(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Os(e,t,null!==i?i.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qo(0,null!==i?i.cachePool:null),null!==i?gi(t,i):vi(),ss(t)}else null!==i?(Qo(0,i.cachePool),gi(t,i),ls(),t.memoizedState=null):(null!==e&&Qo(0,null),vi(),ls());return As(e,t,o,n),t.child}function Os(e,t,n,r){var o=Mo();return o=null===o?null:{parent:Oo._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Qo(0,null),vi(),ss(t),null!==e&&Co(e,t,r,!0),null}function Ds(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(a(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Is(e,t,n,r,o){return To(t),n=Ri(e,t,n,r,void 0,o),r=zi(),null===e||js?(io&&r&&to(t),t.flags|=1,As(e,t,n,o),t.child):(Fi(e,t,o),Ys(e,t,o))}function zs(e,t,n,r,o,i){return To(t),t.updateQueue=null,n=Di(t,r,n,o),Oi(e),r=zi(),null===e||js?(io&&r&&to(t),t.flags|=1,As(e,t,n,i),t.child):(Fi(e,t,i),Ys(e,t,i))}function Fs(e,t,n,r,o){if(To(t),null===t.stateNode){var i=Dr,a=n.contextType;"object"===typeof a&&null!==a&&(i=jo(a)),i=new n(r,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=fs,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},ri(t),a=n.contextType,i.context="object"===typeof a&&null!==a?jo(a):Dr,i.state=t.memoizedState,"function"===typeof(a=n.getDerivedStateFromProps)&&(ps(t,n,a,r),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(a=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),a!==i.state&&fs.enqueueReplaceState(i,i.state,null),di(t,r,i,o),ui(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;var s=t.memoizedProps,l=gs(n,s);i.props=l;var c=i.context,u=n.contextType;a=Dr,"object"===typeof u&&null!==u&&(a=jo(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof i.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(s||c!==a)&&ms(t,i,r,a),ni=!1;var p=t.memoizedState;i.state=p,di(t,r,i,o),ui(),c=t.memoizedState,s||p!==c||ni?("function"===typeof d&&(ps(t,n,d,r),c=t.memoizedState),(l=ni||hs(t,n,l,r,p,c,a))?(u||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=a,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,oi(e,t),u=gs(n,a=t.memoizedProps),i.props=u,d=t.pendingProps,p=i.context,c=n.contextType,l=Dr,"object"===typeof c&&null!==c&&(l=jo(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(a!==d||p!==l)&&ms(t,i,r,l),ni=!1,p=t.memoizedState,i.state=p,di(t,r,i,o),ui();var f=t.memoizedState;a!==d||p!==f||ni||null!==e&&null!==e.dependencies&&Eo(e.dependencies)?("function"===typeof s&&(ps(t,n,s,r),f=t.memoizedState),(u=ni||hs(t,n,u,r,p,f,l)||null!==e&&null!==e.dependencies&&Eo(e.dependencies))?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,f,l),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),i.props=r,i.state=f,i.context=l,r=u):("function"!==typeof i.componentDidUpdate||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Ds(e,t),r=0!==(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=ns(t,e.child,null,o),t.child=ns(t,null,n,o)):As(e,t,n,o),t.memoizedState=i.state,e=t.child):e=Ys(e,t,o),e}function Ls(e,t,n,r){return ho(),t.flags|=256,As(e,t,n,r),t.child}var Bs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qs(e){return{baseLanes:e,cachePool:Ho()}}function Us(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gc),e}function $s(e,t,n){var r,o=t.pendingProps,i=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&us.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(io){if(i?as(t):ls(),io){var l,c=oo;if(l=c){e:{for(l=c,c=so;8!==l.nodeType;){if(!c){c=null;break e}if(null===(l=vd(l.nextSibling))){c=null;break e}}c=l}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Gr?{id:Jr,overflow:Xr}:null,retryLane:536870912,hydrationErrors:null},(l=zr(18,null,null,0)).stateNode=c,l.return=t,t.child=l,ro=t,oo=null,l=!0):l=!1}l||co(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gd(c)?t.lanes=32:t.lanes=536870912,null;cs(t)}return c=o.children,o=o.fallback,i?(ls(),c=Qs({mode:"hidden",children:c},i=t.mode),o=Ur(o,i,n,null),c.return=t,o.return=t,c.sibling=o,t.child=c,(i=t.child).memoizedState=qs(n),i.childLanes=Us(e,r,n),t.memoizedState=Bs,o):(as(t),Ms(t,c))}if(null!==(l=e.memoizedState)&&null!==(c=l.dehydrated)){if(s)256&t.flags?(as(t),t.flags&=-257,t=Hs(e,t,n)):null!==t.memoizedState?(ls(),t.child=e.child,t.flags|=128,t=null):(ls(),i=o.fallback,c=t.mode,o=Qs({mode:"visible",children:o.children},c),(i=Ur(i,c,n,null)).flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,ns(t,e.child,null,n),(o=t.child).memoizedState=qs(n),o.childLanes=Us(e,r,n),t.memoizedState=Bs,t=i);else if(as(t),gd(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(o=Error(a(419))).stack="",o.digest=r,go({value:o,source:null,stack:null}),t=Hs(e,t,n)}else if(js||Co(e,t,n,!1),r=0!==(n&e.childLanes),js||r){if(null!==(r=rc)&&(0!==(o=0!==((o=0!==(42&(o=n&-n))?1:Ae(o))&(r.suspendedLanes|n))?0:o)&&o!==l.retryLane))throw l.retryLane=o,Nr(e,o),zc(r,e,o),Ts;"$?"===c.data||Kc(),t=Hs(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,oo=vd(c.nextSibling),ro=t,io=!0,ao=null,so=!1,null!==e&&(Vr[Yr++]=Jr,Vr[Yr++]=Xr,Vr[Yr++]=Gr,Jr=e.id,Xr=e.overflow,Gr=t),(t=Ms(t,o.children)).flags|=4096);return t}return i?(ls(),i=o.fallback,c=t.mode,u=(l=e.child).sibling,(o=Lr(l,{mode:"hidden",children:o.children})).subtreeFlags=65011712&l.subtreeFlags,null!==u?i=Lr(u,i):(i=Ur(i,c,n,null)).flags|=2,i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,null===(c=e.child.memoizedState)?c=qs(n):(null!==(l=c.cachePool)?(u=Oo._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Ho(),c={baseLanes:c.baseLanes|n,cachePool:l}),i.memoizedState=c,i.childLanes=Us(e,r,n),t.memoizedState=Bs,o):(as(t),e=(n=e.child).sibling,(n=Lr(n,{mode:"visible",children:o.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ms(e,t){return(t=Qs({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Qs(e,t){return(e=zr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hs(e,t,n){return ns(t,e.child,null,n),(e=Ms(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ws(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),ko(e.return,t,n)}function Ks(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Vs(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(As(e,t,r.children,n),0!==(2&(r=us.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ws(e,n,t);else if(19===e.tag)Ws(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(U(us,r),o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ds(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ks(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ds(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ks(t,!0,n,null,i);break;case"together":Ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ys(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),fc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Co(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Lr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Lr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Gs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Eo(e))}function Js(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)js=!0;else{if(!Gs(e,n)&&0===(128&t.flags))return js=!1,function(e,t,n){switch(t.tag){case 3:W(t,t.stateNode.containerInfo),xo(0,Oo,e.memoizedState.cache),ho();break;case 27:case 5:V(t);break;case 4:W(t,t.stateNode.containerInfo);break;case 10:xo(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(as(t),t.flags|=128,null):0!==(n&t.child.childLanes)?$s(e,t,n):(as(t),null!==(e=Ys(e,t,n))?e.sibling:null);as(t);break;case 19:var o=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Co(e,t,n,!1),r=0!==(n&t.childLanes)),o){if(r)return Vs(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(us,us.current),r)break;return null;case 22:case 23:return t.lanes=0,Rs(e,t,n);case 24:xo(0,Oo,e.memoizedState.cache)}return Ys(e,t,n)}(e,t,n);js=0!==(131072&e.flags)}else js=!1,io&&0!==(1048576&t.flags)&&eo(t,Kr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,o=r._init;if(r=o(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((o=r.$$typeof)===k){t.tag=11,t=_s(null,t,r,e,n);break e}if(o===E){t.tag=14,t=Ps(null,t,r,e,n);break e}}throw t=R(r)||r,Error(a(306,t,""))}Fr(r)?(e=gs(r,e),t.tag=1,t=Fs(null,t,r,e,n)):(t.tag=0,t=Is(null,t,r,e,n))}return t;case 0:return Is(e,t,t.type,t.pendingProps,n);case 1:return Fs(e,t,r=t.type,o=gs(r,t.pendingProps),n);case 3:e:{if(W(t,t.stateNode.containerInfo),null===e)throw Error(a(387));r=t.pendingProps;var i=t.memoizedState;o=i.element,oi(e,t),di(t,r,null,n);var s=t.memoizedState;if(r=s.cache,xo(0,Oo,r),r!==i.cache&&So(t,[Oo],n,!0),ui(),r=s.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Ls(e,t,r,n);break e}if(r!==o){go(o=Cr(Error(a(424)),t)),t=Ls(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(oo=vd(e.firstChild),ro=t,io=!0,ao=null,so=!0,n=rs(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===o){t=Ys(e,t,n);break e}As(e,t,r,n)}t=t.child}return t;case 26:return Ds(e,t),null===e?(n=Ad(t.type,null,t.pendingProps,null))?t.memoizedState=n:io||(n=t.type,e=t.pendingProps,(r=rd(Q.current).createElement(n))[Re]=t,r[Oe]=e,ed(r,n,e),He(r),t.stateNode=r):t.memoizedState=Ad(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return V(t),null===e&&io&&(r=t.stateNode=xd(t.type,t.pendingProps,Q.current),ro=t,so=!0,o=oo,fd(t.type)?(yd=o,oo=vd(r.firstChild)):oo=o),As(e,t,t.pendingProps.children,n),Ds(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&io&&((o=r=oo)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Be])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==o.rel||e.getAttribute("href")!==(null==o.href||""===o.href?null:o.href)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin)||e.getAttribute("title")!==(null==o.title?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==o.src?null:o.src)||e.getAttribute("type")!==(null==o.type?null:o.type)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==o.name?null:""+o.name;if("hidden"===o.type&&e.getAttribute("name")===i)return e}if(null===(e=vd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,so))?(t.stateNode=r,ro=t,oo=vd(r.firstChild),so=!1,o=!0):o=!1),o||co(t)),V(t),o=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,r=i.children,ad(o,i)?r=null:null!==s&&ad(o,s)&&(t.flags|=32),null!==t.memoizedState&&(o=Ri(e,t,Ii,null,null,n),Vd._currentValue=o),Ds(e,t),As(e,t,r,n),t.child;case 6:return null===e&&io&&((e=n=oo)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=vd(e.nextSibling)))return null}return e}(n,t.pendingProps,so))?(t.stateNode=n,ro=t,oo=null,e=!0):e=!1),e||co(t)),null;case 13:return $s(e,t,n);case 4:return W(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ns(t,null,r,n):As(e,t,r,n),t.child;case 11:return _s(e,t,t.type,t.pendingProps,n);case 7:return As(e,t,t.pendingProps,n),t.child;case 8:case 12:return As(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,xo(0,t.type,r.value),As(e,t,r.children,n),t.child;case 9:return o=t.type._context,r=t.pendingProps.children,To(t),r=r(o=jo(o)),t.flags|=1,As(e,t,r,n),t.child;case 14:return Ps(e,t,t.type,t.pendingProps,n);case 15:return Ns(e,t,t.type,t.pendingProps,n);case 19:return Vs(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Qs(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Lr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Rs(e,t,n);case 24:return To(t),r=jo(Oo),null===e?(null===(o=Mo())&&(o=rc,i=Do(),o.pooledCache=i,i.refCount++,null!==i&&(o.pooledCacheLanes|=n),o=i),t.memoizedState={parent:r,cache:o},ri(t),xo(0,Oo,o)):(0!==(e.lanes&n)&&(oi(e,t),di(t,null,null,n),ui()),o=e.memoizedState,i=t.memoizedState,o.parent!==r?(o={parent:r,cache:r},t.memoizedState=o,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=o),xo(0,Oo,r)):(r=i.cache,xo(0,Oo,r),r!==o.cache&&So(t,[Oo],n,!0))),As(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Xs(e){e.flags|=4}function Zs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Ud(t)){if(null!==(t=os.current)&&((4194048&ic)===ic?null!==is:(62914560&ic)!==ic&&0===(536870912&ic)||t!==is))throw Zo=Yo,Ko;e.flags|=8192}}function el(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Se():536870912,e.lanes|=t,vc|=t)}function tl(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=65011712&o.subtreeFlags,r|=65011712&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rl(e,t,n){var r=t.pendingProps;switch(no(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return nl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),wo(Oo),K(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(fo(t)?Xs(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,mo())),nl(t),null;case 26:return n=t.memoizedState,null===e?(Xs(t),null!==n?(nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Xs(t),nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217):(e.memoizedProps!==r&&Xs(t),nl(t),t.flags&=-16777217),null;case 27:Y(t),n=Q.current;var o=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Xs(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return nl(t),null}e=$.current,fo(t)?uo(t):(e=xd(o,r,n),t.stateNode=e,Xs(t))}return nl(t),null;case 5:if(Y(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Xs(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return nl(t),null}if(e=$.current,fo(t))uo(t);else{switch(o=rd(Q.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?o.createElement(n,{is:r.is}):o.createElement(n)}}e[Re]=t,e[Oe]=r;e:for(o=t.child;null!==o;){if(5===o.tag||6===o.tag)e.appendChild(o.stateNode);else if(4!==o.tag&&27!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;null===o.sibling;){if(null===o.return||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xs(t)}}return nl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Xs(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(e=Q.current,fo(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(o=ro))switch(o.tag){case 27:case 5:r=o.memoizedProps}e[Re]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Gu(e.nodeValue,n)))||co(t)}else(e=rd(e).createTextNode(r))[Re]=t,t.stateNode=e}return nl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(o=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[Re]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;nl(t),o=!1}else o=mo(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return 256&t.flags?(cs(t),t):(cs(t),null)}if(cs(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){o=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(o=r.alternate.memoizedState.cachePool.pool);var i=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==o&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),el(t,t.updateQueue),nl(t),null;case 4:return K(),null===e&&qu(t.stateNode.containerInfo),nl(t),null;case 10:return wo(t.type),nl(t),null;case 19:if(q(us),null===(o=t.memoizedState))return nl(t),null;if(r=0!==(128&t.flags),null===(i=o.rendering))if(r)tl(o,!1);else{if(0!==pc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=ds(e))){for(t.flags|=128,tl(o,!1),e=i.updateQueue,t.updateQueue=e,el(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Br(n,e),n=n.sibling;return U(us,1&us.current|2),t.child}e=e.sibling}null!==o.tail&&te()>kc&&(t.flags|=128,r=!0,tl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ds(i))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,el(t,e),tl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!i.alternate&&!io)return nl(t),null}else 2*te()-o.renderingStartTime>kc&&536870912!==n&&(t.flags|=128,r=!0,tl(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=o.last)?e.sibling=i:t.child=i,o.last=i)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,e=us.current,U(us,r?1&e|2:1&e),t):(nl(t),null);case 22:case 23:return cs(t),yi(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(nl(t),6&t.subtreeFlags&&(t.flags|=8192)):nl(t),null!==(n=t.updateQueue)&&el(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&q($o),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),wo(Oo),nl(t),null;case 25:case 30:return null}throw Error(a(156,t.tag))}function ol(e,t){switch(no(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return wo(Oo),K(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return Y(t),null;case 13:if(cs(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return q(us),null;case 4:return K(),null;case 10:return wo(t.type),null;case 22:case 23:return cs(t),yi(),null!==e&&q($o),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return wo(Oo),null;default:return null}}function il(e,t){switch(no(t),t.tag){case 3:wo(Oo),K();break;case 26:case 27:case 5:Y(t);break;case 4:K();break;case 13:cs(t);break;case 19:q(us);break;case 10:wo(t.type);break;case 22:case 23:cs(t),yi(),null!==e&&q($o);break;case 24:wo(Oo)}}function al(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var o=r.next;n=o;do{if((n.tag&e)===e){r=void 0;var i=n.create,a=n.inst;r=i(),a.destroy=r}n=n.next}while(n!==o)}}catch(s){uu(t,t.return,s)}}function sl(e,t,n){try{var r=t.updateQueue,o=null!==r?r.lastEffect:null;if(null!==o){var i=o.next;r=i;do{if((r.tag&e)===e){var a=r.inst,s=a.destroy;if(void 0!==s){a.destroy=void 0,o=t;var l=n,c=s;try{c()}catch(u){uu(o,l,u)}}}r=r.next}while(r!==i)}}catch(u){uu(t,t.return,u)}}function ll(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{fi(t,n)}catch(r){uu(e,e.return,r)}}}function cl(e,t,n){n.props=gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function ul(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(o){uu(e,t,o)}}function dl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(o){uu(e,t,o)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){uu(e,t,i)}else n.current=null}function pl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(o){uu(e,e.return,o)}}function fl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,s=null,l=null,c=null,u=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&null!=p)switch(h){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(h)||Xu(e,t,h,null,r,p)}}for(var f in r){var h=r[f];if(p=n[f],r.hasOwnProperty(f)&&(null!=h||null!=p))switch(f){case"type":i=h;break;case"name":o=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":s=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(a(137,t));break;default:h!==p&&Xu(e,t,f,h,r,p)}}return void gt(e,s,l,c,u,d,i,o);case"select":for(i in h=s=l=f=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":h=c;default:r.hasOwnProperty(i)||Xu(e,t,i,null,r,c)}for(o in r)if(i=r[o],c=n[o],r.hasOwnProperty(o)&&(null!=i||null!=c))switch(o){case"value":f=i;break;case"defaultValue":l=i;break;case"multiple":s=i;default:i!==c&&Xu(e,t,o,i,r,c)}return t=l,n=s,r=h,void(null!=f?bt(e,!!n,f,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(l in h=f=null,n)if(o=n[l],n.hasOwnProperty(l)&&null!=o&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Xu(e,t,l,null,r,o)}for(s in r)if(o=r[s],i=n[s],r.hasOwnProperty(s)&&(null!=o||null!=i))switch(s){case"value":f=o;break;case"defaultValue":h=o;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=o)throw Error(a(91));break;default:o!==i&&Xu(e,t,s,o,r,i)}return void xt(e,f,h);case"option":for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&null!=f&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Xu(e,t,m,null,r,f);for(c in r)if(f=r[c],h=n[c],r.hasOwnProperty(c)&&f!==h&&(null!=f||null!=h))if("selected"===c)e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else Xu(e,t,c,f,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!r.hasOwnProperty(g)&&Xu(e,t,g,null,r,f);for(u in r)if(f=r[u],h=n[u],r.hasOwnProperty(u)&&f!==h&&(null!=f||null!=h))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(a(137,t));break;default:Xu(e,t,u,f,r,h)}return;default:if(Tt(t)){for(var v in n)f=n[v],n.hasOwnProperty(v)&&void 0!==f&&!r.hasOwnProperty(v)&&Zu(e,t,v,void 0,r,f);for(d in r)f=r[d],h=n[d],!r.hasOwnProperty(d)||f===h||void 0===f&&void 0===h||Zu(e,t,d,f,r,h);return}}for(var y in n)f=n[y],n.hasOwnProperty(y)&&null!=f&&!r.hasOwnProperty(y)&&Xu(e,t,y,null,r,f);for(p in r)f=r[p],h=n[p],!r.hasOwnProperty(p)||f===h||null==f&&null==h||Xu(e,t,p,f,r,h)}(r,e.type,n,t),r[Oe]=t}catch(o){uu(e,e.return,o)}}function hl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&fd(e.type)||4===e.tag}function ml(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||hl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&fd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Ju));else if(4!==r&&(27===r&&fd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}function vl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&fd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(vl(e,t,n),e=e.sibling;null!==e;)vl(e,t,n),e=e.sibling}function yl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ed(t,r,n),t[Re]=e,t[Oe]=n}catch(i){uu(e,e.return,i)}}var bl=!1,xl=!1,wl=!1,kl="function"===typeof WeakSet?WeakSet:Set,Sl=null;function Cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fl(e,n),4&r&&al(5,n);break;case 1:if(Fl(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(a){uu(n,n.return,a)}else{var o=gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){uu(n,n.return,s)}}64&r&&ll(n),512&r&&ul(n,n.return);break;case 3:if(Fl(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{fi(e,t)}catch(a){uu(n,n.return,a)}}break;case 27:null===t&&4&r&&yl(n);case 26:case 5:Fl(e,n),null===t&&4&r&&pl(n),512&r&&ul(n,n.return);break;case 12:Fl(e,n);break;case 13:Fl(e,n),4&r&&Pl(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=hu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||bl)){t=null!==t&&null!==t.memoizedState||xl,o=bl;var i=xl;bl=r,(xl=t)&&!i?Bl(e,n,0!==(8772&n.subtreeFlags)):Fl(e,n),bl=o,xl=i}break;case 30:break;default:Fl(e,n)}}function El(e){var t=e.alternate;null!==t&&(e.alternate=null,El(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Tl=null,jl=!1;function Al(e,t,n){for(n=n.child;null!==n;)_l(e,t,n),n=n.sibling}function _l(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(i){}switch(n.tag){case 26:xl||dl(n,t),Al(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xl||dl(n,t);var r=Tl,o=jl;fd(n.type)&&(Tl=n.stateNode,jl=!1),Al(e,t,n),wd(n.stateNode),Tl=r,jl=o;break;case 5:xl||dl(n,t);case 6:if(r=Tl,o=jl,Tl=null,Al(e,t,n),jl=o,null!==(Tl=r))if(jl)try{(9===Tl.nodeType?Tl.body:"HTML"===Tl.nodeName?Tl.ownerDocument.body:Tl).removeChild(n.stateNode)}catch(a){uu(n,t,a)}else try{Tl.removeChild(n.stateNode)}catch(a){uu(n,t,a)}break;case 18:null!==Tl&&(jl?(hd(9===(e=Tl).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),jp(e)):hd(Tl,n.stateNode));break;case 4:r=Tl,o=jl,Tl=n.stateNode.containerInfo,jl=!0,Al(e,t,n),Tl=r,jl=o;break;case 0:case 11:case 14:case 15:xl||sl(2,n,t),xl||sl(4,n,t),Al(e,t,n);break;case 1:xl||(dl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cl(n,t,r)),Al(e,t,n);break;case 21:Al(e,t,n);break;case 22:xl=(r=xl)||null!==n.memoizedState,Al(e,t,n),xl=r;break;default:Al(e,t,n)}}function Pl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{jp(e)}catch(n){uu(t,t.return,n)}}function Nl(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new kl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new kl),t;default:throw Error(a(435,e.tag))}}(e);t.forEach((function(t){var r=mu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function Rl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r],i=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(fd(l.type)){Tl=l.stateNode,jl=!1;break e}break;case 5:Tl=l.stateNode,jl=!1;break e;case 3:case 4:Tl=l.stateNode.containerInfo,jl=!0;break e}l=l.return}if(null===Tl)throw Error(a(160));_l(i,s,o),Tl=null,jl=!1,null!==(i=o.alternate)&&(i.return=null),o.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Dl(t,e),t=t.sibling}var Ol=null;function Dl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rl(t,e),Il(e),4&r&&(sl(3,e,e.return),al(3,e),sl(5,e,e.return));break;case 1:Rl(t,e),Il(e),512&r&&(xl||null===n||dl(n,n.return)),64&r&&bl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var o=Ol;if(Rl(t,e),Il(e),512&r&&(xl||null===n||dl(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(r){case"title":(!(i=o.getElementsByTagName("title")[0])||i[Be]||i[Re]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=o.createElement(r),o.head.insertBefore(i,o.querySelector("head > title"))),ed(i,r,n),i[Re]=e,He(i),r=i;break e;case"link":var s=Bd("link","href",o).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((i=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}ed(i=o.createElement(r),r,n),o.head.appendChild(i);break;case"meta":if(s=Bd("meta","content",o).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((i=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}ed(i=o.createElement(r),r,n),o.head.appendChild(i);break;default:throw Error(a(468,r))}i[Re]=e,He(i),r=i}e.stateNode=r}else qd(o,e.type,e.stateNode);else e.stateNode=Dd(o,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?qd(o,e.type,e.stateNode):Dd(o,r,e.memoizedProps)):null===r&&null!==e.stateNode&&fl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rl(t,e),Il(e),512&r&&(xl||null===n||dl(n,n.return)),null!==n&&4&r&&fl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rl(t,e),Il(e),512&r&&(xl||null===n||dl(n,n.return)),32&e.flags){o=e.stateNode;try{kt(o,"")}catch(h){uu(e,e.return,h)}}4&r&&null!=e.stateNode&&fl(e,o=e.memoizedProps,null!==n?n.memoizedProps:o),1024&r&&(wl=!0);break;case 6:if(Rl(t,e),Il(e),4&r){if(null===e.stateNode)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(h){uu(e,e.return,h)}}break;case 3:if(Ld=null,o=Ol,Ol=Cd(t.containerInfo),Rl(t,e),Ol=o,Il(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{jp(t.containerInfo)}catch(h){uu(e,e.return,h)}wl&&(wl=!1,zl(e));break;case 4:r=Ol,Ol=Cd(e.stateNode.containerInfo),Rl(t,e),Il(e),Ol=r;break;case 12:default:Rl(t,e),Il(e);break;case 13:Rl(t,e),Il(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Nl(e,r)));break;case 22:o=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=bl,d=xl;if(bl=u||o,xl=d||c,Rl(t,e),xl=d,bl=u,Il(e),8192&r)e:for(t=e.stateNode,t._visibility=o?-2&t._visibility:1|t._visibility,o&&(null===n||c||bl||xl||Ll(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(i=c.stateNode,o)"function"===typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var p=c.memoizedProps.style,f=void 0!==p&&null!==p&&p.hasOwnProperty("display")?p.display:null;l.style.display=null==f||"boolean"===typeof f?"":(""+f).trim()}}catch(h){uu(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=o?"":c.memoizedProps}catch(h){uu(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Nl(e,n))));break;case 19:Rl(t,e),Il(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Nl(e,r)));case 30:case 21:}}function Il(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(hl(r)){n=r;break}r=r.return}if(null==n)throw Error(a(160));switch(n.tag){case 27:var o=n.stateNode;vl(e,ml(e),o);break;case 5:var i=n.stateNode;32&n.flags&&(kt(i,""),n.flags&=-33),vl(e,ml(e),i);break;case 3:case 4:var s=n.stateNode.containerInfo;gl(e,ml(e),s);break;default:throw Error(a(161))}}catch(l){uu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function zl(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;zl(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Fl(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Cl(e,t.alternate,t),t=t.sibling}function Ll(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Ll(t);break;case 1:dl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cl(t,t.return,n),Ll(t);break;case 27:wd(t.stateNode);case 26:case 5:dl(t,t.return),Ll(t);break;case 22:null===t.memoizedState&&Ll(t);break;default:Ll(t)}e=e.sibling}}function Bl(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,o=e,i=t,a=i.flags;switch(i.tag){case 0:case 11:case 15:Bl(o,i,n),al(4,i);break;case 1:if(Bl(o,i,n),"function"===typeof(o=(r=i).stateNode).componentDidMount)try{o.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(o=(r=i).updateQueue)){var s=r.stateNode;try{var l=o.shared.hiddenCallbacks;if(null!==l)for(o.shared.hiddenCallbacks=null,o=0;o<l.length;o++)pi(l[o],s)}catch(c){uu(r,r.return,c)}}n&&64&a&&ll(i),ul(i,i.return);break;case 27:yl(i);case 26:case 5:Bl(o,i,n),n&&null===r&&4&a&&pl(i),ul(i,i.return);break;case 12:Bl(o,i,n);break;case 13:Bl(o,i,n),n&&4&a&&Pl(o,i);break;case 22:null===i.memoizedState&&Bl(o,i,n),ul(i,i.return);break;case 30:break;default:Bl(o,i,n)}t=t.sibling}}function ql(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Io(n))}function Ul(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Io(e))}function $l(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Ml(e,t,n,r),t=t.sibling}function Ml(e,t,n,r){var o=t.flags;switch(t.tag){case 0:case 11:case 15:$l(e,t,n,r),2048&o&&al(9,t);break;case 1:case 13:default:$l(e,t,n,r);break;case 3:$l(e,t,n,r),2048&o&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Io(e)));break;case 12:if(2048&o){$l(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,a=i.id,s=i.onPostCommit;"function"===typeof s&&s(a,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){uu(t,t.return,l)}}else $l(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,a=t.alternate,null!==t.memoizedState?2&i._visibility?$l(e,t,n,r):Hl(e,t):2&i._visibility?$l(e,t,n,r):(i._visibility|=2,Ql(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&o&&ql(a,t);break;case 24:$l(e,t,n,r),2048&o&&Ul(t.alternate,t)}}function Ql(e,t,n,r,o){for(o=o&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var i=e,a=t,s=n,l=r,c=a.flags;switch(a.tag){case 0:case 11:case 15:Ql(i,a,s,l,o),al(8,a);break;case 23:break;case 22:var u=a.stateNode;null!==a.memoizedState?2&u._visibility?Ql(i,a,s,l,o):Hl(i,a):(u._visibility|=2,Ql(i,a,s,l,o)),o&&2048&c&&ql(a.alternate,a);break;case 24:Ql(i,a,s,l,o),o&&2048&c&&Ul(a.alternate,a);break;default:Ql(i,a,s,l,o)}t=t.sibling}}function Hl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,o=r.flags;switch(r.tag){case 22:Hl(n,r),2048&o&&ql(r.alternate,r);break;case 24:Hl(n,r),2048&o&&Ul(r.alternate,r);break;default:Hl(n,r)}t=t.sibling}}var Wl=8192;function Kl(e){if(e.subtreeFlags&Wl)for(e=e.child;null!==e;)Vl(e),e=e.sibling}function Vl(e){switch(e.tag){case 26:Kl(e),e.flags&Wl&&null!==e.memoizedState&&function(e,t,n){if(null===$d)throw Error(a(475));var r=$d;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var o=_d(n.href),i=e.querySelector(Pd(o));if(i)return null!==(e=i._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Qd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=i,void He(i);i=e.ownerDocument||e,n=Nd(n),(o=kd.get(o))&&zd(n,o),He(i=i.createElement("link"));var s=i;s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(i,"link",n),t.instance=i}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Qd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Ol,e.memoizedState,e.memoizedProps);break;case 5:default:Kl(e);break;case 3:case 4:var t=Ol;Ol=Cd(e.stateNode.containerInfo),Kl(e),Ol=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Wl,Wl=16777216,Kl(e),Wl=t):Kl(e))}}function Yl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Gl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Sl=r,Zl(r,e)}Yl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Jl(e),e=e.sibling}function Jl(e){switch(e.tag){case 0:case 11:case 15:Gl(e),2048&e.flags&&sl(9,e,e.return);break;case 3:case 12:default:Gl(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Xl(e)):Gl(e)}}function Xl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Sl=r,Zl(r,e)}Yl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:sl(8,t,t.return),Xl(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Xl(t));break;default:Xl(t)}e=e.sibling}}function Zl(e,t){for(;null!==Sl;){var n=Sl;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Io(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Sl=r;else e:for(n=e;null!==Sl;){var o=(r=Sl).sibling,i=r.return;if(El(r),r===n){Sl=null;break e}if(null!==o){o.return=i,Sl=o;break e}Sl=i}}}var ec={getCacheForType:function(e){var t=jo(Oo),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,oc=null,ic=0,ac=0,sc=null,lc=!1,cc=!1,uc=!1,dc=0,pc=0,fc=0,hc=0,mc=0,gc=0,vc=0,yc=null,bc=null,xc=!1,wc=0,kc=1/0,Sc=null,Cc=null,Ec=0,Tc=null,jc=null,Ac=0,_c=0,Pc=null,Nc=null,Rc=0,Oc=null;function Dc(){if(0!==(2&nc)&&0!==ic)return ic&-ic;if(null!==D.T){return 0!==Lo?Lo:_u()}return Pe()}function Ic(){0===gc&&(gc=0===(536870912&ic)||io?ke():536870912);var e=os.current;return null!==e&&(e.flags|=32),gc}function zc(e,t,n){(e!==rc||2!==ac&&9!==ac)&&null===e.cancelPendingCommit||(Mc(e,0),qc(e,ic,gc,!1)),Ee(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(hc|=n),4===pc&&qc(e,ic,gc,!1)),ku(e))}function Fc(e,t,n){if(0!==(6&nc))throw Error(a(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),o=r?function(e,t){var n=nc;nc|=2;var r=Hc(),o=Wc();rc!==e||ic!==t?(Sc=null,kc=te()+500,Mc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==ac&&null!==oc){t=oc;var i=sc;t:switch(ac){case 1:ac=0,sc=null,Zc(e,t,i,1);break;case 2:case 9:if(Go(i)){ac=0,sc=null,Xc(t);break}t=function(){2!==ac&&9!==ac||rc!==e||(ac=7),ku(e)},i.then(t,t);break e;case 3:ac=7;break e;case 4:ac=5;break e;case 7:Go(i)?(ac=0,sc=null,Xc(t)):(ac=0,sc=null,Zc(e,t,i,7));break;case 5:var s=null;switch(oc.tag){case 26:s=oc.memoizedState;case 5:case 27:var l=oc;if(!s||Ud(s)){ac=0,sc=null;var c=l.sibling;if(null!==c)oc=c;else{var u=l.return;null!==u?(oc=u,eu(u)):oc=null}break t}}ac=0,sc=null,Zc(e,t,i,5);break;case 6:ac=0,sc=null,Zc(e,t,i,6);break;case 8:$c(),pc=6;break e;default:throw Error(a(462))}}Gc();break}catch(d){Qc(e,d)}return bo=yo=null,D.H=r,D.A=o,nc=n,null!==oc?0:(rc=null,ic=0,Ar(),pc)}(e,t):Vc(e,t,!0),i=r;;){if(0===o){cc&&!r&&qc(e,t,0,!1);break}if(n=e.current.alternate,!i||Bc(n)){if(2===o){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;o=yc;var c=l.current.memoizedState.isDehydrated;if(c&&(Mc(l,s).flags|=256),2!==(s=Vc(l,s,!1))){if(uc&&!c){l.errorRecoveryDisabledLanes|=i,hc|=i,o=4;break e}i=bc,bc=o,null!==i&&(null===bc?bc=i:bc.push.apply(bc,i))}o=s}if(i=!1,2!==o)continue}}if(1===o){Mc(e,0),qc(e,t,0,!0);break}e:{switch(r=e,i=o){case 0:case 1:throw Error(a(345));case 4:if((4194048&t)!==t)break;case 6:qc(r,t,gc,!lc);break e;case 2:bc=null;break;case 3:case 5:break;default:throw Error(a(329))}if((62914560&t)===t&&10<(o=wc+300-te())){if(qc(r,t,gc,!lc),0!==be(r,0,!0))break e;r.timeoutHandle=ld(Lc.bind(null,r,n,bc,Sc,xc,t,gc,hc,vc,lc,i,2,-0,0),o)}else Lc(r,n,bc,Sc,xc,t,gc,hc,vc,lc,i,0,-0,0)}break}o=Vc(e,t,!1),i=!1}ku(e)}function Lc(e,t,n,r,o,i,s,l,c,u,d,p,f,h){if(e.timeoutHandle=-1,(8192&(p=t.subtreeFlags)||16785408===(16785408&p))&&($d={stylesheets:null,count:0,unsuspend:Md},Vl(t),null!==(p=function(){if(null===$d)throw Error(a(475));var e=$d;return e.stylesheets&&0===e.count&&Wd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Wd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=p(nu.bind(null,e,t,i,n,r,o,s,l,c,d,1,f,h)),void qc(e,i,s,!u);nu(e,t,i,n,r,o,s,l,c)}function Bc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Yn(i(),o))return!1}catch(a){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qc(e,t,n,r){t&=~mc,t&=~hc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var o=t;0<o;){var i=31-fe(o),a=1<<i;r[i]=-1,o&=~a}0!==n&&Te(e,n,t)}function Uc(){return 0!==(6&nc)||(Su(0,!1),!1)}function $c(){if(null!==oc){if(0===ac)var e=oc.return;else bo=yo=null,Li(e=oc),Ya=null,Ga=0,e=oc;for(;null!==e;)il(e.alternate,e),e=e.return;oc=null}}function Mc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),$c(),rc=e,oc=n=Lr(e.current,null),ic=t,ac=0,sc=null,lc=!1,cc=xe(e,t),uc=!1,vc=gc=mc=hc=fc=pc=0,bc=yc=null,xc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var o=31-fe(r),i=1<<o;t|=e[o],r&=~i}return dc=t,Ar(),n}function Qc(e,t){xi=null,D.H=Ha,t===Wo||t===Vo?(t=ei(),ac=3):t===Ko?(t=ei(),ac=4):ac=t===Ts?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,sc=t,null===oc&&(pc=1,ws(e,Cr(t,e.current)))}function Hc(){var e=D.H;return D.H=Ha,null===e?Ha:e}function Wc(){var e=D.A;return D.A=ec,e}function Kc(){pc=4,lc||(4194048&ic)!==ic&&null!==os.current||(cc=!0),0===(134217727&fc)&&0===(134217727&hc)||null===rc||qc(rc,ic,gc,!1)}function Vc(e,t,n){var r=nc;nc|=2;var o=Hc(),i=Wc();rc===e&&ic===t||(Sc=null,Mc(e,t)),t=!1;var a=pc;e:for(;;)try{if(0!==ac&&null!==oc){var s=oc,l=sc;switch(ac){case 8:$c(),a=6;break e;case 3:case 2:case 9:case 6:null===os.current&&(t=!0);var c=ac;if(ac=0,sc=null,Zc(e,s,l,c),n&&cc){a=0;break e}break;default:c=ac,ac=0,sc=null,Zc(e,s,l,c)}}Yc(),a=pc;break}catch(u){Qc(e,u)}return t&&e.shellSuspendCounter++,bo=yo=null,nc=r,D.H=o,D.A=i,null===oc&&(rc=null,ic=0,Ar()),a}function Yc(){for(;null!==oc;)Jc(oc)}function Gc(){for(;null!==oc&&!Z();)Jc(oc)}function Jc(e){var t=Js(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):oc=t}function Xc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zs(n,t,t.pendingProps,t.type,void 0,ic);break;case 11:t=zs(n,t,t.pendingProps,t.type.render,t.ref,ic);break;case 5:Li(t);default:il(n,t),t=Js(n,t=oc=Br(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):oc=t}function Zc(e,t,n,r){bo=yo=null,Li(t),Ya=null,Ga=0;var o=t.return;try{if(function(e,t,n,r,o){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Co(t,n,o,!0),null!==(n=os.current)){switch(n.tag){case 13:return null===is?Kc():null===n.alternate&&0===pc&&(pc=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===Yo?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,o)),!1;case 22:return n.flags|=65536,r===Yo?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,o)),!1}throw Error(a(435,n.tag))}return du(e,r,o),Kc(),!1}if(io)return null!==(t=os.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==lo&&go(Cr(e=Error(a(422),{cause:r}),n))):(r!==lo&&go(Cr(t=Error(a(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,o&=-o,e.lanes|=o,r=Cr(r,n),li(e,o=Ss(e.stateNode,r,o)),4!==pc&&(pc=2)),!1;var i=Error(a(520),{cause:r});if(i=Cr(i,n),null===yc?yc=[i]:yc.push(i),4!==pc&&(pc=2),null===t)return!0;r=Cr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,li(n,e=Ss(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===Cc||!Cc.has(i))))return n.flags|=65536,o&=-o,n.lanes|=o,Es(o=Cs(o),e,n,r),li(n,o),!1}n=n.return}while(null!==n);return!1}(e,o,t,n,ic))return pc=1,ws(e,Cr(n,e.current)),void(oc=null)}catch(i){if(null!==o)throw oc=o,i;return pc=1,ws(e,Cr(n,e.current)),void(oc=null)}32768&t.flags?(io||1===r?e=!0:cc||0!==(536870912&ic)?e=!1:(lc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=os.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,lc);e=t.return;var n=rl(t.alternate,t,dc);if(null!==n)return void(oc=n);if(null!==(t=t.sibling))return void(oc=t);oc=t=e}while(null!==t);0===pc&&(pc=5)}function tu(e,t){do{var n=ol(e.alternate,e);if(null!==n)return n.flags&=32767,void(oc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(oc=e);oc=e=n}while(null!==e);pc=6,oc=null}function nu(e,t,n,r,o,i,s,l,c){e.cancelPendingCommit=null;do{su()}while(0!==Ec);if(0!==(6&nc))throw Error(a(327));if(null!==t){if(t===e.current)throw Error(a(177));if(i=t.lanes|t.childLanes,function(e,t,n,r,o,i){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var u=31-fe(n),d=1<<u;s[u]=0,l[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var f=p[u];null!==f&&(f.lane&=-536870913)}n&=~d}0!==r&&Te(e,r,0),0!==i&&0===o&&0!==e.tag&&(e.suspendedLanes|=i&~(a&~t))}(e,n,i|=jr,s,l,c),e===rc&&(oc=rc=null,ic=0),jc=t,Tc=e,Ac=n,_c=i,Pc=o,Nc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,J(ie,(function(){return lu(),null}))):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=D.T,D.T=null,o=I.p,I.p=2,s=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=np,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==o&&3!==p.nodeType||(l=s+o),p!==i||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===o&&(l=s),f===i&&++d===r&&(c=s),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},np=!1,Sl=t;null!==Sl;)if(e=(t=Sl).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,Sl=e;else for(;null!==Sl;){switch(i=(t=Sl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,o=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var m=gs(n.type,o,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){uu(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))md(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(a(163))}if(null!==(e=t.sibling)){e.return=t.return,Sl=e;break}Sl=t.return}}(e,t)}finally{nc=s,I.p=o,D.T=r}}Ec=1,ru(),ou(),iu()}}function ru(){if(1===Ec){Ec=0;var e=Tc,t=jc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=D.T,D.T=null;var r=I.p;I.p=2;var o=nc;nc|=4;try{Dl(t,e);var i=nd,a=er(e.containerInfo),s=i.focusedElem,l=i.selectionRange;if(a!==s&&s&&s.ownerDocument&&Zn(s.ownerDocument.documentElement,s)){if(null!==l&&tr(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var f=p.getSelection(),h=s.textContent.length,m=Math.min(l.start,h),g=void 0===l.end?m:Math.min(l.end,h);!f.extend&&m>g&&(a=g,g=m,m=a);var v=Xn(s,m),y=Xn(s,g);if(v&&y&&(1!==f.rangeCount||f.anchorNode!==v.node||f.anchorOffset!==v.offset||f.focusNode!==y.node||f.focusOffset!==y.offset)){var b=d.createRange();b.setStart(v.node,v.offset),f.removeAllRanges(),m>g?(f.addRange(b),f.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),f.addRange(b))}}}}for(d=[],f=s;f=f.parentNode;)1===f.nodeType&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var x=d[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}np=!!td,nd=td=null}finally{nc=o,I.p=r,D.T=n}}e.current=t,Ec=2}}function ou(){if(2===Ec){Ec=0;var e=Tc,t=jc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=D.T,D.T=null;var r=I.p;I.p=2;var o=nc;nc|=4;try{Cl(e,t.alternate,t)}finally{nc=o,I.p=r,D.T=n}}Ec=3}}function iu(){if(4===Ec||3===Ec){Ec=0,ee();var e=Tc,t=jc,n=Ac,r=Nc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Ec=5:(Ec=0,jc=Tc=null,au(e,e.pendingLanes));var o=e.pendingLanes;if(0===o&&(Cc=null),_e(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=D.T,o=I.p,I.p=2,D.T=null;try{for(var i=e.onRecoverableError,a=0;a<r.length;a++){var s=r[a];i(s.value,{componentStack:s.stack})}}finally{D.T=t,I.p=o}}0!==(3&Ac)&&su(),ku(e),o=e.pendingLanes,0!==(4194090&n)&&0!==(42&o)?e===Oc?Rc++:(Rc=0,Oc=e):Rc=0,Su(0,!1)}}function au(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Io(t)))}function su(e){return ru(),ou(),iu(),lu()}function lu(){if(5!==Ec)return!1;var e=Tc,t=_c;_c=0;var n=_e(Ac),r=D.T,o=I.p;try{I.p=32>n?32:n,D.T=null,n=Pc,Pc=null;var i=Tc,s=Ac;if(Ec=0,jc=Tc=null,Ac=0,0!==(6&nc))throw Error(a(331));var l=nc;if(nc|=4,Jl(i.current),Ml(i,i.current,s,n),nc=l,Su(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,i)}catch(c){}return!0}finally{I.p=o,D.T=r,au(e,t)}}function cu(e,t,n){t=Cr(n,t),null!==(e=ai(e,t=Ss(e.stateNode,t,2),2))&&(Ee(e,2),ku(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Cc||!Cc.has(r))){e=Cr(n,e),null!==(r=ai(t,n=Cs(2),2))&&(Es(n,r,t,e),Ee(r,2),ku(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(uc=!0,o.add(n),e=pu.bind(null,e,t,n),t.then(e,e))}function pu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(ic&n)===n&&(4===pc||3===pc&&(62914560&ic)===ic&&300>te()-wc?0===(2&nc)&&Mc(e,0):mc|=n,vc===ic&&(vc=0)),ku(e)}function fu(e,t){0===t&&(t=Se()),null!==(e=Nr(e,t))&&(Ee(e,t),ku(e))}function hu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),fu(e,n)}function mu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}null!==r&&r.delete(t),fu(e,n)}var gu=null,vu=null,yu=!1,bu=!1,xu=!1,wu=0;function ku(e){e!==vu&&null===e.next&&(null===vu?gu=vu=e:vu=vu.next=e),bu=!0,yu||(yu=!0,dd((function(){0!==(6&nc)?J(re,Cu):Eu()})))}function Su(e,t){if(!xu&&bu){xu=!0;do{for(var n=!1,r=gu;null!==r;){if(!t)if(0!==e){var o=r.pendingLanes;if(0===o)var i=0;else{var a=r.suspendedLanes,s=r.pingedLanes;i=(1<<31-fe(42|e)+1)-1,i=201326741&(i&=o&~(a&~s))?201326741&i|1:i?2|i:0}0!==i&&(n=!0,Au(r,i))}else i=ic,0===(3&(i=be(r,r===rc?i:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||xe(r,i)||(n=!0,Au(r,i));r=r.next}}while(n);xu=!1}}function Cu(){Eu()}function Eu(){bu=yu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==sd&&(sd=e,!0);return sd=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=gu;null!==r;){var o=r.next,i=Tu(r,t);0===i?(r.next=null,null===n?gu=o:n.next=o,null===o&&(vu=n)):(n=r,(0!==e||0!==(3&i))&&(bu=!0)),r=o}Su(e,!1)}function Tu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var a=31-fe(i),s=1<<a,l=o[a];-1===l?0!==(s&n)&&0===(s&r)||(o[a]=we(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}if(n=ic,n=be(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===ac||9===ac)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&X(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&X(r),_e(n)){case 2:case 8:n=oe;break;case 32:default:n=ie;break;case 268435456:n=se}return r=ju.bind(null,e),n=J(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&X(r),e.callbackPriority=2,e.callbackNode=null,2}function ju(e,t){if(0!==Ec&&5!==Ec)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(su()&&e.callbackNode!==n)return null;var r=ic;return 0===(r=be(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Fc(e,r,t),Tu(e,te()),null!=e.callbackNode&&e.callbackNode===n?ju.bind(null,e):null)}function Au(e,t){if(su())return null;Fc(e,t,!0)}function _u(){return 0===wu&&(wu=ke()),wu}function Pu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:_t(""+e)}function Nu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Ru=0;Ru<wr.length;Ru++){var Ou=wr[Ru];kr(Ou.toLowerCase(),"on"+(Ou[0].toUpperCase()+Ou.slice(1)))}kr(fr,"onAnimationEnd"),kr(hr,"onAnimationIteration"),kr(mr,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(gr,"onTransitionRun"),kr(vr,"onTransitionStart"),kr(yr,"onTransitionCancel"),kr(br,"onTransitionEnd"),Ye("onMouseEnter",["mouseout","mouseover"]),Ye("onMouseLeave",["mouseout","mouseover"]),Ye("onPointerEnter",["pointerout","pointerover"]),Ye("onPointerLeave",["pointerout","pointerover"]),Ve("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ve("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ve("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ve("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ve("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ve("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Du));function zu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;i=s,o.currentTarget=c;try{i(o)}catch(u){vs(u)}o.currentTarget=null,i=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;i=s,o.currentTarget=c;try{i(o)}catch(u){vs(u)}o.currentTarget=null,i=l}}}}function Fu(e,t){var n=t[Ie];void 0===n&&(n=t[Ie]=new Set);var r=e+"__bubble";n.has(r)||(Uu(t,e,2,!1),n.add(r))}function Lu(e,t,n){var r=0;t&&(r|=4),Uu(n,e,r,t)}var Bu="_reactListening"+Math.random().toString(36).slice(2);function qu(e){if(!e[Bu]){e[Bu]=!0,We.forEach((function(t){"selectionchange"!==t&&(Iu.has(t)||Lu(t,!1,e),Lu(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Bu]||(t[Bu]=!0,Lu("selectionchange",!1,t))}}function Uu(e,t,n,r){switch(cp(t)){case 2:var o=rp;break;case 8:o=op;break;default:o=ip}n=o.bind(null,t,n,e),o=void 0,!Bt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function $u(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===o)break;if(4===a)for(a=r.return;null!==a;){var c=a.tag;if((3===c||4===c)&&a.stateNode.containerInfo===o)return;a=a.return}for(;null!==s;){if(null===(a=Ue(s)))return;if(5===(c=a.tag)||6===c||26===c||27===c){r=i=a;continue e}s=s.parentNode}}r=r.return}zt((function(){var r=i,o=Nt(n),a=[];e:{var s=xr.get(e);if(void 0!==s){var c=Zt,u=e;switch(e){case"keypress":if(0===Ht(n))break e;case"keydown":case"keyup":c=mn;break;case"focusin":u="focus",c=an;break;case"focusout":u="blur",c=an;break;case"beforeblur":case"afterblur":c=an;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=on;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=vn;break;case fr:case hr:case mr:c=sn;break;case br:c=yn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=bn;break;case"copy":case"cut":case"paste":c=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn;break;case"toggle":case"beforetoggle":c=xn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),f=d?null!==s?s+"Capture":null:s;d=[];for(var h,m=r;null!==m;){var g=m;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===f||null!=(g=Ft(m,f))&&d.push(Mu(m,g,h)),p)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,o),a.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Pt||!(u=n.relatedTarget||n.fromElement)||!Ue(u)&&!u[De])&&(c||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ue(u):null)&&(p=l(u),d=u.tag,u!==p||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,g="onMouseLeave",f="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",f="onPointerEnter",m="pointer"),p=null==c?s:Me(c),h=null==u?s:Me(u),(s=new d(g,m+"leave",c,n,o)).target=p,s.relatedTarget=h,g=null,Ue(o)===r&&((d=new d(f,m+"enter",u,n,o)).target=h,d.relatedTarget=p,g=d),p=g,c&&u)e:{for(f=u,m=0,h=d=c;h;h=Hu(h))m++;for(h=0,g=f;g;g=Hu(g))h++;for(;0<m-h;)d=Hu(d),m--;for(;0<h-m;)f=Hu(f),h--;for(;m--;){if(d===f||null!==f&&d===f.alternate)break e;d=Hu(d),f=Hu(f)}d=null}else d=null;null!==c&&Wu(a,s,c,d,!1),null!==u&&null!==p&&Wu(a,p,u,d,!0)}if("select"===(c=(s=r?Me(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var v=Ln;else if(Rn(s))if(Bn)v=Vn;else{v=Wn;var y=Hn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Tt(r.elementType)&&(v=Ln):v=Kn;switch(v&&(v=v(e,r))?On(a,v,n,o):(y&&y(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&yt(s,"number",s.value)),y=r?Me(r):window,e){case"focusin":(Rn(y)||"true"===y.contentEditable)&&(rr=y,or=r,ir=null);break;case"focusout":ir=or=rr=null;break;case"mousedown":ar=!0;break;case"contextmenu":case"mouseup":case"dragend":ar=!1,sr(a,n,o);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(a,n,o)}var b;if(kn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Pn?An(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(En&&"ko"!==n.locale&&(Pn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Pn&&(b=Qt()):($t="value"in(Ut=o)?Ut.value:Ut.textContent,Pn=!0)),0<(y=Qu(r,x)).length&&(x=new cn(x,e,null,n,o),a.push({event:x,listeners:y}),b?x.data=b:null!==(b=_n(n))&&(x.data=b))),(b=Cn?function(e,t){switch(e){case"compositionend":return _n(t);case"keypress":return 32!==t.which?null:(jn=!0,Tn);case"textInput":return(e=t.data)===Tn&&jn?null:e;default:return null}}(e,n):function(e,t){if(Pn)return"compositionend"===e||!kn&&An(e,t)?(e=Qt(),Mt=$t=Ut=null,Pn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return En&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Qu(r,"onBeforeInput")).length&&(y=new cn("onBeforeInput","beforeinput",null,n,o),a.push({event:y,listeners:x}),y.data=b)),function(e,t,n,r,o){if("submit"===t&&n&&n.stateNode===o){var i=Pu((o[Oe]||null).action),a=r.submitter;a&&null!==(t=(t=a[Oe]||null)?Pu(t.formAction):a.getAttribute("formAction"))&&(i=t,a=null);var s=new Zt("action","action",null,r,o);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=a?Nu(o,a):new FormData(o);Na(n,{pending:!0,data:e,method:o.method,action:i},null,e)}}else"function"===typeof i&&(s.preventDefault(),e=a?Nu(o,a):new FormData(o),Na(n,{pending:!0,data:e,method:o.method,action:i},i,e))},currentTarget:o}]})}}(a,e,r,n,o)}zu(a,t)}))}function Mu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qu(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;if(5!==(o=o.tag)&&26!==o&&27!==o||null===i||(null!=(o=Ft(e,n))&&r.unshift(Mu(e,o,i)),null!=(o=Ft(e,t))&&r.push(Mu(e,o,i))),3===e.tag)return r;e=e.return}return[]}function Hu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Wu(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,o?null!=(c=Ft(n,i))&&a.unshift(Mu(n,c,l)):o||null!=(c=Ft(n,i))&&a.push(Mu(n,c,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Ku=/\r\n?/g,Vu=/\u0000|\uFFFD/g;function Yu(e){return("string"===typeof e?e:""+e).replace(Ku,"\n").replace(Vu,"")}function Gu(e,t){return t=Yu(t),Yu(e)===t}function Ju(){}function Xu(e,t,n,r,o,i){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||kt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&kt(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Et(e,r,i);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=_t(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&Xu(e,t,"name",o.name,o,null),Xu(e,t,"formEncType",o.formEncType,o,null),Xu(e,t,"formMethod",o.formMethod,o,null),Xu(e,t,"formTarget",o.formTarget,o,null)):(Xu(e,t,"encType",o.encType,o,null),Xu(e,t,"method",o.method,o,null),Xu(e,t,"target",o.target,o,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=_t(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Ju);break;case"onScroll":null!=r&&Fu("scroll",e);break;case"onScrollEnd":null!=r&&Fu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=_t(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Fu("beforetoggle",e),Fu("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=jt.get(n)||n,r)}}function Zu(e,t,n,r,o,i){switch(n){case"style":Et(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));e.innerHTML=n}}break;case"children":"string"===typeof r?kt(e,r):("number"===typeof r||"bigint"===typeof r)&&kt(e,""+r);break;case"onScroll":null!=r&&Fu("scroll",e);break;case"onScrollEnd":null!=r&&Fu("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Ju);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ke.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),"function"===typeof(i=null!=(i=e[Oe]||null)?i[n]:null)&&e.removeEventListener(t,i,o),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,o)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fu("error",e),Fu("load",e);var r,o=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Xu(e,t,r,s,n,null)}}return i&&Xu(e,t,"srcSet",n.srcSet,n,null),void(o&&Xu(e,t,"src",n.src,n,null));case"input":Fu("invalid",e);var l=r=s=i=null,c=null,u=null;for(o in n)if(n.hasOwnProperty(o)){var d=n[o];if(null!=d)switch(o){case"name":i=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(a(137,t));break;default:Xu(e,t,o,d,n,null)}}return vt(e,r,l,c,u,s,i,!1),void dt(e);case"select":for(i in Fu("invalid",e),o=s=r=null,n)if(n.hasOwnProperty(i)&&null!=(l=n[i]))switch(i){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":o=l;default:Xu(e,t,i,l,n,null)}return t=r,n=s,e.multiple=!!o,void(null!=t?bt(e,!!o,t,!1):null!=n&&bt(e,!!o,n,!0));case"textarea":for(s in Fu("invalid",e),r=i=o=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":o=l;break;case"defaultValue":i=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(a(91));break;default:Xu(e,t,s,l,n,null)}return wt(e,o,i,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(o=n[c]))if("selected"===c)e.selected=o&&"function"!==typeof o&&"symbol"!==typeof o;else Xu(e,t,c,o,n,null);return;case"dialog":Fu("beforetoggle",e),Fu("toggle",e),Fu("cancel",e),Fu("close",e);break;case"iframe":case"object":Fu("load",e);break;case"video":case"audio":for(o=0;o<Du.length;o++)Fu(Du[o],e);break;case"image":Fu("error",e),Fu("load",e);break;case"details":Fu("toggle",e);break;case"embed":case"source":case"link":Fu("error",e),Fu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(o=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Xu(e,t,u,o,n,null)}return;default:if(Tt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(o=n[d])&&Zu(e,t,d,o,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(o=n[l])&&Xu(e,t,l,o,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function od(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function id(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function ad(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var sd=null;var ld="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(pd)}:ld;function pd(e){setTimeout((function(){throw e}))}function fd(e){return"head"===e}function hd(e,t){var n=t,r=0,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0<r&&8>r){n=r;var a=e.ownerDocument;if(1&n&&wd(a.documentElement),2&n&&wd(a.body),4&n)for(wd(n=a.head),a=n.firstChild;a;){var s=a.nextSibling,l=a.nodeName;a[Be]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===a.rel.toLowerCase()||n.removeChild(a),a=s}}if(0===o)return e.removeChild(i),void jp(t);o--}else"$"===n||"$?"===n||"$!"===n?o++:r=n.charCodeAt(0)-48;else r=0;n=i}while(n);jp(t)}function md(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":md(n),qe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function vd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var yd=null;function bd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(a(452));return e;case"head":if(!(e=t.head))throw Error(a(453));return e;case"body":if(!(e=t.body))throw Error(a(454));return e;default:throw Error(a(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qe(e)}var kd=new Map,Sd=new Set;function Cd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Ed=I.d;I.d={f:function(){var e=Ed.f(),t=Uc();return e||t},r:function(e){var t=$e(e);null!==t&&5===t.tag&&"form"===t.type?Oa(t):Ed.r(e)},D:function(e){Ed.D(e),jd("dns-prefetch",e,null)},C:function(e,t){Ed.C(e,t),jd("preconnect",e,t)},L:function(e,t,n){Ed.L(e,t,n);var r=Td;if(r&&e&&t){var o='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(o+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(o+='[imagesizes="'+mt(n.imageSizes)+'"]')):o+='[href="'+mt(e)+'"]';var i=o;switch(t){case"style":i=_d(e);break;case"script":i=Rd(e)}kd.has(i)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),kd.set(i,e),null!==r.querySelector(o)||"style"===t&&r.querySelector(Pd(i))||"script"===t&&r.querySelector(Od(i))||(ed(t=r.createElement("link"),"link",e),He(t),r.head.appendChild(t)))}},m:function(e,t){Ed.m(e,t);var n=Td;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",o='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',i=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Rd(e)}if(!kd.has(i)&&(e=p({rel:"modulepreload",href:e},t),kd.set(i,e),null===n.querySelector(o))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Od(i)))return}ed(r=n.createElement("link"),"link",e),He(r),n.head.appendChild(r)}}},X:function(e,t){Ed.X(e,t);var n=Td;if(n&&e){var r=Qe(n).hoistableScripts,o=Rd(e),i=r.get(o);i||((i=n.querySelector(Od(o)))||(e=p({src:e,async:!0},t),(t=kd.get(o))&&Fd(e,t),He(i=n.createElement("script")),ed(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(o,i))}},S:function(e,t,n){Ed.S(e,t,n);var r=Td;if(r&&e){var o=Qe(r).hoistableStyles,i=_d(e);t=t||"default";var a=o.get(i);if(!a){var s={loading:0,preload:null};if(a=r.querySelector(Pd(i)))s.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=kd.get(i))&&zd(e,n);var l=a=r.createElement("link");He(l),ed(l,"link",e),l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),l.addEventListener("load",(function(){s.loading|=1})),l.addEventListener("error",(function(){s.loading|=2})),s.loading|=4,Id(a,t,r)}a={type:"stylesheet",instance:a,count:1,state:s},o.set(i,a)}}},M:function(e,t){Ed.M(e,t);var n=Td;if(n&&e){var r=Qe(n).hoistableScripts,o=Rd(e),i=r.get(o);i||((i=n.querySelector(Od(o)))||(e=p({src:e,async:!0,type:"module"},t),(t=kd.get(o))&&Fd(e,t),He(i=n.createElement("script")),ed(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(o,i))}}};var Td="undefined"===typeof document?null:document;function jd(e,t,n){var r=Td;if(r&&"string"===typeof t&&t){var o=mt(t);o='link[rel="'+e+'"][href="'+o+'"]',"string"===typeof n&&(o+='[crossorigin="'+n+'"]'),Sd.has(o)||(Sd.add(o),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(o)&&(ed(t=r.createElement("link"),"link",e),He(t),r.head.appendChild(t)))}}function Ad(e,t,n,r){var o,i,s,l,c=(c=Q.current)?Cd(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=_d(n.href),(r=(n=Qe(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=_d(n.href);var u=Qe(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Pd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),kd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},kd.set(e,n),u||(o=c,i=e,s=n,l=d.state,o.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=o.createElement("link"),l.preload=i,i.addEventListener("load",(function(){return l.loading|=1})),i.addEventListener("error",(function(){return l.loading|=2})),ed(i,"link",s),He(i),o.head.appendChild(i))))),t&&null===r)throw Error(a(528,""));return d}if(t&&null!==r)throw Error(a(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Rd(n),(r=(n=Qe(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function _d(e){return'href="'+mt(e)+'"'}function Pd(e){return'link[rel="stylesheet"]['+e+"]"}function Nd(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Rd(e){return'[src="'+mt(e)+'"]'}function Od(e){return"script[async]"+e}function Dd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,He(r),r;var o=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return He(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",o),Id(r,n.precedence,e),t.instance=r;case"stylesheet":o=_d(n.href);var i=e.querySelector(Pd(o));if(i)return t.state.loading|=4,t.instance=i,He(i),i;r=Nd(n),(o=kd.get(o))&&zd(r,o),He(i=(e.ownerDocument||e).createElement("link"));var s=i;return s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(i,"link",r),t.state.loading|=4,Id(i,n.precedence,e),t.instance=i;case"script":return i=Rd(n.src),(o=e.querySelector(Od(i)))?(t.instance=o,He(o),o):(r=n,(o=kd.get(i))&&Fd(r=p({},n),o),He(o=(e=e.ownerDocument||e).createElement("script")),ed(o,"link",r),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(a(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Id(r,n.precedence,e));return t.instance}function Id(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,i=o,a=0;a<r.length;a++){var s=r[a];if(s.dataset.precedence===t)i=s;else if(i!==o)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function zd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Fd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Ld=null;function Bd(e,t,n){if(null===Ld){var r=new Map,o=Ld=new Map;o.set(n,r)}else(r=(o=Ld).get(n))||(r=new Map,o.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var i=n[o];if(!(i[Be]||i[Re]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var a=i.getAttribute(t)||"";a=e+a;var s=r.get(a);s?s.push(i):r.set(a,[i])}}return r}function qd(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Ud(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var $d=null;function Md(){}function Qd(){if(this.count--,0===this.count)if(this.stylesheets)Wd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Hd=null;function Wd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Hd=new Map,t.forEach(Kd,e),Hd=null,Qd.call(e))}function Kd(e,t){if(!(4&t.state.loading)){var n=Hd.get(e);if(n)var r=n.get(null);else{n=new Map,Hd.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var a=o[i];"LINK"!==a.nodeName&&"not all"===a.getAttribute("media")||(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}a=(o=t.instance).getAttribute("data-precedence"),(i=n.get(a)||r)===r&&n.set(null,o),n.set(a,o),this.count++,r=Qd.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),i?i.parentNode.insertBefore(o,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(o,e.firstChild),t.state.loading|=4}}var Vd={$$typeof:w,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function Yd(e,t,n,r,o,i,a,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Gd(e,t,n,r,o,i,a,s,l,c,u,d){return e=new Yd(e,t,n,a,s,l,c,d),t=1,!0===i&&(t|=24),i=zr(3,null,null,t),e.current=i,i.stateNode=e,(t=Do()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},ri(i),e}function Jd(e){return e?e=Dr:Dr}function Xd(e,t,n,r,o,i){o=Jd(o),null===r.context?r.context=o:r.pendingContext=o,(r=ii(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=ai(e,r,t))&&(zc(n,0,t),si(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ep(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tp(e){if(13===e.tag){var t=Nr(e,67108864);null!==t&&zc(t,0,67108864),ep(e,67108864)}}var np=!0;function rp(e,t,n,r){var o=D.T;D.T=null;var i=I.p;try{I.p=2,ip(e,t,n,r)}finally{I.p=i,D.T=o}}function op(e,t,n,r){var o=D.T;D.T=null;var i=I.p;try{I.p=8,ip(e,t,n,r)}finally{I.p=i,D.T=o}}function ip(e,t,n,r){if(np){var o=ap(r);if(null===o)$u(e,t,r,sp,n),yp(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return dp=bp(dp,e,t,n,r,o),!0;case"dragenter":return pp=bp(pp,e,t,n,r,o),!0;case"mouseover":return fp=bp(fp,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return hp.set(i,bp(hp.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,mp.set(i,bp(mp.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(yp(e,r),4&t&&-1<vp.indexOf(e)){for(;null!==o;){var i=$e(o);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var a=ye(i.pendingLanes);if(0!==a){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;a;){var l=1<<31-fe(a);s.entanglements[1]|=l,a&=~l}ku(i),0===(6&nc)&&(kc=te()+500,Su(0,!1))}}break;case 13:null!==(s=Nr(i,2))&&zc(s,0,2),Uc(),ep(i,2)}if(null===(i=ap(r))&&$u(e,t,r,sp,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else $u(e,t,r,null,n)}}function ap(e){return lp(e=Nt(e))}var sp=null;function lp(e){if(sp=null,null!==(e=Ue(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sp=e,null}function cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case oe:return 8;case ie:case ae:return 32;case se:return 268435456;default:return 32}default:return 32}}var up=!1,dp=null,pp=null,fp=null,hp=new Map,mp=new Map,gp=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yp(e,t){switch(e){case"focusin":case"focusout":dp=null;break;case"dragenter":case"dragleave":pp=null;break;case"mouseover":case"mouseout":fp=null;break;case"pointerover":case"pointerout":hp.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mp.delete(t.pointerId)}}function bp(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=$e(t))&&tp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function xp(e){var t=Ue(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=I.p;try{return I.p=e,t()}finally{I.p=n}}(e.priority,(function(){if(13===n.tag){var e=Dc();e=Ae(e);var t=Nr(n,e);null!==t&&zc(t,0,e),ep(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function wp(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=ap(e.nativeEvent);if(null!==n)return null!==(t=$e(n))&&tp(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Pt=r,n.target.dispatchEvent(r),Pt=null,t.shift()}return!0}function kp(e,t,n){wp(e)&&n.delete(t)}function Sp(){up=!1,null!==dp&&wp(dp)&&(dp=null),null!==pp&&wp(pp)&&(pp=null),null!==fp&&wp(fp)&&(fp=null),hp.forEach(kp),mp.forEach(kp)}function Cp(e,t){e.blockedOn===t&&(e.blockedOn=null,up||(up=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Sp)))}var Ep=null;function Tp(e){Ep!==e&&(Ep=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){Ep===e&&(Ep=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],o=e[t+2];if("function"!==typeof r){if(null===lp(r||n))continue;break}var i=$e(n);null!==i&&(e.splice(t,3),t-=3,Na(i,{pending:!0,data:o,method:n.method,action:r},r,o))}})))}function jp(e){function t(t){return Cp(t,e)}null!==dp&&Cp(dp,e),null!==pp&&Cp(pp,e),null!==fp&&Cp(fp,e),hp.forEach(t),mp.forEach(t);for(var n=0;n<gp.length;n++){var r=gp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<gp.length&&null===(n=gp[0]).blockedOn;)xp(n),null===n.blockedOn&&gp.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var o=n[r],i=n[r+1],a=o[Oe]||null;if("function"===typeof i)a||Tp(n);else if(a){var s=null;if(i&&i.hasAttribute("formAction")){if(o=i,a=i[Oe]||null)s=a.formAction;else if(null!==lp(o))continue}else s=a.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),Tp(n)}}}function Ap(e){this._internalRoot=e}function _p(e){this._internalRoot=e}_p.prototype.render=Ap.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Xd(t.current,Dc(),e,t,null,null)},_p.prototype.unmount=Ap.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Xd(e.current,2,null,e,null,null),Uc(),t[De]=null}},_p.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pe();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gp.length&&0!==t&&t<gp[n].priority;n++);gp.splice(n,0,e),0===n&&xp(e)}};var Pp=o.version;if("19.1.0"!==Pp)throw Error(a(527,Pp,"19.1.0"));I.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return u(o),e;if(i===r)return u(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,c=o.child;c;){if(c===n){s=!0,n=o,r=i;break}if(c===r){s=!0,r=o,n=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===n){s=!0,n=i,r=o;break}if(c===r){s=!0,r=i,n=o;break}c=c.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Np={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Rp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rp.isDisabled&&Rp.supportsFiber)try{ue=Rp.inject(Np),de=Rp}catch(Dp){}}t.createRoot=function(e,t){if(!s(e))throw Error(a(299));var n=!1,r="",o=ys,i=bs,l=xs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(o=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Gd(e,1,!1,null,0,n,r,o,i,l,0,null),e[De]=t.current,qu(e),new Ap(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(a(299));var r=!1,o="",i=ys,l=bs,c=xs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Gd(e,1,!0,t,0,r,o,i,l,c,0,u)).context=Jd(null),n=t.current,(o=ii(r=Ae(r=Dc()))).callback=null,ai(n,o,r),n=r,t.current.lanes=n,Ee(t,n),ku(t),e[De]=t.current,qu(e),new _p(t)},t.version="19.1.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},S=Object.prototype.hasOwnProperty;function C(e,t,r,o,i,a){return r=a.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:a}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(){}function _(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return _((u=e._init)(e._payload),t,o,i,a)}}if(u)return a=a(e),u=""===i?"."+j(e,0):i,w(a)?(o="",null!=u&&(o=u.replace(T,"$&/")+"/"),_(a,t,o,"",(function(e){return e}))):null!=a&&(E(a)&&(l=a,c=o+(null==a.key||e&&e.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+u,a=C(l.type,c,void 0,0,0,l.props)),t.push(a)),1;u=0;var d,h=""===i?".":i+":";if(w(e))for(var m=0;m<e.length;m++)u+=_(i=e[m],t,o,s=h+j(i,m),a);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=f&&d[f]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(i=e.next()).done;)u+=_(i=i.value,t,o,s=h+j(i,m++),a);else if("object"===s){if("function"===typeof e.then)return _(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(A,A):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,o,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function P(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function O(){}t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=i,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return k.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(o=""+t.key),t)!S.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var a=Array(i),s=0;s<i;s++)a[s]=arguments[s+2];r.children=a}return C(e.type,o,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,o={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return C(e,i,void 0,0,0,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,n={};k.T=n;try{var r=e(),o=k.S;null!==o&&o(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(O,R)}catch(i){R(i)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,n){return k.H.useActionState(e,t,n)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=k.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,n){return k.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return k.H.useReducer(e,t,n)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return k.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return k.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function u(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},560:(e,t,n)=>{"use strict";n.r(t),n.d(t,{commonErrors:()=>l,knowledgeBase:()=>c,navigationMap:()=>i,options:()=>o,questions:()=>r,resolutions:()=>a,sections:()=>s});const r={ST1:{text:"Please select the following category to begin troubleshooting.",shortText:"Category selection",type:"multiple",section:"starting",importance:"high",completeSection:!1,hint:"Select the area where the customer is experiencing issues"},U1:{text:"Is the user able to log into QuickBooks Online successfully?",shortText:"Login successful?",type:"multiple",section:"user",importance:"high",completeSection:!1,hint:"Basic login functionality is the first step to troubleshoot"},U2:{text:"What specific permission or access issue is the user experiencing?",shortText:"Specific permission issue",type:"multiple",section:"user",importance:"high",completeSection:!1,hint:"Identifying the specific permission issue will help target the solution"},U3:{text:"Has the user's role been verified in QBO?",shortText:"Role verified?",type:"multiple",section:"user",importance:"high",completeSection:!1,hint:"Different roles have different access levels in QBO"},U4:{text:"What browser and device is the user accessing QBO from?",shortText:"Browser/device",type:"multiple",section:"user",importance:"medium",completeSection:!1,hint:"Browser compatibility issues can cause login problems"},U5:{text:"Have any of these common browser troubleshooting steps been tried?",shortText:"Browser troubleshooting",type:"multiple",section:"user",importance:"medium",completeSection:!1,hint:"Browser-related issues are common causes of login problems"},U6:{text:"Is Multi-Factor Authentication (MFA) causing login issues?",shortText:"MFA issues",type:"multiple",section:"user",importance:"medium",completeSection:!1,hint:"MFA issues can prevent successful login"},U7:{text:"Has the user received any specific error message during login?",shortText:"Login error message",type:"text",section:"user",importance:"medium",completeSection:!1,hint:"Error messages provide important clues for troubleshooting"},U8:{text:"Is the user trying to access a specific feature they don't have permission for?",shortText:"Feature permission issue",type:"multiple",section:"user",importance:"high",completeSection:!1,hint:"Feature-specific permissions can be adjusted in the user settings"},U9:{text:"Have you verified the user's custom role permissions?",shortText:"Custom role verified",type:"multiple",section:"user",importance:"medium",completeSection:!1,hint:"Custom roles may need specific permission adjustments"},U10:{text:"Have you recommended these permission adjustment steps?",shortText:"Permission adjustment steps",type:"multiple",section:"user",importance:"medium",completeSection:!1,hint:"Follow these steps to adjust user permissions correctly",textContent:"1. Log in as Admin or Company Admin\n2. Go to Gear icon > Manage Users\n3. Find the user and click Edit\n4. Adjust role or specific permissions as needed\n5. Save changes\n6. Have user log out and log back in"},U11:{text:"Has the company reached their user limit in their QBO subscription?",shortText:"User limit reached",type:"multiple",section:"user",importance:"medium",completeSection:!1,hint:"QBO subscriptions have limits on the number of users"},U12:{text:"Does the issue persist after implementing the user access solutions?",shortText:"Issue persists after user solutions",type:"multiple",section:"user",importance:"high",completeSection:!0,hint:"If the issue persists, we may need to check other aspects of QBO"},"U-UM1":{text:"What specific user management issue is the customer experiencing?",shortText:"User management issue type",type:"multiple",section:"user",importance:"high",completeSection:!1,hint:"Identifying the specific issue helps target the solution"},"U-UM2":{text:"Can the admin see and manage all users in the Manage Users section?",shortText:"Admin can manage users",type:"multiple",section:"user",importance:"high",completeSection:!1,hint:"Only admins can manage users in QBO"},"U-UM3":{text:"Is the user unable to be invited or is the invitation not being received?",shortText:"User invitation issue",type:"multiple",section:"user",importance:"medium",completeSection:!1,hint:"Email delivery issues can prevent successful user invitations"},"U-UM4":{text:"Is the issue related to deleting or removing a user?",shortText:"User removal issue",type:"multiple",section:"user",importance:"medium",completeSection:!1,hint:"Certain users cannot be removed if they have transactions"},"U-UM5":{text:"Have you advised on these steps for proper user management?",shortText:"User management steps advised",type:"multiple",section:"user",importance:"medium",completeSection:!1,hint:"These steps should resolve most user management issues",textContent:"1. Verify admin access\n2. Go to Gear icon > Manage Users\n3. Review current users and their roles\n4. For invitation issues: check email spelling, spam folders\n5. For deletion issues: ensure user has no associated transactions\n6. For role changes: select the appropriate role based on needed access"},"U-UM6":{text:"Does the issue persist after implementing the user management solutions?",shortText:"Issue persists after UM solutions",type:"multiple",section:"user",importance:"high",completeSection:!0,hint:"If the issue persists, we may need to check other aspects of QBO"},"U-B1":{text:"What specific billing issue is the customer experiencing?",shortText:"Billing issue type",type:"multiple",section:"user",importance:"high",completeSection:!1,hint:"Identifying the specific billing issue helps target the solution"},"U-B2":{text:"Does the user have admin or billing admin permissions?",shortText:"Billing permissions",type:"multiple",section:"user",importance:"high",completeSection:!1,hint:"Only admins or billing admins can access billing information"},"U-B3":{text:"Is the customer trying to update their payment method?",shortText:"Payment method update",type:"multiple",section:"user",importance:"medium",completeSection:!1,hint:"Payment method updates require specific permissions"},"U-B4":{text:"Is the customer experiencing a declined payment?",shortText:"Declined payment",type:"multiple",section:"user",importance:"medium",completeSection:!1,hint:"Declined payments can cause subscription issues"},"U-B5":{text:"Have you advised on these steps for billing issue resolution?",shortText:"Billing steps advised",type:"multiple",section:"user",importance:"medium",completeSection:!1,hint:"These steps should resolve most billing issues",textContent:"1. Verify admin access\n2. Go to Gear icon > Account and Settings > Billing & Subscription\n3. Verify subscription status and payment method\n4. For declined payments: update payment method\n5. For subscription changes: select appropriate plan\n6. For billing questions: review invoice and payment history"},"U-B6":{text:"Does the issue persist after implementing the billing solutions?",shortText:"Issue persists after billing solutions",type:"multiple",section:"user",importance:"high",completeSection:!0,hint:"If the issue persists, we may need to check other aspects of QBO"},D1:{text:"Is the issue related to missing or incorrect data in QBO?",shortText:"Data accuracy issues",type:"multiple",section:"data",importance:"high",completeSection:!1,hint:"Data issues can be due to various factors in QBO"},D2:{text:"Have you checked if the data issue is related to date range filters?",shortText:"Date filters checked",type:"multiple",section:"data",importance:"high",completeSection:!1,hint:'Date range filters are a common cause of "missing" data'},D3:{text:"Is the customer having trouble finding specific transactions?",shortText:"Finding transactions",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"Transactions may exist but be difficult to locate"},D4:{text:"Has the customer checked the transaction status (e.g., pending, voided, deleted)?",shortText:"Transaction status checked",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"Transactions may have different statuses that affect visibility"},D5:{text:"Is the customer experiencing data sync issues between devices or users?",shortText:"Data sync issues",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"QBO data should sync automatically across devices"},D6:{text:"Have custom reports been checked for the missing or incorrect data?",shortText:"Custom reports checked",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"Custom reports may include or exclude specific data"},D7:{text:"Have you advised on these steps to locate or correct data?",shortText:"Data location steps advised",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"These steps should help locate most missing data",textContent:"1. Check date range settings (try All Dates)\n2. Clear all filters\n3. Check transaction status (pending, voided, deleted)\n4. Use advanced search with specific criteria\n5. Check all related accounts or registers\n6. Verify report settings and customizations"},D8:{text:"Does the issue persist after implementing the data solutions?",shortText:"Issue persists after data solutions",type:"multiple",section:"data",importance:"high",completeSection:!0,hint:"If the issue persists, we may need to check other aspects of QBO"},"D-I1":{text:"What specific invoice or sales transaction issue is occurring?",shortText:"Invoice/sales issue type",type:"multiple",section:"data",importance:"high",completeSection:!1,hint:"Identifying the specific issue helps target the solution"},"D-I2":{text:"Is the customer unable to create a new invoice?",shortText:"Cannot create invoice",type:"multiple",section:"data",importance:"high",completeSection:!1,hint:"Permission or data issues may prevent invoice creation"},"D-I3":{text:"Is the customer having trouble with invoice customization?",shortText:"Invoice customization issue",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"Custom templates and fields require specific steps"},"D-I4":{text:"Are there issues with invoice email delivery?",shortText:"Invoice email issue",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"Email delivery depends on correct settings and email addresses"},"D-I5":{text:"Is the customer having trouble recording payments against invoices?",shortText:"Recording payments issue",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"Payment recording requires specific steps"},"D-I6":{text:"Have you advised on these steps for invoice and sales transaction issues?",shortText:"Invoice steps advised",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"These steps should resolve most invoice issues",textContent:"1. Verify permissions for creating/editing invoices\n2. Check customer information is complete\n3. Ensure products/services exist and are active\n4. For customization: use Templates under Account and Settings\n5. For email issues: verify email settings and recipient addresses\n6. For payment recording: use Receive Payment function and select appropriate invoices"},"D-I7":{text:"Does the issue persist after implementing the invoice solutions?",shortText:"Issue persists after invoice solutions",type:"multiple",section:"data",importance:"high",completeSection:!0,hint:"If the issue persists, we may need to check other aspects of QBO"},"D-BK1":{text:"What specific banking issue is the customer experiencing?",shortText:"Banking issue type",type:"multiple",section:"data",importance:"high",completeSection:!1,hint:"Identifying the specific banking issue helps target the solution"},"D-BK2":{text:"Is the customer having trouble connecting their bank account?",shortText:"Bank connection issue",type:"multiple",section:"data",importance:"high",completeSection:!1,hint:"Bank connection requires proper credentials and permissions"},"D-BK3":{text:"Is the customer experiencing issues with transaction downloads?",shortText:"Transaction download issue",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"Transaction downloads depend on bank connectivity and timing"},"D-BK4":{text:"Is there a problem with categorizing or matching transactions?",shortText:"Transaction categorization issue",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"Categorization and matching can be optimized for efficiency"},"D-BK5":{text:"Are there bank reconciliation issues?",shortText:"Reconciliation issue",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"Reconciliation requires specific steps and careful tracking"},"D-BK6":{text:"Have you advised on these steps for banking issues?",shortText:"Banking steps advised",type:"multiple",section:"data",importance:"medium",completeSection:!1,hint:"These steps should resolve most banking issues",textContent:"1. For connection issues: verify credentials and try reconnecting\n2. For download issues: check connection status and update\n3. For categorization: use rules and review excluded transactions\n4. For matching: verify duplicate detection settings\n5. For reconciliation: start with opening balance verification\n6. Check for transactions in Excluded or In Review tabs"},"D-BK7":{text:"Does the issue persist after implementing the banking solutions?",shortText:"Issue persists after banking solutions",type:"multiple",section:"data",importance:"high",completeSection:!0,hint:"If the issue persists, we may need to check other aspects of QBO"},A1:{text:"Is the issue related to the QBO application performance or features?",shortText:"Application performance issues",type:"multiple",section:"application",importance:"high",completeSection:!1,hint:"Application issues can affect overall QBO functionality"},A2:{text:"What browser is the customer using to access QBO?",shortText:"Browser type",type:"multiple",section:"application",importance:"high",completeSection:!1,hint:"Browser compatibility is crucial for QBO functionality"},A3:{text:"Have you checked if the browser is up to date?",shortText:"Browser updated",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"Outdated browsers can cause QBO performance issues"},A4:{text:"Are there browser extensions or plugins that might interfere with QBO?",shortText:"Browser extensions checked",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"Extensions can sometimes conflict with QBO functionality"},A5:{text:"Has the customer tried clearing cache and cookies?",shortText:"Cache/cookies cleared",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"Clearing cache and cookies can resolve many browser issues"},A6:{text:"Has the customer tried using QBO in incognito/private browsing mode?",shortText:"Incognito mode tried",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"Incognito mode bypasses extensions and cache issues"},A7:{text:"Is the issue specific to certain QBO features (reports, invoicing, etc.)?",shortText:"Feature-specific issue",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"Some issues only affect specific features"},A8:{text:"Have you advised on these browser and application troubleshooting steps?",shortText:"Browser steps advised",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"These steps should resolve most browser-related issues",textContent:"1. Update to the latest browser version\n2. Clear cache and cookies\n3. Try incognito/private browsing mode\n4. Disable browser extensions\n5. Try a different supported browser (Chrome, Firefox, Edge, Safari)\n6. Check for software conflicting with browser"},A9:{text:"Does the issue persist after implementing the application solutions?",shortText:"Issue persists after application solutions",type:"multiple",section:"application",importance:"high",completeSection:!0,hint:"If the issue persists, we may need to check other aspects of QBO"},"A-R1":{text:"What specific report issue is the customer experiencing?",shortText:"Report issue type",type:"multiple",section:"application",importance:"high",completeSection:!1,hint:"Identifying the specific report issue helps target the solution"},"A-R2":{text:"Is the customer having trouble accessing or running specific reports?",shortText:"Report access issue",type:"multiple",section:"application",importance:"high",completeSection:!1,hint:"Access to reports depends on permissions and settings"},"A-R3":{text:"Are there issues with report accuracy or missing data?",shortText:"Report accuracy issue",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"Report accuracy depends on data and settings"},"A-R4":{text:"Is the customer having trouble customizing reports?",shortText:"Report customization issue",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"Report customization requires specific steps"},"A-R5":{text:"Are there issues with exporting or printing reports?",shortText:"Report export/print issue",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"Export and print functions may have specific requirements"},"A-R6":{text:"Have you advised on these steps for report issues?",shortText:"Report steps advised",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"These steps should resolve most report issues",textContent:"1. Verify permissions for accessing reports\n2. Check date range and filter settings\n3. For customization: use Customize button and save custom reports\n4. For export issues: try different formats (Excel, PDF)\n5. For printing: use Print button in QBO, not browser print\n6. For accuracy: verify source data and accounting method"},"A-R7":{text:"Does the issue persist after implementing the report solutions?",shortText:"Issue persists after report solutions",type:"multiple",section:"application",importance:"high",completeSection:!0,hint:"If the issue persists, we may need to check other aspects of QBO"},"A-APP1":{text:"What specific third-party app integration issue is occurring?",shortText:"App integration issue type",type:"multiple",section:"application",importance:"high",completeSection:!1,hint:"Identifying the specific integration issue helps target the solution"},"A-APP2":{text:"Which third-party app is the customer trying to integrate?",shortText:"App name",type:"text",section:"application",importance:"high",completeSection:!1,hint:"Different apps have different integration requirements"},"A-APP3":{text:"Has the app been properly authorized in QBO?",shortText:"App authorization",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"Apps require proper authorization in QBO"},"A-APP4":{text:"Is there a data sync issue between QBO and the app?",shortText:"App sync issue",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"Data syncing requires proper setup and permissions"},"A-APP5":{text:"Have you advised on these steps for app integration issues?",shortText:"App integration steps advised",type:"multiple",section:"application",importance:"medium",completeSection:!1,hint:"These steps should resolve most integration issues",textContent:"1. Verify app is compatible with QBO version\n2. Go to Apps tab in QBO to manage connected apps\n3. Check authorization status and reconnect if needed\n4. Review data sync settings in both QBO and the app\n5. Ensure proper permissions are set for the app\n6. Check app developer support for specific integration issues"},"A-APP6":{text:"Does the issue persist after implementing the app integration solutions?",shortText:"Issue persists after app solutions",type:"multiple",section:"application",importance:"high",completeSection:!0,hint:"If the issue persists, we may need to check other aspects of QBO"},S1:{text:"Is the issue related to the customer's system, network, or environment?",shortText:"System/network issues",type:"multiple",section:"system",importance:"high",completeSection:!1,hint:"System and network issues can affect QBO accessibility"},S2:{text:"Has the internet connection been verified as stable?",shortText:"Internet stable",type:"multiple",section:"system",importance:"high",completeSection:!1,hint:"QBO requires a stable internet connection"},S3:{text:"Is the customer using a supported operating system and device?",shortText:"OS/device supported",type:"multiple",section:"system",importance:"medium",completeSection:!1,hint:"QBO works best on supported operating systems and devices"},S4:{text:"Is the customer connecting through a VPN, proxy, or corporate firewall?",shortText:"Network filtering present",type:"multiple",section:"system",importance:"medium",completeSection:!1,hint:"Network security measures can interfere with QBO"},S5:{text:"Have basic internet troubleshooting steps been completed?",shortText:"Internet troubleshooting done",type:"multiple",section:"system",importance:"medium",completeSection:!1,hint:"Basic troubleshooting can resolve many connection issues"},S6:{text:"Has the customer checked if QBO is experiencing a service outage?",shortText:"Service status checked",type:"multiple",section:"system",importance:"medium",completeSection:!1,hint:"Service outages can cause temporary access issues"},S7:{text:"Have you advised on these system and network troubleshooting steps?",shortText:"System steps advised",type:"multiple",section:"system",importance:"medium",completeSection:!1,hint:"These steps should resolve most system-related issues",textContent:"1. Run internet speed test (minimum 5 Mbps recommended)\n2. Restart router and modem\n3. Try different network (e.g., mobile hotspot)\n4. Check QBO status page for outages\n5. Temporarily disable VPN, firewall, or security software\n6. Update operating system and browser"},S8:{text:"Does the issue persist after implementing the system solutions?",shortText:"Issue persists after system solutions",type:"multiple",section:"system",importance:"high",completeSection:!0,hint:"If the issue persists, we may need to check other aspects of QBO"},"S-BR1":{text:"What specific backup, copy, or restore issue is occurring?",shortText:"Backup/restore issue type",type:"multiple",section:"system",importance:"high",completeSection:!1,hint:"Identifying the specific backup/restore issue helps target the solution"},"S-BR2":{text:"Is the customer trying to export company data from QBO?",shortText:"Data export issue",type:"multiple",section:"system",importance:"high",completeSection:!1,hint:"Data export has specific requirements and limitations"},"S-BR3":{text:"Is the customer trying to transfer data between QBO companies?",shortText:"Data transfer issue",type:"multiple",section:"system",importance:"medium",completeSection:!1,hint:"Data transfer between companies requires specific steps"},"S-BR4":{text:"Is the customer experiencing issues with QBO data integrity?",shortText:"Data integrity issue",type:"multiple",section:"system",importance:"medium",completeSection:!1,hint:"Data integrity issues require careful investigation"},"S-BR5":{text:"Have you advised on these steps for backup and restore issues?",shortText:"Backup/restore steps advised",type:"multiple",section:"system",importance:"medium",completeSection:!1,hint:"These steps should address most backup/restore issues",textContent:"1. For data export: use Export Data utility in Tools menu\n2. For company transfer: use Move Company feature or export/import\n3. For backups: advise on periodic reports export for records\n4. For data integrity: run Audit History reports\n5. Verify admin permissions for these operations\n6. Check available company data storage space"},"S-BR6":{text:"Does the issue persist after implementing the backup/restore solutions?",shortText:"Issue persists after backup/restore solutions",type:"multiple",section:"system",importance:"high",completeSection:!0,hint:"If the issue persists, we may need to check other aspects of QBO"},E1:{text:"Which QuickBooks Online error code is the client experiencing?",shortText:"Error code identification",type:"multiple",section:"errorcode",importance:"high",completeSection:!1,hint:"Identifying the specific error code helps target troubleshooting steps"},E2:{text:"Error H101: Client is experiencing a session timeout issue. When did this start occurring?",shortText:"H101 timing",type:"multiple",section:"errorcode",importance:"high",completeSection:!1,hint:"H101 errors occur when a session expires or times out"},E2a:{text:"For H101 errors, have you completed these troubleshooting steps?",shortText:"H101 troubleshooting",type:"multiple",section:"errorcode",importance:"medium",completeSection:!1,hint:"H101 errors are often related to browser settings or network issues",textContent:"1. Clear browser cache and cookies\n2. Log out of QBO completely\n3. Close all browser windows and restart\n4. Try using incognito/private mode\n5. Disable browser extensions that could interfere with sessions\n6. Check if the issue occurs on a different device/network"},E2b:{text:"Did the H101 error occur after a period of inactivity in QBO?",shortText:"H101 inactivity check",type:"multiple",section:"errorcode",importance:"medium",completeSection:!1,hint:"QBO sessions automatically time out after periods of inactivity"},E2c:{text:"Is the H101 error resolved after these steps?",shortText:"H101 resolution",type:"multiple",section:"errorcode",importance:"high",completeSection:!1,hint:"If not resolved, further investigation may be needed"}},o={ST1:[{id:"billing",text:"Billing"},{id:"user-management",text:"User Management / Login Issues"},{id:"invoices",text:"Invoices / Sales Transactions"},{id:"customers",text:"Customers"},{id:"subscription",text:"Subscription Management"},{id:"revshare",text:"Rev Share"},{id:"reports",text:"Reports"},{id:"banking",text:"Banking Feeds"},{id:"backup",text:"QBO Backup / Copy / Restore"},{id:"proadvisor",text:"ProAdvisor"},{id:"training",text:"Training and Certifications"},{id:"taxes",text:"Sales Taxes"},{id:"1099",text:"1099"},{id:"bills",text:"Bills / Vendor Transactions"},{id:"client",text:"Client Management"},{id:"coa",text:"COA / Register Issues"},{id:"apps",text:"3rd Party / QBO Apps"}],U1:[{id:"yes",text:"Yes, they can log in successfully"},{id:"no",text:"No, they cannot log in"},{id:"intermittent",text:"They experience intermittent login issues"}],U2:[{id:"admin",text:"Admin / Primary Admin"},{id:"standard",text:"Standard User"},{id:"master",text:"Master Admin"},{id:"accountant",text:"Accountant User"},{id:"reports",text:"Reports Only User"},{id:"time-tracking",text:"Time Tracking Only User"},{id:"unknown",text:"Unknown / Not Sure"}],U3:[{id:"yes",text:"Yes"},{id:"no",text:"No"},{id:"unsure",text:"Not sure"}],U4:[{id:"yes",text:"Yes"},{id:"no",text:"No"},{id:"unknown",text:"Unknown"}],U5:[{id:"yes",text:"Yes, all steps have been completed"},{id:"partial",text:"Some steps have been completed"},{id:"no",text:"No steps have been taken yet"}],U6:[{id:"resolved",text:"Issue resolved"},{id:"partially",text:"Partially resolved"},{id:"unresolved",text:"Not resolved"},{id:"proceed",text:"Proceed to next section"}],"U-UM1":[{id:"missing",text:"User missing from list"},{id:"permissions",text:"Incorrect permissions"},{id:"invitation",text:"Invitation issues"},{id:"deactivation",text:"User deactivation problems"},{id:"other",text:"Other user management issues"}],"U-UM2":[{id:"yes",text:"Yes"},{id:"no",text:"No"},{id:"unsure",text:"Not sure"}],"U-UM3":[{id:"unable-invite",text:"Unable to send invitation"},{id:"not-received",text:"Invitation not received"},{id:"error",text:"Error when accepting invitation"},{id:"other",text:"Other invitation issue"}],"U-B1":[{id:"payment",text:"Payment method issues"},{id:"subscription",text:"Subscription questions"},{id:"price",text:"Pricing concerns"},{id:"upgrade",text:"Upgrade/downgrade questions"},{id:"cancellation",text:"Cancellation issues"},{id:"other",text:"Other billing-related issues"}],D1:[{id:"yes",text:"Yes"},{id:"no",text:"No"},{id:"partial",text:"Partially"}],D2:[{id:"today",text:"Today"},{id:"yesterday",text:"Yesterday"},{id:"within_week",text:"Within the last week"},{id:"within_month",text:"Within the last month"},{id:"over_month",text:"Over a month ago"}],D3:[{id:"yes",text:"Yes"},{id:"no",text:"No"},{id:"unsure",text:"Not sure"}],D4:[{id:"yes",text:"Yes"},{id:"no",text:"No"},{id:"na",text:"Not applicable"}],D5:[{id:"yes",text:"Yes, all steps taken"},{id:"partial",text:"Some steps taken"},{id:"no",text:"No steps taken yet"}],D6:[{id:"resolved",text:"Fully resolved"},{id:"partially",text:"Partially resolved"},{id:"unresolved",text:"Not resolved"},{id:"proceed",text:"Proceed to next section"}],"D-I1":[{id:"creation",text:"Invoice creation problems"},{id:"sending",text:"Problems sending invoices"},{id:"payments",text:"Payment recording issues"},{id:"customization",text:"Invoice customization issues"},{id:"recurring",text:"Recurring invoice problems"},{id:"other",text:"Other invoice issues"}],"D-I2":[{id:"yes",text:"Yes"},{id:"no",text:"No"},{id:"unsure",text:"Not sure"}],"D-BK1":[{id:"connection",text:"Bank connection issues"},{id:"download",text:"Transaction download problems"},{id:"categorization",text:"Transaction categorization issues"},{id:"matching",text:"Transaction matching problems"},{id:"reconciliation",text:"Reconciliation issues"},{id:"other",text:"Other banking issues"}],A1:[{id:"yes",text:"Yes"},{id:"no",text:"No"},{id:"unsure",text:"Not sure"}],A2:[{id:"chrome",text:"Google Chrome"},{id:"firefox",text:"Firefox"},{id:"safari",text:"Safari"},{id:"edge",text:"Microsoft Edge"},{id:"ie",text:"Internet Explorer"},{id:"other",text:"Other"}],A3:[{id:"yes",text:"Yes, browser is updated"},{id:"no",text:"No, browser needs updating"},{id:"unsure",text:"Not sure"}],A4:[{id:"yes",text:"Yes, extensions are present"},{id:"no",text:"No extensions identified"},{id:"unsure",text:"Not checked yet"}],A5:[{id:"yes",text:"Yes"},{id:"no",text:"No"},{id:"partially",text:"Partially (only cache or only cookies)"}],A6:[{id:"yes",text:"Yes"},{id:"no",text:"No"},{id:"unsure",text:"Not sure"}],A7:[{id:"yes",text:"Yes, specific to certain features"},{id:"no",text:"No, affects the entire application"},{id:"unsure",text:"Not sure"}],A8:[{id:"yes",text:"Yes, all steps advised"},{id:"partial",text:"Some steps advised"},{id:"no",text:"No steps advised yet"}],A9:[{id:"resolved",text:"Issue resolved"},{id:"partially",text:"Partially resolved"},{id:"unresolved",text:"Not resolved"},{id:"proceed",text:"Proceed to next section"}],"A-R1":[{id:"access",text:"Report access issues"},{id:"accuracy",text:"Report accuracy problems"},{id:"customization",text:"Report customization issues"},{id:"export",text:"Export/print problems"},{id:"other",text:"Other report issues"}],"A-APP1":[{id:"connection",text:"App connection issues"},{id:"authorization",text:"App authorization problems"},{id:"sync",text:"Data sync issues"},{id:"functionality",text:"App functionality problems"},{id:"other",text:"Other app integration issues"}],S1:[{id:"yes",text:"Yes"},{id:"no",text:"No"},{id:"unsure",text:"Not sure"}],S2:[{id:"yes",text:"Yes, connection is stable"},{id:"no",text:"No, connection has issues"},{id:"intermittent",text:"Intermittent stability"}],S3:[{id:"yes",text:"Yes, using supported system"},{id:"no",text:"No, using unsupported system"},{id:"unsure",text:"Not sure"}],S4:[{id:"yes",text:"Yes"},{id:"no",text:"No"},{id:"unsure",text:"Not sure"}],S5:[{id:"yes",text:"Yes, all steps completed"},{id:"partial",text:"Some steps completed"},{id:"no",text:"No steps completed yet"}],S6:[{id:"yes",text:"Yes, checked status page"},{id:"no",text:"No, have not checked"},{id:"outage",text:"Yes, outage confirmed"}],S7:[{id:"yes",text:"Yes, all steps advised"},{id:"partial",text:"Some steps advised"},{id:"no",text:"No steps advised yet"}],S8:[{id:"resolved",text:"Issue resolved"},{id:"partially",text:"Partially resolved"},{id:"unresolved",text:"Not resolved"},{id:"proceed",text:"Proceed to next section"}],"S-BR1":[{id:"export",text:"Data export issues"},{id:"transfer",text:"Company transfer problems"},{id:"backup",text:"Backup creation issues"},{id:"integrity",text:"Data integrity concerns"},{id:"other",text:"Other backup/restore issues"}],E1:[{id:"h101",text:"H101 (Session timeout)"},{id:"h202",text:"H202 (Connection issue)"},{id:"h505",text:"H505 (Server error)"},{id:"other",text:"Other error code"},{id:"unknown",text:"Unknown error code"}]},i={ST1:{"user-management":"U1",billing:"U-B1",invoices:"D-I1",banking:"D-BK1",reports:"A-R1",apps:"A-APP1",backup:"S-BR1"},U1:{yes:"U2",no:"U3",intermittent:"U4"},U2:{admin:"U3",standard:"U3",master:"U3",accountant:"U3",reports:"U3","time-tracking":"U3",unknown:"U3"},U3:{yes:"U4",no:"U5",unsure:"U5"},U4:{yes:"U5",no:"U5",unknown:"U5"},U5:{yes:"U6",partial:"U6",no:"U6"},U6:{resolved:"ST1",partially:"D1",unresolved:"D1",proceed:"D1"},"U-UM1":{missing:"U-UM2",permissions:"U-UM2",invitation:"U-UM3",deactivation:"U-UM2",other:"U-UM2"},"U-UM2":{yes:"U5",no:"U5",unsure:"U5"},"U-UM3":{"unable-invite":"U5","not-received":"U5",error:"U5",other:"U5"},"U-B1":{payment:"U5",subscription:"U5",price:"U5",upgrade:"U5",cancellation:"U5",other:"U5"},D1:{yes:"D2",no:"D3",partial:"D2"},D2:{today:"D3",yesterday:"D3",within_week:"D3",within_month:"D3",over_month:"D3"},D3:{yes:"D4",no:"D4",unsure:"D4"},D4:{yes:"D5",no:"D5",na:"D5"},D5:{yes:"D6",partial:"D6",no:"D6"},D6:{resolved:"ST1",partially:"A1",unresolved:"A1",proceed:"A1"},"D-I1":{creation:"D-I2",sending:"D-I2",payments:"D-I2",customization:"D-I2",recurring:"D-I2",other:"D-I2"},"D-I2":{yes:"D-I3",no:"D-I3",unsure:"D-I3"},"D-I3":{yes:"D-I4",no:"D-I4",unsure:"D-I4"},"D-I4":{yes:"D-I5",no:"D-I5",unsure:"D-I5"},"D-I5":{yes:"D-I6",no:"D-I6",partial:"D-I6"},"D-I6":{yes:"D-I7",no:"D-I7",partial:"D-I7"},"D-I7":{resolved:"ST1",partially:"A1",unresolved:"A1",proceed:"A1"},"D-BK1":{connection:"D-BK2",download:"D-BK3",categorization:"D-BK4",matching:"D-BK4",reconciliation:"D-BK5",other:"D-BK6"},"D-BK2":{yes:"D-BK6",no:"D-BK6",unsure:"D-BK6"},"D-BK3":{yes:"D-BK6",no:"D-BK6",unsure:"D-BK6"},"D-BK4":{yes:"D-BK6",no:"D-BK6",unsure:"D-BK6"},"D-BK5":{yes:"D-BK6",no:"D-BK6",unsure:"D-BK6"},"D-BK6":{yes:"D-BK7",partial:"D-BK7",no:"D-BK7"},"D-BK7":{resolved:"ST1",partially:"A1",unresolved:"A1",proceed:"A1"},A1:{yes:"A2",no:"S1",unsure:"A2"},A2:{chrome:"A3",firefox:"A3",safari:"A3",edge:"A3",ie:"A3",other:"A3"},A3:{yes:"A4",no:"A8",unsure:"A8"},A4:{yes:"A8",no:"A5",unsure:"A8"},A5:{yes:"A6",no:"A8",partially:"A8"},A6:{yes:"A7",no:"A8",unsure:"A8"},A7:{yes:"A8",no:"A8",unsure:"A8"},A8:{yes:"A9",partial:"A9",no:"A9"},A9:{resolved:"ST1",partially:"S1",unresolved:"S1",proceed:"S1"},"A-R1":{access:"A-R2",accuracy:"A-R3",customization:"A-R4",export:"A-R5",other:"A-R6"},"A-R2":{yes:"A-R6",no:"A-R6",unsure:"A-R6"},"A-R3":{yes:"A-R6",no:"A-R6",unsure:"A-R6"},"A-R4":{yes:"A-R6",no:"A-R6",unsure:"A-R6"},"A-R5":{yes:"A-R6",no:"A-R6",unsure:"A-R6"},"A-R6":{yes:"A-R7",partial:"A-R7",no:"A-R7"},"A-R7":{resolved:"ST1",partially:"S1",unresolved:"S1",proceed:"S1"},"A-APP1":{connection:"A-APP2",authorization:"A-APP3",sync:"A-APP4",functionality:"A-APP5",other:"A-APP5"},"A-APP2":{any:"A-APP5"},"A-APP3":{yes:"A-APP5",no:"A-APP5",unsure:"A-APP5"},"A-APP4":{yes:"A-APP5",no:"A-APP5",unsure:"A-APP5"},"A-APP5":{yes:"A-APP6",partial:"A-APP6",no:"A-APP6"},"A-APP6":{resolved:"ST1",partially:"S1",unresolved:"S1",proceed:"S1"},S1:{yes:"S2",no:"E1",unsure:"S2"},S2:{yes:"S3",no:"S7",intermittent:"S7"},S3:{yes:"S4",no:"S7",unsure:"S7"},S4:{yes:"S7",no:"S5",unsure:"S7"},S5:{yes:"S6",partial:"S7",no:"S7"},S6:{yes:"S7",no:"S7",outage:"S7"},S7:{yes:"S8",partial:"S8",no:"S8"},S8:{resolved:"ST1",partially:"E1",unresolved:"E1",proceed:"E1"},"S-BR1":{export:"S-BR2",transfer:"S-BR3",backup:"S-BR5",integrity:"S-BR4",other:"S-BR5"},"S-BR2":{yes:"S-BR5",no:"S-BR5",unsure:"S-BR5"},"S-BR3":{yes:"S-BR5",no:"S-BR5",unsure:"S-BR5"},"S-BR4":{yes:"S-BR5",no:"S-BR5",unsure:"S-BR5"},"S-BR5":{yes:"S-BR6",partial:"S-BR6",no:"S-BR6"},"S-BR6":{resolved:"ST1",partially:"E1",unresolved:"E1",proceed:"E1"},E1:{h101:"E2",h202:"ST1",h505:"ST1",other:"ST1",unknown:"ST1"},E2:{any:"E2a"},E2a:{yes:"E2b",no:"E2b",partial:"E2b"},E2b:{yes:"E2c",no:"E2c",unsure:"E2c"},E2c:{resolved:"ST1",partially:"ST1",unresolved:"ST1"}},a={resolution_access:{title:"Access Permission Issue",steps:["Confirm the user has been invited to access the QBO account","Check which permission level they were granted (Admin, Standard User, etc.)","If needed, have the admin re-invite the user with the correct permissions","Guide the user through accepting the invitation","Verify they can log in successfully with the correct permissions"],relatedArticles:[{title:"Add users and manage their access in QuickBooks Online",url:"https://quickbooks.intuit.com/learn-support/en-us/user-management/add-users-and-manage-their-access-in-quickbooks-online/00/186370"}]},resolution_new_user:{title:"New User Setup Process",steps:["Verify the user's email address matches the invitation","Check for the invitation email in spam/junk folders","If invitation not received, have the admin resend the invitation","Guide the user through setting up their account password","Recommend bookmarking the QBO login page for future access"],relatedArticles:[{title:"Accept an invitation to QuickBooks Online",url:"https://quickbooks.intuit.com/learn-support/en-us/user-management/accept-an-invitation-to-quickbooks-online/00/186375"}]},resolution_device:{title:"Browser/Device Compatibility Issue",steps:["Recommend trying another browser (Chrome, Firefox, or Edge)","If on mobile, try a desktop computer if available","Check if browser extensions might be interfering","Clear browser cache and cookies","Try using an incognito/private browsing window"],relatedArticles:[{title:"System requirements for QuickBooks Online",url:"https://quickbooks.intuit.com/learn-support/en-us/help-article/general-information/system-requirements-for-quickbooks-online/L6qI3DHUo_US_en_US"}]},resolution_data_import:{title:"Data Import Issue Resolution",steps:["Verify the format of imported data matches required formats","Check for any import errors in the import logs","For large data sets, suggest breaking them into smaller batches","Consider using an accountant or ProAdvisor to review the data","For persistent issues, suggest contacting data services support"],relatedArticles:[{title:"Import data into QuickBooks Online",url:"https://quickbooks.intuit.com/learn-support/en-us/importing-data/import-data-into-quickbooks-online/00/186290"}]},resolution_third_party:{title:"Third-Party App Integration Issues",steps:["Identify which third-party apps are connected to QBO","Temporarily disconnect suspected problematic apps","Check for recent updates or known issues with those apps","Contact the app developer for specific integration issues","Reconnect apps one at a time to identify the problematic one"],relatedArticles:[{title:"Manage your QuickBooks Online apps",url:"https://quickbooks.intuit.com/learn-support/en-us/other-integrations/manage-your-quickbooks-online-apps/00/186360"}]},resolution_ie:{title:"Internet Explorer Compatibility Issue",steps:["Inform the user that Internet Explorer is not fully supported","Recommend switching to Chrome, Firefox, Edge, or Safari","Provide link to download a supported browser","If they must use IE, suggest enabling Compatibility Mode","For corporate environments with IE requirements, suggest discussing with IT"],relatedArticles:[{title:"System requirements for QuickBooks Online",url:"https://quickbooks.intuit.com/learn-support/en-us/help-article/general-information/system-requirements-for-quickbooks-online/L6qI3DHUo_US_en_US"}]},resolution_clear_cache:{title:"Browser Cache and Cookie Resolution",steps:["Guide the user through clearing browser cache and cookies","Provide specific instructions for their browser","Recommend disabling browser extensions temporarily","Suggest restarting the browser after clearing cache","If problem persists, recommend trying a different browser"],relatedArticles:[{title:"Clear browser cache and cookies to fix issues in QuickBooks Online",url:"https://quickbooks.intuit.com/learn-support/en-us/help-article/general-information/clear-browser-cache-and-cookies-to-fix-issues-in-quickbooks-online/L6UdSRFn8_US_en_US"}]},resolution_general:{title:"General Troubleshooting Steps",steps:["Confirm the user is on a supported browser and operating system","Suggest logging out and logging back in","Clear browser cache and cookies","Check internet connection speed and stability","Try accessing QBO in incognito/private browsing mode","If the problem persists, suggest contacting direct support"],relatedArticles:[{title:"Fix QuickBooks Online account issues",url:"https://quickbooks.intuit.com/learn-support/en-us/general-information/fix-quickbooks-online-account-issues/00/186280"}]},resolution_error_consistent:{title:"Consistent Error Resolution",steps:["Document the exact error code and message","Check for known issues matching this error in the knowledge base","Verify QBO service status for outages","Suggest checking system requirements","For persistent errors, recommend contacting direct support"],relatedArticles:[{title:"QuickBooks Online system status",url:"https://status.quickbooks.intuit.com/"}]}},s=[{id:"starting",title:"Starting Point",icon:"\ud83d\udd0d",description:"Identify the basic issue category to begin troubleshooting",color:"bg-blue-100",borderColor:"border-blue-500",completed:!1,current:!0,initialQuestion:"ST1"},{id:"user",title:"User",icon:"\ud83d\udc64",description:"Identify user permissions and access issues",color:"bg-indigo-100",borderColor:"border-indigo-500",completed:!1,current:!1,initialQuestion:"U1"},{id:"data",title:"Data",icon:"\ud83d\udcca",description:"Address data-related problems and inconsistencies",color:"bg-green-100",borderColor:"border-green-500",completed:!1,current:!1,initialQuestion:"D1"},{id:"application",title:"Application",icon:"\ud83d\udcbb",description:"Resolve application functionality issues",color:"bg-yellow-100",borderColor:"border-yellow-500",completed:!1,current:!1,initialQuestion:"A1"},{id:"system",title:"System",icon:"\ud83c\udf10",description:"Troubleshoot system and network-related problems",color:"bg-red-100",borderColor:"border-red-500",completed:!1,current:!1,initialQuestion:"S1"},{id:"errorcode",title:"Error Codes",icon:"\u26a0\ufe0f",description:"Troubleshoot specific QuickBooks Online error codes",color:"bg-orange-100",borderColor:"border-orange-500",completed:!1,current:!1,initialQuestion:"E1"},{id:"resources",title:"Resources",icon:"\ud83d\udcda",description:"Helpful articles, videos, and tools for QBO support",color:"bg-purple-100",borderColor:"border-purple-500",completed:!1,current:!1}],l=[{id:"error1",code:"QB-101",message:"Authentication failed",resolution:"Verify credentials and try again. Check for Caps Lock.",section:"user"},{id:"error2",code:"QB-102",message:"Account locked",resolution:"Wait 24 hours or contact support to unlock the account.",section:"user"},{id:"error3",code:"QB-103",message:"Session timeout",resolution:"Log in again. Check for inactivity settings.",section:"user"},{id:"error4",code:"QB-201",message:"Bank connection failed",resolution:"Update bank credentials or contact financial institution.",section:"data"},{id:"error5",code:"QB-202",message:"Duplicate transaction",resolution:"Review and remove duplicate entries manually.",section:"data"},{id:"error6",code:"QB-301",message:"Report generation failed",resolution:"Retry with a smaller date range or fewer filters.",section:"application"},{id:"error7",code:"QB-302",message:"Feature unavailable",resolution:"Verify subscription level includes this feature.",section:"application"},{id:"error8",code:"QB-401",message:"Browser not supported",resolution:"Try Chrome, Firefox, Edge, or Safari with the latest updates.",section:"system"},{id:"error9",code:"QB-402",message:"Slow performance",resolution:"Clear cache and cookies, close unused tabs/applications.",section:"system"}],c={callDrivers:[{id:"all",name:"All Types"},{id:"signin",name:"Sign In Issues"},{id:"banking",name:"Banking Issues"},{id:"transactions",name:"Transaction Issues"},{id:"reports",name:"Reporting Issues"},{id:"performance",name:"Performance Issues"},{id:"errors",name:"Error Messages"}],kbArticles:[{id:"kb001",title:"Troubleshooting Sign-In Issues",description:"Common solutions for sign-in problems in QuickBooks Online",url:"https://quickbooks.intuit.com/learn-support/en-us/sign-in/troubleshooting-qbo-sign-in-issues/00/370468",driver:"signin"},{id:"kb002",title:"Fixing Bank Connection Errors",description:"Steps to resolve bank feed connection issues",url:"https://quickbooks.intuit.com/learn-support/en-us/banking/fixing-bank-connection-errors/00/518963",driver:"banking"},{id:"kb003",title:"Missing or Duplicate Transactions",description:"How to find and correct missing or duplicate transactions",url:"https://quickbooks.intuit.com/learn-support/en-us/banking/missing-or-duplicate-transactions/00/516790",driver:"transactions"},{id:"kb004",title:"Common Report Issues",description:"Solutions for common reporting problems in QBO",url:"https://quickbooks.intuit.com/learn-support/en-us/reports-and-accounting/common-report-issues/00/383401",driver:"reports"},{id:"kb005",title:"Improving QBO Performance",description:"Tips to optimize QBO performance in your browser",url:"https://quickbooks.intuit.com/learn-support/en-us/qbo-troubleshooting/improving-qbo-performance/00/465321",driver:"performance"},{id:"kb006",title:"Understanding Error -6000, -816",description:"Causes and solutions for error code -6000, -816",url:"https://quickbooks.intuit.com/learn-support/en-us/error-codes/understanding-error-6000-816/00/392456",driver:"errors"},{id:"kb007",title:"Chrome Browser Troubleshooting",description:"Specific steps for Chrome-related issues with QBO",url:"https://quickbooks.intuit.com/learn-support/en-us/qbo-troubleshooting/chrome-browser-troubleshooting/00/502148",driver:"performance"},{id:"kb008",title:"Resolving Payment Processing Errors",description:"Steps to resolve common payment processing issues",url:"https://quickbooks.intuit.com/learn-support/en-us/payments/resolving-payment-processing-errors/00/478963",driver:"transactions"}],quickTips:[{id:"tip001",title:"Clear Browser Cache",content:"Clearing your browser cache often resolves many QBO issues. Try this first before more complex troubleshooting.",driver:"performance"},{id:"tip002",title:"Incognito Mode Test",content:"If you experience issues, try accessing QBO in an incognito/private browsing window to rule out extension conflicts.",driver:"signin"},{id:"tip003",title:"Update Browser",content:"Make sure your browser is updated to the latest version for optimal performance with QBO.",driver:"performance"},{id:"tip004",title:"Check System Requirements",content:"Verify your system meets the minimum requirements for QBO, including supported browsers and OS versions.",driver:"performance"},{id:"tip005",title:"Verify Internet Connection",content:"A stable internet connection with at least 5 Mbps download speed is recommended for QBO.",driver:"performance"},{id:"tip006",title:"Multiple Windows",content:"Avoid having multiple QBO company files open in different tabs or windows, as this can cause conflicts.",driver:"errors"},{id:"tip007",title:"Banking Updates",content:"Banking data typically updates once every 24 hours. Manual updates can be performed, but are limited.",driver:"banking"},{id:"tip008",title:"Report Load Times",content:"Large reports with extensive date ranges may take longer to load. Try narrowing your date range for faster results.",driver:"reports"}]}},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=a.p;try{if(l.T=null,a.p=2,e)return e()}finally{l.T=t,a.p=n,a.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,a.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&a.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),o="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},t.requestFormReset=function(e){a.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(e,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:o,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=o,t.jsxs=o},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>i(l,n))c<o&&0>i(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<o&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,v=!1,y="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,C||(C=!0,S());else{var t=r(u);null!==t&&R(k,t.startTime-e)}}var S,C=!1,E=-1,T=5,j=-1;function A(){return!!v||!(t.unstable_now()-j<T)}function _(){if(v=!1,C){var e=t.unstable_now();j=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(E),E=-1),h=!0;var i=f;try{t:{for(w(e),p=r(c);null!==p&&!(p.expirationTime>e&&A());){var a=p.callback;if("function"===typeof a){p.callback=null,f=p.priorityLevel;var s=a(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){p.callback=s,w(e),n=!0;break t}p===r(c)&&o(c),w(e)}else o(c);p=r(c)}if(null!==p)n=!0;else{var l=r(u);null!==l&&R(k,l.startTime-e),n=!1}}break e}finally{p=null,f=i,h=!1}n=void 0}}finally{n?S():C=!1}}}if("function"===typeof x)S=function(){x(_)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,N=P.port2;P.port1.onmessage=_,S=function(){N.postMessage(null)}}else S=function(){y(_,0)};function R(e,n){E=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(b(E),E=-1):g=!0,R(k,i-a))):(e.sortIndex=s,n(c,e),m||h||(m=!0,C||(C=!0,S()))),e},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".4505e05d.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="troubleshooter-tool-test:";n.l=(r,o,i,a)=>{if(e[r])e[r].push(o);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/troubleshooter-tool2/",(()=>{var e={792:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,i,a=r[0],s=r[1],l=r[2],c=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)l(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunktroubleshooter_tool_test=self.webpackChunktroubleshooter_tool_test||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=(n(358),"popstate");function o(){return d((function(e,t){let{pathname:n="/",search:r="",hash:o=""}=u(e.location.hash.substring(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),l("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:c(t))}),(function(e,t){a("/"===e.pathname.charAt(0),`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}),arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function i(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function a(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function s(e,t){return{usr:e.state,key:e.key,idx:t}}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?u(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function c(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function u(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:a=document.defaultView,v5Compat:u=!1}=o,d=a.history,p="POP",f=null,h=m();function m(){return(d.state||{idx:null}).idx}function g(){p="POP";let e=m(),t=null==e?null:e-h;h=e,f&&f({action:p,location:y.location,delta:t})}function v(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:c(e);return n=n.replace(/ $/,"%20"),i(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==h&&(h=0,d.replaceState({...d.state,idx:h},""));let y={get action(){return p},get location(){return e(a,d)},listen(e){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(r,g),f=e,()=>{a.removeEventListener(r,g),f=null}},createHref:e=>t(a,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){p="PUSH";let r=l(y.location,e,t);n&&n(r,e),h=m()+1;let o=s(r,h),i=y.createHref(r);try{d.pushState(o,"",i)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;a.location.assign(i)}u&&f&&f({action:p,location:y.location,delta:1})},replace:function(e,t){p="REPLACE";let r=l(y.location,e,t);n&&n(r,e),h=m();let o=s(r,h),i=y.createHref(r);d.replaceState(o,"",i),u&&f&&f({action:p,location:y.location,delta:0})},go:e=>d.go(e)};return y}new WeakMap;function p(e,t){return f(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function f(e,t,n,r){let o=A(("string"===typeof t?u(t):t).pathname||"/",n);if(null==o)return null;let i=h(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let s=0;null==a&&s<i.length;++s){let e=j(o);a=C(i[s],e,r)}return a}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=(e,o,a)=>{let s={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};s.relativePath.startsWith("/")&&(i(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length));let l=O([r,s.relativePath]),c=n.concat(s);e.children&&e.children.length>0&&(i(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),h(e.children,t,c,l)),(null!=e.path||e.index)&&t.push({path:l,score:S(l,e.index),routesMeta:c})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of m(e.path))o(e,t,n);else o(e,t)})),t}function m(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=m(r.join("/")),s=[];return s.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,v=3,y=2,b=1,x=10,w=-2,k=e=>"*"===e;function S(e,t){let n=e.split("/"),r=n.length;return n.some(k)&&(r+=w),t&&(r+=y),n.filter((e=>!k(e))).reduce(((e,t)=>e+(g.test(t)?v:""===t?b:x)),r)}function C(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=E({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=E({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:O([i,u.pathname]),pathnameBase:D(O([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=O([i,u.pathnameBase]))}return a}function E(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=T(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=s[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=o&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:a,pattern:e}}function T(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];a("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function j(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return a(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function A(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function _(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function P(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function N(e){let t=P(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function R(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=u(e):(r={...e},i(!r.pathname||!r.pathname.includes("?"),_("?","pathname","search",r)),i(!r.pathname||!r.pathname.includes("#"),_("#","pathname","hash",r)),i(!r.search||!r.search.includes("#"),_("#","search","hash",r)));let a,s=""===e||""===r.pathname,l=s?"/":r.pathname;if(null==l)a=n;else{let e=t.length-1;if(!o&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:o=""}="string"===typeof e?u(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:I(r),hash:z(o)}}(r,a),d=l&&"/"!==l&&l.endsWith("/"),p=(s||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!p||(c.pathname+="/"),c}var O=e=>e.join("/").replace(/\/\/+/g,"/"),D=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",z=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var L=["POST","PUT","PATCH","DELETE"],B=(new Set(L),["GET",...L]);new Set(B),Symbol("ResetLoaderData");var q=e.createContext(null);q.displayName="DataRouter";var U=e.createContext(null);U.displayName="DataRouterState";var $=e.createContext({isTransitioning:!1});$.displayName="ViewTransition";var M=e.createContext(new Map);M.displayName="Fetchers";var Q=e.createContext(null);Q.displayName="Await";var H=e.createContext(null);H.displayName="Navigation";var W=e.createContext(null);W.displayName="Location";var K=e.createContext({outlet:null,matches:[],isDataRoute:!1});K.displayName="Route";var V=e.createContext(null);V.displayName="RouteError";function Y(){return null!=e.useContext(W)}function G(){return i(Y(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(W).location}var J="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function X(t){e.useContext(H).static||e.useLayoutEffect(t)}function Z(){let{isDataRoute:t}=e.useContext(K);return t?function(){let{router:t}=le("useNavigate"),n=ue("useNavigate"),r=e.useRef(!1);X((()=>{r.current=!0}));let o=e.useCallback((async function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(r.current,J),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...o}))}),[t,n]);return o}():function(){i(Y(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(q),{basename:n,navigator:r}=e.useContext(H),{matches:o}=e.useContext(K),{pathname:s}=G(),l=JSON.stringify(N(o)),c=e.useRef(!1);X((()=>{c.current=!0}));let u=e.useCallback((function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(c.current,J),!c.current)return;if("number"===typeof e)return void r.go(e);let i=R(e,JSON.parse(l),s,"path"===o.relative);null==t&&"/"!==n&&(i.pathname="/"===i.pathname?n:O([n,i.pathname])),(o.replace?r.replace:r.push)(i,o.state,o)}),[n,r,l,s,t]);return u}()}e.createContext(null);function ee(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(K),{pathname:o}=G(),i=JSON.stringify(N(r));return e.useMemo((()=>R(t,JSON.parse(i),o,"path"===n)),[t,i,o,n])}function te(t,n,r,o){i(Y(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:l}=e.useContext(H),{matches:c}=e.useContext(K),d=c[c.length-1],f=d?d.params:{},h=d?d.pathname:"/",m=d?d.pathnameBase:"/",g=d&&d.route;{let e=g&&g.path||"";fe(h,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v,y=G();if(n){let e="string"===typeof n?u(n):n;i("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),v=e}else v=y;let b=v.pathname||"/",x=b;if("/"!==m){let e=m.replace(/^\//,"").split("/");x="/"+b.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!l&&r&&r.matches&&r.matches.length>0?r.matches:p(t,{pathname:x});a(g||null!=w,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),a(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=ae(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},f,e.params),pathname:O([m,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:O([m,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,r,o);return n&&k?e.createElement(W.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},k):k}function ne(){let t=de(),n=F(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o},a={padding:"2px 4px",backgroundColor:o},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:a},"ErrorBoundary")," or"," ",e.createElement("code",{style:a},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:i},r):null,s)}var re=e.createElement(ne,null),oe=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(K.Provider,{value:this.props.routeContext},e.createElement(V.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ie(t){let{routeContext:n,match:r,children:o}=t,i=e.useContext(q);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(K.Provider,{value:n},o)}function ae(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let o=t,a=r?.errors;if(null!=a){let e=o.findIndex((e=>e.route.id&&void 0!==a?.[e.route.id]));i(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let s=!1,l=-1;if(r)for(let e=0;e<o.length;e++){let t=o[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:n}=r,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||i){s=!0,o=l>=0?o.slice(0,l+1):[o[0]];break}}}return o.reduceRight(((t,i,c)=>{let u,d=!1,p=null,f=null;r&&(u=a&&i.route.id?a[i.route.id]:void 0,p=i.route.errorElement||re,s&&(l<0&&0===c?(fe("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,f=null):l===c&&(d=!0,f=i.route.hydrateFallbackElement||null)));let h=n.concat(o.slice(0,c+1)),m=()=>{let n;return n=u?p:d?f:i.route.Component?e.createElement(i.route.Component,null):i.route.element?i.route.element:t,e.createElement(ie,{match:i,routeContext:{outlet:t,matches:h,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===c)?e.createElement(oe,{location:r.location,revalidation:r.revalidation,component:p,error:u,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}function se(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function le(t){let n=e.useContext(q);return i(n,se(t)),n}function ce(t){let n=e.useContext(U);return i(n,se(t)),n}function ue(t){let n=function(t){let n=e.useContext(K);return i(n,se(t)),n}(t),r=n.matches[n.matches.length-1];return i(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function de(){let t=e.useContext(V),n=ce("useRouteError"),r=ue("useRouteError");return void 0!==t?t:n.errors?.[r]}var pe={};function fe(e,t,n){t||pe[e]||(pe[e]=!0,a(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return te(t,void 0,r,n)}));function he(t){let{to:n,replace:r,state:o,relative:s}=t;i(Y(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=e.useContext(H);a(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=e.useContext(K),{pathname:u}=G(),d=Z(),p=R(n,N(c),u,"path"===s),f=JSON.stringify(p);return e.useEffect((()=>{d(JSON.parse(f),{replace:r,state:o,relative:s})}),[d,f,s,r,o]),null}function me(e){i(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ge(t){let{basename:n="/",children:r=null,location:o,navigationType:s="POP",navigator:l,static:c=!1}=t;i(!Y(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=e.useMemo((()=>({basename:d,navigator:l,static:c,future:{}})),[d,l,c]);"string"===typeof o&&(o=u(o));let{pathname:f="/",search:h="",hash:m="",state:g=null,key:v="default"}=o,y=e.useMemo((()=>{let e=A(f,d);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:v},navigationType:s}}),[d,f,h,m,g,v,s]);return a(null!=y,`<Router basename="${d}"> is not able to match the URL "${f}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:e.createElement(H.Provider,{value:p},e.createElement(W.Provider,{children:r,value:y}))}function ve(e){let{children:t,location:n}=e;return te(ye(t),n)}e.Component;function ye(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,o)=>{if(!e.isValidElement(t))return;let a=[...n,o];if(t.type===e.Fragment)return void r.push.apply(r,ye(t.props.children,a));i(t.type===me,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),i(!t.props.index||!t.props.children,"An index route cannot have child routes.");let s={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(s.children=ye(t.props.children,a)),r.push(s)})),r}var be="get",xe="application/x-www-form-urlencoded";function we(e){return null!=e&&"string"===typeof e.tagName}var ke=null;var Se=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ce(e){return null==e||Se.has(e)?e:(a(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xe}"`),null)}function Ee(e,t){let n,r,o,i,a;if(we(s=e)&&"form"===s.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?A(a,t):null,n=e.getAttribute("method")||be,o=Ce(e.getAttribute("enctype"))||xe,i=new FormData(e)}else if(function(e){return we(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return we(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(r=s?A(s,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||be,o=Ce(e.getAttribute("formenctype"))||Ce(a.getAttribute("enctype"))||xe,i=new FormData(a,e),!function(){if(null===ke)try{new FormData(document.createElement("form"),0),ke=!1}catch(e){ke=!0}return ke}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(we(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=be,r=null,o=xe,a=e}var s;return i&&"text/plain"===o&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:a}}function Te(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function je(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Ae(e){return null!=e&&"string"===typeof e.page}function _e(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Pe(e,t,n,r,o,i){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter(((e,t)=>a(e,t)||s(e,t))):"data"===i?t.filter(((t,i)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(a(t,i)||s(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Ne(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o})).flat(1),[...new Set(r)];var r}function Re(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,o)=>{if(t&&!Ae(o)&&"script"===o.as&&o.href&&r.has(o.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(o));return n.has(i)||(n.add(i),e.push({key:i,link:o})),e}),[])}function Oe(e){return{__html:e}}Symbol("SingleFetchRedirect");var De=new Set([100,101,204,205]);function Ie(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===A(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function ze(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let o,i=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(F(n))return e.createElement(Fe,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),i);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Fe,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),i)}function Fe(t){let{title:n,renderScripts:r,isOutsideRemixApp:o,children:i}=t,{routeModules:a}=$e();return a.root?.Layout&&!o?i:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,r?e.createElement(Ye,null):null)))}function Le(e){return!0===e}function Be(){let t=e.useContext(q);return Te(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function qe(){let t=e.useContext(U);return Te(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ue=e.createContext(void 0);function $e(){let t=e.useContext(Ue);return Te(t,"You must render this element inside a <HydratedRouter> element"),t}function Me(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Qe(e,t,n){if(n&&!Ve)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function He(t){let{page:n,...r}=t,{router:o}=Be(),i=e.useMemo((()=>p(o.routes,n,o.basename)),[o.routes,n,o.basename]);return i?e.createElement(Ke,{page:n,matches:i,...r}):null}function We(t){let{manifest:n,routeModules:r}=$e(),[o,i]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await je(r,n);return e.links?e.links():[]}return[]})));return Re(r.flat(1).filter(_e).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||i(t)})),()=>{e=!0}}),[t,n,r]),o}function Ke(t){let{page:n,matches:r,...o}=t,i=G(),{manifest:a,routeModules:s}=$e(),{basename:l}=Be(),{loaderData:c,matches:u}=qe(),d=e.useMemo((()=>Pe(n,r,u,a,i,"data")),[n,r,u,a,i]),p=e.useMemo((()=>Pe(n,r,u,a,i,"assets")),[n,r,u,a,i]),f=e.useMemo((()=>{if(n===i.pathname+i.search+i.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=a.routes[n.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===n.route.id))&&n.route.id in c&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let o=Ie(n,l);return t&&e.size>0&&o.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[o.pathname+o.search]}),[l,c,i,a,d,r,n,s]),h=e.useMemo((()=>Ne(p,a)),[p,a]),m=We(p);return e.createElement(e.Fragment,null,f.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...o}))),h.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...o}))),m.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}Ue.displayName="FrameworkContext";var Ve=!1;function Ye(t){let{manifest:n,serverHandoffString:r,isSpaMode:o,ssr:i,renderMeta:a}=$e(),{router:s,static:l,staticContext:c}=Be(),{matches:u}=qe(),d=Le(i);a&&(a.didRenderScripts=!0);let f=Qe(u,null,o);e.useEffect((()=>{0}),[]);let h=e.useMemo((()=>{let o=c?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${f.map(((e,t)=>{let r=`route${t}`,o=n.routes[e.route.id];Te(o,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:a,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=o,u=[...i?[{module:i,varName:`${r}_clientAction`}]:[],...a?[{module:a,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${u.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,o=new Set(t.state.matches.map((e=>e.route.id))),i=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(i.pop();i.length>0;)a.push(`/${i.join("/")}`),i.pop();a.forEach((e=>{let n=p(t.routes,e,t.basename);n&&n.forEach((e=>o.add(e.route.id)))}));let s=[...o].reduce(((e,t)=>Object.assign(e,{[t]:r.routes[t]})),{});return{...r,routes:s,sri:!!n||void 0}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Oe(o),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Oe(i),type:"module",async:!0}))}),[]),m=Ve?[]:(n.entry.imports.concat(Ne(f,n,{includeHydrateFallback:!0})),[...new Set(g)]);var g;let v="object"===typeof n.sri?n.sri:{};return Ve?null:e.createElement(e.Fragment,null,"object"===typeof n.sri?e.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:v})}}):null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin,integrity:v[n.url],suppressHydrationWarning:!0}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin,integrity:v[n.entry.module],suppressHydrationWarning:!0}),m.map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin,integrity:v[n],suppressHydrationWarning:!0}))),h)}function Ge(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Je="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Je&&(window.__reactRouterVersion="7.5.1")}catch(sc){}function Xe(t){let{basename:n,children:r,window:i}=t,a=e.useRef();null==a.current&&(a.current=o({window:i,v5Compat:!0}));let s=a.current,[l,c]=e.useState({action:s.action,location:s.location}),u=e.useCallback((t=>{e.startTransition((()=>c(t)))}),[c]);return e.useLayoutEffect((()=>s.listen(u)),[s,u]),e.createElement(ge,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:s})}var Ze=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,et=e.forwardRef((function(t,n){let r,{onClick:o,discover:s="render",prefetch:l="none",relative:u,reloadDocument:d,replace:p,state:f,target:h,to:m,preventScrollReset:g,viewTransition:v,...y}=t,{basename:b}=e.useContext(H),x="string"===typeof m&&Ze.test(m),w=!1;if("string"===typeof m&&x&&(r=m,Je))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=A(t.pathname,b);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(sc){a(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(Y(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=e.useContext(H),{hash:a,pathname:s,search:l}=ee(t,{relative:n}),c=s;return"/"!==r&&(c="/"===s?r:O([r,s])),o.createHref({pathname:c,search:l,hash:a})}(m,{relative:u}),[S,C,E]=function(t,n){let r=e.useContext(Ue),[o,i]=e.useState(!1),[a,s]=e.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=n,f=e.useRef(null);e.useEffect((()=>{if("render"===t&&s(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(o){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[o]);let h=()=>{i(!0)},m=()=>{i(!1),s(!1)};return r?"intent"!==t?[a,f,{}]:[a,f,{onFocus:Me(l,h),onBlur:Me(c,m),onMouseEnter:Me(u,h),onMouseLeave:Me(d,m),onTouchStart:Me(p,h)}]:[!1,f,{}]}(l,y),T=function(t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=Z(),u=G(),d=ee(t,{relative:a});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:c(u)===c(d);l(t,{replace:n,state:o,preventScrollReset:i,relative:a,viewTransition:s})}}),[u,l,d,r,o,n,t,i,a,s])}(m,{replace:p,state:f,target:h,preventScrollReset:g,relative:u,viewTransition:v});let j=e.createElement("a",{...y,...E,href:r||k,onClick:w||d?o:function(e){o&&o(e),e.defaultPrevented||T(e)},ref:Ge(n,C),target:h,"data-discover":x||"render"!==s?void 0:"true"});return S&&!x?e.createElement(e.Fragment,null,j,e.createElement(He,{page:k})):j}));et.displayName="Link",e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:a="",end:s=!1,style:l,to:c,viewTransition:u,children:d,...p}=t,f=ee(c,{relative:p.relative}),h=G(),m=e.useContext(U),{navigator:g,basename:v}=e.useContext(H),y=null!=m&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext($);i(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=rt("useViewTransitionState"),a=ee(t,{relative:n.relative});if(!r.isTransitioning)return!1;let s=A(r.currentLocation.pathname,o)||r.currentLocation.pathname,l=A(r.nextLocation.pathname,o)||r.nextLocation.pathname;return null!=E(a.pathname,l)||null!=E(a.pathname,s)}(f)&&!0===u,b=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,x=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;o||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&v&&(w=A(w,v)||w);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let S,C=x===b||!s&&x.startsWith(b)&&"/"===x.charAt(k),T=null!=w&&(w===b||!s&&w.startsWith(b)&&"/"===w.charAt(b.length)),j={isActive:C,isPending:T,isTransitioning:y},_=C?r:void 0;S="function"===typeof a?a(j):[a,C?"active":null,T?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let P="function"===typeof l?l(j):l;return e.createElement(et,{...p,"aria-current":_,className:S,ref:n,style:P,to:c,viewTransition:u},"function"===typeof d?d(j):d)})).displayName="NavLink";var tt=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:o,navigate:a,reloadDocument:s,replace:l,state:u,method:d=be,action:p,onSubmit:f,relative:h,preventScrollReset:m,viewTransition:g,...v}=t,y=at(),b=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(H),o=e.useContext(K);i(o,"useFormAction must be used inside a RouteContext");let[a]=o.matches.slice(-1),s={...ee(t||".",{relative:n})},l=G();if(null==t){s.search=l.search;let e=new URLSearchParams(s.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();s.search=n?`?${n}`:""}}t&&"."!==t||!a.route.index||(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(s.pathname="/"===s.pathname?r:O([r,s.pathname]));return c(s)}(p,{relative:h}),x="get"===d.toLowerCase()?"get":"post",w="string"===typeof p&&Ze.test(p);return e.createElement("form",{ref:n,method:x,action:b,onSubmit:s?f:e=>{if(f&&f(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;y(t||e.currentTarget,{fetcherKey:o,method:n,navigate:a,replace:l,state:u,relative:h,preventScrollReset:m,viewTransition:g})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function nt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rt(t){let n=e.useContext(q);return i(n,nt(t)),n}tt.displayName="Form";var ot=0,it=()=>`__${String(++ot)}__`;function at(){let{router:t}=rt("useSubmit"),{basename:n}=e.useContext(H),r=ue("useRouteId");return e.useCallback((async function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:a,encType:s,formData:l,body:c}=Ee(e,n);if(!1===o.navigate){let e=o.fetcherKey||it();await t.fetch(e,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||a,formEncType:o.encType||s,flushSync:o.flushSync})}else await t.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||a,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})}),[t,n,r])}new TextEncoder;var st=n(579);const lt={agentId:"Unknown",sessionStartTime:null,currentQuestionId:"ST1",previousQuestionIds:[],currentSection:"starting",sectionProgress:{starting:0,user:0,data:0,application:0,system:0,errorcode:0,resources:0},completedSections:{starting:!1,user:!1,data:!1,application:!1,system:!1,errorcode:!1,resources:!1},answers:{},history:[],showKnowledgeBase:!1,analyticsData:{questionsAnswered:0,pathTaken:[],timeSpent:0},resourcesState:{currentType:"kbArticles",currentDriver:"all",recentlyViewed:[]}},ct="SET_AGENT_INFO",ut="START_SESSION",dt="ANSWER_QUESTION",pt="GO_TO_QUESTION",ft="GO_TO_PREVIOUS",ht="UPDATE_SECTION_PROGRESS",mt="TOGGLE_KNOWLEDGE_BASE",gt="UPDATE_RESOURCES_STATE",vt="ADD_VIEWED_RESOURCE",yt="COMPLETE_SECTION",bt="RESET",xt=(e,t)=>{switch(t.type){case ct:return{...e,agentId:t.payload};case ut:return{...e,sessionStartTime:(new Date).toISOString()};case dt:let o=t.payload.section||"unknown";if("unknown"===o&&t.payload.questionId){var r;const{questions:e}=n(560);o=(null===(r=e[t.payload.questionId])||void 0===r?void 0:r.section)||"unknown"}const i={id:t.payload.questionId,section:o,question:t.payload.questionText||`Question ${t.payload.questionId}`,shortQuestion:t.payload.shortQuestionText,answer:t.payload.answer,importance:t.payload.importance||"low",timestamp:(new Date).toISOString()},a=e.history.filter((e=>e.id!==t.payload.questionId));return{...e,answers:{...e.answers,[t.payload.questionId]:t.payload.answer},history:[...a,i],analyticsData:{...e.analyticsData,questionsAnswered:e.analyticsData.questionsAnswered+1,pathTaken:[...e.analyticsData.pathTaken,t.payload.questionId]}};case pt:return{...e,currentQuestionId:t.payload.questionId,previousQuestionIds:[...e.previousQuestionIds,e.currentQuestionId],currentSection:t.payload.section||e.currentSection};case ft:const s=[...e.previousQuestionIds],l=s.pop();let c=e.currentSection;const{questions:u}=n(560);if(u[l])c=u[l].section;else{const e=l.match(/question_([^_]+)_/);e&&(c=e[1])}const d=e.history.length>0?e.history.slice(0,-1):e.history;return{...e,currentQuestionId:l,previousQuestionIds:s,currentSection:c,history:d};case ht:return{...e,sectionProgress:{...e.sectionProgress,[t.payload.section]:t.payload.progress}};case mt:return{...e,showKnowledgeBase:!e.showKnowledgeBase};case gt:return{...e,resourcesState:{...e.resourcesState,...t.payload}};case vt:const p=[t.payload,...e.resourcesState.recentlyViewed.filter((e=>e.id!==t.payload.id))].slice(0,5);return{...e,resourcesState:{...e.resourcesState,recentlyViewed:p}};case yt:return{...e,completedSections:{...e.completedSections,[t.payload]:!0}};case bt:return{...lt,agentId:e.agentId,sessionStartTime:(new Date).toISOString()};default:return e}},wt=(0,e.createContext)(),kt=t=>{let{children:n}=t;const[r,o]=(0,e.useReducer)(xt,lt),i={state:r,updateAgentInfo:e=>{o({type:ct,payload:e}),o({type:ut})},answerQuestion:(e,t,n,r,i)=>{o({type:dt,payload:{questionId:e,answer:t,questionText:n,shortQuestionText:r,importance:i}})},goToQuestion:(e,t)=>{o({type:pt,payload:{questionId:e,section:t}})},goToPrevious:()=>{r.previousQuestionIds.length>0&&o({type:ft})},updateSectionProgress:(e,t)=>{o({type:ht,payload:{section:e,progress:t}})},toggleKnowledgeBase:()=>{o({type:mt})},updateResourcesState:e=>{o({type:gt,payload:e})},addViewedResource:e=>{o({type:vt,payload:e})},completeSection:e=>{o({type:yt,payload:e})},resetTroubleshooter:()=>{o({type:bt})}};return(0,st.jsx)(wt.Provider,{value:i,children:n})},St=()=>{const t=(0,e.useContext)(wt);if(!t)throw new Error("useTroubleshooter must be used within a TroubleshooterProvider");return t};var Ct=function(){return Ct=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ct.apply(this,arguments)};Object.create;function Et(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Tt=n(324),jt=n.n(Tt),At="-ms-",_t="-moz-",Pt="-webkit-",Nt="comm",Rt="rule",Ot="decl",Dt="@keyframes",It=Math.abs,zt=String.fromCharCode,Ft=Object.assign;function Lt(e){return e.trim()}function Bt(e,t){return(e=t.exec(e))?e[0]:e}function qt(e,t,n){return e.replace(t,n)}function Ut(e,t,n){return e.indexOf(t,n)}function $t(e,t){return 0|e.charCodeAt(t)}function Mt(e,t,n){return e.slice(t,n)}function Qt(e){return e.length}function Ht(e){return e.length}function Wt(e,t){return t.push(e),e}function Kt(e,t){return e.filter((function(e){return!Bt(e,t)}))}var Vt=1,Yt=1,Gt=0,Jt=0,Xt=0,Zt="";function en(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Vt,column:Yt,length:a,return:"",siblings:s}}function tn(e,t){return Ft(en("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function nn(e){for(;e.root;)e=tn(e.root,{children:[e]});Wt(e,e.siblings)}function rn(){return Xt=Jt>0?$t(Zt,--Jt):0,Yt--,10===Xt&&(Yt=1,Vt--),Xt}function on(){return Xt=Jt<Gt?$t(Zt,Jt++):0,Yt++,10===Xt&&(Yt=1,Vt++),Xt}function an(){return $t(Zt,Jt)}function sn(){return Jt}function ln(e,t){return Mt(Zt,e,t)}function cn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function un(e){return Vt=Yt=1,Gt=Qt(Zt=e),Jt=0,[]}function dn(e){return Zt="",e}function pn(e){return Lt(ln(Jt-1,mn(91===e?e+2:40===e?e+1:e)))}function fn(e){for(;(Xt=an())&&Xt<33;)on();return cn(e)>2||cn(Xt)>3?"":" "}function hn(e,t){for(;--t&&on()&&!(Xt<48||Xt>102||Xt>57&&Xt<65||Xt>70&&Xt<97););return ln(e,sn()+(t<6&&32==an()&&32==on()))}function mn(e){for(;on();)switch(Xt){case e:return Jt;case 34:case 39:34!==e&&39!==e&&mn(Xt);break;case 40:41===e&&mn(e);break;case 92:on()}return Jt}function gn(e,t){for(;on()&&e+Xt!==57&&(e+Xt!==84||47!==an()););return"/*"+ln(t,Jt-1)+"*"+zt(47===e?e:on())}function vn(e){for(;!cn(an());)on();return ln(e,Jt)}function yn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function bn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Ot:return e.return=e.return||e.value;case Nt:return"";case Dt:return e.return=e.value+"{"+yn(e.children,r)+"}";case Rt:if(!Qt(e.value=e.props.join(",")))return""}return Qt(n=yn(e.children,r))?e.return=e.value+"{"+n+"}":""}function xn(e,t,n){switch(function(e,t){return 45^$t(e,0)?(((t<<2^$t(e,0))<<2^$t(e,1))<<2^$t(e,2))<<2^$t(e,3):0}(e,t)){case 5103:return Pt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pt+e+e;case 4789:return _t+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Pt+e+_t+e+At+e+e;case 5936:switch($t(e,t+11)){case 114:return Pt+e+At+qt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Pt+e+At+qt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Pt+e+At+qt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Pt+e+At+e+e;case 6165:return Pt+e+At+"flex-"+e+e;case 5187:return Pt+e+qt(e,/(\w+).+(:[^]+)/,Pt+"box-$1$2"+At+"flex-$1$2")+e;case 5443:return Pt+e+At+"flex-item-"+qt(e,/flex-|-self/g,"")+(Bt(e,/flex-|baseline/)?"":At+"grid-row-"+qt(e,/flex-|-self/g,""))+e;case 4675:return Pt+e+At+"flex-line-pack"+qt(e,/align-content|flex-|-self/g,"")+e;case 5548:return Pt+e+At+qt(e,"shrink","negative")+e;case 5292:return Pt+e+At+qt(e,"basis","preferred-size")+e;case 6060:return Pt+"box-"+qt(e,"-grow","")+Pt+e+At+qt(e,"grow","positive")+e;case 4554:return Pt+qt(e,/([^-])(transform)/g,"$1"+Pt+"$2")+e;case 6187:return qt(qt(qt(e,/(zoom-|grab)/,Pt+"$1"),/(image-set)/,Pt+"$1"),e,"")+e;case 5495:case 3959:return qt(e,/(image-set\([^]*)/,Pt+"$1$`$1");case 4968:return qt(qt(e,/(.+:)(flex-)?(.*)/,Pt+"box-pack:$3"+At+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pt+e+e;case 4200:if(!Bt(e,/flex-|baseline/))return At+"grid-column-align"+Mt(e,t)+e;break;case 2592:case 3360:return At+qt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Bt(e.props,/grid-\w+-end/)}))?~Ut(e+(n=n[t].value),"span",0)?e:At+qt(e,"-start","")+e+At+"grid-row-span:"+(~Ut(n,"span",0)?Bt(n,/\d+/):+Bt(n,/\d+/)-+Bt(e,/\d+/))+";":At+qt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Bt(e.props,/grid-\w+-start/)}))?e:At+qt(qt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return qt(e,/(.+)-inline(.+)/,Pt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qt(e)-1-t>6)switch($t(e,t+1)){case 109:if(45!==$t(e,t+4))break;case 102:return qt(e,/(.+:)(.+)-([^]+)/,"$1"+Pt+"$2-$3$1"+_t+(108==$t(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ut(e,"stretch",0)?xn(qt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return qt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,s){return At+n+":"+r+s+(o?At+n+"-span:"+(i?a:+a-+r)+s:"")+e}));case 4949:if(121===$t(e,t+6))return qt(e,":",":"+Pt)+e;break;case 6444:switch($t(e,45===$t(e,14)?18:11)){case 120:return qt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pt+(45===$t(e,14)?"inline-":"")+"box$3$1"+Pt+"$2$3$1"+At+"$2box$3")+e;case 100:return qt(e,":",":"+At)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return qt(e,"scroll-","scroll-snap-")+e}return e}function wn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ot:return void(e.return=xn(e.value,e.length,n));case Dt:return yn([tn(e,{value:qt(e.value,"@","@"+Pt)})],r);case Rt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Bt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":nn(tn(e,{props:[qt(t,/:(read-\w+)/,":-moz-$1")]})),nn(tn(e,{props:[t]})),Ft(e,{props:Kt(n,r)});break;case"::placeholder":nn(tn(e,{props:[qt(t,/:(plac\w+)/,":"+Pt+"input-$1")]})),nn(tn(e,{props:[qt(t,/:(plac\w+)/,":-moz-$1")]})),nn(tn(e,{props:[qt(t,/:(plac\w+)/,At+"input-$1")]})),nn(tn(e,{props:[t]})),Ft(e,{props:Kt(n,r)})}return""}))}}function kn(e){return dn(Sn("",null,null,null,[""],e=un(e),0,[0],e))}function Sn(e,t,n,r,o,i,a,s,l){for(var c=0,u=0,d=a,p=0,f=0,h=0,m=1,g=1,v=1,y=0,b="",x=o,w=i,k=r,S=b;g;)switch(h=y,y=on()){case 40:if(108!=h&&58==$t(S,d-1)){-1!=Ut(S+=qt(pn(y),"&","&\f"),"&\f",It(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=pn(y);break;case 9:case 10:case 13:case 32:S+=fn(h);break;case 92:S+=hn(sn()-1,7);continue;case 47:switch(an()){case 42:case 47:Wt(En(gn(on(),sn()),t,n,l),l);break;default:S+="/"}break;case 123*m:s[c++]=Qt(S)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(S=qt(S,/\f/g,"")),f>0&&Qt(S)-d&&Wt(f>32?Tn(S+";",r,n,d-1,l):Tn(qt(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(Wt(k=Cn(S,t,n,c,u,o,s,b,x=[],w=[],d,i),i),123===y)if(0===u)Sn(S,t,k,k,x,i,d,s,w);else switch(99===p&&110===$t(S,3)?100:p){case 100:case 108:case 109:case 115:Sn(e,k,k,r&&Wt(Cn(e,k,k,0,0,o,s,b,o,x=[],d,w),w),o,w,d,s,r?x:w);break;default:Sn(S,k,k,k,[""],w,0,s,w)}}c=u=f=0,m=v=1,b=S="",d=a;break;case 58:d=1+Qt(S),f=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==rn())continue;switch(S+=zt(y),y*m){case 38:v=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(Qt(S)-1)*v,v=1;break;case 64:45===an()&&(S+=pn(on())),p=an(),u=d=Qt(b=S+=vn(sn())),y++;break;case 45:45===h&&2==Qt(S)&&(m=0)}}return i}function Cn(e,t,n,r,o,i,a,s,l,c,u,d){for(var p=o-1,f=0===o?i:[""],h=Ht(f),m=0,g=0,v=0;m<r;++m)for(var y=0,b=Mt(e,p+1,p=It(g=a[m])),x=e;y<h;++y)(x=Lt(g>0?f[y]+" "+b:qt(b,/&\f/g,f[y])))&&(l[v++]=x);return en(e,t,n,0===o?Rt:s,l,c,u,d)}function En(e,t,n,r){return en(e,t,n,Nt,zt(Xt),Mt(e,2,-2),0,r)}function Tn(e,t,n,r,o){return en(e,t,n,Ot,Mt(e,0,r),Mt(e,r+1,-1),r,o)}var jn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},An="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",_n="active",Pn="data-styled-version",Nn="6.1.17",Rn="/*!sc*/\n",On="undefined"!=typeof window&&"HTMLElement"in window,Dn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/troubleshooter-tool2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),In={},zn=(new Set,Object.freeze([])),Fn=Object.freeze({});function Ln(e,t,n){return void 0===n&&(n=Fn),e.theme!==n.theme&&e.theme||t||n.theme}var Bn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Un=/(^-|-$)/g;function $n(e){return e.replace(qn,"-").replace(Un,"")}var Mn=/(a)(d)/gi,Qn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Hn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Qn(t%52)+n;return(Qn(t%52)+n).replace(Mn,"$1-$2")}var Wn,Kn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Vn=function(e){return Kn(5381,e)};function Yn(e){return Hn(Vn(e)>>>0)}function Gn(e){return e.displayName||e.name||"Component"}function Jn(e){return"string"==typeof e&&!0}var Xn="function"==typeof Symbol&&Symbol.for,Zn=Xn?Symbol.for("react.memo"):60115,er=Xn?Symbol.for("react.forward_ref"):60112,tr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},or=((Wn={})[er]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wn[Zn]=rr,Wn);function ir(e){return("type"in(t=e)&&t.type.$$typeof)===Zn?rr:"$$typeof"in e?or[e.$$typeof]:tr;var t}var ar=Object.defineProperty,sr=Object.getOwnPropertyNames,lr=Object.getOwnPropertySymbols,cr=Object.getOwnPropertyDescriptor,ur=Object.getPrototypeOf,dr=Object.prototype;function pr(e,t,n){if("string"!=typeof t){if(dr){var r=ur(t);r&&r!==dr&&pr(e,r,n)}var o=sr(t);lr&&(o=o.concat(lr(t)));for(var i=ir(e),a=ir(t),s=0;s<o.length;++s){var l=o[s];if(!(l in nr||n&&n[l]||a&&l in a||i&&l in i)){var c=cr(t,l);try{ar(e,l,c)}catch(e){}}}}return e}function fr(e){return"function"==typeof e}function hr(e){return"object"==typeof e&&"styledComponentId"in e}function mr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function gr(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function vr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function yr(e,t,n){if(void 0===n&&(n=!1),!n&&!vr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=yr(e[r],t[r]);else if(vr(t))for(var r in t)e[r]=yr(e[r],t[r]);return e}function br(e,t){Object.defineProperty(e,"toString",{value:t})}function xr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var wr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw xr(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(Rn);return t},e}(),kr=new Map,Sr=new Map,Cr=1,Er=function(e){if(kr.has(e))return kr.get(e);for(;Sr.has(Cr);)Cr++;var t=Cr++;return kr.set(e,t),Sr.set(t,e),t},Tr=function(e,t){Cr=t+1,kr.set(e,t),Sr.set(t,e)},jr="style[".concat(An,"][").concat(Pn,'="').concat(Nn,'"]'),Ar=new RegExp("^".concat(An,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_r=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Pr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Rn),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(Ar);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(Tr(u,c),_r(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},Nr=function(e){for(var t=document.querySelectorAll(jr),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(An)!==_n&&(Pr(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Rr(){return n.nc}var Or=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(An,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(An,_n),r.setAttribute(Pn,Nn);var a=Rr();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Dr=function(){function e(e){this.element=Or(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw xr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ir=function(){function e(e){this.element=Or(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),zr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Fr=On,Lr={isServer:!On,useCSSOMInjection:!Dn},Br=function(){function e(e,t,n){void 0===e&&(e=Fn),void 0===t&&(t={});var r=this;this.options=Ct(Ct({},Lr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&On&&Fr&&(Fr=!1,Nr(this)),br(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Sr.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var s="".concat(An,".g").concat(n,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(Rn)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return Er(e)},e.prototype.rehydrate=function(){!this.server&&On&&Nr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Ct(Ct({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new zr(n):t?new Dr(n):new Ir(n)}(this.options),new wr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Er(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Er(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Er(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),qr=/&/g,Ur=/^\s*\/\/.*$/gm;function $r(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=$r(e.children,t)),e}))}function Mr(e){var t,n,r,o=void 0===e?Fn:e,i=o.options,a=void 0===i?Fn:i,s=o.plugins,l=void 0===s?zn:s,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===Rt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(qr,n).replace(r,c))})),a.prefix&&u.push(wn),u.push(bn);var d=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Ur,""),c=kn(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(c=$r(c,a.namespace));var d,p=[];return yn(c,function(e){var t=Ht(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||xr(15),Kn(e,t.name)}),5381).toString():"",d}var Qr=new Br,Hr=Mr(),Wr=e.createContext({shouldForwardProp:void 0,styleSheet:Qr,stylis:Hr}),Kr=(Wr.Consumer,e.createContext(void 0));function Vr(){return(0,e.useContext)(Wr)}function Yr(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],o=n[1],i=Vr().styleSheet,a=(0,e.useMemo)((function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,i]),s=(0,e.useMemo)((function(){return Mr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){jt()(r,t.stylisPlugins)||o(t.stylisPlugins)}),[t.stylisPlugins]);var l=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:a,stylis:s}}),[t.shouldForwardProp,a,s]);return e.createElement(Wr.Provider,{value:l},e.createElement(Kr.Provider,{value:s},t.children))}var Gr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Hr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,br(this,(function(){throw xr(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Hr),this.name+e.hash},e}(),Jr=function(e){return e>="A"&&e<="Z"};function Xr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Jr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Zr=function(e){return null==e||!1===e||""===e},eo=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Zr(i)&&(Array.isArray(i)&&i.isCss||fr(i)?r.push("".concat(Xr(o),":"),i,";"):vr(i)?r.push.apply(r,Et(Et(["".concat(o," {")],eo(i),!1),["}"],!1)):r.push("".concat(Xr(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in jn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function to(e,t,n,r){return Zr(e)?[]:hr(e)?[".".concat(e.styledComponentId)]:fr(e)?!fr(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:to(e(t),t,n,r):e instanceof Gr?n?(e.inject(n,r),[e.getName(r)]):[e]:vr(e)?eo(e):Array.isArray(e)?Array.prototype.concat.apply(zn,e.map((function(e){return to(e,t,n,r)}))):[e.toString()];var o}function no(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(fr(n)&&!hr(n))return!1}return!0}var ro=Vn(Nn),oo=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&no(e),this.componentId=t,this.baseHash=Kn(ro,t),this.baseStyle=n,Br.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=mr(r,this.staticRulesId);else{var o=gr(to(this.rules,e,t,n)),i=Hn(Kn(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=mr(r,i),this.staticRulesId=i}else{for(var s=Kn(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=gr(to(u,e,t,n));s=Kn(s,d+c),l+=d}}if(l){var p=Hn(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=mr(r,p)}}return r},e}(),io=e.createContext(void 0);io.Consumer;var ao={};new Set;function so(t,n,r){var o=hr(t),i=t,a=!Jn(t),s=n.attrs,l=void 0===s?zn:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":$n(e);ao[n]=(ao[n]||0)+1;var r="".concat(n,"-").concat(Yn(Nn+n+ao[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return Jn(e)?"styled.".concat(e):"Styled(".concat(Gn(e),")")}(t):d,f=n.displayName&&n.componentId?"".concat($n(n.displayName),"-").concat(n.componentId):n.componentId||u,h=o&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new oo(r,f,o?i.componentStyle:void 0);function b(t,n){return function(t,n,r){var o=t.attrs,i=t.componentStyle,a=t.defaultProps,s=t.foldedComponentIds,l=t.styledComponentId,c=t.target,u=e.useContext(io),d=Vr(),p=t.shouldForwardProp||d.shouldForwardProp,f=Ln(n,u,a)||Fn,h=function(e,t,n){for(var r,o=Ct(Ct({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=fr(r=e[i])?r(o):r;for(var s in a)o[s]="className"===s?mr(o[s],a[s]):"style"===s?Ct(Ct({},o[s]),a[s]):a[s]}return t.className&&(o.className=mr(o.className,t.className)),o}(o,n,f),m=h.as||c,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===f||("forwardedAs"===v?g.as=h.forwardedAs:p&&!p(v,m)||(g[v]=h[v]));var y=function(e,t){var n=Vr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),b=mr(s,l);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[Jn(m)&&!Bn.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,e.createElement)(m,g)}(x,t,n)}b.displayName=p;var x=e.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=p,x.shouldForwardProp=m,x.foldedComponentIds=o?mr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=f,x.target=o?i.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)yr(e,o[r],!0);return e}({},i.defaultProps,e):e}}),br(x,(function(){return".".concat(x.styledComponentId)})),a&&pr(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function lo(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var co=function(e){return Object.assign(e,{isCss:!0})};function uo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(fr(e)||vr(e))return co(to(lo(zn,Et([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?to(r):co(to(lo(r,t)))}function po(e,t,n){if(void 0===n&&(n=Fn),!t)throw xr(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,uo.apply(void 0,Et([r],o,!1)))};return r.attrs=function(r){return po(e,t,Ct(Ct({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return po(e,t,Ct(Ct({},n),r))},r}var fo=function(e){return po(so,e)},ho=fo;Bn.forEach((function(e){ho[e]=fo(e)}));var mo=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=no(e),Br.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(gr(to(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Br.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=Rr(),r=gr([n&&'nonce="'.concat(n,'"'),"".concat(An,'="true"'),"".concat(Pn,'="').concat(Nn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw xr(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw xr(2);var r=t.instance.toString();if(!r)return[];var o=((n={})[An]="",n[Pn]=Nn,n.dangerouslySetInnerHTML={__html:r},n),i=Rr();return i&&(o.nonce=i),[e.createElement("style",Ct({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Br({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw xr(2);return e.createElement(Yr,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw xr(3)}})(),"__sc-".concat(An,"__");const go=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=uo.apply(void 0,Et([t],n,!1)),i="sc-global-".concat(Yn(JSON.stringify(o))),a=new mo(o,i),s=function(t){var n=Vr(),r=e.useContext(io),o=e.useRef(n.styleSheet.allocateGSInstance(i)).current;return n.styleSheet.server&&l(o,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return l(o,t,n.styleSheet,r,n.stylis),function(){return a.removeStyles(o,n.styleSheet)}}),[o,t,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,o){if(a.isStatic)a.renderStyles(e,In,n,o);else{var i=Ct(Ct({},t),{theme:Ln(t,r,s.defaultProps)});a.renderStyles(e,i,n,o)}}return e.memo(s)})`
  :root {
    /* Primary Colors */
    --qbo-purple-primary: #6A39B3;
    --qbo-purple-dark: #4E2A87;
    --qbo-purple-darker: #341C5C;
    --qbo-purple-light: #8A5CD6;
    --qbo-purple-lighter: #F2E9FC;
    --qbo-purple-lightest: #F8F2FF;
    
    /* Header Colors */
    --header-bg: #6A39B3;
    --header-dark-bg: #4E2A87;
    --header-darker-bg: #341C5C;
    --header-text: #FFFFFF;
    
    /* Status Colors */
    --success-color: #16A34A;
    --warning-color: #F59E0B;
    --error-color: #DC2626;
    --alert-color: #EF4444;
    
    /* Text Colors */
    --text-primary: #1E293B;
    --text-secondary: #475569;
    --text-light: #94A3B8;
    --text-white: #FFFFFF;
    --text-purple-900: #4C1D95; /* Deep purple for history item titles */
    --text-gray-600: #4B5563;   /* Gray for history answer text */
    
    /* Background Colors */
    --bg-primary: #FFFFFF;
    --bg-secondary: #F1F5F9;
    --bg-lighter: #F8FAFC;
    --bg-purple-light: #F5F0FF;
    --bg-purple-hover: #EBE0FE;
    
    /* Border Colors */
    --border-light: #E2E8F0;
    --border-primary: #CBD5E1;
    --border-purple-light: #D4C0FA;
    
    /* Tab Colors */
    --tab-starting-color: #38B2AC; /* Teal shade for Starting tab */
    --tab-user-color: #6A39B3;
    --tab-data-color: #8A5CD6;
    --tab-application-color: #4E2A87;
    --tab-system-color: #341C5C;
    --tab-errorcode-color: #C53030; /* Red shade for Error Codes tab */
    --tab-resources-color: #3B82F6; /* Blue shade for Resources tab */
    
    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    
    /* Font sizes */
    --font-size-xs: 12px;
    --font-size-sm: 14px;
    --font-size-md: 16px;
    --font-size-lg: 18px;
    --font-size-xl: 24px;
    
    /* Border radius */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
    
    /* Transitions */
    --transition-fast: 0.2s;
    --transition-normal: 0.3s;
    --transition-slow: 0.5s;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: var(--text-primary);
    background-color: var(--bg-lighter);
  }
  
  /* Animation for pulse effect */
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  /* QBO utility classes to match GAS app */
  .qbo-bg-lighter {
    background-color: var(--bg-lighter);
  }
  
  .qbo-bg-primary {
    background-color: var(--bg-primary);
  }
  
  .qbo-header-bg {
    background-color: var(--header-bg);
  }
  
  .qbo-header-dark-bg {
    background-color: var(--header-dark-bg);
  }
  
  .qbo-border-primary {
    border-color: var(--border-primary);
  }
  
  .qbo-text-primary {
    color: var(--qbo-purple-primary);
  }
  
  .qbo-button-primary {
    background-color: var(--qbo-purple-primary);
    color: var(--text-white);
    padding: 8px 16px;
    border: none;
    border-radius: var(--border-radius-sm);
    font-weight: 500;
    cursor: pointer;
    transition: background-color var(--transition-fast);
  }
  
  .qbo-button-primary:hover {
    background-color: var(--qbo-purple-dark);
  }
  
  .qbo-section-active {
    background-color: var(--bg-primary);
    color: var(--qbo-purple-primary);
  }
  
  /* Tab colors */
  .qbo-tab-starting {
    background-color: var(--tab-starting-color);
  }
  
  .qbo-tab-user {
    background-color: var(--tab-user-color);
  }
  
  .qbo-tab-data {
    background-color: var(--tab-data-color);
  }
  
  .qbo-tab-application {
    background-color: var(--tab-application-color);
  }
  
  .qbo-tab-system {
    background-color: var(--tab-system-color);
  }
  
  .qbo-tab-errorcode {
    background-color: var(--tab-errorcode-color);
  }
  
  .qbo-tab-resources {
    background-color: var(--tab-resources-color);
  }
  
  /* Custom border classes */
  .border-l-3 {
    border-left-width: 3px !important;
  }
  
  /* History panel styling */
  .history-item-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: var(--text-purple-900);
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1.3;
    margin-bottom: 4px;
  }
  
  .history-item-content {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: var(--text-gray-600);
    font-size: 0.75rem;
    line-height: 1.4;
  }
  
  .history-section-header {
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.2;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
  
  .history-panel {
    background-color: var(--bg-lighter);
    border-right: 2px solid var(--qbo-purple-primary);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  }
  
  .history-container {
    padding: 10px;
    background-color: var(--bg-lighter);
  }
  
  .history-item {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
  }
  
  .history-item:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: var(--bg-purple-light);
  }
  
  .history-item::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 5px;
    background: linear-gradient(to right, transparent, rgba(106, 57, 179, 0.05));
  }
  
  .history-item.border-l-red-500::after {
    background: linear-gradient(to right, transparent, rgba(239, 68, 68, 0.05));
  }
  
  /* Style for the first item in each section */
  .history-item:first-of-type {
    border-top-right-radius: 3px;
  }
  
  /* Style for the last item in each section */
  .history-item:last-of-type {
    border-bottom-right-radius: 3px;
    border-bottom: none;
  }
  
  /* Hide scrollbar for cleaner UI */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--qbo-purple-lighter);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--qbo-purple-primary);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--qbo-purple-dark);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
  }
  
  h1 {
    font-size: var(--font-size-xl);
  }
  
  h2 {
    font-size: var(--font-size-lg);
  }
  
  p {
    margin-bottom: var(--spacing-md);
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
    transition: all var(--transition-fast);
  }
`,vo=ho.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,yo=ho.div`
  background-color: var(--bg-primary);
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 500px;
  padding: 0;
  animation: modalFadeIn 0.3s ease-out forwards;
  
  @keyframes modalFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,bo=ho.div`
  background-color: var(--qbo-purple-primary);
  color: white;
  
  h2 {
    color: var(--text-white);
  }
  padding: var(--spacing-md) var(--spacing-lg);
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  
  h2 {
    margin: 0;
    font-size: var(--font-size-lg);
    flex: 1;
  }
`,xo=ho.div`
  padding: var(--spacing-lg);
`,wo=ho.p`
  margin-bottom: var(--spacing-lg);
  line-height: 1.5;
`,ko=ho.div`
  margin-bottom: var(--spacing-lg);
  
  label {
    display: block;
    margin-bottom: var(--spacing-xs);
    font-weight: 500;
  }
  
  input {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-md);
    
    &:focus {
      border-color: var(--qbo-purple-primary);
      outline: none;
      box-shadow: 0 0 0 2px rgba(106, 57, 179, 0.2);
    }
    
    &.error {
      border-color: var(--error-color);
    }
  }
  
  .error-message {
    color: var(--error-color);
    font-size: var(--font-size-sm);
    margin-top: var(--spacing-xs);
  }
`,So=ho.div`
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid var(--border-light);
  display: flex;
  justify-content: flex-end;
`,Co=ho.button`
  background-color: ${e=>e.primary?"var(--qbo-purple-primary)":"transparent"};
  color: ${e=>e.primary?"white":"var(--qbo-purple-primary)"};
  border: ${e=>e.primary?"none":"1px solid var(--qbo-purple-primary)"};
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  font-weight: 500;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.6:1};
  transition: all var(--transition-fast);
  
  &:hover:not(:disabled) {
    background-color: ${e=>e.primary?"var(--qbo-purple-dark)":"var(--bg-purple-light)"};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(106, 57, 179, 0.3);
  }
`,Eo=ho.p`
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
  margin-top: var(--spacing-md);
  margin-bottom: 0;
  line-height: 1.5;
`,To=t=>{let{isOpen:n,onClose:r}=t;const{updateAgentInfo:o}=St(),[i,a]=(0,e.useState)(""),[s,l]=(0,e.useState)("");if(!n)return null;const c=()=>{i.trim()?(l(""),o(i),r()):l("Please enter your Agent ID")};return(0,st.jsx)(vo,{children:(0,st.jsxs)(yo,{children:[(0,st.jsx)(bo,{children:(0,st.jsx)("h2",{children:"Welcome to QBO Troubleshooter"})}),(0,st.jsxs)(xo,{children:[(0,st.jsx)(wo,{children:"This tool will guide you through diagnosing and resolving common QuickBooks Online issues. Please enter your Agent ID to get started."}),(0,st.jsxs)(ko,{children:[(0,st.jsx)("label",{htmlFor:"agentId",children:"Agent ID"}),(0,st.jsx)("input",{type:"text",id:"agentId",value:i,onChange:e=>a(e.target.value),onKeyDown:e=>{"Enter"===e.key&&c()},placeholder:"Enter your Agent ID",className:s?"error":"",autoFocus:!0}),s&&(0,st.jsx)("div",{className:"error-message",children:s})]}),(0,st.jsx)(Eo,{children:"Note: Your Agent ID will be used for tracking support case resolution metrics only. This information helps us improve the troubleshooting process."})]}),(0,st.jsx)(So,{children:(0,st.jsx)(Co,{primary:!0,onClick:c,children:"Get Started"})})]})})};var jo=n(560);const Ao=(()=>{const e={};return t=>{if(e[t])return e[t];const n=Object.keys(jo.questions).filter((e=>jo.questions[e].section===t&&e.startsWith("question_"))).length;return e[t]=n,n}})(),_o=ho.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Po=ho.div`
  background-color: var(--bg-primary);
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 600px;
  padding: 0;
  animation: modalFadeIn 0.3s ease-out forwards;
  
  @keyframes modalFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,No=ho.div`
  background-color: var(--qbo-purple-primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-lg);
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  
  h2 {
    margin: 0;
    font-size: var(--font-size-lg);
    flex: 1;
  }
`,Ro=ho.div`
  padding: var(--spacing-lg);
`,Oo=ho.p`
  margin-bottom: var(--spacing-md);
  line-height: 1.5;
  font-size: var(--font-size-md);
`,Do=ho.div`
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  background-color: var(--bg-light);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  max-height: 200px;
  overflow-y: auto;
`,Io=ho.div`
  display: flex;
  margin-bottom: var(--spacing-sm);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--border-lighter);
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`,zo=ho.div`
  flex: 1;
  font-weight: 500;
`,Fo=ho.div`
  flex: 1;
  color: var(--text-secondary);
`,Lo=ho.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`,Bo=ho.div`
  flex: 1;
  background-color: var(--bg-light);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  
  &:hover {
    border-color: var(--qbo-purple-primary);
    background-color: var(--bg-purple-light);
  }
  
  h3 {
    color: var(--qbo-purple-primary);
    margin-top: 0;
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    margin: 0;
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
  }
  
  .icon {
    font-size: 24px;
    margin-bottom: var(--spacing-sm);
    color: var(--qbo-purple-primary);
  }
`,qo=ho.div`
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid var(--border-light);
  display: flex;
  justify-content: space-between;
`,Uo=ho.button`
  background-color: ${e=>e.primary?"var(--qbo-purple-primary)":"transparent"};
  color: ${e=>e.primary?"white":"var(--qbo-purple-primary)"};
  border: ${e=>e.primary?"none":"1px solid var(--qbo-purple-primary)"};
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  font-weight: 500;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.6:1};
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover:not(:disabled) {
    background-color: ${e=>e.primary?"var(--qbo-purple-dark)":"var(--bg-purple-light)"};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(106, 57, 179, 0.3);
  }
`,$o=e=>({starting:"Initial Assessment",user:"User Information",data:"Data Issues",application:"Application Problems",system:"System Requirements",resources:"Resources"}[e]||e),Mo={starting:"question_user_1",user:"question_data_1",data:"question_application_1",application:"question_system_1",system:"question_resources_1"},Qo=t=>{let{isOpen:n,onClose:r,section:o}=t;const{state:i,goToQuestion:a}=St(),[s,l]=(0,e.useState)(!1);if(!n)return null;const c=(e=>{const t=["starting","user","data","application","system","resources"],n=t.indexOf(e);return-1===n||n===t.length-1?null:t[n+1]})(o),u=c?Mo[o]:null,d=i.history.filter((e=>e.section===o)),p=()=>{const e=(()=>{let e=`QBO Troubleshooting Summary - ${$o(o)} Section\n\n`;return d.forEach(((t,n)=>{e+=`Q${n+1}: ${t.question}\n`,e+=`A: ${t.answer}\n\n`})),e+=`\nAgent ID: ${i.agentId}\n`,e+=`Session Time: ${(new Date).toLocaleString()}\n`,e})();navigator.clipboard.writeText(e).then((()=>{l(!0),setTimeout((()=>l(!1)),3e3)})).catch((e=>{console.error("Failed to copy: ",e)}))};return(0,st.jsx)(_o,{children:(0,st.jsxs)(Po,{children:[(0,st.jsx)(No,{children:(0,st.jsxs)("h2",{children:[$o(o)," Section Complete"]})}),(0,st.jsxs)(Ro,{children:[(0,st.jsxs)(Oo,{children:["You've completed the ",$o(o)," section of the troubleshooter. Here's a summary of the information collected so far:"]}),(0,st.jsx)(Do,{children:d.map(((e,t)=>(0,st.jsxs)(Io,{children:[(0,st.jsx)(zo,{children:e.shortQuestion||e.question}),(0,st.jsx)(Fo,{children:e.answer})]},t)))}),(0,st.jsx)(Oo,{children:"What would you like to do next?"}),(0,st.jsxs)(Lo,{children:[c&&(0,st.jsxs)(Bo,{onClick:()=>{c&&u&&(a(u,c),r())},children:[(0,st.jsx)("div",{className:"icon",children:(0,st.jsx)("i",{className:"fas fa-arrow-circle-right"})}),(0,st.jsx)("h3",{children:"Continue Troubleshooting"}),(0,st.jsxs)("p",{children:["Move to the ",$o(c)," section to continue troubleshooting"]})]}),(0,st.jsxs)(Bo,{onClick:()=>{p(),setTimeout((()=>{r()}),500)},children:[(0,st.jsx)("div",{className:"icon",children:(0,st.jsx)("i",{className:"fas fa-level-up-alt"})}),(0,st.jsx)("h3",{children:"Escalate to T3"}),(0,st.jsx)("p",{children:"Generate a summary of the troubleshooting steps completed so far"})]})]})]}),(0,st.jsxs)(qo,{children:[(0,st.jsxs)(Uo,{onClick:r,children:[(0,st.jsx)("i",{className:"fas fa-times"})," Close"]}),(0,st.jsxs)(Uo,{primary:!0,onClick:p,children:[(0,st.jsx)("i",{className:"fas fa-clipboard"})," ",s?"Copied!":"Copy Summary"]})]})]})})},Ho=ho.div`
  background-color: white;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  position: relative;
  display: flex;
`,Wo=ho.div`
  margin-right: 16px;
  flex-shrink: 0;
`,Ko=ho.i`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--qbo-purple-primary);
  color: white;
  border-radius: 50%;
  font-size: 16px;
  
  &.high {
    background-color: var(--alert-color);
  }
  
  &.medium {
    background-color: var(--warning-color);
  }
  
  &.low {
    background-color: var(--qbo-purple-primary);
  }
`,Vo=ho.div`
  flex: 1;
`,Yo=ho.div`
  margin-bottom: 16px;
`,Go=ho.div`
  margin-bottom: 8px;
  
  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
  }
`,Jo=ho.div`
  font-size: 14px;
  color: var(--text-secondary);
  
  span {
    font-weight: 500;
    color: var(--qbo-purple-primary);
  }
`,Xo=(ho.div`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: ${e=>"high"===e.importance?"var(--alert-color)":"medium"===e.importance?"var(--warning-color)":"var(--qbo-purple-light)"};
  color: white;
  text-transform: uppercase;
  font-weight: 600;
`,ho.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--border-light);
  padding-bottom: 12px;
`),Zo=ho.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--qbo-purple-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 14px;
`,ei=ho.h3`
  color: var(--text-primary);
  margin: 0;
  font-size: 18px;
  padding-right: ${e=>e.hasImportance?"100px":"0"}; /* Make room for importance badge */
`,ti=ho.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.5;
`,ni=ho.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ri=ho.div`
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid var(--border-light);
  background-color: ${e=>e.selected?"var(--bg-purple-light)":"white"};
  transition: all 0.2s;
  cursor: pointer;
  
  &:hover {
    background-color: var(--bg-purple-hover);
    border-color: var(--border-purple-light);
  }
`,oi=ho.input`
  margin-right: 12px;
  margin-top: 3px;
  accent-color: var(--qbo-purple-primary);
  cursor: pointer;
`,ii=ho.label`
  cursor: pointer;
  flex: 1;
  font-size: 14px;
`,ai=ho.textarea`
  width: 100%;
  min-height: 100px;
  border: 1px solid var(--border-light);
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 20px;
  resize: vertical;
  font-family: inherit;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px rgba(106, 57, 179, 0.2);
  }
`,si=ho.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  border-top: 1px solid var(--border-light);
  padding-top: 16px;
`,li=ho.div`
  display: flex;
  gap: 12px;
`,ci=ho.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${e=>e.primary?"var(--qbo-purple-primary)":"white"};
  color: ${e=>e.primary?"white":"var(--qbo-purple-primary)"};
  border: ${e=>e.primary?"none":"1px solid var(--qbo-purple-primary)"};
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 14px;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.6:1};
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background-color: ${e=>e.primary?"var(--qbo-purple-dark)":"var(--bg-purple-light)"};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(106, 57, 179, 0.3);
  }
`,ui=()=>{const{state:t,answerQuestion:r,goToQuestion:o,goToPrevious:i,updateSectionProgress:a,completeSection:s}=St(),[l,c]=(0,e.useState)(""),[u,d]=(0,e.useState)(""),[p,f]=(0,e.useState)(!1),[h,m]=(0,e.useState)(""),g=jo.questions[t.currentQuestionId];if(!g){const e=t.currentSection,{sections:r}=n(560),i=(r.find((t=>t.id===e))||r[0]).initialQuestion||"ST1";return setTimeout((()=>{o(i,e)}),100),(0,st.jsxs)(Ho,{children:[(0,st.jsxs)(Xo,{children:[(0,st.jsx)(Zo,{children:(0,st.jsx)("i",{className:"fas fa-sync fa-spin"})}),(0,st.jsx)(ei,{children:"Redirecting to appropriate question..."})]}),(0,st.jsxs)(ti,{children:['The question ID "',t.currentQuestionId,'" is not found. You will be redirected to the appropriate starting point.']}),(0,st.jsxs)(si,{children:[(0,st.jsxs)(Yo,{children:[(0,st.jsx)("i",{className:"fas fa-info-circle",style:{marginRight:"8px"}}),"Navigation in progress..."]}),(0,st.jsx)(li,{children:(0,st.jsxs)(ci,{onClick:()=>o("ST1","starting"),children:[(0,st.jsx)("i",{className:"fas fa-home"})," Return to Start"]})})]})]})}const v="yesno"===g.type?[{id:"yes",text:"Yes"},{id:"no",text:"No"}]:jo.options[t.currentQuestionId]||[],y=e=>{c(e.target.value)},b=t.previousQuestionIds.length>0,x="text"===g.type?""!==u.trim():""!==l;return(0,st.jsxs)(st.Fragment,{children:[(0,st.jsxs)(Ho,{children:[(0,st.jsx)(Wo,{children:(0,st.jsx)(Ko,{className:`fas ${t.currentSection?`fa-${t.currentSection}`:"fa-question"} ${g.importance?g.importance:"low"}`})}),(0,st.jsxs)(Vo,{children:[(0,st.jsxs)(Yo,{children:[(0,st.jsx)(Go,{children:(0,st.jsx)("h2",{children:g.text})}),(0,st.jsxs)(Jo,{children:["Section: ",(0,st.jsx)("span",{children:(w=t.currentSection,{starting:"Initial Assessment",user:"User Information",data:"Data Issues",application:"Application Problems",system:"System Requirements",errorcode:"Error Codes",resources:"Resources"}[w]||w)})]})]}),g.subtext&&(0,st.jsx)(ti,{children:g.subtext}),"text"===g.type?(0,st.jsx)(ai,{value:u,onChange:e=>{d(e.target.value)},placeholder:"Enter your answer here..."}):(0,st.jsx)(ni,{children:v.map((e=>(0,st.jsxs)(ri,{selected:l===e.id,onClick:()=>c(e.id),children:[(0,st.jsx)(oi,{type:"radio",id:`option-${e.id}`,name:"question-option",value:e.id,checked:l===e.id,onChange:y}),(0,st.jsx)(ii,{htmlFor:`option-${e.id}`,children:e.text})]},e.id)))}),(0,st.jsxs)(si,{children:[(0,st.jsxs)(Yo,{children:[(0,st.jsx)("i",{className:"fas fa-clipboard-list",style:{marginRight:"8px"}}),"Question ",(()=>{const e=t.currentQuestionId;if(!e)return"?";const n=Object.keys(jo.questions).filter((e=>jo.questions[e].section===t.currentSection)).sort(((e,t)=>parseInt(e.split("_").pop())-parseInt(t.split("_").pop()))),r=n.findIndex((t=>t===e));return-1!==r?r+1:"?"})()," of ",Ao(t.currentSection)]}),(0,st.jsxs)(li,{children:[b&&(0,st.jsxs)(ci,{onClick:()=>{i()},children:[(0,st.jsx)("i",{className:"fas fa-arrow-left"})," Back"]}),(0,st.jsxs)(ci,{primary:!0,disabled:!x,onClick:()=>{const e="text"===g.type?u:l;let n,i=e;if("text"!==g.type&&v.length>0){const t=v.find((t=>t.id===e));t&&(i=t.text)}var c,d;if(r(t.currentQuestionId,i,g.text,g.shortText||g.text.substring(0,50)+(g.text.length>50?"...":""),g.importance||"low",g.section),a(t.currentSection,((e,t)=>{const n=Ao(e);if(0===n)return 0;const r=Object.keys(t||{}).filter((t=>t.includes(`_${e}_`)&&t.startsWith("question_"))).length;return Math.min(Math.round(r/n*100),100)})(t.currentSection,t.answers)),"text"===g.type)n=(null===(c=jo.navigationMap[t.currentQuestionId])||void 0===c?void 0:c.next)||(null===(d=jo.navigationMap[t.currentQuestionId])||void 0===d?void 0:d.any);else if("yesno"===g.type){var p;n=null===(p=jo.navigationMap[t.currentQuestionId])||void 0===p?void 0:p[l]}else{var h;n=null===(h=jo.navigationMap[t.currentQuestionId])||void 0===h?void 0:h[l]}let y=t.currentSection;if(n)if(jo.questions[n])y=jo.questions[n].section;else{const e=n.match(/question_([^_]+)_/);e&&(y=e[1])}if(y!==t.currentSection&&"starting"!==t.currentSection)return s(t.currentSection),m(t.currentSection),void f(!0);n?o(n,y):(console.error(`No next question defined for ${t.currentQuestionId} with answer ${l}`),o("question_starting_1","starting"))},children:["Continue ",(0,st.jsx)("i",{className:"fas fa-arrow-right"})]})]})]})]})]}),(0,st.jsx)(Qo,{isOpen:p,onClose:()=>{let e;var n,r;if(f(!1),"text"===g.type)e=(null===(n=jo.navigationMap[t.currentQuestionId])||void 0===n?void 0:n.next)||(null===(r=jo.navigationMap[t.currentQuestionId])||void 0===r?void 0:r.any);else if("yesno"===g.type){var i;e=null===(i=jo.navigationMap[t.currentQuestionId])||void 0===i?void 0:i[l]}else{var a;e=null===(a=jo.navigationMap[t.currentQuestionId])||void 0===a?void 0:a[l]}let s=t.currentSection;if(e)if(jo.questions[e])s=jo.questions[e].section;else{const t=e.match(/question_([^_]+)_/);t&&(s=t[1])}e?o(e,s):(console.error(`No next question defined for ${t.currentQuestionId} with answer ${l}`),o("question_starting_1","starting"))},section:h})]});var w},di=ho.div`
  background-color: white;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  position: relative;
`,pi=ho.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-light);
`,fi=ho.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--success-color);
  border-radius: 50%;
  margin-right: 16px;
  color: white;
  font-size: 20px;
`,hi=ho.h3`
  color: var(--text-primary);
  margin: 0;
  font-size: 20px;
`,mi=ho.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 0;
`,gi=ho.ol`
  margin: 20px 0;
  padding-left: 24px;
`,vi=ho.li`
  margin-bottom: 12px;
  line-height: 1.5;
  font-size: 14px;
  color: var(--text-primary);
`,yi=ho.div`
  margin-top: 24px;
  padding: 16px;
  border-radius: 6px;
  background-color: var(--bg-secondary);
`,bi=ho.h4`
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 16px;
  display: flex;
  align-items: center;
  
  i {
    margin-right: 8px;
    color: var(--qbo-purple-primary);
  }
`,xi=ho.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,wi=ho.li`
  margin-bottom: 8px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-light);
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`,ki=ho.a`
  color: var(--qbo-purple-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  
  &:hover {
    text-decoration: underline;
  }
  
  i {
    margin-right: 8px;
    font-size: 14px;
  }
`,Si=ho.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--border-light);
`,Ci=ho.div`
  color: var(--text-secondary);
  font-size: 12px;
  display: flex;
  align-items: center;
  
  i {
    margin-right: 8px;
  }
`,Ei=ho.div`
  display: flex;
  gap: 12px;
`,Ti=ho.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${e=>e.primary?"var(--qbo-purple-primary)":"white"};
  color: ${e=>e.primary?"white":"var(--qbo-purple-primary)"};
  border: ${e=>e.primary?"none":"1px solid var(--qbo-purple-primary)"};
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.primary?"var(--qbo-purple-dark)":"var(--bg-purple-light)"};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(106, 57, 179, 0.3);
  }
`,ji=ho(Ti)`
  color: var(--text-secondary);
  border-color: var(--border-light);
  background-color: white;
  
  &:hover {
    background-color: var(--bg-secondary);
    border-color: var(--text-secondary);
  }
  
  @media print {
    display: none;
  }
`,Ai=ho.div`
  background-color: var(--bg-secondary);
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 20px;
  
  h4 {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 16px;
    display: flex;
    align-items: center;
    
    i {
      margin-right: 8px;
      color: var(--qbo-purple-primary);
    }
  }
  
  p {
    margin: 8px 0;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    
    &:first-of-type {
      margin-top: 0;
    }
    
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  
  @media print {
    break-after: always;
  }
`,_i=()=>{const{state:e,resetTroubleshooter:t,goToQuestion:n}=St(),r=e.currentQuestionId&&e.currentQuestionId.startsWith("resolution_")?e.currentQuestionId.replace("resolution_",""):null,o=r?jo.resolutions[r]:null;if(!o)return(0,st.jsxs)(di,{children:[(0,st.jsxs)(pi,{children:[(0,st.jsx)(fi,{children:(0,st.jsx)("i",{className:"fas fa-exclamation-triangle"})}),(0,st.jsxs)("div",{children:[(0,st.jsx)(hi,{children:"Solution Not Found"}),(0,st.jsx)(mi,{children:"We couldn't find a specific solution for your issue. Please try again or contact support."})]})]}),(0,st.jsxs)(Si,{children:[(0,st.jsxs)(Ci,{children:[(0,st.jsx)("i",{className:"fas fa-info-circle"}),"Navigation Error"]}),(0,st.jsx)(Ei,{children:(0,st.jsxs)(Ti,{primary:!0,onClick:()=>n("question_starting_1","starting"),children:[(0,st.jsx)("i",{className:"fas fa-home"})," Return to Start"]})})]})]});return(0,st.jsxs)(di,{children:[(0,st.jsxs)(pi,{children:[(0,st.jsx)(fi,{children:(0,st.jsx)("i",{className:"fas fa-check"})}),(0,st.jsxs)("div",{children:[(0,st.jsx)(hi,{children:o.title}),(0,st.jsx)(mi,{children:"Recommended steps to resolve the issue"})]})]}),(0,st.jsxs)(Ai,{children:[(0,st.jsxs)("h4",{children:[(0,st.jsx)("i",{className:"fas fa-user-headset"}),"Agent Information"]}),(0,st.jsxs)("p",{children:[(0,st.jsx)("span",{children:"Agent ID:"}),(0,st.jsx)("strong",{children:e.agentId})]}),(0,st.jsxs)("p",{children:[(0,st.jsx)("span",{children:"Session Time:"}),(0,st.jsx)("strong",{children:(i=e.sessionStartTime,new Date(i).toLocaleString())})]}),(0,st.jsxs)("p",{children:[(0,st.jsx)("span",{children:"Case ID:"}),(0,st.jsx)("strong",{children:o.caseId||"Not assigned"})]})]}),(0,st.jsx)(gi,{children:o.steps.map(((e,t)=>(0,st.jsx)(vi,{children:e},t)))}),o.relatedArticles&&o.relatedArticles.length>0&&(0,st.jsxs)(yi,{children:[(0,st.jsxs)(bi,{children:[(0,st.jsx)("i",{className:"fas fa-book"}),"Related Knowledge Base Articles"]}),(0,st.jsx)(xi,{children:o.relatedArticles.map(((e,t)=>(0,st.jsx)(wi,{children:(0,st.jsxs)(ki,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,st.jsx)("i",{className:"fas fa-external-link-alt"})," ",e.title]})},t)))})]}),(0,st.jsxs)(Si,{children:[(0,st.jsxs)(Ci,{children:[(0,st.jsx)("i",{className:"fas fa-check-circle"}),"Resolution Complete"]}),(0,st.jsxs)(Ei,{children:[(0,st.jsxs)(ji,{onClick:()=>{window.print()},children:[(0,st.jsx)("i",{className:"fas fa-print"})," Print"]}),(0,st.jsxs)(Ti,{primary:!0,onClick:()=>{window.confirm("This will clear all your progress and start over. Are you sure?")&&t()},children:[(0,st.jsx)("i",{className:"fas fa-redo"})," Start Over"]})]})]})]});var i},Pi=ho.div`
  background-color: var(--bg-primary);
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
`,Ni=ho.div`
  background-color: var(--qbo-purple-primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    margin: 0;
    font-size: var(--font-size-md);
  }
`,Ri=ho.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: var(--font-size-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,Oi=ho.div`
  display: flex;
  border-bottom: 1px solid var(--border-light);
`,Di=ho.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background: none;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-sm);
  font-weight: ${e=>e.active?"600":"400"};
  color: ${e=>e.active?"var(--qbo-purple-primary)":"var(--text-secondary)"};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--qbo-purple-primary);
    opacity: ${e=>e.active?"1":"0"};
  }
  
  &:hover {
    color: var(--qbo-purple-primary);
  }
`,Ii=ho.div`
  padding: var(--spacing-md);
  flex: 1;
  overflow-y: auto;
`,zi=ho.div`
  margin-bottom: var(--spacing-md);
`,Fi=ho.label`
  display: block;
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
  color: var(--text-secondary);
`,Li=ho.select`
  width: 100%;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
  }
`,Bi=ho.input`
  width: 100%;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
  }
`,qi=ho.div``,Ui=ho.a`
  display: block;
  padding: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  color: var(--text-primary);
  text-decoration: none;
  
  &:hover {
    background-color: var(--bg-purple-light);
    text-decoration: none;
  }
  
  h4 {
    margin: 0 0 var(--spacing-xs) 0;
    font-size: var(--font-size-sm);
    color: var(--qbo-purple-primary);
  }
  
  p {
    margin: 0;
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
  }
`,$i=ho.div`
  padding: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  background-color: var(--bg-purple-lightest);
  
  h4 {
    margin: 0 0 var(--spacing-xs) 0;
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--qbo-purple-primary);
  }
  
  p {
    margin: 0;
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
  }
`,Mi=ho.div`
  padding: var(--spacing-md);
  text-align: center;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
`,Qi=()=>{const{state:t,toggleKnowledgeBase:n,updateResourcesState:r}=St(),[o,i]=(0,e.useState)(""),[a,s]=(0,e.useState)("articles"),l=e=>{s(e),r({currentType:"articles"===e?"kbArticles":"quickTips"})},c=e=>{const{currentDriver:n}=t.resourcesState;return e.filter((e=>("all"===n||e.driver===n)&&(""===o||e.title.toLowerCase().includes(o.toLowerCase())||e.description&&e.description.toLowerCase().includes(o.toLowerCase())||e.content&&e.content.toLowerCase().includes(o.toLowerCase()))))};return(0,st.jsxs)(Pi,{children:[(0,st.jsxs)(Ni,{children:[(0,st.jsx)("h3",{children:"Knowledge Base"}),(0,st.jsx)(Ri,{onClick:()=>{n()},children:(0,st.jsx)("i",{className:"fas fa-times"})})]}),(0,st.jsxs)(Oi,{children:[(0,st.jsx)(Di,{active:"articles"===a,onClick:()=>l("articles"),children:"Articles"}),(0,st.jsx)(Di,{active:"tips"===a,onClick:()=>l("tips"),children:"Quick Tips"})]}),(0,st.jsxs)(Ii,{children:[(0,st.jsxs)(zi,{children:[(0,st.jsx)(Fi,{htmlFor:"driver-filter",children:"Filter by issue type:"}),(0,st.jsx)(Li,{id:"driver-filter",value:t.resourcesState.currentDriver,onChange:e=>{r({currentDriver:e.target.value})},children:jo.knowledgeBase.callDrivers.map((e=>(0,st.jsx)("option",{value:e.id,children:e.name},e.id)))})]}),(0,st.jsx)(Bi,{type:"text",placeholder:"Search knowledge base...",value:o,onChange:e=>i(e.target.value)}),"articles"===a?(()=>{const e=c(jo.knowledgeBase.kbArticles);return 0===e.length?(0,st.jsx)(Mi,{children:"No articles found matching your criteria."}):(0,st.jsx)(qi,{children:e.map(((e,t)=>(0,st.jsxs)(Ui,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,st.jsx)("h4",{children:e.title}),(0,st.jsx)("p",{children:e.description})]},t)))})})():(()=>{const e=c(jo.knowledgeBase.quickTips);return 0===e.length?(0,st.jsx)(Mi,{children:"No tips found matching your criteria."}):(0,st.jsx)(qi,{children:e.map(((e,t)=>(0,st.jsxs)($i,{children:[(0,st.jsx)("h4",{children:e.title}),(0,st.jsx)("p",{children:e.content})]},t)))})})()]})]})},Hi=ho.div`
  max-width: 4xl;
  margin: 0 auto;
`,Wi=ho.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`,Ki=ho.button`
  width: 33.333%;
  padding: 0.75rem;
  font-weight: 600;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &.primary {
    background-color: var(--qbo-purple-primary);
    color: white;
    border: 1px solid var(--qbo-purple-dark);
  }
  
  &.secondary {
    background-color: white;
    color: var(--text-gray-700);
    border: 1px solid var(--border-light);
    
    &:hover {
      background-color: var(--bg-purple-light);
      border-color: var(--qbo-purple-light);
    }
  }
`,Vi=ho.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`,Yi=ho.label`
  font-weight: 600;
  color: var(--text-gray-700);
  white-space: nowrap;
`,Gi=ho.select`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid var(--qbo-purple-primary);
  border-radius: 0.375rem;
  outline: none;
  
  &:focus {
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`,Ji=ho.div`
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`,Xi=ho.div`
  margin-bottom: 1rem;
`,Zi=ho.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-gray-700);
  margin: 0;
`,ea=ho.p`
  font-size: 0.875rem;
  color: var(--text-gray-500);
  margin-top: 0.25rem;
`,ta=ho.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border-light);
`,na=ho.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`,ra=ho.div`
  background-color: var(--bg-purple-light);
  border-radius: 0.375rem;
  padding: 1rem;
  border-left: 4px solid var(--qbo-purple-primary);
`,oa=ho.h4`
  font-weight: 700;
  color: var(--text-purple-900);
  margin-bottom: 0.5rem;
`,ia=ho.div`
  font-size: 0.875rem;
  color: var(--text-gray-700);
`,aa=ho.p`
  font-size: 0.75rem;
  color: var(--text-gray-500);
  margin-top: 0.5rem;
`,sa=ho.div`
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-light);
  
  &:last-child {
    border-bottom: none;
  }
`,la=ho.div`
  display: flex;
  align-items: flex-start;
`,ca=ho.div`
  margin-right: 0.75rem;
  font-size: 1.25rem;
  color: var(--qbo-purple-primary);
`,ua=ho.div`
  flex: 1;
`,da=ho.h4`
  font-weight: 700;
  color: var(--text-purple-800);
  margin: 0 0 0.25rem 0;
`,pa=ho.a`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: underline;
  }
`,fa=(ho.p`
  font-size: 0.75rem;
  color: var(--qbo-purple-primary);
  margin: 0.125rem 0 0.25rem 0;
`,ho.p`
  font-size: 0.875rem;
  color: var(--text-gray-600);
  margin: 0.25rem 0;
`),ha=ho.p`
  font-size: 0.75rem;
  color: var(--text-gray-500);
  margin: 0.25rem 0 0;
`,ma=()=>{const[t,n]=(0,e.useState)("kbArticles"),[r,o]=(0,e.useState)("all"),[i,a]=(0,e.useState)([]);(0,e.useEffect)((()=>{s(t,r)}),[t,r]);const s=(e,t)=>{let n=[];"kbArticles"===e?n=jo.knowledgeBase.kbArticles||[]:"quickTips"===e&&(n=jo.knowledgeBase.quickTips||[]),"all"!==t&&(n=n.filter((e=>e.driver===t||"all"===e.driver))),a(n)};return(0,st.jsxs)(Hi,{children:[(0,st.jsxs)(Wi,{children:[(0,st.jsx)(Ki,{className:"kbArticles"===t?"primary":"secondary",onClick:()=>n("kbArticles"),children:"KB Articles"}),(0,st.jsx)(Ki,{className:"quickTips"===t?"primary":"secondary",onClick:()=>n("quickTips"),children:"Quick Tips"})]}),(0,st.jsxs)(Vi,{children:[(0,st.jsx)(Yi,{htmlFor:"callDriverSelect",children:"Filter by Issue Type:"}),(0,st.jsx)(Gi,{id:"callDriverSelect",value:r,onChange:e=>o(e.target.value),children:jo.knowledgeBase.callDrivers.map((e=>(0,st.jsx)("option",{value:e.id,children:e.name},e.id)))})]}),(0,st.jsxs)(Ji,{children:[(0,st.jsxs)(Xi,{children:[(0,st.jsx)(Zi,{children:(()=>{switch(t){case"kbArticles":return"Knowledge Base Articles";case"quickTips":return"Quick Tips";default:return"Resources"}})()}),(0,st.jsxs)(ea,{children:["Showing ",i.length," result",1!==i.length?"s":""]})]}),"kbArticles"===t?(c=i,c&&0!==c.length?(0,st.jsx)(ta,{children:c.map((e=>(0,st.jsx)(sa,{children:(0,st.jsxs)(la,{children:[(0,st.jsx)(ca,{children:"\ud83d\udcc4"}),(0,st.jsxs)(ua,{children:[(0,st.jsx)(da,{children:(0,st.jsx)(pa,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.title})}),e.description&&(0,st.jsx)(fa,{children:e.description}),e.keywords&&(0,st.jsxs)(ha,{children:["Tags: ",e.keywords]})]})]})},e.id)))}):(0,st.jsx)("p",{className:"text-center text-gray-500",children:"No articles found for the selected criteria."})):(l=i,l&&0!==l.length?(0,st.jsx)(na,{children:l.map((e=>(0,st.jsxs)(ra,{children:[(0,st.jsx)(oa,{children:e.title}),(0,st.jsx)(ia,{children:e.content}),e.keywords&&(0,st.jsxs)(aa,{children:["Tags: ",e.keywords]})]},e.id)))}):(0,st.jsx)("p",{className:"text-center text-gray-500",children:"No tips found for the selected criteria."}))]})]});var l,c},ga=ho.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`,va=ho.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`,ya=ho.div`
  width: 33.333%;
  background-color: var(--bg-lighter);
  border-right: 2px solid var(--qbo-purple-primary);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* To ensure content doesn't overflow */
`,ba=ho.div`
  background-color: var(--header-bg);
  color: white;
  padding: 12px;
  border-bottom: 2px solid var(--qbo-purple-dark);
`,xa=ho.h2`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  letter-spacing: 0.5px;
  color: var(--text-white);
`,wa=ho.div`
  padding: 16px;
  background-color: white;
  border-bottom: 1px solid var(--border-primary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`,ka=ho.div`
  height: 10px;
  background-color: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  position: relative;
  margin-bottom: 4px;
`,Sa=ho.div`
  height: 100%;
  border-radius: 9999px;
  background-color: var(--qbo-purple-primary);
  transition: width 0.3s ease;
`,Ca=ho.div`
  padding: 4px 0;
  border-bottom: 1px solid #f3e8ff;
`,Ea=ho.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`,Ta=ho.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 6px;
  font-size: 12px;
  background-color: ${e=>e.color||"var(--qbo-purple-primary)"};
`,ja=ho.div`
  padding: 16px;
  background-color: white;
  border-bottom: 1px solid var(--border-primary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`,Aa=ho.h3`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-purple-900);
`,_a=ho.textarea`
  width: 100%;
  border: 1px solid var(--border-primary);
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  resize: vertical;
  min-height: 80px;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`,Pa=ho.div`
  overflow-y: auto;
  flex: 1;
  padding: 10px;
  background-color: var(--bg-lighter);
  border-top: 1px solid var(--border-light);
`,Na=ho.div`
  width: 66.667%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--bg-lighter);
`,Ra=ho.div`
  background-color: var(--header-dark-bg);
  color: white;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--qbo-purple-darker);
`,Oa=ho.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: var(--text-white);
`,Da=ho.div`
  display: flex;
  background-color: white;
  border-bottom: 1px solid var(--border-primary);
  overflow-x: auto;
  width: 100%;
`,Ia=ho.div`
  cursor: pointer;
  white-space: nowrap;
`,za=ho.div`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  background-color: ${e=>e.active?"var(--bg-primary)":"transparent"};
  color: ${e=>e.active?"var(--text-primary)":"var(--text-secondary)"};
  font-weight: ${e=>e.active?"600":"400"};
  border-bottom: ${e=>e.active?"3px solid":"3px solid transparent"};
  border-color: ${e=>e.active?e.color:"transparent"};
  min-width: fit-content;
  padding: 12px;
  height: 100%;
`,Fa=ho.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 6px;
  font-size: 12px;
  background-color: ${e=>e.color||"var(--qbo-purple-primary)"};
`,La=ho.span`
  display: ${e=>e.progress>0?"flex":"none"};
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${e=>e.completed?"var(--success-color)":"var(--qbo-purple-lighter)"};
  border: ${e=>e.completed?"none":"1px solid var(--qbo-purple-light)"};
  color: ${e=>e.completed?"white":"var(--qbo-purple-dark)"};
`,Ba=ho.div`
  display: flex;
  align-items: center;
`,qa=ho.div`
  position: relative;
  margin-right: 12px;
`,Ua=ho.input`
  background-color: var(--qbo-purple-primary);
  color: white;
  border: 1px solid var(--qbo-purple-light);
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  width: 256px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  }
`,$a=ho.div`
  position: absolute;
  right: 0;
  z-index: 50;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 4px;
  width: 320px;
  max-height: 384px;
  overflow-y: auto;
  display: none;
`,Ma=ho.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  position: relative;
`,Qa=ho.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${e=>e.isOpen?"350px":"0"};
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  overflow: hidden;
  z-index: 10;
`,Ha=()=>{const{state:t,goToQuestion:n}=St(),[r,o]=(0,e.useState)(!1),[i,a]=(0,e.useState)(""),[s,l]=(0,e.useState)("");(0,e.useEffect)((()=>{"Unknown"===t.agentId&&o(!0)}),[t.agentId]);const c=e=>({starting:"\ud83d\ude80",user:"\ud83d\udc64",data:"\ud83d\udcca",application:"\ud83d\udcbb",system:"\ud83d\udda5\ufe0f",resources:"\ud83d\udcda"}[e]||"\u2753"),u=e=>({starting:"var(--tab-starting-color)",user:"var(--tab-user-color)",data:"var(--tab-data-color)",application:"var(--tab-application-color)",system:"var(--tab-system-color)",resources:"var(--tab-resources-color)"}[e]||"var(--qbo-purple-primary)");return(0,st.jsxs)(ga,{className:"qbo-bg-lighter",children:[(0,st.jsxs)(va,{children:[(0,st.jsxs)(ya,{className:"history-panel",children:[(0,st.jsx)(ba,{children:(0,st.jsx)(xa,{children:"Troubleshooting Steps"})}),(0,st.jsx)(wa,{children:(()=>{const e=["user","data","application","system"],n=e.map((e=>t.sectionProgress[e]||0)).filter((e=>100===e)).length,r=Math.round(n/e.length*100);return(0,st.jsxs)(st.Fragment,{children:[(0,st.jsxs)("div",{className:"mb-4",children:[(0,st.jsx)("div",{className:"font-bold text-sm text-purple-800 mb-1",children:"Overall Progress"}),(0,st.jsx)(ka,{children:(0,st.jsx)(Sa,{style:{width:`${r}%`}})}),(0,st.jsxs)("span",{className:"text-xs text-purple-800",children:[r,"%"]})]}),(0,st.jsx)("div",{className:"flex flex-col gap-2.5",children:e.map((e=>{const n=t.sectionProgress[e]||0;let r="";return r=100===n?(0,st.jsx)("span",{className:"text-green-600 font-medium",children:"Complete!"}):n>0?(0,st.jsx)("span",{className:"text-purple-600 font-medium animate-pulse",children:"In Progress"}):(0,st.jsx)("span",{className:"text-gray-500",children:"Not Started"}),(0,st.jsx)(Ca,{children:(0,st.jsxs)(Ea,{children:[(0,st.jsxs)("div",{className:"flex items-center",children:[(0,st.jsx)(Ta,{color:u(e),children:c(e)}),e.charAt(0).toUpperCase()+e.slice(1)]}),(0,st.jsx)("div",{className:"text-right",children:r})]})},e)}))})]})})()}),(0,st.jsxs)(ja,{children:[(0,st.jsx)(Aa,{children:"Agent Notes"}),(0,st.jsx)(_a,{id:"notes",placeholder:"Add your troubleshooting side notes here...",value:i,onChange:e=>a(e.target.value),rows:"4",className:"w-full p-2 text-sm border qbo-border-primary rounded resize-y"})]}),(0,st.jsx)(Pa,{className:"history-container",children:(()=>{const e=t.currentSection,n=t.history.filter((t=>t.section===e));if(0===n.length)return(0,st.jsx)("div",{className:"p-4 text-center text-gray-500 italic",children:"No history for this section yet."});const r={starting:{label:"STARTING CHECKPOINT",icon:"\ud83d\ude80",color:"var(--tab-starting-color)"},user:{label:"USER ACCESS & PERMISSIONS",icon:"\ud83d\udc64",color:"var(--tab-user-color)"},data:{label:"DATA & TRANSACTIONS",icon:"\ud83d\udcca",color:"var(--tab-data-color)"},application:{label:"APPLICATION",icon:"\ud83d\udcbb",color:"var(--tab-application-color)"},system:{label:"SYSTEM & ENVIRONMENT",icon:"\ud83d\udda5\ufe0f",color:"var(--tab-system-color)"},resources:{label:"RESOURCES",icon:"\ud83d\udcda",color:"var(--tab-resources-color)"}}[e]||{label:e.charAt(0).toUpperCase()+e.slice(1),icon:"\u2753",color:"var(--qbo-purple-primary)"};return(0,st.jsxs)("div",{className:"mb-2.5 shadow-sm rounded overflow-hidden",children:[(0,st.jsxs)("div",{className:"flex items-center p-2.5 history-section-header",style:{backgroundColor:r.color},children:[(0,st.jsx)("span",{className:"mr-1.5 text-lg",children:r.icon}),(0,st.jsx)("span",{children:r.label})]}),n.map(((e,t)=>{const n="high"===e.importance?"border-l-red-500":"medium"===e.importance?"border-l-purple-600":"border-l-purple-500";return(0,st.jsxs)("div",{className:`bg-white border-l-3 border-b border-purple-100 p-3 ${n} hover:bg-purple-50 transition-colors duration-100 history-item`,children:[(0,st.jsx)("div",{className:"history-item-title",children:e.shortQuestion||e.question}),(0,st.jsx)("div",{className:"history-item-content",children:e.answer})]},t)}))]})})()})]}),(0,st.jsxs)(Na,{children:[(0,st.jsxs)(Ra,{children:[(0,st.jsx)(Oa,{children:"QuickBooks Online Troubleshooter"}),(0,st.jsxs)(Ba,{children:[(0,st.jsxs)(qa,{children:[(0,st.jsx)(Ua,{id:"searchInput",type:"text",placeholder:"Search coming soon...",value:s,onChange:e=>l(e.target.value)}),(0,st.jsx)($a,{id:"searchResults"})]}),(0,st.jsx)("button",{className:"qbo-button-primary",onClick:()=>t.dispatch({type:"TOGGLE_KNOWLEDGE_BASE"}),children:t.showKnowledgeBase?"Hide Reference":"Show Reference"})]})]}),(0,st.jsx)(Da,{id:"tabNavigation",children:jo.sections.map((e=>{const r=t.sectionProgress[e.id]||0,o=t.currentSection===e.id,i=100===r;return(0,st.jsx)(Ia,{className:"tab-item","data-section":e.id,onClick:()=>(e=>{const t=jo.sections.find((t=>t.id===e)),r=(null===t||void 0===t?void 0:t.initialQuestion)||`question_${e}_1`;n(r,e)})(e.id),children:(0,st.jsxs)(za,{active:o,color:e.color,className:o?"qbo-section-active":"",children:[(0,st.jsx)(Fa,{color:e.color,children:c(e.id)}),(0,st.jsx)("span",{className:"whitespace-nowrap",children:e.title}),(0,st.jsx)(La,{completed:i,progress:r,children:i?(0,st.jsx)("i",{className:"fas fa-check",style:{fontSize:"0.6rem"}}):r>0?Math.floor(r/10):""})]})},e.id)}))}),(0,st.jsxs)(Ma,{children:["resources"===t.currentSection?(0,st.jsx)("div",{className:"flex-1 p-5 overflow-y-auto",children:(0,st.jsx)(ma,{})}):(0,st.jsx)(st.Fragment,{children:t.currentQuestionId&&t.currentQuestionId.startsWith("resolution_")?(0,st.jsx)(_i,{}):(0,st.jsx)(ui,{})}),(0,st.jsx)(Qa,{isOpen:t.showKnowledgeBase,children:t.showKnowledgeBase&&(0,st.jsx)(Qi,{})})]})]})]}),(0,st.jsx)(To,{isOpen:r,onClose:()=>o(!1)})]})},Wa=e=>Array.isArray(e)?{id:e[0],text:e[1],shortText:e[2],type:e[3],section:e[4],importance:e[5],completeSection:"true"===e[6],hint:e[7],textContent:e[8]||""}:e,Ka=ho.div`
  display: flex;
`,Va=ho.div`
  width: 300px;
  border-right: 1px solid var(--border-light);
  padding-right: 1.5rem;
  margin-right: 1.5rem;
  overflow-y: auto;
  max-height: 700px;
`,Ya=ho.div`
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  background-color: ${e=>e.active?"var(--bg-purple-light)":"white"};
  border: 1px solid ${e=>e.active?"var(--qbo-purple-light)":"var(--border-light)"};
  
  &:hover {
    background-color: var(--bg-purple-light);
  }
`,Ga=ho.h3`
  font-size: 0.875rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ja=ho.span`
  font-size: 0.75rem;
  color: var(--text-gray-500);
  background-color: var(--bg-lighter);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  margin-top: 0.25rem;
  display: inline-block;
`,Xa=ho.div`
  flex: 1;
`,Za=ho.div`
  margin-bottom: 1.5rem;
`,es=ho.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-gray-700);
`,ts=ho.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`,ns=ho.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 0.875rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`,rs=ho.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 0.875rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`,os=ho.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`,is=ho.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`,as=ho(is)`
  background-color: var(--qbo-purple-primary);
  color: white;
  border: none;
  
  &:hover {
    background-color: var(--qbo-purple-dark);
  }
`,ss=ho(is)`
  background-color: white;
  color: var(--text-gray-700);
  border: 1px solid var(--border-light);
  
  &:hover {
    background-color: var(--bg-lighter);
  }
`,ls=ho.div`
  margin-top: 1.5rem;
  border-top: 1px solid var(--border-light);
  padding-top: 1.5rem;
`,cs=ho.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  align-items: flex-start;
`,us=ho.button`
  background-color: #f8d7da;
  color: #721c24;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background-color: #f5c6cb;
  }
`,ds=ho.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: var(--bg-lighter);
  color: var(--text-gray-700);
  border: 1px dashed var(--border-light);
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 0.75rem;
  
  &:hover {
    background-color: var(--bg-purple-light);
    border-color: var(--qbo-purple-light);
  }
`,ps=()=>{const[t,n]=(0,e.useState)([]),[r,o]=(0,e.useState)(null),[i,a]=(0,e.useState)({id:"",text:"",shortText:"",type:"multiple",section:"starting",importance:"medium",completeSection:!1,hint:"",textContent:"",options:[]}),[s,l]=(0,e.useState)("all"),[c,u]=(0,e.useState)("");(0,e.useEffect)((()=>{const e=Object.entries(jo.questions).map((e=>{let[t,n]=e;const r=Wa({id:t,...n});return r.options=[],jo.navigationMap[t]&&"object"===typeof jo.navigationMap[t]&&(r.options=Object.entries(jo.navigationMap[t]).filter((e=>{let[t]=e;return"default"!==t})).map((e=>{let[t,n]=e;return{value:t,label:t,nextQuestionId:n}}))),r}));n(e),e.length>0&&(o(e[0].id),a({...e[0]}))}),[]);const d=e=>{const n=t.find((t=>t.id===e));n&&(o(e),a({...n}))},p=e=>{const{name:t,value:n}=e.target;a((e=>({...e,[t]:n})))},f=(e,t,n)=>{const r=[...i.options];r[e]={...r[e],[t]:n},a((e=>({...e,options:r})))};return(0,st.jsxs)(Ka,{children:[(0,st.jsxs)(Va,{children:[(0,st.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,st.jsxs)(Za,{children:[(0,st.jsx)(es,{htmlFor:"sectionFilter",children:"Filter by Section"}),(0,st.jsxs)(rs,{id:"sectionFilter",name:"sectionFilter",value:s,onChange:e=>l(e.target.value),children:[(0,st.jsx)("option",{value:"all",children:"All Sections"}),(0,st.jsx)("option",{value:"starting",children:"Starting Point"}),(0,st.jsx)("option",{value:"user",children:"User"}),(0,st.jsx)("option",{value:"data",children:"Data"}),(0,st.jsx)("option",{value:"application",children:"Application"}),(0,st.jsx)("option",{value:"system",children:"System"})]})]}),(0,st.jsxs)(Za,{children:[(0,st.jsx)(es,{htmlFor:"searchTerm",children:"Search Questions"}),(0,st.jsx)(ts,{type:"text",id:"searchTerm",value:c,onChange:e=>u(e.target.value),placeholder:"Search by ID or text..."})]})]}),t.filter((e=>{const t="all"===s||e.section===s,n=!c||e.text.toLowerCase().includes(c.toLowerCase())||e.id.toLowerCase().includes(c.toLowerCase());return t&&n})).map((e=>(0,st.jsxs)(Ya,{active:r===e.id,onClick:()=>d(e.id),children:[(0,st.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.25rem"},children:[(0,st.jsx)(Ga,{children:e.text}),(0,st.jsx)("span",{style:{fontSize:"0.75rem",color:"var(--text-gray-500)"},children:e.id})]}),(0,st.jsxs)("div",{style:{display:"flex",gap:"0.5rem"},children:[(0,st.jsx)(Ja,{children:e.section}),(0,st.jsx)(Ja,{style:{backgroundColor:"high"===e.importance?"#fad2e1":"medium"===e.importance?"#fff4bd":"#d1e9d5"},children:e.importance})]})]},e.id))),(0,st.jsx)(ds,{onClick:()=>{const e="all"!==s?s.charAt(0).toUpperCase():"Q",r=t.filter((e=>e.section===("all"!==s?s:"starting"))),i=`${e}${r.length+1}`,l={id:i,text:"New Question",shortText:"New Question",type:"multiple",section:"all"!==s?s:"starting",importance:"medium",completeSection:!1,hint:"",textContent:"",options:[]};n((e=>[...e,l])),o(i),a(l)},children:"+ Add New Question"})]}),(0,st.jsxs)(Xa,{children:[(0,st.jsxs)("div",{style:{display:"flex",gap:"1rem",marginBottom:"1rem"},children:[(0,st.jsxs)(Za,{style:{flex:1},children:[(0,st.jsx)(es,{htmlFor:"id",children:"Question ID"}),(0,st.jsx)(ts,{type:"text",id:"id",name:"id",value:i.id||"",onChange:p,disabled:!!r})]}),(0,st.jsxs)(Za,{style:{flex:1},children:[(0,st.jsx)(es,{htmlFor:"section",children:"Section"}),(0,st.jsxs)(rs,{id:"section",name:"section",value:i.section||"starting",onChange:p,children:[(0,st.jsx)("option",{value:"starting",children:"Starting Point"}),(0,st.jsx)("option",{value:"user",children:"User"}),(0,st.jsx)("option",{value:"data",children:"Data"}),(0,st.jsx)("option",{value:"application",children:"Application"}),(0,st.jsx)("option",{value:"system",children:"System"})]})]}),(0,st.jsxs)(Za,{style:{flex:1},children:[(0,st.jsx)(es,{htmlFor:"importance",children:"Importance"}),(0,st.jsxs)(rs,{id:"importance",name:"importance",value:i.importance||"medium",onChange:p,children:[(0,st.jsx)("option",{value:"high",children:"High"}),(0,st.jsx)("option",{value:"medium",children:"Medium"}),(0,st.jsx)("option",{value:"low",children:"Low"})]})]})]}),(0,st.jsxs)(Za,{children:[(0,st.jsx)(es,{htmlFor:"text",children:"Question Text (Full)"}),(0,st.jsx)(ns,{id:"text",name:"text",value:i.text||"",onChange:p,rows:3})]}),(0,st.jsxs)(Za,{children:[(0,st.jsx)(es,{htmlFor:"shortText",children:"Short Question Text (For History)"}),(0,st.jsx)(ts,{type:"text",id:"shortText",name:"shortText",value:i.shortText||"",onChange:p,placeholder:"Shorter version of the question for display in history"})]}),(0,st.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,st.jsxs)(Za,{style:{flex:1},children:[(0,st.jsx)(es,{htmlFor:"type",children:"Question Type"}),(0,st.jsxs)(rs,{id:"type",name:"type",value:i.type||"multiple",onChange:p,children:[(0,st.jsx)("option",{value:"multiple",children:"Multiple Choice"}),(0,st.jsx)("option",{value:"yesno",children:"Yes/No"}),(0,st.jsx)("option",{value:"text",children:"Text Input"})]})]}),(0,st.jsxs)(Za,{style:{flex:1},children:[(0,st.jsxs)(es,{style:{display:"flex",alignItems:"center"},children:[(0,st.jsx)("input",{type:"checkbox",name:"completeSection",checked:i.completeSection,onChange:e=>{const{name:t,checked:n}=e.target;a((e=>({...e,[t]:n})))},style:{marginRight:"0.5rem"}}),"Completes Section"]}),(0,st.jsx)("div",{style:{fontSize:"0.75rem",color:"var(--text-gray-600)",marginTop:"0.25rem"},children:"Check if this question is the final question in a troubleshooting section"})]})]}),(0,st.jsxs)(Za,{children:[(0,st.jsx)(es,{htmlFor:"hint",children:"Question Hint"}),(0,st.jsx)(ts,{type:"text",id:"hint",name:"hint",value:i.hint||"",onChange:p,placeholder:"Guidance for agent on this question (optional)"})]}),(0,st.jsxs)(Za,{children:[(0,st.jsx)(es,{htmlFor:"textContent",children:"Detailed Content"}),(0,st.jsx)(ns,{id:"textContent",name:"textContent",value:i.textContent||"",onChange:p,rows:3,placeholder:"Additional detailed content for text-type questions (optional)"})]}),("multiple"===i.type||"yesno"===i.type)&&(0,st.jsxs)(ls,{children:[(0,st.jsx)(es,{children:"Answer Options and Navigation"}),i.options&&i.options.map(((e,n)=>(0,st.jsxs)(cs,{children:[(0,st.jsx)(us,{onClick:()=>(e=>{const t=[...i.options];t.splice(e,1),a((e=>({...e,options:t})))})(n),children:"\xd7"}),(0,st.jsxs)("div",{style:{flex:1,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0.5rem"},children:[(0,st.jsx)(ts,{type:"text",placeholder:"Option Value",value:e.value||"",onChange:e=>f(n,"value",e.target.value),title:"Internal value used for this option"}),(0,st.jsx)(ts,{type:"text",placeholder:"Display Label",value:e.label||"",onChange:e=>f(n,"label",e.target.value),title:"Text shown to the user"}),(0,st.jsxs)(rs,{value:e.nextQuestionId||"",onChange:e=>f(n,"nextQuestionId",e.target.value),title:"The next question to show when this option is selected",children:[(0,st.jsx)("option",{value:"",children:"-- Select Next Question --"}),t.map((e=>(0,st.jsxs)("option",{value:e.id,children:[e.id,": ",e.text.substring(0,30),e.text.length>30?"...":""]},e.id))),(0,st.jsx)("option",{value:"SHOW_SUMMARY",children:"SHOW_SUMMARY (End)"})]})]})]},n))),(0,st.jsx)(ds,{onClick:()=>{a((e=>({...e,options:[...e.options,{value:"",label:"",nextQuestionId:""}]})))},children:"+ Add Answer Option"})]}),(0,st.jsxs)(os,{children:[(0,st.jsx)(ss,{onClick:()=>d(r),children:"Cancel Changes"}),(0,st.jsx)(as,{onClick:()=>{if(!i.id)return void alert("Question ID is required");if(!i.text)return void alert("Question text is required");if(("multiple"===i.type||"yesno"===i.type)&&0===i.options.length)return void alert("At least one option is required for multiple choice questions");const e=t.map((e=>e.id===i.id?{...i}:e));n(e),alert("Question changes saved to temporary memory. Use Export functionality to save permanently.")},children:"Save Question"})]})]})]})},fs=ho.div`
  display: flex;
`,hs=ho.div`
  width: 300px;
  border-right: 1px solid var(--border-light);
  padding-right: 1.5rem;
  margin-right: 1.5rem;
  overflow-y: auto;
  max-height: 700px;
`,ms=ho.div`
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  background-color: ${e=>e.active?"var(--bg-purple-light)":"white"};
  border: 1px solid ${e=>e.active?"var(--qbo-purple-light)":"var(--border-light)"};
  
  &:hover {
    background-color: var(--bg-purple-light);
  }
  
  display: flex;
  align-items: center;
`,gs=ho.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${e=>e.color||"var(--qbo-purple-primary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 0.75rem;
  font-size: 0.875rem;
`,vs=ho.div`
  flex: 1;
`,ys=ho.h3`
  font-size: 0.875rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,bs=ho.span`
  font-size: 0.75rem;
  color: var(--text-gray-500);
`,xs=ho.div`
  flex: 1;
`,ws=ho.div`
  margin-bottom: 1.5rem;
`,ks=ho.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-gray-700);
`,Ss=ho.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`,Cs=ho.div`
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  background-color: ${e=>e.color};
  margin-top: 0.5rem;
  border: 1px solid var(--border-light);
`,Es=ho.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`,Ts=ho.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`,js=ho(Ts)`
  background-color: var(--qbo-purple-primary);
  color: white;
  border: none;
  
  &:hover {
    background-color: var(--qbo-purple-dark);
  }
`,As=ho(Ts)`
  background-color: white;
  color: var(--text-gray-700);
  border: 1px solid var(--border-light);
  
  &:hover {
    background-color: var(--bg-lighter);
  }
`,_s=ho.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: var(--bg-lighter);
  color: var(--text-gray-700);
  border: 1px dashed var(--border-light);
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 0.75rem;
  
  &:hover {
    background-color: var(--bg-purple-light);
    border-color: var(--qbo-purple-light);
  }
`,Ps=()=>{const[t,n]=(0,e.useState)([]),[r,o]=(0,e.useState)(null),[i,a]=(0,e.useState)({id:"",title:"",color:"",icon:""});(0,e.useEffect)((()=>{n([...jo.sections]),jo.sections.length>0&&(o(jo.sections[0].id),a({...jo.sections[0]}))}),[]);const s=e=>{const n=t.find((t=>t.id===e));n&&(o(e),a({...n}))},l=e=>{const{name:t,value:n}=e.target;a((e=>({...e,[t]:n})))},c=e=>e.startsWith("fa-")?(0,st.jsx)("i",{className:`fas ${e}`}):e;return(0,st.jsxs)(fs,{children:[(0,st.jsxs)(hs,{children:[t.map((e=>(0,st.jsxs)(ms,{active:r===e.id,onClick:()=>s(e.id),children:[(0,st.jsx)(gs,{color:e.color,children:c(e.icon)}),(0,st.jsxs)(vs,{children:[(0,st.jsx)(ys,{children:e.title}),(0,st.jsx)(bs,{children:e.id})]})]},e.id))),(0,st.jsx)(_s,{onClick:()=>{const e="section_"+Math.random().toString(36).substr(2,9),t={id:e,title:"New Section",color:"var(--qbo-purple-primary)",icon:"fa-star"};n((e=>[...e,t])),o(e),a(t)},children:"+ Add New Section"})]}),(0,st.jsxs)(xs,{children:[(0,st.jsxs)(ws,{children:[(0,st.jsx)(ks,{htmlFor:"id",children:"Section ID"}),(0,st.jsx)(Ss,{type:"text",id:"id",name:"id",value:i.id||"",onChange:l})]}),(0,st.jsxs)(ws,{children:[(0,st.jsx)(ks,{htmlFor:"title",children:"Section Title"}),(0,st.jsx)(Ss,{type:"text",id:"title",name:"title",value:i.title||"",onChange:l})]}),(0,st.jsxs)(ws,{children:[(0,st.jsx)(ks,{htmlFor:"color",children:"Section Color"}),(0,st.jsx)(Ss,{type:"text",id:"color",name:"color",value:i.color||"",onChange:l,placeholder:"var(--color-name) or #RRGGBB"}),(0,st.jsx)(Cs,{color:i.color})]}),(0,st.jsxs)(ws,{children:[(0,st.jsx)(ks,{htmlFor:"icon",children:"Section Icon"}),(0,st.jsx)(Ss,{type:"text",id:"icon",name:"icon",value:i.icon||"",onChange:l,placeholder:"fa-icon-name or emoji"}),(0,st.jsx)("div",{style:{marginTop:"0.5rem",fontSize:"1.5rem"},children:i.icon&&c(i.icon)})]}),(0,st.jsxs)(Es,{children:[(0,st.jsx)(As,{onClick:()=>s(r),children:"Cancel Changes"}),(0,st.jsx)(js,{onClick:()=>{const e=t.map((e=>e.id===i.id?{...i}:e));n(e),alert("Section changes saved to temporary memory. Use Export functionality to save permanently.")},children:"Save Section"})]})]})]})},Ns=ho.div`
  display: flex;
  flex-direction: column;
`,Rs=ho.div`
  margin-bottom: 1.5rem;
`,Os=ho.h2`
  font-size: 1.25rem;
  color: var(--text-gray-700);
  margin: 0 0 0.5rem 0;
`,Ds=ho.p`
  color: var(--text-gray-600);
  margin: 0;
  font-size: 0.875rem;
`,Is=ho.div`
  border: 1px solid var(--border-light);
  border-radius: 8px;
  overflow: hidden;
`,zs=ho.div`
  display: grid;
  grid-template-columns: 2fr 2fr 3fr;
  background-color: var(--bg-lighter);
  padding: 0.75rem 1rem;
  font-weight: 600;
  border-bottom: 1px solid var(--border-light);
`,Fs=ho.div`
  max-height: 600px;
  overflow-y: auto;
`,Ls=ho.div`
  display: grid;
  grid-template-columns: 2fr 2fr 3fr;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-light);
  background-color: ${e=>e.active?"var(--bg-purple-light)":"white"};
  
  &:hover {
    background-color: var(--bg-purple-light);
  }
  
  &:last-child {
    border-bottom: none;
  }
`,Bs=ho.div`
  display: flex;
  align-items: center;
`,qs=ho(Bs)`
  font-weight: 500;
  color: var(--text-gray-800);
`,Us=ho(Bs)`
  color: var(--text-gray-700);
  font-style: italic;
`,$s=ho(Bs)`
  position: relative;
`,Ms=ho.div`
  width: 100%;
  position: relative;
`,Qs=ho.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--text-gray-500);
`,Hs=ho.select`
  width: 100%;
  padding: 0.5rem 0.75rem;
  appearance: none;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  background-color: white;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`,Ws=ho.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
`,Ks=ho.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`,Vs=ho(Ks)`
  background-color: var(--qbo-purple-primary);
  color: white;
  border: none;
  
  &:hover {
    background-color: var(--qbo-purple-dark);
  }
`,Ys=()=>{const[t,n]=(0,e.useState)([]),[r,o]=(0,e.useState)([]);(0,e.useEffect)((()=>{const e=[];Object.entries(jo.navigationMap).forEach((t=>{let[n,r]=t;const o=jo.questions[n]||{text:"Unknown Question"};"object"===typeof r&&Object.entries(r).forEach((t=>{let[r,i]=t;e.push({questionId:n,questionText:o.text,answer:r,nextQuestionId:i})}))})),n(e);const t=Object.entries(jo.questions).map((e=>{let[t,n]=e;return{id:t,text:n.text}}));o(t)}),[]);return(0,st.jsxs)(Ns,{children:[(0,st.jsxs)(Rs,{children:[(0,st.jsx)(Os,{children:"Question Navigation Flow"}),(0,st.jsx)(Ds,{children:"Define where each question should lead based on the user's answer. This creates the decision tree for the troubleshooter."})]}),(0,st.jsxs)(Is,{children:[(0,st.jsxs)(zs,{children:[(0,st.jsx)("div",{children:"Question"}),(0,st.jsx)("div",{children:"When Answer Is"}),(0,st.jsx)("div",{children:"Go To Question"})]}),(0,st.jsx)(Fs,{children:t.map(((e,o)=>(0,st.jsxs)(Ls,{children:[(0,st.jsx)(qs,{children:e.questionText}),(0,st.jsx)(Us,{children:e.answer}),(0,st.jsx)($s,{children:(0,st.jsxs)(Ms,{children:[(0,st.jsxs)(Hs,{value:e.nextQuestionId,onChange:e=>((e,r)=>{const o=[...t];o[e].nextQuestionId=r,n(o)})(o,e.target.value),children:[(0,st.jsx)("option",{value:"",children:"-- Select Next Question --"}),r.map((e=>(0,st.jsx)("option",{value:e.id,children:e.text},e.id))),(0,st.jsx)("option",{value:"SHOW_SUMMARY",children:"Show Summary (End)"})]}),(0,st.jsx)(Qs,{children:"\u25bc"})]})})]},o)))})]}),(0,st.jsx)(Ws,{children:(0,st.jsx)(Vs,{onClick:()=>{alert("Navigation changes saved to temporary memory. Use Export functionality to save permanently.")},children:"Save Navigation Flow"})})]})},Gs=ho.div`
  display: flex;
  flex-direction: column;
`,Js=ho.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-light);
`,Xs=ho.button`
  padding: 0.75rem 1.5rem;
  background-color: ${e=>e.active?"white":"var(--bg-lighter)"};
  color: ${e=>e.active?"var(--qbo-purple-primary)":"var(--text-gray-700)"};
  border: 1px solid var(--border-light);
  border-bottom: ${e=>e.active?"1px solid white":"1px solid var(--border-light)"};
  border-radius: 4px 4px 0 0;
  margin-right: 0.25rem;
  font-weight: ${e=>e.active?"600":"400"};
  cursor: pointer;
  position: relative;
  top: 1px;
  
  &:hover {
    background-color: ${e=>e.active?"white":"var(--bg-purple-light)"};
  }
`,Zs=ho.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,el=ho.div`
  border: 1px solid var(--border-light);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`,tl=ho.div`
  padding: 1rem;
  border-bottom: 1px solid var(--border-light);
  background-color: var(--bg-lighter);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nl=ho.h3`
  font-size: 0.875rem;
  margin: 0;
  color: var(--text-gray-800);
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,rl=ho.div`
  display: flex;
  gap: 0.5rem;
`,ol=ho.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  background-color: ${e=>e.delete?"#f8d7da":"var(--bg-purple-light)"};
  color: ${e=>e.delete?"#721c24":"var(--qbo-purple-primary)"};
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.delete?"#f5c6cb":"var(--bg-purple-lighter)"};
  }
`,il=ho.div`
  padding: 1rem;
`,al=ho.div`
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,sl=ho.div`
  font-size: 0.75rem;
  color: var(--text-gray-500);
  margin-bottom: 0.25rem;
`,ll=ho.div`
  font-size: 0.875rem;
  color: var(--text-gray-700);
  word-break: break-word;
`,cl=ho.a`
  color: var(--qbo-purple-primary);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`,ul=ho.span`
  display: inline-block;
  padding: 0.125rem 0.375rem;
  background-color: var(--bg-lighter);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--text-gray-700);
  margin-right: 0.375rem;
  margin-bottom: 0.375rem;
`,dl=ho.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: var(--bg-lighter);
  color: var(--text-gray-700);
  border: 2px dashed var(--border-light);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--bg-purple-light);
    border-color: var(--qbo-purple-light);
  }
`,pl=ho.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,fl=ho.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,hl=ho.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,ml=ho.h2`
  font-size: 1.25rem;
  margin: 0;
  color: var(--text-gray-800);
`,gl=ho.button`
  background: none;
  border: none;
  color: var(--text-gray-500);
  font-size: 1.5rem;
  cursor: pointer;
  
  &:hover {
    color: var(--text-gray-700);
  }
`,vl=ho.div`
  margin-bottom: 1.5rem;
`,yl=ho.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-gray-700);
`,bl=ho.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`,xl=ho.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 0.875rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`,wl=ho.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 0.875rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`,kl=ho.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`,Sl=ho.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`,Cl=ho(Sl)`
  background-color: var(--qbo-purple-primary);
  color: white;
  border: none;
  
  &:hover {
    background-color: var(--qbo-purple-dark);
  }
`,El=ho(Sl)`
  background-color: white;
  color: var(--text-gray-700);
  border: 1px solid var(--border-light);
  
  &:hover {
    background-color: var(--bg-lighter);
  }
`,Tl=ho.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-gray-500);
`,jl=()=>{const[t,n]=(0,e.useState)("kb"),[r,o]=(0,e.useState)({kbArticles:[],quickTips:[]}),[i,a]=(0,e.useState)(!1),[s,l]=(0,e.useState)(null),[c,u]=(0,e.useState)({id:"",title:"",description:"",url:"",content:"",driver:"all"});(0,e.useEffect)((()=>{o({kbArticles:[...jo.knowledgeBase.kbArticles],quickTips:[...jo.knowledgeBase.quickTips]})}),[]);const d=e=>{const{name:t,value:n}=e.target;u((e=>({...e,[t]:n})))},p=e=>{u({...e}),l(e),a(!0)},f=e=>{window.confirm("Are you sure you want to delete this resource?")&&o("kb"===t?t=>({...t,kbArticles:t.kbArticles.filter((t=>t.id!==e))}):t=>({...t,quickTips:t.quickTips.filter((t=>t.id!==e))}))};return(0,st.jsxs)(Gs,{children:[(0,st.jsxs)(Js,{children:[(0,st.jsx)(Xs,{active:"kb"===t,onClick:()=>n("kb"),children:"KB Articles"}),(0,st.jsx)(Xs,{active:"tips"===t,onClick:()=>n("tips"),children:"Quick Tips"})]}),"kb"===t?0===r.kbArticles.length?(0,st.jsx)(Tl,{children:'No knowledge base articles found. Click "Add New Resource" to create one.'}):(0,st.jsx)(Zs,{children:r.kbArticles.map((e=>(0,st.jsxs)(el,{children:[(0,st.jsxs)(tl,{children:[(0,st.jsx)(nl,{children:e.title}),(0,st.jsxs)(rl,{children:[(0,st.jsx)(ol,{onClick:()=>p(e),children:"\u270e"}),(0,st.jsx)(ol,{delete:!0,onClick:()=>f(e.id),children:"\xd7"})]})]}),(0,st.jsxs)(il,{children:[e.description&&(0,st.jsxs)(al,{children:[(0,st.jsx)(sl,{children:"Description"}),(0,st.jsx)(ll,{children:e.description})]}),(0,st.jsxs)(al,{children:[(0,st.jsx)(sl,{children:"URL"}),(0,st.jsx)(ll,{children:(0,st.jsx)(cl,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.url})})]}),(0,st.jsxs)(al,{children:[(0,st.jsx)(sl,{children:"Driver"}),(0,st.jsx)(ll,{children:(0,st.jsx)(ul,{children:e.driver})})]})]})]},e.id)))}):0===r.quickTips.length?(0,st.jsx)(Tl,{children:'No quick tips found. Click "Add New Resource" to create one.'}):(0,st.jsx)(Zs,{children:r.quickTips.map((e=>(0,st.jsxs)(el,{children:[(0,st.jsxs)(tl,{children:[(0,st.jsx)(nl,{children:e.title}),(0,st.jsxs)(rl,{children:[(0,st.jsx)(ol,{onClick:()=>p(e),children:"\u270e"}),(0,st.jsx)(ol,{delete:!0,onClick:()=>f(e.id),children:"\xd7"})]})]}),(0,st.jsxs)(il,{children:[(0,st.jsxs)(al,{children:[(0,st.jsx)(sl,{children:"Content"}),(0,st.jsx)(ll,{children:e.content})]}),(0,st.jsxs)(al,{children:[(0,st.jsx)(sl,{children:"Driver"}),(0,st.jsx)(ll,{children:(0,st.jsx)(ul,{children:e.driver})})]})]})]},e.id)))}),(0,st.jsx)("div",{style:{marginTop:"1.5rem"},children:(0,st.jsx)(dl,{onClick:()=>{const e="kb"===t?`kb${Math.random().toString(36).substr(2,6)}`:`tip${Math.random().toString(36).substr(2,6)}`;u({id:e,title:"",description:"kb"===t?"":void 0,url:"kb"===t?"":void 0,content:"kb"===t?void 0:"",driver:"all"}),l(null),a(!0)},children:"+ Add New Resource"})}),i&&(0,st.jsx)(pl,{children:(0,st.jsxs)(fl,{children:[(0,st.jsxs)(hl,{children:[(0,st.jsx)(ml,{children:s?"Edit Resource":"Add New Resource"}),(0,st.jsx)(gl,{onClick:()=>a(!1),children:"\xd7"})]}),(0,st.jsxs)(vl,{children:[(0,st.jsx)(yl,{htmlFor:"id",children:"Resource ID"}),(0,st.jsx)(bl,{type:"text",id:"id",name:"id",value:c.id||"",onChange:d,disabled:!!s})]}),(0,st.jsxs)(vl,{children:[(0,st.jsx)(yl,{htmlFor:"title",children:"Title"}),(0,st.jsx)(bl,{type:"text",id:"title",name:"title",value:c.title||"",onChange:d})]}),"kb"===t?(0,st.jsxs)(st.Fragment,{children:[(0,st.jsxs)(vl,{children:[(0,st.jsx)(yl,{htmlFor:"description",children:"Description"}),(0,st.jsx)(xl,{id:"description",name:"description",value:c.description||"",onChange:d})]}),(0,st.jsxs)(vl,{children:[(0,st.jsx)(yl,{htmlFor:"url",children:"URL"}),(0,st.jsx)(bl,{type:"text",id:"url",name:"url",value:c.url||"",onChange:d})]})]}):(0,st.jsxs)(vl,{children:[(0,st.jsx)(yl,{htmlFor:"content",children:"Content"}),(0,st.jsx)(xl,{id:"content",name:"content",value:c.content||"",onChange:d})]}),(0,st.jsxs)(vl,{children:[(0,st.jsx)(yl,{htmlFor:"driver",children:"Call Driver"}),(0,st.jsx)(wl,{id:"driver",name:"driver",value:c.driver||"all",onChange:d,children:jo.knowledgeBase.callDrivers.map((e=>(0,st.jsx)("option",{value:e.id,children:e.name},e.id)))})]}),(0,st.jsxs)(kl,{children:[(0,st.jsx)(El,{onClick:()=>a(!1),children:"Cancel"}),(0,st.jsx)(Cl,{onClick:()=>{o("kb"===t?s?e=>({...e,kbArticles:e.kbArticles.map((e=>e.id===c.id?{...c}:e))}):e=>({...e,kbArticles:[...e.kbArticles,{...c}]}):s?e=>({...e,quickTips:e.quickTips.map((e=>e.id===c.id?{...c}:e))}):e=>({...e,quickTips:[...e.quickTips,{...c}]})),a(!1),alert("Resource changes saved to temporary memory. Use Export functionality to save permanently.")},children:"Save Resource"})]})]})})]})},Al=ho.div`
  display: flex;
  flex-direction: column;
`,_l=ho.h2`
  font-size: 1.25rem;
  color: var(--text-gray-800);
  margin: 0 0 1rem 0;
`,Pl=ho.p`
  color: var(--text-gray-600);
  margin: 0 0 1.5rem 0;
  font-size: 0.875rem;
  line-height: 1.5;
`,Nl=ho.div`
  background-color: white;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`,Rl=ho.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Ol=ho.div`
  background-color: var(--bg-lighter);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,Dl=ho.div`
  font-size: 0.875rem;
  color: var(--text-gray-600);
  margin-bottom: 0.5rem;
`,Il=ho.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--qbo-purple-primary);
`,zl=ho.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,Fl=ho.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`,Ll=ho(Fl)`
  background-color: var(--qbo-purple-primary);
  color: white;
  border: none;
  
  &:hover {
    background-color: var(--qbo-purple-dark);
  }
`,Bl=ho(Fl)`
  background-color: white;
  color: var(--text-gray-700);
  border: 1px solid var(--border-light);
  
  &:hover {
    background-color: var(--bg-lighter);
  }
`,ql=ho.div`
  margin-top: 1.5rem;
  border: 1px dashed var(--border-light);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  background-color: var(--bg-lighter);
`,Ul=ho.label`
  display: block;
  cursor: pointer;
`,$l=ho.input`
  display: none;
`,Ml=ho.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--qbo-purple-light);
`,Ql=ho.div`
  font-size: 0.875rem;
  color: var(--text-gray-600);
  margin-bottom: 1rem;
`,Hl=ho.textarea`
  width: 100%;
  min-height: 300px;
  padding: 1rem;
  font-family: monospace;
  font-size: 0.875rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  background-color: #f8f9fa;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`,Wl=ho.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  background-color: ${e=>"success"===e.type?"#d4edda":"error"===e.type?"#f8d7da":"#cce5ff"};
  color: ${e=>"success"===e.type?"#155724":"error"===e.type?"#721c24":"#004085"};
  border: 1px solid ${e=>"success"===e.type?"#c3e6cb":"error"===e.type?"#f5c6cb":"#b8daff"};
  display: ${e=>e.visible?"block":"none"};
`,Kl=ho.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-light);
`,Vl=ho.button`
  padding: 0.75rem 1.5rem;
  background-color: ${e=>e.active?"white":"var(--bg-lighter)"};
  color: ${e=>e.active?"var(--qbo-purple-primary)":"var(--text-gray-700)"};
  border: 1px solid var(--border-light);
  border-bottom: ${e=>e.active?"1px solid white":"1px solid var(--border-light)"};
  border-radius: 4px 4px 0 0;
  margin-right: 0.25rem;
  font-weight: ${e=>e.active?"600":"400"};
  cursor: pointer;
  position: relative;
  top: 1px;
  
  &:hover {
    background-color: ${e=>e.active?"white":"var(--bg-purple-light)"};
  }
`,Yl=ho.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-gray-700);
`,Gl=()=>{const[t,n]=(0,e.useState)({questions:0,sections:0,navigationRules:0,resources:0}),[r,o]=(0,e.useState)("export"),[i,a]=(0,e.useState)(""),[s,l]=(0,e.useState)(""),[c,u]=(0,e.useState)({visible:!1,type:"info",message:""});(0,e.useEffect)((()=>{n({questions:Object.keys(jo.questions).length,sections:jo.sections.length,navigationRules:Object.values(jo.navigationMap).reduce(((e,t)=>"object"===typeof t?e+Object.keys(t).length:e),0),resources:jo.knowledgeBase.kbArticles.length+jo.knowledgeBase.quickTips.length})}),[]);return(0,st.jsxs)(Al,{children:[(0,st.jsx)(_l,{children:"Data Management"}),(0,st.jsxs)(Pl,{children:["Export your troubleshooter data to backup or share with others. Import data to update your troubleshooter.",(0,st.jsx)("br",{}),(0,st.jsx)("strong",{children:"Note:"})," Changes made in the admin panel are temporary until exported and applied to your codebase."]}),(0,st.jsx)(Wl,{visible:c.visible,type:c.type,children:c.message}),(0,st.jsxs)(Nl,{children:[(0,st.jsx)(_l,{children:"Data Statistics"}),(0,st.jsxs)(Rl,{children:[(0,st.jsxs)(Ol,{children:[(0,st.jsx)(Dl,{children:"Questions"}),(0,st.jsx)(Il,{children:t.questions})]}),(0,st.jsxs)(Ol,{children:[(0,st.jsx)(Dl,{children:"Sections"}),(0,st.jsx)(Il,{children:t.sections})]}),(0,st.jsxs)(Ol,{children:[(0,st.jsx)(Dl,{children:"Navigation Rules"}),(0,st.jsx)(Il,{children:t.navigationRules})]}),(0,st.jsxs)(Ol,{children:[(0,st.jsx)(Dl,{children:"Resources"}),(0,st.jsx)(Il,{children:t.resources})]})]})]}),(0,st.jsxs)(Nl,{children:[(0,st.jsxs)(Kl,{children:[(0,st.jsx)(Vl,{active:"export"===r,onClick:()=>o("export"),children:"Export Data"}),(0,st.jsx)(Vl,{active:"import"===r,onClick:()=>o("import"),children:"Import Data"})]}),"export"===r?(0,st.jsxs)("div",{children:[(0,st.jsx)(Pl,{children:"Export your current troubleshooter configuration as a JSON file. This includes all questions, sections, navigation rules, and resources."}),(0,st.jsx)(Ll,{onClick:()=>{try{const e={questions:jo.questions,sections:jo.sections,navigationMap:jo.navigationMap,knowledgeBase:jo.knowledgeBase};a(JSON.stringify(e,null,2)),u({visible:!0,type:"success",message:"Data successfully prepared for export. You can now copy or download the JSON data."}),setTimeout((()=>{u((e=>({...e,visible:!1})))}),5e3)}catch(e){u({visible:!0,type:"error",message:`Error exporting data: ${e.message}`})}},children:"Generate Export Data"}),i&&(0,st.jsxs)(st.Fragment,{children:[(0,st.jsx)("div",{style:{marginTop:"1.5rem",marginBottom:"1rem"},children:(0,st.jsx)(Hl,{value:i,readOnly:!0})}),(0,st.jsxs)(zl,{children:[(0,st.jsx)(Bl,{onClick:()=>navigator.clipboard.writeText(i),children:"Copy to Clipboard"}),(0,st.jsx)(Ll,{onClick:()=>{try{const e="data:text/json;charset=utf-8,"+encodeURIComponent(i),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","troubleshooter_data.json"),document.body.appendChild(t),t.click(),t.remove()}catch(e){u({visible:!0,type:"error",message:`Error downloading data: ${e.message}`})}},children:"Download JSON File"})]})]})]}):(0,st.jsxs)("div",{children:[(0,st.jsx)(Pl,{children:"Import a previously exported troubleshooter configuration file or paste JSON data directly."}),(0,st.jsx)(ql,{children:(0,st.jsxs)(Ul,{htmlFor:"file-upload",children:[(0,st.jsx)(Ml,{children:"\ud83d\udcc1"}),(0,st.jsx)(Ql,{children:"Click to browse or drag and drop a JSON file"}),(0,st.jsx)(Bl,{as:"span",children:"Select File"}),(0,st.jsx)($l,{id:"file-upload",type:"file",accept:".json",onChange:e=>{const t=e.target.files[0];if(t){const e=new FileReader;e.onload=e=>{try{const t=e.target.result;l(t),u({visible:!0,type:"info",message:'File loaded successfully. Review the data and click "Import Data" to apply changes.'})}catch(t){u({visible:!0,type:"error",message:`Error reading file: ${t.message}`})}},e.readAsText(t)}}})]})}),(0,st.jsxs)("div",{style:{marginTop:"1.5rem",marginBottom:"1rem"},children:[(0,st.jsx)(Yl,{children:"Or paste JSON data directly:"}),(0,st.jsx)(Hl,{value:s,onChange:e=>l(e.target.value),placeholder:'{\n  "questions": { ... },\n  "sections": [ ... ],\n  "navigationMap": { ... },\n  "knowledgeBase": { ... }\n}'})]}),(0,st.jsx)(Ll,{onClick:()=>{try{JSON.parse(s),u({visible:!0,type:"success",message:"Data imported successfully. Changes are currently only in memory. To make them permanent, the data would need to be saved to the actual data file."})}catch(e){u({visible:!0,type:"error",message:`Error importing data: ${e.message}. Please check the JSON format.`})}},disabled:!s,children:"Import Data"})]})]})]})},Jl=ho.div`
  background-color: #f5f7fa;
  min-height: 100vh;
  padding: 2rem;
`,Xl=ho.header`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`,Zl=ho.h1`
  color: var(--qbo-purple-primary);
  margin: 0;
  font-size: 1.75rem;
`,ec=ho.p`
  color: var(--text-gray-600);
  margin: 0.5rem 0 0;
`,tc=ho.div`
  display: flex;
  background-color: white;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  margin-bottom: 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`,nc=ho.button`
  padding: 1rem 1.5rem;
  background-color: ${e=>e.active?"var(--qbo-purple-primary)":"white"};
  color: ${e=>e.active?"white":"var(--text-gray-700)"};
  border: none;
  cursor: pointer;
  font-weight: ${e=>e.active?"600":"400"};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.active?"var(--qbo-purple-primary)":"var(--bg-purple-light)"};
  }
`,rc=ho.div`
  background-color: white;
  border-radius: 0 0 8px 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`,oc=()=>{const[t,n]=(0,e.useState)("questions");return(0,st.jsxs)(Jl,{children:[(0,st.jsxs)(Xl,{children:[(0,st.jsx)(Zl,{children:"QBO Troubleshooter Admin Panel"}),(0,st.jsx)(ec,{children:"Edit questions, sections, navigation, and resources for the QBO Troubleshooter tool."})]}),(0,st.jsxs)(tc,{children:[(0,st.jsx)(nc,{active:"questions"===t,onClick:()=>n("questions"),children:"Questions"}),(0,st.jsx)(nc,{active:"sections"===t,onClick:()=>n("sections"),children:"Sections"}),(0,st.jsx)(nc,{active:"navigation"===t,onClick:()=>n("navigation"),children:"Navigation Flow"}),(0,st.jsx)(nc,{active:"resources"===t,onClick:()=>n("resources"),children:"Resources"}),(0,st.jsx)(nc,{active:"import-export"===t,onClick:()=>n("import-export"),children:"Import/Export"})]}),(0,st.jsx)(rc,{children:(()=>{switch(t){case"questions":default:return(0,st.jsx)(ps,{});case"sections":return(0,st.jsx)(Ps,{});case"navigation":return(0,st.jsx)(Ys,{});case"resources":return(0,st.jsx)(jl,{});case"import-export":return(0,st.jsx)(Gl,{})}})()})]})};const ic=function(){return(0,st.jsxs)(kt,{children:[(0,st.jsx)(go,{}),(0,st.jsx)(Xe,{basename:"/",children:(0,st.jsxs)(ve,{children:[(0,st.jsx)(me,{exact:!0,path:"/",element:(0,st.jsx)(Ha,{})}),(0,st.jsx)(me,{path:"/adminpanel",element:(0,st.jsx)(oc,{})}),(0,st.jsx)(me,{path:"*",element:(0,st.jsx)(he,{to:"/",replace:!0})})]})})]})},ac=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:o,getLCP:i,getTTFB:a}=t;n(e),r(e),o(e),i(e),a(e)}))};t.createRoot(document.getElementById("root")).render((0,st.jsx)(e.StrictMode,{children:(0,st.jsx)(ic,{})})),ac()})()})();
//# sourceMappingURL=main.3160f144.js.map