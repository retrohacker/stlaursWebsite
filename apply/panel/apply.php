<?php

include("/home/content/72/9635172/html/includes/database.php");

	$fName=$db->real_escape_string(htmlspecialchars($_POST['fName']));
	$lName=$db->real_escape_string(htmlspecialchars($_POST['lName']));
	$email=$db->real_escape_string(htmlspecialchars($_POST['email']));
	$resume=$email.".".strtolower(pathinfo($_POST['resume'], PATHINFO_EXTENSION));
	$university=$db->real_escape_string(htmlspecialchars($_POST['university']));
	$question1=$db->real_escape_string(htmlspecialchars($_POST['question1']));
	$question2=$db->real_escape_string(htmlspecialchars($_POST['question2']));
	
	//need to check if $question1>300 words
	if($fName=="" || $lName=="" || $email=="" || $resume=="" || $university=="" || $question1=="" || $question2=""){
		echo false;
		exit;
	}
	
	$headers="Content-Type: text/html;charset=UTF-8"."\r\n";
	$headers.="From: ".$fName.' '.$lName." <".$email.">";

	$code=hash("sha512",rand(0,99999999));
	$html='<html><body>'.$fName.' '.$lName.' is applying to be a panel member for '.$university.'<p><a href="http://www.stlaurs.com/apply/panel/resumes/'.$resume.'">'.$fName."'s Resume</a></p><p>Previous experience(s) at StLaurs<br />".$question1.'</p><p>The purpose of StLaurs/This event should accomplish<br />'.$question2.'</p><p><a href="http://www.stlaurs.com/apply/panel/yes.php?e='.$email.'&c='.$code.'">To <b>approve</b> this person as a panel member: click this.</a></p>'.'</p><p><a href="http://www.stlaurs.com/apply/panel/no.php?e='.$email.'&c='.$code.'">To <b>deny</b> this person as a panel member: click this.</a></p></body></html>';

	mail("jonpicchietti@gmail.com","STLAURS Panel Application",$html,$headers);
	
	$success=$db->query("INSERT INTO panel_activation (email,code) VALUES('$email','$code')");

	$success=$db->query("INSERT INTO panel (member,fName,lName,email,resume,university) VALUES('0','$fName','$lName','$email','$resume','$university')");
	$db->close();
	echo $success;
	
?>
