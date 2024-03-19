function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./settings-form.DUiMcu9L.js","./settings-form.vue.fwlzM6yI.js","./entry.VC833E2J.js","./index.CK6hgZyY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{f as _t,j as yt,r as j,o as z,c as ot,a as K,t as At,n as ft,B as bt,l as Bt,b as Tt,D as Mt,T as mt,F as Ct,M as kt,N as Dt,_ as Et,z as it,O as Lt}from"./entry.VC833E2J.js";import{g as Pt}from"./_commonjsHelpers.Cpj98o6Y.js";import{u as vt}from"./index.CK6hgZyY.js";const Rt=Dt(()=>Et(()=>import("./settings-form.DUiMcu9L.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(L=>L.default||L)),It=K("i",{class:"bi bi-gear-fill"},null,-1),Nt={class:"sr-only"},Ot={class:"modal-box"},Ft=K("form",{method:"dialog"},[K("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"},"✕")],-1),Ut=K("form",{class:"modal-backdrop",method:"dialog"},[K("button",null,"close")],-1),Gt=_t({__name:"settings-modal",props:{btnClass:{default:"btn-neutral"}},setup(L){const{t:P}=yt(),E=j(),C=j(!1);async function T(){var B;C.value=!0,await kt(),(B=E.value)==null||B.showModal()}function k(){var B;(B=E.value)==null||B.close()}return(B,M)=>{const A=Rt;return z(),ot(Ct,null,[K("button",{class:bt(["btn",B.btnClass]),type:"button",onClick:T},[It,K("span",Nt,At(ft(P)("Settings")),1)],2),(z(),Bt(mt,{to:"body"},[ft(C)?(z(),ot("dialog",{key:0,class:"modal",ref_key:"modal",ref:E,onClose:M[0]||(M[0]=U=>C.value=!1)},[K("div",Ot,[Tt(A,{onClose:k}),Ft]),Ut],544)):Mt("",!0)]))],64)}}});var gt={exports:{}};(function(L,P){var E=function(){var C=function(d,p){var s=236,l=17,n=d,g=k[p],r=null,t=0,h=null,u=[],v={},y=function(a,o){t=n*4+17,r=function(e){for(var f=new Array(e),i=0;i<e;i+=1){f[i]=new Array(e);for(var c=0;c<e;c+=1)f[i][c]=null}return f}(t),b(0,0),b(t-7,0),b(0,t-7),N(),R(),H(a,o),n>=7&&$(a),h==null&&(h=xt(n,g,u)),Q(h,o)},b=function(a,o){for(var e=-1;e<=7;e+=1)if(!(a+e<=-1||t<=a+e))for(var f=-1;f<=7;f+=1)o+f<=-1||t<=o+f||(0<=e&&e<=6&&(f==0||f==6)||0<=f&&f<=6&&(e==0||e==6)||2<=e&&e<=4&&2<=f&&f<=4?r[a+e][o+f]=!0:r[a+e][o+f]=!1)},m=function(){for(var a=0,o=0,e=0;e<8;e+=1){y(!0,e);var f=M.getLostPoint(v);(e==0||a>f)&&(a=f,o=e)}return o},R=function(){for(var a=8;a<t-8;a+=1)r[a][6]==null&&(r[a][6]=a%2==0);for(var o=8;o<t-8;o+=1)r[6][o]==null&&(r[6][o]=o%2==0)},N=function(){for(var a=M.getPatternPosition(n),o=0;o<a.length;o+=1)for(var e=0;e<a.length;e+=1){var f=a[o],i=a[e];if(r[f][i]==null)for(var c=-2;c<=2;c+=1)for(var w=-2;w<=2;w+=1)c==-2||c==2||w==-2||w==2||c==0&&w==0?r[f+c][i+w]=!0:r[f+c][i+w]=!1}},$=function(a){for(var o=M.getBCHTypeNumber(n),e=0;e<18;e+=1){var f=!a&&(o>>e&1)==1;r[Math.floor(e/3)][e%3+t-8-3]=f}for(var e=0;e<18;e+=1){var f=!a&&(o>>e&1)==1;r[e%3+t-8-3][Math.floor(e/3)]=f}},H=function(a,o){for(var e=g<<3|o,f=M.getBCHTypeInfo(e),i=0;i<15;i+=1){var c=!a&&(f>>i&1)==1;i<6?r[i][8]=c:i<8?r[i+1][8]=c:r[t-15+i][8]=c}for(var i=0;i<15;i+=1){var c=!a&&(f>>i&1)==1;i<8?r[8][t-i-1]=c:i<9?r[8][15-i-1+1]=c:r[8][15-i-1]=c}r[t-8][8]=!a},Q=function(a,o){for(var e=-1,f=t-1,i=7,c=0,w=M.getMaskFunction(o),x=t-1;x>0;x-=2)for(x==6&&(x-=1);;){for(var D=0;D<2;D+=1)if(r[f][x-D]==null){var I=!1;c<a.length&&(I=(a[c]>>>i&1)==1);var _=w(f,x-D);_&&(I=!I),r[f][x-D]=I,i-=1,i==-1&&(c+=1,i=7)}if(f+=e,f<0||t<=f){f-=e,e=-e;break}}},G=function(a,o){for(var e=0,f=0,i=0,c=new Array(o.length),w=new Array(o.length),x=0;x<o.length;x+=1){var D=o[x].dataCount,I=o[x].totalCount-D;f=Math.max(f,D),i=Math.max(i,I),c[x]=new Array(D);for(var _=0;_<c[x].length;_+=1)c[x][_]=255&a.getBuffer()[_+e];e+=D;var O=M.getErrorCorrectPolynomial(I),F=U(c[x],O.getLength()-1),et=F.mod(O);w[x]=new Array(O.getLength()-1);for(var _=0;_<w[x].length;_+=1){var nt=_+et.getLength()-w[x].length;w[x][_]=nt>=0?et.getAt(nt):0}}for(var at=0,_=0;_<o.length;_+=1)at+=o[_].totalCount;for(var q=new Array(at),W=0,_=0;_<f;_+=1)for(var x=0;x<o.length;x+=1)_<c[x].length&&(q[W]=c[x][_],W+=1);for(var _=0;_<i;_+=1)for(var x=0;x<o.length;x+=1)_<w[x].length&&(q[W]=w[x][_],W+=1);return q},xt=function(a,o,e){for(var f=S.getRSBlocks(a,o),i=V(),c=0;c<e.length;c+=1){var w=e[c];i.put(w.getMode(),4),i.put(w.getLength(),M.getLengthInBits(w.getMode(),a)),w.write(i)}for(var x=0,c=0;c<f.length;c+=1)x+=f[c].dataCount;if(i.getLengthInBits()>x*8)throw"code length overflow. ("+i.getLengthInBits()+">"+x*8+")";for(i.getLengthInBits()+4<=x*8&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=x*8||(i.put(s,8),i.getLengthInBits()>=x*8));)i.put(l,8);return G(i,f)};v.addData=function(a,o){o=o||"Byte";var e=null;switch(o){case"Numeric":e=Y(a);break;case"Alphanumeric":e=X(a);break;case"Byte":e=Z(a);break;case"Kanji":e=ht(a);break;default:throw"mode:"+o}u.push(e),h=null},v.isDark=function(a,o){if(a<0||t<=a||o<0||t<=o)throw a+","+o;return r[a][o]},v.getModuleCount=function(){return t},v.make=function(){if(n<1){for(var a=1;a<40;a++){for(var o=S.getRSBlocks(a,g),e=V(),f=0;f<u.length;f++){var i=u[f];e.put(i.getMode(),4),e.put(i.getLength(),M.getLengthInBits(i.getMode(),a)),i.write(e)}for(var c=0,f=0;f<o.length;f++)c+=o[f].dataCount;if(e.getLengthInBits()<=c*8)break}n=a}y(!1,m())},v.createTableTag=function(a,o){a=a||2,o=typeof o>"u"?a*4:o;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+o+"px;",e+='">',e+="<tbody>";for(var f=0;f<v.getModuleCount();f+=1){e+="<tr>";for(var i=0;i<v.getModuleCount();i+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+a+"px;",e+=" height: "+a+"px;",e+=" background-color: ",e+=v.isDark(f,i)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>",e},v.createSvgTag=function(a,o,e,f){var i={};typeof arguments[0]=="object"&&(i=arguments[0],a=i.cellSize,o=i.margin,e=i.alt,f=i.title),a=a||2,o=typeof o>"u"?a*4:o,e=typeof e=="string"?{text:e}:e||{},e.text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,f=typeof f=="string"?{text:f}:f||{},f.text=f.text||null,f.id=f.text?f.id||"qrcode-title":null;var c=v.getModuleCount()*a+o*2,w,x,D,I,_="",O;for(O="l"+a+",0 0,"+a+" -"+a+",0 0,-"+a+"z ",_+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',_+=i.scalable?"":' width="'+c+'px" height="'+c+'px"',_+=' viewBox="0 0 '+c+" "+c+'" ',_+=' preserveAspectRatio="xMinYMin meet"',_+=f.text||e.text?' role="img" aria-labelledby="'+J([f.id,e.id].join(" ").trim())+'"':"",_+=">",_+=f.text?'<title id="'+J(f.id)+'">'+J(f.text)+"</title>":"",_+=e.text?'<description id="'+J(e.id)+'">'+J(e.text)+"</description>":"",_+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',_+='<path d="',D=0;D<v.getModuleCount();D+=1)for(I=D*a+o,w=0;w<v.getModuleCount();w+=1)v.isDark(D,w)&&(x=w*a+o,_+="M"+x+","+I+O);return _+='" stroke="transparent" fill="black"/>',_+="</svg>",_},v.createDataURL=function(a,o){a=a||2,o=typeof o>"u"?a*4:o;var e=v.getModuleCount()*a+o*2,f=o,i=e-o;return pt(e,e,function(c,w){if(f<=c&&c<i&&f<=w&&w<i){var x=Math.floor((c-f)/a),D=Math.floor((w-f)/a);return v.isDark(D,x)?0:1}else return 1})},v.createImgTag=function(a,o,e){a=a||2,o=typeof o>"u"?a*4:o;var f=v.getModuleCount()*a+o*2,i="";return i+="<img",i+=' src="',i+=v.createDataURL(a,o),i+='"',i+=' width="',i+=f,i+='"',i+=' height="',i+=f,i+='"',e&&(i+=' alt="',i+=J(e),i+='"'),i+="/>",i};var J=function(a){for(var o="",e=0;e<a.length;e+=1){var f=a.charAt(e);switch(f){case"<":o+="&lt;";break;case">":o+="&gt;";break;case"&":o+="&amp;";break;case'"':o+="&quot;";break;default:o+=f;break}}return o},wt=function(a){var o=1;a=typeof a>"u"?o*2:a;var e=v.getModuleCount()*o+a*2,f=a,i=e-a,c,w,x,D,I,_={"██":"█","█ ":"▀"," █":"▄","  ":" "},O={"██":"▀","█ ":"▀"," █":" ","  ":" "},F="";for(c=0;c<e;c+=2){for(x=Math.floor((c-f)/o),D=Math.floor((c+1-f)/o),w=0;w<e;w+=1)I="█",f<=w&&w<i&&f<=c&&c<i&&v.isDark(x,Math.floor((w-f)/o))&&(I=" "),f<=w&&w<i&&f<=c+1&&c+1<i&&v.isDark(D,Math.floor((w-f)/o))?I+=" ":I+="█",F+=a<1&&c+1>=i?O[I]:_[I];F+=`
`}return e%2&&a>0?F.substring(0,F.length-e-1)+Array(e+1).join("▀"):F.substring(0,F.length-1)};return v.createASCII=function(a,o){if(a=a||1,a<2)return wt(o);a-=1,o=typeof o>"u"?a*2:o;var e=v.getModuleCount()*a+o*2,f=o,i=e-o,c,w,x,D,I=Array(a+1).join("██"),_=Array(a+1).join("  "),O="",F="";for(c=0;c<e;c+=1){for(x=Math.floor((c-f)/a),F="",w=0;w<e;w+=1)D=1,f<=w&&w<i&&f<=c&&c<i&&v.isDark(x,Math.floor((w-f)/a))&&(D=0),F+=D?I:_;for(x=0;x<a;x+=1)O+=F+`
`}return O.substring(0,O.length-1)},v.renderTo2dContext=function(a,o){o=o||2;for(var e=v.getModuleCount(),f=0;f<e;f++)for(var i=0;i<e;i++)a.fillStyle=v.isDark(f,i)?"black":"white",a.fillRect(f*o,i*o,o,o)},v};C.stringToBytesFuncs={default:function(d){for(var p=[],s=0;s<d.length;s+=1){var l=d.charCodeAt(s);p.push(l&255)}return p}},C.stringToBytes=C.stringToBytesFuncs.default,C.createStringToBytes=function(d,p){var s=function(){for(var n=ct(d),g=function(){var R=n.read();if(R==-1)throw"eof";return R},r=0,t={};;){var h=n.read();if(h==-1)break;var u=g(),v=g(),y=g(),b=String.fromCharCode(h<<8|u),m=v<<8|y;t[b]=m,r+=1}if(r!=p)throw r+" != "+p;return t}(),l=63;return function(n){for(var g=[],r=0;r<n.length;r+=1){var t=n.charCodeAt(r);if(t<128)g.push(t);else{var h=s[n.charAt(r)];typeof h=="number"?(h&255)==h?g.push(h):(g.push(h>>>8),g.push(h&255)):g.push(l)}}return g}};var T={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},k={L:1,M:0,Q:3,H:2},B={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},M=function(){var d=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],p=1335,s=7973,l=21522,n={},g=function(r){for(var t=0;r!=0;)t+=1,r>>>=1;return t};return n.getBCHTypeInfo=function(r){for(var t=r<<10;g(t)-g(p)>=0;)t^=p<<g(t)-g(p);return(r<<10|t)^l},n.getBCHTypeNumber=function(r){for(var t=r<<12;g(t)-g(s)>=0;)t^=s<<g(t)-g(s);return r<<12|t},n.getPatternPosition=function(r){return d[r-1]},n.getMaskFunction=function(r){switch(r){case B.PATTERN000:return function(t,h){return(t+h)%2==0};case B.PATTERN001:return function(t,h){return t%2==0};case B.PATTERN010:return function(t,h){return h%3==0};case B.PATTERN011:return function(t,h){return(t+h)%3==0};case B.PATTERN100:return function(t,h){return(Math.floor(t/2)+Math.floor(h/3))%2==0};case B.PATTERN101:return function(t,h){return t*h%2+t*h%3==0};case B.PATTERN110:return function(t,h){return(t*h%2+t*h%3)%2==0};case B.PATTERN111:return function(t,h){return(t*h%3+(t+h)%2)%2==0};default:throw"bad maskPattern:"+r}},n.getErrorCorrectPolynomial=function(r){for(var t=U([1],0),h=0;h<r;h+=1)t=t.multiply(U([1,A.gexp(h)],0));return t},n.getLengthInBits=function(r,t){if(1<=t&&t<10)switch(r){case T.MODE_NUMBER:return 10;case T.MODE_ALPHA_NUM:return 9;case T.MODE_8BIT_BYTE:return 8;case T.MODE_KANJI:return 8;default:throw"mode:"+r}else if(t<27)switch(r){case T.MODE_NUMBER:return 12;case T.MODE_ALPHA_NUM:return 11;case T.MODE_8BIT_BYTE:return 16;case T.MODE_KANJI:return 10;default:throw"mode:"+r}else if(t<41)switch(r){case T.MODE_NUMBER:return 14;case T.MODE_ALPHA_NUM:return 13;case T.MODE_8BIT_BYTE:return 16;case T.MODE_KANJI:return 12;default:throw"mode:"+r}else throw"type:"+t},n.getLostPoint=function(r){for(var t=r.getModuleCount(),h=0,u=0;u<t;u+=1)for(var v=0;v<t;v+=1){for(var y=0,b=r.isDark(u,v),m=-1;m<=1;m+=1)if(!(u+m<0||t<=u+m))for(var R=-1;R<=1;R+=1)v+R<0||t<=v+R||m==0&&R==0||b==r.isDark(u+m,v+R)&&(y+=1);y>5&&(h+=3+y-5)}for(var u=0;u<t-1;u+=1)for(var v=0;v<t-1;v+=1){var N=0;r.isDark(u,v)&&(N+=1),r.isDark(u+1,v)&&(N+=1),r.isDark(u,v+1)&&(N+=1),r.isDark(u+1,v+1)&&(N+=1),(N==0||N==4)&&(h+=3)}for(var u=0;u<t;u+=1)for(var v=0;v<t-6;v+=1)r.isDark(u,v)&&!r.isDark(u,v+1)&&r.isDark(u,v+2)&&r.isDark(u,v+3)&&r.isDark(u,v+4)&&!r.isDark(u,v+5)&&r.isDark(u,v+6)&&(h+=40);for(var v=0;v<t;v+=1)for(var u=0;u<t-6;u+=1)r.isDark(u,v)&&!r.isDark(u+1,v)&&r.isDark(u+2,v)&&r.isDark(u+3,v)&&r.isDark(u+4,v)&&!r.isDark(u+5,v)&&r.isDark(u+6,v)&&(h+=40);for(var $=0,v=0;v<t;v+=1)for(var u=0;u<t;u+=1)r.isDark(u,v)&&($+=1);var H=Math.abs(100*$/t/t-50)/5;return h+=H*10,h},n}(),A=function(){for(var d=new Array(256),p=new Array(256),s=0;s<8;s+=1)d[s]=1<<s;for(var s=8;s<256;s+=1)d[s]=d[s-4]^d[s-5]^d[s-6]^d[s-8];for(var s=0;s<255;s+=1)p[d[s]]=s;var l={};return l.glog=function(n){if(n<1)throw"glog("+n+")";return p[n]},l.gexp=function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return d[n]},l}();function U(d,p){if(typeof d.length>"u")throw d.length+"/"+p;var s=function(){for(var n=0;n<d.length&&d[n]==0;)n+=1;for(var g=new Array(d.length-n+p),r=0;r<d.length-n;r+=1)g[r]=d[r+n];return g}(),l={};return l.getAt=function(n){return s[n]},l.getLength=function(){return s.length},l.multiply=function(n){for(var g=new Array(l.getLength()+n.getLength()-1),r=0;r<l.getLength();r+=1)for(var t=0;t<n.getLength();t+=1)g[r+t]^=A.gexp(A.glog(l.getAt(r))+A.glog(n.getAt(t)));return U(g,0)},l.mod=function(n){if(l.getLength()-n.getLength()<0)return l;for(var g=A.glog(l.getAt(0))-A.glog(n.getAt(0)),r=new Array(l.getLength()),t=0;t<l.getLength();t+=1)r[t]=l.getAt(t);for(var t=0;t<n.getLength();t+=1)r[t]^=A.gexp(A.glog(n.getAt(t))+g);return U(r,0).mod(n)},l}var S=function(){var d=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p=function(n,g){var r={};return r.totalCount=n,r.dataCount=g,r},s={},l=function(n,g){switch(g){case k.L:return d[(n-1)*4+0];case k.M:return d[(n-1)*4+1];case k.Q:return d[(n-1)*4+2];case k.H:return d[(n-1)*4+3];default:return}};return s.getRSBlocks=function(n,g){var r=l(n,g);if(typeof r>"u")throw"bad rs block @ typeNumber:"+n+"/errorCorrectionLevel:"+g;for(var t=r.length/3,h=[],u=0;u<t;u+=1)for(var v=r[u*3+0],y=r[u*3+1],b=r[u*3+2],m=0;m<v;m+=1)h.push(p(y,b));return h},s}(),V=function(){var d=[],p=0,s={};return s.getBuffer=function(){return d},s.getAt=function(l){var n=Math.floor(l/8);return(d[n]>>>7-l%8&1)==1},s.put=function(l,n){for(var g=0;g<n;g+=1)s.putBit((l>>>n-g-1&1)==1)},s.getLengthInBits=function(){return p},s.putBit=function(l){var n=Math.floor(p/8);d.length<=n&&d.push(0),l&&(d[n]|=128>>>p%8),p+=1},s},Y=function(d){var p=T.MODE_NUMBER,s=d,l={};l.getMode=function(){return p},l.getLength=function(r){return s.length},l.write=function(r){for(var t=s,h=0;h+2<t.length;)r.put(n(t.substring(h,h+3)),10),h+=3;h<t.length&&(t.length-h==1?r.put(n(t.substring(h,h+1)),4):t.length-h==2&&r.put(n(t.substring(h,h+2)),7))};var n=function(r){for(var t=0,h=0;h<r.length;h+=1)t=t*10+g(r.charAt(h));return t},g=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;throw"illegal char :"+r};return l},X=function(d){var p=T.MODE_ALPHA_NUM,s=d,l={};l.getMode=function(){return p},l.getLength=function(g){return s.length},l.write=function(g){for(var r=s,t=0;t+1<r.length;)g.put(n(r.charAt(t))*45+n(r.charAt(t+1)),11),t+=2;t<r.length&&g.put(n(r.charAt(t)),6)};var n=function(g){if("0"<=g&&g<="9")return g.charCodeAt(0)-48;if("A"<=g&&g<="Z")return g.charCodeAt(0)-65+10;switch(g){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+g}};return l},Z=function(d){var p=T.MODE_8BIT_BYTE,s=C.stringToBytes(d),l={};return l.getMode=function(){return p},l.getLength=function(n){return s.length},l.write=function(n){for(var g=0;g<s.length;g+=1)n.put(s[g],8)},l},ht=function(d){var p=T.MODE_KANJI,s=C.stringToBytesFuncs.SJIS;if(!s)throw"sjis not supported.";(function(g,r){var t=s(g);if(t.length!=2||(t[0]<<8|t[1])!=r)throw"sjis not supported."})("友",38726);var l=s(d),n={};return n.getMode=function(){return p},n.getLength=function(g){return~~(l.length/2)},n.write=function(g){for(var r=l,t=0;t+1<r.length;){var h=(255&r[t])<<8|255&r[t+1];if(33088<=h&&h<=40956)h-=33088;else if(57408<=h&&h<=60351)h-=49472;else throw"illegal char at "+(t+1)+"/"+h;h=(h>>>8&255)*192+(h&255),g.put(h,13),t+=2}if(t<r.length)throw"illegal char at "+(t+1)},n},rt=function(){var d=[],p={};return p.writeByte=function(s){d.push(s&255)},p.writeShort=function(s){p.writeByte(s),p.writeByte(s>>>8)},p.writeBytes=function(s,l,n){l=l||0,n=n||s.length;for(var g=0;g<n;g+=1)p.writeByte(s[g+l])},p.writeString=function(s){for(var l=0;l<s.length;l+=1)p.writeByte(s.charCodeAt(l))},p.toByteArray=function(){return d},p.toString=function(){var s="";s+="[";for(var l=0;l<d.length;l+=1)l>0&&(s+=","),s+=d[l];return s+="]",s},p},lt=function(){var d=0,p=0,s=0,l="",n={},g=function(t){l+=String.fromCharCode(r(t&63))},r=function(t){if(!(t<0)){if(t<26)return 65+t;if(t<52)return 97+(t-26);if(t<62)return 48+(t-52);if(t==62)return 43;if(t==63)return 47}throw"n:"+t};return n.writeByte=function(t){for(d=d<<8|t&255,p+=8,s+=1;p>=6;)g(d>>>p-6),p-=6},n.flush=function(){if(p>0&&(g(d<<6-p),d=0,p=0),s%3!=0)for(var t=3-s%3,h=0;h<t;h+=1)l+="="},n.toString=function(){return l},n},ct=function(d){var p=d,s=0,l=0,n=0,g={};g.read=function(){for(;n<8;){if(s>=p.length){if(n==0)return-1;throw"unexpected end of file./"+n}var t=p.charAt(s);if(s+=1,t=="=")return n=0,-1;if(t.match(/^\s$/))continue;l=l<<6|r(t.charCodeAt(0)),n+=6}var h=l>>>n-8&255;return n-=8,h};var r=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(t==43)return 62;if(t==47)return 63;throw"c:"+t};return g},dt=function(d,p){var s=d,l=p,n=new Array(d*p),g={};g.setPixel=function(u,v,y){n[v*s+u]=y},g.write=function(u){u.writeString("GIF87a"),u.writeShort(s),u.writeShort(l),u.writeByte(128),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(255),u.writeByte(255),u.writeByte(255),u.writeString(","),u.writeShort(0),u.writeShort(0),u.writeShort(s),u.writeShort(l),u.writeByte(0);var v=2,y=t(v);u.writeByte(v);for(var b=0;y.length-b>255;)u.writeByte(255),u.writeBytes(y,b,255),b+=255;u.writeByte(y.length-b),u.writeBytes(y,b,y.length-b),u.writeByte(0),u.writeString(";")};var r=function(u){var v=u,y=0,b=0,m={};return m.write=function(R,N){if(R>>>N)throw"length over";for(;y+N>=8;)v.writeByte(255&(R<<y|b)),N-=8-y,R>>>=8-y,b=0,y=0;b=R<<y|b,y=y+N},m.flush=function(){y>0&&v.writeByte(b)},m},t=function(u){for(var v=1<<u,y=(1<<u)+1,b=u+1,m=h(),R=0;R<v;R+=1)m.add(String.fromCharCode(R));m.add(String.fromCharCode(v)),m.add(String.fromCharCode(y));var N=rt(),$=r(N);$.write(v,b);var H=0,Q=String.fromCharCode(n[H]);for(H+=1;H<n.length;){var G=String.fromCharCode(n[H]);H+=1,m.contains(Q+G)?Q=Q+G:($.write(m.indexOf(Q),b),m.size()<4095&&(m.size()==1<<b&&(b+=1),m.add(Q+G)),Q=G)}return $.write(m.indexOf(Q),b),$.write(y,b),$.flush(),N.toByteArray()},h=function(){var u={},v=0,y={};return y.add=function(b){if(y.contains(b))throw"dup key:"+b;u[b]=v,v+=1},y.size=function(){return v},y.indexOf=function(b){return u[b]},y.contains=function(b){return typeof u[b]<"u"},y};return g},pt=function(d,p,s){for(var l=dt(d,p),n=0;n<p;n+=1)for(var g=0;g<d;g+=1)l.setPixel(g,n,s(g,n));var r=rt();l.write(r);for(var t=lt(),h=r.toByteArray(),u=0;u<h.length;u+=1)t.writeByte(h[u]);return t.flush(),"data:image/gif;base64,"+t};return C}();(function(){E.stringToBytesFuncs["UTF-8"]=function(C){function T(k){for(var B=[],M=0;M<k.length;M++){var A=k.charCodeAt(M);A<128?B.push(A):A<2048?B.push(192|A>>6,128|A&63):A<55296||A>=57344?B.push(224|A>>12,128|A>>6&63,128|A&63):(M++,A=65536+((A&1023)<<10|k.charCodeAt(M)&1023),B.push(240|A>>18,128|A>>12&63,128|A>>6&63,128|A&63))}return B}return T(C)}})(),function(C){L.exports=C()}(function(){return E})})(gt);var $t=gt.exports;const tt=Pt($t);tt.stringToBytes=tt.stringToBytesFuncs["UTF-8"];function ut(L){return!!(L&1)}function st(L){return!(L&1)}function Ht(L,P,E){const{logo:C,background:T,isTransparent:k}=E;let B=L/5>>0;(ut(B)&&st(L)||st(B)&&ut(L))&&B++;const M=B*P,A=(L+2-B>>1)*P;return`${k?"":`<rect width="${M}" height="${M}" x="${A}" y="${A}" fill="${T}" stroke="${T}" />`}<image width="${M-4}" height="${M-4}" x="${A+2}" y="${A+2}" xlink:href="${C}" />`}function Jt(){const L=vt(),{qrcodeConfig:P}=L,E=j(),C=j(""),T=j(!1);let k;function B(){if(clearTimeout(k),E.value===void 0)return;const A=tt(0,"L");A.addData(E.value),A.make();const U=A.getModuleCount(),S=P.size/U>>0,V=A.createSvgTag({cellSize:S,margin:S});let Y=Lt(V,P);if(P.logo){const Z=Ht(U,S,P);Y=Y.replace(' xmlns="',' xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="').replace("</svg>",Z+"</svg>")}const X=btoa(Y);C.value="data:image/svg+xml;base64,"+X,T.value=!1}function M(){T.value=!0,clearTimeout(k),k=setTimeout(B,500)}return it(E,M),it(P,B,{deep:!0}),{content:E,qrcodeUrl:C,isWaiting:T,onChange:M}}async function Yt(L){const P=new FileReader;return new Promise((E,C)=>{P.onload=()=>E(P.result),P.onerror=C,P.readAsDataURL(L)})}function jt(L,P){const E=document.createElement("a");E.download=P,E.href=L,E.click()}async function Vt(L){const P=vt(),{size:E}=P.qrcodeConfig;let C=k=>{};const T=new Image;return T.onload=function(){const k=document.createElement("canvas");k.width=E,k.height=E,k.getContext("2d").drawImage(T,0,0,E,E);const M=k.toDataURL("image/png");C(M)},T.src=L,new Promise(k=>{C=k})}const Wt="https://unpkg.com/bootstrap-icons@1.11.3/icons/qr-code.svg";export{Wt as Q,Gt as _,jt as d,Yt as r,Vt as t,Jt as u};