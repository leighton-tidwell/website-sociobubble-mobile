<?php
$mysql_host = "localhost";
$mysql_database = "";
$mysql_user = "";
$mysql_password = "";
	
//establish Mysql Connection
mysql_connect($mysql_host, $mysql_user, $mysql_password);
mysql_select_db($mysql_database);
ini_set('session.cookie_domain', '.sociobubble.com' );

session_name("SocioBubble");
?>
