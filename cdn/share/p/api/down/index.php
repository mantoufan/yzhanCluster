<?php
if(@$_GET['u']){
	set_time_limit(10);
	down($_GET['u']);
}
function down($file){
	header("Content-Type: application/force-download");
	header('Content-Disposition: attachment; filename="'.basename($file).'"');
	header('Content-Transfer-Encoding: binary');
	readfile($file); // push it out
	exit();
}
?>