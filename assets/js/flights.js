"use strict";var D2R=Math.PI/180;var R2D=180/Math.PI;var Coord=function(e,t){this.lon=e;this.lat=t;this.x=D2R*e;this.y=D2R*t};Coord.prototype.view=function(){return String(this.lon).slice(0,4)+","+String(this.lat).slice(0,4)};Coord.prototype.antipode=function(){var e=-1*this.lat;var t=this.lon<0?180+this.lon:(180-this.lon)*-1;return new Coord(t,e)};var LineString=function(){this.coords=[];this.length=0};LineString.prototype.move_to=function(e){this.length++;this.coords.push(e)};var Arc=function(e){this.properties=e||{};this.geometries=[]};Arc.prototype.json=function(){if(this.geometries.length<=0){return{geometry:{type:"LineString",coordinates:null},type:"Feature",properties:this.properties}}else if(this.geometries.length==1){return{geometry:{type:"LineString",coordinates:this.geometries[0].coords},type:"Feature",properties:this.properties}}else{var e=[];for(var t=0;t<this.geometries.length;t++){e.push(this.geometries[t].coords)}return{geometry:{type:"MultiLineString",coordinates:e},type:"Feature",properties:this.properties}}};Arc.prototype.wkt=function(){var e="";var t="LINESTRING(";var n=function(e){t+=e[0]+" "+e[1]+","};for(var r=0;r<this.geometries.length;r++){if(this.geometries[r].coords.length===0){return"LINESTRING(empty)"}else{var i=this.geometries[r].coords;i.forEach(n);e+=t.substring(0,t.length-1)+")"}}return e};var GreatCircle=function(e,t,n){if(!e||e.x===undefined||e.y===undefined){throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties")}if(!t||t.x===undefined||t.y===undefined){throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties")}this.start=new Coord(e.x,e.y);this.end=new Coord(t.x,t.y);this.properties=n||{};var r=this.start.x-this.end.x;var i=this.start.y-this.end.y;var s=Math.pow(Math.sin(i/2),2)+Math.cos(this.start.y)*Math.cos(this.end.y)*Math.pow(Math.sin(r/2),2);this.g=2*Math.asin(Math.sqrt(s));if(this.g==Math.PI){throw new Error("it appears "+e.view()+" and "+t.view()+" are 'antipodal', e.g diametrically opposite, thus there is no single route but rather infinite")}else if(isNaN(this.g)){throw new Error("could not calculate great circle between "+e+" and "+t)}};GreatCircle.prototype.interpolate=function(e){var t=Math.sin((1-e)*this.g)/Math.sin(this.g);var n=Math.sin(e*this.g)/Math.sin(this.g);var r=t*Math.cos(this.start.y)*Math.cos(this.start.x)+n*Math.cos(this.end.y)*Math.cos(this.end.x);var i=t*Math.cos(this.start.y)*Math.sin(this.start.x)+n*Math.cos(this.end.y)*Math.sin(this.end.x);var s=t*Math.sin(this.start.y)+n*Math.sin(this.end.y);var o=R2D*Math.atan2(s,Math.sqrt(Math.pow(r,2)+Math.pow(i,2)));var u=R2D*Math.atan2(i,r);return[u,o]};GreatCircle.prototype.Arc=function(e,t){var n=[];if(!e||e<=2){n.push([this.start.lon,this.start.lat]);n.push([this.end.lon,this.end.lat])}else{var r=1/(e-1);for(var i=0;i<e;++i){var s=r*i;var o=this.interpolate(s);n.push(o)}}var u=false;var a=0;var f=t&&t.offset?t.offset:10;var l=180-f;var c=-180+f;var h=360-f;for(var p=1;p<n.length;++p){var d=n[p-1][0];var v=n[p][0];var m=Math.abs(v-d);if(m>h&&(v>l&&d<c||d>l&&v<c)){u=true}else if(m>a){a=m}}var g=[];if(u&&a<f){var y=[];g.push(y);for(var b=0;b<n.length;++b){var w=parseFloat(n[b][0]);if(b>0&&Math.abs(w-n[b-1][0])>h){var E=parseFloat(n[b-1][0]);var S=parseFloat(n[b-1][1]);var x=parseFloat(n[b][0]);var T=parseFloat(n[b][1]);if(E>-180&&E<c&&x==180&&b+1<n.length&&n[b-1][0]>-180&&n[b-1][0]<c){y.push([-180,n[b][1]]);b++;y.push([n[b][0],n[b][1]]);continue}else if(E>l&&E<180&&x==-180&&b+1<n.length&&n[b-1][0]>l&&n[b-1][0]<180){y.push([180,n[b][1]]);b++;y.push([n[b][0],n[b][1]]);continue}if(E<c&&x>l){var N=E;E=x;x=N;var C=S;S=T;T=C}if(E>l&&x<c){x+=360}if(E<=180&&x>=180&&E<x){var k=(180-E)/(x-E);var L=k*T+(1-k)*S;y.push([n[b-1][0]>l?180:-180,L]);y=[];y.push([n[b-1][0]>l?-180:180,L]);g.push(y)}else{y=[];g.push(y)}y.push([w,n[b][1]])}else{y.push([n[b][0],n[b][1]])}}}else{var A=[];g.push(A);for(var O=0;O<n.length;++O){A.push([n[O][0],n[O][1]])}}var M=new Arc(this.properties);for(var _=0;_<g.length;++_){var D=new LineString;M.geometries.push(D);var P=g[_];for(var H=0;H<P.length;++H){D.move_to(P[H])}}return M};if(typeof window==="undefined"){module.exports.Coord=Coord;module.exports.Arc=Arc;module.exports.GreatCircle=GreatCircle}else{var arc={};arc.Coord=Coord;arc.Arc=Arc;arc.GreatCircle=GreatCircle}

var pairs = [[[43.449928,39.956589],[55.606186,49.278728]],[[55.34,52.06],[45.034689,39.170539]],[[55.012622,82.650656],[52.268028,104.388975]]]