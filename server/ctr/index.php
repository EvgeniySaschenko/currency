<?
	header('Access-Control-Allow-Origin: *');
	session_start();
	session_set_cookie_params(108000);
	include '_'.$_GET['ctr'].'.php';
?>