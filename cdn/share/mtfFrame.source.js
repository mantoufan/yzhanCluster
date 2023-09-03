var mtfFrame=(function (){
	var css=function(o,c){
		for(var i in c){
			o.style[i]=c[i];
		}
	},c=function(t){
		return document.createElement(t);
	},id2o=function(i){
		return document.getElementById(i);
	},BE=function(o,t){
		return o && typeof o[t] !== "undefined";
	};
	var option={
		"refresh":"松开刷新 Loose to Refresh",
		"mtfp2p":"https://p2p.yzhan.cyou",
		"mtfp2psso":"https://p2p.yzhan.cyou",
		"mtf":"https://mtf.yzhan.cyou",
		"openWin":"http://cdn.dm126.com/share/mtfOpenWin.html?v=1.004",
		"menu":{
			"菜单<sup></sup>":"",
			"DM126":"http://app.yzhan.cyou",
			"导航":"http://hao.yzhan.cyou",
			"动态<sup></sup>":"https://p2p.yzhan.cyou",
			"我<sup></sup>":"https://p2p.yzhan.cyou/?mtfa=me"
		},
		"color":"#fb4a6f",
		"cdn":"//cdn.dm126.com/share",
		"web":"//app.yzhan.cyou"
	};
	var set=function(o){
		for(var i in o){
			if(typeof o[i]==='object'){
				for(var j in o[i]){
					option[i][j]=o[i][j];
				}
			}else{
				option[i]=o[i];
			}
		}
	};
	var refresh=function(b){
		if (BE(window,'addEventListener')) { 
			var rn="MTFrefresh",sb = b?b:document.body,bs=function(){
				return sb.scrollTop || document.documentElement.scrollTop;
			},touchStart,touchEnd,rm=function(){
				if(id2o(rn)){
					document.body.removeChild(id2o(rn));
				}
			};
			document.body.addEventListener('touchstart', function(event) { 
				if(bs()===0){
					var touch = event.targetTouches[0]; 
					 touchStart = touch.pageY;
				}
			}, false);
			document.body.addEventListener('touchmove', function(event) { 
				if(bs()===0){
					var touch = event.targetTouches[0];   
					touchEnd = touch.pageY;
					var a=touchEnd-touchStart;
					if(a>90){
						if(!id2o(rn)){
							var d=c("DIV");
							d.id=rn;
							css(d,{"position":"fixed","top":"0","textAlign":"center","zIndex":"99999","background":option.color,"color":"white","width":"100%","lineHeight":"2em","textShadow":"none"});
							d.innerHTML=option.refresh;
							document.body.appendChild(d);
						}
					}else{
						rm();
					}
				} else {
                    rm();
                }
			 }, false);
			document.body.addEventListener('touchend', function(event) { 
				if(bs()===0){
					var a=touchEnd-touchStart;
					if(a>90){
						location.reload();
					}
				}else{
					touchEnd=0;
				}
				rm();
			}, false);
		};
	};
	
	var sup=function(o,n){
		css(o,{"color":"white","background":"red","padding":"1px 3px","borderRadius":"3px"});
		o.innerHTML=n;
	};
	var msg=function(n,n1,nz){
		var s=document.getElementById('MTFmenu').getElementsByTagName('sup'),z;
		for (var i=0;i<s.length;i++){
			if(i===0){
				z=nz;
			}else if(i===1){
				z=n1;
			}else{
				z=n;
			}
			if(parseInt(z)>0){
				sup(s[i],z);
			}
		}
	};
	
	var menu=function(){
		var m=option.menu,d=c("DIV"),l=-1,mn="MTFmenu";
		css(d,{"position":"fixed","bottom":"0","left":"0","width":"100%","textShadow":"none","lineHeight":"2em"});
		d.id=mn;
		var hide=function(){
			setTimeout(function(){
				var a=id2o(mn).getElementsByTagName('SPAN');
				for (var i=0;i<a.length;i++){
					css(a[i],{"display":"none"});
				}
				css(a[0],{"display":"inline-block"});
			},6000);
		};
		
		for(var i in m){
			l++;	
		}
		var w=1/l*100+'%',l=0;
		for(var i in m){
			var s=c("SPAN");
			css(s,{"background":"white","cursor":"pointer",'textAlign':"center","borderRadius":"3px 3px 0 0","fontSize":"14px"});
			if(l===0){
				i+=' >';
				css(s,{"display":"none","opacity":"0.6","textIndent":"10px"});
				s.onclick=function(){
					var a=this.parentNode.getElementsByTagName('SPAN');
					for (var i=0;i<a.length;i++){
						css(a[i],{"display":"inline-block"});
					}
					css(this,{"display":"none"});
					hide();
				};
			}else{
				s.setAttribute("href",m[i]);
				s.onclick=function(){
					top.location.href=this.getAttribute("href");
					setTimeout(function(){top.location.reload();},1100);//强制hash刷新
				};

				if(m[i].replace(option.mtfp2p,option.mtf)===window.location.href.replace('appin/','')){
					css(s,{"background":option.color,"color":"white"});
				}
				css(s,{"width":w,"display":"inline-block"});
			}
			s.innerHTML=i;
			d.appendChild(s);
			l++;
		}
		document.body.appendChild(d);
		hide();
	};
	var pm=function(){
		ajax.get(option.web+'/api.php?a=pm',function(r){
			if(r){
				var j=eval('(' + r + ')');
				if(BE(j,'n')){
					msg(j.n,j.n1,(j.n+j.n1));
				}
			}
		});
	};
	var ps=function(s) {
		if(!s){
			s=window.location.hash.substr(1);
		}
		var q= {};
		var a = (s[0] === '?' ? s.substr(1) : s).split('&');
		for (var i = 0; i < a.length; i++) {
			var b = a[i].split('=');
			q[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
		}
		return q;
	};
	var sso=function(){
		var a=ps(),i,uid;
		if(localStorage){
			if(BE(a,'uid')){
				localStorage.setItem('i', a.i);
				localStorage.setItem('uid', a.uid);
			}
			i=localStorage.getItem('i');
			uid=localStorage.getItem('uid');
		}
		return {i:i,uid:uid};
	};
	var fc=function(){
		var a=ps();
		if(BE(a,'mtfFC')){
			eval(a.mtfFC+'(a)');
		}
	};
	var js=function(s){
		var j=c('SCRIPT'); 
		j.type='text/javascript'; 
		j.src=s;
		document.body.appendChild(j); 
	};
	var sign={
		i:'mtfSign',
		step:0,
		j:function(uid,step){
			js(option.mtf+'/api/file/list/?a=sign&step='+step+'&uid='+uid+'&jsonp=mtfFrame.sign.show&r='+Math.random());
		},
		init:function(){
			var a=sso();
			if(a.i && a.uid){
				sign.j(a.uid,0);
			}else{
				sign.bt();
			}
		},
		bt:function(){
			var d=c('DIV');
			css(d,{"position":"absolute","top":"27px","right":"40px","color":"#fb4a6f","cursor":"pointer",'textAlign':"center","borderRadius":"3px","fontSize":"14px","opacity":".8","padding":"0px 3px","text-shadow":"none","border":"1px solid #fb4a6f"});
			if(window.navigator.standalone){
				css(d,{"top":"48px"});
			}
			d.innerHTML='签到<sup>双倍</sup>';
			d.id=sign.i;
			d.onclick=function(){
				var a=sso();
				sign.step=1;
				sign.j(a.uid,1);
			};
			document.body.appendChild(d);
		},
		show:function(j){
			if(BE(j,'error')){
				var e=j.error;
				if(e==='login-update'){
					if(localStorage){
						localStorage.setItem('uid', j.uid);
						sign.j(j.uid,0);
					}
				}else{
					if(sign.step===0){
						sign.bt();
					}else{
						sign.step=0;
						var r=confirm('请先登录，然后签到，每天领奖励哦。下拉刷新，弹出登录');
						if(r)
						{
							window.location.href=option.mtfp2psso+'/mod/SSO?r='+encodeURIComponent(window.location.href);
						}
					}
				}
			}else if(BE(j,'step')){
				var s=j.step;
				if(s===0){
					if(j.sign===0){
						sign.bt();
					}
				}else if(s===1){
					var p=c('DIV'),t=j.day,z=j.zan,q,_t=3,_p=((100/3).toFixed(2)-1.3)+'%',_o,_b,_c,_bt=function(s,w,h){
						var _p=c('A');
						_p.innerHTML=s;
						css(_p,{"display":"inline-block","background":"#F7F7F7","color":"gray","text-decoration":"none","width":w,"margin":"2px","cursor":"pointer"});
						if(h){
							_p.href=h;
							_p.onclick=function(){
								openWin(this.href,'',1);
								return false;
							};
						}
						return _p;
					};
					css(p,{"position":"fixed","top":"30%","left":"50%","marginLeft":"-125px","width":"250px","text-align":"center","background":"white","opacity":".9","border-radius":"5px","border":"10px solid white","text-shadow":"none"});
					var _s=c('SPAN');
					_s.innerHTML=j.i;
					css(_s,{"color":"#333333","font-weight":"bold"});
					p.appendChild(_s);
					p.innerHTML+=' 签到成功！<p style="color:red;font-size:2em">+ '+z+'❤</p>';
					for(var i=1;i<=_t;i++){
						q=c('DIV');
						q.innerHTML=i+'天';
						if(i<=t){
							_b='pink';
							_c='white';
						}else{
							_b='#F7F7F7';
							_c='black';
						}
						css(q,{"display":"inline-block","width":_p,"line-height":"200%","background":_b,"color":_c});
						p.appendChild(q);
					}
					p.innerHTML+='<p>连续签到'+_t+'天，'+_t+'倍奖励</p>';
					p.appendChild(_bt('赚 ❤','48.3%',option.mtfp2p+'/weal'));
					p.appendChild(_bt('花 ❤','48.3%',option.mtfp2p+'/100314'));
					_c=_bt('点此关闭','98.6%');
					p.appendChild(_c);
					_o=id2o(sign.i);
					if(_o){
						_o.parentNode.removeChild(_o);
					}
					document.body.appendChild(p);
					_c.onclick=function(){
						var p=this.parentNode;
						p.parentNode.removeChild(p);
					};
				}
			}
		}
	};
	var v,version=function(){
		return v;
	};
	var update=function(_v){
		v=_v;
		var s=c('SCRIPT');
		s.type='text/javascript'; 
		s.src=option.cdn+'/mtfVersion.js?r='+Math.random();
		document.body.appendChild(s);  
	};
	var u2n=function(u,z){
		var a=document.createElement('A');a.href=u;
		return a.host?a.host.replace(/\./g,'_').replace(/\:/g,'_'):z;
	};
	var openWin=function(u,_confirm,_frame){
		var r=0;
		if(typeof(api)!=="undefined"){
			r=1;
			api.openWin({
				name:u2n(u,'newW'),
				url:option.openWin,
				pageParam:{
					url:u
				},
				allowEdit:true,
				progress:{
					type:'page'	
				},
				reload:true
			});
		}else{
			r=-1;
			if(_confirm){
				var _r=confirm(_confirm);
				if(!_r)
				{
					return 0;
				}
			}
			if(window.navigator.standalone){
				var a=c('A');
				a.href=u;
				a.click();
			}else{
				if(_frame){
					var f=c('IFRAME'),ch=(document.documentElement.clientHeight||document.body.clientHeight);
					f.src=u;
					css(f,{'position':'fixed','top':'30px','left':0,'width':'100%','height':ch-30+'px','border':'none','background':'#FFFFFF'});
					f.setAttribute('allowFullscreen',true);f.setAttribute('allowTransparency',true);f.setAttribute('frameborder',0);
					document.body.appendChild(f);
					
					var m=c('DIV'),mc=c('A'),mhb=c('A'),mhf=c('A');
					css(m,{'position':'fixed','top':'0','left':'0','width':'100%','background':'#F7F7F7','textAlign':'center'});
					css(mc,{'float':'left'});
					css(mhb,{'float':'right'});
					css(mhf,{'float':'right'});
					mc.innerHTML='X';mhb.innerHTML='＜';mhf.innerHTML='＞';

					m.appendChild(mc);m.appendChild(mhf);m.appendChild(mhb);m.appendChild(mhf);
					document.body.appendChild(m);

					var as=m.getElementsByTagName('A');
					for(var i=0;i<as.length;i++){
						css(as[i],{'display':'block','width':'30px','lineHeight':'28px','cursor':'pointer','border':'1px solid #FFFFFF'});
					}


					mhb.onclick=function(){
						history.back();
					};
					mhf.onclick=function(){
						history.forward();
					};

					var hash='',hashF=window.location.hash,hashT=null;

					mc.onclick=function(){
						var p=this.parentNode;
						document.body.removeChild(p.previousSibling);
						document.body.removeChild(p);
						clearInterval(hashT);
						window.location.hash='';
					};

					hashT=setInterval(function(){
						var h=window.location.hash;
						if(hash==='#f' && h===hashF){
							mc.click();
						}
						hash=h;
					},1000);
					window.location.hash='#f';
				}else{
					window.open(u);
				}
			}
		}
		return r;
	};
	var longPress=function(){
		!function(t,e){"use strict";function n(){this.dispatchEvent(new CustomEvent("long-press",{bubbles:!0,cancelable:!0})),clearTimeout(o)/*,console&&console.log&&console.log("long-press fired on "+this.outerHTML)*/}var o=null,u="ontouchstart"in t||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0,s=u?"touchstart":"mousedown",i=u?"touchcancel":"mouseout",a=u?"touchend":"mouseup",c=u?"touchmove":"mousemove";"initCustomEvent"in e.createEvent("CustomEvent")&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var o=e.createEvent("CustomEvent");return o.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),o},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener(s,function(t){var e=t.target,u=parseInt(e.getAttribute("data-long-press-delay")||"1500",10);o=setTimeout(n.bind(e),u)}),e.addEventListener(a,function(t){clearTimeout(o)}),e.addEventListener(i,function(t){clearTimeout(o)}),e.addEventListener(c,function(t){clearTimeout(o)})}(this,document);
	};
	var longTouch={
		img:function(){
			if("createTouch" in document){
				longPress();
				var a=document.getElementsByTagName('IMG');
				for(var i = 0;i<a.length;i++){
					a[i].addEventListener('long-press', function(e) {
						var d=c('DIV'),s=this.src,b=['保存图片','关闭'];
						document.body.appendChild(d);
						css(d,{'position':'fixed','top':'50%','left':'50%','width':'300px','height':'100px','marginLeft':'-150px','marginTop':'-75px','padding':'25px 0','textAlign':'center','background':'#F7F7F7'});
						for(var i=0;i<b.length;i++){
							var a=c('A');
							d.appendChild(a);
							css(a,{'width':'250px','padding':'10px 0','fontSize':'16px','background':'#333333','color':'#FFFFFF','cursor':'pointer','display':'block','margin':'5px auto','textDecoration':'none'});
							if(b[i]==='保存图片'){
								a.href=option.cdn+'/p/api/down/?u='+encodeURIComponent(s);
							}else if(b[i]==='关闭'){
								a.addEventListener('mouseup',function(){
									var p=this.parentNode;
									document.body.removeChild(p);
								});
							}
							a.innerHTML=b[i];
						};
					});
				}
			}
		}
	};
	var cookie={
		set:function(c_name,value,expiredays)
		{
			var exdate=new Date();
			exdate.setDate(exdate.getDate()+expiredays);
			document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
		},
		get:function(c_name){
			if (document.cookie.length>0){
			  c_start=document.cookie.indexOf(c_name + '=');
				if (c_start!=-1){ 
					c_start=c_start + c_name.length+1;
					c_end=document.cookie.indexOf(';',c_start);
					if (c_end==-1){
						c_end=document.cookie.length;
					}
					return unescape(document.cookie.substring(c_start,c_end));
				} 
			 }
			return '';
		}
	};
	var ajax={
		get: function(url, fn) {   
			var xhr = new XMLHttpRequest();            
			xhr.open('GET', url, true);
			xhr.withCredentials = true;
			if(fn){
				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
					  fn.call(this, xhr.responseText);
					}
				};
			}
			xhr.send();
		}
	};
	var pwa={
		is:function(){
			return BE(window.navigator,'standalone') && window.navigator.standalone;
		},
		f:function(){
			if(pwa.is()){
				var u=cookie.get('mtfUrl'),f=cookie.get('mtfFirstRun');
				if(u && !f){
					cookie.set('mtfRemove','mtfUrl');
					setTimeout(function(){location.href=u;},600);//不能小于600
				}
				cookie.set('mtfFirstRun','1');
			}
		},
		p:function(q){
			if(pwa.is()||q){
				ajax.get(option.web+'/api.php?a=cookie&'+(q?q:'mtfUrl='+encodeURIComponent(location.href)));
			}
		}
	};
	return {
		option:option,
		set:set,
		refresh:refresh,
		menu:menu,
		update:update,
		version:version,
		pm:pm,
		sign:sign,
		openWin:openWin,
		fc:fc,
		longTouch:longTouch,
		pwa:pwa
	};
})();