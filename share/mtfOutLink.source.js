var mtfOutLink={
	option:{
		"mtfp2p":"https://p.juw8.com",
		"mtfcdn":"https://cdn.mantoufan.com",
		"color":"#fb4a6f"
	},
	o:'',
	p:'',
	h:[],
	f:function(){
		
	},
	s:[0,0],
	css:function(o,c){
		for(var i in c){
			o.style[i]=c[i];
		}
	},c:function(t){
		return document.createElement(t);
	},
	l:function(d,j,r,z){		
		var t=(d.n?d.n:(d.t?d.t:'')),tag=function(t,c,b){
			var s=mtfOutLink.c('SPAN');
			s.innerHTML=t;
			mtfOutLink.css(s,c?c:{"background":b?b:mtfOutLink.option.color,"color":"white","padding":".15em .35em","margin":"0 .5em 0 0","borderRadius":".25em"});
			return s;
		}
		
		if(r){
			var a=this.c('DIV'),b=this.c('DIV'),c=this.c('DIV');

			this.css(a,{"width":"95%","display":"inline-block","verticalAlign":"top","textAlign":"left","cursor":"pointer"});
			if(r){
				var i=this.c('IMG');
				i.src=r.av;
				this.css(i,{"borderRadius":"50%","float":"left","width":"36px","height":"36px","margin":"0 1em 0 0"});
				a.appendChild(i);
			}
			
			if(d.k){
				b.appendChild(tag(d.k[0]+'：',{"color":"#666666"}));
			}
			
			if(d.i){//人
				b.appendChild(tag('推荐：',{"color":"#666666"}));
				t=d.title?d.title:d.i;
			}
			
			if(d.p){
				/*for (var _j=0;_j<d.p.length;_j++)
				{*/
					var p=d.p[0];
					if(p.video){
						b.appendChild(tag('视频'));
					}
					var i=this.c('IMG');
					i.src=this.option.mtfcdn+'/'+p.i+'_c_'+(p.video?'':'c_f_w_36_')+'h_36.'+p.e;
					this.css(i,{"float":"right"});
					a.appendChild(i);
					/*if(z!==1){
						break;
					}
				}*/
			}
			if(d.url){
				b.appendChild(tag('网址'));
			}

			if(r){
				var _b=this.c('B');
				_b.innerHTML=r.n;
				a.appendChild(_b);
			}

			b.innerHTML+=t;
			
			var s=b.getElementsByTagName('SPAN');
			if(s){
				for (var _j=0;_j<s.length;_j++)
				{
					var _s=s[_j];
					if(_s.className==='mtfBB m-lang'){
						b.replaceChild(tag(_s.innerHTML),_s);
					}
				}
			}
			
			this.css(b,{"overflow":"hidden","height":"18px"});
			a.appendChild(b);

			var i='';
			if(isNaN(j)){
				i=j;
			}else{
				i=r.i;
			}

			a.setAttribute('href',this.option.mtfp2p+'/'+i);

			a.onclick=function(){
				window.location.href=this.getAttribute('href');
			}

			c.appendChild(a);
			this.css(c,{"margin":"0 0 .5em 0","border":"solid #E9E9E9","borderWidth":"1px 0","background":"white","padding":".5em 0"});
		}
		return c;
	},
	r:function(d){
		var r={},a=[],i;
		if(d.avi){
			a.push(d.avi);
			a.push('c');
			if(d.ace){
				a.push('ace_'+d.ace);
			}
			a.push('c_f');
		}else{
			a.push('201207010000000002_c');
		}
		a.push('w_36_h');
		if(d.avn){
			a.push('36_p_pokemongif,'+d.avn+'.gif');
		}else{
			a.push('36.'+d.ave);
		}
		r.av=this.option.mtfcdn+'/'+a.join('_');
		r.n=d.title?d.title:d.i;
		r.i=d.i;
		return r;
	},
	d:function(_r){
		var p=this.c('DIV'),o=this.o,r;
		p.style.textAlign='center';
		p.className='mtfOutLink';
		for(var i in _r){
			if(i==='0'){
				continue;
			}
			var d=_r[i],i=parseInt(i);
			for(var j in d){
				var d1=d[j];
				for(var k in d1){
					var d2=d1[k];
					if(k==='list'){
						j=this.h[i-1]?this.h[i-1]:j;
						p.appendChild(this.l(d2,j,this.r(d2.pi),i));
					}else if(k==='people'){
						r=this.r(d2);
					}else if(k==='sub'){
						j=this.h[i-2]?this.h[i-2]:j;
						for(var l in d2){
							var d3=d2[l];
							for(var m in d3){
								p.appendChild(this.l(d3[m],j,r,i));
							}
						}
					}	
				}
			}
		}
		if(o){
			o.parentNode.insertBefore(p,o);
		}
		this.p=p;
		if(this.s[0]>0){
			setInterval(mtfOutLink.sc,this.s[0]);
		}
		mtfOutLink.f();
	},
	sc:function(){
		var p=mtfOutLink.p;
		for (var i=0;i<mtfOutLink.s[1];i++)
		{
			p.appendChild(p.firstChild);
		}
	}
};