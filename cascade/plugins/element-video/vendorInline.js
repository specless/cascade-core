
window.jsv_config = {
    doNotPatchCreateElement: true
};

/*    
 *    Copyright (c) 2015 Anton Bilan, Easy Bits Limited
 *    http://www.easy-bits.com
 *
 *    This is closed source commercial software:
 *    reverse-engineering, disassembly or modifications are not allowed
 *
 *    This software is distributed WITHOUT ANY WARRANTY;
 *    even the implied warranty of MERCHANTABILITY or FITNESS FOR 
 *    A PARTICULAR PURPOSE.
 *
 */
if(void 0===window)var window=self;if(void 0===window.document){var console={log:function(){for(var c=[],d=0;d<arguments.length;d++)c.push(arguments[d]);window.postMessage({t:"func",n:"log",args:c})}};window.jsv_is_ww=!0;var document={};window.navigator={appVersion:"",userAgent:""};document.URL="http://a.ca"}else window.jsv_is_ww=!1;
(function(c){function d(){}c.Bc=function(c){c.ra={};c.addEventListener=function(c,d){this.ra.hasOwnProperty(c)?this.ra[c].push(d):this.ra[c]=[d]};c.removeEventListener=function(c,d){if(this.ra.hasOwnProperty(c)){var h=this.ra[c].indexOf(d);-1!=h&&this.ra[c].splice(h,1)}};c.dispatchEvent=function(c,d){if(this.ra.hasOwnProperty(c)){var h={};h.detail=d;for(var y=this.ra[c],z=y.length,E=0;E<z;E++)y[E].apply(null,[h])}}};ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=function(c,d){var k=new Uint8Array(this);
void 0==d&&(d=k.length);for(var A=new ArrayBuffer(d-c),y=new Uint8Array(A),z=0;z<y.length;z++)y[z]=k[z+c];return A});d.prototype.save=function(c,d,k){var A=document.createElement("a");A.download=d;A.href="data:"+k+"/octet-stream;base64,"+c;document.body.appendChild(A);A.click()};d.prototype.ext=function(c,d){for(var k in d)"undefined"==typeof c[k]&&(c[k]=d[k]);return c};d.prototype.time=function(){return(new Date).getTime()};d.prototype.ff=function(){var d;if(c.XMLHttpRequest)d=new c.XMLHttpRequest;
else try{d=new XDomainRequest}catch(D){try{d=new ActiveXObject("Msxml2.XMLHTTP")}catch(k){d=new ActiveXObject("Microsoft.XMLHTTP")}}return d};d.prototype.pe=function(c,d){c.addEventListener?c.addEventListener("message",d,!1):c.attachEvent&&c.attachEvent("onmessage",d)};d.prototype.Ac=function(){return-1!=navigator.appVersion.indexOf("MSIE")||!!navigator.userAgent.match(/Trident.*rv 11\./)};d.prototype.Fb=function(c){return c.split("/")[2]};d.prototype.Zb=function(c){return/[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$/i.exec(this.Fb(c))[0]};
d.prototype.bind=function(c,d){return function(){return c.apply(d,arguments)}};d.prototype.Ve=function(){return"undefined"==typeof c.postMessage?!1:!0};c.easybits_Helper=function(){return new d}})(window);
(function(c){function d(){}function h(){}function D(){this.v=[];this.Tb=[];this.zb=[];q.Ve()&&q.pe(c,q.bind(this.He,this));if(q.Ac()){var f=document.createElement("script");f.type="text/vbscript";f.text='Function easy_arr(t)\neasy_arr= CStr(t)\nEnd Function\nFunction easy_arrl(t)\neasy_arrl= ""\nif LenB(t) mod 2 Then easy_arrl= Chr(AscB(RightB(t,1)))\nEnd Function';document.body.appendChild(f)}}function k(f){this.onError=f.onError;this.bpc=f.bpc;this.mode=f.mode;this.bType=f.bType;this.za=f.za;this.ud=
!0;this.xc=f.fb;this.fa=f.end;this.Je=f.Cb;this.Le=f.cb;this.wc=f.speed;this.P=this.Ob=this.vc=this.vd=this.uc=0;this.xb=this.vb=f.start;this.wb=[];this.B=J++}function A(){this.De=document.URL;this.tc=this.Qb=!1;this.rc=!0;this.sc;this.u;this.Ce=[]}function y(f){var d=this;z.addEventListener("error",function(f){var b;if((b=d.Se(f.detail.id))&&b.onError)b.onError(f)});H=J=0;q=c.easybits_Helper();"undefined"!=typeof f&&(F=q.ext(f,F));I=new h;b=new D;f=new A;f.tc=!0;f=b.v.push(f)-1;b.v[f].u=f;c.lf=function(f,
c){return b.Pd(f,c)}}var z={};c.Bc(z);z.c=function(f,b){void 0===b&&(b=null);this.dispatchEvent(f,b)};var E=[],F={bpc:8E4,minbpc:.25,maxbpc:1.25},B=[],J,H,q,I,b;y.prototype.Se=function(f){for(var b=0;b<B.length;b++)if(B[b].B==f)return B[b];return!1};y.prototype.Sb=function(f){return b.Sb(f)};y.prototype.cancel=function(f){for(var b=0;b<B.length;b++)if(B[b].B==f)return B[b].ud=!1,!0;return!1};y.prototype.load=function(f){if("function"!==typeof f.Cb)throw Error("Callback is not callable");if("undefined"!==
typeof f.cb&&"function"!==typeof f.cb)throw Error("Callback is not callable");f=q.ext(f,{onError:function(){},bpc:F.bpc,mode:"range",bType:"text",qb:!1,start:0,end:"",speed:!1,za:0});if(f.qb)for(var b=0;b<=f.fb.length;b++)E.push(f.fb[b]);f=new k(f);B.push(f);f.Ie();return f.B};c.easybits_getHTTPMultiStreaming=function(b){return new y(b)};k.prototype.td=function(b){if(b.R==this.xb)if(this.xb+=b.K-b.R+1,this.Je({data:b.qa,start:b.R,end:b.K,total:b.P,id:this.B,pf:b.ub,mf:this.za&&q.Zb(b.H)!=q.Zb(document.URL)}),
this.xb<this.fa)for(b=0;b<this.wb.length;b++){if(this.wb[b].R==this.xb){this.td(this.wb[b]);this.wb.slice(b,1);break}}else this.Le({id:b.B,totaltime:(q.time()-this.vc)/1E3,total:b.P});else this.wb.push(b)};k.prototype.yb=function(f){if(!(this.vb>=this.fa&&""!=this.fa)){var c=f.bpc;if(b.v[f.u].Qb){for(var d=0,v=0,k=0;k<b.v.length;k++)f.u!=k&&b.v[k].rc&&b.v[k].Qb&&(v++,d+=b.v[k].Qb);d&&(c=Math.round(f.bpc*b.v[f.u].Qb/(d/v)))}F.maxbpc*f.bpc<c&&(c=F.maxbpc*f.bpc);F.minbpc*f.bpc>c?b.v[f.u].rc=!1:(d=this.vb,
v=this.vb+c-1,v>this.fa&&""!=this.fa&&(v=this.fa,c=v-d+1),this.vb+=c,b.Sb({bpc:f.bpc,mode:f.mode,bType:f.bType,xd:q.time(),R:d,K:v,H:f.H,Rb:q.bind(this.Ke,this),u:f.u,B:this.B,ub:++H,za:this.za}))}};k.prototype.Ke=function(f){if(this.ud){this.P=f.P;if(this.fa>f.P||""==this.fa)this.fa=f.P-1;b.v[f.u].wd=b.v[f.u].wd?(b.v[f.u].wd+f.qa.length/(q.time()-f.xd))/2:f.qa.length/(q.time()-f.xd);this.td(f);if(!(f.K>=f.P))if(this.wc){this.Ob+=f.qa.length;var c=q.time()-this.vc;this.vd=1E3*this.Ob/c;if(this.vd>
this.wc){var d=this;setTimeout(function(){d.yb(f)},1E3*this.Ob/this.wc-c)}else this.yb(f)}else this.uc?(d=this,setTimeout(function(){d.yb(f)},1E3*this.uc),this.uc=0):this.yb(f)}else for(c=0;c<B.length;c++)if(B[c].B==this.B){B.splice(c,1);break}};k.prototype.Ie=function(){this.vc=q.time();for(var f=0;f<this.xc.length;f++){var c=b.Pb(this.xc[f]);if(c&&c.rc){var d={u:c.u,H:this.xc[f],B:this.B,bType:this.bType,mode:this.mode,bpc:this.bpc};c.tc?this.yb(d):b.v[c.u].Ce.push(d)}}};D.prototype.Sb=function(f){if("function"!==
typeof f.Rb)throw Error("Callback is not callable");if(-1!=E.indexOf(f.H)||q.Fb(f.H)==q.Fb(document.URL))I.sd(f);else if(q.Zb(f.H)==q.Zb(document.URL)){var c=b.Pb(f.H);document.getElementById(c.sc).contentWindow.kf.Sb(f)}else c=b.Pb(f.H),b.zb.push(f),document.getElementById(c.sc).contentWindow.postMessage({source:"httpmutlistreaming",data:(new d).Kd({yd:"easy_stream_getBytes",bType:f.bType,mode:f.mode,bpc:f.bpc,R:f.R,K:f.K,H:f.H,u:f.u,B:f.B,ub:f.ub,za:f.za})},"*")};D.prototype.Pb=function(b){-1!=
E.indexOf(b)&&(b=document.URL);b=q.Fb(b);for(var c=0;c<this.v.length;c++)if(q.Fb(this.v[c].De)==b)return this.v[c];return!1};D.prototype.Pd=function(b,c){var d=this.Pb(b);d.sc=c;d.tc=!0;for(d=this.Tb.length;d--;)if(this.Tb[d].H==b){var k=this.Tb[d];this.Tb.splice(d,1);k.gf(b,c,k.u)}};D.prototype.He=function(f){if(f.data.source&&"httpmutlistreaming"==!f.data.source){var c=parseInt(f.data.data.substring(0,7).replace(/^[0]+/g,"")),k=(new d).Ee(f.data.data.substring(7,c+7));switch(k.yd){case "easy_onGetBytes":for(var v=
this.zb.length;v--;)if(this.zb[v].ub==k.ub){k.qa=f.data.data.substring(7+c);f=this.zb[v];this.zb.splice(v,1);f.za||(k.qa=k.qa.replace(/abcdezzz/g,String.fromCharCode(0)));f.Rb(k);break}break;case "easy_stream_getBytes":k.Rb=q.bind(this.Ge,this);I.sd(k);break;case "onLL":b.Pd(k.url,k.id)}}};D.prototype.Ge=function(b){var k=new d,h={},v;for(v in b)"easy_data"!=v&&(h[v]=b[v]);h.yd="easy_onGetBytes";c.parent.postMessage({source:"httpmutlistreaming",data:k.Kd(h)+b.qa.replace(/\0/g,"abcdezzz")},"*")};h.prototype.ze=
function(b){function c(){4==d.readyState&&b.Me(d)}var d=q.ff();d.open("GET",b.url,!0);"text"==b.bType?q.Ac()||d.overrideMimeType("text/plain; charset=x-user-defined"):d.responseType="arraybuffer";"range"==b.mode&&d.setRequestHeader("Range","bytes="+b.R+"-"+b.K);"undefined"!=typeof d.onload?d.onload=c:d.onreadystatechange=c;d.send()};h.prototype.sd=function(b){var c=this,d=-1==b.H.indexOf("?")?b.H+"?bytes="+b.R+b.K:b.H+"&bytes="+b.R+b.K;this.ze({bpc:b.bpc,mode:b.mode,bType:b.bType,url:d,R:b.R,K:b.K,
Me:function(k){if(200>k.status||300<=k.status&&304!=k.status)return z.c("error",{id:b.B,message:"HTTP status code for "+d+" "+k.status}),!1;if(k.getResponseHeader("Content-Range"))b.P=k.getResponseHeader("Content-Range").split("/")[1];else if(b.K=b.P=k.getResponseHeader("Content-Length"),!b.P&&"range"==b.mode)return z.c("error",{id:b.B,message:"Could not stat object size "+d}),!1;b.K>b.P&&(b.K=b.P-1);if("text"==b.bType){k=q.Ac()?c.Ae(k.of):k.responseText;var h=k.length}else k=k.response,h=k.byteLength;
h&&(b.qa=b.hf?c.Be(k):k,b.Rb(b))}})};h.prototype.Ae=function(b){return easy_arr(b).replace(/[\s\S]/g,function(b){b=b.charCodeAt(0);return String.fromCharCode(b&255,b>>8)})+easy_arrl(b)};h.prototype.Be=function(b){b=b.replace(/\0/g,"abcdezzz");return"<![CDATA["+b+"]]\x3e"};d.prototype.Ee=function(b){var c={};b=b.split(";");for(var d=0;d<b.length;d++){var k=b[d].split("abcdefghzzz");c[k[0]]=k[1]}return c};d.prototype.Kd=function(b){var c="",d;for(d in b)c+=d+"abcdefghzzz"+b[d]+";";c=c.substring(0,c.length-
1);return this.Fe(c.length)+c};d.prototype.Fe=function(b){var c;c=7-b.toString().length;return 0<c?Array(c+(/\./.test(b)?2:1)).join("0")+b:b+""};c.jf=function(){return new d}})(window);
(function(c){function d(c){this.La=new Uint8Array(c);this.gb=this.length=this.La.length;this.index=0}c.ez_br=function(){return new d};d.prototype.Xe=function(c){var d=this.index>>3,h=8-this.index%8;if(h>=c)return this.La[d]>>h-c&255>>8-c;var y=(this.index+c)%8;c=this.index+c-1>>3;h=this.La[d]&255>>8-h;for(d++;d<c;d++)h<<=8,h|=this.La[d];0<y?h=h<<y|this.La[d]>>8-y:(h<<=8,h|=this.La[d]);return h};d.prototype.b=function(c){var d=this.Xe(c);this.index+=c;return d};d.prototype.advance=function(c){return this.index+=
c};d.prototype.Rd=function(c){return this.index-=c};var h;c.ez_p=function(c){for(easy_processedBytes=0;easy_processedBytes+188<=c.byteLength;){h=new d(c.slice(easy_processedBytes,easy_processedBytes+188));easy_processedBytes+=188;var k;a:{if(71!=h.b(8))throw Error("Packet sync byte not found");h.b(1);h.b(1);h.b(1);h.b(13);h.b(2);k=h.b(1);h.b(1);h.b(4);if(k&&(h.b(8),h.b(1),h.b(1),h.b(1),k=h.b(1),h.b(1),h.b(1),h.b(1),h.b(1),k)){k=h.b(32);var A=h.b(16);k=((k>>31&1)+(2*k+(A>>15&1)))/9E4+(A&511)/27E6;
break a}k=!1}if(k)return k}return!1}})(window);
(function(c){function d(){this.log="";this.f=this.o=!1;this.Jc=0;this.Hb=!1;this.xa=this.ad=this.Jb=null;this.Ne()}function h(a,e){return function(){return a.apply(e,arguments)}}function D(){F=function(){function a(a,e,l){this.qe=l;this.Kb=!1;this.pa=1;this.ma=this.kc=!1;this.ha=0;this.Dd=this.ha+2;this.url=a;this.Eb=0;this.Na=[];this.WebSocket=this.node=!1;this.ef=h(this.ef,this);this.h=!1;this.$a=this.frame=0;this.nc=Array(e);this.nd=e;this.Ec=h(this.Ec,this)}var e,l,b;if(e=c.AudioContext||c.webkitAudioContext){a.qf=
e&&("function"===typeof e.prototype[l="createScriptProcessor"]||"function"===typeof e.prototype[l="createJavaScriptNode"]);"function"===typeof e.prototype[b="createGainNode"]||"function"===typeof e.prototype[b="createGain"];a.prototype.connect=function(){if(!this.WebSocket&&c.jsv_AC){this.G=c.jsv_AC;this.ye=this.G.sampleRate;var a=this;this.G.createBufferSource();this.WebSocket=new WebSocket(this.url);this.WebSocket.onopen=function(){a.WebSocket.binaryType="arraybuffer";a.WebSocket.onmessage=function(e){a.G.decodeAudioData(e.data,
function(e){a.ha||(a.ha=Math.ceil(a.qe/(e.length/a.ye)),a.Dd=0<a.ha?a.ha:a.ha+1);a.Na.push(e);a.h&&!a.Eb&&a.Na.length>=a.ha?a.Od():a.Kb?(a.Kb=!1,a.play()):a.Eb&&a.Na.length>a.Dd&&a.Na.shift()},function(){})}}}};a.prototype.Ec=function(a){a=a.outputBuffer;var e,l,b,x=a.numberOfChannels,c=Array(x);for(l=b=0;b<x;l=b+=1)c[l]=a.getChannelData(l);if(!this.frame){this.frame=this.Na.shift();if(!this.frame){this.Kb=!0;this.pause();return}for(l=b=this.$a=0;b<x;l=b+=1)this.nc[l]=this.frame.getChannelData(l)}for(e=
0;this.frame&&e<a.length;){l=Math.min(this.frame.length-this.$a,a.length-e);for(b=0;b<l;b+=1){for(var d=0;d<x;d++)c[d][e]=this.nc[d][this.$a];e++;this.$a++}if(this.$a===this.frame.length){this.frame=this.Na.shift();if(!this.frame){this.Kb=!0;this.pause();break}for(l=b=this.$a=0;b<x;l=b+=1)this.nc[l]=this.frame.getChannelData(l)}}};a.prototype.Od=function(){this.Eb=!0;this.node=this.G[l](4096,this.nd,this.nd);this.node.onaudioprocess=this.Ec;this.ga=this.G[b]();this.ga.gain.value=this.pa;this.kc&&
(this.muted=this.kc);this.node.connect(this.ga);this.ga.connect(this.G.destination)};a.prototype.pause=function(){this.h&&(this.h=!1,this.G&&(this.G.suspend?this.G.suspend():this.ga.disconnect()))};a.prototype.play=function(){this.h||(this.h=!0,this.Eb&&(this.G.resume?this.G.resume():this.ga.connect(this.G.destination)),!this.Eb&&this.ha&&this.Na.length>=this.ha&&this.Od())};a.prototype.rd=function(){this.WebSocket&&this.WebSocket.close();return this.node?this.node.disconnect(0):!0};a.prototype.__defineSetter__("volume",
function(a){1<arguments.length&&(a=arguments[1]);this.pa=a;this.ga&&(this.ga.gain.value=this.pa)});a.prototype.__defineSetter__("muted",function(a){1<arguments.length&&(a=arguments[1]);this.ma=a;this.ga?this.ga.gain.value=this.ma?0:this.pa:this.kc=this.ma});a.prototype.__defineGetter__("currentTime",function(){return this.G?this.G.currentTime:0});e=["preload","playbackRate"];for(var d=0;d<e.length;d++)a.prototype.__defineSetter__(e[d],function(){});return a}}()}function k(a){B||(B=!0,document.addEventListener?
document.addEventListener("DOMContentLoaded",function l(){document.removeEventListener("DOMContentLoaded",l,!1);a()},!1):document.attachEvent&&(document.attachEvent("onreadystatechange",function l(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",l),a())}),document.documentElement.doScroll&&c==c.top&&function x(){if(!J){try{document.documentElement.doScroll("left")}catch(b){setTimeout(x,0);return}a()}}()))}function A(){var a=document.createElement;document.createElement=
function(e){return"video"==e?new c.video_jsv:a.call(document,e)};y()}function y(){var a=document.getElementsByTagName;document.getElementsByTagName=function(e){var l=a.call(document,e),l=[].slice.call(l),b=[];"video"==e&&(e=a.call(document,"jsv"),b=[].slice.call(e));return l.concat(b)}}function z(a,e){var l=new c.video_jsv;l.style.width=a.offsetWidth+"px";l.style.height=a.offsetHeight+"px";for(var b="data-audio preload loop autoplay poster id class".split(" "),d=0;d<b.length;d++)a.hasAttribute(b[d])&&
l.setAttribute(b[d],a.getAttribute(b[d]));l.setAttribute("src",e);a.parentNode.replaceChild(l,a)}function E(){J=!0;for(var a=document.getElementsByTagName("video"),e=0;e<a.length;e++)if("VIDEO"==a[e].tagName)if("src"in a[e]&&/\.jsv$/.test(a[e].src))z(a[e],a[e].src);else for(var l=a[e].getElementsByTagName("source"),b=0;b<l.length;b++)/\.jsv$/.test(l[b].src)&&z(a[e],l[b].src)}(function(){for(var a=0,e=["ms","moz","webkit","o"],l=0;l<e.length&&!c.requestAnimationFrame;++l)c.requestAnimationFrame=c[e[l]+
"RequestAnimationFrame"],c.cancelAnimationFrame=c[e[l]+"CancelAnimationFrame"]||c[e[l]+"CancelRequestAnimationFrame"];c.requestAnimationFrame||(c.requestAnimationFrame=function(e){var l=(new Date).getTime(),b=Math.max(0,16-(l-a)),d=c.setTimeout(function(){e(l+b)},b);a=l+b;return d});c.cancelAnimationFrame||(c.cancelAnimationFrame=function(a){clearTimeout(a)})})();var F;c.jsv_is_ww||D();var B=!1,J=!1,H=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),q=!0,I=[];c.jsv_is_ww||("undefined"!=typeof c.jsv_config&&
"undefined"!=typeof c.jsv_config.doNotPatchCreateElement&&c.jsv_config.doNotPatchCreateElement||A(),k(E));c.video_jsv=function(){function a(a,e,l){return function(){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c]);e.l.postMessage({t:l,n:a,args:b})}}var e=["play","pause","load","canPlayType"],l="loop preload src autoplay currentSrc currentTime defaultMuted defaultPlaybackRate playbackRate duration".split(" "),x="muted volume loop preload data-audio poster src autoplay buffered seeking controls currentSrc currentTime defaultMuted defaultPlaybackRate playbackRate duration ended networkState paused readyState seekable played error".split(" "),
d="muted volume loop preload data-audio poster src autoplay controls currentSrc currentTime defaultMuted defaultPlaybackRate playbackRate duration".split(" ");if(c.jsv_is_ww)var m={};else{m=document.createElement("jsv");m.style.display="block";c.Worker&&void 0!==c.jsv_config&&void 0!==c.jsv_config.worker&&(m.l=new Worker(c.jsv_config.worker),m.l.postMessage(""));var f=m.getAttribute;m.getAttribute=function(a){return-1!=x.indexOf(a)?b.prototype.__lookupGetter__(a).apply(this,arguments):f.apply(this,
arguments)};var C=m.setAttribute;m.setAttribute=function(a){if(m.l&&-1!=l.indexOf(a)){for(var e=[],c=0;c<arguments.length;c++)e.push(arguments[c]);return m.l.postMessage({t:"set",n:a,args:e})}return-1!=d.indexOf(a)?(C.apply(this,arguments),b.prototype.__lookupSetter__(a).apply(this,arguments)):C.apply(this,arguments)}}for(var g in b.prototype)-1!=x.indexOf(g)?-1!=d.indexOf(g)?m.l&&-1!=l.indexOf(g)?Object.defineProperty(m,g,{configurable:!0,get:b.prototype.__lookupGetter__(g),set:a(g,m,"set")}):Object.defineProperty(m,
g,{configurable:!0,get:b.prototype.__lookupGetter__(g),set:b.prototype.__lookupSetter__(g)}):Object.defineProperty(m,g,{configurable:!0,get:b.prototype.__lookupGetter__(g)}):m[g]=m.l&&-1!=e.indexOf(g)?a(g,m,"func"):b.prototype[g];m.l&&m.l.addEventListener("message",function(a){var e=a.data.args&&!Array.isArray(a.data.args)?Object.keys(a.data.args).map(function(e){return a.data.args[e]}):a.data.args;switch(a.data.t){case "event":m.c(a.data.n,e);break;case "func":"sidm"==a.data.n?m.pb.putImageData(e[0],
0,0):m[a.data.n].apply(m,e)}});m.Uc();return m};var b=c.nf=function(){this.Uc()};b.prototype.canPlayType=function(a){return-1!=a.indexOf("jsv")?"probably":""};b.prototype.fe=function(){this.buffer.advance(16);this.hc.width=this.buffer.b(16);this.hc.height=this.buffer.b(16);this.F=this.buffer.b(16)/100;this.F||(this.F=this.buffer.b(24)/100);this.O||(this.hb=this.F*this.chunkSize/this.Da,this.ac=Math.ceil(this.bufferSec/this.hb));!this.o&&this.Da>U&&(this.buffer.Hb=!0);if(452==this.buffer.b(32)){var a=
this.buffer.b(32),e=this.buffer.index>>3;this.Ea={count:a,buffer:new Uint8Array(this.buffer.a.data.buffer.slice(e,e+8*a))};this.buffer.advance(8*a<<3)}};b.prototype.__defineGetter__("error",function(){return this.dc});b.prototype.__defineGetter__("readyState",function(){return this.Ra});b.prototype.__defineGetter__("paused",function(){return!this.h});b.prototype.__defineGetter__("networkState",function(){return this.ic});b.prototype.__defineGetter__("ended",function(){return this.ib});b.prototype.__defineGetter__("preload",
function(){return this.Ha});b.prototype.__defineSetter__("preload",function(a){1<arguments.length&&(a=arguments[1]);this.Ha=this.audio.Ze=a});b.prototype.__defineGetter__("defaultPlaybackRate",function(){return this.cc});b.prototype.jc=function(a){a=parseFloat(a);if(0>a||1<a)a=1;return a};b.prototype.__defineSetter__("defaultPlaybackRate",function(a){1<arguments.length&&(a=arguments[1]);this.cc=this.jc(a)});b.prototype.__defineGetter__("playbackRate",function(){return this.Qa});b.prototype.__defineSetter__("playbackRate",
function(a){1<arguments.length&&(a=arguments[1]);this.Qa=this.jc(a);this.audio.playbackRate=this.Qa;this.c("ratechange")});b.prototype.__defineGetter__("defaultMuted",function(){return this.bc});b.prototype.__defineSetter__("defaultMuted",function(a){1<arguments.length&&(a=arguments[1]);this.bc=a});b.prototype.__defineGetter__("muted",function(){return this.ma});b.prototype.__defineSetter__("muted",function(a){1<arguments.length&&(a=arguments[1]);this.ma=a;this.audio.muted=this.ma});b.prototype.__defineGetter__("volume",
function(){return this.pa});b.prototype.__defineSetter__("volume",function(a){1<arguments.length&&(a=arguments[1]);this.pa=this.jc(a);this.audio.volume=this.pa;this.c("volumechange")});b.prototype.__defineGetter__("data-audio",function(){return this.Nc});b.prototype.__defineSetter__("data-audio",function(a){1<arguments.length&&(a=arguments[1]);this.Nc=a;if(-1!=a.indexOf("ws://")||-1!=a.indexOf("wss://")){if(!c.AudioContext&&!c.webkitAudioContext)return this.c("error",{message:"AudioContext is not supported"}),
!1;this.audio=void 0==c.jsv_au_de?new F(a,2,this.bufferMinSec+this.audioShiftSec):c.jsv_au_de(a)}else-1!=a.indexOf(".m3u8")?(this.Db=a,this.audio.Yb("")):this.audio.Yb(a),this.audio.Hd();this.D=""!=a?!0:!1;this.l&&this.l.postMessage({t:"func",n:"swaw",args:[a]})});b.prototype.__defineGetter__("poster",function(){return this.Y?this.Y.src:""});b.prototype.__defineSetter__("poster",function(a){1<arguments.length&&(a=arguments[1]);this.Y||(this.style.position="relative",this.Y=document.createElement("img"),
this.Y.setAttribute("style","z-index:2;position:absolute;top:0px;left:0px;bottom:0px;right:0px;width:100%;height:100%;"),this.appendChild(this.Y));this.Y.src=a});b.prototype.__defineGetter__("played",function(){var a=this.Mc(!0),e={};e.__defineGetter__("length",function(){return a.length});e.start=function(e){return a[e].start};e.end=function(e){return a[e].end};return e});b.prototype.__defineGetter__("seekable",function(){var a=this;return{length:1,start:function(){return 0},end:function(){return a.F}}});
b.prototype.__defineGetter__("buffered",function(){return this.buffer.Oe()});b.prototype.__defineGetter__("seeking",function(){return this.oa});b.prototype.__defineGetter__("controls",function(){return!1});b.prototype.__defineSetter__("controls",function(){return!1});b.prototype.__defineGetter__("duration",function(){return this.F});b.prototype.__defineSetter__("duration",function(){return!1});b.prototype.__defineGetter__("src",function(){return this.V});b.prototype.__defineSetter__("src",function(a){1<
arguments.length&&(a=arguments[1]);this.V=a;this.ke()});b.prototype.__defineGetter__("currentSrc",function(){return this.V});b.prototype.__defineSetter__("currentSrc",function(){throw Error("Setting currentSrc is not allowed !");});b.prototype.__defineGetter__("currentTime",function(){return this.X/1E3});b.prototype.Mc=function(a){return a?JSON.parse(JSON.stringify(this.cd)):this.cd};b.prototype.c=function(a,e){void 0===e&&(e=null);if(c.jsv_is_ww)c.postMessage({t:"event",n:a,args:e});else{var l=document.createEvent("CustomEvent");
l.initCustomEvent(a,!1,!1,e);this.dispatchEvent(l)}};b.prototype.je=function(a){if(this.Ea){try{this.sa(G)}catch(l){this.w(l);return}this.Ua();this.sa(L);this.Nb()}else{a*=1E3;this.sa(G);this.Ua();this.sa(L);this.Nb();try{for(;a-this.X>V;)this.sa(G),this.Ua(),this.sa(L),this.Nb()}catch(l){this.w(l);return}}if(this.D)if(this.jb){this.jb=!1;var e=this;this.audio.addEventListener("progress",function x(){e.audio.removeEventListener("progress",x);e.h||e.audio.pause();e.fd()});this.audio.play()}else this.fd();
else this.$c()};b.prototype.fd=function(){var a=this;this.audio.addEventListener("seeked",function l(){a.audio.removeEventListener("seeked",l);a.h&&a.audio.play();a.$c()});this.audio.qd(this.currentTime-this.Gb)};b.prototype.ec=function(a){var e=this.Ea.buffer;a=8*a+4;return 60*(60*((e[a]&124)>>2)+(((e[a]&3)<<4)+((e[a+1]&240)>>4)))+(((e[a+1]&7)<<3)+((e[a+2]&224)>>5))+(((e[a+2]&31)<<1)+((e[a+3]&128)>>7)+1)/this.eb};b.prototype.Zd=function(a){var e=Math.floor(this.Ea.count*a/this.F),l=this.ec(e);if(l>
a)for(;l>a&&0<e;)e--,l=this.ec(e);else if(l<a){for(;l<=a&&e<this.Ea.count;)e++,l=this.ec(e);l>a&&e--}e*=8;a=this.Ea.buffer;return(a[e]<<24)+(a[e+1]<<16)+(a[e+2]<<8)+a[e+3]};b.prototype.$c=function(){this.oa=!1;this.Pa&&(this.wa(),this.h&&this.c("playing"));this.mc=NaN;this.c("seeked");this.h&&(this.c("canplay"),this.c("playing"),this.c("canplaythrough"));this.c("timeupdate")};b.prototype.__defineSetter__("currentTime",function(a,e){if(this.o||this.D&&H)return!1;if(a>this.F)return this.na("Time out of range");
c.cancelAnimationFrame(this.Ia);c.clearTimeout(this.Sa);if(void 0===e){var l=this.h;l&&this.c("pause");this.c("seeking");l&&this.c("play")}this.Mc(!1);this.Ja=this.Z=this.ib=!1;this.oa=!0;this.mc=a;if(!this.hc.width)return this.Lb("v"),this.w(void 0,void 0,!1),!0;l=this.Ea?this.Zd(a):Math.round(this.Da*a/this.F);try{this.buffer.seek(l)&&this.je(a)}catch(b){this.w(b)}});b.prototype.__defineGetter__("loop",function(){return this.Zc});b.prototype.__defineSetter__("loop",function(a){this.Zc=a});b.prototype.__defineGetter__("autoplay",
function(){return this.Oc});b.prototype.__defineSetter__("autoplay",function(a){this.Oc=a});b.prototype.he=function(a){return this.audio.kd-this.audio.currentTime>=a?!0:!1};b.prototype.ge=function(a){for(var e=this.audio.currentTime,l=0;l<this.audio.buffered.length;l++)if(this.audio.buffered.end(l)>e&&this.audio.buffered.start(l)<=e){if(this.audio.buffered.end(l)-e>=a)return!0;break}return!1};b.prototype.ie=function(){if(!this.Ja){this.Lb("a");var a=this,e=function(){a.gc(a.bufferMinSec)&&(a.audio.removeEventListener("progress",
e),a.Ib("a"))};this.audio.addEventListener("progress",e,!1)}};b.prototype.Vd=function(){if(q){q=!1;var a=c.AudioContext||c.webkitAudioContext;if(a){var a=new a,e=a.createBuffer(1,1,22050),l=a.createBufferSource();l.buffer=e;l.connect(a.destination);l["function"==typeof l.noteOn?"noteOn":"start"](0);c.jsv_AC=a}}};b.prototype.df=function(){var a=this;document.documentElement.addEventListener("touchend",function l(){H=!1;document.documentElement.removeEventListener("touchend",l);a.audio.play();a.audio.pause();
a.Vd();for(var b=0;b<I.length;b++)I[b]()},!1)};b.prototype.Ib=function(a,e){this.c("unstalled");if("v"==a){var l=this.I?this.bufferMinSec+1:this.ee();if(this.oa||l>=this.bufferMinSec||e==this.Da)this.Z=!1,this.Ja||(this.Ra=4,(this.h=this.Ka)&&this.D&&(this.I||this.audio.play())),this.oa?this.__lookupSetter__("currentTime").apply(this,[this.mc,!0]):this.Ka&&(this.I||(this.nb=!0),this.wa(),this.h&&this.c("playing"))}else if(this.Ja=!1,!this.Z){var b=this;this.audio.addEventListener("play",function m(){b.audio.removeEventListener("play",
m);b.Ra=4;b.h=b.Ka;b.wa();b.h&&b.c("playing")});this.audio.play()}};b.prototype.Lb=function(a){this.Z||this.Ja||(this.Ka=this.h,this.h=!1,this.c("stalled"),this.Ra=1,this.I||this.audio.pause());"v"==a?this.Z||(c.cancelAnimationFrame(this.Ia),c.clearInterval(this.Sa),this.Z=!0,this.I&&(this.Mb=0)):this.Ja=!0};b.prototype.log=function(){console.log.apply(console,arguments)};b.prototype.xa=function(a){this.Lb("v");if(!this.I)throw a;};b.prototype.bind=function(a,e){return function(){return a.apply(e,
arguments)}};b.prototype.bd=function(){this.dd=[];this.Fc=!1;this.WebSocket&&(this.WebSocket.close(),this.WebSocket=!1);c.clearInterval(this.Sa);c.clearInterval(this.Xc);c.cancelAnimationFrame(this.Ia);this.ed=0;this.nb=!1;this.gd=!0;this.ob=this.Mb=0;this.dc={code:0,message:""};this.Ga={start:-2,end:-1,W:""};this.Ea=!1;this.Tc=0;this.fc=!1;this.Gb=this.hb=0;this.f=[];this.kb=!1;this.o=-1;this.I=this.O=!1;this.ac=v;this.jb=!0;this.cd=[];this.ic=this.Ra=0;this.ib=!1;this.L=this.C=NaN;this.Fa=this.Z=
this.Ja=this.h=this.Ka=!1;this.mc=this.lc=NaN;this.oa=!1;this.hc={};this.Ca=!1;this.Da=NaN;this.Ba=0;this.F=this.Pc=NaN;this.buffer=new d;this.buffer.xa=this.bind(this.xa,this);this.buffer.ad=this.bind(this.w,this);this.buffer.Jb=this.bind(this.Jb,this);this.X=0};b.prototype.ke=function(){this.bd();var a=this.V.split(".").pop();if("jsv"==a)this.o=this.buffer.o=!1,this.W=this.V;else if("m3u8"==a)this.O=!0,this.W=NaN;else if(0==this.V.indexOf("ws://")||0==this.V.indexOf("wss://")){if(this.I=!0,this.o=
this.buffer.o=!0,this.buffer.Hb=!0,!c.WebSocket){this.na("WebSockets are not supported");return}}else{this.na("Unsupported src");return}this.Qa=this.cc;this.muted=this.bc;this.audio.playbackRate=this.Qa;this.audio.muted=this.ma;this.O?this.Sc():this.I||("auto"==this.Ha?this.w(0):"metadata"==this.Ha&&this.Gd(0,this.chunkSize,!1));this.c("srcchange")};b.prototype.Yd=function(){for(var a=this.buffer.a,e=0,l=0,b=!1;a;){e++;0==a.data[0]&&0==a.data[1]&&1==a.data[2]&&a.data[3]==G&&(b=a.start,this.ed==b&&
(b=!1));b&&l++;if(l>this.ob&&3<e-l&&1<e){this.ed=b;this.nb=!0;break}a=a.next}};b.prototype.ne=function(){var a=this,e=new ArrayBuffer(0),b=0;this.WebSocket=new WebSocket(this.V);this.WebSocket.onopen=function(){a.WebSocket.binaryType="arraybuffer";a.WebSocket.onmessage=function(c){if(a.gd){var d=new Uint8Array(c.data);if(0!=d[0]||0!=d[1]||1!=d[2]||d[3]!=G)return;a.gd=!1}a.Mb++;e=c.data;c=b+e.byteLength-1;a.Ba+=e.byteLength;a.kb=!0;a.buffer.jd({data:e,total:e.byteLength,start:b,i:b,end:c,j:c});b=c+
1;if(!(a.Mb<a.ob)){a.skipHard&&a.Yd();if(a.Z)try{a.Ib("v",-1)}catch(m){return!1}if(!a.Ca){if(!a.ob)try{a.sa(G),a.zd=a.buffer.index,a.Ua()}catch(m){return a.buffer.index=a.buffer.g=0,!1}if(a.Mb<a.ob)return;a.Pa&&(a.wa(),a.h&&a.c("playing"));a.c("durationchange");a.c("resize");a.c("loadedmetadata");a.c("loadeddata")}a.c("progress");a.Ca||(a.Ca=!0,a.c("canplay"),a.c("canplaythrough"),a.play());a.Ra=4}}}};b.prototype.Jb=function(a){this.Ba-=a.data.byteLength;if(this.O&&(this.Rc(a.start).loaded=!1,this.o))for(;this.f[0].start<=
a.start;)this.f.splice(0,1)};b.prototype.ce=function(){for(var a=this.audio.currentTime+this.Gb,e=0;e<this.f.length;e++)if(this.f[e].i>=a)return this.f[e].start;return 0};b.prototype.$d=function(a){var e="",b=this;this.lb.load({start:0,end:1E3,bType:"arraybuffer",qb:!0,fb:[a],onError:function(a){b.na(a.detail.message)},Cb:function(a){e=a.data},cb:function(){var a=c.ez_p(e);b.Gb=a-.7;b.w(b.ce());b.kb=!0;b.play()}})};b.prototype.de=function(){var a,e=this;this.lb.load({mode:"whole",bType:"text",qb:!0,
fb:[this.audio.src],onError:function(a){e.na(a.detail.message)},Cb:function(e){a=e.data},cb:function(){e.le(a)}})};b.prototype.le=function(a){a=a.match(/.*\.ts/g)[0];if(0!=a.indexOf("http")){var e=this.audio.src.split("/");e.pop();e=e.join("/")+"/";a=e+a}this.$d(a)};b.prototype.me=function(a){a=a.split(/\n/g);a.pop();var e=0,b=this.V.split("/");b.pop();for(var b=b.join("/")+"/",c=this.f.length?this.f[this.f.length-1].end+1:0,d=[],m=0;m<a.length;m++){var f=a[m].split(","),C=parseFloat(f[3]),g=0!=f[0].indexOf("http")?
b+f[0]:f[0];d.push(g);-1==this.dd.indexOf(g)&&(e++,this.f.push({loaded:!1,start:c,end:c+C-1,byteLength:C,url:g,i:parseFloat(f[1]),j:parseFloat(f[2])}),c+=C)}this.dd=d;this.Tc=a.length;this.c("vls");-1==this.o&&(this.hb=this.f[0].j-this.f[0].i,this.ac=Math.ceil(this.bufferSec/this.hb),this.buffer.f=this.f,1<this.f[0].i?(this.o=this.buffer.o=!0,this.buffer.Hb=!0,this.Xc=setInterval(this.Sc.bind(this),1E3*this.hb)):(this.o=this.buffer.o=!1,"auto"==this.Ha?this.w(0):"metadata"==this.Ha&&this.w(0,!0,!1)));
e&&this.kb&&this.w(void 0,!0)};b.prototype.Sc=function(){var a,e=this;this.lb.load({mode:"whole",bType:"text",qb:!0,fb:[this.V],onError:function(a){e.na(a.detail.message)},Cb:function(e){a=e.data},cb:function(){e.me(a)}})};b.prototype.be=function(a){for(var e=this.f.length-1;0<=e;e--)if(this.f[e].url==a)return this.f[e];return!1};b.prototype.Rc=function(a){for(var e=0;e<this.f.length;e++)if(this.f[e].start==a)return this.f[e];return!1};b.prototype.Qc=function(){clearTimeout(this.Vc)};b.prototype.Xd=
function(){if(!this.I){var a=this,e=function(){a.Wc=Date.now();a.Vc=setTimeout(e,50)};e();var b=function(){a.h&&700<Date.now()-a.Wc&&a.pause(!0)};this.audio.removeEventListener("timeupdate",b);this.audio.addEventListener("timeupdate",b,!1)}};b.prototype.destroy=function(){this.reset();delete this.audio;this.parentNode.removeChild(this);this.l&&this.l.terminate()};b.prototype.reset=function(){this.D&&(this.audio.rd?this.audio.rd():this.audio.load&&(this.audio.src="",this.audio.load()));this.W=this.V=
NaN;this.Nc="";this.Vc=this.Wc=this.Db=this.D=!1;this.Qa=this.cc=this.pa=1;this.ma=this.bc=!1;this.Ha="auto";this.Zc=this.Oc=this.Y=!1;this.bd();this.l&&this.l.postMessage({t:"func",n:"reset",args:[]})};b.prototype.na=function(a){this.c("error",{message:a});this.dc.message=a;return!1};b.prototype.Uc=function(){var a=this;this.Pa=!0;this.WebSocket=this.Ia=this.Sa=this.Xc=!1;this.reset();H?this.df():this.Vd();var e={audioShiftSec:f,nogl:!1,skipHard:!1,bufferSec:S,chunkSize:T,bufferMinSec:R},b=c.easybits_Helper();
"undefined"!=typeof c.jsv_config&&(e=b.ext(c.jsv_config,e));for(var x in e)e.hasOwnProperty(x)&&(this[x]=e[x]);if(this.bufferMinSec>=this.bufferSec)this.na("bufferMinSec must be smaller bufferSec");else{this.lb=c.easybits_getHTTPMultiStreaming({bpc:this.chunkSize});this.Ud;this.ld=new Uint8Array(64);this.md=new Uint8Array(64);this.A=new Int32Array(64);if(c.jsv_is_ww){this.gc=this.he;this.audio=function(){this.src="";this.kd=this.currentTime=0};c.Bc(this);c.Bc(this.audio);b=function(a,e){return function(){for(var b=
[],l=0;l<arguments.length;l++)b.push(arguments[l]);c.postMessage({t:"func",n:a,args:[e,b]})}};x=["play","pause","connect"];for(var d=["playbackRate","muted","volume","preload"],e=0;e<x.length;e++)this.audio[x[e]]=b("afun",x[e]);this.audio.qd=b("aset","currentTime");this.audio.Yb=b("aset","src");this.audio.Hd=b("afun","load");for(e=0;e<d.length;e++)Object.defineProperty(this.audio,d[e],{set:b("aset",d[e])})}else if(this.canvas=document.createElement("canvas"),this.canvas.style.width="100%",this.canvas.style.height=
"100%",this.appendChild(this.canvas),this.audio=document.createElement("audio"),this.audio.qd=function(e){a.audio.currentTime=e},this.audio.Yb=function(e){a.audio.src=e},this.audio.Hd=function(){a.audio.load()},this.gc=this.ge,this.l){for(x in e)e.hasOwnProperty(x)&&this.l.postMessage({t:"eq",n:x,args:[e[x]]});b=["progress","seeked","play","timeupdate"];x=function(e){return function(){a.l.postMessage({t:"func",n:"ae",args:[e]})}};for(e=0;e<b.length;e++)this.audio.addEventListener(b[e],x(b[e]));this.audio.addEventListener("timeupdate",
function(){a.audio.buffered.length&&a.l.postMessage({t:"func",n:"aet",args:[a.audio.currentTime,a.audio.buffered.end(a.audio.buffered.length-1)]})})}c.jsv_is_ww||(!this.nogl&&this.Ue()?this.Xb=this.Qd:(this.pb=this.canvas.getContext("2d"),this.Xb=this.af),this.l&&this.l.postMessage({t:"func",n:"srfw",args:[this.T?"gl":"2d"]}),this.addEventListener("play",function(){a.Y&&"none"!=a.Y.style.display&&(a.Y.style.display="none")}));this.audio.Ze=this.Ha}};b.prototype.Gd=function(a,e,b){"undefined"==typeof b&&
(b=!0);if(this.O)c=a,d=e,a=0,e="";else{"undefined"==typeof a?(a=0,e=""):a%this.chunkSize&&(a=Math.floor(a/this.chunkSize)*this.chunkSize);e=Math.ceil(e/this.chunkSize)*this.chunkSize-1;var c=a,d=e}if(!this.Fa||this.Ga.start!=c||this.W!=this.Ga.W){this.Fa&&(this.lb.cancel(this.lc),this.c("suspend"));this.ic=2;this.Fa=!0;this.Ga={start:c,end:d,W:this.W};var f=this,k=this.W;a={mode:this.O?"whole":"range",bType:"arraybuffer",start:a,end:e,qb:!0,fb:[this.W],onError:function(a){f.na(a.detail.message)},
Cb:function(a){a.url=k;f.Ye(a)},cb:function(a){if(a.id!=f.lc)return!1;f.ic=1;f.Fa=!1;b&&f.w(f.Ga.end+1)}};this.Ca||this.c("loadstart");this.lc=this.lb.load(a)}};b.prototype.Qe=function(a){a=this.Rc(a);if(!a)return!1;var e=this.buffer.a?this.buffer.a.j:0;return a&&(this.o||this.oa||a.i-e<=this.bufferSec)?(this.W=a.url,{start:a.start,end:a.end}):!1};b.prototype.w=function(a,e,b){if(this.I)return!1;void 0==b&&(b=!0);if("undefined"!=typeof e&&this.Fa)return!1;this.O?("undefined"==typeof a&&(a=this.Ga.end+
1),a=this.Qe(a)):("undefined"==typeof a&&(a=Math.floor(this.buffer.index>>3)),a=this.buffer.Pe(a,this.chunkSize,this.ac,this.oa));a&&this.Gd(a.start,a.end,b)};b.prototype.ee=function(){if(!this.buffer.m)return 0;var a=this.buffer.a,e=0,b=0;if(this.buffer.m.start!=a.start||a.next)for(;a.next&&a.end+1==a.next.start;)this.O?b+=a.j-a.i:e+=a.data.byteLength,a=a.next;else this.O?b=this.buffer.m.j-this.buffer.m.i:e=a.data.byteLength;!this.O&&e&&(b=this.F*e/this.Da);return b};b.prototype.Ye=function(a){var e=
a.data.byteLength;this.Ga.start+=e;this.Ba+=e;this.O?(e=this.be(a.url),e.loaded=!0,a.start=e.start,a.end=e.end,a.i=e.i,a.j=e.j):(this.Da=a.total,a.i=this.F*a.start/a.total,a.j=this.F*a.end/a.total);this.buffer.jd(a);this.Da==this.Ba&&(this.buffer.Yc=!0,this.c("loaded"));if(this.Ca)this.Z&&this.Ib("v",a.end+1);else{this.fe();this.Z&&this.Ib("v",a.end+1);this.buffer.s.i=this.F*a.start/a.total;this.buffer.s.j=this.F*a.end/a.total;this.c("durationchange");this.c("resize");this.c("loadedmetadata");this.c("loadeddata");
try{this.sa(G),this.zd=this.buffer.index,this.Ua(),this.Pa&&(this.wa(),this.h&&this.c("playing"))}catch(b){this.w(b,!0);return}this.autoplay&&this.play()}this.c("suspend");this.c("progress");this.Ca||(this.Ca=!0,this.c("canplay"),this.c("canplaythrough"));this.Ra=4};b.prototype.swaw=function(a){this.D=""!=a?!0:!1;this.audio.src=a;-1!=a.indexOf(".m3u8")&&(this.Db=a)};b.prototype.aset=function(a,e){this.audio[a]=e[0]};b.prototype.aet=function(a,e){this.audio.currentTime=a;this.audio.kd=e};b.prototype.ae=
function(a){this.audio.dispatchEvent(a,null)};b.prototype.afun=function(a,e){this.audio[a].apply(this.audio,e)};b.prototype.load=function(){this.c("abort");this.c("emptied");this.Fa||this.w()};b.prototype.play=function(){if(""!=this.dc.message||this.D&&H)return!1;if(!this.h){if(this.Z||this.Ja)return!1;if(this.jb){this.jb=!1;if(this.o&&this.O&&!this.D){if(!this.f.length){var a=this;this.addEventListener("vls",function l(){a.removeEventListener("vls",l);a.play()});this.jb=!0;return!1}this.w(this.f[this.f.length-
this.Tc].start);this.kb=!0}if(this.D)if(this.I)this.audio.connect();else{a=this;this.Db&&this.audio.Yb(this.Db);this.Db=!1;this.audio.addEventListener("play",function l(){a.audio.removeEventListener("play",l);a.audio.pause();a.o&&a.de();a.play()});this.audio.play();return}if(this.I){this.ne();return}}else if(this.o&&!this.kb)return;!this.D||c.jsv_is_ww||this.l||this.Xd();this.h=this.Ka=!0;this.c("play");this.Fa||this.w();this.ya=Date.now();this.D&&this.audio.play();if(this.ib)return this.ib=!1,this.currentTime=
0,!0;if(!this.buffer.a)return this.Lb("v"),!1;this.Sd()}};b.prototype.pause=function(){if(!this.h)return!1;c.cancelAnimationFrame(this.Ia);c.clearInterval(this.Sa);this.h=this.Ka=!1;this.D&&this.audio.pause();!this.D||c.jsv_is_ww||this.l||this.Qc();this.c("pause")};b.prototype.aa=function(a){var e=0;do e=a[e+this.buffer.b(1)];while(0<=e&&0!=a[e]);return a[e+2]};b.prototype.sa=function(a){for(var e=0;e=this.buffer.Vb(),e!=a&&e!=d.$b&&e!=d.Aa;);};b.prototype.Ub=function(a,e){for(var b=0,c=a.length;b<
c;b++)a[b]=e};b.prototype.eb=30;b.prototype.Dc=30;b.prototype.Fd=0;b.prototype.zd=0;b.prototype.ya=0;b.prototype.wa=function(){try{if(c.cancelAnimationFrame(this.Ia),c.clearTimeout(this.Sa),this.buffer)for(;;){var a=this.buffer.Vb();if(a==G)this.nb&&(this.ya=Date.now()+1E3/this.Dc,this.nb=!1),this.Ua();else if(!this.nb)if(a==L)this.Nb();else{if(a==W)return this.h&&!this.oa&&this.Sd(),this.we(),this.canvas;if(a==d.$b)return this.h=!1,this.ib=!0,!this.D||c.jsv_is_ww||this.l||this.Qc(),this.c("pause"),
this.c("ended"),this.loop&&this.Fc&&this.play(),null;if(a==d.Aa)break}}}catch(e){this.w(e)}};b.prototype.Sd=function(){this.Fd=Date.now()-this.ya;var a=Math.max(0,1E3/this.eb-this.Fd);this.ya=Date.now()+a;this.X+=1E3/this.eb;if(this.D&&!this.I){var e=this.X-1E3*(this.audio.currentTime+this.Gb);if(300>e)if(-100<e)a-=100,this.ya-=100;else{if(this.fc){this.audio.pause();var b=this;c.clearTimeout(this.Ud);this.Ud=setTimeout(function(){b.h&&b.audio.play()},400-e)}}else 500<e&&this.fc&&(this.o||this.gc(.2)||
this.ie(),a+=100,this.ya+=100)}18>a?this.Ia=c.requestAnimationFrame(this.bind(this.wa,this),this.canvas):(b=this,this.Sa=c.setTimeout(function(){b.Ia=c.requestAnimationFrame(b.bind(b.wa,b),b.canvas)},a))};b.prototype.Nb=function(){this.fc=!0;this.buffer.advance(1);var a=this.buffer.b(5),e=this.buffer.b(6);this.buffer.advance(1);var b=this.buffer.b(6),c=this.buffer.b(6);this.X=1E3*(60*(60*a+e)+b+(c+1)/this.eb)};b.prototype.Ua=function(){this.C=this.buffer.b(12);this.L=this.buffer.b(12);this.buffer.advance(4);
this.eb=X[this.buffer.b(4)];this.Dc=this.eb*this.Qa;this.ob=Math.ceil(this.Dc*this.bufferMinSec);if(this.Pc)a=30;else{this.Pc=this.buffer.b(18);var a=12}this.buffer.advance(a);this.Te();if(this.buffer.b(1)){for(a=0;64>a;a++)this.ld[N[a]]=this.buffer.b(8);this.Ed=this.ld}if(this.buffer.b(1)){for(a=0;64>a;a++)this.md[N[a]]=this.buffer.b(8);this.Nd=this.md}};b.prototype.Te=function(){this.Ed=Y;this.Nd=Z;this.va=this.C+15>>4;this.Jd=this.L+15>>4;this.We=this.va*this.Jd;this.J=this.va<<4;this.re=this.Jd<<
4;this.Ta=this.J*this.re;this.ab=this.va<<3;if(!this.Fc){this.Fc=!0;c.jsv_is_ww&&c.postMessage({t:"func",n:"swhm",args:[this.C,this.L,this.J,this.ab]});var a=c.Uint8ClampedArray||c.Uint8Array;c.Uint8ClampedArray||(this.od=this.se,this.hd=this.oe);this.ea=new a(this.Ta);this.qc=new Uint32Array(this.ea.buffer);this.ca=new a(this.Ta>>2);this.pc=new Uint32Array(this.ca.buffer);this.ba=new a(this.Ta>>2);this.oc=new Uint32Array(this.ba.buffer);this.Za=new a(this.Ta);this.Cd=new Uint32Array(this.Za.buffer);
this.Xa=new a(this.Ta>>2);this.Bd=new Uint32Array(this.Xa.buffer);this.Wa=new a(this.Ta>>2);this.Ad=new Uint32Array(this.Wa.buffer);c.jsv_is_ww||(this.canvas.width=this.C,this.canvas.height=this.L,this.T?(this.T.useProgram(this.U),this.T.viewport(0,0,this.C,this.L)):(this.da=this.pb.getImageData(0,0,this.C,this.L),this.Ub(this.da.data,255)))}};b.prototype.ea=null;b.prototype.ca=null;b.prototype.ba=null;b.prototype.da=null;b.prototype.ka=0;b.prototype.Za=null;b.prototype.Xa=null;b.prototype.Wa=null;
b.prototype.zc=!1;b.prototype.yc=0;b.prototype.Ya=0;b.prototype.S=0;b.prototype.we=function(){this.buffer.advance(10);this.ka=this.buffer.b(3);this.buffer.advance(16);if(!(0>=this.ka||this.ka>=aa)){if(this.ka==M){this.zc=this.buffer.b(1);this.yc=this.buffer.b(3);if(0==this.yc)return;this.Ya=this.yc-1;this.S=1<<this.Ya}var a=0;do a=this.buffer.Vb();while(a==ba||a==ca);for(;a>=da&&a<=ea;)this.xe(a&255),a=this.buffer.Vb();this.buffer.Rd(32);void 0!=fa&&this.Xb();if(this.ka==ga||this.ka==M){var a=this.Za,
e=this.Cd,b=this.Xa,c=this.Bd,d=this.Wa,f=this.Ad;this.Za=this.ea;this.Cd=this.qc;this.Xa=this.ca;this.Bd=this.pc;this.Wa=this.ba;this.Ad=this.oc;this.ea=a;this.qc=e;this.ca=b;this.pc=c;this.ba=d;this.oc=f}}};b.prototype.Kc=function(){for(var a=this.ea,e=this.ba,b=this.ca,c=this.da.data,d=0,f=this.J,k=this.J+(this.J-this.C),C=0,g=this.ab-(this.C>>1),p=0,h=4*this.C,n=4*this.C,t=this.C>>1,q=this.L>>1,u,r,w,v,y=0;y<q;y++){for(var z=0;z<t;z++)u=e[C],r=b[C],C++,w=r+(103*r>>8)-179,r=(88*u>>8)-44+(183*r>>
8)-91,v=u+(198*u>>8)-227,u=a[d++],c[p]=u+w,c[p+1]=u-r,c[p+2]=u+v,p+=4,u=a[d++],c[p]=u+w,c[p+1]=u-r,c[p+2]=u+v,p+=4,u=a[f++],c[h]=u+w,c[h+1]=u-r,c[h+2]=u+v,h+=4,u=a[f++],c[h]=u+w,c[h+1]=u-r,c[h+2]=u+v,h+=4;d+=k;f+=k;p+=n;h+=n;C+=g}};b.prototype.sidmgl=function(a,e,b,c){this.ea=a;this.ca=e;this.ba=b;this.Qd();this.X=c};b.prototype.sidm2d=function(a,e){this.pb.putImageData(a,0,0);this.X=e;var b=document.createEvent("CustomEvent");b.initCustomEvent("timeupdate",!1,!1,null);this.dispatchEvent(b)};b.prototype.sidw=
function(a){this.da=a;this.Pa||(this.wa(),this.h&&this.c("playing"));this.Pa=!0};b.prototype.swhm=function(a,e,b,c){this.C=a;this.L=e;this.J=b;this.ab=c;this.canvas.width=this.C;this.canvas.height=this.L;this.T?(this.T.useProgram(this.U),this.T.viewport(0,0,this.C,e)):(this.da=this.pb.getImageData(0,0,this.C,this.L),this.Ub(this.da.data,255),this.l.postMessage({t:"func",n:"sidw",args:[this.da]}))};b.prototype.srfw=function(a){"2d"==a?(this.Xb=this.bf,this.Pa=!1):this.Xb=this.cf};b.prototype.bf=function(){this.Kc();
c.postMessage({t:"func",n:"sidm2d",args:[this.da,this.X]})};b.prototype.cf=function(){c.postMessage({t:"func",n:"sidmgl",args:[this.ea,this.ca,this.ba,this.X]})};b.prototype.af=function(){this.Kc();this.pb.putImageData(this.da,0,0);var a=document.createEvent("CustomEvent");a.initCustomEvent("timeupdate",!1,!1,null);this.dispatchEvent(a)};b.prototype.T=null;b.prototype.U=null;b.prototype.Lc=null;b.prototype.Hc=null;b.prototype.Ic=null;b.prototype.createTexture=function(a,e){var b=this.T,c=b.createTexture();
b.bindTexture(b.TEXTURE_2D,c);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.uniform1i(b.getUniformLocation(this.U,e),a);return c};b.prototype.compileShader=function(a,b){var c=this.T,d=c.createShader(a);c.shaderSource(d,b);c.compileShader(d);if(!c.getShaderParameter(d,c.COMPILE_STATUS))throw Error(c.getShaderInfoLog(d));
return d};b.prototype.Ue=function(){try{var a=this.T=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl")}catch(b){return!1}if(!a)return!1;this.buffer=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,this.buffer);a.bufferData(a.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,1,1]),a.STATIC_DRAW);this.U=a.createProgram();a.attachShader(this.U,this.compileShader(a.VERTEX_SHADER,P));a.attachShader(this.U,this.compileShader(a.FRAGMENT_SHADER,ha));a.linkProgram(this.U);if(!a.getProgramParameter(this.U,
a.LINK_STATUS))throw Error(a.getProgramInfoLog(this.U));a.useProgram(this.U);this.Lc=this.createTexture(0,"YTexture");this.Hc=this.createTexture(1,"CBTexture");this.Ic=this.createTexture(2,"CRTexture");var e=a.getAttribLocation(this.U,"vertex");a.enableVertexAttribArray(e);a.vertexAttribPointer(e,2,a.FLOAT,!1,0,0);this.Ab=a.createProgram();a.attachShader(this.Ab,this.compileShader(a.VERTEX_SHADER,P));a.attachShader(this.Ab,this.compileShader(a.FRAGMENT_SHADER,ia));a.linkProgram(this.Ab);a.useProgram(this.Ab);
e=a.getAttribLocation(this.Ab,"vertex");a.enableVertexAttribArray(e);a.vertexAttribPointer(e,2,a.FLOAT,!1,0,0);return!0};b.prototype.Qd=function(){var a=this.T,b=new Uint8Array(this.ea.buffer),c=new Uint8Array(this.ca.buffer),d=new Uint8Array(this.ba.buffer);a.activeTexture(a.TEXTURE0);a.bindTexture(a.TEXTURE_2D,this.Lc);a.texImage2D(a.TEXTURE_2D,0,a.LUMINANCE,this.J,this.L,0,a.LUMINANCE,a.UNSIGNED_BYTE,b);a.activeTexture(a.TEXTURE1);a.bindTexture(a.TEXTURE_2D,this.Hc);a.texImage2D(a.TEXTURE_2D,0,
a.LUMINANCE,this.ab,this.L/2,0,a.LUMINANCE,a.UNSIGNED_BYTE,c);a.activeTexture(a.TEXTURE2);a.bindTexture(a.TEXTURE_2D,this.Ic);a.texImage2D(a.TEXTURE_2D,0,a.LUMINANCE,this.ab,this.L/2,0,a.LUMINANCE,a.UNSIGNED_BYTE,d);a.drawArrays(a.TRIANGLE_STRIP,0,4);a=document.createEvent("CustomEvent");a.initCustomEvent("timeupdate",!1,!1,null);this.dispatchEvent(a)};b.prototype.Cc=0;b.prototype.Gc=!1;b.prototype.xe=function(a){this.Gc=!0;this.$=(a-1)*this.va-1;this.ja=this.N=this.ia=this.M=0;this.rb=this.sb=this.tb=
128;for(this.Cc=this.buffer.b(5);this.buffer.b(1);)this.buffer.advance(8);do this.ue();while(!this.buffer.Md())};b.prototype.$=0;b.prototype.ua=0;b.prototype.ta=0;b.prototype.Bb=0;b.prototype.bb=!1;b.prototype.Id=!1;b.prototype.ia=0;b.prototype.ja=0;b.prototype.M=0;b.prototype.N=0;b.prototype.ue=function(){for(var a=0,b=this.aa(O);34==b;)b=this.aa(O);for(;35==b;)a+=33,b=this.aa(O);a+=b;if(this.Gc)this.Gc=!1,this.$+=a;else{if(this.$+a>=this.We)return;1<a&&(this.rb=this.sb=this.tb=128,this.ka==M&&(this.ja=
this.N=this.ia=this.M=0));for(;1<a;)this.$++,this.ua=this.$/this.va|0,this.ta=this.$%this.va,this.pd(this.ia,this.ja,this.Za,this.Xa,this.Wa),a--;this.$++}this.ua=this.$/this.va|0;this.ta=this.$%this.va;this.Bb=this.aa(ja[this.ka]);this.bb=this.Bb&1;this.Id=this.Bb&8;0!=(this.Bb&16)&&(this.Cc=this.buffer.b(5));this.bb?this.ja=this.N=this.ia=this.M=0:(this.rb=this.sb=this.tb=128,this.ve(),this.pd(this.ia,this.ja,this.Za,this.Xa,this.Wa));for(var a=0!=(this.Bb&2)?this.aa(ka):this.bb?63:0,b=0,c=32;6>
b;b++)0!=(a&c)&&this.te(b),c>>=1};b.prototype.ve=function(){var a,b;b=0;this.Id?(a=this.aa(Q),0!=a&&1!=this.S?(b=this.buffer.b(this.Ya),b=(Math.abs(a)-1<<this.Ya)+b+1,0>a&&(b=-b)):b=a,this.M+=b,this.M>(this.S<<4)-1?this.M-=this.S<<5:this.M<-this.S<<4&&(this.M+=this.S<<5),this.ia=this.M,this.zc&&(this.ia<<=1),a=this.aa(Q),0!=a&&1!=this.S?(b=this.buffer.b(this.Ya),b=(Math.abs(a)-1<<this.Ya)+b+1,0>a&&(b=-b)):b=a,this.N+=b,this.N>(this.S<<4)-1?this.N-=this.S<<5:this.N<-this.S<<4&&(this.N+=this.S<<5),
this.ja=this.N,this.zc&&(this.ja<<=1)):this.ka==M&&(this.ja=this.N=this.ia=this.M=0)};b.prototype.pd=function(a,b,c,d,f){var m,k,h,g,p,q,n=this.qc,t=this.oc,v=this.pc;m=this.J;k=m-16;h=1==(b&1);g=((this.ua<<4)+(b>>1))*m+(this.ta<<4)+(a>>1);p=this.ua*m+this.ta<<2;q=p+(m<<2);var u,r,w;if(1==(a&1))if(h)for(;p<q;){u=c[g]+c[g+m];g++;for(h=0;4>h;h++)r=c[g]+c[g+m],g++,w=u+r+2>>2&255,u=c[g]+c[g+m],g++,w|=u+r+2<<6&65280,r=c[g]+c[g+m],g++,w|=u+r+2<<14&16711680,u=c[g]+c[g+m],g++,w|=u+r+2<<22&4278190080,n[p++]=
w;p+=k>>2;g+=k-1}else for(;p<q;){u=c[g++];for(h=0;4>h;h++)r=c[g++],w=u+r+1>>1&255,u=c[g++],w|=u+r+1<<7&65280,r=c[g++],w|=u+r+1<<15&16711680,u=c[g++],w|=u+r+1<<23&4278190080,n[p++]=w;p+=k>>2;g+=k-1}else if(h)for(;p<q;){for(h=0;4>h;h++)w=c[g]+c[g+m]+1>>1&255,g++,w|=c[g]+c[g+m]+1<<7&65280,g++,w|=c[g]+c[g+m]+1<<15&16711680,g++,w|=c[g]+c[g+m]+1<<23&4278190080,g++,n[p++]=w;p+=k>>2;g+=k}else for(;p<q;){for(h=0;4>h;h++)w=c[g],g++,w|=c[g]<<8,g++,w|=c[g]<<16,g++,w|=c[g]<<24,g++,n[p++]=w;p+=k>>2;g+=k}m=this.ab;
k=m-8;h=1==(b/2&1);g=((this.ua<<3)+(b/2>>1))*m+(this.ta<<3)+(a/2>>1);p=this.ua*m+this.ta<<1;q=p+(m<<1);if(1==(a/2&1))if(h)for(;p<q;){a=d[g]+d[g+m];n=f[g]+f[g+m];g++;for(h=0;2>h;h++)b=d[g]+d[g+m],u=f[g]+f[g+m],g++,c=a+b+2>>2&255,r=n+u+2>>2&255,a=d[g]+d[g+m],n=f[g]+f[g+m],g++,c|=a+b+2<<6&65280,r|=n+u+2<<6&65280,b=d[g]+d[g+m],u=f[g]+f[g+m],g++,c|=a+b+2<<14&16711680,r|=n+u+2<<14&16711680,a=d[g]+d[g+m],n=f[g]+f[g+m],g++,c|=a+b+2<<22&4278190080,r|=n+u+2<<22&4278190080,v[p]=c,t[p]=r,p++;p+=k>>2;g+=k-1}else for(;p<
q;){a=d[g];n=f[g];g++;for(h=0;2>h;h++)b=d[g],u=f[g++],c=a+b+1>>1&255,r=n+u+1>>1&255,a=d[g],n=f[g++],c|=a+b+1<<7&65280,r|=n+u+1<<7&65280,b=d[g],u=f[g++],c|=a+b+1<<15&16711680,r|=n+u+1<<15&16711680,a=d[g],n=f[g++],c|=a+b+1<<23&4278190080,r|=n+u+1<<23&4278190080,v[p]=c,t[p]=r,p++;p+=k>>2;g+=k-1}else if(h)for(;p<q;){for(h=0;2>h;h++)c=d[g]+d[g+m]+1>>1&255,r=f[g]+f[g+m]+1>>1&255,g++,c|=d[g]+d[g+m]+1<<7&65280,r|=f[g]+f[g+m]+1<<7&65280,g++,c|=d[g]+d[g+m]+1<<15&16711680,r|=f[g]+f[g+m]+1<<15&16711680,g++,c|=
d[g]+d[g+m]+1<<23&4278190080,r|=f[g]+f[g+m]+1<<23&4278190080,g++,v[p]=c,t[p]=r,p++;p+=k>>2;g+=k}else for(;p<q;){for(h=0;2>h;h++)c=d[g],r=f[g],g++,c|=d[g]<<8,r|=f[g]<<8,g++,c|=d[g]<<16,r|=f[g]<<16,g++,c|=d[g]<<24,r|=f[g]<<24,g++,v[p]=c,t[p]=r,p++;p+=k>>2;g+=k}};b.prototype.tb;b.prototype.sb;b.prototype.rb;b.prototype.A=null;b.prototype.te=function(a){var b=0,c;this.Ub(this.A,0);if(this.bb){4>a?(b=this.tb,c=this.aa(la)):(b=4==a?this.sb:this.rb,c=this.aa(ma));if(0<c){var d=this.buffer.b(c);this.A[0]=
0!=(d&1<<c-1)?b+d:b+(-1<<c|d+1)}else this.A[0]=b;4>a?this.tb=this.A[0]:4==a?this.sb=this.A[0]:this.rb=this.A[0];this.A[0]<<=8;c=this.Ed;b=1}else c=this.Nd;for(d=0;;){var f=0,d=this.aa(na);if(1==d&&0<b&&0==this.buffer.b(1))break;65535==d?(f=this.buffer.b(6),d=this.buffer.b(8),0==d?d=this.buffer.b(8):128==d?d=this.buffer.b(8)-256:128<d&&(d-=256)):(f=d>>8,d&=255,this.buffer.b(1)&&(d=-d));b+=f;f=N[b];b++;d<<=1;this.bb||(d+=0>d?-1:1);d=d*this.Cc*c[f]>>4;0==(d&1)&&(d-=0<d?1:-1);2047<d?d=2047:-2048>d&&(d=
-2048);this.A[f]=d*oa[f]}1==b?this.Ub(this.A,this.A[0]+128>>8):this.Wd();4>a?(b=this.ea,d=this.J-8,c=this.ua*this.J+this.ta<<4,0!=(a&1)&&(c+=8),0!=(a&2)&&(c+=this.J<<3)):(b=4==a?this.ba:this.ca,d=(this.J>>1)-8,c=(this.ua*this.J<<2)+(this.ta<<3));this.bb?this.od(this.A,b,c,d):this.hd(this.A,b,c,d)};b.prototype.od=function(a,b,c,d){for(var f=0,m=0;8>m;m++){for(var h=0;8>h;h++)b[c++]=a[f++];c+=d}};b.prototype.hd=function(a,b,c,d){for(var f=0,m=0;8>m;m++){for(var h=0;8>h;h++)b[c++]+=a[f++];c+=d}};b.prototype.se=
function(a,b,c,d){for(var f=0,m=0;8>m;m++){for(var h=0;8>h;h++){var k=a[f++];b[c++]=255<k?255:0>k?0:k}c+=d}};b.prototype.oe=function(a,b,c,d){for(var f=0,h=0;8>h;h++){for(var k=0;8>k;k++){var q=a[f++]+b[c];b[c++]=255<q?255:0>q?0:q}c+=d}};b.prototype.Wd=function(){var a,b,c,d,f,h,k,q,g,p,v,n,t=this.A;for(n=0;8>n;++n)a=t[32+n],b=t[16+n]+t[48+n],c=t[40+n]-t[24+n],h=t[8+n]+t[56+n],k=t[24+n]+t[40+n],d=t[8+n]-t[56+n],f=h+k,q=t[0+n],v=(473*d-196*c+128>>8)-f,h=v-(362*(h-k)+128>>8),k=q-a,g=(362*(t[16+n]-t[48+
n])+128>>8)-b,p=q+a,a=k+g,q=p+b,k-=g,b=p-b,c=-h-(473*c+196*d+128>>8),t[0+n]=f+q,t[8+n]=v+a,t[16+n]=k-h,t[24+n]=b-c,t[32+n]=b+c,t[40+n]=h+k,t[48+n]=a-v,t[56+n]=q-f;for(n=0;64>n;n+=8)a=t[4+n],b=t[2+n]+t[6+n],c=t[5+n]-t[3+n],h=t[1+n]+t[7+n],k=t[3+n]+t[5+n],d=t[1+n]-t[7+n],f=h+k,q=t[0+n],v=(473*d-196*c+128>>8)-f,h=v-(362*(h-k)+128>>8),k=q-a,g=(362*(t[2+n]-t[6+n])+128>>8)-b,p=q+a,a=k+g,q=p+b,k-=g,b=p-b,c=-h-(473*c+196*d+128>>8),t[0+n]=f+q+128>>8,t[1+n]=v+a+128>>8,t[2+n]=k-h+128>>8,t[3+n]=b-c+128>>8,t[4+
n]=b+c+128>>8,t[5+n]=h+k+128>>8,t[6+n]=a-v+128>>8,t[7+n]=q-f+128>>8};var f=0,R=1,S=30,v=1,T=3E5,U=5E7,fa=1,X=[0,23.976,24,25,29.97,30,50,59.94,60,15,5,10,12,15,0,0],N=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),Y=new Uint8Array([8,16,19,22,26,27,29,34,16,16,22,24,27,29,34,37,19,22,26,27,29,34,34,38,22,22,26,27,29,34,37,40,22,26,27,29,32,35,40,
48,26,27,29,32,35,40,48,58,26,27,29,34,38,46,56,69,27,29,35,38,46,56,69,83]),Z=new Uint8Array([16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]),oa=new Uint8Array([32,44,42,38,32,25,17,9,44,62,58,52,44,35,24,12,42,58,55,49,42,33,23,12,38,52,49,44,38,30,20,10,32,44,42,38,32,25,17,9,25,35,33,30,25,20,14,7,17,24,23,20,17,14,9,5,9,12,12,10,9,7,5,2]),O=new Int16Array([3,
6,0,9,12,0,0,0,1,15,18,0,21,24,0,27,30,0,33,36,0,0,0,3,0,0,2,39,42,0,45,48,0,0,0,5,0,0,4,51,54,0,57,60,0,0,0,7,0,0,6,63,66,0,69,72,0,75,78,0,81,84,0,-1,87,0,-1,90,0,93,96,0,99,102,0,105,108,0,111,114,0,0,0,9,0,0,8,117,120,0,123,126,0,129,132,0,135,138,0,0,0,15,0,0,14,0,0,13,0,0,12,0,0,11,0,0,10,141,-1,0,-1,144,0,147,150,0,153,156,0,159,162,0,165,168,0,171,174,0,177,180,0,183,-1,0,-1,186,0,189,192,0,195,198,0,201,204,0,207,210,0,213,216,0,219,222,0,0,0,21,0,0,20,0,0,19,0,0,18,0,0,17,0,0,16,0,0,35,
0,0,34,0,0,33,0,0,32,0,0,31,0,0,30,0,0,29,0,0,28,0,0,27,0,0,26,0,0,25,0,0,24,0,0,23,0,0,22]),pa=new Int8Array([3,6,0,-1,9,0,0,0,1,0,0,17]),qa=new Int8Array([3,6,0,9,12,0,0,0,10,15,18,0,0,0,2,21,24,0,0,0,8,27,30,0,33,36,0,-1,39,0,0,0,18,0,0,26,0,0,1,0,0,17]),ra=new Int8Array([3,6,0,9,15,0,12,18,0,24,21,0,0,0,12,27,30,0,0,0,14,39,42,0,36,33,0,0,0,4,0,0,6,54,48,0,45,51,0,0,0,8,0,0,10,-1,57,0,0,0,1,60,63,0,0,0,30,0,0,17,0,0,22,0,0,26]),ka=new Int16Array([6,3,0,9,18,0,12,15,0,24,33,0,36,39,0,27,21,0,30,
42,0,60,57,0,54,48,0,69,51,0,81,75,0,63,84,0,45,66,0,72,78,0,0,0,60,105,120,0,132,144,0,114,108,0,126,141,0,87,93,0,117,96,0,0,0,32,135,138,0,99,123,0,129,102,0,0,0,4,90,111,0,0,0,8,0,0,16,0,0,44,150,168,0,0,0,28,0,0,52,0,0,62,183,177,0,156,180,0,0,0,1,165,162,0,0,0,61,0,0,56,171,174,0,0,0,2,0,0,40,153,186,0,0,0,48,192,189,0,147,159,0,0,0,20,0,0,12,240,249,0,0,0,63,231,225,0,195,219,0,252,198,0,0,0,24,0,0,36,0,0,3,207,261,0,243,237,0,204,213,0,210,234,0,201,228,0,216,222,0,258,255,0,264,246,0,-1,
282,0,285,291,0,0,0,33,0,0,9,318,330,0,306,348,0,0,0,5,0,0,10,279,267,0,0,0,6,0,0,18,0,0,17,0,0,34,339,357,0,309,312,0,270,276,0,327,321,0,351,354,0,303,297,0,294,288,0,300,273,0,342,345,0,315,324,0,336,333,0,363,375,0,0,0,41,0,0,14,0,0,21,372,366,0,360,369,0,0,0,11,0,0,19,0,0,7,0,0,35,0,0,13,0,0,50,0,0,49,0,0,58,0,0,37,0,0,25,0,0,45,0,0,57,0,0,26,0,0,29,0,0,38,0,0,53,0,0,23,0,0,43,0,0,46,0,0,42,0,0,22,0,0,54,0,0,51,0,0,15,0,0,30,0,0,39,0,0,47,0,0,55,0,0,27,0,0,59,0,0,31]),Q=new Int16Array([3,6,0,
12,9,0,0,0,0,18,15,0,24,21,0,0,0,-1,0,0,1,27,30,0,36,33,0,0,0,2,0,0,-2,42,45,0,48,39,0,60,54,0,0,0,3,0,0,-3,51,57,0,-1,69,0,81,75,0,78,63,0,72,66,0,96,84,0,87,93,0,-1,99,0,108,105,0,0,0,-4,90,102,0,0,0,4,0,0,-7,0,0,5,111,123,0,0,0,-5,0,0,7,114,120,0,126,117,0,0,0,-6,0,0,6,153,162,0,150,147,0,135,138,0,156,141,0,129,159,0,132,144,0,0,0,10,0,0,9,0,0,8,0,0,-8,171,198,0,0,0,-9,180,192,0,168,183,0,165,186,0,174,189,0,0,0,-10,177,195,0,0,0,12,0,0,16,0,0,13,0,0,14,0,0,11,0,0,15,0,0,-16,0,0,-12,0,0,-14,0,
0,-15,0,0,-11,0,0,-13]),la=new Int8Array([6,3,0,18,15,0,9,12,0,0,0,1,0,0,2,27,24,0,21,30,0,0,0,0,36,33,0,0,0,4,0,0,3,39,42,0,0,0,5,0,0,6,48,45,0,51,-1,0,0,0,7,0,0,8]),ma=new Int8Array([6,3,0,12,9,0,18,15,0,24,21,0,0,0,2,0,0,1,0,0,0,30,27,0,0,0,3,36,33,0,0,0,4,42,39,0,0,0,5,48,45,0,0,0,6,51,-1,0,0,0,7,0,0,8]),na=new Int32Array([3,6,0,12,9,0,0,0,1,21,24,0,18,15,0,39,27,0,33,30,0,42,36,0,0,0,257,60,66,0,54,63,0,48,57,0,0,0,513,51,45,0,0,0,2,0,0,3,81,75,0,87,93,0,72,78,0,96,90,0,0,0,1025,69,84,0,0,0,
769,0,0,258,0,0,1793,0,0,65535,0,0,1537,111,108,0,0,0,1281,105,102,0,117,114,0,99,126,0,120,123,0,156,150,0,162,159,0,144,147,0,129,135,0,138,132,0,0,0,2049,0,0,4,0,0,514,0,0,2305,153,141,0,165,171,0,180,168,0,177,174,0,183,186,0,0,0,2561,0,0,3329,0,0,6,0,0,259,0,0,5,0,0,770,0,0,2817,0,0,3073,228,225,0,201,210,0,219,213,0,234,222,0,216,231,0,207,192,0,204,189,0,198,195,0,243,261,0,273,240,0,246,237,0,249,258,0,279,276,0,252,255,0,270,282,0,264,267,0,0,0,515,0,0,260,0,0,7,0,0,1026,0,0,1282,0,0,4097,
0,0,3841,0,0,3585,315,321,0,333,342,0,312,291,0,375,357,0,288,294,0,-1,369,0,285,303,0,318,363,0,297,306,0,339,309,0,336,348,0,330,300,0,372,345,0,351,366,0,327,354,0,360,324,0,381,408,0,417,420,0,390,378,0,435,438,0,384,387,0,0,0,2050,396,402,0,465,462,0,0,0,8,411,399,0,429,432,0,453,414,0,426,423,0,0,0,10,0,0,9,0,0,11,0,0,5377,0,0,1538,0,0,771,0,0,5121,0,0,1794,0,0,4353,0,0,4609,0,0,4865,444,456,0,0,0,1027,459,450,0,0,0,261,393,405,0,0,0,516,447,441,0,516,519,0,486,474,0,510,483,0,504,498,0,471,
537,0,507,501,0,522,513,0,534,531,0,468,477,0,492,495,0,549,546,0,525,528,0,0,0,263,0,0,2562,0,0,2306,0,0,5633,0,0,5889,0,0,6401,0,0,6145,0,0,1283,0,0,772,0,0,13,0,0,12,0,0,14,0,0,15,0,0,517,0,0,6657,0,0,262,540,543,0,480,489,0,588,597,0,0,0,27,609,555,0,606,603,0,0,0,19,0,0,22,591,621,0,0,0,18,573,576,0,564,570,0,0,0,20,552,582,0,0,0,21,558,579,0,0,0,23,612,594,0,0,0,25,0,0,24,600,615,0,0,0,31,0,0,30,0,0,28,0,0,29,0,0,26,0,0,17,0,0,16,567,618,0,561,585,0,654,633,0,0,0,37,645,648,0,0,0,36,630,636,
0,0,0,34,639,627,0,663,666,0,657,624,0,651,642,0,669,660,0,0,0,35,0,0,267,0,0,40,0,0,268,0,0,266,0,0,32,0,0,264,0,0,265,0,0,38,0,0,269,0,0,270,0,0,33,0,0,39,0,0,7937,0,0,6913,0,0,7681,0,0,4098,0,0,7425,0,0,7169,0,0,271,0,0,274,0,0,273,0,0,272,0,0,1539,0,0,2818,0,0,3586,0,0,3330,0,0,3074,0,0,3842]),V=150,ga=1,M=2,aa=3,G=195,L=184,da=1,ea=175,W=0,ba=181,ca=178,ha="precision mediump float;\nuniform sampler2D YTexture;\nuniform sampler2D CBTexture;\nuniform sampler2D CRTexture;\nvarying vec2 texCoord;\nvoid main() {\nfloat y = texture2D(YTexture, texCoord).r;\nfloat cr = texture2D(CBTexture, texCoord).r - 0.5;\nfloat cb = texture2D(CRTexture, texCoord).r - 0.5;\ngl_FragColor = vec4(\ny + 1.4 * cr,\ny + -0.343 * cb - 0.711 * cr,\ny + 1.765 * cb,\n1.0\n);\n}",
ia="precision mediump float;\nuniform float loaded;\nvarying vec2 texCoord;\nvoid main() {\nfloat c = ceil(loaded-(1.0-texCoord.y));\ngl_FragColor = vec4(c,c,c,1);\n}",P="attribute vec2 vertex;\nvarying vec2 texCoord;\nvoid main() {\ntexCoord = vertex;\ngl_Position = vec4((vertex * 2.0 - 1.0) * vec2(1, -1), 0.0, 1.0);\n}",ja=[null,pa,qa,ra];d.$b=-1;d.Aa=-2;d.prototype.Ne=function(){this.la=this.gb=0;this.Yc=!1;this.Va=this.m=this.a=this.Wb=NaN;this.Oa=null;this.Ma=this.s=NaN;this.g=this.index=0};
d.prototype.mb=function(){this.ad(void 0,!0);if(this.Hb){var a;(a=this.Re())&&this.$e(a)}};d.prototype.$e=function(a){for(var b=this.m,c=0;c<a;c++)this.Jb(b),b=b.next;this.m=b;for(a=this.s;a.next&&a.next.start<=this.m.start;)a=a.next;a.start=this.m.start;a.i=this.m.i;this.s=a};d.prototype.Re=function(){for(var a=0,b=this.m;b&&b.start<this.a.start;)a++,b=b.next;a-=3;return 0<a?a:0};d.prototype.Pe=function(a,b,c,d){if(a>this.gb||this.Yc)return!1;if(this.Va.end+1==a)var f="";else{for(var h=f=this.m;f&&
f.start<a;)h=f,f=f.next;if(h.start<=a&&h.end>=a){if(f&&h.end+1==f.start)for(;f&&h.end+1==f.start;)h=f,f=f.next;a=h.end+1}f=f?f.start-1:""}b=(!this.a||d?a:this.a.end+1)+c*b-1;if(a>b)return!1;if(f>b||""==f)f=b;return{start:a,end:f}};d.prototype.Oe=function(){if(!this.Oa){this.Oa={};var a=this;this.Oa.__defineGetter__("length",function(){var b=0;if(a.s){b++;for(var c=a.s;c.next;)c=c.next,b++}return b});this.Oa.start=function(b){for(var c=0,d=a.s;;){if(c==b)return d.i;d=d.next;c++}};this.Oa.end=function(b){for(var c=
0,d=a.s;;){if(c==b)return d.j;d=d.next;c++}}}return this.Oa};d.prototype.jd=function(a){this.gb=this.o?this.gb+a.total:a.total;this.Jc=this.gb-4<<3;a.data=new Uint8Array(a.data);a.next=null;if(this.m)if(this.Va.end+1<=a.start)this.Va.next=a,this.Va=this.Va.next,this.Ma.end+1==a.start?(this.Ma.end=a.end,this.Ma.j=a.j):(a={start:a.start,end:a.end,next:null,i:a.i,j:a.j},this.Ma.next=a,this.Ma=this.Ma.next);else if(this.m.start>=a.end+1)a.next=this.m,this.m=a,this.s.start==a.end+1?(this.s.start=a.start,
this.s.i=a.i):(a={start:a.start,end:a.end,next:null,i:a.i,j:a.j},a.next=this.s,this.s=a);else{for(var b=this.m,c=this.m;b.end<a.start;)c=b,b=b.next;a.next=b;c.next=a;for(c=b=this.s;b&&b.end<a.start;)c=b,b=b.next;c.end+1==a.start&&b.start==a.end+1?(c.end=b.end,c.j=b.j,c.next=b.next):c.end+1==a.start?(c.end=a.end,c.j=a.j):b.start==a.end+1?(b.start=a.start,b.i=a.i):(a={start:a.start,end:a.end,next:null,i:a.i,j:a.j},a.next=c.next,c.next=a)}else this.a=this.Va=this.m=a,this.la=this.m.data.byteLength,this.Ma=
this.s={start:a.start,end:a.end,next:null,i:a.i,j:a.j}};d.prototype.Ld=function(){return this.o?!0:this.f?this.a.start!=this.f[this.f.length-1].start||32<=(this.a.data.byteLength<<3)-this.g:this.index<this.Jc};d.prototype.Vb=function(){this.g=this.g+7>>3<<3;for(this.index=this.index+7>>3<<3;this.Ld();){if(this.Md()){var a=(this.g>>3)+4-this.a.data.byteLength-1;if(0<a){if(this.a.next&&this.a.end+1==this.a.next.start)return this.Wb=this.a,this.a=this.a.next,this.la=this.a.data.byteLength,this.index=
this.a.start+a<<3,this.g=a<<3,this.mb(),this.a.data[a];this.xa(this.a.end+1);return d.Aa}this.g+=32;this.index+=32;return this.a.data[this.g-8>>3]}this.advance(8)}this.index=this.gb<<3;return d.$b};d.prototype.Md=function(){if(!this.Ld())return!0;var a=this.g+7>>3,b=this.la-a;if(2<b)return 0==this.a.data[a]&&0==this.a.data[a+1]&&1==this.a.data[a+2];if(this.a.next&&this.a.end+1==this.a.next.start)switch(b){case 2:return 0==this.a.data[a]&&0==this.a.data[a+1]&&1==this.a.next.data[0];case 1:return 0==
this.a.data[a]&&0==this.a.next.data[0]&&1==this.a.next.data[1];default:return 0==this.a.next.data[0]&&0==this.a.next.data[1]&&1==this.a.next.data[2]}else return this.xa(this.a.end+1),d.Aa};d.prototype.appendBuffer=function(a,b){var c=new Uint8Array(a.byteLength+b.byteLength);c.set(new Uint8Array(a),0);c.set(new Uint8Array(b),a.byteLength);return c};d.prototype.b=function(a){var b=!1,c=this.g>>3,d=8-this.g%8;if(this.a.data.byteLength<<3>=this.g+a)var f=this.a.data;else if(this.a.next&&this.a.end+1==
this.a.next.start)b=!0,f=this.appendBuffer(this.a.data.buffer,this.a.next.data.buffer),this.Wb=this.a,this.a=this.a.next,this.la=this.a.data.byteLength,this.mb();else throw this.g+" "+(this.a.data.byteLength<<3);if(d>=a)return this.index+=a,this.g=b?this.index-(this.a.start<<3):this.g+a,f[c]>>d-a&255>>8-a;var h=(this.g+a)%8,k=this.g+a-1>>3,d=f[c]&255>>8-d;for(c++;c<k;c++)d<<=8,d|=f[c];0<h?d=d<<h|f[c]>>8-h:(d<<=8,d|=f[c]);this.index+=a;this.g=b?this.index-(this.a.start<<3):this.g+a;return d};d.prototype.Td=
function(a){var b;void 0==b&&(b=1);if(0<a)if(this.a.next&&this.a.end+1==this.a.next.start)this.Wb=this.a,this.a=this.a.next,this.la=this.a.data.byteLength,this.g=a-1,this.index=(this.a.start<<3)+this.g,b&&this.mb();else return b?(this.xa(this.a.end+1),d.Aa):!1;else this.a=this.Wb,this.la=this.a.data.byteLength,this.g=(this.a.data.byteLength<<3)+a,this.index=(this.a.end+1<<3)+a;return!0};d.prototype.advance=function(a){var b;return 0>=(b=this.g+a-((this.la<<3)-1))?(this.index+=a,this.g+=a):this.Td(b)};
d.prototype.Rd=function(a){return a<=this.g?(this.index-=a,this.g-=a):this.Td(this.g-a)};d.prototype.seek=function(a){var b=this.m,c=this.a.start;if(this.f){for(var f=0;f<this.f.length;f++)if(this.f[f].end>=a){if(this.f[f].loaded)var h=a-this.f[f].start;else return this.xa(this.f[f].start),d.Aa;break}for(;b.start!=this.f[f].start;)b=b.next;this.a=b;this.la=this.a.data.byteLength;this.g=h<<3;this.index=a<<3;c!=this.f[f].start&&this.mb();return!0}do{if(b.end>=a&&b.start<=a)return this.a=b,this.la=this.a.data.byteLength,
this.g=a-this.a.start<<3,this.index=a<<3,c!=this.a.start&&this.mb(),!0;if(!b.next||b.next.start>a)return this.xa(a),d.Aa;b=b.next}while(1)};c.jsv_helper=function(){};c.jsv_helper.iPhoneVersion=function(){if(!/(iPhone)/g.test(navigator.userAgent))return NaN;var a=c.screen.height;switch(a){case 480:return"4";case 568:return"5";case 667:return"6";case 736:return"6";default:return 736<a?"6":"4"}};c.jsv_helper.iOsVersion=function(){if(!/(iPhone)/g.test(navigator.userAgent))return NaN;var a=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
return parseInt(a[1],10)};if(c.jsv_is_ww){var K=new c.video_jsv;c.addEventListener("message",function(a){var b=a.data;a=b.args&&!Array.isArray(b.args)?Object.keys(b.args).map(function(a){return b.args[a]}):b.args;switch(b.t){case "set":K.__lookupSetter__(b.n).apply(K,a);break;case "func":K[b.n].apply(K,a);break;case "eq":K[b.n]=a[0]}})}})(window);

