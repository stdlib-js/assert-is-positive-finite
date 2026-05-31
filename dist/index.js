"use strict";var e=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var t=e(function(d,n){
var a=require('@stdlib/assert-is-number/dist').isPrimitive,P=require('@stdlib/constants-float64-pinf/dist');function m(i){return a(i)&&i>0&&i<P}n.exports=m
});var s=e(function(y,v){
var O=require('@stdlib/assert-is-number/dist').isObject,b=require('@stdlib/constants-float64-pinf/dist');function f(i){return O(i)&&i.valueOf()>0&&i.valueOf()<b}v.exports=f
});var o=e(function(R,c){
var F=t(),j=s();function p(i){return F(i)||j(i)}c.exports=p
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=o(),x=t(),N=s();q(u,"isPrimitive",x);q(u,"isObject",N);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
