var mtfFrame=function(){var css=function(e,n){for(var t in n)e.style[t]=n[t]},c=function(e){return document.createElement(e)},id2o=function(e){return document.getElementById(e)},BE=function(e,n){return e&&"undefined"!=typeof e[n]},option={refresh:"松开刷新 Loose to Refresh",mtfp2p:"https://p.yot.pw",mtfp2psso:"https://p.u2u.ren",mtf:"https://mtf.yzhan.nl",openWin:"http://cdn.dm126.com/share/mtfOpenWin.html?v=1.004",menu:{"菜单<sup></sup>":"",DM126:"http://app.yzhan.in","导航":"http://hao.yzhan.nl","动态<sup></sup>":"https://p.yot.pw","我<sup></sup>":"https://p.yot.pw/?mtfa=me"},color:"#fb4a6f",cdn:"//cdn.dm126.com/share",web:"//app.yzhan.in"},set=function(e){for(var n in e)if("object"==typeof e[n])for(var t in e[n])option[n][t]=e[n][t];else option[n]=e[n]},refresh=function(e){if(BE(window,"addEventListener")){var n,t,o="MTFrefresh",i=e?e:document.body,r=function(){return i.scrollTop||document.documentElement.scrollTop},a=function(){id2o(o)&&document.body.removeChild(id2o(o))};document.body.addEventListener("touchstart",function(e){if(0===r()){var t=e.targetTouches[0];n=t.pageY}},!1),document.body.addEventListener("touchmove",function(e){if(0===r()){var i=e.targetTouches[0];t=i.pageY;var s=t-n;if(s>90){if(!id2o(o)){var d=c("DIV");d.id=o,css(d,{position:"fixed",top:"0",textAlign:"center",zIndex:"99999",background:option.color,color:"white",width:"100%",lineHeight:"2em",textShadow:"none"}),d.innerHTML=option.refresh,document.body.appendChild(d)}}else a()}else a()},!1),document.body.addEventListener("touchend",function(e){if(0===r()){var o=t-n;o>90&&location.reload()}else t=0;a()},!1)}},sup=function(e,n){css(e,{color:"white",background:"red",padding:"1px 3px",borderRadius:"3px"}),e.innerHTML=n},msg=function(e,n,t){for(var o,i=document.getElementById("MTFmenu").getElementsByTagName("sup"),r=0;r<i.length;r++)o=0===r?t:1===r?n:e,parseInt(o)>0&&sup(i[r],o)},menu=function(){var e=option.menu,n=c("DIV"),t=-1,o="MTFmenu";css(n,{position:"fixed",bottom:"0",left:"0",width:"100%",textShadow:"none",lineHeight:"2em"}),n.id=o;var i=function(){setTimeout(function(){for(var e=id2o(o).getElementsByTagName("SPAN"),n=0;n<e.length;n++)css(e[n],{display:"none"});css(e[0],{display:"inline-block"})},6e3)};for(var r in e)t++;var a=1/t*100+"%",t=0;for(var r in e){var s=c("SPAN");css(s,{background:"white",cursor:"pointer",textAlign:"center",borderRadius:"3px 3px 0 0",fontSize:"14px"}),0===t?(r+=" >",css(s,{display:"none",opacity:"0.6",textIndent:"10px"}),s.onclick=function(){for(var e=this.parentNode.getElementsByTagName("SPAN"),n=0;n<e.length;n++)css(e[n],{display:"inline-block"});css(this,{display:"none"}),i()}):(s.setAttribute("href",e[r]),s.onclick=function(){top.location.href=this.getAttribute("href"),setTimeout(function(){top.location.reload()},1100)},e[r].replace(option.mtfp2p,option.mtf)===window.location.href.replace("appin/","")&&css(s,{background:option.color,color:"white"}),css(s,{width:a,display:"inline-block"})),s.innerHTML=r,n.appendChild(s),t++}document.body.appendChild(n),i()},pm=function(){ajax.get(option.web+"/api.php?a=pm",function(r){if(r){var j=eval("("+r+")");BE(j,"n")&&msg(j.n,j.n1,j.n+j.n1)}})},ps=function(e){e||(e=window.location.hash.substr(1));for(var n={},t=("?"===e[0]?e.substr(1):e).split("&"),o=0;o<t.length;o++){var i=t[o].split("=");n[decodeURIComponent(i[0])]=decodeURIComponent(i[1]||"")}return n},sso=function(){var e,n,t=ps();return localStorage&&(BE(t,"uid")&&(localStorage.setItem("i",t.i),localStorage.setItem("uid",t.uid)),e=localStorage.getItem("i"),n=localStorage.getItem("uid")),{i:e,uid:n}},fc=function(){var a=ps();BE(a,"mtfFC")&&eval(a.mtfFC+"(a)")},js=function(e){var n=c("SCRIPT");n.type="text/javascript",n.src=e,document.body.appendChild(n)},sign={i:"mtfSign",step:0,j:function(e,n){js(option.mtf+"/api/file/list/?a=sign&step="+n+"&uid="+e+"&jsonp=mtfFrame.sign.show&r="+Math.random())},init:function(){var e=sso();e.i&&e.uid?sign.j(e.uid,0):sign.bt()},bt:function(){var e=c("DIV");css(e,{position:"absolute",top:"27px",right:"40px",color:"#fb4a6f",cursor:"pointer",textAlign:"center",borderRadius:"3px",fontSize:"14px",opacity:".8",padding:"0px 3px","text-shadow":"none",border:"1px solid #fb4a6f"}),window.navigator.standalone&&css(e,{top:"48px"}),e.innerHTML="签到<sup>双倍</sup>",e.id=sign.i,e.onclick=function(){var e=sso();sign.step=1,sign.j(e.uid,1)},document.body.appendChild(e)},show:function(e){if(BE(e,"error")){var n=e.error;if("login-update"===n)localStorage&&(localStorage.setItem("uid",e.uid),sign.j(e.uid,0));else if(0===sign.step)sign.bt();else{sign.step=0;var t=confirm("请先登录，然后签到，每天领奖励哦。下拉刷新，弹出登录");t&&(window.location.href=option.mtfp2psso+"/mod/SSO?r="+encodeURIComponent(window.location.href))}}else if(BE(e,"step")){var o=e.step;if(0===o)0===e.sign&&sign.bt();else if(1===o){var i,r,a,s,d=c("DIV"),p=e.day,u=e.zan,l=3,f=(100/3).toFixed(2)-1.3+"%",h=function(e,n,t){var o=c("A");return o.innerHTML=e,css(o,{display:"inline-block",background:"#F7F7F7",color:"gray","text-decoration":"none",width:n,margin:"2px",cursor:"pointer"}),t&&(o.href=t,o.onclick=function(){return openWin(this.href,"",1),!1}),o};css(d,{position:"fixed",top:"30%",left:"50%",marginLeft:"-125px",width:"250px","text-align":"center",background:"white",opacity:".9","border-radius":"5px",border:"10px solid white","text-shadow":"none"});var m=c("SPAN");m.innerHTML=e.i,css(m,{color:"#333333","font-weight":"bold"}),d.appendChild(m),d.innerHTML+=' 签到成功！<p style="color:red;font-size:2em">+ '+u+"❤</p>";for(var g=1;l>=g;g++)i=c("DIV"),i.innerHTML=g+"天",p>=g?(a="pink",s="white"):(a="#F7F7F7",s="black"),css(i,{display:"inline-block",width:f,"line-height":"200%",background:a,color:s}),d.appendChild(i);d.innerHTML+="<p>连续签到"+l+"天，"+l+"倍奖励</p>",d.appendChild(h("赚 ❤","48.3%",option.mtfp2p+"/weal")),d.appendChild(h("花 ❤","48.3%",option.mtfp2p+"/100314")),s=h("点此关闭","98.6%"),d.appendChild(s),r=id2o(sign.i),r&&r.parentNode.removeChild(r),document.body.appendChild(d),s.onclick=function(){var e=this.parentNode;e.parentNode.removeChild(e)}}}}},v,version=function(){return v},update=function(e){v=e;var n=c("SCRIPT");n.type="text/javascript",n.src=option.cdn+"/mtfVersion.js?r="+Math.random(),document.body.appendChild(n)},u2n=function(e,n){var t=document.createElement("A");return t.href=e,t.host?t.host.replace(/\./g,"_").replace(/\:/g,"_"):n},openWin=function(e,n,t){var o=0;if("undefined"!=typeof api)o=1,api.openWin({name:u2n(e,"newW"),url:option.openWin,pageParam:{url:e},allowEdit:!0,progress:{type:"page"},reload:!0});else{if(o=-1,n){var i=confirm(n);if(!i)return 0}if(window.navigator.standalone){var r=c("A");r.href=e,r.click()}else if(t){var a=c("IFRAME"),s=document.documentElement.clientHeight||document.body.clientHeight;a.src=e,css(a,{position:"fixed",top:"30px",left:0,width:"100%",height:s-30+"px",border:"none",background:"#FFFFFF"}),a.setAttribute("allowFullscreen",!0),a.setAttribute("allowTransparency",!0),a.setAttribute("frameborder",0),document.body.appendChild(a);var d=c("DIV"),p=c("A"),u=c("A"),l=c("A");css(d,{position:"fixed",top:"0",left:"0",width:"100%",background:"#F7F7F7",textAlign:"center"}),css(p,{"float":"left"}),css(u,{"float":"right"}),css(l,{"float":"right"}),p.innerHTML="X",u.innerHTML="＜",l.innerHTML="＞",d.appendChild(p),d.appendChild(l),d.appendChild(u),d.appendChild(l),document.body.appendChild(d);for(var f=d.getElementsByTagName("A"),h=0;h<f.length;h++)css(f[h],{display:"block",width:"30px",lineHeight:"28px",cursor:"pointer",border:"1px solid #FFFFFF"});u.onclick=function(){history.back()},l.onclick=function(){history.forward()};var m="",g=window.location.hash,v=null;p.onclick=function(){var e=this.parentNode;document.body.removeChild(e.previousSibling),document.body.removeChild(e),clearInterval(v),window.location.hash=""},v=setInterval(function(){var e=window.location.hash;"#f"===m&&e===g&&p.click(),m=e},1e3),window.location.hash="#f"}else window.open(e)}return o},longPress=function(){!function(e,n){"use strict";function t(){this.dispatchEvent(new CustomEvent("long-press",{bubbles:!0,cancelable:!0})),clearTimeout(o)}var o=null,i="ontouchstart"in e||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0,r=i?"touchstart":"mousedown",a=i?"touchcancel":"mouseout",c=i?"touchend":"mouseup",s=i?"touchmove":"mousemove";"initCustomEvent"in n.createEvent("CustomEvent")&&(e.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var o=n.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o},e.CustomEvent.prototype=e.Event.prototype),n.addEventListener(r,function(e){var n=e.target,i=parseInt(n.getAttribute("data-long-press-delay")||"1500",10);o=setTimeout(t.bind(n),i)}),n.addEventListener(c,function(e){clearTimeout(o)}),n.addEventListener(a,function(e){clearTimeout(o)}),n.addEventListener(s,function(e){clearTimeout(o)})}(this,document)},longTouch={img:function(){if("createTouch"in document){longPress();for(var e=document.getElementsByTagName("IMG"),n=0;n<e.length;n++)e[n].addEventListener("long-press",function(e){var n=c("DIV"),t=this.src,o=["保存图片","关闭"];document.body.appendChild(n),css(n,{position:"fixed",top:"50%",left:"50%",width:"300px",height:"100px",marginLeft:"-150px",marginTop:"-75px",padding:"25px 0",textAlign:"center",background:"#F7F7F7"});for(var i=0;i<o.length;i++){var r=c("A");n.appendChild(r),css(r,{width:"250px",padding:"10px 0",fontSize:"16px",background:"#333333",color:"#FFFFFF",cursor:"pointer",display:"block",margin:"5px auto",textDecoration:"none"}),"保存图片"===o[i]?r.href=option.cdn+"/p/api/down/?u="+encodeURIComponent(t):"关闭"===o[i]&&r.addEventListener("mouseup",function(){var e=this.parentNode;document.body.removeChild(e)}),r.innerHTML=o[i]}})}}},cookie={set:function(e,n,t){var o=new Date;o.setDate(o.getDate()+t),document.cookie=e+"="+escape(n)+(null==t?"":";expires="+o.toGMTString())},get:function(e){return document.cookie.length>0&&(c_start=document.cookie.indexOf(e+"="),-1!=c_start)?(c_start=c_start+e.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""}},ajax={get:function(e,n){var t=new XMLHttpRequest;t.open("GET",e,!0),t.withCredentials=!0,n&&(t.onreadystatechange=function(){4!==t.readyState||200!==t.status&&304!==t.status||n.call(this,t.responseText)}),t.send()}},pwa={is:function(){return BE(window.navigator,"standalone")&&window.navigator.standalone},f:function(){if(pwa.is()){var e=cookie.get("mtfUrl"),n=cookie.get("mtfFirstRun");e&&!n&&(cookie.set("mtfRemove","mtfUrl"),setTimeout(function(){location.href=e},600)),cookie.set("mtfFirstRun","1")}},p:function(e){(pwa.is()||e)&&ajax.get(option.web+"/api.php?a=cookie&"+(e?e:"mtfUrl="+encodeURIComponent(location.href)))}};return{option:option,set:set,refresh:refresh,menu:menu,update:update,version:version,pm:pm,sign:sign,openWin:openWin,fc:fc,longTouch:longTouch,pwa:pwa}}();