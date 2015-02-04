<?php
require_once("db.inc");
if ($_SERVER['REQUEST_METHOD']==="GET")
{
	$arr = array();
	$res = $db->contacts->find();
	foreach ($res as $k=>$v)
	{		
		array_push($arr,$v);
	}
	echo json_encode($arr);
}
elseif ($_SERVER['REQUEST_METHOD']==="POST") 
{
	$body=file_get_contents('php://input');
	$arr=json_decode($body);
	$db->contacts->insert($arr);
	print json_encode($arr);
}
?>