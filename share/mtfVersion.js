var mtfVersion={
	option:{
		"www.dm126.com":1,
		"www.zzyju.com":1,
		"www.qcygf.com":1,
		"3dm.gs":1,
		"p.yot.pw":1
	}
};
if('undefined' !== typeof mtfVersion.option[window.location.host]){
	if(mtfFrame.version()<mtfVersion.option[window.location.host]){
		//询问是否刷新
		if (confirm('更新吗? Update?')){
			 top.location.reload(true);
		}
	}
}