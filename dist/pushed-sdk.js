var Pushed;(()=>{"use strict";var e={296:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var o="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==r.g&&r.g||{},i="URLSearchParams"in o,n="Symbol"in o&&"iterator"in Symbol,s="FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in o,u="ArrayBuffer"in o;if(u)var h=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(e){return e&&h.indexOf(Object.prototype.toString.call(e))>-1};function d(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function l(e){return"string"!=typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function p(e){this.map={},e instanceof p?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){if(2!=e.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+e.length);this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function y(e){if(!e._noBody)return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function b(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function g(e){var t=new FileReader,r=b(t);return t.readAsArrayBuffer(e),r}function m(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:s&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:i&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&s&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||c(e))?this._bodyArrayBuffer=m(e):this._bodyText=e=Object.prototype.toString.call(e):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):i&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var e=y(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer)return y(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer));if(s)return this.blob().then(g);throw new Error("could not read as ArrayBuffer")},this.text=function(){var e,t,r,o,i,n=y(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,r=b(t=new FileReader),i=(o=/charset=([A-Za-z0-9_-]+)/.exec(e.type))?o[1]:"utf-8",t.readAsText(e,i),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(e,t){e=d(e),t=l(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},p.prototype.delete=function(e){delete this.map[d(e)]},p.prototype.get=function(e){return e=d(e),this.has(e)?this.map[e]:null},p.prototype.has=function(e){return this.map.hasOwnProperty(d(e))},p.prototype.set=function(e,t){this.map[d(e)]=l(t)},p.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},p.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),f(e)},p.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},p.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),f(e)},n&&(p.prototype[Symbol.iterator]=p.prototype.entries);var v=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function A(e,t){if(!(this instanceof A))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,i,n=(t=t||{}).body;if(e instanceof A){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new p(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new p(t.headers)),this.method=(i=(r=t.method||this.method||"GET").toUpperCase(),v.indexOf(i)>-1?i:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal||function(){if("AbortController"in o)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var s=/([?&])_=[^&]*/;s.test(this.url)?this.url=this.url.replace(s,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function T(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),i=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(i))}})),t}function E(e,t){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new p(t.headers),this.url=t.url||"",this._initBody(e)}A.prototype.clone=function(){return new A(this,{body:this._bodyInit})},w.call(A.prototype),w.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},E.error=function(){var e=new E(null,{status:200,statusText:""});return e.ok=!1,e.status=0,e.type="error",e};var S=[301,302,303,307,308];E.redirect=function(e,t){if(-1===S.indexOf(t))throw new RangeError("Invalid status code");return new E(null,{status:t,headers:{location:e}})};var P=o.DOMException;try{new P}catch(e){(P=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),P.prototype.constructor=P}function x(e,t){return new Promise((function(r,i){var n=new A(e,t);if(n.signal&&n.signal.aborted)return i(new P("Aborted","AbortError"));var a=new XMLHttpRequest;function h(){a.abort()}if(a.onload=function(){var e,t,o={statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new p,e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),o=r.shift().trim();if(o){var i=r.join(":").trim();try{t.append(o,i)}catch(e){console.warn("Response "+e.message)}}})),t)};0===n.url.indexOf("file://")&&(a.status<200||a.status>599)?o.status=200:o.status=a.status,o.url="responseURL"in a?a.responseURL:o.headers.get("X-Request-URL");var i="response"in a?a.response:a.responseText;setTimeout((function(){r(new E(i,o))}),0)},a.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request timed out"))}),0)},a.onabort=function(){setTimeout((function(){i(new P("Aborted","AbortError"))}),0)},a.open(n.method,function(e){try{return""===e&&o.location.href?o.location.href:e}catch(t){return e}}(n.url),!0),"include"===n.credentials?a.withCredentials=!0:"omit"===n.credentials&&(a.withCredentials=!1),"responseType"in a&&(s?a.responseType="blob":u&&(a.responseType="arraybuffer")),t&&"object"==typeof t.headers&&!(t.headers instanceof p||o.Headers&&t.headers instanceof o.Headers)){var c=[];Object.getOwnPropertyNames(t.headers).forEach((function(e){c.push(d(e)),a.setRequestHeader(e,l(t.headers[e]))})),n.headers.forEach((function(e,t){-1===c.indexOf(t)&&a.setRequestHeader(t,e)}))}else n.headers.forEach((function(e,t){a.setRequestHeader(t,e)}));n.signal&&(n.signal.addEventListener("abort",h),a.onreadystatechange=function(){4===a.readyState&&n.signal.removeEventListener("abort",h)}),a.send(void 0===n._bodyInit?null:n._bodyInit)}))}x.polyfill=!0,o.fetch||(o.fetch=x,o.Headers=p,o.Request=A,o.Response=E);var _=r(384);const k={async post(e,t){if(null===t)return;const r={method:"POST"};return r.body=JSON.stringify(t),r.headers={"Content-Type":"application/json"},await this.execute(e,r)},async execute(e,t){const r=this.getApiHost()+e;let o=await fetch(r,t);if(o.status<200||o.status>299){let e=(await o.json()).error||"An unknown error occurred";throw{status:o.status,message:e}}return await o.json()},getApiHost(){const e=self.localStorage,t=e.getItem(_.A.localStorageKeys.proxyApiEndpoint);return t?"https://"+t:e.getItem(_.A.localStorageKeys.apiEndpoint)||_.A.api.endpoint}},B={urlB64ToUint8Array(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),r=self.atob(t),o=new Uint8Array(r.length),i=r.length;for(let e=0;e<i;++e)o[e]=r.charCodeAt(e);return o}};e=r.hmd(e);var O={requestNotificationPermission:async()=>"default"===Notification.permission?"granted"===await Notification.requestPermission():"granted"===Notification.permission,async registerWebPushes(){if(this.isSupportWebPush(),!await this.requestNotificationPermission())throw new Error("Request permissions was denied");const e=await this.getRegistration();return await e.pushManager.getSubscription()?await this.validateSubscription():await this.register()},async validateSubscription(){if(this.isSupportWebPush(),"granted"!==Notification.permission)throw new Error("Request permissions was denied or not requested");const e=await this.getRegistration(),t=await e.pushManager.getSubscription();let r=localStorage.getItem(_.A.localStorageKeys.token);if(!r)return t&&await t.unsubscribe(),await this.register();if(!t)return await this.register();const o=this.getSavedTokenTimestamp(),i=this.getCurrentUnixTime();return o&&i-o<86400?r:(t&&await t.unsubscribe(),await this.register())},async register(){const e=await this.getRegistration(),t=await e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:B.urlB64ToUint8Array(_.A.vapidDetails.publicKey)}),r=localStorage.getItem(_.A.localStorageKeys.token),o=JSON.parse(JSON.stringify(t)),i=o.keys.auth,n=o.keys.p256dh,s=o.endpoint;if(!n||!i||!s)throw new Error("The push subscription is missing a required field.");const a={sdkVersion:_.A.version,auth:i,webApiEndpoint:s,P256dhKey:n,hostname:self.location.hostname,clientToken:r};let u,h="";try{u=await k.post(_.A.api.registerEndpoint,a)}catch(e){throw new Error(`The API request failed: ${e.message}`,e)}if(!u.success||!u.model.clientToken)throw new Error("An unexpected response was received from the Pushed API.");h=u.model.clientToken,localStorage.setItem(_.A.localStorageKeys.token,h);const c=this.getCurrentUnixTime();return localStorage.setItem(_.A.localStorageKeys.tokenTimestamp,c),h},async setNotificationListener(e){if(!("PushManager"in self)||!("serviceWorker"in navigator)&&"undefined"==typeof ServiceWorkerRegistration)return console.error("Web push is not supported by this browser.");if(navigator.serviceWorker&&await navigator.serviceWorker.ready,!navigator.serviceWorker)throw new Error("Service Worker not found");navigator.serviceWorker.addEventListener("message",(function(t){!t.data&&t.detail&&(t.data=t.detail),t.data&&t.data._pushed&&e(t.data)}))},setApiEndpoint(e){if(!e||"string"!=typeof e)return;const t=self.localStorage;if(!t)throw new Error("Local storage is not supported by this browser.");e!=t.getItem(_.A.localStorageKeys.apiEndpoint)&&(t.removeItem(_.A.localStorageKeys.token),t.setItem(_.A.localStorageKeys.apiEndpoint,e))},getSavedTokenTimestamp(){const e=localStorage.getItem(_.A.localStorageKeys.tokenTimestamp);return e?parseInt(e,10):null},getCurrentUnixTime:()=>Math.floor(Date.now()/1e3),async getRegistration(){let e;try{navigator.serviceWorker?e=await navigator.serviceWorker.register(`/${_.A.serviceWorker.fileName}`):self.registration&&(e=self.registration)}catch(e){throw Error(`Failed to load '${self.location.origin}/${_.A.serviceWorker.fileName}': ${e.message}`,e)}return navigator.serviceWorker&&await navigator.serviceWorker.ready,e},isSupportWebPush(){if(!("PushManager"in self)||!("serviceWorker"in navigator)&&"undefined"==typeof ServiceWorkerRegistration)throw/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1?new Error('For Web Push on iOS 16.4+, you will first need to click the "Share" button -> "Add to Home Screen" before you can sign up for push notifications.'):new Error("Web push is not supported");if(!self.localStorage)throw new Error("Local storage is not supported")}};const j=O;try{e.exports=O}catch(e){}},384:(e,t,r)=>{r.d(t,{A:()=>i}),e=r.hmd(e);const o={version:1,platform:"web",api:{endpoint:"https://api.pushed.ru",registerEndpoint:"/v2/web-push/register",authEndpoint:"/v2/web-push/auth-client"},vapidDetails:{publicKey:"BKkzxPkCIPpSGAzVx3g3AHOsA738n64rNa7T9ERP1I8fSgLQGxZLjNYw9ABNTf0Mbdp8_4MXufXa8q3t_7epHCI"},localStorageKeys:{token:"clientToken",tokenTimestamp:"tokenTimestamp",apiEndpoint:"pushedApiEndpoint",proxyApiEndpoint:"proxyApiEndpoint",environment:"pushedEnvironment"},serviceWorker:{fileName:"sw.js"},logic:{deviceValidationDelay:5e3}},i=o;try{e.exports=o}catch(e){}}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={id:o,loaded:!1,exports:{}};return e[o](n,n.exports,r),n.loaded=!0,n.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o=r(296);Pushed=o})();