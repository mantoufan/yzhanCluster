var mtfAddressBar=function(){var a={p:"https://api.os120.com/url/go?out_type=redirect&des=sharehelper#",i:function(a){return document.getElementById(a)},t:function(a){return document.getElementsByTagName(a)},c:function(a){return document.createElement(a)},css:function(a,b){for(var c in b)a.style[c]=b[c]},addHandler:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c},removeHandler:function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=null},tirm:function(a){return a?a.replace(/^\s*|\s*$/g,""):""},isURL:function(a){var b=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return a.indexOf(".")>-1?b.test(a):!1}},b={baidu:function(b){mtfFrame.openWin(a.isURL(b)?"http"===b.substr(0,4)?b:"//"+b:"//yz.m.sm.cn/s?q="+encodeURIComponent(b),"",1)},play:function(b){mtfFrame.openWin(a.p+(b?"http"===b.substr(0,4)?"//jx.618g.com/?url="+encodeURIComponent(b):"//www.laodouban.com/s?c="+encodeURIComponent(b):"//www.laodouban.com"),"",1)},fav:function(a){mtfFrame.openWin("//hao.yzhan.nl/v/f/#mtfUrl="+encodeURIComponent(a),"",1)},cnzz:function(a){"undefined"!=typeof _czc&&_czc.push(["_trackPageview","/"+a])},f:function(c){var d=a.tirm(e.i.value);return b.cnzz(d),b[c](d),!1}},c=function(c,d){var g,h,f=a.c("FORM");for(g=0;5>g;g++)h=a.c("INPUT"),0===g?(h.type="text",h.setAttribute("placeholder","关键词/网址/视频名称"),h.name="word",h.setAttribute("autocomplete","off"),a.css(h,{width:"80%",textIndent:"5px",margin:"0",fontSize:"16px",borderWidth:"1px 0",padding:"1px 0",height:"1.3em",verticalAlign:"top",borderColor:"#CCCCCC",borderRadius:"0"}),e.i=h):1===g?(h.type="hidden",h.value="收藏"):2===g?(h.type="hidden",h.value="复制"):3===g?(h.type="button",h.value="播放"):4===g&&(h.type="submit",h.value="搜索"),g>0&&(e.b[g-1]=h,a.css(h,{width:"10%",height:"2.1em",verticalAlign:"top",padding:"0",margin:"0",fontSize:"12px",background:"#F7F7F7",border:"1px solid #CCCCCC",borderRadius:"0","-webkit-appearance":"none"})),f.appendChild(h);c.appendChild(f),e.f=f,a.addHandler(document,"click",function(a){var a=a?a:window.e,b=a.target||a.srcElement;e.s&&b!==e.s&&(e.s.parentNode.removeChild(e.s),e.s="")}),a.addHandler(e.i,"keyup",function(){var c,b=a.tirm(e.i.value);return""===b?(e.s.innerHTML="",void 0):(c=a.c("SCRIPT"),c.type="text/javascript",c.src="//unionsug.baidu.com/su?wd="+encodeURI(b)+"&p=3&cb=mtfAddressBar.baidusug",document.body.appendChild(c),void 0)}),a.addHandler(e.b[0],"click",function(){b.fav(e.i.value)}),a.addHandler(e.b[1],"click",function(){e.i.select();var a=!0;try{a=document.execCommand("copy")}catch(b){a=!1}this.value=a?"成功":"失败",setTimeout(function(){e.b[1].value="复制"},3e3)}),a.addHandler(e.b[2],"click",function(){b.f("play")}),a.addHandler(e.f,"submit",function(a){return a.preventDefault(),b.f("baidu"),!1}),d&&d()},d=function(c){var d,f,g,h;for(e.s?e.s.innerHTML="":(e.s=a.c("DIV"),a.addHandler(e.s,"click",function(a){var c,a=a?a:window.e,d=a.target||a.srcElement;c=d.innerHTML,b.cnzz(c),e.i.value=c}),a.css(e.s,{lineHeight:"2em",width:"70%"}),e.f.appendChild(e.s)),d=0,f=c.s.length;f>d;d++)g=c.s[d],h=a.c("DIV"),h.innerHTML=g,a.css(h,{textIndent:"5px",border:"solid #F7F7F7",borderWidth:"0 1px 1px 0",cursor:"pointer"}),e.s.appendChild(h)},e={s:"",f:"",i:"",b:[]};return{U:a,baidusug:d,add:c,F:b,V:e}}();