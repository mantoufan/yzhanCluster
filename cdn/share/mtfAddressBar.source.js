var mtfAddressBar=(function (){
	var U = {
		p:'https://api.os120.com/url/go?out_type=redirect&des=sharehelper#',
		i:function(i){
			return document.getElementById(i);
		},
		t:function(t){
			return document.getElementsByTagName(t);
		},
		c:function(t){
			return document.createElement(t);
		},
		css:function(o,c){
			for(var i in c){
				o.style[i]=c[i];
			}
		},
		addHandler: function(element, type, handler) {
			if (element.addEventListener) {  // DOM2
				element.addEventListener(type, handler, false);
			} else if (element.attachEvent) {  // IE
				element.attachEvent('on' + type, handler);
			} else {  // DOM0
				element['on' + type] = handler;
			}
		},
		removeHandler: function(element, type, handler) {
			if (element.removeEventListener) {
				element.removeEventListener(type, handler, false);
			} else if (element.detachEvent) {
				element.detachEvent('on' + type, handler);
			} else {
				element['on' + type] = null;
			}
		},
		tirm:function(s){
			return s?s.replace(/^\s*|\s*$/g, ''):'';
		},
		isURL:function(s) {
			var pattern = new RegExp('^(https?:\\/\\/)?'+
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+
			'((\\d{1,3}\\.){3}\\d{1,3}))'+
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
			'(\\?[;&a-z\\d%_.~+=-]*)?'+
			'(\\#[-a-z\\d_]*)?$','i');
			return s.indexOf('.')>-1?pattern.test(s):false;
		}
	};
	var F={
		baidu:function(wd){
			mtfFrame.openWin(U.isURL(wd)?(wd.substr(0,4)==='http'?wd:'//'+wd):'//yz.m.sm.cn/s?q=' + encodeURIComponent(wd),'',1);
		},
		play:function(u){
			mtfFrame.openWin(U.p+(u?(u.substr(0,4)==='http'?'//jx.618g.com/?url='+encodeURIComponent(u):'//www.laodouban.com/s?c='+encodeURIComponent(u)):'//www.laodouban.com'),'',1);
		},
		fav:function(u){
			mtfFrame.openWin('//hao.yzhan.cyou/v/f/#mtfUrl=' + encodeURIComponent(u),'',1);
		},
		cnzz:function(h){
			if('undefined' !== typeof _czc){
				_czc.push(["_trackPageview",'/'+h]);
			}
		},
		f:function(t){
			var wd = U.tirm(V.i.value);
			F.cnzz(wd);
			F[t](wd);
			return false;
		}
	};
	var add=function(o,_f){
		var f=U.c('FORM');
		for (var i = 0; i < 5; i++) {
			var t=U.c('INPUT');
			if(i===0){
				t.type='text';
				t.setAttribute('placeholder','关键词/网址/视频名称');
				t.name='word';
				t.setAttribute('autocomplete','off');
				U.css(t,{"width":"80%","textIndent":"5px","margin":"0","fontSize":"16px","borderWidth":"1px 0","padding":"1px 0",'height':"1.3em","verticalAlign":"top","borderColor":"#CCCCCC","borderRadius":"0"});
				V.i=t;
			}else if(i===1){
				t.type='hidden';
				t.value='收藏';
			}else if(i===2){
				t.type='hidden';
				t.value='复制';		
			}else if(i===3){
				t.type='button';
				t.value='播放';		
			}else if(i===4){
				t.type='submit';
				t.value='搜索';
			}
			if(i>0){
				V.b[i-1]=t;
				U.css(t,{"width":"10%","height":"2.1em","verticalAlign":"top","padding":"0","margin":"0","fontSize":"12px","background":"#F7F7F7","border":"1px solid #CCCCCC","borderRadius":"0","-webkit-appearance":"none"});
			}

			f.appendChild(t);
		}

		o.appendChild(f);
		V.f=f;
		U.addHandler(document, 'click', function(e) {
			var e = e ? e : window.e,target = e.target || e.srcElement;
			if (V.s && target !== V.s) {
			  V.s.parentNode.removeChild(V.s);
			  V.s='';
			}
		});
		U.addHandler(V.i, 'keyup', function() {
			var v=U.tirm(V.i.value);
			if (v === '') {
			  V.s.innerHTML='';
			  return;
			}
			var s = U.c('SCRIPT');
			s.type = 'text/javascript';
			s.src = '//unionsug.baidu.com/su?wd=' + encodeURI(v) + '&p=3&cb=mtfAddressBar.baidusug';
			document.body.appendChild(s);
		});
		U.addHandler(V.b[0],'click', function() {
			F.fav(V.i.value);
		});
		U.addHandler(V.b[1],'click', function() {
			V.i.select();
			var a=true;
			try {
				a=document.execCommand("copy");
			}catch (err) {
				a=false;
			}
			this.value=(a?'成功':'失败');
			setTimeout(function(){V.b[1].value='复制';},3000);
		});
		U.addHandler(V.b[2],'click', function() {
			F.f('play');
		});
		U.addHandler(V.f,'submit', function(e) {
			e.preventDefault();
			F.f('baidu');
			return false;
		});
		if(_f){
			_f();
		}
	};
	var baidusug=function(d){
		if(V.s){
			V.s.innerHTML='';
		}else{
			V.s=U.c('DIV');
			U.addHandler(V.s, 'click', function(e) {
				var wd, e = e ? e : window.e,target = e.target || e.srcElement;
				wd = target.innerHTML;
				F.cnzz(wd);
				V.i.value=wd;
			});

			U.css(V.s,{"lineHeight":"2em","width":"70%"});
			V.f.appendChild(V.s);
		}

		for (var i = 0, len = d.s.length; i < len; i++) {
		  var item = d.s[i],e=U.c('DIV');
		  e.innerHTML = item;
		  U.css(e,{"textIndent":"5px","border":"solid #F7F7F7","borderWidth":"0 1px 1px 0","cursor":"pointer"});
		  V.s.appendChild(e);
		}
	};
	var V={
		s:'',
		f:'',
		i:'',
		b:[]
	};
	return {
		U:U,
		baidusug:baidusug,
		add:add,
		F:F,
		V:V
	};
})();