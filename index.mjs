// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as s,isObject as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import{isPrimitive as t,isObject as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-infinite@v0.2.1-esm/index.mjs";function r(i){return s(i)&&i>0&&!t(i)}function m(i){return e(i)&&i.valueOf()>0&&!n(i)}function d(i){return r(i)||m(i)}i(d,"isPrimitive",r),i(d,"isObject",m);export{d as default,m as isObject,r as isPrimitive};
//# sourceMappingURL=index.mjs.map
