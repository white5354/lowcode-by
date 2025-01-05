(function(r,e){typeof exports=="object"&&typeof module<"u"?module.exports=e():typeof define=="function"&&define.amd?define(e):(r=typeof globalThis<"u"?globalThis:r||self,r.ByText=e())})(this,function(){"use strict";var r={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s;function x(){if(s)return e;s=1;var l=Symbol.for("react.transitional.element"),v=Symbol.for("react.fragment");function d(a,t,n){var u=null;if(n!==void 0&&(u=""+n),t.key!==void 0&&(u=""+t.key),"key"in t){n={};for(var i in t)i!=="key"&&(n[i]=t[i])}else n=t;return t=n.ref,{$$typeof:l,type:a,key:u,ref:t!==void 0?t:null,props:n}}return e.Fragment=v,e.jsx=d,e.jsxs=d,e}var o;function f(){return o||(o=1,r.exports=x()),r.exports}var p=f();function R(){return p.jsx("div",{children:"demo..."})}return R});
