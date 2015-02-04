<?php
require_once("db.inc");
if ($_SERVER['REQUEST_METHOD']==="GET")
{
	$arr=iterator_to_array($db->contacts->find());
	echo json_encode($arr);
}
?>