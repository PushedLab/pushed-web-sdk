var Pushed;(()=>{"use strict";var e={384:(e,t,r)=>{r.d(t,{A:()=>o}),e=r.hmd(e);const n={version:1,platform:"web",api:{endpoint:"https://api.pushed.ru",registerEndpoint:"/v2/web-push/register",authEndpoint:"/v2/web-push/auth-client"},vapidDetails:{publicKey:"BKkzxPkCIPpSGAzVx3g3AHOsA738n64rNa7T9ERP1I8fSgLQGxZLjNYw9ABNTf0Mbdp8_4MXufXa8q3t_7epHCI"},localStorageKeys:{token:"clientToken",tokenTimestamp:"tokenTimestamp",apiEndpoint:"pushedApiEndpoint",proxyApiEndpoint:"proxyApiEndpoint",environment:"pushedEnvironment"},serviceWorker:{fileName:"sw.js"},logic:{deviceValidationDelay:5e3}},o=n;try{e.exports=n}catch(e){}},191:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==r.g&&r.g||{},o="URLSearchParams"in n,i="Symbol"in n&&"iterator"in Symbol,s="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in n,u="ArrayBuffer"in n;if(u)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&c.indexOf(Object.prototype.toString.call(e))>-1};function f(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function h(e){return"string"!=typeof e&&(e=String(e)),e}function d(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return i&&(t[Symbol.iterator]=function(){return t}),t}function p(e){this.map={},e instanceof p?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){if(2!=e.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+e.length);this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function y(e){if(!e._noBody)return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function g(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function b(e){var t=new FileReader,r=g(t);return t.readAsArrayBuffer(e),r}function m(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:s&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&s&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=m(e):this._bodyText=e=Object.prototype.toString.call(e):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var e=y(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer)return y(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer));if(s)return this.blob().then(b);throw new Error("could not read as ArrayBuffer")},this.text=function(){var e,t,r,n,o,i=y(this);if(i)return i;if(this._bodyBlob)return e=this._bodyBlob,r=g(t=new FileReader),o=(n=/charset=([A-Za-z0-9_-]+)/.exec(e.type))?n[1]:"utf-8",t.readAsText(e,o),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(e,t){e=f(e),t=h(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},p.prototype.delete=function(e){delete this.map[f(e)]},p.prototype.get=function(e){return e=f(e),this.has(e)?this.map[e]:null},p.prototype.has=function(e){return this.map.hasOwnProperty(f(e))},p.prototype.set=function(e,t){this.map[f(e)]=h(t)},p.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},p.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),d(e)},p.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),d(e)},p.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),d(e)},i&&(p.prototype[Symbol.iterator]=p.prototype.entries);var w=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function A(e,t){if(!(this instanceof A))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,i=(t=t||{}).body;if(e instanceof A){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new p(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new p(t.headers)),this.method=(o=(r=t.method||this.method||"GET").toUpperCase(),w.indexOf(o)>-1?o:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal||function(){if("AbortController"in n)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var s=/([?&])_=[^&]*/;s.test(this.url)?this.url=this.url.replace(s,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function T(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function E(e,t){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new p(t.headers),this.url=t.url||"",this._initBody(e)}A.prototype.clone=function(){return new A(this,{body:this._bodyInit})},v.call(A.prototype),v.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},E.error=function(){var e=new E(null,{status:200,statusText:""});return e.ok=!1,e.status=0,e.type="error",e};var _=[301,302,303,307,308];E.redirect=function(e,t){if(-1===_.indexOf(t))throw new RangeError("Invalid status code");return new E(null,{status:t,headers:{location:e}})};var S=n.DOMException;try{new S}catch(e){(S=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),S.prototype.constructor=S}function P(e,t){return new Promise((function(r,o){var i=new A(e,t);if(i.signal&&i.signal.aborted)return o(new S("Aborted","AbortError"));var a=new XMLHttpRequest;function c(){a.abort()}if(a.onload=function(){var e,t,n={statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new p,e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();try{t.append(n,o)}catch(e){console.warn("Response "+e.message)}}})),t)};0===i.url.indexOf("file://")&&(a.status<200||a.status>599)?n.status=200:n.status=a.status,n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;setTimeout((function(){r(new E(o,n))}),0)},a.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request timed out"))}),0)},a.onabort=function(){setTimeout((function(){o(new S("Aborted","AbortError"))}),0)},a.open(i.method,function(e){try{return""===e&&n.location.href?n.location.href:e}catch(t){return e}}(i.url),!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&(s?a.responseType="blob":u&&(a.responseType="arraybuffer")),t&&"object"==typeof t.headers&&!(t.headers instanceof p||n.Headers&&t.headers instanceof n.Headers)){var l=[];Object.getOwnPropertyNames(t.headers).forEach((function(e){l.push(f(e)),a.setRequestHeader(e,h(t.headers[e]))})),i.headers.forEach((function(e,t){-1===l.indexOf(t)&&a.setRequestHeader(t,e)}))}else i.headers.forEach((function(e,t){a.setRequestHeader(t,e)}));i.signal&&(i.signal.addEventListener("abort",c),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",c)}),a.send(void 0===i._bodyInit?null:i._bodyInit)}))}P.polyfill=!0,n.fetch||(n.fetch=P,n.Headers=p,n.Request=A,n.Response=E);var k=r(384);const x={async post(e,t){if(null===t)return;const r={method:"POST"};return r.body=JSON.stringify(t),r.headers={"Content-Type":"application/json"},await this.execute(e,r)},async execute(e,t){const r=this.getApiHost()+e;let n=await fetch(r,t);if(n.status<200||n.status>299){let e=(await n.json()).error||"An unknown error occurred";throw{status:n.status,message:e}}return await n.json()},getApiHost(){const e=self.localStorage,t=e.getItem(k.A.localStorageKeys.proxyApiEndpoint);return t?"https://"+t:e.getItem(k.A.localStorageKeys.apiEndpoint)||k.A.api.endpoint}},j={urlB64ToUint8Array(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),r=self.atob(t),n=new Uint8Array(r.length),o=r.length;for(let e=0;e<o;++e)n[e]=r.charCodeAt(e);return n}};function B(e,t){this.name="AggregateError",this.errors=e,this.message=t||""}B.prototype=Error.prototype;var O=setTimeout;function I(e){return Boolean(e&&void 0!==e.length)}function R(){}function U(e){if(!(this instanceof U))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],H(e,this)}function F(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,U._immediateFn((function(){var r=1===e._state?t.onFulfilled:t.onRejected;if(null!==r){var n;try{n=r(e._value)}catch(e){return void D(t.promise,e)}W(t.promise,n)}else(1===e._state?W:D)(t.promise,e._value)}))):e._deferreds.push(t)}function W(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var r=t.then;if(t instanceof U)return e._state=3,e._value=t,void C(e);if("function"==typeof r)return void H((n=r,o=t,function(){n.apply(o,arguments)}),e)}e._state=1,e._value=t,C(e)}catch(t){D(e,t)}var n,o}function D(e,t){e._state=2,e._value=t,C(e)}function C(e){2===e._state&&0===e._deferreds.length&&U._immediateFn((function(){e._handled||U._unhandledRejectionFn(e._value)}));for(var t=0,r=e._deferreds.length;t<r;t++)F(e,e._deferreds[t]);e._deferreds=null}function N(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function H(e,t){var r=!1;try{e((function(e){r||(r=!0,W(t,e))}),(function(e){r||(r=!0,D(t,e))}))}catch(e){if(r)return;r=!0,D(t,e)}}U.prototype.catch=function(e){return this.then(null,e)},U.prototype.then=function(e,t){var r=new this.constructor(R);return F(this,new N(e,t,r)),r},U.prototype.finally=function(e){var t=this.constructor;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){return t.reject(r)}))}))},U.all=function(e){return new U((function(t,r){if(!I(e))return r(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var o=n.length;function i(e,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,(function(t){i(e,t)}),r)}n[e]=s,0==--o&&t(n)}catch(e){r(e)}}for(var s=0;s<n.length;s++)i(s,n[s])}))},U.any=function(e){var t=this;return new t((function(r,n){if(!e||void 0===e.length)return n(new TypeError("Promise.any accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return n();for(var i=[],s=0;s<o.length;s++)try{t.resolve(o[s]).then(r).catch((function(e){i.push(e),i.length===o.length&&n(new B(i,"All promises were rejected"))}))}catch(e){n(e)}}))},U.allSettled=function(e){return new this((function(t,r){if(!e||void 0===e.length)return r(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var o=n.length;function i(e,r){if(r&&("object"==typeof r||"function"==typeof r)){var s=r.then;if("function"==typeof s)return void s.call(r,(function(t){i(e,t)}),(function(r){n[e]={status:"rejected",reason:r},0==--o&&t(n)}))}n[e]={status:"fulfilled",value:r},0==--o&&t(n)}for(var s=0;s<n.length;s++)i(s,n[s])}))},U.resolve=function(e){return e&&"object"==typeof e&&e.constructor===U?e:new U((function(t){t(e)}))},U.reject=function(e){return new U((function(t,r){r(e)}))},U.race=function(e){return new U((function(t,r){if(!I(e))return r(new TypeError("Promise.race accepts an array"));for(var n=0,o=e.length;n<o;n++)U.resolve(e[n]).then(t,r)}))},U._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){O(e,0)},U._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};const L=U;e=r.hmd(e);var K={registerWebPushes(){return new L((async(e,t)=>{if(!("PushManager"in self)||!("serviceWorker"in navigator)&&"undefined"==typeof ServiceWorkerRegistration)return/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1?t(new Error('For Web Push on iOS 16.4+, you will first need to click the "Share" button -> "Add to Home Screen" before you can sign up for push notifications.')):t(new Error("Web push is not supported"));const r=self.localStorage;if(!r)return t(new Error("Local storage is not supported"));let n;try{navigator.serviceWorker?n=await navigator.serviceWorker.register(`/${k.A.serviceWorker.fileName}`):self.registration&&(n=self.registration)}catch(e){return t(new Error(`Failed to load '${self.location.origin}/${k.A.serviceWorker.fileName}': ${e.message}`,e))}navigator.serviceWorker&&await navigator.serviceWorker.ready;let o=await n.pushManager.getSubscription();if(o)try{return await this.validateClientToken(),e(r.getItem(k.A.localStorageKeys.token))}catch(e){}else{const e=k.A.vapidDetails.publicKey;try{o=await n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:j.urlB64ToUint8Array(e)})}catch(e){return t(new Error(`Failed to subscribe the device: ${e.message}`,e))}}e(await this.register(o))}))},async setNotificationListener(e){if(!("PushManager"in self)||!("serviceWorker"in navigator)&&"undefined"==typeof ServiceWorkerRegistration)return console.error("Web push is not supported by this browser.");if(navigator.serviceWorker&&await navigator.serviceWorker.ready,!navigator.serviceWorker)throw new Error("Service Worker not found");navigator.serviceWorker.addEventListener("message",(function(t){!t.data&&t.detail&&(t.data=t.detail),t.data&&t.data._pushed&&e(t.data)}))},validateClientToken(){return new L((async(e,t)=>{this.attemptedValidation=!0;const r=self.localStorage;if(!r)return t(new Error("Local storage is not supported"));let n;try{navigator.serviceWorker?n=await navigator.serviceWorker.register(`/${k.A.serviceWorker.fileName}`):self.registration&&(n=self.registration)}catch(e){return t(new Error(`Failed to load '${self.location.origin}/${k.A.serviceWorker.fileName}': ${e.message}`,e))}const o=await n.pushManager.getSubscription(),i=r.getItem(k.A.localStorageKeys.token);if(!o&&!i)return t(new Error("Have not subscription"));if(!i)return e(await this.updateRegistration());const s=this.getSavedTokenTimestamp(),a=this.getCurrentUnixTime();if(s&&a-s<86400)return e(i);const u={clientToken:i,hostname:self.location.hostname};let c;try{c=await x.post(k.A.api.authEndpoint,u)}catch(e){return t(new Error(`The API request failed: ${e.message}`,e))}c.success||(i=await this.updateRegistration());const l=this.getCurrentUnixTime();return r.setItem(k.A.localStorageKeys.tokenTimestamp,l),e(i)}))},updateRegistration(){return new L((async(e,t)=>{let r;try{navigator.serviceWorker?r=await navigator.serviceWorker.register(`/${k.A.serviceWorker.fileName}`):self.registration&&(r=self.registration)}catch(e){return t(new Error(`Failed to load '${self.location.origin}/${k.A.serviceWorker.fileName}': ${e.message}`,e))}let n=await r.pushManager.getSubscription();n&&await n.unsubscribe();const o=k.A.vapidDetails.publicKey,i=await r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:j.urlB64ToUint8Array(o)});return e(await this.register(i))}))},register:e=>new L((async(t,r)=>{const n=localStorage.getItem(k.A.localStorageKeys.token),o=JSON.parse(JSON.stringify(e)),i=o.keys.auth,s=o.keys.p256dh,a=o.endpoint;if(!s||!i||!a)return r(new Error("The push subscription is missing a required field."));const u={sdkVersion:k.A.version,auth:i,webApiEndpoint:a,P256dhKey:s,hostname:self.location.hostname,clientToken:n};let c;try{c=await x.post(k.A.api.registerEndpoint,u)}catch(e){return r(new Error(`The API request failed: ${e.message}`,e))}if(!c.success||!c.model.clientToken)return r(new Error("An unexpected response was received from the Pushed API."));localStorage.setItem(k.A.localStorageKeys.token,c.model.clientToken),t(c.model.clientToken)})),setApiEndpoint(e){if(!e||"string"!=typeof e)return;const t=self.localStorage;if(!t)return reject(new Error("Local storage is not supported by this browser."));e!=t.getItem(k.A.localStorageKeys.apiEndpoint)&&(t.removeItem(k.A.localStorageKeys.token),t.setItem(k.A.localStorageKeys.apiEndpoint,e))},getSavedTokenTimestamp(){const e=localStorage.getItem(k.A.localStorageKeys.tokenTimestamp);return e?parseInt(e,10):null},getCurrentUnixTime:()=>Math.floor(Date.now()/1e3)};const M=K;try{e.exports=K}catch(e){}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n](i,i.exports,r),i.loaded=!0,i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n=r(191);Pushed=n})();