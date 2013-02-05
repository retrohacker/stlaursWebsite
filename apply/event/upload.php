<?php
	$picture=$_POST['email'].".".strtolower(pathinfo($_FILES["picture"]["name"], PATHINFO_EXTENSION));
	move_uploaded_file($_FILES["picture"]["tmp_name"], "visage/".$picture);
	
	$abstract=$_POST['email'].".".strtolower(pathinfo($_FILES["abstract"]["name"], PATHINFO_EXTENSION));
	move_uploaded_file($_FILES["abstract"]["tmp_name"], "abstract/".$abstract);
?>