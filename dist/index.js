"use strict";var e=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=e(function(y,n){
var P=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/constants-float64-pinf/dist');function O(i){return P(i)&&i>0&&i<m}n.exports=O
});var s=e(function(R,v){
var b=require('@stdlib/assert-is-number/dist').isObject,f=require('@stdlib/constants-float64-pinf/dist');function F(i){return b(i)&&i.valueOf()>0&&i.valueOf()<f}v.exports=F
});var o=e(function(g,c){
var j=t(),p=s();function x(i){return j(i)||p(i)}c.exports=x
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=o(),N=t(),I=s();q(u,"isPrimitive",N);q(u,"isObject",I);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