(function() {
    'use strict';

    var Tech = videojs.getComponent('Tech');

    var Jsv = videojs.extend(Tech, {
        constructor: function(options, ready) {
            Tech.call(this, options, ready);
            this.playerReady_ = true;
            this.triggerReady();
        },
        createEl : function() {
            var el = new video_jsv();
            var options = this.options_;
            var vjs = videojs(options.playerId);
            options.Jsv = vjs.options_.Jsv;
            var applyBoolean = function(attribute, value) {
                if (value) {
                    el.setAttribute(attribute, "");
                }
            };
            el.setAttribute('id', options.techId);
            el.setAttribute('class', "vjs-tech");
            applyBoolean('autoplay', options.autoplay);
            applyBoolean('loop', options.loop);
            applyBoolean('muted', options.muted);
            el.setAttribute('src', options.source.src);
            if (options.Jsv.audio !== false) {
                el.setAttribute('data-audio', options.Jsv.audio);
            }
            return el;
        },
        // handleLateInit_ : function(el) {
        //     if (el.networkState === 0 || el.networkState === 3) {
        //         // The video element hasn't started loading the source yet
        //         // or didn't find a source
        //         return;
        //     }

        //     if (el.readyState === 0) {
        //         // NetworkState is set synchronously BUT loadstart is fired at the
        //         // end of the current stack, usually before setInterval(fn, 0).
        //         // So at this point we know loadstart may have already fired or is
        //         // about to fire, and either way the player hasn't seen it yet.
        //         // We don't want to fire loadstart prematurely here and cause a
        //         // double loadstart so we'll wait and see if it happens between now
        //         // and the next loop, and fire it if not.
        //         // HOWEVER, we also want to make sure it fires before loadedmetadata
        //         // which could also happen between now and the next loop, so we'll
        //         // watch for that also.
        //         let loadstartFired = false;
        //         let setLoadstartFired = function() {
        //             loadstartFired = true;
        //         };
        //         this.on('loadstart', setLoadstartFired);

        //         let triggerLoadstart = function() {
        //             // We did miss the original loadstart. Make sure the player
        //             // sees loadstart before loadedmetadata
        //             if (!loadstartFired) {
        //                 this.trigger('loadstart');
        //             }
        //         };
        //         this.on('loadedmetadata', triggerLoadstart);

        //         this.ready(function() {
        //             this.off('loadstart', setLoadstartFired);
        //             this.off('loadedmetadata', triggerLoadstart);

        //             if (!loadstartFired) {
        //                 // We did miss the original native loadstart. Fire it now.
        //                 this.trigger('loadstart');
        //             }
        //         });

        //         return;
        //     }

        //     // From here on we know that loadstart already fired and we missed it.
        //     // The other readyState events aren't as much of a problem if we double
        //     // them, so not going to go to as much trouble as loadstart to prevent
        //     // that unless we find reason to.
        //     let eventsToTrigger = ['loadstart'];

        //     // loadedmetadata: newly equal to HAVE_METADATA (1) or greater
        //     eventsToTrigger.push('loadedmetadata');

        //     // loadeddata: newly increased to HAVE_CURRENT_DATA (2) or greater
        //     if (el.readyState >= 2) {
        //         eventsToTrigger.push('loadeddata');
        //     }

        //     // canplay: newly increased to HAVE_FUTURE_DATA (3) or greater
        //     if (el.readyState >= 3) {
        //         eventsToTrigger.push('canplay');
        //     }

        //     // canplaythrough: newly equal to HAVE_ENOUGH_DATA (4)
        //     if (el.readyState >= 4) {
        //         eventsToTrigger.push('canplaythrough');
        //     }

        //     // We still need to give the player time to add event listeners
        //     this.ready(function() {
        //         eventsToTrigger.forEach(function(type) {
        //             this.trigger(type);
        //         }, this);
        //     });
        // },
        play : function() {
            this.el_.play();
        },
        pause : function() {
            this.el_.pause();
        },
        paused : function() {
            return this.el_.paused;
        },
        currentTime : function() {
            return this.el_.currentTime;
        },
        setCurrentTime : function(seconds) {
            try {
                this.el_.currentTime = seconds;
            } catch (e) {
                log(e, 'Video is not ready. (Video.js)');
                // this.warning(VideoJS.warnings.videoNotReady);
            }
        },
        duration : function() {
            return this.el_.duration || 0;
        },
        buffered : function() {
            return this.el_.buffered;
        },
        volume : function() {
            return this.el_.volume;
        },
        setVolume : function(percentAsDecimal) {
            this.el_.volume = percentAsDecimal;
        },
        muted : function() {
            return this.el_.muted;
        },
        setMuted : function(muted) {
            this.el_.muted = muted;
        },
        width : function() {
            return this.el_.offsetWidth;
        },
        height : function() {
            return this.el_.offsetHeight;
        },
        src : function(src) {
            if (src === undefined) {
                return this.el_.src;
            } else {
                // Setting src through `src` instead of `setSrc` will be deprecated
                this.setSrc(src);
            }
        },
        setSrc : function(src) {
            this.el_.src = src;
        },
        load : function() {
            this.el_.load();
        },
        currentSrc : function() {
            if (this.currentSource_) {
                return this.currentSource_.src;
            } else {
                return this.el_.currentSrc;
            }
        },
        poster : function() {
            return this.el_.poster;
        },
        setPoster : function(val) {
            this.el_.poster = val;
        },
        preload : function() {
            return this.el_.preload;
        },
        setPreload : function(val) {
            this.el_.preload = val;
        },
        autoplay : function() {
            return this.el_.autoplay;
        },
        setAutoplay : function(val) {
            this.el_.autoplay = val;
        },
        controls : function() {
            return this.el_.controls;
        },
        setControls : function(val) {
            this.el_.controls = !!val;
        },
        loop : function() {
            return this.el_.loop;
        },
        setLoop : function(val) {
            this.el_.loop = val;
        },
        error : function() {
            return this.el_.error;
        },
        seeking : function() {
            return this.el_.seeking;
        },
        seekable : function() {
            return this.el_.seekable;
        },
        ended : function() {
            return this.el_.ended;
        },
        defaultMuted : function() {
            return this.el_.defaultMuted;
        },
        playbackRate : function() {
            return this.el_.playbackRate;
        },
        played : function() {
            return this.el_.played;
        },
        setPlaybackRate : function(val) {
            this.el_.playbackRate = val;
        },
        networkState : function() {
            return this.el_.networkState;
        },
        readyState : function() {
            return this.el_.readyState;
        },
        videoWidth : function() {
            return this.el_.videoWidth;
        },
        videoHeight : function() {
            return this.el_.videoHeight;
        }
    });

    Jsv.isSupported = function() {
        return true;
    };

    Jsv.canPlaySource = function(e) {
        return (e.type === 'video/jsv');
    };

    videojs.registerTech('Jsv', Jsv);
})();
