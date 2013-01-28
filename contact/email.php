<?php
$first=htmlspecialchars(strip_tags($_POST["first"]));
$last=htmlspecialchars(strip_tags($_POST["last"]));
$name=$first." ".$last;
$email=htmlspecialchars(strip_tags($_POST["email"]));
$message=htmlspecialchars(strip_tags($_POST["message"]));

if($first=="" || $last=="" || $email=="" || $message=="") exit;

$headers="Content-Type: text/html;charset=UTF-8"."\r\n";
$headers.="From: ".$name." <".$email.">";

$html="<html><body>".$name." says<br /><blockquote>".$message."</blockquote></body></html>";

mail("mlkelly@wustl.edu","STLAURS Feedback",$html,$headers);

?>