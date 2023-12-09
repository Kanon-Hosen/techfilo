"use strict";exports.id=1249,exports.ids=[1249],exports.modules={56808:(r,e,o)=>{var t=o(14300).Buffer,f=o(14300).SlowBuffer;function bufferEq(r,e){if(!t.isBuffer(r)||!t.isBuffer(e)||r.length!==e.length)return!1;for(var o=0,f=0;f<r.length;f++)o|=r[f]^e[f];return 0===o}r.exports=bufferEq,bufferEq.install=function(){t.prototype.equal=f.prototype.equal=function(r){return bufferEq(this,r)}};var n=t.prototype.equal,a=f.prototype.equal;bufferEq.restore=function(){t.prototype.equal=n,f.prototype.equal=a}},84568:(r,e,o)=>{var t=o(32978).Buffer,f=o(14972);function base64Url(r){return r.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function signatureAsBuffer(r){if(t.isBuffer(r))return r;if("string"==typeof r)return t.from(r,"base64");throw TypeError("ECDSA signature must be a Base64 string or a Buffer")}function derToJose(r,e){r=signatureAsBuffer(r);var o=f(e),n=o+1,a=r.length,u=0;if(48!==r[u++])throw Error('Could not find expected "seq"');var i=r[u++];if(129===i&&(i=r[u++]),a-u<i)throw Error('"seq" specified length of "'+i+'", only "'+(a-u)+'" remaining');if(2!==r[u++])throw Error('Could not find expected "int" for "r"');var s=r[u++];if(a-u-2<s)throw Error('"r" specified length of "'+s+'", only "'+(a-u-2)+'" available');if(n<s)throw Error('"r" specified length of "'+s+'", max of "'+n+'" is acceptable');var l=u;if(u+=s,2!==r[u++])throw Error('Could not find expected "int" for "s"');var p=r[u++];if(a-u!==p)throw Error('"s" specified length of "'+p+'", expected "'+(a-u)+'"');if(n<p)throw Error('"s" specified length of "'+p+'", max of "'+n+'" is acceptable');var c=u;if((u+=p)!==a)throw Error('Expected to consume entire buffer, but "'+(a-u)+'" bytes remain');var g=o-s,m=o-p,y=t.allocUnsafe(g+s+m+p);for(u=0;u<g;++u)y[u]=0;r.copy(y,u,l+Math.max(-g,0),l+s),u=o;for(var b=u;u<b+m;++u)y[u]=0;return r.copy(y,u,c+Math.max(-m,0),c+p),y=base64Url(y=y.toString("base64"))}function countPadding(r,e,o){for(var t=0;e+t<o&&0===r[e+t];)++t;return r[e+t]>=128&&--t,t}function joseToDer(r,e){r=signatureAsBuffer(r);var o=f(e),n=r.length;if(n!==2*o)throw TypeError('"'+e+'" signatures must be "'+2*o+'" bytes, saw "'+n+'"');var a=countPadding(r,0,o),u=countPadding(r,o,r.length),i=o-a,s=o-u,l=2+i+1+1+s,p=l<128,c=t.allocUnsafe((p?2:3)+l),g=0;return c[g++]=48,p?c[g++]=l:(c[g++]=129,c[g++]=255&l),c[g++]=2,c[g++]=i,a<0?(c[g++]=0,g+=r.copy(c,g,0,o)):g+=r.copy(c,g,a,o),c[g++]=2,c[g++]=s,u<0?(c[g++]=0,r.copy(c,g,o)):r.copy(c,g,o+u),c}r.exports={derToJose:derToJose,joseToDer:joseToDer}},14972:r=>{function getParamSize(r){return(r/8|0)+(r%8==0?0:1)}var e={ES256:getParamSize(256),ES384:getParamSize(384),ES512:getParamSize(521)};function getParamBytesForAlg(r){var o=e[r];if(o)return o;throw Error('Unknown algorithm "'+r+'"')}r.exports=getParamBytesForAlg},10884:(r,e,o)=>{r.exports=o(30517)},32978:(r,e,o)=>{/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var t=o(14300),f=t.Buffer;function copyProps(r,e){for(var o in r)e[o]=r[o]}function SafeBuffer(r,e,o){return f(r,e,o)}f.from&&f.alloc&&f.allocUnsafe&&f.allocUnsafeSlow?r.exports=t:(copyProps(t,e),e.Buffer=SafeBuffer),SafeBuffer.prototype=Object.create(f.prototype),copyProps(f,SafeBuffer),SafeBuffer.from=function(r,e,o){if("number"==typeof r)throw TypeError("Argument must not be a number");return f(r,e,o)},SafeBuffer.alloc=function(r,e,o){if("number"!=typeof r)throw TypeError("Argument must be a number");var t=f(r);return void 0!==e?"string"==typeof o?t.fill(e,o):t.fill(e):t.fill(0),t},SafeBuffer.allocUnsafe=function(r){if("number"!=typeof r)throw TypeError("Argument must be a number");return f(r)},SafeBuffer.allocUnsafeSlow=function(r){if("number"!=typeof r)throw TypeError("Argument must be a number");return t.SlowBuffer(r)}}};