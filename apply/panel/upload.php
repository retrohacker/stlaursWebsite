<?php
	$resume=$_POST['email'].".".strtolower(pathinfo($_FILES["resume"]["name"], PATHINFO_EXTENSION));
	move_uploaded_file($_FILES["resume"]["tmp_name"], "resumes/".$resume);
?>