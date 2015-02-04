<?php
require_once("db.inc");
if ($_SERVER['REQUEST_METHOD']==="GET")
{
	$arr=iterator_to_array($db->contacts->find());
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