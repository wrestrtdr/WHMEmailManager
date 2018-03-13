<?php

	/* =====================================
		  (i)  WHM User Access Info
	===================================== */

	define('WHM_user', '___change_me___');
	define('WHM_pass', '___change_me___');
	define('WHM_svIP', '___change_me___');

	## cP-API Library
	require('inc/php/api/cpaneluapi.php');

	## Get Content from AJAX
	$json = json_decode(file_get_contents('php://input'));
?>