<?php 
$_url=urldecode($_SERVER["QUERY_STRING"]);
if(stripos($_url,'t.cn')!==FALSE){
	$_t=get_redirect_url($_url);
}elseif(stripos($_url,'dwz.cn')!==FALSE){//国外需使用ssl
	$_url=str_replace('http://','https://',$_url);
	$_t=get_redirect_url($_url);
}else{
	$_t=$_url;	
}
if($_t){
	if(stripos($_t,'battleofballs.com')!==FALSE){
		$_a=parse_url($_t);
		$_q=$_a['query'];
		parse_str($_q,$_a);
		$_b=$_a['b'];
		if($_b){
			parse_str(base64_decode($_b),$_a);	
			$_i=$_a['Icon'];
			$_p=$_a['PassIcon'];
			if($_p){
				header('Location: http://file.battleofballs.com/'.$_p);	
			}else{
				header('Location: http://www.battleofballs.com/share/images/Icon_'.$_i.'.png');		
			}
		}else{
			mc_404();
		}
	}elseif(stripos($_t,'hddzz.leshu.com')!==FALSE){
		$_a=parse_url($_t);
		$_q=$_a['query'];
		parse_str($_q,$_a);
		$_p=$_a['head'];
		
		header('Location: '.$_p);	
		//http://paymr.hddzz.leshu.com:9001/share_2.jsp?number=00KBMM00&head=http://image.hddzz.leshu.com/headpic/phone/2002.jpg&nick_name=%e8%bf%85%e6%8d%b7%e7%9a%84%e6%b0%b4%e6%bf%91%e4%bc%8a%e7%bb%87&level_ico=img/rank_1001.png&level=%e9%9d%92%e9%93%9c&cid=nextjoy01&version=6.0
	}elseif(stripos($_t,'p2p.')!==FALSE){
		$_a=parse_url($_t);
		$_q=$_a['query'];
		parse_str($_q,$_a);
		$_q=$_a['q'];
		if($_q){
			parse_str(base64_decode($_q),$_a);
			header('Location: http:'.$_a['a']);	
		}
	}else{
		mc_404();
	}
}else{
	mc_404();
}
function mc_404(){
	header("HTTP/1.1 404 Not Found");  
	header("Status: 404 Not Found");  
	exit;  
}
function get_redirect_url($url,$k=0) {
   $ch = curl_init($url);
   curl_setopt($ch, CURLOPT_HEADER, TRUE); //输出header
   curl_setopt($ch, CURLOPT_NOBODY, FALSE);//不输出body
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);// 禁止自动输出内容
   curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);// 自动跳转 
   curl_setopt($ch, CURLOPT_MAXREDIRS,2);
   curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);// 跳转时自动设置来源地址
   curl_setopt($ch, CURLOPT_URL, $url);// 设置URL
   curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
   curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
   curl_setopt($ch, CURLOPT_REFERER, '');//设置来源
   $response = curl_exec($ch);
   preg_match_all('/^Location:(.*)$/mi', $response, $matches);
   curl_close($ch);
   if(@trim($matches[1][0])===$url && $k<2){//尝试2次，直至获取真实地址
	   $k++;
	   sleep(1);
	   return get_redirect_url($url, $k);  
   }
   return !empty($matches[1]) ? trim($matches[1][0]) : '';
}
function curl($_u,$_t){
	$_ch=curl_init();
	curl_setopt($_ch, CURLOPT_URL, $_u);
	curl_setopt($_ch, CURLOPT_NOBODY, FALSE);
	curl_setopt($_ch, CURLOPT_RETURNTRANSFER, TRUE);// 禁止自动输出内容
	curl_setopt($_ch, CURLOPT_TIMEOUT, $_t);
	$_h=curl_exec($_ch);
	curl_close($_ch);
	return $_h;
}
?>