"use strict";var r=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var t=r(function(d,u){
var m=require('@stdlib/assert-is-number/dist').isPrimitive,P=require('@stdlib/assert-is-infinite/dist').isPrimitive;function a(i){return m(i)&&i>0&&!P(i)}u.exports=a
});var s=r(function(y,v){
var b=require('@stdlib/assert-is-number/dist').isObject,O=require('@stdlib/assert-is-infinite/dist').isObject;function f(i){return b(i)&&i.valueOf()>0&&!O(i)}v.exports=f
});var o=r(function(R,c){
var j=t(),F=s();function p(i){return j(i)||F(i)}c.exports=p
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=o(),x=t(),I=s();q(n,"isPrimitive",x);q(n,"isObject",I);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
